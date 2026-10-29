#!/usr/bin/env node
/*
  Renders a creative template to PNG.

  Setup once:   npm install playwright && npx playwright install chromium

  One image:    node content/creatives/render.js <template> <content.json> [--out file.png] [--scale 2]
                node content/creatives/render.js social-square '{"headline":"...","tone":"navy"}'
  A batch:      node content/creatives/render.js --batch content/creatives/examples/examples.json

  <template> is a file name in content/creatives/templates/ without .html (see content/creatives/templates.json).
  Content is JSON with the template's fields, e.g. headline, eyebrow, text, cta, tone, photo.
  Images (photo, author_photo, people[].photo) are paths relative to the repo root or URLs.
  --scale 2 exports at double resolution (sharper on retina screens); ad sizes should stay at 1.
*/
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..", ".."); // image paths in content JSON are relative to the repository root
const TEMPLATES = path.join(__dirname, "templates");

function resolveImages(data) {
  const fix = (v) => (v && v !== "placeholder" && !/^(https?:|data:|file:)/.test(v) ? pathToFileURL(path.resolve(ROOT, v)).href : v);
  const out = { ...data };
  for (const k of ["photo", "author_photo"]) if (out[k]) out[k] = fix(out[k]);
  if (Array.isArray(out.people)) out.people = out.people.map((p) => ({ ...p, photo: fix(p.photo) }));
  return out;
}

async function renderOne(browser, template, data, out, scale) {
  const file = path.join(TEMPLATES, template + ".html");
  if (!fs.existsSync(file)) throw new Error("No template named " + template + ". See content/creatives/templates.json.");
  const page = await browser.newPage({ deviceScaleFactor: scale || 1, viewport: { width: 2000, height: 2200 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("requestfailed", (r) => errors.push("missing file: " + r.url()));
  await page.goto(pathToFileURL(file).href);
  await page.evaluate((d) => window.fillCreative(d), resolveImages(data || {}));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);
  const overflow = await page.evaluate(() => {
    const out = [];
    const inner = document.querySelector(".cr__inner");
    if (inner && (inner.scrollHeight > inner.clientHeight + 1 || inner.scrollWidth > inner.clientWidth + 1)) out.push("content overflows the safe area");
    document.querySelectorAll("[data-max-lines]").forEach((el) => {
      if (!el.textContent.trim()) return;
      const lh = parseFloat(getComputedStyle(el).lineHeight);
      const lines = Math.round(el.getBoundingClientRect().height / lh);
      const max = Number(el.dataset.maxLines);
      if (lines > max) out.push(el.dataset.field + " runs to " + lines + " lines (max " + max + ")");
    });
    return out.length ? out.join(", ") : false;
  });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await page.locator(".cr").screenshot({ path: out });
  await page.close();
  return { out, errors, overflow };
}

(async () => {
  const args = process.argv.slice(2);
  const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args.splice(i, 2)[1] : undefined; };
  const batch = opt("--batch");
  const outArg = opt("--out");
  const scale = Number(opt("--scale") || 1);
  const browser = await chromium.launch();
  let jobs;
  if (batch) {
    const list = JSON.parse(fs.readFileSync(batch, "utf8"));
    jobs = list.map((j) => ({ template: j.template, data: j.data, out: path.resolve(path.dirname(batch), j.out), scale: j.scale || scale }));
  } else {
    const [template, content] = args;
    if (!template) { console.log(fs.readFileSync(__filename, "utf8").split("*/")[0]); process.exit(1); }
    let data = {};
    if (content) data = fs.existsSync(content) ? JSON.parse(fs.readFileSync(content, "utf8")) : JSON.parse(content);
    jobs = [{ template, data, out: path.resolve(outArg || template + ".png"), scale }];
  }
  let problems = 0;
  for (const j of jobs) {
    const r = await renderOne(browser, j.template, j.data, j.out, j.scale);
    const notes = [];
    if (r.overflow) notes.push("TEXT TOO LONG: " + r.overflow + ". Shorten the copy");
    if (r.errors.length) notes.push(r.errors.join("; "));
    if (notes.length) problems++;
    console.log((notes.length ? "WARN " : "ok   ") + path.relative(process.cwd(), r.out) + (notes.length ? "  " + notes.join(" | ") : ""));
  }
  await browser.close();
  process.exit(problems ? 2 : 0);
})().catch((e) => { console.error(e.message); process.exit(1); });
