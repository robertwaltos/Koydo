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
type Color = "w" | "b";
type PieceType = "K" | "Q" | "R" | "B" | "N" | "P";

interface Piece {
  color: Color;
  type: PieceType;
}

type Square = Piece | null;
type Board = Square[][];

const BOARD_SIZE = 8;

const UNICODE_PIECES: Record<Color, Record<PieceType, string>> = {
  w: { K: "\u2654", Q: "\u2655", R: "\u2656", B: "\u2657", N: "\u2658", P: "\u2659" },
  b: { K: "\u265A", Q: "\u265B", R: "\u265C", B: "\u265D", N: "\u265E", P: "\u265F" },
};

const PIECE_VALUES: Record<PieceType, number> = {
  P: 1, N: 3, B: 3, R: 5, Q: 9, K: 0,
};

/* ─── board helpers ─── */

function initialBoard(): Board {
  const board: Board = Array.from({ length: 8 }, () => Array(8).fill(null) as Square[]);
  const backRank: PieceType[] = ["R", "N", "B", "Q", "K", "B", "N", "R"];
  for (let c = 0; c < 8; c++) {
    board[0]![c] = { color: "b", type: backRank[c]! };
    board[1]![c] = { color: "b", type: "P" };
    board[6]![c] = { color: "w", type: "P" };
    board[7]![c] = { color: "w", type: backRank[c]! };
  }
  return board;
}

function cloneBoard(board: Board): Board {
  return board.map((row) => row.map((sq) => (sq ? { ...sq } : null)));
}

function getPieceAt(board: Board, r: number, c: number): Square {
  if (r < 0 || r >= 8 || c < 0 || c >= 8) return null;
  return board[r]![c]!;
}

/* ─── move generation ─── */

interface Move {
  fromR: number;
  fromC: number;
  toR: number;
  toC: number;
  promotion?: PieceType;
  castle?: "K" | "Q";
  enPassant?: boolean;
}

function inBounds(r: number, c: number): boolean {
  return r >= 0 && r < 8 && c >= 0 && c < 8;
}

