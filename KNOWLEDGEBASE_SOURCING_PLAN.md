# Koydo Knowledgebase Sourcing Plan

Last updated: 2026-02-26

## Scope

Build a legally compliant, high-quality curriculum and transcript knowledgebase for:

- Trades: electricians, plumbing, HVAC, civil/electrical engineering
- STEM: microelectronics, circuits, CPU/GPU/memory design, meteorology
- Professional domains: nursing, law, medicine
- High-demand fields: cybersecurity, data science, AI/ML, project management, finance

## Can We Pull Official Curriculum Worldwide?

Yes, for many countries where curriculum standards are published publicly. We can ingest curriculum frameworks, syllabi, and learning outcomes from official ministry/standards sites.

Representative official sources:

- UK National Curriculum: https://www.gov.uk/government/collections/national-curriculum
- Australia (ACARA): https://www.australiancurriculum.edu.au/
- Singapore MOE syllabuses: https://www.moe.gov.sg/education-in-sg/our-programmes/curriculum-planning-development-division
- India NCERT textbooks: https://ncert.nic.in/textbook.php
- India CBSE curriculum resources: https://cbseacademic.nic.in/curriculum_2025.html
- New Zealand Curriculum: https://nzcurriculum.tki.org.nz/The-New-Zealand-Curriculum
- Ontario Curriculum (Canada): https://www.dcp.edu.gov.on.ca/en/curriculum
- South Africa CAPS resources: https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements(CAPS).aspx
- Kenya KICD curriculum resources: https://kicd.ac.ke/curriculum-design/

## Can We Pull Transcripts From Free Online Courses?

Partially. We can ingest transcripts at scale from sources that:

- publish transcripts/subtitles directly, and
- permit reuse under license/terms.

Good starting sources:

- Open Yale Courses (transcripts available): https://oyc.yale.edu/
- NPTEL transcript endpoint docs: https://nptel.ac.in/noc/transcript.php
- MIT OpenCourseWare (open-licensed content): https://ocw.mit.edu/
- OpenLearn (many modules include transcript options): https://www.open.edu/openlearn/

Important constraint:

- We cannot legally ingest "all free courses" blindly. Some free-to-audit platforms still restrict bulk scraping and reuse in their Terms of Service.
- We will not bypass licenses, paywalls, or anti-automation controls. Ingestion must remain source-compliant with attribution and per-source rights policy.

## Practical Ingestion Policy

Use a traffic-light policy per source before ingestion:

- Green: explicitly open license + transcript access + automated reuse allowed.
- Yellow: transcript available but restricted API/ToS; require manual approval.
- Red: no transcript rights or anti-scraping restrictions; do not ingest.

## Recommended Build Plan

1. Source registry
- Maintain a machine-readable registry with fields: `source_id`, `url`, `license`, `terms_url`, `automation_allowed`, `transcript_format`, `domain_tags`.

2. Fetch layer
- Build source-specific collectors for HTML, PDF, VTT/SRT, and plain text.
- Normalize metadata: title, provider, topic, level, language, publication date.

3. Transcript normalization
- Convert transcript formats to canonical JSON chunks:
  - `chunk_id`, `start_s`, `end_s`, `text`, `speaker`, `language`
- Deduplicate and attach topic taxonomy tags.

4. Curriculum alignment
- Map each chunk/module to curriculum outcomes:
  - `framework`, `subject`, `grade_band`, `outcome_code`, `competency_level`

5. Quality and governance
- Add filters for: low-confidence OCR, duplicate transcripts, unsafe/biased content, stale sources.
- Log provenance and license for each knowledge chunk.

## Immediate Target Set (Phase 1)

- Official curriculum ingest for UK, Australia, Singapore, India (NCERT/CBSE), New Zealand, Ontario, South Africa, Kenya.
- Transcript ingest from Open Yale + NPTEL + selected MIT OCW + selected OpenLearn.
- Domain prioritization for this release:
  - Electricity/electricians
  - Microelectronics/circuits
  - CPU/GPU/memory design
  - Civil/electrical engineering
  - Plumbing/HVAC
  - Meteorology
  - Nursing/law/medicine

