# The Codest: Visual Identity Guidelines

Version 1.2 · October 2026 · Documents the identity as it exists today

These guidelines record The Codest's current visual identity, taken from the website design file in Figma. They are a record of what exists, not a rebrand. Where something in the current design breaks accessibility or the 2026 brand strategy, it is flagged in place and left as it is (see section 11).

The design system in `../design-system/` is the build kit for everything described here: tokens, fonts, logo, icons, textures, 70 components, page templates and reference screenshots. Image templates for social, ads and email are in `../creatives/`. Where this document names a token (for example `primary-pink`), its exact value is in `../design-system/tokens/tokens.json`.

**Words are out of scope.** Copy, claims, tone and which clients may be named are governed by The Codest content guide. Several headlines in the Figma mockups break that guide.

**Source.** Figma file "Untitled (Copy)" (`BYcWQ1snBegdWVqrvUt7kQ`), Page 1: every website page in desktop (1440px) and mobile (375px). Colour and type values are the file's own variables. Logo, icons and component specs were exported from the file's layers. Values that were measured rather than defined are marked "measured".

---

## 1. The identity in brief

A light, calm page in white and pale tints, with deep navy for headings and one loud accent, pink, for every action. Headings and buttons use a heavy, wide monospaced face that says "engineers"; body text uses a plain humanist sans. Corners are always square. The signature detail is a thin pink outline set 4px behind every button and arrow. Fine line-waves and soft blurred colour orbs sit in the background as texture. No gradients on content, no glow, no rounded cards.

Five things make something look like The Codest:

1. Navy headings in the heavy monospaced display face.
2. One pink action, with its offset outline.
3. White and pale-tint sections, square edges, generous 120px spacing.
4. Thin line-wave texture and soft colour orbs at very low strength.
5. Real photography of real people and products.

## 2. Logo

**Files:** `design-system/assets/logo/the-codest-logo-black.svg` and `the-codest-logo-white.svg` (vector, 144 x 36 at 1x).

The wordmark is THE C0DEST, with a zero for the O, over the strapline IN CODE WE TRUST in small spaced capitals.

| Version | Use on | Fill |
|---|---|---|
| Black | White and the pale tints | `logo-ink` #231F20 (near-black, as drawn in the file) |
| White | Navy, and dark photo heroes | #FFFFFF |

- Use the files as they are. Never retype the wordmark, recolour it to pink or purple, add effects, or separate the strapline.
- Size on the site: 144 x 36px in the desktop header, at the left content edge.
- The file defines no minimum size or clear space. Recommended until the brand owners set one: no smaller than 96px wide (below that the strapline drops under 5px tall), and at least the strapline's height (about 8px at 1x) clear on every side. For smaller spaces there is no approved standalone mark.
- Navy-coloured logo: not in the file. Do not create one.

## 3. Colour

### Core palette

| Token | Hex | Role |
|---|---|---|
| `primary-navy` | #0D124C | Headings, dark bands (stats, testimonials, footer), selected states |
| `primary-pink` | #F2096E | The only action colour: buttons, links, active tab, value icons |
| `primary-white` | #FFFFFF | Page background, text on navy and pink |
| `complementary-text` | #3E4070 | Body copy |
| `complementary-purple` | #B87DFF | Text and icons on navy; line work on light backgrounds |
| `complementary-orange` | #FF584D | Defined in the file, barely used |

### Tints and lines

| Token | Value | Role |
|---|---|---|
| `complementary-light-blue` | #F6F7FF | Pale section background |
| `complementary-light-pink` | #F6F1FB | Pale section background, case study panel |
| `tint-peach` | #FFF2F1 | Second case study panel (measured, not a file variable) |
| `border-subtle` | navy at 15% | Input and tag borders |
| `line-subtle` | navy at 15% | Inactive tab underline, process connector |
| `on-navy-border` | white at 40% | Input border on navy |
| `on-navy-muted` | white at 80% | Footer links on navy |

### States and gradient

| Token | Value | Role |
|---|---|---|
| `pink-hover` | #CC085D | Hover and pressed state of every pink button, link, slider arrow and social button. White on it is 5.6:1 (passes AA) |
| `state-disabled` | #E4E4E4 | Disabled buttons and inputs |
| `state-error` | #D41515 | Input error message |
| `gradient-brand` | #FF584D -> #DE4AA2 -> #B87CFF | The file's only gradient: the 6px bar on top of pull quotes and the band behind the areas-of-expertise graphic. Never for backgrounds, text or buttons |

