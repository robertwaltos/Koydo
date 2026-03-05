"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Bookmark = {
  id: string;
  item_type: string;
  item_id: string;
  item_title: string | null;
  created_at: string;
};

const TYPE_LABELS: Record<string, string> = {
  module: "Module",
  lesson: "Lesson",
  game: "Game",
  exam: "Exam",
};

const TYPE_HREFS: Record<string, (id: string) => string> = {
  module: (id) => `/modules/${id}`,
  lesson: (id) => `/explore/learn/${id}`,
  game: (id) => `/games/${id}`,
  exam: (id) => `/testing/${id}`,
};

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookmarks = useCallback(async () => {
    try {
      const res = await fetch("/api/bookmarks");
      const data = await res.json();
      setBookmarks(data.bookmarks ?? []);
    } catch {}
    setLoading(false);
  }, []);

  useEffect(() => { fetchBookmarks(); }, [fetchBookmarks]);

  const removeBookmark = async (b: Bookmark) => {
    await fetch("/api/bookmarks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemType: b.item_type, itemId: b.item_id }),
    });
    setBookmarks((prev) => prev.filter((x) => x.id !== b.id));
  };

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Saved Items</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Saved Items</h1>
      <p className="text-sm text-foreground/60">
        Your bookmarked modules, lessons, games, and exams — all in one place.
      </p>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading...</p>
      ) : bookmarks.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-2xl mb-2">&#128278;</p>
          <p className="text-foreground/40 text-sm">
            No saved items yet. Use the bookmark button on any module or game to save it here.
          </p>
        </SoftCard>
      ) : (
        <div className="space-y-2">
          {bookmarks.map((b) => (
            <SoftCard key={b.id} className="flex items-center gap-3 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-[11px] font-bold text-accent uppercase">
                {b.item_type.charAt(0)}
              </span>
              <div className="min-w-0 flex-1">
                <Link
                  href={TYPE_HREFS[b.item_type]?.(b.item_id) ?? "#"}
                  className="truncate text-sm font-medium text-foreground hover:text-accent"
                >
                  {b.item_title ?? b.item_id}
                </Link>
                <p className="text-[11px] text-foreground/40">{TYPE_LABELS[b.item_type] ?? b.item_type}</p>
              </div>
              <button
                type="button"
                onClick={() => removeBookmark(b)}
                className="shrink-0 text-xs text-foreground/30 hover:text-red-500"
              >
                Remove
              </button>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
