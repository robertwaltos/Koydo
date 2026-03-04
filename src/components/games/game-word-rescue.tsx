"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, RotateCcw, Trophy } from "lucide-react";
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

type Phase = "ready" | "playing" | "won" | "lost";

const MAX_WRONG = 6;
const MAX_SCORE = 10000;

/* child-safe word bank — common nouns, animals, nature, school */
const WORD_BANK = [
  "rainbow", "dolphin", "garden", "planet", "castle", "dragon", "forest",
  "kitten", "rocket", "island", "puzzle", "bridge", "flower", "turtle",
  "rabbit", "sunset", "breeze", "meadow", "parrot", "pencil", "eraser",
  "harbor", "candle", "marble", "bumble", "nestle", "joyful", "gentle",
  "basket", "blanket", "cherry", "stream", "walrus", "osprey", "falcon",
  "spider", "monkey", "pebble", "cactus", "bamboo", "mango", "lemon",
  "coral", "storm", "cloud", "starry", "comet", "orbit", "lunar",
  "music", "piano", "guitar", "violin", "flute", "drums", "dance",
  "ocean", "river", "creek", "marsh", "delta", "cliff", "ridge",
  "tiger", "eagle", "whale", "otter", "panda", "koala", "sloth",
  "cider", "berry", "peach", "grape", "olive", "maple", "birch",
  "solar", "frost", "spark", "flame", "ember", "blaze", "glow",
  "quest", "brave", "swift", "noble", "vivid", "dream", "scope",
];

const BODY_PARTS = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg"] as const;

/* ─── helpers ─── */

function pickWord(): string {
  return WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)]!;
}

/* ─── state ─── */

interface State {
  phase: Phase;
  word: string;
  guessed: Set<string>;
  wrong: number;
  startTime: number;
}

type Action =
  | { type: "START" }
  | { type: "GUESS"; letter: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return { phase: "playing", word: pickWord(), guessed: new Set(), wrong: 0, startTime: Date.now() };
    case "GUESS": {
      if (state.phase !== "playing") return state;
      const letter = action.letter.toLowerCase();
      if (state.guessed.has(letter)) return state;
      const next = new Set(state.guessed);
      next.add(letter);
      const inWord = state.word.includes(letter);
      const newWrong = inWord ? state.wrong : state.wrong + 1;
      // check win
      const allRevealed = [...state.word].every((ch) => next.has(ch));
      if (allRevealed) return { ...state, guessed: next, wrong: newWrong, phase: "won" };
      if (newWrong >= MAX_WRONG) return { ...state, guessed: next, wrong: newWrong, phase: "lost" };
      return { ...state, guessed: next, wrong: newWrong };
    }
    default:
      return state;
  }
}

/* ─── stars ─── */

function calcStars(wrong: number, won: boolean): number {
  if (!won) return 0;
  if (wrong <= 1) return 3;
  if (wrong <= 3) return 2;
  return 1;
}

/* ─── stick figure component ─── */

