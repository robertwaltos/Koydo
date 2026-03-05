"use client";

import { useEffect, useMemo, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";

type Reading = {
  id: string;
  title: string;
  content: string;
  author: string | null;
  estimated_minutes: number;
  module_id: string | null;
};

/** Strip all HTML tags for safe rendering as plain text paragraphs */
function sanitizeContent(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export default function ReadingViewer({ readingId }: { readingId: string }) {
  const { allowed, isLoading: featureLoading } = useFeature("readings_viewer");
  const [reading, setReading] = useState<Reading | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch(`/api/readings?id=${encodeURIComponent(readingId)}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setReading(data.reading);
      } catch {
        setError("Reading not found");
      } finally {
        setLoading(false);
      }
    }
    void load();
  }, [readingId, allowed]);

  const paragraphs = useMemo(() => {
    if (!reading?.content) return [];
    const clean = sanitizeContent(reading.content);
    return clean.split(/\n\n+/).filter(Boolean);
  }, [reading?.content]);

  if (featureLoading || loading) {
    return <div className="animate-pulse rounded-xl bg-surface-muted p-8 text-center text-sm text-zinc-500">Loading…</div>;
  }

  if (!allowed) return null;
  if (error || !reading) {
    return <p className="text-center text-sm text-zinc-500">{error ?? "Reading not found"}</p>;
  }

  return (
    <SoftCard as="article" className="mx-auto max-w-3xl p-8">
      <header className="mb-6 border-b border-border pb-4">
        <h1 className="text-2xl font-semibold tracking-tight">{reading.title}</h1>
        <div className="mt-2 flex gap-4 text-xs text-zinc-500">
          {reading.author && <span>By {reading.author}</span>}
          <span>{reading.estimated_minutes} min read</span>
        </div>
      </header>
      <div className="space-y-4 text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </SoftCard>
  );
}
