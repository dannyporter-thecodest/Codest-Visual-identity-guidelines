# The Codest brand

The Codest's **Visual Identity Guidelines** and **Design System**, documented from the current website design in Figma (October 2026). This records the identity as it exists today; it is not a rebrand.

| | What | Start here |
|---|---|---|
| Visual Identity Guidelines | The rules: logo, colour, states, type, layout, the offset outline, icons, waves and orbs, imagery, known issues | `visual-identity/guidelines.md` (or the PDF beside it) |
| Design System | The build kit: tokens, fonts, logo, icons, textures, graphics, 70 components, 2 page templates, 19 reference screenshots | `design-system/README.md` |
| Creatives | Image templates for social posts, stories, ads, link images, covers, banners and email headers, with a render script | `creatives/README.md` |
| AI agents (Cody) | How to build a page, the rules that are easy to break, a pre-delivery checklist | `AGENT_GUIDE.md` |
| Machine-readable index | Every file with its purpose and Figma source | `manifest.json` |

```
README.md
AGENT_GUIDE.md
manifest.json
visual-identity/
  guidelines.md
  the-codest-visual-identity.pdf
  guidelines-print.html          (source of the PDF)
creatives/
  README.md
  templates/   12 fixed-size formats (social, story, ads, link image, cover, banner, email)
  render.js    fills a template and exports a PNG
  examples/    every format rendered
design-system/
  README.md
  examples.html                  every component on one page
  templates/   landing-page.html, service-page.html
  reference/   screenshots of every Figma page
  tokens/      tokens.json, tokens.css, build_tokens_css.py
  fonts/       Iosevka, Fira Sans, licences
  assets/      logo/, icons/, patterns/, graphics/
  components/  bundle.js, bundle.css, sections.css, index.d.ts
```

## Quick start

To make a page, copy `design-system/templates/landing-page.html`, set `assetBase`, and replace the bracketed placeholders. Open it in a browser next to `design-system/reference/home.png`.

To make an image, pick a format in `creatives/templates.json` and run `node creatives/render.js social-square content.json --out post.png` (setup in `creatives/README.md`).

Plain HTML without React works too:

```html
<link rel="stylesheet" href="design-system/tokens/tokens.css">
<link rel="stylesheet" href="design-system/components/bundle.css">
<link rel="stylesheet" href="design-system/components/sections.css">
<section class="cd-section cd-section--blue">
  <div class="cd-container cd-stack">
    <h2 class="cd-h2">Heading</h2>
    <p class="cd-text">Body text.</p>
    <span class="cd-wrap"><a class="cd-btn cd-btn--big" href="#">Get in touch</a></span>
  </div>
</section>
```

## Source and scope

- Figma file "Untitled (Copy)", key `BYcWQ1snBegdWVqrvUt7kQ`, Page 1, plus its linked Button and input component sets (for states).
- Copy, claims, tone and client names are governed by The Codest content guide, not by this repository.
- Fonts are under the SIL Open Font License (see `design-system/fonts/`). The logo, icons and graphics are The Codest's own.

## Keeping it current

Change values in `design-system/tokens/tokens.json`, then run `python3 design-system/tokens/build_tokens_css.py`. If the Figma file changes, update tokens first, then components, then the guidelines, then regenerate the PDF by printing `visual-identity/guidelines-print.html` to PDF (A4 landscape, backgrounds on).
