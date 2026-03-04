"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calculator, RotateCcw, Trophy, Lightbulb } from "lucide-react";
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

/* ─── constants & logic ─── */

type Phase = "ready" | "playing" | "complete";
type Op = "+" | "−" | "×" | "÷";

const OPS: Op[] = ["+", "−", "×", "÷"];
const TOTAL_ROUNDS = 10;
const MAX_SCORE = TOTAL_ROUNDS;

function applyOp(a: number, op: Op, b: number): number | null {
  switch (op) {
    case "+": return a + b;
    case "−": return a - b;
    case "×": return a * b;
    case "÷": return b !== 0 && a % b === 0 ? a / b : null;
  }
}

/** Check if 24 can be made from the given numbers */
function canMake24(nums: number[]): boolean {
  if (nums.length === 1) return Math.abs(nums[0] - 24) < 0.0001;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      const rest = nums.filter((_, k) => k !== i && k !== j);
      for (const op of OPS) {
        const r = applyOp(nums[i], op, nums[j]);
        if (r !== null && r >= 0) {
          if (canMake24([r, ...rest])) return true;
        }
      }
    }
  }
  return false;
}

/** Generate 4 numbers (1-13) that CAN make 24 */
function generatePuzzle(): number[] {
  for (let attempt = 0; attempt < 500; attempt++) {
    const nums = Array.from({ length: 4 }, () => Math.floor(Math.random() * 13) + 1);
    if (canMake24(nums)) return nums;
  }
  return [1, 2, 3, 4]; // fallback — 1×2×3×4=24
}

/** Evaluate a simple expression string like "8 + 3 × 2 − 1" left-to-right */
function evalExpression(tokens: (number | Op)[]): number | null {
  if (tokens.length === 0) return null;
  let result = tokens[0] as number;
  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i] as Op;
    const b = tokens[i + 1] as number;
    if (b === undefined) return null;
    const r = applyOp(result, op, b);
    if (r === null) return null;
    result = r;
  }
  return result;
}

/* ─── state ─── */

interface State {
  phase: Phase;
  sessionId: string;
  round: number;
  numbers: number[];      // the 4 original numbers
  usedIndices: Set<number>; // indices of numbers used
  expression: (number | Op)[]; // built expression
  solved: number;
  skipped: number;
  interactions: number;
  startTime: number;
  message: string;
}

type Action =
  | { type: "START" }
  | { type: "PICK_NUMBER"; index: number }
  | { type: "PICK_OP"; op: Op }
  | { type: "UNDO" }
  | { type: "CHECK" }
  | { type: "SKIP" }
  | { type: "RESET" };

function initRound(base?: Partial<State>): State {
  return {
    phase: "playing",
    sessionId: base?.sessionId ?? createLegacySessionId(),
    round: base?.round ?? 0,
    numbers: generatePuzzle(),
    usedIndices: new Set(),
    expression: [],
    solved: base?.solved ?? 0,
    skipped: base?.skipped ?? 0,
    interactions: base?.interactions ?? 0,
    startTime: base?.startTime ?? Date.now(),
    message: "",
  };
}

function init(): State {
  return { ...initRound(), phase: "ready", startTime: 0 };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return initRound({ ...s, sessionId: createLegacySessionId(), startTime: Date.now(), round: 0, solved: 0, skipped: 0, interactions: 0 });
    case "PICK_NUMBER": {
      if (s.phase !== "playing" || s.usedIndices.has(a.index)) return s;
      // Must alternate: number, op, number, op, ...
      if (s.expression.length % 2 !== 0) return s; // expecting an op
      const next = new Set(s.usedIndices);
      next.add(a.index);
      return {
        ...s,
        usedIndices: next,
        expression: [...s.expression, s.numbers[a.index]],
        interactions: s.interactions + 1,
        message: "",
      };
    }
    case "PICK_OP": {
      if (s.phase !== "playing") return s;
      if (s.expression.length % 2 !== 1) return s; // expecting a number
      return {
        ...s,
        expression: [...s.expression, a.op],
        interactions: s.interactions + 1,
        message: "",
      };
    }
    case "UNDO": {
      if (s.expression.length === 0) return s;
      const newExpr = s.expression.slice(0, -1);
      // If we removed a number, un-use it
      const newUsed = new Set(s.usedIndices);
      if (s.expression.length % 2 === 1) {
        // last was a number — find which index it was
        const val = s.expression[s.expression.length - 1] as number;
        for (const idx of s.usedIndices) {
          if (s.numbers[idx] === val && newUsed.has(idx)) {
            // Remove the last-added matching index
            newUsed.delete(idx);
            break;
          }
        }
      }
      return { ...s, expression: newExpr, usedIndices: newUsed, message: "" };
    }
    case "CHECK": {
      if (s.usedIndices.size !== 4 || s.expression.length !== 7) {
        return { ...s, message: "Use all 4 numbers with 3 operators!" };
      }
      const result = evalExpression(s.expression);
      if (result === 24) {
        const nextRound = s.round + 1;
        if (nextRound >= TOTAL_ROUNDS) {
          return { ...s, phase: "complete", solved: s.solved + 1, message: "🎉 = 24!" };
        }
        const nr = initRound({
          ...s,
          round: nextRound,
          solved: s.solved + 1,
        });
        return nr;
      }
      return { ...s, message: `= ${result} — not 24! Try again.` };
    }
    case "SKIP": {
      const nextRound = s.round + 1;
      if (nextRound >= TOTAL_ROUNDS) {
        return { ...s, phase: "complete", skipped: s.skipped + 1 };
      }
      return initRound({ ...s, round: nextRound, skipped: s.skipped + 1 });
    }
    case "RESET":
      return init();
    default:
      return s;
  }
}

