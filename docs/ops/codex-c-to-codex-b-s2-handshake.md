# Codex-C to Codex-B Handshake: Sprint S2

Date: March 4, 2026  
Scope: `C-A04`, `C-A05`, `C-A06` delivery handoff and integration contract validation

## 1) Codex-C S2 Delivery Summary

Implemented product-side S2 teacher workflow surfaces:

- `C-A04` Google Classroom assignment-create UX:
  - UI surface integrated in classroom control room.
  - API contract: `POST /api/testing/classes/:classId/lms/google-classroom/assignments`
  - Modes: `preview`, `create` with `executionMode` (`auto|queue_only`).
- `C-A05` quick-review run flow v1:
  - API contract:
    - `GET /api/testing/classes/:classId/quick-review/run`
    - `PATCH /api/testing/classes/:classId/quick-review/run`
  - Actions:
    - `hydrate_from_stub`, `start`, `pause`, `resume`, `next`, `previous`, `jump`,
      `record_outcome`, `end`, `reset`.
- `C-A06` ingestion upload + parse-preview UX:
  - API contract: `POST /api/testing/classes/:classId/ingestion/preview`
  - Modes: `preview`, `save_stub`
  - Output:
    - parse quality summary
    - extracted segments/objectives/keywords
    - optional quiz draft scaffold.

## 2) Codex-B Dependency Alignment

Aligned to Codex-B ownership boundaries:

- Auth/tenancy/compliance:
  - `resolveVerifiedTeacherClassAccess(...)` enforced for all S2 routes.
- Rate limiting:
  - All S2 routes include explicit `enforceIpRateLimit(...)`.
- Shared storage boundary:
  - S2 stubs persisted in `classroom_sessions.session_settings`.
  - Admin retry route available for queued sync attempts pending Codex-B worker automation.
  - Cron-secured retry route available for scheduled automation.

## 3) API Contract Surface (for Codex-B validation)

### A) Google Classroom assignment-create (execution-capable)

- `POST /api/testing/classes/:classId/lms/google-classroom/assignments`
- Request:
  - `mode`: `preview|create`
  - `executionMode`: `auto|queue_only` (default `auto`)
  - target: `existingAssignmentId` or inline (`examId|moduleId` + optional `dueAt`)
  - payload: `title`, `courseId`, optional `topicId`, `points`, optional `instructions`
- Response:
  - `syncRequestId`, `syncState`, `syncExecution`, `assignment`, `nextActions`.
- `create` behavior:
  - always queues sync stub in `session_settings.googleClassroomAssignmentStubs`.
  - when `executionMode=auto` and service-account config is valid, attempts immediate Google sync.
  - returns one of:
    - `syncState=queued_stub`
    - `syncState=queued_retry_required`
    - `syncState=synced`

### B) Quick-review run controller

- `GET /api/testing/classes/:classId/quick-review/run`
  - reads launch stub + run state.
- `PATCH /api/testing/classes/:classId/quick-review/run`
  - mutates run state and prompt outcomes.
- Persistence:
  - `session_settings.quickReviewRun`.

### C) Ingestion parse-preview

- `POST /api/testing/classes/:classId/ingestion/preview`
- Request:
  - `mode`: `preview|save_stub`
  - `title`, `sourceType`, `rawText`, `language`, optional `tags`
  - `generateQuestions`, `questionCount`, `difficultyBand`
- Response:
  - parse summary + preview artifacts.
- `save_stub` behavior:
  - writes `session_settings.ingestionPreviewStub`.

### D) Admin Google sync retry runner

- `POST /api/admin/testing/google-classroom/sync/run`
- Access:
  - admin-gated (`requireAdminForApi`) + IP rate limit
- Request:
  - optional `limit`, `classId`, `syncRequestId`, `dryRun`, `includeQueuedStub`
- Behavior:
  - scans queued Google assignment stubs in `classroom_sessions.session_settings`
  - retries `queued_retry_required` (and optionally `queued_stub`) items
  - persists per-stub attempt metadata and sync outcome.

### E) Cron Google sync retry runner

- `POST /api/testing/google-classroom/sync/cron`
- Access:
  - `CRON_SECRET` bearer token (`Authorization: Bearer <CRON_SECRET>`) + IP rate limit
- Behavior:
  - same retry engine as admin endpoint for scheduled headless processing
  - defaults to retrying only `queued_retry_required`
  - supports optional `classId`, `syncRequestId`, `limit`, and `dryRun`.
- Scheduler wiring:
  - `.github/workflows/google-classroom-sync-retries.yml` (hourly + manual dispatch).

## 4) Codex-C Acceptance Criteria (S2)

1. Teacher can generate Google Classroom assignment create previews.
2. Teacher can queue or auto-sync a Google Classroom create request and see sync metadata.
3. Teacher can start and operate quick-review run controls from launched quick-review stub.
4. Teacher can record prompt outcomes during run flow.
5. Teacher can upload/paste instructional content and receive ingestion parse preview output.
6. Teacher can save ingestion parse preview as a stub for subsequent mapping/review stages.
7. S2 routes remain safely gated and rollback-capable.

## 5) Integration Test Cases Sent to Codex-B

1. Unauthorized access to each new S2 route returns `401`.
2. Teacher tenancy enforcement for cross-class attempts returns `403` or `404`.
3. Google create `preview` returns `syncState=preview_only`.
4. Google create `create` returns `syncState in {queued_stub, queued_retry_required, synced}` and persists stub history.
5. Quick-review run lifecycle transitions persist (`start -> pause -> resume -> end -> reset`).
6. `record_outcome` increments prompt-level counters for active prompt.
7. Ingestion `preview` returns parse summary and artifact arrays.
8. Ingestion `save_stub` persists `ingestionPreviewStub` in session settings.

## 6) Rollback Instructions

Immediate rollback:

1. Set `NEXT_PUBLIC_TESTING_GOOGLE_CLASSROOM_V1_PENDING=true`.
2. Set `NEXT_PUBLIC_TESTING_QUICK_REVIEW_V1_PENDING=true`.
3. Set `NEXT_PUBLIC_TESTING_INGESTION_V1_PENDING=true`.
4. Redeploy web.

Optional hard rollback:

5. Remove S2 panel integration from classroom shell client.
6. Revert S2 route additions.

## 7) Phase-Gate Note

S2 remains phase-gated until:

- Codex-B confirms background worker rollout plan for sustained queue processing at scale.
- Reliability checks pass on run-controller and ingestion routes.
- Product acceptance criteria are validated in staging behind rollout flags.
