# The Codest brand

The Codest's **Visual Identity Guidelines** and **Design System**, documented from the current website design in Figma (October 2026). This records the identity as it exists today; it is not a rebrand.

| | What | Start here |
|---|---|---|
| Visual Identity Guidelines | The rules: logo, colour, type, layout, the offset outline, icons, waves, imagery, known issues | `visual-identity/guidelines.md` (or the PDF beside it) |
| Design System | The build kit: tokens, fonts, logo and icon files, wave textures, 16 components | `design-system/README.md` |
| AI agents (Cody) | How to use both, the rules that are easy to break, a pre-delivery checklist | `AGENT_GUIDE.md` |
| Machine-readable index | Every file with its purpose | `manifest.json` |

```
README.md
AGENT_GUIDE.md
manifest.json
visual-identity/
  guidelines.md
  the-codest-visual-identity.pdf
  guidelines-print.html          (source of the PDF)
design-system/
  README.md
  examples.html
  tokens/   tokens.json, tokens.css, build_tokens_css.py
  fonts/    Iosevka, Fira Sans, licences
  assets/   logo/, icons/, patterns/
  components/  bundle.js, bundle.css, index.d.ts
```

## Quick start for a web page

```html
<link rel="stylesheet" href="design-system/tokens/tokens.css">
<link rel="stylesheet" href="design-system/components/bundle.css">
<h1 class="display-xl" style="color: var(--primary-navy)">Heading</h1>
<p class="text-md-regular" style="color: var(--complementary-text)">Body text.</p>
<span class="cd-wrap"><a class="cd-btn cd-btn--big" href="#">Get in touch</a></span>
```

React components and full usage: `design-system/README.md`.

## Source and scope

- Figma file "Untitled (Copy)", key `BYcWQ1snBegdWVqrvUt7kQ`, Page 1.
- Copy, claims, tone and client names are governed by The Codest content guide, not by this repository.
- Fonts are under the SIL Open Font License (see `design-system/fonts/`). The logo and icons are The Codest's own.

## Keeping it current

Change values in `design-system/tokens/tokens.json`, then run `python3 design-system/tokens/build_tokens_css.py`. If the Figma file changes, update tokens first, then the guidelines, then regenerate the PDF by printing `visual-identity/guidelines-print.html` to PDF (A4 landscape, backgrounds on).
