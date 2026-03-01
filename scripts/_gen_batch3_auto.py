#!/usr/bin/env python3
"""Batch 3 Auto-Generator — Produces 50 TypeScript LearningModule files
from the extracted chapter data in _chapter_data_batch3.json.

Usage:  python scripts/_gen_batch3_auto.py
Output: 50 .ts files in src/lib/modules/catalog/epub-generated/
"""

import json, re, os, sys, hashlib

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CHAPTER_DATA_PATH = os.path.join(SCRIPT_DIR, "_chapter_data_batch3.json")
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "..", "src", "lib", "modules", "catalog", "epub-generated")

# 2-char ID prefixes (all unique)
PFX = {
    "hume_religion":"hr","capitalism_ideal":"ci","objectivist_epist":"oe",
    "metaphysics":"mt","jekyll_hyde":"jh","don_quixote":"dq",
    "beginnings_learn":"bl","pompeii":"rp","civil_war_dummies":"cw",
    "blood_rage":"br","decline_fall":"df","citizen_soldiers":"cs",
    "endurance":"en","marne_1914":"m4","amer_civil_war":"ac",
    "history_zionism":"hz","disciplined_entrep":"de","iousa":"io",
    "microeconomics":"mc","money_mischief":"mm","no_logo":"nl",
    "red_capitalism":"rc","lean_entrepreneur":"le","paper_money":"pm",
    "freakonomics":"fk","good_business":"gb","catching_fire":"cf",
    "origin_species":"os","demon_haunted":"dh","god_delusion":"gd",
    "short_history":"sh","death_black_hole":"db","cosmos":"cm",
    "elegant_universe":"eu","from_eternity":"fe","genius_feynman":"gf",
    "theory_everything":"te","quantum_theory":"qt","omnivores_dilemma":"od",
    "kitchen_mysteries":"km","day_universe":"du","denialism":"dn",
    "alice_quantumland":"aq","interpretation_dreams":"id","alone_together":"at",
    "59_seconds":"fs","linchpin":"lp","seven_habits":"sv",
    "network_warrior":"nw","tcp_ip_illustrated":"ti",
}

# ═══════════════════════════════════════════════════════════════════════════
# HELPERS
# ═══════════════════════════════════════════════════════════════════════════

def slugify(title, creator, mx=50):
    first = creator.split(';')[0].strip()
    s = re.sub(r'[^a-z0-9]+', '-', f"{title} {first}".lower()).strip('-')
    return s[:mx].rstrip('-') if len(s) > mx else s

def pascalize(slug):
    name = ''.join(w.capitalize() for w in slug.split('-')) + 'Module'
    if name[0].isdigit():
        name = 'N' + name  # Prefix with N to make valid JS identifier
    return name

def esc(s):
    s = s.replace('\\', '\\\\').replace('"', '\\"')
    s = s.replace('\n', ' ').replace('\r', '').replace('\t', ' ')
    return re.sub(r'\s{2,}', ' ', s).strip()

def clean_heading(h, fallback_text=""):
    """Clean a chapter heading. If generic (e.g. 'Chapter 3'), extract title from text."""
    h = h.strip()
    # Try to extract subtitle after "Chapter N: Title"
    m = re.match(r'^(?:chapter|part|section|book|volume)\s*[\dIVXLCDM]+[:.—–\-\s]+(.+)', h, re.I)
    if m:
        h = m.group(1).strip()
    else:
        # Strip just the prefix
        h2 = re.sub(r'^(chapter|part|section|book|volume)\s*[\dIVXLCDM]+[:.—–\-\s]*', '', h, flags=re.I)
        h2 = re.sub(r'^\d+[:.—–\-\s]+', '', h2).strip().strip(':—-').strip()
        if h2 and len(h2) >= 3:
            h = h2
        elif fallback_text:
            # Extract title from first ~10 words of text
            words = re.sub(r'\s+', ' ', fallback_text.strip()).split()[:12]
            candidate = ' '.join(words)
            # Try to end at a natural break
            for sep in ['.', ':', '—', ' - ']:
                idx = candidate.find(sep)
                if 5 < idx < len(candidate):
                    candidate = candidate[:idx]
                    break
            h = candidate[:60] if candidate else "Key Concepts"
        else:
            return None
    return h[:80] if h and len(h) >= 3 else None

