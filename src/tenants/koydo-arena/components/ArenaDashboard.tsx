"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ArenaButton from "./ArenaButton";

// ── Types ─────────────────────────────────────────────────────────────────────

type GameCategory =
  | "All"
  | "Math"
  | "Science"
  | "Language"
  | "Strategy"
  | "Creative"
  | "Speed"
  | "Music"
  | "Finance";

type FeaturedGame = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  glow: string;
  icon: string;
};

// ── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES: { id: GameCategory; label: string; icon: string }[] = [
  { id: "All", label: "All Games", icon: "grid" },
  { id: "Math", label: "Math", icon: "calculator" },
  { id: "Science", label: "Science", icon: "flask" },
  { id: "Language", label: "Language", icon: "book" },
  { id: "Strategy", label: "Strategy", icon: "puzzle" },
  { id: "Creative", label: "Creative", icon: "palette" },
  { id: "Speed", label: "Speed", icon: "zap" },
  { id: "Music", label: "Music", icon: "music" },
  { id: "Finance", label: "Finance", icon: "coin" },
];

const FEATURED_GAMES: FeaturedGame[] = [
  {
    id: "element-match",
    title: "Element Match",
    subtitle: "Match periodic table elements",
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    icon: "atom",
  },
  {
    id: "code-blocks",
    title: "Code Blocks",
    subtitle: "Build programs with visual blocks",
    color: "from-green-500 to-emerald-600",
    glow: "shadow-green-500/30",
    icon: "code",
  },
  {
    id: "capital-quest",
    title: "Capital Quest",
    subtitle: "World capitals geography challenge",
    color: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/30",
    icon: "globe",
  },
  {
    id: "beat-lab",
    title: "Beat Lab",
    subtitle: "Create rhythms and learn music",
    color: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/30",
    icon: "headphones",
  },
  {
    id: "stock-sprint",
    title: "Stock Sprint",
    subtitle: "Trading simulation game",
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/30",
    icon: "trending",
  },
  {
    id: "debug-detective",
    title: "Debug Detective",
    subtitle: "Find and fix code bugs",
    color: "from-red-500 to-rose-600",
    glow: "shadow-red-500/30",
    icon: "search",
  },
];

const CATEGORY_ICONS: Record<string, JSX.Element> = {
  grid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  calculator: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8M8 14h2M14 14h2M8 18h2M14 18h2" />
      <rect x="8" y="6" width="8" height="4" rx="1" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <path d="M9 3h6M10 3v7.5L4 20h16l-6-9.5V3" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" />
    </svg>
  ),
  puzzle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 01-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 10-3.214 3.214c.446.166.855.497.925.968a.979.979 0 01-.276.837l-1.61 1.61a2.404 2.404 0 01-1.705.707 2.402 2.402 0 01-1.704-.706l-1.568-1.568a1.026 1.026 0 00-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 11-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 00-.289-.877l-1.568-1.568A2.402 2.402 0 011.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 103.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0112 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 113.237 3.237c-.464.18-.894.527-.967 1.02z" />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  coin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M9 9h6M9 15h6" />
    </svg>
  ),
};

