"use client";

import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Droplets, Trophy } from "lucide-react";
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

/* ─── types ─── */
type Phase = "ready" | "playing" | "flowing" | "complete";

// Each pipe has 4 sides: top, right, bottom, left — true = open
type PipeOpenings = [boolean, boolean, boolean, boolean];

type PipeType = "straight" | "elbow" | "tee" | "cross";

const PIPE_DEFS: Record<PipeType, PipeOpenings> = {
  straight: [true, false, true, false],
  elbow: [true, true, false, false],
  tee: [true, true, false, true],
  cross: [true, true, true, true],
};

function rotatePipe(openings: PipeOpenings): PipeOpenings {
  return [openings[3], openings[0], openings[1], openings[2]];
}

type Cell = {
  pipe: PipeType | null;
  openings: PipeOpenings;
  rotations: number;
  filled: boolean;
  isSource: boolean;
  isDrain: boolean;
};

type Level = {
  gridSize: number;
  sourceRow: number;
  drainRow: number;
  preplacedPipes: { row: number; col: number; type: PipeType; rotations: number }[];
};

const GRID = 5;

const LEVELS: Level[] = [
  { gridSize: 5, sourceRow: 2, drainRow: 2, preplacedPipes: [] },
  { gridSize: 5, sourceRow: 1, drainRow: 3, preplacedPipes: [{ row: 2, col: 2, type: "elbow", rotations: 1 }] },
  { gridSize: 5, sourceRow: 0, drainRow: 4, preplacedPipes: [{ row: 1, col: 1, type: "elbow", rotations: 1 }, { row: 3, col: 3, type: "elbow", rotations: 3 }] },
  { gridSize: 5, sourceRow: 3, drainRow: 1, preplacedPipes: [{ row: 2, col: 2, type: "tee", rotations: 0 }] },
  { gridSize: 5, sourceRow: 0, drainRow: 0, preplacedPipes: [{ row: 2, col: 2, type: "cross", rotations: 0 }] },
];

/* ─── helpers ─── */
function createGrid(level: Level): Cell[][] {
  const grid: Cell[][] = Array.from({ length: level.gridSize }, (_, r) =>
    Array.from({ length: level.gridSize }, (_, c) => ({
      pipe: null,
      openings: [false, false, false, false] as PipeOpenings,
      rotations: 0,
      filled: false,
      isSource: r === level.sourceRow && c === 0,
      isDrain: r === level.drainRow && c === level.gridSize - 1,
    }))
  );
  // source and drain
  grid[level.sourceRow]![0]!.pipe = "straight";
  grid[level.sourceRow]![0]!.openings = [false, true, false, true];
  grid[level.sourceRow]![0]!.filled = false;

  grid[level.drainRow]![level.gridSize - 1]!.pipe = "straight";
  grid[level.drainRow]![level.gridSize - 1]!.openings = [false, true, false, true];

  for (const pp of level.preplacedPipes) {
    let openings = PIPE_DEFS[pp.type];
    for (let i = 0; i < pp.rotations; i++) openings = rotatePipe(openings);
    grid[pp.row]![pp.col]! = {
      pipe: pp.type,
      openings,
      rotations: pp.rotations,
      filled: false,
      isSource: false,
      isDrain: false,
    };
  }
  return grid;
}

function simulateFlow(grid: Cell[][], sourceRow: number): { grid: Cell[][]; reachedDrain: boolean } {
  const newGrid = grid.map((row) => row.map((c) => ({ ...c, filled: false })));
  const visited = new Set<string>();

  function flood(r: number, c: number, fromDir: number) {
    const key = `${r},${c}`;
    if (r < 0 || r >= GRID || c < 0 || c >= GRID) return;
    const cell = newGrid[r]![c]!;
    if (!cell.pipe) return;
    // fromDir is the direction we're coming FROM (0=top,1=right,2=bottom,3=left)
    // The cell must be open on the opposite side
    const enterSide = (fromDir + 2) % 4;
    if (!cell.openings[enterSide]) return;
    if (visited.has(key)) return;
    visited.add(key);
    cell.filled = true;

    // Propagate to neighbors through open sides
    if (cell.openings[0] && enterSide !== 0) flood(r - 1, c, 2); // top → neighbor above, coming from bottom
    if (cell.openings[1] && enterSide !== 1) flood(r, c + 1, 3); // right → neighbor right, coming from left
    if (cell.openings[2] && enterSide !== 2) flood(r + 1, c, 0); // bottom → neighbor below, coming from top
    if (cell.openings[3] && enterSide !== 3) flood(r, c - 1, 1); // left → neighbor left, coming from right
  }

  // Start from source (left edge)
  const sourceCell = newGrid[sourceRow]![0]!;
  sourceCell.filled = true;
  visited.add(`${sourceRow},0`);
  // Source opens right
  if (sourceCell.openings[1]) flood(sourceRow, 1, 3);

  const drainFilled = newGrid.some((row) => row.some((c) => c.isDrain && c.filled));
  return { grid: newGrid, reachedDrain: drainFilled };
}

