# Backend Integration Smoke Report

Generated: 2026-03-04T08:13:20.669Z
Duration: 563173ms

## Summary

- Pass: 15
- Warn: 0
- Fail: 0
- Total checks: 15

## Checks

| Check | Status | Duration (ms) | Detail |
| --- | --- | ---: | --- |
| Ops preflight (env/db/webhook/auth-billing) | PASS | 26616 | pass=4 warn=0 fail=0 skip=0 |
| Route smoke (launch-critical paths + /api/health) | PASS | 523794 | No prebuilt .next output was available; reran route smoke with build and passed. |
| Placement diagnostic scoring contract | PASS | 740 | Command passed. |
| Placement diagnostic flow contract | PASS | 819 | Command passed. |
| Audiobook checkpoint contract | PASS | 740 | Command passed. |
| Device gateway confidence contract | PASS | 693 | Command passed. |
| Review queue contract | PASS | 750 | Command passed. |
| Remediation tasking contract | PASS | 742 | Command passed. |
| Offline progress sync contract | PASS | 745 | Command passed. |
| Social cohorts and challenges contract | PASS | 684 | Command passed. |
| Creator pipeline contract | PASS | 704 | Command passed. |
| StoryForge cinema contract | PASS | 739 | Command passed. |
| Teacher access contract | PASS | 875 | Command passed. |
| Billing webhook processing lock contract | PASS | 709 | Command passed. |
| RevenueCat offerings resolution contract | PASS | 772 | Command passed. |

## Commands

- Ops preflight (env/db/webhook/auth-billing): `node scripts/ops-preflight.mjs --json --start-server-if-needed`
- Route smoke (launch-critical paths + /api/health): `node scripts/smoke-test.mjs`
- Placement diagnostic scoring contract: `node scripts/test-placement-diagnostic-scoring.mjs`
- Placement diagnostic flow contract: `node scripts/test-placement-diagnostic-flow-contract.mjs`
- Audiobook checkpoint contract: `node scripts/test-audiobook-checkpoint-contract.mjs`
- Device gateway confidence contract: `node scripts/test-device-gateway-confidence-contract.mjs`
- Review queue contract: `node scripts/test-review-queue-contract.mjs`
- Remediation tasking contract: `node scripts/test-remediation-tasking-contract.mjs`
- Offline progress sync contract: `node scripts/test-offline-progress-sync-contract.mjs`
- Social cohorts and challenges contract: `node scripts/test-social-cohorts-challenges-contract.mjs`
- Creator pipeline contract: `node scripts/test-creator-pipeline-contract.mjs`
- StoryForge cinema contract: `node scripts/test-storyforge-cinema-contract.mjs`
- Teacher access contract: `node scripts/test-teacher-access-contract.mjs`
- Billing webhook processing lock contract: `node scripts/test-billing-webhook-processing-lock.mjs`
- RevenueCat offerings resolution contract: `node scripts/test-revenuecat-offerings-resolution.mjs`
