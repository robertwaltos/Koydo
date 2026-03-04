"use client";

import { useEffect } from "react";

const SERVICE_WORKER_PATH = "/sw-offline.js";

export default function OfflineRuntimeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    let isMounted = true;

    const register = async () => {
      try {
        const registration = await navigator.serviceWorker.register(SERVICE_WORKER_PATH);
        if (!isMounted) return;

        if (registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }

        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;
          if (!worker) return;
          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              worker.postMessage({ type: "SKIP_WAITING" });
            }
          });
        });
      } catch (error) {
        // Service worker registration should never block the app.
        console.warn("Offline runtime registration failed.", error);
      }
    };

    void register();

    return () => {
      isMounted = false;
    };
  }, []);

  return <>{children}</>;
}

