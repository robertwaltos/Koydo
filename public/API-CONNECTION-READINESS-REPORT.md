# API Connection Readiness Report

Generated: 2026-03-04T01:35:17.151Z
Source file: D:\PythonProjects\Koydo\.env
Billing mode: stripe_external
Translation provider: auto
TTS provider: openai

## Summary

- Ready: 4
- Needs keys: 0
- Optional pending: 1
- Not required: 4
- Total checks: 9

## Connections

| Connection | Status | Detail |
| --- | --- | --- |
| Supabase Core | READY | Auth, database, and server-side admin operations. Configured. |
| Stripe Billing | READY | Billing provider mode: stripe_external. Configured. |
| RevenueCat Native Billing | NOT_REQUIRED | Not required in current mode. Billing provider mode: stripe_external. |
| Upstash Redis Rate Limiting | NOT_REQUIRED | Not required in current mode. RATE_LIMIT_BACKEND=memory (explicit in-memory fallback mode). |
| AI Model Provider Access | READY | AI tutor/remediation/media generation providers. Optional keys not set: OPENAI_MEDIA_API_KEY. |
| TTS Primary Provider | READY | Primary TTS provider: openai. Configured. |
| Translation Provider | OPTIONAL_PENDING | Translation provider: auto. Ready for user-supplied keys: DEEPL_API_KEY | GOOGLE_TRANSLATE_API_KEY. |
| Parent Consent Email Delivery | NOT_REQUIRED | Not required in current mode. Local simulation mode configured. |
| Signup Welcome Email Delivery | NOT_REQUIRED | Not required in current mode. Local simulation mode configured. |
