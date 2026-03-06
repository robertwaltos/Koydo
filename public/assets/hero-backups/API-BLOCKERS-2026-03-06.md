# API Blockers - 2026-03-06

Date: 2026-03-06

## Google Imagen (same project key)

- `imagen-4.0-fast-generate-001`: daily quota exhausted (`limit=70`)
- `imagen-4.0-generate-001`: daily quota exhausted (`limit=70`)
- `imagen-4.0-ultra-generate-001`: daily quota exhausted (`limit=30`)

Evidence files:

- `public/generated-google-probe/imagen-fast-probe-report.json`
- `public/generated-google-probe/imagen-standard-probe-3-report.json`
- `public/generated-google-probe/imagen-ultra-probe-report.json`

## OpenAI Image Generation

- `gpt-image-1` via `OPENAI_MEDIA_API_KEY`: blocked with `billing_hard_limit_reached`
- `gpt-image-1` via `OPENAI_API_KEY`: blocked with `billing_hard_limit_reached`

Evidence file:

- `public/assets/hero-backups/HERO-BACKUP-GENERATION-MANIFEST.json`

## Fallback Used

- Procedural generation via `sharp` completed all planned backup assets:
  - 4 style sets
  - 16 core hero slots
  - 52 micro-app/international hero variants
  - Total: 68 assets

