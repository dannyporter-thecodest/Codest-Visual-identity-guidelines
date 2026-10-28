# Articles

Everything Cody (or any AI agent) needs to write The Codest's blog articles in one format, built for search (SEO) and for AI answers (AEO/GEO), and to build each one as a page in the design system.

**What the blog is for:** bringing buyers from our ICP to the website and moving them towards a conversation. Every article answers one question a buyer asks while deciding whether to bring in outside help. It is measured by conversations, not page views.

**The format:** answer articles, following The Software House's (tsh.io) blog, with additions from Modeso, Netguru and Zuehlke. The answer comes first, in the lead and under every question heading. First-hand input from a Codest engineer is required, so each article says something competitors cannot copy.

## Two categories, one format

| | Category 1: Buyer questions | Category 2: AI in our industries |
|---|---|---|
| Answers | Questions buyers have around our services | Where AI is worth testing in fintech, payments, digital banking, marketplaces, internet or SaaS, and where it is not |
| Supports | Staff Augmentation and Product Development pages | AI Services page and its three services |
| Share | About 2 in 3 articles | About 1 in 3, at most |

Details: `rules/01-categories-and-topics.md`.

## Workflow

1. **Pick the question.** From sales calls, Search Console or the topic areas. Check `topics.json` for anything close.
2. **Write the brief** (`templates/brief.md`). Marketing approves it. Add the topic to `topics.json` with `status: brief`.
3. **Get the expert input** (`templates/expert-input.md`). Written answers or a 10 to 15 minute call with the engineer or Delivery lead who will review the article.
4. **Cody writes `content.json`** following the rules and `templates/content.schema.json`, and runs the build.
5. **Fix every error.** Fix or explain every warning. Answer the self-check (`rules/08-checks.md`).
6. **Review.** The reviewer checks the facts and approves any quotes. Marketing edits and runs the publishing path (`messaging-guidelines/06-publishing.md`).
7. **Publish** (people, not Cody). The web team follows the checklist in `report.md`. Update `topics.json` to `published`.
8. **Review on the `review_by` date.** Every 12 months, or 6 for regulated finance and AI articles.

## Rules (read in this order)

| # | File | What it settles |
|---|---|---|
| 1 | `rules/01-categories-and-topics.md` | The two categories, topic areas, industries, markets, one question per article |
| 2 | `rules/02-format.md` | Sections, order, word counts, links, page layout |
| 3 | `rules/03-titles-and-headings.md` | Question titles, question H2s, the first sentence under each heading |
| 4 | `rules/04-seo.md` | Queries, meta title and description, slug, structured data, technical requirements |
| 5 | `rules/05-aeo-geo.md` | Being the answer AI assistants quote: format, first-hand substance, freshness, what not to do |
| 6 | `rules/06-sources-and-claims.md` | Outside sources, claims about The Codest, first-hand views and quotes |
| 7 | `rules/07-hard-rules.md` | Rules that are never broken |
| 8 | `rules/08-checks.md` | The self-check before handing anything back |

Voice and claims come from `messaging-guidelines/` (04-voice.md, 05-claims.md). These rules add to them and never override them.

## Outcomes: what every article must produce

One folder `content-creation/articles/output/<slug>/` with:

| File | What it is | Who uses it |
|---|---|---|
| `brief.md` | The approved brief | Marketing |
| `expert-input.md` | The engineer's answers, as given | Proof of every first-hand view |
| `content.json` | The article as data (`templates/content.schema.json`) | Input to the build |
| `article.md` | The article as plain text, with the SEO fields on top | Review, CMS entry |
| `page.html` | The article page built from the design system. The article is plain HTML, readable without JavaScript, with JSON-LD | Web team, review |
| `report.md` | Publication status, search fields, SEO and AEO/GEO checks, sources, claims, quotes to approve, questions for the reviewer, self-check, web team checklist, AI citation log | Danny, reviewer, web team |

Cody writes `brief.md` (if asked), `content.json` and copies `expert-input.md`. The build generates the rest:

```
node content-creation/articles/build.js content-creation/articles/output/<slug>/content.json --shot
```

An article is **ready for review** when the build reports 0 errors, every warning is fixed or explained, and the self-check is answered. It is **ready to publish** only when `report.md` says `Publication: ready for review` (no blockers) and the publishing path approvals are done.

## What the build checks

Over 100 checks, including:
- the title is a question with the primary query
- the lead is 40 to 70 words
- every H2 is a question answered in its first 20 to 45 words, with no scene-setting or back-references
- the TL;DR, exactly one table, paragraph length
- meta title and description length, the slug, keyword stuffing
- 3 to 6 internal links, including the category's service page
- dated primary sources only, with no competitor blogs or US sources
- at least two sections resting on first-hand input or a case study
- named author and reviewer, `review_by` within 6 or 12 months
- near-duplicate titles against `topics.json`, and the 2:1 category balance
- blocked clients, the US market, avoid-list words, em and en dashes, and characters Cody's repository rejects

## Files

```
articles/
  README.md                this file
  CODY_TASK.md             the prompt to give Cody
  build.js                 checks content.json and builds article.md, page.html, report.md
  topics.json              register of every topic, plus site URLs and blocked source domains
  rules/                   01 to 08
  templates/
    brief.md               the article brief
    expert-input.md        the questions for the engineer
    content.schema.json    the shape of content.json
    content.example.json   a blank to start from
    article-page.html      the page template
  examples/hire-or-extend-engineering-team/   a test article (blocked: no expert input yet)
  output/<slug>/           one folder per article
```
