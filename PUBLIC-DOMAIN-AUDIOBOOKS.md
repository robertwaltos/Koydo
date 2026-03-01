# Public-Domain Audiobooks Workflow

This workflow generates AI-read audiobook chapter assets only for titles that are explicitly verified as public domain.

## 1) Rights source of truth

Edit:

`src/lib/audiobooks/public-domain-catalog.json`

Add entries with:

- `moduleId`
- `title`
- `rightsStatus: "public_domain_verified"`
- optional audit fields (`rightsEvidenceUrl`, `reviewer`, `reviewedAt`, `notes`)

Only `public_domain_verified` and `enabled !== false` entries are queueable.

## 2) Queue jobs

Dry run:

```bash
npm run audiobooks:queue:public-domain
```

Apply:

```bash
npm run audiobooks:queue:public-domain:apply
```

Optional flags:

- `--voice female_adult|female_young|male_adult|male_young`
- `--module <moduleId>`
- `--max-books <n>`
- `--max-chapters <n>`
- `--max-chars <n>`
- `--created-by <admin-user-uuid>`

## 3) Process jobs

```bash
node scripts/process-audio-jobs.mjs
```

Compatibility queue entrypoint used by autonomous runner:

```bash
node scripts/queue-audio-jobs.mjs
```

## 4) Read published audiobook assets

API:

`GET /api/audiobooks/public-domain`

Query params:

- `moduleId` (optional)
- `voiceId` (optional)
- `limit` (optional, default `600`, max `5000`)

This API only serves entries that are both:

- in the verified public-domain catalog
- generated with metadata `rights_status = public_domain_verified`
