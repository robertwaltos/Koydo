"use client";

import { useEffect, useMemo, useReducer, useCallback } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Layers } from "lucide-react";
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
const SUITS = ["♠", "♥", "♦", "♣"] as const;
const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] as const;

interface Card {
  suit: string;
  rank: string;
  faceUp: boolean;
  id: number;
}

type Phase = "ready" | "playing" | "won";

interface Column {
  cards: Card[];
}

interface State {
  phase: Phase;
  sessionId: string;
  columns: Column[];
  stock: Card[];
  complete: number; // count of completed suit runs removed
  moves: number;
  startTime: number;
  interactions: number;
  selected: { col: number; cardIdx: number } | null;
}

function buildDeck(): Card[] {
  const deck: Card[] = [];
  let id = 0;
  /* 2 decks of single suit for 1-suit spider */
  for (let d = 0; d < 8; d++) {
    for (const rank of RANKS) {
      deck.push({ suit: "♠", rank, faceUp: false, id: id++ });
    }
  }
  /* shuffle */
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j]!, deck[i]!];
  }
  return deck;
}

function rankValue(r: string): number {
  if (r === "A") return 1;
  if (r === "J") return 11;
  if (r === "Q") return 12;
  if (r === "K") return 13;
  return parseInt(r);
}

function isDescending(cards: Card[]): boolean {
  for (let i = 1; i < cards.length; i++) {
    if (rankValue(cards[i - 1]!.rank) !== rankValue(cards[i]!.rank) + 1) return false;
  }
  return true;
}

function init(): State {
  const deck = buildDeck();
  const columns: Column[] = Array.from({ length: 10 }, () => ({ cards: [] }));
  let idx = 0;
  /* deal: first 4 cols get 6, rest get 5 */
  for (let c = 0; c < 10; c++) {
    const count = c < 4 ? 6 : 5;
    for (let i = 0; i < count; i++) {
      const card = deck[idx++]!;
      card.faceUp = i === count - 1;
      columns[c]!.cards.push(card);
    }
  }
  const stock = deck.slice(idx);
  return { phase: "ready", sessionId: createLegacySessionId(), columns, stock, complete: 0, moves: 0, startTime: 0, interactions: 0, selected: null };
}

type Action =
  | { type: "START" }
  | { type: "SELECT"; col: number; cardIdx: number }
  | { type: "DEAL" };

function removeCompleteSuits(columns: Column[]): { columns: Column[]; removed: number } {
  let removed = 0;
  const newCols = columns.map((col) => {
    const cards = [...col.cards];
    if (cards.length >= 13) {
      const last13 = cards.slice(-13);
      if (last13.every((c) => c.faceUp) && isDescending(last13) && rankValue(last13[0]!.rank) === 13) {
        const remaining = cards.slice(0, -13);
        if (remaining.length > 0 && !remaining[remaining.length - 1]!.faceUp) {
          remaining[remaining.length - 1]!.faceUp = true;
        }
        removed++;
        return { cards: remaining };
      }
    }
    return { cards };
  });
  return { columns: newCols, removed };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const ns = init();
      return { ...ns, phase: "playing", sessionId: createLegacySessionId(), startTime: Date.now() };
    }
    case "SELECT": {
      if (s.phase !== "playing") return s;
      if (s.selected) {
        /* try move */
        const { col: fromCol, cardIdx } = s.selected;
        const toCol = a.col;
        if (fromCol === toCol) return { ...s, selected: null };
        const movingCards = s.columns[fromCol]!.cards.slice(cardIdx);
        if (!movingCards.every((c) => c.faceUp) || !isDescending(movingCards)) return { ...s, selected: null };
        const targetCol = s.columns[toCol]!;
        const topTarget = targetCol.cards.length > 0 ? targetCol.cards[targetCol.cards.length - 1] : null;
        if (topTarget && rankValue(topTarget.rank) !== rankValue(movingCards[0]!.rank) + 1) return { ...s, selected: null };
        const newCols = s.columns.map((col, i) => {
          if (i === fromCol) {
            const remaining = col.cards.slice(0, cardIdx);
            if (remaining.length > 0 && !remaining[remaining.length - 1]!.faceUp) {
              remaining[remaining.length - 1]!.faceUp = true;
            }
            return { cards: remaining };
          }
          if (i === toCol) return { cards: [...col.cards, ...movingCards] };
          return col;
        });
        const { columns: afterRemove, removed } = removeCompleteSuits(newCols);
        const complete = s.complete + removed;
        const won = complete >= 8;
        return { ...s, columns: afterRemove, selected: null, moves: s.moves + 1, interactions: s.interactions + 1, complete, phase: won ? "won" : "playing" };
      }
      /* first selection */
      const col = s.columns[a.col]!;
      const card = col.cards[a.cardIdx];
      if (!card || !card.faceUp) return s;
      const movable = col.cards.slice(a.cardIdx);
      if (!isDescending(movable)) return s;
      return { ...s, selected: { col: a.col, cardIdx: a.cardIdx } };
    }
    case "DEAL": {
      if (s.phase !== "playing" || s.stock.length === 0) return s;
      if (s.columns.some((c) => c.cards.length === 0)) return s; // can't deal with empty columns
      const newStock = [...s.stock];
      const newCols = s.columns.map((col) => {
        const card = newStock.pop()!;
        card.faceUp = true;
        return { cards: [...col.cards, card] };
      });
      return { ...s, columns: newCols, stock: newStock, interactions: s.interactions + 1 };
    }
    default:
      return s;
  }
}

