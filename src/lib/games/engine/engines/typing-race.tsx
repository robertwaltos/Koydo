/* -------------------------------------------------------------------------- */
/*  Typing-Race Engine — Speed typing / spelling game                        */
/*  Type words as fast as possible before they scroll off                    */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle, clamp } from "@/lib/games/engine/scoring";

export type TypingWord = {
  word: string;
  hint?: string;
  points?: number;
};

export type TypingRaceConfig = {
  title: string;
  words: TypingWord[];
  infiniteMode?: boolean;
};

type FallingWord = TypingWord & { key: number; y: number; speed: number; x: number };

type Props = {
  config: TypingRaceConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { speed: number; spawnMs: number; duration: number }> = {
  easy:   { speed: 0.3, spawnMs: 3000, duration: 60_000 },
  medium: { speed: 0.5, spawnMs: 2000, duration: 90_000 },
  hard:   { speed: 0.8, spawnMs: 1200, duration: 120_000 },
};

let _tk = 0;

export function TypingRaceEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const wordPool = useRef(shuffle(config.words));
  const wordIdx = useRef(0);
  const [words, setWords] = useState<FallingWord[]>([]);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [typed, setTyped] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [missed, setMissed] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.duration);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const [wpm, setWpm] = useState(0);
  const startTime = useRef(Date.now());
  const inputRef = useRef<HTMLInputElement>(null);
  const animRef = useRef(0);
  const lastFrame = useRef(performance.now());
  const lastSpawn = useRef(0);

  // Focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Game loop
  useEffect(() => {
    if (phase !== "playing") return;

    const loop = (now: number) => {
      const dt = (now - lastFrame.current) / 1000;
      lastFrame.current = now;

      // Spawn
      if (now - lastSpawn.current > settings.spawnMs / Math.min(level, 3)) {
        lastSpawn.current = now;
        const w = wordPool.current[wordIdx.current % wordPool.current.length]!;
        wordIdx.current++;
        setWords((prev) => [
          ...prev,
          { ...w, key: ++_tk, y: 0, speed: settings.speed * (0.8 + Math.random() * 0.4), x: 10 + Math.random() * 70 },
        ]);
      }

      // Move words down
      setWords((prev) => {
        const kept: FallingWord[] = [];
        for (const w of prev) {
          const ny = w.y + w.speed * dt * 20;
          if (ny > 100) {
            setMissed((m) => m + 1);
            setStreak(0);
          } else {
            kept.push({ ...w, y: ny });
          }
        }
        return kept;
      });

      // Timer
      setTimeLeft((t) => {
        if (t <= dt * 1000) { setPhase("complete"); return 0; }
        return t - dt * 1000;
      });

      animRef.current = requestAnimationFrame(loop);
    };

    lastFrame.current = performance.now();
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase, settings, level]);

  // Level up
  useEffect(() => {
    if (correct > 0 && correct % 10 === 0) setLevel((l) => l + 1);
  }, [correct]);

  // WPM calculation
  useEffect(() => {
    const elapsed = (Date.now() - startTime.current) / 1000 / 60;
    if (elapsed > 0) setWpm(Math.round(correct / elapsed));
  }, [correct]);

  const handleInput = useCallback(
    (value: string) => {
      setInput(value);
      const trimmed = value.trim().toLowerCase();

      setWords((prev) => {
        const matchIdx = prev.findIndex((w) => w.word.toLowerCase() === trimmed);
        if (matchIdx !== -1) {
          const matched = prev[matchIdx]!;
          setScore((s) => s + (matched.points ?? 100) + streak * 15);
          setStreak((s) => s + 1);
          setCorrect((c) => c + 1);
          setTyped((t) => t + 1);
          setInput("");
          return prev.filter((_, i) => i !== matchIdx);
        }
        return prev;
      });
    },
    [streak],
  );

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const total = correct + missed;
      const maxScore = total * 150 || 1;
      onComplete({
        score,
        maxScore: Math.max(score, maxScore),
        stars: calculateStars(correct, total || 1),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, correct, missed, level, difficulty, onComplete]);

  const pct = clamp(timeLeft / settings.duration, 0, 1);

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-2 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>{wpm} WPM</span>
        {streak > 2 && <span className="text-amber-500">🔥 {streak}</span>}
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      {/* Word field */}
      <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-stone-50 to-stone-100 shadow-inner">
        <AnimatePresence>
          {words.map((w) => {
            const inputLower = input.trim().toLowerCase();
            const wordLower = w.word.toLowerCase();
            const isPartial = inputLower.length > 0 && wordLower.startsWith(inputLower);

            return (
              <motion.div
                key={w.key}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className={`absolute rounded-lg px-3 py-1 text-sm font-bold shadow-md ${
                  isPartial
                    ? "bg-sky-400 text-white"
                    : "bg-white text-stone-700"
                }`}
                style={{
                  left: `${w.x}%`,
                  top: `${clamp(w.y, 0, 95)}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {isPartial ? (
                  <>
                    <span className="underline">{w.word.slice(0, inputLower.length)}</span>
                    {w.word.slice(inputLower.length)}
                  </>
                ) : (
                  w.word
                )}
                {w.hint && (
                  <span className="ml-1 text-[10px] opacity-60">({w.hint})</span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Danger zone */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-400/50" />
      </div>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => handleInput(e.target.value)}
        disabled={phase !== "playing"}
        placeholder="Type the words..."
        className="w-full rounded-xl border-2 border-stone-200 px-4 py-3 text-center text-lg font-bold text-stone-700 shadow-sm focus:border-sky-400 focus:outline-none"
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
      />

      <div className="flex gap-4 text-xs text-stone-500">
        <span>✓ {correct}</span>
        <span>✗ {missed}</span>
        <span>Level {level}</span>
      </div>
    </div>
  );
}
