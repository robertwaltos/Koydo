"use client";

import { useEffect, useMemo, useReducer, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Shuffle } from "lucide-react";
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
const WORDS = [
  "APPLE", "BEACH", "CHAIR", "DREAM", "EARTH", "FLAME", "GRAPE", "HOUSE",
  "IMAGE", "JEWEL", "KNIFE", "LEMON", "MOUNT", "NIGHT", "OCEAN", "PLANT",
  "QUILT", "RIVER", "STONE", "TOWER", "ULTRA", "VOICE", "WHALE", "YOUTH",
  "ZEBRA", "BRAIN", "CLOCK", "DANCE", "EAGLE", "FROST",
];
const TIME_LIMIT = 30;

type Phase = "ready" | "playing" | "won" | "lost";

interface State {
  phase: Phase;
  sessionId: string;
  word: string;
  scrambled: string;
  input: string;
  startTime: number;
  timeLeft: number;
  solved: number;
  interactions: number;
}

function scramble(w: string): string {
  const a = w.split("");
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a.join("") === w ? scramble(w) : a.join("");
}

const pickWord = () => WORDS[Math.floor(Math.random() * WORDS.length)]!;

const init = (): State => {
  const w = pickWord();
  return {
    phase: "ready", sessionId: createLegacySessionId(), word: w, scrambled: scramble(w),
    input: "", startTime: 0, timeLeft: TIME_LIMIT, solved: 0, interactions: 0,
  };
};

type Action =
  | { type: "START" }
  | { type: "INPUT"; value: string }
  | { type: "SUBMIT" }
  | { type: "TICK" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const w = pickWord();
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), word: w, scrambled: scramble(w), startTime: Date.now(), timeLeft: TIME_LIMIT };
    }
    case "INPUT":
      return s.phase === "playing" ? { ...s, input: a.value.toUpperCase().slice(0, s.word.length) } : s;
    case "SUBMIT": {
      if (s.phase !== "playing") return s;
      if (s.input === s.word) {
        const w = pickWord();
        return { ...s, solved: s.solved + 1, word: w, scrambled: scramble(w), input: "", interactions: s.interactions + 1 };
      }
      return { ...s, interactions: s.interactions + 1 };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      const tl = s.timeLeft - 1;
      return tl <= 0 ? { ...s, timeLeft: 0, phase: s.solved > 0 ? "won" : "lost" } : { ...s, timeLeft: tl };
    }
    default:
      return s;
  }
}

export default function GameWordScramble({ width = 400, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const inputRef = useRef<HTMLInputElement>(null);
  const isOver = s.phase === "won" || s.phase === "lost";

  const stars = useMemo(() => {
    if (!isOver) return 0;
    if (s.solved >= 5) return 3;
    if (s.solved >= 3) return 2;
    if (s.solved >= 1) return 1;
    return 0;
  }, [isOver, s.solved]);

  /* timer */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const interval = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(interval);
  }, [s.phase]);

  useEffect(() => {
    if (!isOver) return;
    if (s.phase === "won") { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-word-scramble", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.solved * 20, maxScore: 100,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [isOver]);

  /* auto-focus input */
  useEffect(() => {
    if (s.phase === "playing") inputRef.current?.focus();
  }, [s.phase, s.solved]);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="echo" mood={isOver ? (s.solved > 0 ? "happy" : "sad") : "idle"} size="sm" />
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">Solved: {s.solved}</div>
          <div className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">{s.timeLeft}s</div>
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <Shuffle className="h-12 w-12 text-indigo-500" />
          <p className="text-3xl font-bold text-slate-800">Word Scramble</p>
          <p className="text-sm text-slate-600">Unscramble as many words as you can in {TIME_LIMIT}s!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
        </div>
      )}

      {s.phase === "playing" && (
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="flex gap-2">
            {s.scrambled.split("").map((c, i) => (
              <div key={`${s.solved}-${i}`} className="flex h-12 w-10 items-center justify-center rounded-lg bg-indigo-500 text-xl font-bold text-white shadow-md">
                {c}
              </div>
            ))}
          </div>
          <input
            ref={inputRef}
            value={s.input}
            onChange={(e) => dispatch({ type: "INPUT", value: e.target.value })}
            onKeyDown={(e) => { if (e.key === "Enter") { dispatch({ type: "SUBMIT" }); hapticSelection(); } }}
            className="w-48 rounded-lg border-2 border-indigo-300 px-4 py-2 text-center text-xl font-bold uppercase tracking-widest text-slate-800 outline-none focus:border-indigo-500"
            maxLength={s.word.length}
            placeholder="Type here"
          />
          <PhysicalButton variant="primary" onClick={() => { dispatch({ type: "SUBMIT" }); hapticSelection(); }}>Submit</PhysicalButton>
        </div>
      )}

      {isOver && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2 py-4">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">{s.solved} Word{s.solved !== 1 ? "s" : ""} Solved!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
