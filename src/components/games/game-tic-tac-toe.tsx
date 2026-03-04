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
type Mark = "X" | "O" | null;
type Result = "win" | "draw" | "lose" | null;

const EMPTY_BOARD: Mark[] = Array(9).fill(null) as Mark[];

const WIN_LINES: number[][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6],             // diags
];

const MAX_SCORE = 100;

/* ─── types ─── */

interface State {
  phase: Phase;
  board: Mark[];
  result: Result;
  winLine: number[] | null;
  moveCount: number;
  aiThinking: boolean;
}

type Action =
  | { type: "START" }
  | { type: "PLAYER_MOVE"; index: number }
  | { type: "AI_MOVE" }
  | { type: "GAME_OVER"; result: Result; winLine: number[] | null };

/* ─── helpers ─── */

function checkWinner(board: Mark[]): { winner: Mark; line: number[] | null } {
  for (const line of WIN_LINES) {
    const [a, b, c] = line as [number, number, number];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }
  return { winner: null, line: null };
}

function isBoardFull(board: Mark[]): boolean {
  return board.every((cell) => cell !== null);
}

function minimax(board: Mark[], isMaximizing: boolean): number {
  const { winner } = checkWinner(board);
  if (winner === "O") return 10;
  if (winner === "X") return -10;
  if (isBoardFull(board)) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] !== null) continue;
      board[i] = "O";
      best = Math.max(best, minimax(board, false));
      board[i] = null;
    }
    return best;
  }

  let best = Infinity;
  for (let i = 0; i < 9; i++) {
    if (board[i] !== null) continue;
    board[i] = "X";
    best = Math.min(best, minimax(board, true));
    board[i] = null;
  }
  return best;
}

function findBestMove(board: Mark[]): number {
  let bestScore = -Infinity;
  let bestMove = -1;
  const copy = [...board];
  for (let i = 0; i < 9; i++) {
    if (copy[i] !== null) continue;
    copy[i] = "O";
    const score = minimax(copy, false);
    copy[i] = null;
    if (score > bestScore) {
      bestScore = score;
      bestMove = i;
    }
  }
  return bestMove;
}

/* ─── reducer ─── */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return {
        phase: "playing",
        board: [...EMPTY_BOARD],
        result: null,
        winLine: null,
        moveCount: 0,
        aiThinking: false,
      };

    case "PLAYER_MOVE": {
      if (state.phase !== "playing" || state.aiThinking) return state;
      if (state.board[action.index] !== null) return state;

      const board = [...state.board];
      board[action.index] = "X";
      const moveCount = state.moveCount + 1;

      const { winner, line } = checkWinner(board);
      if (winner === "X") {
        return { ...state, board, moveCount, phase: "complete", result: "win", winLine: line, aiThinking: false };
      }
      if (isBoardFull(board)) {
        return { ...state, board, moveCount, phase: "complete", result: "draw", winLine: null, aiThinking: false };
      }

      return { ...state, board, moveCount, aiThinking: true };
    }

    case "AI_MOVE": {
      if (state.phase !== "playing" || !state.aiThinking) return state;

      const board = [...state.board];
      const move = findBestMove(board);
      if (move === -1) {
        return { ...state, phase: "complete", result: "draw", winLine: null, aiThinking: false };
      }

      board[move] = "O";

      const { winner, line } = checkWinner(board);
      if (winner === "O") {
        return { ...state, board, phase: "complete", result: "lose", winLine: line, aiThinking: false };
      }
      if (isBoardFull(board)) {
        return { ...state, board, phase: "complete", result: "draw", winLine: null, aiThinking: false };
      }

      return { ...state, board, aiThinking: false };
    }

    case "GAME_OVER":
      return { ...state, phase: "complete", result: action.result, winLine: action.winLine };

    default:
      return state;
  }
}

/* ─── score & star calc ─── */

function calcScore(result: Result): number {
  if (result === "win") return 100;
  if (result === "draw") return 50;
  return 10;
}

function calcStars(result: Result, moveCount: number): number {
  if (result === "win") return 3;
  if (result === "draw") return 2;
  if (result === "lose" && moveCount >= 4) return 1;
  return 0;
}

/* ─── component ─── */

