"use client";

import { useCallback, useRef } from "react";

const DEBOUNCE_MS = 5_000;

/**
 * useSaveCheckpoint — debounced hook that saves the learner's
 * current position so the dashboard can show "Continue where you left off".
 *
 * Call `saveCheckpoint()` on tab changes, chunk navigation, etc.
 * It debounces to avoid hammering the API.
 */
export function useSaveCheckpoint() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const saveCheckpoint = useCallback(
    ({ moduleTitle, lessonTitle }: { moduleTitle: string; lessonTitle: string }) => {
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        const checkpointUrl = window.location.pathname;

        fetch("/api/student/checkpoint", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checkpointUrl, moduleTitle, lessonTitle }),
        }).catch(() => {
          // Non-critical — checkpoint save is best-effort
        });
      }, DEBOUNCE_MS);
    },
    [],
  );

  return { saveCheckpoint };
}
