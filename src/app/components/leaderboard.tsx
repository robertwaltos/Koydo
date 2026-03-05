"use client";

import { useEffect, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";

type LeaderEntry = {
  rank: number;
  displayId: string;
  points: number;
  level: number;
  isCurrentUser: boolean;
};

export default function Leaderboard() {
  const [board, setBoard] = useState<LeaderEntry[]>([]);
  const [userRank, setUserRank] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((r) => r.json())
      .then((d) => {
        setBoard(d.leaderboard ?? []);
        setUserRank(d.userRank);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <SoftCard className="p-6 text-center text-sm text-foreground/40">Loading leaderboard...</SoftCard>;
  }

  const RANK_STYLES: Record<number, string> = {
    1: "bg-gradient-to-r from-amber-100 to-amber-50 border-amber-300 dark:from-amber-900/20 dark:to-amber-900/10 dark:border-amber-700",
    2: "bg-gradient-to-r from-slate-100 to-slate-50 border-slate-300 dark:from-slate-800/20 dark:to-slate-800/10 dark:border-slate-600",
    3: "bg-gradient-to-r from-orange-50 to-amber-50 border-orange-300 dark:from-orange-900/20 dark:to-orange-900/10 dark:border-orange-700",
  };

  const RANK_MEDALS: Record<number, string> = { 1: "\u{1F947}", 2: "\u{1F948}", 3: "\u{1F949}" };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Weekly Leaderboard</h2>
        {userRank && (
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            Your rank: #{userRank}
          </span>
        )}
      </div>

      <div className="space-y-1.5">
        {board.slice(0, 20).map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 transition ${
              entry.isCurrentUser
                ? "border-accent/40 bg-accent/5 ring-1 ring-accent/20"
                : RANK_STYLES[entry.rank] ?? "border-border bg-surface"
            }`}
          >
            <span className="w-8 shrink-0 text-center text-sm font-bold text-foreground/70">
              {RANK_MEDALS[entry.rank] ?? `#${entry.rank}`}
            </span>
            <div className="min-w-0 flex-1">
              <p className={`truncate text-sm font-medium ${entry.isCurrentUser ? "text-accent" : "text-foreground"}`}>
                {entry.displayId}
              </p>
              <p className="text-[11px] text-foreground/40">Level {entry.level}</p>
            </div>
            <span className="shrink-0 text-sm font-bold tabular-nums text-foreground/70">
              {entry.points.toLocaleString()} XP
            </span>
          </div>
        ))}
      </div>

      {board.length === 0 && (
        <SoftCard className="p-6 text-center text-sm text-foreground/40">
          No leaderboard data yet. Start earning XP to appear on the board!
        </SoftCard>
      )}
    </div>
  );
}
