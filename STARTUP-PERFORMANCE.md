# Koydo — Startup Performance & Splash Screen Timing

## Overview

The startup sequence determines how quickly the user sees meaningful content after tapping the app icon. This document covers the splash screen lifecycle, startup optimization strategy, and the order in which heavy initialization tasks should be deferred.

---

## Splash Screen Lifecycle

```
User taps icon
       │
       ▼
Native splash screen shown (OS)
       │
       ▼
Capacitor SplashScreen plugin (2000ms duration — from capacitor.config.ts)
  backgroundColor: "#ffffff"
  launchAutoHide: true (hides automatically after duration)
       │
       ▼
Webkit/WebView inflates (loads out/index.html)
       │
       ▼
React hydrates → first meaningful render
       │
       ▼
SplashScreen.hide() called manually (optional — overrides launchDuration if < 2000ms)
       │
       ▼
AppShell visible to user
```

**Target**: First meaningful content visible within **2–3 seconds** of app open.

---

## Configuration (capacitor.config.ts)

```ts
SplashScreen: {
  launchShowDuration: 2000,   // Show splash for 2 seconds max
  launchAutoHide: true,        // Auto-hide after duration (no manual call needed)
  backgroundColor: "#ffffff",  // Matches app background — no flash
  androidSplashResourceName: "splash",
  androidScaleType: "CENTER_CROP",
  showSpinner: false,
  splashFullScreen: true,
  splashImmersive: true,
}
```

---

## Manual Hide Pattern (Recommended for Complex Apps)

If you want to hide the splash exactly when the app is ready rather than on a timer:

```ts
// In your top-level app provider or useEffect
import { SplashScreen } from '@capacitor/splash-screen';
import { Capacitor } from '@capacitor/core';

// Set launchAutoHide: false in capacitor.config.ts first
export async function hideSplashWhenReady() {
  if (!Capacitor.isNativePlatform()) return;
  
  try {
    // Await critical startup tasks
    await Promise.all([
      initSupabaseSession(),   // Refresh auth session
      loadUserPreferences(),   // Theme, locale
    ]);
    
    // Now hide — user sees real content immediately
    await SplashScreen.hide({ fadeOutDuration: 300 });
  } catch {
    // Always hide even on error
    await SplashScreen.hide();
  }
}
```

> **Current config**: `launchAutoHide: true` with 2000ms. This is the simplest approach and works well for Koydo's loading time.

---

## Startup Task Priority Tiers

Tasks should be categorized and deferred appropriately:

### Tier 1 — Critical (Block until ready, before splash hides)
| Task | Why Critical |
|------|-------------|
| Supabase session validation | User must be authenticated before showing protected content |
| User preferences (theme, locale) | Prevents layout flash |

### Tier 2 — Important (Start early, don't block)
| Task | Defer Strategy |
|------|---------------|
| Push notification setup | Start after first render via `useEffect` |
| Subscription entitlement check | Background query after UI paint |
| App lifecycle listener init | After first render |
| Network monitor init | After first render |

### Tier 3 — Non-Critical (Defer significantly)
| Task | Defer Strategy |
|------|---------------|
| Analytics initialization | After 3–5 seconds or on first user interaction |
| RevenueCat SDK configure | After authentication is confirmed |
| In-app review setup | After user has completed ≥3 lessons |
| Crash reporting setup | Can be early but non-blocking |

---

## Recommended App Boot Sequence

```ts
// In root layout or AppProvider — client component
useEffect(() => {
  if (!Capacitor.isNativePlatform()) return;

  const bootSequence = async () => {
    // Tier 1: Critical (must complete before user sees UI)
    await refreshSupabaseSession();
    
    // Tier 2: Important (fire-and-forget after paint)
    setTimeout(() => {
      initAppLifecycle({ supabase, onResume });
      initNetworkMonitor({ onChange: handleNetworkChange });
      setupPushNotifications();     // register for push token
    }, 100);

    // Tier 3: Deferred
    setTimeout(() => {
      configureRevenueCat();        // only after auth confirmed
      initAnalytics();              // not on every cold start immediately
    }, 3000);
  };

  bootSequence();
}, []);
```

---

## Android Cold Start Optimization

Capacitor's WebView on Android can be slow to initialize. Mitigations:

1. **AAB over APK**: AAB enables Play Asset Delivery and smaller initial install
2. **ProGuard/R8**: Shrinks and optimizes the DEX bytecode — already enabled
3. **Baseline Profiles**: Add a `baseline-profile` Gradle plugin for AOT compilation (advanced)
4. **Avoid large JSON imports**: Don't import large static lesson data at module level
5. **Split chunks**: Ensure Next.js generates proper code-splitting (verify `out/` has multiple JS chunks)

---

## iOS Launch Performance

1. **`launchAutoHide: true`** with 2000ms works well — matches iOS best practices
2. **LaunchScreen.storyboard** uses a simple `Splash` image view — minimal rendering cost
3. **No animations in LaunchScreen** — animations delay first frame
4. **WKWebView preloading** is handled by Capacitor automatically

---

## Measuring Startup Time

### Android
```bash
# Measure time from intent launch to first frame
adb shell am start-activity --start-profiler 100 \
  -n com.koydo.app/.MainActivity
```

### iOS
Use Xcode Instruments → **App Launch** template to measure:
- **Pre-main time** (before `main()`)
- **Time to first frame**
- **Time to interactive**

**Target**: <2s cold start on mid-range device (Pixel 6a / iPhone 12).
