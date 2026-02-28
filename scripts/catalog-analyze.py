#!/usr/bin/env python3
"""
EPUB Catalog Analyzer for Koydo Content Pipeline
==================================================
Reads the epub-catalog.json produced by scan-epubs.py and:
 1. Shows distribution stats across curriculum categories
 2. Writes epub-educational-picks.json — a ranked list of the most
    curriculum-relevant books per Koydo subject
 3. Writes epub-content-plan.md — a human-readable action plan

Usage:
    py -3 catalog-analyze.py [--catalog PATH] [--top N]
"""

import argparse
import json
import re
from pathlib import Path
from collections import defaultdict

# Koydo subject → how important keywords for educational books
# (scored to surface textbooks, study guides, academic works over fiction)
ACADEMIC_SIGNALS = [
    "textbook", "study guide", "introduction to", "fundamentals of",
    "principles of", "handbook of", "workbook", "curriculum",
    "college", "university", "grade", "lesson", "chapter",
    "theory", "practice", "exercises", "problems", "solutions",
    "exam", "test prep", "sat", "act", "gcse", "a-level",
    "reference", "academic", "scholarly", "research",
]

FICTION_SIGNALS = [
    "novel", "fiction", "fantasy", "thriller", "romance", "mystery",
    "horror", "vampire", "zombie", "dragon", "wizard", "detective",
    "love story", "paranormal", "sci-fi adventure",
]

# Maps Koydo catalog subjects → preferred EPUB categories
KOYDO_TO_EPUB_CAT = {
    "Mathematics":           ["Mathematics"],
    "Physics":               ["Physics"],
    "Chemistry":             ["Chemistry"],
    "Biology":               ["Biology"],
    "History":               ["History"],
    "Geography":             ["Geography"],
    "English & Literature":  ["English & Literature"],
    "Computer Science":      ["Computer Science"],
    "Economics & Business":  ["Economics & Business"],
    "Psychology":            ["Psychology"],
    "Philosophy":            ["Philosophy"],
    "Foreign Languages":     ["Foreign Languages"],
    "Arts":                  ["Arts"],
    "Exam Prep":             ["Exam Prep"],
    "General Education":     ["General Education"],
}


def academic_score(book: dict) -> float:
    """Score 0..100 — higher = more likely an academic/educational book."""
    haystack = " ".join([
        book.get("title", ""),
        book.get("description", ""),
        " ".join(book.get("subjects", [])),
        book.get("publisher", ""),
    ]).lower()

    score = 50.0  # neutral base

    # Boost for academic signals
    for kw in ACADEMIC_SIGNALS:
        if kw in haystack:
            score += 5
    # Penalise pure fiction signals
    for kw in FICTION_SIGNALS:
        if kw in haystack:
            score -= 4

    # Bonus for known academic publishers
    pub = book.get("publisher", "").lower()
    for acad in ["cambridge", "oxford", "springer", "pearson", "mcgraw", "wiley",
                  "mit press", "routledge", "cengage", "elsevier", "sage"]:
        if acad in pub:
            score += 15

    # English-language bonus (most curriculum content is EN)
    if book.get("language", "en") in ("en", "eng", "english"):
        score += 5

    return max(0, min(100, score))


def main() -> None:
    parser = argparse.ArgumentParser(description="Analyze EPUB catalog for curriculum planning.")
    parser.add_argument("--catalog",
                        default=str(Path(__file__).parent / "epub-catalog.json"),
                        help="Path to epub-catalog.json")
    parser.add_argument("--picks-out",
                        default=str(Path(__file__).parent / "epub-educational-picks.json"),
                        help="Output path for educational picks JSON")
    parser.add_argument("--plan-out",
                        default=str(Path(__file__).parent / "epub-content-plan.md"),
                        help="Output path for content plan markdown")
    parser.add_argument("--top", type=int, default=20,
                        help="Top N books per category to include")
    args = parser.parse_args()

    catalog_path = Path(args.catalog)
    if not catalog_path.exists():
        print(f"[ERROR] Catalog not found: {catalog_path}")
        print("Run scan-epubs.py first.")
        return

    print(f"Loading catalog from {catalog_path} …")
    with open(catalog_path, encoding="utf-8") as f:
        catalog = json.load(f)

    books: list[dict] = catalog.get("books", [])
    meta: dict = catalog.get("meta", {})

    print(f"  Total books in catalog : {len(books):,}")
    print(f"  Total EPUBs scanned    : {meta.get('total_scanned', '?'):,}")
    print(f"  Scan failures          : {meta.get('total_errors', '?'):,}")
    print()

    # Score every book
    for book in books:
        book["_academic_score"] = academic_score(book)

    # Build per-category picks
    picks_by_category: dict[str, list[dict]] = defaultdict(list)
    for book in books:
        for cat in book.get("categories", ["Uncategorized"]):
            picks_by_category[cat].append(book)

    # Sort each category by academic score desc, take top-N
    result_by_category: dict[str, list[dict]] = {}
    for cat in sorted(picks_by_category.keys()):
        sorted_books = sorted(picks_by_category[cat],
                               key=lambda b: b["_academic_score"], reverse=True)
        top = sorted_books[:args.top]
        result_by_category[cat] = [
            {
                "title":          b.get("title", ""),
                "creator":        b.get("creator", ""),
                "publisher":      b.get("publisher", ""),
                "language":       b.get("language", ""),
                "subjects":       b.get("subjects", [])[:4],
                "academic_score": round(b["_academic_score"], 1),
                "filepath":       b.get("filepath", ""),
            }
            for b in top
        ]
    
    # Output picks JSON
    picks_path = Path(args.picks_out)
    with open(picks_path, "w", encoding="utf-8") as f:
        json.dump(result_by_category, f, ensure_ascii=False, indent=2)
    print(f"Educational picks saved → {picks_path}")

    # ── Stats summary ─────────────────────────────────────────────────────
    cat_dist = meta.get("category_distribution", {})
    lang_dist = meta.get("language_distribution", {})

    # Print category stats
    print()
    print("=== Category Distribution (all extracted books) ===")
    for cat, count in sorted(cat_dist.items(), key=lambda x: -x[1]):
        top_score = max((b["_academic_score"] for b in picks_by_category.get(cat, [])), default=0)
        print(f"  {cat:<40} {count:>5}  (best academic score: {top_score:.0f})")

    print()
    print("=== Languages ===")
    for lang, count in list(sorted(lang_dist.items(), key=lambda x: -x[1]))[:15]:
        print(f"  {lang:<20} {count:>5}")

    # ── Generate markdown content plan ────────────────────────────────────
    lines = [
        "# Koydo EPUB Content Plan",
        f"Generated from {len(books):,} books across {len(result_by_category)} categories.",
        "",
    ]
    for cat, top_books in sorted(result_by_category.items()):
        edu_books = [b for b in top_books if b["academic_score"] >= 60]
        lines.append(f"## {cat}  ({len(edu_books)} high-confidence academic books)")
        for b in edu_books[:10]:
            title = b["title"] or "Unknown"
            creator = b["creator"] or "Unknown Author"
            score = b["academic_score"]
            lines.append(f"- **{title}** — {creator} (score: {score})")
        lines.append("")

    plan_path = Path(args.plan_out)
    with open(plan_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Content plan saved      → {plan_path}")


if __name__ == "__main__":
    main()