function generatePseudoLegalMoves(
  board: Board,
  color: Color,
  castleRights: CastleRights,
  enPassantTarget: [number, number] | null,
): Move[] {
  const moves: Move[] = [];
  const enemy: Color = color === "w" ? "b" : "w";

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = board[r]![c];
      if (!piece || piece.color !== color) continue;

      const addMove = (toR: number, toC: number, extra?: Partial<Move>): void => {
        moves.push({ fromR: r, fromC: c, toR, toC, ...extra });
      };

      const addIfEmpty = (tr: number, tc: number): boolean => {
        if (!inBounds(tr, tc)) return false;
        if (!board[tr]![tc]) { addMove(tr, tc); return true; }
        return false;
      };

      const addIfCapture = (tr: number, tc: number): void => {
        if (!inBounds(tr, tc)) return;
        const target = board[tr]![tc];
        if (target && target.color === enemy) addMove(tr, tc);
      };

      const addSlide = (dr: number, dc: number): void => {
        let tr = r + dr;
        let tc = c + dc;
        while (inBounds(tr, tc)) {
          const target = board[tr]![tc];
          if (!target) { addMove(tr, tc); }
          else {
            if (target.color === enemy) addMove(tr, tc);
            break;
          }
          tr += dr;
          tc += dc;
        }
      };

      switch (piece.type) {
        case "P": {
          const dir = color === "w" ? -1 : 1;
          const startRow = color === "w" ? 6 : 1;
          const promoRow = color === "w" ? 0 : 7;
          const oneAhead = r + dir;

          if (inBounds(oneAhead, c) && !board[oneAhead]![c]) {
            if (oneAhead === promoRow) {
              addMove(oneAhead, c, { promotion: "Q" });
            } else {
              addMove(oneAhead, c);
              if (r === startRow) {
                const twoAhead = r + dir * 2;
                if (!board[twoAhead]![c]) addMove(twoAhead, c);
              }
            }
          }
          for (const dc of [-1, 1]) {
            const tc = c + dc;
            if (!inBounds(oneAhead, tc)) continue;
            const target = board[oneAhead]![tc];
            if (target && target.color === enemy) {
              if (oneAhead === promoRow) {
                addMove(oneAhead, tc, { promotion: "Q" });
              } else {
                addMove(oneAhead, tc);
              }
            }
            if (enPassantTarget && enPassantTarget[0] === oneAhead && enPassantTarget[1] === tc) {
              addMove(oneAhead, tc, { enPassant: true });
            }
          }
          break;
        }
        case "N":
          for (const [dr, dc] of [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]) {
            const tr = r + dr!;
            const tc = c + dc!;
            if (!inBounds(tr, tc)) continue;
            const target = board[tr]![tc];
            if (!target || target.color === enemy) addMove(tr, tc);
          }
          break;
        case "B":
          for (const [dr, dc] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) addSlide(dr!, dc!);
          break;
        case "R":
          for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) addSlide(dr!, dc!);
          break;
        case "Q":
          for (const [dr, dc] of [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]) addSlide(dr!, dc!);
          break;
        case "K":
          for (const [dr, dc] of [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]) {
            const tr = r + dr!;
            const tc = c + dc!;
            if (!inBounds(tr, tc)) continue;
            const target = board[tr]![tc];
            if (!target || target.color === enemy) addMove(tr, tc);
          }
          // Castling
          if (color === "w") {
            if (castleRights.wK && board[7]![5] === null && board[7]![6] === null) {
              addMove(7, 6, { castle: "K" });
            }
            if (castleRights.wQ && board[7]![3] === null && board[7]![2] === null && board[7]![1] === null) {
              addMove(7, 2, { castle: "Q" });
            }
          } else {
            if (castleRights.bK && board[0]![5] === null && board[0]![6] === null) {
              addMove(0, 6, { castle: "K" });
            }
            if (castleRights.bQ && board[0]![3] === null && board[0]![2] === null && board[0]![1] === null) {
              addMove(0, 2, { castle: "Q" });
            }
          }
          break;
      }
    }
  }
  return moves;
}

function findKing(board: Board, color: Color): [number, number] {
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const p = board[r]![c];
      if (p && p.color === color && p.type === "K") return [r, c];
    }
  }
  return [0, 0]; // should never happen
}

function isSquareAttacked(board: Board, r: number, c: number, byColor: Color): boolean {
  const enemy = byColor;
  // Knight attacks
  for (const [dr, dc] of [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]) {
    const tr = r + dr!;
    const tc = c + dc!;
    if (inBounds(tr, tc)) {
      const p = board[tr]![tc];
      if (p && p.color === enemy && p.type === "N") return true;
    }
  }
  // King attacks
  for (const [dr, dc] of [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]) {
    const tr = r + dr!;
    const tc = c + dc!;
    if (inBounds(tr, tc)) {
      const p = board[tr]![tc];
      if (p && p.color === enemy && p.type === "K") return true;
    }
  }
  // Pawn attacks
  const pawnDir = enemy === "w" ? 1 : -1; // white pawns attack upward (lower row), so from enemy pawn perspective
  for (const dc of [-1, 1]) {
    const tr = r + pawnDir;
    const tc = c + dc;
    if (inBounds(tr, tc)) {
      const p = board[tr]![tc];
      if (p && p.color === enemy && p.type === "P") return true;
    }
  }
  // Rook/Queen (straight)
  for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
    let tr = r + dr!;
    let tc = c + dc!;
    while (inBounds(tr, tc)) {
      const p = board[tr]![tc];
      if (p) {
        if (p.color === enemy && (p.type === "R" || p.type === "Q")) return true;
        break;
      }
      tr += dr!;
      tc += dc!;
    }
  }
  // Bishop/Queen (diagonal)
  for (const [dr, dc] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
    let tr = r + dr!;
    let tc = c + dc!;
    while (inBounds(tr, tc)) {
      const p = board[tr]![tc];
      if (p) {
        if (p.color === enemy && (p.type === "B" || p.type === "Q")) return true;
        break;
      }
      tr += dr!;
      tc += dc!;
    }
  }
  return false;
}

