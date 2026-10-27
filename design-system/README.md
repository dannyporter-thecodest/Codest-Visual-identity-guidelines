# The Codest Design System

The build kit for The Codest's visual identity: tokens, fonts, logo, icons, patterns and 16 components. Rules for when and why to use each piece are in `../visual-identity/guidelines.md`; this file covers how.

```
tokens/
  tokens.json            Source of truth for every value (name, value, usage note)
  tokens.css             CSS variables, @font-face rules, a class per type style. Generated
  build_tokens_css.py    Regenerates tokens.css from tokens.json
fonts/                   Iosevka Heavy, Fira Sans (latin + latin-ext), OFL licences
assets/
  logo/                  the-codest-logo-black.svg, the-codest-logo-white.svg
  icons/                 24 SVG icons + 3 service icons as 4x PNG
  patterns/              3 line-wave textures, transparent PNG at 3x
components/
  bundle.js              16 React 18 components on window.Codest, no build step
  bundle.css             Component styles, built on tokens.css variables
  index.d.ts             Props for every component
examples.html            Every component rendered on one page
```

## Tokens

```html
<link rel="stylesheet" href="design-system/tokens/tokens.css">
```

Every colour, space, shadow and layout value is a CSS variable named after its token: `var(--primary-pink)`, `var(--space-section)`, `var(--shadow-card)`. Every type style is a class: `.display-xl`, `.text-md-regular`, `.button-small`. Families: `var(--font-display)`, `var(--font-body)`.

| Family | Tokens |
|---|---|
| Colour | primary-navy, primary-pink, primary-white, complementary-text, complementary-purple, complementary-orange, complementary-light-blue, complementary-light-pink, tint-peach, border-subtle, line-subtle, on-navy-border, on-navy-muted, logo-ink |
| Type | display-xl, display-lg, display-md, display-sm, display-xs, button-big, button-small, text-lg-regular, text-lg-bold, text-md-regular, text-md-bold, text-md-italic, text-sm-regular, text-sm-medium, text-sm-bold-uppercase, text-xs-regular |
| Spacing | space-tag-y 8, space-btn-small-y 10, space-input-y 13, space-tag-gap 15, space-inset 16, space-card 20, space-btn-small-x 20, space-quote-x 30, space-quote-y 40, space-job 50, space-btn-big-x 40, space-section 120, space-offset 4 |
| Other | radius-none, shadow-card, shadow-chip, border-width, frame-desktop, content-desktop, frame-mobile, header-desktop, header-mobile |

To change a value: edit `tokens/tokens.json`, run `python3 design-system/tokens/build_tokens_css.py`, commit both files.

## Components

Load React 18, the bundle and both stylesheets. Components are on `window.Codest`.

```html
<link rel="stylesheet" href="design-system/tokens/tokens.css">
<link rel="stylesheet" href="design-system/components/bundle.css">
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="design-system/components/bundle.js"></script>
```

Not using React? Every component is plain HTML with the `cd-` classes from `bundle.css`; copy the markup from `examples.html` (inspect it in a browser) and the styles work the same.

| Component | What it is | Key props | Spec from Figma |
|---|---|---|---|
| `Header` | Site header with logo, nav, two actions | `logoSrc`, `links[]`, `primary`, `secondary`, `dark` | 100px tall, nav Iosevka 16 uppercase navy, burger under 1024px (70px tall) |
| `Footer` | Navy footer with about, offices, link columns | `about`, `offices[]`, `columns[]`, `copyright`, `legal` | Headings Iosevka 22 purple, links Fira 14 white 80% |
| `Button` | Primary or secondary action with offset outline | `variant`, `size`, `href`, `onClick` | Big 18px / 40px sides / 50px; small 16px / 20px sides / 40px |
| `SliderButton` | Carousel arrow | `direction`, `label`, `onClick` | 50px square, 2px pink border, arrow from the file |
| `TextLink` | Uppercase pink link with north-east arrow | `href` | Iosevka 16 uppercase pink, 18px arrow |
| `Tag` | Filter tag, toggles | `selected`, `onClick` | 2px subtle border, 8 × 16px; selected navy fill, white medium |
| `CategoryLabel` | Article category | children | 1px purple border, 6 × 10px, Fira bold 14 uppercase purple |
| `Tabs` | Filter tabs | `items[]`, `defaultIndex`, `onChange` | 23 × 40px, Fira 16; active bold with 2px pink underline, inactive 70% with navy 15% underline |
| `Input` | Text field, optional search icon | `label`, `placeholder`, `search`, `type`, `id` | 2px subtle border, 13 × 16px, Fira 14 navy, placeholder 80% |
| `Checkbox` | Consent or option checkbox | `defaultChecked`, `onChange`, children | 16px box, 2px border (pink when checked), pink tick |
| `TechOption` | Selectable technology box in the contact form | `label`, `iconSrc`, `defaultChecked` | 120 × 99px, 2px border, pink when selected, checkbox top-left |
| `Stat` | Number in the navy stats strip (wrap in `.cd-stats`) | `value`, `label`, `plus` | Number Iosevka 46 white with purple plus, label Fira 16 white |
| `TestimonialCard` | Client quote on navy | `quote`, `name`, `role` | 486 × 330px, padding 40 × 30, quote Fira 16 italic, name purple bold uppercase |
| `BlogCard` | Article card | `imageSrc`, `avatarSrc`, `author`, `authorRole`, `category`, `title`, `excerpt` | 486px wide, 280px image with 10% navy overlay, author chip, 20px padding |
| `JobCard` | Job listing row | `title`, `skills[]`, `pay`, `payNote`, `terms`, `href`, `cta` | 1200px wide, 50px padding, three columns, `shadow-card` |
| `ProcessSteps` | Numbered process list | `steps[{title, meta, text}]` | 60px navy circle, white number, 2px navy 15% connector |

Measured, not from file variables: stats strip padding and gaps, footer column layout, header nav spacing, job card column gaps. Everything else is from the file's variables or layer properties.

Not built yet (seen in the file): mobile navigation drawer, case study panel, values grid, service tabs with icons, file upload, download pop-up, webinar and meetup cards.

## Assets

| Path | Notes |
|---|---|
| `assets/logo/the-codest-logo-black.svg` | On white and pale tints. Fill #231F20 as drawn |
| `assets/logo/the-codest-logo-white.svg` | On navy and dark photos |
| `assets/icons/*.svg` | Exported from Figma at drawn size with their brand colour baked in. To recolour inline, replace the `fill` value with a token colour |
| `assets/icons/service-*@4x.png` | service-frontend, service-backend, service-qa. Display at 30, 30 and 40px |
| `assets/patterns/*@3x.png` | Transparent, on-site opacity already applied. Display at one third of pixel size |

## Accessibility

Pink on white is 4.17:1 and fails AA for normal-size text, which affects every button and link in the current design. Do not put pink text on the pale tints. Focus rings in `bundle.css` (2px navy, 4px offset) were added for accessibility and are not in the file.
