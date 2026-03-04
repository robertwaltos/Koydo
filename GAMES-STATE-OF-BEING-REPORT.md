# Koydo Games — Comprehensive State-of-Being Report

> **Generated:** 2026-03-04  
> **Method:** Deep codebase forensic scan (files, exports, routing, quality analysis)  
> **Branch:** `release/master-sync` | Commit `1d69bf90`

---

## Executive Summary

| Metric | Count |
|--------|-------|
| **Total `.tsx` game files on disk** | **416** |
| **Exported from `index.ts`** | 300 (72%) |
| **Routed in `page.tsx`** | 258 (62%) |
| **Listed in `catalog.ts`** | 8 (2%) |
| **Files NOT exported** | 124 (28%) |
| **Duplicate zone-number collisions** | 49 zone numbers (98 files sharing IDs) |
| **TSC compilation** | 0 errors |

### The Hard Truth

The platform claims ~300 games but reality is more nuanced:

- **~160 arcade games** are config wrappers around **one template engine** — they all play identically (timed pick-a-verb quiz), differing only in color themes and noun phrases
- **11 games** are 29-line auto-generated quiz stubs (factory-produced questions)
- **85 zone games** are standalone but follow the same architectural pattern
- **51 `game-*` files** contain real classic game implementations (chess, wordle, tetris, solitaire, etc.) — **none are routed or playable**
- **24 "Set B" zone games** (zone-077 to zone-100) contain real classic games (Tetris, 2048, Snake, Flappy Bird, etc.) — **also orphaned**
- **~60 zone files** (zone-101 to zone-160) are copy-paste duplicates cycling through 6 template names

---

## Architecture: How Games Are Wired

```
User hits /games/[gameId]
          │
          ▼
    ┌─────────────┐
    │  page.tsx    │
    │  (router)    │
    └──────┬──────┘
           │
     ┌─────┴──────┐
     ▼            ▼
CORE_COMPONENTS  LEGACY_COMPONENTS     (no match)
  (8 games)       (~250 games)            │
     │              │                     ▼
     ▼              ▼             ImmersiveArcadeTemplate
  Direct         Direct              (fallback generator)
  render         render
```

### Registration Pipeline

| Layer | File | Purpose | Entries |
|-------|------|---------|---------|
| **Catalog** | `src/lib/games/catalog.ts` | Game metadata (title, age, category, icons) | **8** — only the original core games |
| **Barrel Export** | `src/components/games/index.ts` | TypeScript export from game dir | **300** exports (but 292 are `export { default as ... }`) |
| **Router** | `src/app/games/[gameId]/page.tsx` | URL → component mapping | **258** entries (8 CORE + ~250 LEGACY) |

---

## Quality Tier Breakdown

### TIER 1 — Template Engines (4 files)

The shared engines that power most "games":

| File | Lines | Purpose |
|------|-------|---------|
| `reward-realm-character-gauntlet.tsx` | 632 | Timed multiple-choice gauntlet — ALL arcade-* files delegate here |
| `immersive-arcade-template.tsx` | 600 | Multi-mechanic arcade engine (precision-choice, timed-equation, pattern-scan). Used as page.tsx fallback |
| `quiz-adventure-game.tsx` | 249 | Static quiz engine with lives/rounds |
| `quiz-adventure-factory.tsx` | 172 | Auto-generates 5 quiz questions from a `{domain, goal, tool, risk, metric}` config |

---

### TIER 2 — Real Standalone Educational Games (44 files) ✅ ROUTED

The original Koydo educational games with genuinely unique mechanics:

