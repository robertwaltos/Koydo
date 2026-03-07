# Micro-App Deployments (Separate URL Per App)

This repo now supports one-command deployment of all micro-apps so each app gets its own deployment URL and Vercel project.

## What changed

- `scripts/build-microapp.mjs` supports `--app`, `--apps`, and `--all`.
- `scripts/deploy-microapps-vercel.mjs` deploys all micro-apps to Vercel with per-app build env (`NEXT_PUBLIC_APP_ID`, variant, locale, region, currency).
- `.github/workflows/vercel-microapps.yml` runs the multi-app deployment on push to `master` (or manually).

## Required Vercel setup

Each micro-app must have its own Vercel project ID. Do not reuse the same project ID for multiple app IDs.

Set one of these in GitHub Actions:

- `MICROAPP_VERCEL_PROJECTS_JSON` (recommended)
- Or per-app env vars like `VERCEL_PROJECT_ID_KOYDO_MAIN`, `VERCEL_PROJECT_ID_KOYDO_JUNIOR`, etc.

Example `MICROAPP_VERCEL_PROJECTS_JSON`:

```json
{
  "koydo_main": "prj_main_xxx",
  "koydo_junior": "prj_junior_xxx",
  "koydo_sat": "prj_sat_xxx",
  "koydo_finance": "prj_finance_xxx",
  "koydo_university": "prj_university_xxx",
  "koydo_math": "prj_math_xxx",
  "koydo_arena": "prj_arena_xxx",
  "koydo_math_es": "prj_math_es_xxx",
  "koydo_exam_jp": "prj_exam_jp_xxx",
  "koydo_junior_de": "prj_junior_de_xxx",
  "koydo_ar": "prj_ar_xxx",
  "koydo_kr": "prj_kr_xxx",
  "koydo_hi": "prj_hi_xxx",
  "koydo_math_zh": "prj_math_zh_xxx"
}
```

Optional domain alias mapping:

- `MICROAPP_DOMAINS_JSON`
- Or per-app env vars like `MICROAPP_DOMAIN_KOYDO_UNIVERSITY`

Example `MICROAPP_DOMAINS_JSON`:

```json
{
  "koydo_main": "koydo.app",
  "koydo_junior": "junior.koydo.app",
  "koydo_sat": "sat.koydo.app",
  "koydo_finance": "finance.koydo.app",
  "koydo_university": "university.koydo.app"
}
```

Core deployment secrets/vars:

- `VERCEL_TOKEN` (secret)
- `VERCEL_ORG_ID` (var or secret)

## Local commands

```bash
npm run build:university
npm run build:microapps
npm run validate:microapps
npm run deploy:microapps
npm run deploy:microapps:preview
```

Targeted deploy examples:

```bash
node scripts/deploy-microapps-vercel.mjs --environment=production --apps=koydo_main,koydo_university
node scripts/deploy-microapps-vercel.mjs --environment=preview --apps=koydo_university --dry-run
```

Deployment output summary is written to:

- `reports/microapp-deploy-summary.json`
