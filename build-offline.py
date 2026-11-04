"""Build the one-file offline copy of the Math 9 Learning Hub.

Run from the repository folder:  python tools/build-offline.py
It reads index.html, inlines every stylesheet, script, and image, and writes
offline/math9-hub-offline.html. Run it again after any lesson or setting change.
"""
import base64, re, pathlib

root = pathlib.Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text(encoding="utf-8")

def data_uri(rel):
    p = root / rel
    mime = {".png": "image/png", ".gif": "image/gif", ".jpg": "image/jpeg", ".svg": "image/svg+xml"}[p.suffix.lower()]
    return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()

# Stylesheet
css = (root / "css/styles.css").read_text(encoding="utf-8")
html = html.replace('<link rel="stylesheet" href="css/styles.css">', "<style>\n" + css + "\n</style>")

# Scripts, in order; mark the build as offline first
def inline_script(m):
    code = (root / m.group(1)).read_text(encoding="utf-8")
    if m.group(1) == "js/config.js":
        code = "window.OFFLINE_BUILD = true;\n" + code
    return "<script>\n" + code.replace("</script", "<\\/script") + "\n</script>"
html = re.sub(r'<script src="([^"]+)"></script>', inline_script, html)

# Images referenced anywhere (HTML or inlined JS)
for rel in sorted(set(re.findall(r'assets/images/[\w.-]+', html))):
    html = html.replace(rel, data_uri(rel))

out = root / "offline" / "math9-hub-offline.html"
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding="utf-8")
print(f"Wrote {out} ({out.stat().st_size // 1024} KB)")
