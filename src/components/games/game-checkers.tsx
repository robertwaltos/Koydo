"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, RotateCcw } from "lucide-react";
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

type Phase = "ready" | "playing" | "complete";
type Owner = "red" | "black" | null;

interface Piece {
  owner: "red" | "black";
  king: boolean;
}

type CellState = Piece | null;

const SIZE = 8;

/* ─── types ─── */

interface Pos {
  row: number;
  col: number;
}

interface Move {
  from: Pos;
  to: Pos;
  captures: Pos[];
}

interface State {
  phase: Phase;
  board: CellState[][];
  turn: "red" | "black";
  selected: Pos | null;
  validMoves: Move[];
  moveCount: number;
  redCaptures: number;
  blackCaptures: number;
  winner: Owner;
}

type Action =
  | { type: "START" }
  | { type: "SELECT"; pos: Pos }
  | { type: "MOVE"; move: Move }
  | { type: "AI_MOVE"; move: Move }
  | { type: "END"; winner: Owner };

/* ─── helpers ─── */

function createInitialBoard(): CellState[][] {
  const board: CellState[][] = Array.from({ length: SIZE }, () =>
    Array(SIZE).fill(null) as CellState[],
  );
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if ((r + c) % 2 !== 1) continue;
      if (r < 3) board[r]![c] = { owner: "black", king: false };
      if (r > 4) board[r]![c] = { owner: "red", king: false };
    }
  }
  return board;
}

function cloneBoard(board: CellState[][]): CellState[][] {
  return board.map((row) =>
    row.map((cell) => (cell ? { ...cell } : null)),
  );
}

function posEq(a: Pos, b: Pos): boolean {
  return a.row === b.row && a.col === b.col;
}

function inBounds(row: number, col: number): boolean {
  return row >= 0 && row < SIZE && col >= 0 && col < SIZE;
}

function getJumps(
  board: CellState[][],
  row: number,
  col: number,
  piece: Piece,
  chain: Pos[],
): Move[] {
  const dirs = piece.king
    ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
    : piece.owner === "red"
      ? [[-1, -1], [-1, 1]]
      : [[1, -1], [1, 1]];

  const moves: Move[] = [];

  for (const [dr, dc] of dirs) {
    const midR = row + dr!;
    const midC = col + dc!;
    const toR = row + dr! * 2;
    const toC = col + dc! * 2;

    if (!inBounds(toR, toC)) continue;

    const midPiece = board[midR]![midC];
    const toPiece = board[toR]![toC];

    if (!midPiece || midPiece.owner === piece.owner) continue;
    if (toPiece !== null) continue;
    if (chain.some((p) => posEq(p, { row: midR, col: midC }))) continue;

    const newChain = [...chain, { row: midR, col: midC }];
    const nextBoard = cloneBoard(board);
    nextBoard[toR]![toC] = nextBoard[row]![col];
    nextBoard[row]![col] = null;
    nextBoard[midR]![midC] = null;

    const further = getJumps(nextBoard, toR, toC, piece, newChain);
    if (further.length > 0) {
      for (const f of further) {
        moves.push({
          from: { row, col },
          to: f.to,
          captures: [...newChain, ...f.captures.filter(
            (fc) => !newChain.some((nc) => posEq(nc, fc)),
          )],
        });
      }
    } else {
      moves.push({
        from: { row, col },
        to: { row: toR, col: toC },
        captures: newChain,
      });
    }
  }

  return moves;
}

function getSimpleMoves(
  board: CellState[][],
  row: number,
  col: number,
  piece: Piece,
): Move[] {
  const dirs = piece.king
    ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
    : piece.owner === "red"
      ? [[-1, -1], [-1, 1]]
      : [[1, -1], [1, 1]];

  const moves: Move[] = [];

  for (const [dr, dc] of dirs) {
    const toR = row + dr!;
    const toC = col + dc!;
    if (!inBounds(toR, toC)) continue;
    if (board[toR]![toC] !== null) continue;
    moves.push({ from: { row, col }, to: { row: toR, col: toC }, captures: [] });
  }

  return moves;
}

