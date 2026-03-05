/**
 * FeatureProvider — Client-side context that loads all feature states on mount.
 *
 * Fetches from /api/features/check on mount, caches results in context.
 * All children can use useFeature() to check any feature.
 */

"use client";

import React, { createContext, useEffect, useMemo, useState } from "react";
import type { FeatureDenyReason } from "./feature-gate";

type FeatureState = {
  allowed: boolean;
  reason: FeatureDenyReason | "allowed";
  tier?: string;
};

type FeatureContextType = {
  features: Record<string, FeatureState>;
  isLoading: boolean;
  /** Re-fetch all feature states (e.g. after parent toggles a feature) */
  refresh: () => void;
};

export const FeatureContext = createContext<FeatureContextType | null>(null);

export function FeatureProvider({ children }: { children: React.ReactNode }) {
  const [features, setFeatures] = useState<Record<string, FeatureState>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function loadFeatures() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/features/check");
        if (!res.ok) {
          console.error("[FeatureProvider] Failed to load features:", res.status);
          setIsLoading(false);
          return;
        }
        const data = await res.json();
        if (!cancelled) {
          setFeatures(data.features ?? {});
        }
      } catch (err) {
        console.error("[FeatureProvider] Error loading features:", err);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    void loadFeatures();
    return () => { cancelled = true; };
  }, [refreshKey]);

  const value = useMemo(
    () => ({
      features,
      isLoading,
      refresh: () => setRefreshKey((k) => k + 1),
    }),
    [features, isLoading],
  );

  return (
    <FeatureContext.Provider value={value}>
      {children}
    </FeatureContext.Provider>
  );
}
