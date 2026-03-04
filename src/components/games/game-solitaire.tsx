"use client";

import { useCallback, useEffect, useReducer, useRef, useState } from "react";
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

const SUITS = ["spades", "hearts", "diamonds", "clubs"] as const;
type Suit = (typeof SUITS)[number];

const SUIT_SYMBOLS: Record<Suit, string> = {
  spades: "\u2660",
  hearts: "\u2665",
  diamonds: "\u2666",
  clubs: "\u2663",
};

const RANK_LABELS: Record<number, string> = {
  1: "A",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "J",
  12: "Q",
  13: "K",
};

const MAX_SCORE = 1000;

/* ─── types ─── */

interface Card {
  suit: Suit;
  rank: number;
  faceUp: boolean;
}

interface Selection {
  zone: "tableau" | "waste" | "foundation";
  colIndex: number;
  cardIndex: number;
}

interface State {
  phase: Phase;
  tableau: Card[][];
  stock: Card[];
  waste: Card[];
  foundations: Card[][];
  selection: Selection | null;
  moves: number;
  score: number;
}

type Action =
  | { type: "START" }
  | { type: "SELECT"; selection: Selection }
  | { type: "DESELECT" }
  | { type: "DRAW_STOCK" }
  | { type: "AUTO_COMPLETE" };

/* ─── helpers ─── */

function isRed(suit: Suit): boolean {
  return suit === "hearts" || suit === "diamonds";
}

function buildDeck(): Card[] {
  const deck: Card[] = [];
  for (const suit of SUITS) {
    for (let rank = 1; rank <= 13; rank++) {
      deck.push({ suit, rank, faceUp: false });
    }
  }
  return deck;
}

