"use client";

import { useEffect, useState } from "react";
import { getPlatform, isNativePlatform, type Platform } from "./detect";

// ── Tablet breakpoints (CSS-aligned) ──────────────────────────────────────────
// These match the custom `tablet:` and `tablet-lg:` breakpoints added to
// globals.css so that JS and CSS stay in sync.
const TABLET_MIN = 768;
const TABLET_MAX = 1366;

export type DeviceType = "phone" | "tablet" | "desktop";
export type Orientation = "portrait" | "landscape";

export interface DeviceLayout {
  /** The Capacitor platform: "ios" | "android" | "web" */
  platform: Platform;
  /** Whether the app runs inside a Capacitor native shell */
  isNative: boolean;
  /** Derived device type based on viewport width */
  deviceType: DeviceType;
  /** Whether the device is a tablet (768–1366px viewport width) */
  isTablet: boolean;
  /** Current orientation */
  orientation: Orientation;
  /** Whether the viewport is in portrait mode */
  isPortrait: boolean;
  /** Whether the viewport is in landscape mode */
  isLandscape: boolean;
  /** Viewport width in px (updated on resize) */
  viewportWidth: number;
  /** Viewport height in px (updated on resize) */
  viewportHeight: number;
}

function getDeviceType(width: number): DeviceType {
  if (width < TABLET_MIN) return "phone";
  if (width <= TABLET_MAX) return "tablet";
  return "desktop";
}

function getOrientation(width: number, height: number): Orientation {
  return width >= height ? "landscape" : "portrait";
}

function computeLayout(): Omit<DeviceLayout, "platform" | "isNative"> {
  if (typeof window === "undefined") {
    return {
      deviceType: "desktop",
      isTablet: false,
      orientation: "landscape",
      isPortrait: false,
      isLandscape: true,
      viewportWidth: 1280,
      viewportHeight: 800,
    };
  }

  const w = window.innerWidth;
  const h = window.innerHeight;
  const deviceType = getDeviceType(w);
  const orientation = getOrientation(w, h);

  return {
    deviceType,
    isTablet: deviceType === "tablet",
    orientation,
    isPortrait: orientation === "portrait",
    isLandscape: orientation === "landscape",
    viewportWidth: w,
    viewportHeight: h,
  };
}

/**
 * React hook providing reactive device-type, platform, and orientation info.
 *
 * Use this when you need JS-side branching for tablet vs phone vs desktop or
 * when you need the current orientation in component logic.
 *
 * For pure CSS-only responsive adjustments, prefer the `tablet:` and
 * `tablet-lg:` Tailwind variants instead.
 */
export function useDeviceLayout(): DeviceLayout {
  const [layout, setLayout] = useState<DeviceLayout>(() => ({
    platform: typeof window !== "undefined" ? getPlatform() : "web",
    isNative: typeof window !== "undefined" ? isNativePlatform() : false,
    ...computeLayout(),
  }));

  useEffect(() => {
    const platform = getPlatform();
    const isNative = isNativePlatform();

    const update = () => {
      setLayout({
        platform,
        isNative,
        ...computeLayout(),
      });
    };

    // Initial sync (SSR → client)
    update();

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    // Also set data attributes on <html> for CSS targeting
    const root = document.documentElement;
    root.setAttribute("data-platform", platform);
    if (isNative) {
      root.setAttribute("data-native", "true");
    }

    const setDeviceAttrs = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      root.setAttribute("data-device", getDeviceType(w));
      root.setAttribute("data-orientation", getOrientation(w, h));
    };

    setDeviceAttrs();
    window.addEventListener("resize", setDeviceAttrs);
    window.addEventListener("orientationchange", setDeviceAttrs);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      window.removeEventListener("resize", setDeviceAttrs);
      window.removeEventListener("orientationchange", setDeviceAttrs);
    };
  }, []);

  return layout;
}
