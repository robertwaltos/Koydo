"use client";

import { useCallback, useEffect, useState } from "react";

type BookmarkButtonProps = {
  itemType: "module" | "lesson" | "game" | "exam";
  itemId: string;
  itemTitle?: string;
  className?: string;
};

export default function BookmarkButton({ itemType, itemId, itemTitle, className }: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/bookmarks")
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const exists = (data.bookmarks ?? []).some(
          (b: { item_type: string; item_id: string }) =>
            b.item_type === itemType && b.item_id === itemId
        );
        setBookmarked(exists);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [itemType, itemId]);

  const toggle = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemType, itemId, itemTitle }),
      });
      const data = await res.json();
      setBookmarked(data.bookmarked);
    } catch {}
    setLoading(false);
  }, [itemType, itemId, itemTitle]);

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={loading}
      className={`ui-focus-ring inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition ${
        bookmarked
          ? "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-400"
          : "border-border bg-surface text-foreground/60 hover:bg-accent/8"
      } ${className ?? ""}`}
      aria-label={bookmarked ? "Remove bookmark" : "Bookmark this"}
      title={bookmarked ? "Remove bookmark" : "Save for later"}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill={bookmarked ? "currentColor" : "none"} aria-hidden="true">
        <path
          d="M3.5 2h7a1 1 0 0 1 1 1v9.5l-4.5-3-4.5 3V3a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      {bookmarked ? "Saved" : "Save"}
    </button>
  );
}