function shuffle(deck: Card[]): Card[] {
  const a = [...deck];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function deal(): { tableau: Card[][]; stock: Card[] } {
  const deck = shuffle(buildDeck());
  const tableau: Card[][] = [];
  let idx = 0;
  for (let col = 0; col < 7; col++) {
    const pile: Card[] = [];
    for (let row = 0; row <= col; row++) {
      const card = { ...deck[idx]! };
      card.faceUp = row === col;
      pile.push(card);
      idx++;
    }
    tableau.push(pile);
  }
  const stock = deck.slice(idx).map((c) => ({ ...c, faceUp: false }));
  return { tableau, stock };
}

function canPlaceOnTableau(card: Card, target: Card[]): boolean {
  if (target.length === 0) return card.rank === 13;
  const top = target[target.length - 1]!;
  if (!top.faceUp) return false;
  return isRed(card.suit) !== isRed(top.suit) && card.rank === top.rank - 1;
}

function canPlaceOnFoundation(card: Card, foundation: Card[]): boolean {
  if (foundation.length === 0) return card.rank === 1;
  const top = foundation[foundation.length - 1]!;
  return card.suit === top.suit && card.rank === top.rank + 1;
}

function isGameWon(foundations: Card[][]): boolean {
  return foundations.every((f) => f.length === 13);
}

function foundationCardCount(foundations: Card[][]): number {
  return foundations.reduce((sum, f) => sum + f.length, 0);
}

function calcScore(foundations: Card[][], moves: number): number {
  const cardsPlaced = foundationCardCount(foundations);
  const baseScore = cardsPlaced * 20;
  const movePenalty = Math.max(0, moves - 52) * 2;
  return Math.min(MAX_SCORE, Math.max(0, baseScore - movePenalty));
}

function flipTopCard(pile: Card[]): Card[] {
  if (pile.length === 0) return pile;
  const last = pile[pile.length - 1]!;
  if (last.faceUp) return pile;
  const copy = [...pile];
  copy[copy.length - 1] = { ...last, faceUp: true };
  return copy;
}

function cloneTableau(tableau: Card[][]): Card[][] {
  return tableau.map((col) => col.map((c) => ({ ...c })));
}

function cloneFoundations(foundations: Card[][]): Card[][] {
  return foundations.map((f) => f.map((c) => ({ ...c })));
}

/* ─── move execution ─── */

function tryMoveToFoundation(
  state: State,
  sel: Selection,
): State | null {
  let card: Card | undefined;
  let newState: State;

  if (sel.zone === "waste") {
    if (state.waste.length === 0) return null;
    card = state.waste[state.waste.length - 1];
    if (!card) return null;
    for (let fi = 0; fi < 4; fi++) {
      if (canPlaceOnFoundation(card, state.foundations[fi]!)) {
        const newFoundations = cloneFoundations(state.foundations);
        newFoundations[fi] = [...newFoundations[fi]!, { ...card, faceUp: true }];
        const newWaste = state.waste.slice(0, -1);
        newState = {
          ...state,
          waste: newWaste,
          foundations: newFoundations,
          selection: null,
          moves: state.moves + 1,
          score: calcScore(newFoundations, state.moves + 1),
        };
        if (isGameWon(newFoundations)) newState.phase = "complete";
        return newState;
      }
    }
    return null;
  }

  if (sel.zone === "tableau") {
    const col = state.tableau[sel.colIndex]!;
    if (sel.cardIndex !== col.length - 1) return null;
    card = col[sel.cardIndex];
    if (!card || !card.faceUp) return null;
    for (let fi = 0; fi < 4; fi++) {
      if (canPlaceOnFoundation(card, state.foundations[fi]!)) {
        const newFoundations = cloneFoundations(state.foundations);
        newFoundations[fi] = [...newFoundations[fi]!, { ...card, faceUp: true }];
        const newTableau = cloneTableau(state.tableau);
        newTableau[sel.colIndex] = col.slice(0, -1);
        newTableau[sel.colIndex] = flipTopCard(newTableau[sel.colIndex]!);
        newState = {
          ...state,
          tableau: newTableau,
          foundations: newFoundations,
          selection: null,
          moves: state.moves + 1,
          score: calcScore(newFoundations, state.moves + 1),
        };
        if (isGameWon(newFoundations)) newState.phase = "complete";
        return newState;
      }
    }
    return null;
  }

  return null;
}

function tryMoveToTableau(
  state: State,
  sel: Selection,
  targetColIndex: number,
): State | null {
  const targetCol = state.tableau[targetColIndex]!;

  if (sel.zone === "waste") {
    const card = state.waste[state.waste.length - 1];
    if (!card) return null;
    if (!canPlaceOnTableau(card, targetCol)) return null;
    const newTableau = cloneTableau(state.tableau);
    newTableau[targetColIndex] = [...newTableau[targetColIndex]!, { ...card, faceUp: true }];
    return {
      ...state,
      waste: state.waste.slice(0, -1),
      tableau: newTableau,
      selection: null,
      moves: state.moves + 1,
      score: calcScore(state.foundations, state.moves + 1),
    };
  }

  if (sel.zone === "tableau") {
    if (sel.colIndex === targetColIndex) return null;
    const srcCol = state.tableau[sel.colIndex]!;
    const movingCards = srcCol.slice(sel.cardIndex);
    if (movingCards.length === 0) return null;
    const firstCard = movingCards[0]!;
    if (!firstCard.faceUp) return null;
    if (!canPlaceOnTableau(firstCard, targetCol)) return null;
    const newTableau = cloneTableau(state.tableau);
    newTableau[sel.colIndex] = srcCol.slice(0, sel.cardIndex);
    newTableau[sel.colIndex] = flipTopCard(newTableau[sel.colIndex]!);
    newTableau[targetColIndex] = [
      ...newTableau[targetColIndex]!,
      ...movingCards.map((c) => ({ ...c, faceUp: true })),
    ];
    return {
      ...state,
      tableau: newTableau,
      selection: null,
      moves: state.moves + 1,
      score: calcScore(state.foundations, state.moves + 1),
    };
  }

  if (sel.zone === "foundation") {
    const foundation = state.foundations[sel.colIndex]!;
    const card = foundation[foundation.length - 1];
    if (!card) return null;
    if (!canPlaceOnTableau(card, targetCol)) return null;
    const newFoundations = cloneFoundations(state.foundations);
    newFoundations[sel.colIndex] = foundation.slice(0, -1);
    const newTableau = cloneTableau(state.tableau);
    newTableau[targetColIndex] = [...newTableau[targetColIndex]!, { ...card, faceUp: true }];
    return {
      ...state,
      foundations: newFoundations,
      tableau: newTableau,
      selection: null,
      moves: state.moves + 1,
      score: calcScore(newFoundations, state.moves + 1),
    };
  }

  return null;
}

/* ─── reducer ─── */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      const { tableau, stock } = deal();
      return {
        phase: "playing",
        tableau,
        stock,
        waste: [],
        foundations: [[], [], [], []],
        selection: null,
        moves: 0,
        score: 0,
      };
    }

    case "DRAW_STOCK": {
      if (state.phase !== "playing") return state;
      if (state.stock.length === 0) {
        if (state.waste.length === 0) return state;
        return {
          ...state,
          stock: [...state.waste].reverse().map((c) => ({ ...c, faceUp: false })),
          waste: [],
          selection: null,
          moves: state.moves + 1,
        };
      }
      const card = { ...state.stock[state.stock.length - 1]!, faceUp: true };
      return {
        ...state,
        stock: state.stock.slice(0, -1),
        waste: [...state.waste, card],
        selection: null,
        moves: state.moves + 1,
      };
    }

    case "SELECT": {
      if (state.phase !== "playing") return state;
      const sel = action.selection;

      if (state.selection === null) {
        if (sel.zone === "waste") {
          if (state.waste.length === 0) return state;
          const result = tryMoveToFoundation(state, sel);
          if (result) return result;
          return { ...state, selection: sel };
        }

        if (sel.zone === "foundation") {
          return { ...state, selection: sel };
        }

        if (sel.zone === "tableau") {
          const col = state.tableau[sel.colIndex]!;
          const card = col[sel.cardIndex];
          if (!card || !card.faceUp) return state;
          if (sel.cardIndex === col.length - 1) {
            const result = tryMoveToFoundation(state, sel);
            if (result) return result;
          }
          return { ...state, selection: sel };
        }

        return state;
      }

      if (
        sel.zone === state.selection.zone &&
        sel.colIndex === state.selection.colIndex &&
        sel.cardIndex === state.selection.cardIndex
      ) {
        return { ...state, selection: null };
      }

      if (sel.zone === "foundation") {
        let card: Card | undefined;
        if (state.selection.zone === "waste") {
          card = state.waste[state.waste.length - 1];
        } else if (state.selection.zone === "tableau") {
          const srcCol = state.tableau[state.selection.colIndex]!;
          if (state.selection.cardIndex !== srcCol.length - 1) {
            return { ...state, selection: null };
          }
          card = srcCol[state.selection.cardIndex];
        }
        if (!card || !card.faceUp) return { ...state, selection: null };
        if (canPlaceOnFoundation(card, state.foundations[sel.colIndex]!)) {
          const newFoundations = cloneFoundations(state.foundations);
          newFoundations[sel.colIndex] = [
            ...newFoundations[sel.colIndex]!,
            { ...card, faceUp: true },
          ];
          let newTableau = state.tableau;
          let newWaste = state.waste;
          if (state.selection.zone === "tableau") {
            newTableau = cloneTableau(state.tableau);
            newTableau[state.selection.colIndex] = state.tableau[state.selection.colIndex]!.slice(0, -1);
            newTableau[state.selection.colIndex] = flipTopCard(newTableau[state.selection.colIndex]!);
          } else {
            newWaste = state.waste.slice(0, -1);
          }
          const newState: State = {
            ...state,
            tableau: newTableau,
            waste: newWaste,
            foundations: newFoundations,
            selection: null,
            moves: state.moves + 1,
            score: calcScore(newFoundations, state.moves + 1),
          };
          if (isGameWon(newFoundations)) newState.phase = "complete";
          return newState;
        }
        return { ...state, selection: null };
      }

      if (sel.zone === "tableau") {
        const result = tryMoveToTableau(state, state.selection, sel.colIndex);
        if (result) return result;

        const col = state.tableau[sel.colIndex]!;
        const card = col[sel.cardIndex];
        if (card && card.faceUp) {
          return { ...state, selection: sel };
        }
        return { ...state, selection: null };
      }

      return { ...state, selection: null };
    }

    case "DESELECT":
      return { ...state, selection: null };

    case "AUTO_COMPLETE":
      return state;

    default:
      return state;
  }
}

