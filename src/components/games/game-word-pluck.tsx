"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Type, RotateCcw, Trophy, Heart } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticError,
  hapticSelection,
  hapticSuccess,
  hapticCelebration,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── constants ─── */

type Phase = "ready" | "playing" | "complete";

const WORDS = [
  "sun", "moon", "star", "tree", "bird", "fish", "frog", "rain", "book", "cake",
  "lamp", "road", "ship", "bell", "fire", "lake", "rock", "leaf", "seed", "wave",
  "sand", "snow", "wind", "hill", "pond", "nest", "hive", "claw", "paws", "mane",
  "beak", "wing", "tail", "horn", "reef", "cave", "peak", "dawn", "dusk", "glow",
  "beam", "mist", "dew", "fog", "haze", "bolt", "arch", "dome", "fort", "maze",
  "park", "farm", "barn", "shed", "well", "pier", "dock", "kite", "drum", "flute",
  "harp", "poem", "tale", "myth", "fable", "hero", "quest", "crown", "realm", "tower",
  "magic", "dream", "cloud", "ocean", "river", "forest", "garden", "island",
  "planet", "comet", "orbit", "galaxy", "nature", "bloom", "coral", "crystal",
];

const FALL_DURATION_BASE = 6000; // ms to fall from top to bottom
const FALL_SPEED_INCREASE = 150; // ms faster per level
const SPAWN_INTERVAL_BASE = 2500;
const SPAWN_INTERVAL_MIN = 1200;
const MAX_LIVES = 5;
const ARENA_HEIGHT = 400;
const MAX_SCORE = 50;

interface FallingWord {
  id: number;
  word: string;
  x: number; // % from left
  startTime: number;
  duration: number;
}

/* ─── state ─── */

interface State {
  phase: Phase;
  sessionId: string;
  words: FallingWord[];
  typedText: string;
  score: number;
  lives: number;
  level: number;
  wordsCleared: number;
  interactions: number;
  startTime: number;
  nextId: number;
}

type Action =
  | { type: "START" }
  | { type: "TYPE"; text: string }
  | { type: "SPAWN" }
  | { type: "MISS"; id: number }
  | { type: "TICK" }
  | { type: "RESET" };

function init(): State {
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    words: [],
    typedText: "",
    score: 0,
    lives: MAX_LIVES,
    level: 1,
    wordsCleared: 0,
    interactions: 0,
    startTime: 0,
    nextId: 0,
  };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", startTime: Date.now(), sessionId: createLegacySessionId() };
    case "SPAWN": {
      if (s.phase !== "playing") return s;
      const word = WORDS[Math.floor(Math.random() * WORDS.length)];
      const x = 10 + Math.floor(Math.random() * 75); // 10-85%
      const duration = Math.max(2500, FALL_DURATION_BASE - s.level * FALL_SPEED_INCREASE);
      const fw: FallingWord = { id: s.nextId, word, x, startTime: Date.now(), duration };
      return { ...s, words: [...s.words, fw], nextId: s.nextId + 1 };
    }
    case "TYPE": {
      if (s.phase !== "playing") return s;
      const text = a.text.toLowerCase().trim();

      // Check if typed text matches any falling word
      const matchIdx = s.words.findIndex((w) => w.word === text);
      if (matchIdx !== -1) {
        const newWords = s.words.filter((_, i) => i !== matchIdx);
        const newCleared = s.wordsCleared + 1;
        const newLevel = Math.floor(newCleared / 5) + 1;
        return {
          ...s,
          words: newWords,
          typedText: "",
          score: s.score + 1,
          wordsCleared: newCleared,
          level: newLevel,
          interactions: s.interactions + 1,
        };
      }

      return { ...s, typedText: text, interactions: s.interactions + 1 };
    }
    case "MISS": {
      const newWords = s.words.filter((w) => w.id !== a.id);
      const newLives = s.lives - 1;
      if (newLives <= 0) {
        return { ...s, words: newWords, lives: 0, phase: "complete" };
      }
      return { ...s, words: newWords, lives: newLives };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      const now = Date.now();
      const expired = s.words.filter((w) => now - w.startTime >= w.duration);
      if (expired.length === 0) return s;
      let newWords = s.words.filter((w) => now - w.startTime < w.duration);
      let newLives = s.lives - expired.length;
      if (newLives <= 0) {
        return { ...s, words: [], lives: 0, phase: "complete" };
      }
      return { ...s, words: newWords, lives: newLives };
    }
    case "RESET":
      return init();
    default:
      return s;
  }
}

/* ─── component ─── */

