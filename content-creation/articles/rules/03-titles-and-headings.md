# 03. Titles, hooks and headings

The title and the hook earn the click. The headings and the first sentence under each one earn the citation. A buyer types or asks a question; the page whose heading matches that question, with the answer directly underneath, is the one that gets shown or quoted.

## The buyer question and the title

Every article has two things:

- **The buyer question** (`question`): the question the buyer actually asks, in their words. "Should you hire in-house or extend your engineering team?" It drives the topic research, the duplicate check, the lead answer and the AI citation log. It is not shown as the headline, but it goes into the page's structured data (`alternativeHeadline`) so search engines and AI assistants can match it.
- **The title** (`title`, the H1): a statement that names the outcome the reader wants, or a sharp, true insight. Not a neutral question. It should make a CTO want to read it, and it should support what The Codest does without selling.

AI assistants do not lift answers from the title. They lift them from the question headings and the first sentence under each one (below), so a statement title costs nothing in AEO/GEO as long as those stay in place.

### Four title patterns

| # | Pattern | Example | Best for |
|---|---|---|---|
| 1 | **How to [outcome] without [the buyer's biggest fear]** | How to extend your engineering team without losing control | Most buyer-questions articles. Use the fear from `messaging-guidelines/02-icp.md` |
| 2 | **Why your [thing] [is not working], and what to do instead** | Why your roadmap keeps waiting on hiring | A common problem the reader may not have named yet |
| 3 | **The answer as a statement** | Extend your team for urgent work, hire in-house for the core | Clear decisions. The title is the answer, which AI answers can quote directly |
| 4 | **[A named problem], and how to solve it** | The vendor handover gap, and how to close it | Giving a familiar pain a memorable name (only if the name is plain English, not jargon) |

Pattern 1 with "using [approach]" also works: "How to test an AI feature in a payments platform using a small prototype".

### Title rules

| Rule | Check |
|---|---|
| Not a question: no "?" and no opening with Should, Is, Are, Do, Does or Can | error |
| 7 to 14 words, max 70 characters | error |
| Contains the primary query's main words (`04-seo.md`) | error |
| Does not name The Codest. The reader's outcome is the subject, not us | error |
| Supports a balanced answer. No one-sided claims the article does not prove: "better than", "more beneficial", "the best", "always", "beats" | warning: fix it or show the proof and its conditions |
| No year unless the answer really changes by year | warning |
| No clickbait ("you won't believe", "the secret", "ultimate guide", "everything you need") | error |
| No hype words from `messaging-guidelines/04-voice.md` | warning |

**Good:**
- How to extend your engineering team without losing control
- Why your roadmap keeps waiting on hiring
- Extend your team for urgent work, hire in-house for the core
- How to test an AI feature in a payments platform before committing a budget

**Bad, and why:**
- "Should you hire in-house or extend your team?" (neutral question; keep it as the buyer question instead)
- "Why extending your team beats hiring in-house" (one-sided; our own guidance says hire in-house for core roles)
- "Why The Codest is the right partner for your fintech" (about us, not the reader)
- "How AI is transforming fintech" (commodity, AI in the headline, no decision)
- "10 benefits of staff augmentation" (a list, not an answer)

## The hook

The first thing on the page, before the lead answer. Its job is to make the reader feel the situation in two seconds, then hand straight over to the answer.

| Rule | Check |
|---|---|
| 1 to 3 short sentences, 12 to 45 words | error |
| A concrete scene in the reader's world, a sourced figure, the cost of waiting, or a true point that surprises | self-check |
| Second person or a plain statement. Short sentences | self-check |
| No question marks. No "Picture this", "Imagine", "In today's", "Let's" or other filler openers (`messaging-guidelines/04-voice.md`) | error |
| No drama: no rescue, no "disaster", no significance inflation. Calm, specific | warning per hype word |
| Any figure in the hook also appears in a body section next to its source | error |
| The lead answer comes immediately after, so the answer still lands in the first 100 or so words | built in |

**Good:**
- "The roadmap is agreed and the funding is in, but the two engineers you need are still not hired. In 2023, more than half of EU companies recruiting tech specialists had the same problem."
- "Your vendor's pitch team was excellent. Three weeks in, you have not met any of them again."

**Bad, and why:**
- "Picture this: your roadmap is on fire." (label opener, drama)
- "Is your hiring holding you back?" (rhetorical question)
- "In today's competitive talent market..." (filler opener)

## The H2 headings

- Every body H2 is a question, ending with "?" (error).
- Each H2 asks one question, 5 to 14 words (warning outside this).
- Together they cover the follow-up questions a buyer would ask after the buyer question: what it is, when it fits, what it costs or risks, how to do it, how to check it.
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
