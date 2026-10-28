# 04. SEO

Classic SEO is the base for AEO/GEO. Google's AI Overviews and AI Mode pull pages from the normal search index, so a page that is not indexed, crawlable and clearly about one question will not be cited either. Google's guidance for its AI features (May 2026) says this directly: SEO still applies, and there is no separate AI markup to add.

Every field below lives in `content.json` under `seo` and is checked by the build.

## Queries

| Field | What it is | Rules |
|---|---|---|
| `primary_query` | The 2 to 6 word phrase the article must rank for, in the words buyers use. Example: `extend engineering team` | Its main words (all words except small ones like your, the, how) must appear in the title, the meta title, the meta description, the lead answer and at least one H2, in any order: "extend your engineering team" counts. The slug needs at least one of them. Errors if missing |
| `secondary_queries` | 2 to 5 related phrases or variants. Example: `team extension vs hiring`, `hire developers in-house` | Each should appear at least once in an H2, a paragraph or the table (warning) |
| `query_source` | Where the query came from: `sales-call`, `search-console`, `keyword-tool`, `topic-list` | Required. "topic-list" means volume is not yet checked: the report flags it |

**No keyword stuffing.** The primary query appears at most once per 150 words of the article (warning). Write for the buyer. Google's systems understand synonyms, so exact repetition does not help.

## Meta title, description and slug

| Field | Rules |
|---|---|
| `meta_title` | 50 to 60 characters. Starts with the primary query or the question. Ends with ` | The Codest` if it fits within 60, otherwise leave the brand out |
| `meta_description` | 120 to 155 characters. The direct answer in one sentence, plus what the article gives (a table, a checklist). Contains the primary query. No "In this article" or "Learn about" |
| `slug` | Lowercase words joined by hyphens, 3 to 6 words, only `a-z`, `0-9` and `-`. Contains the primary query's main words. No dates, no stop words at the start (`the-`, `a-`, `how-to-` is fine) |
| `canonical` | `https://thecodest.co/en/blog/<slug>/`. Set by the build from the slug unless given |

## Internal links

See `02-format.md`. Internal links tell search engines how our pages relate, and send authority from articles to the service page they support. Every article links to its category's service page. The web team should also link back from the service page to its best articles (a "Read more" block). Cody lists this in the report.

## Structured data

The build writes JSON-LD into the page `<head>`:

- `BlogPosting`: headline, description, URL, `datePublished`, `dateModified`, `author` (Person, with `jobTitle` and, if given, `sameAs` to their LinkedIn), `publisher` (Organization: The Codest), `about` (the primary query), `inLanguage: en`, `wordCount`.
- `BreadcrumbList`: Home, Blog, the article.

Not added:
- `FAQPage`: Google only shows FAQ rich results for well-known government and health sites (since August 2023). The "Related questions" section is plain HTML, which AI systems read anyway.
- Any "AI-specific" markup or files (llms.txt and similar): Google says it gives them no special treatment. Leave them out of the article workflow. A site-wide decision on llms.txt belongs to the web team.

## Technical requirements for the web team

The report repeats these so they are checked when the article goes live:

1. **The article text is in the HTML the server sends.** Not inserted by JavaScript after load. The page Cody builds already works this way. Check that the WordPress theme does too.
2. **Indexable:** no `noindex`, the URL is in the XML sitemap, the canonical points to itself.
3. **Visible dates:** published and "Last updated" dates shown on the page, matching the JSON-LD.
4. **Headings as real `<h1>`/`<h2>`/`<h3>` tags,** one `<h1>`. The table as a real `<table>` with `<caption>` and `<th>`. Lists as `<ul>`/`<ol>`.
5. **Images** (if added later) have descriptive `alt` text and are not the only place an answer appears.
6. **Language:** `<html lang="en">`. Articles are English only unless Marketing asks for PL or DE. Add `hreflang` only when a translated version exists.
7. **Speed:** the page passes Core Web Vitals on mobile (part of Google's page experience).

## Measuring

Track by query and page in Search Console, and by conversation in the CRM (`messaging-guidelines/06-publishing.md`). Page views alone are not the goal.
