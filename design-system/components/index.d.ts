/* Props for every component on window.Codest. Documentation only (not type-checked).
   All copy passed in must come from the content guide; numbers need a claims-register entry. */
import type { ReactNode } from "react";

interface Link { label: string; href: string; }
interface NavLink extends Link { children?: (Link & { current?: boolean })[]; }
interface Cta { label: string; href?: string; }

/* ---------- Actions ---------- */
/** Primary or secondary action with the offset outline. One primary per view. Hover, pressed and disabled states built in. */
export interface ButtonProps { variant?: "primary" | "secondary"; size?: "big" | "small"; href?: string; type?: "button" | "submit"; disabled?: boolean; onClick?: () => void; className?: string; children: ReactNode; }
/** 50px carousel or pagination arrow with the offset outline. */
export interface SliderButtonProps { direction?: "prev" | "next"; label?: string; disabled?: boolean; onClick?: () => void; }
/** Uppercase pink link with a north-east arrow. For "read more" inside content. */
export interface TextLinkProps { href?: string; className?: string; children: ReactNode; }
/** 40px square pink-outlined social link. icon: "linkedin" | "facebook" | "twitter" | "envelope". */
export interface SocialButtonProps { icon: "linkedin" | "facebook" | "twitter" | "envelope"; href?: string; label: string; }
/** Vertical share links beside articles and case studies. dark = on a navy hero. */
export interface ShareBarProps { dark?: boolean; items?: { icon: "facebook" | "twitter" | "linkedin"; label: string; href?: string }[]; }

/* ---------- Labels and lists ---------- */
export interface TagProps { selected?: boolean; onClick?: () => void; className?: string; children: ReactNode; }
/** Purple outlined uppercase label (blog card category). */
export interface CategoryLabelProps { children: ReactNode; }
/** Purple outlined uppercase status ("Upcoming webinar", "Coming soon"). */
export interface PillProps { children: ReactNode; }
/** Bold uppercase 14px label above a heading. purple = on cards and navy. */
export interface EyebrowProps { purple?: boolean; children: ReactNode; }
/** Pink square bullets; one level of nesting with purple bullets. */
export interface BulletsProps { items: (string | { text: string; items?: string[] })[]; }
/** Pink check-circle list (report contents). */
export interface ChecklistProps { items: ReactNode[]; }
/** 48px round avatar, uppercase bold name, role. */
export interface AuthorProps { name: ReactNode; role?: ReactNode; imageSrc?: string; }
/** Icon + text meta line. icon: "time" | "calendar". */
export interface MetaProps { icon?: "time" | "calendar"; children: ReactNode; }

/* ---------- Forms ---------- */
interface FieldProps { id?: string; name?: string; label?: string; hint?: string; error?: string; required?: boolean; optional?: boolean; disabled?: boolean; }
/** Text field. search adds the search icon. error shows the red message and border; disabled greys it out. */
export interface InputProps extends FieldProps { placeholder?: string; defaultValue?: string; type?: string; search?: boolean; }
export interface TextareaProps extends FieldProps { placeholder?: string; rows?: number; }
/** Dashed upload field with the upload icon; shows the chosen file name. */
export interface FileUploadProps extends FieldProps { placeholder?: string; accept?: string; }
export interface CheckboxProps { name?: string; defaultChecked?: boolean; checked?: boolean; onChange?: (e: unknown) => void; children?: ReactNode; }
/** Selectable 120x99 technology box from the contact form. */
export interface TechOptionProps { label: ReactNode; iconSrc?: string; name?: string; defaultChecked?: boolean; onChange?: (e: unknown) => void; }
/** Underlined tabs. Items can be strings or { label, iconSrc }. */
export interface TabsProps { items: (ReactNode | { label: ReactNode; iconSrc?: string })[]; defaultIndex?: number; onChange?: (index: number) => void; className?: string; }

