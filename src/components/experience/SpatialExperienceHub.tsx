"use client";

/**
 * SpatialExperienceHub — WebXR / Apple Vision Pro spatial computing overlay.
 *
 * Currently a dormant placeholder. When Tier 2+ devices are detected by
 * DeviceGatewayProvider, this component will render an immersive 3D spatial
 * scene. For now it provides a subtle ambient background.
 *
 * Phase: Post-launch (requires WebXR polyfill + Three.js or Reality Kit bridge).
 */

export function SpatialExperienceHub() {
  return (
    <div
      className="absolute inset-0"
      aria-hidden="true"
    >
      {/* Ambient spatial placeholder — replaced by WebXR scene when available */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-transparent to-emerald-950/20" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px] animate-pulse" />
    </div>
  );
}
