# Agent guide: using The Codest brand

For Cody and any other AI agent. Read this file before producing anything visual for The Codest. It says where each brand rule lives and which rules are easy to break. It does not describe any particular kind of content.

## Where the truth lives

| Need | Read | Do not |
|---|---|---|
| When and why to use a colour, font, asset or pattern | `visual-identity/guidelines.md` | Guess from memory or from the old website |
| Exact values | `design-system/tokens/tokens.json` | Type hex codes or sizes from anywhere else |
| CSS for a web build | `tokens.css`, `components/bundle.css`, `components/sections.css` | Edit `tokens.css` by hand (it is generated) |
| A component or section | `design-system/README.md` (tables) and `design-system/components/index.d.ts` (props) | Rebuild one that already exists |
| What the components look like | `design-system/examples.html` (the Figma page screenshots are archived outside this folder) | Copy the placeholder text in it |
| Logo, icons, textures, graphics | `design-system/assets/` | Redraw, retype or approximate any of them |
| Every file, machine-readable | `manifest.json` | |

If two sources disagree, `tokens.json` wins for values and `guidelines.md` wins for usage. If neither covers something, say so and ask; do not invent a new colour, size or style.

Words, claims and client names are not set here; they come from the messaging guidelines.

## Applying the brand outside the web

For slides, documents and other output without the web components: use the same tokens, the logo files, the display face for headings, one pink accent, square corners and the faint wave textures.

## Rules that are easy to break

1. **One accent.** Pink (`primary-pink`) is for actions only, one primary pink button per view. Do not use pink for headings, backgrounds or decoration.
2. **Offset outline on every pink button and slider arrow**, 2px pink, 4px right and down. Never another colour or direction. Use the `Button` component or the `.cd-wrap` class.
3. **Square corners everywhere.** `radius-none`. Only avatars, orbs and process step numbers are round.
4. **Headings in the display face** (`--font-display`, weight 900), navy. Buttons, nav and links uppercase. Body in Fira Sans.
5. **Contrast.** Pink text only on white, never on the pale tints. Purple and orange text only on navy. Body text navy or `complementary-text`.
6. **Logo files as they are.** Black version on light, white version on navy or dark photos. No navy, pink or purple logo exists.
7. **Decoration is quiet.** Waves are faint texture behind content, off an edge, one per section. Orbs are purple or orange, half off a section edge, at most two per section. The brand gradient (`gradient-brand`) is only for the 6px bar on pull quotes and the areas-of-expertise graphic.
8. **No new colours, shadows or effects.** No glow, no neon, no shadows beyond `shadow-card` and `shadow-chip`.
9. **No mockup copy.** The Figma file's placeholder text ("top-level", "top notch", "true code masters", "awesome devs", "empower"), its stats (10+, 40+, 50+, 100+) and its client quotes are layout fillers, not approved copy.
10. **Client logos.** Never show the MUFG or Allegro name or logo, or any client logo without written consent. The Clutch rating needs a current, sourced score.

## Brand checklist

- [ ] Built from existing components; nothing re-created.
- [ ] Every colour, size and shadow is a token, not a typed value.
- [ ] Only one primary pink action per view, with its outline.
- [ ] Pink text only on white; text contrast at least 4.5:1 elsewhere.
- [ ] Logo is the supplied file, correct version for the background.
- [ ] Icons, textures and graphics come from `design-system/assets/`.
- [ ] Checked at 1440px and 375px wide (web) or at full size (images), and looked at.
- [ ] No mockup copy, unsourced numbers, client names or quotes.
- [ ] Anything the guidelines do not cover is listed for a human to decide.

## Known gaps (do not fill them yourself)

- The Extended width of Iosevka is not bundled; headings render slightly narrower than the live site.
- No photography is bundled. Ask for photos or leave placeholders.
- No standalone mark, favicon or dark theme exists in the design. Focus rings were added for accessibility; everything else about states comes from the file.
- Large wave artwork is PNG; vectors are in Figma.
- If something needs a section that is not in the system, build it from the same tokens and classes, say it is new, and suggest adding it to the design system.
