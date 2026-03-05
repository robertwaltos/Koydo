"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Highlight = {
  id: string;
  module_id: string;
  lesson_id: string | null;
  selected_text: string;
  annotation: string | null;
  color: string;
  created_at: string;
};

const COLOR_CLASSES: Record<string, string> = {
  yellow: "bg-yellow-100 border-yellow-300 dark:bg-yellow-900/20 dark:border-yellow-700",
  green: "bg-green-100 border-green-300 dark:bg-green-900/20 dark:border-green-700",
  blue: "bg-blue-100 border-blue-300 dark:bg-blue-900/20 dark:border-blue-700",
  pink: "bg-pink-100 border-pink-300 dark:bg-pink-900/20 dark:border-pink-700",
  orange: "bg-orange-100 border-orange-300 dark:bg-orange-900/20 dark:border-orange-700",
};

export default function HighlightsPage() {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterColor, setFilterColor] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/highlights")
      .then((r) => r.json())
      .then((d) => setHighlights(d.highlights ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const deleteHighlight = useCallback(async (id: string) => {
    await fetch(`/api/highlights?id=${id}`, { method: "DELETE" });
    setHighlights((prev) => prev.filter((h) => h.id !== id));
  }, []);

  const filtered = highlights.filter((h) => {
    if (filterColor && h.color !== filterColor) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        h.selected_text.toLowerCase().includes(q) ||
        h.annotation?.toLowerCase().includes(q) ||
        h.module_id.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Group by module
  const grouped = filtered.reduce<Record<string, Highlight[]>>((acc, h) => {
    (acc[h.module_id] ??= []).push(h);
    return acc;
  }, {});

  const colors = ["yellow", "green", "blue", "pink", "orange"];

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">My Highlights</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">My Highlights & Annotations</h1>
      <p className="text-sm text-foreground/60">
        All your highlighted text and notes from lessons, organized by module.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search highlights..."
          className="ui-focus-ring rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm flex-1 min-w-[200px]"
        />
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setFilterColor(null)}
            className={`rounded-full px-3 py-1 text-xs font-medium border ${
              !filterColor ? "border-accent text-accent bg-accent/10" : "border-border text-foreground/50"
            }`}
          >
            All
          </button>
          {colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilterColor(filterColor === c ? null : c)}
              className={`h-7 w-7 rounded-full border-2 transition ${
                filterColor === c ? "ring-2 ring-accent ring-offset-2" : ""
              } ${COLOR_CLASSES[c]}`}
              title={c}
            />
          ))}
        </div>
      </div>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading highlights...</p>
      ) : filtered.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-sm text-foreground/50">
            {highlights.length === 0
              ? "No highlights yet. Select text in any lesson to create your first highlight!"
              : "No highlights match your filter."}
          </p>
        </SoftCard>
      ) : (
        Object.entries(grouped).map(([moduleId, items]) => (
          <div key={moduleId}>
            <h2 className="mb-2 text-sm font-bold text-foreground">
              {moduleId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </h2>
            <div className="space-y-2">
              {items.map((h) => (
                <SoftCard
                  key={h.id}
                  className={`p-4 border-l-4 ${COLOR_CLASSES[h.color] ?? COLOR_CLASSES.yellow}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-foreground leading-relaxed">
                        &ldquo;{h.selected_text}&rdquo;
                      </p>
                      {h.annotation && (
                        <p className="mt-1.5 text-xs text-foreground/60 italic">
                          Note: {h.annotation}
                        </p>
                      )}
                      <p className="mt-1 text-[10px] text-foreground/30">
                        {new Date(h.created_at).toLocaleDateString()}
                        {h.lesson_id && ` \u00B7 ${h.lesson_id}`}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteHighlight(h.id)}
                      className="shrink-0 text-xs text-foreground/30 hover:text-red-500"
                      title="Delete highlight"
                    >
                      \u2715
                    </button>
                  </div>
                </SoftCard>
              ))}
            </div>
          </div>
        ))
      )}
    </main>
  );
}
