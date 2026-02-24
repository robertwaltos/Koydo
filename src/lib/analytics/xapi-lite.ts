"use client";

import type { LearningEventInput } from "@/lib/analytics/learning-events";

type TelemetryRequestBody = {
  events: LearningEventInput[];
};

function toRequestBody(event: LearningEventInput): TelemetryRequestBody {
  return {
    events: [event],
  };
}

function postWithFetch(body: TelemetryRequestBody) {
  return fetch("/api/telemetry/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    keepalive: true,
  });
}

export async function trackLearningEvent(event: LearningEventInput) {
  if (!event.lessonId || !event.eventType) {
    return;
  }

  const body = toRequestBody(event);

  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
    try {
      const blob = new Blob([JSON.stringify(body)], { type: "application/json" });
      const queued = navigator.sendBeacon("/api/telemetry/events", blob);
      if (queued) {
        return;
      }
    } catch {
      // Fallback to fetch below.
    }
  }

  try {
    await postWithFetch(body);
  } catch {
    // Telemetry must never block lesson interactions.
  }
}
