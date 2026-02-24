"use client";

import { useMemo, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

type CapabilityState = "unknown" | "supported" | "unsupported";

function useAppleVisionHints() {
  return useMemo(() => {
    if (typeof navigator === "undefined") {
      return { isAppleDevice: false, isSafariLike: false };
    }

    const ua = navigator.userAgent;
    const isAppleDevice = /iPhone|iPad|Macintosh|Vision/i.test(ua);
    const isSafariLike =
      /Safari/i.test(ua) && !/Chrome|CriOS|Edg|Firefox|FxiOS/i.test(ua);

    return { isAppleDevice, isSafariLike };
  }, []);
}

export default function AppleVisionLab() {
  const [capability, setCapability] = useState<CapabilityState>("unknown");
  const [status, setStatus] = useState("");
  const { isAppleDevice, isSafariLike } = useAppleVisionHints();

  const checkSupport = async () => {
    setStatus("");

    if (typeof navigator === "undefined" || !("xr" in navigator)) {
      setCapability("unsupported");
      setStatus("WebXR is not available in this browser.");
      return;
    }

    try {
      const xr = (navigator as Navigator & { xr?: { isSessionSupported: (mode: string) => Promise<boolean> } }).xr;
      const supported = await xr?.isSessionSupported("immersive-ar");
      setCapability(supported ? "supported" : "unsupported");
      setStatus(
        supported
          ? "Immersive AR is available. You can proceed with Apple Vision experiences."
          : "Immersive AR session is not supported on this device/browser."
      );
    } catch {
      setCapability("unsupported");
      setStatus("Unable to verify AR support. Check browser permissions and try again.");
    }
  };

  return (
    <SoftCard as="section" className="space-y-4 p-5">
      <h2 className="text-lg font-semibold">Apple Vision Readiness</h2>
      <p className="text-sm text-zinc-700">
        This checks WebXR support for immersive AR and provides a safe fallback if unavailable.
      </p>

      <div className="flex flex-wrap gap-2">
        <ProgressChip label="Apple-like Device" value={isAppleDevice ? "Yes" : "No"} tone={isAppleDevice ? "success" : "neutral"} />
        <ProgressChip label="Safari-like Browser" value={isSafariLike ? "Yes" : "No"} tone={isSafariLike ? "success" : "neutral"} />
        <ProgressChip
          label="Immersive AR"
          value={capability}
          tone={capability === "supported" ? "success" : capability === "unsupported" ? "warning" : "neutral"}
        />
      </div>

      <button
        type="button"
        onClick={checkSupport}
        className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground"
      >
        Check Apple Vision Capability
      </button>

      {status ? (
        <p
          className={`text-sm ${
            capability === "unsupported"
              ? "text-amber-700"
              : "text-zinc-700"
          }`}
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      ) : null}
    </SoftCard>
  );
}
