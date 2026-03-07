"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lightbulb, Trophy, RotateCcw, Zap } from "lucide-react";
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

/* ─── puzzle data ─── */
type CellType = "empty" | "wall" | "wall-0" | "wall-1" | "wall-2" | "wall-3" | "wall-4";
// wall-N = black cell requiring exactly N adjacent lights

type Puzzle = {
  id: string;
  name: string;
  size: number;
  grid: CellType[][];
};

const PUZZLES: Puzzle[] = [
  {
    id: "easy-1",
    name: "Dawn",
    size: 4,
    grid: [
      ["empty", "empty", "wall-1", "empty"],
      ["empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty"],
      ["empty", "wall-1", "empty", "empty"],
    ],
  },
  {
    id: "easy-2",
    name: "Sunrise",
    size: 4,
    grid: [
      ["empty", "wall-0", "empty", "empty"],
      ["empty", "empty", "empty", "wall-1"],
      ["wall-1", "empty", "empty", "empty"],
      ["empty", "empty", "wall-0", "empty"],
    ],
  },
  {
    id: "med-1",
    name: "Morning",
    size: 5,
    grid: [
      ["empty", "empty", "wall", "empty", "empty"],
      ["empty", "wall-2", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "wall-1", "empty"],
      ["empty", "empty", "wall", "empty", "empty"],
    ],
  },
  {
    id: "med-2",
    name: "Noon",
    size: 5,
    grid: [
      ["wall-1", "empty", "empty", "empty", "wall-1"],
      ["empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "wall-0", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty"],
      ["wall-1", "empty", "empty", "empty", "wall-1"],
    ],
  },
  {
    id: "hard-1",
    name: "Dusk",
    size: 6,
    grid: [
      ["empty", "empty", "wall-1", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "wall", "empty"],
      ["wall", "empty", "empty", "empty", "empty", "wall-2"],
      ["wall-2", "empty", "empty", "empty", "empty", "wall"],
      ["empty", "wall", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "wall-1", "empty", "empty"],
    ],
  },
  {
    id: "hard-2",
    name: "Twilight",
    size: 6,
    grid: [
      ["empty", "wall-1", "empty", "empty", "wall-2", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "wall-0", "wall-1", "empty", "empty"],
      ["empty", "empty", "wall-1", "wall-0", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "wall-2", "empty", "empty", "wall-1", "empty"],
    ],
  },
  {
    id: "expert-1",
    name: "Midnight",
    size: 7,
    grid: [
      ["empty", "empty", "empty", "wall-1", "empty", "empty", "empty"],
      ["empty", "wall", "empty", "empty", "empty", "wall", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["wall-2", "empty", "empty", "wall-0", "empty", "empty", "wall-2"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "wall", "empty", "empty", "empty", "wall", "empty"],
      ["empty", "empty", "empty", "wall-1", "empty", "empty", "empty"],
    ],
  },
];

const ROUNDS = 5;

/* ─── helpers ─── */
function isWall(cell: CellType): boolean {
  return cell === "wall" || cell.startsWith("wall-");
}

function wallNumber(cell: CellType): number | null {
  if (cell.startsWith("wall-")) return parseInt(cell.split("-")[1]);
  return null;
}

function computeIlluminated(grid: CellType[][], lights: Set<string>): Set<string> {
  const lit = new Set<string>();
  lights.forEach((key) => {
    const [r, c] = key.split(",").map(Number);
    lit.add(key);
    // Cast rays in 4 directions
    for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      let nr = r + dr;
      let nc = c + dc;
      while (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && !isWall(grid[nr][nc])) {
        lit.add(`${nr},${nc}`);
        nr += dr;
        nc += dc;
      }
    }
  });
  return lit;
}

function hasConflict(grid: CellType[][], lights: Set<string>): Set<string> {
  const conflicts = new Set<string>();
  lights.forEach((key) => {
    const [r, c] = key.split(",").map(Number);
    // Check if any other light is visible from this one
    for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      let nr = r + dr;
      let nc = c + dc;
      while (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && !isWall(grid[nr][nc])) {
        if (lights.has(`${nr},${nc}`)) {
          conflicts.add(key);
          conflicts.add(`${nr},${nc}`);
        }
        nr += dr;
        nc += dc;
      }
    }
  });
  return conflicts;
}

