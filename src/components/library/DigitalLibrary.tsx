"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type LibraryItem = {
  id: string;
  title: string;
  author: string;
  type: "ebook" | "document" | "article";
  cover_url: string | null;
  subject: string;
  reading_time_min: number;
};

export default function DigitalLibrary() {
  const { allowed, reason } = useFeature("digital_library");
  const [items, setItems] = useState<LibraryItem[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch("/api/library");
        if (res.ok) {
          const data = await res.json();
          setItems(data.items ?? []);
        }
      } catch {}
      setLoading(false);
    }
    void load();
  }, [allowed]);

  if (!allowed) {
    if (reason === "requires_subscription") {
      return (
        <SoftCard className="p-5 text-center">
          <p className="text-sm text-zinc-600">Digital Library requires a premium subscription.</p>
          <a href="/pricing" className="mt-2 inline-block text-sm font-medium text-accent hover:underline">Upgrade</a>
        </SoftCard>
      );
    }
    return null;
  }

  const filtered = filter
    ? items.filter((i) => i.subject === filter || i.type === filter)
    : items;

  const subjects = [...new Set(items.map((i) => i.subject))];

  return (
    <SoftCard className="space-y-4 p-5">
      <h3 className="text-lg font-semibold">Digital Library</h3>

      <div className="flex flex-wrap gap-2">
        <SoftButton variant={!filter ? "accent" : "neutral"} onClick={() => setFilter("")}>All</SoftButton>
        {subjects.map((s) => (
          <SoftButton key={s} variant={filter === s ? "accent" : "neutral"} onClick={() => setFilter(s)}>
            {s}
          </SoftButton>
        ))}
      </div>

      {loading ? (
        <p className="text-sm text-zinc-500">Loading…</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <a
              key={item.id}
              href={`/learn/readings/${item.id}`}
              className="group rounded-xl border border-border p-3 transition-colors hover:border-accent/30"
            >
              {item.cover_url ? (
                <img src={item.cover_url} alt="" className="mb-2 h-32 w-full rounded-lg object-cover" />
              ) : (
                <div className="mb-2 flex h-32 w-full items-center justify-center rounded-lg bg-zinc-100 text-2xl text-zinc-400">
                  📄
                </div>
              )}
              <p className="text-sm font-medium group-hover:text-accent">{item.title}</p>
              <p className="text-xs text-zinc-500">{item.author}</p>
              <p className="mt-1 text-[10px] text-zinc-400">{item.reading_time_min} min &middot; {item.type}</p>
            </a>
          ))}
        </div>
      )}
    </SoftCard>
  );
}
