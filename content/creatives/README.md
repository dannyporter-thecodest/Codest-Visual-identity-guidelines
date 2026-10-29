# The Codest creatives

Fixed-size image templates for social posts, ads, link previews, covers, banners and email headers, built from the design system. Fill a template with copy, render it, get a PNG.

The layout rules for creatives are **proposed**, not documented from Figma: the Figma file is a website and has no creative examples. They apply the brand (`brand/visual-identity/guidelines.md`) to each format and need sign-off from the brand owner. They are below, under "Composition rules".


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
node content/creatives/render.js social-square '{"tone":"navy","eyebrow":"Hiring","headline":"We are looking for a senior React developer","cta":"Apply now"}' --out out/hiring.png
node content/creatives/render.js event-promo brief.json --out out/webinar.png
```

Several at once (see `examples/examples.json` for the format):

```bash
node content/creatives/render.js --batch path/to/batch.json
```

- Image fields (`photo`, `author_photo`, `people[].photo`) take a path from the repo root or a URL. `"placeholder"` shows a grey photo slot.
- Leave a field out or set it to `""` to hide it (for example no supporting text).
- `--scale 2` exports at double resolution for social formats. Keep ads at 1: ad networks want exact pixel sizes.
- The script prints `WARN` and exits with code 2 when copy runs past a template's line limit or out of the safe area. Shorten the copy; do not shrink the type.

To preview in a browser: open a template with URL parameters, e.g. `templates/social-square.html?headline=Hello&tone=navy`. Add `&guides=1` to see the safe area.

## Steps for Cody

1. **Pick the template** from `templates.json` by format and purpose. Do not invent a size the list does not have; if a brief needs one, say so.
2. **Write the content JSON** with the template's fields. Keep to the line limits in `templates.json`. Pick a tone (`light`, `white`, `pink`, `peach`, `navy`) and vary tones across a series.
3. **Render:** `node content/creatives/render.js <template> content.json --out <file>.png` (add `--scale 2` for social formats, never for ads).
4. **Fix every WARN.** A warning means the copy is too long or a file is missing. Shorten the copy; never shrink type or move elements by editing the template.
5. **Look at the PNG** before handing it back, and report which template, tone and copy source you used. The composition rules below are proposed: follow them, but say so if a human asks whether they are approved.

Brand rules (colour, type, logo, decoration) come from `brand/`; read `brand/AGENT_GUIDE.md` first.

## Files

| Path | What |
|---|---|
| `templates/*.html` | One fixed-size artboard per format. Generated, do not edit by hand |
| `build_templates.py` | Template definitions. Edit here, then run `python3 content/creatives/build_templates.py` |
| `creatives.css` | Shared creative styles: tones, scaled button with offset outline, framed photo, orbs, waves |
| `fill.js` | Fills a template from JSON or URL parameters |
| `render.js` | Renders templates to PNG and checks copy length |
| `templates.json` | Machine-readable list: sizes, fields, line limits, use |
| `examples/` | `examples.json`: renders every template with placeholder copy (`--batch`). The rendered PNGs are archived in the source repository's `archive/creatives-examples/` |

## Composition rules (proposed)

- **One idea per creative.** Eyebrow, headline, at most one supporting sentence, one action.
- **Safe margin** about 6.5% of the short side (72px on a 1080px post, 56px on a link image, 18px on a 300px ad). Nothing important outside it. Stories keep the top 250px and bottom 340px clear for app controls.
- **Logo** top-left, about 20% of the width on social formats, always the supplied file: black on light tones, white on navy. The LinkedIn banner has no logo because the page avatar already shows it.
- **Headline** in the display face at weight 900, navy on light tones and white on navy. Short: up to eight words on posts, six on small ads and stories. Each template sets a line limit and the render script warns when copy runs over.
- **Pink** stays the single accent: the button, with its offset outline scaled to the format. Formats that are not clicked as a whole (link images, covers, quote cards, banners) have no button.
- **Tones** follow the website: pale blue, white, light pink, peach or navy. Navy suits events, quotes and stories; light tones suit statements and content promotion. Alternate tones across a series so a feed does not repeat.
- **Decoration** sits behind content and bleeds off an edge: one wave texture (white lines on navy), at most two orbs. The gradient appears only as the bar on a quote card.
- **Photos** only of real people and real work, in the tilted frame. No stock photography, no client logos or product screenshots without written consent.
- **Copy** comes from the messaging guidelines; numbers need a claims-register entry. Bracketed placeholders never ship.
