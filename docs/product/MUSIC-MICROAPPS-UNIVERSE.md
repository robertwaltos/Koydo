# Music Microapps Universe

## Goal
Launch a genre-driven music microapp network that can generate original songs at scale.

- 21 genre apps
- 200 songs per genre
- 4,200 total songs per production run
- Every song includes:
  - full lyric draft
  - language code and language-aware market mix
  - Suno prompt
  - Udio prompt
  - beat-screen visual prompt
  - karaoke timeline (line start/end timestamps)

## Implemented Assets

- Genre research manifest:
  - `data/music-universe/genres.global.top20.json`
- Language profile manifest:
  - `data/music-universe/language-profiles.json`
- Generator script:
  - `scripts/generate-music-universe-content.mjs`
- UI routes:
  - `/microapps/music-universe`
  - `/microapps/music-universe/[genre]`
- Songs API:
  - `/api/microapps/music-universe/songs?genre=<id>&limit=8`

## Runbook

Generate full catalog:

```bash
npm run music:universe:generate
```

Generate smaller test set:

```bash
npm run music:universe:generate:sample
```

Force one language across a run (for special packs):

```bash
node scripts/generate-music-universe-content.mjs --genres flamenco --songs-per-genre 200 --force-language es
```

Output location:

- `data/music-universe/generated/_catalog-summary.json`
- `data/music-universe/generated/<genre>/songs.json`
- `data/music-universe/generated/<genre>/songs.csv`
- `data/music-universe/generated/<genre>/suno-prompts.txt`
- `data/music-universe/generated/<genre>/elevenlabs-jobs.json`

CC BY / CC0 enrichment:

```bash
npm run music:universe:cc:enrich
```

Sample enrichment run:

```bash
npm run music:universe:cc:enrich:sample
```

Export attribution files for credits screens:

```bash
npm run music:universe:cc:credits
```

CC output location:

- `data/music-universe/cc-enrichment/_summary.json`
- `data/music-universe/cc-enrichment/<genre>.json`
- `data/music-universe/tracks.cc.json` (legacy flattened reference)
- `public/music-universe/credits/_credits-summary.json`
- `public/music-universe/credits/<genre>.credits.md`
- `public/music-universe/credits/<genre>.credits.json`

## Top 20 Genre Priorities

1. Pop
2. Rock
3. Hip-Hop / Rap
4. Dance / Electronic
5. Latin
6. R&B
7. Classical / Opera
8. Country
9. Soundtracks
10. Reggae
11. Afrobeats
12. Amapiano
13. K-Pop
14. J-Pop
15. Musica Mexicana
16. Corridos
17. OPM
18. Sertanejo
19. Varietes Francaises
20. Khaliji

Strategic Spanish spotlight addition:

21. Flamenco (ES-first)

## Research Notes

The ranking uses:

- IFPI global top 10 genre preference order
- IFPI local genre popularity signals
- cross-border growth signals from Spotify newsroom and AP/Luminate reporting

Language strategy uses weighted per-genre mixes (for example, heavy Spanish for Latin/Musica Mexicana/Corridos/Flamenco).

Karaoke mode is implemented as a full-screen lyric experience with highlighted current line and bottom transport controls.

Primary references:

- IFPI Engaging with Music 2023:
  - https://www.ifpi.org/wp-content/uploads/2023/12/IFPI-Engaging-With-Music-2023_full-report.pdf
- AP / Luminate 2023 streaming report:
  - https://apnews.com/article/music-streams-2023-luminate-54aa3735ed707c1d5e9649724cc78c1f
- Spotify newsroom genre growth posts:
  - https://newsroom.spotify.com/2023-10-19/spotify-is-putting-the-spotlight-on-afrobeats-to-chart-its-global-rise/
  - https://newsroom.spotify.com/2024-02-05/celebrate-a-decade-of-our-k-pop-on-%EC%98%A8-playlist-with-a-special-series-of-spotify-singles/
  - https://newsroom.spotify.com/2025-09-15/viva-latino-10th-anniversary-latin-music-growth/
  - https://newsroom.spotify.com/2025-08-01/spotifys-mother-of-music-campaign-celebrates-the-citys-unmistakable-sound-and-culture/
  - https://newsroom.spotify.com/2023-08-28/corridos-musica-mexicana-peso-pluma-eden-munoz/

CC library research and enrichment runbook:

- `docs/product/MUSIC-CC-LIBRARY-RESEARCH-2026-03-07.md`

## Additional Product Ideas

1. Hook A/B engine
- Generate 3 chorus options per song and track stream/save performance.

2. Region-pack mode
- One-click batch generation of language variants by market (US, LATAM, MENA, JP, KR).

3. Voice identity packs
- Reusable "virtual vocalist" prompt profiles per microapp.

4. Viral short-form mode
- Auto-generate 15s, 30s, and 60s prompt variants for short-video platforms.

5. Live trend blending
- Blend 2 genres in one run (for example `afrobeats + amapiano`) and score novelty.

6. Compliance gate
- Add automated lyric checks for profanity, violence, hate speech, and trademark phrases before release.
