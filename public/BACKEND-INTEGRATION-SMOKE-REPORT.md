# Backend Integration Smoke Report

Generated: 2026-03-04T06:28:47.949Z
Duration: 450711ms

## Summary

- Pass: 13
- Warn: 1
- Fail: 1
- Total checks: 15

## Checks

| Check | Status | Duration (ms) | Detail |
| --- | --- | ---: | --- |
| Ops preflight (env/db/webhook/auth-billing) | WARN | 32882 | pass=3 warn=1 fail=0 skip=0 |
| Route smoke (launch-critical paths + /api/health) | FAIL | 405019 | No prebuilt .next output was available; reran route smoke with build but failed: ⨯ Unable to acquire lock at D:\PythonProjects\Koydo\.next\lock, is another instance of next build running? |
| Placement diagnostic scoring contract | PASS | 686 | Command passed. |
| Placement diagnostic flow contract | PASS | 788 | Command passed. |
| Audiobook checkpoint contract | PASS | 729 | Command passed. |
| Device gateway confidence contract | PASS | 713 | Command passed. |
| Review queue contract | PASS | 753 | Command passed. |
| Remediation tasking contract | PASS | 785 | Command passed. |
| Offline progress sync contract | PASS | 768 | Command passed. |
| Social cohorts and challenges contract | PASS | 774 | Command passed. |
| Creator pipeline contract | PASS | 691 | Command passed. |
| StoryForge cinema contract | PASS | 816 | Command passed. |
| Teacher access contract | PASS | 909 | Command passed. |
| Billing webhook processing lock contract | PASS | 757 | Command passed. |
| RevenueCat offerings resolution contract | PASS | 736 | Command passed. |

## Attention Items

- Ops preflight (env/db/webhook/auth-billing): pass=3 warn=1 fail=0 skip=0
- Route smoke (launch-critical paths + /api/health): No prebuilt .next output was available; reran route smoke with build but failed: ⨯ Unable to acquire lock at D:\PythonProjects\Koydo\.next\lock, is another instance of next build running?

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
