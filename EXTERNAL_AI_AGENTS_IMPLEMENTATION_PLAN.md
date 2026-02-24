# External AI Agents Review and Implementation Plan

Date: 2026-02-21

## Handoff Update (2026-02-24)

Completed in the latest unattended cycle:

- Curriculum/runtime stability:
  - resolved module-lesson lookup key collisions by aligning runtime and validator to module-scoped aliases
  - `npm run curriculum:validate` now reports 0 errors, 0 warnings
- Accessibility/semantic cleanup in admin and parent surfaces:
  - fixed list semantics (`ul` direct children) in `src/app/admin/compliance/page.tsx` and `src/app/parent/dashboard/page.tsx`
  - added accessible names for previously flagged `select`/`input` controls in:
    - `src/app/admin/compliance/compliance-admin-client.tsx`
    - `src/app/admin/curriculum/curriculum-client.tsx`
    - `src/app/admin/media/media-ops-client.tsx`
    - `src/app/admin/operations/operations-console.tsx`
    - `src/app/admin/reports/reports-client.tsx`
    - `src/app/account/privacy/privacy-client.tsx`
    - `src/app/support/support-client.tsx`
    - `src/app/lessons/[lessonId]/typed-interactive-activity.tsx`
- Lesson runtime polish:
  - replaced inline progress-bar styles with shared `<progress>` styling and cleaned related ARIA issues across lesson runtime components
- Documentation/ops cleanup:
  - fixed markdown lint structure in this plan doc for consistent ordered-list style
  - added workspace editor settings (`.vscode/settings.json`) to improve local schema/lint behavior for workflows and CSS at-rules
- Pipeline verification:
  - re-ran `npm run curriculum:validate; npm run reports:refresh` successfully after fixes

Open focus for next cycle:

- continue reducing regenerated report markdownlint noise at generator-source level (avoid hand-editing generated `public/*.md`)
- optional: tighten workflow lint false-positives with a dedicated GitHub Actions lint profile/config

## Progress Snapshot

Completed this cycle:

- External curriculum handoff export pipeline:
  - `scripts/export-curriculum-state-for-external-agents.mjs`
  - `public/CURRICULUM-STATE-FOR-EXTERNAL-AGENTS.{json,md}`
- External curriculum ingestion bridge (Tranche 1):
  - `scripts/import-external-curriculum.mjs` with `--source-dir` recursive import support
  - importer now supports multiple external JSON shapes (snake_case/camelCase roots, units arrays, single-unit payloads)
  - importer now supports merge automation into existing canonical modules with lesson/objective/locale dedupe
  - merge controls added: `--merge-into-existing`, `--no-merge-into-existing`, `--create-external-when-no-match`, `--sync-registry`
  - confidence-gated merge scoring added with `--merge-threshold` to defer weak matches into external module creation
  - generated module `src/lib/modules/catalog/lang-arts-prek-u1-external.ts`
  - import audit output in `public/EXTERNAL-CURRICULUM-IMPORT-REPORT.{json,md}`
  - scheduled/manual import workflow added: `.github/workflows/curriculum-import.yml`
  - npm shortcuts added:
    - `curriculum:import:external:apply`
    - `curriculum:import:external:apply:strict`
    - `curriculum:import:external:create-only`
- Automated media queue defaults and workflow hardening:
  - `package.json` (`media:queue:auto`)
  - `.github/workflows/media-automation.yml`
- xAPI-lite event pipeline:
  - DB model + RLS policies in `supabase/schema.sql` (`public.learning_events`)
  - ingestion API `src/app/api/telemetry/events/route.ts`
  - client tracking helpers `src/lib/analytics/learning-events.ts`, `src/lib/analytics/xapi-lite.ts`
  - lesson runtime instrumentation in:
    - `src/app/lessons/[lessonId]/lesson-session-tracker.tsx`
    - `src/app/lessons/[lessonId]/quiz.tsx`
    - `src/app/lessons/[lessonId]/interactive-activity.tsx`
    - `src/app/lessons/[lessonId]/video-lesson-player.tsx`
  - telemetry ops visibility:
    - new admin CSV export endpoint: `src/app/api/admin/reports/telemetry/route.ts`
    - report-job queue support for `telemetry` in API + worker scripts (`src/app/api/admin/report-jobs/*`, `scripts/process-report-jobs.mjs`, `scripts/requeue-stale-report-jobs.mjs`)
    - queue SLA summaries now include telemetry report type breakdown
    - admin reports page includes live 7-day telemetry snapshot (events, active learners, completion ratio, interaction depth)
    - generated telemetry artifact report: `public/TELEMETRY-LEARNING-EVENTS-REPORT.{json,md}` via `scripts/telemetry-learning-events-report.mjs`
