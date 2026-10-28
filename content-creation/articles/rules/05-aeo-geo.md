# 05. AEO and GEO: being the answer AI assistants quote

AEO (answer engine optimisation) and GEO (generative engine optimisation) mean getting our articles shown and cited in AI answers: Google AI Overviews and AI Mode, ChatGPT, Perplexity, Gemini, Claude and Copilot.

Two things decide it:

1. **Can the engine lift a clear answer from the page?** That is format: question headings, the answer first, short self-contained sections, tables and lists.
2. **Is our answer worth citing over a hundred similar ones?** That is substance: first-hand experience, real examples, sourced facts and a clear view. Google's guidance for its AI features (May 2026) says unique, useful content with first-hand or expert perspective will matter more over time than any technique.

Format without substance is commodity content. AI already has thousands of generic answers to "should I hire or outsource?". It cites the page that adds something only that author knows.

Every rule below is checked by the build where it can be checked mechanically. The rest is in the self-check (`08-checks.md`).

## A. Make the answer easy to lift

| # | Rule | Check |
|---|---|---|
| A1 | The title is the buyer's question. The lead answer (40 to 70 words) answers it directly | error |
| A2 | Every body H2 is a question. Its first sentence answers it | error (question mark, banned openings) |
| A3 | The answer paragraph under each H2 is 20 to 45 words and makes sense on its own, without the paragraphs before it. No "as mentioned above", "this", "these" or "it" pointing back to an earlier section in its first sentence | error for length, error for back-references at the start |
| A4 | A TL;DR of 3 to 5 bullets that each stand alone | error |
| A5 | Exactly one table, with a caption, comparing options, failure modes or criteria | error |
| A6 | Specific over vague: name the thing, the condition and the number (with its source). "Within the first two sprints" beats "quickly" | self-check |
| A7 | Name things the same way every time. "The Codest", "Staff Augmentation", "DORA (Digital Operational Resilience Act)": the full name once, then the same short name. Consistent names help engines connect the article to the entity | self-check |
| A8 | Cover the follow-up questions. AI Mode splits one question into several related searches. The H2s plus "Related questions" should answer the questions a buyer asks next | self-check, `fanout_questions` in the brief |
| A9 | Paragraphs of 60 words or fewer, one point each | warning over 60, error over 80 |

## B. Give the engine a reason to cite us

| # | Rule | Check |
|---|---|---|
| B1 | **First-hand input is required.** Every article has input from a Codest engineer or Delivery lead (`templates/expert-input.md`): written answers or a short call. It is the part competitors cannot copy | warning and **publication blocked** if `expert_input` is missing |
| B2 | At least two body sections rest on the expert input or a live case study (`based_on: expert` or `case:<slug>`) | error |
| B3 | At least one clear position the reviewer agrees with, including when **not** to do something. Category 2 always has a "when AI is the wrong choice" section | self-check; error for category 2 without `limits_section` |
| B4 | Outside facts come from primary sources with a date: regulators, official statistics, research bodies, recognised industry reports. 1 to 4 per article | error (`06-sources-and-claims.md`) |
| B5 | Figures appear with their source and year in the same sentence or the next: "57.5% of EU enterprises that tried to hire ICT specialists in 2023 found the roles hard to fill (Eurostat)" | self-check |
| B6 | A real, named author and a named reviewer with their role. If the reviewer agrees, link their LinkedIn (`sameAs`) | error if missing |
| B7 | No hype, no superlatives, no claims without a register entry. AI systems and buyers both discount marketing language | warning per avoid-list word |

## C. Keep it fresh

| # | Rule | Check |
|---|---|---|
| C1 | Show "Published" and "Last updated" dates on the page and in the JSON-LD | built in |
| C2 | Every article has a `review_by` date, at most 12 months after the last update. 6 months for `regulated-finance` and category 2 (rules and AI tools change fast) | error |
| C3 | When reviewed: check every source, figure and link, update `updated`, and log what changed in the report. Do not change the date without changing the content | self-check |

## D. Do not do these

- **Do not write a page for every variation of a question.** Google calls it scaled content abuse (`01-categories-and-topics.md`).
- **Do not rewrite for exact phrasing** or repeat the query. Google says its systems understand meaning and synonyms.
- **Do not chunk an article into tiny pages.** One complete answer per page.
- **Do not add AI-specific files or markup** to the article (llms.txt and similar). Google gives them no special treatment.
- **Do not seed fake mentions** (forum posts, paid lists, review swaps). It breaks Google's spam policies and our own rules.
- **Do not cite other agencies' blogs** as evidence. They are opinions, not sources.

## What the blog cannot do on its own

When a buyer asks an AI assistant "which software partners in the Nordics are good for fintech?", the answer seems to draw mostly on third-party sources: review platforms, industry lists, press and comparisons. Articles help us get cited for problem questions. Being named in vendor shortlists is a separate job outside the blog (review profiles, press, partner listings). Cody notes this in the report for Marketing, but it is not part of the article workflow.

## Measuring

- **Search Console:** impressions and clicks for the primary and secondary queries.
- **AI citations:** once a month, ask the main assistants the article's title question and log whether we are cited (`output/<slug>/report.md` has a table for this). It is a manual sample, not a ranking.
- **The contact form:** add "AI assistant" to "How did you hear about us?". AI answers often send no click, so traffic undercounts them.
