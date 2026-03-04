/* -------------------------------------------------------------------------- */
/*  Maze-Runner Engine — Navigate through a procedural maze                  */
/*  Collect items, avoid traps, reach the exit                               */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle, clamp } from "@/lib/games/engine/scoring";

export type MazeCollectible = {
  emoji: string;
  label: string;
  points: number;
};

export type MazeRunnerConfig = {
  title: string;
  collectibles: MazeCollectible[];
  trapEmoji?: string;
  exitEmoji?: string;
  playerEmoji?: string;
  infiniteMode?: boolean;
};

type Cell = { walls: [boolean, boolean, boolean, boolean]; visited: boolean }; // [top, right, bottom, left]

type Props = {
  config: MazeRunnerConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { size: number; timeLimit: number; collectCount: number; trapCount: number }> = {
  easy:   { size: 7,  timeLimit: 120_000, collectCount: 4, trapCount: 1 },
  medium: { size: 10, timeLimit: 150_000, collectCount: 6, trapCount: 3 },
  hard:   { size: 13, timeLimit: 180_000, collectCount: 8, trapCount: 5 },
};

function generateMaze(size: number): Cell[][] {
  const grid: Cell[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({ walls: [true, true, true, true] as [boolean, boolean, boolean, boolean], visited: false })),
  );

  const stack: [number, number][] = [];
  const start: [number, number] = [0, 0];
  grid[0]![0]!.visited = true;
  stack.push(start);

  const neighbors = (r: number, c: number): [number, number, number][] => {
    const n: [number, number, number][] = [];
    if (r > 0 && !grid[r - 1]![c]!.visited) n.push([r - 1, c, 0]); // top
    if (c < size - 1 && !grid[r]![c + 1]!.visited) n.push([r, c + 1, 1]); // right
    if (r < size - 1 && !grid[r + 1]![c]!.visited) n.push([r + 1, c, 2]); // bottom
    if (c > 0 && !grid[r]![c - 1]!.visited) n.push([r, c - 1, 3]); // left
    return n;
  };

  while (stack.length > 0) {
    const [cr, cc] = stack[stack.length - 1]!;
    const ns = neighbors(cr, cc);
    if (ns.length === 0) {
      stack.pop();
    } else {
      const [nr, nc, wall] = ns[Math.floor(Math.random() * ns.length)]!;
      // Remove walls
      grid[cr]![cc]!.walls[wall] = false;
      const opposites = [2, 3, 0, 1];
      grid[nr]![nc]!.walls[opposites[wall]!] = false;
      grid[nr]![nc]!.visited = true;
      stack.push([nr, nc]);
    }
  }

  return grid;
}

