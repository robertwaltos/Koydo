"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Grid3X3, RotateCcw, Trophy, CheckCircle } from "lucide-react";
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

/* ─── puzzle data ─── */

interface PuzzleSet {
  groups: { name: string; color: string; words: string[] }[];
}

const PUZZLES: PuzzleSet[] = [
  {
    groups: [
      { name: "Fruits", color: "bg-yellow-400", words: ["apple", "banana", "grape", "cherry"] },
      { name: "Colors", color: "bg-green-400", words: ["red", "blue", "orange", "violet"] },
      { name: "Animals", color: "bg-blue-400", words: ["tiger", "eagle", "whale", "panda"] },
      { name: "Planets", color: "bg-purple-400", words: ["mars", "venus", "saturn", "jupiter"] },
    ],
  },
  {
    groups: [
      { name: "Weather", color: "bg-cyan-400", words: ["rain", "snow", "hail", "fog"] },
      { name: "Music", color: "bg-pink-400", words: ["drum", "piano", "guitar", "flute"] },
      { name: "Sports", color: "bg-orange-400", words: ["tennis", "soccer", "hockey", "boxing"] },
      { name: "Shapes", color: "bg-teal-400", words: ["circle", "square", "triangle", "oval"] },
    ],
  },
  {
    groups: [
      { name: "Ocean Life", color: "bg-blue-400", words: ["shark", "coral", "kelp", "starfish"] },
      { name: "Vegetables", color: "bg-green-400", words: ["carrot", "onion", "pepper", "celery"] },
      { name: "Tools", color: "bg-amber-400", words: ["hammer", "wrench", "drill", "pliers"] },
      { name: "Fabrics", color: "bg-rose-400", words: ["silk", "cotton", "denim", "velvet"] },
    ],
  },
  {
    groups: [
      { name: "Trees", color: "bg-green-500", words: ["oak", "pine", "maple", "birch"] },
      { name: "Gems", color: "bg-purple-400", words: ["ruby", "pearl", "opal", "jade"] },
      { name: "Dances", color: "bg-pink-400", words: ["waltz", "tango", "salsa", "ballet"] },
      { name: "Metals", color: "bg-gray-400", words: ["gold", "silver", "copper", "iron"] },
    ],
  },
  {
    groups: [
      { name: "Insects", color: "bg-lime-400", words: ["beetle", "wasp", "moth", "cricket"] },
      { name: "Desserts", color: "bg-rose-300", words: ["cake", "brownie", "cookie", "sundae"] },
      { name: "Countries", color: "bg-sky-400", words: ["brazil", "japan", "egypt", "france"] },
      { name: "Rooms", color: "bg-amber-300", words: ["kitchen", "attic", "cellar", "closet"] },
    ],
  },
  {
    groups: [
      { name: "Flowers", color: "bg-pink-300", words: ["rose", "daisy", "tulip", "lily"] },
      { name: "Birds", color: "bg-sky-300", words: ["robin", "hawk", "owl", "wren"] },
      { name: "Rivers", color: "bg-blue-400", words: ["nile", "amazon", "thames", "ganges"] },
      { name: "Spices", color: "bg-orange-400", words: ["cumin", "basil", "sage", "thyme"] },
    ],
  },
];

type Phase = "ready" | "playing" | "complete";

/* ─── helpers ─── */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── state ─── */

interface SolvedGroup {
  name: string;
  color: string;
  words: string[];
}

interface State {
  phase: Phase;
  sessionId: string;
  puzzle: PuzzleSet;
  words: string[]; // shuffled remaining words
  selected: Set<string>;
  solved: SolvedGroup[];
  mistakes: number;
  maxMistakes: number;
  interactions: number;
  startTime: number;
  message: string;
}

type Action =
  | { type: "START" }
  | { type: "TOGGLE"; word: string }
  | { type: "SUBMIT" }
  | { type: "SHUFFLE" }
  | { type: "RESET" };

