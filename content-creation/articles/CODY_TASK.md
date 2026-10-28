# Prompt: write an answer article

Copy this to Cody, filling in the angle brackets.

---

Write a blog article for The Codest that answers this question: <title question>.

Category: <buyer-questions | ai-in-industry>. Topic area: <topic_area>. Industry: <industry or all>.
Brief: `content-creation/articles/output/<slug>/brief.md`.
Expert input: `content-creation/articles/output/<slug>/expert-input.md` <or: not available yet>.

1. Start a Cody task for the article (`./cody task new`, then `./cody task start`).
2. Read `content-creation/articles/README.md`, then `rules/01` to `rules/08` in order, then `messaging-guidelines/04-voice.md` and `messaging-guidelines/05-claims.md`.
3. Read the brief and the expert input. Check `content-creation/articles/topics.json` for close topics. If this question is already answered, stop and say which article to update instead.
4. Find 1 to 4 primary sources for the outside facts (`rules/06-sources-and-claims.md`). Open each page and copy figures exactly, with their year. If you cannot open the primary page, leave the figure out and say so.
5. Write `content-creation/articles/output/<slug>/content.json` following `templates/content.schema.json`. The answer comes first, in the lead and under every heading. Use first-hand views only from the expert input. Never invent a view, a quote or a number.
6. Run `node content-creation/articles/build.js content-creation/articles/output/<slug>/content.json --shot`. Fix every error. Fix or explain every warning in `report.notes`.
7. Look at `shot-1440.png` and `shot-375.png`. Answer the self-check in `report.self_check`.
8. Add or update the topic in `topics.json` (`status: draft`).
9. Record each step with `./cody task action --files ...` and the build with `./cody task test`.
10. Report back: the publication status from `report.md`, the questions for the reviewer, the quotes to approve, and anything you could not verify.

Do not publish anything. Do not mention MUFG or Allegro. Do not write for the US market. No em dashes.