function StickFigure({ wrong }: { wrong: number }) {
  return (
    <svg viewBox="0 0 120 140" className="mx-auto h-36 w-32" aria-label={`${wrong} of ${MAX_WRONG} incorrect guesses`}>
      {/* gallows */}
      <line x1="10" y1="130" x2="110" y2="130" stroke="currentColor" strokeWidth="3" className="text-amber-700 dark:text-amber-400" />
      <line x1="30" y1="130" x2="30" y2="10" stroke="currentColor" strokeWidth="3" className="text-amber-700 dark:text-amber-400" />
      <line x1="30" y1="10" x2="80" y2="10" stroke="currentColor" strokeWidth="3" className="text-amber-700 dark:text-amber-400" />
      <line x1="80" y1="10" x2="80" y2="25" stroke="currentColor" strokeWidth="3" className="text-amber-700 dark:text-amber-400" />

      {/* head */}
      {wrong >= 1 && <circle cx="80" cy="35" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-rose-500 dark:text-rose-400" />}
      {/* body */}
      {wrong >= 2 && <line x1="80" y1="45" x2="80" y2="80" stroke="currentColor" strokeWidth="2.5" className="text-rose-500 dark:text-rose-400" />}
      {/* left arm */}
      {wrong >= 3 && <line x1="80" y1="55" x2="60" y2="70" stroke="currentColor" strokeWidth="2.5" className="text-rose-500 dark:text-rose-400" />}
      {/* right arm */}
      {wrong >= 4 && <line x1="80" y1="55" x2="100" y2="70" stroke="currentColor" strokeWidth="2.5" className="text-rose-500 dark:text-rose-400" />}
      {/* left leg */}
      {wrong >= 5 && <line x1="80" y1="80" x2="60" y2="105" stroke="currentColor" strokeWidth="2.5" className="text-rose-500 dark:text-rose-400" />}
      {/* right leg */}
      {wrong >= 6 && <line x1="80" y1="80" x2="100" y2="105" stroke="currentColor" strokeWidth="2.5" className="text-rose-500 dark:text-rose-400" />}
    </svg>
  );
}

/* ─── keyboard ─── */

const KEYBOARD_ROWS = [
  "qwertyuiop".split(""),
  "asdfghjkl".split(""),
  "zxcvbnm".split(""),
];

/* ─── component ─── */

export default function GameWordRescue() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    word: "",
    guessed: new Set<string>(),
    wrong: 0,
    startTime: 0,
  });

  /* ─── keyboard listener ─── */

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (state.phase !== "playing") return;
      if (/^[a-zA-Z]$/.test(e.key)) {
        dispatch({ type: "GUESS", letter: e.key });
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.phase]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "won" && state.phase !== "lost") return;
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    const won = state.phase === "won";
    const stars = calcStars(state.wrong, won);
    if (won && stars >= 2) { hapticCelebration(); setMood("cheering"); setMessage("Word rescued! Amazing!"); }
    else if (won) { hapticSuccess(); setMood("happy"); setMessage("Great job!"); }
    else { hapticError(); setMood("sad"); setMessage(`The word was "${state.word}". Try again!`); }
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-word-rescue",
      score: won ? Math.max(1000, MAX_SCORE - state.wrong * 1500) : 0,
      maxScore: MAX_SCORE,
      elapsedMs: Date.now() - state.startTime,
      interactions: Math.max(1, state.guessed.size),
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.wrong, state.word, state.guessed.size, state.startTime, setMessage, setMood]);

  /* ─── actions ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Guess the word letter by letter!");
    hapticSelection();
  }, [setMessage, setMood]);

  const guessLetter = useCallback(
    (letter: string) => {
      if (state.phase !== "playing") return;
      hapticSelection();
      dispatch({ type: "GUESS", letter });
    },
    [state.phase],
  );

  const stars = calcStars(state.wrong, state.phase === "won");
  const wordDisplay = state.phase === "lost"
    ? [...state.word]
    : [...state.word].map((ch) => (state.guessed.has(ch) ? ch : "_"));

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-emerald-900 dark:text-emerald-100">
          <BookOpen className="h-6 w-6" /> Word Rescue
        </h2>
        {state.phase === "playing" && (
          <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-300">
            {MAX_WRONG - state.wrong} guesses remaining
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <MascotFriend id="echo" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-emerald-700 dark:text-emerald-300">
              Guess the hidden word one letter at a time. Too many wrong guesses and the word is lost!
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <BookOpen className="mr-2 inline h-4 w-4" /> Start Game
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {/* ─── PLAYING ─── */}
        {state.phase === "playing" && (
          <motion.section key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-4">
            {/* Stick figure */}
            <StickFigure wrong={state.wrong} />

            {/* Word display */}
            <div className="flex flex-wrap justify-center gap-2" aria-label="Word to guess">
              {wordDisplay.map((ch, i) => (
                <motion.span
                  key={i}
                  initial={ch !== "_" ? { scale: 0.5, opacity: 0 } : {}}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`inline-flex h-10 w-8 items-center justify-center rounded-lg border-b-4 text-2xl font-extrabold uppercase ${
                    ch === "_"
                      ? "border-emerald-400/60 bg-emerald-100/40 text-emerald-400 dark:border-emerald-600/40 dark:bg-emerald-900/20 dark:text-emerald-500"
                      : "border-emerald-500 bg-emerald-200/60 text-emerald-900 dark:border-emerald-400 dark:bg-emerald-800/40 dark:text-emerald-100"
                  }`}
                  aria-label={ch === "_" ? "Hidden letter" : ch}
                >
                  {ch}
                </motion.span>
              ))}
            </div>

            {/* Keyboard */}
            <div className="space-y-1.5">
              {KEYBOARD_ROWS.map((row, ri) => (
                <div key={ri} className="flex justify-center gap-1">
                  {row.map((letter) => {
                    const used = state.guessed.has(letter);
                    const inWord = state.word.includes(letter);
                    return (
                      <button
                        key={letter}
                        type="button"
                        onClick={() => guessLetter(letter)}
                        disabled={used}
                        className={`flex h-10 w-8 items-center justify-center rounded-lg text-sm font-bold uppercase transition-all sm:h-11 sm:w-9 sm:text-base ${
                          used && inWord
                            ? "bg-emerald-400 text-white dark:bg-emerald-600"
                            : used
                              ? "bg-slate-300/60 text-slate-400 dark:bg-slate-700/40 dark:text-slate-600"
                              : "bg-white/80 text-emerald-900 shadow-sm hover:bg-emerald-100 active:scale-90 dark:bg-slate-800/60 dark:text-emerald-100 dark:hover:bg-emerald-900/40"
                        }`}
                        aria-label={`Guess letter ${letter}`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ─── WON / LOST ─── */}
        {(state.phase === "won" || state.phase === "lost") && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-emerald-200/40 bg-white/60 p-6 text-center dark:border-emerald-800/40 dark:bg-black/30">
            <div className="mx-auto mb-4 w-fit rounded-full border border-emerald-300/40 bg-emerald-200/20 px-4 py-2 text-sm font-bold dark:border-emerald-700/40 dark:bg-emerald-800/20">
              {state.phase === "won" ? "🎉 Word Rescued!" : "💔 Word Lost!"}
            </div>
            <div className="flex justify-center">
              <MascotFriend id="echo" mood={state.phase === "won" ? "cheering" : "sad"} size="lg" />
            </div>
            {/* Show the word */}
            <p className="mt-3 text-2xl font-extrabold uppercase tracking-widest text-emerald-800 dark:text-emerald-200">
              {state.word}
            </p>
            {/* Stars */}
            <div className="mt-3 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0, rotate: -20 }} animate={{ scale: i < stars ? 1 : 0.5, rotate: 0, opacity: i < stars ? 1 : 0.3 }} transition={{ delay: i * 0.2, type: "spring" }} className="text-5xl">⭐</motion.div>
              ))}
            </div>
            <p className="mt-3 text-sm text-emerald-800 dark:text-emerald-200">
              {state.guessed.size} letters guessed · {state.wrong} wrong
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
