# Landing pages

Two reference page templates built only from the design system in `brand/design-system/`, matching the Home and PHP service pages of the current website in Figma.

| Template | Use |
|---|---|
| `landing-page.html` | A landing or campaign page about the company (Home structure) |
| `service-page.html` | A page about one service or technology (Services/PHP structure) |

Open either file in a browser to see it. Both load the design system from `../../brand/design-system/`.

## Steps for Cody

1. **Pick the template** and copy it into the target location.
2. **Set `assetBase`** in the copied file so the logo and icons load from wherever `brand/design-system/assets/` sits relative to the new page. Update the three stylesheet links and the `bundle.js` script the same way.
3. **Keep the section order** unless the brief asks for a change. To add or swap a section, use a component from the Sections table in `brand/design-system/README.md`. Alternate section tones (white, then a tint, then white); navy is for a few bands only.
4. **Fill content.** Replace every `[bracketed placeholder]` with copy from the messaging guidelines (`messaging-guidelines/03-messaging.md` has the page formulas). Numbers need a claims register entry. Use real photos if the brief supplies them; otherwise leave the grey placeholders and say so.
5. **Compare.** Render the page at 1440px and 375px wide. Put it next to the template it came from and `brand/design-system/examples.html`, and check spacing, colour, type and the offset outlines match. Fix differences before handing back.
6. **Report** what you used, what you left as placeholder, and anything the system did not cover.

Brand rules come from `brand/`; read `brand/AGENT_GUIDE.md` first and run its checklist.
