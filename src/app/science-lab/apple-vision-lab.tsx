"use client";

import { useMemo, useState } from "react";

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
    <section className="space-y-4 rounded-xl border border-black/10 p-5 dark:border-white/15">
      <h2 className="text-lg font-semibold">Apple Vision Readiness</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        This checks WebXR support for immersive AR and provides a safe fallback if unavailable.
      </p>

      <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
        <li>Apple-like device detected: {isAppleDevice ? "Yes" : "No"}</li>
        <li>Safari-like browser detected: {isSafariLike ? "Yes" : "No"}</li>
        <li>Immersive AR support: {capability}</li>
      </ul>

      <button
        type="button"
        onClick={checkSupport}
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
      >
        Check Apple Vision Capability
      </button>

      {status ? (
        <p
          className={`text-sm ${
            capability === "unsupported"
              ? "text-amber-700 dark:text-amber-300"
              : "text-zinc-700 dark:text-zinc-200"
          }`}
        >
          {status}
        </p>
      ) : null}
    </section>
  );
}