## Expected Outcome

With strict licensing filters, we can build a strong global baseline quickly. The limiting factor is not technical extraction, but legal reuse permissions and transcript availability quality.

## Operational Tooling (Implemented)

- Source registry (machine-readable):
  - `src/lib/knowledgebase/source-registry.json`
  - typed export: `src/lib/knowledgebase/source-registry.ts`
- Source summary report:
  - run `npm run knowledgebase:report`
  - outputs `public/KNOWLEDGEBASE-SOURCES-REPORT.{json,md}`
- Source rights policy (machine-readable legal gate):
  - `src/lib/knowledgebase/source-rights.json`
  - typed export: `src/lib/knowledgebase/source-rights.ts`
  - run `npm run knowledgebase:rights`
  - strict gate mode: `npm run knowledgebase:rights:strict`
  - outputs `public/KNOWLEDGEBASE-RIGHTS-REPORT.{json,md}`
- Link harvester (transcript/curriculum keyword discovery):
  - run `node scripts/knowledgebase-harvest-links.mjs --write-report --limit 6`
  - outputs `public/KNOWLEDGEBASE-HARVEST-REPORT.{json,md}`
  - now captures link context metadata (`anchorText`, `pageTitle`) for downstream domain scoring
- Targeted harvester (gap-filling by domain):
  - run `npm run knowledgebase:harvest:targeted`
  - outputs `public/KNOWLEDGEBASE-HARVEST-TARGETED-REPORT.{json,md}`
  - supports multi-source domain seeds (for diversification beyond a single provider)
  - currently includes diversified seeds for `nursing` and `project-management` across MIT OCW, OpenLearn, and Open Yale sources
  - includes each successful seed URL itself as a candidate link (not just discovered anchors), improving conversion of seed plans into ingest queue items
- Ingestion queue builder (turn discovered links into prioritized queue):
  - run `npm run knowledgebase:queue`
  - outputs `public/KNOWLEDGEBASE-INGESTION-QUEUE.{json,md}`
  - queue now enforces source rights policy by default (`--rights-mode approved-or-conditional`)
  - strict approved-only mode:
    - run `npm run knowledgebase:queue:safe`
  - queue applies source-specific URL allow/deny filters from:
    - `src/lib/knowledgebase/source-link-filters.json`
  - queue enforces same-host links by default (use `--allow-external-links` only when needed)
  - pre-configured priority queue for target career domains:
    - run `npm run knowledgebase:queue:priority`
    - outputs `public/KNOWLEDGEBASE-INGESTION-QUEUE-PRIORITY.{json,md}`
  - build queue from a specific harvest report:
    - `node scripts/knowledgebase-build-ingestion-queue.mjs --write-report --harvest-file public/KNOWLEDGEBASE-HARVEST-TARGETED-REPORT.json --out-file public/KNOWLEDGEBASE-INGESTION-QUEUE-TARGETED.json --out-md-file public/KNOWLEDGEBASE-INGESTION-QUEUE-TARGETED.md`
  - optional domain targeting:
    - `node scripts/knowledgebase-build-ingestion-queue.mjs --write-report --domains electricians,microelectronics,hvac,nursing,law,medicine`
    - add `--strict-domains` to only include matching domains
    - add `--no-general-curriculum-fallback` to disable official-curriculum fallback when running strict mode
    - queue scoring now uses URL + anchor text + page title context from harvest metadata
