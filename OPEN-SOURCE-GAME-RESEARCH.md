# Open Source Game Research

Generated: 2026-03-04T05:55:38.636Z

## Scope
- Audited local clones under `data/open-source-games`.
- License + static pattern checks + integration classification.

## Candidate Summary
| Repo | License | Commit | Integration Track | Child Safe Fit | Risk Summary |
|---|---|---|---|---|---|
| 2048 | MIT | 478b6ec | port-core-mechanic | high | http-url:2 |
| javascript-tetris | MIT-like | e5c0c42 | port-core-mechanic | high | innerhtml-assign:2, http-url:3 |
| openstreetguesser | MIT | 6620d77 | adapt-with-safe-map-mode | medium | http-url:1, innerhtml-assign:1 |

## Repo Details
### 2048
- Remote: https://github.com/gabrielecirulli/2048.git
- License: MIT
- Category: logic
- Mechanic: grid-merge
- Age band: 8-17
- Integration track: port-core-mechanic
- Risk summary: http-url:2
- `http-url` in `data/open-source-games/2048/index.html`
- `http-url` in `data/open-source-games/2048/README.md`

### javascript-tetris
- Remote: https://github.com/jakesgordon/javascript-tetris.git
- License: MIT-like
- Category: logic
- Mechanic: block-stack
- Age band: 8-17
- Integration track: port-core-mechanic
- Risk summary: innerhtml-assign:2, http-url:3
- `innerhtml-assign` in `data/open-source-games/javascript-tetris/index.html`
- `http-url` in `data/open-source-games/javascript-tetris/index.html`
- `http-url` in `data/open-source-games/javascript-tetris/README.md`
- `innerhtml-assign` in `data/open-source-games/javascript-tetris/stats.js`
- `http-url` in `data/open-source-games/javascript-tetris/stats.js`

### openstreetguesser
- Remote: https://github.com/louis-e/openstreetguesser.git
- License: MIT
- Category: adventure
- Mechanic: geo-discovery
- Age band: 10-17
- Integration track: adapt-with-safe-map-mode
- Risk summary: http-url:1, innerhtml-assign:1
- `http-url` in `data/open-source-games/openstreetguesser/index.html`
- `innerhtml-assign` in `data/open-source-games/openstreetguesser/js/logic.js`


