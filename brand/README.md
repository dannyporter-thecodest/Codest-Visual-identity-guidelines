# The Codest brand

A description of The Codest's brand: its **Visual Identity** and its **Design System**, documented from the current website design in Figma (October 2026). This records the identity as it exists today; it is not a rebrand.

This folder describes the brand and nothing else. It does not say how to make any particular piece of content.

| | What | Start here |
|---|---|---|
| Visual Identity | The rules: logo, colour, states, type, layout, the offset outline, icons, waves and orbs, imagery, known issues | `visual-identity/guidelines.md` |
| Design System | The building blocks: tokens, fonts, logo, icons, textures, graphics, 70 components and a page showing every one of them | `design-system/README.md` |
| Using the brand | Where each rule lives, the rules that are easy to break, a brand checklist (for AI agents and people) | `AGENT_GUIDE.md` |
| Machine-readable index | Every file in this folder with its purpose and Figma source | `manifest.json` |

```
README.md
AGENT_GUIDE.md
manifest.json
visual-identity/
  guidelines.md
  guidelines-print.html          (print layout; open in a browser and print to PDF when a PDF is needed)
design-system/
  README.md
  examples.html                  every component on one page
  tokens/      tokens.json, tokens.css, build_tokens_css.py
  fonts/       Iosevka, Fira Sans, licences
  assets/      logo/, icons/, patterns/, graphics/
  components/  bundle.js, bundle.css, sections.css, index.d.ts
```

## Quick start

Load the tokens and components, then use the classes or the React components:

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

Open `design-system/examples.html` in a browser to see every component.

## Source and scope

- The Figma file of the current website ("Untitled (Copy)"), Page 1, plus its linked Button and input component sets (for states). The design team holds the link.
- Words, claims, tone and client names are not part of this folder. They are set by the messaging guidelines.
- Fonts are under the SIL Open Font License (see `design-system/fonts/`). The logo, icons and graphics are The Codest's own.

## Keeping it current

Change values in `design-system/tokens/tokens.json`, then run `python3 brand/design-system/tokens/build_tokens_css.py` from the repository root. If the Figma file changes, update tokens first, then components, then the guidelines. When a PDF is needed, print `visual-identity/guidelines-print.html` to PDF (A4 landscape, backgrounds on); the PDF is not kept in the repository.

## Archive

The Figma page screenshots are not needed to use the brand and are not in Cody's repository. They are kept in the `archive/` folder of the source repository, `dannyporter-thecodest/Codest-Visual-identity-guidelines`.
