# 01. Categories and topics

The blog exists to bring buyers from our ICP to the website and move them towards a conversation. Every article answers one question a buyer asks at the moment they are deciding whether to bring in outside help. It gives them something they can use in that decision, or forward to colleagues to justify it.

Who the buyer is: `messaging-guidelines/02-icp.md`. What we may claim: `messaging-guidelines/05-claims.md`.

## Two categories, one format

Both categories use the same answer-article format (`02-format.md`). They differ in topic pool, the page they support and the CTA.

| | Category 1: Buyer questions | Category 2: AI in our industries |
|---|---|---|
| `category` value | `buyer-questions` | `ai-in-industry` |
| What it answers | A question buyers have around our services: adding capacity, choosing a vendor, handing over delivery, regulated finance, modernising revenue systems | Where AI is worth testing in one of our industries, and where it is not |
| Page it supports | Staff Augmentation or Product Development service page | AI Services page and its three services (Rapid AI Prototyping, AI Solutions & Integration, AI-Assisted Engineering) |
| CTA | A small first step: a technical call, a discovery, meeting the team | A small test: a prototype or a go/no-go on one workflow |
| Share of articles | About 2 in 3 | About 1 in 3, at most |

The 2:1 balance is a default set by Marketing, not a number from the strategy. It stays until the AI hypothesis in the strategy is decided (`messaging-guidelines/01-positioning.md`, "Hypotheses being tested"). The build warns when category 2 passes one third of `topics.json`.

## Category 1 topic areas

| `topic_area` | Buyer moment (trigger) | Example questions |
|---|---|---|
| `capacity` | Funding round, slipping roadmap, failed hire, key person leaves | Should you hire in-house or extend your team with an external one? What should the first 30 days with an external engineering team look like? |
| `vendor-choice` | Comparing vendors, replacing one. Fear: the team in the pitch is not the team that delivers | How do you check that a vendor's team is the team that will actually deliver? What should an exit plan with a software vendor include? |
| `delivery-handover` | New programme, vendor out of capacity, a stream running late | How do you hand a delivery stream to an external team without losing governance? How do you compare vendor offers beyond the day rate? |
| `regulated-finance` | DORA, vendor reviews, audits | What does DORA mean for your software development vendors? What will a bank's vendor review ask an engineering partner? |
| `modernisation` | System rebuild, scaling problems, legacy blocking the roadmap | When should you modernise a payment platform instead of rebuilding it? How do you migrate a revenue-critical system without downtime? |

## Category 2 framing

The angle is always "where AI is worth testing in [industry], and where it is not". Never "how AI transforms [industry]".

- Problem first. The buyer's process, risk or bottleneck comes before any AI.
- Every category 2 article has one section that says when AI is the wrong choice. The build checks for it (`limits_section`).
- No results we cannot prove. There are no AI case studies in the claims register. "AI is used in engineering and prototyping" (CLM-004) is conditional, and "AI is the brand's main differentiator" (CLM-014) is blocked.
- Words from the avoid list stay out: AI-powered, AI-driven, AI-first, AI-native, 10x (`messaging-guidelines/04-voice.md`).
- The CTA is a small test, matching the AI Services page: a prototype is evidence for a decision, not a production guarantee.

Example questions:
- Where is AI worth testing in a payments platform, and where is it not?
- How do you test an AI feature for a marketplace before committing a budget?
- What does the EU AI Act mean for an AI feature in a fintech product?
- How should an external team validate AI-assisted code on a banking system?

## Industries

Only the ICP industries: `fintech`, `payments`, `digital-banking`, `marketplaces`, `internet`, `saas`.

Healthtech, automotive, manufacturing, logistics and IoT are in the website navigation but not in the ICP. Do not write category 2 articles for them.

## Markets

DACH, the Nordics, the UK and Poland. Never write for the US. No US regulations (SOX, CCPA, GLBA, FedNow and similar) and no US-only data. Use EU or UK regulators and data.

## One article per real question (no scaled content)

Google treats many near-identical pages made for search variations as scaled content abuse. Cody can write fast, so this rule protects the whole site.

- One article answers one buyer question. Variations of the question ("for fintech", "for SaaS", "in 2027") go inside the same article, not in new ones.
- Every planned or published article is listed in `topics.json`. The build fails if a new title is too close to an existing one.
- A new article must change the answer, not just the wording. If the answer is the same, update the existing article instead.
- Publishing rhythm is set by Marketing. "As many as possible" is never the target.

## Choosing the next topic

Cody picks the topic itself each week, following `09-weekly-topic-research.md`: refresh anything due for review first, then collect candidate questions, score them, and pick the best one that clears the minimum. If someone gives Cody a question directly, it still checks it against the same scores and `topics.json`.

Record where the question came from, and its scores, in the brief (`templates/brief.md`).
