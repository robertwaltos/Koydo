"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Shuffle } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

// ─── Word sets by category ─────────────────────────────────────────────────────
const ANAGRAM_SETS: Array<{ word: string; hint: string; category: string }> = [
  { word: "PLANET", hint: "Orbits a star", category: "Space" },
  { word: "COMET", hint: "Icy rock with a tail", category: "Space" },
  { word: "ORBIT", hint: "Path around a body", category: "Space" },
  { word: "ENERGY", hint: "Capacity to do work", category: "Physics" },
  { word: "MOTION", hint: "Change in position", category: "Physics" },
  { word: "FORCE", hint: "Push or pull", category: "Physics" },
  { word: "CARBON", hint: "Element #6, basis of life", category: "Chemistry" },
  { word: "OXYGEN", hint: "Breathable element", category: "Chemistry" },
  { word: "PROTON", hint: "Positive particle in nucleus", category: "Chemistry" },
  { word: "ANIMAL", hint: "Living creature", category: "Biology" },
  { word: "FUNGUS", hint: "Mushroom kingdom member", category: "Biology" },
  { word: "NERVES", hint: "Carry signals in body", category: "Biology" },
  { word: "STORM", hint: "Violent weather event", category: "Earth" },
  { word: "DELTA", hint: "River mouth landform", category: "Earth" },
  { word: "MAGMA", hint: "Molten rock underground", category: "Earth" },
  { word: "PRIMES", hint: "Only divisible by 1 and itself", category: "Math" },
  { word: "VECTOR", hint: "Has magnitude and direction", category: "Math" },
  { word: "MATRIX", hint: "Grid of numbers", category: "Math" },
  { word: "LAYERS", hint: "Stacked levels or strata", category: "General" },
  { word: "SIGNAL", hint: "Transmitted information", category: "General" },
];

const TOTAL_ROUNDS = 8;
const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "playing" | "complete";

