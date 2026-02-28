#!/usr/bin/env python3
"""
Extract full chapter text from priority EPUBs for high-quality module generation.
"""
import sys, json, re, zipfile
import importlib.util
import pathlib

_spec = importlib.util.spec_from_file_location(
    "gen_epub",
    pathlib.Path(__file__).parent / "generate-modules-from-epubs.py"
)
_mod = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_mod)
strip_html = _mod.strip_html
get_opf_path = _mod.get_opf_path
get_spine_items = _mod.get_spine_items

SKIP_HEADINGS = {"contents","copyright","dedication","acknowledgments",
                 "acknowledgements","about the author","index","bibliography",
                 "references","notes","glossary","appendix","preface","prologue",
                 "table of contents","praise","also by"}

def extract_full_chapters(epub_path, max_chapters=12):
    chapters = []
    try:
        with zipfile.ZipFile(epub_path, "r") as zf:
            opf_path = get_opf_path(zf)
            if not opf_path:
                return []
            spine = get_spine_items(zf, opf_path)
            if not spine:
                spine = sorted(n for n in zf.namelist() if n.endswith((".html",".xhtml",".htm")))
            for item_path in spine[:max_chapters * 3]:
                try:
                    raw = zf.read(item_path).decode("utf-8", errors="replace")
                    text = strip_html(raw)
                    if len(text) < 150:
                        continue
                    heading_m = re.search(r"<h[1-4][^>]*>(.*?)</h[1-4]>", raw, re.IGNORECASE|re.DOTALL)
                    heading = strip_html(heading_m.group(1)).strip()[:120] if heading_m else ""
                    heading = heading or f"Chapter {len(chapters)+1}"
                    if heading.lower().strip() in SKIP_HEADINGS:
                        continue
                    if len(text) < 400:
                        continue
                    chapters.append({"heading": heading, "text": text})
                    if len(chapters) >= max_chapters:
                        break
                except Exception:
                    continue
    except Exception as e:
        print(f"  ERROR reading {epub_path}: {e}")
    return chapters

BOOKS = [
    # Batch 2 — diverse subjects
    {"key":"selfish_gene", "title":"The Selfish Gene","creator":"Richard Dawkins","filepath":"G:/My Drive/15_E-BOOKS/file012078.epub","subject":"Biology"},
    {"key":"rights_of_man","title":"Rights of Man","creator":"Thomas Paine","filepath":"G:/My Drive/15_E-BOOKS/file004129.epub","subject":"History"},
    {"key":"federalist",   "title":"The Federalist Papers","creator":"Alexander Hamilton; James Madison; John Jay","filepath":"G:/My Drive/15_E-BOOKS/file004299.epub","subject":"History"},
    {"key":"prince",       "title":"The Prince","creator":"Niccolò Machiavelli","filepath":"G:/My Drive/15_E-BOOKS/file001674.epub","subject":"Philosophy"},
    {"key":"social_eng",   "title":"Social Engineering: The Art of Human Hacking","creator":"Christopher Hadnagy","filepath":"G:/My Drive/15_E-BOOKS/file005374.epub","subject":"Computer Science"},
    {"key":"cannibal_cap", "title":"Cannibal Capitalism","creator":"Michael C. Hill","filepath":"G:/My Drive/15_E-BOOKS/file007846.epub","subject":"Economics"},
    {"key":"four_pillars", "title":"The Four Pillars of Investing","creator":"William J. Bernstein","filepath":"G:/My Drive/15_E-BOOKS/file002119.epub","subject":"Economics"},
    {"key":"little_econ",  "title":"The Little Book of Economics","creator":"G. Ip","filepath":"G:/My Drive/15_E-BOOKS/file002141.epub","subject":"Economics"},
    {"key":"numbers_rule", "title":"Numbers Rule Your World","creator":"Kaiser Fung","filepath":"G:/My Drive/15_E-BOOKS/file008489.epub","subject":"Economics"},
    {"key":"collider",     "title":"Collider","creator":"Paul Halpern","filepath":"G:/My Drive/15_E-BOOKS/file011688.epub","subject":"Physics"},
]

def main():
    results = {}
    for book in BOOKS:
        key = book["key"]
        print(f"\n=== {key} ===")
        chs = extract_full_chapters(book["filepath"], max_chapters=12)
        results[key] = {"meta": book, "chapters": [{"heading": ch["heading"],"text": ch["text"],"char_count": len(ch["text"])} for ch in chs]}
        for i, ch in enumerate(chs):
            preview = ch["heading"][:55]
            print(f"  [{i+1:02d}] {preview!r:58s} ({len(ch['text'])} chars)")
    out = pathlib.Path(__file__).parent / "_chapter_data_batch2.json"
    with open(out, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\nSaved to {out}")

if __name__ == "__main__":
    main()
