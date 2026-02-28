import json, os, re

with open('scripts/epub-educational-picks.json', encoding='utf-8') as f:
    data = json.load(f)

existing = set()
for fn in os.listdir('src/lib/modules/catalog/epub-generated'):
    if fn.endswith('.ts'):
        existing.add(fn[:-3])

# De-duplicate by filepath, keep highest score and all categories
by_path = {}
for cat, books in data.items():
    for b in books:
        fp = b.get('filepath', '')
        if fp not in by_path:
            by_path[fp] = {
                'title': b['title'],
                'creator': b.get('creator', ''),
                'score': b.get('academic_score', 0),
                'filepath': fp,
                'categories': [cat],
                'publisher': b.get('publisher', ''),
                'subjects': b.get('subjects', []),
            }
        else:
            by_path[fp]['categories'].append(cat)
            if b.get('academic_score', 0) > by_path[fp]['score']:
                by_path[fp]['score'] = b.get('academic_score', 0)

all_unique = list(by_path.values())
all_unique.sort(key=lambda x: -x['score'])

# Check which are already done
def is_done(book):
    title_slug = re.sub(r'[^a-z0-9]+', '-', book['title'].lower()).strip('-')
    for es in existing:
        if title_slug[:20] in es or es[:20] in title_slug[:25]:
            return True
    return False

available = [b for b in all_unique if not is_done(b)]

print(f"Unique books in catalog: {len(all_unique)}")
print(f"Already processed: {len(all_unique) - len(available)}")
print(f"Available: {len(available)}")

# Classify as educational/practical
def is_educational(b):
    """Filter for genuinely educational content"""
    title = b['title'].lower()
    subjects = ' '.join(b.get('subjects', [])).lower()
    cats = ' '.join(b['categories']).lower()
    
    # Skip pure fiction (unless literary classics with educational value)
    fiction_markers = ['novel', 'thriller', 'romance', 'mystery novel']
    if any(m in title for m in fiction_markers):
        return False
    
    # Strong educational indicators
    edu_markers = ['dummies', 'guide', 'handbook', 'introduction', 'principles',
                   'history', 'economics', 'philosophy', 'science', 'programming',
                   'engineering', 'mathematics', 'psychology', 'illustrated',
                   'cookbook', 'tutorial', 'step by step', 'self-teaching',
                   'outline', 'fundamentals', 'essentials', 'theory',
                   'networking', 'security', 'capitalism', 'politics',
                   'education', 'learning', 'marketing', 'management',
                   'entrepreneurship', 'investing', 'financial', 'analysis',
                   'medical', 'health', 'nutrition', 'diet', 'archaeology',
                   'religion', 'spirituality', 'meditation', 'war', 'military']
    
    if any(m in title for m in edu_markers):
        return True
    if any(m in subjects for m in edu_markers):
        return True
    if any(c in cats for c in ['computer', 'economics', 'history', 'philosophy',
                                'science', 'exam', 'education', 'health']):
        return True
    
    # Accept anything with score >= 70
    if b['score'] >= 70:
        return True
    
    return False

educational = [b for b in available if is_educational(b)]
educational.sort(key=lambda x: -x['score'])

print(f"Educational/practical available: {len(educational)}")
print()

# Print all available educational books
for i, b in enumerate(educational):
    cats_str = '/'.join(b['categories'][:2])
    print(f"{i+1:3d}. [{b['score']:5.1f}] [{cats_str:35s}] {b['title'][:55]:55s} | {b['creator'][:30]:30s} | {b['filepath']}")

# Also count by score ranges
print(f"\nScore distribution:")
for threshold in [80, 75, 70, 65, 60, 50]:
    count = len([b for b in educational if b['score'] >= threshold])
    print(f"  >= {threshold}: {count}")
