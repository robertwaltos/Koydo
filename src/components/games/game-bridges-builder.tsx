"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Waypoints, Trophy, RotateCcw } from "lucide-react";
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
type Island = { row: number; col: number; bridges: number }; // bridges = required number of connections
type Bridge = { from: number; to: number }; // indices into islands array

type Puzzle = {
  id: string;
  name: string;
  gridSize: number;
  islands: Island[];
  solution: Bridge[];
};

const PUZZLES: Puzzle[] = [
  {
    id: "p1",
    name: "Two Islands",
    gridSize: 3,
    islands: [
      { row: 0, col: 0, bridges: 1 },
      { row: 0, col: 2, bridges: 1 },
    ],
    solution: [{ from: 0, to: 1 }],
  },
  {
    id: "p2",
    name: "Triangle",
    gridSize: 3,
    islands: [
      { row: 0, col: 1, bridges: 2 },
      { row: 2, col: 0, bridges: 1 },
      { row: 2, col: 2, bridges: 1 },
    ],
    solution: [{ from: 0, to: 1 }, { from: 0, to: 2 }],
  },
  {
    id: "p3",
    name: "Square",
    gridSize: 4,
    islands: [
      { row: 0, col: 0, bridges: 2 },
      { row: 0, col: 3, bridges: 2 },
      { row: 3, col: 0, bridges: 2 },
      { row: 3, col: 3, bridges: 2 },
    ],
    solution: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 3 }],
  },
  {
    id: "p4",
    name: "Cross",
    gridSize: 5,
    islands: [
      { row: 2, col: 2, bridges: 4 },
      { row: 0, col: 2, bridges: 1 },
      { row: 2, col: 0, bridges: 1 },
      { row: 2, col: 4, bridges: 1 },
      { row: 4, col: 2, bridges: 1 },
    ],
    solution: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }, { from: 0, to: 4 }],
  },
  {
    id: "p5",
    name: "Chain",
    gridSize: 5,
    islands: [
      { row: 0, col: 0, bridges: 1 },
      { row: 0, col: 2, bridges: 2 },
      { row: 0, col: 4, bridges: 2 },
      { row: 2, col: 4, bridges: 1 },
    ],
    solution: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }],
  },
  {
    id: "p6",
    name: "T-Shape",
    gridSize: 5,
    islands: [
      { row: 0, col: 0, bridges: 1 },
      { row: 0, col: 2, bridges: 3 },
      { row: 0, col: 4, bridges: 1 },
      { row: 2, col: 2, bridges: 2 },
      { row: 4, col: 2, bridges: 1 },
    ],
    solution: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 3, to: 4 }],
  },
  {
    id: "p7",
    name: "Diamond",
    gridSize: 5,
    islands: [
      { row: 0, col: 2, bridges: 2 },
      { row: 2, col: 0, bridges: 2 },
      { row: 2, col: 4, bridges: 2 },
      { row: 4, col: 2, bridges: 2 },
    ],
    solution: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 3 }],
  },
  {
    id: "p8",
    name: "H-Bridge",
    gridSize: 5,
    islands: [
      { row: 0, col: 0, bridges: 2 },
      { row: 0, col: 4, bridges: 2 },
      { row: 2, col: 0, bridges: 2 },
      { row: 2, col: 4, bridges: 2 },
      { row: 4, col: 0, bridges: 1 },
      { row: 4, col: 4, bridges: 1 },
    ],
    solution: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 3 }, { from: 2, to: 4 }, { from: 3, to: 5 }],
  },
];

const ROUNDS = 6;

/* ─── state ─── */
type Phase = "ready" | "playing" | "complete";

type State = {
  phase: Phase;
  round: number;
  score: number;
  puzzle: Puzzle | null;
  bridges: Bridge[];
  selectedIsland: number | null;
  perfectRounds: number;
};

