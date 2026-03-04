"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Trophy, Box, Undo2 } from "lucide-react";
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

/* ─── constants ─── */

type Phase = "ready" | "playing" | "won";
type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";
type CellType = "floor" | "wall" | "target" | "player" | "box" | "boxOnTarget" | "playerOnTarget";

// Simple Sokoban levels (# = wall, . = target, @ = player, $ = box, + = player on target, * = box on target)
const LEVELS: string[][] = [
  [
    "  #####",
    "###   #",
    "# $ # ##",
    "# #  . #",
    "# . $  #",
    "#@ #####",
    "####",
  ],
  [
    "######",
    "#    #",
    "# $@ #",
    "# $  #",
    "#..  #",
    "######",
  ],
  [
    "  ####",
    "###  ####",
    "#     $ #",
    "# #  #$ #",
    "# . .#@ #",
    "#########",
  ],
  [
    "#######",
    "#  . .#",
    "# # # #",
    "#  $$ #",
    "## @ ##",
    " #   #",
    " #####",
  ],
  [
    "########",
    "#   #  #",
    "#  $$ @#",
    "# #.. ##",
    "#   # #",
    "##    #",
    " ######",
  ],
];

interface Pos { x: number; y: number }

interface LevelState {
  width: number;
  height: number;
  walls: boolean[][];
  targets: boolean[][];
  boxes: Pos[];
  player: Pos;
}

function parseLevel(lines: string[]): LevelState {
  const height = lines.length;
  const width = Math.max(...lines.map((l) => l.length));
  const walls: boolean[][] = Array.from({ length: height }, () => Array(width).fill(false));
  const targets: boolean[][] = Array.from({ length: height }, () => Array(width).fill(false));
  const boxes: Pos[] = [];
  let player: Pos = { x: 0, y: 0 };

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < lines[r].length; c++) {
      const ch = lines[r][c];
      if (ch === "#") walls[r][c] = true;
      if (ch === ".") targets[r][c] = true;
      if (ch === "@") player = { x: c, y: r };
      if (ch === "$") boxes.push({ x: c, y: r });
      if (ch === "+") { player = { x: c, y: r }; targets[r][c] = true; }
      if (ch === "*") { boxes.push({ x: c, y: r }); targets[r][c] = true; }
    }
  }

  return { width, height, walls, targets, boxes, player };
}

/* ─── state ─── */

interface State {
  phase: Phase;
  sessionId: string;
  levelIdx: number;
  level: LevelState;
  moves: number;
  pushes: number;
  history: { player: Pos; boxes: Pos[] }[];
  interactions: number;
  startTime: number;
}

type Action =
  | { type: "START" }
  | { type: "MOVE"; dir: Dir }
  | { type: "UNDO" }
  | { type: "RESTART_LEVEL" }
  | { type: "RESET" };

