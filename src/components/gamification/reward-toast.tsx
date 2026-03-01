"use client";

import { useEffect, useState } from "react";

type RewardEvent = {
  type: "points" | "badge" | "level_up" | "streak";
  label: string;
  value?: number;
};

type RewardToastProps = {
  event: RewardEvent | null;
  duration?: number;
  onDismiss: () => void;
};

const TOAST_ICONS: Record<RewardEvent["type"], string> = {
  points: "✨",
  badge: "🏅",
  level_up: "🎉",
  streak: "🔥",
};

const TOAST_COLORS: Record<RewardEvent["type"], string> = {
  points: "from-amber-400 to-amber-500",
  badge: "from-violet-400 to-violet-500",
  level_up: "from-emerald-400 to-emerald-500",
  streak: "from-orange-400 to-red-500",
};

export function RewardToast({
  event,
  duration = 3000,
  onDismiss,
}: RewardToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!event) {
      const resetTimer = setTimeout(() => {
        setVisible(false);
      }, 0);
      return () => clearTimeout(resetTimer);
    }

    let dismissTimer: ReturnType<typeof setTimeout> | undefined;
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 0);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      dismissTimer = setTimeout(onDismiss, 300);
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      if (dismissTimer) {
        clearTimeout(dismissTimer);
      }
    };
  }, [event, duration, onDismiss]);

  if (!event) return null;

  const icon = TOAST_ICONS[event.type];
  const colorClass = TOAST_COLORS[event.type];

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
    >
      <div
        className={`flex items-center gap-3 rounded-2xl bg-gradient-to-r ${colorClass} px-5 py-3 text-white shadow-lg`}
      >
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="text-sm font-bold">{event.label}</p>
          {event.value !== undefined && (
            <p className="text-xs opacity-90">+{event.value} points</p>
          )}
        </div>
      </div>
    </div>
  );
}
