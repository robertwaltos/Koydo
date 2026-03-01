"use client";

import Link from "next/link";
import { type GameType } from "@/lib/games/types";

type GameCard = {
  id: GameType;
  title: string;
  description: string;
  icon: string;
  color: string;
  ageRange: string;
  category: "literacy" | "math" | "logic" | "creative";
};

const GAME_CATALOG: GameCard[] = [
  {
    id: "letter-catcher",
    title: "Letter Catcher",
    description: "Catch falling letters and match them to their sounds!",
    icon: "🔤",
    color: "from-sky-400 to-blue-500",
    ageRange: "Ages 3–6",
    category: "literacy",
  },
  {
    id: "word-builder",
    title: "Word Builder",
    description: "Build words by dragging letters into place!",
    icon: "📝",
    color: "from-emerald-400 to-teal-500",
    ageRange: "Ages 4–7",
    category: "literacy",
  },
  {
    id: "number-crunch",
    title: "Number Crunch",
    description: "Solve math problems before time runs out!",
    icon: "🧮",
    color: "from-amber-400 to-orange-500",
    ageRange: "Ages 4–8",
    category: "math",
  },
  {
    id: "pattern-train",
    title: "Pattern Train",
    description: "Find the missing piece in each pattern!",
    icon: "🚂",
    color: "from-violet-400 to-purple-500",
    ageRange: "Ages 3–7",
    category: "logic",
  },
  {
    id: "story-sequencer",
    title: "Story Sequencer",
    description: "Put story scenes in the right order!",
    icon: "📖",
    color: "from-rose-400 to-pink-500",
    ageRange: "Ages 4–8",
    category: "literacy",
  },
  {
    id: "memory-match",
    title: "Memory Match",
    description: "Flip cards and find matching pairs!",
    icon: "🃏",
    color: "from-cyan-400 to-sky-500",
    ageRange: "Ages 3–8",
    category: "logic",
  },
  {
    id: "color-mixer",
    title: "Color Mixer",
    description: "Mix colors together and discover new ones!",
    icon: "🎨",
    color: "from-fuchsia-400 to-pink-500",
    ageRange: "Ages 3–7",
    category: "creative",
  },
  {
    id: "shape-safari",
    title: "Shape Safari",
    description: "Find shapes hiding in the real world!",
    icon: "🔷",
    color: "from-lime-400 to-green-500",
    ageRange: "Ages 3–7",
    category: "math",
  },
];

const CATEGORY_META: Record<
  string,
  { label: string; icon: string }
> = {
  all: { label: "All Games", icon: "🎮" },
  literacy: { label: "Literacy", icon: "📚" },
  math: { label: "Math", icon: "🔢" },
  logic: { label: "Logic", icon: "🧩" },
  creative: { label: "Creative", icon: "🎨" },
};

import { useState } from "react";

export default function GamesHubPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? GAME_CATALOG
      : GAME_CATALOG.filter((g) => g.category === activeCategory);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-black tracking-tight text-stone-800">
          Game Zone
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Pick a game and start learning through play!
        </p>
      </header>

      {/* Category tabs */}
      <div
        className="mb-6 flex items-center gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {Object.entries(CATEGORY_META).map(([key, meta]) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveCategory(key)}
            className={`ui-focus-ring flex-shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === key
                ? "border-stone-800 bg-stone-800 text-white shadow-sm"
                : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
            }`}
          >
            <span className="mr-1">{meta.icon}</span>
            {meta.label}
            {key !== "all" ? (
              <span className="ml-1.5 text-xs opacity-70">
                {GAME_CATALOG.filter((g) => g.category === key).length}
              </span>
            ) : (
              <span className="ml-1.5 text-xs opacity-70">
                {GAME_CATALOG.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Game grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div
              className={`flex h-28 items-center justify-center bg-gradient-to-br ${game.color}`}
            >
              <span className="text-5xl transition-transform duration-200 group-hover:scale-110">
                {game.icon}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-3.5">
              <h2 className="text-sm font-bold text-stone-800">
                {game.title}
              </h2>
              <p className="mt-1 flex-1 text-xs leading-relaxed text-stone-500">
                {game.description}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-stone-400">
                  {game.ageRange}
                </span>
                <span className="rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[10px] font-semibold capitalize text-stone-500">
                  {game.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