function isInCheck(board: Board, color: Color): boolean {
  const [kr, kc] = findKing(board, color);
  return isSquareAttacked(board, kr, kc, color === "w" ? "b" : "w");
}

function applyMove(board: Board, move: Move): Board {
  const b = cloneBoard(board);
  const piece = b[move.fromR]![move.fromC]!;

  b[move.fromR]![move.fromC] = null;

  if (move.enPassant) {
    const capturedRow = piece.color === "w" ? move.toR + 1 : move.toR - 1;
    b[capturedRow]![move.toC] = null;
  }

  if (move.promotion) {
    b[move.toR]![move.toC] = { color: piece.color, type: move.promotion };
  } else {
    b[move.toR]![move.toC] = piece;
  }

  if (move.castle) {
    const row = piece.color === "w" ? 7 : 0;
    if (move.castle === "K") {
      b[row]![7] = null;
      b[row]![5] = { color: piece.color, type: "R" };
    } else {
      b[row]![0] = null;
      b[row]![3] = { color: piece.color, type: "R" };
    }
  }

  return b;
}

interface CastleRights {
  wK: boolean;
  wQ: boolean;
  bK: boolean;
  bQ: boolean;
}

function generateLegalMoves(
  board: Board,
  color: Color,
  castleRights: CastleRights,
  enPassantTarget: [number, number] | null,
): Move[] {
  const pseudo = generatePseudoLegalMoves(board, color, castleRights, enPassantTarget);
  const legal: Move[] = [];
  const enemy: Color = color === "w" ? "b" : "w";

  for (const move of pseudo) {
    // For castling, verify king doesn't pass through or end in check
    if (move.castle) {
      const row = color === "w" ? 7 : 0;
      if (isInCheck(board, color)) continue; // can't castle out of check
      if (move.castle === "K") {
        if (isSquareAttacked(board, row, 5, enemy)) continue;
        if (isSquareAttacked(board, row, 6, enemy)) continue;
      } else {
        if (isSquareAttacked(board, row, 3, enemy)) continue;
        if (isSquareAttacked(board, row, 2, enemy)) continue;
      }
    }

    const newBoard = applyMove(board, move);
    if (!isInCheck(newBoard, color)) {
      legal.push(move);
    }
  }
  return legal;
}

/* ─── AI (minimax with alpha-beta) ─── */

function evaluateBoard(board: Board): number {
  let score = 0;
  // Piece-square tables for positional evaluation
  const pawnTable = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [5, 5, 5, 5, 5, 5, 5, 5],
    [1, 1, 2, 3, 3, 2, 1, 1],
    [0.5, 0.5, 1, 2.5, 2.5, 1, 0.5, 0.5],
    [0, 0, 0, 2, 2, 0, 0, 0],
    [0.5, -0.5, -1, 0, 0, -1, -0.5, 0.5],
    [0.5, 1, 1, -2, -2, 1, 1, 0.5],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const p = board[r]![c];
      if (!p) continue;
      const val = PIECE_VALUES[p.type];
      const positional = p.type === "P" ? (pawnTable[p.color === "b" ? r : 7 - r]?.[c] ?? 0) * 0.1 : 0;
      if (p.color === "w") {
        score += val + positional;
      } else {
        score -= val + positional;
      }
    }
  }
  return score;
}

