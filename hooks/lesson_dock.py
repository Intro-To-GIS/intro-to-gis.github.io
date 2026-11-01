"""Two site-wide behaviours that are easier to derive than to maintain by hand.

1. The four-door bar travels with the lesson. A lesson page writes its dock
   once; this hook reads it, works out which slide page and which lab pages
   that lesson owns, and puts the same bar on them with the door you are on
   marked. Nothing is duplicated in the source, so a lesson that is rebuilt
   or re-pointed carries its slides and labs with it automatically.

2. Any link that leaves the site opens in a new tab, so a reading or a data
   download never takes a student out of the lesson they are in.
"""

import posixpath
import re
from urllib.parse import urlsplit

# The dock as a lesson page writes it, and the doors inside it.
DOCK_RE = re.compile(r'<nav class="resource-dock"[^>]*>(.*?)</nav>', re.S)
# A door with no href is a door that leads nowhere in this lesson, such as
# the Lab door on a lesson that has no lab. It travels in that state.
DOOR_RE = re.compile(
    r'<a\s+(?:href="(?P<href>[^"]*)"\s*)?[^>]*>\s*'
    r'<span>(?P<num>[^<]*)</span>\s*'
    r'<strong>(?P<label>[^<]*)</strong>\s*'
    r'<small>(?P<note>[^<]*)</small>\s*</a>',
    re.S,
)
HERO_RE = re.compile(r'class="lesson-hero lesson-hero--([a-z-]+)"')
TITLE_RE = re.compile(r'^---\s*\ntitle:\s*(.+?)\s*\n', re.S)
LABCARD_RE = re.compile(r'<a\s+href="([^"]+)"\s+class="lab-card"')
DECKCARD_RE = re.compile(r'<a\s+href="([^"]+)"\s+class="deck-card"')
LABBACK_RE = re.compile(r'<p class="lab-back">.*?</p>', re.S)
ANCHOR_RE = re.compile(r'<a\s+([^>]*?)href="(https?://[^"]+)"([^>]*)>', re.I)

# The two gate prompts are identical across all fourteen labs, so the reason
# they are gated is explained once here rather than written out twenty-eight
# times. The address lives on the licence page; this only points at it.
GATE_RE = re.compile(
    r'<p>Enter the access code your instructor gave you to view the '
    r'(Project Instructions|Result Reference)\.</p>'
)
GATE_WHY = (
    '<p class="gate-why">These two stages are live assessment material, which '
    'is why they are not published openly. <a href="{href}">Why this is '
    'locked, and how to ask for the code</a>.</p>'
)

LEARN, SLIDES, LAB = 0, 1, 2

_registry = {}  # member page url -> (lesson key, index of the active door)
_lessons = {}  # lesson page url -> {"title", "accent", "doors"}


def _resolve(href, from_url):
    """Turn a lesson-relative href into a site-root-absolute one."""
    if href.startswith("#") or "://" in href:
        return href
    joined = posixpath.normpath(posixpath.join("/" + from_url, href))
    return joined + "/" if href.endswith("/") and not joined.endswith("/") else joined


def _relative(target, from_url):
    """Turn a site-root-absolute url into one relative to the page using it."""
    if target.startswith("#") or "://" in target:
        return target
    path, _, fragment = target.partition("#")
    rel = posixpath.relpath(path or "/", "/" + from_url)
    if path.endswith("/") and not rel.endswith("/"):
        rel += "/"
    return rel + ("#" + fragment if fragment else "")


