# The Codest Design System

The build kit for The Codest's visual identity: tokens, fonts, logo, icons, textures, graphics, 70 components, interaction states, two page templates and reference screenshots of every page in the Figma file. Rules for when and why are in `../visual-identity/guidelines.md`; this file covers how.

```
tokens/
  tokens.json            Source of truth for every value (name, value, usage note)
  tokens.css             CSS variables, @font-face rules, a class per type style. Generated
  build_tokens_css.py    Regenerates tokens.css from tokens.json
fonts/                   Iosevka Heavy, Fira Sans (latin + latin-ext), OFL licences
assets/
  logo/                  the-codest-logo-black.svg, the-codest-logo-white.svg
  icons/                 28 SVG icons + 3 service icons as 4x PNG
  patterns/              5 line-wave textures (transparent PNG)
  graphics/              areas-of-expertise infographic, world map
components/
  bundle.js              70 React 18 components on window.Codest, no build step
  bundle.css             Base component styles
  sections.css           Interaction states, page sections, responsive rules
  index.d.ts             Props for every component
templates/
  landing-page.html      Reference landing page (Home structure), built only from the system
  service-page.html      Reference service/campaign page (Services/PHP structure)
examples.html            Every component rendered on one page
```

## Building a page

1. Start from a template in `templates/`. Copy it, keep the section order unless the brief says otherwise, change content only.
2. Need a different section? Pick it from the Sections table below. Do not build a new one if one exists.
3. Compare the result with the matching template before handing it over.

Every page loads these, in this order:

```html
<link rel="stylesheet" href="design-system/tokens/tokens.css">
<link rel="stylesheet" href="design-system/components/bundle.css">
<link rel="stylesheet" href="design-system/components/sections.css">
<script>window.CodestConfig = { assetBase: "design-system/assets/" };</script>
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="design-system/components/bundle.js"></script>
```

`assetBase` tells components where the logo and icons are, relative to the page. Not using React? Every component is plain HTML with `cd-` classes; render `examples.html` in a browser and copy the markup.

## Tokens

Every value is a CSS variable named after its token (`var(--primary-pink)`, `var(--space-section)`) and every type style is a class (`.display-xl`, `.text-md-regular`). Families: `var(--font-display)`, `var(--font-body)`.

| Family | Tokens |
|---|---|
| Brand colour | primary-navy, primary-pink, primary-white, complementary-text, complementary-purple, complementary-orange |
| Tints | complementary-light-blue, complementary-light-pink, tint-peach |
| States | pink-hover #CC085D, state-disabled #E4E4E4, state-disabled-text, state-error #D41515, border-focus |
| Lines | border-subtle, line-subtle, border-upload, checkbox-border, on-navy-border, on-navy-muted |
| Gradient | gradient-orange, gradient-magenta, gradient-purple, gradient-brand |
| Effects | orb-blur, orb-size, shadow-card, shadow-chip |
| Type (desktop) | display-xl 46, display-lg 36, display-md 28, display-sm 22, display-xs 16, button-big 18, button-small 16, text-lg 20, text-md 16, text-sm 14, text-xs 11 |
| Type (mobile) | display-xl-mobile 32, display-lg-mobile 26, display-md-mobile 22, display-sm-mobile 18, text-lg-mobile 17, text-md-mobile 15 |
| Spacing | space-tag-y 8, space-btn-small-y 10, space-input-y 13, space-tag-gap 15, space-inset 16, space-card 20, space-btn-small-x 20, space-card-x 30, space-quote-x 30, space-quote-y 40, space-btn-big-x 40, space-job 50, space-section 120, space-offset 4 |
| Layout | radius-none, border-width 2, frame-desktop 1440, content-desktop 1200, frame-mobile 375, header-desktop 100, header-mobile 70, photo-tilt -5deg |

To change a value: edit `tokens/tokens.json`, run `python3 design-system/tokens/build_tokens_css.py`, commit both files.

## Interaction states

From the Button and input component sets in the Figma library, built into `sections.css`:

| Element | Hover / pressed | Disabled | Error |
|---|---|---|---|
| Primary button | Fill, border and outline turn `pink-hover`. Pressed: outline disappears, button shifts 4px into its place | Grey `state-disabled` fill, border and outline, white label | |
| Secondary button | Fills `pink-hover`, label turns white | As primary | |
| Slider arrow | Fills `pink-hover`, arrow white | Grey fill | |
| Text link | Text turns `pink-hover` | | |
| Tag | Fills navy, label white | | |
| Input | Border `border-focus` (navy 25%) | Grey fill, grey text | Red message under the field (11px) |

White on `pink-hover` is 5.6:1 and passes AA. The 2px navy focus ring is added for keyboard users; the file has none.

## Components

### Actions and labels
| Component | Use |
|---|---|
| `Button` | Primary or secondary action with the offset outline. Big (50px) or small (40px). One primary per view |
| `SliderButton` | 50px arrow for carousels and pagination |
| `TextLink` | Uppercase pink "read more" link with arrow |
| `SocialButton`, `ShareBar` | 40px outlined social link; vertical share links beside articles |
| `Tag`, `CategoryLabel`, `Pill`, `Eyebrow` | Filter tag; purple category label; purple status label; uppercase label above headings |
| `Bullets`, `Checklist`, `Author`, `Meta` | Pink square bullets (nested purple); check-circle list; avatar with name and role; icon + date or duration |

