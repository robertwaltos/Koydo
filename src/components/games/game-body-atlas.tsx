"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Trophy, Brain } from "lucide-react";
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

/* ─── organ data ─── */
type Organ = {
  id: string;
  name: string;
  emoji: string;
  system: string;
  fact: string;
  /** target position as % of body silhouette (top, left) */
  targetTop: number;
  targetLeft: number;
};

const ORGANS: Organ[] = [
  { id: "brain", name: "Brain", emoji: "🧠", system: "Nervous", fact: "Uses 20% of your body's oxygen", targetTop: 8, targetLeft: 50 },
  { id: "heart", name: "Heart", emoji: "❤️", system: "Circulatory", fact: "Beats about 100,000 times per day", targetTop: 32, targetLeft: 45 },
  { id: "lungs", name: "Lungs", emoji: "🫁", system: "Respiratory", fact: "You breathe about 22,000 times a day", targetTop: 30, targetLeft: 55 },
  { id: "stomach", name: "Stomach", emoji: "🟤", system: "Digestive", fact: "Acid strong enough to dissolve metal", targetTop: 42, targetLeft: 45 },
  { id: "liver", name: "Liver", emoji: "🟫", system: "Digestive", fact: "Largest internal organ — weighs about 1.5 kg", targetTop: 38, targetLeft: 40 },
  { id: "kidneys", name: "Kidneys", emoji: "🫘", system: "Urinary", fact: "Filter about 200 liters of blood daily", targetTop: 45, targetLeft: 50 },
  { id: "intestines", name: "Intestines", emoji: "🌀", system: "Digestive", fact: "Small intestine is about 6 meters long", targetTop: 55, targetLeft: 50 },
  { id: "bladder", name: "Bladder", emoji: "💧", system: "Urinary", fact: "Can hold about 400-600 ml of urine", targetTop: 65, targetLeft: 50 },
];

const ROUNDS = 3;
const ORGANS_PER_ROUND = 4;

/* ─── state ─── */
type Phase = "ready" | "playing" | "complete";

type PlacedOrgan = { organId: string; correct: boolean };

type State = {
  phase: Phase;
  round: number;
  score: number;
  roundOrgans: Organ[];
  placed: Map<string, boolean>;
  selectedOrgan: string | null;
  showFact: string | null;
  totalCorrect: number;
  totalAttempts: number;
};

