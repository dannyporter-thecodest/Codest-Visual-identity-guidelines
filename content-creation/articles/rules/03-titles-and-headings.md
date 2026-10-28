# 03. Titles and headings

Titles and headings do most of the work in search and in AI answers. A buyer types or asks a question. The page whose heading matches that question, with the answer directly underneath, is the one that gets shown or quoted.

## The title

**Shape:** one question, in the buyer's words, about their problem or decision.

| Rule | Check |
|---|---|
| A question that ends with "?" | error |
| 7 to 14 words, max 70 characters | error |
| Starts with How, What, When, Why, Should, Can, Is, Are, Do, Does, Where or Which | error |
| Contains the primary query (`04-seo.md`) | error |
| Does not name The Codest | error |
| No year in the title unless the answer really changes by year | warning |
| No clickbait ("you won't believe", "the secret", "ultimate guide") | error |

**Good:**
- Should you hire in-house or extend your team with an external one?
- How do you check that a vendor's team is the team that will deliver?
- Where is AI worth testing in a payments platform, and where is it not?

**Bad, and why:**
- "Team extension: the ultimate guide for 2026" (not a question, clickbait, year)
- "Why The Codest is the right partner for your fintech" (about us, not the buyer)
- "How AI is transforming fintech" (commodity, AI in the headline, no decision)
- "10 benefits of staff augmentation" (a list, not an answer)

## The H2 headings

- Every body H2 is a question, ending with "?" (error).
- Each H2 asks one question, 5 to 14 words (warning outside this).
- Together they cover the follow-up questions a buyer would ask after the title: what it is, when it fits, what it costs or risks, how to do it, how to check it.
- At least one H2 uses a secondary query (`04-seo.md`) (warning).
- The last H2 is "Key insights". "Related questions", if used, comes after it.
- No two H2s ask the same question in different words.

## The first sentence under each heading

It answers the heading. Someone who reads only the heading and that sentence should have the answer.

| Heading | Good first sentence | Bad first sentence |
|---|---|---|
| What should an exit plan with a software vendor cover? | An exit plan covers who owns the code and data, how knowledge is handed back, and how long the vendor supports the handover. | Choosing a vendor is one of the most important decisions an engineering leader makes. |
| When is hiring in-house the better choice? | Hire in-house when the work is core to your product for years and you can wait for the right person. | It depends on many factors. |

The build rejects first sentences that open with scene-setting: "In today's", "When it comes to", "It depends", "Let's", "Before we", "There are many", "In this article", "As we all know", "It is important to", "Have you ever". Figures in a first sentence still need a source or a claims register entry.

## H3 headings

Optional. Short labels or questions under a body H2, max 4 per section. Use them for steps, options or failure modes.

## Meta title and URL slug

Set in `04-seo.md`.
