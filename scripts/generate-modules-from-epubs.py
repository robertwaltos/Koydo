#!/usr/bin/env python3
"""
EPUB → Koydo Module Generator
================================
Extracts chapter text from EPUB files and auto-generates LearningModule
TypeScript source files ready to drop into src/lib/modules/catalog/.

Usage:
    py -3 generate-modules-from-epubs.py --picks scripts/epub-educational-picks.json
        [--category "Mathematics"] [--max-books 5] [--lessons-per-book 10]
        [--out-dir src/lib/modules/catalog/epub-generated]

What it produces:
  • One .ts file per book that has enough chapter content
  • Each module has 10–15 lessons derived from chapter headings
  • Each lesson has 4 MCQ quiz questions auto-generated from a keyword
    extraction strategy (no LLM required)
  • A registry-patch.json that can be merged into the module registry
"""

import argparse
import json
import os
import re
import zipfile
from pathlib import Path
from html.parser import HTMLParser
from xml.etree import ElementTree as ET


# ────────────────────────────────────────────────────────────────────────────
# HTML → plain-text stripper
# ────────────────────────────────────────────────────────────────────────────

class _HTMLTextExtractor(HTMLParser):
    SKIP_TAGS = {"script", "style", "head"}

    def __init__(self):
        super().__init__()
        self.parts: list[str] = []
        self._skip = 0

    def handle_starttag(self, tag, attrs):
        if tag.lower() in self.SKIP_TAGS:
            self._skip += 1

    def handle_endtag(self, tag):
        if tag.lower() in self.SKIP_TAGS:
            self._skip = max(0, self._skip - 1)

    def handle_data(self, data):
        if self._skip == 0:
            stripped = data.strip()
            if stripped:
                self.parts.append(stripped)


def strip_html(html: str) -> str:
    p = _HTMLTextExtractor()
    p.feed(html)
    return " ".join(p.parts)


# ────────────────────────────────────────────────────────────────────────────
# EPUB Chapter Extractor
# ────────────────────────────────────────────────────────────────────────────

NS = {
    "dc":        "http://purl.org/dc/elements/1.1/",
    "opf":       "http://www.idpf.org/2007/opf",
    "container": "urn:oasis:names:tc:opendocument:xmlns:container",
}


def get_opf_path(zf: zipfile.ZipFile) -> str | None:
    try:
        data = zf.read("META-INF/container.xml")
        root = ET.fromstring(data)
        rf = root.find(".//container:rootfile", NS)
        if rf is not None:
            return rf.get("full-path")
    except Exception:
        pass
    return next((n for n in zf.namelist() if n.endswith(".opf")), None)


def get_spine_items(zf: zipfile.ZipFile, opf_path: str) -> list[str]:
    """Return a list of spine HTML item paths in reading order."""
    try:
        opf_data = zf.read(opf_path)
        root = ET.fromstring(opf_data)
        opf_dir = "/".join(opf_path.split("/")[:-1])

        # Build id → href manifest
        manifest: dict[str, str] = {}
        mf = root.find("opf:manifest", NS)
        if mf is None:
            for child in root:
                if child.tag.endswith("manifest"):
                    mf = child
        if mf is not None:
            for item in mf:
                item_id = item.get("id", "")
                href = item.get("href", "")
                if href:
                    full = f"{opf_dir}/{href}".lstrip("/") if opf_dir else href
                    manifest[item_id] = full

        # Get spine order
        spine = root.find("opf:spine", NS)
        if spine is None:
            for child in root:
                if child.tag.endswith("spine"):
                    spine = child
        if spine is None:
            return []

        paths = []
        for item in spine:
            idref = item.get("idref", "")
            if idref in manifest:
                paths.append(manifest[idref])
        return paths
    except Exception:
        return []


def extract_chapters(epub_path: str, max_chapters: int = 15) -> list[dict]:
    """
    Extract up to max_chapters of content from an EPUB.
    Returns list of {'heading': str, 'text': str} dicts.
    """
    chapters = []
    try:
        with zipfile.ZipFile(epub_path, "r") as zf:
            opf_path = get_opf_path(zf)
            if not opf_path:
                return []
            spine = get_spine_items(zf, opf_path)
            if not spine:
                # fallback: try all HTML files alphabetically
                spine = sorted(n for n in zf.namelist()
                               if n.endswith((".html", ".xhtml", ".htm")))

            for item_path in spine[:max_chapters * 2]:  # read extra, filter later
                try:
                    raw = zf.read(item_path).decode("utf-8", errors="replace")
                    text = strip_html(raw)
                    if len(text) < 100:
                        continue  # skip stub pages
                    # Try to find a heading
                    heading_m = re.search(
                        r"<h[1-4][^>]*>(.*?)</h[1-4]>", raw, re.IGNORECASE | re.DOTALL
                    )
                    heading = strip_html(heading_m.group(1)) if heading_m else ""
                    heading = heading[:80].strip() or f"Chapter {len(chapters) + 1}"
                    chapters.append({"heading": heading, "text": text[:2000]})
                    if len(chapters) >= max_chapters:
                        break
                except Exception:
                    continue
    except Exception:
        pass
    return chapters


