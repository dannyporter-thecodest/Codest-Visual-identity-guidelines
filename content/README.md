# Content

Everything The Codest produces with its brand: articles, case studies, images and pages. Each folder has one job: its own rules, templates and build script for one kind of content.

| Folder | What it makes | Start here |
|---|---|---|
| `articles/` | Weekly blog answer articles, written for search and AI answers | `articles/README.md`, prompt in `articles/CODY_TASK.md` |
| `case-studies/` | Case studies: converting old ones, and creating new ones from Delivery's intake form | `case-studies/README.md` |
| `creatives/` | Fixed-size images: social posts, stories, link images, covers, event promos, quote cards, banners, email headers, display ads | `creatives/README.md` |
| `landing-pages/` | Reference landing and service page templates | `landing-pages/README.md` |

## What every folder uses

- **The brand** (`brand/`): visual identity and design system. Read `brand/AGENT_GUIDE.md` first.
- **The messaging guidelines** (`messaging-guidelines/`): positioning, audience, messages, voice, claims and publishing. Read `messaging-guidelines/04-voice.md` before writing anything.

Content folders point to `brand/` and `messaging-guidelines/`. Those folders never point back here: they describe the brand and the messages, not how any piece of content is made.

Run every command from the repository root, for example:

```
node content/articles/build.js content/articles/examples/external-engineers-without-losing-control/content.json
node content/case-studies/build.js content/case-studies/examples/estimote/content.json
node content/creatives/render.js social-square '{"tone":"navy","headline":"[Headline]"}' --out post.png
```
