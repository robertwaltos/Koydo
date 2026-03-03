/**
 * useAirplaneMode — orchestrates offline content download, storage, and sync.
 *
 * Provides:
 * - Download estimation (size warning for parents)
 * - Pack download with progress tracking
 * - Airplane mode enable/disable
 * - Background sync of offline progress when back online
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";
import {
  getAirplaneState,
  storeContentPack,
  clearOfflineContent,
  getUnsyncedProgress,
  markProgressSynced,
  clearSyncedProgress,
  isPackFresh,
  type AirplaneState,
} from "@/lib/offline/content-store";
import type { AirplaneModeEstimate } from "@/lib/offline/offline-packs";

// ── Types ──────────────────────────────────────────────────────────

export type DownloadPhase =
  | "idle"
  | "estimating"
  | "confirming" // waiting for parent to confirm data usage
  | "downloading"
  | "storing"
  | "complete"
  | "error";

export type DailyQuota = {
  downloadsUsed: number;
  downloadsRemaining: number;
  hoursUsed: number;
  hoursRemaining: number;
  maxDownloadsPerDay: number;
  maxHoursPerDay: number;
};

export type AirplaneModeHook = {
  /** Current airplane mode state from IDB */
  state: AirplaneState | null;
  /** Whether airplane mode is ready (content downloaded, not expired) */
  isReady: boolean;
  /** Current download phase */
  phase: DownloadPhase;
  /** Download progress 0-100 */
  progress: number;
  /** Error message if phase === "error" */
  errorMessage: string | null;
  /** Size estimate (populated during estimating/confirming phases) */
  estimate: AirplaneModeEstimate | null;
  /** Daily download quota remaining */
  dailyQuota: DailyQuota | null;
  /** Whether device is currently online */
  isOnline: boolean;
  /** Whether premium is required but not active */
  isPremiumRequired: boolean;
  /** Whether daily quota is exhausted */
  isDailyLimitReached: boolean;
  /** Start the estimation process */
  requestEstimate: (options?: { subjects?: string[]; maxHours?: number }) => Promise<void>;
  /** Confirm and begin downloading (after parent sees data warning) */
  confirmDownload: (options?: { subjects?: string[]; maxHours?: number }) => Promise<void>;
  /** Cancel pending download */
  cancelDownload: () => void;
  /** Disable airplane mode and clear stored content */
  disable: () => Promise<void>;
  /** Sync offline progress back to server */
  syncProgress: () => Promise<{ synced: number; failed: number }>;
  /** Refresh state from IDB */
  refresh: () => Promise<void>;
};

// ── Hook ───────────────────────────────────────────────────────────