/* ─── star calc ─── */

function calcStars(foundations: Card[][], moves: number): number {
  const won = isGameWon(foundations);
  if (won && moves < 50) return 3;
  if (won) return 2;
  if (foundationCardCount(foundations) >= 20) return 1;
  return 0;
}

/* ─── card rendering ─── */

function cardLabel(card: Card): string {
  return `${RANK_LABELS[card.rank] ?? "?"}${SUIT_SYMBOLS[card.suit]}`;
}

function cardColorClass(card: Card): string {
  if (isRed(card.suit)) {
    return "text-red-600 dark:text-red-400";
  }
  return "text-slate-900 dark:text-slate-100";
}

/* ─── component ─── */

export default function GameSolitaire() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    tableau: [],
    stock: [],
    waste: [],
    foundations: [[], [], [], []],
    selection: null,
    moves: 0,
    score: 0,
  });

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;
    const stars = calcStars(state.foundations, state.moves);
    if (stars >= 2) {
      hapticCelebration();
      setMood("cheering");
      setMessage("You won Solitaire!");
    } else if (stars === 1) {
      hapticSuccess();
      setMood("happy");
      setMessage("Great progress!");
    } else {
      hapticError();
      setMood("thinking");
      setMessage("Keep trying!");
    }
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-solitaire",
      score: state.score,
      maxScore: MAX_SCORE,
      elapsedMs: 0,
      interactions: state.moves,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.score, state.moves, state.foundations, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Build the foundations!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── selection helpers ─── */

  function isSelected(zone: string, colIndex: number, cardIndex: number): boolean {
    if (!state.selection) return false;
    if (state.selection.zone !== zone) return false;
    if (state.selection.colIndex !== colIndex) return false;
    if (zone === "tableau") {
      return cardIndex >= state.selection.cardIndex;
    }
    return cardIndex === state.selection.cardIndex;
  }

  /* ─── card component ─── */

  function renderCard(
    card: Card,
    zone: "tableau" | "waste" | "foundation",
    colIndex: number,
    cardIndex: number,
    stacked: boolean,
  ): React.ReactNode {
    const selected = isSelected(zone, colIndex, cardIndex);
    if (!card.faceUp) {
      return (
        <div
          key={`${zone}-${colIndex}-${cardIndex}`}
          className={`flex h-10 w-8 items-center justify-center rounded-md border border-indigo-300/50 bg-gradient-to-br from-indigo-500 to-indigo-700 text-xs text-white shadow-sm dark:border-indigo-600/50 dark:from-indigo-600 dark:to-indigo-900 sm:h-12 sm:w-10 ${stacked ? "-mt-7 sm:-mt-8" : ""}`}
          aria-label="Face-down card"
        >
          <span className="opacity-60">?</span>
        </div>
      );
    }
    return (
      <button
        key={`${zone}-${colIndex}-${cardIndex}`}
        type="button"
        onClick={() => {
          dispatch({
            type: "SELECT",
            selection: { zone, colIndex, cardIndex },
          });
          hapticSelection();
        }}
        className={`flex h-10 w-8 flex-col items-start justify-start rounded-md border bg-white px-0.5 pt-0.5 shadow-sm transition-all dark:bg-slate-800 sm:h-12 sm:w-10 sm:px-1 sm:pt-1 ${
          selected
            ? "border-yellow-400 ring-2 ring-yellow-400 dark:border-yellow-500 dark:ring-yellow-500"
            : "border-slate-300/60 dark:border-slate-600/60"
        } ${stacked ? "-mt-7 sm:-mt-8" : ""} ${cardColorClass(card)}`}
        aria-label={`${RANK_LABELS[card.rank]} of ${card.suit}`}
      >
        <span className="text-[10px] font-bold leading-none sm:text-xs">
          {cardLabel(card)}
        </span>
      </button>
    );
  }

  /* ─── empty slot ─── */

  function renderEmptySlot(
    onClick: () => void,
    label: string,
    content?: string,
  ): React.ReactNode {
    return (
      <button
        type="button"
        onClick={onClick}
        className="flex h-10 w-8 items-center justify-center rounded-md border border-dashed border-slate-300/60 bg-slate-100/30 text-xs text-slate-400 dark:border-slate-600/60 dark:bg-slate-800/30 dark:text-slate-500 sm:h-12 sm:w-10"
        aria-label={label}
      >
        {content ?? ""}
      </button>
    );
  }

  const stars = calcStars(state.foundations, state.moves);

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-2">
      {/* ─── HEADER ─── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Solitaire
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            Moves {state.moves} · Score {state.score} · Foundation{" "}
            {foundationCardCount(state.foundations)}/52
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
            <MascotFriend id="luna" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-indigo-700 dark:text-indigo-300">
              Move all cards to the four foundation piles!
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
            {/* Top row: stock + waste + foundations */}
            <div className="mb-3 flex items-start justify-between gap-1">
              {/* Stock + Waste */}
              <div className="flex gap-1">
                {/* Stock */}
                {state.stock.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => {
                      dispatch({ type: "DRAW_STOCK" });
                      hapticSelection();
                    }}
                    className="flex h-10 w-8 items-center justify-center rounded-md border border-indigo-300/50 bg-gradient-to-br from-indigo-500 to-indigo-700 text-xs font-bold text-white shadow-sm dark:border-indigo-600/50 dark:from-indigo-600 dark:to-indigo-900 sm:h-12 sm:w-10"
                    aria-label={`Stock pile, ${state.stock.length} cards`}
                  >
                    {state.stock.length}
                  </button>
                ) : (
                  renderEmptySlot(
                    () => {
                      dispatch({ type: "DRAW_STOCK" });
                      hapticSelection();
                    },
                    "Recycle waste to stock",
                    "\u21BB",
                  )
                )}

                {/* Waste */}
                {state.waste.length > 0 ? (
                  renderCard(
                    state.waste[state.waste.length - 1]!,
                    "waste",
                    0,
                    state.waste.length - 1,
                    false,
                  )
                ) : (
                  renderEmptySlot(() => {}, "Empty waste pile")
                )}
              </div>

              {/* Foundations */}
              <div className="flex gap-1">
                {state.foundations.map((foundation, fi) => (
                  <div key={fi}>
                    {foundation.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => {
                          dispatch({
                            type: "SELECT",
                            selection: {
                              zone: "foundation",
                              colIndex: fi,
                              cardIndex: foundation.length - 1,
                            },
                          });
                          hapticSelection();
                        }}
                        className={`flex h-10 w-8 flex-col items-start justify-start rounded-md border bg-white px-0.5 pt-0.5 shadow-sm dark:bg-slate-800 sm:h-12 sm:w-10 sm:px-1 sm:pt-1 ${
                          isSelected("foundation", fi, foundation.length - 1)
                            ? "border-yellow-400 ring-2 ring-yellow-400 dark:border-yellow-500 dark:ring-yellow-500"
                            : "border-slate-300/60 dark:border-slate-600/60"
                        } ${cardColorClass(foundation[foundation.length - 1]!)}`}
                        aria-label={`Foundation ${fi + 1}: ${cardLabel(foundation[foundation.length - 1]!)}`}
                      >
                        <span className="text-[10px] font-bold leading-none sm:text-xs">
                          {cardLabel(foundation[foundation.length - 1]!)}
                        </span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          if (state.selection) {
                            dispatch({
                              type: "SELECT",
                              selection: {
                                zone: "foundation",
                                colIndex: fi,
                                cardIndex: 0,
                              },
                            });
                            hapticSelection();
                          }
                        }}
                        className="flex h-10 w-8 items-center justify-center rounded-md border border-dashed border-emerald-300/60 bg-emerald-50/30 text-xs text-emerald-400 dark:border-emerald-600/60 dark:bg-emerald-900/20 dark:text-emerald-500 sm:h-12 sm:w-10"
                        aria-label={`Empty foundation ${fi + 1}`}
                      >
                        {SUIT_SYMBOLS[SUITS[fi]!]}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tableau */}
            <div
              className="grid gap-1"
              style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}
              role="grid"
              aria-label="Tableau"
            >
              {state.tableau.map((col, ci) => (
                <div key={ci} className="flex flex-col items-center">
                  {col.length === 0 ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (state.selection) {
                          dispatch({
                            type: "SELECT",
                            selection: {
                              zone: "tableau",
                              colIndex: ci,
                              cardIndex: 0,
                            },
                          });
                          hapticSelection();
                        }
                      }}
                      className="flex h-10 w-8 items-center justify-center rounded-md border border-dashed border-slate-300/40 bg-slate-100/20 dark:border-slate-600/40 dark:bg-slate-800/20 sm:h-12 sm:w-10"
                      aria-label={`Empty tableau column ${ci + 1}`}
                    >
                      <span className="text-[10px] text-slate-300 dark:text-slate-600">
                        K
                      </span>
                    </button>
                  ) : (
                    col.map((card, cardIdx) =>
                      renderCard(
                        card,
                        "tableau",
                        ci,
                        cardIdx,
                        cardIdx > 0,
                      ),
                    )
                  )}
                </div>
              ))}
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
              {isGameWon(state.foundations)
                ? stars >= 3
                  ? "Perfect Game!"
                  : "You Won!"
                : "Game Over"}
            </div>
            <div className="flex justify-center">
              <MascotFriend
                id="luna"
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
                  {"\u2B50"}
                </motion.div>
              ))}
            </div>
            <p className="mt-3 text-sm text-indigo-800 dark:text-indigo-200">
              Score {state.score} · Moves {state.moves} · Foundation{" "}
              {foundationCardCount(state.foundations)}/52
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
