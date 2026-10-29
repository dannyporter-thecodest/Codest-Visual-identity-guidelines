# The Codest brand and content

Staging copy of two folders in Cody's repository (`codesthq/cody-agent`). The layout and paths match Cody's repository exactly, so a reviewed change here can be copied into Cody unchanged.

Each folder has one job (single responsibility):

| Folder | What it is | Start here |
|---|---|---|
| `brand/` | A description of the brand only: visual identity guidelines and design system (tokens, fonts, assets, components) | [`brand/README.md`](brand/README.md) |
| `content/` | Everything made with the brand: articles, case studies, creatives (social, ads, banners, covers, email) and landing page templates | [`content/README.md`](content/README.md) |
| `archive/` | Files kept here only, not in Cody: Figma page screenshots and rendered creative examples | [`archive/README.md`](archive/README.md) |

`content/` uses `brand/`; `brand/` never refers to `content/`.

Paths in the documents (for example `messaging-guidelines/`) are written from the root of Cody's repository. Run commands from the repository root, for example `node content/case-studies/build.js content/case-studies/examples/estimote/content.json`.
