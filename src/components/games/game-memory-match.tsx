"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Brain } from "lucide-react";
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
const EMOJIS = ["🐶", "🐱", "🐸", "🦊", "🐻", "🐼", "🐯", "🦁", "🐮", "🐷", "🐵", "🐔", "🦄", "🐙", "🐢", "🦋", "🐝", "🐞"];

type Phase = "ready" | "playing" | "won";
type CardState = "hidden" | "revealed" | "matched";

interface Card { id: number; emoji: string; state: CardState }

interface State {
  phase: Phase;
  sessionId: string;
  cards: Card[];
  revealed: number[];
  moves: number;
  matches: number;
  pairCount: number;
  startTime: number;
  interactions: number;
  lockBoard: boolean;
}

function buildCards(pairCount: number): Card[] {
  const selected = [...EMOJIS].sort(() => Math.random() - 0.5).slice(0, pairCount);
  const pairs = [...selected, ...selected];
  return pairs.sort(() => Math.random() - 0.5).map((emoji, i) => ({ id: i, emoji, state: "hidden" as CardState }));
}

const PAIR_COUNT = 8;

const init = (): State => ({
  phase: "ready",
  sessionId: createLegacySessionId(),
  cards: buildCards(PAIR_COUNT),
  revealed: [],
  moves: 0,
  matches: 0,
  pairCount: PAIR_COUNT,
  startTime: 0,
  interactions: 0,
  lockBoard: false,
});

type Action =
  | { type: "START" }
  | { type: "FLIP"; id: number }
  | { type: "CHECK" }
  | { type: "HIDE_PAIR" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), cards: buildCards(PAIR_COUNT), startTime: Date.now() };
    case "FLIP": {
      if (s.phase !== "playing" || s.lockBoard) return s;
      if (s.revealed.length >= 2) return s;
      const card = s.cards[a.id];
      if (!card || card.state !== "hidden") return s;
      const cards = s.cards.map((c, i) => (i === a.id ? { ...c, state: "revealed" as CardState } : c));
      const revealed = [...s.revealed, a.id];
      return { ...s, cards, revealed, interactions: s.interactions + 1 };
    }
    case "CHECK": {
      if (s.revealed.length !== 2) return s;
      const [a, b] = s.revealed;
      const cardA = s.cards[a!]!;
      const cardB = s.cards[b!]!;
      if (cardA.emoji === cardB.emoji) {
        const cards = s.cards.map((c, i) => (i === a || i === b ? { ...c, state: "matched" as CardState } : c));
        const matches = s.matches + 1;
        const won = matches >= s.pairCount;
        return { ...s, cards, revealed: [], moves: s.moves + 1, matches, phase: won ? "won" : "playing" };
      }
      return { ...s, moves: s.moves + 1, lockBoard: true };
    }
    case "HIDE_PAIR": {
      const [a, b] = s.revealed;
      const cards = s.cards.map((c, i) => (i === a || i === b ? { ...c, state: "hidden" as CardState } : c));
      return { ...s, cards, revealed: [], lockBoard: false };
    }
    default:
      return s;
  }
}

export default function GameMemoryMatch({ width = 400, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const isOver = s.phase === "won";

  const stars = useMemo(() => {
    if (!isOver) return 0;
    if (s.moves <= PAIR_COUNT + 2) return 3;
    if (s.moves <= PAIR_COUNT * 2) return 2;
    return 1;
  }, [isOver, s.moves]);

  // check after 2 revealed
  useEffect(() => {
    if (s.revealed.length === 2) {
      dispatch({ type: "CHECK" });
    }
  }, [s.revealed.length]);

  // hide unmatched after delay
  useEffect(() => {
    if (!s.lockBoard) return;
    const t = setTimeout(() => { dispatch({ type: "HIDE_PAIR" }); hapticError(); }, 700);
    return () => clearTimeout(t);
  }, [s.lockBoard]);

  // complete
  useEffect(() => {
    if (!isOver) return;
    setMood("cheering");
    hapticCelebration();
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-memory-match", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: Math.max(0, 100 - (s.moves - PAIR_COUNT) * 5), maxScore: 100, source: "component", occurredAt: new Date().toISOString(),
    });
  }, [isOver]);

  const cols = 4;

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="echo" mood={isOver ? "happy" : "idle"} size="sm" />
        <div className="flex items-center gap-1 rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-800">
          <Brain className="h-4 w-4" /> {s.matches}/{PAIR_COUNT} · {s.moves} moves
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <p className="text-3xl font-bold text-slate-800">Memory Match</p>
          <p className="text-sm text-slate-600">Flip cards to find matching pairs!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
        </div>
      )}

      {s.phase !== "ready" && (
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {s.cards.map((card) => (
            <motion.button
              key={card.id}
              className={`flex h-16 w-16 items-center justify-center rounded-xl text-2xl shadow-md transition-colors ${
                card.state === "matched"
                  ? "bg-emerald-200 border-2 border-emerald-400"
                  : card.state === "revealed"
                    ? "bg-white border-2 border-violet-400"
                    : "bg-violet-500 hover:bg-violet-400 border-2 border-violet-600"
              }`}
              onClick={() => {
                if (card.state === "hidden") { dispatch({ type: "FLIP", id: card.id }); hapticSelection(); }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {card.state !== "hidden" ? card.emoji : "?"}
            </motion.button>
          ))}
        </div>
      )}

      {isOver && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2 pt-2">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">All Matched!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <p className="text-lg font-bold text-slate-600">{s.moves} moves</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