function getAllMoves(board: CellState[][], owner: "red" | "black"): Move[] {
  let jumps: Move[] = [];
  let simple: Move[] = [];

  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const piece = board[r]![c];
      if (!piece || piece.owner !== owner) continue;
      jumps = jumps.concat(getJumps(board, r, c, piece, []));
      simple = simple.concat(getSimpleMoves(board, r, c, piece));
    }
  }

  return jumps.length > 0 ? jumps : simple;
}

function getMovesForPiece(
  board: CellState[][],
  row: number,
  col: number,
  owner: "red" | "black",
): Move[] {
  const piece = board[row]![col];
  if (!piece || piece.owner !== owner) return [];

  const allMoves = getAllMoves(board, owner);
  const hasCaptures = allMoves.some((m) => m.captures.length > 0);

  return allMoves.filter(
    (m) =>
      m.from.row === row &&
      m.from.col === col &&
      (hasCaptures ? m.captures.length > 0 : true),
  );
}

function applyMove(board: CellState[][], move: Move): CellState[][] {
  const next = cloneBoard(board);
  const piece = next[move.from.row]![move.from.col]!;
  next[move.to.row]![move.to.col] = piece;
  next[move.from.row]![move.from.col] = null;

  for (const cap of move.captures) {
    next[cap.row]![cap.col] = null;
  }

  if (piece.owner === "red" && move.to.row === 0) piece.king = true;
  if (piece.owner === "black" && move.to.row === SIZE - 1) piece.king = true;

  return next;
}

function pickAiMove(board: CellState[][]): Move | null {
  const moves = getAllMoves(board, "black");
  if (moves.length === 0) return null;

  const captures = moves.filter((m) => m.captures.length > 0);
  if (captures.length > 0) {
    captures.sort((a, b) => b.captures.length - a.captures.length);
    const best = captures[0]!.captures.length;
    const tied = captures.filter((m) => m.captures.length === best);
    return tied[Math.floor(Math.random() * tied.length)]!;
  }

  return moves[Math.floor(Math.random() * moves.length)]!;
}

function checkWinner(board: CellState[][]): Owner {
  const redMoves = getAllMoves(board, "red");
  const blackMoves = getAllMoves(board, "black");

  if (redMoves.length === 0) return "black";
  if (blackMoves.length === 0) return "red";

  let redCount = 0;
  let blackCount = 0;
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const p = board[r]![c];
      if (p?.owner === "red") redCount++;
      if (p?.owner === "black") blackCount++;
    }
  }
  if (redCount === 0) return "black";
  if (blackCount === 0) return "red";

  return null;
}

/* ─── reducer ─── */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      const board = createInitialBoard();
      return {
        phase: "playing",
        board,
        turn: "red",
        selected: null,
        validMoves: [],
        moveCount: 0,
        redCaptures: 0,
        blackCaptures: 0,
        winner: null,
      };
    }
    case "SELECT": {
      if (state.phase !== "playing" || state.turn !== "red") return state;
      const piece = state.board[action.pos.row]![action.pos.col];
      if (!piece || piece.owner !== "red") return state;

      const moves = getMovesForPiece(
        state.board,
        action.pos.row,
        action.pos.col,
        "red",
      );
      return { ...state, selected: action.pos, validMoves: moves };
    }
    case "MOVE": {
      if (state.phase !== "playing" || state.turn !== "red") return state;
      const newBoard = applyMove(state.board, action.move);
      const captures = state.redCaptures + action.move.captures.length;
      const winner = checkWinner(newBoard);

      if (winner) {
        return {
          ...state,
          phase: "complete",
          board: newBoard,
          selected: null,
          validMoves: [],
          moveCount: state.moveCount + 1,
          redCaptures: captures,
          winner,
        };
      }

      return {
        ...state,
        board: newBoard,
        turn: "black",
        selected: null,
        validMoves: [],
        moveCount: state.moveCount + 1,
        redCaptures: captures,
      };
    }
    case "AI_MOVE": {
      if (state.phase !== "playing" || state.turn !== "black") return state;
      const newBoard = applyMove(state.board, action.move);
      const captures = state.blackCaptures + action.move.captures.length;
      const winner = checkWinner(newBoard);

      if (winner) {
        return {
          ...state,
          phase: "complete",
          board: newBoard,
          selected: null,
          validMoves: [],
          blackCaptures: captures,
          winner,
        };
      }

      return {
        ...state,
        board: newBoard,
        turn: "red",
        selected: null,
        validMoves: [],
        blackCaptures: captures,
      };
    }
    case "END":
      return { ...state, phase: "complete", winner: action.winner };
    default:
      return state;
  }
}

