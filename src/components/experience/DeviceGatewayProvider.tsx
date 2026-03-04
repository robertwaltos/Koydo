"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import {
  type StreamingTargets,
  scoreDeviceDiscoveryConfidence,
} from "@/lib/experience/device-gateway-confidence";

/* ── Types ── */

export interface DeviceCapabilities {
  /** Human-readable label for the current device tier */
  tierLabel: string;
  /** Whether the device can cast to a nearby display */
  canCast: boolean;
  /** Whether WebXR is available */
  hasWebXR: boolean;
  /** Supported WebXR session modes */
  supportedWebXRModes: string[];
  /** Estimated GPU performance tier (0 = low, 1 = mid, 2 = high, 3 = xr-ready) */
  gpuTier: number;
  /** Whether WebGL2 context is available */
  supportsWebGL2: boolean;
  /** Max GPU texture size if WebGL is available */
  maxTextureSize: number | null;
  /** Max combined texture units if WebGL is available */
  maxCombinedTextureImageUnits: number | null;
  /** Whether WebGPU adapter probing succeeded */
  hasWebGPU: boolean;
  /** Mobile low-power mode heuristic flag */
  lowPowerModeLikely: boolean;
  /** Battery level from 0 to 1 when available */
  batteryLevel: number | null;
  /** Battery charging flag when available */
  isCharging: boolean | null;
  /** Remote streaming target capability probe */
  streamingTargets: StreamingTargets;
  /** Deterministic QA confidence score for discovery signals */
  discoveryConfidence: number;
  /** Confidence band used by QA harness thresholds */
  discoveryConfidenceBand: "low" | "medium" | "high";
  /** Number of positive capability signals used in confidence scoring */
  discoverySignalCount: number;
  /** Number of detected streaming targets (0-3) */
  streamingTargetCount: number;
  /** Actionable upgrade guidance for tier 0/1 users */
  upgradePath: string[];
  /** Capability detection version for analytics/debug parity */
  detectionVersion: string;
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

const DISABLED_CONTEXT: DeviceGatewayContextValue = {
  canSpatial: false,
  isReady: true,
  tier: 0,
  capabilities: null,
};

const DeviceGatewayContext = createContext<DeviceGatewayContextValue>(DEFAULT_CONTEXT);

/* ── Provider ── */

const DETECTION_VERSION = "2026-03-02-v2";
const XR_MODES = ["immersive-vr", "immersive-ar"] as const;

type BrowserBatteryManager = {
  level?: number;
  charging?: boolean;
};

type BrowserNavigator = Navigator & {
  xr?: { isSessionSupported?: (mode: string) => Promise<boolean> };
  gpu?: { requestAdapter?: () => Promise<unknown | null> };
  getBattery?: () => Promise<BrowserBatteryManager>;
  deviceMemory?: number;
  connection?: { saveData?: boolean };
  userAgentData?: { mobile?: boolean };
};

function scoreRenderer(renderer: string | null): number {
  if (!renderer) return 0;
  const lower = renderer.toLowerCase();
  if (/rtx|rx\s?[67]\d{2,3}|apple m[2-9]|apple gpu|arc a\d{3}/i.test(lower)) return 2;
  if (/gtx|rtx 20|rtx 30|rx\s?5\d{2,3}|iris|apple m1|adreno 7\d{2}/i.test(lower)) return 1;
  return 0;
}

function classifyGpuTier(input: {
  hasWebXR: boolean;
  hasWebGPU: boolean;
  maxTextureSize: number | null;
  maxCombinedTextureImageUnits: number | null;
  renderer: string | null;
}): number {
  if (input.hasWebXR) return 3;

  let tier = 0;
  const rendererTier = scoreRenderer(input.renderer);
  tier = Math.max(tier, rendererTier);

  if (input.maxTextureSize !== null && input.maxTextureSize >= 8192) {
    tier = Math.max(tier, 1);
  }

  if (
    input.maxTextureSize !== null &&
    input.maxTextureSize >= 16_384 &&
    input.maxCombinedTextureImageUnits !== null &&
    input.maxCombinedTextureImageUnits >= 24
  ) {
    tier = Math.max(tier, 2);
  }

  if (input.hasWebGPU) {
    tier = Math.max(tier, 2);
  }

  return Math.min(3, tier);
}

function detectStreamingTargets(): StreamingTargets {
  if (typeof window === "undefined" || typeof document === "undefined" || typeof navigator === "undefined") {
    return { chromecast: false, airplay: false, dlna: false };
  }

  const win = window as Window & {
    chrome?: { cast?: unknown };
    WebKitPlaybackTargetAvailabilityEvent?: unknown;
  };
  const probeVideo = document.createElement("video") as HTMLVideoElement & {
    webkitShowPlaybackTargetPicker?: () => void;
  };

  const chromecast = Boolean(win.chrome?.cast) || "presentation" in navigator;
  const airplay =
    Boolean(win.WebKitPlaybackTargetAvailabilityEvent) ||
    typeof probeVideo.webkitShowPlaybackTargetPicker === "function";
  const dlna = "remote" in probeVideo || "mediaDevices" in navigator || "presentation" in navigator;

  return {
    chromecast,
    airplay,
    dlna,
  };
}

function buildUpgradePath(input: {
  tier: number;
  hasWebXR: boolean;
  hasWebGPU: boolean;
  supportsWebGL2: boolean;
  lowPowerModeLikely: boolean;
  canCast: boolean;
}): string[] {
  const steps: string[] = [];

  if (input.tier < 2) {
    if (!input.supportsWebGL2) {
      steps.push("Use a browser/device with WebGL2 enabled to unlock 3D rendering.");
    } else if (!input.hasWebGPU) {
      steps.push("Use a WebGPU-capable device or newer browser build for higher-fidelity spatial effects.");
    }
  }

  if (!input.hasWebXR) {
    steps.push("Connect an XR headset (Vision Pro / Quest) for full immersive mode.");
  }

  if (input.lowPowerModeLikely) {
    steps.push("Plug in power and disable battery/data saver mode to raise rendering tier.");
  }

  if (!input.canCast) {
    steps.push("Enable a Chromecast/AirPlay receiver for remote-display fallback.");
  }

  return steps;
}

function emitDeviceTierTelemetry(input: {
  tier: number;
  gpuTier: number;
  hasWebXR: boolean;
  hasWebGPU: boolean;
  supportsWebGL2: boolean;
  maxTextureSize: number | null;
  canCast: boolean;
  lowPowerModeLikely: boolean;
  batteryLevel: number | null;
  supportedWebXRModes: string[];
  streamingTargets: StreamingTargets;
  discoveryConfidence: number;
  discoveryConfidenceBand: "low" | "medium" | "high";
  discoverySignalCount: number;
  streamingTargetCount: number;
}): void {
  if (typeof navigator === "undefined") return;

  const castTargets = [
    input.streamingTargets.chromecast ? "chromecast" : null,
    input.streamingTargets.airplay ? "airplay" : null,
    input.streamingTargets.dlna ? "dlna" : null,
  ].filter((value): value is string => Boolean(value));

  const body = JSON.stringify({
    events: [
      {
        eventType: "activity_interacted",
        lessonId: "experience-hub-device-gateway",
        moduleId: "voyager-zero-e17",
        payload: {
          detectionVersion: DETECTION_VERSION,
          tier: input.tier,
          gpuTier: input.gpuTier,
          hasWebXR: input.hasWebXR,
          hasWebGPU: input.hasWebGPU,
          supportsWebGL2: input.supportsWebGL2,
          maxTextureSize: input.maxTextureSize,
          canCast: input.canCast,
          lowPowerModeLikely: input.lowPowerModeLikely,
          batteryLevel: input.batteryLevel,
          xrModes: input.supportedWebXRModes,
          castTargets,
          discoveryConfidence: input.discoveryConfidence,
          discoveryConfidenceBand: input.discoveryConfidenceBand,
          discoverySignalCount: input.discoverySignalCount,
          streamingTargetCount: input.streamingTargetCount,
        },
      },
    ],
  });

  if (typeof navigator.sendBeacon === "function") {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon("/api/telemetry/events", blob);
    return;
  }

  void fetch("/api/telemetry/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined);
}

export function DeviceGatewayProvider({
  children,
  enabled = true,
}: {
  children: ReactNode;
  enabled?: boolean;
}) {
  const [state, setState] = useState<DeviceGatewayContextValue>(() =>
    enabled ? DEFAULT_CONTEXT : DISABLED_CONTEXT,
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const detect = async () => {
      let hasWebXR = false;
      const supportedWebXRModes: string[] = [];
      let hasWebGPU = false;
      let batteryLevel: number | null = null;
      let isCharging: boolean | null = null;
      let lowPowerModeLikely = false;

      const nav = navigator as BrowserNavigator;

      if (typeof navigator !== "undefined" && nav.xr?.isSessionSupported) {
        try {
          for (const mode of XR_MODES) {
            const supported = await nav.xr.isSessionSupported(mode).catch(() => false);
            if (supported) {
              supportedWebXRModes.push(mode);
              hasWebXR = true;
            }
          }
        } catch {
          // XR probe failed; continue with non-XR classification.
        }
      }

      if (typeof navigator !== "undefined" && nav.gpu?.requestAdapter) {
        try {
          const adapter = await nav.gpu.requestAdapter();
          hasWebGPU = Boolean(adapter);
        } catch {
          hasWebGPU = false;
        }
      }

      let supportsWebGL2 = false;
      let maxTextureSize: number | null = null;
      let maxCombinedTextureImageUnits: number | null = null;
      let renderer: string | null = null;

      if (typeof document !== "undefined") {
        try {
          const canvas = document.createElement("canvas");
          const gl2 = canvas.getContext("webgl2");
          const gl = gl2 ?? canvas.getContext("webgl");
          if (gl) {
            supportsWebGL2 = Boolean(gl2);
            maxTextureSize = Number(gl.getParameter(gl.MAX_TEXTURE_SIZE)) || null;
            maxCombinedTextureImageUnits =
              Number(gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)) || null;

            const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
            if (debugInfo) {
              renderer = String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) ?? "");
            }
          }
          canvas.remove();
        } catch {
          // GL probe failed; keep defaults.
        }
      }

      const isMobile =
        Boolean(nav.userAgentData?.mobile) ||
        /android|iphone|ipad|ipod|mobile/i.test(nav.userAgent ?? "");
      const saveData = Boolean(nav.connection?.saveData);
      const memoryGiB = typeof nav.deviceMemory === "number" ? nav.deviceMemory : null;

      if (typeof nav.getBattery === "function") {
        try {
          const battery = await nav.getBattery();
          batteryLevel = typeof battery.level === "number" ? battery.level : null;
          isCharging = typeof battery.charging === "boolean" ? battery.charging : null;
        } catch {
          // Battery probe is optional.
        }
      }

      const lowBattery =
        batteryLevel !== null && isCharging === false && batteryLevel <= 0.30;

      lowPowerModeLikely =
        (isMobile && (saveData || lowBattery)) ||
        (isMobile && memoryGiB !== null && memoryGiB <= 2);

      const baseTier = classifyGpuTier({
        hasWebXR,
        hasWebGPU,
        maxTextureSize,
        maxCombinedTextureImageUnits,
        renderer,
      });

      let tier = baseTier;
      if (lowPowerModeLikely && tier > 0) tier -= 1;
      if (isMobile && batteryLevel !== null && isCharging === false && batteryLevel <= 0.15 && tier > 0) {
        tier -= 1;
      }
      tier = Math.max(0, Math.min(3, tier));

      const streamingTargets = detectStreamingTargets();
      const canCast = streamingTargets.chromecast || streamingTargets.airplay || streamingTargets.dlna;
      const discoveryConfidence = scoreDeviceDiscoveryConfidence({
        tier,
        gpuTier: baseTier,
        hasWebXR,
        hasWebGPU,
        supportsWebGL2,
        maxTextureSize,
        maxCombinedTextureImageUnits,
        lowPowerModeLikely,
        streamingTargets,
      });

      const upgradePath = buildUpgradePath({
        tier,
        hasWebXR,
        hasWebGPU,
        supportsWebGL2,
        lowPowerModeLikely,
        canCast,
      });

      emitDeviceTierTelemetry({
        tier,
        gpuTier: baseTier,
        hasWebXR,
        hasWebGPU,
        supportsWebGL2,
        maxTextureSize,
        canCast,
        lowPowerModeLikely,
        batteryLevel,
        supportedWebXRModes,
        streamingTargets,
        discoveryConfidence: discoveryConfidence.confidence,
        discoveryConfidenceBand: discoveryConfidence.band,
        discoverySignalCount: discoveryConfidence.signalCount,
        streamingTargetCount: discoveryConfidence.streamingTargetCount,
      });

      setState({
        canSpatial: tier >= 2,
        isReady: true,
        tier,
        capabilities: {
          tierLabel: TIER_LABELS[Math.min(tier, 3)],
          canCast,
          hasWebXR,
          supportedWebXRModes,
          gpuTier: baseTier,
          supportsWebGL2,
          maxTextureSize,
          maxCombinedTextureImageUnits,
          hasWebGPU,
          lowPowerModeLikely,
          batteryLevel,
          isCharging,
          streamingTargets,
          discoveryConfidence: discoveryConfidence.confidence,
          discoveryConfidenceBand: discoveryConfidence.band,
          discoverySignalCount: discoveryConfidence.signalCount,
          streamingTargetCount: discoveryConfidence.streamingTargetCount,
          upgradePath,
          detectionVersion: DETECTION_VERSION,
        },
      });
    };

    void detect();
  }, [enabled]);

  const contextValue = enabled ? state : DISABLED_CONTEXT;

  return (
    <DeviceGatewayContext.Provider value={contextValue}>
      {children}
    </DeviceGatewayContext.Provider>
  );
}

/* ── Hook ── */

export function useDeviceGateway(): DeviceGatewayContextValue {
  return useContext(DeviceGatewayContext);
}
