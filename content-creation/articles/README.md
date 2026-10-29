# Articles

Everything Cody needs to create The Codest's blog articles on its own, each week, with no input from people: finding the topic, researching it, writing it, and building it as a page in the design system. The articles are built for search (SEO) and for AI answers (AEO/GEO).

This workflow **creates** articles. It does not publish them. Publishing is handled by a separate workflow.

**What the blog is for:** bringing buyers from our ICP to the website and moving them towards a conversation. Every article answers one question a buyer asks while deciding whether to bring in outside help.

**The format:** answer articles, following The Software House's (tsh.io) blog, with additions from Modeso, Netguru and Zuehlke. An outcome-led title and a short hook earn the click. Then the answer comes first, in the lead and under every question heading. Substance comes from independent primary sources, The Codest's own public material (case studies, service pages, published posts), and an information gain element: something the article adds that none of its sources has on its own.

## Two categories, one format

| | Category 1: Buyer questions | Category 2: AI in our industries |
|---|---|---|
| Answers | Questions buyers have around our services | Where AI is worth testing in fintech, payments, digital banking, marketplaces, internet or SaaS, and where it is not |
| Supports | Staff Augmentation and Product Development pages | AI Services page and its three services |
| Share | About 2 in 3 articles | About 1 in 3, at most |

Details: `rules/01-categories-and-topics.md`.

## The weekly run

The prompt is in `CODY_TASK.md`.

1. **Refresh or research.** If a published article is past its `review_by` date, refresh it. Otherwise collect 6 to 10 candidate questions, score them and pick the best (`rules/09-weekly-topic-research.md`). If nothing scores high enough, there is no article that week, and Cody says why.
2. **Brief.** Cody fills in `templates/brief.md` and registers the topic in `topics.json`.
3. **Research.** 2 to 5 primary sources from at least 2 publishers, opened and read, plus the public Codest material that fits.
4. **Write.** `content.json`, following the rules and `templates/content.schema.json`.
5. **Build and check.** Fix every error, fix or explain every warning, answer the 16 self-check items (`rules/08-checks.md`).
6. **Hand over.** The finished article in `output/<slug>/`, ready for the publishing workflow.

## Rules (read in this order)

| # | File | What it settles |
|---|---|---|
| 1 | `rules/01-categories-and-topics.md` | The two categories, topic areas, industries, markets, one question per article |
| 2 | `rules/02-format.md` | Sections, order, word counts, links, page layout |
| 3 | `rules/03-titles-and-headings.md` | Outcome-led titles (four patterns), hooks, question H2s, the first sentence under each heading |
| 4 | `rules/04-seo.md` | Queries, meta title and description, slug, structured data, technical requirements |
| 5 | `rules/05-aeo-geo.md` | Being the answer AI assistants quote: format, evidence, information gain, freshness, what not to do |
| 6 | `rules/06-sources-and-claims.md` | Outside sources, public Codest material, claims, no invented experience |
| 7 | `rules/07-hard-rules.md` | Rules that are never broken |
| 8 | `rules/08-checks.md` | The self-check before handing an article over |
| 9 | `rules/09-weekly-topic-research.md` | How Cody finds and scores the week's topic |
| 10 | `rules/10-messaging.md` | How The Codest talks about itself: problem, responsibility, model; the three ways we help and their limits; pillars; CTAs by role; claims |

Positioning, voice and claims come from `messaging-guidelines/` (01-positioning.md, 02-icp.md, 03-messaging.md, 04-voice.md, 05-claims.md). These rules add to them and never override them.

## Outcomes: what every article must produce

One folder `content-creation/articles/output/<slug>/` with:

| File | What it is |
|---|---|
| `brief.md` | The topic, its scores, rejected candidates, the evidence plan |
| `content.json` | The article as data (`templates/content.schema.json`) |
| `article.md` | The article as plain text, with the SEO fields on top, ready to paste into a CMS |
| `page.html` | The article page built from the design system. The article is plain HTML, readable without JavaScript, with JSON-LD |
| `report.md` | Status, search fields, SEO and AEO/GEO checks, sources, claims, self-check, checklist for the live page, AI citation log |

Cody writes `brief.md` and `content.json`. The build generates the rest:

```
node content-creation/articles/build.js content-creation/articles/output/<slug>/content.json --shot
```

An article is **finished** when the build reports 0 errors, every warning is fixed or explained, and the self-check is answered. `report.md` then says `Status: finished`.

## What the build checks

Over 100 checks, including:
- the title follows the patterns (not a question, primary query, no one-sided claims), the hook is 12 to 45 words with no filler opener, and the lead is 40 to 70 words
- every H2 is a question answered in its first 20 to 45 words, with no scene-setting or back-references
- the TL;DR, exactly one table, paragraph length
- meta title and description length, the slug, keyword stuffing
- 3 to 6 internal links, including the category's service page
- evidence:
  - 2 to 5 primary sources from at least 2 publishers, with no competitor blogs or US sources
  - at least three sections resting on sources, and one on public Codest material
  - an information gain element built from at least 2 sources or cases
- no invented experience ("in our experience" without a public Codest source)
- messaging:
  - problem, responsibility, model, with a limit next to every model named
  - an approved CTA for the buying role
  - CLM-003 listed when services are named
  - no internal strategy language or conditional claims
  - acronyms spelled out
- a named author, and `review_by` within 6 or 12 months
- near-duplicate titles against `topics.json`, and the 2:1 category balance
- blocked clients, the US market, avoid-list words, em and en dashes, and characters Cody's repository rejects

## Files

```
articles/
  README.md                this file
  CODY_TASK.md             the weekly prompt for Cody
  build.js                 checks content.json and builds article.md, page.html, report.md
  topics.json              register of every topic, plus site URLs, default author and blocked source domains
  rules/                   01 to 10
  templates/
    brief.md               the article brief (Cody fills it in)
    content.schema.json    the shape of content.json
    content.example.json   a blank to start from
    article-page.html      the page template
  examples/external-engineers-without-losing-control/   a finished test article
  output/<slug>/           one folder per article
```
