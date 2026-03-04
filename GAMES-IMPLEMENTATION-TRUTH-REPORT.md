# Games Implementation Truth Report

Generated: 2026-03-04T18:23:49.319Z

## Verified Snapshot
- Catalog entries: 500 (core=8, legacy=57, arcade=200, expansion=235).
- Runtime routes: core=8, legacy=57, template-routed=435.
- Unique runtime implementation files behind all 500 routes: 66.
- Legacy routes that are alias wrappers: 0.

## Coverage Checks
- Core IDs missing a mapped component: 0.
- Legacy IDs missing a mapped component: 0.
- Arcade/Expansion IDs are template-routed by design: 435.

## Alias Samples
| gameId | routed component | entry file | resolved implementation |
|---|---|---|---|
| none | none | none | none |

## Interpretation
- The 500 catalog entries are real routes, but most are not unique engines.
- A large portion of IDs route through shared implementations (legacy aliases + one arcade template).
- This report is generated from code and can be re-run to validate future claims.

## Output Files
- Markdown: `GAMES-IMPLEMENTATION-TRUTH-REPORT.md`
- JSON: `public\GAMES-IMPLEMENTATION-TRUTH-REPORT.json`