export default function GameSpiderSolitaire({ width = 480, height = 600 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();

  const stars = useMemo(() => {
    if (s.phase !== "won") return 0;
    if (s.moves <= 80) return 3;
    if (s.moves <= 120) return 2;
    return 1;
  }, [s.phase, s.moves]);

  useEffect(() => {
    if (s.phase !== "won") return;
    setMood("cheering");
    hapticCelebration();
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-spider-solitaire", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: Math.max(0, 200 - s.moves), maxScore: 200,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [s.phase]);

  const colWidth = Math.min(42, (width - 24) / 10);
  const cardH = 22;

  return (
    <div className="flex flex-col items-center gap-2 py-2" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="pixel" mood={s.phase === "won" ? "happy" : "idle"} size="sm" />
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">{s.complete}/8 suits</div>
          <div className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-bold text-slate-700">Moves: {s.moves}</div>
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <Layers className="h-12 w-12 text-emerald-600" />
          <p className="text-3xl font-bold text-slate-800">Spider Solitaire</p>
          <p className="text-sm text-slate-600">Build descending suit runs to clear all 8 suits!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Deal Cards</PhysicalButton>
        </div>
      )}

      {s.phase !== "ready" && (
        <>
          <div className="flex gap-0.5" style={{ minHeight: 250 }}>
            {s.columns.map((col, ci) => (
              <div key={ci} className="relative" style={{ width: colWidth }}>
                {col.cards.length === 0 && (
                  <div
                    className="rounded border border-dashed border-slate-300"
                    style={{ width: colWidth, height: 32 }}
                    onClick={() => dispatch({ type: "SELECT", col: ci, cardIdx: 0 })}
                  />
                )}
                {col.cards.map((card, idx) => (
                  <div
                    key={card.id}
                    className={`absolute cursor-pointer select-none rounded border text-center text-[10px] font-bold leading-tight transition-colors
                      ${card.faceUp
                        ? s.selected?.col === ci && idx >= s.selected.cardIdx
                          ? "border-blue-400 bg-blue-100 text-slate-900"
                          : "border-slate-300 bg-white text-slate-800"
                        : "border-slate-400 bg-gradient-to-br from-blue-700 to-blue-900 text-transparent"}`}
                    style={{ top: idx * cardH, width: colWidth, height: 32, zIndex: idx }}
                    onClick={() => dispatch({ type: "SELECT", col: ci, cardIdx: idx })}
                  >
                    {card.faceUp ? `${card.rank}${card.suit}` : ""}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {s.stock.length > 0 && (
              <PhysicalButton variant="secondary" onClick={() => { dispatch({ type: "DEAL" }); hapticSelection(); }}>
                Deal ({Math.floor(s.stock.length / 10)})
              </PhysicalButton>
            )}
          </div>
        </>
      )}

      {s.phase === "won" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">All Suits Complete!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> New Game</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
