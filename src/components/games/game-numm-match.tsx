"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hash, RotateCcw, Trophy, Timer, Star } from "lucide-react";
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

const TABLES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const GRID_SIZE = 4; // 4x4 grid = 8 pairs
const TOTAL_PAIRS = (GRID_SIZE * GRID_SIZE) / 2;
const MAX_SCORE = 1000;

interface Card {
  id: number;
  type: "question" | "answer";
  question: string; // e.g. "3 × 7"
  answer: number;   // e.g. 21
  matched: boolean;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateCards(): Card[] {
  const pairs: { question: string; answer: number }[] = [];
  const usedAnswers = new Set<string>();
  while (pairs.length < TOTAL_PAIRS) {
    const a = TABLES[Math.floor(Math.random() * TABLES.length)];
    const b = Math.floor(Math.random() * 12) + 1;
    const key = `${Math.min(a, b)}×${Math.max(a, b)}`;
    if (usedAnswers.has(key)) continue;
    usedAnswers.add(key);
    pairs.push({ question: `${a} × ${b}`, answer: a * b });
  }

  const cards: Card[] = [];
  pairs.forEach((p, i) => {
    cards.push({ id: i * 2, type: "question", question: p.question, answer: p.answer, matched: false });
    cards.push({ id: i * 2 + 1, type: "answer", question: p.question, answer: p.answer, matched: false });
  });
  return shuffle(cards);
}

/* ─── state ─── */

interface State {
  phase: Phase;
  sessionId: string;
  cards: Card[];
  flipped: number[]; // indices of currently flipped (max 2)
  matched: number;
  attempts: number;
  interactions: number;
  startTime: number;
  elapsed: number;
  lockBoard: boolean;
}

type Action =
  | { type: "START" }
  | { type: "FLIP"; index: number }
  | { type: "CHECK_MATCH" }
  | { type: "TICK"; now: number }
  | { type: "RESET" };

function init(): State {
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    cards: generateCards(),
    flipped: [],
    matched: 0,
    attempts: 0,
    interactions: 0,
    startTime: 0,
    elapsed: 0,
    lockBoard: false,
  };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const st = init();
      return { ...st, phase: "playing", startTime: Date.now() };
    }
    case "FLIP": {
      if (s.phase !== "playing" || s.lockBoard) return s;
      if (s.flipped.includes(a.index)) return s;
      if (s.cards[a.index].matched) return s;
      if (s.flipped.length >= 2) return s;
      const newFlipped = [...s.flipped, a.index];
      const lockBoard = newFlipped.length === 2;
      return {
        ...s,
        flipped: newFlipped,
        lockBoard,
        interactions: s.interactions + 1,
      };
    }
    case "CHECK_MATCH": {
      if (s.flipped.length !== 2) return s;
      const [i1, i2] = s.flipped;
      const c1 = s.cards[i1];
      const c2 = s.cards[i2];
      const isMatch = c1.answer === c2.answer && c1.type !== c2.type;
      if (isMatch) {
        const newCards = s.cards.map((c, i) =>
          i === i1 || i === i2 ? { ...c, matched: true } : c,
        );
        const newMatched = s.matched + 1;
        const done = newMatched === TOTAL_PAIRS;
        return {
          ...s,
          cards: newCards,
          flipped: [],
          matched: newMatched,
          attempts: s.attempts + 1,
          lockBoard: false,
          phase: done ? "complete" : s.phase,
        };
      }
      return {
        ...s,
        flipped: [],
        attempts: s.attempts + 1,
        lockBoard: false,
      };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      return { ...s, elapsed: a.now - s.startTime };
    }
    case "RESET":
      return init();
    default:
      return s;
  }
}

/* ─── component ─── */

const CARD_BG = [
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-purple-400 to-purple-600",
  "from-pink-400 to-pink-600",
  "from-amber-400 to-amber-600",
  "from-cyan-400 to-cyan-600",
  "from-red-400 to-red-600",
  "from-indigo-400 to-indigo-600",
];

