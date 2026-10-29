# 06. Sources and claims

An article mixes three kinds of fact. Each has its own rule.

| Kind | Example | Rule |
|---|---|---|
| Outside fact | "57.5% of EU enterprises that recruited or tried to recruit ICT specialists in 2023 had difficulties filling the vacancies" | A primary source with a date, listed in `sources` and linked inline |
| Fact about The Codest | "SupplierPlus brought in a team of Ruby developers from The Codest" | Public Codest material (a live case study, a service page, a published post), linked inline. Figures and named results also need a claims register entry (`messaging-guidelines/05-claims.md`) |
| Advice | "Meet the engineers who will do the work before you sign" | Our position, written as advice. Never presented as an experience we cannot point to |

## Outside sources

Every article has **2 to 5 outside sources from at least 2 different publishers**.

**Allowed:**
- EU, UK and national regulators and supervisors (European Commission, EUR-Lex, EBA, ESMA, FCA, BaFin, FINMA, KNF, Finansinspektionen)
- Official statistics (Eurostat, ONS, Destatis, Statistics Austria, GUS, national statistics offices)
- Standards bodies and research bodies (ISO, ENISA, OECD, CEDEFOP, Eurofound)
- Recognised industry research with a stated method (the big audit firms, Gartner, Forrester, DORA (DevOps Research and Assessment) reports, Stack Overflow Developer Survey)
- Official documentation for a technology (vendor docs, RFCs)

**Not allowed as evidence:**
- Other software agencies' blogs (tsh.io, netguru.com, stxnext.com, 10clouds.com and similar). The build checks a list of competitor domains in `topics.json`
- Content farms, AI-written listicles, Medium, dev.to or Hashnode posts
- Wikipedia (follow it to the primary source instead)
- US regulators and US-only data (sec.gov, ftc.gov, federalreserve.gov and similar). The US is not our market

**Every source in `sources` has:** `id`, `publisher`, `title`, `url`, `date` (publication date, or the data's reference year) and `accessed` (when Cody read it). For data, also `years` (the reference years it covers) and, when the article says "latest", `latest_checked` (the date Cody confirmed no newer edition exists).

**Reading sources:**
- Cody opens the primary page and reads the figure there. A search snippet, or another site's summary of the source, is not enough.
- Figures are copied exactly as written (57.5%, not "almost 60%"), with their reference year. Never rounded, combined or extrapolated into a new number.
- If Cody cannot open the primary page, the figure does not go in, and `report.notes` says so.
- Two sources reporting the same survey count as one piece of evidence. Say so if you use both (for example Eurostat and a national office publishing the same EU survey).

## Dating figures

Articles should not look dated, and they must never mislead about when a figure is from.

| You may | Only when | Example |
|---|---|---|
| Give the year | Always allowed | "In 2023, 57.5% of EU enterprises that recruited or tried to recruit ICT specialists had difficulties filling the vacancies (Eurostat)." |
| Say "latest" or "most recent" instead of leading with the year | Cody checked that no newer edition exists, and recorded the date in the source's `latest_checked`. The year still appears in the body next to the link | "In Eurostat's latest survey, more than half of EU companies recruiting tech specialists struggled to fill the roles." |
| Describe a period ("in the last two surveys", "every year since 2019") | The sources show every year in that period. List the years in each source's `years` | "In Eurostat's last two surveys, more than half did (62.8% in 2021, 57.5% in 2023)." |
| Keep the year out of the hook | The body section gives the exact year next to the link | Hook: "the latest figures"; body: "in 2023, 57.5%..." |

**Never:**
- "Over the last 3 years, more than half..." when the source covers one year. That stretches one data point into a trend (claims rule 6: no extrapolating).
- Dropping the year so 2023 data reads as if it were this year's.
- "Recently" or "in recent years" without a dated source covering that period.

The build checks this: "latest", "most recent" and "newest" need a source with `latest_checked`; "last two surveys", "over the last X years", "every year since" and "in recent years" need sources covering at least two years.

## Public Codest material

This replaces interviews. Cody may use anything The Codest has already published:

| Material | Where | How to use it |
|---|---|---|
| Live case studies | thecodest.co/en/case-studies/ | What was built, for whom, how. Use the case study's own terms. Figures need a register entry |
| Service pages | thecodest.co/en/services/ | How we work, in the page's own words |
| The Codest's published articles, webinars and meetup recordings | thecodest.co blog and resources | Views and examples, with a link |
| Public posts and talks by the founders | Greg's and Kuba's public LinkedIn posts, conference talks | Short quotes, word for word, with a link and the date. Never paraphrase into a stronger claim |

List each one in `based_on` as `case:<slug>` or `codest:<url>`, and link it inline.

**Do not invent experience.** Phrases like "in our experience", "our engineers often see", "we have found" or "our clients usually" need a public Codest source in the same section. Without one, write it as advice. The build checks for these phrases.

## Claims about The Codest

- Only claims in the register, at the visibility level the register allows. List each in `report.claim_ids`.
- Linking a live case study is fine. Repeating its figures needs the register entry.
- Never use: "senior-only", "start in 2 weeks" or any start time, "teams that stay for years", certifications we do not have (no ISO 27001), compliance we cannot show.
- **MUFG and Allegro never appear.** Not by name, not anonymised, not hinted at. The build fails if either is mentioned.
- GFT is not a client. Never present it as one.

## Publishing is outside this workflow

These rules cover creating the article. Whatever workflow publishes it must still meet Article 50 of the EU AI Act (from 2 Aug 2026): AI-generated text on matters of public interest needs human review with named editorial responsibility, or a disclosure that it was AI-generated (`messaging-guidelines/06-publishing.md`). `report.md` repeats this so it is not lost.
