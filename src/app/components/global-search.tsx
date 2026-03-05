"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

type SearchResult = {
  type: string;
  id: string;
  title: string;
  description?: string;
  href: string;
};

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Keyboard shortcut: Ctrl/Cmd + K + custom event from nav
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    function handlePaletteOpen() {
      setOpen(true);
    }
    window.addEventListener("keydown", handleKey);
    window.addEventListener("koydo:command-palette-open", handlePaletteOpen);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("koydo:command-palette-open", handlePaletteOpen);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const search = useCallback((q: string) => {
    clearTimeout(debounceRef.current);
    if (q.length < 2) { setResults([]); return; }
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        setResults(data.results ?? []);
      } catch { setResults([]); }
      setLoading(false);
    }, 250);
  }, []);

  if (!open) return null;

  return (
    <>
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full max-w-lg rounded-2xl border border-border/30 bg-surface shadow-2xl">
            <div className="flex items-center gap-3 border-b border-border/20 px-4 py-3">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="shrink-0 text-foreground/40" aria-hidden="true">
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9.5 9.5 13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search modules, games, exams..."
                value={query}
                onChange={(e) => { setQuery(e.target.value); search(e.target.value); }}
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/40"
              />
              {loading && (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded px-1.5 py-0.5 text-[10px] text-foreground/40 hover:bg-accent/10"
              >
                ESC
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && query.length >= 2 && !loading && (
                <p className="px-3 py-6 text-center text-sm text-foreground/40">
                  No results found
                </p>
              )}
              {results.map((r) => (
                <Link
                  key={`${r.type}-${r.id}`}
                  href={r.href}
                  onClick={() => { setOpen(false); setQuery(""); setResults([]); }}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition hover:bg-accent/8"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/10 text-[11px] font-bold text-accent uppercase">
                    {r.type.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{r.title}</p>
                    {r.description && (
                      <p className="truncate text-[11px] text-foreground/50">{r.description}</p>
                    )}
                  </div>
                </Link>
              ))}
              {query.length < 2 && (
                <p className="px-3 py-6 text-center text-sm text-foreground/40">
                  Type to search across 821+ modules...
                </p>
              )}
            </div>
          </div>
        </div>
    </>
  );
}
