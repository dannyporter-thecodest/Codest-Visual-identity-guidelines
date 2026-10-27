# Agent guide: using The Codest brand files

For Cody and any other AI agent working in this repository. Read this file before producing anything visual for The Codest: pages, components, slides, social images, documents, emails with styling.

## Where the truth lives

| Need | Read | Do not |
|---|---|---|
| When and why to use a colour, font, asset or pattern | `visual-identity/guidelines.md` | Guess from memory or from the old website |
| Exact values | `design-system/tokens/tokens.json` | Type hex codes or sizes from anywhere else |
| CSS for a web build | `tokens.css`, `components/bundle.css`, `components/sections.css` | Edit `tokens.css` by hand (it is generated) |
| A component or section | `design-system/README.md` (tables) and `design-system/components/index.d.ts` (props) | Rebuild one that already exists |
| A page structure | `design-system/templates/` | Start from a blank file |
| A social post, ad, banner, cover or email header | `creatives/` (templates, `render.js`, `templates.json`) | Design an image from scratch |
| What it should look like | `design-system/reference/*.png` (screenshots of every Figma page) | Copy the text in them |
| Logo, icons, textures, graphics | `design-system/assets/` | Redraw, retype or approximate any of them |
| Every file, machine-readable | `manifest.json` | |
| Words, claims, client names | The Codest content guide | Copy text from the Figma mockups |

If two sources disagree, `tokens.json` wins for values and `guidelines.md` wins for usage. If neither covers something, say so and ask; do not invent a new colour, size or style.

## How to build a web page

1. **Pick the template.** Landing or campaign page about the company: `templates/landing-page.html`. Page about one service or technology: `templates/service-page.html`. Copy it into the target location.
2. **Set `assetBase`** in the copied file so the logo and icons load from wherever `design-system/assets/` sits relative to the new page.
3. **Keep the section order** unless the brief asks for a change. To add or swap a section, use a component from the Sections table in `design-system/README.md`. Alternate section tones (white, then a tint, then white); navy is for a few bands only.
4. **Fill content.** Replace every `[bracketed placeholder]` with copy from the content guide. Numbers need a claims-register entry. Use real photos if the brief supplies them; otherwise leave the grey placeholders and say so.
5. **Compare.** Render the page at 1440px and 375px wide. Put it next to `reference/home.png` (or `service-detail.png`) and check spacing, colour, type and the offset outlines match. Fix differences before handing back.
6. **Report** what you used, what you left as placeholder, and anything the system did not cover.

## How to make an image (social, ads, covers, banners, email headers)

1. **Pick the template** from `creatives/templates.json` by format and purpose. Do not invent a size the list does not have; if a brief needs one, say so.
2. **Write the content JSON** with the template's fields. Keep to the line limits in `templates.json`. Pick a tone (`light`, `white`, `pink`, `peach`, `navy`) and vary tones across a series.
3. **Render:** `node creatives/render.js <template> content.json --out <file>.png` (add `--scale 2` for social formats, never for ads).
4. **Fix every WARN.** A warning means the copy is too long or a file is missing. Shorten the copy; never shrink type or move elements by editing the template.
5. **Look at the PNG** before handing it back, and report which template, tone and copy source you used.

The creative layout rules are **proposed** (section 12 of the guidelines): follow them, but say so if a human asks whether they are approved.

For other non-web output (slides, documents): use the same tokens, the logo files, the display face for headings, one pink accent, square corners and the faint wave textures.

## Rules that are easy to break

1. **One accent.** Pink (`primary-pink`) is for actions only, one primary pink button per view. Do not use pink for headings, backgrounds or decoration.
2. **Offset outline on every pink button and slider arrow**, 2px pink, 4px right and down. Never another colour or direction. Use the `Button` component or the `.cd-wrap` class.
3. **Square corners everywhere.** `radius-none`. Only avatars, orbs and process step numbers are round.
4. **Headings in the display face** (`--font-display`, weight 900), navy. Buttons, nav and links uppercase. Body in Fira Sans.
5. **Contrast.** Pink text only on white, never on the pale tints. Purple and orange text only on navy. Body text navy or `complementary-text`.
6. **Logo files as they are.** Black version on light, white version on navy or dark photos. No navy, pink or purple logo exists.
7. **Decoration is quiet.** Waves are faint texture behind content, off an edge, one per section. Orbs are purple or orange, half off a section edge, at most two per section. The brand gradient (`gradient-brand`) is only for the 6px bar on pull quotes and the areas-of-expertise graphic.
8. **No new colours, shadows or effects.** No glow, no neon, no shadows beyond `shadow-card` and `shadow-chip`.
9. **No placeholder claims.** Do not reuse the Figma mockup copy ("top-level", "top notch", "true code masters", "awesome devs", "empower"), the stats (10+, 40+, 50+, 100+) or client quotes. Use clearly marked placeholders and flag that real copy must come from the content guide.
10. **Blocked:** never show the MUFG or Allegro name or logo, or any client logo without written consent. The Clutch rating needs a current, sourced score.

## Before you hand anything back

- [ ] Built from a template and existing components; nothing re-created.
- [ ] Every colour, size and shadow is a token, not a typed value.
- [ ] Only one primary pink action per view, with its outline.
- [ ] Pink text only on white; text contrast at least 4.5:1 elsewhere.
- [ ] Logo is the supplied file, correct version for the background.
- [ ] Icons, textures and graphics come from `design-system/assets/`.
- [ ] Pages: checked at 1440px and 375px against the matching `reference/` screenshot.
- [ ] Images: rendered with `creatives/render.js` with no WARN, and looked at.
- [ ] No mockup copy, unsourced numbers, client names or quotes.
- [ ] Anything the guidelines do not cover is listed for a human to decide.

## Known gaps (do not fill them yourself)

- The Extended width of Iosevka is not bundled; headings render slightly narrower than the live site.
- No photography is bundled. Ask for photos or leave placeholders.
- No standalone mark, favicon or dark theme exists in the design. Focus rings were added for accessibility; everything else about states comes from the file.
- Large wave artwork is PNG; vectors are in Figma.
- If a brief needs a section that is not in the system, build it from the same tokens and classes, say it is new, and suggest adding it to the design system.