export function useAirplaneMode(): AirplaneModeHook {
  const { isOnline } = useNetworkStatus();
  const [state, setState] = useState<AirplaneState | null>(null);
  const [phase, setPhase] = useState<DownloadPhase>("idle");
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [estimate, setEstimate] = useState<AirplaneModeEstimate | null>(null);
  const [isPremiumRequired, setIsPremiumRequired] = useState(false);
  const [dailyQuota, setDailyQuota] = useState<DailyQuota | null>(null);
  const isDailyLimitReached =
    dailyQuota !== null &&
    (dailyQuota.downloadsRemaining <= 0 || dailyQuota.hoursRemaining <= 0);

  // Load initial state from IDB
  const refresh = useCallback(async () => {
    try {
      const s = await getAirplaneState();
      setState(s);
    } catch {
      // IDB not available (SSR or private browsing)
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Auto-sync when coming back online
  useEffect(() => {
    if (isOnline && state?.enabled) {
      syncProgressInternal().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline, state?.enabled]);

  const isReady =
    state?.enabled === true &&
    state.activePackId !== null &&
    (state.expiresAt ? new Date(state.expiresAt) > new Date() : false);

  // ── Estimate ─────────────────────────────────────────────────────

  const requestEstimate = useCallback(
    async (options?: { subjects?: string[]; maxHours?: number }) => {
      setPhase("estimating");
      setErrorMessage(null);
      setIsPremiumRequired(false);

      try {
        const params = new URLSearchParams();
        if (options?.subjects?.length) {
          params.set("subjects", options.subjects.join(","));
        }
        if (options?.maxHours) {
          params.set("maxHours", String(options.maxHours));
        }

        const res = await fetch(
          `/api/offline/airplane-mode?${params.toString()}`,
          { credentials: "include" },
        );

        if (res.status === 403) {
          const data = await res.json();
          if (data.code === "PREMIUM_REQUIRED") {
            setIsPremiumRequired(true);
            setPhase("error");
            setErrorMessage("Airplane Mode requires a paid plan.");
            return;
          }
        }

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        setEstimate(data as AirplaneModeEstimate);
        if (data.dailyQuota) setDailyQuota(data.dailyQuota as DailyQuota);
        setPhase("confirming");
      } catch (err) {
        setPhase("error");
        setErrorMessage(
          err instanceof Error ? err.message : "Failed to estimate download size.",
        );
      }
    },
    [],
  );

  // ── Download ─────────────────────────────────────────────────────

  const confirmDownload = useCallback(
    async (options?: { subjects?: string[]; maxHours?: number }) => {
      setPhase("downloading");
      setProgress(10);
      setErrorMessage(null);

      try {
        const body: Record<string, unknown> = {};
        if (options?.subjects?.length) body.subjects = options.subjects;
        if (options?.maxHours) body.maxHours = options.maxHours;

        setProgress(20);

        const res = await fetch("/api/offline/airplane-mode", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        setProgress(60);

        if (res.status === 403) {
          setIsPremiumRequired(true);
          setPhase("error");
          setErrorMessage("Airplane Mode requires a paid plan.");
          return;
        }

        if (res.status === 429) {
          const errData = await res.json();
          if (errData.dailyQuota) setDailyQuota(errData.dailyQuota as DailyQuota);
          setPhase("error");
          setErrorMessage(
            errData.error ?? "Daily download limit reached. Try again tomorrow.",
          );
          return;
        }

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const pack = await res.json();
        setProgress(80);

        // Store in IndexedDB
        setPhase("storing");
        await storeContentPack(pack);
        setProgress(100);

        setPhase("complete");
        await refresh();
      } catch (err) {
        setPhase("error");
        setErrorMessage(
          err instanceof Error ? err.message : "Download failed. Please try again.",
        );
      }
    },
    [refresh],
  );

  const cancelDownload = useCallback(() => {
    setPhase("idle");
    setEstimate(null);
    setProgress(0);
  }, []);

  // ── Disable ──────────────────────────────────────────────────────

  const disable = useCallback(async () => {
    // Sync any pending progress first
    if (isOnline) {
      try {
        await syncProgressInternal();
      } catch {
        // Non-blocking
      }
    }

    await clearOfflineContent();
    setPhase("idle");
    setEstimate(null);
    setProgress(0);
    setIsPremiumRequired(false);
    await refresh();
  }, [isOnline, refresh]);

  // ── Sync Progress ────────────────────────────────────────────────

  async function syncProgressInternal(): Promise<{
    synced: number;
    failed: number;
  }> {
    const unsynced = await getUnsyncedProgress();
    if (unsynced.length === 0) return { synced: 0, failed: 0 };

    try {
      const airplaneState = await getAirplaneState();
      const res = await fetch("/api/offline/pack", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packId: airplaneState.activePackId ?? "unknown",
          clientDeviceId: getDeviceId(),
          entries: unsynced.map((r) => ({
            lessonId: r.lessonId,
            moduleId: r.moduleId,
            questionId: r.questionId,
            selectedOptionId: r.selectedOptionId,
            correct: r.correct,
            answeredAt: r.answeredAt,
            clientEventId: r.clientEventId,
          })),
        }),
      });

      if (!res.ok) return { synced: 0, failed: unsynced.length };

      const result = await res.json();
      const syncedIds = unsynced
        .slice(0, result.accepted + result.duplicates)
        .map((r) => r.clientEventId);
      await markProgressSynced(syncedIds);
      await clearSyncedProgress();

      return {
        synced: result.accepted,
        failed: result.rejected,
      };
    } catch {
      return { synced: 0, failed: unsynced.length };
    }
  }

  const syncProgress = useCallback(async () => {
    return syncProgressInternal();
  }, []);

  return {
    state,
    isReady,
    phase,
    progress,
    errorMessage,
    estimate,
    dailyQuota,
    isOnline,
    isPremiumRequired,
    isDailyLimitReached,
    requestEstimate,
    confirmDownload,
    cancelDownload,
    disable,
    syncProgress,
    refresh,
  };
}

// ── Device ID ──────────────────────────────────────────────────────

function getDeviceId(): string {
  if (typeof window === "undefined") return "server";
  const key = "koydo-device-id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}
