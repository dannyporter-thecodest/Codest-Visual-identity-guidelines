# Archive

Files that are not needed to use the brand or make content, kept here so they can be re-added later. They are not in Cody's repository (`codesthq/cody-agent`).

| Folder | What it is | Where it would go | Notes |
|---|---|---|---|
| `design-system-reference/` | 19 screenshots of the main Figma pages (home, services, case study detail and others) | `brand/design-system/reference/` | Visual comparison only |
| `creatives-examples/` | 18 rendered examples of the creative templates (social posts, ads, banners, covers) | `content/creatives/examples/` | `node content/creatives/render.js --batch content/creatives/examples/examples.json` recreates them |

## To re-add them

```
git mv archive/design-system-reference brand/design-system/reference
git mv archive/creatives-examples/*.png content/creatives/examples/
```

Then add the references back in `brand/manifest.json` (screenshots) or `content/creatives/README.md` (examples).

Cody's repository refuses binary files through its normal task process. Adding these images there needs a separate commit approved by a person.
