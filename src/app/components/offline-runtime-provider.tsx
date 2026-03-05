"use client";

import { useEffect, useState, useCallback } from "react";

const SERVICE_WORKER_PATH = "/sw-offline.js";

function OfflineBanner({ isOnline }: { isOnline: boolean }) {
  const [dismissed, setDismissed] = useState(false);
  const [showReconnected, setShowReconnected] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setWasOffline(true);
      setDismissed(false);
    } else if (wasOffline) {
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
        setWasOffline(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (isOnline && !showReconnected) return null;
  if (!isOnline && dismissed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        fontSize: "14px",
        fontWeight: 500,
        color: "#fff",
        backgroundColor: isOnline ? "#16a34a" : "#b45309",
        transition: "background-color 0.3s ease",
      }}
    >
      <span>
        {isOnline
          ? "Back online — syncing your progress..."
          : "You're offline — cached content is still available"}
      </span>
      {!isOnline && (
        <button
          type="button"
          onClick={() => setDismissed(true)}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: "4px",
            color: "#fff",
            padding: "2px 8px",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Dismiss
        </button>
      )}
    </div>
  );
}

export default function OfflineRuntimeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = useCallback(() => setIsOnline(true), []);
  const handleOffline = useCallback(() => setIsOnline(false), []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsOnline(navigator.onLine);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [handleOnline, handleOffline]);

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
        console.warn("Offline runtime registration failed.", error);
      }
    };

    void register();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {children}
      <OfflineBanner isOnline={isOnline} />
    </>
  );
}
