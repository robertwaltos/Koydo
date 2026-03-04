"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

// ─── Word Bank ─────────────────────────────────────────────────────────────────
const WORD_BANK: Array<{ word: string; hint: string }> = [
  { word: "QUANTUM", hint: "Smallest discrete unit of energy" },
  { word: "MOLECULE", hint: "Two or more atoms bonded together" },
  { word: "ECLIPSE", hint: "One celestial body covers another" },
  { word: "GRAVITY", hint: "Force pulling objects toward each other" },
  { word: "PRISM", hint: "Splits white light into a spectrum" },
  { word: "VOLCANO", hint: "Mountain that erupts with lava" },
  { word: "NUCLEUS", hint: "Center of an atom or cell" },
  { word: "PHOTON", hint: "Particle of light energy" },
  { word: "EROSION", hint: "Wearing away of surface by wind or water" },
  { word: "NEUTRON", hint: "Neutral particle in an atom's nucleus" },
  { word: "CLIMATE", hint: "Long-term average weather pattern" },
  { word: "FRACTAL", hint: "Pattern that repeats at every scale" },
  { word: "OSMOSIS", hint: "Water movement through a membrane" },
  { word: "ELEMENT", hint: "Pure substance that cannot be split" },
  { word: "HORIZON", hint: "Line where earth meets sky" },
  { word: "PROTEIN", hint: "Biological molecule made of amino acids" },
  { word: "SYNAPSE", hint: "Gap between two nerve cells" },
  { word: "ENTROPY", hint: "Measure of disorder in a system" },
  { word: "ALGEBRA", hint: "Math with letters representing numbers" },
  { word: "HABITAT", hint: "Natural home of a living organism" },
];

const MAX_WRONG = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "playing" | "complete";

