"""Generates the creative templates in content/creatives/templates/ from one definition per format.

Run: python3 content/creatives/build_templates.py
Edit the definitions below, not the generated HTML files.
Each template is a fixed-size artboard (.cr). Fields marked data-field are filled by fill.js.
"""
import pathlib

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / "templates"
OUT.mkdir(exist_ok=True)

LOGO = ('<img class="cr-logo cr-logo--dark" src="../../../brand/design-system/assets/logo/the-codest-logo-black.svg" alt="The Codest" style="width:{w}px">'
        '<img class="cr-logo cr-logo--light" src="../../../brand/design-system/assets/logo/the-codest-logo-white.svg" alt="The Codest" style="width:{w}px">')
ICON = "../../../brand/design-system/assets/icons/"
BUTTON = '<span class="cr-btn-wrap" style="{style}"><span class="cr-btn" data-field="cta">{text}</span></span>'
PHOTO = ('<div class="cr-photo is-empty {cls}" style="{style}"><img data-field="photo" data-hide="true" alt="">'
         '<div class="cr-photo__empty"></div></div>')


def logo(w):
    return LOGO.format(w=w)


def button(text="[Call to action]", style=""):
    return BUTTON.format(text=text, style=style)


def photo(style, cls=""):
    return PHOTO.format(style=style, cls=cls)


