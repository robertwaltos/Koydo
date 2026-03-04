/* -------------------------------------------------------------------------- */
/*  Sequence-Recall Engine — Simon Says style memory game                    */
/*  Watch, remember, repeat increasingly long sequences                      */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars } from "@/lib/games/engine/scoring";

export type SequenceItem = {
  id: string;
  emoji: string;
  label: string;
  color: string; // Tailwind bg class
  sound?: string;
};

export type SequenceRecallConfig = {
  title: string;
  items: SequenceItem[];
  infiniteMode?: boolean;
};

type Props = {
  config: SequenceRecallConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { startLen: number; showMs: number; lives: number }> = {
  easy:   { startLen: 2, showMs: 800, lives: 3 },
  medium: { startLen: 3, showMs: 600, lives: 2 },
  hard:   { startLen: 4, showMs: 400, lives: 1 },
};

export function SequenceRecallEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const [sequence, setSequence] = useState<string[]>([]);
  const [playerInput, setPlayerInput] = useState<string[]>([]);
  const [phase, setPhase] = useState<"showing" | "input" | "success" | "fail" | "complete">("showing");
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(settings.lives);
  const [bestLevel, setBestLevel] = useState(0);
  const startTime = useRef(Date.now());

  // Generate next sequence
  const extendSequence = useCallback(() => {
    setSequence((prev) => {
      const items = config.items;
      const next = [...prev, items[Math.floor(Math.random() * items.length)]!.id];
      return next;
    });
  }, [config.items]);

  // Start game
  useEffect(() => {
    const initial: string[] = [];
    for (let i = 0; i < settings.startLen; i++) {
      initial.push(config.items[Math.floor(Math.random() * config.items.length)]!.id);
    }
    setSequence(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Show sequence animation
  useEffect(() => {
    if (phase !== "showing" || sequence.length === 0) return;

    let cancelled = false;
    const show = async () => {
      await new Promise((r) => setTimeout(r, 500));
      for (let i = 0; i < sequence.length; i++) {
        if (cancelled) return;
        setActiveItem(sequence[i]!);
        await new Promise((r) => setTimeout(r, settings.showMs));
        setActiveItem(null);
        await new Promise((r) => setTimeout(r, 200));
      }
      if (!cancelled) {
        setPhase("input");
        setPlayerInput([]);
      }
    };
    show();
    return () => { cancelled = true; };
  }, [phase, sequence, settings.showMs]);

  const handlePress = useCallback(
    (itemId: string) => {
      if (phase !== "input") return;

      // Flash
      setActiveItem(itemId);
      setTimeout(() => setActiveItem(null), 200);

      const nextInput = [...playerInput, itemId];
      setPlayerInput(nextInput);

      // Check so far
      const idx = nextInput.length - 1;
      if (nextInput[idx] !== sequence[idx]) {
        // Wrong!
        setLives((l) => {
          const next = l - 1;
          if (next <= 0) {
            setPhase("complete");
          } else {
            setPhase("fail");
            setTimeout(() => {
              setPlayerInput([]);
              setPhase("showing"); // Replay same sequence
            }, 1500);
          }
          return next;
        });
        return;
      }

      // Completed the sequence?
      if (nextInput.length === sequence.length) {
        const pts = sequence.length * 50;
        setScore((s) => s + pts);
        setLevel((l) => l + 1);
        setBestLevel((b) => Math.max(b, sequence.length));
        setPhase("success");

        setTimeout(() => {
          extendSequence();
          setPlayerInput([]);
          setPhase("showing");
        }, 1200);
      }
    },
    [phase, playerInput, sequence, extendSequence],
  );

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxLevels = 20;
      onComplete({
        score,
        maxScore: maxLevels * 50,
        stars: calculateStars(bestLevel, maxLevels),
        timeMs: Date.now() - startTime.current,
        level: bestLevel,
        difficulty,
      });
    }
  }, [phase, score, bestLevel, difficulty, onComplete]);

  const cols = config.items.length <= 4 ? 2 : config.items.length <= 6 ? 3 : 4;

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>Sequence: {sequence.length}</span>
        <span>{"❤️".repeat(lives)}</span>
      </div>

      {/* Phase text */}
      <motion.div
        key={phase}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`rounded-full px-4 py-1 text-sm font-bold ${
          phase === "showing"
            ? "bg-amber-100 text-amber-700"
            : phase === "input"
              ? "bg-sky-100 text-sky-700"
              : phase === "success"
                ? "bg-emerald-100 text-emerald-700"
                : phase === "fail"
                  ? "bg-red-100 text-red-700"
                  : "bg-stone-100 text-stone-700"
        }`}
      >
        {phase === "showing" && "👀 Watch carefully..."}
        {phase === "input" && `🎯 Your turn! (${playerInput.length}/${sequence.length})`}
        {phase === "success" && "✓ Perfect!"}
        {phase === "fail" && "✗ Wrong! Try again..."}
        {phase === "complete" && "Game Over!"}
      </motion.div>

      {/* Progress dots */}
      <div className="flex gap-1">
        {sequence.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i < playerInput.length ? "bg-emerald-500" : "bg-stone-200"
            }`}
          />
        ))}
      </div>

      {/* Item buttons */}
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {config.items.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => handlePress(item.id)}
              disabled={phase !== "input"}
              animate={{
                scale: isActive ? 1.2 : 1,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className={`flex h-20 w-20 flex-col items-center justify-center rounded-2xl text-3xl shadow-lg transition-all sm:h-24 sm:w-24 ${
                isActive
                  ? `${item.color} ring-4 ring-white brightness-125`
                  : `${item.color} opacity-80 hover:opacity-100`
              } ${phase !== "input" ? "cursor-default" : "cursor-pointer"}`}
            >
              <span>{item.emoji}</span>
              <span className="mt-1 text-[10px] font-bold text-white/80">{item.label}</span>
            </motion.button>
          );
        })}
      </div>

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">{"⭐".repeat(calculateStars(bestLevel, 20))}</p>
          <p className="mt-1 font-bold text-stone-700">Best sequence: {bestLevel} · {score} pts</p>
        </motion.div>
      )}
    </div>
  );
}
