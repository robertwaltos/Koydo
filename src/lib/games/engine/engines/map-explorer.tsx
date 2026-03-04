/* -------------------------------------------------------------------------- */
/*  Map-Explorer Engine — Carmen Sandiego / Dora the Explorer style          */
/*  Travel the map solving clues to find a target location                   */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type MapLocation = {
  id: string;
  name: string;
  emoji: string;
  description: string;
  clueIfWrong: string;
  fact: string;
};

export type MapMission = {
  targetId: string;
  clues: string[];
  story: string;
};

export type MapExplorerConfig = {
  title: string;
  locations: MapLocation[];
  missions: MapMission[];
  mapEmoji?: string;
  agentEmoji?: string;
  infiniteMode?: boolean;
};

type Props = {
  config: MapExplorerConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { cluesRevealed: number; timeLimit: number; maxGuesses: number }> = {
  easy:   { cluesRevealed: 3, timeLimit: 180_000, maxGuesses: 5 },
  medium: { cluesRevealed: 2, timeLimit: 150_000, maxGuesses: 4 },
  hard:   { cluesRevealed: 1, timeLimit: 120_000, maxGuesses: 3 },
};

export function MapExplorerEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const missions = useRef(shuffle(config.missions));
  const [missionIdx, setMissionIdx] = useState(0);
  const [revealedClues, setRevealedClues] = useState(settings.cluesRevealed);
  const [guessesLeft, setGuessesLeft] = useState(settings.maxGuesses);
  const [score, setScore] = useState(0);
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState<{ location: MapLocation; correct: boolean; clue: string } | null>(null);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "solved" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const [solvedCount, setSolvedCount] = useState(0);
  const startTime = useRef(Date.now());

  const mission = missions.current[missionIdx % missions.current.length];
  const target = config.locations.find((l) => l.id === mission?.targetId);
  const clues = mission?.clues ?? [];

  // Timer
  useEffect(() => {
    if (phase === "complete") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) { setPhase("complete"); return 0; }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [phase]);

  const handleGuess = useCallback(
    (locationId: string) => {
      if (phase !== "playing" || !mission || !target) return;

      const location = config.locations.find((l) => l.id === locationId)!;
      const correct = locationId === target.id;

      if (correct) {
        const bonusPoints = guessesLeft * 50 + Math.round(timeLeft / 1000) * 5;
        setScore((s) => s + 200 + bonusPoints);
        setSolvedCount((c) => c + 1);
        setFeedback({ location, correct: true, clue: target.fact });
        setPhase("solved");

        setTimeout(() => {
          // Next mission
          const nextIdx = missionIdx + 1;
          if (nextIdx >= missions.current.length && !config.infiniteMode) {
            setPhase("complete");
          } else {
            setMissionIdx(nextIdx);
            setGuessesLeft(settings.maxGuesses);
            setRevealedClues(settings.cluesRevealed);
            setVisited(new Set());
            setFeedback(null);
            setPhase("playing");
            if (nextIdx >= missions.current.length) {
              missions.current = shuffle(config.missions);
              setMissionIdx(0);
              setLevel((l) => l + 1);
            }
          }
        }, 2500);
      } else {
        setVisited((prev) => new Set(prev).add(locationId));
        setGuessesLeft((g) => {
          const next = g - 1;
          if (next <= 0) {
            setFeedback({ location, correct: false, clue: `The answer was: ${target.name}` });
            // Move to next mission after delay
            setTimeout(() => {
              const nextIdx = missionIdx + 1;
              if (nextIdx >= missions.current.length && !config.infiniteMode) {
                setPhase("complete");
              } else {
                setMissionIdx(nextIdx >= missions.current.length ? 0 : nextIdx);
                setGuessesLeft(settings.maxGuesses);
                setRevealedClues(settings.cluesRevealed);
                setVisited(new Set());
                setFeedback(null);
                if (nextIdx >= missions.current.length) {
                  missions.current = shuffle(config.missions);
                  setLevel((l) => l + 1);
                }
              }
            }, 2500);
            return 0;
          }
          // Reveal an extra clue on wrong answer
          setRevealedClues((r) => Math.min(r + 1, clues.length));
          setFeedback({ location, correct: false, clue: location.clueIfWrong });
          setTimeout(() => setFeedback(null), 2000);
          return next;
        });
      }
    },
    [phase, mission, target, config, guessesLeft, timeLeft, missionIdx, settings, clues.length],
  );

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = missions.current.length * 400;
      onComplete({
        score,
        maxScore,
        stars: calculateStars(solvedCount, Math.min(missions.current.length, missionIdx + 1)),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, solvedCount, missionIdx, level, difficulty, onComplete]);

  if (!mission || !target) {
    return <div className="p-8 text-center text-stone-400">No missions available</div>;
  }

  const pct = timeLeft / settings.timeLimit;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>Case {missionIdx + 1}</span>
        <span>Guesses: {guessesLeft}</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      {/* Story */}
      <div className="w-full rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 shadow">
        <p className="text-center text-2xl">{config.agentEmoji ?? "🕵️"}</p>
        <p className="mt-2 text-center text-sm font-medium text-stone-700">
          {mission.story}
        </p>
      </div>

      {/* Clues */}
      <div className="w-full space-y-1">
        <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wide">Clues</h4>
        {clues.slice(0, revealedClues).map((clue, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-800"
          >
            <span>🔍</span>
            <span>{clue}</span>
          </motion.div>
        ))}
        {revealedClues < clues.length && (
          <p className="text-xs text-stone-400">Wrong guesses reveal more clues...</p>
        )}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full rounded-xl p-4 text-center ${
              feedback.correct
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <p className="text-xl">{feedback.location.emoji} {feedback.location.name}</p>
            <p className="mt-1 text-sm">{feedback.correct ? "✓ Correct!" : "✗ Not here!"}</p>
            <p className="mt-1 text-xs opacity-70">{feedback.clue}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Location buttons */}
      <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
        {config.locations.map((loc) => {
          const isVisited = visited.has(loc.id);
          return (
            <button
              key={loc.id}
              type="button"
              onClick={() => handleGuess(loc.id)}
              disabled={phase !== "playing" || isVisited}
              className={`flex flex-col items-center gap-1 rounded-xl border-2 p-3 text-sm transition-all ${
                isVisited
                  ? "border-stone-200 bg-stone-100 opacity-40"
                  : "border-stone-200 bg-white hover:border-sky-400 hover:bg-sky-50 shadow-sm"
              }`}
            >
              <span className="text-2xl">{loc.emoji}</span>
              <span className="font-semibold text-stone-700">{loc.name}</span>
            </button>
          );
        })}
      </div>

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">
            {"⭐".repeat(calculateStars(solvedCount, Math.min(missions.current.length, missionIdx + 1)))}
          </p>
          <p className="mt-1 font-bold text-stone-700">
            {solvedCount} cases solved · {score} pts
          </p>
        </motion.div>
      )}
    </div>
  );
}
