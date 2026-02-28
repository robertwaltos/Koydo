"use client";

import Link from "next/link";
import { GAME_TYPES, type GameType } from "@/lib/games/types";

type GameCard = {
  id: GameType;
  title: string;
  description: string;
  icon: string;
  color: string;
  ageRange: string;
};

const GAME_CATALOG: GameCard[] = [
  {
    id: "letter-catcher",
    title: "Letter Catcher",
    description: "Catch falling letters and match them to their sounds!",
    icon: "🔤",
    color: "from-sky-400 to-blue-500",
    ageRange: "Ages 3-6",
  },
  {
    id: "word-builder",
    title: "Word Builder",
    description: "Build words by dragging letters into place!",
    icon: "📝",
    color: "from-emerald-400 to-teal-500",
    ageRange: "Ages 4-7",
  },
  {
    id: "number-crunch",
    title: "Number Crunch",
    description: "Solve math problems before time runs out!",
    icon: "🧮",
    color: "from-amber-400 to-orange-500",
    ageRange: "Ages 4-8",
  },
  {
    id: "pattern-train",
    title: "Pattern Train",
    description: "Find the missing piece in each pattern!",
    icon: "🚂",
    color: "from-violet-400 to-purple-500",
    ageRange: "Ages 3-7",
  },
  {
    id: "story-sequencer",
    title: "Story Sequencer",
    description: "Put story scenes in the right order!",
    icon: "📖",
    color: "from-rose-400 to-pink-500",
    ageRange: "Ages 4-8",
  },
  {
    id: "memory-match",
    title: "Memory Match",
    description: "Flip cards and find matching pairs!",
    icon: "🃏",
    color: "from-cyan-400 to-sky-500",
    ageRange: "Ages 3-8",
  },
  {
    id: "color-mixer",
    title: "Color Mixer",
    description: "Mix colors together and discover new ones!",
    icon: "🎨",
    color: "from-fuchsia-400 to-pink-500",
    ageRange: "Ages 3-7",
  },
  {
    id: "shape-safari",
    title: "Shape Safari",
    description: "Find shapes hiding in the real world!",
    icon: "🔷",
    color: "from-lime-400 to-green-500",
    ageRange: "Ages 3-7",
  },
];

export default function GamesHubPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-stone-800">
          Game Zone
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          Pick a game and start learning through play!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {GAME_CATALOG.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`flex h-24 items-center justify-center bg-gradient-to-br ${game.color}`}
            >
              <span className="text-4xl transition-transform group-hover:scale-110">
                {game.icon}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-3">
              <h2 className="text-sm font-bold text-stone-800">
                {game.title}
              </h2>
              <p className="mt-1 flex-1 text-xs text-stone-500">
                {game.description}
              </p>
              <span className="mt-2 text-[10px] font-medium text-stone-400">
                {game.ageRange}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
