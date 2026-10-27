/* The Codest components. React 18, no build step. Exposes window.Codest.
   Icon paths below are copied from design-system/assets/icons (exported from Figma). */
(function () {
  var h = window.React.createElement;

  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }

  var PATHS = {
    arrowLeft: "M15.8837 21.6172L10.5174 16.2509H22.4999V13.7509H10.5174L15.8837 8.38469L14.1162 6.61719L5.73242 15.0009L14.1162 23.3847L15.8837 21.6172Z",
    arrowRight: "M12.3488 21.6172L17.715 16.2509H5.7325V13.7509H17.715L12.3488 8.38469L14.1163 6.61719L22.5 15.0009L14.1163 23.3847L12.3488 21.6172Z",
    arrowUpRight: "M11.218 13.155L13.0815 13.0805L13.435 4.24166L4.59619 4.59521L4.52166 6.45865L10.1792 6.23235L3.61007 12.8015L4.87521 14.0666L11.4443 7.49749L11.218 13.155Z",
    checked: "M4.40856 9.88935L1.22656 6.70735L2.64156 5.29235L4.40856 7.06435L9.35756 2.11035L10.7726 3.52535L4.40856 9.88935Z",
    burger: "M18.8891 23.333H3.3335V20.833H18.8891V23.333ZM26.6668 17.083H3.3335V14.583H26.6668V17.083ZM18.8891 10.833H3.3335V8.33301H18.8891V10.833Z",
    search: "M15.7499 17L10.833 12.0571C9.75038 12.87 8.43603 13.3107 7.08472 13.3138H7.0834L7.01177 13.3145C5.41735 13.3145 3.88823 12.6778 2.76081 11.5444C1.63338 10.411 1 8.87379 1 7.27093L1.00066 7.19492V7.19892C1.00066 5.55487 1.65032 3.97815 2.80673 2.81562C3.96313 1.6531 5.53155 1 7.16696 1C8.80236 1 10.3708 1.6531 11.5272 2.81562C12.6836 3.97815 13.3333 5.55487 13.3333 7.19892C13.3161 8.56321 12.8746 9.88788 12.0705 10.9871L12.0831 10.9691L17 15.912L15.7499 17ZM7.16696 2.67474C5.97976 2.63615 4.82588 3.07291 3.95883 3.88907C3.09178 4.70523 2.58248 5.83403 2.54282 7.02747C2.50315 8.2209 2.93638 9.38135 3.74732 10.2539C4.55825 11.1264 5.68056 11.6396 6.86767 11.6807C8.05478 11.7219 9.20959 11.2876 10.0784 10.4733C10.9472 9.65905 11.4589 8.53135 11.5011 7.33801C11.5433 6.14466 11.1126 4.98328 10.3035 4.10901C9.49442 3.23475 8.37321 2.71912 7.18619 2.6754H7.16629H7.16762L7.16696 2.67474Z",
    pin: "M9 1.5C7.41904 1.49992 5.90194 2.12382 4.77843 3.23609C3.65492 4.34837 3.01581 5.85912 3 7.44C3 11.55 8.2875 16.125 8.5125 16.32C8.64835 16.4362 8.82124 16.5 9 16.5C9.17876 16.5 9.35165 16.4362 9.4875 16.32C9.75 16.125 15 11.55 15 7.44C14.9842 5.85912 14.3451 4.34837 13.2216 3.23609C12.0981 2.12382 10.581 1.49992 9 1.5ZM9 9.75C8.48082 9.75 7.97331 9.59605 7.54163 9.30761C7.10995 9.01917 6.7735 8.6092 6.57482 8.12954C6.37614 7.64989 6.32415 7.12209 6.42544 6.61289C6.52672 6.10369 6.77673 5.63596 7.14384 5.26884C7.51096 4.90173 7.97869 4.65173 8.48789 4.55044C8.99709 4.44915 9.52489 4.50114 10.0045 4.69982C10.4842 4.8985 10.8942 5.23495 11.1826 5.66663C11.471 6.09831 11.625 6.60582 11.625 7.125C11.625 7.82119 11.3484 8.48887 10.8562 8.98116C10.3639 9.47344 9.69619 9.75 9 9.75Z"
  };

  function Icon(path, size, color, viewBox) {
    return h("svg", { viewBox: "0 0 " + viewBox + " " + viewBox, width: size, height: size, fill: color, "aria-hidden": "true" }, h("path", { d: path }));
  }

  function Button(p) {
    var variant = p.variant || "primary", size = p.size || "big";
    var el = h(p.href ? "a" : "button", {
      className: cx("cd-btn", "cd-btn--" + size, variant === "secondary" && "cd-btn--secondary", p.className),
      href: p.href, type: p.href ? undefined : p.type || "button", onClick: p.onClick
    }, p.children);
    return h("span", { className: "cd-wrap" }, el);
  }

  function SliderButton(p) {
    var next = p.direction === "next";
    return h("span", { className: "cd-wrap" },
      h("button", { className: "cd-slider", type: "button", onClick: p.onClick, "aria-label": p.label || (next ? "Next" : "Previous") },
        Icon(next ? PATHS.arrowRight : PATHS.arrowLeft, 30, "var(--primary-pink)", 30)));
  }

  function TextLink(p) {
    return h("a", { className: cx("cd-link", p.className), href: p.href || "#" },
      h("span", null, p.children), Icon(PATHS.arrowUpRight, 18, "currentColor", 18));
  }

  function Tag(p) {
    return h("button", { className: cx("cd-tag", p.className), type: "button", "aria-pressed": p.selected ? "true" : "false", onClick: p.onClick }, p.children);
  }

  function CategoryLabel(p) { return h("span", { className: "cd-category" }, p.children); }

  function Input(p) {
    var field = h("span", { className: "cd-input-wrap" },
      p.search ? h("svg", { viewBox: "0 0 18 18", width: 18, height: 18, fill: "var(--primary-navy)", opacity: 0.8, "aria-hidden": "true" }, h("path", { d: PATHS.search })) : null,
      h("input", { className: "cd-input", id: p.id, type: p.type || (p.search ? "search" : "text"), placeholder: p.placeholder,
        defaultValue: p.defaultValue, "aria-label": p.label ? undefined : p.placeholder }));
    if (!p.label) return field;
    return h("label", { className: "cd-field", htmlFor: p.id }, h("span", { className: "cd-field__label" }, p.label), field);
  }

  function Checkbox(p) {
    return h("label", { className: "cd-check" },
      h("input", { type: "checkbox", defaultChecked: p.defaultChecked, checked: p.checked, onChange: p.onChange, name: p.name }),
      h("span", { className: "cd-check__box", "aria-hidden": "true" }, Icon(PATHS.checked, 12, "var(--primary-pink)", 12)),
      p.children ? h("span", null, p.children) : null);
  }

  function TechOption(p) {
    return h("label", { className: "cd-tech" },
      h(Checkbox, { defaultChecked: p.defaultChecked, name: p.name, onChange: p.onChange }),
      p.iconSrc ? h("img", { className: "cd-tech__icon", src: p.iconSrc, alt: "" }) : null,
      h("span", null, p.label));
  }

  function Tabs(p) {
    var s = window.React.useState(p.defaultIndex || 0), active = s[0], set = s[1];
    return h("div", { className: "cd-tabs", role: "tablist" }, (p.items || []).map(function (label, i) {
      return h("button", { key: i, className: "cd-tab", role: "tab", type: "button", "aria-selected": i === active ? "true" : "false",
        onClick: function () { set(i); if (p.onChange) p.onChange(i); } }, label);
    }));
  }

  function Stat(p) {
    return h("div", { className: "cd-stat" },
      h("div", { className: "cd-stat__value" }, p.value, p.plus === false ? null : h("span", { className: "cd-stat__plus" }, "+")),
      h("div", { className: "cd-stat__label" }, p.label));
  }

  function TestimonialCard(p) {
    return h("figure", { className: "cd-quote" },
      h("blockquote", { className: "cd-quote__text" }, p.quote),
      h("figcaption", null, h("div", { className: "cd-quote__name" }, p.name), h("div", { className: "cd-quote__role" }, p.role)));
  }

  function BlogCard(p) {
    return h("article", { className: "cd-blog" },
      h("div", { className: "cd-blog__media", style: p.imageSrc ? { backgroundImage: "url(" + p.imageSrc + ")" } : null },
        h("div", { className: "cd-blog__author" },
          p.avatarSrc ? h("img", { className: "cd-blog__avatar", src: p.avatarSrc, alt: "" }) : h("span", { className: "cd-blog__avatar" }),
          h("div", null, h("div", { className: "cd-blog__name" }, p.author), h("div", { className: "cd-blog__role" }, p.authorRole)))),
      h("div", { className: "cd-blog__body" },
        p.category ? h("div", null, h(CategoryLabel, null, p.category)) : null,
        h("h3", { className: "cd-blog__title" }, p.title),
        h("p", { className: "cd-blog__excerpt" }, p.excerpt)));
  }

  function JobCard(p) {
    return h("article", { className: "cd-job" },
      h("div", null, h("h3", { className: "cd-job__title" }, p.title),
        h("div", { className: "cd-tags", style: { gap: "10px" } }, (p.skills || []).map(function (s) {
          return h("span", { key: s, className: "cd-tag", style: { cursor: "default" } }, s); }))),
      h("div", null, h("div", { className: "cd-job__pay" }, p.pay), p.payNote ? h("div", { className: "cd-job__note" }, p.payNote) : null,
        h("div", { className: "cd-job__terms" }, p.terms)),
      h("div", null, h(Button, { href: p.href }, p.cta || "View job")));
  }

  function ProcessSteps(p) {
    return h("ol", { className: "cd-steps", style: { listStyle: "none", margin: 0, padding: 0 } }, (p.steps || []).map(function (s, i) {
      return h("li", { key: i, className: "cd-step" },
        h("div", { className: "cd-step__num" }, String(i + 1).padStart(2, "0")),
        h("div", null,
          h("h3", { className: "cd-step__title" }, s.title, s.meta ? h("span", { className: "cd-step__meta" }, " " + s.meta) : null),
          h("p", { className: "cd-step__text" }, s.text)));
    }));
  }

  function Header(p) {
    return h("header", { className: cx("cd-header", p.dark && "cd-header--dark") },
      h("a", { href: p.homeHref || "/", "aria-label": "The Codest home" }, h("img", { className: "cd-header__logo", src: p.logoSrc, alt: "The Codest" })),
      h("ul", { className: "cd-nav" }, (p.links || []).map(function (l) { return h("li", { key: l.label }, h("a", { href: l.href }, l.label)); })),
      h("div", { className: "cd-header__actions" },
        p.secondary ? h(Button, { size: "small", variant: "secondary", href: p.secondary.href }, p.secondary.label) : null,
        p.primary ? h(Button, { size: "small", href: p.primary.href }, p.primary.label) : null),
      h("button", { className: "cd-header__burger", type: "button", "aria-label": "Open menu" },
        Icon(PATHS.burger, 30, p.dark ? "var(--primary-white)" : "var(--primary-navy)", 30)));
  }

  function Footer(p) {
    return h("footer", { className: "cd-footer" },
      h("div", { className: "cd-footer__grid" },
        h("div", null, h("h2", { className: "cd-footer__head" }, p.aboutTitle || "About us"), h("p", { className: "cd-footer__text" }, p.about),
          (p.offices || []).map(function (o) {
            return h("div", { key: o.place }, h("div", { className: "cd-footer__place" }, Icon(PATHS.pin, 18, "var(--complementary-purple)", 18), o.place),
              h("div", { className: "cd-footer__text" }, o.address)); })),
        (p.columns || []).map(function (c) {
          return h("div", { key: c.title }, h("h2", { className: "cd-footer__head" }, c.title),
            h("ul", { className: "cd-footer__links" }, c.links.map(function (l) { return h("li", { key: l.label }, h("a", { href: l.href }, l.label)); }))); })),
      h("div", { className: "cd-footer__bottom" }, h("span", null, p.copyright), h("span", null, p.legal)));
  }

  window.Codest = {
    Button: Button, SliderButton: SliderButton, TextLink: TextLink, Tag: Tag, CategoryLabel: CategoryLabel,
    Input: Input, Checkbox: Checkbox, TechOption: TechOption, Tabs: Tabs, Stat: Stat, TestimonialCard: TestimonialCard,
    BlogCard: BlogCard, JobCard: JobCard, ProcessSteps: ProcessSteps, Header: Header, Footer: Footer
  };
})();
