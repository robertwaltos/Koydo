# EPUB Content Pipeline

This pipeline scans your local EPUB library, extracts metadata, identifies
the most educationally-valuable books, and auto-generates Koydo learning
modules from chapter content.

---

## Quick Start

### Full pipeline (scan → analyze → generate → register)
```bash
npm run epub:pipeline
```

### Step by step
```bash
# 1. Scan all EPUBs and build a metadata catalog
npm run epub:scan
# Output: scripts/epub-catalog.json

# 2. Analyze catalog, score books by academic relevance
npm run epub:analyze
# Output: scripts/epub-educational-picks.json
#         scripts/epub-content-plan.md

# 3. Generate LearningModule .ts files from top-scoring books
npm run epub:generate
# Output: src/lib/modules/catalog/epub-generated/*.ts

# 4. Register new modules so the app knows about them
npm run modules:sync
```

---

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/scan-epubs.py` | Scan EPUB directory, extract OPF metadata, build `epub-catalog.json` |
| `scripts/catalog-analyze.py` | Score books by academic relevance, build `epub-educational-picks.json` |
| `scripts/generate-modules-from-epubs.py` | Extract chapter text, generate `.ts` LearningModule files |

---

## Configuration

### Default EPUB directory
`G:\My Drive\15_E-BOOKS` — change via `--epub-dir` flag or the `npm run epub:scan` script.

### Tune academic score threshold
By default `generate-modules-from-epubs.py` only uses books scoring **≥ 65** (100 = purely academic).
Lower this to get more books; raise it for stricter filtering:
```bash
py -3 scripts/generate-modules-from-epubs.py --min-score 55
```

### Generate for a specific category only
```bash
py -3 scripts/generate-modules-from-epubs.py --category "Mathematics" --max-books 20
```

### Control output volume
```bash
py -3 scripts/generate-modules-from-epubs.py \
  --max-books 30 \          # books per category
  --lessons-per-book 15     # lessons per module (= chapters extracted)
```

---

## Output Structure

```
src/lib/modules/catalog/
└── epub-generated/
    ├── introduction-to-calculus-james-stewart.ts
    ├── organic-chemistry-paula-bruice.ts
    ├── world-history-textbook-...ts
    └── generated-modules.json    ← registry patch list
```

Each generated module follows the exact `LearningModule` TypeScript schema
and is auto-registered when you run `npm run modules:sync`.

---

## Academic Scoring

Books are scored 0–100 based on:
- **+5** per academic signal keyword (textbook, study guide, fundamentals, etc.)
- **+15** for known academic publishers (Cambridge, Oxford, Springer, Pearson…)
- **−4** per fiction signal (novel, fantasy, thriller, etc.)
- **+5** for English-language books

A score of **≥ 65** is required by default for module generation.

---

## Re-scanning

The epub-catalog.json is a persistent artifact. Re-run `npm run epub:scan`
only if you add new EPUBs to the library. `epub:analyze` and `epub:generate`
can be re-run at any time with the existing catalog.
