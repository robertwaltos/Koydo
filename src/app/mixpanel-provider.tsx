"use client";

import { useEffect } from "react";
import { initMixpanel } from "@/lib/analytics/mixpanel";
import {
  deleteSyncedProgress,
  getUnsyncedProgress,
} from "@/lib/offline/progress-db";

async function syncOfflineProgress() {
  console.log("Checking for offline progress to sync...");
  const unsynced = await getUnsyncedProgress();
  if (unsynced.length === 0) {
    console.log("No offline progress to sync.");
    return;
  }

  console.log(`Found ${unsynced.length} records to sync.`);
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
        console.log(`Record ${record.lessonId} synced successfully.`);
      } else {
        console.error(`Failed to sync record ${record.lessonId}. Server responded with ${response.status}`);
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
  useEffect(() => {
    initMixpanel();
    
    // Set up background sync for offline progress
    syncOfflineProgress();
    window.addEventListener("online", syncOfflineProgress);

    return () => {
      window.removeEventListener("online", syncOfflineProgress);
    };
  }, []);

  return <>{children}</>;
}
