/* -------------------------------------------------------------------------- */
/*  Element-Lab Engine — Chemistry / Combination discovery game              */
/*  Combine elements to discover new compounds, Little Alchemy inspired      */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars } from "@/lib/games/engine/scoring";

export type LabElement = {
  id: string;
  emoji: string;
  name: string;
  tier: number; // 0 = base, 1+ = discovered
};

export type LabRecipe = {
  inputs: [string, string];
  output: string;
  hint?: string;
};

export type ElementLabConfig = {
  title: string;
  baseElements: LabElement[];
  recipes: LabRecipe[];
  allElements: LabElement[];
  infiniteMode?: boolean;
};

type Props = {
  config: ElementLabConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { timeLimit: number; hintCost: number; targetDiscover: number }> = {
  easy:   { timeLimit: 300_000, hintCost: 20, targetDiscover: 5 },
  medium: { timeLimit: 240_000, hintCost: 40, targetDiscover: 10 },
  hard:   { timeLimit: 180_000, hintCost: 60, targetDiscover: 15 },
};

export function ElementLabEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const [discovered, setDiscovered] = useState<Set<string>>(
    new Set(config.baseElements.map((e) => e.id)),
  );
  const [selected, setSelected] = useState<[string | null, string | null]>([null, null]);
  const [score, setScore] = useState(0);
  const [combos, setCombos] = useState(0);
  const [lastDiscovery, setLastDiscovery] = useState<LabElement | null>(null);
  const [failFlash, setFailFlash] = useState(false);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const [hints, setHints] = useState<string[]>([]);
  const startTime = useRef(Date.now());

  const discoveredElements = config.allElements.filter((e) => discovered.has(e.id));

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

  // Check win
  useEffect(() => {
    const newDiscovers = discovered.size - config.baseElements.length;
    if (newDiscovers >= settings.targetDiscover) {
      setPhase("complete");
    }
  }, [discovered, config.baseElements.length, settings.targetDiscover]);

  const handleSelect = useCallback(
    (elementId: string) => {
      if (phase !== "playing") return;

      setSelected(([a, b]) => {
        if (a === null) return [elementId, null];
        if (b === null) {
          // Try combine
          const pair: [string, string] = [a, elementId];
          const recipe = config.recipes.find(
            (r) =>
              (r.inputs[0] === pair[0] && r.inputs[1] === pair[1]) ||
              (r.inputs[0] === pair[1] && r.inputs[1] === pair[0]),
          );

          if (recipe && !discovered.has(recipe.output)) {
            // New discovery!
            const newEl = config.allElements.find((e) => e.id === recipe.output);
            if (newEl) {
              setDiscovered((prev) => new Set(prev).add(recipe.output));
              setScore((s) => s + 100 * (newEl.tier + 1));
              setCombos((c) => c + 1);
              setLastDiscovery(newEl);
              setTimeout(() => setLastDiscovery(null), 2000);
            }
          } else if (recipe && discovered.has(recipe.output)) {
            // Already discovered
            setFailFlash(true);
            setTimeout(() => setFailFlash(false), 400);
          } else {
            // No recipe
            setFailFlash(true);
            setTimeout(() => setFailFlash(false), 400);
          }
          return [null, null];
        }
        return [elementId, null];
      });
    },
    [phase, config, discovered],
  );

  const requestHint = useCallback(() => {
    if (score < settings.hintCost) return;
    // Find an undiscovered recipe where both inputs are discovered
    const available = config.recipes.filter(
      (r) => !discovered.has(r.output) && discovered.has(r.inputs[0]) && discovered.has(r.inputs[1]),
    );
    if (available.length === 0) return;
    const recipe = available[Math.floor(Math.random() * available.length)]!;
    const input1 = config.allElements.find((e) => e.id === recipe.inputs[0]);
    const input2 = config.allElements.find((e) => e.id === recipe.inputs[1]);
    if (input1 && input2) {
      setHints((prev) => [
        ...prev,
        recipe.hint ?? `Try combining ${input1.emoji} ${input1.name} + ${input2.emoji} ${input2.name}`,
      ]);
      setScore((s) => s - settings.hintCost);
    }
  }, [score, settings.hintCost, config, discovered]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const newDiscovers = discovered.size - config.baseElements.length;
      const maxScore = settings.targetDiscover * 200;
      onComplete({
        score,
        maxScore,
        stars: calculateStars(newDiscovers, settings.targetDiscover),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, discovered, config.baseElements.length, settings.targetDiscover, level, difficulty, onComplete]);

  const pct = timeLeft / settings.timeLimit;
  const newDiscovers = discovered.size - config.baseElements.length;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>{newDiscovers}/{settings.targetDiscover} discovered</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      {/* Selected slots */}
      <div
        className={`flex items-center gap-4 rounded-xl p-4 shadow-inner transition-colors ${
          failFlash ? "bg-red-100" : "bg-stone-100"
        }`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-dashed border-stone-300 bg-white text-3xl">
          {selected[0]
            ? config.allElements.find((e) => e.id === selected[0])?.emoji ?? "?"
            : ""}
        </div>
        <span className="text-2xl font-black text-stone-400">+</span>
        <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-dashed border-stone-300 bg-white text-3xl">
          {selected[1]
            ? config.allElements.find((e) => e.id === selected[1])?.emoji ?? "?"
            : ""}
        </div>
        <span className="text-2xl font-black text-stone-400">=</span>
        <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 text-3xl">
          ?
        </div>
      </div>

      {/* Discovery flash */}
      <AnimatePresence>
        {lastDiscovery && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="rounded-xl bg-gradient-to-r from-amber-100 to-yellow-100 px-6 py-3 text-center shadow-lg"
          >
            <p className="text-3xl">{lastDiscovery.emoji}</p>
            <p className="text-sm font-bold text-amber-800">
              New discovery: {lastDiscovery.name}!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Element grid */}
      <div className="flex flex-wrap justify-center gap-2">
        {discoveredElements.map((el) => (
          <motion.button
            key={el.id}
            type="button"
            layout
            initial={{ scale: 0 }}
            animate={{
              scale: selected[0] === el.id ? 1.15 : 1,
            }}
            onClick={() => handleSelect(el.id)}
            className={`flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 shadow-md transition-all ${
              selected[0] === el.id
                ? "bg-sky-400 text-white ring-2 ring-sky-300"
                : "bg-white text-stone-700 hover:bg-stone-50"
            }`}
          >
            <span className="text-xl">{el.emoji}</span>
            <span className="text-[10px] font-semibold leading-tight">{el.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Hint button */}
      <button
        type="button"
        onClick={requestHint}
        disabled={score < settings.hintCost}
        className="rounded-full bg-amber-100 px-4 py-1 text-xs font-bold text-amber-700 transition hover:bg-amber-200 disabled:opacity-40"
      >
        💡 Hint ({settings.hintCost} pts)
      </button>

      {hints.length > 0 && (
        <div className="w-full space-y-1">
          {hints.slice(-3).map((h, i) => (
            <p key={i} className="text-center text-xs text-amber-600">💡 {h}</p>
          ))}
        </div>
      )}

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">{"⭐".repeat(calculateStars(newDiscovers, settings.targetDiscover))}</p>
          <p className="mt-1 font-bold text-stone-700">{score} pts · {combos} combos</p>
        </motion.div>
      )}
    </div>
  );
}
