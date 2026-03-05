"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type GlossaryEntry = {
  term: string;
  definition: string;
  subject: string;
  moduleId: string;
};

export default function GlossaryPage() {
  const [entries, setEntries] = useState<GlossaryEntry[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [letters, setLetters] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchGlossary = useCallback(async () => {
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (activeLetter) params.set("letter", activeLetter);
    if (activeSubject) params.set("subject", activeSubject);

    try {
      const res = await fetch(`/api/glossary?${params}`);
      const data = await res.json();
      setEntries(data.entries ?? []);
      setTotal(data.total ?? 0);
      if (data.subjects) setSubjects(data.subjects);
      if (data.letters) setLetters(data.letters);
    } catch {}
    setLoading(false);
  }, [search, activeLetter, activeSubject]);

  useEffect(() => { fetchGlossary(); }, [fetchGlossary]);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Glossary</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Glossary &amp; Key Terms</h1>
      <p className="text-sm text-foreground/60">
        Browse key concepts and terms across all {total}+ entries. Click any term to explore its module.
      </p>

      {/* Search */}
      <input
        type="search"
        placeholder="Search terms..."
        value={search}
        onChange={(e) => { setSearch(e.target.value); setActiveLetter(null); }}
        className="ui-focus-ring w-full rounded-2xl border border-border bg-surface-muted py-3 px-4 text-sm"
      />

      {/* Alphabet nav */}
      <div className="flex flex-wrap gap-1">
        <button
          type="button"
          onClick={() => setActiveLetter(null)}
          className={`rounded-md px-2 py-1 text-xs font-semibold transition ${!activeLetter ? "bg-accent text-white" : "text-foreground/50 hover:bg-accent/10"}`}
        >
          All
        </button>
        {letters.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => { setActiveLetter(l); setSearch(""); }}
            className={`rounded-md px-2 py-1 text-xs font-semibold transition ${activeLetter === l ? "bg-accent text-white" : "text-foreground/50 hover:bg-accent/10"}`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Subject filter */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveSubject(null)}
          className={`ui-focus-ring rounded-full border px-3 py-1 text-xs font-semibold transition ${!activeSubject ? "border-accent bg-accent/10 text-accent" : "border-border text-foreground/50"}`}
        >
          All Subjects
        </button>
        {subjects.slice(0, 12).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setActiveSubject(s === activeSubject ? null : s)}
            className={`ui-focus-ring rounded-full border px-3 py-1 text-xs font-semibold transition ${activeSubject === s ? "border-accent bg-accent/10 text-accent" : "border-border text-foreground/50"}`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Entries */}
      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading glossary...</p>
      ) : entries.length === 0 ? (
        <SoftCard className="p-6 text-center text-sm text-foreground/40">
          No terms found. Try a different search or filter.
        </SoftCard>
      ) : (
        <div className="space-y-2">
          {entries.map((entry) => (
            <SoftCard key={`${entry.term}-${entry.moduleId}`} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-foreground">{entry.term}</h3>
                  <p className="mt-0.5 text-sm text-foreground/60">{entry.definition}</p>
                  <div className="mt-1.5 flex items-center gap-2 text-[11px] text-foreground/40">
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-accent font-medium">
                      {entry.subject}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/modules/${entry.moduleId}`}
                  className="shrink-0 rounded-lg border border-border px-2.5 py-1 text-[11px] font-medium text-accent hover:bg-accent/8"
                >
                  View Module
                </Link>
              </div>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
