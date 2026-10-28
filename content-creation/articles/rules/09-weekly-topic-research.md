# 09. Weekly topic research

How Cody picks the week's article on its own. The aim is one question that our ICP is asking, that we can answer better than what is out there, and that supports a service page.

## Step 1: refresh before writing new

Open `topics.json`. If any `published` article has a `review_by` date that has passed, the week's work is refreshing that article (`05-aeo-geo.md`, C3). Only if nothing is due, find a new topic.

## Step 2: collect 6 to 10 candidate questions

Use web search. Look for questions real buyers ask, in their words:

| Where | What to look for |
|---|---|
| Search results for the topic areas (`01-categories-and-topics.md`) | "People also ask" questions, related searches, and question-style titles that rank |
| Public forums where engineering leaders talk (for example r/ExperiencedDevs, r/CTO, Hacker News "Ask HN") | Questions about hiring, vendors, delivery, legacy systems and AI in our industries |
| Regulator and industry news from the last 30 days (European Commission, EBA, ESMA, FCA, BaFin, ENISA) | A new rule, deadline or report that raises a buyer question (DORA, the AI Act, PSD3 and similar) |
| `topics.json` ideas | Ideas already listed with `status: idea` |
| Competitor blogs (`topics.json`, `site.competitor_domains`) | Questions they answer badly or not at all. For topic ideas only, never as evidence |

Only take questions that fit our markets (DACH, the Nordics, the UK, Poland) and industries. Drop anything US-only.

## Step 3: score each candidate

Score 0, 1 or 2 on each line. Write the scores in the brief.

| Criterion | 2 | 1 | 0 |
|---|---|---|---|
| ICP fit | A named audience group, buying role and trigger from `02-icp.md` | Fits the ICP loosely | Developers, job seekers, students, or outside our markets |
| Business link | Leads naturally to a service page and a small next step | Indirect link | No link to what we sell |
| Evidence available | 2 or more primary sources from different publishers, found and opened | One primary source | Only blogs and opinion |
| Information gain | We can add a comparison, checklist or framework the current top results lack | Some added value | We would repeat what already ranks |
| Demand signal | The question appears in "People also ask", related searches or forums, in buyers' words | Appears in one place | No sign anyone asks it |
| Our proof | A live case study or public Codest material fits | Indirect fit | Nothing public to point to |
| Freshness | A new rule, report or event makes it timely now | Evergreen | Already out of date |

**Rules for picking:**
- Pick the highest total. Ties go to the higher "ICP fit", then "Evidence available".
- Minimum 9 of 14, with no 0 in ICP fit, Evidence available or Information gain. If nothing qualifies, do not write an article this week. Say so in the weekly report, with the best candidates and what each was missing.
- Keep the category balance: about 2 buyer-questions articles for every ai-in-industry article (`01-categories-and-topics.md`).
- Check `topics.json` for duplicates first. If the question is close to an existing article, refresh that article instead.

## Step 4: check what already answers it

Search the question and read the top 5 results. Note in the brief:
- what they all say (we must cover it too)
- what they miss or get wrong (our information gain)
- whether any is from a regulator or official source (use it as a source, not a competitor)

## Step 5: write the brief and register the topic

- Fill in `templates/brief.md` yourself, including the scores, the rejected candidates and why, and the information gain you plan.
- Write the title from the buyer question using one of the four patterns in `03-titles-and-headings.md`, and draft the hook. Offer two title options in the brief and pick the one that names the outcome most clearly.
- Add the topic to `topics.json` with `status: brief`, today's date and the score.
- Then write the article (`CODY_TASK.md`).

## Limits to be aware of

- Without Search Console or a keyword tool, Cody has no search volume. "Demand signal" is a proxy from search results and forums. Set `seo.query_source` to `topic-list` and the report flags it. When a keyword tool or Search Console is connected, use it and set `keyword-tool` or `search-console`.
- Forum questions show what people ask, not who they are. ICP fit still has to be judged from the question itself.
