"""Regenerate tokens.css from tokens.json.

Run from anywhere:  python3 design-system/tokens/build_tokens_css.py
tokens.json is the source of truth. Never edit tokens.css by hand.
"""
import json
import pathlib

HERE = pathlib.Path(__file__).resolve().parent
tokens = json.loads((HERE / "tokens.json").read_text())

FIRA = [
    (400, "normal", "latin-400-normal", False),
    (400, "italic", "latin-400-italic", False),
    (500, "normal", "latin-500-normal", False),
    (700, "normal", "latin-700-normal", False),
    (400, "normal", "latin-ext-400-normal", True),
    (500, "normal", "latin-ext-500-normal", True),
    (700, "normal", "latin-ext-700-normal", True),
]

out = ["/* The Codest design tokens. Generated from tokens.json by build_tokens_css.py. Do not edit by hand. */", ""]
out.append("@font-face { font-family: 'Iosevka'; font-weight: 900; font-style: normal; font-display: swap; "
           "src: url('../fonts/Iosevka-Heavy.woff2') format('woff2'); }")
for weight, style, name, ext in FIRA:
    rng = " unicode-range: U+0100-024F, U+1E00-1EFF;" if ext else ""
    out.append(f"@font-face {{ font-family: 'Fira Sans'; font-weight: {weight}; font-style: {style}; font-display: swap; "
               f"src: url('../fonts/FiraSans-{name}.woff2') format('woff2');{rng} }}")

out += ["", ":root {"]
for t in tokens["color"]["tokens"]:
    out.append(f"  --{t['name']}: {t['value']};")
for key, stack in tokens["type"]["families"].items():
    out.append(f"  --font-{key}: {stack};")
for family in ("spacing", "radius", "shadow", "borderWidth", "layout", "gradient", "effect"):
    for t in tokens.get(family, {}).get("tokens", []):
        out.append(f"  --{t['name']}: {t['value']};")
out += ["}", ""]

for group in tokens["type"]["groups"]:
    for s in group["styles"]:
        props = [
            f"font-family: var(--font-{s.get('family', group['family'])})",
            f"font-size: {s['fontSize']}",
            f"line-height: {s['lineHeight']}",
            f"font-weight: {s['fontWeight']}",
        ]
        if s.get("fontStyle"):
            props.append(f"font-style: {s['fontStyle']}")
        if s.get("letterSpacing"):
            props.append(f"letter-spacing: {s['letterSpacing']}")
        if s["name"].startswith("button") or "uppercase" in s["name"]:
            props.append("text-transform: uppercase")
        out.append(f".{s['name']} {{ {'; '.join(props)}; }}")

(HERE / "tokens.css").write_text("\n".join(out) + "\n")
print("wrote", HERE / "tokens.css")
