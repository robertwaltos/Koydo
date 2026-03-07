"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Trophy } from "lucide-react";
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
type Phase = "ready" | "playing" | "complete";

type Point = { x: number; y: number };

type Piece = {
  id: number;
  points: Point[]; // relative polygon points
  color: string;
  x: number; // current translation
  y: number;
  rotation: number; // degrees, multiples of 45
  placed: boolean;
};

type Puzzle = {
  name: string;
  silhouette: Point[][]; // polygons forming the target
  pieces: Omit<Piece, "x" | "y" | "rotation" | "placed">[];
  targets: { pieceId: number; x: number; y: number; rotation: number }[];
};

/* ─── puzzle data ─── */
const SNAP_DIST = 18;

const PUZZLES: Puzzle[] = [
  {
    name: "House",
    silhouette: [
      [{ x: 20, y: 60 }, { x: 80, y: 60 }, { x: 80, y: 120 }, { x: 20, y: 120 }],
      [{ x: 10, y: 60 }, { x: 50, y: 20 }, { x: 90, y: 60 }],
    ],
    pieces: [
      { id: 0, points: [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 60, y: 60 }, { x: 0, y: 60 }], color: "#ef4444" },
      { id: 1, points: [{ x: 0, y: 40 }, { x: 40, y: 0 }, { x: 80, y: 40 }], color: "#f59e0b" },
      { id: 2, points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 30 }, { x: 0, y: 30 }], color: "#3b82f6" },
    ],
    targets: [
      { pieceId: 0, x: 20, y: 60, rotation: 0 },
      { pieceId: 1, x: 10, y: 20, rotation: 0 },
      { pieceId: 2, x: 35, y: 80, rotation: 0 },
    ],
  },
  {
    name: "Cat",
    silhouette: [
      [{ x: 30, y: 50 }, { x: 70, y: 50 }, { x: 70, y: 110 }, { x: 30, y: 110 }],
      [{ x: 25, y: 50 }, { x: 40, y: 25 }, { x: 50, y: 50 }],
      [{ x: 50, y: 50 }, { x: 60, y: 25 }, { x: 75, y: 50 }],
      [{ x: 70, y: 90 }, { x: 95, y: 85 }, { x: 90, y: 110 }],
    ],
    pieces: [
      { id: 0, points: [{ x: 0, y: 0 }, { x: 40, y: 0 }, { x: 40, y: 60 }, { x: 0, y: 60 }], color: "#8b5cf6" },
      { id: 1, points: [{ x: 0, y: 25 }, { x: 15, y: 0 }, { x: 25, y: 25 }], color: "#ec4899" },
      { id: 2, points: [{ x: 0, y: 25 }, { x: 10, y: 0 }, { x: 25, y: 25 }], color: "#ec4899" },
      { id: 3, points: [{ x: 0, y: 5 }, { x: 25, y: 0 }, { x: 20, y: 25 }], color: "#f97316" },
    ],
    targets: [
      { pieceId: 0, x: 30, y: 50, rotation: 0 },
      { pieceId: 1, x: 25, y: 25, rotation: 0 },
      { pieceId: 2, x: 50, y: 25, rotation: 0 },
      { pieceId: 3, x: 70, y: 85, rotation: 0 },
    ],
  },
  {
    name: "Rocket",
    silhouette: [
      [{ x: 35, y: 40 }, { x: 65, y: 40 }, { x: 65, y: 110 }, { x: 35, y: 110 }],
      [{ x: 35, y: 40 }, { x: 50, y: 10 }, { x: 65, y: 40 }],
      [{ x: 20, y: 90 }, { x: 35, y: 70 }, { x: 35, y: 110 }],
      [{ x: 65, y: 70 }, { x: 80, y: 90 }, { x: 65, y: 110 }],
    ],
    pieces: [
      { id: 0, points: [{ x: 0, y: 0 }, { x: 30, y: 0 }, { x: 30, y: 70 }, { x: 0, y: 70 }], color: "#64748b" },
      { id: 1, points: [{ x: 0, y: 30 }, { x: 15, y: 0 }, { x: 30, y: 30 }], color: "#ef4444" },
      { id: 2, points: [{ x: 0, y: 20 }, { x: 15, y: 0 }, { x: 15, y: 40 }], color: "#f59e0b" },
      { id: 3, points: [{ x: 0, y: 0 }, { x: 15, y: 20 }, { x: 0, y: 40 }], color: "#f59e0b" },
    ],
    targets: [
      { pieceId: 0, x: 35, y: 40, rotation: 0 },
      { pieceId: 1, x: 35, y: 10, rotation: 0 },
      { pieceId: 2, x: 20, y: 70, rotation: 0 },
      { pieceId: 3, x: 65, y: 70, rotation: 0 },
    ],
  },
  {
    name: "Swan",
    silhouette: [
      [{ x: 30, y: 60 }, { x: 80, y: 60 }, { x: 80, y: 100 }, { x: 30, y: 100 }],
      [{ x: 30, y: 30 }, { x: 45, y: 30 }, { x: 45, y: 60 }, { x: 30, y: 60 }],
      [{ x: 25, y: 15 }, { x: 50, y: 15 }, { x: 50, y: 35 }, { x: 25, y: 35 }],
    ],
    pieces: [
      { id: 0, points: [{ x: 0, y: 0 }, { x: 50, y: 0 }, { x: 50, y: 40 }, { x: 0, y: 40 }], color: "#f1f5f9" },
      { id: 1, points: [{ x: 0, y: 0 }, { x: 15, y: 0 }, { x: 15, y: 30 }, { x: 0, y: 30 }], color: "#e2e8f0" },
      { id: 2, points: [{ x: 0, y: 0 }, { x: 25, y: 0 }, { x: 25, y: 20 }, { x: 0, y: 20 }], color: "#f59e0b" },
    ],
    targets: [
      { pieceId: 0, x: 30, y: 60, rotation: 0 },
      { pieceId: 1, x: 30, y: 30, rotation: 0 },
      { pieceId: 2, x: 25, y: 15, rotation: 0 },
    ],
  },
  {
    name: "Runner",
    silhouette: [
      [{ x: 40, y: 20 }, { x: 60, y: 20 }, { x: 60, y: 50 }, { x: 40, y: 50 }],
      [{ x: 35, y: 50 }, { x: 65, y: 50 }, { x: 65, y: 80 }, { x: 35, y: 80 }],
      [{ x: 30, y: 80 }, { x: 45, y: 80 }, { x: 45, y: 120 }, { x: 30, y: 120 }],
      [{ x: 55, y: 80 }, { x: 70, y: 80 }, { x: 70, y: 120 }, { x: 55, y: 120 }],
    ],
    pieces: [
      { id: 0, points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 30 }, { x: 0, y: 30 }], color: "#fbbf24" },
      { id: 1, points: [{ x: 0, y: 0 }, { x: 30, y: 0 }, { x: 30, y: 30 }, { x: 0, y: 30 }], color: "#3b82f6" },
      { id: 2, points: [{ x: 0, y: 0 }, { x: 15, y: 0 }, { x: 15, y: 40 }, { x: 0, y: 40 }], color: "#1e293b" },
      { id: 3, points: [{ x: 0, y: 0 }, { x: 15, y: 0 }, { x: 15, y: 40 }, { x: 0, y: 40 }], color: "#1e293b" },
    ],
    targets: [
      { pieceId: 0, x: 40, y: 20, rotation: 0 },
      { pieceId: 1, x: 35, y: 50, rotation: 0 },
      { pieceId: 2, x: 30, y: 80, rotation: 0 },
      { pieceId: 3, x: 55, y: 80, rotation: 0 },
    ],
  },
];

