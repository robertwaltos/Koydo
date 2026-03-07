"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import { Blocks, Trophy, Play, RotateCcw } from "lucide-react";
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

/* ─── block programming data ─── */
type BlockType = "move" | "turn" | "repeat" | "if" | "action";
type Direction = "up" | "down" | "left" | "right";

type Block = {
  id: string;
  type: BlockType;
  label: string;
  emoji: string;
  color: string;
};

const BLOCK_PALETTE: Block[] = [
  { id: "move-up", type: "move", label: "Move Up", emoji: "⬆️", color: "bg-blue-600" },
  { id: "move-down", type: "move", label: "Move Down", emoji: "⬇️", color: "bg-blue-600" },
  { id: "move-left", type: "move", label: "Move Left", emoji: "⬅️", color: "bg-blue-600" },
  { id: "move-right", type: "move", label: "Move Right", emoji: "➡️", color: "bg-blue-600" },
  { id: "turn-left", type: "turn", label: "Turn Left", emoji: "↩️", color: "bg-purple-600" },
  { id: "turn-right", type: "turn", label: "Turn Right", emoji: "↪️", color: "bg-purple-600" },
  { id: "collect", type: "action", label: "Collect Star", emoji: "⭐", color: "bg-amber-600" },
];

type Cell = "empty" | "wall" | "star" | "start" | "finish";

type Puzzle = {
  id: string;
  name: string;
  grid: Cell[][];
  startPos: [number, number];
  startDir: Direction;
  solution: string[]; // block IDs in correct order
  hint: string;
};

const PUZZLES: Puzzle[] = [
  {
    id: "straight-line",
    name: "First Steps",
    grid: [
      ["start", "empty", "empty", "finish"],
      ["wall", "wall", "wall", "wall"],
    ],
    startPos: [0, 0],
    startDir: "right",
    solution: ["move-right", "move-right", "move-right"],
    hint: "Move right three times to reach the goal!",
  },
  {
    id: "l-shape",
    name: "L-Shape Path",
    grid: [
      ["start", "empty", "wall"],
      ["wall", "empty", "wall"],
      ["wall", "empty", "finish"],
    ],
    startPos: [0, 0],
    startDir: "right",
    solution: ["move-right", "move-down", "move-down", "move-right"],
    hint: "Go right, then down to the goal",
  },
  {
    id: "star-collect",
    name: "Star Collector",
    grid: [
      ["start", "star", "empty"],
      ["wall", "wall", "empty"],
      ["wall", "wall", "finish"],
    ],
    startPos: [0, 0],
    startDir: "right",
    solution: ["move-right", "collect", "move-right", "move-down", "move-down"],
    hint: "Collect the star, then find the finish",
  },
  {
    id: "zigzag",
    name: "Zigzag Trail",
    grid: [
      ["start", "wall", "empty", "wall"],
      ["empty", "wall", "empty", "wall"],
      ["empty", "empty", "empty", "finish"],
    ],
    startPos: [0, 0],
    startDir: "down",
    solution: ["move-down", "move-down", "move-right", "move-right", "move-up", "move-right"],
    hint: "Go down first, then zigzag to the finish",
  },
  {
    id: "double-star",
    name: "Twin Stars",
    grid: [
      ["start", "empty", "star"],
      ["wall", "empty", "empty"],
      ["star", "empty", "finish"],
    ],
    startPos: [0, 0],
    startDir: "right",
    solution: ["move-right", "move-right", "collect", "move-down", "move-down", "collect", "move-right"],
    hint: "Collect both stars on your way to the finish",
  },
  {
    id: "maze-basic",
    name: "Mini Maze",
    grid: [
      ["start", "wall", "wall", "wall"],
      ["empty", "empty", "wall", "wall"],
      ["wall", "empty", "empty", "wall"],
      ["wall", "wall", "empty", "finish"],
    ],
    startPos: [0, 0],
    startDir: "down",
    solution: ["move-down", "move-right", "move-down", "move-right", "move-down", "move-right"],
    hint: "Follow the open path step by step",
  },
];

const ROUNDS = 5;

/* ─── state ─── */
type Phase = "ready" | "building" | "running" | "feedback" | "complete";
type Pos = [number, number]; // [row, col]

type State = {
  phase: Phase;
  round: number;
  score: number;
  puzzle: Puzzle | null;
  program: Block[];
  robotPos: Pos;
  robotDir: Direction;
  runStep: number;
  starsCollected: number;
  reachedFinish: boolean;
  perfectRounds: number;
};

