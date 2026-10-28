# 08. Checks before handing an article back

Run the build first. It checks everything mechanical:

```
node content-creation/articles/build.js content-creation/articles/output/<slug>/content.json --shot
```

Then answer every item below in `report.self_check` (in `content.json`) with `yes`, `no` or `n/a` plus a short note. Any `no` must be fixed or explained.

## Substance

1. Does the lead answer the title question, so a reader could stop there?
2. Does every section add something a generic article on this topic would not have (an example, a condition, a number, a view)?
3. Is there at least one clear position, including when not to do something?
4. Did every first-hand view come from the expert input, without being made more certain?
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

12. No MUFG, Allegro or GFT-as-client? No US market? No blocked or conditional claims used without clearance?
13. Is the article different enough from every entry in `topics.json` (not a reworded version of one)?

## Page

14. Have you looked at the page at 1440px and 375px (`shot-1440.png`, `shot-375.png`)? Title, table and CTA readable on mobile?

An article is **ready for review** when the build reports 0 errors, every warning is fixed or explained, and every self-check item is answered. It is **ready to publish** only when the report says `Publication: ready` and the people in `messaging-guidelines/06-publishing.md` have approved it.
