"use client";

import { useEffect, useCallback } from "react";
import { initMixpanel } from "@/lib/analytics/mixpanel";
import { isAnalyticsAllowed, getConsentState } from "@/lib/consent/tracking-consent";
import {
  deleteSyncedProgress,
  getUnsyncedProgress,
} from "@/lib/offline/progress-db";

type AuthContextPayload = {
  isAuthenticated?: boolean;
};

async function isUserAuthenticated(): Promise<boolean> {
  try {
    const response = await fetch("/api/auth/context", { method: "GET" });
    if (!response.ok) {
      return false;
    }
    const payload = (await response.json()) as AuthContextPayload;
    return Boolean(payload.isAuthenticated);
  } catch {
    return false;
  }
}

async function syncOfflineProgress() {
  console.debug("Checking for offline progress to sync...");
  const unsynced = await getUnsyncedProgress();
  if (unsynced.length === 0) {
    console.debug("No offline progress to sync.");
    return;
  }

  const authenticated = await isUserAuthenticated();
  if (!authenticated) {
    // Expected for signed-out users; keep records for later authenticated sync.
    console.debug("Offline progress sync skipped: user is not authenticated.");
    return;
  }

  console.debug(`Found ${unsynced.length} records to sync.`);
  for (const record of unsynced) {
    try {
      const response = await fetch("/api/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonId: record.lessonId,
          scorePercentage: record.totalQuestions > 0 ? record.score / record.totalQuestions : 0,
        }),
      });

      if (response.ok) {
        await deleteSyncedProgress(record.lessonId);
        console.debug(`Record ${record.lessonId} synced successfully.`);
      } else if (response.status === 401 || response.status === 403) {
        // Session may have expired between checks; stop and retry on next cycle.
        console.debug("Offline progress sync paused: authentication required.");
        break;
      } else if (response.status === 400 || response.status === 422) {
        // Drop invalid payload rows so one bad entry cannot block the queue forever.
        await deleteSyncedProgress(record.lessonId);
        console.warn(
          `Dropped invalid offline progress ${record.lessonId}. Server responded with ${response.status}.`,
        );
      } else if (response.status === 429 || response.status >= 500) {
        console.warn(
          `Offline progress sync deferred after ${record.lessonId}. Server responded with ${response.status}.`,
        );
        // Stop trying on transient server/rate-limit errors to avoid server pressure.
        break;
      } else {
        console.warn(
          `Failed to sync record ${record.lessonId}. Server responded with ${response.status}.`,
        );
        break;
      }
    } catch (error) {
      console.error(`Error syncing record ${record.lessonId}:`, error);
      // Stop trying on the first error to avoid spamming the server if it's a persistent issue
      break;
    }
  }
}

export default function MixpanelProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const tryInitAnalytics = useCallback(() => {
    if (isAnalyticsAllowed()) {
      initMixpanel();
    }
  }, []);

  useEffect(() => {
    // Only initialize Mixpanel if the user has consented to analytics tracking.
    // On first visit, consent is undecided and analytics will NOT fire (GDPR default-deny).
    tryInitAnalytics();

    // Listen for consent updates (e.g., user clicks "Accept All" on banner)
    const handleConsentUpdate = () => {
      tryInitAnalytics();
    };
    window.addEventListener("koydo:consent-updated", handleConsentUpdate);

    // Set up background sync for offline progress (not gated by analytics consent)
    void syncOfflineProgress();
    const handleOnline = () => {
      void syncOfflineProgress();
    };
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("koydo:consent-updated", handleConsentUpdate);
      window.removeEventListener("online", handleOnline);
    };
  }, [tryInitAnalytics]);

  return <>{children}</>;
}
