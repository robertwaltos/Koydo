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
type Disc = 0 | 1 | 2; // 0 = empty, 1 = black (player), 2 = white (AI)

const SIZE = 8;
const BLACK: Disc = 1;
const WHITE: Disc = 2;
const EMPTY: Disc = 0;

const DIRECTIONS: [number, number][] = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1],           [0, 1],
  [1, -1],  [1, 0],  [1, 1],
];

/* ─── types ─── */

interface State {
  phase: Phase;
  board: Disc[][];
  turn: Disc;
  moveCount: number;
  passCount: number;
}

type Action =
  | { type: "START" }
  | { type: "PLACE"; row: number; col: number }
  | { type: "AI_MOVE" }
  | { type: "PASS" }
  | { type: "END_GAME" };

/* ─── helpers ─── */

function emptyBoard(): Disc[][] {
  const board: Disc[][] = Array.from({ length: SIZE }, () =>
    Array(SIZE).fill(EMPTY) as Disc[],
  );
  board[3]![3] = WHITE;
  board[3]![4] = BLACK;
  board[4]![3] = BLACK;
  board[4]![4] = WHITE;
  return board;
}

function inBounds(r: number, c: number): boolean {
  return r >= 0 && r < SIZE && c >= 0 && c < SIZE;
}

function flipsInDirection(
  board: Disc[][],
  row: number,
  col: number,
  dr: number,
  dc: number,
  player: Disc,
): [number, number][] {
  const opponent: Disc = player === BLACK ? WHITE : BLACK;
  const flips: [number, number][] = [];
  let r = row + dr;
  let c = col + dc;

  while (inBounds(r, c) && board[r]![c] === opponent) {
    flips.push([r, c]);
    r += dr;
    c += dc;
  }

  if (flips.length > 0 && inBounds(r, c) && board[r]![c] === player) {
    return flips;
  }
  return [];
}

function getAllFlips(
  board: Disc[][],
  row: number,
  col: number,
  player: Disc,
): [number, number][] {
  if (board[row]![col] !== EMPTY) return [];

  const allFlips: [number, number][] = [];
  for (const [dr, dc] of DIRECTIONS) {
    const dirFlips = flipsInDirection(board, row, col, dr, dc, player);
    allFlips.push(...dirFlips);
  }
  return allFlips;
}

function isValidMove(board: Disc[][], row: number, col: number, player: Disc): boolean {
  return getAllFlips(board, row, col, player).length > 0;
}

function getValidMoves(board: Disc[][], player: Disc): [number, number][] {
  const moves: [number, number][] = [];
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (isValidMove(board, r, c, player)) {
        moves.push([r, c]);
      }
    }
  }
  return moves;
}

function applyMove(
  board: Disc[][],
  row: number,
  col: number,
  player: Disc,
): Disc[][] {
  const flips = getAllFlips(board, row, col, player);
  if (flips.length === 0) return board;

  const next = board.map((r) => [...r]) as Disc[][];
  next[row]![col] = player;
  for (const [fr, fc] of flips) {
    next[fr]![fc] = player;
  }
  return next;
}

function countDiscs(board: Disc[][]): { black: number; white: number } {
  let black = 0;
  let white = 0;
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r]![c] === BLACK) black++;
      if (board[r]![c] === WHITE) white++;
    }
  }
  return { black, white };
}

/** Corner positions have highest strategic value. */
function isCorner(r: number, c: number): boolean {
  return (r === 0 || r === 7) && (c === 0 || c === 7);
}

/** Edge positions are second-highest priority. */
function isEdge(r: number, c: number): boolean {
  return r === 0 || r === 7 || c === 0 || c === 7;
}

/** Greedy AI: pick move that flips the most discs, with corner/edge priority. */
function pickAiMove(board: Disc[][]): [number, number] | null {
  const moves = getValidMoves(board, WHITE);
  if (moves.length === 0) return null;

  let bestScore = -1;
  let bestMove: [number, number] = moves[0]!;

  for (const [r, c] of moves) {
    const flipCount = getAllFlips(board, r, c, WHITE).length;
    let priority = flipCount;
    if (isCorner(r, c)) priority += 100;
    else if (isEdge(r, c)) priority += 10;

    if (priority > bestScore) {
      bestScore = priority;
      bestMove = [r, c];
    }
  }

  return bestMove;
}