/* ─── state machine ─── */
type State = {
  phase: Phase;
  puzzleIndex: number;
  pieces: Piece[];
  draggingId: number | null;
  dragOffset: Point;
  startTime: number;
  interactions: number;
  completedPuzzles: number;
};

type Action =
  | { type: "START" }
  | { type: "DRAG_START"; pieceId: number; offset: Point }
  | { type: "DRAG_MOVE"; pos: Point }
  | { type: "DRAG_END" }
  | { type: "ROTATE"; pieceId: number }
  | { type: "NEXT_PUZZLE" }
  | { type: "FINISH" };

function initPieces(puzzle: Puzzle): Piece[] {
  return puzzle.pieces.map((p, i) => ({
    ...p,
    x: 120 + (i % 3) * 50,
    y: 140 + Math.floor(i / 3) * 60,
    rotation: 0,
    placed: false,
  }));
}

function initState(): State {
  return {
    phase: "ready",
    puzzleIndex: 0,
    pieces: initPieces(PUZZLES[0]!),
    draggingId: null,
    dragOffset: { x: 0, y: 0 },
    startTime: 0,
    interactions: 0,
    completedPuzzles: 0,
  };
}

function checkSnap(piece: Piece, puzzle: Puzzle): { x: number; y: number } | null {
  const target = puzzle.targets.find((t) => t.pieceId === piece.id);
  if (!target) return null;
  const dx = Math.abs(piece.x - target.x);
  const dy = Math.abs(piece.y - target.y);
  if (dx < SNAP_DIST && dy < SNAP_DIST) return { x: target.x, y: target.y };
  return null;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      const puzzle = PUZZLES[0]!;
      return {
        ...state,
        phase: "playing",
        puzzleIndex: 0,
        pieces: initPieces(puzzle),
        startTime: Date.now(),
        interactions: 0,
        completedPuzzles: 0,
      };
    }
    case "DRAG_START": {
      const piece = state.pieces.find((p) => p.id === action.pieceId);
      if (!piece || piece.placed) return state;
      return { ...state, draggingId: action.pieceId, dragOffset: action.offset };
    }
    case "DRAG_MOVE": {
      if (state.draggingId === null) return state;
      return {
        ...state,
        pieces: state.pieces.map((p) =>
          p.id === state.draggingId
            ? { ...p, x: action.pos.x - state.dragOffset.x, y: action.pos.y - state.dragOffset.y }
            : p
        ),
      };
    }
    case "DRAG_END": {
      if (state.draggingId === null) return state;
      const puzzle = PUZZLES[state.puzzleIndex]!;
      const piece = state.pieces.find((p) => p.id === state.draggingId)!;
      const snap = checkSnap(piece, puzzle);
      const newPieces = state.pieces.map((p) =>
        p.id === state.draggingId
          ? snap ? { ...p, x: snap.x, y: snap.y, placed: true } : p
          : p
      );
      const allPlaced = newPieces.every((p) => p.placed);
      return {
        ...state,
        pieces: newPieces,
        draggingId: null,
        interactions: state.interactions + 1,
        completedPuzzles: allPlaced ? state.completedPuzzles + 1 : state.completedPuzzles,
        phase: allPlaced && state.puzzleIndex >= PUZZLES.length - 1 ? "complete" : state.phase,
      };
    }
    case "ROTATE": {
      const piece = state.pieces.find((p) => p.id === action.pieceId);
      if (!piece || piece.placed) return state;
      return {
        ...state,
        pieces: state.pieces.map((p) =>
          p.id === action.pieceId ? { ...p, rotation: (p.rotation + 45) % 360 } : p
        ),
        interactions: state.interactions + 1,
      };
    }
    case "NEXT_PUZZLE": {
      const nextIndex = state.puzzleIndex + 1;
      if (nextIndex >= PUZZLES.length) return { ...state, phase: "complete" };
      return {
        ...state,
        puzzleIndex: nextIndex,
        pieces: initPieces(PUZZLES[nextIndex]!),
      };
    }
    case "FINISH":
      return { ...state, phase: "complete" };
    default:
      return state;
  }
}