/* ─── state ─── */
type State = {
  phase: Phase;
  levelIndex: number;
  grid: Cell[][];
  selectedTool: PipeType;
  interactions: number;
  startTime: number;
  completedLevels: number;
};

type Action =
  | { type: "START" }
  | { type: "SELECT_TOOL"; tool: PipeType }
  | { type: "PLACE_PIPE"; row: number; col: number }
  | { type: "ROTATE_PIPE"; row: number; col: number }
  | { type: "FLOW" }
  | { type: "FLOW_RESULT"; grid: Cell[][]; success: boolean }
  | { type: "NEXT_LEVEL" };

function initState(): State {
  return {
    phase: "ready",
    levelIndex: 0,
    grid: createGrid(LEVELS[0]!),
    selectedTool: "straight",
    interactions: 0,
    startTime: 0,
    completedLevels: 0,
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return {
        ...state,
        phase: "playing",
        levelIndex: 0,
        grid: createGrid(LEVELS[0]!),
        startTime: Date.now(),
        interactions: 0,
        completedLevels: 0,
      };
    case "SELECT_TOOL":
      return { ...state, selectedTool: action.tool };
    case "PLACE_PIPE": {
      if (state.phase !== "playing") return state;
      const cell = state.grid[action.row]?.[action.col];
      if (!cell || cell.isSource || cell.isDrain) return state;
      // If pipe exists, rotate it
      if (cell.pipe) {
        const newGrid = state.grid.map((r) => r.map((c) => ({ ...c })));
        const target = newGrid[action.row]![action.col]!;
        target.openings = rotatePipe(target.openings);
        target.rotations += 1;
        return { ...state, grid: newGrid, interactions: state.interactions + 1 };
      }
      // Place new pipe
      const newGrid = state.grid.map((r) => r.map((c) => ({ ...c })));
      let openings = PIPE_DEFS[state.selectedTool];
      newGrid[action.row]![action.col]! = {
        pipe: state.selectedTool,
        openings,
        rotations: 0,
        filled: false,
        isSource: false,
        isDrain: false,
      };
      return { ...state, grid: newGrid, interactions: state.interactions + 1 };
    }
    case "FLOW": {
      const level = LEVELS[state.levelIndex]!;
      const result = simulateFlow(state.grid, level.sourceRow);
      return {
        ...state,
        phase: result.reachedDrain
          ? state.levelIndex >= LEVELS.length - 1
            ? "complete"
            : "flowing"
          : "playing",
        grid: result.grid,
        completedLevels: result.reachedDrain ? state.completedLevels + 1 : state.completedLevels,
      };
    }
    case "NEXT_LEVEL": {
      const next = state.levelIndex + 1;
      if (next >= LEVELS.length) return { ...state, phase: "complete" };
      return {
        ...state,
        phase: "playing",
        levelIndex: next,
        grid: createGrid(LEVELS[next]!),
      };
    }
    default:
      return state;
  }
}

/* ─── pipe SVG renderers ─── */
function PipeSVG({ cell, size }: { cell: Cell; size: number }) {
  if (!cell.pipe) return null;
  const mid = size / 2;
  const w = size * 0.28;
  const fillColor = cell.filled ? "#3b82f6" : "#94a3b8";
  const paths: React.ReactNode[] = [];

  if (cell.openings[0]) paths.push(<rect key="t" x={mid - w / 2} y={0} width={w} height={mid} fill={fillColor} rx={2} />);
  if (cell.openings[1]) paths.push(<rect key="r" x={mid} y={mid - w / 2} width={mid} height={w} fill={fillColor} rx={2} />);
  if (cell.openings[2]) paths.push(<rect key="b" x={mid - w / 2} y={mid} width={w} height={mid} fill={fillColor} rx={2} />);
  if (cell.openings[3]) paths.push(<rect key="l" x={0} y={mid - w / 2} width={mid} height={w} fill={fillColor} rx={2} />);

  // center junction
  paths.push(<circle key="c" cx={mid} cy={mid} r={w / 2 + 1} fill={fillColor} />);

  return <>{paths}</>;
}

/* ─── component ─── */
const TOOLS: PipeType[] = ["straight", "elbow", "tee", "cross"];
const TOOL_LABELS: Record<PipeType, string> = { straight: "━", elbow: "┗", tee: "┣", cross: "╋" };

