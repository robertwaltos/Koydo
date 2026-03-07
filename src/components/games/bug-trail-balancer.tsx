"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { GameDifficulty, GameResult } from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticCelebration, hapticError, hapticSuccess } from "@/lib/platform/haptics";

type LeafToken = {
  id: string;
  value: number;
};

type BugRound = {
  id: string;
  scene: string;
  accent: string;
  bugs: Array<{
    id: string;
    name: string;
    emoji: string;
    target: number;
  }>;
  leaves: number[];
};

const ROUNDS_PER_GAME = 6;

const ROUND_LIBRARY: BugRound[] = [
  {
    id: "pond-hop",
    scene: "Pond Hop Parade",
    accent: "from-lime-100 via-emerald-50 to-cyan-100",
    bugs: [
      { id: "lady", name: "Ladybug", emoji: "🐞", target: 5 },
      { id: "bee", name: "Bee", emoji: "🐝", target: 6 },
      { id: "snail", name: "Snail", emoji: "🐌", target: 7 },
    ],
    leaves: [2, 3, 2, 4, 3, 4],
  },
  {
    id: "moss-bridge",
    scene: "Mossy Bridge Run",
    accent: "from-sky-100 via-teal-50 to-lime-100",
    bugs: [
      { id: "firefly", name: "Firefly", emoji: "✨", target: 4 },
      { id: "moth", name: "Moth", emoji: "🦋", target: 7 },
      { id: "ant", name: "Ant", emoji: "🐜", target: 8 },
    ],
    leaves: [1, 3, 2, 5, 4, 4],
  },
  {
    id: "moon-trail",
    scene: "Moon Pebble Trail",
    accent: "from-indigo-100 via-sky-50 to-cyan-100",
    bugs: [
      { id: "cricket", name: "Cricket", emoji: "🦗", target: 6 },
      { id: "beetle", name: "Beetle", emoji: "🪲", target: 7 },
      { id: "dragonfly", name: "Dragonfly", emoji: "🪁", target: 9 },
    ],
    leaves: [1, 5, 3, 4, 4, 5],
  },
  {
    id: "berry-way",
    scene: "Berry Basket Dash",
    accent: "from-rose-100 via-amber-50 to-lime-100",
    bugs: [
      { id: "worm", name: "Worm", emoji: "🪱", target: 3 },
      { id: "hopper", name: "Hopper", emoji: "🦗", target: 6 },
      { id: "flutter", name: "Flutter", emoji: "🦋", target: 9 },
    ],
    leaves: [1, 2, 2, 4, 4, 5],
  },
  {
    id: "dew-garden",
    scene: "Dewdrop Garden",
    accent: "from-cyan-100 via-sky-50 to-blue-100",
    bugs: [
      { id: "bee-2", name: "Bee", emoji: "🐝", target: 5 },
      { id: "lady-2", name: "Ladybug", emoji: "🐞", target: 8 },
      { id: "moth-2", name: "Moth", emoji: "🦋", target: 9 },
    ],
    leaves: [1, 4, 3, 5, 4, 5],
  },
  {
    id: "sunrise-stones",
    scene: "Sunrise Step Stones",
    accent: "from-amber-100 via-orange-50 to-lime-100",
    bugs: [
      { id: "snail-2", name: "Snail", emoji: "🐌", target: 4 },
      { id: "ant-2", name: "Ant", emoji: "🐜", target: 6 },
      { id: "firefly-2", name: "Firefly", emoji: "✨", target: 8 },
    ],
    leaves: [1, 3, 2, 4, 3, 5],
  },
];

function shuffleArray<T>(items: readonly T[]): T[] {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex]!, next[index]!];
  }
  return next;
}