- Media worker upgrade for optional OpenAI images + fallback:
  - `scripts/process-media-jobs.mjs`
  - `.env.example` additions for OpenAI/media storage settings
- Lesson player upgrade (Tranche 2):
  - tabbed lesson runtime in `src/app/lessons/[lessonId]/lesson-experience.tsx`
  - flashcard deck runtime in `src/app/lessons/[lessonId]/lesson-flashcards.tsx`
  - lesson page server/client split in `src/app/lessons/[lessonId]/page.tsx`
- Activity engine v1 foundation (Tranche 3):
  - typed activity renderer in `src/app/lessons/[lessonId]/typed-interactive-activity.tsx`
  - support for `sorting_buckets`, `matching_pairs`, and `drag_and_drop` scoring flows
  - lesson runtime now synthesizes safe typed activity fallbacks from quiz data when authored activity payloads are missing (`src/app/lessons/[lessonId]/lesson-experience.tsx`)
- Media prompt system improvement (Tranche 4 partial):
  - `scripts/generate-lesson-media-prompts.mjs` now prefers per-lesson prompt overrides before defaults
- Exam error-logbook and remediation loop:
  - DB model + RLS in `supabase/schema.sql` (`public.user_exam_error_logs`)
  - learner APIs in `src/app/api/exam/error-log/route.ts` and `src/app/api/exam/error-log/[errorId]/route.ts`
  - learner review UI in `src/app/exam-prep/error-log/page.tsx`
  - quiz integration for incorrect/timed-out capture in `src/app/lessons/[lessonId]/quiz.tsx`
  - exam hub + dashboard quick links and counts in `src/app/exam-prep/page.tsx` and `src/app/dashboard/page.tsx`
- Exam coverage reporting upgrade:
  - `scripts/exam-prep-coverage-report.mjs` now tracks timed quizzes, structured interactives, mock coverage, and blueprint coverage
  - `scripts/exam-prep-content-quality-report.mjs` now tracks question uniqueness, track-specific wording rate, generic-phrase regressions, and module quality priority
  - `scripts/curriculum-quality-report.mjs` now handles quoted/unquoted key styles so quiz question/aid counts are not under-reported
- Recommendation engine upgrade:
  - `src/app/api/ai/recommendations/route.ts` now scores by unresolved exam errors, top error skills, and timed remediation context
  - `src/app/dashboard/recommended-lesson.tsx` now surfaces recommendation rationale + unresolved exam error indicators + remediation queue links
  - `src/app/exam-prep/page.tsx` now displays top unresolved error skills/types from learner error logs
- Adaptive remediation sequencing (new):
  - shared queue/scoring engine in `src/lib/exam/remediation-queue.ts`
  - dedicated learner API `src/app/api/exam/remediation-queue/route.ts`
  - recommendation API now consumes shared queue output for scoring and rationale
  - exam logbook now renders a sequenced, priority-labeled remediation queue in `src/app/exam-prep/error-log/page.tsx`
- Auto-resolution heuristics for mastered errors:
  - shared heuristic utility `src/lib/exam/error-auto-resolve.ts`
  - preview/apply API in `src/app/api/exam/error-log/auto-resolve/route.ts`
  - learner UI trigger in `src/app/exam-prep/error-log/error-log-client.tsx`
  - mastery/attempt + elapsed-time criteria for safe auto-resolution
  - admin batch endpoint with rate limiting and audit trail: `src/app/api/admin/exam/error-log/auto-resolve/route.ts`
  - scheduled maintenance workflow: `.github/workflows/exam-maintenance.yml`
  - failure writeback alerting to `admin_alerts` via `scripts/create-admin-alert.mjs` and workflow failure hook
  - maintenance runner script for GitHub schedules: `scripts/auto-resolve-exam-errors.mjs`
  - owner console visibility for failure alerts + recent auto-resolve runs in `src/app/admin/operations/*`
  - owner console includes acknowledge + rerun controls for exam maintenance operations
  - run diagnostics hardening:
    - API/manual runs now include structured diagnostics in audit metadata (`topEligibleUsers`, `topUpdatedUsers`, `topErroredUsers`, coverage)
    - workflow runs now publish run-summary alerts (`exam_maintenance_run_summary`) with run/artifact link metadata
    - owner console now renders workflow run summaries and direct link-outs to Actions run + artifact panels
- Exam track taxonomy hardening:
  - typed track registry in `src/lib/exam/tracks.ts` (sections, timing, score scales, skill domains)
  - exam hub cards upgraded to use taxonomy metadata in `src/app/exam-prep/page.tsx`
  - public exam track metadata endpoint `src/app/api/exam/tracks/route.ts`