/* ---------- Cards ---------- */
/** One number in a stats band. Only numbers in the claims register. */
export interface StatProps { value: ReactNode; label: ReactNode; plus?: boolean; }
/** Client quote on a solid navy card. Only cleared quotes. */
export interface TestimonialCardProps { quote: ReactNode; name: ReactNode; role: ReactNode; }
/** Employee quote, outlined card on navy, with quote mark and avatar. dimmed = the next card in a carousel. */
export interface TeamQuoteCardProps { quote: ReactNode; name: ReactNode; role: ReactNode; imageSrc?: string; dimmed?: boolean; }
/** Article card with image, author chip, category, title, excerpt (Home "latest content"). */
export interface BlogCardProps { imageSrc?: string; avatarSrc?: string; author: ReactNode; authorRole?: ReactNode; category?: ReactNode; title: ReactNode; excerpt: ReactNode; }
export interface JobCardProps { title: ReactNode; skills?: string[]; pay: ReactNode; payNote?: ReactNode; terms?: ReactNode; href?: string; cta?: string; }
/** Technology, advantage or core-value card. raised = shadow instead of the faint pink border. */
export interface ContentCardProps { title: ReactNode; text: ReactNode; iconSrc?: string; linkLabel?: string; href?: string; raised?: boolean; }
/** Icon, 16px display title, 14px text. Use in .cd-features grid. */
export interface FeatureItemProps { iconSrc: string; title: ReactNode; text: ReactNode; }
/** Greyed tool or framework logo tile. Use in .cd-tiles grid. */
export interface FrameworkTileProps { label: ReactNode; iconSrc?: string; }
/** Wide article card at the top of the blog. */
export interface FeaturedArticleProps { imageSrc?: string; category?: ReactNode; title: ReactNode; excerpt: ReactNode; author: ReactNode; authorRole?: ReactNode; avatarSrc?: string; href?: string; linkLabel?: string; }
/** Blog listing card (image on top). Use in .cd-articles grid. */
export interface ArticleCardProps { imageSrc?: string; category?: ReactNode; title: ReactNode; excerpt: ReactNode; author: ReactNode; authorRole?: ReactNode; avatarSrc?: string; }
export interface UpcomingWebinarProps { label?: string; date: ReactNode; title: ReactNode; imageSrc?: string; href?: string; cta?: string; }
export interface WebinarCardProps { episode: ReactNode; title: ReactNode; text: ReactNode; duration: ReactNode; }
/** variant: "default" | "featured" (purple outline) | "upcoming" (navy, with sign-up button). */
export interface MeetupCardProps { variant?: "default" | "featured" | "upcoming"; series?: ReactNode; title: ReactNode; text?: ReactNode; duration?: ReactNode; date?: ReactNode; author?: ReactNode; authorRole?: ReactNode; avatarSrc?: string; label?: string; href?: string; cta?: string; }
export interface ResourceCardProps { type?: ReactNode; title: ReactNode; text: ReactNode; href?: string; cta?: string; }
/** Square portrait with pink offset frame, name, role. Use in .cd-people grid. */
export interface PersonCardProps { name: ReactNode; role: ReactNode; imageSrc?: string; }

/* ---------- Decoration ---------- */
/** Blurred colour orb. Place inside a section with position: relative; overflow: hidden. */
export interface OrbProps { color?: "purple" | "orange"; style?: Record<string, unknown>; }
/** Photo tilted -5deg with a 2px frame tilted the other way. frame "pink" or purple (default). */
export interface FramedProps { imageSrc?: string; alt?: string; frame?: "pink" | "purple"; flip?: boolean; width?: number | string; height?: number | string; }
/** Two overlapping tilted photos with a pink frame (culture sections). */
export interface CollageProps { imageA?: string; imageB?: string; altA?: string; altB?: string; }
/** Image from assets/graphics: "areas-infographic@2x.png" or "world-map@1.5x.png". */
export interface GraphicProps { name: string; alt?: string; }

/* ---------- Navigation ---------- */
/** Site header. dark = white logo and nav over a navy hero. Opens MobileMenu under 1024px. */
export interface HeaderProps { logoSrc?: string; homeHref?: string; links?: NavLink[]; primary?: Link; secondary?: Link; dark?: boolean; }
export interface MobileMenuProps { links?: NavLink[]; primary?: Link; secondary?: Link; onClose?: () => void; }
/** Navy footer with newsletter row (newsletter={false} to hide), about, offices, link columns, legal line. */
export interface FooterProps { newsletter?: boolean; newsletterTitle?: string; consent?: ReactNode; aboutTitle?: string; about?: ReactNode; offices?: { place: string; address: ReactNode }[]; columns?: { title: string; links: Link[] }[]; copyright?: ReactNode; legal?: ReactNode; }
export interface PaginationProps { pages?: (number | "…")[]; current?: number; }
/** Listing page title with search field on the right. */
export interface ListingHeaderProps { title: ReactNode; search?: boolean; searchPlaceholder?: string; }

