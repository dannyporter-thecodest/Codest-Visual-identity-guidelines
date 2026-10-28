# 02. Format: the answer article

The format follows The Software House's answer articles (for example "Why payment system integration fails, and how to fix it", tsh.io, 21 Aug 2026), with three additions from competitor reviews and one of our own:

- a "What this means for you" line closing a section (from Modeso)
- a bold "The fix" label in lists of problems (from Netguru)
- regulators as sources for regulated topics (from Zuehlke)
- **our addition:** the first sentence under every heading answers it. None of the reviewed competitors does this consistently. It is the single most important AEO/GEO formatting rule (`05-aeo-geo.md`).
- **our addition:** an information gain element in every article: a comparison, checklist or framework built from several sources (`05-aeo-geo.md`, B2).

Copy the patterns, never the text.

## Sections, in order

| # | Section | Required | Size | Notes |
|---|---|---|---|---|
| 1 | Title (H1) | yes | 7 to 14 words, max 70 characters | An outcome-led or insight statement, not a question (`03-titles-and-headings.md`). The buyer question it answers is kept in `question` |
| 2 | Byline | yes | | Author name and role (`site.default_author` in `topics.json` unless the brief names another), published date, updated date, reading time |
| 3a | Hook | yes | 1 to 3 sentences, 12 to 45 words | A concrete scene, a sourced figure, the cost of waiting or a true surprise. No questions, no filler openers (`03-titles-and-headings.md`) |
| 3b | Lead answer | yes | 40 to 70 words, 2 or 3 sentences | Straight after the hook. Answers the buyer question directly and delivers on the title. No scene-setting |
| 4 | TL;DR | yes | 3 to 5 bullets, 8 to 22 words each | Each bullet makes sense on its own. The first may carry a sourced figure |
| 5 | Body sections (H2) | yes | 4 to 6 sections | Every H2 is a question. The first paragraph answers it in 20 to 45 words |
| 6 | Table | yes, exactly one | 2 to 4 columns, 3 to 6 rows, with a caption | A comparison the buyer can reuse: options, failure modes, criteria |
| 7 | Key insights (H2) | yes | 3 to 5 bullets | The answer again, in short. No new facts |
| 8 | Related questions (H2) | optional | 2 to 4 questions, 25 to 60 words per answer | Follow-up questions a buyer or an AI assistant would ask next |
| 9 | Related case study | yes | | One live case study that shows the topic in practice |
| 10 | CTA | yes | title 3 to 10 words, text 10 to 30 words | One small next step (`01-categories-and-topics.md`) |

**Article length:** 900 to 1,400 words for sections 3a to 8 together. Below 700 or above 1,800 is an error. Answer articles win by being precise, not long.

## Inside a body section

In this order:

1. **Answer paragraph** (required). 20 to 45 words. It answers the heading's question in its first sentence.
2. **List or table** (optional), straight after the answer, so the answer and its evidence sit together:
   - a bullet list (3 to 6 items). For problems, start each item with a bold label and give "The fix" in the same item.
   - the table (exactly one in the article)
3. **Detail** (up to 4 paragraphs). Why, how, conditions, an example. Optional H3 sub-points (max 4 per section).
4. **What this means for you** (optional): one sentence, 10 to 30 words, saying what the buyer should do or check.
5. `based_on`: what the section rests on. One or more of `src:<id>` (an outside source), `case:<slug>` (a live case study), `codest:<url>` (other public Codest material), `general` (common knowledge or reasoning). At least three sections rest on `src:`, at least one on `case:` or `codest:`, and at most two on `general` alone (`05-aeo-geo.md`).

## Paragraphs and sentences

- One point per paragraph. 1 to 3 sentences.
- Paragraphs: 60 words or fewer. Over 80 is an error.
- Average sentence length: 22 words or fewer.
- Spell out every acronym the first time (DORA, PMO, SLA).
- British spelling (as in the case studies). Job titles in English.

## Links

Written inline as Markdown: `[anchor text](url)`. Anchor text says what the reader gets ("our Staff Augmentation model"), never "click here" or a bare URL.

| Link | Required | Notes |
|---|---|---|
| Service page for the category | at least 1 | Category 1: Staff Augmentation or Product Development. Category 2: AI Services or one of its three services |
| Other internal pages | 2 to 5 more | Other articles, case studies, the contact page. 3 to 6 internal links in total |
| Outside sources | 1 to 4 | Each one listed in `sources` with publisher and date (`06-sources-and-claims.md`) |

## Page layout

The page is built from the design system (`visual-identity-and-design-system/design-system/`): the article page layout (`cd-article-page`, 160px aside and a 792px body), the article header, the share bar in the aside, the case study panel, the CTA band and the footer.

**The article text is plain HTML in the page.** It is not rendered by JavaScript. Only the site header and footer are drawn by the design system's React components. AI crawlers and search engines must be able to read the whole article without running scripts (`04-seo.md`).

## What the format leaves out

- No "In today's fast-paced world" openings, and no history of the topic.
- No "Top 10" lists, trend round-ups or definition-only posts.
- No table of contents (the articles are short enough).
- No interviews or input from colleagues. The workflow runs without people (`05-aeo-geo.md`).
- No sections about The Codest. The Codest appears where it helps the answer: one example, the case study, the CTA.
