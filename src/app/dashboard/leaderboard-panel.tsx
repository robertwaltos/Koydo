"use client";

import { useState, useEffect, useCallback } from "react";

type LeaderboardMetric = "xp" | "streak" | "weekly_xp" | "lessons";

interface LeaderboardEntry {
  userId: string;
  displayName: string;
  value: number;
  rank: number;
  isCurrentUser: boolean;
}

interface LeaderboardData {
  metric: LeaderboardMetric;
  entries: LeaderboardEntry[];
  currentUserRank: number | null;
  updatedAt: string;
}

const METRIC_LABELS: Record<LeaderboardMetric, { label: string; unit: string; icon: string }> = {
  xp: { label: "Total XP", unit: "XP", icon: "⚡" },
  streak: { label: "Streak", unit: "days", icon: "🔥" },
  weekly_xp: { label: "Weekly XP", unit: "XP", icon: "📈" },
  lessons: { label: "Lessons", unit: "completed", icon: "📚" },
};

const RANK_STYLES: Record<number, string> = {
  1: "bg-yellow-100 border-yellow-400 text-yellow-800",
  2: "bg-gray-100 border-gray-400 text-gray-700",
  3: "bg-orange-100 border-orange-400 text-orange-800",
};

const RANK_MEDALS: Record<number, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

export default function LeaderboardPanel({
  scopeType = "global",
  scopeId,
}: {
  scopeType?: "global" | "circle" | "class";
  scopeId?: string;
}) {
  const [metric, setMetric] = useState<LeaderboardMetric>("xp");
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLeaderboard = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        metric,
        scope: scopeType,
        limit: "25",
      });
      if (scopeId) params.set("scopeId", scopeId);

      const res = await fetch(`/api/social/leaderboard?${params}`);
      if (!res.ok) throw new Error("Failed to fetch leaderboard");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [metric, scopeType, scopeId]);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const info = METRIC_LABELS[metric];

  return (
    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-amber-900">
          {info.icon} Leaderboard
        </h3>
        {data?.currentUserRank && (
          <span className="rounded-full bg-amber-200 px-3 py-1 text-sm font-semibold text-amber-800">
            Your Rank: #{data.currentUserRank}
          </span>
        )}
      </div>

      {/* Metric Tabs */}
      <div className="mb-4 flex gap-1 rounded-lg bg-amber-100 p-1">
        {(Object.keys(METRIC_LABELS) as LeaderboardMetric[]).map((m) => (
          <button
            key={m}
            onClick={() => setMetric(m)}
            className={`flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
              metric === m
                ? "bg-white text-amber-900 shadow-sm"
                : "text-amber-700 hover:bg-amber-50"
            }`}
          >
            {METRIC_LABELS[m].icon} {METRIC_LABELS[m].label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="py-8 text-center text-amber-600">Loading rankings...</div>
      )}

      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>
      )}

      {data && !loading && (
        <div className="space-y-1.5">
          {data.entries.length === 0 && (
            <div className="py-6 text-center text-amber-600">
              No data yet. Start learning to appear on the leaderboard!
            </div>
          )}

          {data.entries.map((entry) => {
            const rankStyle =
              RANK_STYLES[entry.rank] ??
              (entry.isCurrentUser
                ? "bg-blue-50 border-blue-300 text-blue-800"
                : "bg-white border-gray-200 text-gray-700");

            return (
              <div
                key={entry.userId}
                className={`flex items-center gap-3 rounded-lg border px-3 py-2 transition-all ${rankStyle} ${
                  entry.isCurrentUser ? "ring-2 ring-blue-400 ring-offset-1" : ""
                }`}
              >
                <span className="w-8 text-center text-lg font-bold">
                  {RANK_MEDALS[entry.rank] ?? `#${entry.rank}`}
                </span>

                <span className="flex-1 text-sm font-medium">
                  {entry.displayName}
                  {entry.isCurrentUser && (
                    <span className="ml-1 text-xs text-blue-500">(you)</span>
                  )}
                </span>

                <span className="text-right font-mono text-sm font-semibold">
                  {entry.value.toLocaleString()}{" "}
                  <span className="text-xs font-normal text-gray-500">
                    {info.unit}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      )}

      {data && (
        <div className="mt-3 text-right text-xs text-amber-500">
          Updated {new Date(data.updatedAt).toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}
