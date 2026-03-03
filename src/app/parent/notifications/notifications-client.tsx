"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Notification = {
  id: string;
  type: string;
  title: string;
  body: string | null;
  metadata: Record<string, unknown>;
  child_profile_id: string | null;
  is_read: boolean;
  read_at: string | null;
  created_at: string;
};

type Preferences = {
  notify_achievements: boolean;
  notify_milestones: boolean;
  notify_safety_alerts: boolean;
  notify_session_complete: boolean;
  weekly_digest: boolean;
  daily_summary: boolean;
  push_enabled: boolean;
  email_enabled: boolean;
};

const DEFAULT_PREFS: Preferences = {
  notify_achievements: true,
  notify_milestones: true,
  notify_safety_alerts: true,
  notify_session_complete: false,
  weekly_digest: true,
  daily_summary: false,
  push_enabled: true,
  email_enabled: true,
};

const TYPE_ICONS: Record<string, string> = {
  achievement: "🏆",
  milestone: "🎯",
  safety_alert: "🛡️",
  weekly_digest: "📊",
  daily_summary: "📋",
  device_linked: "📱",
  streak_milestone: "🔥",
  session_complete: "✅",
  assessment_ready: "📝",
  low_activity: "⚠️",
  new_content: "🆕",
};

const TYPE_COLORS: Record<string, string> = {
  achievement: "bg-amber-50 border-amber-200",
  milestone: "bg-emerald-50 border-emerald-200",
  safety_alert: "bg-red-50 border-red-200",
  streak_milestone: "bg-orange-50 border-orange-200",
  low_activity: "bg-amber-50 border-amber-200",
  default: "bg-white border-[#e3e8ee]",
};

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = now - then;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en", { month: "short", day: "numeric" });
}

type TabType = "inbox" | "preferences";

