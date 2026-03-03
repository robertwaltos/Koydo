/**
 * useNetworkStatus — detects online/offline state.
 *
 * Uses @capacitor/network on native platforms and navigator.onLine on web.
 * Returns { isOnline, isCapacitorNative } and auto-updates on change.
 */

"use client";

import { useEffect, useState, useCallback } from "react";
import { Capacitor } from "@capacitor/core";

export type NetworkStatus = {
  /** Whether the device has connectivity */
  isOnline: boolean;
  /** Whether we're on a native Capacitor platform */
  isCapacitorNative: boolean;
};

export function useNetworkStatus(): NetworkStatus {
  const isNative = Capacitor.isNativePlatform();
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = useCallback(() => setIsOnline(true), []);
  const handleOffline = useCallback(() => setIsOnline(false), []);

  useEffect(() => {
    // Set initial state
    if (typeof navigator !== "undefined") {
      setIsOnline(navigator.onLine);
    }

    if (isNative) {
      // Use Capacitor Network plugin on native
      let cleanup: (() => void) | undefined;

      (async () => {
        try {
          const { Network } = await import("@capacitor/network");
          const status = await Network.getStatus();
          setIsOnline(status.connected);

          const listener = await Network.addListener(
            "networkStatusChange",
            (s) => setIsOnline(s.connected),
          );
          cleanup = () => listener.remove();
        } catch {
          // Fallback to browser events if Capacitor Network fails
          window.addEventListener("online", handleOnline);
          window.addEventListener("offline", handleOffline);
          cleanup = () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
          };
        }
      })();

      return () => cleanup?.();
    }

    // Web: use browser events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isNative, handleOnline, handleOffline]);

  return { isOnline, isCapacitorNative: isNative };
}
