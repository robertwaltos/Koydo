"use client";

import { useEffect, useMemo, useReducer } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Grid3X3 } from "lucide-react";
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
const ROWS = 6;
const COLS = 8;
const TILE_TYPES = ["🀄", "🎴", "🃏", "🎯", "🎲", "🧩", "🔮", "💎", "🌸", "🍀",
  "⭐", "🌙", "🔥", "💧", "🍎", "🍊", "🍋", "🦋"];
const TOTAL_TILES = ROWS * COLS; // 48 tiles = 24 pairs

type Phase = "ready" | "playing" | "won";

interface Tile {
  id: number;
  type: string;
  matched: boolean;
  layer: number;
}

interface State {
  phase: Phase;
  sessionId: string;
  tiles: Tile[];
  selected: number | null;
  matched: number;
  moves: number;
  startTime: number;
  interactions: number;
}

function buildTiles(): Tile[] {
  const pairCount = TOTAL_TILES / 2;
  const types: string[] = [];
  for (let i = 0; i < pairCount; i++) {
    const t = TILE_TYPES[i % TILE_TYPES.length]!;
    types.push(t, t);
  }
  /* shuffle */
  for (let i = types.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [types[i], types[j]] = [types[j]!, types[i]!];
  }
  return types.map((type, id) => ({
    id,
    type,
    matched: false,
    layer: 0,
  }));
}

/* check if tile is "free" (exposed, at grid edges or has no blocking neighbors) */
function isFree(idx: number, tiles: Tile[]): boolean {
  if (tiles[idx]!.matched) return false;
  const row = Math.floor(idx / COLS);
  const col = idx % COLS;
  /* tile is free if it has an open left or right side */
  const leftFree = col === 0 || tiles[row * COLS + (col - 1)]!.matched;
  const rightFree = col === COLS - 1 || tiles[row * COLS + (col + 1)]!.matched;
  return leftFree || rightFree;
}

const init = (): State => ({
  phase: "ready", sessionId: createLegacySessionId(), tiles: buildTiles(),
  selected: null, matched: 0, moves: 0, startTime: 0, interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "SELECT"; idx: number };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), tiles: buildTiles(), startTime: Date.now() };
    case "SELECT": {
      if (s.phase !== "playing") return s;
      if (s.tiles[a.idx]!.matched || !isFree(a.idx, s.tiles)) return s;
      if (s.selected === null) return { ...s, selected: a.idx };
      if (s.selected === a.idx) return { ...s, selected: null };
      const tile1 = s.tiles[s.selected]!;
      const tile2 = s.tiles[a.idx]!;
      if (tile1.type === tile2.type) {
        const tiles = s.tiles.map((t) =>
          t.id === tile1.id || t.id === tile2.id ? { ...t, matched: true } : t,
        );
        const matched = s.matched + 2;
        const won = matched >= TOTAL_TILES;
        return { ...s, tiles, selected: null, matched, moves: s.moves + 1, interactions: s.interactions + 1, phase: won ? "won" : "playing" };
      }
      return { ...s, selected: null, moves: s.moves + 1, interactions: s.interactions + 1 };
    }
    default:
      return s;
  }
}

export default function GameMahjong({ width = 420, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();

  const stars = useMemo(() => {
    if (s.phase !== "won") return 0;
    if (s.moves <= 30) return 3;
    if (s.moves <= 45) return 2;
    return 1;
  }, [s.phase, s.moves]);

  useEffect(() => {
    if (s.phase !== "won") return;
    setMood("cheering");
    hapticCelebration();
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-mahjong", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: Math.max(0, 100 - (s.moves - 24)), maxScore: 100,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [s.phase]);

  const tileW = Math.min(44, (width - 32) / COLS);
  const tileH = tileW * 1.3;

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="pixel" mood={s.phase === "won" ? "happy" : "idle"} size="sm" />
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-rose-100 px-3 py-1 text-sm font-bold text-rose-800">Pairs: {s.matched / 2}/{TOTAL_TILES / 2}</div>
          <div className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-bold text-slate-700">Moves: {s.moves}</div>
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <Grid3X3 className="h-12 w-12 text-rose-500" />
          <p className="text-3xl font-bold text-slate-800">Mahjong</p>
          <p className="text-sm text-slate-600">Match free pairs of identical tiles to clear the board!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
        </div>
      )}

      {s.phase !== "ready" && (
        <div
          className="gap-[2px] rounded-xl bg-emerald-800 p-2 shadow-lg"
          style={{ display: "grid", gridTemplateColumns: `repeat(${COLS}, ${tileW}px)` }}
        >
          {s.tiles.map((tile, idx) => {
            const free = isFree(idx, s.tiles);
            const selected = s.selected === idx;
            return (
              <button
                key={tile.id}
                disabled={tile.matched || !free}
                onClick={() => { dispatch({ type: "SELECT", idx }); hapticSelection(); }}
                className={`flex items-center justify-center rounded transition-all text-lg
                  ${tile.matched
                    ? "bg-emerald-900 opacity-20"
                    : selected
                      ? "bg-yellow-200 border-2 border-yellow-500 shadow-lg scale-105"
                      : free
                        ? "bg-amber-50 border border-amber-200 shadow hover:bg-amber-100 cursor-pointer"
                        : "bg-amber-100 border border-amber-300 opacity-60 cursor-not-allowed"}`}
                style={{ width: tileW, height: tileH }}
              >
                {!tile.matched ? tile.type : ""}
              </button>
            );
          })}
        </div>
      )}

      {s.phase === "won" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">All Cleared!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
