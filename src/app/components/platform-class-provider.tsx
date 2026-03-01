"use client";

import { useEffect } from "react";
import { getPlatform, isNativePlatform } from "@/lib/platform/detect";

/**
 * Injects data attributes on <html> so CSS custom variants
 * (tablet:, native:, platform-ios:, etc.) work immediately.
 *
 * Attributes set:
 *   data-platform="ios" | "android" | "web"
 *   data-native="true"        (only when inside Capacitor)
 *   data-device="phone" | "tablet" | "desktop"
 *   data-orientation="portrait" | "landscape"
 */
export default function PlatformClassProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const platform = getPlatform();
    const native = isNativePlatform();

    root.setAttribute("data-platform", platform);
    if (native) {
      root.setAttribute("data-native", "true");
    }

    function syncDeviceAttrs() {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Device type
      let device: string;
      if (w < 768) device = "phone";
      else if (w <= 1366) device = "tablet";
      else device = "desktop";
      root.setAttribute("data-device", device);

      // Orientation
      root.setAttribute("data-orientation", w >= h ? "landscape" : "portrait");
    }

    syncDeviceAttrs();
    window.addEventListener("resize", syncDeviceAttrs);
    window.addEventListener("orientationchange", syncDeviceAttrs);

    return () => {
      window.removeEventListener("resize", syncDeviceAttrs);
      window.removeEventListener("orientationchange", syncDeviceAttrs);
    };
  }, []);

  return <>{children}</>;
}
