# Native Feature Matrix — Koydo

> Last updated: 2026-06-26  
> Maintained by: Gemini (Track C: Store Packaging & Billing)

This document tracks the implementation status of all native (Capacitor) and platform-specific features.

---

## Feature Status Matrix

| Feature | Web | Android | iOS | Status | Notes |
|---|---|---|---|---|---|
| **Stripe Checkout** | ✓ | ✗ | ✗ | Complete | Web only — hidden behind `canUseStripe()` flag on native. App Store compliant. |
| **RevenueCat IAP** | ✗ | ✓ | ✓ | Complete | Native only — configured via `revenuecat-config.ts`. Keys loaded from env vars (nulls guarded). |
| **Paywall Screen** | ✗ | ✓ | ✓ | Complete | Full-screen native paywall at `/billing/paywall` — pricing from store, not hardcoded. |
| **Push Notifications** | ✗ | ✓ | ✓ | Complete | `@capacitor/push-notifications`. Token persisted to `device_push_tokens` table (migration `202602280011`). |
| **Push Permission UX** | ✗ | ✓ | ✓ | Scaffolded | Logic in `permission-prompt.ts`. Needs wire-up to lesson completion event in the lesson flow UI. |
| **Local Notifications** | ✗ | ✓ | ✓ | Complete | `@capacitor/local-notifications`. Scheduler at `local-scheduler.ts` — daily streak + lesson reminders. |
| **Deep Linking** | N/A | ✓ | ✓ | Complete | Handler updated to cover all AASA paths: `/explore/*`, `/lessons/*`, `/auth/callback`, `/modules/*`. |
| **Apple AASA File** | N/A | N/A | ✓ | Complete | At `public/.well-known/apple-app-site-association`. **⚠ Replace `TEAMID` placeholder** before App Store submission. |
| **Android assetlinks.json** | N/A | ✓ | N/A | Complete | At `public/.well-known/assetlinks.json`. Real SHA-256 fingerprint inserted from release keystore. |
| **Haptic Feedback** | ✗ | ✓ | ✓ | Complete | `@capacitor/haptics` installed. `haptics.ts` exports `lightTap()`, `successBuzz()`, `errorBuzz()`. Needs wire-up to lesson completion + stage card selection. |
| **Status Bar Control** | ✗ | ✓ | ✓ | Complete | `@capacitor/status-bar` installed. `status-bar.ts` exports `applyStatusBarTheme()`. Wire to theme provider. |
| **Safe Area Insets** | N/A | ✓ | ✓ | Complete | `viewport-fit=cover` added to layout. TopNav has `padding-top: env(safe-area-inset-top)`. SiteFooter has `padding-bottom: env(safe-area-inset-bottom)`. |
| **Splash Screen** | ✗ | ✓ | ✓ | Complete | `@capacitor/splash-screen` configured in `capacitor.config.ts`. |
| **App Rating Prompt** | ✗ | ✓ | ✓ | Complete | `@capacitor-community/in-app-review` installed. `app-rating.ts` exports `maybePromptForRating()`. Needs wire-up to lesson completion flow. |
| **Offline Banner** | ✓ | ✓ | ✓ | Complete | Works across all platforms. Uses `navigator.onLine` + Capacitor Network plugin. |
| **Restore Purchases** | ✗ | ✓ | ✓ | Complete | RevenueCat `restorePurchases()` + backend sync to `/api/receipt/verify/{platform}`. Loading state and error handling present. |
| **Manage Subscription** | Stripe Portal | Google Play | App Store | Complete | Platform-aware links in `settings-client.tsx`. iOS → Apple Subscriptions, Android → Play Store, Web → Stripe portal. |
| **Receipt Validation (Apple)** | N/A | N/A | ✓ | Scaffolded | Route exists at `/api/receipt/verify/apple`. **⚠ Requires implementation** with `APPLE_SHARED_SECRET` before going live. |
| **Receipt Validation (Google)** | N/A | ✓ | N/A | Scaffolded | Route exists at `/api/receipt/verify/google`. **⚠ Requires implementation** with `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` before going live. |
| **Subscription Status API** | ✓ | N/A | N/A | Complete | `/api/subscription/status` — GET, auth-guarded, returns `{ active, plan, expiresAt, ... }`. |
| **RevenueCat Webhook** | ✓ | N/A | N/A | Complete | `/api/revenuecat/webhook` — POST, HMAC-verified, syncs purchase events to Supabase `subscriptions` table. |
| **Entitlement Check** | ✓ | ✓ | ✓ | Complete | `src/lib/billing/entitlement-check.ts` — server-side (Supabase) + client-side (RC SDK native, API web). |
| **App Lifecycle Manager** | ✗ | ✓ | ✓ | Complete | `src/lib/platform/lifecycle.ts` — session refresh on resume, subscription re-check, progress persist on pause. |
| **Network Monitor** | ✓ | ✓ | ✓ | Complete | `src/lib/platform/network-monitor.ts` — `useNetworkStatus()` hook + `initNetworkMonitor()`. Integrates with OfflineBanner. |
| **Keyboard Handling** | N/A | ✓ | ✓ | Complete | `@capacitor/keyboard` installed. Configured in `capacitor.config.ts`: `resize: 'body'`, accessory bar visible. |
| **iOS Entitlements** | N/A | N/A | ✓ | Complete | `ios/App/App/App.entitlements` created with Associated Domains, Push Notifications, Keychain Sharing. |
| **WebView Security** | N/A | ✓ | ✓ | Complete | `android.allowMixedContent: false`, `ios.limitsNavigationsToAppBoundDomains: true` in `capacitor.config.ts`. |

