"use client";

import type { LearningEventInput } from "@/lib/analytics/learning-events";

type TelemetryRequestBody = {
  events: LearningEventInput[];
};

const QUEUE_STORAGE_KEY = "koydo.telemetry.learning_event_queue.v1";
const QUEUE_STORAGE_MAX_ITEMS = 250;
const FLUSH_BATCH_SIZE = 25;

let listenersInstalled = false;
let flushInFlight: Promise<void> | null = null;

function hasWindow() {
  return typeof window !== "undefined";
}

function toRequestBody(events: LearningEventInput[]): TelemetryRequestBody {
  return { events };
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

function normalizeEvent(event: LearningEventInput): LearningEventInput {
  return {
    ...event,
    eventAt: event.eventAt ?? new Date().toISOString(),
  };
}

function readQueue(): LearningEventInput[] {
  if (!hasWindow()) return [];
  try {
    const raw = window.localStorage.getItem(QUEUE_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item): item is LearningEventInput => {
      if (!item || typeof item !== "object") return false;
      const maybeEvent = item as Partial<LearningEventInput>;
      return (
        typeof maybeEvent.lessonId === "string"
        && maybeEvent.lessonId.length > 0
        && typeof maybeEvent.eventType === "string"
      );
    });
  } catch {
    return [];
  }
}

function writeQueue(events: LearningEventInput[]) {
  if (!hasWindow()) return;
  try {
    if (events.length === 0) {
      window.localStorage.removeItem(QUEUE_STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(
      QUEUE_STORAGE_KEY,
      JSON.stringify(events.slice(-QUEUE_STORAGE_MAX_ITEMS)),
    );
  } catch {
    // Telemetry queue persistence is best-effort.
  }
}

function enqueueEvents(events: LearningEventInput[]) {
  if (!hasWindow() || events.length === 0) return;
  const existing = readQueue();
  writeQueue([...existing, ...events.map(normalizeEvent)]);
}

function installQueueListeners() {
  if (!hasWindow() || listenersInstalled) return;
  listenersInstalled = true;

  window.addEventListener("online", () => {
    void flushLearningEventQueue();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      void flushLearningEventQueue();
    }
  });
}

async function flushQueueInternal() {
  if (!hasWindow()) return;
  if (typeof navigator !== "undefined" && "onLine" in navigator && !navigator.onLine) {
    return;
  }

  while (true) {
    const queue = readQueue();
    if (queue.length === 0) return;

    const batch = queue.slice(0, FLUSH_BATCH_SIZE);
    const remainder = queue.slice(batch.length);

    try {
      const response = await postWithFetch(toRequestBody(batch));

      if (response.ok) {
        writeQueue(remainder);
        continue;
      }

      if (response.status >= 400 && response.status < 500 && response.status !== 401) {
        // Drop malformed events to avoid a permanently blocked queue.
        writeQueue(remainder);
        continue;
      }

      // 401 or 5xx: keep queue for later retries.
      return;
    } catch {
      // Network/service unavailable: keep queue for retry.
      return;
    }
  }
}

export function getQueuedLearningEventCount() {
  return readQueue().length;
}

export async function flushLearningEventQueue() {
  if (!hasWindow()) return;
  installQueueListeners();

  if (!flushInFlight) {
    flushInFlight = (async () => {
      await flushQueueInternal();
    })().finally(() => {
      flushInFlight = null;
    });
  }

  await flushInFlight;
}

export async function trackLearningEvent(event: LearningEventInput) {
  if (!event.lessonId || !event.eventType) {
    return;
  }

  if (!hasWindow()) {
    return;
  }

  installQueueListeners();
  const normalizedEvent = normalizeEvent(event);

  if (
    typeof navigator !== "undefined"
    && typeof navigator.sendBeacon === "function"
    && document.visibilityState === "hidden"
  ) {
    try {
      const blob = new Blob([JSON.stringify(toRequestBody([normalizedEvent]))], {
        type: "application/json",
      });
      const queued = navigator.sendBeacon("/api/telemetry/events", blob);
      if (queued) {
        return;
      }
    } catch {
      // Fall through to fetch/queue path.
    }
  }

  try {
    const response = await postWithFetch(toRequestBody([normalizedEvent]));
    if (response.ok) {
      void flushLearningEventQueue();
      return;
    }

    enqueueEvents([normalizedEvent]);
    void flushLearningEventQueue();
  } catch {
    enqueueEvents([normalizedEvent]);
  }
}
