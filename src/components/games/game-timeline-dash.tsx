"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import { Clock, Trophy, History } from "lucide-react";
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

/* ─── event data ─── */
type HistEvent = { id: string; year: number; label: string; era: string };

const EVENTS: HistEvent[] = [
  { id: "pyramid", year: -2560, label: "Great Pyramid of Giza built", era: "Ancient" },
  { id: "rome-fall", year: 476, label: "Fall of the Western Roman Empire", era: "Ancient" },
  { id: "magna-carta", year: 1215, label: "Magna Carta signed", era: "Medieval" },
  { id: "printing-press", year: 1440, label: "Gutenberg's printing press", era: "Medieval" },
  { id: "columbus", year: 1492, label: "Columbus reaches the Americas", era: "Renaissance" },
  { id: "american-rev", year: 1776, label: "American Declaration of Independence", era: "Modern" },
  { id: "french-rev", year: 1789, label: "French Revolution begins", era: "Modern" },
  { id: "steam-engine", year: 1769, label: "James Watt's steam engine", era: "Modern" },
  { id: "napoleon", year: 1804, label: "Napoleon crowned Emperor", era: "Modern" },
  { id: "telegraph", year: 1837, label: "Electric telegraph invented", era: "Modern" },
  { id: "civil-war", year: 1861, label: "US Civil War begins", era: "Modern" },
  { id: "lightbulb", year: 1879, label: "Edison's practical lightbulb", era: "Modern" },
  { id: "wright", year: 1903, label: "Wright brothers' first flight", era: "20th C" },
  { id: "titanic", year: 1912, label: "Titanic sinks", era: "20th C" },
  { id: "ww1", year: 1914, label: "World War I begins", era: "20th C" },
  { id: "russian-rev", year: 1917, label: "Russian Revolution", era: "20th C" },
  { id: "ww2", year: 1939, label: "World War II begins", era: "20th C" },
  { id: "moon-landing", year: 1969, label: "Apollo 11 Moon landing", era: "20th C" },
  { id: "berlin-wall", year: 1989, label: "Berlin Wall falls", era: "20th C" },
  { id: "internet", year: 1991, label: "World Wide Web launched", era: "20th C" },
  { id: "democracy", year: -508, label: "Athenian democracy established", era: "Ancient" },
  { id: "julius-caesar", year: -44, label: "Julius Caesar assassinated", era: "Ancient" },
  { id: "silk-road", year: -130, label: "Silk Road trade route established", era: "Ancient" },
  { id: "black-death", year: 1347, label: "Black Death reaches Europe", era: "Medieval" },
  { id: "renaissance", year: 1400, label: "Italian Renaissance begins", era: "Renaissance" },
  { id: "galileo", year: 1610, label: "Galileo observes Jupiter's moons", era: "Renaissance" },
  { id: "newton", year: 1687, label: "Newton publishes Principia", era: "Modern" },
  { id: "dna", year: 1953, label: "Watson & Crick describe DNA", era: "20th C" },
  { id: "smartphone", year: 2007, label: "First iPhone released", era: "21st C" },
  { id: "covid", year: 2020, label: "COVID-19 pandemic declared", era: "21st C" },
];

const ROUNDS = 5;
const EVENTS_PER_ROUND = 4;

/* ─── state ─── */
type Phase = "ready" | "playing" | "checking" | "feedback" | "complete";

type State = {
  phase: Phase;
  round: number;
  score: number;
  perfectRounds: number;
  roundEvents: HistEvent[];
  results: boolean[] | null;
};

type Action =
  | { type: "START" }
  | { type: "SET_ROUND"; events: HistEvent[] }
  | { type: "REORDER"; events: HistEvent[] }
  | { type: "CHECK"; results: boolean[] }
  | { type: "SCORE"; points: number; perfect: boolean }
  | { type: "NEXT"; events: HistEvent[] }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, perfectRounds: 0, results: null };
    case "SET_ROUND":
      return { ...s, roundEvents: a.events, results: null, phase: "playing" };
    case "REORDER":
      return { ...s, roundEvents: a.events };
    case "CHECK":
      return { ...s, phase: "feedback", results: a.results };
    case "SCORE":
      return { ...s, score: s.score + a.points, perfectRounds: s.perfectRounds + (a.perfect ? 1 : 0) };
    case "NEXT":
      return { ...s, round: s.round + 1, roundEvents: a.events, results: null, phase: "playing" };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = { phase: "ready", round: 0, score: 0, perfectRounds: 0, roundEvents: [], results: null };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickEvents(usedIds: Set<string>): HistEvent[] {
  const available = EVENTS.filter((e) => !usedIds.has(e.id));
  const pool = available.length >= EVENTS_PER_ROUND ? available : EVENTS;
  return shuffle(pool).slice(0, EVENTS_PER_ROUND);
}

function formatYear(y: number): string {
  if (y < 0) return `${Math.abs(y)} BCE`;
  return `${y} CE`;
}

