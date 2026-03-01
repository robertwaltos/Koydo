#!/usr/bin/env python3
"""Spot-check content quality from representative modules."""
import os, re

d = r"D:\PythonProjects\Koydo\eduforge-web\src\lib\modules\catalog\epub-generated"
samples = [
    "the-elegant-universe-brian-greene",
    "freakonomics-steven-d-levitt",
    "the-interpretation-of-dreams-sigmund-freud",
    "tcp-ip-illustrated-volume-1-the-protocols-w-richar",
    "catching-fire-how-cooking-made-us-human-richard-wr",
    "the-history-of-the-decline-and-fall-of-the-roman-e",
    "seven-habits-of-highly-effective-people-stephen-r",
    "alone-together-sherry-turkle",
]

for slug in samples:
    fp = os.path.join(d, slug + ".ts")
    with open(fp, encoding="utf-8") as f:
        txt = f.read()
    pattern = re.compile(r'content:\s*\n\s*"(.+?)"', re.DOTALL)
    chunks = pattern.findall(txt)
    real = [c for c in chunks if "This section examines the fundamental" not in c][:2]
    print(f"=== {slug[:55]} ===")
    for i, c in enumerate(real):
        preview = c[:300].replace("\\n", " ")
        print(f"  Chunk {i+1}: {preview}...")
    print()
