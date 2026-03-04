# Free & Open-Source Games Research for Koydo

**Date**: March 4, 2026  
**Purpose**: Identify free/open-source games — both educational and entertainment — suitable for integration into Koydo's React-based game platform.

## Integration Context

Koydo renders games as **pure React components** (no Canvas engine, no Phaser/PixiJS). Games use:
- `framer-motion` for animation
- Tailwind CSS for styling
- `useReducer` state machines for game logic
- Three rendering tiers: Core (bespoke), Legacy (bespoke), Arcade (template-based `ImmersiveArcadeTemplate`)
- Target: COPPA-compliant children's EdTech (ages 4-18+)
- All games must be `safeForChildren: true`

**Best-fit candidates** are pure JS/TS logic games where the **core mechanic** can be ported to a React component. Full-stack or server-dependent games are excluded.

---

## TIER 1: HIGH-PRIORITY EdTech Games (Port Core Mechanic)

These have simple, clean logic that maps directly to Koydo's educational game model.

### 1. 2048 (Already Identified)
| Field | Value |
|---|---|
| **Repo** | [gabrielecirulli/2048](https://github.com/gabrielecirulli/2048) |
| **License** | MIT |
| **Stars** | 13.3k |
| **Mechanic** | Grid-merge number puzzle — slide tiles, merge powers of 2 |
| **EdTech Fit** | Math (multiplication, powers), Logic, Strategy |
| **Age Range** | 7-18+ |
| **Integration** | Port grid logic to React `useReducer`; replace DOM manipulation with JSX grid |
| **Effort** | Low — ~300 lines of core logic |
| **Child Safety** | ✅ No external calls, no user content |

### 2. Factors Game
| Field | Value |
|---|---|
| **Repo** | [mnito/factors-game](https://github.com/mnito/factors-game) |
| **License** | MIT |
| **Stars** | ~50 |
| **Mechanic** | Factor identification speed game — find all factors of a number before time runs out |
| **EdTech Fit** | Math (factoring, multiplication, division) |
| **Age Range** | 8-14 |
| **Integration** | Canvas-based → port logic to React; number generation is pure JS |
| **Effort** | Low |
| **Child Safety** | ✅ Pure math, no external calls |

### 3. Math Sprint Game
| Field | Value |
|---|---|
| **Repo** | [Amey-Thakur/MATH-SPRINT-GAME](https://github.com/Amey-Thakur/MATH-SPRINT-GAME) |
| **License** | MIT |
| **Mechanic** | Speed-solve math equations (true/false) racing against time |
| **EdTech Fit** | Mental math, arithmetic fluency |
| **Age Range** | 7-15 |
| **Integration** | Vanilla JS → port question generator and scoring to React |
| **Effort** | Low |
| **Child Safety** | ✅ |

### 4. Selfless Heroes
| Field | Value |
|---|---|
| **Repo** | [felicien-brochu/selflessheroes](https://github.com/felicien-brochu/selflessheroes) |
| **License** | MIT |
| **Mechanic** | Design AI algorithms for heroes using visual block programming — solve puzzles by coding |
| **EdTech Fit** | Computational thinking, algorithms, sequencing, logic |
| **Age Range** | 8-16 |
| **Integration** | Full game engine (Phaser 3 + Vue) — port puzzle logic & visual block language only |
| **Effort** | High — extract puzzle engine, rebuild UI in React |
| **Child Safety** | ✅ Designed for educational use |

### 5. KidoCode
| Field | Value |
|---|---|
| **Repo** | [cosminmoldovan/kidocode](https://github.com/cosminmoldovan/kidocode) |
| **License** | MIT |
| **Mechanic** | Block-based code building — build logical sequences using code blocks |
| **EdTech Fit** | Programming logic, sequencing, computational thinking |
| **Age Range** | 6-12 |
| **Integration** | Canvas+DOM → port block logic engine to React |
| **Effort** | Medium |
| **Child Safety** | ✅ Designed for kids |

### 6. Rapid Router (Ocado Technology)
| Field | Value |
|---|---|
| **Repo** | [ocadotechnology/rapid-router](https://github.com/ocadotechnology/rapid-router) |
| **License** | AGPL-3.0 ⚠️ |
| **Stars** | ~200 |
| **Mechanic** | Blockly-based code game — program a van to follow a route (ages 5-11), Python coding (11+) |
| **EdTech Fit** | Coding fundamentals, algorithms, route planning |
| **Age Range** | 5-15 |
| **Integration** | Django backend — port Blockly puzzles and route logic only |
| **Effort** | High |
| **Child Safety** | ✅ Designed for primary schools |
| **License Risk** | ⚠️ AGPL requires open-sourcing modifications — **may not be suitable** for proprietary Koydo |

### 7. Atoms Game
| Field | Value |
|---|---|
| **Repo** | [allexlima/AtomsGame](https://github.com/allexlima/AtomsGame) |
| **License** | MIT |
| **Mechanic** | Identify chemical elements from their symbols — canvas sprite game |
| **EdTech Fit** | Science (chemistry, periodic table) |
| **Age Range** | 10-18 |
| **Integration** | Canvas sprites → replace with React component + SVG/CSS sprites |
| **Effort** | Medium |
| **Child Safety** | ✅ |

### 8. Fractions Memory Game
| Field | Value |
|---|---|
| **Repo** | [vehave/fractions-memory-game-build](https://github.com/vehave/fractions-memory-game-build) |
| **License** | MIT (Unity WebGL build) |
| **Mechanic** | Memory match with fractions, decimals, and percentages |
| **EdTech Fit** | Math (fractions, decimals, percentages) |
| **Age Range** | 8-14 |
| **Integration** | Unity WebGL → port matching logic to React (Koydo already has Memory Match component) |
| **Effort** | Low — reuse existing Memory Match, swap content bank |
| **Child Safety** | ✅ |

### 9. Equation Bingo
| Field | Value |
|---|---|
| **Repo** | [vehave/equation-bingo-build](https://github.com/vehave/equation-bingo-build) |
| **License** | MIT (Unity WebGL) |
| **Mechanic** | Bingo-style game where you solve equations to mark squares |
| **EdTech Fit** | Math (algebra, equation solving) |
| **Age Range** | 10-16 |
| **Integration** | Port equation generator + bingo card logic to React |
| **Effort** | Low-Medium |
| **Child Safety** | ✅ |

### 10. Polynomial Bingo
| Field | Value |
|---|---|
| **Repo** | [vehave/polynomial-bingo-build](https://github.com/vehave/polynomial-bingo-build) |
| **License** | MIT (Unity WebGL) |
| **Mechanic** | Practice polynomial operations via bingo |
| **EdTech Fit** | Math (polynomials, algebra) |
| **Age Range** | 13-18+ |
| **Integration** | Port logic to React |
| **Effort** | Low-Medium |
| **Child Safety** | ✅ |

### 11. Math Snake
| Field | Value |
|---|---|
| **Repo** | [vehave/math-snake-webbuild](https://github.com/vehave/math-snake-webbuild) |
| **License** | MIT (Unity WebGL) |
| **Mechanic** | Classic snake game but you eat correct arithmetic answers |
| **EdTech Fit** | Math (arithmetic operations) |
| **Age Range** | 7-13 |
| **Integration** | Port snake + math logic to React canvas/grid |
| **Effort** | Medium |
| **Child Safety** | ✅ |

### 12. GamifyingEdu
| Field | Value |
|---|---|
| **Repo** | [JaPrad/GamifyingEdu](https://github.com/JaPrad/GamifyingEdu) |
| **License** | MIT |
| **Mechanic** | Collection of p5.js educational games demonstrating real-world applications of physics, math |
| **EdTech Fit** | Physics simulations, math visualizations |
| **Age Range** | 10-18 |
| **Integration** | p5.js → port simulation logic to React with Canvas/SVG |
| **Effort** | Medium per game |
| **Child Safety** | ✅ |

### 13. NummMatch
| Field | Value |
|---|---|
| **Repo** | [oib/nummatch](https://github.com/oib/nummatch) |
| **License** | MIT |
| **Mechanic** | Multiplication practice matching game for children |
| **EdTech Fit** | Math (multiplication tables) |
| **Age Range** | 6-10 |
| **Integration** | Vanilla JS → straightforward React port |
| **Effort** | Low |
| **Child Safety** | ✅ Explicitly designed for children |

### 14. MathTrainer
| Field | Value |
|---|---|
| **Repo** | [limafresh/MathTrainer](https://github.com/limafresh/MathTrainer) |
| **License** | MIT |
| **Mechanic** | Online math trainer for kids — arithmetic drills with difficulty levels |
| **EdTech Fit** | Math fundamentals |
| **Age Range** | 5-12 |
| **Integration** | Pure HTML/CSS/JS → easy React port |
| **Effort** | Low |
| **Child Safety** | ✅ Designed for kids |

### 15. Make 24
| Field | Value |
|---|---|
| **Repo** | [mjdean84/make24](https://github.com/mjdean84/make24) |
| **License** | MIT |
| **Mechanic** | Use 4 playing cards and any operations to make 24 |
| **EdTech Fit** | Math (arithmetic, order of operations, creative problem solving) |
| **Age Range** | 8-18+ |
| **Integration** | Card + expression logic to React |
| **Effort** | Low |
| **Child Safety** | ✅ |

---

## TIER 2: HIGH-PRIORITY Entertainment Games (Port Core Mechanic)

Classic arcade/puzzle games that fit the "Reward Realm" unlock system.

### 16. Hextris
| Field | Value |
|---|---|
| **Repo** | [Hextris/hextris](https://github.com/Hextris/hextris) |
| **License** | GPL-3.0 ⚠️ |
| **Stars** | 2.4k |
| **Mechanic** | Hexagonal Tetris — rotate a hexagon, match 3+ same-color blocks |
| **Age Range** | 7-18+ |
| **Integration** | Canvas → port hex-grid logic to React |
| **Effort** | Medium |
| **Child Safety** | ✅ |
| **License Risk** | ⚠️ GPL-3.0 — derivative works must be GPL. Port mechanic concept, rewrite from scratch. |

### 17. Pac-Man (HTML5)
| Field | Value |
|---|---|
| **Repo** | [mumuy/pacman](https://github.com/mumuy/pacman) |
| **License** | MIT |
| **Stars** | ~1k |
| **Mechanic** | Classic Pac-Man with HTML5 Canvas |
| **Age Range** | 5-18+ |
| **Integration** | Port maze logic + ghost AI to React grid renderer |
| **Effort** | Medium |
| **Child Safety** | ✅ Classic gameplay, no violence |

### 18. Asteroids (HTML5)
| Field | Value |
|---|---|
| **Repo** | [dmcinnes/HTML5-Asteroids](https://github.com/dmcinnes/HTML5-Asteroids) |
| **License** | MIT |
| **Stars** | ~400 |
| **Mechanic** | Classic Asteroids — rotate, thrust, shoot asteroids |
| **Age Range** | 8-18+ |
| **Integration** | Canvas vector graphics → port physics engine to React |
| **Effort** | Medium |
| **Child Safety** | ✅ Abstract shooting (shapes, not characters) |

### 19. Clumsy Bird (Flappy Bird clone)
| Field | Value |
|---|---|
| **Repo** | [ellisonleao/clumsy-bird](https://github.com/ellisonleao/clumsy-bird) |
| **License** | MIT |
| **Stars** | 1.6k |
| **Mechanic** | Flappy Bird clone using MelonJS |
| **Age Range** | 5-18+ |
| **Integration** | MelonJS → port tap-to-flap + pipe generation to React |
| **Effort** | Medium |
| **Child Safety** | ✅ |

### 20. Connect Four (c4)
| Field | Value |
|---|---|
| **Repo** | [kenrick95/c4](https://github.com/kenrick95/c4) |
| **License** | MIT |
| **Stars** | ~140 |
| **Mechanic** | Classic Connect Four with AI opponent |
| **Age Range** | 6-18+ |
| **Integration** | TypeScript + Canvas → port game logic + minimax AI to React grid |
| **Effort** | Low — clean TypeScript code |
| **Child Safety** | ✅ |

### 21. Sandboxels (Falling Sand Simulator)
| Field | Value |
|---|---|
| **Repo** | [R74nCom/sandboxels](https://github.com/R74nCom/sandboxels) |
| **License** | MIT |
| **Stars** | ~700 |
| **Mechanic** | 500+ elements falling-sand physics simulation (water, fire, sand, chemistry) |
| **EdTech Fit** | Science (physics, chemistry, states of matter) — doubles as educational! |
| **Age Range** | 7-18+ |
| **Integration** | Canvas pixel simulation → can embed or port simplified version |
| **Effort** | High (full) / Low (simplified subset) |
| **Child Safety** | ✅ Science sandbox |

### 22. Hexapipes
| Field | Value |
|---|---|
| **Repo** | [gereleth/hexapipes](https://github.com/gereleth/hexapipes) |
| **License** | MIT |
| **Stars** | ~400 |
| **Mechanic** | Rotate hexagonal pipe pieces to connect them all |
| **EdTech Fit** | Logic, spatial reasoning |
| **Age Range** | 7-18+ |
| **Integration** | SvelteKit → port hex-grid rotation logic to React |
| **Effort** | Medium |
| **Child Safety** | ✅ |

### 23. Sliding Puzzle (ReactJS)
| Field | Value |
|---|---|
| **Repo** | [cedricblondeau/sliding-puzzle](https://github.com/cedricblondeau/sliding-puzzle) |
| **License** | MIT |
| **Mechanic** | Classic 15-puzzle with solver and cat GIFs rewards |
| **EdTech Fit** | Logic, spatial reasoning |
| **Age Range** | 5-15 |
| **Integration** | Already React! Minimal adaptation needed. |
| **Effort** | Very Low |
| **Child Safety** | ✅ |

### 24. Crossword Generator
| Field | Value |
|---|---|
| **Repo** | [vincor1986/crossword-generator](https://github.com/vincor1986/crossword-generator) |
| **License** | MIT |
| **Mechanic** | Random crossword puzzle generator with clues |
| **EdTech Fit** | Literacy, vocabulary |
| **Age Range** | 8-18+ |
| **Integration** | Port grid generator + clue system to React |
| **Effort** | Medium |
| **Child Safety** | ✅ (filter word list for age-appropriateness) |

### 25. Crossjig (Word Jigsaw)
| Field | Value |
|---|---|
| **Repo** | [skedwards88/crossjig](https://github.com/skedwards88/crossjig) |
| **License** | MIT |
| **Mechanic** | Word-based jigsaw puzzle — arrange letter pieces to form crossword |
| **EdTech Fit** | Literacy, spelling, vocabulary |
| **Age Range** | 7-15 |
| **Integration** | React-based! Very compatible. |
| **Effort** | Low |
| **Child Safety** | ✅ |

### 26. Hangman (React)
| Field | Value |
|---|---|
| **Repo** | [djbarnwal/hangman](https://github.com/djbarnwal/hangman) |
| **License** | MIT |
| **Mechanic** | Traditional hangman word-guessing game |
| **EdTech Fit** | Literacy, spelling, vocabulary |
| **Age Range** | 6-14 |
| **Integration** | Already React — adapt styling to Koydo design system |
| **Effort** | Very Low |
| **Child Safety** | ✅ (rename to "Word Rescue" or similar for child-friendly framing) |

### 27. Matchimals (Animal Matching)
| Field | Value |
|---|---|
| **Repo** | [igravitystudios/matchimals.fun](https://github.com/igravitystudios/matchimals.fun) |
| **License** | MIT |
| **Stars** | ~200 |
| **Mechanic** | Animal matching puzzle card game — combine animal halves |
| **Age Range** | 4-8 |
| **Integration** | React Native → port core matching logic to React web |
| **Effort** | Medium |
| **Child Safety** | ✅ Designed for young children |

### 28. Typing Speed Test (React)
| Field | Value |
|---|---|
| **Repo** | [awran5/react-typing-speed-test-game](https://github.com/awran5/react-typing-speed-test-game) |
| **License** | MIT |
| **Mechanic** | 1-minute typing speed test with WPM tracking |
| **EdTech Fit** | Typing skills, keyboard proficiency |
| **Age Range** | 7-18+ |
| **Integration** | Already React — adapt to Koydo's content banks |
| **Effort** | Low |
| **Child Safety** | ✅ |

### 29. Word Pluck (Typing Game)
| Field | Value |
|---|---|
| **Repo** | [knadh/wordpluck](https://github.com/knadh/wordpluck) |
| **License** | MIT |
| **Mechanic** | Words fall from sky, type them before they reach bottom |
| **EdTech Fit** | Typing speed, word recognition |
| **Age Range** | 7-15 |
| **Integration** | Canvas → port word-fall logic + typing input to React |
| **Effort** | Low-Medium |
| **Child Safety** | ✅ |

### 30. A Dark Room
| Field | Value |
|---|---|
| **Repo** | [doublespeakgames/adarkroom](https://github.com/doublespeakgames/adarkroom) |
| **License** | MPL-2.0 |
| **Stars** | 8k |
| **Mechanic** | Minimalist text adventure with resource management |
| **Age Range** | 10-18+ |
| **Integration** | Pure JS text engine → port state machine to React |
| **Effort** | Medium |
| **Child Safety** | ⚠️ Some survival themes — needs content review for younger audiences |

### 31. Untrusted (Meta-JavaScript Adventure)
| Field | Value |
|---|---|
| **Repo** | [AlexNisnevich/untrusted](https://github.com/AlexNisnevich/untrusted) |
| **License** | CC BY-NC-SA 3.0 ⚠️ |
| **Stars** | 4.6k |
| **Mechanic** | Edit JavaScript code to solve puzzles and escape a dungeon |
| **EdTech Fit** | Programming, JavaScript learning |
| **Age Range** | 12-18+ |
| **Integration** | Port level engine + sandboxed code evaluator to React |
| **Effort** | High |
| **Child Safety** | ✅ educational |
| **License Risk** | ⚠️ Non-commercial — **not suitable** for Koydo unless negotiated |

### 32. Fifteen Puzzle (Vanilla JS)
| Field | Value |
|---|---|
| **Repo** | [iCherya/Fifteen-Puzzle](https://github.com/iCherya/Fifteen-Puzzle) |
| **License** | MIT |
| **Mechanic** | Classic 15-puzzle sliding tile game with touch support |
| **EdTech Fit** | Logic, spatial reasoning |
| **Age Range** | 5-14 |
| **Integration** | Vanilla JS OOP → port to React |
| **Effort** | Low |
| **Child Safety** | ✅ |

### 33. Aerodict (Space Science)
| Field | Value |
|---|---|
| **Repo** | [i4k0b/Aerodict](https://github.com/i4k0b/Aerodict) |
| **License** | MIT |
| **Mechanic** | Space science educational app — learn astronomy, astrophysics in a playful way |
| **EdTech Fit** | Science (astronomy, space) |
| **Age Range** | 10-18 |
| **Integration** | Web app → port educational content + quiz mechanics |
| **Effort** | Medium |
| **Child Safety** | ✅ |

---

## TIER 3: CONCEPT PORTS (Rewrite Using Mechanic Inspiration)

These can't be directly ported but their **core mechanic** is worth reimplementing as a Koydo React game from scratch.

| # | Mechanic | Inspiration | Category | Age | Notes |
|---|---|---|---|---|---|
| 34 | **Slither.io** — grow a snake by eating food, avoid collisions | [knagaitsev/slither.io-clone](https://github.com/knagaitsev/slither.io-clone) | arcade | 6-14 | Simplify to single-player grid snake |
| 35 | **Geography Guesser** — identify locations on a map | [codergautam/worldguessr](https://github.com/codergautam/worldguessr) | science/adventure | 8-18+ | Use public domain maps, no Google API |
| 36 | **Dungeon Crawler RPG** — explore dungeons, collect loot | [redpangilinan/dungeon-crawler-rpg-od](https://github.com/redpangilinan/dungeon-crawler-rpg-od) | adventure | 10-18 | Math-based combat (solve equations to attack) |
| 37 | **Tower Defense Typing** — type words to destroy enemies | [berkerol/typer](https://github.com/berkerol/typer) | literacy/arcade | 8-15 | Spelling + typing skills |
| 38 | **Connections Puzzle** — group 16 words into 4 categories | [and-computers/react-connections-game](https://github.com/and-computers/react-connections-game) | literacy/logic | 10-18+ | Already React + Tailwind! Word categorization = vocabulary |
| 39 | **Functions Graph Matching** — connect expression to graph | [vehave/functions](https://github.com/vehave/functions) | math | 13-18+ | Algebra visualization |
| 40 | **Jigsaw Puzzle** — drag & drop puzzle pieces | [jfmdev/jqJigsawPuzzle](https://github.com/jfmdev/jqJigsawPuzzle) | creative | 4-10 | Use educational images (maps, anatomy, etc.) |
| 41 | **Chess Pawn Survival** — survive as last pawn on board | [gbrln/the-last-pawn](https://github.com/gbrln/the-last-pawn) | logic/strategy | 10-18+ | React + Redux — strategic thinking |
| 42 | **Physics Is Beautiful** — interactive physics simulations | [studyhub-co/physics-is-beautiful](https://github.com/studyhub-co/physics-is-beautiful) | science | 12-18+ | Port interactive demos |

---

## QUICK-WIN IMPLEMENTATION PLAN

Games that can be added with **< 1 day effort** each (already React or trivially portable):

| Priority | Game | Source | Category | Port Effort |
|---|---|---|---|---|
| 🔴 1 | **Sliding Puzzle** | cedricblondeau/sliding-puzzle | logic | Already React, < 2hr |
| 🔴 2 | **Hangman / Word Rescue** | djbarnwal/hangman | literacy | Already React, < 2hr |
| 🔴 3 | **Typing Speed Test** | awran5/react-typing-speed-test-game | literacy | Already React, < 3hr |
| 🔴 4 | **Connections Puzzle** | and-computers/react-connections-game | literacy/logic | React + Tailwind, < 3hr |
| 🟡 5 | **2048** | gabrielecirulli/2048 | math/logic | Port logic, < 4hr |
| 🟡 6 | **Connect Four** | kenrick95/c4 | logic | TypeScript, < 4hr |
| 🟡 7 | **Crossjig** | skedwards88/crossjig | literacy | React-based, < 4hr |
| 🟡 8 | **NummMatch** | oib/nummatch | math | Vanilla JS, < 3hr |
| 🟡 9 | **MathTrainer** | limafresh/MathTrainer | math | HTML/JS, < 3hr |
| 🟡 10 | **Make 24** | mjdean84/make24 | math | JS, < 4hr |
| 🟢 11 | **Factors Game** | mnito/factors-game | math | Canvas→React, < 5hr |
| 🟢 12 | **Math Sprint** | Amey-Thakur/MATH-SPRINT-GAME | math | Vanilla→React, < 4hr |
| 🟢 13 | **Fifteen Puzzle** | iCherya/Fifteen-Puzzle | logic | Vanilla→React, < 4hr |
| 🟢 14 | **Pac-Man** | mumuy/pacman | arcade | Canvas→React grid, ~8hr |
| 🟢 15 | **Word Pluck** | knadh/wordpluck | literacy | Canvas→React, < 6hr |

---

## LICENSE SUMMARY

| License | Count | Verdict |
|---|---|---|
| **MIT** | 30+ | ✅ Free to use, modify, and distribute commercially |
| **MPL-2.0** | 1 (A Dark Room) | ✅ File-level copyleft — OK for isolated components |
| **GPL-3.0** | 1 (Hextris) | ⚠️ Requires derivative works to be GPL — rewrite mechanic from scratch |
| **AGPL-3.0** | 1 (Rapid Router) | ❌ Network copyleft — avoid or rewrite from scratch |
| **CC BY-NC-SA** | 1 (Untrusted) | ❌ Non-commercial — cannot use in Koydo |

**Recommendation**: Focus exclusively on **MIT-licensed** games for direct porting. For GPL/AGPL games, only use the **concept/mechanic** as inspiration and rewrite from scratch.

---

## CATEGORY MAPPING TO KOYDO

| Koydo Category | New Games to Add |
|---|---|
| `math` | 2048, Factors, Math Sprint, NummMatch, MathTrainer, Make 24, Equation Bingo, Polynomial Bingo, Math Snake, Fractions Memory |
| `literacy` | Hangman/Word Rescue, Typing Speed, Crossword, Crossjig, Word Pluck, Tower Defense Typing, Connections |
| `logic` | Sliding Puzzle, Fifteen Puzzle, Connect Four, Hexapipes, Chess Pawn |
| `science` | Atoms Game, Sandboxels, Aerodict, Physics simulations, Geography Guesser |
| `creative` | Jigsaw Puzzle, Sandboxels (sandbox mode) |
| `arcade` | Pac-Man, Clumsy Bird, Asteroids, Snake/Slither |
| `adventure` | Dungeon Crawler (math combat), A Dark Room |

---

## NEXT STEPS

1. **Phase 1 (Quick Wins)**: Port the 4 "already React" games (Sliding Puzzle, Hangman, Typing Speed, Connections) — ~1 day total
2. **Phase 2 (Core Mechanics)**: Port 2048, Connect Four, NummMatch, MathTrainer, Make 24 — ~2-3 days
3. **Phase 3 (Content Rich)**: Port Factors, Math Sprint, Crossword, Crossjig, Word Pluck — ~3-4 days
4. **Phase 4 (Arcade Reward)**: Port Pac-Man, Clumsy Bird, Asteroids — ~3 days
5. **Phase 5 (Science)**: Port Atoms Game, simplified Sandboxels, Aerodict — ~4 days

**Total**: ~40 new unique game mechanics, all MIT-licensed, covering every Koydo category, ages 4-18+.

---

## SECURITY CHECKLIST (Pre-Integration)

For each ported game:
- [ ] Remove all `innerHTML` assignments → use React JSX only
- [ ] Remove all external URL references (`http://`, CDN links)
- [ ] Ensure no `eval()`, `Function()`, or dynamic code execution
- [ ] Strip any analytics/tracking code
- [ ] Verify no user-generated content flows (UGC must go through Koydo's content safety pipeline)
- [ ] Add `safeForChildren: true` flag
- [ ] Verify word lists / content banks are age-appropriate
- [ ] Test with Koydo's accessibility layer