# ────────────────────────────────────────────────────────────────────────────
# Keyword → MCQ generator (no LLM, pure heuristic)
# ────────────────────────────────────────────────────────────────────────────

def extract_keywords(text: str, n: int = 20) -> list[str]:
    """Return a list of candidate content keywords from chapter text."""
    words = re.findall(r"\b[A-Z][a-z]{3,}\b", text)
    freq: dict[str, int] = {}
    for w in words:
        freq[w] = freq.get(w, 0) + 1
    # Filter out super-common words
    STOP = {"This", "That", "They", "There", "Their", "These", "With",
            "From", "Have", "Will", "Your", "More", "Into", "When",
            "What", "Which", "Some", "About", "Because", "After"}
    keywords = [w for w, cnt in sorted(freq.items(), key=lambda x: -x[1])
                if w not in STOP and cnt >= 2]
    return keywords[:n]


def make_mcq(lesson_id: str, q_idx: int, keyword: str, chapter_text: str) -> dict:
    """Generate a basic MCQ question for a keyword found in chapter text."""
    # Extract a sentence containing the keyword for context
    sentences = re.split(r"[.!?]", chapter_text)
    ctx_sentence = next(
        (s.strip() for s in sentences if keyword in s and len(s.strip()) > 20),
        f"The concept of {keyword} is central to this topic."
    )
    ctx_sentence = ctx_sentence[:200]

    question_text = f"Which of the following best describes the role of {keyword} in this context?"

    # Generate plausible-sounding distractors (pure template)
    options = [
        {"id": f"{lesson_id}-q{q_idx}-a",
         "text": f"{keyword} is the primary subject of study in this field."},
        {"id": f"{lesson_id}-q{q_idx}-b",
         "text": f"{keyword} refers to an unrelated historical event."},
        {"id": f"{lesson_id}-q{q_idx}-c",
         "text": f"{keyword} is only relevant in advanced academic settings."},
        {"id": f"{lesson_id}-q{q_idx}-d",
         "text": f"{keyword} was first discovered in the early 20th century."},
    ]

    return {
        "id":            f"{lesson_id}-q{q_idx}",
        "text":          question_text,
        "skillId":       "recall",
        "options":       options,
        "correctOptionId": f"{lesson_id}-q{q_idx}-a",
        "explanation":   f"Context: {ctx_sentence}",
        "hint":          f"Think about how {keyword} appears in the chapter's main argument.",
    }


# ────────────────────────────────────────────────────────────────────────────
# TypeScript module builder
# ────────────────────────────────────────────────────────────────────────────

def slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")[:50]


def to_const_name(module_id: str) -> str:
    parts = module_id.replace("-", "_").split("_")
    return "".join(p.title() for p in parts) + "Module"


def escape_ts(s: str) -> str:
    # Collapse whitespace/newlines, then escape for use in a double-quoted JS/TS string
    s = re.sub(r"[\r\n\t]+", " ", s).strip()
    return s.replace("\\", "\\\\").replace('"', '\\"')


