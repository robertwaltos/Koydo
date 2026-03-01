# Koydo — Release Checklist

Use this checklist before every App Store / Google Play submission.

---

## Pre-Build: Code & Configuration

### Next.js Web App
- [ ] `npm run build` completes with **0 TypeScript errors**
- [ ] `npm run lint` passes with **0 errors**
- [ ] `next build` generates all pages/routes (verify page count matches expected)
- [ ] All environment variables in `.env.production` are set correctly
- [ ] `NEXT_PUBLIC_*` keys verified (Supabase URL, RC API keys)
- [ ] Server-only secrets are NOT prefixed with `NEXT_PUBLIC_`
- [ ] `server.url` is **NOT** present in `capacitor.config.ts` (live-reload setting removed)
- [ ] `capacitor.config.ts` has correct `appId: 'com.koydo.app'`
- [ ] Feature flags checked — no dev/test flags enabled in production

### Backend / API
- [ ] Supabase migrations applied to production database
- [ ] RevenueCat webhook URL configured: `https://koydo.app/api/revenuecat/webhook`
- [ ] `REVENUECAT_WEBHOOK_SECRET` env var set in production
- [ ] `SUPABASE_SERVICE_ROLE_KEY` env var set in production (server-only)
- [ ] All API routes tested (subscription status, RevenueCat webhook)
- [ ] Deep link routes functional (`/lesson/[id]`, etc.)

---

## Capacitor Sync
- [ ] `npx cap sync ios`
- [ ] `npx cap sync android`
- [ ] No Capacitor sync errors or plugin mismatches
- [ ] `npx cap doctor` shows no critical issues

---

## iOS Pre-Submission

### Xcode Configuration
- [ ] Bundle ID: `com.koydo.app`
- [ ] Version number updated (CFBundleShortVersionString)
- [ ] Build number incremented (CFBundleVersion)
- [ ] Signing certificate: **Apple Distribution** (not Development)
- [ ] Provisioning profile: **App Store Distribution**
- [ ] `App.entitlements` configured:
  - [ ] Associated Domains: `applinks:koydo.app`
  - [ ] Push Notifications (APS environment = production)
  - [ ] Keychain sharing group: `com.koydo.app`
- [ ] `Info.plist` camera/microphone/notification usage strings present (if applicable)
- [ ] Minimum iOS deployment target: **14.0+**

### App Store Connect
- [ ] New app version created in App Store Connect
- [ ] Build uploaded via Xcode Organizer or `xcrun altool`
- [ ] Build processed (Apple notarization complete — typically 10–30 min)
- [ ] Age rating set: **4+**
- [ ] Privacy Nutrition Labels completed (see `store-assets/DATA-SAFETY.md`)
- [ ] App Privacy Policy URL: `https://koydo.app/privacy`
- [ ] Screenshots uploaded (6.9" phone + 13" iPad) — see `store-assets/SCREENSHOT-SPEC.md`
- [ ] App Preview video uploaded (optional but recommended)
- [ ] Localizations complete: en-US, es-ES
- [ ] "Sign in with Apple" compliance verified (if applicable)
- [ ] RevenueCat package mapping matches `REVENUECAT-BLUEPRINT.md` (matrix-generated source of truth)
- [ ] Review Notes filled in (see `store-assets/app-store/en-US/review_notes.txt`)
- [ ] Test account credentials in Review Notes

### TestFlight
- [ ] Internal testers tested on minimum iOS version (14.0)
- [ ] External TestFlight review passed
- [ ] No crashes in TestFlight crash reports
- [ ] Push notifications received in TestFlight

---

## Android Pre-Submission

### Android Studio / Gradle
- [ ] `applicationId` = `com.koydo.app`
- [ ] `versionCode` incremented
- [ ] `versionName` updated (matches iOS)
- [ ] Build type: **release** (not debug)
- [ ] ProGuard / R8 enabled — `minifyEnabled true`
- [ ] Keystore: `koydo-release.keystore` (NOT the debug keystore)
- [ ] Keystore file **NOT** committed to Git
- [ ] `STORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD` in `gradle.properties` or CI secrets
- [ ] AAB (not APK) generated: `./gradlew bundleRelease`

### Google Play Console
- [ ] Developer Account ID verified: `4781832942850403435`
- [ ] New release created in Internal Testing → Closed Testing → Open Testing → Production (staged rollout)
- [ ] AAB uploaded and processed
- [ ] Data Safety form completed (see `store-assets/DATA-SAFETY.md`)
- [ ] Content rating questionnaire completed (see `store-assets/CONTENT-RATING-ANSWERS.md`)
- [ ] Store listing: en-US + es-ES metadata uploaded (see `store-assets/google-play/`)
- [ ] Screenshots uploaded (see `store-assets/SCREENSHOT-SPEC.md`)
- [ ] Feature Graphic (1024 × 500) uploaded
- [ ] Icon (512 × 512) uploaded
- [ ] Privacy Policy URL: `https://koydo.app/privacy`
- [ ] App category: **Education**
- [ ] Target audience: **13+**
- [ ] In-app products configured in Google Play billing
- [ ] `assetlinks.json` verified: `https://koydo.app/.well-known/assetlinks.json`

---

## Testing Gate

- [ ] Smoke test: login, view lesson, take quiz, view progress
- [ ] Premium purchase flow tested (sandbox/test environment)
- [ ] Restore purchases tested
- [ ] Push notification received
- [ ] Deep link (`https://koydo.app/lesson/1`) opens correct content
- [ ] Offline mode: download lesson, disable Wi-Fi, verify lesson loads
- [ ] App backgrounded and resumed — session still valid
- [ ] Dark mode UI looks correct
- [ ] Accessibility: VoiceOver (iOS) / TalkBack (Android) basic navigation

---

## Post-Submission
- [ ] Monitor crash-free session rate for first 24 hours
- [ ] Monitor RevenueCat Dashboard for purchase events
- [ ] Prepare rollback plan if critical bug found (submit expedited review or use rollout pause)
- [ ] Update `V1-LAUNCH-COORDINATION.md` submission status
- [ ] Update `LAUNCH-COMMAND-CENTER.md` with submission timestamp