TEMPLATES = {
    # ------------------------------------------------------------------ social
    "social-square": dict(
        title="Social post, square", size=(1080, 1080), k=2, m=72, tone="light",
        use="LinkedIn, Instagram and Meta feed posts. Statements, announcements, hiring, content promotion.",
        deco='''
  <span class="cr-orb cr-orb--purple" style="width:560px;height:560px;right:-220px;top:-240px"></span>
  <span class="cr-wave cr-wave--rings" style="width:760px;height:620px;right:-260px;bottom:-150px"></span>''',
        inner=f'''
    {logo(216)}
    <div style="flex:1"></div>
    <p class="cr-eyebrow" data-field="eyebrow" style="font-size:24px;margin-bottom:24px">[Eyebrow]</p>
    <h1 class="cr-headline" data-field="headline" style="font-size:76px;max-width:880px">[Headline, eight words or fewer]</h1>
    <p class="cr-text" data-field="text" style="font-size:32px;max-width:820px;margin-top:28px">[One supporting sentence]</p>
    <div style="margin-top:56px;display:flex">{button()}</div>'''),

    "social-portrait": dict(
        title="Social post, portrait 4:5", size=(1080, 1350), k=2, m=72, tone="light",
        use="LinkedIn and Instagram feed posts where a photo or more text is needed. Takes the most feed space.",
        deco='''
  <span class="cr-orb cr-orb--purple" style="width:520px;height:520px;left:-240px;top:-220px"></span>
  <span class="cr-wave cr-wave--lines" style="width:640px;height:1100px;right:-140px;top:-80px"></span>''',
        inner=f'''
    {logo(216)}
    {photo("width:600px;height:460px;align-self:flex-end;margin:40px 40px 0 0")}
    <div style="flex:1"></div>
    <p class="cr-eyebrow" data-field="eyebrow" style="font-size:24px;margin-bottom:24px">[Eyebrow]</p>
    <h1 class="cr-headline" data-field="headline" style="font-size:72px;max-width:900px">[Headline, eight words or fewer]</h1>
    <p class="cr-text" data-field="text" style="font-size:32px;max-width:860px;margin-top:28px">[One or two supporting sentences]</p>
    <div style="margin-top:56px;display:flex">{button()}</div>'''),

    "story": dict(
        title="Story, 9:16", size=(1080, 1920), k=2.2, m=80, tone="navy",
        use="Instagram, Facebook and LinkedIn stories, Reels covers. Keep everything inside the safe area: the top 250px and bottom 340px are covered by the app.",
        inset="270px 80px 360px 80px",
        extra='<div class="cr__ui-top" style="top:0;height:250px"></div><div class="cr__ui-bottom" style="bottom:0;height:340px"></div>',
        deco='''
  <span class="cr-wave cr-wave--banner" style="inset:0;opacity:.8"></span>
  <span class="cr-orb cr-orb--purple" style="width:620px;height:620px;right:-260px;top:200px"></span>''',
        inner=f'''
    {logo(240)}
    {photo("width:640px;height:500px;align-self:center;margin-top:70px")}
    <div style="flex:1"></div>
    <p class="cr-eyebrow" data-field="eyebrow" style="font-size:28px;margin-bottom:28px">[Eyebrow]</p>
    <h1 class="cr-headline" data-field="headline" style="font-size:84px">[Headline, six words or fewer]</h1>
    <p class="cr-text" data-field="text" style="font-size:36px;margin-top:32px">[One supporting sentence]</p>
    <div style="margin-top:64px;display:flex">{button()}</div>'''),

    # ------------------------------------------------------------------ link and cover images
    "link-image": dict(
        title="Link image / Open Graph", size=(1200, 627), k=1.6, m=56, tone="white",
        use="Shared links on LinkedIn, X, Slack and messengers; Open Graph image for web pages; LinkedIn sponsored single-image ads.",
        deco='''
  <span class="cr-orb cr-orb--purple" style="width:420px;height:420px;right:-160px;top:-180px"></span>
  <span class="cr-wave cr-wave--rings" style="width:620px;height:500px;right:-170px;bottom:-140px"></span>''',
        inner=f'''
    {logo(176)}
    <div style="flex:1"></div>
    <p class="cr-eyebrow" data-field="eyebrow" style="font-size:20px;margin-bottom:18px">[Eyebrow]</p>
    <h1 class="cr-headline" data-field="headline" style="font-size:58px;max-width:700px">[Headline, eight words or fewer]</h1>
    {photo("position:absolute;right:30px;top:80px;width:330px;height:380px", "cr-photo--purple")}'''),

    "article-cover": dict(
        title="Article and case study cover", size=(1200, 630), k=1.6, m=64, tone="pink",
        use="Blog article and case study header images, and their social share image.",
        deco='''
  <span class="cr-wave cr-wave--lines" style="width:560px;height:900px;right:-120px;top:-160px"></span>
  <span class="cr-orb cr-orb--orange" style="width:380px;height:380px;right:-140px;bottom:-200px"></span>''',
        inner=f'''
    <div style="display:flex;justify-content:space-between;align-items:flex-start"><span class="cr-pill" data-field="category">[Category]</span>{logo(150)}</div>
    <div style="flex:1"></div>
    <h1 class="cr-headline" data-field="headline" style="font-size:56px;max-width:900px">[Article title on up to three lines]</h1>
    <div class="cr-person" style="margin-top:36px">
      <img class="cr-person__img" data-field="author_photo" data-hide="true" alt="">
      <div><div class="cr-person__name" data-field="author">[Author name]</div><div class="cr-person__role" data-field="author_role">[Role]</div></div>
    </div>'''),

    # ------------------------------------------------------------------ events and quotes
    "event-promo": dict(
        title="Webinar and meetup promo", size=(1080, 1080), k=2, m=72, tone="navy",
        use="Webinar, meetup and event announcements on social. Pair with link-image for the registration link.",
        deco='''
  <span class="cr-wave cr-wave--banner" style="inset:0"></span>
  <span class="cr-orb cr-orb--purple" style="width:520px;height:520px;right:-220px;top:-220px"></span>''',
        inner=f'''
    <div style="display:flex;justify-content:space-between;align-items:center">{logo(200)}<span class="cr-pill" data-field="label">[Webinar]</span></div>
    <div style="flex:1"></div>
    <h1 class="cr-headline" data-field="headline" style="font-size:66px">[Event title on up to three lines]</h1>
    <div class="cr-meta" style="margin-top:36px">
      <span><img src="{ICON}calendar.svg" alt=""><b data-field="date">[Date]</b></span>
      <span><img src="{ICON}time.svg" alt=""><b data-field="time">[Time, timezone]</b></span>
    </div>
    <div class="cr-people" data-list="people" style="margin-top:48px">
      <div class="cr-person" data-item><img class="cr-person__img" alt=""><div><div class="cr-person__name" data-sub="name">[Speaker]</div><div class="cr-person__role" data-sub="role">[Role]</div></div></div>
    </div>
    <div style="margin-top:56px;display:flex">{button("[Register]")}</div>'''),

    "quote-card": dict(
        title="Quote card", size=(1080, 1080), k=2, m=80, tone="navy",
        use="Client or employee quotes on social. Only cleared quotes with approved attribution. Pink tone adds the gradient bar used on pull quotes.",
        deco=f'''
  <span class="cr-bar" data-tone-only="pink"></span>
  <img class="cr-quote-mark" src="{ICON}quote-mark.svg" alt="" style="left:80px;top:120px;width:220px">
  <span class="cr-wave cr-wave--rings" style="width:700px;height:560px;right:-280px;bottom:-200px"></span>''',
        inner=f'''
    <div style="flex:1"></div>
    <p class="cr-text" data-field="quote" style="font-size:46px;line-height:1.4;font-style:italic;max-width:880px;color:inherit">[Quote, under 40 words]</p>
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:56px">
      <div class="cr-person">
        <img class="cr-person__img" data-field="photo" data-hide="true" alt="">
        <div><div class="cr-person__name" data-field="name">[Name]</div><div class="cr-person__role" data-field="role">[Role, Company]</div></div>
      </div>
      {logo(180)}
    </div>'''),

    # ------------------------------------------------------------------ profile and email
    "linkedin-banner": dict(
        title="LinkedIn page banner", size=(1584, 396), k=1.4, m=48, tone="navy",
        use="LinkedIn company page and employee profile background. The page logo or profile photo covers the bottom-left, so content sits on the right. No wordmark: the page already shows it.",
        inset="48px 72px 48px 600px",
        deco='''
  <span class="cr-wave cr-wave--banner" style="inset:0"></span>
  <span class="cr-orb cr-orb--purple" style="width:420px;height:420px;left:200px;top:-260px"></span>
  <span class="cr-orb cr-orb--orange" style="width:360px;height:360px;right:-120px;bottom:-240px"></span>''',
        inner='''
    <div style="flex:1"></div>
    <h1 class="cr-headline" data-field="headline" style="font-size:44px;text-align:right">[Company line, one sentence]</h1>
    <p class="cr-text" data-field="text" style="font-size:22px;text-align:right;margin-top:14px">[Optional second line]</p>
    <div style="flex:1"></div>'''),

    "email-header": dict(
        title="Email header", size=(1200, 400), k=1.4, m=56, tone="light",
        use="Newsletter and campaign email header. Exported at 1200x400, displayed at 600x200 in the email.",
        deco='''
  <span class="cr-orb cr-orb--purple" style="width:420px;height:420px;right:-120px;top:-200px"></span>
  <span class="cr-wave cr-wave--rings" style="width:620px;height:500px;right:-150px;bottom:-200px"></span>''',
        inner=f'''
    {logo(180)}
    <div style="flex:1"></div>
    <h1 class="cr-headline" data-field="headline" style="font-size:52px;max-width:820px">[Email headline]</h1>'''),

    # ------------------------------------------------------------------ display ads
    "ad-300x250": dict(
        title="Display ad, medium rectangle", size=(300, 250), k=0.8, m=18, tone="light",
        use="Google Display and programmatic medium rectangle.",
        deco='''
  <span class="cr-orb cr-orb--purple" style="width:160px;height:160px;right:-70px;top:-80px"></span>
  <span class="cr-wave cr-wave--rings" style="width:220px;height:180px;right:-90px;bottom:-60px"></span>''',
        inner=f'''
    {logo(88)}
    <div style="flex:1"></div>
    <h1 class="cr-headline" data-field="headline" style="font-size:22px;line-height:1.25">[Headline, six words max]</h1>
    <div style="margin-top:14px;display:flex">{button("[CTA]")}</div>'''),

    "ad-728x90": dict(
        title="Display ad, leaderboard", size=(728, 90), k=0.7, m=14, tone="light",
        use="Google Display and programmatic leaderboard.",
        deco='''
  <span class="cr-wave cr-wave--rings" style="width:260px;height:200px;right:80px;top:-60px"></span>''',
        inner=f'''
    <div style="display:flex;align-items:center;gap:22px;height:100%">
      {logo(96)}
      <h1 class="cr-headline" data-field="headline" style="font-size:21px;line-height:1.2;flex:1">[Headline, six words max]</h1>
      {button("[CTA]", "align-self:center")}
    </div>'''),

    "ad-300x600": dict(
        title="Display ad, half page", size=(300, 600), k=0.9, m=24, tone="navy",
        use="Google Display and programmatic half page.",
        deco='''
  <span class="cr-wave cr-wave--banner" style="inset:0"></span>
  <span class="cr-orb cr-orb--purple" style="width:240px;height:240px;right:-110px;top:-90px"></span>''',
        inner=f'''
    {logo(110)}
    <div style="flex:1"></div>
    <p class="cr-eyebrow" data-field="eyebrow" style="font-size:12px;margin-bottom:12px">[Eyebrow]</p>
    <h1 class="cr-headline" data-field="headline" style="font-size:32px;line-height:1.2">[Headline, eight words max]</h1>
    <p class="cr-text" data-field="text" style="font-size:15px;margin-top:14px">[One short sentence]</p>
    <div style="margin-top:24px;display:flex">{button("[CTA]")}</div>'''),
}