function checkWallConstraints(grid: CellType[][], lights: Set<string>): { satisfied: Set<string>; violated: Set<string> } {
  const satisfied = new Set<string>();
  const violated = new Set<string>();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const num = wallNumber(grid[r][c]);
      if (num === null) continue;
      let adj = 0;
      for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
        if (lights.has(`${r + dr},${c + dc}`)) adj++;
      }
      if (adj === num) satisfied.add(`${r},${c}`);
      else if (adj > num) violated.add(`${r},${c}`);
    }
  }
  return { satisfied, violated };
}

function isSolved(grid: CellType[][], lights: Set<string>): boolean {
  const illuminated = computeIlluminated(grid, lights);
  const conflicts = hasConflict(grid, lights);
  if (conflicts.size > 0) return false;

  // All empty cells must be illuminated
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (!isWall(grid[r][c]) && !illuminated.has(`${r},${c}`)) return false;
    }
  }

  // All wall constraints satisfied
  const { violated } = checkWallConstraints(grid, lights);
  if (violated.size > 0) return false;

  // Check wall numbers are exactly met
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const num = wallNumber(grid[r][c]);
      if (num === null) continue;
      let adj = 0;
      for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
        if (lights.has(`${r + dr},${c + dc}`)) adj++;
      }
      if (adj !== num) return false;
    }
  }

  return true;
}

/* ─── state ─── */
type Phase = "ready" | "playing" | "complete";

type State = {
  phase: Phase;
  round: number;
  score: number;
  puzzle: Puzzle | null;
  lights: Set<string>;
  perfectRounds: number;
};

type Action =
  | { type: "START"; puzzle: Puzzle }
  | { type: "TOGGLE"; key: string }
  | { type: "CLEAR" }
  | { type: "SOLVE"; points: number }
  | { type: "NEXT"; puzzle: Puzzle }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, puzzle: a.puzzle, lights: new Set(), perfectRounds: 0 };
    case "TOGGLE": {
      const next = new Set(s.lights);
      if (next.has(a.key)) next.delete(a.key); else next.add(a.key);
      return { ...s, lights: next };
    }
    case "CLEAR":
      return { ...s, lights: new Set() };
    case "SOLVE":
      return { ...s, score: s.score + a.points, perfectRounds: s.perfectRounds + 1 };
    case "NEXT":
      return { ...s, round: s.round + 1, puzzle: a.puzzle, lights: new Set() };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = { phase: "ready", round: 0, score: 0, puzzle: null, lights: new Set<string>(), perfectRounds: 0 };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── component ─── */
