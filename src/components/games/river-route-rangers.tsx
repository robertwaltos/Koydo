"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, Fish, Waves } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import JuicyStreak from "@/components/experience/JuicyStreak";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticCelebration, hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import { createLegacySessionId, emitLegacyGameComplete } from "@/lib/games/legacy-runtime-events";

type Position = [number, number];

type RouteRound = {
  id: string;
  animal: string;
  emoji: string;
  target: number;
  grid: number[][];
  solution: Position[];
};

type Phase = "ready" | "playing" | "feedback" | "complete";

const TOTAL_ROUNDS = 6;

const ROUNDS: RouteRound[] = [
  {
    id: "otter-bay",
    animal: "Otter Ferry",
    emoji: "🦦",
    target: 13,
    grid: [
      [2, 5, 4, 7],
      [6, 3, 8, 1],
      [4, 5, 2, 6],
      [7, 1, 3, 4],
    ],
    solution: [[0, 1], [1, 1], [2, 1]],
  },
  {
    id: "duck-creek",
    animal: "Duck Creek",
    emoji: "🦆",
    target: 15,
    grid: [
      [5, 1, 6, 4],
      [3, 7, 2, 8],
      [6, 4, 5, 1],
      [2, 8, 3, 7],
    ],
    solution: [[0, 0], [1, 0], [1, 1]],
  },
  {
    id: "frog-ripple",
    animal: "Frog Ripple",
    emoji: "🐸",
    target: 12,
    grid: [
      [3, 6, 2, 7],
      [4, 5, 1, 8],
      [2, 3, 6, 4],
      [7, 2, 5, 1],
    ],
    solution: [[0, 0], [0, 1], [1, 1]],
  },
  {
    id: "seal-stream",
    animal: "Seal Stream",
    emoji: "🦭",
    target: 14,
    grid: [
      [4, 8, 3, 2],
      [5, 2, 7, 1],
      [6, 4, 3, 8],
      [1, 5, 2, 6],
    ],
    solution: [[1, 0], [2, 0], [2, 1]],
  },
  {
    id: "fox-river",
    animal: "Fox River",
    emoji: "🦊",
    target: 16,
    grid: [
      [2, 9, 4, 5],
      [7, 3, 6, 2],
      [5, 8, 1, 4],
      [3, 6, 2, 7],
    ],
    solution: [[0, 1], [1, 1], [1, 2]],
  },
  {
    id: "whale-channel",
    animal: "Whale Channel",
    emoji: "🐋",
    target: 18,
    grid: [
      [6, 4, 7, 2],
      [5, 8, 3, 1],
      [4, 6, 2, 9],
      [7, 3, 5, 4],
    ],
    solution: [[1, 0], [1, 1], [2, 1]],
  },
];

function samePosition(left: Position, right: Position) {
  return left[0] === right[0] && left[1] === right[1];
}

function isAdjacent(left: Position, right: Position) {
  return Math.abs(left[0] - right[0]) + Math.abs(left[1] - right[1]) === 1;
}

function sumSelected(grid: number[][], selected: Position[]) {
  return selected.reduce((total, [row, col]) => total + (grid[row]?.[col] ?? 0), 0);
}

