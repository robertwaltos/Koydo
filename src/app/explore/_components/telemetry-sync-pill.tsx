"use client";

import { useEffect, useState } from "react";
import {
  flushLearningEventQueue,
  getQueuedLearningEventCount,
} from "@/lib/analytics/xapi-lite";
import { usePreReaderMode } from "./pre-reader-mode";

export default function TelemetrySyncPill() {
  const { isPreReaderMode } = usePreReaderMode();
  const [queuedCount, setQueuedCount] = useState(0);
  const [isFlushing, setIsFlushing] = useState(false);

  useEffect(() => {
    const refresh = () => {
      setQueuedCount(getQueuedLearningEventCount());
    };

    refresh();
    const timer = window.setInterval(refresh, 12000);
    window.addEventListener("online", refresh);
    document.addEventListener("visibilitychange", refresh);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("online", refresh);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  if (queuedCount <= 0 && !isFlushing) return null;

  return (
    <button
      type="button"
      onClick={() => {
        if (isFlushing) return;
        setIsFlushing(true);
        void flushLearningEventQueue()
          .finally(() => {
            setQueuedCount(getQueuedLearningEventCount());
          })
          .finally(() => {
            setIsFlushing(false);
          });
      }}
      className="ui-focus-ring inline-flex min-h-10 items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition-colors hover:bg-white"
      title="Offline events waiting to sync. Tap to retry now."
    >
      <span aria-hidden="true">{isFlushing ? "⏳" : "📡"}</span>
      {isPreReaderMode ? (
        <span className="sr-only">
          {isFlushing
            ? "Syncing queued events"
            : `${queuedCount} queued events waiting to sync`}
        </span>
      ) : (
        <span className="ml-1">
          {isFlushing ? "Syncing..." : `Queued: ${queuedCount}`}
        </span>
      )}
    </button>
  );
}