PAGE = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{title} · {w}x{h} · The Codest creative template</title>
<!--
  {title} ({w} x {h}px). {use}
  Generated by content/creatives/build_templates.py. Do not edit by hand.
  Fill it with content/creatives/render.js, or open with URL params: ?headline=...&tone=navy (add &guides=1 to see the safe area).
  Fields: {fields}
  Tones: light, white, pink, peach, navy. Default: {tone}.
-->
<link rel="stylesheet" href="../../../brand/design-system/tokens/tokens.css">
<link rel="stylesheet" href="../creatives.css">
<script src="../fill.js"></script>
<style>.cr[data-tone]:not([data-tone="pink"]) [data-tone-only="pink"] {{ display: none; }}</style>
</head>
<body>
<div class="cr" data-template="{name}" data-tone="{tone}" style="width:{w}px;height:{h}px;--k:{k};--m:{m}px">{deco}
  {extra}<div class="cr__inner"{inset}>{inner}
  </div>
</div>
</body>
</html>
'''

import re
MAX_LINES = {  # field limits per template; render.js warns when copy runs over
    "social-square": {"headline": 4, "text": 2}, "social-portrait": {"headline": 4, "text": 3}, "story": {"headline": 4, "text": 2},
    "link-image": {"headline": 3}, "article-cover": {"headline": 3}, "event-promo": {"headline": 3}, "quote-card": {"quote": 7},
    "linkedin-banner": {"headline": 1, "text": 1}, "email-header": {"headline": 2},
    "ad-300x250": {"headline": 3}, "ad-728x90": {"headline": 2}, "ad-300x600": {"headline": 5, "text": 3},
}
index = []
for name, t in TEMPLATES.items():
    w, h = t["size"]
    fields = sorted(set(re.findall(r'data-field="([\w_]+)"', t["inner"] + t["deco"])))
    if 'data-list="people"' in t["inner"]:
        fields.append("people[]")
    for fld, n in MAX_LINES.get(name, {}).items():
        t["inner"] = t["inner"].replace(f'data-field="{fld}"', f'data-field="{fld}" data-max-lines="{n}"')
    html = PAGE.format(title=t["title"], w=w, h=h, use=t["use"], name=name, tone=t["tone"], k=t["k"], m=t["m"],
                       deco=t["deco"], extra=t.get("extra", ""), inner=t["inner"],
                       inset=f' style="inset:{t["inset"]}"' if t.get("inset") else "", fields=", ".join(fields) + ", tone")
    (OUT / f"{name}.html").write_text(html)
    index.append({"name": name, "title": t["title"], "width": w, "height": h, "tone": t["tone"], "fields": fields, "maxLines": MAX_LINES.get(name, {}), "use": t["use"]})

import json
(HERE / "templates.json").write_text(json.dumps(index, indent=2) + "\n")
print(f"wrote {len(index)} templates")