### How colour is used

- Page sections alternate between white and the pale tints. Navy is reserved for a few full-width bands: the stats strip, testimonial cards and the footer.
- Pink is rationed: one primary pink action per view. A second action uses the secondary (outlined) button.
- Purple appears as text only on navy. On light backgrounds it is used for line work (the frame behind the hero photo, category labels, some service icons).
- There are no gradients on content. The one brand gradient is reserved for the pull-quote bar and the areas-of-expertise graphic.

### Contrast (WCAG 2.2, calculated)

| Pair | Ratio | Result |
|---|---|---|
| Navy on white | 17.4:1 | Pass |
| Body text #3E4070 on white | 9.7:1 | Pass |
| White on navy | 17.4:1 | Pass |
| Purple on navy | 6.1:1 | Pass |
| Orange on navy | 5.6:1 | Pass |
| **Pink on white, white on pink** | **4.17:1** | **Fails AA for normal text.** Passes large text and UI borders |
| Pink on the pale tints | 3.75 to 3.90:1 | Fails for normal text |
| Orange on white | 3.1:1 | Fails for text |
| Purple on white | 2.8:1 | Fails for text, decorative only |

Pink carries every button and link. Button labels are 16 to 18px heavy, just under the 18.66px "large bold" threshold, so strictly they fail AA. This is how the site is built and is recorded as is; a darker pink is a decision for the brand owners. Until then:

- Keep pink text on white, never on the pale tints.
- Use purple and orange as text only on navy.
- Body copy is always navy or #3E4070.

## 4. Typography

| Family | Weights | Used for |
|---|---|---|
| **Iosevka Heavy Extended** (display) | 900 | Headings, buttons, navigation, text links, stat numbers, footer headings |
| **Fira Sans** (body) | 400, 500, 700, 400 italic | Running text, cards, tags, inputs, captions, footer links. Italic only for client quotes |

Buttons, navigation and text links are always uppercase.

The repository bundles Iosevka Heavy at standard width, because the Extended cut is not published as a ready web font package. Samples set from the repository are slightly narrower than the live site. Add the Extended .woff2 to `design-system/fonts/` when it is available; the font stack asks for it first.

### Display scale (line height 1.35, except xs at 1.5)

| Style | Size | Use |
|---|---|---|
| `display-xl` | 46px | Hero H1, stat numbers |
| `display-lg` | 36px | Section headings |
| `display-md` | 28px | Case study headings |
| `display-sm` | 22px | Card, job and step titles, footer headings |
| `display-xs` | 16px | Form section labels |
| `button-big` | 18px, uppercase | Big buttons |
| `button-small` | 16px, uppercase | Small buttons, navigation, text links |

### Text scale (line height 1.5, or 1.4 at 14px)

| Style | Size | Use |
|---|---|---|
| `text-lg` regular, bold | 20px | Hero intro |
| `text-md` regular, bold, italic | 16px | Body, value labels, stat labels, testimonial quotes |
| `text-sm` regular, medium | 14px | Cards, tags, inputs, footer links |
| `text-sm-bold-uppercase` | 14px, 0.5px tracking | Eyebrows, author names, category labels |
| `text-xs-regular` | 11px | Consent and legal lines only |

### Mobile type (375px frames)

Headings step down on phones: 46 -> 32px, 36 -> 26px, 28 -> 22px, 22 -> 18px. Body text 16 -> 15px, intro 20 -> 17px. Buttons, labels and small text keep their desktop size.

## 5. Layout and spacing

- Desktop frame 1440px with a 1200px content column: 120px side gutters.
- Mobile frame 375px with 16px gutters.
- 120px between sections on the Home page, every time.
- Header: 100px tall on desktop, 70px on mobile.
- Component spacing was set per component (8, 10, 13, 15, 16, 20, 30, 40, 50px). There is no general 4 or 8px grid in the file.
- Square corners everywhere (`radius-none`). The only round shapes are avatars and the process step number.
- One stroke weight: 2px.
- Two shadows: `shadow-card` (4px 4px 30px at 8%) for job, article, webinar, meetup and resource cards; `shadow-chip` (4px 4px 15px at 8%) for blog cards and their author chip.
- Section rhythm: sections alternate white and a pale tint. Navy is used for a few full-width bands (stats, team quotes, client stories, footer) and for page heroes.
- Page heroes: the Home hero is white with a framed photo; every other page opens with a navy hero, centred white headline, often over a team photo at navy 80%.