function minimax(
  board: Board,
  depth: number,
  alpha: number,
  beta: number,
  isMaximizing: boolean,
  castleRights: CastleRights,
  enPassantTarget: [number, number] | null,
): number {
  if (depth === 0) return evaluateBoard(board);

  const color: Color = isMaximizing ? "w" : "b";
  const moves = generateLegalMoves(board, color, castleRights, enPassantTarget);

  if (moves.length === 0) {
    if (isInCheck(board, color)) {
      return isMaximizing ? -1000 : 1000; // checkmate
    }
    return 0; // stalemate
  }

  if (isMaximizing) {
    let maxEval = -Infinity;
    for (const move of moves) {
      const newBoard = applyMove(board, move);
      const evaluation = minimax(newBoard, depth - 1, alpha, beta, false, castleRights, null);
      maxEval = Math.max(maxEval, evaluation);
      alpha = Math.max(alpha, evaluation);
      if (beta <= alpha) break;
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (const move of moves) {
      const newBoard = applyMove(board, move);
      const evaluation = minimax(newBoard, depth - 1, alpha, beta, true, castleRights, null);
      minEval = Math.min(minEval, evaluation);
      beta = Math.min(beta, evaluation);
      if (beta <= alpha) break;
    }
    return minEval;
  }
}

function findBestMove(
  board: Board,
  castleRights: CastleRights,
  enPassantTarget: [number, number] | null,
): Move | null {
  const moves = generateLegalMoves(board, "b", castleRights, enPassantTarget);
  if (moves.length === 0) return null;

  let bestMove = moves[0]!;
  let bestEval = Infinity;

  for (const move of moves) {
    const newBoard = applyMove(board, move);
    const evaluation = minimax(newBoard, 2, -Infinity, Infinity, true, castleRights, null);
    if (evaluation < bestEval) {
      bestEval = evaluation;
      bestMove = move;
    }
  }
  return bestMove;
}

/* ─── state ─── */

interface GameState {
  phase: Phase;
  board: Board;
  turn: Color;
  selected: [number, number] | null;
  legalMoves: Move[];
  castleRights: CastleRights;
  enPassantTarget: [number, number] | null;
  capturedByWhite: PieceType[];
  capturedByBlack: PieceType[];
  moveCount: number;
  result: "checkmate_win" | "checkmate_loss" | "stalemate" | null;
  inCheck: boolean;
  aiCapturedQueen: boolean;
}

type Action =
  | { type: "START" }
  | { type: "SELECT_SQUARE"; r: number; c: number }
  | { type: "AI_MOVE" }
  | { type: "GAME_OVER"; result: "checkmate_win" | "checkmate_loss" | "stalemate" };

function initState(): GameState {
  return {
    phase: "ready",
    board: initialBoard(),
    turn: "w",
    selected: null,
    legalMoves: [],
    castleRights: { wK: true, wQ: true, bK: true, bQ: true },
    enPassantTarget: null,
    capturedByWhite: [],
    capturedByBlack: [],
    moveCount: 0,
    result: null,
    inCheck: false,
    aiCapturedQueen: false,
  };
}

function updateCastleRights(rights: CastleRights, move: Move, piece: Piece): CastleRights {
  const updated = { ...rights };
  if (piece.type === "K") {
    if (piece.color === "w") { updated.wK = false; updated.wQ = false; }
    else { updated.bK = false; updated.bQ = false; }
  }
  if (piece.type === "R") {
    if (piece.color === "w" && move.fromR === 7 && move.fromC === 7) updated.wK = false;
    if (piece.color === "w" && move.fromR === 7 && move.fromC === 0) updated.wQ = false;
    if (piece.color === "b" && move.fromR === 0 && move.fromC === 7) updated.bK = false;
    if (piece.color === "b" && move.fromR === 0 && move.fromC === 0) updated.bQ = false;
  }
  // If a rook is captured
  if (move.toR === 7 && move.toC === 7) updated.wK = false;
  if (move.toR === 7 && move.toC === 0) updated.wQ = false;
  if (move.toR === 0 && move.toC === 7) updated.bK = false;
  if (move.toR === 0 && move.toC === 0) updated.bQ = false;
  return updated;
}

function applyMoveToState(state: GameState, move: Move): GameState {
  const piece = state.board[move.fromR]![move.fromC]!;
  const captured = state.board[move.toR]![move.toC];
  const newBoard = applyMove(state.board, move);
  const nextTurn: Color = state.turn === "w" ? "b" : "w";

  let capturedByWhite = [...state.capturedByWhite];
  let capturedByBlack = [...state.capturedByBlack];
  let aiCapturedQueen = state.aiCapturedQueen;

  const capturedPiece = move.enPassant
    ? { color: nextTurn, type: "P" as PieceType }
    : captured;

  if (capturedPiece) {
    if (state.turn === "w") {
      capturedByWhite.push(capturedPiece.type);
      if (capturedPiece.type === "Q") aiCapturedQueen = true;
    } else {
      capturedByBlack.push(capturedPiece.type);
    }
  }

  // En passant target
  let enPassantTarget: [number, number] | null = null;
  if (piece.type === "P" && Math.abs(move.toR - move.fromR) === 2) {
    enPassantTarget = [(move.fromR + move.toR) / 2, move.fromC];
  }

  const newCastleRights = updateCastleRights(state.castleRights, move, piece);
  const newMoveCount = state.turn === "w" ? state.moveCount + 1 : state.moveCount;

  // Check game-end conditions for the next player
  const nextLegal = generateLegalMoves(newBoard, nextTurn, newCastleRights, enPassantTarget);
  const nextInCheck = isInCheck(newBoard, nextTurn);

  if (nextLegal.length === 0) {
    if (nextInCheck) {
      // Checkmate
      const result = state.turn === "w" ? "checkmate_win" : "checkmate_loss";
      return {
        ...state,
        phase: "complete",
        board: newBoard,
        turn: nextTurn,
        selected: null,
        legalMoves: [],
        castleRights: newCastleRights,
        enPassantTarget,
        capturedByWhite,
        capturedByBlack,
        moveCount: newMoveCount,
        result: result as "checkmate_win" | "checkmate_loss",
        inCheck: nextInCheck,
        aiCapturedQueen,
      };
    }
    // Stalemate
    return {
      ...state,
      phase: "complete",
      board: newBoard,
      turn: nextTurn,
      selected: null,
      legalMoves: [],
      castleRights: newCastleRights,
      enPassantTarget,
      capturedByWhite,
      capturedByBlack,
      moveCount: newMoveCount,
      result: "stalemate",
      inCheck: false,
      aiCapturedQueen,
    };
  }

  return {
    ...state,
    board: newBoard,
    turn: nextTurn,
    selected: null,
    legalMoves: [],
    castleRights: newCastleRights,
    enPassantTarget,
    capturedByWhite,
    capturedByBlack,
    moveCount: newMoveCount,
    result: null,
    inCheck: nextInCheck,
    aiCapturedQueen,
  };
}

/* ─── reducer ─── */

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "START": {
      const board = initialBoard();
      return {
        ...initState(),
        phase: "playing",
        board,
        turn: "w",
        legalMoves: [],
        inCheck: false,
      };
    }

    case "SELECT_SQUARE": {
      if (state.phase !== "playing" || state.turn !== "w") return state;
      const { r, c } = action;
      const clickedPiece = state.board[r]![c];

      // If a piece is selected and this square is a legal move destination, execute the move
      if (state.selected) {
        const move = state.legalMoves.find((m) => m.toR === r && m.toC === c);
        if (move) {
          return applyMoveToState(state, move);
        }
      }

      // Select own piece
      if (clickedPiece && clickedPiece.color === "w") {
        const moves = generateLegalMoves(state.board, "w", state.castleRights, state.enPassantTarget)
          .filter((m) => m.fromR === r && m.fromC === c);
        return { ...state, selected: [r, c], legalMoves: moves };
      }

      // Deselect
      return { ...state, selected: null, legalMoves: [] };
    }

    case "AI_MOVE": {
      if (state.phase !== "playing" || state.turn !== "b") return state;
      const aiMove = findBestMove(state.board, state.castleRights, state.enPassantTarget);
      if (!aiMove) {
        // No legal moves for AI — should have been caught already
        return { ...state, phase: "complete", result: "stalemate" };
      }
      return applyMoveToState(state, aiMove);
    }

    case "GAME_OVER":
      return { ...state, phase: "complete", result: action.result };

    default:
      return state;
  }
}

