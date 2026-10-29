# 04. Statistics

The rule: **if the source case study has statistics, every one of them is shown. If it has none, none are added.**

## Where statistics come from

Look in every part of the old page: the headline, the hero, the stats band, the results section, the FAQ and any callout. List every figure you find in `report.source_statistics` in `content.json`, written exactly as on the page (`60%`, `EUR 120K`, `1M+`, `3x`, `from 5h to 23 min`).

For new case studies, statistics come from section 6.1 of the intake form and need a before and after or a source (`../create/rules.md`).

**Read stats band numbers only after they stop moving.** The old pages animate their counters up from 0 when the band scrolls into view. Scroll to it, wait, read twice a few seconds apart, and only copy the numbers when both reads match. A number copied mid-count is an invented statistic.

## Where they go

| The source has | Results | Stats band | Title |
|---|---|---|---|
| Headline or results statistics | One bullet per statistic, first in the list, the figure in bold | No (unless also in a stats band) | No. The title names what was built; old headline statistics move to Results |
| A stats band | Optional | Yes, under Challenge, the same figures | No |
| No statistics | 3 capability bullets: what the client or its users can now do | Leave out | No |

Statistics are never the point of the title (`02-titles.md`). A number may appear there only as the scale of the thing built ("for 30,000 customers").

Every statistic in `report.source_statistics` must appear in Results or the stats band. The build fails if one is missing.

## How to write them

- Write currencies as their code: a source showing the euro sign becomes `EUR` (`EUR 120K`), the pound sign `GBP`, the dollar sign `USD`. Write the multiplication sign as `x` (`3x`). This is the only change allowed to a figure, because Cody's repository rejects these symbols.
- Copy the figure exactly. Do not round, convert, combine or reword it (`EUR 120K`, not `EUR 120,000` or "over EUR 100K").
- Keep the figure's meaning from the source. "60% faster occupancy tracking" stays about occupancy tracking.
- Bold the figure and what it measures; follow with the context in plain text.
  - "**60% faster occupancy tracking** across the client's office spaces."
  - "**EUR 120K saved annually** through the IoT office management platform."
- A timeline from the source counts as a statistic: "**Delivered within three months,** from development to deployment."
- Any figure in the title, hook or impact statement must also appear in Results. The build checks this.

## When there are no statistics

Use capability bullets: a bold phrase for what now exists, then what it does for the client.

- "**Automated proximity alerts** notified employees whenever they came within two metres of a colleague."
- "**Immediate contact tracing** enabled office managers to identify close contacts and issue quarantine notices faster."

Never write a vague result ("significantly improved efficiency"). Either a figure from the source or a precise statement of what changed.

## Claims register before publication

The messaging guidelines (`messaging-guidelines/05-claims.md`, `messaging-guidelines/claims-register.json`) rule that no fact, number, testimonial or case study is used publicly without a claims register entry. Old website statistics are named there as not reusable until they have one. So:

- Keep every source statistic in the draft and the report, exactly as above. The client confirms them at sign-off.
- For each statistic and the quote, record its register ID in `report.claim_ids` (for example `{"60%": "CLM-023"}`) once Marketing has added it to the register.
- Anything without an ID is listed in the report as **needs register entry**, and the report states **Publication: blocked**. The build warns for each one.
- Cody never creates register entries. Marketing adds them after the client confirms the figure and its source.

## Flag for Delivery

Most old statistics have no visible baseline or source. Keep them, and add one line to `report.questions_for_delivery`: "Confirm the baseline and source for: 60%, EUR 120K, ...". The case study goes to the client for sign-off, which is where they are confirmed.
