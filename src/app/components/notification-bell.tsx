"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

type Notification = {
  id: string;
  type: string;
  title: string;
  body: string | null;
  href: string | null;
  read: boolean;
  created_at: string;
};

const TYPE_ICONS: Record<string, string> = {
  achievement: "🏆",
  streak: "🔥",
  streak_at_risk: "⚠️",
  lesson_reminder: "📚",
  new_content: "✨",
  parent_report: "📋",
  support: "🛟",
  info: "💬",
};

function timeAgo(dateStr: string): string {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function NotificationBell({ isHomePage }: { isHomePage: boolean }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const fetchNotifications = useCallback(async () => {
    try {
      const res = await fetch("/api/notifications");
      if (!res.ok) return;
      const data = await res.json();
      setNotifications(data.notifications ?? []);
      setUnreadCount(data.unreadCount ?? 0);
    } catch {
      // Silently fail — notification fetch is non-critical
    }
  }, []);

  // Fetch on mount and every 60 seconds
  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 60_000);
    return () => clearInterval(interval);
  }, [fetchNotifications]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const markAllRead = async () => {
    setLoading(true);
    try {
      await fetch("/api/notifications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markAllRead: true }),
      });
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
      setUnreadCount(0);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`ui-soft-button ui-focus-ring relative inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border text-sm shadow-sm transition ${
          isHomePage
            ? "border-white/12 bg-white/8 text-slate-200 hover:bg-white/15"
            : "border-zinc-200/80 bg-white/80 text-zinc-700 hover:bg-white border-border/50 dark:bg-surface/68 dark:text-foreground dark:hover:bg-surface/88"
        }`}
        aria-label={`Notifications${unreadCount > 0 ? ` (${unreadCount} unread)` : ""}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span aria-hidden="true" className="text-base">🔔</span>
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-xl dark:bg-surface sm:w-96">
          <div className="flex items-center justify-between border-b border-border/40 px-4 py-3">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-foreground">Notifications</h3>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllRead}
                disabled={loading}
                className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-zinc-500">
                No notifications yet.
              </div>
            ) : (
              notifications.map((n) => {
                const icon = TYPE_ICONS[n.type] ?? TYPE_ICONS.info;
                const content = (
                  <div
                    key={n.id}
                    className={`flex gap-3 border-b border-border/20 px-4 py-3 transition hover:bg-zinc-50 dark:hover:bg-surface-muted/50 ${
                      !n.read ? "bg-blue-50/50 dark:bg-blue-950/20" : ""
                    }`}
                  >
                    <span className="mt-0.5 text-lg" aria-hidden="true">{icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm ${!n.read ? "font-semibold" : "font-medium"} text-zinc-900 dark:text-foreground`}>
                        {n.title}
                      </p>
                      {n.body && (
                        <p className="mt-0.5 text-xs text-zinc-600 dark:text-foreground/70 line-clamp-2">
                          {n.body}
                        </p>
                      )}
                      <p className="mt-1 text-[11px] text-zinc-400">{timeAgo(n.created_at)}</p>
                    </div>
                    {!n.read && (
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    )}
                  </div>
                );

                return n.href ? (
                  <Link key={n.id} href={n.href} onClick={() => setIsOpen(false)}>
                    {content}
                  </Link>
                ) : (
                  <div key={n.id}>{content}</div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
