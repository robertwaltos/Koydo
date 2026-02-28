# Koydo — Troubleshooting Guide

Common issues and solutions for native app development and submission.

---

## Table of Contents

1. [Build Issues](#build-issues)
2. [Capacitor Sync Issues](#capacitor-sync-issues)
3. [iOS Issues](#ios-issues)
4. [Android Issues](#android-issues)
5. [Push Notifications](#push-notifications)
6. [Deep Links](#deep-links)
7. [In-App Purchases / RevenueCat](#in-app-purchases--revenuecat)
8. [Authentication / Supabase](#authentication--supabase)
9. [Offline Mode](#offline-mode)
10. [App Store / Google Play Submission](#app-store--google-play-submission)

---

## Build Issues

### `next build` fails with TypeScript errors
```
Type error: Property 'X' does not exist on type 'Y'
```
**Fix**: Run `npm run type-check` to see all errors. Fix them, then rebuild.

### `next build` — missing environment variables
```
Error: NEXT_PUBLIC_SUPABASE_URL is not defined
```
**Fix**: Copy `.env.example` to `.env.local` and fill in all values. Ensure `.env.local` exists before building.

### Build output directory `out/` is empty or missing
**Fix**: Verify `next.config.ts` has `output: 'export'` set. Run `npm run build` and check for `out/` directory.

---

## Capacitor Sync Issues

### `npx cap sync` fails — plugin version mismatch
```
Error: @capacitor/core version X.Y.Z does NOT match...
```
**Fix**:
```bash
npm install @capacitor/core@latest @capacitor/cli@latest @capacitor/ios@latest @capacitor/android@latest
npx cap sync
```

### Web assets not updating in native app
**Fix**: Force a full copy:
```bash
npm run build
npx cap copy
npx cap sync
```

### `npx cap doctor` reports missing tools
**Fix**: Install missing tools per the diagnostic output. Common fixes:
- Android SDK not found: Set `ANDROID_SDK_ROOT` in your shell profile
- CocoaPods not found: `sudo gem install cocoapods`
- Java not found: `brew install openjdk@17` and add to PATH

---

## iOS Issues

### Xcode build fails: "Provisioning profile doesn't include capability"
**Fix**: In Xcode → Signing & Capabilities, ensure your Apple Developer account has the capability. Re-download provisioning profile from Apple Developer Portal.

### "Cannot find 'App.entitlements'" warning
**Fix**: Verify the file exists at `ios/App/App/App.entitlements`. If missing, re-run `npx cap sync ios` and re-check Entitlements in Xcode target settings.

### CocoaPods install fails
```
Error: Failed to connect to github.com
```
**Fix**:
```bash
cd ios/App
pod repo update
pod install
```

### White screen on launch (WebView not loading)
**Fix**:
1. Check `capacitor.config.ts` — `webDir` should be `'out'`
2. Verify `out/index.html` exists after `npm run build`
3. Check Xcode console for 404 errors
4. If using live reload, verify `server.url` matches your Mac's IP

### Push notification permission not requested
**Fix**: Ensure `PushNotifications.requestPermissions()` is called on user interaction (button tap), not automatically on app launch per iOS guidelines.

### Associated Domains not working (Universal Links fail)
**Fix**:
1. Verify `App.entitlements` has `applinks:koydo.app`
2. Verify `https://koydo.app/.well-known/apple-app-site-association` returns valid JSON
3. Check that the Bundle ID in AASA matches exactly
4. On device, reset AASA cache: Settings → Developer → Associated Domains Development

---

## Android Issues

### Gradle build fails: JDK version mismatch
```
Error: Unsupported class file major version 61
```
**Fix**: Ensure JDK 17 is active:
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
```

### `adb: command not found`
**Fix**: Add Android SDK platform-tools to PATH:
```bash
export PATH="$ANDROID_SDK_ROOT/platform-tools:$PATH"
```

### App installs but shows blank white screen
**Fix**:
1. Check `adb logcat` for errors
2. Clear app data: Settings → Apps → Koydo → Clear Data
3. Verify `web_assets` were synced: `npx cap sync android`

### Deep links (App Links) not opening the app
**Fix**:
1. Verify `https://koydo.app/.well-known/assetlinks.json` is accessible
2. Verify the `sha256_cert_fingerprints` matches the release keystore
3. Get fingerprint: `keytool -list -v -keystore koydo-release.keystore`

### Cleartext traffic blocked (HTTP not working in debug)
**Fix**: For debug only, add to `AndroidManifest.xml`:
```xml
android:usesCleartextTraffic="true"
```
**Remove before production release.**

---

## Push Notifications

### Notifications not received (iOS)
**Checklist**:
1. APS entitlement set to `production` in `App.entitlements`
2. Push certificate / APNs Auth Key configured in Firebase / OneSignal / RevenueCat
3. `requestPermissions()` call returns `granted`
4. Device token registered with notification provider

### Notifications not received (Android)
**Checklist**:
1. `google-services.json` present in `android/app/`
2. FCM Server Key configured in notification provider
3. Device token obtained and sent to server

### `registerNotifications()` throws on web
**Fix**: Wrap in `Capacitor.isNativePlatform()` check:
```ts
if (Capacitor.isNativePlatform()) {
  await PushNotifications.requestPermissions();
}
```

---

## Deep Links

### Universal Link opens in Safari instead of the app (iOS)
**Fix**:
1. Verify AASA is served with `Content-Type: application/json` (not `application/octet-stream`)
2. AASA must be accessible via HTTPS (not HTTP)
3. App must be installed and the domain re-verified after install

### Intent filter not catching link (Android)
**Fix**: Verify `AndroidManifest.xml` has the intent filter for the correct scheme/host:
```xml
<intent-filter android:autoVerify="true">
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="https" android:host="koydo.app" />
</intent-filter>
```

---

## In-App Purchases / RevenueCat

### RevenueCat SDK throws "Invalid API key"
**Fix**: Verify `NEXT_PUBLIC_REVENUECAT_APPLE_API_KEY` and `NEXT_PUBLIC_REVENUECAT_GOOGLE_API_KEY` in `.env.local`. Keys are platform-specific.

### Purchase always shows "Product not found"
**Fix**:
1. Verify Product IDs in RevenueCat Dashboard match App Store Connect / Google Play
2. Products must be approved in App Store Connect ("Ready to Submit" or approved)
3. Sandbox account must be in the same App Store region as the products

### "Cannot make purchases" in TestFlight
**Fix**: Use a Sandbox Apple ID (created in App Store Connect). Do NOT use your main Apple ID for IAP testing.

### RevenueCat webhook not receiving events
**Fix**:
1. Verify webhook URL in RevenueCat Dashboard: `https://koydo.app/api/revenuecat/webhook`
2. Verify `REVENUECAT_WEBHOOK_SECRET` matches the secret in RevenueCat Dashboard
3. Webhook endpoint must return HTTP 200 within 5 seconds


---

## Authentication / Supabase

### User session lost on app resume
**Fix**: The `initAppLifecycle()` helper in `src/lib/platform/lifecycle.ts` calls `supabase.auth.refreshSession()` on resume. Ensure it's initialized in the app root.

### "JWT expired" errors in Production
**Fix**: Ensure `refreshSession()` is called on every app resume. Also verify Supabase JWT expiry is at least 3600 seconds (1 hour).

### Login loop (redirect keeps happening)
**Fix**: Check that the Supabase redirect URL is whitelisted in Supabase Authentication Settings → URL Configuration → Redirect URLs:
```
https://koydo.app/**
com.koydo.app://**
```

---

## Offline Mode

### Downloaded lesson not loading offline
**Fix**:
1. Verify lesson was downloaded before going offline
2. Check if Service Worker is registered (`navigator.serviceWorker.ready`)
3. Inspect cache: Chrome DevTools → Application → Cache Storage

### `@capacitor/network` not detecting offline state
**Fix**: The plugin requires a real device or emulator. On web, falls back to `navigator.onLine`. Ensure `initNetworkMonitor()` is called on app mount.

---

## App Store / Google Play Submission

### Binary rejected: "Missing privacy manifest" (iOS 17+)
**Fix**: Add `PrivacyInfo.xcprivacy` to the iOS target in Xcode with all accessed APIs declared.

### "Your app uses entitlements that are not available for the distribution"
**Fix**: Verify your App Store Distribution provisioning profile includes all capabilities used in `App.entitlements`.

### Google Play rejected: "Target API level requirement"
**Fix**: Ensure `targetSdkVersion` in `android/app/build.gradle` is set to the latest required level (currently 34+ for new apps).

### Google Play rejected: "Billing permission not declared"
**Fix**: Add to `AndroidManifest.xml`:
```xml
<uses-permission android:name="com.android.vending.BILLING" />
```
(Capacitor IAP plugin may add this automatically — verify with `npx cap sync android`)