function shuffleWord(word: string, seed: number): string {
  const arr = word.split("");
  let s = seed;
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Ensure it's actually scrambled
  if (arr.join("") === word) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr.join("");
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone084EchoAnagramBlast() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState("");
  const [shuffled, setShuffled] = useState("");
  const [shuffleSeed, setShuffleSeed] = useState(1);
  const [skipsUsed, setSkipsUsed] = useState(0);
  const [shake, setShake] = useState(false);
  const [startTime] = useState(Date.now());
  const [interactions, setInteractions] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [order, setOrder] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentSet = order.map((i) => ANAGRAM_SETS[i]);
  const currentEntry = currentSet[round];

  const nextShuffle = useCallback((word: string, baseSeed = Math.random() * 9999) => {
    const seed = Math.floor(baseSeed);
    setShuffleSeed(seed);
    setShuffled(shuffleWord(word, seed));
  }, []);

  const startGame = useCallback(() => {
    const shuffledOrder = [...Array(ANAGRAM_SETS.length).keys()].sort(() => Math.random() - 0.5).slice(0, TOTAL_ROUNDS);
    setOrder(shuffledOrder);
    setRound(0);
    setScore(0);
    setSkipsUsed(0);
    setInput("");
    setCorrect(false);
    setPhase("playing");
    const firstWord = ANAGRAM_SETS[shuffledOrder[0]].word;
    nextShuffle(firstWord);
    mascot.speak("Unscramble the word! Type and press Enter to submit.", "happy");
  }, [mascot, nextShuffle]);

  const advanceRound = useCallback((newScore: number, newRound: number) => {
    setScore(newScore);
    if (newRound >= TOTAL_ROUNDS) {
      setPhase("complete");
      emitLegacyGameComplete({
        sessionId: SESSION_ID,
        gameId: "zone-084",
        score: newScore,
        maxScore: TOTAL_ROUNDS * 100,
        elapsedMs: Date.now() - startTime,
        interactions,
        difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
      if (newScore >= TOTAL_ROUNDS * 70) mascot.speak("Word master! Perfect anagram skills!", "celebrate");
      else mascot.speak("Great wordplay! Anagram training complete.", "happy");
      return;
    }
    setRound(newRound);
    setInput("");
    setCorrect(false);
    const nextWord = currentSet[newRound]?.word ?? ANAGRAM_SETS[0].word;
    nextShuffle(nextWord);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [currentSet, interactions, mascot, nextShuffle, startTime]);

  const handleSubmit = useCallback(() => {
    if (!currentEntry || phase !== "playing") return;
    setInteractions((n) => n + 1);
    const guess = input.trim().toUpperCase();
    if (guess === currentEntry.word) {
      hapticSuccess();
      setCorrect(true);
      const earned = 80 + Math.max(0, 20 - skipsUsed * 10);
      mascot.speak(`Correct! "${currentEntry.word}" — +${earned} pts`, "celebrate");
      setTimeout(() => advanceRound(score + earned, round + 1), 900);
    } else {
      hapticError();
      setShake(true);
      setTimeout(() => setShake(false), 500);
      mascot.speak("Not quite — try again!", "encourage");
    }
  }, [advanceRound, currentEntry, input, mascot, phase, round, score, skipsUsed]);

  const handleSkip = useCallback(() => {
    if (!currentEntry || phase !== "playing") return;
    setSkipsUsed((n) => n + 1);
    hapticSelection();
    mascot.speak(`The word was "${currentEntry.word}". Skipping!`, "encourage");
    setInteractions((n) => n + 1);
    setTimeout(() => advanceRound(score, round + 1), 800);
  }, [advanceRound, currentEntry, mascot, phase, round, score]);

  const handleReshuffle = useCallback(() => {
    if (!currentEntry) return;
    nextShuffle(currentEntry.word, shuffleSeed + 7777);
    hapticSelection();
  }, [currentEntry, nextShuffle, shuffleSeed]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleSubmit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleSubmit]);

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="echo" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Echo Anagram Blast</h2>
          <p className="text-xs text-stone-500">Unscramble the word before time runs out!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">🔀</p>
            <h3 className="text-lg font-black text-stone-800">Anagram Blast</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Each round shows a scrambled word with a hint. Unscramble it and type the original word. Complete 8 rounds!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">
              Unscramble!
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && currentEntry && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4 w-full max-w-sm">
            {/* Progress */}
            <div className="flex items-center justify-between w-full px-1">
              <div className="flex gap-1.5">
                {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
                  <div key={i} className={`w-5 h-2 rounded-full ${i < round ? "bg-emerald-500" : i === round ? "bg-blue-500" : "bg-stone-200"}`} />
                ))}
              </div>
              <p className="text-sm font-bold text-stone-700">{score} pts</p>
            </div>

            {/* Main card */}
            <div className="w-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] rounded-full bg-sky-100 px-2 py-0.5 text-sky-700 font-semibold">{currentEntry.category}</span>
                <p className="text-sm text-stone-600 italic">{currentEntry.hint}</p>
              </div>

              {/* Scrambled word */}
              <motion.div
                animate={shake ? { x: [-6, 6, -4, 4, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="flex justify-center gap-2 flex-wrap"
              >
                {shuffled.split("").map((l, i) => (
                  <span
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-violet-100 text-violet-800 font-black text-lg border border-violet-200"
                  >
                    {l}
                  </span>
                ))}
              </motion.div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  autoFocus
                  value={input}
                  onChange={(e) => setInput(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))}
                  onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
                  maxLength={currentEntry.word.length}
                  className={`flex-1 rounded-xl border-2 px-3 py-2 text-lg font-black text-center tracking-widest uppercase outline-none transition-colors ${
                    correct ? "border-emerald-400 bg-emerald-50 text-emerald-700" : "border-stone-200 bg-stone-50 text-stone-800 focus:border-blue-400"
                  }`}
                  placeholder={`${currentEntry.word.length} letters`}
                  readOnly={correct}
                />
                <button
                  onClick={handleReshuffle}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                  title="Reshuffle"
                >
                  <Shuffle className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 w-full">
              <button onClick={handleSkip} className="flex-1 rounded-xl border border-stone-200 bg-stone-50 py-2 text-sm font-semibold text-stone-600 hover:bg-stone-100">
                Skip ({skipsUsed})
              </button>
              <PhysicalButton onClick={handleSubmit} variant="primary" className="flex-1">
                Check ✓
              </PhysicalButton>
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">{score >= TOTAL_ROUNDS * 70 ? "🏆" : "🔤"}</p>
            <h3 className="text-lg font-black text-stone-800">Anagram Blast Complete!</h3>
            <p className="text-3xl font-black text-violet-600">{score} pts</p>
            <p className="text-sm text-stone-500">{TOTAL_ROUNDS} rounds · {skipsUsed} skips used</p>
            <PhysicalButton onClick={startGame} variant="primary">
              <RotateCcw className="mr-1.5 inline h-4 w-4" /> Blast Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