type Action =
  | { type: "START"; puzzle: Puzzle }
  | { type: "SELECT"; island: number }
  | { type: "CONNECT"; bridge: Bridge }
  | { type: "REMOVE_BRIDGE"; index: number }
  | { type: "CLEAR" }
  | { type: "SOLVE"; points: number }
  | { type: "NEXT"; puzzle: Puzzle }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, puzzle: a.puzzle, bridges: [], selectedIsland: null, perfectRounds: 0 };
    case "SELECT":
      return { ...s, selectedIsland: s.selectedIsland === a.island ? null : a.island };
    case "CONNECT":
      return { ...s, bridges: [...s.bridges, a.bridge], selectedIsland: null };
    case "REMOVE_BRIDGE":
      return { ...s, bridges: s.bridges.filter((_, i) => i !== a.index) };
    case "CLEAR":
      return { ...s, bridges: [], selectedIsland: null };
    case "SOLVE":
      return { ...s, score: s.score + a.points, perfectRounds: s.perfectRounds + 1 };
    case "NEXT":
      return { ...s, round: s.round + 1, puzzle: a.puzzle, bridges: [], selectedIsland: null };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = { phase: "ready", round: 0, score: 0, puzzle: null, bridges: [], selectedIsland: null, perfectRounds: 0 };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── helpers ─── */
function getBridgeCount(bridges: Bridge[], islandIdx: number): number {
  return bridges.filter((b) => b.from === islandIdx || b.to === islandIdx).length;
}

function bridgeExists(bridges: Bridge[], a: number, b: number): boolean {
  return bridges.some((br) => (br.from === a && br.to === b) || (br.from === b && br.to === a));
}

function canConnect(islands: Island[], a: number, b: number): boolean {
  const ia = islands[a];
  const ib = islands[b];
  // Must be same row or same col (orthogonal connection)
  return ia.row === ib.row || ia.col === ib.col;
}

function isSolved(puzzle: Puzzle, bridges: Bridge[]): boolean {
  // Each island has exactly its required number of bridges
  return puzzle.islands.every((island, i) => getBridgeCount(bridges, i) === island.bridges);
}

