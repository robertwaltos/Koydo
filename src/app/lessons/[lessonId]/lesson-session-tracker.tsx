"use client";

import { useEffect, useRef } from "react";
import { trackLearningEvent } from "@/lib/analytics/xapi-lite";

type LessonSessionTrackerProps = {
  moduleId: string;
  lessonId: string;
};

export default function LessonSessionTracker({ moduleId, lessonId }: LessonSessionTrackerProps) {
  const trackedRef = useRef(false);

  useEffect(() => {
    if (trackedRef.current) {
      return;
    }
    trackedRef.current = true;

    void trackLearningEvent({
      eventType: "lesson_viewed",
      moduleId,
      lessonId,
      payload: {
        source: "lesson-page",
      },
    });
  }, [lessonId, moduleId]);

  return null;
}