export default function GameLightTowers() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const puzzleOrder = useRef<Puzzle[]>([]);

  const { phase, round, score, puzzle, lights, perfectRounds } = state;

  const illuminated = useMemo(() => puzzle ? computeIlluminated(puzzle.grid, lights) : new Set<string>(), [puzzle, lights]);
  const conflicts = useMemo(() => puzzle ? hasConflict(puzzle.grid, lights) : new Set<string>(), [puzzle, lights]);
  const wallStatus = useMemo(() => puzzle ? checkWallConstraints(puzzle.grid, lights) : { satisfied: new Set<string>(), violated: new Set<string>() }, [puzzle, lights]);
  const solved = useMemo(() => puzzle ? isSolved(puzzle.grid, lights) : false, [puzzle, lights]);

  const stars = useMemo(() => {
    if (perfectRounds >= 4) return 3;
    if (perfectRounds >= 3) return 2;
    if (perfectRounds >= 1) return 1;
    return 0;
  }, [perfectRounds]);

  useEffect(() => {
    if (!solved || phase !== "playing") return;
    hapticCelebration();
    const points = 300 - lights.size * 10; // fewer lights = higher score
    dispatch({ type: "SOLVE", points: Math.max(100, points) });
    mascot.say("All cells illuminated! 💡", "cheering");

    setTimeout(() => {
      if (round >= ROUNDS) {
        emitLegacyGameComplete(sessionId.current, score + Math.max(100, points), stars);
        dispatch({ type: "FINISH" });
      } else {
        dispatch({ type: "NEXT", puzzle: puzzleOrder.current[round] });
      }
    }, 1500);
  }, [solved, phase, round, score, stars, lights, mascot]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    puzzleOrder.current = shuffle(PUZZLES).slice(0, ROUNDS);
    dispatch({ type: "START", puzzle: puzzleOrder.current[0] });
    mascot.say("Place lights to illuminate every cell! 💡", "excited");
  }, [mascot]);

  const handleCellClick = useCallback((r: number, c: number) => {
    if (!puzzle || isWall(puzzle.grid[r][c])) return;
    hapticSelection();
    dispatch({ type: "TOGGLE", key: `${r},${c}` });
  }, [puzzle]);

  const cellPx = puzzle ? Math.min(48, 280 / puzzle.size) : 44;

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-400" />
          <span className="text-sm font-bold text-white">Light Towers</span>
        </div>
        {phase === "playing" && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Puzzle {round}/{ROUNDS}</span>
            <span className="text-amber-400 font-bold">{score}</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Light Towers</h2>
            <p className="text-stone-400 max-w-xs">
              Place lights to illuminate every empty cell. No two lights can see each other! Numbers on walls show how many adjacent lights are needed.
            </p>
            <div className="flex gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> {PUZZLES.length} puzzles</span>
              <span>{ROUNDS} rounds</span>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">Start Lighting 💡</PhysicalButton>
          </motion.section>
        )}

        {phase === "playing" && puzzle && (
          <motion.section key={`puzzle-${puzzle.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center gap-4 px-4 py-5 w-full">
            <h3 className="text-sm font-bold text-white">{puzzle.name}</h3>

            {/* grid */}
            <div className="flex flex-col gap-0.5">
              {puzzle.grid.map((row, r) => (
                <div key={r} className="flex gap-0.5">
                  {row.map((cell, c) => {
                    const key = `${r},${c}`;
                    const hasLight = lights.has(key);
                    const isLit = illuminated.has(key);
                    const isConflict = conflicts.has(key);
                    const wn = wallNumber(cell);
                    const wallSat = wallStatus.satisfied.has(key);
                    const wallViol = wallStatus.violated.has(key);

                    let bg = "bg-stone-800/60";
                    if (isWall(cell)) {
                      bg = wallViol ? "bg-red-900/80" : wallSat ? "bg-emerald-900/60" : "bg-stone-700";
                    } else if (hasLight && isConflict) {
                      bg = "bg-red-500/30";
                    } else if (hasLight) {
                      bg = "bg-amber-400/30";
                    } else if (isLit) {
                      bg = "bg-amber-400/10";
                    }

                    return (
                      <motion.button
                        key={c}
                        onClick={() => handleCellClick(r, c)}
                        disabled={isWall(cell)}
                        whileTap={!isWall(cell) ? { scale: 0.9 } : undefined}
                        className={`flex items-center justify-center rounded-lg ring-1 transition-colors ${
                          isConflict && hasLight ? "ring-red-400/60" : "ring-white/5"
                        } ${bg}`}
                        style={{ width: cellPx, height: cellPx }}
                      >
                        {hasLight && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-lg"
                          >
                            💡
                          </motion.span>
                        )}
                        {isWall(cell) && wn !== null && (
                          <span className={`text-sm font-black ${wallSat ? "text-emerald-300" : wallViol ? "text-red-300" : "text-white"}`}>
                            {wn}
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="flex gap-3 text-[10px] text-stone-500">
              <span>💡 = light</span>
              <span className="text-amber-400/60">■ = illuminated</span>
              <span className="text-red-400/60">■ = conflict</span>
            </div>

            <PhysicalButton onClick={() => dispatch({ type: "CLEAR" })} variant="secondary">
              <RotateCcw className="h-4 w-4 mr-1" /> Reset
            </PhysicalButton>
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">All Lit Up!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  initial={{ scale: 0 }} animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}>⭐</motion.span>
              ))}
            </div>
            <p className="text-white font-bold">{score} points</p>
            <p className="text-stone-400 text-sm">{perfectRounds}/{ROUNDS} puzzles solved</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 💡</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
