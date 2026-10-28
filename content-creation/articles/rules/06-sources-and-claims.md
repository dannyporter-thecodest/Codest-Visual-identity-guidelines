# 06. Sources and claims

An article mixes three kinds of fact. Each has its own rule.

| Kind | Example | Rule |
|---|---|---|
| Outside fact | "57.5% of EU enterprises that tried to hire ICT specialists in 2023 found the roles hard to fill" | A primary source with a date, listed in `sources` and linked inline |
| Fact about The Codest | "Our collaboration with SupplierPlus has run for 12 months" | An entry in the claims register (`messaging-guidelines/05-claims.md`). Missing means not allowed |
| First-hand view | "The first sign a vendor team is wrong is when nobody pushes back in the first planning session" | From the expert input, agreed by the reviewer. Opinion, written as opinion |

## Outside sources

**Allowed:**
- EU, UK and national regulators and supervisors (European Commission, EUR-Lex, EBA, ESMA, FCA, BaFin, FINMA, KNF, Finansinspektionen)
- Official statistics (Eurostat, ONS, Destatis, Statistics Austria, GUS, national statistics offices)
- Standards bodies and research bodies (ISO, ENISA, OECD, CEDEFOP, Eurofound)
- Recognised industry research with a method (for example the big audit firms, Gartner, Forrester, DORA (DevOps Research and Assessment) reports, Stack Overflow Developer Survey)
- Official documentation for a technology (vendor docs, RFCs)

**Not allowed as evidence:**
- Other software agencies' blogs (tsh.io, netguru.com, stxnext.com, 10clouds.com and similar). The build checks a list of competitor domains
- Content farms, AI-written listicles, Medium or dev.to posts by unknown authors
- Wikipedia (follow it to the primary source instead)
- US regulators and US-only data (sec.gov, ftc.gov, federalreserve.gov, consumerfinance.gov and similar). The US is not our market

**Every source in `sources` has:** an `id`, `publisher`, `title`, `url`, `date` (publication date, or the data's reference year), and `accessed` (when Cody read it). Figures are copied exactly, with their reference year, never rounded into a new claim.

**Reading sources:** Cody opens the page and reads the figure there. A search snippet or a summary from another site is not enough. If Cody cannot open the primary page, the figure does not go in, and the report says so.

## Facts about The Codest

- Only claims in the register, at the visibility level the register allows (`messaging-guidelines/05-claims.md`). List each one in `report.claim_ids`.
- Case study facts are claims too. Linking a live case study is fine. Repeating its figures in the article needs the register entry.
- Never use: "senior-only", "start in 2 weeks" or any start time, "teams that stay for years", certifications we do not have (no ISO 27001), compliance we cannot show. These are conditional or blocked claims.
- **MUFG and Allegro never appear.** Not by name, not anonymised, not hinted at. The build fails if either is mentioned.
- GFT is not a client. Never present it as one.

## First-hand views and quotes

- The expert input (`templates/expert-input.md`) is the source for first-hand views. Cody keeps it in `output/<slug>/expert-input.md`.
- A direct quote is copied word for word from the input, and the person approves it before publication. List it in `report.quotes_to_approve`.
- A paraphrase keeps the person's meaning. Do not make them sound more certain than they were.
- Do not invent a view the expert did not give. If a section needs one and the input does not have it, add a question for the reviewer.

## AI and the EU AI Act

Articles are drafted with AI and published by people. Article 50 of the AI Act (from 2 Aug 2026) asks for human review with named editorial responsibility for AI-generated text on matters of public interest. The publishing path covers this: the reviewer and the Marketing Specialist are named in the report (`messaging-guidelines/06-publishing.md`).