export type BugTrailBalancerProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function BugTrailBalancer({ difficulty, onComplete }: BugTrailBalancerProps) {
  const rounds = useMemo(() => shuffleArray(ROUND_LIBRARY).slice(0, ROUNDS_PER_GAME), []);
  const [phase, setPhase] = useState<"ready" | "playing" | "feedback" | "complete">("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [activeBugId, setActiveBugId] = useState<string | null>(null);
  const [leafTokens, setLeafTokens] = useState<LeafToken[]>([]);
  const [slots, setSlots] = useState<Record<string, Array<string | null>>>({});
  const [feedback, setFeedback] = useState<Record<string, boolean> | null>(null);
  const [startTime, setStartTime] = useState(0);

  const currentRound = rounds[roundIndex] ?? null;
  const maxScore = ROUNDS_PER_GAME * 3;

  const setupRound = useCallback((index: number) => {
    const round = rounds[index];
    if (!round) {
      setPhase("complete");
      return;
    }
    setLeafTokens(
      shuffleArray(round.leaves).map((value, tokenIndex) => ({
        id: `${round.id}-leaf-${tokenIndex}`,
        value,
      })),
    );
    setSlots(Object.fromEntries(round.bugs.map((bug) => [bug.id, [null, null]])));
    setFeedback(null);
    setActiveBugId(round.bugs[0]?.id ?? null);
    setPhase("playing");
  }, [rounds]);

  useEffect(() => {
    if (phase === "complete") {
      const stars = calculateStars(score, maxScore);
      if (stars === 3) void hapticCelebration();
      onComplete({
        gameType: "bug-trail-balancer",
        score,
        maxScore,
        stars,
        timeMs: Date.now() - startTime,
        difficulty,
      });
    }
  }, [difficulty, maxScore, onComplete, phase, score, startTime]);

  useEffect(() => {
    if (!currentRound || phase !== "playing") return;
    const allPlaced = currentRound.bugs.every((bug) => slots[bug.id]?.every((value) => value !== null));
    if (!allPlaced) return;

    const nextFeedback = Object.fromEntries(
      currentRound.bugs.map((bug) => {
        const total = (slots[bug.id] ?? []).reduce((sum, tokenId) => {
          const token = leafTokens.find((entry) => entry.id === tokenId);
          return sum + (token?.value ?? 0);
        }, 0);
        return [bug.id, total === bug.target];
      }),
    ) as Record<string, boolean>;

    const roundPoints = Object.values(nextFeedback).filter(Boolean).length;
    let advanceTimer = 0;

    const feedbackTimer = window.setTimeout(() => {
      setFeedback(nextFeedback);
      setScore((value) => value + roundPoints);
      setPhase("feedback");

      if (roundPoints === currentRound.bugs.length) void hapticSuccess();
      else void hapticError();

      advanceTimer = window.setTimeout(() => {
        const nextRoundIndex = roundIndex + 1;
        if (nextRoundIndex >= ROUNDS_PER_GAME) {
          setPhase("complete");
        } else {
          setRoundIndex(nextRoundIndex);
          setupRound(nextRoundIndex);
        }
      }, 1700);
    }, 0);

    return () => {
      window.clearTimeout(feedbackTimer);
      window.clearTimeout(advanceTimer);
    };
  }, [currentRound, leafTokens, phase, roundIndex, setupRound, slots]);

  const usedTokenIds = useMemo(
    () => new Set(Object.values(slots).flat().filter((value): value is string => Boolean(value))),
    [slots],
  );

  const handleLeafTap = useCallback((tokenId: string) => {
    if (!currentRound || phase !== "playing" || activeBugId === null) return;
    if (usedTokenIds.has(tokenId)) return;

    setSlots((current) => {
      const activeSlots = [...(current[activeBugId] ?? [null, null])];
      const emptyIndex = activeSlots.findIndex((value) => value === null);
      if (emptyIndex === -1) return current;
      activeSlots[emptyIndex] = tokenId;
      return {
        ...current,
        [activeBugId]: activeSlots,
      };
    });
  }, [activeBugId, currentRound, phase, usedTokenIds]);

  const handleSlotTap = useCallback((bugId: string, slotIndex: number) => {
    if (phase !== "playing") return;
    setActiveBugId(bugId);
    setSlots((current) => {
      const bugSlots = [...(current[bugId] ?? [null, null])];
      bugSlots[slotIndex] = null;
      return {
        ...current,
        [bugId]: bugSlots,
      };
    });
  }, [phase]);

  if (phase === "ready") {
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-[2rem] bg-gradient-to-br from-lime-100 via-emerald-50 to-cyan-100 p-8 text-center shadow-sm">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
          <span>🐞</span>
          Bug Trail Balancer
        </div>
        <div className="space-y-3">
          <h2 className="text-4xl font-black tracking-tight text-stone-900">Help each bug make the exact stepping-stone path.</h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-stone-600">
            Pick a bug row, then place two number leaves so the path adds up to the target flag.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStartTime(Date.now());
            setRoundIndex(0);
            setupRound(0);
          }}
          className="rounded-2xl bg-stone-900 px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Build The Paths
        </button>
      </div>
    );
  }

  if (phase === "complete") {
    const stars = calculateStars(score, maxScore);
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center gap-5 rounded-[2rem] bg-gradient-to-br from-amber-50 via-lime-50 to-cyan-100 p-8 text-center shadow-sm">
        <div className="text-5xl">{stars === 3 ? "🌟🌟🌟" : stars === 2 ? "⭐️⭐️" : stars === 1 ? "⭐️" : "🐞"}</div>
        <h2 className="text-3xl font-black text-stone-900">The bugs all made it home.</h2>
        <p className="text-lg text-stone-700">
          You balanced <span className="font-black text-emerald-700">{score}</span> of <span className="font-black">{maxScore}</span> bug bridges.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex min-h-[560px] flex-col gap-5 rounded-[2rem] bg-gradient-to-br p-6 shadow-sm ${currentRound?.accent ?? "from-lime-100 to-cyan-100"}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Round {roundIndex + 1} of {ROUNDS_PER_GAME}</p>
          <h3 className="text-2xl font-black text-stone-900">{currentRound?.scene}</h3>
        </div>
        <div className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
          Correct paths: {score}/{maxScore}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[1.75rem] bg-white/80 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Choose a bug row, then fill two stones</p>
          <div className="mt-4 space-y-4">
            {currentRound?.bugs.map((bug) => {
              const tokenIds = slots[bug.id] ?? [null, null];
              const values = tokenIds.map((tokenId) => leafTokens.find((entry) => entry.id === tokenId)?.value ?? null);
              const total = values.reduce((sum: number, value) => sum + (value ?? 0), 0);
              const isActive = activeBugId === bug.id;
              const isCorrect = feedback?.[bug.id];
              return (
                <button
                  key={bug.id}
                  type="button"
                  onClick={() => setActiveBugId(bug.id)}
                  className={[
                    "w-full rounded-[1.5rem] border-2 p-4 text-left transition-all",
                    isCorrect === true
                      ? "border-emerald-400 bg-emerald-50"
                      : isCorrect === false
                        ? "border-rose-300 bg-rose-50"
                        : isActive
                          ? "border-cyan-400 bg-cyan-50 shadow-[0_0_0_3px_rgba(103,232,249,0.2)]"
                          : "border-white/70 bg-white/70 hover:border-cyan-300 hover:bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{bug.emoji}</span>
                      <div>
                        <div className="text-lg font-black text-stone-900">{bug.name}</div>
                        <div className="text-sm text-stone-500">Target flag: {bug.target}</div>
                      </div>
                    </div>
                    <div className="rounded-full bg-stone-900 px-3 py-1 text-sm font-bold text-white">Total {total}</div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    {values.map((value, slotIndex) => (
                      <button
                        key={`${bug.id}-${slotIndex}`}
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleSlotTap(bug.id, slotIndex);
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50 text-2xl font-black text-stone-700"
                      >
                        {value ?? "?"}
                      </button>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-stone-950/92 p-5 text-white shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">Leaf Basket</p>
              <p className="mt-2 text-sm text-white/70">Tap number leaves to place them on the active bug path.</p>
            </div>
            {activeBugId ? <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Active row ready</div> : null}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {leafTokens.map((leaf) => {
              const used = usedTokenIds.has(leaf.id);
              return (
                <button
                  key={leaf.id}
                  type="button"
                  onClick={() => handleLeafTap(leaf.id)}
                  disabled={used || phase !== "playing"}
                  className={[
                    "flex aspect-square items-center justify-center rounded-[1.4rem] border text-2xl font-black transition-all",
                    used
                      ? "border-white/5 bg-white/10 text-white/35"
                      : "border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10 active:scale-95",
                  ].join(" ")}
                >
                  <div className="text-center">
                    <div className="text-3xl">🍃</div>
                    <div>{leaf.value}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 rounded-[1.4rem] bg-white/10 p-4 text-sm leading-6 text-white/80">
            {phase === "feedback"
              ? Object.values(feedback ?? {}).every(Boolean)
                ? "Every bug got the perfect two-step path."
                : "Some bugs need different leaf numbers next round."
              : "Good balancing means the two stones add up exactly to the flag."}
          </div>
        </section>
      </div>
    </div>
  );
}
