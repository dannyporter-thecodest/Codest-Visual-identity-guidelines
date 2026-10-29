# 08. Checks before handing an article over

Run the build first. It checks everything mechanical:

```
node content/articles/build.js content/articles/output/<slug>/content.json --shot
```

Then Cody answers every item below in `report.self_check` (in `content.json`) with `yes`, `no` or `n/a` plus a short note. Any `no` must be fixed, or explained in `report.notes`. Be honest: a `yes` that is not true is worse than a `no`.

## Substance

1. Does the hook make a CTO want to read on, and does the lead then answer the buyer question, so a reader could stop there? Does the title name an outcome or insight the article delivers?
2. Does every section add something a generic article on this topic would not have (a sourced figure, a condition, an example, a clear view)?
3. Is there at least one clear position, including when not to do something?
4. Is the information gain real: would a reader need several of the sources to get it themselves?
5. Did you open every outside source and copy figures exactly, with their year?

## Buyer

6. Is the article for one audience group and one buying role, and does it use their words (`messaging-guidelines/02-icp.md`)?
7. Does it lead with the buyer's problem, not with The Codest, a technology or AI?
8. Is the CTA one small next step that fits the question?

## AEO/GEO

9. Can each H2 section be read on its own, from its heading and first sentence?
10. Are things named the same way throughout (A7 in `05-aeo-geo.md`)?
11. Do the H2s and related questions cover what the buyer would ask next?

## Safety

12. No blocked clients, US market, invented experience, or blocked or conditional claims without clearance?
13. Is the article different enough from every entry in `topics.json` (not a reworded version of one)?

## Page

14. Have you looked at the page at 1440px and 375px (`shot-1440.png`, `shot-375.png`)? Title, table and CTA readable on mobile?

## Messaging (rules/10-messaging.md)

15. Does the article follow problem, responsibility, model, with the limit stated next to every model it names?
16. Does it sound like the Guardian and the Sage, with no internal strategy language, and no claims beyond CLM-001 and CLM-003 unless their condition is cleared?

An article is **finished** when the build reports 0 errors, every warning is fixed or explained in `report.notes`, and all 16 self-check items are answered. `report.md` then says `Status: finished`, and the article can go to whatever workflow publishes it.
