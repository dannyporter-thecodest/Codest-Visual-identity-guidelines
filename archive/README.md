# Archive

Files that are not needed to build anything with the design system, kept here so they can be re-added later. They are not moved into Cody's repository (`codesthq/cody-agent`).

| Folder | What it is | Where it came from | Used by |
|---|---|---|---|
| `design-system-reference/` | 19 screenshots of the main Figma pages (home, services, case study detail and others) | `visual-identity-and-design-system/design-system/reference/` | Visual comparison only. Previously shown on the "page sections" page of `visual-identity-and-design-system/visual-identity/guidelines-print.html` |
| `creatives-examples/` | 18 rendered examples of the creative templates (social posts, ads, banners, covers) | `visual-identity-and-design-system/creatives/examples/` | Previously shown on the "creatives" page of `visual-identity-and-design-system/visual-identity/guidelines-print.html`. `node visual-identity-and-design-system/creatives/render.js --batch visual-identity-and-design-system/creatives/examples/examples.json` recreates them |

## To re-add them

Move the folders back to where they came from:

```
git mv archive/design-system-reference visual-identity-and-design-system/design-system/reference
git mv archive/creatives-examples/*.png visual-identity-and-design-system/creatives/examples/
```

To show them in the print layout again, restore the two image rows in `visual-identity-and-design-system/visual-identity/guidelines-print.html` from the commit that removed them. Then restore the references in `AGENT_GUIDE.md`, `design-system/README.md`, `creatives/README.md` and `manifest.json` inside `visual-identity-and-design-system/` (see the commit that archived them).

Cody's repository refuses binary files through its normal task process. Adding these images there needs a separate commit approved by a person.