- Timed drill runtime hardening:
  - quiz runtime now supports drill mode switching (`untimed`, `paced`, `section_sprint`) in `src/app/lessons/[lessonId]/quiz.tsx`
  - section sprint timing now derives from exam track section metadata and lesson question counts
  - telemetry + exam error-log entries now include drill mode and active time-limit context
- Exam module interactivity hardening:
  - updated `scripts/generate-exam-modules.mjs` so quiz lessons also include typed `interactiveActivities` remediation blocks
  - upgraded generator prompts so quiz question text and activity labels now adapt to each exam track focus/strand taxonomy rather than shared generic wording
  - authored per-track activity profiles added for SAT/ACT/AP/GCSE/A-Level/JEE-NEET/Gaokao/IB/TOEFL/IELTS/CUET/ATAR (drag, matching, mock-error-sort data)
  - generator now emits richer scenario-based quiz stems, varied correct-option positions, and 8-question full-mock quiz lessons
  - regenerated exam catalogs in `src/lib/modules/catalog/*-prep-101.ts`
- Exam authoring queue automation:
  - new per-lesson rewrite backlog report `scripts/exam-authoring-backlog-report.mjs`
  - generated outputs in `public/EXAM-AUTHORING-BACKLOG-REPORT.{json,md}` with structured rewrite actions and external-agent prompt template
  - included in report refresh pipeline (`scripts/generate-all-reports.mjs`) and ops artifacts (`.github/workflows/ops-reports.yml`)

Open items:

- Replace generator-derived quiz interactive blocks with fully exam-specific authored content per lesson
- Run new external merge automation on additional subject/grade JSON batches from external agents

## Scope Reviewed

Recursive review completed for:

- `External_AI_Agents/CODING_AGENT_SPEC.md`
- `External_AI_Agents/curriculum_schema.json`
- `External_AI_Agents/curriculum_sample_data.json`
- `External_AI_Agents/curriculum_blueprint.docx`
- `External_AI_Agents/EdTech Expansion & Curriculum Design.docx`
- `External_AI_Agents/EdTech Platform Development Blueprint.docx`
- `External_AI_Agents/EduForge Grok research1.docx`
- `External_AI_Agents/EduForge Research2.docx`
- `External_AI_Agents/Global K-12 Curriculum Blueprint Development.docx`
- `External_AI_Agents/exam_prep_expansion.jsx`
- `External_AI_Agents/lesson_platform.jsx`
- `External_AI_Agents/lesson_platform (1).jsx` (duplicate of `lesson_platform.jsx`)
- `External_AI_Agents/platform_master.jsx`

## Key Findings

1. Content model quality is strong, implementation form is mixed:

  External JSON and DOCX assets contain robust curriculum and exam frameworks, while JSX assets are rich prototypes but monolithic and not production-structured for the current Next.js architecture.

1. Lesson interaction patterns worth adopting:

  Chunked lesson flow, flashcards with card flip and pagination, quiz feedback states with remediation messaging, drag/drop classification activity patterns, and per-lesson Seedance and Lottie prompt blocks.

1. Exam prep strategy is much deeper than current module data:

  Regional exam coverage and prioritization, timing and psychometric design intent (IRT/CAT), and stronger product roadmap/KPI framing.

1. Brand and differentiation research is substantial:

  Candidate name pools with linguistic risk tables, plus defensibility/moat framing and competitive benchmark matrixes.

## Compatibility Assessment Against Current App

Current strengths already in `eduforge-web`:

- Module registry and schema validation:
  - `src/lib/modules/types.ts`
  - `src/lib/modules/schema.ts`
  - `src/lib/modules/generated/registry.ts`
- Lesson runtime with video/interactive/quiz rendering:
  - `src/app/lessons/[lessonId]/page.tsx`
  - `src/app/lessons/[lessonId]/quiz.tsx`
  - `src/app/lessons/[lessonId]/interactive-activity.tsx`
- Seedance prompt and media job pipeline:
  - `src/lib/media/seedance-prompts.ts`
  - `src/app/api/admin/media/prompt-pack/route.ts`
  - `src/app/api/admin/media/jobs/queue-from-pack/route.ts`
- SRS utility already exists:
  - `src/lib/srs.ts`
- Curriculum expansion and quality reporting already exists:
  - `src/lib/admin/curriculum-summary.ts`
  - `src/lib/admin/curriculum-backlog.ts`

Main gaps:

- Module content is mostly template/generated and repetitive for many tracks.
- Exam tracks currently lack exam-specific skill taxonomies and timed simulation UX.
- Most modules still rely on generated default media prompts and need richer lesson-specific prompt craft.

## Adopt / Adapt / Defer Decisions

Adopt now:

- `curriculum_schema.json` structure concepts (grade bands, content tiers, activity taxonomy, quiz blueprint).
- `curriculum_sample_data.json` as seed/source for converter tooling.
- `lesson_platform.jsx` flashcard UX and quiz feedback mechanics.
- `platform_master.jsx` subject color system and lesson tab IA.
- `exam_prep_expansion.jsx` exam metadata scaffolding (regions/tracks/skills timing categories).

Adapt before use:

- All JSX prototypes must be decomposed into typed components and data files.
- Brand/name tables must be treated as candidate input only, not final legal output.
- xAPI model should be implemented as a phased "xAPI-lite" telemetry envelope first.

Defer:

- Full psychometric IRT/CAT engine production rollout.
- Full cross-country exam expansion to all listed exams.
- Full LRS stack integration until event volume and analytics requirements are finalized.

## Proposed Implementation Tranches

### Tranche 1: Schema Bridge and Content Ingestion

Goals:

- Extend lesson/module types to support:
  - `chunks`
  - `flashcards`
  - `interactiveActivities` (typed)
  - rich `quizBlueprint`
  - per-lesson `videoPrompt` and `animPrompt`
- Build converter script:
  - input: `External_AI_Agents/curriculum_sample_data.json`
  - output: typed module catalog files under `src/lib/modules/catalog/`

Deliverables:

- Updated `src/lib/modules/types.ts` and `src/lib/modules/schema.ts`
- Ingestion script in `scripts/`
- Validation report for generated modules

### Tranche 2: Lesson Player Upgrade (Interactive UX)

Goals:

- Replace single-mode lesson UI with tabbed lesson runtime:
  - Learn
  - Flashcards
  - Interactive
  - Quiz
  - Media
- Port flashcard behavior and quiz result UX from prototype patterns.

Deliverables:

- New lesson UI components under `src/app/lessons/[lessonId]/`
- Backward compatibility for existing lesson types

### Tranche 3: Activity Engine v1

Goals:

- Add typed activity rendering for:
  - `drag_and_drop`
  - `matching_pairs`
  - `sorting_buckets`
- Add score and completion semantics for activities.

Deliverables:

- `InteractiveActivity` refactor to activity-type renderer
- Activity attempt tracking payloads

### Tranche 4: Media Prompt System Upgrade

Goals:

- Store lesson-specific Seedance/Lottie prompts from content data.
- Extend prompt-pack generation from module content.
- Tighten media job metadata for versioning and QA status.

Deliverables:

- Updated prompt-pack generation and queue APIs
- Admin UI filters by asset type/module/lesson already leveraged for richer prompt content

### Tranche 5: Exam Prep Content Hardening

Goals:

- Replace generic exam prep module text with exam-specific lesson structures.
- Start with P0 tracks:
  - SAT
  - ACT
  - AP core
  - GCSE
  - A-Level
  - JEE/NEET
- Add timed section drills and error logbook model.

Deliverables:

- Rewritten exam module catalogs
- Timed practice mode UX hooks

### Tranche 6: Telemetry (xAPI-lite) and Quality Loop

Goals:

- Emit normalized learning events:
  - `chunk_viewed`
  - `flashcard_flipped`
  - `activity_interacted`
  - `quiz_answered`
  - `lesson_completed`
- Persist to Supabase for analytics and remediation inputs.

Deliverables:

- Event envelope spec and helper
- API route/table for event ingestion
- Curriculum quality report enrichment

### Tranche 7: Brand and Positioning Workstream

Goals:

- Convert external naming tables into a tracked shortlist workflow.
- Add legal review checkpoints (trademark/domain/language risk).
- Keep product codename unchanged until legal validation complete.

Deliverables:

- Shortlist document with scoring criteria and decision log
- Naming decision gate in roadmap

## Recommended Execution Order

1. Tranche 1
2. Tranche 2
3. Tranche 4
4. Tranche 3
5. Tranche 5
6. Tranche 6
7. Tranche 7

Rationale:

- First establish data model compatibility.
- Then unblock learner-facing value (lesson UX and media quality).
- Then deepen exam quality and telemetry.

## Risk Notes

- Data bloat risk if full DOCX-derived scope is ingested too early.
- Prompt quality inconsistency risk without prompt QA gates.
- Schema migration risk if existing module consumers assume old structure only.
- Legal risk if candidate names are treated as final without trademark counsel.

## Suggested Immediate Next Actions

1. Start Tranche 5 by hardening one exam module family end-to-end (content, taxonomy, timed drills).
2. Add typed interactive activity datasets to at least 10 high-traffic lessons to exercise Tranche 3 in production paths.
3. Expand external curriculum imports beyond the initial preK language arts seed file.
4. Continue curriculum depth pass to replace placeholder/generated lessons across all subjects and grades.
5. Add error-log driven recommendations in dashboard/exam-prep (next remediation pass).
6. Add remediation completion automation (auto-resolve suggestions when mastery and retest thresholds are met).
