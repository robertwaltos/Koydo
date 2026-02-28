"use client";

import { useEffect, useRef } from "react";
import { trackExplorerView } from "@/lib/analytics/explorer-events";

type ExplorerViewTrackerProps = {
  surface: "lobby" | "topic" | "module" | "shared";
  topicId?: string;
  moduleId?: string;
  payload?: Record<
    string,
    string | number | boolean | null | Array<string | number | boolean | null>
  >;
};

export default function ExplorerViewTracker({
  surface,
  topicId,
  moduleId,
  payload,
}: ExplorerViewTrackerProps) {
  const sentKeyRef = useRef<string>("");

  useEffect(() => {
    const key = `${surface}:${topicId ?? ""}:${moduleId ?? ""}:${JSON.stringify(payload ?? {})}`;
    if (sentKeyRef.current === key) return;
    sentKeyRef.current = key;
    trackExplorerView({ surface, topicId, moduleId, payload });
  }, [surface, topicId, moduleId, payload]);

  return null;
}
