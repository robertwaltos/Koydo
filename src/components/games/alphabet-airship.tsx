"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Wind } from "lucide-react";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import { useMascot } from "@/components/experience/MascotHost";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "complete";

type Puzzle = {
  clue: string;
  answer: string;
};

const PUZZLES: Puzzle[] = [
  { clue: "A small flying insect that makes honey", answer: "BEE" },
  { clue: "A red fruit often used in pies", answer: "APPLE" },
  { clue: "A huge animal with a trunk", answer: "ELEPHANT" },
  { clue: "A bright object in the night sky", answer: "STAR" },
  { clue: "A warm season after spring", answer: "SUMMER" },
  { clue: "A place where children read books", answer: "LIBRARY" },
  { clue: "A planet known as the Red Planet", answer: "MARS" },
  { clue: "A water vehicle with sails", answer: "BOAT" },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function buildOptions(answerLetter: string, seed: string): string[] {
  const letters = new Set<string>([answerLetter]);
  let cursor = seed.charCodeAt(0) + seed.length;
  while (letters.size < 4) {
    cursor = (cursor * 31 + 17) % ALPHABET.length;
    letters.add(ALPHABET[cursor]!);
  }
  return Array.from(letters).sort(() => Math.random() - 0.5);
}

function pickPuzzle(index: number): Puzzle {
  return PUZZLES[index % PUZZLES.length]!;
}

const getTimestampMs = () => new Date().getTime();

const getElapsedMs = (startedAtMs: number) => Math.max(0, getTimestampMs() - startedAtMs);

export default function AlphabetAirship() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [selected, setSelected] = useState<string | null>(null);
  const sessionIdRef = useRef<string>(createLegacySessionId());
  const runStartedAtRef = useRef<number>(0);
  const interactionCountRef = useRef<number>(0);
  const completionEmittedRef = useRef<boolean>(false);

  const resetRunTracking = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    runStartedAtRef.current = getTimestampMs();
    interactionCountRef.current = 0;
    completionEmittedRef.current = false;
  }, []);

  const puzzle = useMemo(() => pickPuzzle(level - 1), [level]);
  const hiddenIndex = useMemo(() => (level + puzzle.answer.length) % puzzle.answer.length, [level, puzzle.answer.length]);
  const answerLetter = puzzle.answer[hiddenIndex] ?? "A";
  const maskedWord =
    puzzle.answer.slice(0, hiddenIndex) +
    "_" +
    puzzle.answer.slice(hiddenIndex + 1);
  const options = useMemo(() => buildOptions(answerLetter, `${puzzle.answer}:${level}`), [answerLetter, level, puzzle.answer]);

  const start = () => {
    resetRunTracking();
    setPhase("playing");
    setMood("happy");
    setMessage("Airship launch ready. Fill each missing letter to stay on course.");
    void hapticSelection();
  };

  const restart = () => {
    resetRunTracking();
    setPhase("ready");
    setLevel(1);
    setScore(0);
    setLives(3);
    setSelected(null);
  };

  const submitLetter = (letter: string) => {
    if (phase !== "playing") return;
    interactionCountRef.current += 1;
    setSelected(letter);

    const isCorrect = letter === answerLetter;
    if (isCorrect) {
      setScore((value) => value + 10 + Math.min(20, level));
      setLevel((value) => value + 1);
      setMood("cheering");
      setMessage("Great decode. Airship altitude increased.");
      void hapticSuccess();
      return;
    }

    const nextLives = lives - 1;
    setLives(nextLives);
    setMood("sad");
    setMessage(`Turbulence hit. Correct letter was ${answerLetter}.`);
    void hapticError();

    if (nextLives <= 0) {
      if (!completionEmittedRef.current) {
        completionEmittedRef.current = true;
        emitLegacyGameComplete({
          sessionId: sessionIdRef.current,
          gameId: "alphabet-airship",
          elapsedMs: getElapsedMs(runStartedAtRef.current),
          interactions: Math.max(1, interactionCountRef.current),
          score,
          maxScore: 4200,
          source: "component",
          occurredAt: new Date().toISOString(),
        });
      }
      setPhase("complete");
    } else {
      setLevel((value) => value + 1);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-sky-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.3)_0%,transparent_60%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-5 flex items-center justify-between text-sm">
          <p className="font-black uppercase tracking-[0.25em] text-sky-200">Alphabet Airship</p>
          <p className="font-bold">Level {level} | Lives {lives} | Score {score}</p>
        </div>

        {phase === "playing" ? (
          <div className="rounded-3xl border border-white/15 bg-black/20 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">Clue</p>
            <p className="mt-1 text-lg font-bold">{puzzle.clue}</p>

            <motion.p
              key={`${puzzle.answer}:${level}`}
              initial={{ opacity: 0.3, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-5xl font-black tracking-[0.2em] text-sky-200"
            >
              {maskedWord}
            </motion.p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {options.map((letter) => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => submitLetter(letter)}
                  className="rounded-2xl border border-sky-200/30 bg-sky-500/20 py-3 text-xl font-black transition hover:bg-sky-500/30"
                >
                  {letter}
                </button>
              ))}
            </div>

            {selected ? <p className="mt-3 text-xs text-zinc-300">Last pick: {selected}</p> : null}
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {phase === "ready" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-sky-950/92 p-6 text-center"
          >
            <div className="space-y-5">
              <Wind className="mx-auto h-12 w-12 text-sky-300" />
              <h3 className="text-4xl font-black text-sky-200">Letter Flight</h3>
              <p className="max-w-md text-sm text-zinc-300">Decode missing letters through endless word rounds.</p>
              <PhysicalButton
                onClick={start}
                className="h-12 rounded-2xl border border-sky-300/30 bg-sky-500/25 px-8 font-black text-sky-100"
              >
                Start
              </PhysicalButton>
            </div>
          </motion.div>
        ) : null}

        {phase === "complete" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-sky-950/94 p-6 text-center"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-sky-200">Flight Complete</h3>
              <p className="text-sm text-zinc-300">Final score {score} at level {level}.</p>
              <PhysicalButton
                onClick={restart}
                className="h-12 rounded-2xl border border-sky-300/30 bg-sky-500/25 px-8 font-black text-sky-100"
              >
                <span className="inline-flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Restart
                </span>
              </PhysicalButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
