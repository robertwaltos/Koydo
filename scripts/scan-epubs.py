#!/usr/bin/env python3
"""
EPUB Metadata Scanner for Koydo Content Pipeline
=================================================
Scans a directory of .epub files and extracts metadata from each book's OPF file.
Produces a JSON catalog categorized by educational subject.

Usage:
    python3 scan-epubs.py [--epub-dir PATH] [--output PATH] [--workers N]

Default epub-dir: G:\\My Drive\\15_E-BOOKS
Default output:   scripts/epub-catalog.json
"""

import argparse
import json
import os
import re
import sys
import zipfile
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path
from xml.etree import ElementTree as ET

# ── Dublin Core / OPF XML namespaces ────────────────────────────────────────
NS = {
    "dc":        "http://purl.org/dc/elements/1.1/",
    "opf":       "http://www.idpf.org/2007/opf",
    "container": "urn:oasis:names:tc:opendocument:xmlns:container",
}

# ── Curriculum subject keywords → category mapping ──────────────────────────
SUBJECT_MAP: list[tuple[list[str], str]] = [
    (["math", "algebra", "geometry", "calculus", "trigonometry",
      "arithmetic", "statistics", "probability", "number theory",
      "linear algebra", "differential"], "Mathematics"),
    (["physics", "mechanics", "electromagnetism", "thermodynamics",
      "quantum", "optics", "astrophysics", "astronomy"], "Physics"),
    (["chemistry", "organic", "inorganic", "biochemistry", "chemical"], "Chemistry"),
    (["biology", "ecology", "genetics", "evolution", "cell", "anatomy",
      "physiology", "microbiology", "botany", "zoology"], "Biology"),
    (["history", "historical", "ancient", "medieval", "world war",
      "civilization", "empire", "revolution", "colonial"], "History"),
    (["geography", "geograph", "cartography", "topography", "climate"], "Geography"),
    (["english", "grammar", "writing", "literature", "reading", "language arts",
      "vocabulary", "composition", "essay", "fiction", "poetry", "novel",
      "shakespeare", "literary"], "English & Literature"),
    (["computer", "programming", "software", "algorithm", "data structure",
      "python", "java", "javascript", "coding", "machine learning",
      "artificial intelligence", "database", "networking"], "Computer Science"),
    (["economics", "macroeconomics", "microeconomics", "finance",
      "accounting", "business", "entrepreneurship", "market"], "Economics & Business"),
    (["psychology", "cognitive", "neuroscience", "behavior", "mental health",
      "psychiatry"], "Psychology"),
    (["philosophy", "ethics", "logic", "epistemology", "metaphysics"], "Philosophy"),
    (["spanish", "french", "german", "chinese", "japanese", "arabic",
      "portuguese", "latin", "italian", "foreign language"], "Foreign Languages"),
    (["art", "music", "drawing", "painting", "sculpture", "design",
      "architecture", "theater", "drama", "visual"], "Arts"),
    (["exam", "test prep", "sat", "act", "gmat", "gre", "toefl",
      "ielts", "ap ", "standardized test", "practice test"], "Exam Prep"),
    (["textbook", "study guide", "workbook", "curriculum", "classroom",
      "education", "pedagogy", "teaching", "learning"], "General Education"),
]


def extract_text(element: ET.Element | None) -> str:
    """Safely extract stripped text from an XML element."""
    if element is None:
        return ""
    return (element.text or "").strip()


def find_opf_path(zf: zipfile.ZipFile) -> str | None:
    """Read META-INF/container.xml and return the path to the OPF file."""
    try:
        container_xml = zf.read("META-INF/container.xml")
        root = ET.fromstring(container_xml)
        rootfile = root.find(".//container:rootfile", NS)
        if rootfile is not None:
            return rootfile.get("full-path")
    except (KeyError, ET.ParseError):
        pass
    # Fallback: find any .opf file in the archive
    for name in zf.namelist():
        if name.endswith(".opf"):
            return name
    return None


def _first_el(
    meta: ET.Element, tag: str
) -> ET.Element | None:
    """Find the first matching element, trying DC namespace first, then bare tag.
    Uses explicit is-None checks to avoid Python 3.14 Element truthiness issues."""
    el = meta.find(f"dc:{tag}", NS)
    if el is not None:
        return el
    return meta.find(tag)


def _all_els(meta: ET.Element, tag: str) -> list[ET.Element]:
    """Find all matching elements across DC namespace and bare tag."""
    els = meta.findall(f"dc:{tag}", NS)
    if not els:
        els = meta.findall(tag)
    return els


def parse_opf(zf: zipfile.ZipFile, opf_path: str) -> dict:
    """Parse OPF metadata file and return a dict of book metadata."""
    try:
        opf_data = zf.read(opf_path)
        root = ET.fromstring(opf_data)
    except (KeyError, ET.ParseError):
        return {}

    # Locate the <metadata> element robustly across namespace variants
    meta = root.find("opf:metadata", NS)
    if meta is None:
        meta = root.find("metadata")
    if meta is None:
        for child in root:
            if child.tag.endswith("metadata"):
                meta = child
                break

    if meta is None:
        return {}

    def get(tag: str) -> str:
        return extract_text(_first_el(meta, tag))

    def get_all(tag: str) -> list[str]:
        return [extract_text(e) for e in _all_els(meta, tag) if extract_text(e)]

    desc = get("description")
    return {
        "title":       get("title"),
        "creator":     get("creator"),
        "publisher":   get("publisher"),
        "language":    get("language"),
        "description": desc[:500] if desc else "",
        "subjects":    get_all("subject"),
        "date":        get("date")[:4] if get("date") else "",
    }


