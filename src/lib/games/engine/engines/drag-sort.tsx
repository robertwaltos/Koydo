/* -------------------------------------------------------------------------- */
/*  Drag-Sort Engine — Sort/categorize items by dragging                     */
/*  Great for: classification, ordering, grouping activities                 */
/* -------------------------------------------------------------------------- */
"use client";

/* eslint-disable react-hooks/purity, react-hooks/refs -- engine loop uses mutable refs and mount timestamps intentionally. */

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type SortItem = {
  id: string;
  emoji: string;
  label: string;
  category: string;
};

export type DragSortConfig = {
  title: string;
  prompt: string;
  items: SortItem[];
  categories: { id: string; label: string; emoji: string }[];
  infiniteMode?: boolean;
};

type Props = {
  config: DragSortConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { itemCount: number; timeLimit: number }> = {
  easy:   { itemCount: 6,  timeLimit: 90_000 },
  medium: { itemCount: 10, timeLimit: 75_000 },
  hard:   { itemCount: 15, timeLimit: 60_000 },
};


export function DragSortEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const items = useRef(shuffle(config.items).slice(0, settings.itemCount));
  const [unsorted, setUnsorted] = useState<SortItem[]>(items.current);
  const [sorted, setSorted] = useState<Record<string, SortItem[]>>(
    Object.fromEntries(config.categories.map((c) => [c.id, []])),
  );
  const [dragItem, setDragItem] = useState<SortItem | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean; item: string } | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());

  // Timer
  useEffect(() => {
    if (phase !== "playing") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) { setPhase("complete"); return 0; }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [phase]);

  // Check completion
  useEffect(() => {
    if (unsorted.length === 0 && phase === "playing") {
      if (config.infiniteMode) {
        setLevel((l) => l + 1);
        const next = shuffle(config.items).slice(0, Math.min(settings.itemCount + level * 2, config.items.length));
        setUnsorted(next);
        setSorted(Object.fromEntries(config.categories.map((c) => [c.id, []])));
      } else {
        setPhase("complete");
      }
    }
  }, [unsorted, phase, config, settings.itemCount, level]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = items.current.length * 100;
      onComplete({
        score,
        maxScore,
        stars: calculateStars(score, maxScore),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete]);

  const handleDrop = useCallback(
    (categoryId: string) => {
      if (!dragItem || phase !== "playing") return;
      const correct = dragItem.category === categoryId;

      if (correct) {
        setScore((s) => s + 100 + streak * 20);
        setStreak((s) => s + 1);
        setSorted((prev) => ({
          ...prev,
          [categoryId]: [...(prev[categoryId] ?? []), dragItem],
        }));
        setUnsorted((prev) => prev.filter((i) => i.id !== dragItem.id));
      } else {
        setScore((s) => Math.max(0, s - 30));
        setStreak(0);
      }

      setFeedback({ correct, item: dragItem.label });
      setTimeout(() => setFeedback(null), 800);
      setDragItem(null);
    },
    [dragItem, phase, streak],
  );

  const handleItemClick = useCallback(
    (item: SortItem) => {
      if (phase !== "playing") return;
      if (dragItem?.id === item.id) {
        setDragItem(null);
      } else {
        setDragItem(item);
      }
    },
    [phase, dragItem],
  );

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

      <p className="text-center text-sm font-medium text-stone-500">{config.prompt}</p>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`rounded-full px-4 py-1 text-sm font-bold ${
              feedback.correct ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
            }`}
          >
            {feedback.correct ? "✓ Correct!" : "✗ Try again!"}
          </motion.div>
        )}
      </AnimatePresence>

      {streak > 2 && (
        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="text-amber-500 text-sm font-black">
          🔥 {streak} streak!
        </motion.div>
      )}

      {/* Category drop zones */}
      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
        {config.categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleDrop(cat.id)}
            className={`flex flex-col items-center gap-1 rounded-xl border-2 border-dashed p-3 transition-all ${
              dragItem
                ? "border-sky-400 bg-sky-50 hover:bg-sky-100 cursor-pointer"
                : "border-stone-200 bg-stone-50"
            }`}
          >
            <span className="text-2xl">{cat.emoji}</span>
            <span className="text-xs font-bold text-stone-600">{cat.label}</span>
            <span className="text-xs text-stone-400">
              {(sorted[cat.id] ?? []).length} items
            </span>
          </button>
        ))}
      </div>

      {/* Unsorted items */}
      <div className="flex flex-wrap justify-center gap-2 pt-2">
        <AnimatePresence>
          {unsorted.map((item) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: dragItem?.id === item.id ? 1.15 : 1 }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
              onClick={() => handleItemClick(item)}
              className={`flex items-center gap-1 rounded-xl px-3 py-2 shadow-md transition-all ${
                dragItem?.id === item.id
                  ? "bg-sky-400 text-white ring-2 ring-sky-300"
                  : "bg-white text-stone-700 hover:bg-stone-50"
              }`}
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="text-xs font-semibold">{item.label}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {unsorted.length === 0 && phase === "playing" && (
        <p className="text-center text-sm text-emerald-600 font-bold">All sorted! 🎉</p>
      )}

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">{"⭐".repeat(calculateStars(score, items.current.length * 100))}</p>
          <p className="mt-1 font-bold text-stone-700">{score} pts</p>
        </motion.div>
      )}
    </div>
  );
}



