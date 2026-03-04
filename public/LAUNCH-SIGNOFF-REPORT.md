# Launch Signoff Report

Generated: 2026-03-04T06:16:02.074Z
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
| Production Build | FAIL | 13025 | ⨯ Unable to acquire lock at D:\PythonProjects\Koydo\.next\lock, is another instance of next build running? |
| Env Readiness (Production Strict) | PASS | 97 | pass=20 warn=0 fail=0 runtime=production |
| Production Env Checklist | PASS | 173 | pass=20 warn=0 fail=0 |
| Ops Preflight (Production Audit) | PASS | 6646 | pass=3 warn=0 fail=0 skip=1 |
| Backend Integration Smoke (Full) | FAIL | 187295 | pass=13 warn=1 fail=1 |
| API Readiness (Production Live) | PASS | 101 | ready=7 needs_keys=0 optional_pending=0 not_required=2 |

## Blockers

- Production Build: ⨯ Unable to acquire lock at D:\PythonProjects\Koydo\.next\lock, is another instance of next build running?
- Backend Integration Smoke (Full): pass=13 warn=1 fail=1

## Artifacts

- public/LAUNCH-SIGNOFF-REPORT.json
- public/LAUNCH-SIGNOFF-REPORT.md
- public/BACKEND-INTEGRATION-SMOKE-REPORT.json
- public/API-CONNECTION-READINESS-PROD-LIVE.json
- public/PRODUCTION-ENV-CHECKLIST.json
- PRODUCTION-ENV-CHECKLIST.md
