/* -------------------------------------------------------------------------- */
/*  Platformer Engine — Side-scrolling collection game (Mario inspired)      */
/*  Procedural levels, jump/run/collect mechanics                            */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, clamp } from "@/lib/games/engine/scoring";

export type PlatformObject = {
  emoji: string;
  label: string;
  points: number;
  correct?: boolean;
};

export type PlatformerConfig = {
  title: string;
  collectibles: PlatformObject[];
  obstacles: PlatformObject[];
  question?: string;
  backgroundEmoji?: string;
};

type Entity = { x: number; y: number; w: number; h: number; emoji: string; points: number; correct?: boolean; key: number };

type Props = {
  config: PlatformerConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { speed: number; gravity: number; jumpForce: number; duration: number; spawnRate: number }> = {
  easy:   { speed: 3, gravity: 0.4, jumpForce: -8, duration: 60_000, spawnRate: 2000 },
  medium: { speed: 4.5, gravity: 0.5, jumpForce: -9, duration: 90_000, spawnRate: 1500 },
  hard:   { speed: 6, gravity: 0.6, jumpForce: -10, duration: 120_000, spawnRate: 1000 },
};

const GROUND_Y = 75; // % from top
let _pk = 0;

export function PlatformerEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const [playerY, setPlayerY] = useState(GROUND_Y);
  const [velY, setVelY] = useState(0);
  const [entities, setEntities] = useState<Entity[]>([]);
  const [score, setScore] = useState(0);
  const [collected, setCollected] = useState(0);
  const [hits, setHits] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(settings.duration);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const [distance, setDistance] = useState(0);
  const startTime = useRef(Date.now());
  const animRef = useRef(0);
  const lastFrame = useRef(performance.now());
  const lastSpawn = useRef(0);
  const jumping = useRef(false);
  const velRef = useRef(0);
  const yRef = useRef(GROUND_Y);

  // Input handling
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.code === "Space" || e.code === "ArrowUp") && yRef.current >= GROUND_Y - 1) {
        velRef.current = settings.jumpForce;
        jumping.current = true;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [settings.jumpForce]);

  const handleTap = useCallback(() => {
    if (yRef.current >= GROUND_Y - 1) {
      velRef.current = settings.jumpForce;
      jumping.current = true;
    }
  }, [settings.jumpForce]);

  // Game loop
  useEffect(() => {
    if (phase !== "playing") return;

    const loop = (now: number) => {
      const dt = Math.min((now - lastFrame.current) / 16.67, 3);
      lastFrame.current = now;

      // Physics
      velRef.current += settings.gravity * dt;
      yRef.current = clamp(yRef.current + velRef.current * dt, 10, GROUND_Y);
      if (yRef.current >= GROUND_Y) {
        yRef.current = GROUND_Y;
        velRef.current = 0;
        jumping.current = false;
      }
      setPlayerY(yRef.current);
      setVelY(velRef.current);

      // Distance
      setDistance((d) => d + settings.speed * dt * 0.1);

      // Spawn entities
      if (now - lastSpawn.current > settings.spawnRate / Math.min(level, 3)) {
        lastSpawn.current = now;
        const isObstacle = Math.random() < 0.3;
        if (isObstacle && config.obstacles.length > 0) {
          const obs = config.obstacles[Math.floor(Math.random() * config.obstacles.length)]!;
          setEntities((prev) => [...prev, {
            x: 105, y: GROUND_Y - Math.random() * 5,
            w: 8, h: 8, emoji: obs.emoji, points: obs.points, correct: false, key: ++_pk,
          }]);
        } else {
          const col = config.collectibles[Math.floor(Math.random() * config.collectibles.length)]!;
          const jumpHeight = Math.random() < 0.4;
          setEntities((prev) => [...prev, {
            x: 105, y: jumpHeight ? GROUND_Y - 20 - Math.random() * 15 : GROUND_Y - Math.random() * 5,
            w: 6, h: 6, emoji: col.emoji, points: col.points, correct: col.correct ?? true, key: ++_pk,
          }]);
        }
      }

      // Move entities & check collisions
      setEntities((prev) => {
        const kept: Entity[] = [];
        for (const e of prev) {
          const nx = e.x - settings.speed * dt * 1.2;
          if (nx < -10) continue; // Off screen

          // Collision check (simple box)
          const playerX = 15;
          const py = yRef.current;
          const hitX = Math.abs(nx - playerX) < 8;
          const hitY = Math.abs(e.y - py) < 10;

          if (hitX && hitY) {
            if (e.correct !== false) {
              setScore((s) => s + e.points);
              setCollected((c) => c + 1);
            } else {
              setLives((l) => {
                const next = l - 1;
                if (next <= 0) setPhase("complete");
                return next;
              });
              setHits((h) => h + 1);
            }
            continue; // Remove on collision
          }

          kept.push({ ...e, x: nx });
        }
        return kept;
      });

      // Time
      setTimeLeft((t) => {
        const next = t - dt * 16.67;
        if (next <= 0) { setPhase("complete"); return 0; }
        return next;
      });

      animRef.current = requestAnimationFrame(loop);
    };

    lastFrame.current = performance.now();
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase, settings, config, level]);

  // Level up
  useEffect(() => {
    if (collected > 0 && collected % 20 === 0) setLevel((l) => l + 1);
  }, [collected]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = Math.max(score, collected * 100);
      onComplete({
        score,
        maxScore: maxScore || 1,
        stars: calculateStars(score, maxScore || 1),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, collected, level, difficulty, onComplete]);

  const pct = clamp(timeLeft / settings.duration, 0, 1);

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-2 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>{"❤️".repeat(lives)}</span>
        <span>Level {level}</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${pct * 100}%` }} />
      </div>

      {config.question && (
        <p className="text-center text-sm font-medium text-stone-500">{config.question}</p>
      )}

      {/* Play area */}
      <button
        type="button"
        onClick={handleTap}
        className="relative h-64 w-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-100 shadow-inner focus:outline-none"
      >
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-emerald-600 to-emerald-400" />

        {/* Scrolling ground marks */}
        {[0, 25, 50, 75, 100].map((pos) => (
          <div
            key={pos}
            className="absolute bottom-8 h-1 w-4 rounded bg-emerald-700/30"
            style={{
              left: `${((pos - distance * 5) % 120 + 120) % 120}%`,
            }}
          />
        ))}

        {/* Player */}
        <motion.div
          className="absolute text-3xl"
          style={{
            left: "15%",
            top: `${playerY}%`,
            transform: "translate(-50%, -100%)",
          }}
          animate={{
            rotate: jumping.current ? -15 : 0,
          }}
        >
          🏃
        </motion.div>

        {/* Entities */}
        {entities.map((e) => (
          <motion.div
            key={e.key}
            className="absolute text-2xl"
            style={{
              left: `${e.x}%`,
              top: `${e.y}%`,
              transform: "translate(-50%, -100%)",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            {e.emoji}
          </motion.div>
        ))}

        {/* Tap hint */}
        <div className="absolute bottom-10 right-3 text-xs text-stone-400/60 select-none">
          Tap/Space to jump
        </div>
      </button>

      <div className="flex gap-4 text-xs text-stone-500">
        <span>Collected: {collected}</span>
        <span>Distance: {Math.floor(distance)}m</span>
      </div>
    </div>
  );
}
