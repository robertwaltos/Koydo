# Koydo — Data Safety & App Privacy Source of Truth

**Purpose**: canonical prep document for:
- Google Play Data Safety form
- Apple App Privacy (Nutrition Labels)

**Last verified**: 2026-03-04

Use this with:
- `docs/google-play-data-safety.md`
- `store-assets/google-play/DATA-SAFETY-DECLARATIONS.md`

Important: submit declarations from the exact production build configuration. Do not submit stale values from old releases.

---

## 1) Data Handling Baseline (Observed in Repo)

| Data Type | Observed in Codebase | Likely Declaration Impact |
|---|---|---|
| Email address | Yes (auth/signup) | Personal info / Contact info |
| User ID / account identifiers | Yes | Identifiers / User ID |
| Display/profile name | Yes | Personal info |
| Phone number | Optional flow present | Personal info (optional) |
| Purchase/subscription history | Yes | Financial / Purchases |
| Learning interactions/events | Yes | App activity / Usage data |
| User-generated text (cohort/challenge/support/transcript fields) | Yes | User content / App activity |
| Device push token | Yes (native push setup) | Device IDs / Identifiers |
| Microphone access | Yes (iOS usage description + speaking lab recorder) | Permission disclosure; no default raw-audio upload path observed |
| Raw location data | No location permission observed | Typically not declared |
| Camera data | No camera permission observed | Typically not declared |

---

## 2) Third-Party Processors Matrix

Always evaluate processors from the release environment, not only package dependencies.

| Processor / Service | Observed | Typical Data Scope | Release Condition |
|---|---|---|---|
| Supabase | Yes | Auth/profile/progress/events/push token storage | Always on |
| RevenueCat | Yes | Subscription status and purchase metadata (native) | Native billing paths |
| Stripe | Yes | Web billing events/checkout metadata | Web/external billing mode |
| Mixpanel | Yes | Analytics events/device identifiers | Consent-gated; native disabled by runtime gate |
| DeepL | Optional | User-provided translation text | If `DEEPL_API_KEY` present and selected |
| Google Translation API | Optional | User-provided translation text | If `GOOGLE_TRANSLATE_API_KEY` present and selected |
| Licensed pronunciation endpoint | Optional | Target/transcript text, confidence, duration metadata | If endpoint configured |
| OpenAI | Optional | Lesson/text processing for AI features | If OpenAI-backed services enabled |
| ElevenLabs | Optional | Lesson text for TTS generation | If ElevenLabs TTS enabled |

---

## 3) Google Play Data Safety Rules to Apply

Official reference: https://support.google.com/googleplay/android-developer/answer/10787469

Key rule reminders:
- Data is considered **collected** when it is transmitted off-device.
- "Shared" classification depends on Google’s definitions and service-provider handling; evaluate each processor role carefully.
- Deletion request path must be accurate for real users.

Required deletion endpoints for store forms:
- `https://koydo.app/account-deletion`
- `https://koydo.app/data-deletion`

---

## 4) Apple App Privacy Rules to Apply

Official reference: https://developer.apple.com/help/app-store-connect/manage-app-privacy/overview-of-app-privacy-details

Key rule reminders:
- Declare data collected by your app and integrated SDKs.
- Mark whether data is linked to user identity.
- Mark whether data is used for tracking across apps/sites.
- If third-party sign-in is offered, ensure Sign in with Apple parity compliance (App Review Guideline 4.8).

---

## 5) Pre-Submit Verification Checklist (Required)

Before any store submission:
- [ ] Confirm release environment variables and enabled providers
- [ ] Confirm mobile build feature flags (analytics, social, language providers, push)
- [ ] Reconcile declarations across Apple + Google docs
- [ ] Confirm privacy policy text matches actual data flows
- [ ] Confirm account deletion path works from production
- [ ] Confirm no placeholders remain in reviewer instructions

If any item changes, update this document and `docs/google-play-data-safety.md` before submission.
