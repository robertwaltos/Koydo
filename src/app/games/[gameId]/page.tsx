"use client";

import { useParams, useRouter } from "next/navigation";
import { isGameType, type GameType } from "@/lib/games/types";

const GAME_META: Record<GameType, { title: string; icon: string }> = {
  "letter-catcher": { title: "Letter Catcher", icon: "🔤" },
  "word-builder": { title: "Word Builder", icon: "📝" },
  "number-crunch": { title: "Number Crunch", icon: "🧮" },
  "pattern-train": { title: "Pattern Train", icon: "🚂" },
  "story-sequencer": { title: "Story Sequencer", icon: "📖" },
  "memory-match": { title: "Memory Match", icon: "🃏" },
  "color-mixer": { title: "Color Mixer", icon: "🎨" },
  "shape-safari": { title: "Shape Safari", icon: "🔷" },
};

export default function GamePlayerPage() {
  const params = useParams<{ gameId: string }>();
  const router = useRouter();
  const gameId = params.gameId;

  if (!isGameType(gameId)) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <p className="text-4xl">🤔</p>
        <h1 className="mt-4 text-xl font-bold text-stone-800">
          Game Not Found
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          We couldn&apos;t find a game called &quot;{gameId}&quot;.
        </p>
        <button
          type="button"
          onClick={() => router.push("/games")}
          className="mt-6 rounded-xl bg-sky-500 px-5 py-2 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          Back to Games
        </button>
      </main>
    );
  }

  const meta = GAME_META[gameId];

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <button
        type="button"
        onClick={() => router.push("/games")}
        className="mb-6 text-xs font-medium text-stone-400 transition-colors hover:text-stone-600"
      >
        &larr; Back to Games
      </button>

      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl">
        <div className="border-b border-stone-100 bg-stone-50 p-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{meta.icon}</span>
            <h1 className="text-lg font-bold text-stone-800">{meta.title}</h1>
          </div>
        </div>

        {/* Game component will be rendered here by Opus/Gemini */}
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
          <p className="text-5xl">{meta.icon}</p>
          <h2 className="mt-4 text-lg font-bold text-stone-700">
            {meta.title}
          </h2>
          <p className="mt-2 text-center text-sm text-stone-400">
            This game is being built! Check back soon.
          </p>
          <div className="mt-6 flex gap-3">
            {(["easy", "medium", "hard"] as const).map((diff) => (
              <button
                key={diff}
                type="button"
                disabled
                className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-medium text-stone-400 opacity-50"
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
