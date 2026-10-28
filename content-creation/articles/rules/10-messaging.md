# 10. Messaging: how The Codest talks about itself in articles

Articles are not adverts, but every one must sound like The Codest and carry its messages. This file turns `messaging-guidelines/` into rules for articles. If anything here conflicts with `messaging-guidelines/`, the messaging guidelines win.

## 1. Narrative order: problem, responsibility, model

Every article follows the order in `messaging-guidelines/03-messaging.md`:

1. **Problem.** The buyer's situation and risk lead. The lead and the first section are about the buyer, not about The Codest.
2. **Responsibility.** The article says who is responsible for what in each option, and where responsibility starts and ends. At least one body section must do this explicitly (`messaging.responsibility_section`). Use the word: responsibility, owner, owns.
3. **Model.** Only then the ways of working (Staff Augmentation, Product Development, AI Services), named as answers to the problem, never as a product list.

## 2. The three ways we help, and what we do not promise

When an article names one of our models, it uses the offer architecture's own terms, and puts the limit next to it (`messaging-guidelines/03-messaging.md`, "Offer architecture"):

| Way we help | Name it as | When it fits | What The Codest owns | Limit to state |
|---|---|---|---|---|
| Extend your team's capacity | Staff Augmentation | You have product, leadership and process, but lack capacity or skills | Selection, quality, onboarding into your team, continuity | Adding a person does not fix an organisational problem |
| Own a product area | Product Development | You want to hand over a product, module or delivery stream | Discovery, architecture, team, delivery, maintenance and development as agreed | We do not promise business results we are not measuring together |
| Test or implement AI in a real process | AI Services (Rapid AI Prototyping, AI Solutions & Integration, AI-Assisted Engineering) | You want to test an idea fast or bring AI into product and delivery | Choosing the use case, prototype, integration, quality control, the go/no-go call | AI is not always the answer, and has no set return |

Record which models the article names in `messaging.models`, and the limit you stated for each in `messaging.limits`. The build checks that every named model has a limit.

## 3. The five pillars

Each article carries at least one pillar, shown through the content rather than stated as a slogan. Record them in `messaging.pillars`.

| # | Pillar | How it shows in an article |
|---|---|---|
| 1 | The right model, not a ready-made box | The article helps the buyer choose between options, including options that are not The Codest |
| 2 | A real team and visible responsibility | Advice to meet the people who will do the work, see roles and decisions |
| 3 | Product-builder DNA | Asking what a feature or system is for before how to build it |
| 4 | Speed with control | A fast start only with a clear scope, human review and a quality bar |
| 5 | A relationship that can grow | Start with a bounded problem, expand when it is working |

## 4. Messages and CTAs by buying role

Use the role's message as the article's underlying point, and its CTA (`messaging-guidelines/03-messaging.md`):

| `meta.buying_role` | Underlying message | CTA label |
|---|---|---|
| CTO/VP Eng | Unblock the roadmap without buying an anonymous team | Let's talk through the problem / Let's test the direction on a prototype |
| Head of Delivery/PMO | Hand over a defined area with clear governance | Let's plan the responsibility and the team model |
| Procurement | Compare scope, responsibility and exit terms | Let's check the fit with your programme and procurement process |
| Risk/Security | Judge the facts and the gaps, without marketing spin | Start an evidence review |
| Financial buyer | Limit the cost of a wrong decision with a small first step | Let's test the direction on a prototype |

The CTA label must be one of the five approved CTAs. Never "Contact us", "Get a quote" or "Hire developers". The build checks this.

## 5. How to refer to The Codest

- **In proof, third person:** "SupplierPlus brought in a team of Ruby developers from The Codest."
- **"We" and "our" only for how we work,** and only in words the messaging guidelines or a service page already use: "Our Staff Augmentation model works this way."
- **Never** call The Codest premium, a leader, the best, senior-only, AI-first or an "accountable product and engineering partner". The last one is an internal frame, not copy.
- **Never** use internal strategy language in public text: ICP, audience group, Group 1/2/3, buying committee, anti-ICP, white space, "our core markets", "target markets", "funnel". The build checks this.
- **Claims:** any sentence about what The Codest offers or does needs a claim ID in `report.claim_ids`. Naming our services is CLM-003. The brand promise is CLM-001. Nothing else is public without its condition cleared (`messaging-guidelines/05-claims.md`).
- **Prefer cases from our industries** (fintech, payments, digital banking, marketplaces, internet, SaaS). Use other industries only when no ICP case fits, and say what transfers.

## 6. Voice checks

From `messaging-guidelines/04-voice.md`:

- **Guardian first:** name the risk before it becomes a problem, protect continuity and a safe exit, make no promise we cannot back up, and push back when that protects the reader (for example: "hire in-house instead").
- **Sage second:** explain in plain language, separate fact (with its source) from judgement.
- **Never** Magician (revolution, 10x), Hero (rescue, firefighting), Ruler (dominance, control over the client), Buddy (jokey), Factory (people as resources, CV catalogues).
- **Words we use:** responsibility, important system, continuity, decision, evidence, team, product, result, risk, predictability, next step, working together, scaling.
- **Spell out every acronym the first time** (information and communication technology (ICT), DORA, PMO, SLA). Job titles (CTO, VP) and AI, EU and UK stay as they are. The build warns on acronyms used without their full name.
- **Low price is never an advantage we claim.** When cost comes up, compare total cost and risk, not rates.

## 7. The metadata block

`messaging-guidelines/README.md` asks every output to carry its audience, role, funnel stage, CTA, claims and open questions. The build writes them at the top of `article.md` from `meta`, `cta`, `report.claim_ids` and `report.open_questions`. `claims_used` must not be empty when the article names The Codest's services.