export function MazeRunnerEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const [maze, setMaze] = useState<Cell[][]>(() => generateMaze(settings.size));
  const [player, setPlayer] = useState<[number, number]>([0, 0]);
  const [exit, setExit] = useState<[number, number]>([settings.size - 1, settings.size - 1]);

  const collectibles = useMemo(() => {
    const positions: { r: number; c: number; item: MazeCollectible; collected: boolean }[] = [];
    const used = new Set(["0,0", `${settings.size - 1},${settings.size - 1}`]);
    for (let i = 0; i < settings.collectCount; i++) {
      let r: number, c: number;
      do {
        r = Math.floor(Math.random() * settings.size);
        c = Math.floor(Math.random() * settings.size);
      } while (used.has(`${r},${c}`));
      used.add(`${r},${c}`);
      const item = config.collectibles[i % config.collectibles.length]!;
      positions.push({ r, c, item, collected: false });
    }
    return positions;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maze]);

  const traps = useMemo(() => {
    const positions: { r: number; c: number }[] = [];
    const used = new Set(["0,0", `${settings.size - 1},${settings.size - 1}`, ...collectibles.map((c) => `${c.r},${c.c}`)]);
    for (let i = 0; i < settings.trapCount; i++) {
      let r: number, c: number;
      do {
        r = Math.floor(Math.random() * settings.size);
        c = Math.floor(Math.random() * settings.size);
      } while (used.has(`${r},${c}`));
      used.add(`${r},${c}`);
      positions.push({ r, c });
    }
    return positions;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maze, collectibles]);

  const [collectedSet, setCollectedSet] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());

  // Timer
  useEffect(() => {
    if (phase !== "playing") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) { setPhase("complete"); return 0; }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [phase]);

  // Movement
  const move = useCallback(
    (dir: 0 | 1 | 2 | 3) => {
      if (phase !== "playing") return;
      const [r, c] = player;
      const cell = maze[r]?.[c];
      if (!cell || cell.walls[dir]) return;

      const dr = [- 1, 0, 1, 0][dir]!;
      const dc = [0, 1, 0, -1][dir]!;
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= settings.size || nc < 0 || nc >= settings.size) return;

      setPlayer([nr, nc]);
      setMoves((m) => m + 1);

      // Check collectibles
      const key = `${nr},${nc}`;
      if (!collectedSet.has(key)) {
        const col = collectibles.find((ci) => ci.r === nr && ci.c === nc && !ci.collected);
        if (col) {
          setCollectedSet((prev) => new Set(prev).add(key));
          setScore((s) => s + col.item.points);
        }
      }

      // Check traps
      const isTrap = traps.some((t) => t.r === nr && t.c === nc);
      if (isTrap) {
        setScore((s) => Math.max(0, s - 50));
      }

      // Check exit
      if (nr === exit[0] && nc === exit[1]) {
        // Bonus for remaining time
        setScore((s) => s + Math.round(timeLeft / 1000) * 10);
        if (config.infiniteMode) {
          setLevel((l) => l + 1);
          setMaze(generateMaze(Math.min(settings.size + level, 15)));
          setPlayer([0, 0]);
          setExit([Math.min(settings.size + level, 15) - 1, Math.min(settings.size + level, 15) - 1]);
          setCollectedSet(new Set());
        } else {
          setPhase("complete");
        }
      }
    },
    [phase, player, maze, settings.size, collectedSet, collectibles, traps, exit, timeLeft, config.infiniteMode, level],
  );

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.code) {
        case "ArrowUp": case "KeyW": move(0); break;
        case "ArrowRight": case "KeyD": move(1); break;
        case "ArrowDown": case "KeyS": move(2); break;
        case "ArrowLeft": case "KeyA": move(3); break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [move]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = settings.collectCount * 100 + 500;
      onComplete({
        score,
        maxScore,
        stars: calculateStars(score, maxScore),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete, settings.collectCount]);

  const cellSize = clamp(Math.floor(280 / settings.size), 16, 36);
  const pct = timeLeft / settings.timeLimit;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>Level {level}</span>
        <span>Moves: {moves}</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${pct * 100}%` }} />
      </div>

      {/* Maze grid */}
      <div className="overflow-auto rounded-xl bg-white p-2 shadow-lg">
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${settings.size}, ${cellSize}px)` }}>
          {maze.map((row, r) =>
            row.map((cell, c) => {
              const isPlayer = player[0] === r && player[1] === c;
              const isExit = exit[0] === r && exit[1] === c;
              const col = collectibles.find((ci) => ci.r === r && ci.c === c);
              const isCollected = collectedSet.has(`${r},${c}`);
              const isTrap = traps.some((t) => t.r === r && t.c === c);

              return (
                <div
                  key={`${r}-${c}`}
                  className="flex items-center justify-center"
                  style={{
                    width: cellSize,
                    height: cellSize,
                    borderTop: cell.walls[0] ? "2px solid #57534e" : "2px solid transparent",
                    borderRight: cell.walls[1] ? "2px solid #57534e" : "2px solid transparent",
                    borderBottom: cell.walls[2] ? "2px solid #57534e" : "2px solid transparent",
                    borderLeft: cell.walls[3] ? "2px solid #57534e" : "2px solid transparent",
                    backgroundColor: isPlayer ? "#bae6fd" : isExit ? "#fef3c7" : undefined,
                    fontSize: cellSize * 0.55,
                  }}
                >
                  {isPlayer ? (
                    <motion.span
                      key={`${r}-${c}`}
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                    >
                      {config.playerEmoji ?? "🧑‍🎓"}
                    </motion.span>
                  ) : isExit ? (
                    config.exitEmoji ?? "🚪"
                  ) : col && !isCollected ? (
                    col.item.emoji
                  ) : isTrap ? (
                    config.trapEmoji ?? "💥"
                  ) : null}
                </div>
              );
            }),
          )}
        </div>
      </div>

      {/* D-pad for mobile */}
      <div className="grid grid-cols-3 gap-1">
        <div />
        <button type="button" onClick={() => move(0)} className="rounded-lg bg-stone-200 px-4 py-2 text-lg font-bold active:bg-stone-300">↑</button>
        <div />
        <button type="button" onClick={() => move(3)} className="rounded-lg bg-stone-200 px-4 py-2 text-lg font-bold active:bg-stone-300">←</button>
        <div className="flex items-center justify-center text-xs text-stone-400">WASD</div>
        <button type="button" onClick={() => move(1)} className="rounded-lg bg-stone-200 px-4 py-2 text-lg font-bold active:bg-stone-300">→</button>
        <div />
        <button type="button" onClick={() => move(2)} className="rounded-lg bg-stone-200 px-4 py-2 text-lg font-bold active:bg-stone-300">↓</button>
        <div />
      </div>

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">{"⭐".repeat(calculateStars(score, settings.collectCount * 100 + 500))}</p>
          <p className="mt-1 font-bold text-stone-700">{score} pts · {moves} moves</p>
        </motion.div>
      )}
    </div>
  );
}
