# Vercel Deployment Guide — Koydo/EduForge

## Repository

- **Repo:** `robertwaltos/Koydo`
- **Branch:** `master`
- **Framework:** Next.js 16.x (Turbopack)
- **Deploy trigger:** Push to `master` → Vercel auto-deploys

---

## What Was Done (Commit `1d93b14`)

### Problem

Vercel builds were timing out or failing due to **4 large TypeScript catalog files** (~32KB each, ~128KB total) that defined 300 game objects inline. The TS compiler had to parse, type-check, and tree-shake all of them at build time, inflating both compile duration and bundle size.

### Solution: Move catalog data to runtime JSON

1. **Created a conversion script** (`scripts/catalog-to-json.mjs`) that extracts all 300 `GameDefinition` objects from the 4 TS files and writes a single `public/data/games/catalog.json` (132KB).

2. **Deleted the 4 large TS source files:**
   - `src/lib/games/engine/catalog/catalog-part1.ts`
   - `src/lib/games/engine/catalog/catalog-part2.ts`
   - `src/lib/games/engine/catalog/catalog-part3.ts`
   - `src/lib/games/engine/catalog/catalog-part4.ts`

3. **Rewrote the catalog index** (`src/lib/games/engine/catalog/index.ts`):
   - Replaced sync `import` of 4 TS files with an async `fetch("/data/games/catalog.json")` loader.
   - Uses a **singleton cache** — the JSON is fetched once, then all subsequent calls return the cached array.
   - Provides a `useCatalog()` React hook for client components (returns `{ catalog, loading }`).
   - All existing helper functions (`getGameById`, `getAllCategories`, `searchGames`, etc.) still work — they read from the cached data after the first load.

4. **Updated consumer pages:**
   - `src/app/games/page.tsx` — uses `useCatalog()` hook, shows loading spinner until data arrives.
   - `src/app/games/[gameId]/page.tsx` — uses `useCatalog()` hook, shows loading state before game lookup.

### Result

- **Build time reduced:** ~128KB of TypeScript no longer compiled at build time.
- **Bundle size reduced:** Game data is not in the JS bundle; it's a static JSON asset fetched on demand.
- **308 pages still generated** successfully during `next build`.

---

## How to Deploy (Step-by-Step)

### Quick Deploy (Just Push)

```bash
git add -A
git commit -m "your message"
git push origin master
```

Vercel auto-deploys on push to `master`. Done.

### Full Rebuild Deploy

If you need to verify the build passes locally first:

```bash
# 1. Build locally
npx next build

# 2. If build succeeds, commit and push
git add -A
git commit -m "feat: description of changes"
git push origin master
```

---

## Tips for Future Agents (Save Time)

### 1. Don't Bundle Large Data Files as TypeScript

If you have large arrays of objects (catalogs, dictionaries, configs with 50+ entries), **put them in `public/` as JSON** and `fetch()` them at runtime. The TS compiler spends enormous time type-checking large literal arrays.

**Pattern:**
```
public/data/whatever.json          ← static asset, served by CDN
src/lib/whatever/loader.ts         ← thin async loader with cache
```

### 2. Use the Conversion Script

If catalog data needs regenerating from source:

```bash
node scripts/catalog-to-json.mjs
```

This reads the TS source comments/structure and outputs `public/data/games/catalog.json`.

### 3. Async Loading Pattern for Client Components

```tsx
// In your loader module:
let _cache: Data[] | null = null;
let _promise: Promise<Data[]> | null = null;

export async function loadData(): Promise<Data[]> {
  if (_cache) return _cache;
  if (!_promise) {
    _promise = fetch("/data/file.json")
      .then(r => r.json())
      .then(data => { _cache = data; return data; });
  }
  return _promise;
}

export function useData() {
  const [state, setState] = useState(() =>
    _cache ? { data: _cache, loading: false } : { data: [], loading: true }
  );
  useEffect(() => {
    if (_cache) { setState({ data: _cache, loading: false }); return; }
    loadData().then(d => setState({ data: d, loading: false }));
  }, []);
  return state;
}
```

### 4. Build Before Pushing

Always run `npx next build` locally before pushing. Vercel build minutes are limited and debugging remote build failures is slow.

### 5. Common Build Errors & Fixes

| Error | Fix |
|-------|-----|
| Framer Motion `brightness` in `animate` | Remove it — use CSS `brightness-*` class instead |
| IDB `getAllFromIndex` with `boolean` key | Use `getAll()` + `.filter()` instead |
| Missing `await` on async middleware | Add `await` before the async call |
| Type not exported from barrel | Check the barrel `index.ts` re-exports |

### 6. File Size Limits

Vercel has a **50MB compressed** function size limit. If the bundle grows:
- Move data to `public/` (JSON, not TS)
- Use `optimizePackageImports` in `next.config.ts`
- Check for accidental imports of large libraries in API routes

### 7. Git Workflow

```bash
# Stage everything including deletions
git add -A

# Commit with conventional commit prefix
git commit -m "perf: move catalog to runtime JSON"

# Push to trigger deploy
git push origin master
```

---

## Architecture Reference

```
public/
  data/
    games/
      catalog.json              ← 300 game definitions (132KB, static asset)

src/lib/games/engine/
  catalog/
    index.ts                    ← async loader + useCatalog() hook + helpers
  types.ts                      ← GameDefinition, EduCategory, etc.
  engines/                      ← 26 game engine components
  resolver.ts                   ← resolveEngine(mechanic) → React component
  scoring.ts                    ← scoring utilities
  index.ts                      ← barrel export

src/app/games/
  page.tsx                      ← Games hub (browse/search/filter 300 games)
  [gameId]/page.tsx             ← Game player (lobby → play → results)

scripts/
  catalog-to-json.mjs           ← TS → JSON conversion utility
```
