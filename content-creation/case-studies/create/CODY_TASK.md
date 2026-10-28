# Task for Cody: create a new case study from a Delivery intake form

Paste this to Cody with the completed intake form attached or pasted below it.

---

**Goal.** Write a new case study for The Codest from Delivery's completed intake form, and build it as a page in the design system. The output is a draft for internal review and client sign-off. Do not publish anything.

**Read first, in this order.** `visual-identity-and-design-system/AGENT_GUIDE.md`, `content-creation/case-studies/README.md`, `content-creation/case-studies/rules/01-format.md` to `06-checks.md`, `content-creation/case-studies/create/rules.md`, `content-creation/case-studies/create/example-intake.md`, then `content-creation/case-studies/examples/estimote/` for the standard of tone and length.

**Steps:**

1. Choose a slug from the client name, or from the description in 1.3 if the client cannot be named.
2. Copy the completed form, unchanged, into `content-creation/case-studies/output/<slug>/intake.md`.
3. If the form names or describes MUFG or Allegro, stop and tell Danny.
4. Write `content-creation/case-studies/output/<slug>/content.json` from `content-creation/case-studies/templates/content.example.json`. Set `source_url` to null and `intake` to `intake.md`.
   - Use only facts in `intake.md`. Never invent a fact, number, technology, timeline, team detail or quote.
   - Use Delivery's terms for the client, what was built (4.1, word for word), its features and the tech stack. Improve the sentences, never the terms.
   - Title: company, technology, outcome, 8 to 14 words, max 3 lines (`rules/02-titles.md`).
   - Client name only with written consent (1.2); quote only if approved in writing (7.3); statistics only with a before and after or a source (6.1). Everything else becomes a question.
   - No statistics: no stats band, and capability bullets in Results from 6.2.
   - Never mention anything listed in 1.7.
   - List every figure used in `report.source_statistics` and the approved quote in `report.source_quote`.
   - Add a question to `report.questions_for_delivery` for every empty or "not sure" field that matters (`create/rules.md`, section 5).
5. Run `node content-creation/case-studies/build.js content-creation/case-studies/output/<slug>/content.json --shot`.
6. Fix every error. Fix every warning, or explain it in `report.facts_missing`. Never pad a section to reach a word count.
7. Look at `shot-1440.png` and `shot-375.png`.

**Deliver.** One branch and one pull request with the `content-creation/case-studies/output/<slug>/` folder. In the pull request description, give the title, the statistics used, and the questions for Delivery, numbered so Delivery can answer them in one reply. If a required field was missing, say the case is `needs_delivery`.

**Do not** edit `rules/`, `templates/` or the form, change the design system, add photos or logos, or publish to the website.
