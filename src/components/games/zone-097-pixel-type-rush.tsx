"use client";

import { useState, useCallback, useEffect, useRef } from "react";
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

const SESSION_ID = createLegacySessionId();
type Phase = "ready" | "playing" | "complete";

const WORD_POOL = [
  "atom","cell","gene","wave","acid","base","mass","heat","force","light",
  "orbit","laser","magnet","energy","carbon","oxygen","proton","neutron","voltage","electron",
  "gravity","nucleus","plasma","photon","quasar","fossil","erosion","climate","species","ecosystem",
];
const GAME_DURATION = 45;
const WORDS_PER_ROUND = 20;

function getWords(): string[] {
  const shuffled = [...WORD_POOL].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, WORDS_PER_ROUND);
}

export default function Zone097PixelTypeRush() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [words, setWords] = useState<string[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [streak, setStreak] = useState(0);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(Date.now());
  const inputRef = useRef<HTMLInputElement>(null);
  const phaseRef = useRef<Phase>("ready");

  const endGame = useCallback((finalScore: number, finalErrors: number) => {
    if (tickRef.current) clearInterval(tickRef.current);
    phaseRef.current = "complete";
    setPhase("complete");
    hapticSuccess();
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-097",
      score: finalScore,
      maxScore: WORDS_PER_ROUND * 10,
      elapsedMs: Date.now() - startTimeRef.current,
      interactions: finalScore / 10 + finalErrors,
      difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
    mascot.speak(finalScore >= 150 ? "Lightning fast! Top typist!" : `${finalScore} pts! Keep practicing!`, "celebrate");
  }, [mascot]);

  const startGame = useCallback(() => {
    if (tickRef.current) clearInterval(tickRef.current);
    const w = getWords();
    setWords(w);
    setCurrentIdx(0);
    setInput("");
    setScore(0);
    setErrors(0);
    setStreak(0);
    setTimeLeft(GAME_DURATION);
    startTimeRef.current = Date.now();
    phaseRef.current = "playing";
    setPhase("playing");
    mascot.speak("Type the science words as fast as you can!", "happy");
    setTimeout(() => inputRef.current?.focus(), 100);

    tickRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setScore((s) => { setTimeout(() => endGame(s, errors), 50); return s; });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }, [endGame, errors, mascot]);

  const handleInput = useCallback((val: string) => {
    setInput(val);
    if (phase !== "playing") return;

    const current = words[currentIdx];
    if (!current) return;

    if (val === current) {
      hapticSuccess();
      setScore((s) => {
        const bonus = streak >= 3 ? 15 : 10;
        return s + bonus;
      });
      setStreak((n) => n + 1);
      if (currentIdx + 1 >= words.length) {
        setCurrentIdx(words.length);
        endGame(score + 10, errors);
        return;
      }
      setCurrentIdx((n) => n + 1);
      setInput("");
    } else if (val.length > 0 && !current.startsWith(val)) {
      hapticError();
      setErrors((n) => n + 1);
      setStreak(0);
    } else {
      hapticSelection();
    }
  }, [currentIdx, endGame, errors, phase, score, streak, words]);

  useEffect(() => () => { if (tickRef.current) clearInterval(tickRef.current); }, []);

  const current = words[currentIdx] ?? "";
  const typedCorrect = input.length > 0 && current.startsWith(input);
  const typedWrong = input.length > 0 && !current.startsWith(input);

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="pixel" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Pixel Type Rush</h2>
          <p className="text-xs text-stone-500">Type science words as fast as you can!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-4xl">⌨️</p>
            <h3 className="text-lg font-black text-stone-800">Typing Speed Rush</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Type each science word correctly before the timer runs out! Streak bonuses for consecutive correct words.
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Start Typing!</PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "complete") && (
          <motion.div key="game" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4 w-full max-w-sm">
            {/* HUD */}
            <div className="flex gap-3 w-full">
              <div className={`flex-1 rounded-xl px-3 py-2 text-center text-white ${timeLeft <= 10 ? "bg-red-500 animate-pulse" : "bg-sky-600"}`}>
                <p className="text-[10px] font-bold uppercase">Time</p>
                <p className="text-xl font-black">{timeLeft}s</p>
              </div>
              <div className="flex-1 rounded-xl bg-amber-500 px-3 py-2 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Score</p>
                <p className="text-xl font-black">{score}</p>
              </div>
              <div className="flex-1 rounded-xl bg-stone-600 px-3 py-2 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Word</p>
                <p className="text-xl font-black">{currentIdx}/{WORDS_PER_ROUND}</p>
              </div>
            </div>

            {streak >= 3 && phase === "playing" && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="rounded-full bg-orange-500 text-white text-xs font-black px-3 py-1">
                🔥 {streak}× Streak!
              </motion.div>
            )}

            {/* Word display */}
            {phase === "playing" && (
              <div className="w-full rounded-2xl bg-stone-900 p-4 text-center shadow-inner">
                <p className="text-3xl font-black tracking-widest text-white">{current}</p>
                <p className="text-xs text-stone-400 mt-1">{currentIdx + 1} of {WORDS_PER_ROUND}</p>
              </div>
            )}

            {/* Input */}
            {phase === "playing" && (
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => handleInput(e.target.value)}
                className={`w-full rounded-xl border-2 px-4 py-3 text-center text-xl font-black outline-none transition-colors
                  ${typedWrong ? "border-red-400 bg-red-50 text-red-600" :
                    typedCorrect ? "border-green-400 bg-green-50 text-green-700" :
                    "border-stone-300 bg-white text-stone-800"}`}
                placeholder="Type here…"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
              />
            )}

            {/* Upcoming words */}
            {phase === "playing" && (
              <div className="flex flex-wrap gap-1.5 justify-center">
                {words.slice(currentIdx + 1, currentIdx + 5).map((w, i) => (
                  <span key={i} className="text-xs bg-stone-100 text-stone-500 rounded-full px-2 py-0.5">{w}</span>
                ))}
              </div>
            )}

            {phase === "complete" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm w-full">
                <p className="text-2xl font-black text-stone-800">⌨️ Time's Up!</p>
                <p className="text-xl font-black text-amber-600">{score} pts</p>
                <p className="text-stone-500 text-sm">{currentIdx} words · {errors} errors</p>
                <PhysicalButton onClick={startGame} variant="primary">
                  <RotateCcw className="mr-1.5 inline h-4 w-4" /> Race Again
                </PhysicalButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