type Action =
  | { type: "START"; organs: Organ[] }
  | { type: "SELECT"; organId: string }
  | { type: "PLACE"; organId: string; correct: boolean }
  | { type: "SHOW_FACT"; fact: string }
  | { type: "HIDE_FACT" }
  | { type: "NEXT_ROUND"; organs: Organ[] }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, roundOrgans: a.organs, placed: new Map(), selectedOrgan: null, showFact: null, totalCorrect: 0, totalAttempts: 0 };
    case "SELECT":
      return { ...s, selectedOrgan: a.organId };
    case "PLACE": {
      const newPlaced = new Map(s.placed);
      newPlaced.set(a.organId, a.correct);
      return {
        ...s,
        placed: newPlaced,
        selectedOrgan: null,
        score: s.score + (a.correct ? 150 : 0),
        totalCorrect: s.totalCorrect + (a.correct ? 1 : 0),
        totalAttempts: s.totalAttempts + 1,
      };
    }
    case "SHOW_FACT":
      return { ...s, showFact: a.fact };
    case "HIDE_FACT":
      return { ...s, showFact: null };
    case "NEXT_ROUND":
      return { ...s, round: s.round + 1, roundOrgans: a.organs, placed: new Map(), selectedOrgan: null, showFact: null };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = {
  phase: "ready", round: 0, score: 0, roundOrgans: [],
  placed: new Map(), selectedOrgan: null, showFact: null,
  totalCorrect: 0, totalAttempts: 0,
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── component ─── */
export default function GameBodyAtlas() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const usedOrgans = useRef(new Set<string>());

  const { phase, round, score, roundOrgans, placed, selectedOrgan, showFact, totalCorrect, totalAttempts } = state;

  const allPlaced = placed.size >= roundOrgans.length;

  const stars = useMemo(() => {
    const pct = totalCorrect / Math.max(totalAttempts, 1);
    if (pct >= 0.9) return 3;
    if (pct >= 0.7) return 2;
    if (pct >= 0.4) return 1;
    return 0;
  }, [totalCorrect, totalAttempts]);

  /* ── auto advance ── */
  useEffect(() => {
    if (!allPlaced || phase !== "playing") return;
    const timeout = setTimeout(() => {
      if (round >= ROUNDS) {
        hapticCelebration();
        emitLegacyGameComplete({
          sessionId: sessionId.current,
          gameId: "body-atlas",
          elapsedMs: 0,
          interactions: totalAttempts,
          score,
          source: "component",
          occurredAt: new Date().toISOString()
        });
        mascot.speak("You know your anatomy! 🏥", "cheering");
        dispatch({ type: "FINISH" });
      } else {
        hapticSuccess();
        mascot.say(`Round ${round + 1} — new organs!`, "excited");
        const available = ORGANS.filter((o) => !usedOrgans.current.has(o.id));
        const pool = available.length >= ORGANS_PER_ROUND ? available : ORGANS;
        const organs = shuffle(pool).slice(0, ORGANS_PER_ROUND);
        organs.forEach((o) => usedOrgans.current.add(o.id));
        dispatch({ type: "NEXT_ROUND", organs });
      }
    }, 1500);
    return () => clearTimeout(timeout);
  }, [allPlaced, phase, round, score, stars, mascot]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    usedOrgans.current.clear();
    const organs = shuffle(ORGANS).slice(0, ORGANS_PER_ROUND);
    organs.forEach((o) => usedOrgans.current.add(o.id));
    dispatch({ type: "START", organs });
    mascot.say("Tap an organ, then tap where it belongs! 🫀", "excited");
  }, [mascot]);

  const handleOrganSelect = useCallback((organId: string) => {
    if (placed.has(organId)) return;
    hapticSelection();
    dispatch({ type: "SELECT", organId });
  }, [placed]);

  const handleTargetTap = useCallback((organ: Organ) => {
    if (!selectedOrgan) return;
    const correct = selectedOrgan === organ.id;
    if (correct) {
      hapticSuccess();
      mascot.say(organ.fact, "cheering");
      dispatch({ type: "PLACE", organId: organ.id, correct: true });
    } else {
      hapticError();
      mascot.say("Try another spot!", "thinking");
    }
  }, [selectedOrgan, mascot]);

  const unplacedOrgans = roundOrgans.filter((o) => !placed.has(o.id));

  return (
    <div className="relative flex min-h-[580px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      {/* header */}
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-rose-400" />
          <span className="text-sm font-bold text-white">Body Atlas</span>
        </div>
        {phase === "playing" && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Round {round}/{ROUNDS}</span>
            <span className="text-amber-400 font-bold">{score}</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section
            key="ready"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center"
          >
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Body Atlas</h2>
            <p className="text-stone-400 max-w-xs">
              Place organs in the right location on the body. Learn anatomy facts with each correct placement!
            </p>
            <div className="flex gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1"><Brain className="h-3 w-3" /> {ORGANS.length} organs</span>
              <span>{ROUNDS} rounds</span>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Atlas 🫀
            </PhysicalButton>
          </motion.section>
        )}

        {phase === "playing" && (
          <motion.section
            key={`round-${round}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center gap-3 px-4 py-4 w-full"
          >
            {/* body silhouette with drop targets */}
            <div className="relative w-48 h-72 mx-auto">
              {/* body outline */}
              <svg viewBox="0 0 100 150" className="w-full h-full">
                {/* head */}
                <ellipse cx="50" cy="12" rx="12" ry="14" fill="none" stroke="rgba(148,163,184,0.3)" strokeWidth="1" />
                {/* torso */}
                <path d="M30 26 Q30 20 50 26 Q70 20 70 26 L72 80 Q72 90 50 95 Q28 90 28 80 Z" fill="none" stroke="rgba(148,163,184,0.3)" strokeWidth="1" />
                {/* legs */}
                <path d="M35 80 L32 140" fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="6" strokeLinecap="round" />
                <path d="M65 80 L68 140" fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="6" strokeLinecap="round" />
                {/* arms */}
                <path d="M30 30 L15 70" fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="4" strokeLinecap="round" />
                <path d="M70 30 L85 70" fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="4" strokeLinecap="round" />
              </svg>

              {/* drop target zones */}
              {roundOrgans.map((organ) => {
                const isPlaced = placed.has(organ.id);
                const isCorrectlyPlaced = placed.get(organ.id);
                return (
                  <motion.button
                    key={organ.id}
                    onClick={() => handleTargetTap(organ)}
                    disabled={isPlaced || !selectedOrgan}
                    className={`absolute w-10 h-10 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all ${
                      isPlaced
                        ? "bg-emerald-500/30 ring-2 ring-emerald-400/50"
                        : selectedOrgan
                          ? "bg-amber-500/20 ring-2 ring-amber-400/40 animate-pulse cursor-pointer"
                          : "bg-stone-700/30 ring-1 ring-white/10"
                    }`}
                    style={{ top: `${organ.targetTop}%`, left: `${organ.targetLeft}%` }}
                    whileTap={!isPlaced && selectedOrgan ? { scale: 0.9 } : undefined}
                  >
                    {isPlaced ? (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-lg">
                        {organ.emoji}
                      </motion.span>
                    ) : (
                      <span className="text-xs text-stone-500">?</span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* instruction */}
            <p className="text-xs text-stone-500">
              {selectedOrgan
                ? `Tap where ${roundOrgans.find((o) => o.id === selectedOrgan)?.name} belongs`
                : "Select an organ below, then tap its location"}
            </p>

            {/* organ palette */}
            <div className="flex flex-wrap justify-center gap-2 w-full max-w-sm">
              {roundOrgans.map((organ) => {
                const isPlaced = placed.has(organ.id);
                const isSelected = selectedOrgan === organ.id;
                return (
                  <motion.button
                    key={organ.id}
                    onClick={() => handleOrganSelect(organ.id)}
                    disabled={isPlaced}
                    whileTap={!isPlaced ? { scale: 0.92 } : undefined}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all min-h-[44px] ${
                      isPlaced
                        ? "bg-emerald-600/20 ring-1 ring-emerald-400/30 text-emerald-300/60"
                        : isSelected
                          ? "bg-amber-600/30 ring-2 ring-amber-400 text-amber-200"
                          : "bg-stone-800/80 ring-1 ring-white/5 text-white hover:bg-stone-700/80"
                    }`}
                  >
                    <span className="text-lg">{organ.emoji}</span>
                    <span>{organ.name}</span>
                    {isPlaced && <span className="text-xs">✅</span>}
                  </motion.button>
                );
              })}
            </div>
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section
            key="complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center"
          >
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Atlas Complete!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: i < stars ? 1 : 0.5, rotate: 0, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}
                >
                  ⭐
                </motion.span>
              ))}
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-white font-bold">{score} points</p>
              <p className="text-stone-400">{totalCorrect}/{totalAttempts} correct placements</p>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Play Again 🫀
            </PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