function init(): State {
  const puzzle = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
  const allWords = puzzle.groups.flatMap((g) => g.words);
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    puzzle,
    words: shuffle(allWords),
    selected: new Set(),
    solved: [],
    mistakes: 0,
    maxMistakes: 4,
    interactions: 0,
    startTime: 0,
    message: "",
  };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const st = init();
      return { ...st, phase: "playing", startTime: Date.now() };
    }
    case "TOGGLE": {
      if (s.phase !== "playing") return s;
      const next = new Set(s.selected);
      if (next.has(a.word)) next.delete(a.word);
      else if (next.size < 4) next.add(a.word);
      return { ...s, selected: next, interactions: s.interactions + 1, message: "" };
    }
    case "SUBMIT": {
      if (s.selected.size !== 4) return { ...s, message: "Select exactly 4 words!" };
      // Check if selection matches any unsolved group
      const sel = Array.from(s.selected);
      const matchingGroup = s.puzzle.groups.find(
        (g) =>
          !s.solved.some((sg) => sg.name === g.name) &&
          g.words.every((w) => s.selected.has(w)),
      );
      if (matchingGroup) {
        const newSolved = [...s.solved, { name: matchingGroup.name, color: matchingGroup.color, words: matchingGroup.words }];
        const remainingWords = s.words.filter((w) => !matchingGroup.words.includes(w));
        const done = newSolved.length === 4;
        return {
          ...s,
          solved: newSolved,
          words: remainingWords,
          selected: new Set(),
          phase: done ? "complete" : s.phase,
          message: `✓ ${matchingGroup.name}!`,
          interactions: s.interactions + 1,
        };
      }
      // Check how close — how many from best group?
      let bestCount = 0;
      for (const g of s.puzzle.groups) {
        if (s.solved.some((sg) => sg.name === g.name)) continue;
        const count = g.words.filter((w) => s.selected.has(w)).length;
        bestCount = Math.max(bestCount, count);
      }
      const newMistakes = s.mistakes + 1;
      if (newMistakes >= s.maxMistakes) {
        return { ...s, phase: "complete", mistakes: newMistakes, selected: new Set(), message: "Too many mistakes!" };
      }
      return {
        ...s,
        mistakes: newMistakes,
        selected: new Set(),
        message: bestCount === 3 ? "So close! One away…" : "Not quite — try again!",
        interactions: s.interactions + 1,
      };
    }
    case "SHUFFLE":
      return { ...s, words: shuffle(s.words) };
    case "RESET":
      return init();
    default:
      return s;
  }
}

/* ─── component ─── */

