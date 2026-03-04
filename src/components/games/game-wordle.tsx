"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, RotateCcw } from "lucide-react";
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
type TileStatus = "empty" | "tbd" | "correct" | "present" | "absent";

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;
const MAX_SCORE = 600;

const WORD_LIST: string[] = [
  "apple", "brain", "chair", "dance", "eagle",
  "flame", "grape", "house", "igloo", "joker",
  "knife", "lemon", "mango", "noble", "ocean",
  "piano", "queen", "rider", "stone", "tiger",
  "ultra", "vigor", "whale", "yacht", "zebra",
  "bread", "climb", "dream", "earth", "frost",
  "globe", "heart", "ivory", "judge", "knelt",
  "light", "magic", "night", "olive", "pearl",
  "quiet", "river", "shade", "trace", "unity",
  "vault", "waste", "young", "zones", "swift",
];

const KEYBOARD_ROWS: string[][] = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACK"],
];

/* ─── types ─── */

interface TileData {
  letter: string;
  status: TileStatus;
}

interface State {
  phase: Phase;
  answer: string;
  board: TileData[][];
  currentGuess: string;
  guessCount: number;
  keyStates: Record<string, TileStatus>;
  won: boolean;
}

type Action =
  | { type: "START" }
  | { type: "ADD_LETTER"; letter: string }
  | { type: "REMOVE_LETTER" }
  | { type: "SUBMIT_GUESS" };

/* ─── helpers ─── */

function pickRandomWord(): string {
  return WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]!;
}

function emptyBoard(): TileData[][] {
  return Array.from({ length: MAX_GUESSES }, () =>
    Array.from({ length: WORD_LENGTH }, () => ({ letter: "", status: "empty" as TileStatus })),
  );
}

function evaluateGuess(guess: string, answer: string): TileStatus[] {
  const result: TileStatus[] = Array(WORD_LENGTH).fill("absent");
  const answerChars = answer.split("");
  const guessChars = guess.split("");
  const remaining: (string | null)[] = [...answerChars];

  // First pass: mark correct positions
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = "correct";
      remaining[i] = null;
    }
  }

  // Second pass: mark present letters
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i] === "correct") continue;
    const idx = remaining.indexOf(guessChars[i]!);
    if (idx !== -1) {
      result[i] = "present";
      remaining[idx] = null;
    }
  }

  return result;
}

function updateKeyStates(
  existing: Record<string, TileStatus>,
  guess: string,
  statuses: TileStatus[],
): Record<string, TileStatus> {
  const next = { ...existing };
  for (let i = 0; i < guess.length; i++) {
    const key = guess[i]!.toUpperCase();
    const newStatus = statuses[i]!;
    const current = next[key];

    if (current === "correct") continue;
    if (newStatus === "correct") {
      next[key] = "correct";
    } else if (newStatus === "present") {
      next[key] = "present";
    } else if (!current) {
      next[key] = newStatus;
    }
  }
  return next;
}

