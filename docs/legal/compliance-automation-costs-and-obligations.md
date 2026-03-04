# Compliance Automation Costs and Obligations

## What was implemented
- Triple-pass compliance audit pipeline (policy/store readiness, security/data controls, automation/monitoring).
- Immutable evidence manifest records in `compliance_evidence_artifacts`.
- Parent account-change verification controls (email/sms/authenticator challenge flow).
- Support response-target instrumentation and parent-portal paid priority-queue signaling.
- Multi-model moderation consensus workflow (Grok, OpenAI, Claude, Gemini) with anti-stall queue controls.
- Randomized background launch audit scheduler with max 5-day gap enforcement:
  - Script: `scripts/run-background-launch-audit.mjs`
  - Workflow: `.github/workflows/background-launch-audit.yml`
  - Status artifacts: `public/BACKGROUND-LAUNCH-AUDIT-LATEST.json` and `.md`

## Randomized background testing cadence (implemented)
- Cadence policy:
  - Daily scheduler trigger.
  - Random execution probability (default `0.35`) on each eligible day.
  - Hard enforcement that no interval exceeds `5` days between completed runs.
- Full report bundle generated per executed run:
  - `APPSTORE-COMPLIANCE-AUDIT`
  - `DB-READINESS-REPORT`
  - `TYPECHECK-REPORT`
  - `TRIPLE-PASS-LAUNCH-REVIEW`
- Evidence logging:
  - Evidence manifest inserted in `compliance_evidence_artifacts`.
  - Background run summary inserted in `compliance_audit_runs` + findings in `compliance_audit_findings`.
  - Full background report bundle persisted in evidence metadata for audit retrieval.
  - Storage provider defaults to `google_vault_export` for background workflow unless overridden.

## Support policy posture
- Public copy now uses best-effort response targets and avoids strict SLA promises.
- Internal response-target tracking remains active for operational alerting and backlog detection.
- Current stance: no strict 24/7 SLA guarantees until staffing and incident operations are mature.

## Typical cost drivers
- AI moderation model inference:
  - Variable by provider, model, and token volume.
  - Usually the largest recurring cost once ticket/content volume scales.
- Evidence storage:
  - Object/database storage for audit artifacts.
  - Retention period materially changes cost (7-year retention is common for regulated workflows).
- Messaging:
  - Email verification notifications are low-cost.
  - SMS verification is usage-based and rises with authentication volume.
- Operations monitoring:
  - Alerting/log retention/report generation jobs add compute/storage overhead.

## Estimated cost bands (planning-grade)
- Early launch / low volume:
  - Often mostly fixed platform costs + small variable AI/message/storage usage.
  - Expect AI moderation and SMS verification to be the first variable spikes.
- Growth / medium volume:
  - AI moderation, support automation, and evidence retention become primary OPEX drivers.
  - Add monthly budget guardrails per provider (OpenAI/Grok/Claude/Gemini, SMS, email, storage).
- Scale / high volume:
  - Require per-provider quotas, alert thresholds, anomaly detection, and automated throttles.
  - Cost optimization should be treated as a first-class product workflow.

## Who typically requires which controls
- App store reviewers:
  - Expect clear policy disclosures, support paths, and account-related controls.
- Privacy/consumer protection regimes (jurisdiction-dependent):
  - Expect demonstrable consent/accountability evidence and deletion/access workflows.
- Payment/billing and audit stakeholders:
  - Expect reconciled records and auditable report trails.
- Internal governance / acquirer due diligence:
  - Expect owner-security controls, transfer readiness, and immutable operational evidence.

## What is involved operationally
- Configure provider credentials:
  - OpenAI, Grok, Claude, Gemini, email provider, optional SMS provider.
- Set policy controls:
  - SLA hours, evidence retention days, evidence storage provider.
- Runbook ownership:
  - Define who handles stalled jobs, failed reconciliation, and escalation alerts.
- Legal review:
  - Confirm jurisdiction-specific language for SLA commitments and parent/child data handling.

## Google Vault or similar evidence retention
- Google Vault can be used as an external compliance archive for immutable evidence exports.
- Vault availability depends on Google Workspace edition and licensing (typically Business Plus / Enterprise tier).
- In this implementation, evidence storage is provider-pluggable (`supabase_storage`, `google_vault_export`, `external_archive`, `inline`) so you can phase in Vault without redesigning the pipeline.
- Detailed vendor comparison and cost assumptions are tracked in:
  - `docs/legal/evidence-archive-vendor-cost-comparison.md`

## Chaos testing (implementation and cost model)
- Chaos/load testing should run outside the production app code path as external testing infrastructure against the app.
- Recommended split:
  - Fault injection service (AWS FIS or Azure Chaos Studio).
  - Load generation tooling (Locust/JMeter/k6 OSS, self-hosted or managed runners).
  - Queue-specific perf tooling (e.g., RabbitMQ PerfTest).
- Budget model:
  - Fixed/near-fixed: runner infrastructure, observability retention.
  - Variable: chaos action-minutes, load test duration, and test-environment cloud spend.
- Detailed rollout + cost worksheet:
  - `docs/ops/chaos-testing-costs-and-implementation.md`

## Important note
- This document is implementation-oriented and not legal advice.
- Final legal obligations depend on jurisdiction, user geography, and product behavior.
