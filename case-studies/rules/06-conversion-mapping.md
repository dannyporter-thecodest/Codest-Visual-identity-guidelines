# 06. Converting an old thecodest.co case study

Every current case study has roughly the same parts. Move each one as below, then drop the old structure.

| Old thecodest.co section | New section | Rule |
|---|---|---|
| Headline (often "The Codest Value" + a statistic) | Case study title | Replace with a title that names what was built or changed (`02-titles.md`). Never keep the old statistic-first headline; its statistics move to Results unchanged. |
| Hero facts (Industry, HQ, Tech stack) | Stats figure | Copy as is. |
| Intro or summary | Problem hook and impact statement | Split into the problem (hook) and the value delivered (impact). |
| About the client | About [Client name] | Trim to 40 to 65 words. Keep facts, drop praise. |
| Challenge, Key challenges | Challenge | Keep the labelled bullets. Rewrite in the professional register (`03-writing-register.md`). |
| Stats band | Stats band under Challenge | Copy the figures exactly. Leave out if the old page has none. |
| Solution, Project, What we built | Project description | What was built and what it does. |
| Our approach, Process, How we worked, Team | Approach | Responsibilities, delivery method, team in one line. |
| Results, headline figures, outcome callouts | Results | Every statistic carried over exactly. None: capability bullets. |
| Testimonial | Client's opinion | Verbatim, with name and role. |
| Partnership goal, FAQ, inline CTA blocks | Dropped | First move any fact or statistic in them into the right section. |

## Team extension cases

Several cases are about placing developers in a client's team (for example "Deployed senior Ruby talent in under 10 days"). Use the same format:

- Challenge: the hiring or capacity problem and what it was blocking.
- Project description: the client's product and the role the developers filled.
- Approach: how The Codest selected, onboarded and integrated the developers.
- Results: the source statistics (time to hire, roadmap time saved), then what the team delivered.

## When the source is thin

If a section would fall well short of its word count because the source has nothing more, write what the source supports and stop. Do not pad. Note it in `report.facts_missing` and add a question for Delivery. A short, accurate section is better than a full, invented one.
