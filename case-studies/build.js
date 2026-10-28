#!/usr/bin/env node
/*
  Checks a case study against the ruleset and builds its outputs.

  node case-studies/build.js <content.json> [--out <dir>] [--shot]

  Writes next to content.json (or into --out):
    case-study.md   plain text for client sign-off
    page.html       the page, built from templates/case-study-page.html and the design system
    report.md       statistics carried over, facts left out, questions for Delivery, build results
    shot-1440.png, shot-375.png   with --shot (needs Playwright, as in creatives/)

  Exit code 1 if there are errors. Warnings must be fixed or explained in the report.
  No dependencies beyond Node 18 (Playwright only for --shot).
*/
const fs = require("fs");
const path = require("path");

const HERE = __dirname;
const DS = path.resolve(HERE, "..", "design-system");

const args = process.argv.slice(2);
const input = args.find((a) => !a.startsWith("--"));
if (!input) { console.error("Usage: node case-studies/build.js <content.json> [--out <dir>] [--shot]"); process.exit(2); }
const outIdx = args.indexOf("--out");
const outDir = path.resolve(outIdx >= 0 ? args[outIdx + 1] : path.dirname(input));
const shot = args.includes("--shot");

const d = JSON.parse(fs.readFileSync(input, "utf8"));
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

// ---------- helpers ----------
const words = (s) => (s || "").trim().split(/\s+/).filter(Boolean).length;
const join = (a) => (Array.isArray(a) ? a.join(" ") : a || "");
const sentences = (s) => (s || "").trim().split(/(?<=[.!?])\s+(?=[A-Z])/).filter(Boolean).length;
function range(name, s, min, max, level) {
  const n = words(s);
  if (n < min || n > max) (level === "error" ? err : warn)(`${name}: ${n} words (target ${min} to ${max})`);
  return n;
}
// figures like 60%, €120K, 1M+, 10+, 3×, 5h, 23 min. Ignores numbers inside words (COVID-19).
const FIG = /(?<![\w-])[€$£]?\d[\d.,]*(?:\s?(?:%|×|x\b|K\b|M\b|k\b|h\b))?\+?(?![\w-])/g;
const figures = (s) => (String(s || "").match(FIG) || []).map((f) => f.trim());

// ---------- required fields ----------
const req = ["slug", "source_url", "client", "category", "title", "facts", "problem_hook", "impact_statement", "about", "challenge", "project_description", "approach", "results", "cta", "report"];
for (const k of req) if (d[k] === undefined || d[k] === null || d[k] === "") err(`Missing field: ${k}`);
if (errors.length) { console.log(`${input}: ${errors.length} errors`); errors.forEach((e) => console.log("  ERROR " + e)); process.exit(1); }

// ---------- every text in the case study ----------
const texts = {
  title: d.title,
  problem_hook: d.problem_hook,
  impact_statement: d.impact_statement,
  about: d.about,
  challenge: [join(d.challenge.paragraphs), ...d.challenge.key_challenges.map((k) => k.label + ": " + k.text), d.challenge.stakes].join(" "),
  stats_band: (d.stats_band || []).map((s) => s.value + " " + s.label).join(" "),
  project_description: join(d.project_description),
  approach: join(d.approach),
  results: [d.results.summary, ...d.results.bullets.map((b) => b.bold + " " + b.text)].join(" "),
  quote: d.quote ? d.quote.text : "",
  cta: [d.cta.title, d.cta.text, d.cta.label].join(" "),
};
const copy = Object.entries(texts).filter(([k]) => k !== "quote");

// ---------- hard rules ----------
for (const [k, v] of Object.entries(texts)) {
  if (/[—–]/.test(v)) err(`${k}: contains an em dash or en dash`);
}
const blob = JSON.stringify(d);
if (/\bMUFG\b|Mitsubishi UFJ/i.test(blob)) err("Blocked client: MUFG is mentioned. Stop and mark the case 'blocked' in inventory.json.");
if (/\ballegro\b/i.test(blob)) err("Blocked client: Allegro is mentioned. Stop and mark the case 'blocked' in inventory.json.");

