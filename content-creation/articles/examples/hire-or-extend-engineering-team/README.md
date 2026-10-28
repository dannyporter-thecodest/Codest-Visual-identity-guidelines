# Test article: Should you hire in-house or extend your engineering team?

A test of the ruleset, not an approved article. It passes the build with 0 errors. Publication is **blocked by design**:

- there is no expert input yet, so two sections rest on public case studies and the rest on general knowledge
- the reviewer is not confirmed
- the primary query's search volume has not been checked

To finish it: send `../../templates/expert-input.md` to a Delivery lead, add their answers as `expert-input.md`, rewrite the sections that rest on `general` with their first-hand view, and rebuild.

Rebuild:

```
node content-creation/articles/build.js content-creation/articles/examples/hire-or-extend-engineering-team/content.json --shot
```