type Action =
  | { type: "START"; puzzle: Puzzle }
  | { type: "ADD_BLOCK"; block: Block }
  | { type: "REMOVE_BLOCK"; index: number }
  | { type: "REORDER"; program: Block[] }
  | { type: "RUN" }
  | { type: "STEP"; pos: Pos; collected: boolean }
  | { type: "FINISH_RUN"; success: boolean; points: number }
  | { type: "NEXT"; puzzle: Puzzle }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "building", round: 1, score: 0, puzzle: a.puzzle, program: [], robotPos: a.puzzle.startPos, robotDir: a.puzzle.startDir, runStep: -1, starsCollected: 0, reachedFinish: false, perfectRounds: 0 };
    case "ADD_BLOCK":
      return { ...s, program: [...s.program, { ...a.block, id: `${a.block.id}-${Date.now()}-${Math.random().toString(36).slice(2,5)}` }] };
    case "REMOVE_BLOCK":
      return { ...s, program: s.program.filter((_, i) => i !== a.index) };
    case "REORDER":
      return { ...s, program: a.program };
    case "RUN":
      return { ...s, phase: "running", runStep: 0, robotPos: s.puzzle!.startPos, robotDir: s.puzzle!.startDir, starsCollected: 0, reachedFinish: false };
    case "STEP":
      return { ...s, robotPos: a.pos, runStep: s.runStep + 1, starsCollected: s.starsCollected + (a.collected ? 1 : 0) };
    case "FINISH_RUN":
      return { ...s, phase: "feedback", reachedFinish: a.success, score: s.score + a.points, perfectRounds: s.perfectRounds + (a.success ? 1 : 0) };
    case "NEXT":
      return { ...s, phase: "building", round: s.round + 1, puzzle: a.puzzle, program: [], robotPos: a.puzzle.startPos, robotDir: a.puzzle.startDir, runStep: -1, starsCollected: 0, reachedFinish: false };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = {
  phase: "ready", round: 0, score: 0, puzzle: null, program: [],
  robotPos: [0, 0], robotDir: "right", runStep: -1, starsCollected: 0,
  reachedFinish: false, perfectRounds: 0,
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
export default function GameCodeBlocks() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const puzzleOrder = useRef<Puzzle[]>([]);

  const { phase, round, score, puzzle, program, robotPos, runStep, starsCollected, reachedFinish, perfectRounds } = state;

  const stars = useMemo(() => {
    if (perfectRounds >= 4) return 3;
    if (perfectRounds >= 3) return 2;
    if (perfectRounds >= 1) return 1;
    return 0;
  }, [perfectRounds]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    puzzleOrder.current = shuffle(PUZZLES).slice(0, ROUNDS);
    dispatch({ type: "START", puzzle: puzzleOrder.current[0] });
    mascot.say("Program the robot to reach the finish! 🤖", "excited");
  }, [mascot]);

  /* ── run simulation ── */
  useEffect(() => {
    if (phase !== "running" || !puzzle) return;
    if (runStep >= program.length) {
      // Check success
      const [r, c] = robotPos;
      const success = puzzle.grid[r]?.[c] === "finish";
      const totalStars = puzzle.grid.flat().filter((c) => c === "star").length;
      const points = success ? 200 + (starsCollected === totalStars ? 100 : starsCollected * 30) : 0;

      if (success) { hapticCelebration(); mascot.say("Robot reached the goal! 🎉", "cheering"); }
      else { hapticError(); mascot.say("Robot didn't reach the finish. Try again!", "thinking"); }

      dispatch({ type: "FINISH_RUN", success, points });
      return;
    }

    const block = program[runStep];
    const timeout = setTimeout(() => {
      let [r, c] = robotPos;
      let collected = false;

      if (block.id.startsWith("move-up")) r--;
      else if (block.id.startsWith("move-down")) r++;
      else if (block.id.startsWith("move-left")) c--;
      else if (block.id.startsWith("move-right")) c++;
      else if (block.id.startsWith("collect")) {
        if (puzzle.grid[r]?.[c] === "star") collected = true;
      }

      // Bounds/wall check for move blocks
      if (block.type === "move") {
        if (r < 0 || r >= puzzle.grid.length || c < 0 || c >= puzzle.grid[0].length || puzzle.grid[r][c] === "wall") {
          hapticError();
          dispatch({ type: "FINISH_RUN", success: false, points: 0 });
          mascot.say("Robot hit a wall! 💥", "thinking");
          return;
        }
      }

      hapticSelection();
      dispatch({ type: "STEP", pos: [r, c], collected });
    }, 500);

    return () => clearTimeout(timeout);
  }, [phase, runStep, program, puzzle, robotPos, starsCollected, mascot]);

  const handleRun = useCallback(() => {
    if (program.length === 0) return;
    hapticSelection();
    dispatch({ type: "RUN" });
  }, [program]);

  const handleNext = useCallback(() => {
    if (round >= ROUNDS) {
      emitLegacyGameComplete(sessionId.current, score, stars);
      dispatch({ type: "FINISH" });
    } else {
      dispatch({ type: "NEXT", puzzle: puzzleOrder.current[round] });
    }
  }, [round, score, stars]);

  const cellSize = puzzle ? Math.min(56, 220 / Math.max(puzzle.grid.length, puzzle.grid[0]?.length || 1)) : 48;

  return (
    <div className="relative flex min-h-[560px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Blocks className="h-5 w-5 text-blue-400" />
          <span className="text-sm font-bold text-white">Code Blocks</span>
        </div>
        {phase !== "ready" && phase !== "complete" && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Level {round}/{ROUNDS}</span>
            <span className="text-amber-400 font-bold">{score}</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Code Blocks</h2>
            <p className="text-stone-400 max-w-xs">
              Stack programming blocks to guide the robot to the finish! Learn coding logic step by step.
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Start Coding 🤖</PhysicalButton>
          </motion.section>
        )}

        {(phase === "building" || phase === "running" || phase === "feedback") && puzzle && (
          <motion.section key={`puzzle-${puzzle.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center gap-3 px-4 py-4 w-full">
            <h3 className="text-sm font-bold text-white">{puzzle.name}</h3>

            {/* grid */}
            <div className="flex flex-col items-center gap-0.5">
              {puzzle.grid.map((row, r) => (
                <div key={r} className="flex gap-0.5">
                  {row.map((cell, c) => {
                    const isRobot = robotPos[0] === r && robotPos[1] === c;
                    let bg = "bg-stone-800/60";
                    let content = "";
                    if (cell === "wall") bg = "bg-stone-600/80";
                    else if (cell === "start") { bg = "bg-blue-600/20"; content = "🏁"; }
                    else if (cell === "finish") { bg = "bg-emerald-600/20"; content = "🎯"; }
                    else if (cell === "star") { bg = "bg-amber-600/10"; content = "⭐"; }

                    return (
                      <div key={c}
                        className={`flex items-center justify-center rounded-lg ring-1 ring-white/5 ${bg}`}
                        style={{ width: cellSize, height: cellSize }}>
                        {isRobot ? (
                          <motion.span
                            className="text-lg"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                          >
                            🤖
                          </motion.span>
                        ) : (
                          <span className="text-sm">{content}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* program area */}
            <div className="w-full max-w-sm">
              <p className="text-[10px] text-stone-500 mb-1">Program ({program.length} blocks):</p>
              <div className="min-h-[40px] rounded-xl bg-stone-800/40 ring-1 ring-white/5 p-1.5 flex flex-wrap gap-1">
                {program.length === 0 && <span className="text-[10px] text-stone-600 px-2 py-1">Tap blocks below to add</span>}
                {program.map((block, i) => (
                  <motion.button
                    key={block.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, opacity: phase === "running" && i === runStep ? 0.5 : 1 }}
                    onClick={() => phase === "building" && dispatch({ type: "REMOVE_BLOCK", index: i })}
                    className={`${block.color}/40 px-2 py-1 rounded-lg text-[10px] font-bold text-white ring-1 ${
                      phase === "running" && i === runStep ? "ring-amber-400" : "ring-white/10"
                    }`}
                  >
                    {block.emoji} {block.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* block palette */}
            {phase === "building" && (
              <div className="flex flex-wrap justify-center gap-1.5 w-full max-w-sm">
                {BLOCK_PALETTE.map((block) => (
                  <motion.button
                    key={block.id}
                    onClick={() => { hapticSelection(); dispatch({ type: "ADD_BLOCK", block }); }}
                    whileTap={{ scale: 0.9 }}
                    className={`${block.color}/30 px-2.5 py-2 rounded-xl text-xs font-bold text-white ring-1 ring-white/10 hover:ring-white/30 min-h-[44px]`}
                  >
                    {block.emoji} {block.label}
                  </motion.button>
                ))}
              </div>
            )}

            {/* controls */}
            <div className="flex gap-2">
              {phase === "building" && (
                <>
                  <PhysicalButton onClick={() => dispatch({ type: "START", puzzle })} variant="secondary">
                    <RotateCcw className="h-4 w-4" />
                  </PhysicalButton>
                  <PhysicalButton onClick={handleRun} variant="primary" disabled={program.length === 0}>
                    <Play className="h-4 w-4 mr-1" /> Run
                  </PhysicalButton>
                </>
              )}
              {phase === "feedback" && (
                <PhysicalButton onClick={reachedFinish ? handleNext : () => dispatch({ type: "START", puzzle })} variant="primary">
                  {reachedFinish ? (round >= ROUNDS ? "See Results" : "Next Level →") : "Try Again 🔄"}
                </PhysicalButton>
              )}
            </div>
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Code Master!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  initial={{ scale: 0 }} animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}>⭐</motion.span>
              ))}
            </div>
            <p className="text-white font-bold">{score} points</p>
            <p className="text-stone-400 text-sm">{perfectRounds}/{ROUNDS} levels solved</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 🤖</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