function init(): State {
  const level = parseLevel(LEVELS[0]);
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    levelIdx: 0,
    level,
    moves: 0,
    pushes: 0,
    history: [],
    interactions: 0,
    startTime: 0,
  };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), startTime: Date.now() };

    case "MOVE": {
      if (s.phase !== "playing") return s;
      const { player, boxes, walls } = s.level;
      const dx = a.dir === "LEFT" ? -1 : a.dir === "RIGHT" ? 1 : 0;
      const dy = a.dir === "UP" ? -1 : a.dir === "DOWN" ? 1 : 0;
      const nx = player.x + dx;
      const ny = player.y + dy;

      // Out of bounds or wall
      if (ny < 0 || ny >= s.level.height || nx < 0 || nx >= s.level.width) return s;
      if (walls[ny][nx]) return s;

      // Check if box in the way
      const boxIdx = boxes.findIndex((b) => b.x === nx && b.y === ny);
      let newBoxes = boxes;
      let pushed = false;

      if (boxIdx !== -1) {
        const bx = nx + dx;
        const by = ny + dy;
        // Box push check
        if (by < 0 || by >= s.level.height || bx < 0 || bx >= s.level.width) return s;
        if (walls[by][bx]) return s;
        if (boxes.some((b, i) => i !== boxIdx && b.x === bx && b.y === by)) return s;

        newBoxes = boxes.map((b, i) => (i === boxIdx ? { x: bx, y: by } : b));
        pushed = true;
      }

      const newPlayer = { x: nx, y: ny };
      const newLevel = { ...s.level, player: newPlayer, boxes: newBoxes };

      // Check win
      const won = newBoxes.every((b) => s.level.targets[b.y][b.x]);

      // Next level or complete
      if (won) {
        const nextIdx = s.levelIdx + 1;
        if (nextIdx >= LEVELS.length) {
          return {
            ...s,
            phase: "won",
            level: newLevel,
            moves: s.moves + 1,
            pushes: s.pushes + (pushed ? 1 : 0),
            history: [...s.history, { player, boxes }],
            interactions: s.interactions + 1,
          };
        }
        // Load next level
        const nextLevel = parseLevel(LEVELS[nextIdx]);
        return {
          ...s,
          levelIdx: nextIdx,
          level: nextLevel,
          moves: s.moves + 1,
          pushes: s.pushes + (pushed ? 1 : 0),
          history: [],
          interactions: s.interactions + 1,
        };
      }

      return {
        ...s,
        level: newLevel,
        moves: s.moves + 1,
        pushes: s.pushes + (pushed ? 1 : 0),
        history: [...s.history, { player, boxes }],
        interactions: s.interactions + 1,
      };
    }

    case "UNDO": {
      if (s.phase !== "playing" || s.history.length === 0) return s;
      const prev = s.history[s.history.length - 1];
      return {
        ...s,
        level: { ...s.level, player: prev.player, boxes: prev.boxes },
        history: s.history.slice(0, -1),
        moves: s.moves - 1,
      };
    }

    case "RESTART_LEVEL": {
      const level = parseLevel(LEVELS[s.levelIdx]);
      return { ...s, level, history: [], moves: s.moves };
    }

    case "RESET":
      return init();

    default:
      return s;
  }
}

/* ─── component ─── */

const CELL_SIZE = 36;