// ─── Hangman SVG ──────────────────────────────────────────────────────────────
function HangmanSvg({ wrongCount }: { wrongCount: number }) {
  const show = (n: number) => wrongCount >= n;
  return (
    <svg width="120" height="140" viewBox="0 0 120 140" className="text-stone-700">
      {/* Gallows */}
      <line x1="10" y1="130" x2="110" y2="130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="130" x2="30" y2="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="10" x2="70" y2="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="70" y1="10" x2="70" y2="25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Head */}
      {show(1) && <circle cx="70" cy="35" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />}
      {/* Body */}
      {show(2) && <line x1="70" y1="45" x2="70" y2="90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />}
      {/* Left arm */}
      {show(3) && <line x1="70" y1="55" x2="50" y2="75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />}
      {/* Right arm */}
      {show(4) && <line x1="70" y1="55" x2="90" y2="75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />}
      {/* Left leg */}
      {show(5) && <line x1="70" y1="90" x2="50" y2="115" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />}
      {/* Right leg */}
      {show(6) && <line x1="70" y1="90" x2="90" y2="115" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />}
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone080EchoWordRescue() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [wordIndex, setWordIndex] = useState(0);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [wrongCount, setWrongCount] = useState(0);
  const [score, setScore] = useState(0);
  const [totalGuessed, setTotalGuessed] = useState(0);
  const [startTime] = useState(Date.now());
  const [interactions, setInteractions] = useState(0);

  const currentEntry = WORD_BANK[wordIndex % WORD_BANK.length];
  const word = currentEntry.word;
  const hint = currentEntry.hint;

  const revealed = word.split("").map((l) => guessed.has(l));
  const allRevealed = revealed.every(Boolean);
  const wordFailed = wrongCount >= MAX_WRONG;

  const nextWord = useCallback(() => {
    setWordIndex((i) => i + 1);
    setGuessed(new Set());
    setWrongCount(0);
  }, []);

  const handleGuess = useCallback((letter: string) => {
    if (guessed.has(letter) || wordFailed || allRevealed) return;
    setInteractions((n) => n + 1);
    const next = new Set(guessed);
    next.add(letter);
    setGuessed(next);

    if (word.includes(letter)) {
      hapticSuccess();
      const correct = word.split("").filter((l) => next.has(l)).length;
      if (correct === word.length) {
        // Word complete
        const earned = Math.max(1, MAX_WRONG - wrongCount) * 20;
        setScore((s) => s + earned);
        setTotalGuessed((t) => t + 1);
        mascot.speak(`"${word}" — well done! +${earned} pts`, "celebrate");
        hapticSuccess();
        setTimeout(nextWord, 1800);
      } else {
        mascot.speak("Nice! Keep guessing!", "happy");
      }
    } else {
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      hapticError();
      if (newWrong >= MAX_WRONG) {
        mascot.speak(`The word was "${word}". Better luck next time!`, "encourage");
        setTimeout(nextWord, 2000);
      } else {
        mascot.speak(`Not in the word. ${MAX_WRONG - newWrong} tries left.`, "encourage");
      }
    }
  }, [allRevealed, guessed, mascot, nextWord, word, wordFailed, wrongCount]);

  useEffect(() => {
    if (totalGuessed >= 5) {
      setPhase("complete");
      emitLegacyGameComplete({
        sessionId: SESSION_ID,
        gameId: "zone-080",
        score,
        maxScore: 5 * 6 * 20,
        elapsedMs: Date.now() - startTime,
        interactions,
        difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
      if (score >= 400) mascot.speak("Word genius! Echo is impressed!", "celebrate");
      else mascot.speak("Great vocabulary workout!", "happy");
    }
  }, [totalGuessed, score, mascot, startTime, interactions]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const l = e.key.toUpperCase();
      if (ALPHABET.includes(l) && phase === "playing") handleGuess(l);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleGuess, phase]);

  const startGame = () => {
    setPhase("playing");
    setWordIndex(Math.floor(Math.random() * WORD_BANK.length));
    setGuessed(new Set());
    setWrongCount(0);
    setScore(0);
    setTotalGuessed(0);
    mascot.speak("Guess the hidden word letter by letter! 6 wrong = game over.", "happy");
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="echo" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Echo Word Rescue</h2>
          <p className="text-xs text-stone-500">Guess the word before the figure is complete!</p>
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
            <p className="text-4xl">💬</p>
            <h3 className="text-lg font-black text-stone-800">Word Rescue</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Guess the hidden science word one letter at a time. 6 wrong guesses and the figure is complete — game over! Solve 5 words to win.
            </p>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Guessing!
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4 w-full max-w-sm">
            {/* Progress */}
            <div className="flex gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className={`w-8 h-2 rounded-full ${i < totalGuessed ? "bg-emerald-500" : "bg-stone-200"}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-6 rounded-2xl border border-stone-200 bg-white p-4 w-full">
              <HangmanSvg wrongCount={wrongCount} />
              <div className="flex flex-col gap-2">
                <p className="text-[11px] text-stone-400 uppercase font-semibold">Hint</p>
                <p className="text-sm text-stone-700 font-medium">{hint}</p>
                <p className="text-[11px] text-stone-400 mt-2">{MAX_WRONG - wrongCount} tries left</p>
                <p className="text-sm font-bold text-stone-700">Score: {score}</p>
              </div>
            </div>

            {/* Word blanks */}
            <div className="flex gap-2 flex-wrap justify-center">
              {word.split("").map((l, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className={`text-xl font-black ${wordFailed && !guessed.has(l) ? "text-red-500" : "text-stone-800"}`}>
                    {guessed.has(l) || wordFailed ? l : "\u00a0"}
                  </span>
                  <div className="w-6 h-0.5 bg-stone-400 mt-1" />
                </div>
              ))}
            </div>

            {/* Wrong letters */}
            {Array.from(guessed).filter((l) => !word.includes(l)).length > 0 && (
              <p className="text-xs text-stone-500">
                Wrong: {Array.from(guessed).filter((l) => !word.includes(l)).join(" ")}
              </p>
            )}

            {/* Alphabet keyboard */}
            <div className="flex flex-wrap justify-center gap-1.5 max-w-sm">
              {ALPHABET.map((l) => {
                const used = guessed.has(l);
                const correct = used && word.includes(l);
                const wrong = used && !word.includes(l);
                return (
                  <button
                    key={l}
                    onClick={() => handleGuess(l)}
                    disabled={used || wordFailed}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                      correct ? "bg-emerald-500 text-white" :
                      wrong ? "bg-red-200 text-red-400" :
                      "bg-stone-100 text-stone-700 hover:bg-stone-200 active:scale-95"
                    } disabled:cursor-not-allowed`}
                  >
                    {l}
                  </button>
                );
              })}
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
            <p className="text-4xl">{score >= 400 ? "🏆" : "🎉"}</p>
            <h3 className="text-lg font-black text-stone-800">5 Words Complete!</h3>
            <p className="text-3xl font-black text-emerald-600">{score} pts</p>
            <PhysicalButton onClick={startGame} variant="primary">
              <RotateCcw className="mr-1.5 inline h-4 w-4" /> Play Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