/* ─── component ─── */
export default function GameBridgesBuilder() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const puzzleOrder = useRef<Puzzle[]>([]);

  const { phase, round, score, puzzle, bridges, selectedIsland, perfectRounds } = state;

  const solved = puzzle ? isSolved(puzzle, bridges) : false;

  const stars = useMemo(() => {
    if (perfectRounds >= 5) return 3;
    if (perfectRounds >= 3) return 2;
    if (perfectRounds >= 1) return 1;
    return 0;
  }, [perfectRounds]);

  /* auto-detect solve */
  useEffect(() => {
    if (!solved || phase !== "playing") return;
    hapticCelebration();
    const moves = bridges.length;
    const optimal = puzzle!.solution.length;
    const points = moves <= optimal ? 300 : moves <= optimal + 2 ? 200 : 100;
    dispatch({ type: "SOLVE", points });
    mascot.say("All islands connected! 🌉", "cheering");

    setTimeout(() => {
      if (round >= ROUNDS) {
        emitLegacyGameComplete(sessionId.current, score + points, stars);
        dispatch({ type: "FINISH" });
      } else {
        dispatch({ type: "NEXT", puzzle: puzzleOrder.current[round] });
      }
    }, 1500);
  }, [solved, phase, bridges, puzzle, round, score, stars, mascot]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    puzzleOrder.current = shuffle(PUZZLES).slice(0, ROUNDS);
    dispatch({ type: "START", puzzle: puzzleOrder.current[0] });
    mascot.say("Connect all islands with bridges! 🌉", "excited");
  }, [mascot]);

  const handleIslandClick = useCallback((index: number) => {
    if (!puzzle) return;
    hapticSelection();

    if (selectedIsland === null) {
      dispatch({ type: "SELECT", island: index });
      return;
    }

    if (selectedIsland === index) {
      dispatch({ type: "SELECT", island: index }); // deselect
      return;
    }

    // Try to connect
    if (!canConnect(puzzle.islands, selectedIsland, index)) {
      hapticError();
      mascot.say("Islands must be in the same row or column!", "thinking");
      dispatch({ type: "SELECT", island: -1 });
      return;
    }

    if (bridgeExists(bridges, selectedIsland, index)) {
      hapticError();
      mascot.say("Bridge already exists!", "thinking");
      dispatch({ type: "SELECT", island: -1 });
      return;
    }

    // Check if either island is already full
    const fromCount = getBridgeCount(bridges, selectedIsland);
    const toCount = getBridgeCount(bridges, index);
    if (fromCount >= puzzle.islands[selectedIsland].bridges || toCount >= puzzle.islands[index].bridges) {
      hapticError();
      mascot.say("That island already has enough bridges!", "thinking");
      dispatch({ type: "SELECT", island: -1 });
      return;
    }

    hapticSuccess();
    dispatch({ type: "CONNECT", bridge: { from: selectedIsland, to: index } });
  }, [puzzle, selectedIsland, bridges, mascot]);

  const cellPx = puzzle ? Math.min(56, 260 / puzzle.gridSize) : 50;

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Waypoints className="h-5 w-5 text-cyan-400" />
          <span className="text-sm font-bold text-white">Bridges Builder</span>
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
            <h2 className="text-3xl font-black text-white">Bridges Builder</h2>
            <p className="text-stone-400 max-w-xs">
              Connect islands with bridges! Each number tells you how many bridges that island needs.
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Start Building 🌉</PhysicalButton>
          </motion.section>
        )}

        {phase === "playing" && puzzle && (
          <motion.section key={`puzzle-${puzzle.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center gap-4 px-4 py-5 w-full">
            <h3 className="text-sm font-bold text-white">{puzzle.name}</h3>

            {/* grid with SVG bridges */}
            <div className="relative" style={{ width: cellPx * puzzle.gridSize, height: cellPx * puzzle.gridSize }}>
              {/* bridge lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {bridges.map((bridge, bi) => {
                  const from = puzzle.islands[bridge.from];
                  const to = puzzle.islands[bridge.to];
                  const x1 = from.col * cellPx + cellPx / 2;
                  const y1 = from.row * cellPx + cellPx / 2;
                  const x2 = to.col * cellPx + cellPx / 2;
                  const y2 = to.row * cellPx + cellPx / 2;
                  return (
                    <motion.line
                      key={bi}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="#38bdf8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  );
                })}
              </svg>

              {/* island nodes */}
              {puzzle.islands.map((island, i) => {
                const count = getBridgeCount(bridges, i);
                const full = count >= island.bridges;
                const isSelected = selectedIsland === i;

                return (
                  <motion.button
                    key={i}
                    onClick={() => handleIslandClick(i)}
                    whileTap={{ scale: 0.9 }}
                    className={`absolute flex items-center justify-center rounded-full font-black text-sm transition-all ${
                      full
                        ? "bg-emerald-600/40 ring-2 ring-emerald-400 text-emerald-200"
                        : isSelected
                          ? "bg-amber-600/40 ring-2 ring-amber-400 text-amber-200"
                          : "bg-stone-700/80 ring-2 ring-white/20 text-white hover:ring-cyan-400/50"
                    }`}
                    style={{
                      left: island.col * cellPx + cellPx / 2 - 18,
                      top: island.row * cellPx + cellPx / 2 - 18,
                      width: 36, height: 36,
                    }}
                  >
                    <span>{count}/{island.bridges}</span>
                  </motion.button>
                );
              })}
            </div>

            <p className="text-[10px] text-stone-500">
              {selectedIsland !== null ? "Tap another island to build a bridge" : "Tap an island to select it"}
            </p>

            <div className="flex gap-2">
              <PhysicalButton onClick={() => dispatch({ type: "CLEAR" })} variant="secondary">
                <RotateCcw className="h-4 w-4" /> Reset
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">All Bridges Built!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  initial={{ scale: 0 }} animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}>⭐</motion.span>
              ))}
            </div>
            <p className="text-white font-bold">{score} points</p>
            <p className="text-stone-400 text-sm">{perfectRounds}/{ROUNDS} puzzles solved</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 🌉</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