export default function RiverRouteRangers() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [selected, setSelected] = useState<Position[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; total: number } | null>(null);
  const sessionIdRef = useRef(createLegacySessionId());
  const startedAtRef = useRef(0);
  const interactionCountRef = useRef(0);

  const round = ROUNDS[roundIndex] ?? ROUNDS[0];

  const currentSum = useMemo(() => sumSelected(round.grid, selected), [round.grid, selected]);

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    startedAtRef.current = Date.now();
    interactionCountRef.current = 0;
    setPhase("playing");
    setRoundIndex(0);
    setSelected([]);
    setScore(0);
    setStreak(0);
    setFeedback(null);
    setMood("happy");
    setMessage("Pick three touching stepping stones whose sum matches the target route.");
    void hapticSelection();
  }, [setMessage, setMood]);

  const advanceRound = useCallback((correct: boolean, nextScore: number) => {
    const isLast = roundIndex >= TOTAL_ROUNDS - 1;
    if (isLast) {
      setPhase("complete");
      setMood(correct ? "cheering" : "happy");
      setMessage(correct ? "Every river route reached the far bank." : "You still guided the river team through some thoughtful routes.");
      emitLegacyGameComplete({
        sessionId: sessionIdRef.current,
        gameId: "river-route-rangers",
        elapsedMs: Math.max(0, Date.now() - startedAtRef.current),
        interactions: Math.max(1, interactionCountRef.current),
        score: nextScore,
        maxScore: TOTAL_ROUNDS * 18,
        difficulty: "medium",
        source: "component",
        occurredAt: new Date().toISOString(),
      });
      return;
    }

    setRoundIndex((value) => value + 1);
    setSelected([]);
    setFeedback(null);
    setPhase("playing");
  }, [roundIndex, setMessage, setMood]);

  const evaluateRoute = useCallback((nextSelected: Position[]) => {
    const total = sumSelected(round.grid, nextSelected);
    const correct = total === round.target && nextSelected.every((position, index) => samePosition(position, round.solution[index] ?? [-1, -1]));
    const nextScore = score + (correct ? 18 : 0);
    setFeedback({ correct, total });
    setPhase("feedback");
    setScore(nextScore);
    setStreak((value) => (correct ? value + 1 : 0));
    setMood(correct ? "happy" : "thinking");
    setMessage(correct ? `${round.animal} crossed safely.` : `That route totaled ${total}. Try to hit ${round.target} next time.`);
    if (correct) {
      if (streak + 1 >= 3) {
        void hapticCelebration();
      } else {
        void hapticSuccess();
      }
    } else {
      void hapticError();
    }
    window.setTimeout(() => advanceRound(correct, nextScore), 1200);
  }, [advanceRound, round, score, setMessage, setMood, streak]);

  const selectStone = useCallback((row: number, col: number) => {
    if (phase !== "playing") return;
    const point: Position = [row, col];
    interactionCountRef.current += 1;

    if (selected.some((item) => samePosition(item, point))) {
      setSelected((value) => value.filter((item) => !samePosition(item, point)));
      void hapticSelection();
      return;
    }

    if (selected.length > 0 && !isAdjacent(selected[selected.length - 1]!, point)) {
      setMessage("Each stepping stone must touch the one before it.");
      void hapticError();
      return;
    }

    const nextSelected = [...selected, point];
    setSelected(nextSelected);
    void hapticSelection();

    if (nextSelected.length === 3) {
      evaluateRoute(nextSelected);
    }
  }, [evaluateRoute, phase, selected, setMessage]);

  return (
    <div className="relative overflow-hidden rounded-[2.6rem] border border-cyan-200/60 bg-[linear-gradient(180deg,#f4fbff_0%,#dff4ff_42%,#dff9f2_100%)] p-6 text-stone-900 shadow-[0_24px_90px_rgba(45,120,160,0.16)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(74,222,128,0.16),transparent_34%)]" />
      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-700">Math and route planning</p>
            <h2 className="text-3xl font-black tracking-tight text-stone-900">River Route Rangers</h2>
          </div>
          <JuicyStreak count={streak} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="rounded-[2rem] border border-white/70 bg-white/85 p-8 text-center shadow-lg backdrop-blur"
            >
              <div className="mx-auto flex w-fit items-center gap-3 rounded-full bg-cyan-100 px-5 py-3 text-cyan-700">
                <Compass className="h-5 w-5" />
                <span className="text-sm font-black uppercase tracking-[0.2em]">Choose 3 touching stones that reach the target sum</span>
              </div>
              <div className="mt-6 flex justify-center">
                <MascotFriend id="brook" mood="happy" size="lg" />
              </div>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-600">
                Every river friend needs one safe route across the stepping stones. Pick three touching stones in order so their numbers add up to the target current energy.
              </p>
              <div className="mt-8">
                <PhysicalButton onClick={startGame} className="h-12 bg-cyan-500 px-8 text-sm font-black text-white">
                  Start Crossing
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" || phase === "feedback" ? (
            <motion.section
              key={round.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-lg backdrop-blur">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-600">Round {roundIndex + 1}/{TOTAL_ROUNDS}</p>
                    <h3 className="mt-2 text-3xl font-black text-stone-900">{round.animal}</h3>
                  </div>
                  <div className="text-6xl leading-none">{round.emoji}</div>
                </div>
                <div className="rounded-[1.5rem] bg-cyan-50 p-5">
                  <div className="flex items-center gap-2 text-cyan-700">
                    <Waves className="h-4 w-4" />
                    <span className="text-xs font-black uppercase tracking-[0.18em]">Target current energy</span>
                  </div>
                  <p className="mt-3 text-5xl font-black text-stone-900">{round.target}</p>
                </div>
                <div className="mt-5 rounded-[1.5rem] bg-emerald-50 p-5">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <Fish className="h-4 w-4" />
                    <span className="text-xs font-black uppercase tracking-[0.18em]">Selected route sum</span>
                  </div>
                  <p className="mt-3 text-4xl font-black text-stone-900">{feedback?.total ?? currentSum}</p>
                  <p className="mt-2 text-sm text-stone-500">Pick stones in a touching path from one step to the next.</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-lg backdrop-blur">
                <div className="grid gap-3 sm:grid-cols-4">
                  {round.grid.map((rowValues, row) =>
                    rowValues.map((value, col) => {
                      const active = selected.some((item) => samePosition(item, [row, col]));
                      return (
                        <button
                          key={`${round.id}-${row}-${col}`}
                          type="button"
                          disabled={phase !== "playing"}
                          onClick={() => selectStone(row, col)}
                          className={`aspect-square rounded-[1.5rem] border text-3xl font-black transition ${active ? "border-cyan-400 bg-cyan-100 shadow-md" : "border-stone-200 bg-[linear-gradient(180deg,#ffffff_0%,#f3fbff_100%)] hover:border-cyan-300 hover:bg-cyan-50"}`}
                        >
                          {value}
                        </button>
                      );
                    }),
                  )}
                </div>

                {feedback ? (
                  <div className={`mt-5 rounded-[1.5rem] px-4 py-4 text-sm font-bold ${feedback.correct ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                    {feedback.correct ? "Perfect route. Your ranger crossed the river safely." : `That route totaled ${feedback.total}. A better path would have reached ${round.target}.`}
                  </div>
                ) : (
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Choose exactly three touching stones.</p>
                )}
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section
              key="complete"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] border border-white/70 bg-white/85 p-8 text-center shadow-lg backdrop-blur"
            >
              <div className="flex justify-center">
                <MascotFriend id="brook" mood={score >= 72 ? "cheering" : "happy"} size="lg" />
              </div>
              <h3 className="mt-4 text-3xl font-black text-stone-900">River Crossing Complete</h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-600">
                You guided the river rangers with thoughtful number paths and calm route planning across every crossing.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="rounded-2xl bg-cyan-50 px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">Score</p>
                  <p className="mt-1 text-3xl font-black text-stone-900">{score}</p>
                </div>
                <div className="rounded-2xl bg-emerald-50 px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Streak</p>
                  <p className="mt-1 text-3xl font-black text-stone-900">{streak}</p>
                </div>
              </div>
              <div className="mt-8">
                <PhysicalButton onClick={startGame} className="h-12 bg-cyan-500 px-8 text-sm font-black text-white">
                  Cross Again
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
