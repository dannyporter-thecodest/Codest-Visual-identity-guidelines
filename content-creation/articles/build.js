#!/usr/bin/env node
/*
  Checks an answer article against the ruleset (rules/01 to 08) and builds its outputs.

  node content-creation/articles/build.js <content.json> [--out <dir>] [--shot]

  Writes next to content.json (or into --out):
    article.md      plain text for review (with the SEO fields on top)
    page.html       the page: the article as plain HTML, page chrome from the design system
    report.md       publication status, SEO and AEO/GEO checks, sources, claims, questions, build results
    shot-1440.png, shot-375.png   with --shot (needs Playwright)

  Exit code 1 if there are errors. Warnings must be fixed or explained in the report.
  No dependencies beyond Node 18 (Playwright only for --shot).
*/
const fs = require("fs");
const path = require("path");

const HERE = __dirname;
// The design system sits in visual-identity-and-design-system/ in both the brand repository and Cody's repository.
const DS = [path.resolve(HERE, "..", "..", "visual-identity-and-design-system", "design-system"), path.resolve(HERE, "..", "design-system")]
  .find((p) => fs.existsSync(path.join(p, "components", "bundle.js")));
if (!DS) { console.error("Design system not found in visual-identity-and-design-system/design-system"); process.exit(2); }