/* ─── reducer ─── */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      return {
        phase: "playing",
        answer: pickRandomWord(),
        board: emptyBoard(),
        currentGuess: "",
        guessCount: 0,
        keyStates: {},
        won: false,
      };
    }
    case "ADD_LETTER": {
      if (state.phase !== "playing") return state;
      if (state.currentGuess.length >= WORD_LENGTH) return state;
      const newGuess = state.currentGuess + action.letter.toLowerCase();
      const board = state.board.map((row) => row.map((t) => ({ ...t })));
      board[state.guessCount]![newGuess.length - 1] = {
        letter: action.letter.toUpperCase(),
        status: "tbd",
      };
      return { ...state, currentGuess: newGuess, board };
    }
    case "REMOVE_LETTER": {
      if (state.phase !== "playing") return state;
      if (state.currentGuess.length === 0) return state;
      const newGuess = state.currentGuess.slice(0, -1);
      const board = state.board.map((row) => row.map((t) => ({ ...t })));
      board[state.guessCount]![state.currentGuess.length - 1] = {
        letter: "",
        status: "empty",
      };
      return { ...state, currentGuess: newGuess, board };
    }
    case "SUBMIT_GUESS": {
      if (state.phase !== "playing") return state;
      if (state.currentGuess.length !== WORD_LENGTH) return state;

      const statuses = evaluateGuess(state.currentGuess, state.answer);
      const board = state.board.map((row) => row.map((t) => ({ ...t })));
      for (let i = 0; i < WORD_LENGTH; i++) {
        board[state.guessCount]![i] = {
          letter: state.currentGuess[i]!.toUpperCase(),
          status: statuses[i]!,
        };
      }

      const newKeyStates = updateKeyStates(state.keyStates, state.currentGuess, statuses);
      const won = state.currentGuess === state.answer;
      const newGuessCount = state.guessCount + 1;
      const isComplete = won || newGuessCount >= MAX_GUESSES;

      return {
        ...state,
        board,
        currentGuess: "",
        guessCount: newGuessCount,
        keyStates: newKeyStates,
        won,
        phase: isComplete ? "complete" : "playing",
      };
    }
    default:
      return state;
  }
}

/* ─── star calc ─── */

function calcStars(won: boolean, guessCount: number): number {
  if (!won) return 0;
  if (guessCount <= 2) return 3;
  if (guessCount <= 4) return 2;
  return 1;
}

/* ─── tile colours ─── */

function tileColorClass(status: TileStatus): string {
  switch (status) {
    case "correct":
      return "bg-emerald-500 dark:bg-emerald-600 border-emerald-500 dark:border-emerald-600 text-white";
    case "present":
      return "bg-amber-500 dark:bg-amber-600 border-amber-500 dark:border-amber-600 text-white";
    case "absent":
      return "bg-slate-500 dark:bg-slate-600 border-slate-500 dark:border-slate-600 text-white";
    case "tbd":
      return "border-slate-400 dark:border-slate-500 bg-transparent text-slate-900 dark:text-slate-100";
    default:
      return "border-slate-200 dark:border-slate-700 bg-transparent";
  }
}

function keyColorClass(status: TileStatus | undefined): string {
  switch (status) {
    case "correct":
      return "bg-emerald-500 dark:bg-emerald-600 text-white border-emerald-600";
    case "present":
      return "bg-amber-500 dark:bg-amber-600 text-white border-amber-600";
    case "absent":
      return "bg-slate-500 dark:bg-slate-600 text-white border-slate-600";
    default:
      return "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-600";
  }
}

/* ─── component ─── */

