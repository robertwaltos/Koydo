"use client";

import { useEffect, useRef } from "react";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";

type MissionPrepTrackerProps = {
  topicId: string;
};

export default function MissionPrepTracker({ topicId }: MissionPrepTrackerProps) {
  const sentRef = useRef(false);

  useEffect(() => {
    if (sentRef.current) return;
    sentRef.current = true;
    trackExplorerInteraction({
      surface: "topic",
      action: "mission_prep_opened",
      topicId,
      suggestionType: "mission_prep",
    });
  }, [topicId]);

  return null;
}