const args = process.argv.slice(2);
const input = args.find((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--out");
if (!input) { console.error("Usage: node content-creation/articles/build.js <content.json> [--out <dir>] [--shot]"); process.exit(2); }
const outIdx = args.indexOf("--out");
const outDir = path.resolve(outIdx >= 0 ? args[outIdx + 1] : path.dirname(input));
const inDir = path.dirname(path.resolve(input));
const shot = args.includes("--shot");

const d = JSON.parse(fs.readFileSync(input, "utf8"));
const reg = JSON.parse(fs.readFileSync(path.join(HERE, "topics.json"), "utf8"));
const site = reg.site;
const errors = [];
const warnings = [];
const blockers = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);
const block = (m) => blockers.push(m);

// ---------- helpers ----------
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const plain = (s) => String(s || "").replace(LINK, "$1").replace(/\*\*/g, "");
const words = (s) => plain(s).trim().split(/\s+/).filter(Boolean).length;
const sentencesOf = (s) => plain(s).trim().split(/(?<=[.!?])\s+(?=[A-Z0-9"])/).filter(Boolean);
const firstSentence = (s) => sentencesOf(s)[0] || "";
const linksOf = (s) => [...String(s || "").matchAll(LINK)].map((m) => ({ text: m[1], href: m[2] }));
const STOP = new Set(["a", "an", "the", "of", "to", "in", "on", "for", "with", "and", "or", "your", "you", "is", "are", "do", "does", "should", "how", "what", "when", "why", "where", "which", "can", "it", "its", "be", "that", "this", "vs", "versus", "one", "an", "from", "by", "at", "as", "not", "and"]);
const norm = (s) => plain(s).toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/-/g, " ");
const mainWords = (s) => norm(s).split(/\s+/).filter((w) => w && !STOP.has(w));
const stem = (w) => w.replace(/(ing|ed|es|s)$/, "");
const hasAll = (text, query) => { const t = new Set(norm(text).split(/\s+/).map(stem)); return mainWords(query).every((w) => t.has(stem(w))); };
function range(name, s, min, max, level) {
  const n = typeof s === "number" ? s : words(s);
  if (n < min || n > max) (level === "error" ? err : warn)(`${name}: ${n} words (target ${min} to ${max})`);
  return n;
}
const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s || "") && !isNaN(Date.parse(s));
const addMonths = (s, m) => { const x = new Date(s + "T00:00:00Z"); x.setUTCMonth(x.getUTCMonth() + m); return x.toISOString().slice(0, 10); };
const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
const isInternal = (u) => u.startsWith("/") || host(u) === host(site.origin);
const onDomain = (u, list) => list.some((dm) => host(u) === dm || host(u).endsWith("." + dm));

// ---------- required fields ----------
const req = ["slug", "category", "topic_area", "title", "lead", "tldr", "published", "updated", "review_by", "seo", "sections", "key_insights", "information_gain", "related_case", "cta", "sources", "meta", "report"];
for (const k of req) if (d[k] === undefined || d[k] === null || d[k] === "") err(`Missing field: ${k}`);
if (errors.length) return finishEarly();
d.related_questions = d.related_questions || [];
d.report.claim_ids = d.report.claim_ids || {};
d.report.open_questions = d.report.open_questions || [];
d.report.self_check = d.report.self_check || {};

// ---------- every text in the article ----------
const S = d.sections;
const sectionText = (s) => [s.answer, ...(s.paragraphs || []), ...(s.subsections || []).flatMap((x) => [x.heading, ...(x.paragraphs || [])]),
  ...(s.bullets || []).map((b) => (b.bold ? b.bold + " " : "") + b.text), s.table ? [s.table.caption, ...s.table.columns, ...s.table.rows.flat()].join(" ") : "", s.takeaway || ""].join(" ");
const texts = {
  title: d.title,
  lead: d.lead,
  tldr: d.tldr.join(" "),
  ...Object.fromEntries(S.map((s, i) => [`section ${i + 1}`, s.heading + " " + sectionText(s)])),
  key_insights: d.key_insights.join(" "),
  related_questions: d.related_questions.map((q) => q.question + " " + q.answer).join(" "),
  cta: [d.cta.title, d.cta.text, d.cta.label].join(" "),
};
const bodyWords = words(d.lead) + words(texts.tldr) + S.reduce((n, s) => n + words(s.heading) + words(sectionText(s)), 0) + words("Key insights " + texts.key_insights) + words(texts.related_questions);
const allText = Object.values(texts).join(" ");

// ---------- hard rules (07) ----------
for (const [k, v] of Object.entries(texts)) if (/[\u2014\u2013]/.test(v)) err(`${k}: contains an em dash or en dash`);
const blob = JSON.stringify(Object.assign({}, d, { report: Object.assign({}, d.report, { self_check: null }) })); // the self-check may name blocked clients when confirming they are absent
if (/\bMUFG\b|Mitsubishi UFJ/i.test(blob)) err("Blocked client: MUFG is mentioned. Remove every reference (rules/07-hard-rules.md)");
if (/\ballegro\b/i.test(blob)) err("Blocked client: Allegro is mentioned. Remove every reference (rules/07-hard-rules.md)");
if (/\bGFT\b/.test(allText)) warn("GFT is mentioned. GFT is not a client: check the context (rules/06-sources-and-claims.md)");
const codyBad = [...new Set([...blob].filter((c) => c.charCodeAt(0) > 127 && !/\p{P}/u.test(c)))];
if (codyBad.length) err(`Characters Cody's repository rejects: ${codyBad.map((c) => "U+" + c.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")).join(", ")}. Write EUR/GBP, x for multiplication, plain letters`);
if (/\bUSA?\b|United States|\bU\.S\.|\bAmerican market|\bSOX\b|Sarbanes|\bCCPA\b|\bGLBA\b|FedNow/.test(allText)) err("US market, regulation or data mentioned. The US is not our market (rules/07-hard-rules.md)");
const AVOID = ["top-notch", "top-tier", "world-class", "unparalleled", "best-in-class", "cutting-edge", "state-of-the-art", "game-changing", "game-changer", "revolutionary", "revolutionis", "revolutioniz", "boost", "supercharge", "unlock", "seamless", "effortless", "frictionless", "AI-powered", "AI-driven", "AI-first", "AI-native", "10x", "rockstar", "ninja", "resources", "the best developers", "guaranteed", "risk-free", "premium", "leverage", "empower", "delve", "landscape", "navigate the", "fast-paced", "ever-evolving", "in today's", "significantly", "incredibly", "truly", "senior-only"];
for (const [k, v] of Object.entries(texts)) for (const a of AVOID) if (new RegExp("(^|[^\\w-])" + a.replace(/[-]/g, "\\-"), "i").test(plain(v))) (/^AI-|^10x$|senior-only/i.test(a) ? err : warn)(`${k}: uses "${a}" (messaging-guidelines/04-voice.md)`);
for (const [k, v] of Object.entries(texts)) if (/!/.test(plain(v))) warn(`${k}: exclamation mark`);
for (const [k, v] of Object.entries(texts)) if (/\b(organiz|optimiz|prioritiz|centraliz|standardiz|utiliz|minimiz|maximiz|modeliz|analyz)/i.test(plain(v))) warn(`${k}: American spelling (use British English)`);

// ---------- categories and topics (01) ----------
const CATS = ["buyer-questions", "ai-in-industry"];
const AREAS = { "buyer-questions": ["capacity", "vendor-choice", "delivery-handover", "regulated-finance", "modernisation"], "ai-in-industry": ["ai-in-industry"] };
const INDUSTRIES = ["fintech", "payments", "digital-banking", "marketplaces", "internet", "saas", "all"];
if (!CATS.includes(d.category)) err(`category: "${d.category}" (must be ${CATS.join(" or ")})`);
else if (!AREAS[d.category].includes(d.topic_area)) err(`topic_area: "${d.topic_area}" is not valid for ${d.category} (${AREAS[d.category].join(", ")})`);
if (d.industry && !INDUSTRIES.includes(d.industry)) err(`industry: "${d.industry}" is not an ICP industry (${INDUSTRIES.join(", ")})`);
if (d.category === "ai-in-industry") {
  if (!d.industry) err("industry: required for ai-in-industry articles");
  const li = d.limits_section;
  if (li == null || !S[li]) err("limits_section: ai-in-industry articles need a section saying when AI is the wrong choice. Set limits_section to its index (rules/01-categories-and-topics.md)");
  else if (!/\bnot\b|n't|wrong|avoid|skip|stop|instead/i.test(S[li].heading)) err(`limits_section: the heading "${S[li].heading}" should ask when AI is not the right choice`);
}
const topics = reg.topics.filter((t) => t.status !== "retired");
if (!topics.some((t) => t.slug === d.slug)) warn(`topics.json: add "${d.slug}" to the register`);
const tw = new Set(mainWords(d.title).map(stem));
for (const t of topics) {
  if (t.slug === d.slug) continue;
  const ow = new Set(mainWords(t.title).map(stem));
  const inter = [...tw].filter((w) => ow.has(w)).length;
  const j = inter / new Set([...tw, ...ow]).size;
  if (j >= 0.6) err(`Duplicate topic: the title is too close to "${t.title}" (${t.status}). Update that article instead, or change the question (rules/01-categories-and-topics.md)`);
  else if (j >= 0.45) warn(`Possible duplicate: close to "${t.title}" (${t.status}). Explain the difference in the brief`);
}
const pool = topics.some((t) => t.slug === d.slug) ? topics : [...topics, d];
const share2 = pool.filter((t) => t.category === "ai-in-industry").length / pool.length;
if (share2 > 1 / 3 + 1e-9) warn(`Category balance: ${Math.round(share2 * 100)}% of topics are ai-in-industry (default maximum 33%)`);

// ---------- format (02) ----------
range("Article (lead to related questions)", bodyWords, 900, 1400);
if (bodyWords < 700 || bodyWords > 1800) err(`Article: ${bodyWords} words (hard limits 700 to 1,800)`);
range("Lead answer", d.lead, 40, 70, "error");
const leadS = sentencesOf(d.lead).length;
if (leadS < 2 || leadS > 3) err(`Lead answer: ${leadS} sentences (must be 2 or 3)`);
if (d.tldr.length < 3 || d.tldr.length > 5) err(`TL;DR: ${d.tldr.length} bullets (must be 3 to 5)`);
d.tldr.forEach((b, i) => range(`TL;DR bullet ${i + 1}`, b, 8, 22));
if (S.length < 4 || S.length > 6) err(`Body: ${S.length} sections (must be 4 to 6)`);
const tables = S.filter((s) => s.table).length;
if (tables !== 1) err(`Table: ${tables} tables (exactly 1 required)`);
S.forEach((s, i) => {
  const n = `Section ${i + 1}`;
  if (!s.heading || !s.answer) { err(`${n}: needs heading and answer`); return; }
  if (s.table) {
    const t = s.table;
    if (!t.caption) err(`${n} table: needs a caption`);
    if (t.columns.length < 2 || t.columns.length > 4) err(`${n} table: ${t.columns.length} columns (must be 2 to 4)`);
    if (t.rows.length < 3 || t.rows.length > 6) err(`${n} table: ${t.rows.length} rows (must be 3 to 6)`);
    t.rows.forEach((r, j) => { if (r.length !== t.columns.length) err(`${n} table row ${j + 1}: ${r.length} cells for ${t.columns.length} columns`); });
  }
  if ((s.subsections || []).length > 4) err(`${n}: ${s.subsections.length} H3s (max 4)`);
  if (s.bullets && (s.bullets.length < 3 || s.bullets.length > 6)) err(`${n}: ${s.bullets.length} bullets (must be 3 to 6)`);
  if ((s.paragraphs || []).length > 4) warn(`${n}: ${s.paragraphs.length} detail paragraphs (max 4)`);
  if (s.takeaway) range(`${n} "What this means for you"`, s.takeaway, 10, 30);
});
if (d.key_insights.length < 3 || d.key_insights.length > 5) err(`Key insights: ${d.key_insights.length} bullets (must be 3 to 5)`);
if (d.related_questions.length && (d.related_questions.length < 2 || d.related_questions.length > 4)) err(`Related questions: ${d.related_questions.length} (0, or 2 to 4)`);
d.related_questions.forEach((q, i) => {
  if (!/\?$/.test(q.question.trim())) err(`Related question ${i + 1}: must end with "?"`);
  range(`Related question ${i + 1} answer`, q.answer, 25, 60);
});
range("CTA title", d.cta.title, 3, 10);
range("CTA text", d.cta.text, 10, 30);
// paragraphs and sentences
const paras = [["Lead", d.lead], ...S.flatMap((s, i) => [[`Section ${i + 1} answer`, s.answer], ...(s.paragraphs || []).map((p, j) => [`Section ${i + 1} paragraph ${j + 1}`, p]), ...(s.subsections || []).flatMap((x, k) => (x.paragraphs || []).map((p, j) => [`Section ${i + 1} H3 ${k + 1} paragraph ${j + 1}`, p]))]), ...d.related_questions.map((q, i) => [`Related answer ${i + 1}`, q.answer])];
for (const [k, p] of paras) { const n = words(p); if (n > 80) err(`${k}: ${n} words (max 80, target 60)`); else if (n > 60) warn(`${k}: ${n} words (target 60 or fewer)`); }
const allSent = paras.flatMap(([, p]) => sentencesOf(p));
const avgSent = allSent.reduce((n, s) => n + words(s), 0) / Math.max(allSent.length, 1);
if (avgSent > 22) warn(`Average sentence length: ${avgSent.toFixed(1)} words (target 22 or fewer)`);

// ---------- titles and headings (03) ----------
const title = d.title.trim();
if (!/\?$/.test(title)) err("Title: must be a question ending with ?");
range("Title", title, 7, 14, "error");
if (title.length > 70) err(`Title: ${title.length} characters (max 70)`);
if (!/^(How|What|When|Why|Should|Can|Is|Are|Do|Does|Where|Which|Who)\b/.test(title)) err("Title: must start with How, What, When, Why, Should, Can, Is, Are, Do, Does, Where, Which or Who");
if (/\bThe Codest\b/i.test(title)) err("Title: must not name The Codest");
if (/\b20\d\d\b/.test(title)) warn("Title: contains a year. Keep it only if the answer changes by year");
if (/ultimate guide|you won't believe|the secret|must-know|everything you need/i.test(title)) err("Title: clickbait phrasing");
S.forEach((s, i) => {
  if (!/\?$/.test((s.heading || "").trim())) err(`Section ${i + 1} heading: must be a question ending with ? ("${s.heading}")`);
  range(`Section ${i + 1} heading`, s.heading, 5, 14);
  if (/^key insights$/i.test(s.heading.trim())) err(`Section ${i + 1}: "Key insights" is added by the build; use key_insights`);
});
const hs = S.map((s) => mainWords(s.heading).map(stem).sort().join(" "));
if (new Set(hs).size !== hs.length) err("Two H2 headings ask the same question");
const BAD_OPEN = /^(in today's|in today\u2019s|when it comes to|it depends|let's|let us|before we|there are many|in this article|as we all know|it is important to|it's important to|have you ever|imagine|nowadays|in the world of|in recent years)/i;
if (BAD_OPEN.test(plain(d.lead).trim())) err("Lead answer: opens with scene-setting. Answer the question in the first sentence (rules/03-titles-and-headings.md)");
S.forEach((s, i) => {
  const fsent = firstSentence(s.answer);
  if (BAD_OPEN.test(fsent.trim())) err(`Section ${i + 1} answer: opens with scene-setting ("${fsent.slice(0, 40)}..."). Answer the heading in the first sentence`);
  if (/^(this|these|those|that|as mentioned|as noted|as discussed|as we saw|as above|above)\b/i.test(fsent.trim())) err(`Section ${i + 1} answer: the first sentence points back to an earlier section ("${fsent.split(" ").slice(0, 3).join(" ")}"). It must make sense on its own (rules/05-aeo-geo.md A3)`);
  else if (/^(it|they)\b/i.test(fsent.trim())) warn(`Section ${i + 1} answer: starts with "${fsent.split(" ")[0]}". Name the subject so the answer stands alone`);
  range(`Section ${i + 1} answer paragraph`, s.answer, 20, 45, "error");
});

// ---------- SEO (04) ----------
const seo = d.seo;
for (const k of ["primary_query", "secondary_queries", "query_source", "meta_title", "meta_description"]) if (!seo[k]) err(`seo.${k}: missing`);
const pq = seo.primary_query || "";
const pqWords = words(pq);
if (pqWords < 2 || pqWords > 6) err(`seo.primary_query: ${pqWords} words (must be 2 to 6)`);
if (!hasAll(d.title, pq)) err(`Title: does not contain the primary query "${pq}" (all its main words)`);
if (!hasAll(seo.meta_title || "", pq)) err(`seo.meta_title: does not contain the primary query "${pq}"`);
if (!hasAll(d.lead, pq)) err(`Lead answer: does not contain the primary query "${pq}"`);
if (!S.some((s) => hasAll(s.heading, pq))) err(`No H2 heading contains the primary query "${pq}"`);
const pqMain = mainWords(pq);
const slugWords = d.slug.split("-");
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(d.slug)) err(`slug: "${d.slug}" (lowercase words joined by hyphens)`);
if (slugWords.length < 3 || slugWords.length > 6) err(`slug: ${slugWords.length} words (must be 3 to 6)`);
if (/\b20\d\d\b/.test(d.slug)) err("slug: no dates");
if (/^(the|a|an)-/.test(d.slug)) warn("slug: starts with a stop word");
const missingSlug = pqMain.filter((w) => !slugWords.map(stem).includes(stem(w)));
if (missingSlug.length === pqMain.length) err(`slug: contains none of the primary query's main words (${pqMain.join(", ")})`);
else if (missingSlug.length) warn(`slug: missing primary query words: ${missingSlug.join(", ")}`);
const sq = seo.secondary_queries || [];
if (sq.length < 2 || sq.length > 5) err(`seo.secondary_queries: ${sq.length} (must be 2 to 5)`);
for (const q of sq) if (!hasAll(allText, q)) warn(`Secondary query "${q}" does not appear in the article (all its main words)`);
if (!S.some((s) => sq.some((q) => hasAll(s.heading, q)))) warn("No H2 heading uses a secondary query");
if (!["sales-call", "search-console", "keyword-tool", "topic-list"].includes(seo.query_source)) err(`seo.query_source: "${seo.query_source}" (sales-call, search-console, keyword-tool or topic-list)`);
const mt = (seo.meta_title || "").length;
if (mt < 50 || mt > 60) err(`seo.meta_title: ${mt} characters (must be 50 to 60)`);
const mdl = (seo.meta_description || "").length;
if (mdl < 120 || mdl > 155) err(`seo.meta_description: ${mdl} characters (must be 120 to 155)`);
if (seo.meta_description && !hasAll(seo.meta_description, pq)) err("seo.meta_description: does not contain the primary query");
if (/^(in this article|learn about|discover|read about)/i.test(seo.meta_description || "")) err("seo.meta_description: start with the answer, not 'In this article' or 'Learn about'");
const occurrences = sentencesOf(allText).filter((s) => hasAll(s, pq)).length;
if (occurrences > Math.ceil(bodyWords / 150)) warn(`Primary query used in ${occurrences} sentences (max about ${Math.ceil(bodyWords / 150)} for ${bodyWords} words). Do not repeat it for search engines`);
const canonical = seo.canonical || site.article_base + d.slug + "/";

// ---------- links ----------
const allLinks = Object.values(texts).flatMap(linksOf);
for (const l of allLinks) {
  if (/^(click here|here|read more|more|this|this (piece|article|post|page|link|report)|link|source)$/i.test(l.text.trim())) err(`Link text "${l.text}": say what the reader gets`);
  if (/^https?:\/\/\S+$/.test(l.text.trim())) err(`Link text is a bare URL: ${l.text}`);
  if (!/^(https:\/\/|\/)/.test(l.href)) err(`Link "${l.href}": use https:// or a site path`);
}
const internal = [...new Set(allLinks.filter((l) => isInternal(l.href)).map((l) => l.href))];
const external = [...new Set(allLinks.filter((l) => !isInternal(l.href)).map((l) => l.href))];
if (internal.length < 3 || internal.length > 6) err(`Internal links: ${internal.length} (must be 3 to 6)`);
const svc = site.service_pages[d.category] || [];
const abs = (u) => (u.startsWith("/") ? site.origin + u : u).replace(/\/?$/, "/");
if (!internal.some((u) => svc.includes(abs(u)))) err(`Internal links: none to the ${d.category} service page (${svc.join(" or ")})`);
if (!d.related_case.href || !abs(d.related_case.href).startsWith(site.case_studies)) err(`related_case.href: must be a live case study under ${site.case_studies}`);
if (!d.related_case.title || !d.related_case.category) err("related_case: needs title and category");
if (!d.cta.href || !isInternal(d.cta.href)) err("cta.href: must be an internal page (usually the contact page)");

// ---------- sources and claims (06) ----------
const ids = new Set();
if (d.sources.length < 2 || d.sources.length > 5) err(`Sources: ${d.sources.length} (must be 2 to 5)`);
const publishers = new Set(d.sources.map((s) => String(s.publisher || "").trim().toLowerCase()).filter(Boolean));
if (publishers.size < 2) err(`Sources: ${publishers.size} publisher(s). At least 2 different publishers are required (rules/05-aeo-geo.md B1)`);
const thisYear = new Date().getUTCFullYear();
for (const s of d.sources) {
  for (const f of ["id", "publisher", "title", "url", "date", "accessed"]) if (!s[f]) err(`Source ${s.id || "?"}: missing ${f}`);
  ids.add(s.id);
  if (s.url && onDomain(s.url, site.competitor_domains)) err(`Source ${s.id}: ${host(s.url)} is another agency, a blog platform or Wikipedia. Use a primary source (rules/06-sources-and-claims.md)`);
  if (s.url && (onDomain(s.url, site.us_domains) || /\.gov$/.test(host(s.url)))) err(`Source ${s.id}: ${host(s.url)} is a US source. The US is not our market`);
  if (s.url && isInternal(s.url)) err(`Source ${s.id}: The Codest's own pages are not outside sources. Use based_on codest:<url> instead`);
  if (s.url && !external.includes(s.url)) err(`Source ${s.id}: not linked in the text. Cite it inline where the fact appears`);
  if (s.accessed && !isDate(s.accessed)) err(`Source ${s.id}: accessed must be YYYY-MM-DD`);
  const years = (String(s.date || "").match(/\b(19|20)\d\d\b/g) || []).map(Number);
  if (!years.length) warn(`Source ${s.id}: date has no year`);
  else if (Math.max(...years) < thisYear - 3 && s.type !== "law") warn(`Source ${s.id}: last dated ${Math.max(...years)}. Use a source from the last 3 years, or set type "law" for a law or standard in force`);
}
for (const u of external) if (!d.sources.some((s) => s.url === u)) err(`External link not listed in sources: ${u}`);
for (const [k, v] of Object.entries(d.report.claim_ids)) if (!/^CLM-\d{3}$/.test(v)) err(`Claims register: "${k}" has an invalid ID "${v}" (expected CLM-000)`);

// ---------- AEO/GEO (05) ----------
const BASED = /^(general|case:[a-z0-9-]+|codest:https:\/\/\S+|src:.+)$/;
let srcSections = 0, ownSections = 0, generalOnly = 0;
const refs = new Set();
S.forEach((s, i) => {
  if (!Array.isArray(s.based_on) || !s.based_on.length) { err(`Section ${i + 1}: based_on is empty (src:<id>, case:<slug>, codest:<url> or general)`); return; }
  const st = sectionText(s);
  for (const b of s.based_on) {
    if (b === "expert") { err(`Section ${i + 1}: based_on "expert" is no longer used. The workflow runs without people: use src:, case: or codest:`); continue; }
    if (!BASED.test(b)) err(`Section ${i + 1}: based_on "${b}" is not valid`);
    if (b.startsWith("src:") && !ids.has(b.slice(4))) err(`Section ${i + 1}: based_on "${b}" has no matching source id`);
    if (b.startsWith("codest:") && !isInternal(b.slice(7))) err(`Section ${i + 1}: based_on "${b}" must be a thecodest.co page`);
    if (b.startsWith("codest:") && !st.includes(b.slice(7))) err(`Section ${i + 1}: link ${b.slice(7)} inline where you use it`);
    if (b.startsWith("case:") && !linksOf(st).some((l) => l.href.includes("/case-studies/"))) err(`Section ${i + 1}: based_on "${b}" but no case study is linked in the section`);
    refs.add(b);
  }
  if (s.based_on.some((b) => b.startsWith("src:"))) srcSections++;
  if (s.based_on.some((b) => b.startsWith("case:") || b.startsWith("codest:"))) ownSections++;
  if (s.based_on.every((b) => b === "general")) generalOnly++;
});
if (srcSections < 3) err(`Evidence: ${srcSections} section(s) rest on an outside source (at least 3 required, rules/05-aeo-geo.md B4)`);
if (ownSections < 1) err("Evidence: no section rests on a live case study or public Codest material (rules/05-aeo-geo.md B3)");
if (generalOnly > 2) err(`Evidence: ${generalOnly} sections rest on general knowledge alone (max 2, rules/05-aeo-geo.md B4)`);
// information gain (B2)
const IG = d.information_gain;
if (!IG) err("information_gain: missing. Say what the article adds that no single source has (rules/05-aeo-geo.md B2)");
else {
  if (!["table", "checklist", "framework", "comparison"].includes(IG.type)) err(`information_gain.type: "${IG.type}" (table, checklist, framework or comparison)`);
  range("information_gain.description", IG.description || "", 15, 60, "error");
  const bf = IG.built_from || [];
  if (bf.length < 2) err(`information_gain.built_from: ${bf.length} item(s). Build it from at least 2 sources or cases`);
  for (const b of bf) {
    if (b.startsWith("src:") ? !ids.has(b.slice(4)) : !refs.has(b)) err(`information_gain.built_from: "${b}" is not a source id or a based_on reference in the article`);
  }
}
// no invented experience (06)
const EXP = /\b(in our experience|our (engineers|teams|developers|clients|customers) (often|usually|always|typically|tend)|we have (found|seen|learned|learnt)|we've (found|seen|learned|learnt)|we (often|usually|typically) see|from what we have seen|time and again we)\b/i;
const expHit = (t) => (plain(t).match(EXP) || [])[0];
S.forEach((s, i) => {
  const hit = expHit(s.heading + " " + sectionText(s));
  if (hit && !s.based_on.some((b) => b.startsWith("case:") || b.startsWith("codest:"))) err(`Section ${i + 1}: "${hit}" claims experience with no public Codest source in the section. Write it as advice (rules/06-sources-and-claims.md)`);
});
for (const k of ["lead", "tldr", "key_insights", "related_questions", "cta"]) { const hit = expHit(texts[k]); if (hit) err(`${k}: "${hit}" claims experience. Write it as advice, or move it into a section with a public Codest source`); }
// byline (B8)
if (!d.author || !d.author.name) d.author = site.default_author || {};
if (!d.author.name || !d.author.role) err("author: needs name and role (or set site.default_author in topics.json)");
for (const p of ["author", "reviewer"]) if (d[p] && d[p].linkedin && !/^https:\/\/(www\.)?linkedin\.com\//.test(d[p].linkedin)) err(`${p}.linkedin: must be a linkedin.com URL`);
const hasReviewer = !!(d.reviewer && d.reviewer.name);

// ---------- dates (05 C) ----------
for (const k of ["published", "updated", "review_by"]) if (!isDate(d[k])) err(`${k}: must be YYYY-MM-DD`);
if (isDate(d.published) && isDate(d.updated) && d.updated < d.published) err("updated: before published");
const months = d.category === "ai-in-industry" || d.topic_area === "regulated-finance" ? 6 : 12;
if (isDate(d.updated) && isDate(d.review_by)) {
  if (d.review_by > addMonths(d.updated, months)) err(`review_by: must be within ${months} months of the last update (by ${addMonths(d.updated, months)})`);
  if (d.review_by <= d.updated) err("review_by: must be after updated");
}

// ---------- metadata block (messaging-guidelines/README.md) ----------
const M = d.meta;
if (!["1", "2", "3", "all"].includes(String(M.audience_group))) err("meta.audience_group: 1, 2, 3 or all");
if (!M.buying_role) err("meta.buying_role: missing");
if (!["signal", "qualified conversation"].includes(M.funnel_stage)) err("meta.funnel_stage: signal or qualified conversation");

// ---------- self-check (08) ----------
const SELF = 14;
const answered = Object.values(d.report.self_check).filter((v) => /^(yes|no|n\/a)\b/i.test(String(v))).length;
if (answered < SELF) block(`Self-check: ${answered} of ${SELF} items answered (rules/08-checks.md)`);
if (Object.values(d.report.self_check).some((v) => /^no\b/i.test(String(v)))) warn("Self-check: at least one item answered 'no'. Fix it or explain it");
if (seo.query_source === "topic-list") warn("seo.query_source is topic-list: search volume has not been checked");

// ---------- outputs ----------
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function inline(s) {
  return esc(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) => `<a href="${u}"${isInternal(u) ? "" : ' rel="noopener" target="_blank"'}>${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}
const anchor = (s) => plain(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").split("-").slice(0, 8).join("-");
const fmtDate = (s) => new Date(s + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const readMin = () => Math.max(1, Math.round(bodyWords / 200));
const INDUSTRY_LABEL = { fintech: "Fintech", payments: "Payments", "digital-banking": "Digital banking", marketplaces: "Marketplaces", internet: "Internet", saas: "SaaS", all: "Industry" };
const AREA_LABEL = { capacity: "Engineering capacity", "vendor-choice": "Choosing a vendor", "delivery-handover": "Delivery", "regulated-finance": "Regulated finance", modernisation: "Modernisation" };
const label = d.category === "ai-in-industry" ? "AI in " + (INDUSTRY_LABEL[d.industry] || "industry").replace(/^AI in Industry$/, "AI") : AREA_LABEL[d.topic_area];
const initials = (n) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

function articleHtml(ds) {
  const I = "    ";
  const L = [];
  const person = (p, pre) => `${I}    <div class="cd-author"><span class="cd-author__img" aria-hidden="true">${esc(initials(p.name))}</span><div><div class="cd-author__name">${pre}${p.linkedin ? `<a href="${esc(p.linkedin)}" rel="noopener" style="color:inherit">${esc(p.name)}</a>` : esc(p.name)}</div><div class="cd-author__role">${esc(p.role)}</div></div></div>`;
  L.push(`  <article class="cd-article-page__body ar-body">`);
  L.push(`${I}<header class="cd-article-head ar-head">`);
  L.push(`${I}  <div class="cd-article-head__meta"><span class="cd-meta"><img src="${ds}assets/icons/calendar.svg" alt=""><time datetime="${d.published}">${fmtDate(d.published)}</time></span><p class="cd-eyebrow cd-eyebrow--purple">${esc(label)}</p><span class="cd-meta"><img src="${ds}assets/icons/time.svg" alt="">${readMin()} min read</span></div>`);
  L.push(`${I}  <h1 class="cd-h2">${esc(d.title)}</h1>`);
  L.push(`${I}  <div class="ar-people">`, person(d.author, ""), ...(hasReviewer ? [person(d.reviewer, "Reviewed by ")] : []), `${I}  </div>`);
  L.push(`${I}  <p class="ar-updated">Last updated <time datetime="${d.updated}">${fmtDate(d.updated)}</time></p>`);
  L.push(`${I}</header>`);
  L.push(`${I}<p class="cd-lead ar-lead">${inline(d.lead)}</p>`);
  L.push(`${I}<section class="ar-tldr" aria-label="TL;DR"><h2>TL;DR</h2><ul class="cd-bullets">${d.tldr.map((b) => `<li>${inline(b)}</li>`).join("")}</ul></section>`);
  for (const s of S) {
    L.push(`${I}<section>`);
    L.push(`${I}  <h2 id="${anchor(s.heading)}">${esc(s.heading)}</h2>`);
    L.push(`${I}  <p class="ar-answer">${inline(s.answer)}</p>`);
    if (s.bullets) L.push(`${I}  <ul class="cd-bullets">${s.bullets.map((b) => `<li>${b.bold ? `<strong>${esc(b.bold)}</strong> ` : ""}${inline(b.text)}</li>`).join("")}</ul>`);
    if (s.table) {
      const t = s.table;
      L.push(`${I}  <div class="ar-table-wrap"><table class="ar-table"><caption>${esc(t.caption)}</caption><thead><tr>${t.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead><tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
    }
    for (const p of s.paragraphs || []) L.push(`${I}  <p>${inline(p)}</p>`);
    for (const x of s.subsections || []) { L.push(`${I}  <h3>${esc(x.heading)}</h3>`); for (const p of x.paragraphs || []) L.push(`${I}  <p>${inline(p)}</p>`); }
    if (s.takeaway) L.push(`${I}  <p class="ar-takeaway"><strong>What this means for you:</strong> ${inline(s.takeaway)}</p>`);
    L.push(`${I}</section>`);
  }
  L.push(`${I}<section>`, `${I}  <h2 id="key-insights">Key insights</h2>`, `${I}  <ul class="cd-bullets">${d.key_insights.map((b) => `<li>${inline(b)}</li>`).join("")}</ul>`, `${I}</section>`);
  if (d.related_questions.length) {
    L.push(`${I}<section>`, `${I}  <h2 id="related-questions">Related questions</h2>`, `${I}  <div class="ar-faq">`);
    for (const q of d.related_questions) L.push(`${I}    <div><h3>${esc(q.question)}</h3><p>${inline(q.answer)}</p></div>`);
    L.push(`${I}  </div>`, `${I}</section>`);
  }
  L.push(`${I}<section class="ar-sources">`, `${I}  <h2 id="sources">Sources</h2>`, `${I}  <ol>${d.sources.map((s) => `<li>${esc(s.publisher)}, <a href="${esc(s.url)}" rel="noopener" target="_blank">${esc(s.title)}</a>, ${esc(s.date)}.</li>`).join("")}</ol>`, `${I}</section>`);
  L.push(`  </article>`);
  return L.join("\n");
}

function jsonLd() {
  const person = (p) => Object.assign({ "@type": "Person", name: p.name, jobTitle: p.role, worksFor: { "@type": "Organization", name: "The Codest" } }, p.linkedin ? { sameAs: [p.linkedin] } : {});
  const blog = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: d.title, description: seo.meta_description, url: canonical, mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    datePublished: d.published, dateModified: d.updated, inLanguage: "en", wordCount: bodyWords,
    author: person(d.author), ...(hasReviewer ? { contributor: person(d.reviewer) } : {}),
    publisher: { "@type": "Organization", name: "The Codest", url: site.origin + "/" },
    about: pq, keywords: [pq, ...sq].join(", "), articleSection: label,
  };
  const crumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.origin + "/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: site.article_base },
    { "@type": "ListItem", position: 3, name: d.title, item: canonical } ] };
  return [blog, crumbs].map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`).join("\n");
}

function page() {
  const ds = path.relative(outDir, DS).split(path.sep).join("/") + "/";
  const head = [
    `<title>${esc(seo.meta_title)}</title>`,
    `<meta name="description" content="${esc(seo.meta_description)}">`,
    `<link rel="canonical" href="${esc(canonical)}">`,
    `<meta name="robots" content="index, follow, max-snippet:-1">`,
    `<meta property="og:type" content="article">`, `<meta property="og:title" content="${esc(d.title)}">`,
    `<meta property="og:description" content="${esc(seo.meta_description)}">`, `<meta property="og:url" content="${esc(canonical)}">`,
    `<meta property="article:published_time" content="${d.published}">`, `<meta property="article:modified_time" content="${d.updated}">`,
    jsonLd(),
  ].join("\n");
  const data = JSON.stringify({ url: canonical, contact: site.contact, related_case: d.related_case, cta: d.cta }).replace(/</g, "\\u003c");
  return fs.readFileSync(path.join(HERE, "templates", "article-page.html"), "utf8")
    .replace("__HEAD__", () => head).replace("__ARTICLE__", () => articleHtml(ds))
    .split("__DS__").join(ds).replace("/*__PAGE_DATA__*/", () => data);
}

function md() {
  const L = [];
  L.push("---", `title: "${d.title}"`, `slug: ${d.slug}`, `canonical: ${canonical}`, `meta_title: "${seo.meta_title}"`, `meta_description: "${seo.meta_description}"`,
    `primary_query: ${pq}`, `secondary_queries: [${sq.join(", ")}]`, `category: ${d.category}`, `topic_area: ${d.topic_area}`, ...(d.industry ? [`industry: ${d.industry}`] : []),
    `author: ${d.author.name}, ${d.author.role}`, ...(hasReviewer ? [`reviewer: ${d.reviewer.name}, ${d.reviewer.role}`] : []), `published: ${d.published}`, `updated: ${d.updated}`, `review_by: ${d.review_by}`,
    `audience_group: ${M.audience_group}`, `buying_role: ${M.buying_role}`, `funnel_stage: ${M.funnel_stage}`, `cta: ${d.cta.label}`,
    `claims_used: [${Object.values(d.report.claim_ids).join(", ")}]`, `open_questions: ${d.report.open_questions.length ? d.report.open_questions.length + " (see report.md)" : "none"}`, "---", "");
  L.push(`# ${d.title}`, "", d.lead, "", "**TL;DR**", "", ...d.tldr.map((b) => `- ${b}`), "");
  for (const s of S) {
    L.push(`## ${s.heading}`, "", s.answer, "");
    if (s.bullets) L.push(...s.bullets.map((b) => `- ${b.bold ? `**${b.bold}** ` : ""}${b.text}`), "");
    if (s.table) L.push(`*${s.table.caption}*`, "", `| ${s.table.columns.join(" | ")} |`, `| ${s.table.columns.map(() => "---").join(" | ")} |`, ...s.table.rows.map((r) => `| ${r.join(" | ")} |`), "");
    L.push(...(s.paragraphs || []).flatMap((p) => [p, ""]));
    for (const x of s.subsections || []) L.push(`### ${x.heading}`, "", ...(x.paragraphs || []).flatMap((p) => [p, ""]));
    if (s.takeaway) L.push(`**What this means for you:** ${s.takeaway}`, "");
  }
  L.push("## Key insights", "", ...d.key_insights.map((b) => `- ${b}`), "");
  if (d.related_questions.length) { L.push("## Related questions", ""); for (const q of d.related_questions) L.push(`### ${q.question}`, "", q.answer, ""); }
  L.push("## Sources", "", ...d.sources.map((s, i) => `${i + 1}. ${s.publisher}, [${s.title}](${s.url}), ${s.date}.`), "");
  L.push(`**Related case study:** [${d.related_case.title}](${d.related_case.href})`, "", `**CTA:** ${d.cta.title} ${d.cta.text} [${d.cta.label}](${d.cta.href})`, "");
  return L.join("\n");
}

function report() {
  const list = (a) => (a && a.length ? a.map((x) => `- ${x}`).join("\n") : "- None");
  const yes = (b) => (b ? "yes" : "no");
  const status = errors.length ? "**not finished**: build errors" : blockers.length ? `**not finished**: ${blockers.join("; ")}` : "**finished**. Ready for the publishing workflow";
  return [
    `# Article report: ${d.title}`, "",
    `Status: ${status}`, "",
    "Publishing is outside this workflow. Whatever publishes it must meet Article 50 of the EU AI Act: human review with named editorial responsibility, or a disclosure that the text is AI-generated (rules/06-sources-and-claims.md).", "",
    "## Search fields (for the CMS)", "",
    "| Field | Value |", "| --- | --- |",
    `| URL | ${canonical} |`, `| Meta title (${(seo.meta_title || "").length} chars) | ${seo.meta_title} |`, `| Meta description (${(seo.meta_description || "").length} chars) | ${seo.meta_description} |`,
    `| Primary query | ${pq} |`, `| Secondary queries | ${sq.join("; ")} |`, `| Query source | ${seo.query_source}${seo.query_source === "topic-list" ? " (volume not checked)" : ""} |`,
    `| Category | ${d.category} / ${d.topic_area}${d.industry ? " / " + d.industry : ""} |`, `| Words | ${bodyWords} (${readMin()} min read) |`, `| Review by | ${d.review_by} |`, "",
    "## SEO and AEO/GEO checks", "",
    "| Check | Result |", "| --- | --- |",
    `| Title is a question with the primary query | ${yes(/\?$/.test(title) && hasAll(title, pq))} |`,
    `| Lead answers the question (40 to 70 words) | ${words(d.lead)} words |`,
    `| Every H2 is a question with a 20 to 45 word answer first | ${yes(S.every((s) => /\?$/.test(s.heading.trim()) && words(s.answer) >= 20 && words(s.answer) <= 45))} |`,
    `| TL;DR bullets | ${d.tldr.length} |`, `| Table with caption | ${tables} |`,
    `| Internal links (service page included) | ${internal.length} (${yes(internal.some((u) => svc.includes(abs(u))))}) |`,
    `| Outside sources (publishers) | ${d.sources.length} (${publishers.size}) |`,
    `| Sections resting on outside sources / Codest material / general only | ${srcSections} / ${ownSections} / ${generalOnly} of ${S.length} |`,
    `| Information gain | ${IG ? IG.type + ": " + IG.description : "missing"} |`,
    `| Named author | ${d.author.name}, ${d.author.role} |`,
    `| Article text in the HTML without JavaScript | yes (built in) |`, `| JSON-LD | BlogPosting, BreadcrumbList |`, "",
    "## For the publishing workflow: checks on the live page", "",
    "- Publish the text in the page HTML (not rendered by JavaScript). Check the WordPress theme does this.",
    "- Indexable, in the XML sitemap, canonical as above, published and updated dates visible and matching the JSON-LD.",
    `- Add a link to this article from ${svc[0]} ("Read more" block).`,
    "- One h1; real h2/h3 tags; the table as a real table with caption and th.", "",
    "## Sources", "", ...d.sources.map((s) => `- ${s.id}: ${s.publisher}, "${s.title}", ${s.date}. ${s.url} (accessed ${s.accessed})`), "",
    "## Claims register", "", Object.keys(d.report.claim_ids).length ? Object.entries(d.report.claim_ids).map(([k, v]) => `- ${k}: ${v}`).join("\n") : "- No claims about The Codest used", "",
    "## Open questions", "", list(d.report.open_questions), "",
    "## Self-check (rules/08-checks.md)", "", Object.keys(d.report.self_check).length ? Object.entries(d.report.self_check).map(([k, v]) => `- ${k}: ${v}`).join("\n") : "- Not answered", "",
    "## Build", "", `- Errors: ${errors.length}`, ...errors.map((e) => `  - ${e}`), `- Warnings: ${warnings.length}`, ...warnings.map((w) => `  - ${w}`), "",
    "## AI citation log (fill in monthly)", "", "| Date | Assistant | Question asked | Cited? | Notes |", "| --- | --- | --- | --- | --- |", "| | Google AI Overview / AI Mode | " + d.title + " | | |", "| | ChatGPT | | | |", "| | Perplexity | | | |", "| | Gemini | | | |", "| | Claude | | | |", "| | Copilot | | | |", "",
    ...(d.report.notes ? ["## Notes", "", d.report.notes, ""] : []),
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

function finishEarly() {
  console.log(`${input}: ${errors.length} errors`);
  errors.forEach((e) => console.log("  ERROR " + e));
  process.exit(1);
}

function finish() {
  console.log(`${d.slug || input}: ${errors.length} errors, ${warnings.length} warnings, ${bodyWords} words`);
  for (const e of errors) console.log("  ERROR " + e);
  for (const w of warnings) console.log("  WARN  " + w);
  if (!errors.length) console.log(`  Status: ${blockers.length ? "not finished (" + blockers.join("; ") + ")" : "finished"}`);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "report.md"), report());
  if (errors.length) { console.log("  Fix the errors, then build again. Only report.md was written."); process.exit(1); }
  fs.writeFileSync(path.join(outDir, "article.md"), md());
  const file = path.join(outDir, "page.html");
  fs.writeFileSync(file, page());
  console.log("  " + path.relative(process.cwd(), outDir) + "/{article.md, page.html, report.md}");
  if (shot) screenshots(file).catch((e) => { console.error(e); process.exit(1); });
}

finish();
