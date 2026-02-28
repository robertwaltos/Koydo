#!/usr/bin/env python3
"""
Extract full chapter text from 50 priority EPUBs for Batch 3 module generation.
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

# ─── BATCH 3: 50 diverse educational books ───────────────────────────────────
BOOKS = [
    # ── Philosophy & Religion ──
    {"key":"hume_religion",      "title":"Principal Writings on Religion","creator":"David Hume","filepath":"G:/My Drive/15_E-BOOKS/file015217.epub","subject":"Philosophy"},
    {"key":"capitalism_ideal",   "title":"Capitalism: The Unknown Ideal","creator":"Ayn Rand","filepath":"G:/My Drive/15_E-BOOKS/file006993.epub","subject":"Philosophy/Economics"},
    {"key":"objectivist_epist",  "title":"Introduction to Objectivist Epistemology","creator":"Ayn Rand","filepath":"G:/My Drive/15_E-BOOKS/file006990.epub","subject":"Philosophy"},
    {"key":"metaphysics",        "title":"Metaphysics","creator":"Aristotle","filepath":"G:/My Drive/15_E-BOOKS/file002569.epub","subject":"Philosophy"},
    {"key":"jekyll_hyde",        "title":"Strange Case of Dr Jekyll and Mr Hyde and Other Tales","creator":"Robert Louis Stevenson","filepath":"G:/My Drive/15_E-BOOKS/file012251.epub","subject":"Literature/Philosophy"},
    {"key":"don_quixote",        "title":"Don Quixote","creator":"Miguel de Cervantes","filepath":"G:/My Drive/15_E-BOOKS/file003222.epub","subject":"Literature"},
    {"key":"beginnings_learn",   "title":"Beginnings of Learning","creator":"Jiddu Krishnamurti","filepath":"G:/My Drive/15_E-BOOKS/file002209.epub","subject":"Philosophy/Education"},

    # ── History & Politics ──
    {"key":"pompeii",            "title":"Resurrecting Pompeii","creator":"Estelle Lazer","filepath":"G:/My Drive/15_E-BOOKS/file006667.epub","subject":"History/Archaeology"},
    {"key":"civil_war_dummies",  "title":"The Civil War For Dummies","creator":"Keith D. Dickson","filepath":"G:/My Drive/15_E-BOOKS/file001325.epub","subject":"History"},
    {"key":"blood_rage",         "title":"Blood and Rage: A Cultural History of Terrorism","creator":"Michael Burleigh","filepath":"G:/My Drive/15_E-BOOKS/file000889.epub","subject":"History/Politics"},
    {"key":"decline_fall",       "title":"The History of the Decline and Fall of the Roman Empire","creator":"Edward Gibbon","filepath":"G:/My Drive/15_E-BOOKS/file006397.epub","subject":"History"},
    {"key":"citizen_soldiers",   "title":"Citizen Soldiers","creator":"Stephen E. Ambrose","filepath":"G:/My Drive/15_E-BOOKS/file008746.epub","subject":"History/WWII"},
    {"key":"endurance",          "title":"The Endurance: Shackleton's Legendary Antarctic Expedition","creator":"Caroline Alexander","filepath":"G:/My Drive/15_E-BOOKS/file002135.epub","subject":"History/Adventure"},
    {"key":"marne_1914",         "title":"The Marne, 1914","creator":"Holger H. Herwig","filepath":"G:/My Drive/15_E-BOOKS/file007104.epub","subject":"History/WWI"},
    {"key":"amer_civil_war",     "title":"The American Civil War and the Wars of the Industrial Revolution","creator":"Brian Holden Reid","filepath":"G:/My Drive/15_E-BOOKS/file004935.epub","subject":"History/Military"},
    {"key":"history_zionism",    "title":"A History of Zionism","creator":"Walter Laqueur","filepath":"G:/My Drive/15_E-BOOKS/file013182.epub","subject":"History"},

    # ── Economics & Business ──
    {"key":"disciplined_entrep", "title":"Disciplined Entrepreneurship","creator":"Bill Aulet","filepath":"G:/My Drive/15_E-BOOKS/file005200.epub","subject":"Business"},
    {"key":"iousa",              "title":"I.O.U.S.A.","creator":"Addison Wiggin; Kate Incontrera","filepath":"G:/My Drive/15_E-BOOKS/file000086.epub","subject":"Economics"},
    {"key":"microeconomics",     "title":"Microeconomics, 4th Edition","creator":"David Besanko","filepath":"G:/My Drive/15_E-BOOKS/file001989.epub","subject":"Economics"},
    {"key":"money_mischief",     "title":"Money Mischief","creator":"Milton Friedman","filepath":"G:/My Drive/15_E-BOOKS/file001230.epub","subject":"Economics"},
    {"key":"no_logo",            "title":"No Logo","creator":"Naomi Klein","filepath":"G:/My Drive/15_E-BOOKS/file011325.epub","subject":"Economics/Culture"},
    {"key":"red_capitalism",     "title":"Red Capitalism","creator":"Carl E. Walter; Fraser J. T. Howie","filepath":"G:/My Drive/15_E-BOOKS/file002082.epub","subject":"Economics/China"},
    {"key":"lean_entrepreneur",  "title":"The Lean Entrepreneur","creator":"Brant Cooper","filepath":"G:/My Drive/15_E-BOOKS/file010690.epub","subject":"Business"},
    {"key":"paper_money",        "title":"Paper Money Collapse","creator":"Detlev S. Schlichter","filepath":"G:/My Drive/15_E-BOOKS/file001237.epub","subject":"Economics"},
    {"key":"freakonomics",       "title":"Freakonomics","creator":"Steven D. Levitt","filepath":"G:/My Drive/15_E-BOOKS/file003564.epub","subject":"Economics"},
    {"key":"good_business",      "title":"Good Business: Leadership, Flow, and the Making of Meaning","creator":"Mihaly Csikszentmihalyi","filepath":"G:/My Drive/15_E-BOOKS/file018173.epub","subject":"Business/Psychology"},

    # ── Science & Nature ──
    {"key":"catching_fire",      "title":"Catching Fire: How Cooking Made Us Human","creator":"Richard Wrangham","filepath":"G:/My Drive/15_E-BOOKS/file012151.epub","subject":"Anthropology"},
    {"key":"origin_species",     "title":"The Origin of Species","creator":"Charles Darwin","filepath":"G:/My Drive/15_E-BOOKS/file005382.epub","subject":"Biology"},
    {"key":"demon_haunted",      "title":"The Demon-Haunted World: Science as a Candle in the Dark","creator":"Carl Sagan","filepath":"G:/My Drive/15_E-BOOKS/file005091.epub","subject":"Science/Critical Thinking"},
    {"key":"god_delusion",       "title":"The God Delusion","creator":"Richard Dawkins","filepath":"G:/My Drive/15_E-BOOKS/file012076.epub","subject":"Science/Philosophy"},
    {"key":"short_history",      "title":"A Short History of Nearly Everything","creator":"Bill Bryson","filepath":"G:/My Drive/15_E-BOOKS/file001818.epub","subject":"Science"},
    {"key":"death_black_hole",   "title":"Death by Black Hole","creator":"Neil deGrasse Tyson","filepath":"G:/My Drive/15_E-BOOKS/file016976.epub","subject":"Astrophysics"},
    {"key":"cosmos",             "title":"Cosmos","creator":"Carl Sagan","filepath":"G:/My Drive/15_E-BOOKS/file016803.epub","subject":"Astronomy"},
    {"key":"elegant_universe",   "title":"The Elegant Universe","creator":"Brian Greene","filepath":"G:/My Drive/15_E-BOOKS/file022275.epub","subject":"Physics"},
    {"key":"from_eternity",      "title":"From Eternity to Here","creator":"Sean Carroll","filepath":"G:/My Drive/15_E-BOOKS/file012488.epub","subject":"Physics"},
    {"key":"genius_feynman",     "title":"Genius: The Life and Science of Richard Feynman","creator":"James Gleick","filepath":"G:/My Drive/15_E-BOOKS/file007793.epub","subject":"Physics/Biography"},
    {"key":"theory_everything",  "title":"Illustrated Theory of Everything","creator":"Stephen Hawking","filepath":"G:/My Drive/15_E-BOOKS/file012610.epub","subject":"Physics/Cosmology"},
    {"key":"quantum_theory",     "title":"Quantum Theory Cannot Hurt You","creator":"Marcus Chown","filepath":"G:/My Drive/15_E-BOOKS/file000836.epub","subject":"Physics"},
    {"key":"omnivores_dilemma",  "title":"The Omnivore's Dilemma","creator":"Michael Pollan","filepath":"G:/My Drive/15_E-BOOKS/file009962.epub","subject":"Food/Agriculture"},
    {"key":"kitchen_mysteries",  "title":"Kitchen Mysteries: Revealing the Science of Cooking","creator":"Hervé This","filepath":"G:/My Drive/15_E-BOOKS/file019121.epub","subject":"Food Science"},
    {"key":"day_universe",       "title":"The Day the Universe Changed","creator":"James Burke","filepath":"G:/My Drive/15_E-BOOKS/file022138.epub","subject":"Science/History"},
    {"key":"denialism",          "title":"Denialism: How Irrational Thinking Hinders Scientific Progress","creator":"Michael Specter","filepath":"G:/My Drive/15_E-BOOKS/file011248.epub","subject":"Science/Critical Thinking"},
    {"key":"alice_quantumland",  "title":"Alice in Quantumland","creator":"Robert Gilmore","filepath":"G:/My Drive/15_E-BOOKS/file012213.epub","subject":"Physics"},

    # ── Psychology & Self-Development ──
    {"key":"interpretation_dreams","title":"The Interpretation of Dreams","creator":"Sigmund Freud","filepath":"G:/My Drive/15_E-BOOKS/file012560.epub","subject":"Psychology"},
    {"key":"alone_together",     "title":"Alone Together","creator":"Sherry Turkle","filepath":"G:/My Drive/15_E-BOOKS/file002110.epub","subject":"Technology/Psychology"},
    {"key":"59_seconds",         "title":"59 Seconds: Think a Little, Change a Lot","creator":"Richard Wiseman","filepath":"G:/My Drive/15_E-BOOKS/file012150.epub","subject":"Psychology"},
    {"key":"linchpin",           "title":"Linchpin: Are You Indispensable?","creator":"Seth Godin","filepath":"G:/My Drive/15_E-BOOKS/file003977.epub","subject":"Business/Self-Development"},
    {"key":"seven_habits",       "title":"Seven Habits of Highly Effective People","creator":"Stephen R. Covey","filepath":"G:/My Drive/15_E-BOOKS/file012774.epub","subject":"Self-Development"},

    # ── Computer Science & Technology ──
    {"key":"network_warrior",    "title":"Network Warrior","creator":"Gary A. Donahue","filepath":"G:/My Drive/15_E-BOOKS/file002188.epub","subject":"Networking/IT"},
    {"key":"tcp_ip_illustrated", "title":"TCP/IP Illustrated, Volume 1: The Protocols","creator":"W. Richard Stevens","filepath":"G:/My Drive/15_E-BOOKS/file010686.epub","subject":"Networking"},
]

assert len(BOOKS) == 50, f"Expected 50 books, got {len(BOOKS)}"

def main():
    results = {}
    failed = []
    for i, book in enumerate(BOOKS):
        key = book["key"]
        print(f"\n[{i+1:02d}/50] === {key} ({book['title'][:50]}) ===")
        chs = extract_full_chapters(book["filepath"], max_chapters=12)
        if not chs:
            print(f"  !! NO CHAPTERS EXTRACTED")
            failed.append(key)
        results[key] = {
            "meta": book,
            "chapters": [{"heading": ch["heading"], "text": ch["text"], "char_count": len(ch["text"])} for ch in chs]
        }
        for j, ch in enumerate(chs):
            preview = ch["heading"][:55]
            print(f"  [{j+1:02d}] {preview!r:58s} ({len(ch['text'])} chars)")

    out = pathlib.Path(__file__).parent / "_chapter_data_batch3.json"
    with open(out, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\n{'='*60}")
    print(f"Saved {len(results)} books to {out}")
    if failed:
        print(f"FAILED ({len(failed)}): {', '.join(failed)}")
    else:
        print("All 50 books extracted successfully!")

if __name__ == "__main__":
    main()
