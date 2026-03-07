# Game Distribution & Control Policy

Last updated: 2026-03-06

## For All Agents: Mandatory Requirements

Every game in the Koydo catalog MUST meet ALL of the following requirements before shipping:

### 1. Disable Controls
- Every game MUST support a disable toggle in the **parental console** (`/parent/dashboard`)
- Every game MUST support a disable toggle in the **owner/admin console** (`/admin/settings`)
- When disabled, the game must not appear in any game listing, search result, or recommendation
- The disable state is stored per-profile (parent) or per-tenant (owner)
- Implementation: Check `feature-registry.ts` and the `disabled_games` array on the profile/tenant

### 2. Distribution Targets
Every game is distributed to:

| Target | Required | Notes |
|--------|----------|-------|
| **Main Koydo App** | YES | All games appear in the `/games` hub |
| **Games Microapp** | YES | Dedicated microapp (`games.koydo.com`) with the full catalog |
| **Subject Microapps** | OPTIONAL | Games can be gated to subject-specific microapps (e.g., math games on `math.koydo.com`) |

### 3. Age Gating
- Every game has `ageMin` and `ageMax` in its catalog entry
- Games outside a user's age range are hidden (not just disabled)
- `ageLockRecommended: true` means the game requires parental unlock for users under 13
- `safeForChildren: true` is MANDATORY for all games (we are COPPA-compliant)

### 4. Integration Checklist (New Games)
When building a new game, you MUST:
1. Create the component at `src/components/games/game-{slug}.tsx` (or `{prefix}-{slug}.tsx`)
2. Add a lazy import to `src/components/games/lazy-registry.ts`
3. Add the game ID to `LEGACY_COMPONENTS` in `src/app/games/[gameId]/page.tsx`
4. Add a `RegisteredGame` entry to the appropriate array in `src/lib/games/catalog.ts`
5. Update `docs/game-licensing.md` if the game uses any third-party concepts
6. Verify the game works at `/games/{slug}`
7. Verify it appears in the `/games` hub with correct category/age filtering

### 5. Quality Standards (2026)
- Minimum 200 lines of custom game logic (no template wrappers)
- Framer Motion for UI animations (not raw CSS transitions)
- Tailwind CSS for styling (match existing stone/white/glass design system)
- Haptic feedback via `navigator.vibrate?.()` on key interactions
- Mascot integration via `emitLegacyGameComplete()` event system
- Phase management: ready -> playing -> paused -> complete
- Mobile-first responsive design (touch targets >= 44px)
- Score submission via the legacy telemetry bridge

### 6. Strictly Forbidden
- Template wrappers that reuse the same mechanic engine with different colors/labels
- Games that import `ImmersiveArcadeTemplate` (removed from codebase)
- Phantom catalog entries with no matching component file
- Games with hardcoded English-only text (use i18n keys where possible)
- Games with external network calls (all game data must be self-contained)
- Games that track user behavior without going through the analytics consent layer

## Catalog Counts
- Current: 246 real games (as of 2026-03-06)
- All 246 games have unique component files with custom game logic
- Each game is genuinely unique — no template wrappers
