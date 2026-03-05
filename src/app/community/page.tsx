"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";

type FeedEvent = {
  id: string;
  event_type: "badge_earned" | "quest_completed" | "level_up" | "streak_milestone";
  user_display_name: string;
  metadata: Record<string, unknown>;
  created_at: string;
};

const EVENT_ICONS: Record<string, string> = {
  badge_earned: "medal",
  quest_completed: "flag",
  level_up: "star",
  streak_milestone: "fire",
};

function getEventText(event: FeedEvent): string {
  switch (event.event_type) {
    case "badge_earned":
      return `earned the "${event.metadata.badgeLabel ?? event.metadata.badgeId}" badge`;
    case "quest_completed":
      return `completed a quest (+${event.metadata.xpReward ?? 0} XP)`;
    case "level_up":
      return `reached Level ${event.metadata.newLevel ?? "?"}`;
    case "streak_milestone":
      return `hit a ${event.metadata.days ?? "?"}-day streak`;
    default:
      return "did something awesome";
  }
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export default function CommunityPage() {
  const { allowed, isLoading } = useFeature("community_activity_feed");
  const [events, setEvents] = useState<FeedEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch("/api/community");
        if (res.ok) {
          const data = await res.json();
          setEvents(data.events ?? []);
        }
      } catch {}
      setLoading(false);
    }
    void load();
  }, [allowed]);

  if (isLoading || loading) return null;
  if (!allowed) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-zinc-500">Community feed is not available for your account.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="mb-6 text-2xl font-bold">Community Activity</h1>

      {events.length === 0 ? (
        <p className="text-sm text-zinc-500">No recent activity yet.</p>
      ) : (
        <div className="space-y-3">
          {events.map((event) => (
            <SoftCard key={event.id} className="flex items-start gap-3 p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm">
                {EVENT_ICONS[event.event_type] === "medal" ? "🏅" :
                 EVENT_ICONS[event.event_type] === "flag" ? "🚩" :
                 EVENT_ICONS[event.event_type] === "star" ? "⭐" : "🔥"}
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">{event.user_display_name}</span>
                  {" "}{getEventText(event)}
                </p>
                <p className="mt-0.5 text-[10px] text-zinc-500">{timeAgo(event.created_at)}</p>
              </div>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
