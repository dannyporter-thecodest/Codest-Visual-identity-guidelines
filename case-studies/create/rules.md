# Rules for new case studies

All the shared rules in `../rules/` apply. "The source" is the completed intake form, copied into `output/<slug>/intake.md`. These rules are added for new case studies.

## 1. The intake is the only source

- Every fact, number, name, technology and quote comes from `intake.md`. Nothing from memory, the client's website or other case studies, unless Delivery added it to the form.
- **Use Delivery's terms.** The name in 4.1 is the name of what was built, word for word, in the title and throughout. Features (4.3), tech stack (5.2) and the client description (2.1) keep Delivery's wording. Improve the sentences, never the terms.
- "Not sure" or an empty field means the fact is not available. Leave it out and ask (section 4 below).

## 2. Where each field goes

| Section | Intake fields | If missing |
|---|---|---|
| Case study title | 1.1 or 1.3, 4.1, and 3.2 or 4.2 for the outcome | Required fields; ask |
| Stats figure | 1.4, 1.5, 5.2 | Required; ask. Headquarters may be a region only if that is all the client allows |
| Problem hook | 3.1, 3.2 | Required |
| Impact statement | 5.1, 4.1, 4.2 | Required |
| About [Client] | 2.1, 2.2, 1.5 (1.3 if not named) | Required (2.1) |
| Challenge | 3.1, 3.2, 3.3, 3.4, 3.5 | 3.3 missing: no stakes sentence |
| Stats band | 6.1 | No statistics: no stats band |
| Project description | 4.2, 4.3, 4.6, 5.6 | Required (4.2, 4.3) |
| Approach | 5.1, 5.3, 5.4, 5.5, 5.7, 5.2 | Team line only if 5.3 is filled |
| Results | 6.1, then 6.2, then 6.3 | No statistics: 3 capability bullets from 6.2 |
| Client's opinion | 7.1, 7.2, 7.3 | No quote, or not approved: section left out |
| Not used on the page | 1.6, 1.7, 8.x | 1.7 is a hard limit: never mention what is listed there |

## 3. Consent and approval

- **Client name:** use it only if 1.2 says written consent. "No" or "not asked yet": use the description in 1.3 and the heading "About the client", and add a question.
- **Quote:** use it only if 7.3 says approved in writing. Otherwise leave the section out and add a question. Never write, shorten or combine a quote.
- **Statistics:** use a figure only if it has a before and after or a stated source in 6.1. A figure with neither goes in the report as a question, not on the page.
- **Things not to mention (1.7):** never appear anywhere, including the report.
- The case study is a draft until the client has signed off `case-study.md`.

## 4. Statistics for new case studies

- Show each figure from 6.1 as on the form ("60% faster occupancy tracking"). Do not calculate new figures from the before and after unless the form states them.
- Strong figures (2 to 4) can also go in the stats band. With only one figure, use Results only.
- List every figure in `report.source_statistics`. The build checks each one appears on the page.

## 5. Gaps and questions back to Delivery

Cody never fills a gap with a plausible guess. For every required field that is empty or "not sure", and every optional field that would change the page, add a question to `report.questions_for_delivery`, written so Delivery can answer it in one line. Examples:

- "4.1 is empty. What does the client call the platform we built?"
- "6.1 lists 40% lower costs with no before figure. What was the cost before, and over what period?"
- "1.2 says not asked yet. Can we ask the client for written consent to be named?"

If a required field is missing, still build the draft with what is there, mark the case `needs_delivery`, and send the questions.

## 6. Writing

- Same register, length and title rules as every case study (`../rules/`).
- Delivery's form is notes, not copy. Turn it into full, professional sentences; do not copy rough notes onto the page.
- Never name individual Codest team members unless the form asks for it.
