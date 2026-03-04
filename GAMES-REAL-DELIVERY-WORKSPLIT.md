# Games Real Delivery Worksplit

Date: 2026-03-03  
Purpose: split responsibilities between this agent and external agents so only fully built games are counted.

## Non-Negotiable Rule

Do not count a game as "built" unless all of these are true:

1. Route exists and loads without crash at `/games/[gameId]`.
2. Player can complete one full loop (start -> interact -> win/lose -> replay).
3. Telemetry submission path executes (or fails gracefully with visible message).
4. Age/safety gating still works.
5. The game has a unique implementation file or a unique mechanics+level pack with passing acceptance tests.

If a title is only a metadata row, it is catalog-only, not built.

## What This Agent Can Do (Code + Integration)

1. Build and refactor real gameplay components in `src/components/games`.
2. Replace alias wrappers with true playable implementations.
3. Extend progression systems (levels, streaks, score normalization, restart loops).
4. Add route, API, and telemetry integration checks.
5. Add automated proof tooling:
   - implementation audit script
   - route smoke checks
   - coverage reports that block inflated claims
6. Produce evidence docs from code state (not narrative claims).

## What the Other Agent Should Do (Parallel Track)

1. External content/repo sourcing for candidate game logic/assets.
2. Attribution/license mapping for each imported asset/system.
3. Malware/security screening of imported repositories and artifacts.
4. Art/content generation pipeline (images/audio/video) with rights metadata.
5. Market analysis and genre backlog curation (what to build next by age band).

## Joint Contract (How We Work Together)

1. External agent proposes candidate pack with:
   - source URL
   - license
   - security scan result
   - expected mechanic and target age band
2. This agent integrates only approved candidates into runnable code.
3. This agent runs implementation audit and route checks.
4. Only passing titles move to "built" status in reporting.

## Immediate Execution Order

1. Run `npm run games:audit:implementation` for current truth baseline.
2. Replace high-traffic alias wrappers with real interactive components.
3. Add per-game acceptance tests for newly implemented titles.
4. Re-run audit and publish updated counts.

## Reporting Language Standard

- Safe: "Catalog entries: N; unique runtime implementations: M."
- Unsafe: "N unique AAA games" unless audit and test evidence confirms it.