export default function GameWordle() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    answer: "",
    board: emptyBoard(),
    currentGuess: "",
    guessCount: 0,
    keyStates: {},
    won: false,
  });

  /* ─── keyboard ─── */

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (state.phase !== "playing") return;
      if (e.key === "Enter") {
        e.preventDefault();
        dispatch({ type: "SUBMIT_GUESS" });
        hapticSelection();
        return;
      }
      if (e.key === "Backspace") {
        e.preventDefault();
        dispatch({ type: "REMOVE_LETTER" });
        hapticSelection();
        return;
      }
      if (/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        dispatch({ type: "ADD_LETTER", letter: e.key });
        hapticSelection();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.phase]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;
    const stars = calcStars(state.won, state.guessCount);
    const score = state.won ? (MAX_GUESSES - state.guessCount + 1) * 100 : 0;

    if (stars >= 2) {
      hapticCelebration();
      setMood("cheering");
      setMessage("Brilliant word skills!");
    } else if (stars === 1) {
      hapticSuccess();
      setMood("happy");
      setMessage("Nice work!");
    } else {
      hapticError();
      setMood("thinking");
      setMessage(`The word was "${state.answer.toUpperCase()}"`);
    }

    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-wordle",
      score,
      maxScore: MAX_SCORE,
      elapsedMs: 0,
      interactions: state.guessCount,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.won, state.guessCount, state.answer, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Guess the 5-letter word!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── on-screen key press ─── */

  const handleKeyPress = useCallback(
    (key: string) => {
      if (state.phase !== "playing") return;
      hapticSelection();
      if (key === "ENTER") {
        dispatch({ type: "SUBMIT_GUESS" });
      } else if (key === "BACK") {
        dispatch({ type: "REMOVE_LETTER" });
      } else {
        dispatch({ type: "ADD_LETTER", letter: key });
      }
    },
    [state.phase],
  );

  const stars = calcStars(state.won, state.guessCount);
  const score = state.won ? (MAX_GUESSES - state.guessCount + 1) * 100 : 0;

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Wordle
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            Guess {state.guessCount} / {MAX_GUESSES}
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <MascotFriend id="echo" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-indigo-700 dark:text-indigo-300">
              Guess the 5-letter word in 6 tries!
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <Gamepad2 className="mr-2 inline h-4 w-4" /> Start Game
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {/* ─── PLAYING ─── */}
        {state.phase === "playing" && (
          <motion.section key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            {/* Board */}
            <div className="mx-auto flex flex-col items-center gap-1.5" role="grid" aria-label="Wordle board">
              {state.board.map((row, ri) => (
                <div key={ri} className="flex gap-1.5" role="row">
                  {row.map((tile, ci) => (
                    <motion.div
                      key={`${ri}-${ci}`}
                      animate={
                        tile.status !== "empty" && tile.status !== "tbd"
                          ? { rotateX: [0, 90, 0], transition: { delay: ci * 0.15, duration: 0.5 } }
                          : {}
                      }
                      className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 text-xl font-extrabold transition-colors sm:h-14 sm:w-14 sm:text-2xl ${tileColorClass(tile.status)}`}
                      role="gridcell"
                      aria-label={tile.letter || "empty"}
                    >
                      {tile.letter}
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>

            {/* On-screen keyboard */}
            <div className="mt-4 flex flex-col items-center gap-1.5" role="group" aria-label="Keyboard">
              {KEYBOARD_ROWS.map((row, ri) => (
                <div key={ri} className="flex gap-1">
                  {row.map((key) => {
                    const isWide = key === "ENTER" || key === "BACK";
                    const label = key === "BACK" ? "←" : key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleKeyPress(key)}
                        className={`flex h-12 items-center justify-center rounded-lg border text-xs font-bold transition-colors sm:h-14 sm:text-sm ${
                          isWide ? "px-3 sm:px-4" : "w-8 sm:w-10"
                        } ${keyColorClass(state.keyStates[key])}`}
                        aria-label={key}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ─── COMPLETE ─── */}
        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-indigo-200/40 bg-white/60 p-6 text-center dark:border-indigo-800/40 dark:bg-black/30">
            <div className="mx-auto mb-4 w-fit rounded-full border border-indigo-300/40 bg-indigo-200/20 px-4 py-2 text-sm font-bold dark:border-indigo-700/40 dark:bg-indigo-800/20">
              {state.won ? (stars >= 2 ? "Brilliant!" : "You got it!") : "Game Over"}
            </div>
            <div className="flex justify-center">
              <MascotFriend id="echo" mood={state.won ? "cheering" : "thinking"} size="lg" />
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: i < stars ? 1 : 0.5, rotate: 0, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  className="text-5xl"
                >
                  ⭐
                </motion.div>
              ))}
            </div>
            <p className="mt-3 text-sm text-indigo-800 dark:text-indigo-200">
              {state.won
                ? `Solved in ${state.guessCount} ${state.guessCount === 1 ? "guess" : "guesses"} · Score ${score}`
                : `The word was "${state.answer.toUpperCase()}" · Score ${score}`}
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <RotateCcw className="mr-2 inline h-4 w-4" /> Play Again
              </PhysicalButton>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
