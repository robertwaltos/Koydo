/* -------------------------------------------------------------------------- */
/*  Memory Flip Engine — Card matching (pairs/triples)                       */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type MemoryCard = {
  id: string;
  emoji: string;
  label: string;
  matchGroup?: string;
};

export type MemoryFlipConfig = {
  title: string;
  cards: MemoryCard[];
  pairsMode?: 2 | 3;
  infiniteMode?: boolean;
};

type BoardCard = { card: MemoryCard; key: number; flipped: boolean; matched: boolean };

type Props = {
  config: MemoryFlipConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { pairs: number; timeLimit: number; showTime: number }> = {
  easy:   { pairs: 6,  timeLimit: 90_000,  showTime: 1200 },
  medium: { pairs: 10, timeLimit: 120_000, showTime: 900 },
  hard:   { pairs: 15, timeLimit: 150_000, showTime: 700 },
};

let _mk = 0;

export function MemoryFlipEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const pairsMode = config.pairsMode ?? 2;
  const usedCards = shuffle(config.cards).slice(0, settings.pairs);

  const initialBoard = useMemo(() => {
    const deck: BoardCard[] = [];
    for (const card of usedCards) {
      for (let i = 0; i < pairsMode; i++) {
        deck.push({ card, key: ++_mk, flipped: false, matched: false });
      }
    }
    return shuffle(deck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.cards.length, settings.pairs, pairsMode]);

  const [board, setBoard] = useState<BoardCard[]>(initialBoard);
  const [flippedKeys, setFlippedKeys] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());
  const lockRef = useRef(false);

  // Timer
  useEffect(() => {
    if (phase !== "playing") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) { setPhase("complete"); return 0; }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [phase]);

  // Check win
  useEffect(() => {
    if (board.length > 0 && board.every((c) => c.matched)) {
      if (config.infiniteMode) {
        // Next level
        setLevel((l) => l + 1);
        const newCards = shuffle(config.cards).slice(0, Math.min(settings.pairs + level, config.cards.length));
        const newDeck: BoardCard[] = [];
        for (const card of newCards) {
          for (let i = 0; i < pairsMode; i++) {
            newDeck.push({ card, key: ++_mk, flipped: false, matched: false });
          }
        }
        setBoard(shuffle(newDeck));
        setFlippedKeys([]);
      } else {
        setPhase("complete");
      }
    }
  }, [board, config, settings.pairs, pairsMode, level]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const matched = board.filter((c) => c.matched).length / pairsMode;
      const total = board.length / pairsMode;
      onComplete({
        score,
        maxScore: total * 100,
        stars: calculateStars(matched, total),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, board, pairsMode, level, difficulty, onComplete]);

  const handleFlip = useCallback(
    (key: number) => {
      if (phase !== "playing" || lockRef.current) return;
      const card = board.find((c) => c.key === key);
      if (!card || card.flipped || card.matched) return;

      setBoard((prev) =>
        prev.map((c) => (c.key === key ? { ...c, flipped: true } : c)),
      );
      setFlippedKeys((prev) => {
        const next = [...prev, key];
        if (next.length === pairsMode) {
          lockRef.current = true;
          setMoves((m) => m + 1);
          // Check match
          setTimeout(() => {
            setBoard((b) => {
              const flippedCards = next.map((k) => b.find((c) => c.key === k)!);
              const groupId = flippedCards[0]!.card.matchGroup ?? flippedCards[0]!.card.id;
              const allMatch = flippedCards.every(
                (fc) => (fc.card.matchGroup ?? fc.card.id) === groupId,
              );
              if (allMatch) {
                setScore((s) => s + 100 * (1 + streak * 0.2));
                setStreak((st) => st + 1);
                return b.map((c) =>
                  next.includes(c.key) ? { ...c, matched: true } : c,
                );
              } else {
                setStreak(0);
                return b.map((c) =>
                  next.includes(c.key) ? { ...c, flipped: false } : c,
                );
              }
            });
            setFlippedKeys([]);
            lockRef.current = false;
          }, settings.showTime);
          return next;
        }
        return next;
      });
    },
    [phase, board, pairsMode, streak, settings.showTime],
  );

  const cols = board.length <= 12 ? 4 : board.length <= 20 ? 5 : 6;
  const pct = timeLeft / settings.timeLimit;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Moves: {moves}</span>
        <span>Score: {Math.round(score)}</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      {streak > 1 && (
        <motion.div
          key={streak}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          className="text-sm font-black text-amber-500"
        >
          🔥 {streak} streak!
        </motion.div>
      )}

      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {board.map((bc) => (
          <motion.button
            key={bc.key}
            type="button"
            onClick={() => handleFlip(bc.key)}
            animate={{
              rotateY: bc.flipped || bc.matched ? 180 : 0,
              scale: bc.matched ? 0.9 : 1,
              opacity: bc.matched ? 0.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl shadow-md transition-colors sm:h-16 sm:w-16 ${
              bc.matched
                ? "bg-emerald-100"
                : bc.flipped
                  ? "bg-white"
                  : "bg-gradient-to-br from-sky-400 to-indigo-500 hover:from-sky-300"
            }`}
            disabled={bc.matched}
          >
            {bc.flipped || bc.matched ? (
              <span style={{ transform: "rotateY(180deg)" }}>{bc.card.emoji}</span>
            ) : (
              <span className="text-white text-lg">?</span>
            )}
          </motion.button>
        ))}
      </div>

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">
            {"⭐".repeat(calculateStars(board.filter((c) => c.matched).length / pairsMode, board.length / pairsMode))}
          </p>
          <p className="mt-1 font-bold">{Math.round(score)} pts · {moves} moves</p>
        </motion.div>
      )}
    </div>
  );
}
