# Task for Cody: convert every case study to the new format

Paste this to Cody as is. To convert only some cases, change the "Scope" line.

---

**Goal.** Convert The Codest's case studies on thecodest.co into the new case study format, and build each one as a page in the design system. The output is for internal review and client sign-off. Do not publish anything.

**Scope.** Every case in `content/case-studies/convert/inventory.json` with status `todo`.

**Read first, in this order.** `brand/AGENT_GUIDE.md`, `content/case-studies/README.md`, `content/case-studies/convert/README.md`, every file in `content/case-studies/rules/` (01 to 06), `content/case-studies/convert/mapping.md`, then `content/case-studies/examples/estimote/` (`content.json`, `case-study.md`, `page.html`). The Estimote example is the approved standard for tone, length and structure.

**For each case:**

1. Set its status to `in_progress` in `inventory.json`. Choose a short slug from the client name (for example `yieldbird`), or from a descriptor if the client is not named.
2. Open the case URL. Copy the page text into `content/case-studies/output/<slug>/source.md`: headline, hero facts, every section in order, every statistic (headline, stats band, results, FAQ), and the quote with name and role. Copy, do not summarise.
   - **Stats band numbers are animated counters.** They count up from 0 when scrolled into view, so text copied too early is wrong (SupplierPlus showed "2+" and "4" instead of "5+" and "12"). Scroll the stats band into view, wait until the numbers stop, read them, wait a few seconds and read again. Only copy them when both reads match.
   - **FAQ answers are hidden in collapsed sections.** Open every FAQ item, or read the page's full text, and copy every answer. They often hold the timeline and extra results.
3. If the case names or describes MUFG or Allegro, stop. Set status `blocked`, note why, and move to the next case.
4. Write `content/case-studies/output/<slug>/content.json` from `content/case-studies/templates/content.example.json`, following the rules:
   - Use only facts in `source.md`. Never invent a fact, number, technology, timeline or quote.
   - Keep the source's own terms for the client, what was built, its features and technologies. Improve the sentences; never rename or re-describe the facts.
   - List every statistic on the source in `report.source_statistics`, exactly as written, and show each one in Results (and in `stats_band` if the source has a stats band).
   - No statistics on the source: no stats band, and capability bullets in Results.
   - Copy the quote exactly into both `quote.text` and `report.source_quote`.
   - Formal, precise, professional register (`rules/03-writing-register.md`). British English. No em dashes.
   - Always add a question for Delivery to confirm the baseline and source of the statistics.
   - Leave `report.claim_ids` empty unless Marketing has given you register IDs. Never create register entries. Statistics without an ID block publication; the report says so.
5. Run `node content/case-studies/build.js content/case-studies/output/<slug>/content.json --shot`.
6. Fix every error. Fix every warning, or explain it in `report.facts_missing` (for example, a section is short because the source has no more facts). Never pad a section to reach a word count.
7. Look at `shot-1440.png` and `shot-375.png`. Nothing overlaps or is cut off.
8. Set status `converted` (or `needs_delivery` if a required fact such as headquarters or tech stack is missing) and record the slug.

**After all cases:** set each case's `other_case` to the next converted case in `inventory.json` (the last links to the first), and build them all again.

**Deliver.** One branch and one pull request with every `content/case-studies/output/<slug>/` folder and the updated `inventory.json`. In the pull request description, list for each case: the new title, how many statistics were carried over, the questions for Delivery, and any case marked `blocked` or `needs_delivery`.

**Do not:** edit `templates/` or `rules/` while converting, change the design system, add photos or logos, or publish to the website. If a rule does not cover a situation, note it in the pull request and continue with the safest reading.
