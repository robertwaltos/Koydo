# REFACTOR-QUEUE.md

Last Updated: 2026-03-03
Status: Planning only (no refactor changes executed)
Scope: Read-only refactor map for concurrent-agent environment

## Guardrails
- Do not execute refactors from this file while multiple agents are modifying the codebase.
- Do not change landing/sign-up background images or related background asset styling without explicit user permission.
- Convert each queued item into an isolated branch/PR when execution starts.

## Priority Matrix

| Priority | Area | Why it needs refactor | Risk if unchanged | Effort |
|---|---|---|---|---|
| P0 | Global auth/fetch interception | Central monkeypatch creates implicit redirects and hard-to-debug side effects. | High (runtime/test nondeterminism) | M |
| P0 | Game player route orchestration | Single page mixes view + domain + network + premium + submission logic. | High (regressions, maintenance drag) | L |
| P1 | Game catalog generation structure | 300-game generation and metadata live in one large module. | Medium (hard to validate/extend) | M |
| P1 | Playwright test architecture | Snapshot-heavy suites rely on unstable runtime conditions. | High (false failures, slow CI) | M |
| P1 | Provider stack composition | App providers contain too many cross-cutting concerns in one tree. | Medium (coupling, startup fragility) | M |
| P2 | Docs and handoff sprawl | Operational direction duplicated across many root docs. | Medium (agent confusion) | S |

## Detailed Queue

### P0-1: Replace global fetch monkeypatch with explicit auth interceptor
- Current hotspot:
  - `src/app/components/session-expiry-fetch-guard.tsx`
- Issues:
  - Global side effects on all fetch calls.
  - Redirect behavior can interfere with tests and non-auth endpoints.
- Target shape:
  - `src/lib/auth/fetch-interceptor.ts` (pure helper)
  - optional route/layout-level opt-in wrapper.
- Acceptance criteria:
  - No global monkeypatch.
  - Auth redirects only occur in intended surfaces.
  - Playwright unauthenticated flows remain stable.

### P0-2: Decompose game player route
- Current hotspot:
  - `src/app/games/[gameId]/page.tsx`
- Issues:
  - Overloaded component with many responsibilities.
- Target shape:
  - `useGameCatalogEntry.ts`
  - `useAgeGate.ts`
  - `usePremiumGameState.ts`
  - `useNetworkChallenges.ts`
  - `useGameSubmission.ts`
  - presentational shell + mode-specific renderer.
- Acceptance criteria:
  - Page component becomes orchestration-only.
  - hooks have isolated tests/mocks.
  - no behavior change in scoring/premium gating.

### P1-1: Split catalog into data + generator modules
- Current hotspot:
  - `src/lib/games/catalog.ts`
- Issues:
  - High cognitive load; hard to validate seeds/rotations.
- Target shape:
  - `catalog/core-games.ts`
  - `catalog/legacy-seeds.ts`
  - `catalog/arcade-generator.ts`
  - `catalog/index.ts`
  - optional Zod schema validation for generated records.
- Acceptance criteria:
  - Source of truth unchanged (`GAME_CATALOG` still 300).
  - deterministic generation preserved.
  - safety/age metadata validated.

### P1-2: Stabilize Playwright architecture
- Current hotspots:
  - `playwright.config.ts`
  - `e2e/visual-regression.spec.ts`
  - `e2e/dark-mode.spec.ts`
  - `e2e/i18n-layout.spec.ts`
  - `e2e/accessibility.spec.ts`
- Issues:
  - snapshot churn and runtime-related flakiness.
- Target shape:
  - shared test utilities for setup (consent/theme/locale/auth state).
  - isolate visual tests from behavioral assertions.
  - deterministic server profile for snapshots.
- Acceptance criteria:
  - stable reruns on same commit.
  - reduced flaky retries.
  - clear separation of snapshot-update workflow.

### P1-3: Provider composition cleanup
- Current hotspot:
  - `src/app/app-providers.tsx`
- Issues:
  - deep provider nesting and implicit startup dependencies.
- Target shape:
  - grouped providers:
    - `AppShellProviders`
    - `UserPreferenceProviders`
    - `TelemetryExperienceProviders`
- Acceptance criteria:
  - unchanged user-facing behavior.
  - easier provider-level testing.
  - clearer ownership boundaries.

### P2-1: Documentation consolidation
- Current hotspots:
  - root-level roadmap/handoff/checklist markdown sprawl.
- Issues:
  - duplicated instructions and stale guidance risk.
- Target shape:
  - `/docs/roadmap/`
  - `/docs/handoff/`
  - `/docs/testing/`
  - one root index linking canonical docs.
- Acceptance criteria:
  - no conflicting operational instructions.
  - agents can find latest status within 2 clicks.

## Execution Order (When Safe)
1. P0-1 auth/fetch interceptor
2. P0-2 game player decomposition
3. P1-1 catalog split
4. P1-3 provider composition
5. P1-2 Playwright stabilization pass
6. P2-1 docs consolidation

## Suggested Branching Plan (Future)
- `refactor/p0-auth-interceptor`
- `refactor/p0-game-player-decomposition`
- `refactor/p1-game-catalog-modularization`
- `refactor/p1-provider-composition`
- `refactor/p1-playwright-stability`
- `refactor/p2-docs-consolidation`

## Blocking Conditions
- Active concurrent edits in same target files.
- Test baseline refresh occurring in parallel.
- Ongoing release/deploy freeze windows.

## Notes for Marketing/Non-Engineering Review
- This file is purely engineering structure planning.
- It does not change game content, marketing assets, or user-facing copy.
- Game inventory and interaction summary remain in:
  - `D:\PythonProjects\Koydo\GAMES-300-INTERACTION-HANDBOOK.md`