export default function GameTicTacToe() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    board: [...EMPTY_BOARD],
    result: null,
    winLine: null,
    moveCount: 0,
    aiThinking: false,
  });

  /* ─── AI move with delay ─── */

  useEffect(() => {
    if (!state.aiThinking || state.phase !== "playing") return;
    const timer = setTimeout(() => dispatch({ type: "AI_MOVE" }), 400);
    return () => clearTimeout(timer);
  }, [state.aiThinking, state.phase]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;

    const stars = calcStars(state.result, state.moveCount);
    const score = calcScore(state.result);

    if (stars >= 3) {
      hapticCelebration();
      setMood("cheering");
      setMessage("You beat the AI!");
    } else if (stars === 2) {
      hapticSuccess();
      setMood("happy");
      setMessage("A draw against perfect play!");
    } else if (stars === 1) {
      hapticError();
      setMood("thinking");
      setMessage("Good effort, try again!");
    } else {
      hapticError();
      setMood("thinking");
      setMessage("Keep practising!");
    }

    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-tic-tac-toe",
      score,
      maxScore: MAX_SCORE,
      elapsedMs: 0,
      interactions: state.moveCount,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.result, state.moveCount, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("You are X. Make your move!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── cell click ─── */

  const handleCellClick = useCallback(
    (index: number) => {
      if (state.phase !== "playing" || state.aiThinking) return;
      if (state.board[index] !== null) return;
      dispatch({ type: "PLAYER_MOVE", index });
      hapticSelection();
    },
    [state.phase, state.aiThinking, state.board],
  );

  /* ─── derived values ─── */

  const stars = calcStars(state.result, state.moveCount);
  const score = calcScore(state.result);

  function resultLabel(result: Result): string {
    if (result === "win") return "You Win!";
    if (result === "draw") return "It's a Draw!";
    return "AI Wins!";
  }

  function cellContent(mark: Mark): string {
    if (mark === "X") return "X";
    if (mark === "O") return "O";
    return "";
  }

  function isWinCell(index: number): boolean {
    return state.winLine !== null && state.winLine.includes(index);
  }

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Tic-Tac-Toe
        </h2>
        {state.phase === "playing" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            {state.aiThinking ? "AI is thinking..." : "Your turn (X)"}
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <MascotFriend id="spark" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-indigo-700 dark:text-indigo-300">
              Challenge the unbeatable AI. Can you draw?
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <Gamepad2 className="mr-2 inline h-4 w-4" /> Start Game
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {/* ─── PLAYING ─── */}
        {state.phase === "playing" && (
          <motion.section key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            <div
              className="mx-auto grid max-w-xs gap-2 rounded-2xl border border-indigo-200/40 bg-indigo-100/30 p-3 dark:border-indigo-800/40 dark:bg-indigo-950/30"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
              role="grid"
              aria-label="Tic-Tac-Toe board"
            >
              {state.board.map((mark, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleCellClick(i)}
                  disabled={mark !== null || state.aiThinking}
                  className={`flex aspect-square items-center justify-center rounded-xl text-4xl font-black transition-all sm:text-5xl ${
                    mark === null
                      ? "cursor-pointer bg-white/60 hover:bg-indigo-100/60 active:scale-95 dark:bg-slate-800/50 dark:hover:bg-indigo-900/40"
                      : "cursor-default bg-white/80 dark:bg-slate-800/70"
                  } ${state.aiThinking && mark === null ? "cursor-wait" : ""}`}
                  role="gridcell"
                  aria-label={mark ? `Cell ${i + 1}: ${mark}` : `Cell ${i + 1}: empty`}
                >
                  {mark === "X" && (
                    <motion.span initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} className="text-indigo-600 dark:text-indigo-400">
                      X
                    </motion.span>
                  )}
                  {mark === "O" && (
                    <motion.span initial={{ scale: 0, rotate: 20 }} animate={{ scale: 1, rotate: 0 }} className="text-rose-500 dark:text-rose-400">
                      O
                    </motion.span>
                  )}
                </button>
              ))}
            </div>
          </motion.section>
        )}

        {/* ─── COMPLETE ─── */}
        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
            {/* Final board with winning line highlight */}
            <div
              className="mx-auto mb-4 grid max-w-xs gap-2 rounded-2xl border border-indigo-200/40 bg-indigo-100/30 p-3 dark:border-indigo-800/40 dark:bg-indigo-950/30"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
              role="grid"
              aria-label="Final board"
            >
              {state.board.map((mark, i) => (
                <div
                  key={i}
                  className={`flex aspect-square items-center justify-center rounded-xl text-4xl font-black sm:text-5xl ${
                    isWinCell(i)
                      ? "bg-yellow-200/80 ring-2 ring-yellow-400 dark:bg-yellow-900/40 dark:ring-yellow-500"
                      : "bg-white/60 dark:bg-slate-800/50"
                  }`}
                  role="gridcell"
                >
                  <span className={mark === "X" ? "text-indigo-600 dark:text-indigo-400" : "text-rose-500 dark:text-rose-400"}>
                    {cellContent(mark)}
                  </span>
                </div>
              ))}
            </div>

            {/* Result card */}
            <div className="rounded-3xl border border-indigo-200/40 bg-white/60 p-6 text-center dark:border-indigo-800/40 dark:bg-black/30">
              <div className="mx-auto mb-4 w-fit rounded-full border border-indigo-300/40 bg-indigo-200/20 px-4 py-2 text-sm font-bold dark:border-indigo-700/40 dark:bg-indigo-800/20">
                {state.result === "win" ? "You Win!" : state.result === "draw" ? "It's a Draw!" : "AI Wins!"}
              </div>
              <div className="flex justify-center">
                <MascotFriend id="spark" mood={stars >= 2 ? "cheering" : "thinking"} size="lg" />
              </div>
              <div className="mt-3 flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div key={i} initial={{ scale: 0, rotate: -20 }} animate={{ scale: i < stars ? 1 : 0.5, rotate: 0, opacity: i < stars ? 1 : 0.3 }} transition={{ delay: i * 0.2, type: "spring" }} className="text-5xl">
                    ⭐
                  </motion.div>
                ))}
              </div>
              <p className="mt-3 text-sm text-indigo-800 dark:text-indigo-200">
                Score {score} · Moves {state.moveCount}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                  <RotateCcw className="mr-2 inline h-4 w-4" /> Play Again
                </PhysicalButton>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