const GAME_ICONS: Record<string, JSX.Element> = {
  atom: (
    <svg viewBox="0 0 48 48" className="h-10 w-10">
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <ellipse cx="24" cy="24" rx="18" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="24" cy="24" rx="18" ry="8" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="18" ry="8" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(120 24 24)" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-10 w-10">
      <polyline points="16 12 6 24 16 36" />
      <polyline points="32 12 42 24 32 36" />
      <line x1="28" y1="8" x2="20" y2="40" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10">
      <circle cx="24" cy="24" r="20" />
      <ellipse cx="24" cy="24" rx="10" ry="20" />
      <path d="M4 24h40M6 14h36M6 34h36" />
    </svg>
  ),
  headphones: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-10 w-10">
      <path d="M6 28v-4a18 18 0 0136 0v4" />
      <rect x="4" y="28" width="8" height="12" rx="2" />
      <rect x="36" y="28" width="8" height="12" rx="2" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-10 w-10">
      <polyline points="44 8 26 26 18 18 4 32" />
      <polyline points="34 8 44 8 44 18" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-10 w-10">
      <circle cx="20" cy="20" r="14" />
      <line x1="30" y1="30" x2="42" y2="42" />
      <path d="M16 20h8M20 16v8" strokeWidth="2" />
    </svg>
  ),
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function ArenaDashboard() {
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#0f0f23] text-[#f1f5f9]">
      {/* Animated background grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="bg-gradient-to-r from-[#7c3aed] via-[#ec4899] to-[#06b6d4] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">
              Koydo Arena
            </h1>
            <p className="mt-1 text-sm text-[#94a3b8]">231 educational games. Play. Learn. Compete.</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Stats pills */}
            <div className="flex items-center gap-1.5 rounded-full bg-[#1a1a3e] px-3 py-1.5 text-xs font-bold">
              <span className="text-[#f59e0b]">XP</span>
              <span>1,240</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#1a1a3e] px-3 py-1.5 text-xs font-bold">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[#ec4899]">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span>5</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#1a1a3e] px-3 py-1.5 text-xs font-bold">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[#22c55e]">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" />
              </svg>
              <span>42 games</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search 231 games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-[#334155] bg-[#1a1a3e] py-3 pl-11 pr-4 text-sm text-[#f1f5f9] placeholder-[#64748b] outline-none transition-all focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20"
          />
        </div>

        {/* Category filters */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={[
                "flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all",
                selectedCategory === cat.id
                  ? "bg-[#7c3aed] text-white shadow-lg shadow-purple-500/25"
                  : "bg-[#1a1a3e] text-[#94a3b8] hover:bg-[#252550] hover:text-white",
              ].join(" ")}
            >
              {CATEGORY_ICONS[cat.icon]}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Games */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-bold text-[#f1f5f9]">Featured Games</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_GAMES.map((game, i) => (
              <Link key={game.id} href={`/games/${game.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${game.color} p-6 shadow-xl ${game.glow} cursor-pointer transition-shadow hover:shadow-2xl`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                      }}
                    />
                  </div>

                  <div className="relative flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold text-white">{game.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{game.subtitle}</p>
                    </div>
                    <div className="text-white/90">
                      {GAME_ICONS[game.icon]}
                    </div>
                  </div>

                  <div className="relative mt-6 flex items-center justify-between">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      Play Now
                    </span>
                    <div className="flex -space-x-1">
                      {[...Array(3)].map((_, j) => (
                        <div
                          key={j}
                          className="h-6 w-6 rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-sm"
                        />
                      ))}
                      <span className="ml-1 text-xs text-white/80">+{42 + i * 7} playing</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Daily Challenge */}
        <section className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl border border-[#334155] bg-gradient-to-r from-[#1a1a3e] to-[#252550] p-6"
          >
            <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-[#f59e0b]/10 to-transparent" />
            <div className="relative flex items-center justify-between">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded bg-[#f59e0b]/20 px-2 py-0.5 text-xs font-bold text-[#f59e0b]">
                    DAILY CHALLENGE
                  </span>
                  <span className="text-xs text-[#64748b]">Resets in 14:32:07</span>
                </div>
                <h3 className="text-xl font-bold text-white">Speed Math Blitz</h3>
                <p className="mt-1 text-sm text-[#94a3b8]">
                  Solve 20 math problems as fast as you can. Beat the daily leaderboard!
                </p>
              </div>
              <ArenaButton tone="neon" size="lg">
                Challenge
              </ArenaButton>
            </div>
          </motion.div>
        </section>

        {/* Leaderboard Preview */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-bold text-[#f1f5f9]">Leaderboard</h2>
          <div className="overflow-hidden rounded-2xl border border-[#334155] bg-[#1a1a3e]">
            {[
              { rank: 1, name: "MathWizard42", xp: 12450, badge: "gold" },
              { rank: 2, name: "ScienceNerd99", xp: 11200, badge: "silver" },
              { rank: 3, name: "CodeMaster_X", xp: 10800, badge: "bronze" },
              { rank: 4, name: "BrainStorm_7", xp: 9650, badge: "" },
              { rank: 5, name: "QuizChamp!", xp: 9100, badge: "" },
            ].map((entry) => (
              <div
                key={entry.rank}
                className="flex items-center justify-between border-b border-[#334155] px-5 py-3 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={[
                      "flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold",
                      entry.badge === "gold"
                        ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-black"
                        : entry.badge === "silver"
                          ? "bg-gradient-to-br from-gray-300 to-gray-400 text-black"
                          : entry.badge === "bronze"
                            ? "bg-gradient-to-br from-orange-400 to-orange-600 text-white"
                            : "bg-[#252550] text-[#94a3b8]",
                    ].join(" ")}
                  >
                    {entry.rank}
                  </span>
                  <span className="font-semibold">{entry.name}</span>
                </div>
                <span className="text-sm font-bold text-[#f59e0b]">{entry.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
        </section>

        {/* Browse all games link */}
        <div className="flex justify-center">
          <Link href="/games">
            <ArenaButton tone="outline" size="lg">
              Browse All 231 Games
            </ArenaButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
