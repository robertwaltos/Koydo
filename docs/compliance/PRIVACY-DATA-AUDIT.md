# Koydo Privacy Data Collection Audit

**Date**: 2026-03-04 | **Audited by**: Automated codebase scan

---

## Data Collection Inventory

| Data Category | Data Collected | Purpose | Linked to User | Shared with Third Party | Code Location |
|---|---|---|---|---|---|
| **Authentication** | Email, user ID | Account management | Yes | No (Supabase internal) | `src/lib/supabase/`, auth routes |
| **OAuth** | Profile from Google/Facebook/Apple/X | Third-party login | Yes | Yes (OAuth provider) | `src/lib/config/env.ts` |
| **Learning Events** | Lesson ID, score, time, quiz answers | Educational analytics, adaptive learning | Yes | No | `src/lib/analytics/learning-events.ts` |
| **Mixpanel Analytics** | Page views, lesson completion | Product analytics | Yes | Yes (Mixpanel) | `src/lib/analytics/mixpanel.ts` |
| **User Profile** | Display name, grade level, age | Content gating, COPPA | Yes | No | `src/lib/profiles/` |
| **Parental Consent** | Parent email, consent method, region | COPPA compliance | Yes | No | `src/app/api/compliance/parent-consent/` |
| **Stripe Payments** | Email, payment method (tokenized), billing address | Payment processing | Yes | Yes (Stripe) | `src/lib/billing/stripe-client.ts` |
| **RevenueCat IAP** | Purchase events, subscription status | Mobile IAP | Yes | Yes (RevenueCat) | `src/lib/billing/revenuecat-*.ts` |
| **AI Tutor Conversations** | Messages, lesson context | AI tutoring, remediation | Yes | Yes (OpenAI, Anthropic, Google, Grok) | `src/lib/ai/follow-up.ts` |
| **Content Moderation** | User-generated text, moderation decisions | Child safety | Yes | Yes (OpenAI, Anthropic, Google, Grok) | `src/lib/ai/moderation.ts` |
| **TTS Audio** | Lesson text for narration | Audio lessons | Yes | Yes (OpenAI, ElevenLabs) | TTS config in `env.ts` |
| **Email Delivery** | Transactional emails | Account notifications | Yes | Yes (Resend) | `src/lib/email/` |
| **Google Classroom** | Student roster, assignments (if enabled) | LMS sync | Yes | Yes (Google Classroom API) | `src/lib/integrations/google-classroom-auth.ts` |
| **User Agent** | Browser/OS/device string | Diagnostics | Yes | No | `src/app/api/telemetry/events/route.ts` |
| **Consent State** | Analytics consent choice | GDPR compliance | Minimal | No | `src/lib/consent/tracking-consent.ts` |
| **Offline Progress** | Cached lesson progress | Offline learning | Yes | No (local device) | `src/lib/offline/progress-db.ts` |

---

## Third-Party Data Sharing Summary

| Service | Purpose | Data Shared |
|---|---|---|
| Supabase | Auth + DB | All user data (encrypted at rest) |
| Stripe | Payments | Email, billing, payment tokens |
| RevenueCat | Mobile IAP | Purchase events, subscriptions |
| Mixpanel | Analytics | Page views, events (adults only, consent-gated) |
| OpenAI | AI tutoring, moderation, TTS, images | Conversations, content, lesson text |
| Anthropic | AI tutoring | Conversations |
| Google Gemini | AI tutoring, moderation | Conversations, content |
| Grok (xAI) | AI tutoring | Conversations |
| ElevenLabs | TTS | Lesson text |
| Resend | Email | Transactional emails |
| Google Classroom | LMS sync (if enabled) | Roster, assignments, grades |

---

## Apple Privacy Nutrition Labels

### Data Used to Track You
- **None** — No advertising or cross-app tracking

### Data Linked to You
- Email address (account)
- User ID
- Purchase history (Stripe/RevenueCat)
- Usage data (learning events)

### Data Not Linked to You
- Diagnostics (crash reports)

### Data Not Collected
- Location, Health & Fitness, Contacts, Search History, Browsing History, Advertising Data

---

## Google Play Data Safety

### Data collected and shared
- Email (account management) — shared with Supabase, Resend
- Payment info — shared with Stripe/RevenueCat
- App activity — shared with Mixpanel (adults, consent-gated)
- App interactions — not shared

### Data not collected
- Location, Photos, Videos, Audio, Contacts, Calendar, Files, Health, SMS, Personal info beyond email/name/age

### Security practices
- Data encrypted in transit (HTTPS/TLS)
- Data encrypted at rest (Supabase)
- Data deletion available (account deletion flow)

---

## COPPA Compliance Status

- Children under 13: Mixpanel disabled, cookie banner suppressed, freeform chat disabled
- Parental consent: Email verification + optional micro-charge / ID check
- Content moderation: Fails CLOSED for child content
- Age tier system: Restricts features by age (external links, chat, purchases)