export default function NotificationsClient() {
  const [tab, setTab] = useState<TabType>("inbox");
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [prefs, setPrefs] = useState<Preferences>(DEFAULT_PREFS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/parent/notifications", { cache: "no-store" });
      if (res.ok) {
        const data = (await res.json()) as {
          notifications: Notification[];
          unreadCount: number;
          preferences: Preferences | null;
        };
        setNotifications(data.notifications);
        setUnreadCount(data.unreadCount);
        if (data.preferences) setPrefs(data.preferences);
      }
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const markRead = async (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, is_read: true } : n)),
    );
    setUnreadCount((c) => Math.max(0, c - 1));
    await fetch("/api/parent/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "mark_read", notificationId: id }),
    });
  };

  const markAllRead = async () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
    setUnreadCount(0);
    await fetch("/api/parent/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "mark_all_read" }),
    });
  };

  const savePrefs = async () => {
    setSaving(true);
    try {
      await fetch("/api/parent/notifications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update_preferences", preferences: prefs }),
      });
    } catch {
      /* silent */
    } finally {
      setSaving(false);
    }
  };

  const togglePref = (key: keyof Preferences) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#697386]">
            Family Portal
          </p>
          <h1 className="mt-1 text-[22px] font-semibold text-[#1a1f36]">
            Notifications
            {unreadCount > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#635bff] px-1.5 text-[11px] font-bold text-white">
                {unreadCount}
              </span>
            )}
          </h1>
        </div>
        {tab === "inbox" && unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="text-[12px] font-semibold text-[#635bff] hover:underline"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-0.5 rounded-lg border border-[#e3e8ee] bg-white p-0.5 w-fit">
        <button
          onClick={() => setTab("inbox")}
          className={`rounded-md px-4 py-1.5 text-[12px] font-semibold transition ${
            tab === "inbox"
              ? "bg-[#635bff] text-white"
              : "text-[#697386] hover:text-[#1a1f36]"
          }`}
        >
          Inbox
        </button>
        <button
          onClick={() => setTab("preferences")}
          className={`rounded-md px-4 py-1.5 text-[12px] font-semibold transition ${
            tab === "preferences"
              ? "bg-[#635bff] text-white"
              : "text-[#697386] hover:text-[#1a1f36]"
          }`}
        >
          Preferences
        </button>
      </div>

      {/* ── Inbox ────────────────────────────────────────────────────── */}
      {tab === "inbox" && (
        <>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-20 animate-pulse rounded-xl border border-[#f0f0f5] bg-[#f6f9fc]"
                />
              ))}
            </div>
          ) : notifications.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[#c4cdd8] bg-[#f6f9fc] p-10 text-center">
              <span className="text-[40px]">🔔</span>
              <p className="mt-3 text-[14px] font-semibold text-[#3c4257]">
                No notifications yet
              </p>
              <p className="mt-1 text-[12px] text-[#697386]">
                We&#39;ll notify you about your children&#39;s achievements, milestones, and more
              </p>
            </div>
          ) : (
            <AnimatePresence>
              <div className="space-y-2">
                {notifications.map((n) => (
                  <motion.div
                    key={n.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      TYPE_COLORS[n.type] ?? TYPE_COLORS.default
                    } ${!n.is_read ? "shadow-sm" : "opacity-75"}`}
                    onClick={() => !n.is_read && markRead(n.id)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-[18px]">
                        {TYPE_ICONS[n.type] ?? "🔔"}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={`text-[13px] ${
                              n.is_read
                                ? "font-medium text-[#697386]"
                                : "font-semibold text-[#1a1f36]"
                            }`}
                          >
                            {n.title}
                          </h3>
                          <div className="flex shrink-0 items-center gap-2">
                            {!n.is_read && (
                              <span className="h-2 w-2 rounded-full bg-[#635bff]" />
                            )}
                            <span className="text-[10px] text-[#697386]">
                              {timeAgo(n.created_at)}
                            </span>
                          </div>
                        </div>
                        {n.body && (
                          <p className="mt-1 text-[12px] text-[#697386]">{n.body}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          )}
        </>
      )}

      {/* ── Preferences ──────────────────────────────────────────────── */}
      {tab === "preferences" && (
        <div className="max-w-lg space-y-6">
          {/* Notification types */}
          <div className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-[14px] font-semibold text-[#1a1f36]">
              What to notify you about
            </h3>
            <div className="space-y-3">
              {(
                [
                  { key: "notify_achievements", label: "Achievements", desc: "Badges, milestones, and rewards earned", icon: "🏆" },
                  { key: "notify_milestones", label: "Learning Milestones", desc: "Streak records, skill mastery, level ups", icon: "🎯" },
                  { key: "notify_safety_alerts", label: "Safety Alerts", desc: "Content moderation flags and safety concerns", icon: "🛡️" },
                  { key: "notify_session_complete", label: "Session Complete", desc: "When a learning session ends", icon: "✅" },
                  { key: "weekly_digest", label: "Weekly Digest", desc: "Weekly summary of all children's progress", icon: "📊" },
                  { key: "daily_summary", label: "Daily Summary", desc: "Daily activity overview", icon: "📋" },
                ] as const
              ).map(({ key, label, desc, icon }) => (
                <label
                  key={key}
                  className="flex cursor-pointer items-center justify-between rounded-lg border border-[#e3e8ee] p-3 transition hover:border-[#c4cdd8]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[16px]">{icon}</span>
                    <div>
                      <p className="text-[13px] font-medium text-[#1a1f36]">{label}</p>
                      <p className="text-[11px] text-[#697386]">{desc}</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={prefs[key]}
                    onChange={() => togglePref(key)}
                    className="h-4 w-4 rounded border-[#c4cdd8] text-[#635bff] focus:ring-[#635bff]"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Delivery methods */}
          <div className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-[14px] font-semibold text-[#1a1f36]">
              How to notify you
            </h3>
            <div className="space-y-3">
              <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[#e3e8ee] p-3">
                <div className="flex items-center gap-3">
                  <span className="text-[16px]">📱</span>
                  <div>
                    <p className="text-[13px] font-medium text-[#1a1f36]">Push Notifications</p>
                    <p className="text-[11px] text-[#697386]">Instant alerts on your linked devices</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.push_enabled}
                  onChange={() => togglePref("push_enabled")}
                  className="h-4 w-4 rounded border-[#c4cdd8] text-[#635bff] focus:ring-[#635bff]"
                />
              </label>
              <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[#e3e8ee] p-3">
                <div className="flex items-center gap-3">
                  <span className="text-[16px]">✉️</span>
                  <div>
                    <p className="text-[13px] font-medium text-[#1a1f36]">Email Notifications</p>
                    <p className="text-[11px] text-[#697386]">Receive digests and alerts via email</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.email_enabled}
                  onChange={() => togglePref("email_enabled")}
                  className="h-4 w-4 rounded border-[#c4cdd8] text-[#635bff] focus:ring-[#635bff]"
                />
              </label>
            </div>
          </div>

          <button
            onClick={savePrefs}
            disabled={saving}
            className="ui-focus-ring w-full rounded-lg bg-[#635bff] py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-[#5a52f0] disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save Preferences"}
          </button>
        </div>
      )}
    </div>
  );
}
