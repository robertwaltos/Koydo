"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

/* ── Types ── */

export interface DeviceCapabilities {
  /** Human-readable label for the current device tier */
  tierLabel: string;
  /** Whether the device can cast to a nearby display */
  canCast: boolean;
  /** Whether WebXR is available */
  hasWebXR: boolean;
  /** Estimated GPU performance tier (0 = low, 1 = mid, 2 = high, 3 = xr-ready) */
  gpuTier: number;
}

interface DeviceGatewayContextValue {
  /** Whether the device supports spatial / immersive rendering */
  canSpatial: boolean;
  /** Whether detection has completed */
  isReady: boolean;
  /** Numeric tier: 0 = basic, 1 = enhanced, 2 = spatial, 3 = full XR */
  tier: number;
  /** Detailed capability flags */
  capabilities: DeviceCapabilities | null;
}

const TIER_LABELS = ["Basic", "Enhanced", "Spatial", "Full XR"] as const;

const DEFAULT_CONTEXT: DeviceGatewayContextValue = {
  canSpatial: false,
  isReady: false,
  tier: 0,
  capabilities: null,
};

const DeviceGatewayContext = createContext<DeviceGatewayContextValue>(DEFAULT_CONTEXT);

/* ── Provider ── */

export function DeviceGatewayProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DeviceGatewayContextValue>(DEFAULT_CONTEXT);

  useEffect(() => {
    // Simple heuristic-based device tier detection
    const detect = async () => {
      let gpuTier = 0;
      let hasWebXR = false;

      // Check WebXR support
      if (typeof navigator !== "undefined" && "xr" in navigator) {
        try {
          const xr = (navigator as Navigator & {
            xr?: { isSessionSupported?: (mode: string) => Promise<boolean> };
          }).xr;
          if (xr?.isSessionSupported) {
            const supported = await xr.isSessionSupported("immersive-vr").catch(() => false);
            hasWebXR = supported;
            if (supported) gpuTier = 3;
          }
        } catch {
          // WebXR not available
        }
      }

      // GPU heuristic via canvas (rough estimate)
      if (gpuTier === 0 && typeof document !== "undefined") {
        try {
          const canvas = document.createElement("canvas");
          const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
          if (gl) {
            const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
            if (debugInfo) {
              const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string;
              const lowerRenderer = renderer.toLowerCase();
              if (/rtx|radeon rx [67]\d|apple m[2-9]|apple gpu/i.test(lowerRenderer)) {
                gpuTier = 2;
              } else if (/gtx|radeon rx 5\d|apple m1|intel iris/i.test(lowerRenderer)) {
                gpuTier = 1;
              }
            }
          }
          canvas.remove();
        } catch {
          // GL detection failed — stay at tier 0
        }
      }

      const tier = hasWebXR ? 3 : gpuTier;
      const canCast =
        typeof navigator !== "undefined" && "presentation" in navigator;

      setState({
        canSpatial: tier >= 2,
        isReady: true,
        tier,
        capabilities: {
          tierLabel: TIER_LABELS[Math.min(tier, 3)],
          canCast,
          hasWebXR,
          gpuTier,
        },
      });
    };

    void detect();
  }, []);

  return (
    <DeviceGatewayContext.Provider value={state}>
      {children}
    </DeviceGatewayContext.Provider>
  );
}

/* ── Hook ── */

export function useDeviceGateway(): DeviceGatewayContextValue {
  return useContext(DeviceGatewayContext);
}
