# Create a new case study

Writes a case study for a project that has none yet. The source is Delivery's completed intake form: every fact, term and statistic comes from it.

## How it works

1. **Delivery fills in `delivery-intake.md`** for the project, with the client contact's help where needed. Only the fields marked **Required** must be filled; everything else makes the case study stronger but is optional.
2. **Danny passes the completed form to Cody** with `CODY_TASK.md`.
3. **Cody writes the case study** by the shared rules and `rules.md`, builds it, and returns the outputs plus a list of gaps and follow-up questions.
4. **Delivery answers the questions** (or says the answer is not available). Cody updates the case study.
5. **The client signs off** on `case-study.md`: the text, the statistics, the quote and whether they can be named.
6. Only then does the case study go to the web team.

A case study can always be written from the required fields alone. Missing statistics, quote or client name change what the page shows (see `rules.md`), they never stop it.

## Read first

1. `../README.md` (outcomes and files)
2. `../rules/01-format.md` to `../rules/06-checks.md`
3. `rules.md`: the extra rules for new case studies, and which intake field feeds which section
4. `example-intake.md`: a completed form and the case study it produces
5. `../examples/estimote/`: the approved standard for tone and length

## Files

| File | What it is |
|---|---|
| `delivery-intake.md` | The form Delivery fills in. Send it as is, or copy it into a doc |
| `rules.md` | Rules that apply only to new case studies, and the field-to-section map |
| `example-intake.md` | A completed intake form (Estimote facts) to show the level of detail needed |
| `CODY_TASK.md` | The prompt to give Cody with a completed form |