export default function GamePipeFlow() {
  const { setMessage, setMood } = useMascot();
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const cellSize = 52;
  const level = LEVELS[state.levelIndex]!;
  const elapsedMs = state.phase === "complete" ? Date.now() - state.startTime : 0;
  const score = state.completedLevels * 200 + Math.max(0, 500 - state.interactions * 5);
  const MAX_SCORE = 1500;
  const stars = score >= 1200 ? 3 : score >= 700 ? 2 : score >= 300 ? 1 : 0;

  // advance after flow success
  useEffect(() => {
    if (state.phase === "flowing") {
      void hapticSuccess();
      setMessage("Water flows! Level complete!");
      setMood("cheering");
      const t = setTimeout(() => dispatch({ type: "NEXT_LEVEL" }), 1500);
      return () => clearTimeout(t);
    }
  }, [state.phase, setMessage, setMood]);

  // completion
  useEffect(() => {
    if (state.phase !== "complete") return;
    setMood("cheering");
    setMessage("All pipes connected! Master plumber!");
    void hapticCelebration();
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "pipe-flow",
      difficulty: "medium",
      elapsedMs,
      interactions: state.interactions,
      score,
      maxScore: MAX_SCORE,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, elapsedMs, state.interactions, score, setMessage, setMood]);

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    setMood("happy");
    setMessage("Connect the pipes to let water flow!");
    dispatch({ type: "START" });
  }, [setMood, setMessage]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-sky-300/25 bg-gradient-to-br from-sky-950/90 via-slate-900/95 to-blue-950/90 shadow-2xl backdrop-blur-xl">
      <AnimatePresence mode="wait">
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="pixel" mood="thinking" size="lg" />
            <h3 className="text-2xl font-black text-white">Pipe Flow</h3>
            <p className="text-sky-200/80">Place and rotate pipes to guide water from source to drain!</p>
            <PhysicalButton onClick={startGame} variant="primary" className="px-10 py-4">
              Start Plumbing 💧
            </PhysicalButton>
          </motion.section>
        )}

        {(state.phase === "playing" || state.phase === "flowing") && (
          <motion.section key="playing" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 px-4 py-5">
            <div className="flex w-full items-center justify-between px-2">
              <span className="text-sm font-bold text-sky-200">Level {state.levelIndex + 1}/{LEVELS.length}</span>
              <span className="text-sm text-sky-300/70">Moves: {state.interactions}</span>
            </div>

            {/* toolbar */}
            <div className="flex gap-2">
              {TOOLS.map((tool) => (
                <button
                  key={tool}
                  onClick={() => { dispatch({ type: "SELECT_TOOL", tool }); void hapticSelection(); }}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border-2 text-lg font-bold transition-all
                    ${state.selectedTool === tool
                      ? "border-sky-400 bg-sky-500/40 text-white"
                      : "border-slate-600 bg-slate-800/60 text-slate-300 hover:border-sky-500/50"
                    }`}
                >
                  {TOOL_LABELS[tool]}
                </button>
              ))}
              <PhysicalButton
                onClick={() => { dispatch({ type: "FLOW" }); }}
                variant="success"
                className="px-4 py-1 text-sm"
                disabled={state.phase === "flowing"}
              >
                <Droplets className="mr-1 h-4 w-4" /> Flow
              </PhysicalButton>
            </div>

            {/* grid */}
            <div className="rounded-2xl bg-slate-800/60 p-2">
              <svg width={cellSize * GRID + 4} height={cellSize * GRID + 4} viewBox={`-2 -2 ${cellSize * GRID + 4} ${cellSize * GRID + 4}`}>
                {state.grid.map((row, r) =>
                  row.map((cell, c) => (
                    <g key={`${r}-${c}`} transform={`translate(${c * cellSize},${r * cellSize})`}>
                      <rect
                        x={1} y={1} width={cellSize - 2} height={cellSize - 2}
                        rx={6}
                        fill={cell.isSource ? "rgba(34,197,94,0.25)" : cell.isDrain ? "rgba(239,68,68,0.25)" : "rgba(30,41,59,0.6)"}
                        stroke={cell.isSource ? "#22c55e" : cell.isDrain ? "#ef4444" : "rgba(100,116,139,0.3)"}
                        strokeWidth={1}
                        onClick={() => state.phase === "playing" && dispatch({ type: "PLACE_PIPE", row: r, col: c })}
                        style={{ cursor: state.phase === "playing" && !cell.isSource && !cell.isDrain ? "pointer" : "default" }}
                      />
                      <g transform={`translate(1,1)`}>
                        <PipeSVG cell={cell} size={cellSize - 2} />
                      </g>
                      {cell.isSource && <text x={cellSize / 2} y={cellSize / 2 + 4} textAnchor="middle" fill="#22c55e" fontSize={12} fontWeight="bold">{cell.pipe ? "" : "S"}</text>}
                      {cell.isDrain && <text x={cellSize / 2} y={cellSize / 2 + 4} textAnchor="middle" fill="#ef4444" fontSize={12} fontWeight="bold">{cell.pipe ? "" : "D"}</text>}
                    </g>
                  ))
                )}
              </svg>
            </div>

            <p className="text-xs text-sky-300/60">Click empty cell to place &bull; Click pipe to rotate &bull; Press Flow to test</p>
          </motion.section>
        )}

        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="pixel" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">All Levels Solved!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}>
                  ⭐
                </motion.span>
              ))}
            </div>
            <p className="text-sky-200/80">Score: {score} &bull; {state.completedLevels} levels completed</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 💧</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
