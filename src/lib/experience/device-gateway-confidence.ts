export type StreamingTargets = {
  chromecast: boolean;
  airplay: boolean;
  dlna: boolean;
};

export type DeviceDiscoveryConfidenceBand = "low" | "medium" | "high";

export type DeviceDiscoveryConfidenceInput = {
  tier: number;
  gpuTier: number;
  hasWebXR: boolean;
  hasWebGPU: boolean;
  supportsWebGL2: boolean;
  maxTextureSize: number | null;
  maxCombinedTextureImageUnits: number | null;
  lowPowerModeLikely: boolean;
  streamingTargets: StreamingTargets;
};

export type DeviceDiscoveryConfidenceResult = {
  confidence: number;
  band: DeviceDiscoveryConfidenceBand;
  signalCount: number;
  streamingTargetCount: number;
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function round(value: number): number {
  return Math.round(value * 1000) / 1000;
}

export function countStreamingTargets(streamingTargets: StreamingTargets): number {
  let count = 0;
  if (streamingTargets.chromecast) count += 1;
  if (streamingTargets.airplay) count += 1;
  if (streamingTargets.dlna) count += 1;
  return count;
}

export function scoreDeviceDiscoveryConfidence(
  input: DeviceDiscoveryConfidenceInput,
): DeviceDiscoveryConfidenceResult {
  let score = 0.2;
  let signalCount = 0;

  const register = (condition: boolean, weight: number) => {
    if (!condition) return;
    score += weight;
    signalCount += 1;
  };

  register(input.hasWebXR, 0.2);
  register(input.hasWebGPU, 0.14);
  register(input.supportsWebGL2, 0.12);
  register(input.maxTextureSize !== null && input.maxTextureSize >= 8192, 0.1);
  register(input.maxTextureSize !== null && input.maxTextureSize >= 16_384, 0.06);
  register(
    input.maxCombinedTextureImageUnits !== null &&
      input.maxCombinedTextureImageUnits >= 16,
    0.05,
  );
  register(
    input.maxCombinedTextureImageUnits !== null &&
      input.maxCombinedTextureImageUnits >= 24,
    0.04,
  );
  register(input.gpuTier >= 1, 0.06);
  register(input.gpuTier >= 2, 0.07);
  register(input.tier >= 2, 0.04);

  const streamingTargetCount = countStreamingTargets(input.streamingTargets);
  if (streamingTargetCount > 0) {
    score += 0.03 + (streamingTargetCount - 1) * 0.02;
    signalCount += streamingTargetCount;
  }

  if (input.lowPowerModeLikely) {
    score -= 0.12;
  }

  if (input.tier === 0) {
    score -= 0.05;
  }

  if (!input.supportsWebGL2 && !input.hasWebXR) {
    score -= 0.05;
  }

  const confidence = clamp(round(score), 0.1, 0.99);
  const band: DeviceDiscoveryConfidenceBand =
    confidence >= 0.75 ? "high" : confidence >= 0.5 ? "medium" : "low";

  return {
    confidence,
    band,
    signalCount,
    streamingTargetCount,
  };
}