| File | Lines | Size | Mechanic |
|------|-------|------|----------|
| `letter-catcher.tsx` | 363 | 14.5K | Falling letters + catching |
| `word-builder.tsx` | 397 | 14.7K | Word construction |
| `number-crunch.tsx` | 364 | 14.7K | Math speed sprint |
| `pattern-train.tsx` | 362 | 14.0K | Pattern recognition sequences |
| `story-sequencer.tsx` | 379 | 14.0K | Narrative ordering |
| `memory-match.tsx` | 290 | 10.5K | Card matching pairs |
| `color-mixer.tsx` | 313 | 11.5K | Color blending |
| `shape-safari.tsx` | 381 | 15.2K | Shape recognition |
| `bio-blast.tsx` | 309 | 17.1K | Immune system tower defense |
| `syntax-serpent.tsx` | 364 | 20.4K | Snake game collecting code concepts |
| `aero-architect.tsx` | 287 | 17.4K | Aerospace engineering sim |
| `genetic-garden.tsx` | 300 | 16.7K | Genetics simulation |
| `star-steer.tsx` | 300 | 16.7K | Space navigation |
| `quantum-quirk.tsx` | 352 | 19.2K | Quantum physics puzzles |
| `logic-labyrinth.tsx` | 292 | 17.9K | Logic maze |
| `neural-navigator.tsx` | 237 | 10.8K | Neural network visualization |
| `cipher-city.tsx` | 227 | 13.2K | Cryptography |
| `market-maker.tsx` | 265 | 15.7K | Economics simulation |
| `mars-colony.tsx` | 323 | 12.5K | Mars colonization |
| *(+ 25 more named educational games)* | | | |

**Status:** All exported ✅ | All routed in page.tsx ✅ | 8 in catalog.ts, rest LEGACY only

---

### TIER 3 — Arcade Config Stubs (~155 files) ✅ ROUTED

All are 42–73 line config objects feeding into `RewardRealmCharacterGauntlet`:

```tsx
// Every single one of these looks like this:
const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-006",
  title: "Pixel Glitch Dash",
  mascot: "pixel",
  objectiveNouns: ["latency gate", "render lane", ...],
  promptLeads: ["Visual noise spiking, stabilize", ...],
  correctActions: ["Stitch", "Align", "Balance", ...],
  decoyActions: ["Scramble", "Flood", "Drift", ...],
  // ... timing config
};
export default function Arcade006() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
```

**Gameplay:** A prompt appears ("Visual noise spiking, stabilize {random noun}"), 5 buttons show (mix of correct + decoy verbs), player picks one before timer expires. **All ~155 play identically** — only cosmetic differences.

| Series | Range | Count | Lines | Distinguishing Config |
|--------|-------|-------|-------|-----------------------|
| Core Arcade | arcade-001 to arcade-060 | 60 | 42–65 | Base config |
| Trail Series | arcade-101 to arcade-120 | 20 | ~68 | `roundMode: "single"`, combo target 6 |
| Full Trail | arcade-121 to arcade-125 | 5 | 822–905 | **EXCEPTION: these are full standalone games** |
| Circuit Series | arcade-126 to arcade-129 | 4 | 762–918 | **EXCEPTION: these are full standalone games** |
| Circuit Stubs | arcade-130 to arcade-150 | 21 | ~68 | `allowTrapDecoys: true`, combo target 9 |
| Garden Series | arcade-151 to arcade-160 | 10 | ~68 | `allowTrapDecoys: true`, combo target 7 |

---

### TIER 4 — Quiz Factory Stubs (11 files) ✅ ROUTED

29-line wrappers that pass a `{domain, goal, tool, risk, metric}` blob to `quiz-adventure-factory.tsx`, which auto-generates 5 identical-structure questions via string interpolation. **Every one plays identically.**

| File | Config Domain |
|------|--------------|
| `global-harmony.tsx` | "community governance" |
| `history-hacker.tsx` | "historical analysis" |
| `linguist-lookout.tsx` | "language patterns" |
| `nano-nexus.tsx` | "nanotechnology" |
| `protein-painter.tsx` | "protein folding" |
| `quantum-cascade.tsx` | "quantum systems" |
| `rhyme-river.tsx` | "phonetic patterns" |
| `stellar-state.tsx` | "stellar evolution" |
| `story-smith.tsx` | "narrative construction" |
| `synthetic-architect.tsx` | "synthetic biology" |
| `word-woods.tsx` | "vocabulary building" |

---

### TIER 5 — Real Zone Games (zone-041 to zone-076) ✅ ROUTED