for (const [k, v] of copy) if (/!/.test(v)) warn(`${k}: exclamation mark`);
const FILLER = ["significantly", "greatly", "hugely", "incredibly", "truly", "seamless", "seamlessly", "cutting-edge", "state-of-the-art", "game-changer", "game-changing", "leverage", "empower", "top-notch", "world-class", "awesome", "in about", "roughly", "revolutionis", "revolutioniz"];
for (const [k, v] of copy) for (const f of FILLER) if (new RegExp("\\b" + f, "i").test(v)) warn(`${k}: uses "${f}" (rules/03-writing-register.md)`);
for (const [k, v] of copy) if (/\b(organiz|optimiz|prioritiz|centraliz|standardiz|utiliz|minimiz|maximiz)/i.test(v)) warn(`${k}: American spelling (use British English)`);

// ---------- format ----------
range("Title", d.title, 10, 19, "error");
if (/\bThe Codest\b/i.test(d.title)) err("Title: The Codest must not be named in the title");
if (d.client.named && d.client.name && !d.title.includes(d.client.name)) warn("Title: does not start with or include the client's name");
range("Problem hook", d.problem_hook, 20, 35);
range("Impact statement", d.impact_statement, 20, 35);
if (sentences(d.problem_hook) !== 1) err("Problem hook: must be one sentence");
if (sentences(d.impact_statement) !== 1) err("Impact statement: must be one sentence");
if (!/\bThe Codest\b/.test(d.impact_statement)) warn("Impact statement: should name The Codest in the third person");
range("About", d.about, 40, 65);
if (d.client.named && !d.client.name) err("client.named is true but client.name is empty");
for (const f of ["industry", "headquarters", "tech_stack"]) if (!d.facts[f]) err(`Stats figure: missing ${f}`);
if (d.facts.headquarters && !d.facts.headquarters.includes(",")) warn("Stats figure: headquarters should be 'City, Country'");
range("Challenge", texts.challenge, 150, 220);
const kc = d.challenge.key_challenges.length;
if (kc < 3 || kc > 4) err(`Challenge: ${kc} key challenges (must be 3 or 4)`);
const sb = (d.stats_band || []).length;
if (sb === 1 || sb > 4) err(`Stats band: ${sb} figures (must be 0, or 2 to 4)`);
range("Project description", texts.project_description, 100, 150);
range("Approach", texts.approach, 100, 160);
range("Results", texts.results, 60, 110);
range("Results summary", d.results.summary, 15, 25);
const rb = d.results.bullets.length;
if (rb < 3 || rb > 5) err(`Results: ${rb} bullets (must be 3 to 5)`);

// ---------- statistics ----------
const shown = texts.results + " " + texts.stats_band;
for (const s of d.report.source_statistics || []) {
  if (!shown.includes(s)) err(`Statistic from the source not shown: "${s}" must appear in Results or the stats band, exactly as written`);
}
for (const k of ["title", "problem_hook", "impact_statement"]) {
  for (const f of figures(texts[k])) if (!texts.results.includes(f)) err(`${k}: the figure "${f}" must also appear in Results`);
}
const unsourced = figures(texts.results + " " + texts.stats_band).filter((f) => !(d.report.source_statistics || []).some((s) => s.includes(f) || f.includes(s)));
if (unsourced.length) warn(`Figures in Results or the stats band not listed in report.source_statistics: ${[...new Set(unsourced)].join(", ")}. Add them if they are on the source; remove them if not.`);
if ((d.report.source_statistics || []).length && !(d.report.questions_for_delivery || []).some((q) => /baseline|source/i.test(q))) warn("Report: add a question for Delivery to confirm the baseline and source of each statistic");

// ---------- quote ----------
if (d.quote) {
  if (!d.quote.name || !d.quote.role) err("Client's opinion: quote needs a name and a role");
  if (d.report.source_quote == null) err("report.source_quote is empty: paste the quote exactly as on the source");
  else if (d.quote.text.trim() !== d.report.source_quote.trim()) err("Client's opinion: quote does not match the source exactly");
} else if (d.report.source_quote) err("The source has a quote but quote is null");

finish();

