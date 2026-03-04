# Games Implementation Truth Report

Generated: 2026-03-04T17:10:23.040Z

## Verified Snapshot
- Catalog entries: 500 (core=8, legacy=57, arcade=200, expansion=235).
- Runtime routes: core=8, mapped-components=120, template-routed=372.
- Unique runtime implementation files behind all 500 routes: 129.
- Mapped-component routes that are alias wrappers: 0.

## Coverage Checks
- Core IDs missing a mapped component: 0.
- Legacy IDs missing a mapped component: 0.
- Catalog IDs mapped to component names missing index exports: 0.
- Arcade/Expansion IDs are template-routed by design: 372.

## Alias Samples
| gameId | routed component | entry file | resolved implementation |
|---|---|---|---|
| none | none | none | none |

## Interpretation
- The 500 catalog entries are real routes, but most are not unique engines.
- A large portion of IDs route through shared implementations (mapped components + one arcade template).
- This report is generated from code and can be re-run to validate future claims.

## Output Files
- Markdown: `GAMES-IMPLEMENTATION-TRUTH-REPORT.md`
- JSON: `public\GAMES-IMPLEMENTATION-TRUTH-REPORT.json`