## 6. The signature: offset outline

Every pink button and every slider arrow has a second 2px pink outline drawn 4px right and 4px down, behind it. It reads like a print misregistration, and after the logo it is the most recognisable detail on the site. The hero photo echoes it with a thin purple frame offset behind the image.

- The outline is never filled, never another colour, never offset in another direction.
- Primary button: pink fill, white uppercase label.
- Secondary button: white fill, pink label and border.
- Big: 18px label, 40px side padding, 50px tall plus outline. Small: 16px label, 20px sides, 40px tall plus outline.
- Slider arrows: 50px white square, pink border and arrow.
- Hover: the button and its outline turn `pink-hover`; a secondary button fills with it. Pressed: the outline disappears and the button shifts into its place. Disabled: everything turns `state-disabled` grey.

## 7. Iconography

**Files:** `design-system/assets/icons/` (SVG, exported from Figma; three larger service icons as 4x PNG).

| Group | Icons | Colour |
|---|---|---|
| Interface | arrow-left, arrow-right, arrow-up-right, chevron-down, search, close, burger, dots, download, upload, envelope, calendar, time, pin, check, checked, play, star, quote-mark | Pink for actions and status; navy for interface controls (search, close, burger, chevron); purple for the pin on navy |
| Values | value-customer, value-trust, value-partnership, value-quality | Pink, 50px |
| Services | service-frontend, service-backend, service-other, service-qa, service-devops | Purple or navy, 30 to 40px |

Style: solid fills or even line weight, rounded joins, no duotone, no gradients, no outline-plus-fill mixes. Use the icons at their drawn size or exact multiples. Social icons (facebook, linkedin, twitter) are included as used in the footer and share bars. Technology logos and the Clutch logo appear in the file but are third-party marks, not part of the brand, and are not included.

## 8. Pattern: line waves

**Files:** `design-system/assets/patterns/` (transparent PNG at 3x, exported with their on-site opacity).

| File | Seen on | On-site strength |
|---|---|---|
| `wave-lines@3x.png` | Home hero, case study panels | Navy lines at 8% |
| `wave-rings@3x.png` | Home background, contact band, testimonials | 8% to 20% |
| `wave-ribbon@3x.png` | Contact band | Full strength, light lavender lines |
| `wave-banner@2x.png` | Navy banner boxes | White lines at 20% |
| `wave-case-panel@1.5x.png` | Case study panels | Navy lines at 8% |

How the file uses them, which is the rule to follow:

- Texture only: always behind content, bleeding off a section edge, never centred, never behind body text at a strength that reduces contrast.
- One wave per section at most.
- Always in navy or lavender tints. The file never shows them in pink, animated, or framing content.
- The vector originals stay in Figma (node ids in `manifest.json`); the PNGs are the approved web exports.

### Colour orbs

Soft circles of `complementary-purple` or `complementary-orange`, blurred until they read as a glow of colour, placed half off a section edge: purple top right in the Home hero, orange top right in the values section, one of each in the contact band. They are 240 to 380px across before the blur. At most two per section, never behind body text at full strength, never pink.

### Graphics

**Files:** `design-system/assets/graphics/`. The areas-of-expertise graphic (technology logos in navy circles on the brand gradient) and the world map with project countries in pink. Both are fixed illustrations; update them in Figma, then re-export.

## 9. Photography and imagery

- Real team photos, not stock. People working together, natural light. No photography is bundled in the repository; it belongs in The Codest's media library.
- Framed photos: the photo is tilted about 5 degrees one way, with a 2px frame (purple in the Home hero, pink elsewhere) tilted the other way behind it. Culture sections use a two-photo collage with a pink frame. Team portraits are square with a pink frame offset 6px.
- Inner page heroes put white display text over a team photo with a navy overlay.
- Case studies show the client's product inside a laptop or phone frame on a pale tint panel. Only show clients with written consent (content guide).
- Blog cards use a 280px illustration or photo with a 10% navy overlay.

## 10. Components and page sections

The design system implements every repeating element in the file, with exact specs, in three layers:

- **Building blocks:** buttons (all states), slider arrows, text links, social and share buttons, tags, labels, bullets, inputs (error and disabled), textarea, file upload, checkbox, technology option, tabs.
- **Cards:** content, feature, framework tile, testimonial, team quote, blog, featured article, article, webinar, meetup, resource, job, person, stat.
- **Sections:** header and mobile menu, footer, three hero types (home, page, case study), service tabs, stats band, case study panel, values grid, carousel, image-and-text, process, banner, light banner, client stories, closing CTA band, opinion, pull quote, logo strip, listing header, pagination, article header, side panel, timeline, perks, download modal.

Two page templates (`design-system/templates/`) show how sections combine into a landing page and a service page, matching the Home and PHP service pages in Figma. Screenshots of all 19 Figma pages are in `design-system/reference/`. Specs and props: `design-system/README.md`. Live renders: `design-system/examples.html`.

## 11. Things to fix in the current design (left as is)

1. **Pink fails text contrast** at 4.17:1 (section 3).
2. **MUFG logo** in the Home page client strip. Blocked from any public use until written consent exists. Remove before reuse.
3. **Mockup copy breaks the content guide:** "top-level", "top notch", "true code masters", "awesome devs", "empower".
4. **Unsourced numbers** in the stats strips (10+ years, 40+ devs, 10+ technologies, 50+ clients, 80% senior, "100+ partners", "15 countries") are not in the claims register. The Clutch rating (4.8, 18 reviews) needs a current figure.
5. **Real client quotes** from Clutch appear in testimonial cards; reuse needs consent and attribution checks.
6. **Placeholder duplication:** seven identical job cards, repeated contact-card text.
7. **Copyright line** reads 2022.

## 12. Creatives (proposed)

**Status: proposed.** The Figma file is a website and contains no social posts, ads or other creatives. The rules below apply the documented identity to those formats. They need sign-off from the brand owner before they are treated as final. Templates: `../creatives/`.

### Formats

| Format | Size (px) | Use |
|---|---|---|
| Social post, square | 1080 x 1080 | LinkedIn, Instagram, Meta feed |
| Social post, portrait | 1080 x 1350 | Feed posts with a photo or more text |
| Story | 1080 x 1920 | Stories, Reels covers |
| Link image | 1200 x 627 | Shared links, Open Graph, LinkedIn single-image ads |
| Article and case study cover | 1200 x 630 | Blog and case study headers |
| Event promo | 1080 x 1080 | Webinars, meetups, events |
| Quote card | 1080 x 1080 | Cleared client or employee quotes |
| LinkedIn banner | 1584 x 396 | Company page and employee profiles |
| Email header | 1200 x 400 | Newsletters and campaigns |
| Display ads | 300 x 250, 728 x 90, 300 x 600 | Google Display and programmatic |

### Composition

- **One idea per creative.** Eyebrow, headline, at most one supporting sentence, one action.
- **Safe margin** about 6.5% of the short side (72px on a 1080px post, 56px on a link image, 18px on a 300px ad). Nothing important outside it. Stories keep the top 250px and bottom 340px clear for app controls.
- **Logo** top-left, about 20% of the width on social formats, always the supplied file: black on light tones, white on navy. The LinkedIn banner has no logo because the page avatar already shows it.
- **Headline** in the display face at weight 900, navy on light tones and white on navy. Short: up to eight words on posts, six on small ads and stories. Each template sets a line limit and the render script warns when copy runs over.
- **Pink** stays the single accent: the button, with its offset outline scaled to the format. Formats that are not clicked as a whole (link images, covers, quote cards, banners) have no button.
- **Tones** follow the website: pale blue, white, light pink, peach or navy. Navy suits events, quotes and stories; light tones suit statements and content promotion. Alternate tones across a series so a feed does not repeat.
- **Decoration** sits behind content and bleeds off an edge: one wave texture (white lines on navy), at most two orbs. The gradient appears only as the bar on a quote card.
- **Photos** only of real people and real work, in the tilted frame. No stock photography, no client logos or product screenshots without written consent.
- **Copy** comes from the content guide; numbers need a claims-register entry. Bracketed placeholders never ship.

## 13. Gaps

- Iosevka Extended font file (standard width bundled).
- No standalone mark, favicon or navy logo in the file.
- No dark theme.
- Focus states are not in the file (an accessible focus ring was added); hover, pressed, disabled and error states are.
- Large wave artwork is supplied as PNG; vectors remain in Figma.
- No photography bundled.
- Creative rules are proposed, not from the source file (section 12).
