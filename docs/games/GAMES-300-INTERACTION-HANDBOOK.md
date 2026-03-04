# Koydo 300 Games - Interaction Handbook

Generated: 2026-03-03T17:34:13.528Z

## Scope
- Canonical source: `src/lib/games/catalog.ts`.
- Total registered games: `300`.
- This document explains serving, interactions, API touchpoints, and includes the full game index for agent-safe automation.

## Catalog Summary
- Modes: core=8, legacy=57, arcade=235.
- Categories: literacy=21, math=20, logic=20, creative=18, science=18, 🚀=18, 🌌=17, 🛸=17, ⚡=17, 🎮=17, 🧠=17, 🧩=17, 🎨=17, 🌠=16, 🏁=16, arcade=17, adventure=17.
- Mechanics: core=8, precision-choice=43, sequence-recall=43, lane-sort=42, /bg-day-v1.jpg=41, /bg-bottom.jpg=41, /hero-light-07.jpg=41, /hero-family.jpg=41.
- Safety: all games are flagged `safeForChildren=true`; age-lock is enforced at runtime based on profile/selected age.
- Rendering tier: all games are tagged `graphicsTier=4k-ready`; premium flow enables optional `render=cinematic-rtx` mode.

## How Games Are Served
- Hub listing: `GET /games` via `src/app/games/page.tsx` renders `GAME_CATALOG` and local age filter UI.
- Player route: `GET /games/[gameId]` via `src/app/games/[gameId]/page.tsx`.
- Core games use typed components from `src/components/games/*` and submit scored results.
- Legacy games map `gameId` to specific Gemini-era components from `LEGACY_COMPONENTS`.
- Arcade/Ultra games use `ImmersiveArcadeTemplate` with deterministic seed-based rounds by `(gameId, difficulty)`.

## Runtime Interaction Contract (for AI Agents)
- Entry params: `difficulty=easy|medium|hard`, `style=solo|party`, optional `render=cinematic-rtx`.
- Age gate: if learner age is outside `[ageMin, ageMax]`, guardian unlock phrase is required before gameplay.
- Result submission endpoint: `POST /api/games/state` (auth + rate limits + scoring normalization).
- Premium network state: `GET/POST /api/games/network-state` for challenge join + leaderboard state.
- Premium extras read by player shell:
  - `/api/games/premium/status`
  - `/api/games/premium/seasons`
  - `/api/games/premium/clans`
  - `/api/games/premium/rooms`
  - `/api/games/premium/tournaments`
- Sharing: web share + clipboard fallback is built into immersive template.

## Database/State Implications
- Game outcomes can propagate to gamification state, challenge leaderboards, and premium seasonal/clan stats.
- Endpoints enforce auth and IP rate limits; premium endpoints return upgrade metadata on non-premium access.