/* ─── star calc ─── */

function calcStars(result: GameState["result"], aiCapturedQueen: boolean, moveCount: number): number {
  if (result === "checkmate_win" && aiCapturedQueen) return 3;
  if (result === "checkmate_win") return 2;
  if (moveCount >= 10) return 1;
  return 0;
}

function calcScore(result: GameState["result"]): number {
  if (result === "checkmate_win") return 100;
  if (result === "stalemate") return 50;
  return 20;
}

/* ─── component ─── */

export default function GameChess() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const aiTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [state, dispatch] = useReducer(reducer, undefined, initState);

  /* ─── AI turn trigger ─── */

  useEffect(() => {
    if (state.phase !== "playing" || state.turn !== "b") return;
    aiTimerRef.current = setTimeout(() => {
      dispatch({ type: "AI_MOVE" });
    }, 300);
    return () => {
      if (aiTimerRef.current) clearTimeout(aiTimerRef.current);
    };
  }, [state.phase, state.turn]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;
    const score = calcScore(state.result);
    const stars = calcStars(state.result, state.aiCapturedQueen, state.moveCount);

    if (stars >= 2) {
      hapticCelebration();
      setMood("cheering");
      setMessage("Checkmate! Brilliant!");
    } else if (stars === 1) {
      hapticSuccess();
      setMood("happy");
      setMessage("Good game!");
    } else {
      hapticError();
      setMood("thinking");
      setMessage("Keep practising!");
    }

    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-chess",
      score,
      maxScore: 100,
      elapsedMs: 0,
      interactions: state.moveCount,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.result, state.moveCount, state.aiCapturedQueen, setMessage, setMood]);

  /* ─── keyboard ─── */

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && state.phase === "playing") {
        dispatch({ type: "SELECT_SQUARE", r: -1, c: -1 }); // deselect
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.phase]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Your move, white!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── click handler ─── */

  const handleSquareClick = useCallback((r: number, c: number) => {
    if (state.phase !== "playing" || state.turn !== "w") return;
    hapticSelection();
    dispatch({ type: "SELECT_SQUARE", r, c });
  }, [state.phase, state.turn]);

  /* ─── derive display data ─── */

  const legalTargets = new Set(state.legalMoves.map((m) => `${m.toR}-${m.toC}`));
  const stars = calcStars(state.result, state.aiCapturedQueen, state.moveCount);
  const score = calcScore(state.result);

  const resultLabel = (() => {
    if (state.result === "checkmate_win") return "Checkmate! You win!";
    if (state.result === "checkmate_loss") return "Checkmate. You lost.";
    if (state.result === "stalemate") return "Stalemate. Draw.";
    return "";
  })();

  function renderCaptured(pieces: PieceType[], color: Color): string {
    return pieces
      .sort((a, b) => PIECE_VALUES[b] - PIECE_VALUES[a])
      .map((t) => UNICODE_PIECES[color][t])
      .join("");
  }

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Chess
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            Move {state.moveCount} · {state.turn === "w" ? "Your turn" : "AI thinking..."}
            {state.inCheck && state.phase === "playing" && " · Check!"}
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <MascotFriend id="pixel" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-indigo-700 dark:text-indigo-300">
              Play chess against the computer. You are white!
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
            {/* Captured by white */}
            <div className="mb-1 flex items-center justify-between px-1">
              <p className="text-xs text-indigo-500 dark:text-indigo-400">
                {state.capturedByWhite.length > 0
                  ? renderCaptured(state.capturedByWhite, "b")
                  : "\u00A0"}
              </p>
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300">Black (AI)</p>
            </div>

            {/* Board */}
            <div
              className="relative mx-auto grid rounded-2xl border border-indigo-200/40 bg-indigo-100/30 p-1 dark:border-indigo-800/40 dark:bg-indigo-950/30"
              style={{ gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`, maxWidth: "24rem" }}
              role="grid"
              aria-label="Chess board"
            >
              {Array.from({ length: 64 }, (_, idx) => {
                const r = Math.floor(idx / 8);
                const c = idx % 8;
                const piece = state.board[r]![c];
                const isLight = (r + c) % 2 === 0;
                const isSelected = state.selected !== null && state.selected[0] === r && state.selected[1] === c;
                const isLegalTarget = legalTargets.has(`${r}-${c}`);
                const isCheckSquare = state.inCheck && piece?.type === "K" && piece.color === state.turn;

                let bgClass: string;
                if (isSelected) {
                  bgClass = "bg-amber-400/80 dark:bg-amber-500/70";
                } else if (isCheckSquare) {
                  bgClass = "bg-red-400/60 dark:bg-red-500/50";
                } else if (isLight) {
                  bgClass = "bg-amber-100 dark:bg-amber-900/40";
                } else {
                  bgClass = "bg-amber-800/60 dark:bg-amber-700/50";
                }

                return (
                  <button
                    key={`${r}-${c}`}
                    type="button"
                    className={`relative aspect-square flex items-center justify-center text-2xl sm:text-3xl transition-colors ${bgClass} ${
                      state.turn === "w" ? "cursor-pointer hover:brightness-110" : "cursor-default"
                    } ${r === 0 && c === 0 ? "rounded-tl-xl" : ""} ${r === 0 && c === 7 ? "rounded-tr-xl" : ""} ${r === 7 && c === 0 ? "rounded-bl-xl" : ""} ${r === 7 && c === 7 ? "rounded-br-xl" : ""}`}
                    onClick={() => handleSquareClick(r, c)}
                    aria-label={`${String.fromCharCode(97 + c)}${8 - r}${piece ? ` ${piece.color === "w" ? "white" : "black"} ${piece.type}` : ""}`}
                    role="gridcell"
                  >
                    {piece && (
                      <span className={`select-none drop-shadow-sm ${piece.color === "w" ? "text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]" : "text-gray-900 [text-shadow:_0_1px_2px_rgb(255_255_255_/_30%)]"}`}>
                        {UNICODE_PIECES[piece.color][piece.type]}
                      </span>
                    )}
                    {isLegalTarget && !piece && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="h-3 w-3 rounded-full bg-indigo-500/40 dark:bg-indigo-400/40" />
                      </span>
                    )}
                    {isLegalTarget && piece && (
                      <span className="absolute inset-0 rounded-sm ring-2 ring-inset ring-indigo-500/60 dark:ring-indigo-400/50" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Captured by black */}
            <div className="mt-1 flex items-center justify-between px-1">
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300">White (You)</p>
              <p className="text-xs text-indigo-500 dark:text-indigo-400">
                {state.capturedByBlack.length > 0
                  ? renderCaptured(state.capturedByBlack, "w")
                  : "\u00A0"}
              </p>
            </div>
          </motion.section>
        )}

        {/* ─── COMPLETE ─── */}
        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-indigo-200/40 bg-white/60 p-6 text-center dark:border-indigo-800/40 dark:bg-black/30">
            <div className="mx-auto mb-4 w-fit rounded-full border border-indigo-300/40 bg-indigo-200/20 px-4 py-2 text-sm font-bold dark:border-indigo-700/40 dark:bg-indigo-800/20">
              {resultLabel}
            </div>
            <div className="flex justify-center">
              <MascotFriend id="pixel" mood={stars >= 2 ? "cheering" : "thinking"} size="lg" />
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
            <div className="mt-2 flex justify-center gap-4 text-lg">
              <span title="Captured by you">{renderCaptured(state.capturedByWhite, "b")}</span>
              <span className="text-indigo-400">|</span>
              <span title="Captured by AI">{renderCaptured(state.capturedByBlack, "w")}</span>
            </div>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <RotateCcw className="mr-2 inline h-4 w-4" /> Play Again
              </PhysicalButton>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
