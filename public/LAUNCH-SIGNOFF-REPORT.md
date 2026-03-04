# Launch Signoff Report

Generated: 2026-03-04T06:28:48.076Z
Source file: D:\PythonProjects\Koydo\.env.production.audit
Runtime gate: production live-mode required

## Summary

- Overall: BLOCKED
- Pass: 4
- Warn: 0
- Fail: 2
- Total steps: 6

## Gate Steps

| Step | Status | Duration (ms) | Detail |
| --- | --- | ---: | --- |
| Production Build | FAIL | 198164 | Next.js build worker exited with code: 4294967295 and signal: null |
| Env Readiness (Production Strict) | PASS | 94 | pass=20 warn=0 fail=0 runtime=production |
| Production Env Checklist | PASS | 161 | pass=20 warn=0 fail=0 |
| Ops Preflight (Production Audit) | PASS | 7246 | pass=3 warn=0 fail=0 skip=1 |
| Backend Integration Smoke (Full) | FAIL | 450801 | pass=13 warn=1 fail=1 |
| API Readiness (Production Live) | PASS | 110 | ready=7 needs_keys=0 optional_pending=0 not_required=2 |

## Blockers

- Production Build: Next.js build worker exited with code: 4294967295 and signal: null
- Backend Integration Smoke (Full): pass=13 warn=1 fail=1

## Artifacts

- public/LAUNCH-SIGNOFF-REPORT.json
- public/LAUNCH-SIGNOFF-REPORT.md
- public/BACKEND-INTEGRATION-SMOKE-REPORT.json
- public/API-CONNECTION-READINESS-PROD-LIVE.json
- public/PRODUCTION-ENV-CHECKLIST.json
- PRODUCTION-ENV-CHECKLIST.md
