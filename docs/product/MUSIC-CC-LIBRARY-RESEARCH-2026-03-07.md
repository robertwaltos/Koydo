# Music CC Library Research (2026-03-07)

## Objective

Find legal CC BY / CC0 catalog sources that can enrich each music microapp genre with reusable reference tracks.

## Primary Source Used

- Openverse API (audio metadata aggregation):
  - https://wordpress.github.io/openverse-api/guides/quickstart/
  - https://wordpress.github.io/openverse-api/reference/api/audio_search/
  - https://api.openverse.engineering/v1/audio/stats/

## License References

- CC BY 4.0:
  - https://creativecommons.org/licenses/by/4.0/
- CC0 1.0:
  - https://creativecommons.org/publicdomain/zero/1.0/
- Public Domain Mark 1.0:
  - https://creativecommons.org/publicdomain/mark/1.0/

## Supplemental Source Notes

- ccMixter query API (for future direct source fallback):
  - http://ccmixter.org/query-api/
- Openverse already aggregates multiple providers (for example: Freesound, Jamendo, Wikimedia Commons), which simplified the first enrichment pass.

## Implementation Outputs

- Script:
  - `scripts/enrich-music-universe-cc.mjs`
  - `scripts/export-music-universe-cc-attribution.mjs`
- Dataset:
  - `data/music-universe/cc-enrichment/_summary.json`
  - `data/music-universe/cc-enrichment/<genre>.json`
  - `data/music-universe/tracks.cc.json`
  - `public/music-universe/credits/_credits-summary.json`
  - `public/music-universe/credits/<genre>.credits.md`
  - `public/music-universe/credits/<genre>.credits.json`

## Fallback Enrichment Strategy

When a genre returns low volume in the first pass, the pipeline runs a second pass with source filters and expanded terms:

1. Source filters: `freesound`, `jamendo`, `wikimedia_audio`
2. Expanded fallback queries per low-coverage genre (for example: Amapiano -> Afro House/African House, Khaliji -> Arabic percussion/Oud)
3. Same license and maturity filters applied (`CC BY` / `CC0`, mature disabled by default)

## Coverage Snapshot (Run Date: 2026-03-07)

- Total tracks retained: 533
- Genres with full 40-track pools: pop, rock, hip-hop-rap, dance-electronic, latin, rnb, classical-opera, country, soundtracks, reggae, khaliji
- Medium coverage examples: flamenco (30), musica-mexicana (32)
- Lower coverage examples: afrobeats (4), amapiano (5), k-pop (5), j-pop (4), corridos (1), opm (3), sertanejo (5), varietes-francaises (4)

## Practical Licensing Reminder

CC BY and CC0 are generally commercialization-friendly, but each imported track should still pass:

1. Attribution rendering validation in the UI for CC BY items.
2. Source-link verification before distribution.
3. Final legal review for downstream usage context (sync rights, neighboring rights, jurisdiction-specific constraints).
