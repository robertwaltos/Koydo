/* -------------------------------------------------------------------------- */
/*  Timeline Engine — Order events chronologically                           */
/*  Drag/tap to sort historical events, scientific discoveries, etc.         */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type TimelineEvent = {
  id: string;
  emoji: string;
  title: string;
  year: number;
  description?: string;
};

export type TimelineConfig = {
  title: string;
  events: TimelineEvent[];
  infiniteMode?: boolean;
};

type Props = {
  config: TimelineConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { eventCount: number; timeLimit: number; showYears: boolean }> = {
  easy:   { eventCount: 4,  timeLimit: 120_000, showYears: true },
  medium: { eventCount: 6,  timeLimit: 120_000, showYears: false },
  hard:   { eventCount: 8,  timeLimit: 120_000, showYears: false },
};

export function TimelineEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const roundEvents = useRef(shuffle(config.events).slice(0, settings.eventCount));
  const correctOrder = useRef(
    [...roundEvents.current].sort((a, b) => a.year - b.year),
  );

  const [arranged, setArranged] = useState<TimelineEvent[]>([]);
  const [pool, setPool] = useState<TimelineEvent[]>(shuffle(roundEvents.current));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "checking" | "complete">("playing");
  const [feedback, setFeedback] = useState<{ correct: number; total: number } | null>(null);
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());

  // Timer
  useEffect(() => {
    if (phase === "complete") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) { setPhase("complete"); return 0; }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [phase]);

  const addToTimeline = useCallback(
    (event: TimelineEvent, position?: number) => {
      if (phase !== "playing") return;
      setPool((prev) => prev.filter((e) => e.id !== event.id));
      setArranged((prev) => {
        const next = [...prev];
        if (position !== undefined) {
          next.splice(position, 0, event);
        } else {
          next.push(event);
        }
        return next;
      });
    },
    [phase],
  );

  const removeFromTimeline = useCallback(
    (index: number) => {
      if (phase !== "playing") return;
      setArranged((prev) => {
        const event = prev[index]!;
        setPool((p) => [...p, event]);
        return prev.filter((_, i) => i !== index);
      });
    },
    [phase],
  );

  const checkOrder = useCallback(() => {
    if (phase !== "playing" || arranged.length !== correctOrder.current.length) return;
    setPhase("checking");

    let correctCount = 0;
    for (let i = 0; i < arranged.length; i++) {
      if (arranged[i]!.id === correctOrder.current[i]!.id) correctCount++;
    }

    setFeedback({ correct: correctCount, total: arranged.length });

    setTimeout(() => {
      if (correctCount === arranged.length) {
        const timeBonus = Math.round(timeLeft / 1000) * 5;
        setScore((s) => s + 200 + timeBonus);

        if (config.infiniteMode) {
          setLevel((l) => l + 1);
          const count = Math.min(settings.eventCount + level, config.events.length);
          roundEvents.current = shuffle(config.events).slice(0, count);
          correctOrder.current = [...roundEvents.current].sort((a, b) => a.year - b.year);
          setPool(shuffle(roundEvents.current));
          setArranged([]);
          setFeedback(null);
          setPhase("playing");
        } else {
          setPhase("complete");
        }
      } else {
        // Give them another try
        setFeedback(null);
        setPhase("playing");
      }
    }, 2000);
  }, [phase, arranged, correctOrder, timeLeft, config, settings, level]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = 400;
      onComplete({
        score,
        maxScore: Math.max(score, maxScore),
        stars: calculateStars(score, Math.max(score, maxScore)),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete]);

  const pct = timeLeft / settings.timeLimit;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>Level {level}</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      <h3 className="text-sm font-medium text-stone-500">
        Arrange events from earliest → latest:
      </h3>

      {/* Timeline */}
      <div className="w-full space-y-1">
        <div className="relative ml-6 border-l-2 border-stone-300 pl-4">
          {arranged.map((event, i) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-2 flex items-center gap-2"
            >
              {/* Timeline dot */}
              <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-sky-500" style={{ top: `${i * 48 + 8}px` }} />
              <button
                type="button"
                onClick={() => removeFromTimeline(i)}
                className="flex flex-1 items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition hover:bg-red-50"
              >
                <span className="text-xl">{event.emoji}</span>
                <div className="text-left">
                  <p className="text-sm font-bold text-stone-700">{event.title}</p>
                  {settings.showYears && (
                    <p className="text-xs text-stone-400">{event.year}</p>
                  )}
                </div>
                <span className="ml-auto text-xs text-stone-400">#{i + 1}</span>
              </button>
            </motion.div>
          ))}

          {arranged.length === 0 && (
            <p className="py-4 text-xs text-stone-400">Tap events below to add them here...</p>
          )}
        </div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`rounded-full px-4 py-1 text-sm font-bold ${
              feedback.correct === feedback.total
                ? "bg-emerald-100 text-emerald-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {feedback.correct === feedback.total
              ? "✓ Perfect order!"
              : `${feedback.correct}/${feedback.total} correct — try again!`}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pool */}
      {pool.length > 0 && (
        <div className="w-full">
          <h4 className="mb-1 text-xs font-bold text-stone-500">Events to place:</h4>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {pool.map((event) => (
                <motion.button
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  type="button"
                  onClick={() => addToTimeline(event)}
                  className="flex items-center gap-1 rounded-xl bg-sky-50 px-3 py-2 shadow-sm transition hover:bg-sky-100"
                >
                  <span className="text-xl">{event.emoji}</span>
                  <span className="text-xs font-semibold text-stone-700">{event.title}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Check button */}
      {pool.length === 0 && phase === "playing" && (
        <button
          type="button"
          onClick={checkOrder}
          className="rounded-full bg-sky-500 px-6 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-sky-600"
        >
          📅 Check Order
        </button>
      )}
    </div>
  );
}