---

## Pre-Store-Submission Checklist

### iOS
- [ ] Replace `TEAMID` in `public/.well-known/apple-app-site-association` with real Apple Team ID
- [ ] Configure `NEXT_PUBLIC_REVENUECAT_APPLE_KEY` in production environment
- [ ] Implement Apple receipt verification (`/api/receipt/verify/apple`) with `APPLE_SHARED_SECRET`
- [ ] Wire `applyStatusBarTheme()` to the theme provider on app launch
- [ ] Wire `successBuzz()` into lesson completion celebration
- [ ] Wire `lightTap()` into stage card selection
- [ ] Wire `maybePromptForRating()` to lesson completion (after celebration screen)
- [ ] Wire `shouldPromptForNotifications()` to lesson completion (at lesson #3)

### Android
- [ ] Configure `NEXT_PUBLIC_REVENUECAT_GOOGLE_KEY` in production environment
- [ ] Implement Google receipt verification (`/api/receipt/verify/google`) with service account JSON
- [ ] Run `Build › Android Release` and verify APK signs correctly with `proguard-android-optimize.txt`
- [ ] Verify `assetlinks.json` is reachable at `https://koydo.app/.well-known/assetlinks.json`

---

## Package Registry

| Package | Version | Purpose | Platform |
|---|---|---|---|
| `@capacitor/core` | ^8.1.0 | Capacitor bridge | All |
| `@capacitor/app` | ^8.0.1 | Deep linking, lifecycle | Native |
| `@capacitor/push-notifications` | ^8.0.1 | FCM / APNs push | Native |
| `@capacitor/local-notifications` | ^8.0.1 | Scheduled local alerts | Native |
| `@capacitor/splash-screen` | ^8.0.1 | Native launch screen | Native |
| `@capacitor/haptics` | ^8.0.1 | Haptic feedback | Native |
| `@capacitor/status-bar` | ^8.0.1 | Status bar styling | Native |
| `@capacitor/keyboard` | ^7.0.1 | Keyboard resize + accessory bar | Native |
| `@capacitor/network` | ^7.0.1 | Network status monitoring | Native |
| `@capacitor-community/in-app-review` | ^8.0.0 | SKStoreReview / Play Review | Native |
| `@revenuecat/purchases-capacitor` | ^12.2.1 | In-app purchases | Native |