85 standalone zone games with unique educational themes. Each is 12–26 KB / 260–530 lines with its own game logic, but all follow the same architectural pattern:

```
imports → type Phase = "ready" | "playing" | "paused" | "complete"
→ useReducer state machine → seeded round generation
→ MascotFriend + PhysicalButton UI chrome
```

These are genuinely different games with unique themes (signal rescue, math rail, story signal, lab sorting, rhythm forge, cipher sprint, etc.) but structurally homogeneous.

**Status:** All exported ✅ | All routed ✅

---

### TIER 6 — Full Standalone Arcade Games (9 files) ✅ ROUTED

These arcade files broke free of the template pattern and contain full unique game implementations:

| File | Lines | Size | Game Type |
|------|-------|------|-----------|
| `arcade-061-pixel-prism-patrol.tsx` | 363 | 16.0K | Lane-based safety patrol |
| `arcade-062-spark-factor-furnace.tsx` | 372 | 17.1K | Factor math game |
| `arcade-063-echo-claim-cascade.tsx` | 359 | 16.4K | Fact-checking cascade |
| `arcade-064-luna-sequence-symphony.tsx` | 420 | 18.1K | Musical sequence game |
| `arcade-065-terra-ecosystem-rescue.tsx` | 493 | 21.3K | Ecosystem management |
| `arcade-121-breeze-trail.tsx` | 839 | 31.6K | Sky item collection with wind physics |
| `arcade-122-sprout-trail.tsx` | 905 | 33.4K | Plant growth trail |
| `arcade-123-pebble-trail.tsx` | 827 | 31.5K | Stone physics game |
| `arcade-124-nimbus-trail.tsx` | 822 | 29.9K | Cloud navigation |
| `arcade-125-flare-trail.tsx` | 857 | 31.1K | Fire/energy trail |
| `arcade-126-sky-circuit.tsx` | 797 | 30.0K | Sky racing circuit |
| `arcade-127-river-circuit.tsx` | 762 | 28.7K | River navigation |
| `arcade-128-echo-circuit.tsx` | 918 | 33.5K | Echo-based circuit game |
| `arcade-129-luna-circuit.tsx` | 821 | 30.0K | Lunar circuit challenge |

---

### TIER 7 — Classic Game Implementations (51 files) ❌ ORPHANED

**These are fully functional, complete game implementations that NO USER CAN REACH.**

#### 7A: Exported from index.ts but NOT routed in page.tsx (16 files)

| File | Lines | Size | Classic Game |
|------|-------|------|-------------|
| `game-2048.tsx` | 420 | 18.1K | 2048 |
| `game-tetris.tsx` | 453 | 20.3K | Tetris |
| `game-snake.tsx` | 381 | 13.4K | Snake |
| `game-flappy.tsx` | 334 | 11.2K | Flappy Bird |
| `game-connect-four.tsx` | 347 | 14.9K | Connect Four |
| `game-crossword.tsx` | 486 | 19.7K | Crossword |
| `game-sliding-puzzle.tsx` | 287 | 11.6K | 15-Puzzle |
| `game-word-rescue.tsx` | 292 | 14.2K | Word Rescue |
| `game-typing-speed.tsx` | 326 | 14.6K | Typing Speed |
| `game-math-sprint.tsx` | 341 | 12.0K | Math Sprint |
| `game-factors.tsx` | 389 | 13.4K | Factor Trees |
| `game-make-24.tsx` | 371 | 13.7K | Make 24 |
| `game-numm-match.tsx` | 314 | 11.5K | Number Match |
| `game-connections.tsx` | 368 | 14.2K | NYT Connections |
| `game-math-trainer.tsx` | 379 | 13.4K | Math Trainer |
| `game-word-pluck.tsx` | 308 | 12.0K | Word Pluck |

#### 7B: NOT exported AND NOT routed (35 files)