/* ---------- Sections ---------- */
/** Full-width section with 120px vertical padding. tone: white (default) | "blue" | "pink" | "peach" | "navy". */
export interface SectionProps { tone?: "blue" | "pink" | "peach" | "navy"; orb?: OrbProps; id?: string; className?: string; style?: Record<string, unknown>; children: ReactNode; }
/** Heading block: optional eyebrow, H2, text, action. center for centred layouts. */
export interface SectionHeadProps { title: ReactNode; text?: ReactNode; eyebrow?: ReactNode; center?: boolean; action?: ReactNode; spacing?: number; }
/** Star rating from a review site. Use only with a current, sourced score. */
export interface RatingProps { score: string; count?: string; source?: string; logoSrc?: string; }
/** Greyscale client logos. Only clients with written consent; never MUFG or Allegro. */
export interface LogoStripProps { title?: ReactNode; logos: { src: string; alt: string }[]; }
/** White home hero: headline, intro, CTA, rating, framed photo, purple orb, optional logo strip. */
export interface HeroHomeProps { title: ReactNode; text?: ReactNode; cta?: Cta; rating?: RatingProps; imageSrc?: string; imageAlt?: string; logos?: { src: string; alt: string }[]; }
/** Navy page hero, centred. imageSrc puts a photo under navy at 80%. short = 360px (contact, careers). orb adds the purple orb. */
export interface HeroPageProps { title: ReactNode; text?: ReactNode; cta?: Cta; imageSrc?: string; short?: boolean; orb?: boolean; }
/** Navy case study hero with back link, share bar, category, title, intro and facts row. */
export interface HeroCaseStudyProps { category?: ReactNode; title: ReactNode; text?: ReactNode; facts?: { label: ReactNode; value: ReactNode }[]; backHref?: string; }
/** Centred heading, tabs with icons, technology list, CTA (Home "How can we help"). */
export interface ServiceTabsProps { title: ReactNode; text?: ReactNode; groups: { label: string; iconSrc?: string; items: { label: string; iconSrc?: string }[] }[]; cta?: Cta; }
/** Full-width navy band of Stat items with optional caption. */
export interface StatsBandProps { caption?: ReactNode; stats: StatProps[]; }
/** 1200x480 tinted case study panel. tone "peach" alternates with the default light pink; reverse puts the image left. */
export interface CasePanelProps { category?: ReactNode; title: ReactNode; href?: string; linkLabel?: string; imageSrc?: string; imageAlt?: string; tone?: "pink" | "peach"; reverse?: boolean; }
/** Heading and CTA left, 2x2 value icons right with a pink cross divider. */
export interface ValuesGridProps { title: ReactNode; cta?: Cta; items: { label: ReactNode; iconSrc: string }[]; }
/** Horizontal scroller with slider arrows and an optional "read all" link. */
export interface CarouselProps { title?: ReactNode; titleClass?: string; link?: Link; children: ReactNode; }
/** Text beside a framed photo (or collage). reverse puts the image left. cta.link renders a TextLink instead of a button. */
export interface ImageTextProps { title: ReactNode; text: ReactNode; cta?: Cta & { link?: boolean; variant?: "primary" | "secondary" }; imageSrc?: string; frame?: "pink" | "purple"; reverse?: boolean; small?: boolean; collage?: CollageProps; }
/** Closing light-blue band with two orbs and waves. One per page, just above the footer. */
export interface CtaBandProps { title: ReactNode; text?: ReactNode; cta?: Cta; }
/** Navy box with white wave lines. align "left" for use inside articles. */
export interface BannerProps { title: ReactNode; text?: ReactNode; cta?: Cta; align?: "center" | "left"; }
/** Full-width peach band with an orange orb (careers). */
export interface BannerLightProps { title: ReactNode; cta?: Cta; }
/** Navy band with heading, text and CTA, wave on the right. */
export interface ClientStoriesProps { title: ReactNode; text?: ReactNode; cta?: Cta; }
/** Copy and secondary CTA left, numbered steps right. */
export interface ProcessSectionProps { title: ReactNode; text?: ReactNode; cta?: Cta; steps: ProcessStepsProps["steps"]; }
export interface ProcessStepsProps { steps: { title: ReactNode; meta?: string; text: ReactNode }[]; }
/** Expert quote on light pink with square framed portrait. */
export interface OpinionProps { quote: ReactNode; name: ReactNode; role?: ReactNode; imageSrc?: string; }
/** Quote panel with the brand gradient bar on top. With name: client opinion; without: article pull quote. */
export interface PullQuoteProps { quote: ReactNode; name?: ReactNode; role?: ReactNode; }
/** Horizontal numbered steps with pink squares (recruitment). */
export interface TimelineProps { steps: ReactNode[]; }
/** 4-column perks with check icons. */
export interface PerksProps { items: { title: ReactNode; text: ReactNode }[]; }
/** Date, category, H1 and author at the top of an article. */
export interface ArticleHeaderProps { date: ReactNode; category?: ReactNode; title: ReactNode; author: ReactNode; authorRole?: ReactNode; avatarSrc?: string; }
/** Light pink side panel (job application, contact questions). */
export interface PanelProps { children: ReactNode; }
export interface ContactPersonProps { name: ReactNode; role: ReactNode; imageSrc?: string; email?: string; linkedin?: string; }
/** 410px modal with email field, consent and download button. */
export interface DownloadModalProps { title?: ReactNode; consent?: ReactNode; cta?: string; onClose?: () => void; }
