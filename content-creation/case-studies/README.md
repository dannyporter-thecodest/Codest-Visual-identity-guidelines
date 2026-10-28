# Case studies

Everything Cody (or any AI agent) needs to write The Codest's case studies in one format, and build each one as a page in the design system.

The format copies The Software House (tsh.io) case studies: their section order, section sizes and title shape. The Codest's own rules sit on top: no invented facts, the source's own terms kept, statistics carried over, verbatim quotes, blocked clients. The aim is a better case study, never a re-created one.

## Two workflows

| | Convert an old case study | Create a new case study |
|---|---|---|
| Use when | A case study already exists on thecodest.co | A project has no case study yet |
| The source | The old page, copied into `source.md` | The Delivery intake form, copied into `intake.md` |
| Start here | `convert/README.md` | `create/README.md` |
| Prompt for Cody | `convert/CODY_TASK.md` | `create/CODY_TASK.md` |
| Extra files | `convert/mapping.md` (old sections to new), `convert/inventory.json` (every live case) | `create/delivery-intake.md` (the form Delivery fills in), `create/rules.md`, `create/example-intake.md` |

Both workflows use the same rules, templates, build script and output.

## Shared rules (read in this order)

| # | File | What it settles |
|---|---|---|
| 1 | `rules/01-format.md` | The 10 sections, their order, word counts and page layout |
| 2 | `rules/02-titles.md` | Title shape (company, technology, outcome), length, what to cut |
| 3 | `rules/03-writing-register.md` | Tone, and keeping the source's terms |
| 4 | `rules/04-statistics.md` | Where statistics go, and what to do when there are none |
| 5 | `rules/05-hard-rules.md` | Rules that are never broken |
| 6 | `rules/06-checks.md` | The self-check before handing anything back |
| | `examples/estimote/` | A finished, approved case study to copy the standard from |

"The source" in the rules means the old page when converting, and the Delivery intake when creating.

## Outcomes: what every case study must produce

One folder `content-creation/case-studies/output/<slug>/` with:

| File | What it is | Who uses it |
|---|---|---|
| `source.md` or `intake.md` | The old page's text, or Delivery's completed intake form, copied as is | Proof of where each fact came from |
| `content.json` | The case study as data, following `templates/content.schema.json` | Input to the build |
| `case-study.md` | The case study as plain text | Sent to the client for sign-off |
| `page.html` | The case study page built from the design system | Web team, review |
| `report.md` | Publication status, statistics used and their claims register status, facts left out, gaps, questions for Delivery, build warnings | Danny, Delivery |

Cody writes `source.md` or `intake.md`, and `content.json`. The build generates the rest:

```
node content-creation/case-studies/build.js content-creation/case-studies/output/<slug>/content.json --shot
```

A case study is **done** when the build reports `0 errors`, every warning is fixed or explained in the report, and the page has been looked at at 1440px and 375px.

## Files

```
case-studies/
  README.md                 this file
  build.js                  checks content.json and builds case-study.md, page.html, report.md
  rules/                    shared rules (01 to 06)
  templates/
    content.schema.json     the shape of content.json
    content.example.json    a blank to start from
    case-study.md           the plain text skeleton
    case-study-page.html    the page template (design system components)
  examples/estimote/        the reference case study
  convert/                  workflow 1: old case studies into the new format
    README.md  CODY_TASK.md  mapping.md  inventory.json
  create/                   workflow 2: new case studies from Delivery's input
    README.md  CODY_TASK.md  delivery-intake.md  rules.md  example-intake.md
  output/<slug>/            one folder per case study
```
