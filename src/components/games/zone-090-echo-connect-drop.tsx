"use client";

import { useState, useCallback } from "react";
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

const SESSION_ID = createLegacySessionId();
const COLS = 7;
const ROWS = 6;
type Player = 1 | 2;
type Cell = 0 | Player;
type Phase = "ready" | "playing" | "complete";

function emptyBoard(): Cell[][] {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0) as Cell[]);
}

function dropPiece(board: Cell[][], col: number, player: Player): { board: Cell[][]; row: number } | null {
  for (let r = ROWS - 1; r >= 0; r--) {
    if (board[r][col] === 0) {
      const next = board.map((row) => [...row]) as Cell[][];
      next[r][col] = player;
      return { board: next, row: r };
    }
  }
  return null;
}

function checkWin(board: Cell[][], player: Player): [number, number][] | null {
  const dirs: [number, number][] = [[0,1],[1,0],[1,1],[1,-1]];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] !== player) continue;
      for (const [dr, dc] of dirs) {
        const cells: [number, number][] = [[r, c]];
        for (let i = 1; i < 4; i++) {
          const nr = r + dr * i, nc = c + dc * i;
          if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || board[nr][nc] !== player) break;
          cells.push([nr, nc]);
        }
        if (cells.length === 4) return cells;
      }
    }
  }
  return null;
}

// Simple AI — picks winning/blocking move, else random
function aiMove(board: Cell[][]): number {
  // Win
  for (let c = 0; c < COLS; c++) {
    const res = dropPiece(board, c, 2);
    if (res && checkWin(res.board, 2)) return c;
  }
  // Block
  for (let c = 0; c < COLS; c++) {
    const res = dropPiece(board, c, 1);
    if (res && checkWin(res.board, 1)) return c;
  }
  // Center preferred
  const order = [3, 2, 4, 1, 5, 0, 6];
  for (const c of order) {
    if (board[0][c] === 0) return c;
  }
  return 0;
}

export default function Zone090EchoConnectDrop() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [board, setBoard] = useState<Cell[][]>(emptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>(1);
  const [winCells, setWinCells] = useState<Set<string>>(new Set());
  const [winner, setWinner] = useState<Player | "draw" | null>(null);
  const [startTime] = useState(Date.now());
  const [moves, setMoves] = useState(0);
  const [hoverCol, setHoverCol] = useState<number | null>(null);

  const startGame = useCallback(() => {
    setBoard(emptyBoard());
    setCurrentPlayer(1);
    setWinCells(new Set());
    setWinner(null);
    setMoves(0);
    setPhase("playing");
    mascot.speak("You're red! Drop a disc to start!", "happy");
  }, [mascot]);

  const endGame = useCallback((board: Cell[][], result: Player | "draw") => {
    setWinner(result);
    setPhase("complete");
    const score = result === 1 ? 100 : result === "draw" ? 50 : 0;
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-090",
      score,
      maxScore: 100,
      elapsedMs: Date.now() - startTime,
      interactions: moves,
      difficulty: "medium",
    });
    if (result === 1) { hapticSuccess(); mascot.speak("Connect 4! You beat the AI! Amazing!", "celebrate"); }
    else if (result === "draw") mascot.speak("It's a draw! Neck and neck!", "encourage");
    else { hapticError(); mascot.speak("AI wins this one! Want a rematch?", "encourage"); }
  }, [mascot, moves, startTime]);

  const handleDrop = useCallback((col: number) => {
    if (phase !== "playing" || currentPlayer !== 1) return;
    const result = dropPiece(board, col, 1);
    if (!result) return;
    hapticSelection();
    setMoves((n) => n + 1);

    const win = checkWin(result.board, 1);
    if (win) {
      setBoard(result.board);
      setWinCells(new Set(win.map(([r, c]) => `${r}-${c}`)));
      endGame(result.board, 1);
      return;
    }
    const isDraw = result.board[0].every((v) => v !== 0);
    if (isDraw) { setBoard(result.board); endGame(result.board, "draw"); return; }

    setCurrentPlayer(2);
    setBoard(result.board);

    // AI move
    setTimeout(() => {
      const aiCol = aiMove(result.board);
      const aiResult = dropPiece(result.board, aiCol, 2);
      if (!aiResult) return;
      const aiWin = checkWin(aiResult.board, 2);
      if (aiWin) {
        setBoard(aiResult.board);
        setWinCells(new Set(aiWin.map(([r, c]) => `${r}-${c}`)));
        endGame(aiResult.board, 2);
        return;
      }
      const aiDraw = aiResult.board[0].every((v) => v !== 0);
      if (aiDraw) { setBoard(aiResult.board); endGame(aiResult.board, "draw"); return; }
      setBoard(aiResult.board);
      setCurrentPlayer(1);
    }, 400);
  }, [board, currentPlayer, endGame, phase]);

  const COLORS: Record<Cell, string> = {
    0: "bg-white/60",
    1: "bg-red-500",
    2: "bg-yellow-400",
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="echo" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Echo Connect Drop</h2>
          <p className="text-xs text-stone-500">Connect 4 in a row to win!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-4xl">🔴🟡</p>
            <h3 className="text-lg font-black text-stone-800">Connect Four</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              You are 🔴 Red. Drop discs into columns to connect 4 in a row (horizontal, vertical, or diagonal). Beat the AI!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Start Game!</PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "complete") && (
          <motion.div key="board" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3">
            {/* Status */}
            <div className="flex items-center gap-2 text-sm font-bold text-stone-700">
              {phase === "playing" ? (
                <><div className={`w-5 h-5 rounded-full ${currentPlayer === 1 ? "bg-red-500" : "bg-yellow-400"}`} />
                {currentPlayer === 1 ? "Your turn" : "AI thinking…"}</>
              ) : (
                <span className="text-base font-black">
                  {winner === 1 ? "🏆 You win!" : winner === 2 ? "🤖 AI wins!" : "🤝 Draw!"}
                </span>
              )}
            </div>

            {/* Grid */}
            <div className="rounded-2xl bg-blue-700 p-2 cursor-pointer"
                 style={{ display: "grid", gridTemplateColumns: `repeat(${COLS}, 48px)`, gap: 4 }}>
              {/* Drop arrows */}
              {Array.from({ length: COLS }, (_, c) => (
                <div key={c} className="h-6 flex items-center justify-center cursor-pointer"
                     onClick={() => handleDrop(c)}
                     onMouseEnter={() => setHoverCol(c)}
                     onMouseLeave={() => setHoverCol(null)}>
                  {hoverCol === c && phase === "playing" && currentPlayer === 1 && (
                    <div className="w-5 h-5 rounded-full bg-red-400 animate-bounce" />
                  )}
                </div>
              ))}
              {board.map((row, r) =>
                row.map((cell, c) => (
                  <div key={`${r}-${c}`}
                       onClick={() => handleDrop(c)}
                       className={`w-12 h-12 rounded-full cursor-pointer transition-colors
                         ${COLORS[cell]}
                         ${winCells.has(`${r}-${c}`) ? "ring-4 ring-white scale-110" : ""}`} />
                ))
              )}
            </div>

            {phase === "complete" && (
              <PhysicalButton onClick={startGame} variant="primary">
                <RotateCcw className="mr-1.5 inline h-4 w-4" /> Play Again
              </PhysicalButton>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
