# 05. AEO and GEO: being the answer AI assistants quote

AEO (answer engine optimisation) and GEO (generative engine optimisation) mean getting our articles shown and cited in AI answers: Google AI Overviews and AI Mode, ChatGPT, Perplexity, Gemini, Claude and Copilot.

Two things decide it:

1. **Can the engine lift a clear answer from the page?** That is format: question headings, the answer first, short self-contained sections, tables and lists.
2. **Is our answer worth citing over a hundred similar ones?** That is substance. Google's guidance for its AI features (May 2026) says unique, useful content will matter more over time than any technique.

The workflow is fully automated, so substance cannot come from interviews. It comes from three things Cody can do on its own:
- **Better evidence:** several independent primary sources, read at the source, with exact figures and dates.
- **Our own public experience:** live case studies, The Codest's service pages and published material, and the founders' public posts and talks.
- **Information gain:** something the article adds that none of its sources has on its own. A comparison built from several sources, a checklist, a decision framework.

Format without substance is commodity content. AI already has thousands of generic answers to "should I hire or outsource?". It cites the page that adds something.

Every rule below is checked by the build where it can be checked mechanically. The rest is in the self-check (`08-checks.md`), which Cody answers itself.

## A. Make the answer easy to lift

| # | Rule | Check |
|---|---|---|
| A1 | The buyer question is recorded in `question` (and in the JSON-LD as `alternativeHeadline`). The title states the outcome or insight. After a short hook, the lead answer (40 to 70 words) answers the buyer question directly | error |
| A2 | Every body H2 is a question. Its first sentence answers it | error (question mark, banned openings) |
| A3 | The answer paragraph under each H2 is 20 to 45 words and makes sense on its own. No "this", "these", "as mentioned above" pointing back to an earlier section in its first sentence | error |
| A4 | A TL;DR of 3 to 5 bullets that each stand alone | error |
| A5 | Exactly one table, with a caption, comparing options, failure modes or criteria | error |
| A6 | Specific over vague: name the thing, the condition and the number (with its source). "Within the first two sprints" beats "quickly" | self-check |
| A7 | Name things the same way every time. "The Codest", "Staff Augmentation", "DORA (Digital Operational Resilience Act)": the full name once, then the same short name. Consistent names help engines connect the article to the entity | self-check |
| A8 | Cover the follow-up questions. AI Mode splits one question into several related searches. The H2s plus "Related questions" should answer what a buyer asks next | self-check, `fanout_questions` in the brief |
| A9 | Paragraphs of 60 words or fewer, one point each | warning over 60, error over 80 |

## B. Give the engine a reason to cite us

| # | Rule | Check |
|---|---|---|
| B1 | **At least 2 outside primary sources from different publishers,** 2 to 5 in total. One source is a claim; two independent ones are evidence | error |
| B2 | **Information gain is required.** The article states, in `information_gain`, what it adds that no single source has (a table, checklist, framework or comparison) and which sources or cases it was built from (at least 2) | error |
| B3 | **Our own experience, from public material only.** At least one section rests on a live case study or other public Codest material (`based_on: case:<slug>` or `codest:<url>`) | error |
| B4 | At least three sections rest on an outside source (`based_on: src:<id>`). No more than two sections rest on `general` alone | error |
| B5 | At least one clear position, including when **not** to do something. Category 2 always has a "when AI is the wrong choice" section | self-check; error for category 2 without `limits_section` |
| B6 | Figures appear with their source and year in the same sentence or the next: "57.5% of EU enterprises that recruited or tried to recruit ICT specialists in 2023 had difficulties filling the vacancies (Eurostat)" | self-check |
| B7 | Sources are recent: data from the last 2 years where it exists. Cody searches for the newest edition before using a figure, and records the date it checked in `latest_checked`. Older data needs a note that no newer edition exists. Laws and standards in force are exempt | warning |
| B7a | Every figure keeps its real year. Never re-date it, drop the year to make it look current, or stretch one year into a period. How to keep articles from looking dated without misleading: `06-sources-and-claims.md`, "Dating figures" | error for unsupported "latest" or time-range wording |
| B8 | A named author for the byline (set in `topics.json`, `site.default_author`, unless the brief names another) | error if missing |
| B9 | No hype, no superlatives, no claims without a register entry. AI systems and buyers both discount marketing language | warning per avoid-list word |

## C. Keep it fresh

| # | Rule | Check |
|---|---|---|
| C1 | "Published" and "Last updated" dates on the page and in the JSON-LD | built in |
| C2 | Every article has a `review_by` date, at most 12 months after the last update. 6 months for `regulated-finance` and category 2 (rules and AI tools change fast) | error |
| C3 | When an article is due for review, Cody re-opens every source, checks figures and links, updates the article and `updated`, and logs what changed in `report.notes`. The date never changes without the content changing | self-check |

## D. Do not do these

- **Do not write a page for every variation of a question.** Google calls it scaled content abuse (`01-categories-and-topics.md`). One article a week on a real question is fine. Ten variations of the same question is not.
- **Do not rewrite for exact phrasing** or repeat the query. Google says its systems understand meaning and synonyms.
- **Do not split an article into tiny pages.** One complete answer per page.
- **Do not add AI-specific files or markup** to the article (llms.txt and similar). Google gives them no special treatment.
- **Do not seed fake mentions** (forum posts, paid lists, review swaps).
- **Do not cite other agencies' blogs** as evidence. They are opinions, not sources.
- **Do not invent first-hand experience.** No "our engineers often see", "in our experience", "we have found" unless a public Codest source says it. Write it as advice instead ("Check whether...").

## What the blog cannot do on its own

When a buyer asks an AI assistant "which software partners in the Nordics are good for fintech?", the answer seems to draw mostly on third-party sources: review platforms, industry lists, press and comparisons. Articles help us get cited for problem questions. Being named in vendor shortlists is a separate job outside the blog.

## Measuring

- **Search Console:** impressions and clicks for the primary and secondary queries.
- **AI citations:** once a month, ask the main assistants the article's buyer question and log whether we are cited (the table in `report.md`).
- **The contact form:** add "AI assistant" to "How did you hear about us?". AI answers often send no click.
