# Google Play Data Safety Declaration Worksheet

**App ID:** `com.koydo.app`
**Last Updated:** 2026-03-04

Official sources:
- Data Safety: https://support.google.com/googleplay/android-developer/answer/10787469
- Target audience/content: https://support.google.com/googleplay/android-developer/answer/9898842
- Families policy: https://support.google.com/googleplay/android-developer/answer/9285070

This worksheet is for release managers. Fill every row from the shipping production configuration.

---

## 1) Baseline Answers

| Console Question | Current Expected Answer | Notes |
|---|---|---|
| Does your app collect or share required user data types? | Yes | Account + usage + subscription flows collect data |
| Is all collected data encrypted in transit? | Yes | HTTPS/TLS only |
| Can users request deletion? | Yes | In-app deletion + public deletion URL |

Deletion URL for Play form:
- `https://koydo.app/account-deletion`
- `https://koydo.app/data-deletion`

---

## 2) Data-Type Decision Table (Fill Before Submission)

| Data Type | Collects? | Shared? | Required/Optional | Purpose | Evidence Source |
|---|---|---|---|---|---|
| Email address | Fill | Fill | Fill | Auth/account support | Auth/signup flows |
| User IDs | Fill | Fill | Fill | Core functionality | Account/session flows |
| Name / display name | Fill | Fill | Fill | Profile functionality | Profile tables/forms |
| Phone number | Fill | Fill | Fill | OTP login (if enabled) | Sign-in phone flow |
| Purchase history | Fill | Fill | Fill | Subscription management | Billing/revenue flows |
| App interactions | Fill | Fill | Fill | Learning progression/analytics | Telemetry endpoints |
| User-generated content | Fill | Fill | Fill | Social/support/learning inputs | Social/support/pronunciation records |
| Device identifiers / push token | Fill | Fill | Fill | Notifications | Push token persistence |
| Diagnostics/crash data | Fill | Fill | Fill | Stability/operations | Only if app-integrated SDKs/processors collect this |

Rule: if transmitted off-device, it is collected for Data Safety purposes.

---

## 3) Processor Matrix (Release-Dependent)

Mark each provider `Enabled` or `Disabled` for this release.

| Provider | Enabled? | Data Categories Potentially Affected |
|---|---|---|
| Supabase | Fill | Auth/profile/progress/events |
| RevenueCat | Fill | Purchases/subscription metadata |
| Stripe | Fill | Billing metadata |
| Mixpanel | Fill | Analytics/device identifiers |
| DeepL | Fill | Translation input text |
| Google Translation | Fill | Translation input text |
| Licensed pronunciation API | Fill | Pronunciation text + metadata |
| OpenAI | Fill | AI feature text payloads |
| ElevenLabs | Fill | TTS text payloads |

If `Disabled`, do not include in final Data Safety declaration for that release.

---

## 4) Audience & Families Cross-Check

Before submission:
- [ ] Selected audience reflects actual users, not policy-avoidance choices
- [ ] If children are in scope, Families policy obligations are implemented
- [ ] Listing copy and app behavior are consistent with audience selection

---

## 5) Final Release Gate

- [ ] Data Safety answers match production build behavior exactly
- [ ] Privacy policy text matches declared collection/sharing
- [ ] Reviewer can access deletion flow and key gated features
- [ ] Internal reviewer signs off checklist date + release version

Record sign-off:
- Release version: `________`
- Reviewer: `________`
- Date (UTC): `________`