| File | Lines | Size | Classic Game |
|------|-------|------|-------------|
| `game-chess.tsx` | 839 | 31.9K | Chess |
| `game-solitaire.tsx` | 793 | 29.0K | Klondike Solitaire |
| `game-logic-grid.tsx` | 657 | 23.2K | Logic Grid |
| `game-checkers.tsx` | 624 | 21.5K | Checkers |
| `game-bubble-shooter.tsx` | 551 | 19.0K | Bubble Shooter |
| `game-minesweeper.tsx` | 528 | 18.8K | Minesweeper |
| `game-reversi.tsx` | 500 | 18.2K | Reversi/Othello |
| `game-frogger.tsx` | 430 | 15.0K | Frogger |
| `game-wordle.tsx` | 423 | 16.4K | Wordle |
| `game-sokoban.tsx` | 417 | 15.7K | Sokoban |
| `game-simon.tsx` | 398 | 14.5K | Simon |
| `game-breakout.tsx` | 380 | 12.6K | Breakout |
| `game-binary-puzzle.tsx` | 375 | 14.9K | Binary Puzzle |
| `game-tic-tac-toe.tsx` | 367 | 14.7K | Tic-Tac-Toe |
| `game-pong.tsx` | 337 | 12.0K | Pong |
| `game-bomberman.tsx` | 282 | 11.8K | Bomberman |
| `game-asteroids.tsx` | 272 | 10.5K | Asteroids |
| `game-space-invaders.tsx` | 263 | 10.7K | Space Invaders |
| `game-missile-command.tsx` | 258 | 10.2K | Missile Command |
| `game-spider-solitaire.tsx` | 254 | 10.5K | Spider Solitaire |
| `game-duck-hunt.tsx` | 245 | 9.4K | Duck Hunt |
| `game-sudoku.tsx` | 237 | 9.2K | Sudoku |
| `game-dot-connect.tsx` | 216 | 8.0K | Dot Connect |
| `game-anagram.tsx` | 211 | 9.8K | Anagram |
| `game-reaction-time.tsx` | 197 | 7.8K | Reaction Time |
| `game-tower-stack.tsx` | 191 | 7.7K | Tower Stack |
| `game-cookie-clicker.tsx` | 183 | 7.7K | Cookie Clicker |
| `game-mahjong.tsx` | 179 | 7.4K | Mahjong |
| `game-memory-match.tsx` | 174 | 7.2K | Memory Match |
| `game-number-dots.tsx` | 171 | 7.0K | Number Dots |
| `game-whack-a-mole.tsx` | 171 | 7.2K | Whack-a-Mole |
| `game-trivia-quiz.tsx` | 169 | 8.3K | Trivia Quiz |
| `game-hangman.tsx` | 166 | 7.6K | Hangman |
| `game-word-scramble.tsx` | 164 | 7.0K | Word Scramble |
| `game-color-flood.tsx` | 154 | 6.3K | Color Flood |

**Total orphaned code: ~16,500 lines / ~600 KB of real game logic sitting unused.**

#### 7C: Orphaned "Set B" Zone Games — Real Classic Games (24 files)

A second agent built classic arcade games as zone-format wrappers but they collide with already-registered zone numbers:

| File | Lines | Size | Actual Game |
|------|-------|------|-------------|
| `zone-077-pixel-block-drop.tsx` | 467 | 18.2K | **Tetris** |
| `zone-078-spark-breakout-surge.tsx` | ~290 | 11.5K | **Breakout** |
| `zone-079-luna-zigzag-run.tsx` | ~220 | 8.5K | **Zigzag Runner** |
| `zone-080-echo-word-rescue.tsx` | ~310 | 12.4K | **Word Rescue** |
| `zone-081-terra-minefield-map.tsx` | ~300 | 12.0K | **Minesweeper** |
| `zone-082-pixel-shaft-drop.tsx` | ~290 | 11.5K | **Shaft Drop** |
| `zone-083-luna-sequence-flash.tsx` | ~260 | 10.1K | **Simon/Sequence** |
| `zone-084-echo-anagram-blast.tsx` | ~320 | 12.6K | **Anagram** |
| `zone-085-spark-idle-forge.tsx` | ~330 | 13.2K | **Idle Clicker** |
| `zone-086-terra-tile-pair.tsx` | ~280 | 11.2K | **Memory Pairs** |
| `zone-087-pixel-merge-2048.tsx` | 314 | 12.2K | **2048** |
| `zone-088-spark-flap-surge.tsx` | 274 | 8.5K | **Flappy Bird** |
| `zone-089-luna-sudoku-grid.tsx` | ~270 | 10.7K | **Sudoku** |
| `zone-090-echo-connect-drop.tsx` | ~220 | 8.6K | **Connect Four** |
| `zone-091-terra-whack-squad.tsx` | ~220 | 8.5K | **Whack-a-Mole** |
| `zone-092-pixel-card-match.tsx` | ~200 | 7.8K | **Card Match** |
| `zone-093-spark-snake-trail.tsx` | 247 | 8.9K | **Snake** |
| `zone-094-luna-word-grid.tsx` | ~230 | 9.2K | **Word Grid** |
| `zone-095-echo-bubble-burst.tsx` | 336 | 12.3K | **Bubble Shooter** |
| `zone-096-terra-crossword.tsx` | ~200 | 8.0K | **Crossword** |
| `zone-097-pixel-type-rush.tsx` | ~230 | 9.1K | **Typing Rush** |
| `zone-098-spark-dice-roll.tsx` | ~260 | 10.5K | **Dice Game** |
| `zone-099-luna-endless-run.tsx` | ~230 | 9.1K | **Endless Runner** |
| `zone-100-echo-reaction-pad.tsx` | ~280 | 11.0K | **Reaction Time** |

---

### TIER 8 — Copy-Paste Duplicates (~60 files) ❌ ORPHANED

From zone-101 to zone-160, the non-exported files cycle through 6 template names:

```
spark-reactor-convoy → echo-signal-tribunal → terra-frontline-wardens
→ luna-skyline-set → pixel-sentinel-lattice → spark-vault-thrust → (repeat)
```

These are **byte-for-byte identical** except for the zone number in 5 string literals. They inflate the file count by ~60 files with zero unique content.

---

### TIER 9 — Unregistered Arcade Files (2 files) ❌ ORPHANED

| File | Status |
|------|--------|
| `arcade-066-spark-thruster-trial` | Not exported, not routed |
| `arcade-067-echo-truthline-protocol` | Not exported, not routed |

---

## Agent Attribution Analysis

Based on file patterns, naming conventions, and code architecture, at least **4 distinct agents/sessions** built games:

| Agent/Session | Signature | Files Built | Quality |
|---------------|-----------|-------------|---------|
| **Agent 1 — "Core Educational"** | Named games (letter-catcher, bio-blast, syntax-serpent), proper Koydo game types, `GameDifficulty` + `GameResult` | ~44 educational games | ⭐⭐⭐⭐⭐ Unique mechanics, real gameplay |
| **Agent 2 — "Arcade Factory"** | arcade-001 to arcade-065, RewardRealmCharacterGauntlet configs, mascot naming (pixel/spark/echo/luna/terra) | ~155 arcade configs + engine | ⭐⭐ All identical gameplay, cosmetic variation only |
| **Agent 3 — "Zone Builder"** | zone-041 to zone-125 (Set A), consistent pattern with seeded rounds, Phase state machine | ~85 zone games | ⭐⭐⭐⭐ Unique themes, same architecture |
| **Agent 4 — "Classic Games Porter"** | game-* files, zone-077 to zone-100 (Set B), direct implementations of iconic games | ~75 classic games | ⭐⭐⭐⭐⭐ Real games, completely orphaned |
| **Agent 5 — "Zone Duplicator"** | zone-101 to zone-160 (Set B duplicates), cycling 6 names | ~60 carbon copies | ⭐ Zero unique value |

---

## Critical Issues

### 🔴 CRITICAL: 51 Real Games Are Unreachable

Chess, Wordle, Tetris, Solitaire, Minesweeper, Breakout, Pong, Bomberman, Space Invaders, Frogger, Sokoban, Reversi, Checkers, and 38 more fully-implemented classic games exist in the codebase but **no user can ever play them**. They are not wired into `page.tsx` routing.

