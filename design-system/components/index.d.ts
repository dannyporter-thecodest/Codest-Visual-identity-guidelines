import type { ReactNode } from "react";

interface Link { label: string; href: string; }

/** Primary or secondary action with the offset pink outline. One primary per view. */
export interface ButtonProps {
  /** primary: pink fill, white label. secondary: white fill, pink label. Default primary. */
  variant?: "primary" | "secondary";
  /** big: 18px label, 50px tall. small: 16px label, 40px tall. Default big. */
  size?: "big" | "small";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  /** Two or three words. Rendered uppercase. */
  children: ReactNode;
}

/** 50px carousel arrow with the offset outline. */
export interface SliderButtonProps { direction?: "prev" | "next"; label?: string; onClick?: () => void; }

/** Uppercase pink link with a north-east arrow. For "read more" inside content. */
export interface TextLinkProps { href?: string; className?: string; children: ReactNode; }

/** Filter tag. Outlined when off, navy when selected. Wrap a set in .cd-tags. */
export interface TagProps { selected?: boolean; onClick?: () => void; className?: string; children: ReactNode; }

/** Purple outlined category label on blog cards. */
export interface CategoryLabelProps { children: ReactNode; }

/** Filter tabs with a pink underline on the active tab. */
export interface TabsProps { items: ReactNode[]; defaultIndex?: number; onChange?: (index: number) => void; }

/** Text field. search adds the search icon. */
export interface InputProps { id?: string; label?: string; placeholder?: string; defaultValue?: string; type?: string; search?: boolean; }

/** 16px square checkbox with a pink tick. */
export interface CheckboxProps { name?: string; defaultChecked?: boolean; checked?: boolean; onChange?: (e: unknown) => void; children?: ReactNode; }

/** Selectable 120x99 technology box from the contact form. */
export interface TechOptionProps { label: ReactNode; iconSrc?: string; name?: string; defaultChecked?: boolean; onChange?: (e: unknown) => void; }

/** One number in the navy stats strip. Place inside an element with class cd-stats. Only use sourced numbers. */
export interface StatProps { value: ReactNode; label: ReactNode; plus?: boolean; }

/** Client quote on a navy card. Only use cleared quotes. */
export interface TestimonialCardProps { quote: ReactNode; name: ReactNode; role: ReactNode; }

/** Article card with image, author chip, category, title and excerpt. */
export interface BlogCardProps { imageSrc?: string; avatarSrc?: string; author: ReactNode; authorRole?: ReactNode; category?: ReactNode; title: ReactNode; excerpt: ReactNode; }

/** Job listing row. */
export interface JobCardProps { title: ReactNode; skills?: string[]; pay: ReactNode; payNote?: ReactNode; terms?: ReactNode; href?: string; cta?: string; }

/** Numbered process steps with a connector line. */
export interface ProcessStepsProps { steps: { title: ReactNode; meta?: string; text: ReactNode }[]; }

/** Site header. Pass the black logo on white, the white logo with dark=true over dark heroes. */
export interface HeaderProps { logoSrc: string; homeHref?: string; links?: Link[]; primary?: Link; secondary?: Link; dark?: boolean; }

/** Navy site footer. */
export interface FooterProps { aboutTitle?: string; about?: ReactNode; offices?: { place: string; address: ReactNode }[]; columns?: { title: string; links: Link[] }[]; copyright?: ReactNode; legal?: ReactNode; }
