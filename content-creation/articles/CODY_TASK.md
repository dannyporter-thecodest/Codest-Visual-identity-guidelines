# Prompt: this week's article

Give Cody this prompt once a week. It runs end to end with no input from people and ends with a finished article. It does not publish.

To write about a specific question instead, add: "Use this question: <question>." Cody still scores it and checks for duplicates.

---

Create this week's blog article for The Codest.

1. Start a Cody task for the article (`./cody task new`, then `./cody task start`).
2. Read `content-creation/articles/README.md`, then `rules/01` to `rules/10` in order, then `messaging-guidelines/01-positioning.md`, `02-icp.md`, `03-messaging.md`, `04-voice.md` and `05-claims.md`.
3. Follow `rules/09-weekly-topic-research.md`:
   - refresh any article past its `review_by` date first
   - otherwise collect 6 to 10 candidate questions, score them, check the top 5 results for the best one, and pick it
   - if nothing scores 9 or more, stop and report the best candidates and what each was missing
4. Write `content-creation/articles/output/<slug>/brief.md` from `templates/brief.md`, and add the topic to `topics.json` (`status: brief`).
5. Find 2 to 5 primary sources from at least 2 publishers (`rules/06-sources-and-claims.md`). Open each page and copy figures exactly, with their year. If you cannot open a primary page, leave the figure out and note it.
6. Find the public Codest material that fits: a live case study, a service page, or a published post or talk.
7. Write `content-creation/articles/output/<slug>/content.json` following `templates/content.schema.json` and `templates/content.example.json`:
   - The answer comes first, in the lead and under every heading.
   - Build the information gain element from your sources and record it in `information_gain`.
   - Follow problem, responsibility, model (`rules/10-messaging.md`), and record the pillars, models, limits and responsibility section in `messaging`.
   - Never invent a figure, a quote or an experience.
8. Run `node content-creation/articles/build.js content-creation/articles/output/<slug>/content.json --shot`. Fix every error. Fix or explain every warning in `report.notes`.
9. Look at `shot-1440.png` and `shot-375.png`. Answer the 16 self-check items in `report.self_check` honestly.
10. Set the topic to `status: finished` in `topics.json`.
11. Record each step with `./cody task action --files ...` and the build with `./cody task test`.
12. Report back:
    - the question and its score
    - the status line from `report.md`
    - the files in `output/<slug>/`
    - anything you could not verify

Do not publish anything. Do not mention MUFG or Allegro. Do not write for the US market. No em dashes.