/* ─── star calc ─── */

function calcStars(
  winner: Owner,
  redCaptures: number,
  moveCount: number,
): number {
  if (winner === "red" && redCaptures >= 8) return 3;
  if (winner === "red") return 2;
  if (winner === "black" && moveCount >= 5) return 1;
  return 0;
}

/* ─── component ─── */

export default function GameCheckers() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    board: createInitialBoard(),
    turn: "red" as const,
    selected: null,
    validMoves: [],
    moveCount: 0,
    redCaptures: 0,
    blackCaptures: 0,
    winner: null,
  });

  /* ─── AI turn ─── */

  useEffect(() => {
    if (state.phase !== "playing" || state.turn !== "black") return;
    const timer = setTimeout(() => {
      const move = pickAiMove(state.board);
      if (move) {
        dispatch({ type: "AI_MOVE", move });
      } else {
        dispatch({ type: "END", winner: "red" });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [state.phase, state.turn, state.board]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;

    const stars = calcStars(state.winner, state.redCaptures, state.moveCount);

    if (stars >= 2) {
      hapticCelebration();
      setMood("cheering");
      setMessage("Amazing checkers!");
    } else if (stars === 1) {
      hapticSuccess();
      setMood("happy");
      setMessage("Great game!");
    } else {
      hapticError();
      setMood("thinking");
      setMessage("Keep practising!");
    }

    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-checkers",
      score: state.winner === "red" ? 100 : 30,
      maxScore: 100,
      elapsedMs: 0,
      interactions: state.moveCount,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [
    state.phase,
    state.winner,
    state.redCaptures,
    state.moveCount,
    setMessage,
    setMood,
  ]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Jump and capture!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── cell click ─── */

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (state.phase !== "playing" || state.turn !== "red") return;

      const targetMove = state.validMoves.find(
        (m) => m.to.row === row && m.to.col === col,
      );
      if (targetMove) {
        hapticSelection();
        dispatch({ type: "MOVE", move: targetMove });
        return;
      }

      const piece = state.board[row]![col];
      if (piece && piece.owner === "red") {
        hapticSelection();
        dispatch({ type: "SELECT", pos: { row, col } });
      }
    },
    [state.phase, state.turn, state.validMoves, state.board],
  );

  /* ─── render helpers ─── */

  function isSelected(row: number, col: number): boolean {
    return state.selected !== null &&
      state.selected.row === row &&
      state.selected.col === col;
  }

  function isValidTarget(row: number, col: number): boolean {
    return state.validMoves.some((m) => m.to.row === row && m.to.col === col);
  }

  function countPieces(owner: "red" | "black"): number {
    let count = 0;
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (state.board[r]![c]?.owner === owner) count++;
      }
    }
    return count;
  }

  const stars = calcStars(state.winner, state.redCaptures, state.moveCount);

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Checkers
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            Red {countPieces("red")} · Black {countPieces("black")} · Moves{" "}
            {state.moveCount}
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section
            key="ready"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <MascotFriend id="pixel" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-indigo-700 dark:text-indigo-300">
              Jump over your opponent&apos;s pieces to capture them!
            </p>
            <div className="mt-5">
              <PhysicalButton
                onClick={startGame}
                variant="primary"
                className="px-8 py-3"
              >
                <Gamepad2 className="mr-2 inline h-4 w-4" /> Start Game
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {/* ─── PLAYING ─── */}
        {state.phase === "playing" && (
          <motion.section
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            {/* Turn indicator */}
            <div className="mb-2 flex items-center justify-between text-xs font-semibold">
              <span className="text-indigo-600 dark:text-indigo-300">
                {state.turn === "red" ? "Your turn (Red)" : "AI thinking..."}
              </span>
              <span className="text-indigo-500 dark:text-indigo-400">
                Captures: {state.redCaptures}
              </span>
            </div>

            {/* Board */}
            <div
              className="relative mx-auto grid rounded-2xl border border-indigo-200/40 bg-indigo-100/30 p-1 dark:border-indigo-800/40 dark:bg-indigo-950/30"
              style={{
                gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))`,
                maxWidth: "22rem",
              }}
              role="grid"
              aria-label="Checkers board"
            >
              {state.board.map((row, ri) =>
                row.map((cell, ci) => {
                  const isDark = (ri + ci) % 2 === 1;
                  const selected = isSelected(ri, ci);
                  const target = isValidTarget(ri, ci);

                  return (
                    <button
                      key={`${ri}-${ci}`}
                      type="button"
                      onClick={() => handleCellClick(ri, ci)}
                      className={`relative aspect-square transition-colors ${
                        isDark
                          ? "bg-emerald-800 dark:bg-emerald-900"
                          : "bg-amber-100 dark:bg-amber-200/80"
                      } ${selected ? "ring-2 ring-yellow-400 ring-offset-1" : ""} ${
                        target
                          ? "ring-2 ring-cyan-400/80 ring-offset-1"
                          : ""
                      }`}
                      role="gridcell"
                      aria-label={`Row ${ri + 1}, Column ${ci + 1}${
                        cell ? `, ${cell.owner}${cell.king ? " king" : ""} piece` : ""
                      }${target ? ", valid move" : ""}`}
                    >
                      {/* Valid move dot */}
                      {target && !cell && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-cyan-400/60 dark:bg-cyan-300/60" />
                        </div>
                      )}

                      {/* Piece */}
                      {cell && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className={`flex h-[70%] w-[70%] items-center justify-center rounded-full border-2 shadow-md transition-transform ${
                              cell.owner === "red"
                                ? "border-red-300 bg-red-500 dark:border-red-400 dark:bg-red-600"
                                : "border-gray-500 bg-gray-800 dark:border-gray-400 dark:bg-gray-900"
                            } ${
                              selected ? "scale-110 shadow-lg" : ""
                            }`}
                          >
                            {cell.king && (
                              <span className="text-xs font-black text-white drop-shadow">
                                K
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </button>
                  );
                }),
              )}
            </div>

            {/* Legend */}
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-indigo-600 dark:text-indigo-300">
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-full bg-red-500" />{" "}
                You
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-full bg-gray-800 dark:bg-gray-900" />{" "}
                AI
              </span>
            </div>
          </motion.section>
        )}

        {/* ─── COMPLETE ─── */}
        {state.phase === "complete" && (
          <motion.section
            key="complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-3xl border border-indigo-200/40 bg-white/60 p-6 text-center dark:border-indigo-800/40 dark:bg-black/30"
          >
            <div className="mx-auto mb-4 w-fit rounded-full border border-indigo-300/40 bg-indigo-200/20 px-4 py-2 text-sm font-bold dark:border-indigo-700/40 dark:bg-indigo-800/20">
              {state.winner === "red" ? "You Win!" : "AI Wins"}
            </div>
            <div className="flex justify-center">
              <MascotFriend
                id="pixel"
                mood={stars >= 2 ? "cheering" : "thinking"}
                size="lg"
              />
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{
                    scale: i < stars ? 1 : 0.5,
                    rotate: 0,
                    opacity: i < stars ? 1 : 0.3,
                  }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  className="text-5xl"
                >
                  ⭐
                </motion.div>
              ))}
            </div>
            <p className="mt-3 text-sm text-indigo-800 dark:text-indigo-200">
              Moves {state.moveCount} · Captures {state.redCaptures}
            </p>
            <div className="mt-5">
              <PhysicalButton
                onClick={startGame}
                variant="primary"
                className="px-8 py-3"
              >
                <RotateCcw className="mr-2 inline h-4 w-4" /> Play Again
              </PhysicalButton>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
