# API Connection Readiness Report

Generated: 2026-03-04T00:34:35.388Z
Source file: D:\PythonProjects\Koydo\.env.production.audit.example
Billing mode: stripe_external
Translation provider: auto
TTS provider: openai

## Summary

- Ready: 2
- Needs keys: 4
- Optional pending: 2
- Not required: 1
- Total checks: 9

## Connections

| Connection | Status | Detail |
| --- | --- | --- |
| Supabase Core | NEEDS_KEYS | Auth, database, and server-side admin operations. Placeholder values detected: NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY. Ready for user-supplied keys: NEXT_PUBLIC_SUPABASE_ANON_KEY | EXPO_PUBLIC_SUPABASE_KEY, SUPABASE_SERVICE_ROLE_KEY. |
| Stripe Billing | NEEDS_KEYS | Billing provider mode: stripe_external. Placeholder values detected: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY. Ready for user-supplied keys: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET. |
| RevenueCat Native Billing | NOT_REQUIRED | Not required in current mode. Billing provider mode: stripe_external. |
| Upstash Redis Rate Limiting | NEEDS_KEYS | Distributed rate limiting and shared abuse throttling. Placeholder values detected: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN. Ready for user-supplied keys: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN. |
| AI Model Provider Access | READY | AI tutor/remediation/media generation providers. Optional keys not set: OPENAI_MEDIA_API_KEY. |
| TTS Primary Provider | READY | Primary TTS provider: openai. Configured. |
| Translation Provider | OPTIONAL_PENDING | Translation provider: auto. Ready for user-supplied keys: DEEPL_API_KEY | GOOGLE_TRANSLATE_API_KEY. |
| Parent Consent Email Delivery | NEEDS_KEYS | Compliance consent links and parent communication flow. Placeholder values detected: RESEND_API_KEY. Ready for user-supplied keys: RESEND_API_KEY. |
| Signup Welcome Email Delivery | OPTIONAL_PENDING | Post-signup welcome email with legal attachments. Placeholder values detected: RESEND_API_KEY. Ready for user-supplied keys: RESEND_API_KEY. |

## Launch Blockers

- Supabase Core: Auth, database, and server-side admin operations. Placeholder values detected: NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY. Ready for user-supplied keys: NEXT_PUBLIC_SUPABASE_ANON_KEY | EXPO_PUBLIC_SUPABASE_KEY, SUPABASE_SERVICE_ROLE_KEY.
- Stripe Billing: Billing provider mode: stripe_external. Placeholder values detected: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY. Ready for user-supplied keys: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET.
- Upstash Redis Rate Limiting: Distributed rate limiting and shared abuse throttling. Placeholder values detected: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN. Ready for user-supplied keys: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN.
- Parent Consent Email Delivery: Compliance consent links and parent communication flow. Placeholder values detected: RESEND_API_KEY. Ready for user-supplied keys: RESEND_API_KEY.
