"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface RageClickOptions {
  /** Number of rapid clicks to trigger (default: 5) */
  threshold?: number;
  /** Time window in ms (default: 2000) */
  window?: number;
  /** Cooldown between triggers in ms (default: 60000) */
  cooldown?: number;
  onFrustration?: () => void;
}

export function useRageClickDetector({
  threshold = 5,
  window: timeWindow = 2000,
  cooldown = 60000,
  onFrustration,
}: RageClickOptions = {}) {
  const clickTimestamps = useRef<number[]>([]);
  const lastTriggered = useRef(0);
  const [isTriggered, setIsTriggered] = useState(false);

  const reset = useCallback(() => {
    setIsTriggered(false);
    clickTimestamps.current = [];
  }, []);

  useEffect(() => {
    function handleClick() {
      const now = Date.now();

      // Enforce cooldown
      if (now - lastTriggered.current < cooldown) return;

      clickTimestamps.current.push(now);

      // Keep only clicks within the time window
      clickTimestamps.current = clickTimestamps.current.filter(
        (t) => now - t <= timeWindow,
      );

      if (clickTimestamps.current.length >= threshold) {
        lastTriggered.current = now;
        clickTimestamps.current = [];
        setIsTriggered(true);
        onFrustration?.();
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [threshold, timeWindow, cooldown, onFrustration]);

  return { isTriggered, reset };
}