**To fix:** Add entries to `LEGACY_COMPONENTS` in page.tsx and/or create catalog entries.

### 🔴 CRITICAL: 49 Zone Number Collisions

Zones 077–125 each have TWO files with the same zone number but different game names. Only the "Set A" versions are registered. The "Set B" versions (which contain actual classic games like Tetris, 2048, Snake) are invisible.

**To fix:** Renumber Set B games to zone-161+ or give them new IDs entirely.

### 🟡 WARNING: 155 Arcade Games Are the Same Game

All arcade config stubs produce identical gameplay — a timed verb-selection quiz with different cosmetic themes. Users who play arcade-001 have played arcade-150. This inflates the game count without adding content variety.

### 🟡 WARNING: 11 Quiz Factory Games Are Auto-Generated

The quiz-adventure-factory generates identical question structures with string interpolation. These aren't educational content — they're placeholder templates.

### 🟡 WARNING: ~60 Zone Duplicates Are Dead Weight

The zone-101+ orphaned files are copy-paste duplicates that add ~1MB of redundant code to the build.

### 🟢 INFO: catalog.ts Has Only 8 Entries

Only the 8 original CORE_COMPONENTS games have full catalog metadata. The ~250 LEGACY_COMPONENTS games have no catalog entries — they work because page.tsx falls back to ID-based lookup.

---

## Quantified Real Game Content

| Category | Files | Unique Games | Routable | Lines of Code |
|----------|-------|-------------|----------|---------------|
| **Genuinely unique educational games** | 44 | 44 | ✅ Yes | ~12,000 |
| **Standalone zone games** | 85 | 85 | ✅ Yes | ~32,000 |
| **Full arcade games (061-065, 121-129)** | 14 | 14 | ✅ Yes | ~8,500 |
| **Classic game ports (game-*)** | 51 | 51 | ❌ No | ~16,500 |
| **Classic game ports (zone Set B)** | 24 | 24 | ❌ No | ~6,500 |
| **Arcade config stubs** | 155 | **1** (same game) | ✅ Yes | ~8,000 |
| **Quiz factory stubs** | 11 | **1** (same game) | ✅ Yes | ~320 |
| **Zone copy-paste duplicates** | 60 | **0** (duplicates) | ❌ No | ~25,000 |
| **Template engines** | 4 | n/a | n/a | ~1,650 |
| **TOTAL** | **416** | **~220 unique** | **145 truly different + 166 cosmetic** | **~110,000** |

### Bottom Line

**Unique playable games today: ~145** (44 educational + 85 zone + 14 full arcade + 2 template-driven)  
**Unique games built but unreachable: ~75** (51 game-* + 24 zone Set B)  
**"Games" that are cosmetic reskins of one template: ~166** (155 arcade + 11 quiz)  
**Pure dead weight duplicates: ~60** (zone copy-paste clones)

---

## Recommended Actions (Priority Order)

1. **Wire up the 51 `game-*` files** — Add them to index.ts exports and page.tsx LEGACY_COMPONENTS. These are the highest-value games (chess, wordle, tetris, solitaire, minesweeper) and require only ~100 lines of registration code.

2. **Renumber and wire up Set B zone games** (zone-077 to zone-100 classics) — Assign them zone-161+ IDs, export, and route. These are real implementations of Tetris, 2048, Snake, Flappy Bird, etc.

3. **Delete the ~60 zone duplicate files** (zone-101 to zone-160 orphaned copies) — These are byte-for-byte clones inflating the codebase by ~1MB.

4. **Expand catalog.ts** — Add metadata entries for all 250+ LEGACY games so they appear in the game browser with proper titles, categories, age ranges, and icons.

5. **Differentiate arcade games** — The 155 config stubs should either get genuinely different mechanics or be consolidated down to ~20 representative variants.

6. **Replace quiz factory stubs** — The 11 auto-generated quiz games should be rewritten with hand-crafted educational content or removed.

---

*Report compiled from direct codebase analysis — no documentation consulted.*
