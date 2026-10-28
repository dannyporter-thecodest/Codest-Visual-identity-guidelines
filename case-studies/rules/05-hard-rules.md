# 05. Hard rules

The format copies TSH. These Codest rules apply on top and are never broken. The build fails on the ones it can check.

1. **No invented facts.** Every fact, number, name, date, technology and quote comes from the source page or from Delivery in writing. If it is not there, the sentence goes. Do not fill gaps with plausible detail.
2. **Statistics from the source are kept.** Every figure on the old case study goes into Results (and the stats band if the old page has one), exactly as written. No statistics on the source: none are added. (`04-statistics.md`)
3. **Numbers match everywhere.** Any figure in the title, hook or impact statement is the same figure in Results. *(checked by the build)*
4. **Blocked clients.** Never name, describe or hint at MUFG or Allegro in any form, including anonymised descriptions. If a source case is about one of them, stop and mark it `blocked` in `inventory.json`. *(name check in the build)*
5. **Consent.** Name the client only if the source page names them. Otherwise use a factual descriptor and `About the client`.
6. **Quotes are verbatim.** Copy the quote exactly, full length, with the name and role from the source. Never write, shorten, reword or combine quotes. *(checked against `report.source_quote`)*
7. **No em dashes or en dashes** anywhere in the copy. *(checked by the build)*
8. **Design system only.** Build the page with `templates/case-study-page.html` and `build.js`. Do not edit the template per case, add colours, or rebuild components. Follow `AGENT_GUIDE.md` at the repo root.
9. **Photos.** Do not add photos or logos that are not supplied. Client logos need written consent.
10. **Do not publish.** Output is for review and client sign-off. Nothing goes live on thecodest.co from this workflow.
