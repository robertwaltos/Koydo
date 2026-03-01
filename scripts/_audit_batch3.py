#!/usr/bin/env python3
"""Audit batch 3 modules for content quality."""
import os, re

d = r"D:\PythonProjects\Koydo\eduforge-web\src\lib\modules\catalog\epub-generated"
batch3_slugs = [
    "principal-writings-on-religion-david-hume",
    "capitalism-the-unknown-ideal-ayn-rand",
    "introduction-to-objectivist-epistemology-ayn-rand",
    "metaphysics-aristotle",
    "strange-case-of-dr-jekyll-and-mr-hyde-and-other-ta",
    "don-quixote-miguel-de-cervantes",
    "beginnings-of-learning-jiddu-krishnamurti",
    "resurrecting-pompeii-estelle-lazer",
    "the-civil-war-for-dummies-keith-d-dickson",
    "blood-and-rage-a-cultural-history-of-terrorism-mic",
    "the-history-of-the-decline-and-fall-of-the-roman-e",
    "citizen-soldiers-stephen-e-ambrose",
    "the-endurance-shackleton-s-legendary-antarctic-exp",
    "the-marne-1914-holger-h-herwig",
    "the-american-civil-war-and-the-wars-of-the-industr",
    "a-history-of-zionism-walter-laqueur",
    "disciplined-entrepreneurship-bill-aulet",
    "i-o-u-s-a-addison-wiggin",
    "microeconomics-4th-edition-david-besanko",
    "money-mischief-milton-friedman",
    "no-logo-naomi-klein",
    "red-capitalism-carl-e-walter",
    "the-lean-entrepreneur-brant-cooper",
    "paper-money-collapse-detlev-s-schlichter",
    "freakonomics-steven-d-levitt",
    "good-business-leadership-flow-and-the-making-of-me",
    "catching-fire-how-cooking-made-us-human-richard-wr",
    "the-origin-of-species-charles-darwin",
    "the-demon-haunted-world-science-as-a-candle-in-the",
    "the-god-delusion-richard-dawkins",
    "a-short-history-of-nearly-everything-bill-bryson",
    "death-by-black-hole-neil-degrasse-tyson",
    "cosmos-carl-sagan",
    "the-elegant-universe-brian-greene",
    "from-eternity-to-here-sean-carroll",
    "genius-the-life-and-science-of-richard-feynman-jam",
    "illustrated-theory-of-everything-stephen-hawking",
    "quantum-theory-cannot-hurt-you-marcus-chown",
    "the-omnivore-s-dilemma-michael-pollan",
    "kitchen-mysteries-revealing-the-science-of-cooking",
    "the-day-the-universe-changed-james-burke",
    "denialism-how-irrational-thinking-hinders-scientif",
    "alice-in-quantumland-robert-gilmore",
    "the-interpretation-of-dreams-sigmund-freud",
    "alone-together-sherry-turkle",
    "59-seconds-think-a-little-change-a-lot-richard-wis",
    "linchpin-are-you-indispensable-seth-godin",
    "seven-habits-of-highly-effective-people-stephen-r",
    "network-warrior-gary-a-donahue",
    "tcp-ip-illustrated-volume-1-the-protocols-w-richar",
]

FALLBACK = "This section examines the fundamental concepts"
real_total = 0
fall_total = 0
details = []

for slug in batch3_slugs:
    fp = os.path.join(d, slug + ".ts")
    with open(fp, encoding="utf-8") as f:
        txt = f.read()
    # Count chunks with real vs fallback content
    chunks = re.findall(r'content:\s*\n\s*"(.+?)"', txt)
    real_c = sum(1 for c in chunks if FALLBACK not in c)
    fall_c = sum(1 for c in chunks if FALLBACK in c)
    total = real_c + fall_c
    pct = (real_c / total * 100) if total else 0
    details.append((slug[:52], real_c, fall_c, total, pct))
    real_total += real_c
    fall_total += fall_c

print(f"TOTAL CHUNKS: {real_total+fall_total}  |  Real: {real_total}  |  Fallback: {fall_total}  |  Real%: {real_total/(real_total+fall_total)*100:.1f}%")
print()
print(f"{'Slug':<54s} Real Fall Total  Pct")
print("-" * 82)
for s, r, fl, t, p in details:
    flag = " <<<" if p < 50 else ""
    print(f"{s:<54s} {r:4d} {fl:4d} {t:5d} {p:5.0f}%{flag}")