export default function GameSokoban() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, Dir> = {
        ArrowUp: "UP", ArrowDown: "DOWN", ArrowLeft: "LEFT", ArrowRight: "RIGHT",
        KeyW: "UP", KeyS: "DOWN", KeyA: "LEFT", KeyD: "RIGHT",
      };
      const dir = map[e.code];
      if (dir) {
        e.preventDefault();
        if (s.phase === "ready") dispatch({ type: "START" });
        dispatch({ type: "MOVE", dir });
      }
      if (e.code === "KeyZ" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        dispatch({ type: "UNDO" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [s.phase]);

  // Touch
  const touchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    (e.currentTarget as HTMLElement).dataset.tx = String(t.clientX);
    (e.currentTarget as HTMLElement).dataset.ty = String(t.clientY);
  }, []);
  const touchEnd = useCallback((e: React.TouchEvent) => {
    const el = e.currentTarget as HTMLElement;
    const sx = Number(el.dataset.tx);
    const sy = Number(el.dataset.ty);
    const t = e.changedTouches[0];
    const dx = t.clientX - sx;
    const dy = t.clientY - sy;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 15) return;
    let dir: Dir;
    if (Math.abs(dx) > Math.abs(dy)) dir = dx > 0 ? "RIGHT" : "LEFT";
    else dir = dy > 0 ? "DOWN" : "UP";
    if (s.phase === "ready") dispatch({ type: "START" });
    dispatch({ type: "MOVE", dir });
    hapticSelection();
  }, [s.phase]);

  // Emit on complete
  useEffect(() => {
    if (s.phase === "won") {
      hapticCelebration();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "sokoban",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: Math.max(0, 1000 - s.moves * 5),
        maxScore: 1000,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.moves]);

  const stars = useMemo(() => {
    if (s.moves <= LEVELS.length * 15) return 3;
    if (s.moves <= LEVELS.length * 25) return 2;
    return 1;
  }, [s.moves]);

  const { level, levelIdx } = s;

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-amber-50 to-orange-50 p-6 dark:from-amber-950/40 dark:to-orange-950/30">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Box className="h-6 w-6 text-amber-600" aria-hidden />
          <h2 className="text-xl font-bold text-amber-700 dark:text-amber-300">Sokoban</h2>
        </div>
        <MascotFriend id="pixel" mood="happy" size="sm" />
      </div>

      {s.phase === "ready" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex flex-col items-center gap-5 text-center"
        >
          <p className="max-w-sm text-lg text-amber-700 dark:text-amber-300">
            Push all crates onto the <span className="font-bold text-red-500">targets</span>!
          </p>
          <p className="text-sm text-amber-500">{LEVELS.length} levels · Arrow keys or swipe · Ctrl+Z to undo</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Game
          </PhysicalButton>
        </motion.div>
      )}

      {s.phase === "playing" && (
        <div className="flex flex-col items-center gap-3">
          {/* HUD */}
          <div className="flex w-full items-center justify-between text-sm text-amber-600 dark:text-amber-400">
            <span>Level {levelIdx + 1}/{LEVELS.length}</span>
            <span>Moves: {s.moves}</span>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch({ type: "UNDO" })}
                className="rounded-lg bg-amber-200 px-2 py-1 text-xs font-bold text-amber-800 hover:bg-amber-300 dark:bg-amber-800 dark:text-amber-200"
                disabled={s.history.length === 0}
              >
                <Undo2 className="inline h-3 w-3" /> Undo
              </button>
              <button
                onClick={() => dispatch({ type: "RESTART_LEVEL" })}
                className="rounded-lg bg-amber-200 px-2 py-1 text-xs font-bold text-amber-800 hover:bg-amber-300 dark:bg-amber-800 dark:text-amber-200"
              >
                <RotateCcw className="inline h-3 w-3" /> Redo
              </button>
            </div>
          </div>

          {/* Grid */}
          <div
            className="overflow-auto rounded-xl bg-stone-800 p-2 shadow-lg"
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
          >
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${level.width}, ${CELL_SIZE}px)` }}>
              {Array.from({ length: level.height }, (_, r) =>
                Array.from({ length: level.width }, (_, c) => {
                  const isWall = level.walls[r]?.[c];
                  const isTarget = level.targets[r]?.[c];
                  const isPlayer = level.player.x === c && level.player.y === r;
                  const box = level.boxes.find((b) => b.x === c && b.y === r);
                  const isFloor = !isWall && (r < level.height && c < level.width);

                  return (
                    <div
                      key={`${r}-${c}`}
                      className="flex items-center justify-center"
                      style={{ width: CELL_SIZE, height: CELL_SIZE }}
                    >
                      {isWall && (
                        <div className="h-full w-full rounded bg-stone-600 shadow-inner" />
                      )}
                      {!isWall && (
                        <div className={`relative flex h-full w-full items-center justify-center rounded ${isTarget ? "bg-red-900/30" : "bg-stone-700"}`}>
                          {isTarget && !box && !isPlayer && (
                            <div className="h-3 w-3 rounded-full bg-red-500/60" />
                          )}
                          {box && (
                            <motion.div
                              layout
                              className={`h-[28px] w-[28px] rounded-md shadow-md ${
                                isTarget ? "bg-green-500 ring-2 ring-green-300" : "bg-amber-500"
                              }`}
                            />
                          )}
                          {isPlayer && (
                            <motion.div
                              layout
                              className="h-[26px] w-[26px] rounded-full bg-blue-500 shadow-lg ring-2 ring-blue-300"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  );
                }),
              )}
            </div>
          </div>

          {/* Mobile D-pad */}
          <div className="grid grid-cols-3 gap-1 md:hidden">
            <div />
            <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 text-white active:bg-amber-600" onClick={() => dispatch({ type: "MOVE", dir: "UP" })}>▲</button>
            <div />
            <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 text-white active:bg-amber-600" onClick={() => dispatch({ type: "MOVE", dir: "LEFT" })}>◄</button>
            <div className="h-11 w-11" />
            <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 text-white active:bg-amber-600" onClick={() => dispatch({ type: "MOVE", dir: "RIGHT" })}>►</button>
            <div />
            <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 text-white active:bg-amber-600" onClick={() => dispatch({ type: "MOVE", dir: "DOWN" })}>▼</button>
            <div />
          </div>
        </div>
      )}

      {s.phase === "won" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col items-center gap-4 text-center"
        >
          <Trophy className="h-12 w-12 text-amber-500" />
          <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">All Levels Complete!</p>
          <div className="text-5xl" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}{"☆".repeat(3 - stars)}
          </div>
          <div className="rounded-xl bg-white/70 p-4 text-sm dark:bg-white/10">
            <p className="font-semibold text-amber-600">Total Moves: {s.moves}</p>
            <p className="font-semibold text-amber-600">Pushes: {s.pushes}</p>
          </div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "RESET" })}>
            <RotateCcw className="mr-2 h-4 w-4" /> Play Again
          </PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