/* ─── component ─── */
export default function GameTangramBuilder() {
  const { setMessage, setMood } = useMascot();
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const puzzle = PUZZLES[state.puzzleIndex]!;
  const allPlaced = state.pieces.every((p) => p.placed);
  const elapsedMs = state.phase === "complete" ? Date.now() - state.startTime : 0;
  const score = Math.max(0, 1000 - state.interactions * 10) + state.completedPuzzles * 200;
  const MAX_SCORE = 2000;
  const stars = score >= 1500 ? 3 : score >= 800 ? 2 : score >= 300 ? 1 : 0;

  const getSvgPoint = useCallback((e: React.PointerEvent): Point => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const rect = svg.getBoundingClientRect();
    const scaleX = 200 / rect.width;
    const scaleY = 200 / rect.height;
    return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
  }, []);

  const handlePointerDown = useCallback((pieceId: number, e: React.PointerEvent) => {
    e.preventDefault();
    const pos = getSvgPoint(e);
    const piece = state.pieces.find((p) => p.id === pieceId);
    if (!piece || piece.placed) return;
    void hapticSelection();
    dispatch({ type: "DRAG_START", pieceId, offset: { x: pos.x - piece.x, y: pos.y - piece.y } });
  }, [getSvgPoint, state.pieces]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (state.draggingId === null) return;
    e.preventDefault();
    dispatch({ type: "DRAG_MOVE", pos: getSvgPoint(e) });
  }, [state.draggingId, getSvgPoint]);

  const handlePointerUp = useCallback(() => {
    if (state.draggingId === null) return;
    const piece = state.pieces.find((p) => p.id === state.draggingId);
    if (piece) {
      const snap = checkSnap(piece, puzzle);
      if (snap) void hapticSuccess();
      else void hapticError();
    }
    dispatch({ type: "DRAG_END" });
  }, [state.draggingId, state.pieces, puzzle]);

  // auto-advance puzzle
  useEffect(() => {
    if (state.phase === "playing" && allPlaced && state.puzzleIndex < PUZZLES.length - 1) {
      setMessage(`${puzzle.name} complete!`);
      setMood("cheering");
      const t = setTimeout(() => dispatch({ type: "NEXT_PUZZLE" }), 1200);
      return () => clearTimeout(t);
    }
  }, [allPlaced, state.phase, state.puzzleIndex, puzzle.name, setMessage, setMood]);

  // completion
  useEffect(() => {
    if (state.phase !== "complete") return;
    setMood("cheering");
    setMessage("All tangrams solved! Amazing spatial skills!");
    void hapticCelebration();
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "tangram-builder",
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
    setMessage("Drag the shapes into the silhouette!");
    dispatch({ type: "START" });
  }, [setMood, setMessage]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-violet-300/25 bg-gradient-to-br from-violet-950/90 via-slate-900/95 to-indigo-950/90 shadow-2xl backdrop-blur-xl">
      <AnimatePresence mode="wait">
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="thinking" size="lg" />
            <h3 className="text-2xl font-black text-white">Tangram Builder</h3>
            <p className="text-violet-200/80">Drag and rotate shapes to fill the silhouette!</p>
            <PhysicalButton onClick={startGame} variant="primary" className="px-10 py-4">
              Start Puzzle 🔷
            </PhysicalButton>
          </motion.section>
        )}

        {state.phase === "playing" && (
          <motion.section key="playing" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 px-4 py-6">
            <div className="flex w-full items-center justify-between px-2">
              <span className="text-sm font-bold text-violet-200">
                Puzzle {state.puzzleIndex + 1}/{PUZZLES.length}: {puzzle.name}
              </span>
              <span className="text-sm text-violet-300/70">Moves: {state.interactions}</span>
            </div>

            <svg
              ref={svgRef}
              viewBox="0 0 200 200"
              className="w-full max-w-[340px] touch-none rounded-2xl bg-slate-800/60"
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              {/* silhouette */}
              {puzzle.silhouette.map((poly, i) => (
                <polygon
                  key={`sil-${i}`}
                  points={poly.map((p) => `${p.x},${p.y}`).join(" ")}
                  fill="rgba(148,163,184,0.25)"
                  stroke="rgba(148,163,184,0.5)"
                  strokeWidth="1"
                  strokeDasharray="4 2"
                />
              ))}

              {/* pieces */}
              {state.pieces.map((piece) => (
                <g
                  key={piece.id}
                  transform={`translate(${piece.x},${piece.y}) rotate(${piece.rotation} ${piece.points.reduce((s, p) => s + p.x, 0) / piece.points.length} ${piece.points.reduce((s, p) => s + p.y, 0) / piece.points.length})`}
                  onPointerDown={(e) => handlePointerDown(piece.id, e)}
                  onClick={() => !piece.placed && dispatch({ type: "ROTATE", pieceId: piece.id })}
                  style={{ cursor: piece.placed ? "default" : "grab", opacity: piece.placed ? 0.9 : 1 }}
                >
                  <polygon
                    points={piece.points.map((p) => `${p.x},${p.y}`).join(" ")}
                    fill={piece.color}
                    stroke={piece.placed ? "#22c55e" : "#fff"}
                    strokeWidth={piece.placed ? 2 : 1}
                  />
                </g>
              ))}
            </svg>

            <p className="text-xs text-violet-300/60">Tap a piece to rotate &bull; Drag to move</p>
          </motion.section>
        )}

        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Tangrams Complete!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}>
                  ⭐
                </motion.span>
              ))}
            </div>
            <p className="text-violet-200/80">
              Score: {score} &bull; {state.completedPuzzles} puzzles solved
            </p>
            <PhysicalButton onClick={startGame} variant="primary">
              Play Again 🔷
            </PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
