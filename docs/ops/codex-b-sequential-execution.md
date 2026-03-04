# Codex-B Sequential Sprint Execution

Date: March 4, 2026
Mode: sequential execution (no week wait)

## Sprint 2

- `B-A04` Google Classroom auth/service-account infra
  - `src/lib/integrations/google-classroom-auth.ts`
  - `src/lib/integrations/google-classroom.ts` (wired to auth infra)
- `B-A05` assignment-sync worker skeleton
  - `src/lib/testing/google-classroom-sync-worker.ts`
  - `src/app/api/admin/testing/google-classroom/sync/run/route.ts` (worker-cycle wiring)
  - `src/app/api/testing/google-classroom/sync/cron/route.ts` (worker-cycle wiring)
- `B-A06` audit logging baseline
  - `src/lib/organizations/integration-audit.ts`

## Sprint 3

- `B-A07/B-A08/B-A09`
  - `src/lib/platform/codex-b/s3-grade-compliance-telemetry.ts`

## Sprint 4

- `B-A10/B-A11/B-A12`
  - `src/lib/platform/codex-b/s4-vector-rollout-harness.ts`

## Sprint 5

- `B-B01/B-B02/B-B03`
  - `src/lib/platform/codex-b/s5-messaging-translation-notifications.ts`

## Sprint 6

- `B-B04/B-B05/B-B06`
  - `src/lib/platform/codex-b/s6-standards-report-retention.ts`

## Sprint 7

- `B-B07/B-B08/B-B09`
  - `src/lib/platform/codex-b/s7-parent-copilot-printables-eval.ts`

## Sprint 8

- `B-B10/B-B11/B-B12`
  - `src/lib/platform/codex-b/s8-security-slo-pilot.ts`

## Sprint 9

- `B-C01/B-C02/B-C03`
  - `src/lib/platform/codex-b/s9-ocr-solver-safety.ts`

## Sprint 10

- `B-C04/B-C05/B-C06`
  - `src/lib/platform/codex-b/s10-tutor-memory-speech-eval.ts`

## Sprint 11

- `B-C07/B-C08/B-C09`
  - `src/lib/platform/codex-b/s11-literacy-ingestion-ranking-offline.ts`

## Sprint 12

- `B-C10/B-C11/B-C12`
  - `src/lib/platform/codex-b/s12-ga-load-compliance.ts`

## Contract Validation Scripts

- `scripts/codex-b/test-s2-platform-contract.mjs`
- `scripts/codex-b/test-s3-s12-platform-contract.mjs`

## Sprint 3 Live Integration (Post-Foundation)

- Added live grade-passback API:
  - `src/app/api/testing/classes/[classId]/lms/grade-passback/route.ts`
  - Uses FERPA/COPPA gate enforcement from S3 foundation contracts.
- Added live classroom telemetry API:
  - `src/app/api/testing/classes/[classId]/telemetry/route.ts`
  - Uses S3 telemetry batch normalization contracts.
- Added S3 live adapters:
  - `src/lib/platform/codex-b/s3-live-adapters.ts`
- Registered teacher-access purposes:
  - `testing_class_grade_passback`
  - `testing_class_telemetry`
- Added S3 live contract test:
  - `scripts/codex-b/test-s3-live-contract.mjs`

## Sprint 4 Live Integration (Post-Foundation)

- Added live admin vector index API:
  - `src/app/api/admin/platform/codex-b/vector-index/route.ts`
- Added live admin rollout dashboard API:
  - `src/app/api/admin/platform/codex-b/rollout-dashboard/route.ts`
- Added live admin integration harness runner API:
  - `src/app/api/admin/platform/codex-b/integration-harness/run/route.ts`
- Added S4 live contract test:
  - `scripts/codex-b/test-s4-live-contract.mjs`

## Sprint 5-12 Live Integration (Post-Foundation)

Added admin service endpoints to operationalize Codex-B platform foundations:

- S5 messaging pipeline:
  - `src/app/api/admin/platform/codex-b/messaging/route.ts`
- S6 standards/export/retention:
  - `src/app/api/admin/platform/codex-b/standards-retention/route.ts`
- S7 parent-copilot/printables/eval:
  - `src/app/api/admin/platform/codex-b/parent-copilot/route.ts`
- S8 security/SLO/pilot controls:
  - `src/app/api/admin/platform/codex-b/security-slo/route.ts`
- S9 OCR/solver/high-risk safety:
  - `src/app/api/admin/platform/codex-b/ocr-safety/route.ts`
- S10 tutor runtime controls:
  - `src/app/api/admin/platform/codex-b/tutor-runtime/route.ts`
- S11 literacy ops controls:
  - `src/app/api/admin/platform/codex-b/literacy-ops/route.ts`
- S12 GA readiness/load/compliance:
  - `src/app/api/admin/platform/codex-b/ga-readiness/route.ts`

Validation script added:

- `scripts/codex-b/test-s5-s12-live-contract.mjs`

## Cross-Agent Handshake Validation (Codex-B Consumption)

Codex-B also validated Codex-C handshake compatibility for classroom surfaces:

- `scripts/test-classroom-mode-s1-contract.mjs`
  - Latest run (March 4, 2026): `7 pass / 0 fail`
- `scripts/test-classroom-s2-contract.mjs`
  - Latest run (March 4, 2026): `4 pass / 0 fail`

This confirms S1/S2 product workflows remain compatible with Codex-B platform contracts after sequential sprint execution.
