# Archive

Files that are not needed to build anything with the design system, kept here so they can be re-added later. They are not moved into Cody's repository (`codesthq/cody-agent`).

| Folder | What it is | Where it came from | Used by |
|---|---|---|---|
| `design-system-reference/` | 19 screenshots of the main Figma pages (home, services, case study detail and others) | `design-system/reference/` | Visual comparison only; and the "page templates" page of `visual-identity/guidelines-print.html` |
| `creatives-examples/` | 18 rendered examples of the creative templates (social posts, ads, banners, covers) | `creatives/examples/` | The "creatives" page of `visual-identity/guidelines-print.html`. `node creatives/render.js --batch creatives/examples/examples.json` recreates them |

## To re-add them

Move the folders back to where they came from:

```
git mv archive/design-system-reference design-system/reference
git mv archive/creatives-examples/*.png creatives/examples/
```

Then point the image paths in `visual-identity/guidelines-print.html` back to `../design-system/reference/` and `../creatives/examples/`, and restore the references in `AGENT_GUIDE.md`, `design-system/README.md`, `creatives/README.md` and `manifest.json` (see the commit that archived them).

Cody's repository refuses binary files through its normal task process. Adding these images there needs a separate commit approved by a person.
