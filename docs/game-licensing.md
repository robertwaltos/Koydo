# Game Licensing Manifest

Last updated: 2026-03-06

## Overview

This document tracks the licensing status and attribution requirements for all games in the Koydo game catalog. All games in the current catalog (246 titles) are **original implementations** built specifically for Koydo. Some games are inspired by classic public-domain game concepts.

## Licensing Categories

| Category | Count | License Status |
|----------|-------|----------------|
| Core Games | 11 | Original / Koydo proprietary |
| Legacy Games (Gemini-era) | 60 | Original / Koydo proprietary |
| Classic Game Ports | 51 | Original implementations of public-domain concepts |
| Arcade Games | 19 | Original / Koydo proprietary |
| Zone Games | 65 | Original / Koydo proprietary |
| Handcrafted Games | 6 | Original / Koydo proprietary |
| Pipeline Games | 15 | Original / Koydo proprietary |

## Classic Games — Public Domain Concept Attribution

The following games are **original React/TypeScript implementations** of classic game concepts that are in the public domain or have no copyright on their core mechanics. No third-party code was used.

| Game ID | Classic Concept | Concept Origin | Notes |
|---------|----------------|----------------|-------|
| 2048 | 2048 | Gabriele Cirulli (2014), MIT-licensed concept | Sliding number merge mechanic. Original concept is MIT. Our implementation is original. |
| chess | Chess | Ancient (~6th century) | Public domain game. |
| checkers | Checkers/Draughts | Ancient (~3000 BCE) | Public domain game. |
| tetris | Tetris | Alexey Pajitnov (1985) | Falling block mechanic is not patented (Tetris trademark applies to branding only). Our implementation uses original code and does not use the Tetris name in-game. |
| snake | Snake | Gremlin Industries (1976) | Public domain concept. |
| pong | Pong | Atari (1972) | Public domain concept (patents expired). |
| breakout | Breakout | Atari (1976) | Public domain concept (patents expired). |
| minesweeper | Minesweeper | Microsoft (1990) / earlier variants | Public domain concept. "Minesweeper" name is generic. |
| solitaire | Solitaire/Klondike | 18th century card game | Public domain. |
| spider-solitaire | Spider Solitaire | Card game variant | Public domain. |
| sudoku | Sudoku | Howard Garns (1979) | Public domain puzzle format. |
| wordle | Wordle | Josh Wardle (2021) | Five-letter word guessing is a generic mechanic. We do not use the "Wordle" trademark in user-facing UI. |
| hangman | Hangman | Traditional word game | Public domain. |
| crossword | Crossword | Arthur Wynne (1913) | Public domain puzzle format. |
| mahjong | Mahjong Solitaire | Tile-matching variant | Public domain. |
| reversi | Reversi/Othello | Lewis Waterman (1883) | Public domain (Othello is trademarked, we use "Reversi"). |
| connect-four | Connect Four | Milton Bradley (1974) | Core mechanic is public domain. We do not use the "Connect Four" trademark in-game. |
| sokoban | Sokoban | Hiroyuki Imabayashi (1982) | Box-pushing puzzle concept is public domain. |
| frogger | Frogger | Konami (1981) | Road-crossing concept is generic. We do not use the "Frogger" trademark. |
| bomberman | Bomberman | Hudson Soft (1983) | Grid-based bomb mechanic is generic. We do not use the "Bomberman" trademark. |
| space-invaders | Space Invaders | Taito (1978) | Alien shooting gallery is a generic mechanic. We do not use the trademark. |
| asteroids | Asteroids | Atari (1979) | Public domain concept (patents expired). |
| flappy | Flappy | Dong Nguyen (2013) | Pipe-navigation mechanic is generic. We do not use the "Flappy Bird" name. |
| duck-hunt | Duck Hunt | Nintendo (1984) | Target shooting is a generic mechanic. We do not use the trademark. |
| missile-command | Missile Command | Atari (1980) | Defense shooting is a generic concept. |
| simon | Simon | Ralph Baer (1978) | Color sequence memory is a generic mechanic. |
| cookie-clicker | Cookie Clicker | Orteil (2013) | Idle/clicker mechanic is generic. |
| tic-tac-toe | Tic-Tac-Toe | Ancient game | Public domain. |
| bubble-shooter | Bubble Shooter | Generic genre | Match-and-pop mechanic is generic. |

## Third-Party Dependencies

No third-party game libraries, engines, or game-specific assets are used. All games are built with:
- React 18 + TypeScript
- HTML5 Canvas (for physics/arcade games)
- Framer Motion (for UI animations)
- Tailwind CSS (for styling)

## Attribution Requirements

**None currently required.** All games are original implementations. If future games are adapted from open-source projects, their attribution requirements will be documented here.

## Compliance Notes

1. **No trademarked names in user-facing UI**: Classic game concepts use generic names where the original title is trademarked.
2. **No copyrighted code**: All game logic is written from scratch in TypeScript/React.
3. **No copyrighted assets**: All visual and audio assets are original or from royalty-free sources.
4. **App Store compliance**: Game catalog count reflects only real, playable games (246). No phantom entries or template-generated fakes.
