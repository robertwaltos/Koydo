"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

// ─── Tile symbols (24 pairs = 48 tiles) ──────────────────────────────────────
const TILE_SYMBOLS = [
  "🀇","🀈","🀉","🀊","🀋","🀌","🀍","🀎","🀏",
  "🀙","🀚","🀛","🀜","🀝","🀞","🀟","🀠","🀡",
  "🀀","🀁","🀂","🀃","🌸","🌿",
];
const GRID_COLS = 8;
const GRID_ROWS = 6;
const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "playing" | "complete";

type Tile = {
  id: number;
  symbol: string;
  row: number;
  col: number;
  removed: boolean;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function buildBoard(): Tile[] {
  // 24 pairs of symbols
  const pairs = TILE_SYMBOLS.flatMap((s) => [s, s]);
  // Fisher-Yates shuffle
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  const tiles: Tile[] = [];
  let idx = 0;
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      tiles.push({ id: idx, symbol: pairs[idx], row: r, col: c, removed: false });
      idx++;
    }
  }
  return tiles;
}

function isFree(tile: Tile, tiles: Tile[]): boolean {
  if (tile.removed) return false;
  // A tile is free if it has no live tile to its left OR no live tile to its right
  const hasLeft = tiles.some((t) => !t.removed && t.row === tile.row && t.col === tile.col - 1);
  const hasRight = tiles.some((t) => !t.removed && t.row === tile.row && t.col === tile.col + 1);
  return !hasLeft || !hasRight;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone086TerraTilePair() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [pairs, setPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [startTime] = useState(Date.now());
  const [interactions, setInteractions] = useState(0);
  const [wrongFlash, setWrongFlash] = useState<number[]>([]);

  const totalPairs = GRID_COLS * GRID_ROWS / 2;

  const checkEnd = useCallback((currentTiles: Tile[], currentPairs: number) => {
    if (currentPairs >= totalPairs) {
      setPhase("complete");
      const elapsed = Date.now() - startTime;
      const timeBonus = Math.max(0, 300 - Math.floor(elapsed / 1000)) * 3;
      const finalScore = currentPairs * 50 + timeBonus;
      setScore(finalScore);
      hapticSuccess();
      emitLegacyGameComplete({
        sessionId: SESSION_ID,
        gameId: "zone-086",
        score: finalScore,
        maxScore: totalPairs * 50 + 900,
        elapsedMs: elapsed,
        interactions,
        difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
      mascot.speak("All tiles matched! Terra Tile Master!", "celebrate");
      return;
    }
    // Check if any free pairs remain
    const freeSymbols = new Map<string, number>();
    for (const t of currentTiles) {
      if (!t.removed && isFree(t, currentTiles)) {
        freeSymbols.set(t.symbol, (freeSymbols.get(t.symbol) ?? 0) + 1);
      }
    }
    const hasMatch = Array.from(freeSymbols.values()).some((c) => c >= 2);
    if (!hasMatch && currentTiles.some((t) => !t.removed)) {
      setPhase("complete");
      const elapsed = Date.now() - startTime;
      const finalScore = currentPairs * 50;
      setScore(finalScore);
      emitLegacyGameComplete({
        sessionId: SESSION_ID,
        gameId: "zone-086",
        score: finalScore,
        maxScore: totalPairs * 50 + 900,
        elapsedMs: elapsed,
        interactions,
        difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
      mascot.speak("No more free pairs — but great effort!", "encourage");
    }
  }, [interactions, mascot, startTime, totalPairs]);

  const handleTileClick = useCallback((tileId: number) => {
    if (phase !== "playing") return;
    const tile = tiles.find((t) => t.id === tileId);
    if (!tile || tile.removed) return;
    if (!isFree(tile, tiles)) {
      mascot.speak("That tile is blocked — find a free edge tile!", "encourage");
      hapticError();
      return;
    }
    setInteractions((n) => n + 1);

    if (selected === null) {
      hapticSelection();
      setSelected(tileId);
      return;
    }
    if (selected === tileId) {
      setSelected(null);
      return;
    }

    const selTile = tiles.find((t) => t.id === selected);
    if (!selTile) { setSelected(tileId); return; }

    setMoves((m) => m + 1);

    if (selTile.symbol === tile.symbol) {
      hapticSuccess();
      const next = tiles.map((t) =>
        t.id === tileId || t.id === selected ? { ...t, removed: true } : t
      );
      const newPairs = pairs + 1;
      setTiles(next);
      setPairs(newPairs);
      setSelected(null);
      setScore((s) => s + 50);
      mascot.speak("Match! 🎉", "happy");
      checkEnd(next, newPairs);
    } else {
      hapticError();
      setWrongFlash([selected, tileId]);
      setTimeout(() => { setWrongFlash([]); setSelected(null); }, 600);
    }
  }, [checkEnd, mascot, pairs, phase, selected, tiles]);

  const startGame = () => {
    setTiles(buildBoard());
    setSelected(null);
    setScore(0);
    setPairs(0);
    setMoves(0);
    setInteractions(0);
    setWrongFlash([]);
    setPhase("playing");
    mascot.speak("Match free tiles with the same symbol! Edge tiles (no left or right neighbor) are free.", "happy");
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="terra" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Terra Tile Pair</h2>
          <p className="text-xs text-stone-500">Match free edge tiles with the same symbol!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">🀄</p>
            <h3 className="text-lg font-black text-stone-800">Tile Pair</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Click two matching tiles to remove them. A tile is free if it has no neighbor on its left OR right side. Clear all pairs to win!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Matching!
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3">
            {/* HUD */}
            <div className="flex items-center justify-between w-full max-w-sm px-1">
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-400">Score</p>
                <p className="text-xl font-black text-stone-800">{score}</p>
              </div>
              <div className="text-center">
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(12, totalPairs) }, (_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i < pairs ? "bg-emerald-500" : "bg-stone-200"}`} />
                  ))}
                </div>
                <p className="text-[10px] text-stone-400 mt-0.5">{pairs}/{totalPairs} pairs</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase font-bold text-stone-400">Moves</p>
                <p className="text-xl font-black text-stone-800">{moves}</p>
              </div>
            </div>

            {/* Board */}
            <div
              className="overflow-auto"
              style={{ display: "grid", gridTemplateColumns: `repeat(${GRID_COLS}, 44px)`, gap: 2 }}
            >
              {tiles.map((tile) => {
                const free = isFree(tile, tiles);
                const isSelected = selected === tile.id;
                const isWrong = wrongFlash.includes(tile.id);
                return (
                  <motion.button
                    key={tile.id}
                    onClick={() => handleTileClick(tile.id)}
                    animate={{
                      scale: isSelected ? 1.05 : 1,
                      opacity: tile.removed ? 0 : 1,
                    }}
                    className={`w-11 h-14 rounded-lg flex items-center justify-center text-xl transition-all border-2 font-bold
                      ${tile.removed ? "pointer-events-none bg-transparent border-transparent" :
                        isWrong ? "border-red-500 bg-red-100" :
                        isSelected ? "border-sky-500 bg-sky-100 shadow-md" :
                        free ? "border-stone-300 bg-amber-50 hover:border-sky-400 hover:bg-sky-50 cursor-pointer" :
                        "border-stone-200 bg-stone-200 cursor-not-allowed opacity-50"
                      }`}
                  >
                    {tile.removed ? "" : tile.symbol}
                  </motion.button>
                );
              })}
            </div>

            {/* Legend */}
            <p className="text-[11px] text-stone-400">Bright tiles = free to click</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">{pairs >= totalPairs ? "🏆" : "🀄"}</p>
            <h3 className="text-lg font-black text-stone-800">
              {pairs >= totalPairs ? "Board Cleared!" : "No More Matches"}
            </h3>
            <p className="text-3xl font-black text-emerald-600">{score} pts</p>
            <p className="text-sm text-stone-500">{pairs} pairs cleared · {moves} moves</p>
            <PhysicalButton onClick={startGame} variant="primary">
              <RotateCcw className="mr-1.5 inline h-4 w-4" /> New Board
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
