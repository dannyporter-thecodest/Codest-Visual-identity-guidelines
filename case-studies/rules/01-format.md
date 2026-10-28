# 01. Format

Ten sections, always in this order, plus a stats band when the source has statistics. Word counts come from measuring TSH's latest 10 case studies.

| # | Section | Heading on the page | Size | Required |
|---|---|---|---|---|
| 1 | Case study title | (the page title) | 8 to 14 words, max 3 lines, catchy | Yes |
| 2 | Problem hook | none | 1 sentence, 20 to 35 words | Yes |
| 3 | Impact statement | none | 1 sentence, 20 to 35 words | Yes |
| 4 | About the client | `About <Client name>`, or `About the client` if the client is not named | 40 to 65 words | Yes |
| 5 | Stats figure | none (in the hero) | Industry, Headquarters, Tech stack | Yes |
| 6 | Challenge | `Challenge` | 150 to 220 words | Yes |
| 6a | Stats band | none | 2 to 4 figures | Only if the source has statistics |
| 7 | Project description | `Project description` | 100 to 150 words | Yes |
| 8 | Approach | `Approach` | 100 to 160 words | Yes |
| 9 | Results | `Results` | 60 to 110 words | Yes |
| 10 | Client's opinion | `Client's opinion` | Verbatim quote | Only if the source has a quote |

Nothing else goes on the page. Partnership goal, Solution, Process, FAQ and inline CTA blocks from the old pages are dropped after their facts are moved into the right section (see `06-conversion-mapping.md`).

## Page layout

Navy hero (category tag, title, stats figure) → problem hook and impact statement → About → Challenge → stats band → Project description → Approach → Results → Client's opinion → other case studies → closing CTA band → footer.

There is no table of contents and no tab bar. `templates/case-study-page.html` already builds this layout; do not change it per case study.

## Section by section

### 1. Case study title
- Names what was built or changed: client, verb, the system. Use a formula from `02-titles.md`.
- Client first. The Codest is not named in the title.
- Never leads with a statistic. A number only as the scale of the thing built, and it also appears in Results.

### 2. Problem hook
- One sentence, 20 to 35 words, the first line below the hero.
- States the problem the client had, in business terms, not the technology.
- Example: "At the height of the COVID-19 pandemic, Estimote required a space management application that would help organisations comply with social distancing guidelines and enable rapid contact tracing."

### 3. Impact statement
- One sentence, 20 to 35 words, shown in bold navy under the hook.
- States the value The Codest delivered. Names The Codest in the third person.
- Example: "The Codest delivered the frontend and backend of a space management application that alerts employees to unsafe proximity and enables administrators to immediately identify close contacts."

### 4. About the client
- What the company does, who it serves, where it is based.
- Facts only. No praise ("a leading", "innovative") unless the source states it as a fact.

### 5. Stats figure
- Exactly three labels: `Industry`, `Headquarters`, `Tech stack`.
- Copy the values from the old page's hero. Headquarters as "City, Country". If a value is missing, write `[to confirm]` and add a question for Delivery.

### 6. Challenge
- Paragraph 1: the business context and the problem.
- Paragraph 2: what the client needed.
- `Key challenges:` then 3 or 4 bullets, each `Label: one sentence`.
- Closing sentence: what failure or delay would have cost.

### 6a. Stats band
- Full-width navy band directly under Challenge.
- 2 to 4 figures, each a value plus a label of 3 to 7 words.
- Only figures from the source, copied exactly. No statistics on the source: no band.

### 7. Project description
- What was built and what it does, for whom. One paragraph, sometimes two.
- For team extension cases (one developer or a team joining the client), describe the product the team worked on and the role they filled.

### 8. Approach
- What The Codest was responsible for and how the work was delivered, written from the source's own approach content.
- Do not open with a sentence that restates the stats band or the impact statement (for example "The Codest embedded senior Ruby engineers in the project"). Start with what the source says about how the work was done.
- 2 or 3 paragraphs. "We" is allowed here.
- Team composition in one line, in the source's words, only if the source states it (for example "a skilled team of software developers and engineers who understood the nuances of financial services").

### 9. Results
- One summary sentence, 15 to 25 words.
- 3 to 5 bullets, each opening with a bold phrase.
- Statistics first, then capabilities. See `04-statistics.md`.

### 10. Client's opinion
- The quote exactly as on the source, with name, role and company.
- No quote on the source: leave the section out. Never write one.
