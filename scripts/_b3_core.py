#!/usr/bin/env python3
"""Batch 3 core: template engine for generating TypeScript LearningModule files."""

import os
import re

OUTPUT_DIR = r"D:\PythonProjects\Koydo\eduforge-web\src\lib\modules\catalog\epub-generated"

# ─── Helpers ────────────────────────────────────────────────────────────────

def S(title, author, mx=50):
    """Slugify title + primary author to kebab-case, max length."""
    first = author.split(';')[0].strip()
    raw = f"{title} {first}"
    s = re.sub(r'[^a-z0-9]+', '-', raw.lower()).strip('-')
    return s[:mx].rstrip('-') if len(s) > mx else s


def P(slug):
    """Convert kebab-case slug to PascalCaseModule export name."""
    return ''.join(w.capitalize() for w in slug.split('-')) + 'Module'


def e(s):
    """Escape for TS double-quoted string."""
    return s.replace('\\', '\\\\').replace('"', '\\"')


def V(title, objectives, chunks, flashcards, duration=12):
    """Create a video lesson dict."""
    return dict(type="video", title=title, duration=duration,
                objectives=objectives, chunks=chunks, flashcards=flashcards)


def Q(title, objectives, questions, duration=8):
    """Create a quiz lesson dict."""
    return dict(type="quiz", title=title, duration=duration,
                objectives=objectives, questions=questions)


# Common tag prefix for all epub-derived modules
T = ["epub-derived", "curriculum", "interactive"]


def mk(slug, title, author, src, subject, pfx, desc, tags, obj, lessons):
    """Assemble a book dict."""
    return dict(slug=slug, title=title, author=author, src=src,
                subject=subject, pfx=pfx, desc=desc, tags=tags,
                obj=obj, lessons=lessons)


# ─── TypeScript Generator ──────────────────────────────────────────────────

def generate_ts(b):
    """Generate complete TypeScript module source from book dict."""
    slug = b['slug']
    exp = P(slug)
    pfx = b['pfx']
    L = []
    a = L.append

    # Header
    a('import type { LearningModule } from "@/lib/modules/types";')
    a('')
    a('// High-quality curriculum module derived from EPUB.')
    a(f'// Source: {b["src"]}')
    a(f'// Author: {b["author"]}  |  Subject: {b["subject"]}')
    a('')
    a(f'export const {exp}: LearningModule = {{')
    a(f'  id: "{slug}",')
    a(f'  title: "{e(b["title"])}",')
    a(f'  description:')
    a(f'    "{e(b["desc"])}",')
    a(f'  subject: "{e(b["subject"])}",')
    tags_s = ', '.join(f'"{t}"' for t in b['tags'])
    a(f'  tags: [{tags_s}],')
    a(f'  minAge: 18,')
    a(f'  maxAge: 99,')
    a(f'  moduleVersion: "2.0.0",')
    a(f'  version: "2.0.0",')
    a(f'  learningObjectives: [')
    for o in b['obj']:
        a(f'    "{e(o)}",')
    a(f'  ],')
    a(f'  lessons: [')

    for li, lesson in enumerate(b['lessons'], 1):
        lid = f'{pfx}-l{li:02d}'
        lt = lesson['type']
        a('')
        a(f'    /* ─────────────────────────────────────────────────')
        a(f'       L{li:02d}  {lesson["title"]}')
        a(f'    ───────────────────────────────────────────────── */')
        a(f'    {{')
        a(f'      id: "{lid}",')
        a(f'      title: "{e(lesson["title"])}",')
        a(f'      type: "{lt}",')
        a(f'      duration: {lesson["duration"]},')
        if lesson.get('objectives'):
            a(f'      objectives: [')
            for o in lesson['objectives']:
                a(f'        "{e(o)}",')
            a(f'      ],')

        if lt == 'video':
            a(f'      chunks: [')
            for ci, (ct, cc) in enumerate(lesson['chunks'], 1):
                a(f'        {{')
                a(f'          id: "{lid}-c{ci}",')
                a(f'          title: "{e(ct)}",')
                a(f'          content:')
                a(f'            "{e(cc)}",')
                a(f'        }},')
            a(f'      ],')
            a(f'      flashcards: [')
            for fi, (ff, fb) in enumerate(lesson['flashcards'], 1):
                a(f'        {{')
                a(f'          id: "{lid}-f{fi}",')
                a(f'          front: "{e(ff)}",')
                a(f'          back:')
                a(f'            "{e(fb)}",')
                a(f'        }},')
            a(f'      ],')

        elif lt == 'quiz':
            a(f'      questions: [')
            for qi, q in enumerate(lesson['questions'], 1):
                a(f'        {{')
                a(f'          id: "{lid}-q{qi}",')
                a(f'          text: "{e(q[0])}",')
                a(f'          options: [')
                for oid, ot in zip('abcd', q[1]):
                    a(f'            {{ id: "{oid}", text: "{e(ot)}" }},')
                a(f'          ],')
                a(f'          correctOptionId: "{q[2]}",')
                a(f'          explanation:')
                a(f'            "{e(q[3])}",')
                a(f'        }},')
            a(f'      ],')

        a(f'    }},')

    a(f'  ],')
    a(f'}};')
    a('')
    return '\n'.join(L)


def write_modules(books, label=""):
    """Write all module .ts files from a list of book dicts."""
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    written = []
    for i, b in enumerate(books, 1):
        slug = b['slug']
        content = generate_ts(b)
        fp = os.path.join(OUTPUT_DIR, f'{slug}.ts')
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(content)
        nlines = content.count('\n') + 1
        print(f'  [{label}{i:02d}/{len(books)}] {slug}.ts  ({nlines} lines, {len(content):,d} chars)')
        written.append(fp)
    return written