export default function GameWordPluck() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const inputRef = useRef<HTMLInputElement>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const spawnRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Tick loop — check for expired words
  useEffect(() => {
    if (s.phase === "playing") {
      tickRef.current = setInterval(() => dispatch({ type: "TICK" }), 200);
    }
    return () => { if (tickRef.current) clearInterval(tickRef.current); };
  }, [s.phase]);

  // Spawn loop
  useEffect(() => {
    if (s.phase === "playing") {
      const interval = Math.max(SPAWN_INTERVAL_MIN, SPAWN_INTERVAL_BASE - s.level * 100);
      // Initial spawn
      dispatch({ type: "SPAWN" });
      spawnRef.current = setInterval(() => dispatch({ type: "SPAWN" }), interval);
    }
    return () => { if (spawnRef.current) clearInterval(spawnRef.current); };
  }, [s.phase, s.level]);

  // Focus input on play
  useEffect(() => {
    if (s.phase === "playing") inputRef.current?.focus();
  }, [s.phase]);

  // Complete
  useEffect(() => {
    if (s.phase === "complete") {
      hapticCelebration();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "word-pluck",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: s.score,
        maxScore: MAX_SCORE,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.score]);

  const handleChange = useCallback((text: string) => {
    dispatch({ type: "TYPE", text });
  }, []);

  const stars = useMemo(() => {
    if (s.score >= 40) return 3;
    if (s.score >= 20) return 2;
    if (s.score >= 8) return 1;
    return 0;
  }, [s.score]);

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-cyan-50 to-blue-50 p-6 dark:from-cyan-950/40 dark:to-blue-950/30">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Type className="h-6 w-6 text-cyan-500" aria-hidden />
          <h2 className="text-xl font-bold text-cyan-700 dark:text-cyan-300">Word Pluck</h2>
        </div>
        <MascotFriend id="echo" mood="happy" size="sm" />
      </div>

      {s.phase === "ready" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-col items-center gap-6 text-center"
        >
          <p className="max-w-sm text-lg text-cyan-700 dark:text-cyan-300">
            Words fall from the sky — <span className="font-bold">type them</span> before they
            reach the bottom!
          </p>
          <p className="text-sm text-cyan-500">{MAX_LIVES} lives · Gets faster as you level up</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Game
          </PhysicalButton>
        </motion.div>
      )}

      {s.phase === "playing" && (
        <div className="flex w-full flex-1 flex-col items-center gap-2">
          {/* status bar */}
          <div className="flex w-full items-center justify-between text-sm text-cyan-600 dark:text-cyan-400">
            <span className="flex items-center gap-1">
              {Array.from({ length: MAX_LIVES }, (_, i) => (
                <Heart
                  key={i}
                  className={`h-4 w-4 ${i < s.lives ? "fill-red-500 text-red-500" : "text-gray-300 dark:text-gray-600"}`}
                />
              ))}
            </span>
            <span>Level {s.level}</span>
            <span>Score: {s.score}</span>
          </div>

          {/* falling arena */}
          <div
            className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-sky-100 to-sky-300 dark:from-sky-900 dark:to-sky-950"
            style={{ height: ARENA_HEIGHT }}
          >
            <AnimatePresence>
              {s.words.map((fw) => {
                const elapsed = Date.now() - fw.startTime;
                const pct = Math.min(1, elapsed / fw.duration);
                const isHighlighted = fw.word.startsWith(s.typedText) && s.typedText.length > 0;
                return (
                  <motion.div
                    key={fw.id}
                    initial={{ top: -30 }}
                    animate={{ top: ARENA_HEIGHT }}
                    transition={{ duration: fw.duration / 1000, ease: "linear" }}
                    exit={{ opacity: 0, scale: 1.3 }}
                    className={`absolute rounded-lg px-2 py-1 text-sm font-bold shadow-md ${
                      isHighlighted
                        ? "bg-yellow-300 text-yellow-900"
                        : "bg-white text-gray-800 dark:bg-gray-700 dark:text-white"
                    }`}
                    style={{ left: `${fw.x}%` }}
                  >
                    {fw.word}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* bottom danger zone */}
            <div className="absolute bottom-0 h-2 w-full bg-red-500/40" />
          </div>

          {/* input */}
          <input
            ref={inputRef}
            type="text"
            value={s.typedText}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Type the word..."
            className="w-full rounded-xl border-2 border-cyan-300 bg-white px-4 py-3 text-center text-lg font-bold text-gray-800 shadow focus:border-cyan-500 focus:outline-none dark:border-cyan-600 dark:bg-gray-800 dark:text-white"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </div>
      )}

      {s.phase === "complete" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col items-center gap-4 text-center"
        >
          <Trophy className="h-12 w-12 text-amber-500" />
          <p className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">Game Over!</p>
          <div className="text-5xl" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}{"☆".repeat(3 - stars)}
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-xl bg-white/70 p-4 text-sm dark:bg-white/10">
            <div>
              <p className="font-semibold text-cyan-600">Words Typed</p>
              <p className="text-2xl font-bold">{s.score}</p>
            </div>
            <div>
              <p className="font-semibold text-cyan-600">Level Reached</p>
              <p className="text-2xl font-bold">{s.level}</p>
            </div>
          </div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "RESET" })}>
            <RotateCcw className="mr-2 h-4 w-4" /> Play Again
          </PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