### Forms
| Component | Use |
|---|---|
| `Input` | Text field with label, optional/required marker, search icon, error and disabled states |
| `Textarea`, `FileUpload`, `Checkbox`, `TechOption` | Message field; dashed upload field; checkbox; 120x99 selectable technology box |
| `Tabs` | Underlined tabs, optional icons |

### Cards
| Component | Use |
|---|---|
| `ContentCard` | Technology, advantage or value card (bordered or raised). 3 per row in `.cd-cards` |
| `FeatureItem` | Icon, small display title, text. 2 per row in `.cd-features` |
| `FrameworkTile` | Greyed tool logo tile. 6 per row in `.cd-tiles` |
| `TestimonialCard`, `TeamQuoteCard` | Client quote on solid navy; employee quote, outlined on navy |
| `BlogCard`, `FeaturedArticle`, `ArticleCard` | Home "latest content" card; wide blog feature; blog listing card |
| `UpcomingWebinar`, `WebinarCard`, `MeetupCard`, `ResourceCard` | Know-how listing cards |
| `JobCard`, `PersonCard`, `Stat` | Job row; team portrait; stat number |

### Sections
| Component | What it is | Figma source |
|---|---|---|
| `Header` (+ `MobileMenu`) | Logo, nav, two actions; burger and full-screen menu under 1024px. `dark` for navy heroes | header_desktop, Nav-open |
| `Footer` | Newsletter row, about, offices, link columns, legal | footer_desktop |
| `HeroHome` | White hero: headline, intro, CTA, rating, framed photo, purple orb, logo strip | Home / hero |
| `HeroPage` | Navy centred hero, optional photo under navy 80%, orb, `short` variant | Services, About, Contact heroes |
| `HeroCaseStudy` | Navy hero with back link, share bar, facts row | Case studies_detail / hero |
| `Section` + `SectionHead` | Any section: tone white/blue/pink/peach/navy, 120px padding, optional orb; heading block | All pages |
| `ServiceTabs` | Centred heading, icon tabs, technology list, CTA | Home / services |
| `StatsBand` | Navy band of stats with optional caption | Home / facts |
| `CasePanel` | Tinted 480px case study panel, alternating pink/peach and sides | Home / cases |
| `ValuesGrid` | Heading left, 2x2 value icons right with pink cross | Home / values |
| `Carousel` | Scroller with arrows and "read all" link (testimonials, team quotes, articles) | Home / testimonials, blog |
| `ImageText` (+ `Framed`, `Collage`) | Text beside a tilted framed photo or a two-photo collage | Home / about us, Services / values |
| `ProcessSection` (+ `ProcessSteps`) | Copy left, numbered steps right | Services / process |
| `Banner`, `BannerLight`, `ClientStories` | Navy box with waves; peach full-width band; navy band with wave | Services / baner, Our team / baner, client stories |
| `CtaBand` | Closing light-blue band with two orbs and waves. One per page, above the footer | Home / contact |
| `Opinion`, `PullQuote` | Expert quote with portrait; quote with gradient bar | Service detail / opinion, case detail / quote |
| `LogoStrip`, `Rating` | Greyscale client logos; review-site stars | Home / hero, Services / logo |
| `ListingHeader`, `Pagination` | Listing title with search; numbered pages with arrows | Blog, Webinars, Meetups, Resources |
| `ArticleHeader`, `Panel`, `ContactPerson` | Article top; light pink side panel; contact person with email/LinkedIn | Blog_article, Job opportunity, Contact |
| `Timeline`, `Perks` | Recruitment steps; perks grid | Our team |
| `DownloadModal`, `Graphic` | Resource download pop-up; infographic and world map images | Resources_download_popup, About us |

Layout helper classes (in `sections.css`): `.cd-container`, `.cd-split`, `.cd-cards`, `.cd-features`, `.cd-tiles`, `.cd-grid3`, `.cd-articles`, `.cd-webinars`, `.cd-people`, `.cd-two-col`, `.cd-h1` to `.cd-h5`, `.cd-text`, `.cd-lead`, `.cd-small`.

Values marked "measured" in `tokens.json` (stats band padding, orb blur equivalent, some section gaps) were read from layer positions, not file variables.

## Assets

| Path | Notes |
|---|---|
| `assets/logo/*.svg` | Black on white and tints (fill #231F20 as drawn); white on navy and dark photos |
| `assets/icons/*.svg` | Exported from Figma with brand colour baked in. Social icons and quote-mark included |
| `assets/icons/service-*@4x.png` | service-frontend, service-backend, service-qa. Display at 30, 30 and 40px |
| `assets/patterns/` | wave-lines, wave-rings, wave-ribbon (3x), wave-banner (2x, white lines for navy boxes), wave-case-panel (1.5x). On-site opacity applied |
| `assets/graphics/` | areas-infographic@2x.png (technology circles on the brand gradient), world-map@1.5x.png |

Photography is not included: the Figma file uses real team and product photos that belong to The Codest's media library. Components show a grey placeholder until an `imageSrc` is passed.

## Reference screenshots

The screenshots of every main Figma page are archived in `archive/design-system-reference/` in the source repository (`dannyporter-thecodest/Codest-Visual-identity-guidelines`). They are not needed to build pages.

## Accessibility

Pink on white is 4.17:1 and fails AA for normal-size text, which affects every default button and link. Hover pink passes (5.6:1). Do not put pink text on the pale tints.
