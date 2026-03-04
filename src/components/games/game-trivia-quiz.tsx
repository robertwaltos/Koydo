"use client";

import { useEffect, useMemo, useReducer, useCallback } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, HelpCircle, CheckCircle, XCircle } from "lucide-react";
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

/* ─── trivia bank ─── */
interface Question {
  q: string;
  options: string[];
  answer: number; // index of correct
}

const QUESTIONS: Question[] = [
  { q: "What planet is closest to the Sun?", options: ["Venus", "Mercury", "Mars", "Earth"], answer: 1 },
  { q: "How many legs does an octopus have?", options: ["6", "8", "10", "12"], answer: 1 },
  { q: "What is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
  { q: "What gas do plants breathe in?", options: ["Oxygen", "Nitrogen", "CO₂", "Helium"], answer: 2 },
  { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
  { q: "What is H₂O?", options: ["Salt", "Water", "Oxygen", "Gold"], answer: 1 },
  { q: "Which planet has rings?", options: ["Mars", "Jupiter", "Saturn", "Pluto"], answer: 2 },
  { q: "What color is an emerald?", options: ["Red", "Blue", "Green", "Yellow"], answer: 2 },
  { q: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Horse", "Falcon"], answer: 1 },
  { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: 1 },
  { q: "What is the hardest natural substance?", options: ["Iron", "Diamond", "Quartz", "Gold"], answer: 1 },
  { q: "What is the boiling point of water (°C)?", options: ["90", "100", "110", "120"], answer: 1 },
  { q: "Which country has the most people?", options: ["USA", "India", "China", "Russia"], answer: 1 },
  { q: "What is the capital of France?", options: ["London", "Berlin", "Madrid", "Paris"], answer: 3 },
  { q: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"], answer: 1 },
];

const ROUNDS = 10;
type Phase = "ready" | "playing" | "result" | "done";

interface State {
  phase: Phase;
  sessionId: string;
  questions: Question[];
  current: number;
  score: number;
  answered: number | null; // selected option index for current question
  startTime: number;
  interactions: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

const init = (): State => ({
  phase: "ready", sessionId: createLegacySessionId(), questions: shuffle(QUESTIONS).slice(0, ROUNDS),
  current: 0, score: 0, answered: null, startTime: 0, interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "ANSWER"; idx: number }
  | { type: "NEXT" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), questions: shuffle(QUESTIONS).slice(0, ROUNDS), startTime: Date.now() };
    case "ANSWER": {
      if (s.phase !== "playing" || s.answered !== null) return s;
      const correct = a.idx === s.questions[s.current]!.answer;
      return { ...s, phase: "result", answered: a.idx, score: correct ? s.score + 1 : s.score, interactions: s.interactions + 1 };
    }
    case "NEXT": {
      if (s.phase !== "result") return s;
      const next = s.current + 1;
      if (next >= s.questions.length) return { ...s, phase: "done", current: next };
      return { ...s, phase: "playing", current: next, answered: null };
    }
    default:
      return s;
  }
}

export default function GameTriviaQuiz({ width = 400, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();

  const stars = useMemo(() => {
    if (s.phase !== "done") return 0;
    const pct = s.score / s.questions.length;
    if (pct >= 0.9) return 3;
    if (pct >= 0.6) return 2;
    if (pct >= 0.3) return 1;
    return 0;
  }, [s.phase, s.score, s.questions.length]);

  useEffect(() => {
    if (s.phase !== "done") return;
    if (s.score >= s.questions.length * 0.5) { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-trivia-quiz", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.score * 10, maxScore: s.questions.length * 10,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [s.phase]);

  const q = s.current < s.questions.length ? s.questions[s.current]! : null;

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="spark" mood={s.phase === "done" ? (s.score > s.questions.length / 2 ? "happy" : "sad") : "idle"} size="sm" />
        <div className="flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-sm font-bold text-purple-800">
          <HelpCircle className="h-4 w-4" /> {s.current}/{s.questions.length}
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <HelpCircle className="h-12 w-12 text-purple-500" />
          <p className="text-3xl font-bold text-slate-800">Trivia Quiz</p>
          <p className="text-sm text-slate-600">Answer {ROUNDS} questions and test your knowledge!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Quiz</PhysicalButton>
        </div>
      )}

      {(s.phase === "playing" || s.phase === "result") && q && (
        <div className="flex w-full flex-col items-center gap-4 px-2 py-4">
          <p className="text-center text-lg font-bold text-slate-800">{q.q}</p>
          <div className="flex w-full flex-col gap-2">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.answer;
              const isSelected = s.answered === i;
              let bg = "bg-white hover:bg-blue-50 border-slate-200";
              if (s.phase === "result") {
                if (isCorrect) bg = "bg-green-100 border-green-400";
                else if (isSelected) bg = "bg-red-100 border-red-400";
              }
              return (
                <button
                  key={i}
                  disabled={s.phase === "result"}
                  onClick={() => { dispatch({ type: "ANSWER", idx: i }); hapticSelection(); }}
                  className={`flex items-center gap-2 rounded-lg border-2 px-4 py-3 text-left font-semibold text-slate-800 transition ${bg}`}
                >
                  {s.phase === "result" && isCorrect && <CheckCircle className="h-5 w-5 text-green-600" />}
                  {s.phase === "result" && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                  {opt}
                </button>
              );
            })}
          </div>
          {s.phase === "result" && (
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "NEXT" })}>
              {s.current + 1 >= s.questions.length ? "See Results" : "Next Question"}
            </PhysicalButton>
          )}
        </div>
      )}

      {s.phase === "done" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2 py-4">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">{s.score}/{s.questions.length} Correct!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
