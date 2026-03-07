# Koydo — Google Play Store: Complete Submission Guide

**Last Updated:** 2026-03-07
**Confidential** — For internal release management only.

Official References:
- [Prepare App for Review](https://support.google.com/googleplay/android-developer/answer/9859455)
- [App Access Policy](https://support.google.com/googleplay/android-developer/answer/15748846)
- [Data Safety Form](https://support.google.com/googleplay/android-developer/answer/10787469)
- [Target Audience & Content](https://support.google.com/googleplay/android-developer/answer/9898842)
- [Families Policy](https://support.google.com/googleplay/android-developer/answer/9285070)
- [Target API Requirements](https://developer.android.com/google/play/requirements/target-sdk)
- [Android App Bundles](https://developer.android.com/guide/app-bundle)
- [Store Listing Graphics](https://support.google.com/googleplay/android-developer/answer/1078870)
- [Content Ratings](https://support.google.com/googleplay/android-developer/answer/9859655)

---

## 1. App Identity

| Field | Value |
|-------|-------|
| **Application ID** | `com.koydo.app` |
| **App Name** | Koydo |
| **Developer Account ID** | `4781832942850403435` |
| **Category** | Education |
| **Content Rating** | Everyone (E) — No descriptors |
| **Target Audience** | Ages 3 and up (Kids/Families) |
| **Minimum Android** | 8.0 (API 26) |
| **Target SDK** | API 36 |
| **Compile SDK** | API 36 |
| **Privacy Policy URL** | https://koydo.app/privacy |

---

## 2. Prerequisites Checklist

- [ ] AAB built via `./gradlew bundleRelease` with no errors
- [ ] Release keystore available (`koydo-release.keystore`, NOT debug keystore)
- [ ] Google Play Console access as **Release Manager** or **Owner**
- [ ] All store assets prepared (see `store-assets/google-play/`)
- [ ] Android versioning verified: `android/variables.gradle` — `minSdkVersion = 24`, `targetSdkVersion = 36`, `compileSdkVersion = 36`

---

## 3. Build & Upload

### 3.1 Generate the Signed AAB

```bash
cd android
./gradlew bundleRelease
```

**Output**: `android/app/build/outputs/bundle/release/app-release.aab`

### 3.2 Verify the AAB

```bash
ls -lh android/app/build/outputs/bundle/release/app-release.aab
jarsigner -verify -verbose -certs android/app/build/outputs/bundle/release/app-release.aab
```

If delivered app exceeds Play size constraints, use Play Asset Delivery / Play Feature Delivery.

### 3.3 Build Checklist

- [ ] `applicationId` = `com.koydo.app`
- [ ] `versionCode` incremented (monotonically increasing integer)
- [ ] `versionName` matches iOS version
- [ ] ProGuard/R8 enabled (`minifyEnabled true`)
- [ ] Output format: AAB (not APK)
- [ ] Keystore file NOT committed to Git
- [ ] `STORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD` in CI secrets
- [ ] Billing permission declared: `com.android.vending.BILLING`

---

## 4. Release Tracks

### 4.1 Internal Testing (recommended first)
1. Play Console -> Testing -> Internal testing
2. Create new release -> Upload `app-release.aab`
3. Set release name to match `versionName/versionCode`
4. Add release notes from `store-assets/google-play/en-US/changelogs/1.txt`
5. Save -> Review release

### 4.2 Staged Rollout to Production

| Phase | Track | Audience | Purpose |
|-------|-------|----------|---------|
| 1 | Internal Testing | Dev team | Build verification |
| 2 | Closed Testing | Invited beta testers | Feature validation |
| 3 | Open Testing | Public beta | Broader feedback |
| 4 | Production (Staged) | 5% -> 20% -> 50% -> 100% | Gradual rollout |

**Rollback plan**: Pause rollout or submit expedited update if critical issues surface.

---

## 5. Store Listing

Navigate to: Grow -> Store presence -> Main store listing

### App Details
- [ ] **App name**: from `store-assets/google-play/en-US/title.txt`
- [ ] **Short description**: from `store-assets/google-play/en-US/short_description.txt`
- [ ] **Full description**: from `store-assets/google-play/en-US/full_description.txt`

### Graphics

| Asset | Specification |
|-------|--------------|
| App Icon | 512 x 512 px PNG |
| Feature Graphic | 1024 x 500 px PNG |
| Phone Screenshots | Min 1080 x 1920 px, 2-8 required |
| 7" Tablet Screenshots | 1200 x 1600 px (optional) |
| 10" Tablet Screenshots | 1920 x 1200 px (optional) |

Always validate against [Google's live asset rules](https://support.google.com/googleplay/android-developer/answer/1078870) before submitting.

### 8 Screenshot Scenes

| # | Scene | Overlay Text |
|---|-------|-------------|
| 1 | Dashboard | "Study Smarter Every Day" |
| 2 | AI Lesson | "Personalized Lessons That Adapt to You" |
| 3 | Quiz Engine | "AI Quizzes. Instant Explanations." |
| 4 | Exam Prep | "Nail Your Exams. Score Predictions Included." |
| 5 | Flashcards | "Flashcards That Actually Stick" |
| 6 | Progress | "Track Every Step of Your Journey" |
| 7 | Offline Mode | "Study Anywhere. No Wi-Fi Needed." |
| 8 | Premium Paywall | "Go Premium. Unlock Everything." |

### Translations
- [ ] **en-US** (English) — Required
- [ ] **es-ES** (Spanish) from `store-assets/google-play/es-ES/`

---

## 6. Content Rating (IARC)

Navigate to: Policy -> App content -> Content rating

### Questionnaire Responses

| Section | Question | Answer |
|---------|----------|--------|
| Violence | Any violence? | No |
| Violence | Cartoon violence? | No |
| Violence | Realistic/graphic violence? | No |
| Sexual Content | Sexual content or nudity? | No |
| Language | Profanity or crude humor? | No |
| Substances | Alcohol, tobacco, or drugs? | No |
| User Interaction | Users interact with each other? | Yes (moderated Q&A) |
| User Interaction | Interact with strangers? | No |
| User Interaction | User-generated content visible? | Yes (moderated) |
| User Interaction | Report/block tools? | Yes |
| Location | Share user location? | No |

**Expected IARC Result**: Everyone (E) — No descriptors

---

## 7. Data Safety Declaration

Navigate to: Policy -> App content -> Data safety

### Baseline Answers

| Console Question | Answer | Notes |
|------------------|--------|-------|
| Does your app collect or share required user data types? | Yes | Account + usage + subscription flows |
| Is all collected data encrypted in transit? | Yes | HTTPS/TLS only |
| Can users request deletion? | Yes | In-app + https://koydo.app/account-deletion |

### Data Collection Summary

| Data Type | Collected | Shared | Purpose | Required |
|-----------|-----------|--------|---------|----------|
| Email address | Yes | No | Account creation, login | Yes |
| Name / display name | Yes | No | Profile personalization | Yes |
| User IDs | Yes | No | App functionality | Yes |
| Purchase history | Yes | No | Subscription management | Yes |
| App interactions | Yes | No | Personalization, analytics | Yes |
| Crash logs | Yes | No | Bug fixes | Yes |
| Diagnostics | Yes | No | Performance improvement | Yes |
| Push token (device ID) | Yes | No | Push notifications | Yes |

### Third-Party Data Sharing

| Partner | Data Shared | Purpose |
|---------|-------------|---------|
| RevenueCat | User ID, purchase receipts | Subscription management |
| Supabase | Account + learning data | Backend / data storage |
| Mixpanel | Analytics events (adults only) | Usage analytics |

**No data is sold to third parties. No data is used for advertising.**

### Processor Matrix (verify each release)

| Provider | Data Categories |
|----------|----------------|
| Supabase | Auth/profile/progress/events |
| RevenueCat | Purchases/subscription metadata |
| Stripe | Billing metadata (web only) |
| Mixpanel | Analytics/device identifiers (adults only, consent-gated) |
| OpenAI | AI feature text payloads |
| Google Gemini | AI feature text payloads |
| Anthropic Claude | AI feature text payloads |
| xAI Grok | AI feature text payloads |
| ElevenLabs | TTS text payloads |

### Security Practices

| Practice | Status |
|----------|--------|
| Data encrypted in transit (HTTPS/TLS 1.2+) | Yes |
| Data encrypted at rest (AES-256) | Yes |
| Users can request data deletion | Yes |
| Google Play Families Policy compliance | Yes |

### Data Retention

| Data Type | Retention |
|-----------|-----------|
| Account data | Until deletion + 30-day grace period |
| Learning progress | Until account deletion |
| Analytics (Mixpanel) | Per Mixpanel policy (consent-gated) |
| Crash logs | 90 days |

---

## 8. Target Audience & Families Policy

Navigate to: Policy -> App content -> Target audience and content

### Declarations

| Question | Answer |
|----------|--------|
| Does your app collect or share required user data types? | Yes |
| Is your app a game? | No |
| Does your app target children? | Yes (COPPA-compliant, age-gated) |
| Does the app allow users to interact? | Yes (moderated, restricted for under-11) |
| Does the app contain ads? | No |
| App complies with COPPA? | Yes |
| App uses a neutral age gate? | Yes |
| Contact for privacy questions | dpo@koydo.app |

### Families Policy Compliance

| Requirement | Status |
|-------------|--------|
| No behavioral advertising | Enforced |
| No freeform chat for children | Enforced (blocked under-11, COPPA override for 11-12) |
| Age-appropriate content filters | Enforced (content moderation fails closed) |
| Parental gate on external links & purchases | Enforced |
| Analytics disabled for children | Enforced (Mixpanel + xAPI-lite) |
| Parental consent flow for under-13 | Implemented |

---

## 9. App Access (Reviewer Credentials)

Navigate to: Policy -> App content -> App access

### Demo Account

| Email | Password | Notes |
|-------|----------|-------|
| `google-review@koydo.app` | `KoydoReview!2026` | Non-expiring. Seeded by `scripts/seed-review-accounts.mjs` |

### Review Notes (paste into Play Console -> Policy -> App content -> App access)

```
Koydo is an AI-powered educational platform for learners ages 3 to adult.

DEMO LOGIN:
  Email: google-review@koydo.app
  Password: KoydoReview!2026

STEPS TO ACCESS ALL FEATURES:
1. Open the app and tap "Sign In"
2. Enter the demo credentials above
3. Browse the Explore page: 800+ learning modules organized by subject
4. Tap any module to start video lessons and quizzes
5. Visit Games for 225+ educational games
6. Visit Student Dashboard for learning progress

CHILD SAFETY:
- COPPA-compliant: analytics disabled for under-13, parental gate on
  external links and purchases, content moderation fails closed
- Families Policy compliant: no behavioral advertising, no freeform
  chat for children, age-appropriate content filters

IN-APP PURCHASES:
- Free tier includes all content
- Premium available via Google Play Billing (RevenueCat)
- Plans: Koydo Plus ($5.99/mo), Koydo Family ($14.99/mo)

DATA DELETION:
- Settings -> Delete Account
- Web: https://koydo.app/account-deletion
- All data removed within 30 days

IMPORTANT:
- These demo credentials do not expire
- No geographic restrictions: app works worldwide
- No device restrictions: works on any Android device
```

---

## 10. Android-Specific Technical Requirements

### App Links (Deep Linking)

| Component | Status |
|-----------|--------|
| `assetlinks.json` at `/.well-known/` | Complete |
| SHA-256 fingerprint from release keystore | Inserted |
| Intent filter in AndroidManifest.xml | Configured |
| Paths: `/explore/*`, `/lessons/*`, `/auth/callback` | Registered |

### Receipt Validation

| Route | Status | Notes |
|-------|--------|-------|
| `/api/receipt/verify/google` | Scaffolded | Requires `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` (`koydo-489300-c0d5d1c481de.json`) |

---

## 11. Environment Checklist (Must Pass Before Release)

Run: `node scripts/check-env.mjs --runtime production --fail-on-warn`

### Required Production Environment Variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_APP_URL` | Production URL |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase admin |
| `UPSTASH_REDIS_REST_URL` | Rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | Rate limiting |
| `STRIPE_SECRET_KEY` | Stripe (web) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhooks |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe (web) |
| `RESEND_API_KEY` | Email |
| `PARENT_CONSENT_FROM_EMAIL` | Consent emails |
| `PARENT_CONSENT_TOKEN_SECRET` | HMAC signing |
| `BILLING_PROVIDER_MODE` | `app_store_iap` for native |
| `REVENUECAT_WEBHOOK_SECRET` | Webhook auth |

### Anti-Stall Controls (Every Release)

1. Prevent Vercel deploy failure: `npx vercel --prod --yes --archive=tgz`
2. Run checks in order:
   - `npm run lint`
   - `npm run build`
   - `npm run billing:revenuecat:resolve:test`
   - `npm run billing:webhook:processing-lock:test`
3. Block release on any failed check
4. Confirm no secrets in markdown or source files

---

## 12. Feature Gating

These routes are centrally controlled via environment variables and default to open:

| Feature | Env Var | Default |
|---------|---------|---------|
| Experience Hub | `NEXT_PUBLIC_EXPERIENCE_HUB_LAUNCH_PENDING` | `false` (open) |
| Experience Hub Games | `NEXT_PUBLIC_EXPERIENCE_HUB_GAMES_LAUNCH_PENDING` | `false` (open) |
| Immersive Science Lab | `NEXT_PUBLIC_SCIENCE_LAB_IMMERSIVE_PENDING` | `false` (open) |

Code: `src/lib/platform/launch-readiness.ts`

To gate a feature: set env var to `true` and redeploy. Route redirects to `/coming-soon`.

---

## 13. Submit for Review

1. Play Console -> Publishing overview
2. Resolve all blocking policy warnings/errors
3. Submit for review (production) or roll out to testing track

---

## 14. Post-Submission Monitoring

| Timeline | Action |
|----------|--------|
| 0-24 hours | Check for policy rejection emails |
| 1-7 days | Monitor review status in Play Console |
| After approval | Monitor crash-free users and ANR metrics |
| 48 hours in | Validate purchase/webhook flows |
| 1 week | Review ratings and policy messages |

---

## 15. Common Rejection Risks

| Risk | Prevention |
|------|------------|
| Data Safety mismatch | Re-audit declarations from production behavior before submit |
| Incomplete app access | Provide persistent, tested reviewer credentials and exact steps |
| Misleading target audience | Choose only real audience groups; align with Families obligations |
| Broken metadata | Ensure listing claims/screenshots reflect what reviewers can use |
| Policy or API-level non-compliance | Keep target API compliant with current Play requirements |

---

## Internal Test Accounts

| Email | Password | Role |
|-------|----------|------|
| robert@waltos.net | MyKodoApp55125 | Primary tester / Owner |
| marek@waltos.net | MyKodoApp55125 | Tester |
| pwaltos@gmail.com | MyKodoApp55125 | Tester |
| nataliawaltos93@gmail.com | MyKodoApp55125 | Tester |
| cherlloydgirl9@gmail.com | MyKodoApp55125 | Tester |

**IMPORTANT: Never delete the `google-review@koydo.app` account.** Google can re-review at any time.

---

## Seeding Instructions

```bash
node scripts/seed-review-accounts.mjs
```

- [ ] Run on **production** Supabase before submission
- [ ] Verify login works: `google-review@koydo.app` on Android build
- [ ] Paste review notes into Play Console
- [ ] Screenshots uploaded
