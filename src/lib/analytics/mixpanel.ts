import mixpanel from "mixpanel-browser";
import { publicEnv } from "@/lib/config/env";

let initialized = false;

export function initMixpanel() {
  if (initialized || !publicEnv.NEXT_PUBLIC_MIXPANEL_TOKEN) {
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
