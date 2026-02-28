import json, os, re

with open('scripts/epub-educational-picks.json', encoding='utf-8') as f:
    data = json.load(f)

# Get all existing module filenames (without .ts)
existing = set()
for fn in os.listdir('src/lib/modules/catalog/epub-generated'):
    if fn.endswith('.ts'):
        existing.add(fn[:-3])

print(f"Existing modules: {len(existing)}")

# Collect all books
all_books = []
for cat, books in data.items():
    for b in books:
        all_books.append({
            'category': cat,
            'title': b['title'],
            'creator': b.get('creator', ''),
            'score': b.get('academic_score', 0),
            'filepath': b.get('filepath', ''),
        })

all_books.sort(key=lambda x: -x['score'])

# Check which are already done
def title_to_slug(title, creator):
    raw = (title + ' ' + creator).lower()
    slug = re.sub(r'[^a-z0-9]+', '-', raw).strip('-')
    return slug[:50]

available = []
for b in all_books:
    slug = title_to_slug(b['title'], b['creator'])
    is_done = False
    for es in existing:
        # Match on first 20 chars of slug
        if slug[:20] == es[:20]:
            is_done = True
            break
        # Also try title-only match
        title_slug = re.sub(r'[^a-z0-9]+', '-', b['title'].lower()).strip('-')[:25]
        if title_slug in es:
            is_done = True
            break
    if not is_done:
        available.append(b)

print(f"Total in catalog: {len(all_books)}")
print(f"Available (not yet done): {len(available)}")
print()

# Filter for practical/educational content - skip pure fiction, poetry, travel guides
skip_categories = set()  # We'll include all and pick manually
# Prefer score >= 70
good = [b for b in available if b['score'] >= 70]
print(f"Score >= 70: {len(good)}")
print()

# Print top 100 for selection
print("=== TOP 100 AVAILABLE BY SCORE ===")
for i, b in enumerate(good[:100]):
    cat = b['category']
    title = b['title'][:55]
    creator = b['creator'][:25]
    score = b['score']
    fp = b['filepath']
    print(f"{i+1:3d}. [{score:5.1f}] [{cat:25s}] {title:55s} | {creator:25s} | {fp}")
