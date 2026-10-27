# Agent guide: using The Codest brand files

For Cody and any other AI agent working in this repository. Read this file before producing anything visual for The Codest: pages, components, slides, social images, documents, emails with styling.

## Where the truth lives

| Need | Read | Do not |
|---|---|---|
| When and why to use a colour, font, asset or pattern | `visual-identity/guidelines.md` | Guess from memory or from the old website |
| Exact values | `design-system/tokens/tokens.json` | Type hex codes or sizes from anywhere else |
| CSS for a web build | `design-system/tokens/tokens.css` + `design-system/components/bundle.css` | Edit `tokens.css` by hand (it is generated) |
| A component | `design-system/README.md` (table) and `design-system/components/index.d.ts` (props) | Rebuild one that already exists |
| Logo, icons, patterns | `design-system/assets/` | Redraw, retype or approximate any of them |
| Every file, machine-readable | `manifest.json` | |
| Words, claims, client names | The Codest content guide | Copy text from the Figma mockups |

If two sources disagree, `tokens.json` wins for values and `guidelines.md` wins for usage. If neither covers something, say so and ask; do not invent a new colour, size or style.

## Rules that are easy to break

1. **One accent.** Pink (`primary-pink`) is for actions only, one primary pink button per view. Do not use pink for headings, backgrounds or decoration.
2. **Offset outline on every pink button and slider arrow**, 2px pink, 4px right and down. Never another colour or direction. Use the `Button` component or the `.cd-wrap` class.
3. **Square corners everywhere.** `radius-none`. Only avatars and process step numbers are round.
4. **Headings in the display face** (`--font-display`, weight 900), navy. Buttons, nav and links uppercase. Body in Fira Sans.
5. **Contrast.** Pink text only on white, never on the pale tints. Purple and orange text only on navy. Body text navy or `complementary-text`.
6. **Logo files as they are.** Black version on light, white version on navy or dark photos. No navy, pink or purple logo exists.
7. **Waves are faint texture**, behind content, off an edge, one per section, never pink.
8. **No new colours.** No gradients on content, no glow, no neon, no drop shadows beyond `shadow-card` and `shadow-chip`.
9. **No placeholder claims.** Do not reuse the Figma mockup copy ("top-level", "top notch", "true code masters", "awesome devs", "empower"), the stats (10+, 40+, 50+) or client quotes. Use clearly marked placeholders and flag that real copy must come from the content guide.
10. **Blocked:** never show the MUFG or Allegro name or logo, or any client logo without written consent.

## Before you hand anything back

- [ ] Every colour, size and shadow is a token, not a typed value.
- [ ] Only one primary pink action per view, with its outline.
- [ ] Pink text only on white; text contrast at least 4.5:1 elsewhere.
- [ ] Logo is the supplied file, correct version for the background.
- [ ] Icons and patterns come from `design-system/assets/`.
- [ ] No mockup copy, unsourced numbers, client names or quotes.
- [ ] Anything the guidelines do not cover is listed for a human to decide.

## Known gaps (do not fill them yourself)

- The Extended width of Iosevka is not bundled; output will be slightly narrower than the live site.
- No standalone mark, favicon, dark theme, or hover/focus/disabled states exist in the design.
- Wave artwork is PNG only; vectors are in Figma.
- Not yet built as components: mobile nav drawer, case study panel, values grid, service tabs with icons, file upload, download pop-up, webinar and meetup cards. If you need one, build it from the same tokens and note that it is new.
