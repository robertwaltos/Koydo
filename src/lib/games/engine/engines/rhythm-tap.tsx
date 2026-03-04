/* -------------------------------------------------------------------------- */
/*  Rhythm Tap Engine — Tap targets in time with a beat                      */
/*  Guitar Hero / osu! inspired with educational content                     */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars } from "@/lib/games/engine/scoring";

export type RhythmNote = {
  id: string;
  emoji: string;
  label?: string;
  lane: number;    // 0-based lane index
  beatTime: number; // ms offset from start when note should be tapped
};

export type RhythmTapConfig = {
  title: string;
  notes: RhythmNote[];
  lanes: number;        // 3, 4, or 5
  bpm?: number;
  infiniteMode?: boolean;
  laneEmojis?: string[];
};

type ActiveNote = RhythmNote & {
  y: number;
  hit: boolean;
  missed: boolean;
};

type Props = {
  config: RhythmTapConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<
  Difficulty,
  { speed: number; hitWindow: number; perfectWindow: number; lives: number }
> = {
  easy:   { speed: 0.4,  hitWindow: 300, perfectWindow: 100, lives: 10 },
  medium: { speed: 0.6,  hitWindow: 200, perfectWindow: 60,  lives: 6 },
  hard:   { speed: 0.85, hitWindow: 120, perfectWindow: 40,  lives: 3 },
};

export function RhythmTapEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];

  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [lives, setLives] = useState(settings.lives);
  const [phase, setPhase] = useState<"countdown" | "playing" | "complete">("countdown");
  const [countdown, setCountdown] = useState(3);
  const [level, setLevel] = useState(1);
  const [hitEffect, setHitEffect] = useState<{
    lane: number;
    type: "perfect" | "good" | "miss";
  } | null>(null);

  const activeNotes = useRef<ActiveNote[]>([]);
  const [renderNotes, setRenderNotes] = useState<ActiveNote[]>([]);
  const frameRef = useRef(0);
  const startTime = useRef(0);
  const noteIndex = useRef(0);
  const livesRef = useRef(settings.lives);
  const scoreRef = useRef(0);
  const comboRef = useRef(0);
  const sortedNotes = useRef([...config.notes].sort((a, b) => a.beatTime - b.beatTime));

  livesRef.current = lives;
  scoreRef.current = score;
  comboRef.current = combo;

  // Countdown
  useEffect(() => {
    if (phase !== "countdown") return;
    if (countdown <= 0) {
      setPhase("playing");
      startTime.current = Date.now();
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdown]);

  // Game loop
  useEffect(() => {
    if (phase !== "playing") return;

    const HIT_LINE_Y = 85; // % from top where player taps

    const loop = () => {
      const now = Date.now();
      const elapsed = now - startTime.current;

      // Spawn upcoming notes
      while (
        noteIndex.current < sortedNotes.current.length
      ) {
        const note = sortedNotes.current[noteIndex.current]!;
        // Spawn note when it needs to start falling (based on speed and hit line)
        const travelTime = (HIT_LINE_Y / settings.speed) * 16.67; // time to reach hit line
        if (note.beatTime - travelTime <= elapsed) {
          activeNotes.current.push({
            ...note,
            y: 0,
            hit: false,
            missed: false,
          });
          noteIndex.current++;
        } else {
          break;
        }
      }

      // Move notes
      const surviving: ActiveNote[] = [];
      for (const note of activeNotes.current) {
        if (note.hit) continue;

        // Calculate expected Y based on time
        const timeSinceSpawn = elapsed - (note.beatTime - (HIT_LINE_Y / settings.speed) * 16.67);
        note.y = (timeSinceSpawn / 16.67) * settings.speed;

        // Missed — past hit window
        if (note.y > HIT_LINE_Y + 15 && !note.missed) {
          note.missed = true;
          livesRef.current -= 1;
          setLives(livesRef.current);
          comboRef.current = 0;
          setCombo(0);
          setHitEffect({ lane: note.lane, type: "miss" });
          setTimeout(() => setHitEffect(null), 300);
        }

        // Remove if way off screen
        if (note.y > 110) continue;

        surviving.push(note);
      }

      activeNotes.current = surviving;
      setRenderNotes([...activeNotes.current]);

      // End conditions
      if (livesRef.current <= 0) {
        setPhase("complete");
        return;
      }
      if (
        noteIndex.current >= sortedNotes.current.length &&
        activeNotes.current.length === 0
      ) {
        // All notes done
        if (config.infiniteMode) {
          setLevel((l) => l + 1);
          noteIndex.current = 0;
          // Increase speed slightly
          sortedNotes.current = [...config.notes].sort((a, b) => a.beatTime - b.beatTime);
        } else {
          setPhase("complete");
          return;
        }
      }

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const tapLane = useCallback(
    (lane: number) => {
      if (phase !== "playing") return;

      const HIT_LINE_Y = 85;
      // Find closest non-hit note in this lane near the hit line
      let closest: ActiveNote | null = null;
      let closestDist = Infinity;

      for (const note of activeNotes.current) {
        if (note.hit || note.missed || note.lane !== lane) continue;
        const dist = Math.abs(note.y - HIT_LINE_Y);
        if (dist < closestDist) {
          closestDist = dist;
          closest = note;
        }
      }

      if (!closest) return;

      // Calculate timing accuracy in pixels
      const hitWindowPx = settings.hitWindow * settings.speed * 0.06;
      const perfectWindowPx = settings.perfectWindow * settings.speed * 0.06;

      if (closestDist <= perfectWindowPx) {
        closest.hit = true;
        comboRef.current += 1;
        setCombo(comboRef.current);
        setMaxCombo((m) => Math.max(m, comboRef.current));
        const pts = 100 + Math.min(comboRef.current * 5, 50);
        scoreRef.current += pts;
        setScore(scoreRef.current);
        setHitEffect({ lane, type: "perfect" });
        setTimeout(() => setHitEffect(null), 200);
      } else if (closestDist <= hitWindowPx) {
        closest.hit = true;
        comboRef.current += 1;
        setCombo(comboRef.current);
        setMaxCombo((m) => Math.max(m, comboRef.current));
        const pts = 50 + Math.min(comboRef.current * 2, 20);
        scoreRef.current += pts;
        setScore(scoreRef.current);
        setHitEffect({ lane, type: "good" });
        setTimeout(() => setHitEffect(null), 200);
      } else {
        // Miss
        comboRef.current = 0;
        setCombo(0);
        setHitEffect({ lane, type: "miss" });
        setTimeout(() => setHitEffect(null), 300);
      }
    },
    [phase, settings],
  );

  // Keyboard controls
  useEffect(() => {
    const keys =
      config.lanes === 3
        ? ["a", "s", "d"]
        : config.lanes === 5
          ? ["a", "s", "d", "f", "g"]
          : ["a", "s", "d", "f"];

    const onKey = (e: KeyboardEvent) => {
      const idx = keys.indexOf(e.key.toLowerCase());
      if (idx >= 0) tapLane(idx);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [config.lanes, tapLane]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = Math.max(score, config.notes.length * 100);
      onComplete({
        score,
        maxScore,
        stars: calculateStars(score, maxScore),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, config.notes.length, level, difficulty, onComplete]);

  const laneWidth = 100 / config.lanes;
  const laneEmojis = config.laneEmojis ?? Array.from({ length: config.lanes }, (_, i) =>
    ["🔴", "🔵", "🟢", "🟡", "🟣"][i % 5]!
  );

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-2 p-4">
      {/* Header */}
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>
          {combo > 0 && `🔥 ×${combo}`} {combo === 0 && `Level ${level}`}
        </span>
        <span>
          {"❤️".repeat(lives)}
          {"🖤".repeat(Math.max(0, settings.lives - lives))}
        </span>
      </div>

      {/* Countdown overlay */}
      <AnimatePresence>
        {phase === "countdown" && (
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-50 flex h-32 w-32 items-center justify-center rounded-full bg-white/90 text-5xl font-black text-sky-600 shadow-2xl"
          >
            {countdown || "GO!"}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play field */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-stone-900">
        {/* Lane backgrounds */}
        {Array.from({ length: config.lanes }, (_, i) => (
          <div
            key={i}
            className={`absolute top-0 h-full ${i % 2 === 0 ? "bg-stone-800" : "bg-stone-850"}`}
            style={{
              left: `${i * laneWidth}%`,
              width: `${laneWidth}%`,
            }}
          />
        ))}

        {/* Hit line */}
        <div
          className="absolute left-0 h-1 w-full bg-white/30"
          style={{ top: "85%" }}
        />

        {/* Falling notes */}
        {renderNotes
          .filter((n) => !n.hit)
          .map((note) => (
            <motion.div
              key={note.id}
              className={`absolute flex items-center justify-center rounded-full ${
                note.missed ? "opacity-30" : "opacity-100"
              }`}
              style={{
                left: `${note.lane * laneWidth + laneWidth / 2}%`,
                top: `${note.y}%`,
                transform: "translate(-50%, -50%)",
                width: "36px",
                height: "36px",
              }}
            >
              <span className="text-2xl drop-shadow-lg">{note.emoji}</span>
            </motion.div>
          ))}

        {/* Hit effects */}
        <AnimatePresence>
          {hitEffect && (
            <motion.div
              key={`${hitEffect.lane}-${Date.now()}`}
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{ opacity: 0, scale: 2 }}
              exit={{ opacity: 0 }}
              className="absolute"
              style={{
                left: `${hitEffect.lane * laneWidth + laneWidth / 2}%`,
                top: "85%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <span
                className={`text-sm font-black ${
                  hitEffect.type === "perfect"
                    ? "text-amber-400"
                    : hitEffect.type === "good"
                      ? "text-emerald-400"
                      : "text-red-400"
                }`}
              >
                {hitEffect.type === "perfect"
                  ? "PERFECT!"
                  : hitEffect.type === "good"
                    ? "GOOD"
                    : "MISS"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lane tap buttons */}
        <div className="absolute bottom-0 left-0 flex h-[15%] w-full">
          {Array.from({ length: config.lanes }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => tapLane(i)}
              className="flex flex-1 items-center justify-center border-r border-stone-700 text-2xl transition active:bg-white/20"
            >
              {laneEmojis[i]}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-stone-400">
        Best combo: {maxCombo} • Keys: {config.lanes === 3 ? "A S D" : config.lanes === 5 ? "A S D F G" : "A S D F"}
      </p>
    </div>
  );
}