export default function GameConnections() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();

  useEffect(() => {
    if (s.phase === "complete") {
      if (s.solved.length === 4) hapticCelebration();
      else hapticError();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "connections",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: s.solved.length,
        maxScore: 4,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.solved.length]);

  const toggle = useCallback((word: string) => {
    hapticSelection();
    dispatch({ type: "TOGGLE", word });
  }, []);

  const submit = useCallback(() => {
    dispatch({ type: "SUBMIT" });
  }, []);

  const stars = useMemo(() => {
    if (s.solved.length === 4 && s.mistakes === 0) return 3;
    if (s.solved.length === 4 && s.mistakes <= 2) return 2;
    if (s.solved.length >= 2) return 1;
    return 0;
  }, [s.solved.length, s.mistakes]);

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-violet-50 to-fuchsia-50 p-6 dark:from-violet-950/40 dark:to-fuchsia-950/30">
      {/* header */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Grid3X3 className="h-6 w-6 text-violet-500" aria-hidden />
          <h2 className="text-xl font-bold text-violet-700 dark:text-violet-300">Connections</h2>
        </div>
        <MascotFriend id="echo" mood="happy" size="sm" />
      </div>

      {/* ─── ready ─── */}
      {s.phase === "ready" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-col items-center gap-6 text-center"
        >
          <p className="max-w-sm text-lg text-violet-700 dark:text-violet-300">
            Group <span className="font-bold">16 words</span> into{" "}
            <span className="font-bold">4 categories</span> of 4!
          </p>
          <p className="text-sm text-violet-500">
            Select 4 words, then submit · {s.maxMistakes} mistakes allowed
          </p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Puzzle
          </PhysicalButton>
        </motion.div>
      )}

      {/* ─── playing ─── */}
      {s.phase === "playing" && (
        <div className="flex w-full flex-1 flex-col items-center gap-3">
          {/* solved groups */}
          <AnimatePresence>
            {s.solved.map((g) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className={`flex w-full flex-col items-center rounded-xl py-2 text-white ${g.color}`}
              >
                <p className="text-sm font-bold">{g.name}</p>
                <p className="text-xs">{g.words.join(", ")}</p>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* word grid */}
          <div className="grid w-full grid-cols-4 gap-2">
            {s.words.map((word) => (
              <motion.button
                key={word}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggle(word)}
                className={`rounded-xl border-2 px-2 py-3 text-sm font-semibold capitalize transition-colors sm:text-base ${
                  s.selected.has(word)
                    ? "border-violet-500 bg-violet-500 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-violet-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                }`}
                aria-pressed={s.selected.has(word)}
              >
                {word}
              </motion.button>
            ))}
          </div>

          {/* status & message */}
          <div className="flex w-full items-center justify-between text-sm">
            <span className="text-violet-600 dark:text-violet-400">
              Mistakes: {s.mistakes}/{s.maxMistakes}
            </span>
            <span className="text-violet-600 dark:text-violet-400">
              Selected: {s.selected.size}/4
            </span>
          </div>

          {s.message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm font-semibold ${s.message.startsWith("✓") ? "text-green-600" : "text-amber-600"}`}
            >
              {s.message}
            </motion.p>
          )}

          {/* action buttons */}
          <div className="flex w-full gap-2">
            <PhysicalButton
              variant="secondary"
              onClick={() => dispatch({ type: "SHUFFLE" })}
              className="flex-1"
            >
              Shuffle
            </PhysicalButton>
            <PhysicalButton
              variant="success"
              onClick={() => {
                const isRight = s.puzzle.groups.some(
                  (g) =>
                    !s.solved.some((sg) => sg.name === g.name) &&
                    g.words.every((w) => s.selected.has(w)),
                );
                if (isRight) hapticSuccess();
                else hapticError();
                submit();
              }}
              disabled={s.selected.size !== 4}
              className="flex-1"
            >
              <CheckCircle className="mr-1 h-4 w-4" /> Submit
            </PhysicalButton>
          </div>
        </div>
      )}

      {/* ─── complete ─── */}
      {s.phase === "complete" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col items-center gap-4 text-center"
        >
          <Trophy className="h-12 w-12 text-amber-500" />
          <p className="text-2xl font-bold text-violet-700 dark:text-violet-300">
            {s.solved.length === 4 ? "Brilliant!" : "Game Over"}
          </p>
          <div className="text-5xl" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}
            {"☆".repeat(3 - stars)}
          </div>

          {/* show all groups */}
          <div className="flex w-full flex-col gap-2">
            {s.puzzle.groups.map((g) => (
              <div
                key={g.name}
                className={`flex flex-col items-center rounded-xl py-2 text-white ${g.color}`}
              >
                <p className="text-sm font-bold">{g.name}</p>
                <p className="text-xs">{g.words.join(", ")}</p>
              </div>
            ))}
          </div>

          <div className="text-sm text-violet-600 dark:text-violet-400">
            Groups found: {s.solved.length}/4 · Mistakes: {s.mistakes}
          </div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "RESET" })}>
            <RotateCcw className="mr-2 h-4 w-4" /> New Puzzle
          </PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
