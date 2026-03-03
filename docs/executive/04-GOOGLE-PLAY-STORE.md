# 04 — Google Play Store

> **Android Distribution, Play Console & Google Compliance**  
> Confidential · Executive Summary Document

---

## Executive Summary

Koydo is distributed on Android via the Google Play Store as an AAB (Android App Bundle). The app targets Android 8.0+ (API 26) with a 13+ target audience designation. In-app purchases flow through Google Play Billing via RevenueCat. The app carries an **IARC "Everyone" (E)** content rating with zero restricted content descriptors. Full Data Safety declarations, content rating responses, and store listing specifications are production-ready.

---

## 1. App Identity

| Field | Value |
|-------|-------|
| **Application ID** | `com.koydo.app` |
| **App Name** | Koydo |
| **Developer Account ID** | `4781832942850403435` |
| **Category** | Education |
| **Content Rating** | Everyone (E) — No descriptors |
| **Target Audience** | 13+ |
| **Minimum Android** | 8.0 (API 26) |
| **Target SDK** | API 34+ |
| **Privacy Policy URL** | https://koydo.app/privacy |

---

## 2. Submission Process

### Step-by-Step Workflow

| Step | Action | Details |
|------|--------|---------|
| 1 | **Build AAB** | `npm run build` → `npx cap sync android` → `./gradlew bundleRelease` |
| 2 | **Sign** | Release keystore (`koydo-release.keystore`) — NOT debug keystore |
| 3 | **Play Console** | Upload AAB to Internal Testing → Closed Testing → Open Testing → Production |
| 4 | **Store Listing** | Title, description, screenshots (en-US + es-ES) |
| 5 | **Content Rating** | Complete IARC questionnaire (all "No" for restricted content) |
| 6 | **Data Safety** | Complete Data Safety form (see Section 4) |
| 7 | **Target Audience** | Set to 13+ with COPPA compliance |
| 8 | **App Access** | Provide test account credentials if gated content |
| 9 | **Submit** | Submit for review |
| 10 | **Monitor** | Track crash rate, ANR rate, RevenueCat events |

### Android Build Configuration

| Setting | Value |
|---------|-------|
| Build Type | Release (not debug) |
| ProGuard/R8 | Enabled (`minifyEnabled true`) |
| Output Format | AAB (not APK) |
| Keystore | `koydo-release.keystore` (NOT committed to Git) |

---

## 3. Content Rating (IARC)

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

**Expected IARC Result**: **Everyone (E) — No descriptors**

---

## 4. Data Safety Declaration

### Data Collection Summary

| Data Type | Collected | Shared | Purpose | Required |
|-----------|-----------|--------|---------|----------|
| Email address | Yes | No | Account creation, login | Yes |
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
| Crash analytics | Crash logs, device info | Bug diagnosis |

**No data is sold to third parties. No data is used for advertising.**

### Security Practices

| Practice | Status |
|----------|--------|
| Data encrypted in transit (HTTPS/TLS 1.2+) | ✅ |
| Data encrypted at rest (AES-256) | ✅ |
| Users can request data deletion | ✅ |
| Google Play Families Policy compliance | ✅ |
| No sensitive device permissions beyond declared | ✅ |

### Data Retention

| Data Type | Retention |
|-----------|-----------|
| Account data | Until deletion + 30-day grace period |
| Learning progress | Until account deletion |
| Analytics (Mixpanel) | Per Mixpanel policy (consent-gated) |
| Crash logs | 90 days |

---

## 5. Store Listing Specifications

### Required Assets

| Asset | Specification | Status |
|-------|--------------|--------|
| Feature Graphic | 1024 × 500 px | Placeholder (design pending) |
| App Icon | 512 × 512 px | Placeholder (design pending) |
| Phone Screenshots | Min 1080 × 1920 px, 2–8 required | Specified, pending capture |
| 7" Tablet Screenshots | 1200 × 1600 px | Optional |
| 10" Tablet Screenshots | 1920 × 1200 px | Optional |

### Screenshot Scenes (Same as iOS)

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

### Localizations

- **en-US** (English — United States) — Required
- **es-ES** (Spanish — Spain) — Required

---

## 6. Android-Specific Technical Requirements

### App Links (Deep Linking)

| Component | Status |
|-----------|--------|
| `assetlinks.json` at `/.well-known/` | ✅ Complete |
| SHA-256 fingerprint from release keystore | ✅ Inserted |
| Intent filter in AndroidManifest.xml | ✅ Configured |
| Paths: `/explore/*`, `/lessons/*`, `/auth/callback` | ✅ Registered |

### Build Checklist

- [ ] `applicationId` = `com.koydo.app`
- [ ] `versionCode` incremented (monotonically increasing integer)
- [ ] `versionName` matches iOS version
- [ ] ProGuard/R8 enabled for release
- [ ] Keystore file not committed to Git
- [ ] `STORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD` in CI secrets
- [ ] Billing permission declared: `com.android.vending.BILLING`
- [ ] Target SDK API 34+

### Receipt Validation

| Route | Status | Notes |
|-------|--------|-------|
| `/api/receipt/verify/google` | Scaffolded | Requires `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` before launch |

---

## 7. Play Console Form Answers (Quick Reference)

| Question | Answer |
|----------|--------|
| Does your app collect or share any required user data types? | Yes |
| Is all user data encrypted in transit? | Yes |
| Do you provide a way for users to request data deletion? | Yes |
| Does your app collect data types not listed? | No |
| Is your app a game? | No |
| Does your app target children or has it been reviewed for child safety? | Yes (COPPA-compliant, age-gated) |

---

## 8. Staged Rollout Strategy

| Phase | Track | Audience | Purpose |
|-------|-------|----------|---------|
| 1 | Internal Testing | Dev team | Build verification |
| 2 | Closed Testing | Invited beta testers | Feature validation |
| 3 | Open Testing | Public beta | Broader feedback |
| 4 | Production (Staged) | 5% → 20% → 50% → 100% | Gradual rollout |

**Rollback plan**: Pause rollout or submit expedited update if critical issues surface in crash-free session monitoring.

---

## 9. Compliance Summary

| Requirement | Status |
|-------------|--------|
| Data Safety form completed | ✅ Ready |
| IARC content rating completed | ✅ Ready |
| COPPA compliance (age-gate + parental consent) | ✅ Implemented |
| Privacy Policy accessible | ✅ https://koydo.app/privacy |
| Account deletion available | ✅ Settings → Danger Zone |
| No deceptive behavior | ✅ Subscription terms clear |
| Subscription cancellation easy to find | ✅ Deep-linked in settings |

---

*Document generated from Koydo Android distribution documentation. For Play Store questions, contact the mobile team.*