// ---------- outputs ----------
function md() {
  const about = d.client.named && d.client.name ? "About " + d.client.name : "About the client";
  const L = [];
  L.push(`# ${d.title}`, "", `Industry: ${d.facts.industry} | Headquarters: ${d.facts.headquarters} | Tech stack: ${d.facts.tech_stack}`, "");
  L.push(d.problem_hook, "", `**${d.impact_statement}**`, "");
  L.push(`## ${about}`, "", d.about, "");
  L.push("## Challenge", "", ...d.challenge.paragraphs.flatMap((p) => [p, ""]), "**Key challenges:**", "");
  for (const k of d.challenge.key_challenges) L.push(`- **${k.label}:** ${k.text}`);
  L.push("", d.challenge.stakes, "");
  if (sb) L.push(`**Stats band:** ${d.stats_band.map((s) => s.value + " " + s.label).join(" · ")}`, "");
  L.push("## Project description", "", ...d.project_description.flatMap((p) => [p, ""]));
  L.push("## Approach", "", ...d.approach.flatMap((p) => [p, ""]));
  L.push("## Results", "", d.results.summary, "");
  for (const b of d.results.bullets) L.push(`- **${b.bold}** ${b.text}`);
  L.push("");
  if (d.quote) L.push("## Client's opinion", "", `> ${d.quote.text}`, "", [d.quote.name, d.quote.role, d.quote.company].filter(Boolean).join(", "), "");
  return L.join("\n");
}

function page() {
  const rel = path.relative(outDir, DS).split(path.sep).join("/") + "/";
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const data = JSON.stringify(d).replace(/</g, "\\u003c");
  return fs.readFileSync(path.join(HERE, "templates", "case-study-page.html"), "utf8")
    .split("__DS__").join(rel)
    .replace("__PAGE_TITLE__", esc((d.client.name || "Case study") + " case study · The Codest"))
    .replace("__PAGE_DESCRIPTION__", esc(d.problem_hook))
    .replace("/*__CASE_DATA__*/", () => data);
}

function report() {
  const list = (a) => (a && a.length ? a.map((x) => `- ${x}`).join("\n") : "- None");
  const counts = [
    ["Title", words(d.title)], ["Problem hook", words(d.problem_hook)], ["Impact statement", words(d.impact_statement)],
    ["About", words(d.about)], ["Challenge", words(texts.challenge)], ["Project description", words(texts.project_description)],
    ["Approach", words(texts.approach)], ["Results", words(texts.results)],
  ];
  return [
    `# Conversion report: ${d.client.name || d.slug}`, "",
    `Source: ${d.source_url}`, "",
    "## Statistics carried over", "", list(d.report.source_statistics), "",
    "## Facts left out", "", list(d.report.facts_left_out), "",
    "## Missing from the source", "", list(d.report.facts_missing), "",
    "## Questions for Delivery", "", list(d.report.questions_for_delivery), "",
    "## Build", "", `- Errors: ${errors.length}`, ...errors.map((e) => `  - ${e}`), `- Warnings: ${warnings.length}`, ...warnings.map((w) => `  - ${w}`), "",
    "## Word counts", "", "| Section | Words |", "| --- | --- |", ...counts.map(([k, n]) => `| ${k} | ${n} |`), "",
  ].join("\n");
}

async function screenshots(file) {
  let chromium;
  try { ({ chromium } = require("playwright")); } catch (e) { console.log("  --shot skipped: Playwright is not installed (npm install playwright)"); return; }
  const browser = await chromium.launch();
  for (const w of [1440, 375]) {
    const p = await browser.newPage({ viewport: { width: w, height: 900 } });
    const errs = [];
    p.on("pageerror", (e) => errs.push(e.message));
    p.on("requestfailed", (r) => errs.push("missing file: " + r.url()));
    await p.goto("file://" + file);
    await p.waitForTimeout(800);
    await p.screenshot({ path: path.join(outDir, `shot-${w}.png`), fullPage: true });
    if (errs.length) console.log(`  page errors at ${w}px: ${errs.join("; ")}`);
    await p.close();
  }
  await browser.close();
  console.log("  shot-1440.png, shot-375.png");
}

function finish() {
  console.log(`${d.slug || input}: ${errors.length} errors, ${warnings.length} warnings`);
  for (const e of errors) console.log("  ERROR " + e);
  for (const w of warnings) console.log("  WARN  " + w);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "report.md"), report());
  if (errors.length) { console.log("  Fix the errors, then build again. Only report.md was written."); process.exit(1); }
  fs.writeFileSync(path.join(outDir, "case-study.md"), md());
  const file = path.join(outDir, "page.html");
  fs.writeFileSync(file, page());
  console.log("  " + path.relative(process.cwd(), outDir) + "/{case-study.md, page.html, report.md}");
  if (shot) screenshots(file).catch((e) => { console.error(e); process.exit(1); });
}
