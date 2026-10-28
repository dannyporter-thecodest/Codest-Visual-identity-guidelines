# Convert an old case study

Turns a case study already live on thecodest.co into the new format. The old page is the only source: every fact, term and statistic comes from it.

## Read first

1. `../README.md` (outcomes and files)
2. `../rules/01-format.md` to `../rules/06-checks.md`
3. `mapping.md`: how each old section maps to the new format
4. `../examples/estimote/`: the approved standard

## Workflow for one case study

1. **Copy the source.** Open the old page and copy its text into `output/<slug>/source.md`: headline, hero facts, every section, every statistic (headline, stats band, results, FAQ), the quote with name and role.
   - Stats band numbers are animated counters. Scroll to them, wait until they stop, and read twice before copying.
   - FAQ answers are collapsed. Open every one.
2. **Write `content.json`.** Start from `../templates/content.example.json`. Use only facts and terms in `source.md`.
3. **Fill the report fields:** every statistic on the source (`report.source_statistics`), the quote exactly as on the source (`report.source_quote`), facts left out, gaps, questions for Delivery.
4. **Build:** `node case-studies/build.js case-studies/output/<slug>/content.json --shot`
5. **Fix every error and warning**, or explain the warning in the report. Never pad.
6. **Look at the page** next to `../examples/estimote/page.html`.
7. **Update `inventory.json`**: set the case to `converted` and add the slug.

## Batch

`inventory.json` lists every live case study (21 when it was made). `CODY_TASK.md` is the prompt to convert them all.