/* ─── component ─── */
export default function GameTimelineDash() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const usedIds = useRef(new Set<string>());

  const { phase, round, score, perfectRounds, roundEvents, results } = state;

  const stars = useMemo(() => {
    if (perfectRounds >= 4) return 3;
    if (perfectRounds >= 3) return 2;
    if (perfectRounds >= 1) return 1;
    return 0;
  }, [perfectRounds]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    usedIds.current.clear();
    dispatch({ type: "START" });
    const events = pickEvents(usedIds.current);
    events.forEach((e) => usedIds.current.add(e.id));
    dispatch({ type: "SET_ROUND", events });
    mascot.say("Arrange events from oldest to newest! 📜", "excited");
  }, [mascot]);

  const handleCheck = useCallback(() => {
    const sorted = [...roundEvents].sort((a, b) => a.year - b.year);
    const results = roundEvents.map((e, i) => e.id === sorted[i].id);
    const correctCount = results.filter(Boolean).length;
    const perfect = correctCount === EVENTS_PER_ROUND;
    const points = correctCount * 100 + (perfect ? 200 : 0);

    dispatch({ type: "CHECK", results });
    dispatch({ type: "SCORE", points, perfect });

    if (perfect) {
      hapticCelebration();
      mascot.say("Perfect order! 🎯", "cheering");
    } else if (correctCount >= 2) {
      hapticSuccess();
      mascot.say(`${correctCount}/${EVENTS_PER_ROUND} in the right spot!`, "encouraging");
    } else {
      hapticError();
      mascot.say("Check the dates — you'll get it next time!", "thinking");
    }

    setTimeout(() => {
      if (round >= ROUNDS) {
        emitLegacyGameComplete(sessionId.current, score + points, stars);
        dispatch({ type: "FINISH" });
      } else {
        const events = pickEvents(usedIds.current);
        events.forEach((e) => usedIds.current.add(e.id));
        dispatch({ type: "NEXT", events });
      }
    }, 2500);
  }, [roundEvents, round, score, stars, mascot]);

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      {/* header */}
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-amber-400" />
          <span className="text-sm font-bold text-white">Timeline Dash</span>
        </div>
        {(phase === "playing" || phase === "feedback") && (
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
            <h2 className="text-3xl font-black text-white">Timeline Dash</h2>
            <p className="text-stone-400 max-w-xs">
              Drag historical events into chronological order — oldest to newest!
            </p>
            <div className="flex gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {EVENTS.length} events</span>
              <span>{ROUNDS} rounds</span>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Timeline 📜
            </PhysicalButton>
          </motion.section>
        )}

        {(phase === "playing" || phase === "feedback") && (
          <motion.section
            key={`round-${round}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center gap-4 px-4 py-6 w-full"
          >
            <p className="text-xs text-stone-500 font-medium">
              {phase === "playing" ? "Drag to reorder — oldest at top ↑" : "Correct order revealed!"}
            </p>

            <div className="w-full max-w-sm space-y-2">
              {phase === "playing" ? (
                <Reorder.Group
                  axis="y"
                  values={roundEvents}
                  onReorder={(newOrder) => dispatch({ type: "REORDER", events: newOrder })}
                  className="space-y-2"
                >
                  {roundEvents.map((ev) => (
                    <Reorder.Item
                      key={ev.id}
                      value={ev}
                      className="flex items-center gap-3 rounded-xl bg-stone-800/80 ring-1 ring-white/5 px-4 py-3 cursor-grab active:cursor-grabbing active:ring-amber-400/50 active:bg-stone-700/80 select-none touch-none"
                      whileDrag={{ scale: 1.03, boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
                    >
                      <span className="text-lg">📌</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">{ev.label}</p>
                        <p className="text-[10px] text-stone-500">{ev.era}</p>
                      </div>
                      <span className="text-xs text-stone-600">⋮⋮</span>
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              ) : (
                // feedback: show sorted with correctness indicators
                [...roundEvents].sort((a, b) => a.year - b.year).map((ev, i) => {
                  const wasCorrect = results?.[roundEvents.findIndex((r) => r.id === ev.id)];
                  return (
                    <motion.div
                      key={ev.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                        wasCorrect ? "bg-emerald-600/20 ring-1 ring-emerald-400/30" : "bg-stone-800/60 ring-1 ring-white/5"
                      }`}
                    >
                      <span className="text-xs font-mono text-amber-400 w-16 shrink-0">{formatYear(ev.year)}</span>
                      <p className="text-sm font-semibold text-white flex-1 truncate">{ev.label}</p>
                      <span className="text-sm">{wasCorrect ? "✅" : "📍"}</span>
                    </motion.div>
                  );
                })
              )}
            </div>

            {phase === "playing" && (
              <PhysicalButton onClick={handleCheck} variant="primary">
                Lock In Order ✓
              </PhysicalButton>
            )}
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
            <h3 className="text-2xl font-black text-white">Timeline Complete!</h3>
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
              <p className="text-stone-400">{perfectRounds}/{ROUNDS} perfect rounds</p>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Play Again 📜
            </PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
