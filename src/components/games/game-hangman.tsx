"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, BookOpen } from "lucide-react";
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
  "PLANET", "ORANGE", "CASTLE", "FOREST", "OCEAN", "BRIDGE", "ROCKET",
  "PUZZLE", "GARDEN", "DRAGON", "ROBOT", "CLOUD", "TIGER", "RIVER",
  "MAGIC", "STAR", "MUSIC", "EAGLE", "FLAME", "LEMON", "PEARL", "QUEST",
  "STORM", "ZEBRA", "ARROW", "BERRY", "CRANE", "DANCE", "FROST", "GRAPE",
];
const MAX_WRONG = 6;
const BODY_PARTS = ["head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"] as const;

type Phase = "ready" | "playing" | "won" | "lost";

interface State {
  phase: Phase;
  sessionId: string;
  word: string;
  guessed: Set<string>;
  wrong: number;
  startTime: number;
  interactions: number;
}

const pickWord = () => WORDS[Math.floor(Math.random() * WORDS.length)]!;

const init = (): State => ({
  phase: "ready",
  sessionId: createLegacySessionId(),
  word: pickWord(),
  guessed: new Set(),
  wrong: 0,
  startTime: 0,
  interactions: 0,
});

type Action = { type: "START" } | { type: "GUESS"; letter: string };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), word: pickWord(), startTime: Date.now() };
    case "GUESS": {
      if (s.phase !== "playing") return s;
      if (s.guessed.has(a.letter)) return s;
      const guessed = new Set(s.guessed);
      guessed.add(a.letter);
      const isCorrect = s.word.includes(a.letter);
      const wrong = isCorrect ? s.wrong : s.wrong + 1;
      const revealed = s.word.split("").every((c) => guessed.has(c));
      const lost = wrong >= MAX_WRONG;
      return { ...s, guessed, wrong, interactions: s.interactions + 1, phase: revealed ? "won" : lost ? "lost" : "playing" };
    }
    default:
      return s;
  }
}

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GameHangman({ width = 400, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const isOver = s.phase === "won" || s.phase === "lost";

  const stars = useMemo(() => {
    if (!isOver || s.phase === "lost") return 0;
    if (s.wrong === 0) return 3;
    if (s.wrong <= 2) return 2;
    return 1;
  }, [isOver, s.phase, s.wrong]);

  useEffect(() => {
    if (!isOver) return;
    if (s.phase === "won") { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-hangman", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.phase === "won" ? Math.max(0, 100 - s.wrong * 15) : 0,
      maxScore: 100, source: "component", occurredAt: new Date().toISOString(),
    });
  }, [isOver]);

  /* keyboard support */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const handler = (e: KeyboardEvent) => {
      const l = e.key.toUpperCase();
      if (ALPHA.includes(l)) dispatch({ type: "GUESS", letter: l });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [s.phase]);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="echo" mood={isOver ? (s.phase === "won" ? "happy" : "sad") : "idle"} size="sm" />
        <div className="flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-800">
          <BookOpen className="h-4 w-4" /> {MAX_WRONG - s.wrong} lives
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <p className="text-3xl font-bold text-slate-800">Hangman</p>
          <p className="text-sm text-slate-600">Guess the word letter by letter!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
        </div>
      )}

      {s.phase !== "ready" && (
        <>
          {/* gallows + body */}
          <svg viewBox="0 0 200 160" className="h-32 w-40">
            <line x1="20" y1="150" x2="80" y2="150" stroke="#334155" strokeWidth="4" />
            <line x1="50" y1="150" x2="50" y2="20" stroke="#334155" strokeWidth="4" />
            <line x1="50" y1="20" x2="120" y2="20" stroke="#334155" strokeWidth="4" />
            <line x1="120" y1="20" x2="120" y2="40" stroke="#334155" strokeWidth="4" />
            {s.wrong >= 1 && <circle cx="120" cy="52" r="12" stroke="#EF4444" strokeWidth="3" fill="none" />}
            {s.wrong >= 2 && <line x1="120" y1="64" x2="120" y2="100" stroke="#EF4444" strokeWidth="3" />}
            {s.wrong >= 3 && <line x1="120" y1="74" x2="100" y2="90" stroke="#EF4444" strokeWidth="3" />}
            {s.wrong >= 4 && <line x1="120" y1="74" x2="140" y2="90" stroke="#EF4444" strokeWidth="3" />}
            {s.wrong >= 5 && <line x1="120" y1="100" x2="100" y2="130" stroke="#EF4444" strokeWidth="3" />}
            {s.wrong >= 6 && <line x1="120" y1="100" x2="140" y2="130" stroke="#EF4444" strokeWidth="3" />}
          </svg>

          {/* word display */}
          <div className="flex gap-2">
            {s.word.split("").map((c, i) => (
              <div key={i} className="flex h-10 w-8 items-center justify-center border-b-2 border-slate-600 text-xl font-bold text-slate-800">
                {s.guessed.has(c) || isOver ? c : ""}
              </div>
            ))}
          </div>

          {/* keyboard */}
          {!isOver && (
            <div className="flex max-w-sm flex-wrap justify-center gap-1">
              {ALPHA.map((l) => (
                <button
                  key={l}
                  disabled={s.guessed.has(l)}
                  onClick={() => { dispatch({ type: "GUESS", letter: l }); hapticSelection(); }}
                  className={`h-8 w-8 rounded font-semibold text-sm transition
                    ${s.guessed.has(l)
                      ? s.word.includes(l) ? "bg-green-300 text-green-800" : "bg-red-200 text-red-500"
                      : "bg-white text-slate-700 shadow hover:bg-blue-50"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {isOver && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">{s.phase === "won" ? "Well Done!" : `The word was: ${s.word}`}</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
