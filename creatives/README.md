# The Codest creatives

Fixed-size image templates for social posts, ads, link previews, covers, banners and email headers, built from the design system. Fill a template with copy, render it, get a PNG.

The layout rules for creatives are **proposed**, not documented from Figma: the Figma file is a website and has no creative examples. They apply the existing identity to each format and need sign-off from the brand owner. See section 12 of `../visual-identity/guidelines.md`.


## Formats

| Template | Size (px) | Default tone | Use |
|---|---|---|---|
| `social-square` | 1080 x 1080 | light | LinkedIn, Instagram, Meta feed posts |
| `social-portrait` | 1080 x 1350 | light | Feed posts with a photo or more text (4:5) |
| `story` | 1080 x 1920 | navy | Stories and Reels covers. Top 250px and bottom 340px are app UI |
| `link-image` | 1200 x 627 | white | Shared links, Open Graph image, LinkedIn single-image ads |
| `article-cover` | 1200 x 630 | pink | Blog and case study headers and their share image |
| `event-promo` | 1080 x 1080 | navy | Webinar, meetup and event announcements |
| `quote-card` | 1080 x 1080 | navy | Cleared client or employee quotes. Pink tone adds the gradient bar |
| `linkedin-banner` | 1584 x 396 | navy | LinkedIn company page and employee profile background |
| `email-header` | 1200 x 400 | light | Newsletter and campaign header (shown at 600 x 200) |
| `ad-300x250` | 300 x 250 | light | Display medium rectangle |
| `ad-728x90` | 728 x 90 | light | Display leaderboard |
| `ad-300x600` | 300 x 600 | navy | Display half page |

Tones for every template: `light` (pale blue), `white`, `pink`, `peach`, `navy`. Fields and line limits per template are listed in `templates.json`.

## Making an image

Setup once (needs Node 18+):

```bash
npm install playwright
npx playwright install chromium
```

One image, content inline or from a JSON file:

```bash
node creatives/render.js social-square '{"tone":"navy","eyebrow":"Hiring","headline":"We are looking for a senior React developer","cta":"Apply now"}' --out out/hiring.png
node creatives/render.js event-promo brief.json --out out/webinar.png
```

Several at once (see `examples/examples.json` for the format):

```bash
node creatives/render.js --batch path/to/batch.json
```

- Image fields (`photo`, `author_photo`, `people[].photo`) take a path from the repo root or a URL. `"placeholder"` shows a grey photo slot.
- Leave a field out or set it to `""` to hide it (for example no supporting text).
- `--scale 2` exports at double resolution for social formats. Keep ads at 1: ad networks want exact pixel sizes.
- The script prints `WARN` and exits with code 2 when copy runs past a template's line limit or out of the safe area. Shorten the copy; do not shrink the type.

To preview in a browser: open a template with URL parameters, e.g. `templates/social-square.html?headline=Hello&tone=navy`. Add `&guides=1` to see the safe area.

## Files

| Path | What |
|---|---|
| `templates/*.html` | One fixed-size artboard per format. Generated, do not edit by hand |
| `build_templates.py` | Template definitions. Edit here, then run `python3 creatives/build_templates.py` |
| `creatives.css` | Shared creative styles: tones, scaled button with offset outline, framed photo, orbs, waves |
| `fill.js` | Fills a template from JSON or URL parameters |
| `render.js` | Renders templates to PNG and checks copy length |
| `templates.json` | Machine-readable list: sizes, fields, line limits, use |
| `examples/` | `examples.json`: renders every template with placeholder copy (`--batch`). The rendered PNGs are archived in the source repository's `archive/creatives-examples/` |

## Rules in short

- One idea per creative: eyebrow, headline, at most one supporting sentence, one action.
- Logo top-left (except the LinkedIn banner, where the page avatar already shows it), always the supplied file: black on light tones, white on navy.
- Headline in the display face, navy (white on navy). Keep to the line limits.
- One pink element: the button with its offset outline. Link images, covers, quote cards and banners have no button.
- Decoration stays behind content: one wave texture, at most two orbs, both bleeding off an edge.
- Photos only of real people and real work, in the tilted frame. No stock, no client logos without written consent.
- Copy and numbers come from the content guide and claims register. Placeholder text in brackets must never ship.
