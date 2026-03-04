/* -------------------------------------------------------------------------- */
/*  Infinite Runner Engine — Endless side-scrolling obstacle avoidance       */
/*  Temple Run / Subway Surfers inspired with educational collectibles       */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars } from "@/lib/games/engine/scoring";

export type RunnerCollectible = {
  emoji: string;
  label: string;
  points: number;
};

export type RunnerObstacle = {
  emoji: string;
  width: number; // 1-3 lanes
};

export type InfiniteRunnerConfig = {
  title: string;
  collectibles: RunnerCollectible[];
  obstacles: RunnerObstacle[];
  lanes?: number;
  backgroundEmoji?: string;
  question?: string;      // optional objective text
};

type Entity = {
  id: number;
  type: "collectible" | "obstacle";
  lane: number;
  y: number;       // 0 = top off-screen, 100 = bottom
  data: RunnerCollectible | RunnerObstacle;
};

type Props = {
  config: InfiniteRunnerConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<
  Difficulty,
  { speed: number; spawnInterval: number; duration: number; lives: number }
> = {
  easy:   { speed: 0.6, spawnInterval: 1200, duration: 60_000,  lives: 5 },
  medium: { speed: 0.9, spawnInterval: 900,  duration: 90_000,  lives: 3 },
  hard:   { speed: 1.2, spawnInterval: 650,  duration: 120_000, lives: 2 },
};

export function InfiniteRunnerEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const LANES = config.lanes ?? 3;

  const [playerLane, setPlayerLane] = useState(Math.floor(LANES / 2));
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(settings.lives);
  const [distance, setDistance] = useState(0);
  const [level, setLevel] = useState(1);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [flash, setFlash] = useState<"hit" | "collect" | null>(null);

  const entitiesRef = useRef<Entity[]>([]);
  const [entities, setEntities] = useState<Entity[]>([]);
  const nextId = useRef(0);
  const frameRef = useRef(0);
  const lastSpawn = useRef(0);
  const speedRef = useRef(settings.speed);
  const startTime = useRef(Date.now());
  const playerLaneRef = useRef(playerLane);
  const livesRef = useRef(lives);
  const scoreRef = useRef(0);
  const distRef = useRef(0);

  playerLaneRef.current = playerLane;
  livesRef.current = lives;
  scoreRef.current = score;
  distRef.current = distance;

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase !== "playing") return;
      if (e.key === "ArrowLeft" || e.key === "a") {
        setPlayerLane((l) => Math.max(0, l - 1));
      } else if (e.key === "ArrowRight" || e.key === "d") {
        setPlayerLane((l) => Math.min(LANES - 1, l + 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, LANES]);

  // Game loop
  useEffect(() => {
    if (phase !== "playing") return;

    const elapsed = () => Date.now() - startTime.current;
    const spawnEntity = () => {
      const isObstacle = Math.random() < 0.4;
      const lane = Math.floor(Math.random() * LANES);

      if (isObstacle) {
        const obs =
          config.obstacles[Math.floor(Math.random() * config.obstacles.length)]!;
        entitiesRef.current.push({
          id: nextId.current++,
          type: "obstacle",
          lane,
          y: -8,
          data: obs,
        });
      } else {
        const col =
          config.collectibles[Math.floor(Math.random() * config.collectibles.length)]!;
        entitiesRef.current.push({
          id: nextId.current++,
          type: "collectible",
          lane,
          y: -8,
          data: col,
        });
      }
    };

    const loop = () => {
      const now = Date.now();

      // End condition
      if (elapsed() >= settings.duration || livesRef.current <= 0) {
        setPhase("complete");
        return;
      }

      // Spawn
      if (now - lastSpawn.current > settings.spawnInterval / (1 + distRef.current * 0.001)) {
        spawnEntity();
        lastSpawn.current = now;
      }

      // Move entities
      const playerL = playerLaneRef.current;
      const surviving: Entity[] = [];

      for (const ent of entitiesRef.current) {
        ent.y += speedRef.current + distRef.current * 0.002;

        // Off screen
        if (ent.y > 105) continue;

        // Collision zone
        if (ent.y >= 78 && ent.y <= 92 && ent.lane === playerL) {
          if (ent.type === "collectible") {
            const pts = (ent.data as RunnerCollectible).points;
            scoreRef.current += pts;
            setScore(scoreRef.current);
            setFlash("collect");
            setTimeout(() => setFlash(null), 200);
          } else {
            livesRef.current -= 1;
            setLives(livesRef.current);
            setFlash("hit");
            setTimeout(() => setFlash(null), 300);
          }
          continue; // consumed
        }

        surviving.push(ent);
      }

      entitiesRef.current = surviving;
      distRef.current += speedRef.current;
      setDistance(Math.round(distRef.current));
      setEntities([...entitiesRef.current]);

      // Level up every 500 distance
      const newLevel = Math.floor(distRef.current / 500) + 1;
      if (newLevel > level) {
        setLevel(newLevel);
        speedRef.current = settings.speed + newLevel * 0.15;
      }

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = Math.max(score, 300);
      onComplete({
        score,
        maxScore,
        stars: calculateStars(score, maxScore),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete]);

  const laneWidth = 100 / LANES;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-2 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>Dist: {distance}m</span>
        <span>
          {"❤️".repeat(lives)}
          {"🖤".repeat(Math.max(0, settings.lives - lives))}
        </span>
      </div>

      {config.question && (
        <p className="text-xs font-medium text-stone-500">{config.question}</p>
      )}

      {/* Game field */}
      <div
        className={`relative h-[400px] w-full overflow-hidden rounded-2xl border-2 ${
          flash === "hit"
            ? "border-red-400 bg-red-50"
            : flash === "collect"
              ? "border-emerald-400 bg-emerald-50"
              : "border-stone-200 bg-stone-50"
        } transition-colors`}
      >
        {/* Lane dividers */}
        {Array.from({ length: LANES - 1 }, (_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-px bg-stone-200"
            style={{ left: `${(i + 1) * laneWidth}%` }}
          />
        ))}

        {/* Entities */}
        {entities.map((ent) => (
          <motion.div
            key={ent.id}
            className="absolute flex items-center justify-center"
            style={{
              left: `${ent.lane * laneWidth + laneWidth / 2}%`,
              top: `${ent.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-2xl">
              {ent.type === "collectible"
                ? (ent.data as RunnerCollectible).emoji
                : (ent.data as RunnerObstacle).emoji}
            </span>
          </motion.div>
        ))}

        {/* Player */}
        <motion.div
          className="absolute bottom-[12%] flex items-center justify-center"
          animate={{ left: `${playerLane * laneWidth + laneWidth / 2}%` }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{ transform: "translate(-50%, 0)" }}
        >
          <span className="text-4xl drop-shadow-md">🏃</span>
        </motion.div>

        {/* Mobile controls */}
        <div className="absolute bottom-2 left-0 flex w-full justify-between px-4">
          <button
            type="button"
            onClick={() => setPlayerLane((l) => Math.max(0, l - 1))}
            className="rounded-full bg-white/80 px-4 py-2 text-lg font-bold shadow active:bg-stone-200"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setPlayerLane((l) => Math.min(LANES - 1, l + 1))}
            className="rounded-full bg-white/80 px-4 py-2 text-lg font-bold shadow active:bg-stone-200"
          >
            →
          </button>
        </div>

        {/* Background scrolling decoration */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center opacity-10 text-6xl">
          {config.backgroundEmoji ?? "🌲"}
        </div>
      </div>

      <p className="text-xs text-stone-400">
        Level {level} • Speed ×{speedRef.current.toFixed(1)}
      </p>
    </div>
  );
}
