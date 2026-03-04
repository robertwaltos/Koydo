"use client";

import { useEffect, useMemo, useState } from "react";
import { useNetworkStatus } from "@/lib/platform/network-monitor";
import { cacheLessonPackRoutes } from "@/lib/offline/lesson-pack-cache";

type PackStatus = "idle" | "packing" | "ready" | "partial" | "failed";

export default function OfflineLessonPackPill({
  routes,
  compact = false,
}: {
  routes: string[];
  compact?: boolean;
}) {
  const { isOnline, isLoading } = useNetworkStatus();
  const [status, setStatus] = useState<PackStatus>(() => {
    if (typeof window === "undefined") return "idle";
    const hasReadyPack = Object.keys(window.sessionStorage)
      .some((key) => key.startsWith("offline-pack:") && window.sessionStorage.getItem(key) === "ready");
    return hasReadyPack ? "ready" : "idle";
  });
  const [cachedCount, setCachedCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);

  const normalizedRoutes = useMemo(
    () => [...new Set(routes.map((route) => route.trim()).filter((route) => route.startsWith("/")))],
    [routes],
  );

  useEffect(() => {
    if (isLoading || !isOnline) return;
    if (normalizedRoutes.length === 0) return;

    let cancelled = false;
    const cacheKey = `offline-pack:${normalizedRoutes.join("|")}`;
    if (window.sessionStorage.getItem(cacheKey) === "ready") {
      return;
    }

    const run = async () => {
      setStatus("packing");
      const result = await cacheLessonPackRoutes(normalizedRoutes);
      if (cancelled) return;

      setCachedCount(result.cachedCount);
      setFailedCount(result.failedRoutes.length);

      if (result.cachedCount > 0 && result.failedRoutes.length === 0) {
        setStatus("ready");
        window.sessionStorage.setItem(cacheKey, "ready");
        return;
      }
      if (result.cachedCount > 0) {
        setStatus("partial");
        return;
      }
      setStatus("failed");
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [isLoading, isOnline, normalizedRoutes]);

  if (isLoading) return null;

  const baseClassName =
    "inline-flex min-h-10 items-center rounded-full border px-3 py-1.5 text-xs font-semibold";

  if (!isOnline) {
    return (
      <span className={`${baseClassName} border-amber-300 bg-amber-50 text-amber-800`}>
        {compact ? "Offline Pack" : "Offline Pack Active"}
      </span>
    );
  }

  if (status === "packing" || status === "idle") {
    return (
      <span className={`${baseClassName} border-zinc-300 bg-white text-zinc-700`}>
        {compact ? "Packing..." : "Packing Offline Lessons..."}
      </span>
    );
  }

  if (status === "ready") {
    const readyCount = cachedCount > 0 ? cachedCount : normalizedRoutes.length;
    return (
      <span className={`${baseClassName} border-emerald-300 bg-emerald-50 text-emerald-800`}>
        {compact ? "Pack Ready" : `Offline Pack Ready (${readyCount})`}
      </span>
    );
  }

  if (status === "partial") {
    return (
      <span className={`${baseClassName} border-amber-300 bg-amber-50 text-amber-800`}>
        {compact
          ? "Pack Partial"
          : `Offline Pack Partial (${cachedCount} ready, ${failedCount} pending)`}
      </span>
    );
  }

  return (
    <span className={`${baseClassName} border-red-300 bg-red-50 text-red-800`}>
      {compact ? "Pack Retry" : "Offline Pack Pending Retry"}
    </span>
  );
}