def get_paras(text, min_w=25, max_w=300):
    """Extract paragraph-sized chunks from text.
    
    Handles both newline-separated and continuous text (no newlines).
    For continuous text, splits into ~120-word passages at sentence boundaries.
    """
    skip = {'copyright','isbn','published','edition','reserved','catalog','library','acknowledgment'}
    text = re.sub(r'\s+', ' ', text.strip())

    # Try double-newline split first
    raw = re.split(r'\n\s*\n', text)
    if len(raw) < 3:
        # Continuous text: split at sentence boundaries into ~120-word chunks
        sentences = re.split(r'(?<=[.!?])\s+(?=[A-Z])', text)
        raw = []
        current = []
        wc = 0
        for s in sentences:
            sw = len(s.split())
            if wc + sw > 130 and wc >= 40:
                raw.append(' '.join(current))
                current = [s]
                wc = sw
            else:
                current.append(s)
                wc += sw
        if current:
            raw.append(' '.join(current))

    out = []
    for p in raw:
        p = re.sub(r'\s+', ' ', p.strip())
        wc = len(p.split())
        if wc < min_w or wc > max_w:
            continue
        low = p.lower()
        if any(s in low for s in skip):
            continue
        if p == p.upper() and wc > 3:
            continue
        out.append(p)
    return out

def trim(text, n=130):
    words = text.split()
    if len(words) <= n:
        return text
    t = ' '.join(words[:n])
    for end in ['. ', '! ', '? ']:
        last = t.rfind(end)
        if last > len(t) // 2:
            return t[:last+1].strip()
    return t.rstrip(',;:') + '.'

def first_sent(text, mx=200):
    text = re.sub(r'\s+', ' ', text.strip())
    m = re.match(r'(.+?[.!?])\s', text)
    if m and len(m.group(1)) <= mx:
        return m.group(1)
    return text[:mx].rstrip() + '...'

def det_shuffle(items, seed_str):
    """Deterministic shuffle using hash."""
    decorated = []
    for i, item in enumerate(items):
        h = hashlib.md5(f"{seed_str}_{i}".encode()).hexdigest()
        decorated.append((h, item))
    decorated.sort()
    return [item for _, item in decorated]

def make_tags(subject):
    tags = ["epub-derived", "curriculum", "interactive"]
    for p in re.split(r'[/,\s]+', subject.lower()):
        if p and p not in tags and p not in ('and','the','of','for','a'):
            tags.append(p)
    return tags

# ═══════════════════════════════════════════════════════════════════════════
# CONTENT EXTRACTION
# ═══════════════════════════════════════════════════════════════════════════

def prepare_chapters(chapters, needed=12):
    """Extract headings + paragraphs from raw chapters, padding to `needed`."""
    result = []
    for ch in chapters[:needed]:
        h = clean_heading(ch["heading"], ch.get("text", "")) or "Key Concepts"
        paras = get_paras(ch["text"])
        result.append({"h": h, "p": paras})
    while len(result) < needed:
        src = result[len(result) % max(len(result), 1)]
        result.append({"h": f"Further Analysis: {src['h']}", "p": src["p"]})
    return result

def pick_para(paras, idx=0, words=130):
    """Pick paragraph at index, trim to words."""
    if not paras:
        return ("This section examines the fundamental concepts and arguments "
                "presented by the author, exploring their significance within "
                "the broader context of the discipline and their implications "
                "for contemporary understanding.")
    p = paras[min(idx, len(paras)-1)]
    return trim(p, words)

# ═══════════════════════════════════════════════════════════════════════════
# TYPESCRIPT BUILDER
# ═══════════════════════════════════════════════════════════════════════════

