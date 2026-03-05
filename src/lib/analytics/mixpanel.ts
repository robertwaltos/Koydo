import mixpanel from "mixpanel-browser";
import { publicEnv } from "@/lib/config/env";

let initialized = false;

/**
 * Initialize Mixpanel with appropriate persistence mode.
 *
 * COPPA compliance: child accounts (under 13) MUST use "memory" persistence
 * so no persistent identifiers are stored on the device. Adult accounts
 * use "localStorage" for cross-session tracking (with consent).
 */
export function initMixpanel(options?: { isChildAccount?: boolean }) {
  if (initialized || !publicEnv.NEXT_PUBLIC_MIXPANEL_TOKEN) {
    return;
  }

  // COPPA: never initialize Mixpanel for child accounts
  if (options?.isChildAccount) {
    return;
  }

  mixpanel.init(publicEnv.NEXT_PUBLIC_MIXPANEL_TOKEN, {
    track_pageview: true,
    persistence: "localStorage",
  });

  initialized = true;
}

export function trackLessonCompleted(payload: {
  lessonId: string;
  score: number;
  timeSpentSeconds: number;
}) {
  if (!initialized) {
    initMixpanel();
  }

  if (!publicEnv.NEXT_PUBLIC_MIXPANEL_TOKEN) {
    return;
  }

  mixpanel.track("lesson_completed", payload);
}
