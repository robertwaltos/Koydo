# Native Development Guide — Koydo

## Overview

Koydo uses **Capacitor** to wrap the Next.js web app in a native iOS/Android shell. This guide covers the full local development workflow for native features.

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 20+ | [nodejs.org](https://nodejs.org) |
| Xcode | 15+ | Mac App Store |
| Android Studio | Hedgehog+ | [developer.android.com](https://developer.android.com/studio) |
| CocoaPods | 1.14+ | `sudo gem install cocoapods` |
| Java JDK | 17+ | `brew install openjdk@17` |
| Capacitor CLI | 7.x | `npm install -g @capacitor/cli` |

---

## Quick Start

### 1. Install dependencies
```bash
cd koydo-web
npm install
```

### 2. Build the web layer
```bash
npm run build
```

### 3. Sync Capacitor
```bash
npx cap sync          # syncs both platforms
npx cap sync ios      # iOS only
npx cap sync android  # Android only
```

### 4. Open in IDE
```bash
npx cap open ios      # Opens Xcode
npx cap open android  # Opens Android Studio
```

---

## Live Reload Development

For iterative native development with hot-reload:

```bash
# Start live reload (Android)
bash scripts/dev-native.sh android

# Start live reload (iOS)
bash scripts/dev-native.sh ios
```

**Manual live reload setup:**

1. Find your Mac's local IP:
   ```bash
   ipconfig getifaddr en0
   ```

2. Add to `capacitor.config.ts` (REMOVE before production builds):
   ```ts
   server: {
     url: 'http://192.168.1.100:3000',
     cleartext: true,
   }
   ```

3. Start Next.js dev server:
   ```bash
   HOSTNAME=0.0.0.0 npm run dev
   ```

4. Sync and run from Xcode/Android Studio.

> ⚠️ **IMPORTANT**: Remove `server.url` from `capacitor.config.ts` before every production build!

---

## Testing on Android Emulator

```bash
# Run on default emulator (Pixel_8_API_35)
bash scripts/test-android-emulator.sh

# Run on specific AVD
bash scripts/test-android-emulator.sh Pixel_7_API_34
```

Or manually:
```bash
npm run test:android
```

---

## iOS Simulator

```bash
npx cap sync ios
npx cap open ios
# In Xcode: select iPhone 15 simulator → Run ▶
```

---

## Native Feature Development Checklist

When adding a new Capacitor plugin:
- [ ] `npm install @capacitor/plugin-name`
- [ ] `npx cap sync`
- [ ] iOS: Check if additional permissions needed in `Info.plist`
- [ ] Android: Check if manifest permissions needed in `AndroidManifest.xml`
- [ ] Test on both platforms before merging

---

## Capacitor Config Reference

The main config is at `capacitor.config.ts`:

```ts
const config: CapacitorConfig = {
  appId: 'com.koydo.app',        // Bundle ID — do NOT change
  appName: 'Koydo',
  webDir: 'out',                      // Next.js static export output
  // server.url should ONLY be set during live reload dev
};
```

---

## Build Commands Reference

| Command | Description |
|---------|-------------|
| `npm run build` | Next.js build (generates `out/`) |
| `npx cap sync` | Copy web assets + update native plugins |
| `npx cap copy` | Copy web assets only (faster, no plugin update) |
| `npx cap update` | Update native plugins only |
| `npx cap doctor` | Check environment health |
| `bash scripts/dev-native.sh android` | Live reload for Android |
| `bash scripts/dev-native.sh ios` | Live reload for iOS |
| `bash scripts/test-android-emulator.sh` | Full build + run on emulator |

---

## Debugging

### View logs
```bash
# Android
adb logcat -s Koydo:V Capacitor:V WebCore:V chromium:V

# iOS — use Xcode Console or:
npx cap run ios --consolelogs
```

### Chrome DevTools (Android)
1. Connect device or start emulator
2. Open `chrome://inspect` in Chrome
3. Click **Inspect** next to the Koydo WebView

### Safari Web Inspector (iOS)
1. Enable on device: Settings → Safari → Advanced → Web Inspector
2. Connect iPhone, open Safari on Mac → Develop → [Your Device] → Koydo

---

## Environment Variables for Native

Native builds use `.env.local` at build time. Ensure these are set before running `npm run build`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_REVENUECAT_APPLE_API_KEY=...
NEXT_PUBLIC_REVENUECAT_GOOGLE_API_KEY=...
```

> Values baked into the static build — DO NOT include secrets in `NEXT_PUBLIC_*` vars.

---

## Troubleshooting

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues.