def build_video_lesson(ch_data, ch_indices, pfx, lnum):
    """Build lines for a video lesson."""
    lid = f"{pfx}-l{lnum:02d}"
    # Merge headings for title
    heads = [ch_data[i]["h"] for i in ch_indices[:2]]
    title = " and ".join(heads)
    if len(title) > 70:
        title = heads[0]

    lines = []
    a = lines.append
    a(f'    /* ─────────────────────────────────────────────────')
    a(f'       L{lnum:02d}  {esc(title)}')
    a(f'    ───────────────────────────────────────────────── */')
    a(f'    {{')
    a(f'      id: "{lid}",')
    a(f'      title: "{esc(title)}",')
    a(f'      type: "video",')
    a(f'      duration: 12,')
    a(f'      objectives: [')
    for ci in ch_indices[:3]:
        h = ch_data[ci]["h"]
        a(f'        "Examine the key ideas and arguments related to {esc(h.lower())}",')
    if len(ch_indices) < 3:
        a(f'        "Synthesize and compare the themes across the covered material",')
    a(f'      ],')

    # ── Chunks (3) ──
    a(f'      chunks: [')
    chunk_sources = []
    for ci in ch_indices:
        chunk_sources.append((ch_data[ci]["h"], ch_data[ci]["p"]))
    # Distribute 3 chunks
    for c in range(3):
        src_idx = c % len(chunk_sources)
        para_idx = c // len(chunk_sources)
        h, paras = chunk_sources[src_idx]
        ct = h if c < len(chunk_sources) else f"Deeper Analysis: {h}"
        cc = pick_para(paras, para_idx, 130)
        a(f'        {{')
        a(f'          id: "{lid}-c{c+1}",')
        a(f'          title: "{esc(ct)}",')
        a(f'          content:')
        a(f'            "{esc(cc)}",')
        a(f'        }},')
    a(f'      ],')

    # ── Flashcards (4) ──
    a(f'      flashcards: [')
    for f_i in range(4):
        src_idx = f_i % len(chunk_sources)
        para_idx = f_i // len(chunk_sources)
        h, paras = chunk_sources[src_idx]
        front = h[:70]
        if f_i >= len(chunk_sources):
            front = f"Key concept: {h}"[:70]
        back = first_sent(pick_para(paras, para_idx + 1, 60), 180)
        a(f'        {{')
        a(f'          id: "{lid}-f{f_i+1}",')
        a(f'          front: "{esc(front)}",')
        a(f'          back:')
        a(f'            "{esc(back)}",')
        a(f'        }},')
    a(f'      ],')

    a(f'    }},')
    return lines


def build_quiz_lesson(ch_data, ch_indices, pfx, lnum):
    """Build lines for a quiz lesson."""
    lid = f"{pfx}-l{lnum:02d}"
    title = f"Checkpoint Quiz {lnum // 4 + 1}"

    lines = []
    a = lines.append
    a(f'    /* ─────────────────────────────────────────────────')
    a(f'       L{lnum:02d}  {title}')
    a(f'    ───────────────────────────────────────────────── */')
    a(f'    {{')
    a(f'      id: "{lid}",')
    a(f'      title: "{esc(title)}",')
    a(f'      type: "quiz",')
    a(f'      duration: 8,')
    a(f'      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],')

    a(f'      questions: [')

    # Collect all available headings and sentences for question generation
    all_sents = []
    for ci in ch_indices:
        h = ch_data[ci]["h"]
        paras = ch_data[ci]["p"]
        sent = first_sent(pick_para(paras, 0, 50), 100) if paras else f"Key aspects of {h.lower()}"
        all_sents.append((ci, h, sent))

    for qi in range(5):
        src = all_sents[qi % len(all_sents)]
        ci, heading, correct_sent = src

        q_text = f"Which of the following best describes a key idea from the section on {heading}?"

        # Correct answer
        correct = correct_sent

        # Wrong answers: sentences from OTHER chapter indices
        wrongs = []
        for other in all_sents:
            if other[0] != ci and len(wrongs) < 3:
                wrongs.append(other[2])
        # Pad wrongs if needed
        fallbacks = [
            "A concept not discussed in this section of the text",
            "An unrelated theory from a different field of study",
            "A claim that contradicts the author's central argument",
        ]
        while len(wrongs) < 3:
            wrongs.append(fallbacks[len(wrongs)])

        options = [correct] + wrongs[:3]
        options = det_shuffle(options, f"{pfx}{lnum}{qi}")
        correct_idx = options.index(correct)
        correct_letter = "abcd"[correct_idx]

        a(f'        {{')
        a(f'          id: "{lid}-q{qi+1}",')
        a(f'          text: "{esc(q_text)}",')
        a(f'          options: [')
        for oi, opt in enumerate(options):
            a(f'            {{ id: "{"abcd"[oi]}", text: "{esc(opt)}" }},')
        a(f'          ],')
        a(f'          correctOptionId: "{correct_letter}",')
        a(f'          explanation:')
        a(f'            "{esc(f"This question relates to {heading}. {correct}")}",')
        a(f'        }},')

    a(f'      ],')
    a(f'    }},')
    return lines


