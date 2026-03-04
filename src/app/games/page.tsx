"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  FULL_CATALOG,
  getAllCategories,
  TOTAL_GAMES,
  type GameDefinition,
  type EduCategory,
} from "@/lib/games/engine";

/* ── Category display meta ──────────────────────────────────────────── */
const CATEGORY_LABELS: Record<EduCategory | "all", { label: string; icon: string }> = {
  all: { label: "All Games", icon: "🎮" },
  math: { label: "Math", icon: "🔢" },
  literacy: { label: "Literacy", icon: "📚" },
  science: { label: "Science", icon: "🔬" },
  geography: { label: "Geography", icon: "🌍" },
  chemistry: { label: "Chemistry", icon: "⚗️" },
  physics: { label: "Physics", icon: "⚡" },
  history: { label: "History", icon: "📜" },
  coding: { label: "Coding", icon: "💻" },
  music: { label: "Music", icon: "🎵" },
  logic: { label: "Logic", icon: "🧩" },
  language: { label: "Language", icon: "🌐" },
  creative: { label: "Creative", icon: "🎨" },
};

const PAGE_SIZE = 24;

export default function GamesHubPage() {
  const [activeCategory, setActiveCategory] = useState<EduCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const categories = useMemo(() => {
    const cats = getAllCategories();
    return ["all" as const, ...cats];
  }, []);

  const filtered = useMemo(() => {
    let games: GameDefinition[] = FULL_CATALOG;
    if (activeCategory !== "all") {
      games = games.filter((g) => g.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      games = games.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.id.toLowerCase().includes(q),
      );
    }
    return games;
  }, [activeCategory, search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = useMemo(
    () => filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE),
    [filtered, page],
  );

  const handleCategoryChange = useCallback((cat: EduCategory | "all") => {
    setActiveCategory(cat);
    setPage(0);
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-black tracking-tight text-stone-800">
          Game Zone
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          {TOTAL_GAMES} immersive educational games — pick one and start learning through play!
        </p>
      </header>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
          placeholder="Search games by name or topic…"
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-700 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-stone-400 focus:ring-1 focus:ring-stone-300"
        />
      </div>

      {/* Category tabs */}
      <div
        className="mb-6 flex items-center gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {categories.map((key) => {
          const meta = CATEGORY_LABELS[key] ?? { label: key, icon: "📦" };
          const count =
            key === "all"
              ? FULL_CATALOG.length
              : FULL_CATALOG.filter((g) => g.category === key).length;
          return (
            <button
              key={key}
              type="button"
              onClick={() => handleCategoryChange(key)}
              className={`ui-focus-ring flex-shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === key
                  ? "border-stone-800 bg-stone-800 text-white shadow-sm"
                  : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
              }`}
            >
              <span className="mr-1">{meta.icon}</span>
              {meta.label}
              <span className="ml-1.5 text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Results info */}
      <p className="mb-4 text-xs font-medium text-stone-400">
        Showing {paged.length} of {filtered.length} games
        {search.trim() ? ` matching "${search}"` : ""}
      </p>

      {/* Game grid */}
      {paged.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <span className="text-5xl">🔍</span>
          <p className="mt-4 text-sm font-semibold text-stone-500">
            No games found. Try a different search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {paged.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                className={`flex h-24 items-center justify-center bg-gradient-to-br ${game.gradient}`}
              >
                <span className="text-4xl transition-transform duration-200 group-hover:scale-110">
                  {game.icon}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-3">
                <h2 className="text-xs font-bold text-stone-800 leading-tight">
                  {game.title}
                </h2>
                <p className="mt-1 flex-1 text-[10px] leading-relaxed text-stone-500 line-clamp-2">
                  {game.description}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-stone-400">
                    Ages {game.ages.min}–{game.ages.max}
                  </span>
                  <span className="rounded-full border border-stone-200 bg-stone-50 px-1.5 py-0.5 text-[9px] font-semibold capitalize text-stone-500">
                    {game.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-40"
          >
            ← Prev
          </button>
          <span className="text-xs font-medium text-stone-500">
            Page {page + 1} of {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages - 1}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      )}
    </main>
  );
}