## Full Index (300 Games)
| # | id | title | mode | category | ages | mechanic | edu_weight | age_lock |
|---|---|---|---|---|---|---|---:|---|
| 1 | letter-catcher | Letter Catcher | core | literacy | 3-6 | core | 95 | no |
| 2 | word-builder | Word Builder | core | literacy | 4-7 | core | 95 | no |
| 3 | number-crunch | Number Crunch | core | math | 4-8 | core | 95 | no |
| 4 | pattern-train | Pattern Train | core | logic | 3-7 | core | 90 | no |
| 5 | story-sequencer | Story Sequencer | core | literacy | 4-8 | core | 90 | no |
| 6 | memory-match | Memory Match | core | logic | 3-8 | core | 85 | no |
| 7 | color-mixer | Color Mixer | core | creative | 3-7 | core | 80 | no |
| 8 | shape-safari | Shape Safari | core | math | 3-7 | core | 85 | no |
| 9 | neural | Neural Navigator | legacy | logic | 8-13 | precision-choice | 82 | no |
| 10 | fraction | Fraction Forge | legacy | creative | 9-15 | sequence-recall | 77 | no |
| 11 | vocabulary | Vocabulary Voyager | legacy | science | 10-17 | lane-sort | 72 | yes |
| 12 | artistic | Artistic Algorithms | legacy | math | 11-16 | /bg-day-v1.jpg | 67 | yes |
| 13 | ethical | Ethical Engine | legacy | literacy | 12-17 | /bg-bottom.jpg | 62 | yes |
| 14 | synthesis | Synthesis Sphere | legacy | 🚀 | 8-15 | /hero-light-07.jpg | 57 | no |
| 15 | velocity | Velocity Vector | legacy | 🌌 | 9-14 | /hero-family.jpg | 52 | no |
| 16 | logic | Logical Link | legacy | 🛸 | 10-16 | precision-choice | 47 | yes |
| 17 | canvas | Cosmic Canvas | legacy | ⚡ | 11-17 | sequence-recall | 42 | yes |
| 18 | chronicle | Chronicle Case | legacy | 🎮 | 12-17 | lane-sort | 82 | yes |
| 19 | syntax | Syntax Serpent | legacy | 🧠 | 8-14 | /bg-day-v1.jpg | 77 | no |
| 20 | genetic | Genetic Garden | legacy | 🧩 | 9-16 | /bg-bottom.jpg | 72 | no |
| 21 | quantum | Quantum Quest | legacy | 🎨 | 10-15 | /hero-light-07.jpg | 67 | yes |
| 22 | market | Market Maker | legacy | 🌠 | 11-17 | /hero-family.jpg | 62 | yes |
| 23 | orbit | Orbit Operator | legacy | 🏁 | 12-17 | precision-choice | 57 | yes |
| 24 | cipher | Cipher City | legacy | arcade | 8-13 | sequence-recall | 52 | no |
| 25 | biome | Biome Builder | legacy | adventure | 9-15 | lane-sort | 47 | no |
| 26 | rhythm | Rhythm Rules | legacy | logic | 10-17 | /bg-day-v1.jpg | 42 | yes |
| 27 | tectonic | Tectonic Trek | legacy | creative | 11-16 | /bg-bottom.jpg | 82 | yes |
| 28 | flora | Flora Fusion | legacy | science | 12-17 | /hero-light-07.jpg | 77 | yes |
| 29 | bot | Bot Builder | legacy | math | 8-15 | /hero-family.jpg | 72 | no |
| 30 | eco | Eco Engineer | legacy | literacy | 9-14 | precision-choice | 67 | no |
| 31 | aero | Aero Architect | legacy | 🚀 | 10-16 | sequence-recall | 62 | yes |
| 32 | histo | Histo Hunt | legacy | 🌌 | 11-17 | lane-sort | 57 | yes |
| 33 | nano | Nano Navigator | legacy | 🛸 | 12-17 | /bg-day-v1.jpg | 52 | yes |
| 34 | quantum-quirk | Quantum Quirk | legacy | ⚡ | 8-14 | /bg-bottom.jpg | 47 | no |
| 35 | star-steer | Star Steer | legacy | 🎮 | 9-16 | /hero-light-07.jpg | 42 | no |
| 36 | logic-labyrinth | Logic Labyrinth | legacy | 🧠 | 10-15 | /hero-family.jpg | 82 | yes |
| 37 | bio-blast | Bio Blast | legacy | 🧩 | 11-17 | precision-choice | 77 | yes |
| 38 | ethos-engine | Ethos Engine | legacy | 🎨 | 12-17 | sequence-recall | 72 | yes |
| 39 | echo-expedition | Echo's Expedition | legacy | 🌠 | 8-13 | lane-sort | 67 | no |
| 40 | terra-trek | Terra's Trek | legacy | 🏁 | 9-15 | /bg-day-v1.jpg | 62 | no |
| 41 | spark-quest | Spark's Spark-Quest | legacy | arcade | 10-17 | /bg-bottom.jpg | 57 | yes |
| 42 | pixel-path | Pixel's Path | legacy | adventure | 11-16 | /hero-light-07.jpg | 52 | yes |
| 43 | luna-legend | Luna's Legend | legacy | logic | 12-17 | /hero-family.jpg | 47 | yes |
| 44 | circuit-crusader | Circuit Crusader | legacy | creative | 8-15 | precision-choice | 42 | no |
| 45 | gravity-goliath | Gravity Goliath | legacy | science | 9-14 | sequence-recall | 82 | no |
| 46 | protein-painter | Protein Painter | legacy | math | 10-16 | lane-sort | 77 | yes |
| 47 | linguist-lookout | Linguist Lookout | legacy | literacy | 11-17 | /bg-day-v1.jpg | 72 | yes |
| 48 | fusion-founder | Fusion Founder | legacy | 🚀 | 12-17 | /bg-bottom.jpg | 67 | yes |
| 49 | stellar-state | Stellar State | legacy | 🌌 | 8-14 | /hero-light-07.jpg | 62 | no |
| 50 | neural-net | Neural Net | legacy | 🛸 | 9-16 | /hero-family.jpg | 57 | no |
| 51 | climate-commander | Climate Commander | legacy | ⚡ | 10-15 | precision-choice | 52 | yes |
| 52 | history-hacker | History Hacker | legacy | 🎮 | 11-17 | sequence-recall | 47 | yes |
| 53 | nano-nexus | Nano Nexus | legacy | 🧠 | 12-17 | lane-sort | 42 | yes |
| 54 | mars-colony | Mars Colony | legacy | 🧩 | 8-13 | /bg-day-v1.jpg | 82 | no |
| 55 | quantum-supremacy | Quantum Supremacy | legacy | 🎨 | 9-15 | /bg-bottom.jpg | 77 | no |
| 56 | synthetic-architect | Synthetic Architect | legacy | 🌠 | 10-17 | /hero-light-07.jpg | 72 | yes |
| 57 | global-harmony | Global Harmony | legacy | 🏁 | 11-16 | /hero-family.jpg | 67 | yes |
| 58 | evolution-prime | Evolution Prime | legacy | arcade | 12-17 | precision-choice | 62 | yes |
| 59 | word-woods | Word Woods | legacy | adventure | 8-15 | sequence-recall | 57 | no |
| 60 | story-smith | Story Smith | legacy | logic | 9-14 | lane-sort | 52 | no |
| 61 | alphabet-airship | Alphabet Airship | legacy | creative | 10-16 | /bg-day-v1.jpg | 47 | yes |
| 62 | sentence-safari | Sentence Safari | legacy | science | 11-17 | /bg-bottom.jpg | 42 | yes |
| 63 | rhyme-river | Rhyme River | legacy | math | 12-17 | /hero-light-07.jpg | 82 | yes |
| 64 | count-constellations | Count Constellations | legacy | literacy | 8-14 | /hero-family.jpg | 77 | no |
| 65 | fraction-factory | Fraction Factory | legacy | 🚀 | 9-16 | precision-choice | 72 | no |
| 66 | arcade-001 | Aurora Nebula Dash | arcade | arcade | 6-12 | precision-choice | 85 | no |
| 67 | arcade-002 | Aurora Comet Clash | arcade | adventure | 7-14 | sequence-recall | 78 | no |
| 68 | arcade-003 | Aurora Pixel Quest | arcade | logic | 8-16 | lane-sort | 71 | no |
| 69 | arcade-004 | Aurora Moonlight Sprint | arcade | creative | 9-15 | /bg-day-v1.jpg | 64 | no |
| 70 | arcade-005 | Aurora Skyline Drift | arcade | science | 10-17 | /bg-bottom.jpg | 57 | yes |
| 71 | arcade-006 | Aurora Starlight Arena | arcade | math | 6-14 | /hero-light-07.jpg | 50 | no |
| 72 | arcade-007 | Aurora Echo Run | arcade | literacy | 7-13 | /hero-family.jpg | 43 | no |
| 73 | arcade-008 | Aurora Velocity Vault | arcade | 🚀 | 8-15 | precision-choice | 36 | no |
| 74 | arcade-009 | Aurora Mystic Loop | arcade | 🌌 | 9-17 | sequence-recall | 29 | no |
| 75 | arcade-010 | Aurora Prism Pulse | arcade | 🛸 | 10-16 | lane-sort | 82 | yes |
| 76 | arcade-011 | Nova Nebula Dash | arcade | ⚡ | 6-13 | /bg-day-v1.jpg | 75 | no |
| 77 | arcade-012 | Nova Comet Clash | arcade | 🎮 | 7-15 | /bg-bottom.jpg | 68 | no |
| 78 | arcade-013 | Nova Pixel Quest | arcade | 🧠 | 8-14 | /hero-light-07.jpg | 61 | no |
| 79 | arcade-014 | Nova Moonlight Sprint | arcade | 🧩 | 9-16 | /hero-family.jpg | 54 | no |
| 80 | arcade-015 | Nova Skyline Drift | arcade | 🎨 | 10-17 | precision-choice | 47 | yes |
| 81 | arcade-016 | Nova Starlight Arena | arcade | 🌠 | 6-12 | sequence-recall | 40 | no |
| 82 | arcade-017 | Nova Echo Run | arcade | 🏁 | 7-14 | lane-sort | 33 | no |
| 83 | arcade-018 | Nova Velocity Vault | arcade | arcade | 8-16 | /bg-day-v1.jpg | 26 | no |
| 84 | arcade-019 | Nova Mystic Loop | arcade | adventure | 9-15 | /bg-bottom.jpg | 79 | no |
| 85 | arcade-020 | Nova Prism Pulse | arcade | logic | 10-17 | /hero-light-07.jpg | 72 | yes |
| 86 | arcade-021 | Quantum Nebula Dash | arcade | creative | 6-14 | /hero-family.jpg | 65 | no |
| 87 | arcade-022 | Quantum Comet Clash | arcade | science | 7-13 | precision-choice | 58 | no |
| 88 | arcade-023 | Quantum Pixel Quest | arcade | math | 8-15 | sequence-recall | 51 | no |
| 89 | arcade-024 | Quantum Moonlight Sprint | arcade | literacy | 9-17 | lane-sort | 44 | no |
| 90 | arcade-025 | Quantum Skyline Drift | arcade | 🚀 | 10-16 | /bg-day-v1.jpg | 37 | yes |
| 91 | arcade-026 | Quantum Starlight Arena | arcade | 🌌 | 6-13 | /bg-bottom.jpg | 30 | no |
| 92 | arcade-027 | Quantum Echo Run | arcade | 🛸 | 7-15 | /hero-light-07.jpg | 83 | no |
| 93 | arcade-028 | Quantum Velocity Vault | arcade | ⚡ | 8-14 | /hero-family.jpg | 76 | no |
| 94 | arcade-029 | Quantum Mystic Loop | arcade | 🎮 | 9-16 | precision-choice | 69 | no |
| 95 | arcade-030 | Quantum Prism Pulse | arcade | 🧠 | 10-17 | sequence-recall | 62 | yes |
| 96 | arcade-031 | Solar Nebula Dash | arcade | 🧩 | 6-12 | lane-sort | 55 | no |
| 97 | arcade-032 | Solar Comet Clash | arcade | 🎨 | 7-14 | /bg-day-v1.jpg | 48 | no |
| 98 | arcade-033 | Solar Pixel Quest | arcade | 🌠 | 8-16 | /bg-bottom.jpg | 41 | no |
| 99 | arcade-034 | Solar Moonlight Sprint | arcade | 🏁 | 9-15 | /hero-light-07.jpg | 34 | no |
| 100 | arcade-035 | Solar Skyline Drift | arcade | arcade | 10-17 | /hero-family.jpg | 27 | yes |
| 101 | arcade-036 | Solar Starlight Arena | arcade | adventure | 6-14 | precision-choice | 80 | no |
| 102 | arcade-037 | Solar Echo Run | arcade | logic | 7-13 | sequence-recall | 73 | no |
| 103 | arcade-038 | Solar Velocity Vault | arcade | creative | 8-15 | lane-sort | 66 | no |
| 104 | arcade-039 | Solar Mystic Loop | arcade | science | 9-17 | /bg-day-v1.jpg | 59 | no |
| 105 | arcade-040 | Solar Prism Pulse | arcade | math | 10-16 | /bg-bottom.jpg | 52 | yes |
| 106 | arcade-041 | Lunar Nebula Dash | arcade | literacy | 6-13 | /hero-light-07.jpg | 45 | no |
| 107 | arcade-042 | Lunar Comet Clash | arcade | 🚀 | 7-15 | /hero-family.jpg | 38 | no |
| 108 | arcade-043 | Lunar Pixel Quest | arcade | 🌌 | 8-14 | precision-choice | 31 | no |
| 109 | arcade-044 | Lunar Moonlight Sprint | arcade | 🛸 | 9-16 | sequence-recall | 84 | no |
| 110 | arcade-045 | Lunar Skyline Drift | arcade | ⚡ | 10-17 | lane-sort | 77 | yes |
| 111 | arcade-046 | Lunar Starlight Arena | arcade | 🎮 | 6-12 | /bg-day-v1.jpg | 70 | no |
| 112 | arcade-047 | Lunar Echo Run | arcade | 🧠 | 7-14 | /bg-bottom.jpg | 63 | no |
| 113 | arcade-048 | Lunar Velocity Vault | arcade | 🧩 | 8-16 | /hero-light-07.jpg | 56 | no |
| 114 | arcade-049 | Lunar Mystic Loop | arcade | 🎨 | 9-15 | /hero-family.jpg | 49 | no |
| 115 | arcade-050 | Lunar Prism Pulse | arcade | 🌠 | 10-17 | precision-choice | 42 | yes |
| 116 | arcade-051 | Cosmic Nebula Dash | arcade | 🏁 | 6-14 | sequence-recall | 35 | no |
| 117 | arcade-052 | Cosmic Comet Clash | arcade | arcade | 7-13 | lane-sort | 28 | no |
| 118 | arcade-053 | Cosmic Pixel Quest | arcade | adventure | 8-15 | /bg-day-v1.jpg | 81 | no |
| 119 | arcade-054 | Cosmic Moonlight Sprint | arcade | logic | 9-17 | /bg-bottom.jpg | 74 | no |
| 120 | arcade-055 | Cosmic Skyline Drift | arcade | creative | 10-16 | /hero-light-07.jpg | 67 | yes |
| 121 | arcade-056 | Cosmic Starlight Arena | arcade | science | 6-13 | /hero-family.jpg | 60 | no |
| 122 | arcade-057 | Cosmic Echo Run | arcade | math | 7-15 | precision-choice | 53 | no |
| 123 | arcade-058 | Cosmic Velocity Vault | arcade | literacy | 8-14 | sequence-recall | 46 | no |
| 124 | arcade-059 | Cosmic Mystic Loop | arcade | 🚀 | 9-16 | lane-sort | 39 | no |
| 125 | arcade-060 | Cosmic Prism Pulse | arcade | 🌌 | 10-17 | /bg-day-v1.jpg | 32 | yes |
| 126 | arcade-061 | Radiant Nebula Dash | arcade | 🛸 | 6-12 | /bg-bottom.jpg | 85 | no |
| 127 | arcade-062 | Radiant Comet Clash | arcade | ⚡ | 7-14 | /hero-light-07.jpg | 78 | no |
| 128 | arcade-063 | Radiant Pixel Quest | arcade | 🎮 | 8-16 | /hero-family.jpg | 71 | no |
| 129 | arcade-064 | Radiant Moonlight Sprint | arcade | 🧠 | 9-15 | precision-choice | 64 | no |
| 130 | arcade-065 | Radiant Skyline Drift | arcade | 🧩 | 10-17 | sequence-recall | 57 | yes |
| 131 | arcade-066 | Radiant Starlight Arena | arcade | 🎨 | 6-14 | lane-sort | 50 | no |
| 132 | arcade-067 | Radiant Echo Run | arcade | 🌠 | 7-13 | /bg-day-v1.jpg | 43 | no |
| 133 | arcade-068 | Radiant Velocity Vault | arcade | 🏁 | 8-15 | /bg-bottom.jpg | 36 | no |
| 134 | arcade-069 | Radiant Mystic Loop | arcade | arcade | 9-17 | /hero-light-07.jpg | 29 | no |
| 135 | arcade-070 | Radiant Prism Pulse | arcade | adventure | 10-16 | /hero-family.jpg | 82 | yes |
| 136 | arcade-071 | Crystal Nebula Dash | arcade | logic | 6-13 | precision-choice | 75 | no |
| 137 | arcade-072 | Crystal Comet Clash | arcade | creative | 7-15 | sequence-recall | 68 | no |
| 138 | arcade-073 | Crystal Pixel Quest | arcade | science | 8-14 | lane-sort | 61 | no |
| 139 | arcade-074 | Crystal Moonlight Sprint | arcade | math | 9-16 | /bg-day-v1.jpg | 54 | no |
| 140 | arcade-075 | Crystal Skyline Drift | arcade | literacy | 10-17 | /bg-bottom.jpg | 47 | yes |
| 141 | arcade-076 | Crystal Starlight Arena | arcade | 🚀 | 6-12 | /hero-light-07.jpg | 40 | no |
| 142 | arcade-077 | Crystal Echo Run | arcade | 🌌 | 7-14 | /hero-family.jpg | 33 | no |
| 143 | arcade-078 | Crystal Velocity Vault | arcade | 🛸 | 8-16 | precision-choice | 26 | no |
| 144 | arcade-079 | Crystal Mystic Loop | arcade | ⚡ | 9-15 | sequence-recall | 79 | no |
| 145 | arcade-080 | Crystal Prism Pulse | arcade | 🎮 | 10-17 | lane-sort | 72 | yes |
| 146 | arcade-081 | Turbo Nebula Dash | arcade | 🧠 | 6-14 | /bg-day-v1.jpg | 65 | no |
| 147 | arcade-082 | Turbo Comet Clash | arcade | 🧩 | 7-13 | /bg-bottom.jpg | 58 | no |
| 148 | arcade-083 | Turbo Pixel Quest | arcade | 🎨 | 8-15 | /hero-light-07.jpg | 51 | no |
| 149 | arcade-084 | Turbo Moonlight Sprint | arcade | 🌠 | 9-17 | /hero-family.jpg | 44 | no |
| 150 | arcade-085 | Turbo Skyline Drift | arcade | 🏁 | 10-16 | precision-choice | 37 | yes |
| 151 | arcade-086 | Turbo Starlight Arena | arcade | arcade | 6-13 | sequence-recall | 30 | no |
| 152 | arcade-087 | Turbo Echo Run | arcade | adventure | 7-15 | lane-sort | 83 | no |
| 153 | arcade-088 | Turbo Velocity Vault | arcade | logic | 8-14 | /bg-day-v1.jpg | 76 | no |
| 154 | arcade-089 | Turbo Mystic Loop | arcade | creative | 9-16 | /bg-bottom.jpg | 69 | no |
| 155 | arcade-090 | Turbo Prism Pulse | arcade | science | 10-17 | /hero-light-07.jpg | 62 | yes |
| 156 | arcade-091 | Infinite Nebula Dash | arcade | math | 6-12 | /hero-family.jpg | 55 | no |
| 157 | arcade-092 | Infinite Comet Clash | arcade | literacy | 7-14 | precision-choice | 48 | no |
| 158 | arcade-093 | Infinite Pixel Quest | arcade | 🚀 | 8-16 | sequence-recall | 41 | no |
| 159 | arcade-094 | Infinite Moonlight Sprint | arcade | 🌌 | 9-15 | lane-sort | 34 | no |
| 160 | arcade-095 | Infinite Skyline Drift | arcade | 🛸 | 10-17 | /bg-day-v1.jpg | 27 | yes |
| 161 | arcade-096 | Infinite Starlight Arena | arcade | ⚡ | 6-14 | /bg-bottom.jpg | 80 | no |
| 162 | arcade-097 | Infinite Echo Run | arcade | 🎮 | 7-13 | /hero-light-07.jpg | 73 | no |
| 163 | arcade-098 | Infinite Velocity Vault | arcade | 🧠 | 8-15 | /hero-family.jpg | 66 | no |
| 164 | arcade-099 | Infinite Mystic Loop | arcade | 🧩 | 9-17 | precision-choice | 59 | no |
| 165 | arcade-100 | Infinite Prism Pulse | arcade | 🎨 | 10-16 | sequence-recall | 52 | yes |
| 166 | ultra-001 | Ultra Aurora Pixel Quest | arcade | science | 7-13 | sequence-recall | 80 | no |
| 167 | ultra-002 | Ultra Nova Moonlight Sprint | arcade | math | 8-15 | lane-sort | 71 | no |
| 168 | ultra-003 | Ultra Quantum Skyline Drift | arcade | literacy | 9-17 | /bg-day-v1.jpg | 62 | no |
| 169 | ultra-004 | Ultra Solar Starlight Arena | arcade | 🚀 | 10-17 | /bg-bottom.jpg | 53 | yes |
| 170 | ultra-005 | Ultra Lunar Echo Run | arcade | 🌌 | 11-17 | /hero-light-07.jpg | 44 | yes |
| 171 | ultra-006 | Ultra Cosmic Velocity Vault | arcade | 🛸 | 12-17 | /hero-family.jpg | 35 | yes |
| 172 | ultra-007 | Ultra Radiant Mystic Loop | arcade | ⚡ | 7-15 | precision-choice | 26 | no |
| 173 | ultra-008 | Ultra Crystal Prism Pulse | arcade | 🎮 | 8-17 | sequence-recall | 72 | no |
| 174 | ultra-009 | Ultra Turbo Nebula Dash | arcade | 🧠 | 9-15 | lane-sort | 63 | no |
| 175 | ultra-010 | Ultra Infinite Comet Clash | arcade | 🧩 | 10-17 | /bg-day-v1.jpg | 54 | yes |
| 176 | ultra-011 | Ultra Aurora Pixel Quest | arcade | 🎨 | 11-17 | /bg-bottom.jpg | 45 | yes |
| 177 | ultra-012 | Ultra Nova Moonlight Sprint | arcade | 🌠 | 12-17 | /hero-light-07.jpg | 36 | yes |
| 178 | ultra-013 | Ultra Quantum Skyline Drift | arcade | 🏁 | 7-13 | /hero-family.jpg | 27 | no |
| 179 | ultra-014 | Ultra Solar Starlight Arena | arcade | arcade | 8-15 | precision-choice | 73 | no |
| 180 | ultra-015 | Ultra Lunar Echo Run | arcade | adventure | 9-17 | sequence-recall | 64 | no |
| 181 | ultra-016 | Ultra Cosmic Velocity Vault | arcade | logic | 10-17 | lane-sort | 55 | yes |
| 182 | ultra-017 | Ultra Radiant Mystic Loop | arcade | creative | 11-17 | /bg-day-v1.jpg | 46 | yes |
| 183 | ultra-018 | Ultra Crystal Prism Pulse | arcade | science | 12-17 | /bg-bottom.jpg | 37 | yes |
| 184 | ultra-019 | Ultra Turbo Nebula Dash | arcade | math | 7-15 | /hero-light-07.jpg | 28 | no |
| 185 | ultra-020 | Ultra Infinite Comet Clash | arcade | literacy | 8-17 | /hero-family.jpg | 74 | no |
| 186 | ultra-021 | Ultra Aurora Pixel Quest | arcade | 🚀 | 9-15 | precision-choice | 65 | no |
| 187 | ultra-022 | Ultra Nova Moonlight Sprint | arcade | 🌌 | 10-17 | sequence-recall | 56 | yes |
| 188 | ultra-023 | Ultra Quantum Skyline Drift | arcade | 🛸 | 11-17 | lane-sort | 47 | yes |
| 189 | ultra-024 | Ultra Solar Starlight Arena | arcade | ⚡ | 12-17 | /bg-day-v1.jpg | 38 | yes |
| 190 | ultra-025 | Ultra Lunar Echo Run | arcade | 🎮 | 7-13 | /bg-bottom.jpg | 29 | no |
| 191 | ultra-026 | Ultra Cosmic Velocity Vault | arcade | 🧠 | 8-15 | /hero-light-07.jpg | 75 | no |
| 192 | ultra-027 | Ultra Radiant Mystic Loop | arcade | 🧩 | 9-17 | /hero-family.jpg | 66 | no |
| 193 | ultra-028 | Ultra Crystal Prism Pulse | arcade | 🎨 | 10-17 | precision-choice | 57 | yes |
| 194 | ultra-029 | Ultra Turbo Nebula Dash | arcade | 🌠 | 11-17 | sequence-recall | 48 | yes |
| 195 | ultra-030 | Ultra Infinite Comet Clash | arcade | 🏁 | 12-17 | lane-sort | 39 | yes |
| 196 | ultra-031 | Ultra Aurora Pixel Quest | arcade | arcade | 7-15 | /bg-day-v1.jpg | 30 | no |
| 197 | ultra-032 | Ultra Nova Moonlight Sprint | arcade | adventure | 8-17 | /bg-bottom.jpg | 76 | no |
| 198 | ultra-033 | Ultra Quantum Skyline Drift | arcade | logic | 9-15 | /hero-light-07.jpg | 67 | no |
| 199 | ultra-034 | Ultra Solar Starlight Arena | arcade | creative | 10-17 | /hero-family.jpg | 58 | yes |
| 200 | ultra-035 | Ultra Lunar Echo Run | arcade | science | 11-17 | precision-choice | 49 | yes |
| 201 | ultra-036 | Ultra Cosmic Velocity Vault | arcade | math | 12-17 | sequence-recall | 40 | yes |
| 202 | ultra-037 | Ultra Radiant Mystic Loop | arcade | literacy | 7-13 | lane-sort | 31 | no |
| 203 | ultra-038 | Ultra Crystal Prism Pulse | arcade | 🚀 | 8-15 | /bg-day-v1.jpg | 77 | no |
| 204 | ultra-039 | Ultra Turbo Nebula Dash | arcade | 🌌 | 9-17 | /bg-bottom.jpg | 68 | no |
| 205 | ultra-040 | Ultra Infinite Comet Clash | arcade | 🛸 | 10-17 | /hero-light-07.jpg | 59 | yes |
| 206 | ultra-041 | Ultra Aurora Pixel Quest | arcade | ⚡ | 11-17 | /hero-family.jpg | 50 | yes |
| 207 | ultra-042 | Ultra Nova Moonlight Sprint | arcade | 🎮 | 12-17 | precision-choice | 41 | yes |
| 208 | ultra-043 | Ultra Quantum Skyline Drift | arcade | 🧠 | 7-15 | sequence-recall | 32 | no |
| 209 | ultra-044 | Ultra Solar Starlight Arena | arcade | 🧩 | 8-17 | lane-sort | 78 | no |
| 210 | ultra-045 | Ultra Lunar Echo Run | arcade | 🎨 | 9-15 | /bg-day-v1.jpg | 69 | no |
| 211 | ultra-046 | Ultra Cosmic Velocity Vault | arcade | 🌠 | 10-17 | /bg-bottom.jpg | 60 | yes |
| 212 | ultra-047 | Ultra Radiant Mystic Loop | arcade | 🏁 | 11-17 | /hero-light-07.jpg | 51 | yes |
| 213 | ultra-048 | Ultra Crystal Prism Pulse | arcade | arcade | 12-17 | /hero-family.jpg | 42 | yes |
| 214 | ultra-049 | Ultra Turbo Nebula Dash | arcade | adventure | 7-13 | precision-choice | 33 | no |
| 215 | ultra-050 | Ultra Infinite Comet Clash | arcade | logic | 8-15 | sequence-recall | 79 | no |
| 216 | ultra-051 | Ultra Aurora Pixel Quest | arcade | creative | 9-17 | lane-sort | 70 | no |
| 217 | ultra-052 | Ultra Nova Moonlight Sprint | arcade | science | 10-17 | /bg-day-v1.jpg | 61 | yes |
| 218 | ultra-053 | Ultra Quantum Skyline Drift | arcade | math | 11-17 | /bg-bottom.jpg | 52 | yes |
| 219 | ultra-054 | Ultra Solar Starlight Arena | arcade | literacy | 12-17 | /hero-light-07.jpg | 43 | yes |
| 220 | ultra-055 | Ultra Lunar Echo Run | arcade | 🚀 | 7-15 | /hero-family.jpg | 34 | no |
| 221 | ultra-056 | Ultra Cosmic Velocity Vault | arcade | 🌌 | 8-17 | precision-choice | 80 | no |
| 222 | ultra-057 | Ultra Radiant Mystic Loop | arcade | 🛸 | 9-15 | sequence-recall | 71 | no |
| 223 | ultra-058 | Ultra Crystal Prism Pulse | arcade | ⚡ | 10-17 | lane-sort | 62 | yes |
| 224 | ultra-059 | Ultra Turbo Nebula Dash | arcade | 🎮 | 11-17 | /bg-day-v1.jpg | 53 | yes |
| 225 | ultra-060 | Ultra Infinite Comet Clash | arcade | 🧠 | 12-17 | /bg-bottom.jpg | 44 | yes |
| 226 | ultra-061 | Ultra Aurora Pixel Quest | arcade | 🧩 | 7-13 | /hero-light-07.jpg | 35 | no |
| 227 | ultra-062 | Ultra Nova Moonlight Sprint | arcade | 🎨 | 8-15 | /hero-family.jpg | 26 | no |
| 228 | ultra-063 | Ultra Quantum Skyline Drift | arcade | 🌠 | 9-17 | precision-choice | 72 | no |
| 229 | ultra-064 | Ultra Solar Starlight Arena | arcade | 🏁 | 10-17 | sequence-recall | 63 | yes |
| 230 | ultra-065 | Ultra Lunar Echo Run | arcade | arcade | 11-17 | lane-sort | 54 | yes |
| 231 | ultra-066 | Ultra Cosmic Velocity Vault | arcade | adventure | 12-17 | /bg-day-v1.jpg | 45 | yes |
| 232 | ultra-067 | Ultra Radiant Mystic Loop | arcade | logic | 7-15 | /bg-bottom.jpg | 36 | no |
| 233 | ultra-068 | Ultra Crystal Prism Pulse | arcade | creative | 8-17 | /hero-light-07.jpg | 27 | no |
| 234 | ultra-069 | Ultra Turbo Nebula Dash | arcade | science | 9-15 | /hero-family.jpg | 73 | no |
| 235 | ultra-070 | Ultra Infinite Comet Clash | arcade | math | 10-17 | precision-choice | 64 | yes |
| 236 | ultra-071 | Ultra Aurora Pixel Quest | arcade | literacy | 11-17 | sequence-recall | 55 | yes |
| 237 | ultra-072 | Ultra Nova Moonlight Sprint | arcade | 🚀 | 12-17 | lane-sort | 46 | yes |
| 238 | ultra-073 | Ultra Quantum Skyline Drift | arcade | 🌌 | 7-13 | /bg-day-v1.jpg | 37 | no |
| 239 | ultra-074 | Ultra Solar Starlight Arena | arcade | 🛸 | 8-15 | /bg-bottom.jpg | 28 | no |
| 240 | ultra-075 | Ultra Lunar Echo Run | arcade | ⚡ | 9-17 | /hero-light-07.jpg | 74 | no |
| 241 | ultra-076 | Ultra Cosmic Velocity Vault | arcade | 🎮 | 10-17 | /hero-family.jpg | 65 | yes |
| 242 | ultra-077 | Ultra Radiant Mystic Loop | arcade | 🧠 | 11-17 | precision-choice | 56 | yes |
| 243 | ultra-078 | Ultra Crystal Prism Pulse | arcade | 🧩 | 12-17 | sequence-recall | 47 | yes |
| 244 | ultra-079 | Ultra Turbo Nebula Dash | arcade | 🎨 | 7-15 | lane-sort | 38 | no |
| 245 | ultra-080 | Ultra Infinite Comet Clash | arcade | 🌠 | 8-17 | /bg-day-v1.jpg | 29 | no |
| 246 | ultra-081 | Ultra Aurora Pixel Quest | arcade | 🏁 | 9-15 | /bg-bottom.jpg | 75 | no |
| 247 | ultra-082 | Ultra Nova Moonlight Sprint | arcade | arcade | 10-17 | /hero-light-07.jpg | 66 | yes |
| 248 | ultra-083 | Ultra Quantum Skyline Drift | arcade | adventure | 11-17 | /hero-family.jpg | 57 | yes |
| 249 | ultra-084 | Ultra Solar Starlight Arena | arcade | logic | 12-17 | precision-choice | 48 | yes |
| 250 | ultra-085 | Ultra Lunar Echo Run | arcade | creative | 7-13 | sequence-recall | 39 | no |
| 251 | ultra-086 | Ultra Cosmic Velocity Vault | arcade | science | 8-15 | lane-sort | 30 | no |
| 252 | ultra-087 | Ultra Radiant Mystic Loop | arcade | math | 9-17 | /bg-day-v1.jpg | 76 | no |
| 253 | ultra-088 | Ultra Crystal Prism Pulse | arcade | literacy | 10-17 | /bg-bottom.jpg | 67 | yes |
| 254 | ultra-089 | Ultra Turbo Nebula Dash | arcade | 🚀 | 11-17 | /hero-light-07.jpg | 58 | yes |
| 255 | ultra-090 | Ultra Infinite Comet Clash | arcade | 🌌 | 12-17 | /hero-family.jpg | 49 | yes |
| 256 | ultra-091 | Ultra Aurora Pixel Quest | arcade | 🛸 | 7-15 | precision-choice | 40 | no |
| 257 | ultra-092 | Ultra Nova Moonlight Sprint | arcade | ⚡ | 8-17 | sequence-recall | 31 | no |
| 258 | ultra-093 | Ultra Quantum Skyline Drift | arcade | 🎮 | 9-15 | lane-sort | 77 | no |
| 259 | ultra-094 | Ultra Solar Starlight Arena | arcade | 🧠 | 10-17 | /bg-day-v1.jpg | 68 | yes |
| 260 | ultra-095 | Ultra Lunar Echo Run | arcade | 🧩 | 11-17 | /bg-bottom.jpg | 59 | yes |
| 261 | ultra-096 | Ultra Cosmic Velocity Vault | arcade | 🎨 | 12-17 | /hero-light-07.jpg | 50 | yes |
| 262 | ultra-097 | Ultra Radiant Mystic Loop | arcade | 🌠 | 7-13 | /hero-family.jpg | 41 | no |
| 263 | ultra-098 | Ultra Crystal Prism Pulse | arcade | 🏁 | 8-15 | precision-choice | 32 | no |
| 264 | ultra-099 | Ultra Turbo Nebula Dash | arcade | arcade | 9-17 | sequence-recall | 78 | no |
| 265 | ultra-100 | Ultra Infinite Comet Clash | arcade | adventure | 10-17 | lane-sort | 69 | yes |
| 266 | ultra-101 | Ultra Aurora Pixel Quest | arcade | logic | 11-17 | /bg-day-v1.jpg | 60 | yes |
| 267 | ultra-102 | Ultra Nova Moonlight Sprint | arcade | creative | 12-17 | /bg-bottom.jpg | 51 | yes |
| 268 | ultra-103 | Ultra Quantum Skyline Drift | arcade | science | 7-15 | /hero-light-07.jpg | 42 | no |
| 269 | ultra-104 | Ultra Solar Starlight Arena | arcade | math | 8-17 | /hero-family.jpg | 33 | no |
| 270 | ultra-105 | Ultra Lunar Echo Run | arcade | literacy | 9-15 | precision-choice | 79 | no |
| 271 | ultra-106 | Ultra Cosmic Velocity Vault | arcade | 🚀 | 10-17 | sequence-recall | 70 | yes |
| 272 | ultra-107 | Ultra Radiant Mystic Loop | arcade | 🌌 | 11-17 | lane-sort | 61 | yes |
| 273 | ultra-108 | Ultra Crystal Prism Pulse | arcade | 🛸 | 12-17 | /bg-day-v1.jpg | 52 | yes |
| 274 | ultra-109 | Ultra Turbo Nebula Dash | arcade | ⚡ | 7-13 | /bg-bottom.jpg | 43 | no |
| 275 | ultra-110 | Ultra Infinite Comet Clash | arcade | 🎮 | 8-15 | /hero-light-07.jpg | 34 | no |
| 276 | ultra-111 | Ultra Aurora Pixel Quest | arcade | 🧠 | 9-17 | /hero-family.jpg | 80 | no |
| 277 | ultra-112 | Ultra Nova Moonlight Sprint | arcade | 🧩 | 10-17 | precision-choice | 71 | yes |
| 278 | ultra-113 | Ultra Quantum Skyline Drift | arcade | 🎨 | 11-17 | sequence-recall | 62 | yes |
| 279 | ultra-114 | Ultra Solar Starlight Arena | arcade | 🌠 | 12-17 | lane-sort | 53 | yes |
| 280 | ultra-115 | Ultra Lunar Echo Run | arcade | 🏁 | 7-15 | /bg-day-v1.jpg | 44 | no |
| 281 | ultra-116 | Ultra Cosmic Velocity Vault | arcade | arcade | 8-17 | /bg-bottom.jpg | 35 | no |
| 282 | ultra-117 | Ultra Radiant Mystic Loop | arcade | adventure | 9-15 | /hero-light-07.jpg | 26 | no |
| 283 | ultra-118 | Ultra Crystal Prism Pulse | arcade | logic | 10-17 | /hero-family.jpg | 72 | yes |
| 284 | ultra-119 | Ultra Turbo Nebula Dash | arcade | creative | 11-17 | precision-choice | 63 | yes |
| 285 | ultra-120 | Ultra Infinite Comet Clash | arcade | science | 12-17 | sequence-recall | 54 | yes |
| 286 | ultra-121 | Ultra Aurora Pixel Quest | arcade | math | 7-13 | lane-sort | 45 | no |
| 287 | ultra-122 | Ultra Nova Moonlight Sprint | arcade | literacy | 8-15 | /bg-day-v1.jpg | 36 | no |
| 288 | ultra-123 | Ultra Quantum Skyline Drift | arcade | 🚀 | 9-17 | /bg-bottom.jpg | 27 | no |
| 289 | ultra-124 | Ultra Solar Starlight Arena | arcade | 🌌 | 10-17 | /hero-light-07.jpg | 73 | yes |
| 290 | ultra-125 | Ultra Lunar Echo Run | arcade | 🛸 | 11-17 | /hero-family.jpg | 64 | yes |
| 291 | ultra-126 | Ultra Cosmic Velocity Vault | arcade | ⚡ | 12-17 | precision-choice | 55 | yes |
| 292 | ultra-127 | Ultra Radiant Mystic Loop | arcade | 🎮 | 7-15 | sequence-recall | 46 | no |
| 293 | ultra-128 | Ultra Crystal Prism Pulse | arcade | 🧠 | 8-17 | lane-sort | 37 | no |
| 294 | ultra-129 | Ultra Turbo Nebula Dash | arcade | 🧩 | 9-15 | /bg-day-v1.jpg | 28 | no |
| 295 | ultra-130 | Ultra Infinite Comet Clash | arcade | 🎨 | 10-17 | /bg-bottom.jpg | 74 | yes |
| 296 | ultra-131 | Ultra Aurora Pixel Quest | arcade | 🌠 | 11-17 | /hero-light-07.jpg | 65 | yes |
| 297 | ultra-132 | Ultra Nova Moonlight Sprint | arcade | 🏁 | 12-17 | /hero-family.jpg | 56 | yes |
| 298 | ultra-133 | Ultra Quantum Skyline Drift | arcade | arcade | 7-13 | precision-choice | 47 | no |
| 299 | ultra-134 | Ultra Solar Starlight Arena | arcade | adventure | 8-15 | sequence-recall | 38 | no |
| 300 | ultra-135 | Ultra Lunar Echo Run | arcade | logic | 9-17 | lane-sort | 29 | no |

## Agent Automation Tips
- Prefer `id` as canonical key; titles for display only.
- For deterministic simulations, lock `difficulty` and use the same `gameId` seed.
- For child-safe defaults, use profile age and avoid forcing unlock flows.
- For premium UX checks, test both states (402 + upgradeUrl vs active premium payloads).