/* ─── reducer ─── */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      return {
        phase: "playing",
        board: emptyBoard(),
        turn: BLACK,
        moveCount: 0,
        passCount: 0,
      };
    }
    case "PLACE": {
      if (state.phase !== "playing" || state.turn !== BLACK) return state;
      const { row, col } = action;
      if (!isValidMove(state.board, row, col, BLACK)) return state;

      const nextBoard = applyMove(state.board, row, col, BLACK);
      const aiMoves = getValidMoves(nextBoard, WHITE);
      const playerMovesAfter = getValidMoves(nextBoard, BLACK);

      if (aiMoves.length === 0 && playerMovesAfter.length === 0) {
        return { ...state, board: nextBoard, turn: BLACK, moveCount: state.moveCount + 1, phase: "complete" };
      }
      if (aiMoves.length === 0) {
        return { ...state, board: nextBoard, turn: BLACK, moveCount: state.moveCount + 1, passCount: 0 };
      }
      return { ...state, board: nextBoard, turn: WHITE, moveCount: state.moveCount + 1, passCount: 0 };
    }
    case "AI_MOVE": {
      if (state.phase !== "playing" || state.turn !== WHITE) return state;

      const aiMove = pickAiMove(state.board);
      if (!aiMove) {
        const playerMoves = getValidMoves(state.board, BLACK);
        if (playerMoves.length === 0) {
          return { ...state, phase: "complete" };
        }
        return { ...state, turn: BLACK, passCount: state.passCount + 1 };
      }

      const [r, c] = aiMove;
      const nextBoard = applyMove(state.board, r, c, WHITE);
      const playerMoves = getValidMoves(nextBoard, BLACK);
      const aiMovesAfter = getValidMoves(nextBoard, WHITE);

      if (playerMoves.length === 0 && aiMovesAfter.length === 0) {
        return { ...state, board: nextBoard, turn: BLACK, moveCount: state.moveCount + 1, phase: "complete" };
      }
      if (playerMoves.length === 0) {
        return { ...state, board: nextBoard, turn: WHITE, moveCount: state.moveCount + 1, passCount: state.passCount + 1 };
      }
      return { ...state, board: nextBoard, turn: BLACK, moveCount: state.moveCount + 1, passCount: 0 };
    }
    case "PASS": {
      if (state.phase !== "playing") return state;
      const newPassCount = state.passCount + 1;
      if (newPassCount >= 2) {
        return { ...state, phase: "complete", passCount: newPassCount };
      }
      const nextTurn: Disc = state.turn === BLACK ? WHITE : BLACK;
      return { ...state, turn: nextTurn, passCount: newPassCount };
    }
    case "END_GAME": {
      return { ...state, phase: "complete" };
    }
    default:
      return state;
  }
}

/* ─── star calc ─── */

function calcStars(black: number, white: number): number {
  const diff = black - white;
  if (diff >= 20) return 3;
  if (diff > 0) return 2;
  if (diff > -10) return 1;
  return 0;
}

/* ─── component ─── */

