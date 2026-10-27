/* The Codest components. React 18, no build step. Exposes window.Codest.
   Asset paths resolve against window.CodestConfig.assetBase (default "design-system/assets/").
   Icon paths inlined below are copied from design-system/assets/icons (exported from Figma). */
(function () {
  var React = window.React, h = React.createElement, useState = React.useState, useRef = React.useRef;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }
  function A(path) { var c = window.CodestConfig || {}; return (c.assetBase || "design-system/assets/") + path; }
  function icon(name) { return A("icons/" + name + ".svg"); }

  var P = {
    arrowLeft: "M15.8837 21.6172L10.5174 16.2509H22.4999V13.7509H10.5174L15.8837 8.38469L14.1162 6.61719L5.73242 15.0009L14.1162 23.3847L15.8837 21.6172Z",
    arrowRight: "M12.3488 21.6172L17.715 16.2509H5.7325V13.7509H17.715L12.3488 8.38469L14.1163 6.61719L22.5 15.0009L14.1163 23.3847L12.3488 21.6172Z",
    arrowUpRight: "M11.218 13.155L13.0815 13.0805L13.435 4.24166L4.59619 4.59521L4.52166 6.45865L10.1792 6.23235L3.61007 12.8015L4.87521 14.0666L11.4443 7.49749L11.218 13.155Z",
    checked: "M4.40856 9.88935L1.22656 6.70735L2.64156 5.29235L4.40856 7.06435L9.35756 2.11035L10.7726 3.52535L4.40856 9.88935Z",
    burger: "M18.8891 23.333H3.3335V20.833H18.8891V23.333ZM26.6668 17.083H3.3335V14.583H26.6668V17.083ZM18.8891 10.833H3.3335V8.33301H18.8891V10.833Z",
    close: "M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z",
    upload: "M8.25056 11.2395C8.25056 11.4384 8.32958 11.6292 8.47023 11.7698C8.61088 11.9105 8.80165 11.9895 9.00056 11.9895C9.19947 11.9895 9.39024 11.9105 9.53089 11.7698C9.67154 11.6292 9.75056 11.4384 9.75056 11.2395V5.871L12.1828 8.30325L13.2433 7.24275L9.00056 3L4.75781 7.24275L5.81831 8.30325L8.25056 5.8725V11.2403V11.2395ZM3 10.5H4.5V13.5H13.5V10.5H15V13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15H4.5C4.10218 15 3.72064 14.842 3.43934 14.5607C3.15804 14.2794 3 13.8978 3 13.5V10.5Z",
    search: "M15.7499 17L10.833 12.0571C9.75038 12.87 8.43603 13.3107 7.08472 13.3138H7.0834L7.01177 13.3145C5.41735 13.3145 3.88823 12.6778 2.76081 11.5444C1.63338 10.411 1 8.87379 1 7.27093L1.00066 7.19492V7.19892C1.00066 5.55487 1.65032 3.97815 2.80673 2.81562C3.96313 1.6531 5.53155 1 7.16696 1C8.80236 1 10.3708 1.6531 11.5272 2.81562C12.6836 3.97815 13.3333 5.55487 13.3333 7.19892C13.3161 8.56321 12.8746 9.88788 12.0705 10.9871L12.0831 10.9691L17 15.912L15.7499 17ZM7.16696 2.67474C5.97976 2.63615 4.82588 3.07291 3.95883 3.88907C3.09178 4.70523 2.58248 5.83403 2.54282 7.02747C2.50315 8.2209 2.93638 9.38135 3.74732 10.2539C4.55825 11.1264 5.68056 11.6396 6.86767 11.6807C8.05478 11.7219 9.20959 11.2876 10.0784 10.4733C10.9472 9.65905 11.4589 8.53135 11.5011 7.33801C11.5433 6.14466 11.1126 4.98328 10.3035 4.10901C9.49442 3.23475 8.37321 2.71912 7.18619 2.6754H7.16629H7.16762L7.16696 2.67474Z",
    pin: "M9 1.5C7.41904 1.49992 5.90194 2.12382 4.77843 3.23609C3.65492 4.34837 3.01581 5.85912 3 7.44C3 11.55 8.2875 16.125 8.5125 16.32C8.64835 16.4362 8.82124 16.5 9 16.5C9.17876 16.5 9.35165 16.4362 9.4875 16.32C9.75 16.125 15 11.55 15 7.44C14.9842 5.85912 14.3451 4.34837 13.2216 3.23609C12.0981 2.12382 10.581 1.49992 9 1.5ZM9 9.75C8.48082 9.75 7.97331 9.59605 7.54163 9.30761C7.10995 9.01917 6.7735 8.6092 6.57482 8.12954C6.37614 7.64989 6.32415 7.12209 6.42544 6.61289C6.52672 6.10369 6.77673 5.63596 7.14384 5.26884C7.51096 4.90173 7.97869 4.65173 8.48789 4.55044C8.99709 4.44915 9.52489 4.50114 10.0045 4.69982C10.4842 4.8985 10.8942 5.23495 11.1826 5.66663C11.471 6.09831 11.625 6.60582 11.625 7.125C11.625 7.82119 11.3484 8.48887 10.8562 8.98116C10.3639 9.47344 9.69619 9.75 9 9.75Z",
    linkedin: "M7.071 6.726H9.857V8.114C10.258 7.316 11.287 6.599 12.833 6.599C15.796 6.599 16.5 8.187 16.5 11.102V16.5H13.5V11.766C13.5 10.106 13.098 9.170 12.077 9.170C10.660 9.170 10.071 10.179 10.071 11.765V16.5H7.071V6.726ZM1.927 16.372H4.927V6.599H1.927V16.372ZM5.357 3.412C5.357 3.663 5.307 3.912 5.210 4.144C5.113 4.376 4.971 4.587 4.792 4.764C4.429 5.124 3.938 5.326 3.427 5.325C2.917 5.324 2.427 5.123 2.064 4.764C1.885 4.587 1.744 4.376 1.647 4.144C1.550 3.912 1.500 3.663 1.5 3.412C1.5 2.904 1.702 2.418 2.064 2.060C2.427 1.701 2.917 1.499 3.428 1.5C3.939 1.5 4.430 1.701 4.792 2.060C5.154 2.418 5.357 2.904 5.357 3.412Z",
    facebook: "M7.613 16.200H10.250V9.630H12.455L12.788 7.074H10.250V5.436C10.250 4.698 10.457 4.194 11.519 4.194H12.878V1.899C12.644 1.872 11.843 1.800 10.907 1.800C8.945 1.800 7.613 2.997 7.613 5.184V7.074H5.399V9.630H7.613V16.200Z",
    twitter: "M16.360 6.664C16.371 6.810 16.371 6.955 16.371 7.100C16.371 11.537 12.993 16.651 6.821 16.651C4.919 16.651 3.152 16.100 1.666 15.143C1.936 15.174 2.196 15.185 2.476 15.185C3.987 15.189 5.455 14.683 6.644 13.751C5.943 13.738 5.264 13.507 4.702 13.090C4.139 12.673 3.720 12.090 3.505 11.423C3.712 11.454 3.921 11.475 4.139 11.475C4.440 11.475 4.742 11.433 5.023 11.361C4.263 11.207 3.579 10.795 3.089 10.195C2.598 9.594 2.330 8.842 2.331 8.067V8.025C2.779 8.274 3.298 8.430 3.848 8.451C3.387 8.145 3.009 7.729 2.748 7.241C2.487 6.754 2.351 6.209 2.351 5.656C2.351 5.032 2.517 4.461 2.808 3.962C3.651 5.000 4.703 5.849 5.896 6.454C7.088 7.059 8.394 7.407 9.730 7.475C9.678 7.225 9.646 6.966 9.646 6.706C9.646 6.265 9.733 5.828 9.901 5.421C10.070 5.014 10.317 4.644 10.629 4.332C10.941 4.020 11.311 3.773 11.718 3.604C12.126 3.436 12.562 3.349 13.003 3.349C13.970 3.349 14.842 3.754 15.456 4.409C16.207 4.264 16.928 3.989 17.586 3.598C17.335 4.374 16.810 5.032 16.110 5.448C16.776 5.372 17.428 5.197 18.042 4.928C17.583 5.598 17.014 6.184 16.360 6.664Z",
    envelope: "M15.4 2C15.8243 2 16.2313 2.18437 16.5314 2.51256C16.8314 2.84075 17 3.28587 17 3.75V14.25C17 14.7141 16.8314 15.1592 16.5314 15.4874C16.2313 15.8156 15.8243 16 15.4 16H2.6C2.17565 16 1.76869 15.8156 1.46863 15.4874C1.16857 15.1592 1 14.7141 1 14.25V3.75C1 2.7875 1.72 2 2.6 2H15.4ZM11.904 9.9625L17 14.25V12.5L12.904 9.0875L17 5.5V3.75L9 10.75L1 3.75V5.5L5.096 9.0875L1 12.5V14.25L6.096 9.9625L9 12.5L11.904 9.9625Z"
  };
  function Svg(path, size, color, box) {
    return h("svg", { viewBox: "0 0 " + box + " " + box, width: size, height: size, fill: color, "aria-hidden": "true" }, h("path", { d: path, fillRule: "evenodd" }));
  }
  function Img(src, cls, alt) { return src ? h("img", { className: cls, src: src, alt: alt || "" }) : h("span", { className: cx(cls, "cd-placeholder"), "aria-hidden": "true" }); }

  /* ---------------- Actions ---------------- */
  function Button(p) {
    var variant = p.variant || "primary", size = p.size || "big";
    var el = h(p.href && !p.disabled ? "a" : "button", {
      className: cx("cd-btn", "cd-btn--" + size, variant === "secondary" && "cd-btn--secondary", p.className),
      href: p.disabled ? undefined : p.href, type: p.href ? undefined : p.type || "button", onClick: p.onClick, disabled: p.href ? undefined : p.disabled
    }, p.children);
    return h("span", { className: "cd-wrap" }, el);
  }
  function SliderButton(p) {
    var next = p.direction === "next";
    return h("span", { className: "cd-wrap" },
      h("button", { className: "cd-slider", type: "button", onClick: p.onClick, disabled: p.disabled, "aria-label": p.label || (next ? "Next" : "Previous") },
        Svg(next ? P.arrowRight : P.arrowLeft, 30, "var(--primary-pink)", 30)));
  }
  function TextLink(p) {
    return h("a", { className: cx("cd-link", p.className), href: p.href || "#" }, h("span", null, p.children), Svg(P.arrowUpRight, 18, "currentColor", 18));
  }
  function SocialButton(p) {
    var box = p.icon === "twitter" ? 20 : 18;
    return h("a", { className: "cd-social", href: p.href || "#", "aria-label": p.label }, Svg(P[p.icon], 18, "currentColor", box));
  }
  function ShareBar(p) {
    var items = p.items || [{ icon: "facebook", label: "Share on Facebook" }, { icon: "twitter", label: "Share on Twitter" }, { icon: "linkedin", label: "Share on LinkedIn" }];
    return h("div", { className: cx("cd-share", p.dark && "cd-share--dark") }, items.map(function (s) {
      return h("a", { key: s.icon, href: s.href || "#", "aria-label": s.label }, Svg(P[s.icon], 20, "currentColor", s.icon === "twitter" ? 20 : 18));
    }));
  }

  /* ---------------- Labels and lists ---------------- */
  function Tag(p) { return h("button", { className: cx("cd-tag", p.className), type: "button", "aria-pressed": p.selected ? "true" : "false", onClick: p.onClick }, p.children); }
  function CategoryLabel(p) { return h("span", { className: "cd-category" }, p.children); }
  function Pill(p) { return h("span", { className: "cd-pill" }, p.children); }
  function Eyebrow(p) { return h("p", { className: cx("cd-eyebrow", p.purple && "cd-eyebrow--purple") }, p.children); }
  function Bullets(p) {
    return h("ul", { className: "cd-bullets" }, (p.items || []).map(function (it, i) {
      return typeof it === "string" ? h("li", { key: i }, it) : h("li", { key: i }, it.text, it.items ? h("ul", { className: "cd-bullets" }, it.items.map(function (s, j) { return h("li", { key: j }, s); })) : null);
    }));
  }
  function Checklist(p) {
    return h("ul", { className: "cd-checklist" }, (p.items || []).map(function (t, i) { return h("li", { key: i }, h("img", { src: icon("check"), alt: "" }), h("span", null, t)); }));
  }
  function Author(p) {
    return h("div", { className: "cd-author" }, Img(p.imageSrc, "cd-author__img"),
      h("div", null, h("div", { className: "cd-author__name" }, p.name), p.role ? h("div", { className: "cd-author__role" }, p.role) : null));
  }
  function Meta(p) { return h("span", { className: "cd-meta" }, h("img", { src: icon(p.icon || "time"), alt: "" }), p.children); }

  /* ---------------- Form ---------------- */
  function Field(p, control) {
    return h("label", { className: cx("cd-field", p.error && "cd-field--error", p.disabled && "cd-field--disabled"), htmlFor: p.id },
      p.label ? h("span", { className: "cd-field__label" }, p.label, p.optional ? h("span", { style: { fontWeight: 400, color: "var(--complementary-text)" } }, " (optional)") : null, p.required ? h("span", { className: "cd-required" }, " *") : null) : null,
      p.hint ? h("span", { className: "cd-field__hint" }, p.hint) : null,
      control,
      p.error ? h("span", { className: "cd-field__error" }, p.error) : null);
  }
  function Input(p) {
    var field = h("span", { className: "cd-input-wrap" },
      p.search ? Svg(P.search, 18, "rgba(13,18,76,.8)", 18) : null,
      h("input", { className: "cd-input", id: p.id, name: p.name, type: p.type || (p.search ? "search" : "text"), placeholder: p.placeholder, defaultValue: p.defaultValue,
        disabled: p.disabled, required: p.required, "aria-invalid": p.error ? "true" : undefined, "aria-label": p.label ? undefined : p.placeholder }));
    return p.label || p.error ? Field(p, field) : field;
  }
  function Textarea(p) { return Field(p, h("textarea", { className: "cd-textarea", id: p.id, name: p.name, placeholder: p.placeholder, rows: p.rows || 6 })); }
  function FileUpload(p) {
    var s = useState(""), name = s[0], set = s[1];
    return Field(p, h("span", { className: "cd-upload" }, Svg(P.upload, 18, "var(--primary-pink)", 18),
      h("span", null, name || p.placeholder || "Upload files"),
      h("input", { type: "file", id: p.id, name: p.name, accept: p.accept, onChange: function (e) { set(e.target.files && e.target.files[0] ? e.target.files[0].name : ""); } })));
  }
  function Checkbox(p) {
    return h("label", { className: "cd-check" },
      h("input", { type: "checkbox", defaultChecked: p.defaultChecked, checked: p.checked, onChange: p.onChange, name: p.name }),
      h("span", { className: "cd-check__box", "aria-hidden": "true" }, Svg(P.checked, 12, "var(--primary-pink)", 12)),
      p.children ? h("span", null, p.children) : null);
  }
  function TechOption(p) {
    return h("label", { className: "cd-tech" }, h(Checkbox, { defaultChecked: p.defaultChecked, name: p.name, onChange: p.onChange }),
      p.iconSrc ? h("img", { className: "cd-tech__icon", src: p.iconSrc, alt: "" }) : null, h("span", null, p.label));
  }
  function Tabs(p) {
    var s = useState(p.defaultIndex || 0), active = s[0], set = s[1];
    return h("div", { className: cx("cd-tabs", p.className), role: "tablist" }, (p.items || []).map(function (it, i) {
      var label = it && it.label !== undefined ? it.label : it;
      return h("button", { key: i, className: "cd-tab", role: "tab", type: "button", "aria-selected": i === active ? "true" : "false",
        onClick: function () { set(i); if (p.onChange) p.onChange(i); } }, it && it.iconSrc ? h("img", { src: it.iconSrc, alt: "" }) : null, label);
    }));
  }

  /* ---------------- Cards ---------------- */
  function Stat(p) {
    return h("div", { className: "cd-stat" }, h("div", { className: "cd-stat__value" }, p.value, p.plus === false ? null : h("span", { className: "cd-stat__plus" }, "+")),
      h("div", { className: "cd-stat__label" }, p.label));
  }
  function TestimonialCard(p) {
    return h("figure", { className: "cd-quote" }, h("blockquote", { className: "cd-quote__text" }, p.quote),
      h("figcaption", null, h("div", { className: "cd-quote__name" }, p.name), h("div", { className: "cd-quote__role" }, p.role)));
  }
  function TeamQuoteCard(p) {
    return h("figure", { className: "cd-team-quote", style: { margin: 0, opacity: p.dimmed ? 0.5 : 1, borderColor: p.dimmed ? "#ffffff" : undefined } },
      h("blockquote", null, p.quote), h("img", { className: "cd-quote-mark", src: icon("quote-mark"), alt: "" }),
      h("figcaption", null, h(Author, { name: p.name, role: p.role, imageSrc: p.imageSrc })));
  }
  function BlogCard(p) {
    return h("article", { className: "cd-blog" },
      h("div", { className: "cd-blog__media", style: p.imageSrc ? { backgroundImage: "url(" + p.imageSrc + ")" } : null },
        h("div", { className: "cd-blog__author" }, Img(p.avatarSrc, "cd-blog__avatar"),
          h("div", null, h("div", { className: "cd-blog__name" }, p.author), h("div", { className: "cd-blog__role" }, p.authorRole)))),
      h("div", { className: "cd-blog__body" }, p.category ? h("div", null, h(CategoryLabel, null, p.category)) : null,
        h("h3", { className: "cd-blog__title" }, p.title), h("p", { className: "cd-blog__excerpt" }, p.excerpt)));
  }
  function JobCard(p) {
    return h("article", { className: "cd-job" },
      h("div", null, h("h3", { className: "cd-job__title" }, p.title),
        h("div", { className: "cd-tags", style: { gap: "10px" } }, (p.skills || []).map(function (s) { return h("span", { key: s, className: "cd-tag", style: { cursor: "default" } }, s); }))),
      h("div", null, h("div", { className: "cd-job__pay" }, p.pay), p.payNote ? h("div", { className: "cd-job__note" }, p.payNote) : null, h("div", { className: "cd-job__terms" }, p.terms)),
      h("div", null, h(Button, { href: p.href }, p.cta || "View job")));
  }
  function ContentCard(p) {
    return h("article", { className: cx("cd-card", p.raised && "cd-card--raised") },
      p.iconSrc ? h("img", { className: "cd-card__icon", src: p.iconSrc, alt: "" }) : null,
      h("div", { className: "cd-card__body" }, h("h3", null, p.title), h("p", null, p.text)),
      p.linkLabel ? h(TextLink, { href: p.href }, p.linkLabel) : null);
  }
  function FeatureItem(p) { return h("div", { className: "cd-feature" }, h("img", { src: p.iconSrc, alt: "" }), h("h3", null, p.title), h("p", null, p.text)); }
  function FrameworkTile(p) { return h("div", { className: "cd-tile" }, p.iconSrc ? h("img", { src: p.iconSrc, alt: "" }) : null, h("span", null, p.label)); }
  function FeaturedArticle(p) {
    return h("article", { className: "cd-featured" }, Img(p.imageSrc, "cd-featured__img"),
      h("div", { className: "cd-featured__body" }, h(Eyebrow, { purple: true }, p.category), h("h3", { className: "cd-h3" }, p.title), h("p", { className: "cd-text" }, p.excerpt),
        h("div", { className: "cd-featured__foot" }, h(Author, { name: p.author, role: p.authorRole, imageSrc: p.avatarSrc }), h(TextLink, { href: p.href }, p.linkLabel || "Read full article"))));
  }
  function ArticleCard(p) {
    return h("article", { className: "cd-article" }, Img(p.imageSrc, "cd-article__img"),
      h("div", { className: "cd-article__body" }, h(Eyebrow, { purple: true }, p.category), h("h3", { className: "cd-h4" }, p.title), h("p", { className: "cd-small" }, p.excerpt),
        h(Author, { name: p.author, role: p.authorRole, imageSrc: p.avatarSrc })));
  }
  function UpcomingWebinar(p) {
    return h("article", { className: "cd-upcoming" },
      h("div", { className: "cd-upcoming__body" }, h("div", { style: { display: "flex", gap: 30, alignItems: "center", flexWrap: "wrap" } }, h(Pill, null, p.label || "Upcoming webinar"), h("span", { className: "cd-text" }, p.date)),
        h("h3", { className: "cd-h3" }, p.title), h(Button, { size: "small", href: p.href }, p.cta || "Register now")),
      Img(p.imageSrc, "cd-upcoming__img"));
  }
  function WebinarCard(p) {
    return h("article", { className: "cd-webinar" }, h(Eyebrow, { purple: true }, p.episode), h("h3", { className: "cd-h4" }, p.title), h("p", { className: "cd-text" }, p.text),
      h("div", { className: "cd-webinar__foot" }, h("button", { className: "cd-play", type: "button", "aria-label": "Play" }, h("img", { src: icon("play"), alt: "" })), h(Meta, { icon: "time" }, p.duration)));
  }
  function MeetupCard(p) {
    var v = p.variant || "default";
    if (v === "upcoming") return h("article", { className: "cd-meetup cd-meetup--upcoming" }, h("div", null, h(Pill, null, p.label || "Coming soon")),
      h("p", { className: "cd-small" }, p.date), h("h3", { className: "cd-h4" }, p.title), h("div", { style: { marginTop: "auto" } }, h(Button, { size: "small", href: p.href }, p.cta || "Sign up")));
    return h("article", { className: cx("cd-meetup", v === "featured" && "cd-meetup--featured") }, h(Eyebrow, { purple: true }, p.series), h("h3", { className: "cd-h4" }, p.title),
      h("p", { className: "cd-small" }, p.text), p.duration ? h(Meta, { icon: "time" }, p.duration) : null, h(Author, { name: p.author, role: p.authorRole, imageSrc: p.avatarSrc }));
  }
  function ResourceCard(p) {
    return h("article", { className: "cd-resource" }, h(Eyebrow, { purple: true }, p.type || "White paper"), h("h3", { className: "cd-h4" }, p.title), h("p", { className: "cd-small" }, p.text),
      h("a", { className: "cd-link", href: p.href || "#" }, h("span", null, p.cta || "Download"), h("img", { src: icon("download"), alt: "", width: 18, height: 18 })));
  }
  function PersonCard(p) {
    return h("div", { className: "cd-person" }, h("div", { className: "cd-portrait" }, Img(p.imageSrc)), h("div", null, h("p", { className: "cd-person__name" }, p.name), h("p", { className: "cd-person__role" }, p.role)));
  }

  /* ---------------- Decoration ---------------- */
  function Orb(p) { return h("span", { className: cx("cd-orb", "cd-orb--" + (p.color || "purple")), style: p.style, "aria-hidden": "true" }); }
  function Framed(p) {
    return h("div", { className: cx("cd-framed", p.frame === "pink" && "cd-framed--pink", p.flip && "cd-framed--flip"), style: { width: p.width || 318, height: p.height || 385 } },
      Img(p.imageSrc, "cd-framed__img", p.alt));
  }
  function Collage(p) { return h("div", { className: "cd-collage" }, Img(p.imageA, "cd-collage__a", p.altA), Img(p.imageB, "cd-collage__b", p.altB)); }

  /* ---------------- Navigation ---------------- */
  function Header(p) {
    var s = useState(false), open = s[0], setOpen = s[1];
    var logo = p.logoSrc || A("logo/the-codest-logo-" + (p.dark ? "white" : "black") + ".svg");
    return h(React.Fragment, null,
      h("header", { className: cx("cd-header", p.dark && "cd-header--dark") },
        h("a", { href: p.homeHref || "/", "aria-label": "The Codest home" }, h("img", { className: "cd-header__logo", src: logo, alt: "The Codest" })),
        h("ul", { className: "cd-nav" }, (p.links || []).map(function (l) { return h("li", { key: l.label }, h("a", { href: l.href }, l.label)); })),
        h("div", { className: "cd-header__actions" },
          p.secondary ? h(Button, { size: "small", variant: "secondary", href: p.secondary.href }, p.secondary.label) : null,
          p.primary ? h(Button, { size: "small", href: p.primary.href }, p.primary.label) : null),
        h("button", { className: "cd-header__burger", type: "button", "aria-label": "Open menu", onClick: function () { setOpen(true); } },
          Svg(P.burger, 30, p.dark ? "var(--primary-white)" : "var(--primary-navy)", 30))),
      open ? h(MobileMenu, { links: p.links, primary: p.primary, secondary: p.secondary, onClose: function () { setOpen(false); } }) : null);
  }
  function MobileMenu(p) {
    return h("div", { className: "cd-mobile-menu", role: "dialog", "aria-modal": "true" },
      h("div", { className: "cd-mobile-menu__head" }, h("img", { src: A("logo/the-codest-logo-black.svg"), alt: "The Codest" }),
        h("button", { type: "button", "aria-label": "Close menu", onClick: p.onClose, style: { background: "none", border: 0, padding: 0, cursor: "pointer" } }, Svg(P.close, 30, "var(--primary-navy)", 24))),
      h("nav", null, (p.links || []).map(function (l) {
        return l.children ? h("details", { key: l.label }, h("summary", null, l.label, h("img", { src: icon("chevron-down"), alt: "", width: 16, height: 16 })),
          l.children.map(function (c) { return h("a", { key: c.label, href: c.href, "aria-current": c.current ? "page" : undefined }, c.label); }))
          : h("a", { key: l.label, href: l.href }, l.label);
      })),
      h("div", { className: "cd-mobile-menu__foot" },
        p.secondary ? h(Button, { size: "small", variant: "secondary", href: p.secondary.href }, p.secondary.label) : null,
        p.primary ? h(Button, { size: "small", href: p.primary.href }, p.primary.label) : null));
  }
  function Footer(p) {
    return h("footer", { className: "cd-footer" },
      p.newsletter === false ? null : h("div", { className: "cd-footer__news" },
        h("p", { className: "cd-h4", style: { color: "var(--primary-white)", margin: 0, maxWidth: 486 } }, p.newsletterTitle || "Subscribe to our knowledge base."),
        h("div", { style: { display: "grid", gap: 15 } },
          h("div", { className: "cd-footer__form" }, h("span", { className: "cd-input-wrap", style: { background: "transparent", borderColor: "var(--on-navy-border)" } },
            h("input", { className: "cd-input", type: "email", placeholder: "Your email", "aria-label": "Your email", style: { color: "var(--primary-white)" } })), h(Button, { size: "small", type: "submit" }, "Subscribe")),
          h("span", { className: "cd-check", style: { color: "var(--on-navy-muted)" } }, h("input", { type: "checkbox" }), h("span", { className: "cd-check__box", style: { background: "transparent", borderColor: "var(--on-navy-border)" } }, Svg(P.checked, 12, "var(--primary-pink)", 12)),
            h("span", null, p.consent || "I agree to receive marketing communications.")))),
      h("div", { className: "cd-footer__grid" },
        h("div", null, h("h2", { className: "cd-footer__head" }, p.aboutTitle || "About us"), h("p", { className: "cd-footer__text" }, p.about),
          (p.offices || []).map(function (o) { return h("div", { key: o.place }, h("div", { className: "cd-footer__place" }, Svg(P.pin, 18, "var(--complementary-purple)", 18), o.place), h("div", { className: "cd-footer__text" }, o.address)); })),
        (p.columns || []).map(function (c) {
          return h("div", { key: c.title }, h("h2", { className: "cd-footer__head" }, c.title),
            h("ul", { className: "cd-footer__links" }, c.links.map(function (l) { return h("li", { key: l.label }, h("a", { href: l.href }, l.label)); }))); })),
      h("div", { className: "cd-footer__bottom" }, h("span", { style: { display: "flex", gap: 20 } }, ["facebook", "linkedin"].map(function (s) { return h("a", { key: s, href: "#", "aria-label": s, style: { color: "var(--primary-white)" } }, Svg(P[s], 18, "currentColor", 18)); })),
        h("span", null, p.legal), h("span", null, p.copyright)));
  }
  function Pagination(p) {
    var pages = p.pages || [1, 2, 3, 4, "…", 34], cur = p.current || 1;
    return h("nav", { className: "cd-pagination", "aria-label": "Pagination" }, h(SliderButton, { direction: "prev", disabled: cur === 1 }),
      h("ol", null, pages.map(function (n, i) { return h("li", { key: i }, n === "…" ? h("span", { className: "cd-text" }, "…") : h("a", { href: "#", "aria-current": n === cur ? "page" : undefined }, n)); })),
      h(SliderButton, { direction: "next" }));
  }
  function ListingHeader(p) {
    return h("div", { className: "cd-listing-head" }, h("h1", { className: "cd-h1" }, p.title), p.search === false ? null : h(Input, { placeholder: p.searchPlaceholder || "Search", search: true }));
  }

  /* ---------------- Sections ---------------- */
  function Section(p) {
    return h("section", { className: cx("cd-section", p.tone && "cd-section--" + p.tone, p.className), id: p.id, style: p.style },
      p.orb ? h(Orb, { color: p.orb.color, style: p.orb.style }) : null,
      h("div", { className: "cd-container" }, p.children));
  }
  function SectionHead(p) {
    return h("div", { className: cx("cd-stack", p.center && "cd-stack--center"), style: { marginBottom: p.spacing === undefined ? 60 : p.spacing, maxWidth: p.center ? 720 : 588, marginLeft: p.center ? "auto" : undefined, marginRight: p.center ? "auto" : undefined } },
      p.eyebrow ? h(Eyebrow, null, p.eyebrow) : null, h("h2", { className: "cd-h2" }, p.title), p.text ? h("p", { className: "cd-text" }, p.text) : null, p.action || null);
  }
  function Rating(p) {
    return h("div", { className: "cd-rating" }, p.logoSrc ? h("img", { src: p.logoSrc, alt: p.source || "", height: 30, style: { gridRow: "span 2" } }) : null,
      h("div", { className: "cd-rating__stars", "aria-label": (p.score || "") + " out of 5" }, [1, 2, 3, 4, 5].map(function (i) { return h("img", { key: i, src: icon("star"), alt: "" }); })),
      h("div", null, h("b", null, p.score), " ", p.count));
  }
  function LogoStrip(p) {
    return h("div", null, p.title ? h("p", { className: "cd-logos__title" }, p.title) : null,
      h("div", { className: "cd-logos" }, (p.logos || []).map(function (l, i) { return h("img", { key: i, src: l.src, alt: l.alt }); })));
  }
  function HeroHome(p) {
    return h("section", { className: "cd-hero-home" }, h(Orb, { color: "purple" }),
      h("div", { className: "cd-container" },
        h("div", { className: "cd-hero-home__grid" },
          h("div", { className: "cd-hero-home__copy" }, h("h1", { className: "cd-h1" }, p.title), h("p", { className: "cd-lead" }, p.text),
            h("div", { className: "cd-hero-home__actions" }, p.cta ? h(Button, { href: p.cta.href }, p.cta.label) : null, p.rating ? h(Rating, p.rating) : null)),
          h("div", { className: "cd-hero-home__photo" }, h(Framed, { imageSrc: p.imageSrc, width: "100%", height: "100%", alt: p.imageAlt }))),
        p.logos ? h("div", { className: "cd-logos-wrap", style: { marginTop: 60, paddingBottom: 60 } }, h(LogoStrip, { logos: p.logos })) : h("div", { style: { height: 80 } })));
  }
  function HeroPage(p) {
    return h("section", { className: cx("cd-hero-page", !p.imageSrc && "cd-hero-page--plain", p.short && "cd-hero-page--short"), style: p.imageSrc ? { backgroundImage: "url(" + p.imageSrc + ")" } : null },
      p.orb ? h(Orb, { color: "purple" }) : null,
      h("div", { className: "cd-container" }, h("h1", { className: "cd-h1" }, p.title), p.text ? h("p", { className: "cd-lead" }, p.text) : null, p.cta ? h(Button, { href: p.cta.href }, p.cta.label) : null));
  }
  function HeroCaseStudy(p) {
    return h("section", { className: "cd-hero-case" }, h("div", { className: "cd-container" },
      h("div", { className: "cd-hero-case__grid" },
        h("div", { className: "cd-hero-case__aside", style: { display: "grid", gap: 50, alignContent: "start" } },
          h("a", { className: "cd-back", href: p.backHref || "#" }, h("img", { src: icon("arrow-left"), alt: "" }), "Go back"), h(ShareBar, { dark: true })),
        h("div", { className: "cd-hero-case__body" }, h(Eyebrow, { purple: true }, p.category), h("h1", { className: "cd-h2" }, p.title), h("p", { className: "cd-text" }, p.text),
          h("dl", { className: "cd-facts", style: { margin: 0 } }, (p.facts || []).map(function (f, i) { return h("div", { key: i }, h("dt", null, f.label), h("dd", null, f.value)); }))))));
  }
  function ServiceTabs(p) {
    var s = useState(0), active = s[0], set = s[1];
    var group = (p.groups || [])[active] || { items: [] };
    return h("div", { className: "cd-service-tabs" }, h("h2", { className: "cd-h2", style: { maxWidth: 600 } }, p.title), h("p", { className: "cd-text", style: { maxWidth: 700 } }, p.text),
      h(Tabs, { items: (p.groups || []).map(function (g) { return { label: g.label, iconSrc: g.iconSrc }; }), onChange: set }),
      h("ul", { className: "cd-techs" }, group.items.map(function (t) { return h("li", { key: t.label }, t.iconSrc ? h("img", { src: t.iconSrc, alt: "" }) : null, t.label); })),
      p.cta ? h(Button, { href: p.cta.href }, p.cta.label) : null);
  }
  function StatsBand(p) {
    return h("section", { className: "cd-stats-band" }, h("div", { className: "cd-container" }, p.caption ? h("p", { className: "cd-stats-band__caption" }, p.caption) : null,
      h("div", { className: "cd-stats" }, (p.stats || []).map(function (s, i) { return h(Stat, { key: i, value: s.value, label: s.label, plus: s.plus }); }))));
  }
  function CasePanel(p) {
    return h("article", { className: cx("cd-case", p.tone === "peach" && "cd-case--peach", p.reverse && "cd-case--reverse") }, h("span", { className: "cd-texture", "aria-hidden": "true" }),
      h("div", { className: "cd-case__copy" }, h("div", null, h(Eyebrow, null, p.category), h("h3", { className: "cd-h2" }, p.title)), h(TextLink, { href: p.href }, p.linkLabel || "Read case study")),
      h("div", { className: "cd-case__media" }, p.imageSrc ? h("img", { src: p.imageSrc, alt: p.imageAlt || "" }) : null));
  }
  function ValuesGrid(p) {
    return h("div", { className: "cd-values" }, h("div", { className: "cd-stack" }, h("h2", { className: "cd-h2" }, p.title), p.cta ? h(Button, { href: p.cta.href }, p.cta.label) : null),
      h("div", { className: "cd-values__grid" }, (p.items || []).slice(0, 4).map(function (v, i) { return h("div", { key: i, className: "cd-values__item" }, h("img", { src: v.iconSrc, alt: "" }), v.label); })));
  }
  function Carousel(p) {
    var ref = useRef(null);
    function go(dir) { if (ref.current) ref.current.scrollBy({ left: dir * (ref.current.clientWidth * 0.8), behavior: "smooth" }); }
    return h("div", { className: "cd-carousel" }, p.title ? h("h2", { className: p.titleClass || "cd-h3", style: { margin: 0 } }, p.title) : null,
      h("div", { className: "cd-carousel__track", ref: ref }, p.children),
      h("div", { className: "cd-carousel__controls" }, h(SliderButton, { direction: "prev", onClick: function () { go(-1); } }), h(SliderButton, { direction: "next", onClick: function () { go(1); } }),
        p.link ? h(TextLink, { href: p.link.href }, p.link.label) : null));
  }
  function ImageText(p) {
    return h("div", { className: cx("cd-imagetext", p.reverse && "cd-imagetext--reverse") },
      h("div", { className: "cd-stack" }, h("div", { className: "cd-copy" }, h("h2", { className: p.small ? "cd-h3" : "cd-h2" }, p.title), h("p", { className: "cd-text" }, p.text)),
        p.cta ? (p.cta.link ? h(TextLink, { href: p.cta.href }, p.cta.label) : h(Button, { href: p.cta.href, variant: p.cta.variant }, p.cta.label)) : null),
      h("div", { className: "cd-imagetext__media" }, p.collage ? h(Collage, p.collage) : h(Framed, { imageSrc: p.imageSrc, frame: p.frame || "pink", flip: !p.reverse, width: 380, height: 460 })));
  }
  function CtaBand(p) {
    return h("section", { className: "cd-cta-band" }, h(Orb, { color: "purple" }), h(Orb, { color: "orange" }),
      h("span", { className: "cd-texture cd-texture--left", "aria-hidden": "true" }), h("span", { className: "cd-texture cd-texture--right", "aria-hidden": "true" }),
      h("div", { className: "cd-container" }, h("div", { className: "cd-stack cd-stack--center" }, h("h2", { className: "cd-h1" }, p.title), p.text ? h("p", { className: "cd-text" }, p.text) : null,
        p.cta ? h(Button, { href: p.cta.href }, p.cta.label) : null)));
  }
  function Banner(p) {
    return h("aside", { className: cx("cd-banner", p.align === "left" && "cd-banner--left") }, h("span", { className: "cd-texture", "aria-hidden": "true" }),
      h("h2", { className: "cd-h3" }, p.title), p.text ? h("p", { className: "cd-text" }, p.text) : null, p.cta ? h(Button, { href: p.cta.href }, p.cta.label) : null);
  }
  function BannerLight(p) {
    return h("section", { className: "cd-banner-light" }, h(Orb, { color: "orange" }),
      h("div", { className: "cd-container" }, h("div", { className: "cd-stack" }, h("h2", { className: "cd-h1", style: { maxWidth: 670 } }, p.title), p.cta ? h(Button, { href: p.cta.href }, p.cta.label) : null)));
  }
  function ClientStories(p) {
    return h("section", { className: "cd-stories" }, h("span", { className: "cd-texture", "aria-hidden": "true" }),
      h("div", { className: "cd-container" }, h("div", { className: "cd-stack" }, h("h2", { className: "cd-h2" }, p.title), h("p", { className: "cd-text" }, p.text), p.cta ? h(Button, { href: p.cta.href }, p.cta.label) : null)));
  }
  function ProcessSection(p) {
    return h("div", { className: "cd-process" }, h("div", { className: "cd-stack" }, h("h2", { className: "cd-h2" }, p.title), h("p", { className: "cd-text" }, p.text), p.cta ? h(Button, { href: p.cta.href, variant: "secondary", size: "small" }, p.cta.label) : null),
      h(ProcessSteps, { steps: p.steps }));
  }
  function ProcessSteps(p) {
    return h("ol", { className: "cd-steps", style: { listStyle: "none", margin: 0, padding: 0 } }, (p.steps || []).map(function (s, i) {
      return h("li", { key: i, className: "cd-step" }, h("div", { className: "cd-step__num" }, String(i + 1).padStart(2, "0")),
        h("div", null, h("h3", { className: "cd-step__title" }, s.title, s.meta ? h("span", { className: "cd-step__meta" }, " " + s.meta) : null), h("p", { className: "cd-step__text" }, s.text)));
    }));
  }
  function Opinion(p) {
    return h("figure", { className: "cd-opinion", style: { margin: 0 } }, h("div", null, h("blockquote", null, p.quote), h(Author, { name: p.name, role: p.role })),
      h("div", { className: "cd-portrait" }, Img(p.imageSrc)));
  }
  function PullQuote(p) {
    return h("figure", { className: "cd-pullquote" }, h("blockquote", null, p.quote), p.name ? h("img", { className: "cd-quote-mark", src: icon("quote-mark"), alt: "" }) : null,
      p.name ? h("figcaption", null, h("div", { className: "cd-author__name" }, p.name), h("div", { className: "cd-author__role" }, p.role)) : null);
  }
  function Timeline(p) {
    return h("ol", { className: "cd-timeline" }, (p.steps || []).map(function (s, i) {
      return h("li", { key: i }, h("span", { className: "cd-timeline__num" }, String(i + 1).padStart(2, "0")), h("span", { className: "cd-timeline__dot" }), h("span", { className: "cd-timeline__label" }, s));
    }));
  }
  function Perks(p) {
    return h("div", { className: "cd-perks" }, (p.items || []).map(function (it, i) { return h("div", { key: i, className: "cd-perk" }, h("img", { src: icon("check"), alt: "" }), h("h3", null, it.title), h("p", null, it.text)); }));
  }
  function ArticleHeader(p) {
    return h("header", { className: "cd-article-head" },
      h("div", { className: "cd-article-head__meta" }, h(Meta, { icon: "calendar" }, p.date), p.category ? h(Eyebrow, { purple: true }, p.category) : null),
      h("h1", { className: "cd-h2" }, p.title), h(Author, { name: p.author, role: p.authorRole, imageSrc: p.avatarSrc }));
  }
  function Panel(p) { return h("aside", { className: "cd-panel" }, p.children); }
  function ContactPerson(p) {
    return h("div", { className: "cd-panel__contact" }, h("div", { className: "cd-panel__person" }, Img(p.imageSrc),
      h("div", null, h("div", { className: "cd-h5" }, p.name), h("div", { className: "cd-small" }, p.role))),
      h("div", { style: { display: "flex", gap: 10 } }, p.email ? h("a", { className: "cd-social", href: "mailto:" + p.email, "aria-label": "Email" }, Svg(P.envelope, 18, "currentColor", 18)) : null,
        p.linkedin ? h(SocialButton, { href: p.linkedin, icon: "linkedin", label: "LinkedIn" }) : null));
  }
  function DownloadModal(p) {
    return h("div", { className: "cd-modal-backdrop", onClick: function (e) { if (e.target === e.currentTarget && p.onClose) p.onClose(); } },
      h("div", { className: "cd-modal", role: "dialog", "aria-modal": "true", "aria-label": p.title },
        h("button", { className: "cd-modal__close", type: "button", "aria-label": "Close", onClick: p.onClose }, Svg(P.close, 24, "var(--primary-navy)", 24)),
        h("h2", { className: "cd-h3" }, p.title || "Download the free resource"), h(Input, { id: "dl-email", label: "E-mail", type: "email", required: true }),
        h(Checkbox, null, p.consent || "I agree with the Website Terms of Use and Privacy Policy."), h("div", null, h(Button, { type: "submit" }, p.cta || "Download"))));
  }
  function Graphic(p) { return h("img", { className: "cd-graphic", src: A("graphics/" + p.name), alt: p.alt || "" }); }

  window.Codest = {
    Button: Button, SliderButton: SliderButton, TextLink: TextLink, SocialButton: SocialButton, ShareBar: ShareBar,
    Tag: Tag, CategoryLabel: CategoryLabel, Pill: Pill, Eyebrow: Eyebrow, Bullets: Bullets, Checklist: Checklist, Author: Author, Meta: Meta,
    Input: Input, Textarea: Textarea, FileUpload: FileUpload, Checkbox: Checkbox, TechOption: TechOption, Tabs: Tabs,
    Stat: Stat, TestimonialCard: TestimonialCard, TeamQuoteCard: TeamQuoteCard, BlogCard: BlogCard, JobCard: JobCard, ContentCard: ContentCard,
    FeatureItem: FeatureItem, FrameworkTile: FrameworkTile, FeaturedArticle: FeaturedArticle, ArticleCard: ArticleCard, UpcomingWebinar: UpcomingWebinar,
    WebinarCard: WebinarCard, MeetupCard: MeetupCard, ResourceCard: ResourceCard, PersonCard: PersonCard,
    Orb: Orb, Framed: Framed, Collage: Collage, Graphic: Graphic,
    Header: Header, MobileMenu: MobileMenu, Footer: Footer, Pagination: Pagination, ListingHeader: ListingHeader,
    Section: Section, SectionHead: SectionHead, Rating: Rating, LogoStrip: LogoStrip, HeroHome: HeroHome, HeroPage: HeroPage, HeroCaseStudy: HeroCaseStudy,
    ServiceTabs: ServiceTabs, StatsBand: StatsBand, CasePanel: CasePanel, ValuesGrid: ValuesGrid, Carousel: Carousel, ImageText: ImageText,
    CtaBand: CtaBand, Banner: Banner, BannerLight: BannerLight, ClientStories: ClientStories, ProcessSection: ProcessSection, ProcessSteps: ProcessSteps,
    Opinion: Opinion, PullQuote: PullQuote, Timeline: Timeline, Perks: Perks, ArticleHeader: ArticleHeader, Panel: Panel, ContactPerson: ContactPerson, DownloadModal: DownloadModal
  };
})();
