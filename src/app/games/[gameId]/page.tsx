"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useCallback, useMemo } from "react";
import { getGameById, resolveEngine } from "@/lib/games/engine";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine";

const DIFF_LABELS: { key: Difficulty; icon: string }[] = [
  { key: "easy", icon: "🟢" },
  { key: "medium", icon: "🟡" },
  { key: "hard", icon: "🔴" },
];

export default function GamePlayerPage() {
  const params = useParams<{ gameId: string }>();
  const router = useRouter();
  const gameId = params.gameId;

  const game = useMemo(() => getGameById(gameId), [gameId]);
  const Engine = useMemo(
    () => (game ? resolveEngine(game.mechanic) : undefined),
    [game],
  );

  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [level, setLevel] = useState(1);
  const [result, setResult] = useState<GameRoundResult | null>(null);
  const [playing, setPlaying] = useState(false);

  const handleComplete = useCallback((r: GameRoundResult) => {
    setResult(r);
    setPlaying(false);
  }, []);

  const handleExit = useCallback(() => {
    setPlaying(false);
    setResult(null);
  }, []);

  /* ── Not found ─────────────────────────────────────────────────────── */
  if (!game) {
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

  /* ── Result screen ─────────────────────────────────────────────────── */
  if (result && !playing) {
    const starDisplay = "⭐".repeat(result.stars) + "☆".repeat(3 - result.stars);
    return (
      <main className="mx-auto max-w-lg px-4 py-10">
        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl">
          <div
            className={`flex flex-col items-center justify-center bg-gradient-to-br ${game.gradient} px-6 py-10 text-white`}
          >
            <span className="text-6xl">{game.icon}</span>
            <h2 className="mt-3 text-2xl font-black">{game.title}</h2>
            <p className="mt-1 text-3xl">{starDisplay}</p>
          </div>
          <div className="p-6 text-center">
            <p className="text-lg font-bold text-stone-700">
              Score: {result.score} / {result.maxScore}
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Time: {(result.timeMs / 1000).toFixed(1)}s &middot;{" "}
              {difficulty.toUpperCase()}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setResult(null);
                  setPlaying(true);
                }}
                className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
              >
                Play Again
              </button>
              <button
                type="button"
                onClick={() => router.push("/games")}
                className="rounded-xl border border-stone-200 px-5 py-2.5 text-sm font-bold text-stone-600 transition-transform hover:scale-105 active:scale-95"
              >
                Back to Games
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* ── Playing state ─────────────────────────────────────────────────── */
  if (playing && Engine) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-4">
        <Engine
          game={game}
          difficulty={difficulty}
          level={level}
          onComplete={handleComplete}
          onExit={handleExit}
        />
      </main>
    );
  }

  /* ── Lobby (default) ───────────────────────────────────────────────── */
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
        {/* Header banner */}
        <div
          className={`flex flex-col items-center justify-center bg-gradient-to-br ${game.gradient} px-6 py-10 text-white`}
        >
          <span className="text-6xl">{game.icon}</span>
          <h1 className="mt-3 text-2xl font-black">{game.title}</h1>
          <p className="mt-1 text-sm opacity-90">{game.description}</p>
          <span className="mt-2 rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold">
            Ages {game.ages.min}–{game.ages.max} · {game.category}
          </span>
        </div>

        {/* Controls */}
        <div className="p-6">
          {/* Difficulty selector */}
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-400">
            Difficulty
          </p>
          <div className="flex gap-3">
            {DIFF_LABELS.map(({ key, icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => setDifficulty(key)}
                className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-bold capitalize transition-all ${
                  difficulty === key
                    ? "border-stone-800 bg-stone-800 text-white shadow-sm"
                    : "border-stone-200 text-stone-500 hover:bg-stone-50"
                }`}
              >
                {icon} {key}
              </button>
            ))}
          </div>

          {/* Level selector (for games with finite levels) */}
          {game.levels > 0 && (
            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-400">
                Level
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={level <= 1}
                  onClick={() => setLevel((l) => Math.max(1, l - 1))}
                  className="rounded-lg border border-stone-200 px-3 py-1 text-xs font-bold text-stone-600 disabled:opacity-40"
                >
                  −
                </button>
                <span className="text-sm font-bold text-stone-700">
                  {level} / {game.levels}
                </span>
                <button
                  type="button"
                  disabled={level >= game.levels}
                  onClick={() => setLevel((l) => Math.min(game.levels, l + 1))}
                  className="rounded-lg border border-stone-200 px-3 py-1 text-xs font-bold text-stone-600 disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Play button */}
          <button
            type="button"
            onClick={() => {
              setResult(null);
              setPlaying(true);
            }}
            disabled={!Engine}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-black text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            {Engine ? "▶ Play Now" : "Engine Loading…"}
          </button>
        </div>
      </div>
    </main>
  );
}