def build_module_ts(
    book: dict,
    chapters: list[dict],
    module_id: str,
    subject_mapping: str,
    lessons_per_book: int,
) -> str:
    """Render a complete LearningModule TypeScript source string."""
    title        = escape_ts(book.get("title", "Unknown Title"))
    creator      = escape_ts(book.get("creator", ""))
    description  = escape_ts(book.get("description", "")[:200] or
                              f"Derived from '{title}' by {creator}.")
    const_name   = to_const_name(module_id)

    lesson_items = []
    selected_chapters = chapters[:lessons_per_book]
    for i, ch in enumerate(selected_chapters):
        lesson_id = f"{module_id}-l{i+1:02d}"
        ch_title  = escape_ts(ch["heading"])
        keywords  = extract_keywords(ch["text"])
        # Build 4 quiz questions from top 4 keywords (or fewer if not enough)
        questions = []
        for q_idx, kw in enumerate(keywords[:4], start=1):
            questions.append(make_mcq(lesson_id, q_idx, kw, ch["text"]))

        qs_json = json.dumps(questions, ensure_ascii=False, indent=8)
        # Indent to align with TS
        qs_indented = qs_json.replace("\n", "\n      ")

        lesson_items.append(f'''    {{
      id: "{lesson_id}",
      title: "{ch_title}",
      type: "video",
      duration: 10,
      questions: {qs_indented},
    }}''')

    lessons_str = ",\n".join(lesson_items)
    src_label   = escape_ts(book.get("filepath", ""))

    return f'''import type {{ LearningModule }} from "@/lib/modules/types";

// Auto-generated from EPUB library.
// Source: {src_label}
// Generator: scripts/generate-modules-from-epubs.py

export const {const_name}: LearningModule = {{
  id: "{module_id}",
  title: "{title}",
  description: "{description}",
  subject: "{subject_mapping}",
  tags: ["epub-derived", "curriculum", "interactive"],
  minAge: 10,
  maxAge: 18,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  learningObjectives: [
    "Understand foundational concepts presented in \\"{title}\\"",
    "Apply key ideas through chapter-based guided practice",
    "Demonstrate recall with curriculum-aligned quiz questions",
  ],
  lessons: [
{lessons_str}
  ],
}};
'''


# ────────────────────────────────────────────────────────────────────────────
# Main
# ────────────────────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(description="Generate Koydo modules from EPUB catalog.")
    parser.add_argument("--picks",
                        default=str(Path(__file__).parent / "epub-educational-picks.json"),
                        help="Path to epub-educational-picks.json")
    parser.add_argument("--category",
                        default=None,
                        help="Only process books from this category (default: all)")
    parser.add_argument("--min-score", type=float, default=65.0,
                        help="Minimum academic score to generate a module (default: 65)")
    parser.add_argument("--max-books", type=int, default=10,
                        help="Max books to process per category")
    parser.add_argument("--lessons-per-book", type=int, default=10,
                        help="Lessons (chapters) to extract per book")
    parser.add_argument("--out-dir",
                        default=str(Path(__file__).parent.parent /
                                    "src/lib/modules/catalog/epub-generated"),
                        help="Output directory for .ts module files")
    args = parser.parse_args()

    picks_path = Path(args.picks)
    if not picks_path.exists():
        print(f"[ERROR] Picks file not found: {picks_path}")
        print("Run catalog-analyze.py first.")
        return

    with open(picks_path, encoding="utf-8") as f:
        picks: dict[str, list[dict]] = json.load(f)

    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    categories = ([args.category] if args.category else list(picks.keys()))
    registry_patches: list[str] = []
    generated = 0

    for category in categories:
        books = picks.get(category, [])
        edu_books = [b for b in books if b.get("academic_score", 0) >= args.min_score]
        print(f"\n--- {category} --- {len(edu_books)} qualifying books")

        for book in edu_books[:args.max_books]:
            title = book.get("title", "")
            creator = book.get("creator", "")
            filepath = book.get("filepath", "")
            score = book.get("academic_score", 0)

            if not filepath or not Path(filepath).exists():
                print(f"  [miss] File not found: {filepath}")
                continue

            print(f"  Extracting: {title[:60]} (score {score:.0f}) ...", end=" ", flush=True)
            chapters = extract_chapters(filepath, max_chapters=args.lessons_per_book + 5)

            if len(chapters) < 3:
                print("[skip] too few chapters")
                continue

            module_id = slug(f"{title}-{creator}"[:80]) or slug(title[:40])
            out_path  = out_dir / f"{module_id}.ts"

            # Map to Koydo subject name
            koydo_subject = category.replace(" & ", " and ")

            ts_src = build_module_ts(book, chapters, module_id, koydo_subject,
                                     args.lessons_per_book)

            with open(out_path, "w", encoding="utf-8") as f:
                f.write(ts_src)

            registry_patches.append(module_id)
            generated += 1
            print(f"[ok] -> {out_path.name}  ({len(chapters)} chapters)")

    # Write registry patch list
    patch_path = out_dir / "generated-modules.json"
    with open(patch_path, "w", encoding="utf-8") as f:
        json.dump({"generated_modules": registry_patches, "count": generated}, f, indent=2)

    print(f"\n[done] {generated} module(s) generated in {out_dir}")
    print(f"   Registry patch list: {patch_path}")
    print()
    print("Next step: run `npm run modules:sync` to register new modules,")
    print("then `npm run build` to verify TypeScript compilation.")


if __name__ == "__main__":
    main()