/* ─── component ─── */

const CARD_COLORS = [
  "bg-blue-500", "bg-green-500", "bg-red-500", "bg-amber-500",
];

export default function GameMake24() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();

  useEffect(() => {
    if (s.phase === "complete") {
      hapticCelebration();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "make-24",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: s.solved,
        maxScore: MAX_SCORE,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.solved]);

  const stars = useMemo(() => {
    if (s.solved >= 8) return 3;
    if (s.solved >= 5) return 2;
    if (s.solved >= 2) return 1;
    return 0;
  }, [s.solved]);

  const exprDisplay = useMemo(() => {
    return s.expression.map((t) => (typeof t === "number" ? String(t) : t)).join(" ");
  }, [s.expression]);

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-emerald-50 to-teal-50 p-6 dark:from-emerald-950/40 dark:to-teal-950/30">
      {/* header */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-emerald-500" aria-hidden />
          <h2 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">Make 24</h2>
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
          <p className="max-w-sm text-lg text-emerald-700 dark:text-emerald-300">
            Use all <span className="font-bold">4 numbers</span> with +, −, ×, ÷ to make{" "}
            <span className="text-2xl font-extrabold text-emerald-600">24</span>
          </p>
          <p className="text-sm text-emerald-500">
            {TOTAL_ROUNDS} puzzles · Evaluated left-to-right
          </p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Game
          </PhysicalButton>
        </motion.div>
      )}

      {/* ─── playing ─── */}
      {s.phase === "playing" && (
        <div className="flex w-full flex-1 flex-col items-center gap-3">
          <div className="flex w-full items-center justify-between text-sm text-emerald-600 dark:text-emerald-400">
            <span>Puzzle {s.round + 1}/{TOTAL_ROUNDS}</span>
            <span>Solved: {s.solved}</span>
          </div>

          {/* expression display */}
          <div className="flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-white px-4 text-2xl font-bold text-gray-800 shadow dark:bg-gray-800 dark:text-white">
            {exprDisplay || (
              <span className="text-base text-gray-400">Pick a number…</span>
            )}
          </div>
          {s.message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm font-semibold ${s.message.includes("24") ? "text-green-600" : "text-red-500"}`}
            >
              {s.message}
            </motion.p>
          )}

          {/* number cards */}
          <div className="flex gap-3">
            {s.numbers.map((n, i) => (
              <motion.button
                key={`${i}-${n}`}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  hapticSelection();
                  dispatch({ type: "PICK_NUMBER", index: i });
                }}
                disabled={s.usedIndices.has(i)}
                className={`flex h-16 w-16 items-center justify-center rounded-xl text-2xl font-bold text-white shadow-lg transition-opacity sm:h-20 sm:w-20 sm:text-3xl ${CARD_COLORS[i]} ${s.usedIndices.has(i) ? "opacity-30" : "opacity-100"}`}
                aria-label={`Number ${n}`}
                aria-disabled={s.usedIndices.has(i)}
              >
                {n}
              </motion.button>
            ))}
          </div>

          {/* operator buttons */}
          <div className="flex gap-2">
            {OPS.map((op) => (
              <motion.button
                key={op}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  hapticSelection();
                  dispatch({ type: "PICK_OP", op });
                }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200 text-xl font-bold text-gray-700 shadow transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                aria-label={`Operator ${op}`}
              >
                {op}
              </motion.button>
            ))}
          </div>

          {/* action buttons */}
          <div className="flex w-full gap-2">
            <PhysicalButton
              variant="secondary"
              onClick={() => dispatch({ type: "UNDO" })}
              className="flex-1"
            >
              Undo
            </PhysicalButton>
            <PhysicalButton
              variant="success"
              onClick={() => {
                const result = evalExpression(s.expression);
                if (result === 24) hapticSuccess();
                else hapticError();
                dispatch({ type: "CHECK" });
              }}
              className="flex-1"
            >
              = 24?
            </PhysicalButton>
          </div>
          <PhysicalButton
            variant="danger"
            onClick={() => {
              hapticSelection();
              dispatch({ type: "SKIP" });
            }}
            className="w-full"
          >
            <Lightbulb className="mr-1 h-4 w-4" /> Skip Puzzle
          </PhysicalButton>
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
          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">All Done!</p>
          <div className="text-5xl" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}
            {"☆".repeat(3 - stars)}
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-xl bg-white/70 p-4 text-sm dark:bg-white/10">
            <div>
              <p className="font-semibold text-green-600">Solved</p>
              <p className="text-2xl font-bold">{s.solved}</p>
            </div>
            <div>
              <p className="font-semibold text-red-500">Skipped</p>
              <p className="text-2xl font-bold">{s.skipped}</p>
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