- Ingestion fetch runner (pull queued items into local normalized text docs):
  - run `npm run knowledgebase:ingest`
  - outputs `public/KNOWLEDGEBASE-INGEST-RUN-REPORT.{json,md}`
  - saves text artifacts in `data/knowledgebase/raw/`
  - PDF links are now saved to `data/knowledgebase/raw-pdf/` for extraction
  - priority ingest run:
    - run `npm run knowledgebase:ingest:priority`
    - outputs `public/KNOWLEDGEBASE-INGEST-RUN-PRIORITY-REPORT.{json,md}`
  - targeted ingest run:
    - run `npm run knowledgebase:ingest:targeted`
    - uses `public/KNOWLEDGEBASE-INGESTION-QUEUE-TARGETED.json`
    - outputs `public/KNOWLEDGEBASE-INGEST-RUN-TARGETED-REPORT.{json,md}`
- PDF text extraction step:
  - run `npm run knowledgebase:pdf:extract`
  - outputs `public/KNOWLEDGEBASE-PDF-EXTRACT-REPORT.{json,md}`
  - writes extracted text artifacts into `data/knowledgebase/raw/`
- One-command pipeline:
  - run `npm run knowledgebase:pipeline`
  - executes rights gate -> harvest -> queue -> ingest -> PDF extraction in order
- Domain coverage analyzer:
  - run `npm run knowledgebase:coverage`
  - outputs `public/KNOWLEDGEBASE-DOMAIN-COVERAGE-REPORT.{json,md}`
  - supports filtering: `node scripts/knowledgebase-domain-coverage-report.mjs --write-report --domains electricians,hvac,nursing --min-score 2`
- Content quality gate (dedupe + search-page weighting):
  - run `npm run knowledgebase:quality:report`
  - gate mode: `npm run knowledgebase:quality:gate`
  - outputs `public/KNOWLEDGEBASE-QUALITY-GATE-REPORT.{json,md}`
  - tracks:
    - search landing page ratio
    - duplicate body ratio
  - queue weighting now downranks search landing pages vs course-content URLs
- Domain backlog planner (actionable next-ingest list):
  - run `npm run knowledgebase:backlog`
  - CI gate mode: `npm run knowledgebase:backlog:gate`
  - outputs `public/KNOWLEDGEBASE-BACKLOG-REPORT.{json,md}`
  - combines domain coverage + queue + manifest to identify:
    - critical domains (0 docs)
    - growth-needed domains (< healthy threshold)
    - recommended next queue items per domain
- Targeted seed expansion generator (for queue-exhausted domains):
  - run `npm run knowledgebase:seeds:plan` (dry run)
  - run `npm run knowledgebase:seeds:apply` (writes updates to `src/lib/knowledgebase/targeted-seeds.json`)
  - outputs `public/KNOWLEDGEBASE-SEED-PLAN-REPORT.{json,md}`
  - uses backlog report to auto-add search seeds for under-covered domains
- Domain quality gate (CI-ready):
  - run `npm run knowledgebase:gate`
  - targeted release gate:
    - `npm run knowledgebase:gate:priority`
  - fails with exit code `1` when a required domain has fewer docs than `--min-docs`
- Vector-ready manifest build:
  - run `npm run knowledgebase:manifest`
  - outputs:
    - `data/knowledgebase/manifest.json`
    - `data/knowledgebase/chunks.jsonl`
    - `public/KNOWLEDGEBASE-MANIFEST-REPORT.{json,md}`
  - balanced variant to avoid one-source dominance:
    - run `npm run knowledgebase:manifest:balanced`
    - caps chunk contribution per source (`--max-chunks-per-source`)
- Lesson-authoring domain pack export:
  - run `npm run knowledgebase:lesson-pack`
  - outputs:
    - `data/knowledgebase/lesson-authoring-pack.json`
    - `public/KNOWLEDGEBASE-LESSON-PACK-REPORT.{json,md}`
  - pack is scored by:
    - domain keyword relevance
    - domain tag evidence
    - URL quality weighting (course content > search landing pages)
- Full one-command quality pipeline:
  - run `npm run knowledgebase:pipeline:full`
  - executes: rights strict gate -> ingest pipeline -> coverage -> quality gate -> domain gate -> manifest build -> lesson pack export -> backlog gate