def categorize(metadata: dict) -> list[str]:
    """Return a list of curriculum categories based on metadata text."""
    haystack = " ".join([
        metadata.get("title", ""),
        metadata.get("description", ""),
        " ".join(metadata.get("subjects", [])),
    ]).lower()

    matched: list[str] = []
    for keywords, category in SUBJECT_MAP:
        if any(kw in haystack for kw in keywords):
            matched.append(category)

    return matched or ["Uncategorized"]


def scan_epub(epub_path: str) -> dict | None:
    """Scan a single EPUB and return its metadata dict (or None on error)."""
    try:
        with zipfile.ZipFile(epub_path, "r") as zf:
            opf_path = find_opf_path(zf)
            if not opf_path:
                return None
            meta = parse_opf(zf, opf_path)
            if not meta.get("title"):
                return None
            meta["filename"]   = os.path.basename(epub_path)
            meta["filepath"]   = epub_path
            meta["categories"] = categorize(meta)
            return meta
    except (zipfile.BadZipFile, OSError):
        return None


def main() -> None:
    parser = argparse.ArgumentParser(description="Scan EPUBs and build a curriculum catalog.")
    parser.add_argument(
        "--epub-dir",
        default=r"G:\My Drive\15_E-BOOKS",
        help="Directory containing .epub files (searched recursively).",
    )
    parser.add_argument(
        "--output",
        default=str(Path(__file__).parent / "epub-catalog.json"),
        help="Output JSON catalog path.",
    )
    parser.add_argument(
        "--workers",
        type=int,
        default=min(8, os.cpu_count() or 4),
        help="Number of parallel worker processes.",
    )
    parser.add_argument(
        "--min-title-len",
        type=int,
        default=3,
        help="Minimum title length to include a book.",
    )
    args = parser.parse_args()

    epub_dir = Path(args.epub_dir)
    if not epub_dir.exists():
        print(f"[ERROR] EPUB directory not found: {epub_dir}", file=sys.stderr)
        sys.exit(1)

    # Collect all epub paths
    epub_paths = [str(p) for p in epub_dir.rglob("*.epub")]
    total = len(epub_paths)
    print(f"Found {total:,} EPUB files in {epub_dir}")

    if total == 0:
        print("Nothing to scan.", file=sys.stderr)
        sys.exit(0)

    # Parallel scan
    results: list[dict] = []
    errors = 0
    processed = 0
    report_every = max(1, total // 20)  # report at 5% intervals

    print(f"Scanning with {args.workers} workers …\n")
    with ProcessPoolExecutor(max_workers=args.workers) as executor:
        futures = {executor.submit(scan_epub, p): p for p in epub_paths}
        for future in as_completed(futures):
            processed += 1
            if processed % report_every == 0 or processed == total:
                pct = processed / total * 100
                print(f"  {processed:>6}/{total} ({pct:.0f}%)  — {len(results)} books extracted")
            try:
                result = future.result()
                if result and len(result.get("title", "")) >= args.min_title_len:
                    results.append(result)
            except Exception:
                errors += 1

    print(f"\nExtracted metadata for {len(results):,} books ({errors} failures).\n")

    # Build summary statistics
    category_counts: dict[str, int] = {}
    language_counts: dict[str, int] = {}
    for book in results:
        for cat in book.get("categories", ["Uncategorized"]):
            category_counts[cat] = category_counts.get(cat, 0) + 1
        lang = book.get("language", "unknown") or "unknown"
        language_counts[lang] = language_counts.get(lang, 0) + 1

    summary = {
        "total_scanned": total,
        "total_extracted": len(results),
        "total_errors": errors,
        "category_distribution": dict(sorted(category_counts.items(), key=lambda x: -x[1])),
        "language_distribution": dict(sorted(language_counts.items(), key=lambda x: -x[1])[:30]),
    }

    catalog = {
        "meta": summary,
        "books": sorted(results, key=lambda b: b.get("title", "").lower()),
    }

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(catalog, f, ensure_ascii=False, indent=2)

    print(f"Catalog saved → {output_path}\n")

    # Print category summary
    print("=== Category Distribution ===")
    for cat, count in sorted(category_counts.items(), key=lambda x: -x[1]):
        bar = "█" * min(40, count // max(1, len(results) // 40))
        print(f"  {cat:<30} {count:>5}  {bar}")

    print("\n=== Top Languages ===")
    for lang, count in list(sorted(language_counts.items(), key=lambda x: -x[1]))[:10]:
        print(f"  {lang:<20} {count:>5}")


if __name__ == "__main__":
    main()