export default function GameReversi() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    board: emptyBoard(),
    turn: BLACK,
    moveCount: 0,
    passCount: 0,
  });

  /* ─── AI turn ─── */

  useEffect(() => {
    if (state.phase !== "playing" || state.turn !== WHITE) return;

    const timeout = setTimeout(() => {
      dispatch({ type: "AI_MOVE" });
    }, 400);

    return () => clearTimeout(timeout);
  }, [state.phase, state.turn]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;

    const { black, white } = countDiscs(state.board);
    const stars = calcStars(black, white);
    const playerWon = black > white;

    if (stars >= 2) {
      hapticCelebration();
      setMood("cheering");
      setMessage("Brilliant strategy!");
    } else if (stars === 1) {
      hapticSuccess();
      setMood("happy");
      setMessage("Close game!");
    } else {
      hapticError();
      setMood("thinking");
      setMessage("Keep practising!");
    }

    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-reversi",
      score: playerWon ? 100 : 30,
      maxScore: 100,
      elapsedMs: 0,
      interactions: state.moveCount,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.board, state.moveCount, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Flip those discs!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── handle cell click ─── */

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (state.phase !== "playing" || state.turn !== BLACK) return;
      if (!isValidMove(state.board, row, col, BLACK)) {
        hapticError();
        return;
      }
      hapticSelection();
      dispatch({ type: "PLACE", row, col });
    },
    [state.phase, state.turn, state.board],
  );

  /* ─── derived values ─── */

  const { black, white } = countDiscs(state.board);
  const validMoves =
    state.phase === "playing" && state.turn === BLACK
      ? getValidMoves(state.board, BLACK)
      : [];
  const validMoveSet = new Set(validMoves.map(([r, c]) => `${r}-${c}`));
  const stars = calcStars(black, white);

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Reversi
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            <span className="inline-block h-3 w-3 rounded-full bg-gray-900 dark:bg-gray-100" />{" "}
            {black}
            <span className="mx-2">·</span>
            <span className="inline-block h-3 w-3 rounded-full bg-white border border-gray-300 dark:bg-gray-400" />{" "}
            {white}
            {state.phase === "playing" && (
              <span className="ml-2">
                · {state.turn === BLACK ? "Your turn" : "AI thinking..."}
              </span>
            )}
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
            <MascotFriend id="terra" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-indigo-700 dark:text-indigo-300">
              Place discs to outflank your opponent. Flip the most to win!
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
            <div
              className="relative mx-auto grid gap-0.5 rounded-2xl border border-indigo-200/40 bg-emerald-700 p-1.5 dark:border-indigo-800/40 dark:bg-emerald-900"
              style={{
                gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))`,
                maxWidth: "22rem",
              }}
              role="grid"
              aria-label="Reversi board"
            >
              {state.board.map((row, ri) =>
                row.map((cell, ci) => {
                  const isValid = validMoveSet.has(`${ri}-${ci}`);
                  return (
                    <button
                      key={`${ri}-${ci}`}
                      type="button"
                      onClick={() => handleCellClick(ri, ci)}
                      disabled={!isValid}
                      className={`relative aspect-square rounded-sm transition-colors ${
                        isValid
                          ? "cursor-pointer bg-emerald-600/80 hover:bg-emerald-500/90 dark:bg-emerald-800/80 dark:hover:bg-emerald-700/90"
                          : "cursor-default bg-emerald-600/50 dark:bg-emerald-800/50"
                      }`}
                      role="gridcell"
                      aria-label={`Row ${ri + 1}, Column ${ci + 1}${
                        cell === BLACK
                          ? ", black disc"
                          : cell === WHITE
                            ? ", white disc"
                            : isValid
                              ? ", valid move"
                              : ", empty"
                      }`}
                    >
                      {cell !== EMPTY && (
                        <motion.div
                          initial={{ scale: 0, rotateY: 180 }}
                          animate={{ scale: 1, rotateY: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          className={`absolute inset-1 rounded-full shadow-md ${
                            cell === BLACK
                              ? "bg-gray-900 dark:bg-gray-100"
                              : "border border-gray-300 bg-white dark:bg-gray-400"
                          }`}
                        />
                      )}
                      {isValid && cell === EMPTY && (
                        <div className="absolute inset-1 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-emerald-300/60 dark:bg-emerald-400/40" />
                        </div>
                      )}
                    </button>
                  );
                }),
              )}
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
              {black > white
                ? "You win!"
                : black === white
                  ? "Draw!"
                  : "AI wins!"}
            </div>
            <div className="flex justify-center">
              <MascotFriend
                id="terra"
                mood={black > white ? "cheering" : "thinking"}
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
            <div className="mt-3 flex items-center justify-center gap-4 text-sm text-indigo-800 dark:text-indigo-200">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-100" />
                {black}
              </span>
              <span>vs</span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-4 w-4 rounded-full border border-gray-300 bg-white dark:bg-gray-400" />
                {white}
              </span>
            </div>
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