def on_files(files, config):
    """Read every lesson's dock and claim the pages it points at."""
    _registry.clear()
    _lessons.clear()

    for f in files:
        if not f.src_uri.startswith("lessons/") or not f.src_uri.endswith(".md"):
            continue
        if f.src_uri in ("lessons/index.md", "lessons/course-index.md"):
            continue
        try:
            source = open(f.abs_src_path, encoding="utf-8").read()
        except OSError:
            continue

        dock = DOCK_RE.search(source)
        if not dock:
            continue  # a lesson not yet rebuilt on the template
        doors = [m.groupdict() for m in DOOR_RE.finditer(dock.group(1))]
        if len(doors) < 4:
            continue

        hero = HERO_RE.search(source)
        title = TITLE_RE.search(source)
        lesson_url = f.url
        for door in doors:
            if door["href"]:
                door["href"] = _resolve(door["href"], lesson_url)

        _lessons[lesson_url] = {
            "title": title.group(1) if title else "this lesson",
            "accent": hero.group(1) if hero else "",
            "doors": doors,
            # Learn leads back to the lesson itself rather than to a section
            # of it, so a student arriving from a lab lands on the hero.
            "learn": "/" + lesson_url,
        }

        # The slide page the lesson points at, and every lab it lists.
        # Every deck the lesson lists, not only the one behind the door.
        decks = {_resolve(h, lesson_url) for h in DECKCARD_RE.findall(source)}
        if (doors[SLIDES]["href"] or "").startswith("/"):
            decks.add(doors[SLIDES]["href"])
        for deck in decks:
            _registry[deck.strip("/") + "/"] = (lesson_url, SLIDES)
        labs = {_resolve(h, lesson_url) for h in LABCARD_RE.findall(source)}
        if (doors[LAB]["href"] or "").startswith("/"):
            labs.add(doors[LAB]["href"])
        for lab in labs:
            _registry[lab.strip("/") + "/"] = (lesson_url, LAB)

    return files


def _render_dock(lesson, page_url, active):
    info = _lessons[lesson]
    doors = info["doors"]
    accent = f" resource-dock--{info['accent']}" if info["accent"] else ""
    out = [
        f'<nav class="resource-dock resource-dock--travelling{accent}" '
        f'aria-label="{info["title"]} lesson resources">'
    ]
    for i, door in enumerate(doors):
        href = door["href"]
        if not href:
            out.append(
                f'<a class="dock-empty" aria-disabled="true">'
                f'<span>{door["num"]}</span><strong>{door["label"]}</strong>'
                f'<small>{door["note"]}</small></a>'
            )
            continue
        if i == LEARN:
            href = info["learn"]
        elif href.startswith("#"):
            # A door that scrolls on the lesson page has to travel as a link
            # to that part of the lesson page.
            href = "/" + lesson + href
        current = ' aria-current="page"' if i == active else ""
        out.append(
            f'<a href="{_relative(href, page_url)}"{current}>'
            f'<span>{door["num"]}</span><strong>{door["label"]}</strong>'
            f'<small>{door["note"]}</small></a>'
        )
    out.append("</nav>")
    return "".join(out)


def _outbound_new_tab(html, site_host):
    """Send every link that leaves the site to a new tab."""

    def fix(m):
        before, href, after = m.group(1), m.group(2), m.group(3)
        attrs = (before + after).lower()
        if urlsplit(href).netloc == site_host or "target=" in attrs:
            return m.group(0)
        rel = "noopener noreferrer"
        if "rel=" in attrs:
            return f'<a {before}href="{href}" target="_blank"{after}>'
        return f'<a {before}href="{href}" target="_blank" rel="{rel}"{after}>'

    return ANCHOR_RE.sub(fix, html)


def on_post_page(output, page, config):
    """Every link off the site, in content and in the page furniture alike."""
    site_host = urlsplit(config.get("site_url") or "").netloc
    return _outbound_new_tab(output, site_host) if site_host else output


def on_page_content(html, page, config, files):
    url = page.file.url

    # On a lesson page, mark the door the reader is already standing in.
    if url in _lessons:
        dock = DOCK_RE.search(html)
        if dock:
            marked = re.sub(r"<a ", '<a aria-current="page" ', dock.group(0), count=1)
            html = html[: dock.start()] + marked + html[dock.end():]
        return html

    if url not in _registry:
        return html

    lesson, active = _registry[url]
    dock = _render_dock(lesson, url, active)

    if GATE_RE.search(html):
        why = GATE_WHY.format(href=_relative("/license/#why-some-lab-material-needs-a-code", url))
        html = GATE_RE.sub(lambda m: m.group(0) + why, html)

    # A lab page already has a way back to the lesson; the dock replaces it
    # and does the same job for all four doors.
    if LABBACK_RE.search(html):
        # A lab page sets its own narrower column; the dock joins it there.
        lab_dock = dock.replace(
            "resource-dock resource-dock--travelling",
            "resource-dock resource-dock--travelling resource-dock--lab",
            1,
        )
        return LABBACK_RE.sub(lambda _: lab_dock, html, count=1)
    head = re.search(r"</h1>", html)
    if head:
        return html[: head.end()] + dock + html[head.end():]
    return dock + html
