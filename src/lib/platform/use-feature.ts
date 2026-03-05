/**
 * useFeature — Client-side hook for checking feature availability.
 *
 * Returns { allowed, reason, isLoading } for any AppFeatureId.
 * Reads from the FeatureProvider context (which fetches all states on mount).
 */

"use client";

import { useContext } from "react";
import { FeatureContext } from "./feature-context";
import type { AppFeatureId } from "./feature-registry";
import type { FeatureDenyReason } from "./feature-gate";

export type UseFeatureResult = {
  allowed: boolean;
  reason: FeatureDenyReason | "allowed" | "loading";
  isLoading: boolean;
};

export function useFeature(featureId: AppFeatureId): UseFeatureResult {
  const ctx = useContext(FeatureContext);

  if (!ctx || ctx.isLoading) {
    return { allowed: false, reason: "loading", isLoading: true };
  }

  const result = ctx.features[featureId];
  if (!result) {
    return { allowed: false, reason: "unknown_feature", isLoading: false };
  }

  return {
    allowed: result.allowed,
    reason: result.reason,
    isLoading: false,
  };
}

/**
 * useFeatureGate — Convenience wrapper that returns children or null.
 * Use as: { useFeatureGate("math_solver") && <MathSolver /> }
 */
export function useFeatureGate(featureId: AppFeatureId): boolean {
  const { allowed, isLoading } = useFeature(featureId);
  return !isLoading && allowed;
}
