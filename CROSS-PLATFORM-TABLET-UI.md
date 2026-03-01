# Cross-Platform Tablet UI Guide

This document describes the cross-platform UI system added to ensure visual
consistency across **web browsers**, **iOS tablets** (iPad), and **Android
tablets** (Galaxy Tab, Pixel Tablet, etc.).

---

## Architecture Overview

The app is a **Next.js** web app wrapped by **Capacitor** for native iOS and
Android distribution. The same HTML/CSS/JS bundle runs on all three surfaces.
To achieve a consistent tablet experience, we use:

| Layer | Mechanism | Purpose |
|-------|-----------|---------|
| CSS Custom Variants | `tablet:`, `tablet-portrait:`, `tablet-landscape:` | Tailwind-like responsive classes for tablet viewport range (768–1366px) |
| CSS Custom Variants | `native:`, `platform-ios:`, `platform-android:`, `platform-web:` | Platform-conditional styling |
| CSS Custom Variants | `portrait:`, `landscape:` | Orientation-aware styling (all devices) |
| CSS Utility Classes | `.safe-area-*` | Safe-area inset padding for notch/Dynamic Island/gesture bar |
| CSS Utility Classes | `.tablet-grid-*` | Pre-built tablet grid column overrides |
| CSS Utility Classes | `.web-only`, `.native-only` | Show/hide elements by platform |
| React Hook | `useDeviceLayout()` | JS-side device type, orientation, and platform detection |
| React Provider | `PlatformClassProvider` | Injects `data-*` attributes on `<html>` for CSS variants |

---

## CSS Custom Variants

### Tablet Breakpoints

Added in `globals.css` as Tailwind v4 `@custom-variant` directives:

```css
/* 768px–1366px (all tablet widths including iPad Pro 12.9") */
@custom-variant tablet (@media (min-width: 768px) and (max-width: 1366px));

/* Tablet + portrait orientation */
@custom-variant tablet-portrait (@media (min-width: 768px) and (max-width: 1366px) and (orientation: portrait));

/* Tablet + landscape orientation */
@custom-variant tablet-landscape (@media (min-width: 768px) and (max-width: 1366px) and (orientation: landscape));
```

**Usage in Tailwind classes:**

```tsx
<div className="px-4 tablet:px-8 tablet-portrait:grid-cols-1 tablet-landscape:grid-cols-3">
```

### Platform Variants

Require `data-platform` and `data-native` attributes on `<html>`, set
automatically by `PlatformClassProvider`:

```css
@custom-variant native (&:where([data-native="true"], ...));
@custom-variant platform-ios (&:where([data-platform="ios"], ...));
@custom-variant platform-android (&:where([data-platform="android"], ...));
@custom-variant platform-web (&:where([data-platform="web"], ...));
```

**Usage:**

```tsx
<div className="rounded-xl native:rounded-2xl platform-ios:pt-12">
```

### Orientation Variants

Work on all devices (phone, tablet, desktop):

```css
@custom-variant portrait (@media (orientation: portrait));
@custom-variant landscape (@media (orientation: landscape));
```

---

## Safe Area Utilities

CSS classes that apply `env(safe-area-inset-*)` padding:

| Class | Effect |
|-------|--------|
| `.safe-area-top` | `padding-top: env(safe-area-inset-top)` |
| `.safe-area-bottom` | `padding-bottom: env(safe-area-inset-bottom)` |
| `.safe-area-left` | `padding-left: env(safe-area-inset-left)` |
| `.safe-area-right` | `padding-right: env(safe-area-inset-right)` |
| `.safe-area-x` | Horizontal insets (left + right) |
| `.safe-area-y` | Vertical insets (top + bottom) |
| `.safe-area-all` | All four insets |

Platform-specific overrides ensure iOS accounts for the Dynamic Island notch
(min 20px) and Android accounts for the status bar (min 8px).

**Applied on:**
- `TopNav`: `.safe-area-top`
- `SiteFooter`: `.safe-area-bottom .safe-area-x`
- `DashShell` sidebar: `.safe-area-top .safe-area-left .safe-area-bottom`
- `DashShell` top bar: `.safe-area-top`

---

## Tablet Grid Classes

Pre-built utility classes for common grid patterns on tablets:

| Class | 768–1023px | 1024–1366px |
|-------|-----------|-------------|
| `.tablet-grid-stats` | 3 columns | 5 columns |
| `.tablet-grid-cards` | 2 columns | 3 columns |
| `.tablet-grid-modules` | 2 columns | 2 columns |
| `.tablet-grid-explore` | 2 columns | 2 columns |