def build_module(key, book_data):
    """Build complete TypeScript module source."""
    meta = book_data["meta"]
    chapters = book_data["chapters"]

    title = meta["title"]
    creator = meta["creator"]
    filepath = meta["filepath"]
    subject = meta["subject"]
    pfx = PFX[key]
    slug = slugify(title, creator)
    export_name = pascalize(slug)
    tags = make_tags(subject)

    ch = prepare_chapters(chapters, 12)

    desc = (f"A comprehensive educational module derived from {title} by {creator}. "
            f"This course provides structured video lessons and interactive quizzes "
            f"exploring the key themes, arguments, and insights of the work.")

    objectives = []
    for i in range(7):
        objectives.append(f"Understand and critically analyze the concepts related to {ch[i]['h'].lower()}")

    # Lesson plan: V V V Q V V Q
    # ch mapping: L01→[0,1] L02→[2,3] L03→[4,5] L04=quiz L05→[6,7] L06→[8,9] L07=quiz
    plan = [
        ("video", [0, 1]),
        ("video", [2, 3]),
        ("video", [4, 5]),
        ("quiz",  [0, 1, 2, 3, 4, 5]),
        ("video", [6, 7]),
        ("video", [8, 9]),
        ("quiz",  [6, 7, 8, 9, 10, 11]),
    ]

    L = []
    a = L.append
    a('import type { LearningModule } from "@/lib/modules/types";')
    a('')
    a('// High-quality curriculum module derived from EPUB.')
    a(f'// Source: {filepath}')
    a(f'// Author: {esc(creator)}  |  Subject: {esc(subject)}')
    a('')
    a(f'export const {export_name}: LearningModule = {{')
    a(f'  id: "{slug}",')
    a(f'  title: "{esc(title)}",')
    a(f'  description:')
    a(f'    "{esc(desc)}",')
    a(f'  subject: "{esc(subject)}",')
    a(f'  tags: [{", ".join(chr(34)+t+chr(34) for t in tags)}],')
    a(f'  minAge: 18,')
    a(f'  maxAge: 99,')
    a(f'  moduleVersion: "2.0.0",')
    a(f'  version: "2.0.0",')
    a(f'  learningObjectives: [')
    for o in objectives:
        a(f'    "{esc(o)}",')
    a(f'  ],')
    a(f'  lessons: [')

    for lnum, (ltype, indices) in enumerate(plan, 1):
        if ltype == "video":
            L.extend(build_video_lesson(ch, indices, pfx, lnum))
        else:
            L.extend(build_quiz_lesson(ch, indices, pfx, lnum))

    a(f'  ],')
    a(f'}};')
    a('')
    return '\n'.join(L)


# ═══════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════

def main():
    if not os.path.exists(CHAPTER_DATA_PATH):
        print(f"ERROR: {CHAPTER_DATA_PATH} not found"); sys.exit(1)

    print(f"Loading chapter data ({os.path.getsize(CHAPTER_DATA_PATH)/1e6:.1f} MB)...")
    with open(CHAPTER_DATA_PATH, encoding="utf-8") as f:
        all_data = json.load(f)

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    generated, failed = [], []

    for key in PFX:
        if key not in all_data:
            print(f"  SKIP {key} -- missing from chapter data")
            failed.append(key)
            continue
        try:
            ts = build_module(key, all_data[key])
            meta = all_data[key]["meta"]
            slug = slugify(meta["title"], meta["creator"])
            path = os.path.join(OUTPUT_DIR, f"{slug}.ts")
            with open(path, "w", encoding="utf-8") as f:
                f.write(ts)
            nlines = ts.count('\n') + 1
            print(f"  OK [{len(generated)+1:02d}/50] {slug}.ts  ({nlines} lines)")
            generated.append(slug)
        except Exception as e:
            import traceback
            print(f"  FAIL {key} -- {e}")
            traceback.print_exc()
            failed.append(key)

    print(f"\n{'='*60}")
    print(f"Generated: {len(generated)} modules")
    if failed:
        print(f"Failed ({len(failed)}): {', '.join(failed)}")
    else:
        print("All 50 modules generated successfully!")

if __name__ == "__main__":
    main()