export default function GameNummMatch() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const checkRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (s.phase === "playing") {
      timerRef.current = setInterval(() => dispatch({ type: "TICK", now: Date.now() }), 250);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [s.phase]);

  // Check match after 2 cards flipped
  useEffect(() => {
    if (s.flipped.length === 2) {
      const c1 = s.cards[s.flipped[0]];
      const c2 = s.cards[s.flipped[1]];
      const isMatch = c1.answer === c2.answer && c1.type !== c2.type;
      if (isMatch) hapticSuccess();
      else hapticError();

      checkRef.current = setTimeout(() => dispatch({ type: "CHECK_MATCH" }), 800);
    }
    return () => {
      if (checkRef.current) clearTimeout(checkRef.current);
    };
  }, [s.flipped, s.cards]);

  useEffect(() => {
    if (s.phase === "complete") {
      hapticCelebration();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "numm-match",
        elapsedMs: s.elapsed,
        interactions: s.interactions,
        score: Math.max(0, MAX_SCORE - s.attempts * 50),
        maxScore: MAX_SCORE,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.elapsed, s.interactions, s.attempts]);

  const flip = useCallback((i: number) => {
    hapticSelection();
    dispatch({ type: "FLIP", index: i });
  }, []);

  const elapsedSec = Math.floor(s.elapsed / 1000);
  const stars = useMemo(() => {
    if (s.attempts <= TOTAL_PAIRS + 2) return 3;
    if (s.attempts <= TOTAL_PAIRS + 6) return 2;
    if (s.matched === TOTAL_PAIRS) return 1;
    return 0;
  }, [s.attempts, s.matched]);

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-pink-50 to-fuchsia-50 p-6 dark:from-pink-950/40 dark:to-fuchsia-950/30">
      {/* header */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Hash className="h-6 w-6 text-pink-500" aria-hidden />
          <h2 className="text-xl font-bold text-pink-700 dark:text-pink-300">NummMatch</h2>
        </div>
        <MascotFriend id="spark" mood="happy" size="sm" />
      </div>

      {/* ─── ready ─── */}
      {s.phase === "ready" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-col items-center gap-6 text-center"
        >
          <p className="max-w-sm text-lg text-pink-700 dark:text-pink-300">
            Match each <span className="font-bold">multiplication</span> with its{" "}
            <span className="font-bold">answer</span>!
          </p>
          <p className="text-sm text-pink-500">{TOTAL_PAIRS} pairs · Flip 2 cards at a time</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Matching
          </PhysicalButton>
        </motion.div>
      )}

      {/* ─── playing ─── */}
      {s.phase === "playing" && (
        <div className="flex w-full flex-1 flex-col items-center gap-3">
          <div className="flex w-full items-center justify-between text-sm text-pink-600 dark:text-pink-400">
            <span>
              Matched: {s.matched}/{TOTAL_PAIRS}
            </span>
            <span className="flex items-center gap-1">
              <Timer className="h-4 w-4" /> {elapsedSec}s
            </span>
            <span>Tries: {s.attempts}</span>
          </div>

          <div className={`grid w-full grid-cols-${GRID_SIZE} gap-2`} style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}>
            {s.cards.map((card, i) => {
              const isFlipped = s.flipped.includes(i) || card.matched;
              const colorIdx = Math.floor(card.id / 2) % CARD_BG.length;
              return (
                <motion.button
                  key={card.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => flip(i)}
                  disabled={isFlipped || s.lockBoard}
                  className={`flex aspect-square items-center justify-center rounded-xl text-center text-sm font-bold shadow-md transition-all sm:text-base ${
                    card.matched
                      ? "bg-green-200 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : isFlipped
                        ? `bg-gradient-to-br ${CARD_BG[colorIdx]} text-white`
                        : "bg-pink-400 text-pink-400 hover:bg-pink-500 dark:bg-pink-700 dark:text-pink-700"
                  }`}
                  aria-label={isFlipped ? (card.type === "question" ? card.question : String(card.answer)) : "Hidden card"}
                >
                  {isFlipped ? (
                    <span className="px-1">
                      {card.type === "question" ? card.question : card.answer}
                    </span>
                  ) : (
                    <Star className="h-5 w-5 opacity-50" />
                  )}
                </motion.button>
              );
            })}
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
          <p className="text-2xl font-bold text-pink-700 dark:text-pink-300">All Matched!</p>
          <div className="text-5xl" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}
            {"☆".repeat(3 - stars)}
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-xl bg-white/70 p-4 text-sm dark:bg-white/10">
            <div>
              <p className="font-semibold text-pink-600">Time</p>
              <p className="text-2xl font-bold">{elapsedSec}s</p>
            </div>
            <div>
              <p className="font-semibold text-pink-600">Attempts</p>
              <p className="text-2xl font-bold">{s.attempts}</p>
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