These use `!important` so they override inline Tailwind grid-cols when applied.

---

## `useDeviceLayout()` Hook

Location: `src/lib/platform/use-device-layout.ts`

Returns a reactive `DeviceLayout` object:

```ts
interface DeviceLayout {
  platform: "ios" | "android" | "web";
  isNative: boolean;
  deviceType: "phone" | "tablet" | "desktop";
  isTablet: boolean;
  orientation: "portrait" | "landscape";
  isPortrait: boolean;
  isLandscape: boolean;
  viewportWidth: number;
  viewportHeight: number;
}
```

**Usage:**

```tsx
import { useDeviceLayout } from "@/lib/platform/use-device-layout";

function MyComponent() {
  const { isTablet, isPortrait, platform } = useDeviceLayout();

  return (
    <div className={isTablet && isPortrait ? "grid-cols-2" : "grid-cols-3"}>
      {/* ... */}
    </div>
  );
}
```

> **Prefer CSS variants over the hook** for pure layout changes. Use the hook
> only when you need JS logic (e.g., conditionally fetching data or rendering
> entirely different component trees).

---

## Data Attributes on `<html>`

`PlatformClassProvider` (in `src/app/components/platform-class-provider.tsx`)
sets these attributes, updated on resize/orientation change:

| Attribute | Values | Example |
|-----------|--------|---------|
| `data-platform` | `ios`, `android`, `web` | `<html data-platform="ios">` |
| `data-native` | `true` | Only present when in Capacitor |
| `data-device` | `phone`, `tablet`, `desktop` | `<html data-device="tablet">` |
| `data-orientation` | `portrait`, `landscape` | `<html data-orientation="portrait">` |

These can also be used for custom CSS selectors:

```css
[data-device="tablet"] .my-component {
  padding: 2rem;
}
```

---

## Tablet Viewport Reference

| Device | Portrait Width | Landscape Width |
|--------|---------------|-----------------|
| iPad mini | 768px | 1024px |
| iPad (10th gen) | 820px | 1180px |
| iPad Air | 820px | 1180px |
| iPad Pro 11" | 834px | 1194px |
| iPad Pro 12.9" | 1024px | 1366px |
| Galaxy Tab S9 | 800px | 1200px |
| Galaxy Tab S9+ | 960px | 1440px |
| Pixel Tablet | 800px | 1200px |

The tablet range of **768–1366px** covers all these devices.

---

## Key Grid Breakpoint Changes

The following grids were updated to include proper `md:` tablet breakpoints:

| Page | Before | After |
|------|--------|-------|
| Dashboard stats | `sm:2 → lg:5` | `sm:2 → md:3 → lg:5` |
| Dashboard language | `sm:2 → lg:4` | `sm:2 → md:2 → lg:4` |
| Dashboard modules | `md:2 → lg:3` | `sm:2 → md:2 → lg:3` |
| Explore stages | `sm:2 → lg:3` | `sm:2 → md:2 → lg:3` |
| Games | `2 → sm:3 → lg:4` | `2 → sm:2 → md:3 → lg:4` |
| Modules stats | `sm:3` | `sm:2 → md:3` |
| Modules cards | `md:2` | `sm:2 → md:2 → lg:2` |
| Exam prep tracks | `md:2 → xl:3` | `sm:2 → md:2 → xl:3` |
| Testing catalog | `md:2 → xl:3` | `sm:2 → md:2 → xl:3` |
| Subject showcase | `4 → lg:8` | `4 → md:4 → lg:8` |
| Select profile | `2 → md:3` | `2 → md:3 → lg:3` |

---

## Visibility Helpers

```tsx
{/* Only visible on web (browsers), hidden on iOS/Android native */}
<div className="web-only">Download the app!</div>

{/* Only visible inside Capacitor native shells */}
<div className="native-only">Rate us in the App Store</div>
```

---

## Testing Checklist

When testing cross-platform UI consistency:

1. **Web desktop**: Chrome/Safari at 1440px+ width
2. **Web tablet simulation**: Chrome DevTools → iPad / Galaxy Tab presets
3. **iOS tablet**: iPad simulator (Xcode) or physical iPad
4. **Android tablet**: Android emulator (Pixel Tablet, Galaxy Tab) or physical device
5. **Portrait & landscape** on each tablet device
6. **Safe areas**: Verify no content sits behind the notch/Dynamic Island
7. **Touch targets**: All buttons ≥ 48px on tablets
8. **Grid columns**: Verify no cramped or single-column layouts on landscape tablets
