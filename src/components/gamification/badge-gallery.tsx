"use client";

import { useState } from "react";

type Badge = {
  id: string;
  label?: string;
  earnedAt: string;
};

type BadgeGalleryProps = {
  badges: Badge[];
  maxVisible?: number;
};

const BADGE_ICONS: Record<string, string> = {
  "first-lesson": "🎓",
  "streak-3": "🔥",
  "streak-7": "💫",
  "streak-30": "🏆",
  "perfect-score": "⭐",
  "speed-run": "⚡",
  "explorer": "🧭",
  "bookworm": "📚",
  "math-whiz": "🧮",
  "artist": "🎨",
  "scientist": "🔬",
  "word-master": "📝",
};

function getBadgeIcon(id: string) {
  const key = Object.keys(BADGE_ICONS).find((k) => id.includes(k));
  return key ? BADGE_ICONS[key] : "🏅";
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

export function BadgeGallery({ badges, maxVisible = 8 }: BadgeGalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? badges : badges.slice(0, maxVisible);
  const hasMore = badges.length > maxVisible;

  if (badges.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-200 p-6 text-center">
        <p className="text-2xl">🏅</p>
        <p className="mt-2 text-sm text-stone-400">
          Complete lessons and games to earn badges!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
        {visible.map((badge) => (
          <button
            key={badge.id}
            type="button"
            className="group flex flex-col items-center gap-1 rounded-xl p-2 transition-colors hover:bg-stone-50"
            title={badge.label ?? badge.id}
          >
            <span className="text-2xl transition-transform group-hover:scale-110">
              {getBadgeIcon(badge.id)}
            </span>
            <span className="line-clamp-1 text-[10px] font-medium text-stone-500">
              {badge.label ?? badge.id}
            </span>
            <span className="text-[9px] text-stone-300">
              {formatDate(badge.earnedAt)}
            </span>
          </button>
        ))}
      </div>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mt-2 w-full text-center text-xs font-medium text-sky-500 hover:text-sky-600"
        >
          {expanded ? "Show less" : `+${badges.length - maxVisible} more`}
        </button>
      )}
    </div>
  );
}
