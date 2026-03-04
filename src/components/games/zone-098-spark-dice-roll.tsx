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
type Phase = "ready" | "playing" | "complete";
const NUM_DICE = 5;
const MAX_ROLLS = 3;
const ROUNDS = 6;

const FACE_DOTS: number[][] = [
  [],
  [5],
  [1,9],
  [1,5,9],
  [1,3,7,9],
  [1,3,5,7,9],
  [1,2,4,6,8,9],
];

function rollDice(count: number): number[] {
  return Array.from({ length: count }, () => Math.ceil(Math.random() * 6));
}

function scoreCombos(dice: number[]): { name: string; points: number }[] {
  const counts: Record<number, number> = {};
  dice.forEach((d) => { counts[d] = (counts[d] ?? 0) + 1; });
  const vals = Object.values(counts);
  const sum = dice.reduce((a, b) => a + b, 0);
  const sorted = [...dice].sort((a, b) => a - b);
  const combos: { name: string; points: number }[] = [];

  if (vals.includes(5)) combos.push({ name: "Yahtzee!", points: 50 });
  if (vals.includes(4)) combos.push({ name: "Four of a Kind", points: 40 });
  if (vals.includes(3) && vals.includes(2)) combos.push({ name: "Full House", points: 25 });
  if (vals.includes(3)) combos.push({ name: "Three of a Kind", points: 30 });
  const pairs = vals.filter((v) => v >= 2).length;
  if (pairs >= 2) combos.push({ name: "Two Pairs", points: 15 });
  if (pairs >= 1) combos.push({ name: "One Pair", points: 10 });
  const isSmallStraight = [1,2,3,4].every((v) => sorted.includes(v)) || [2,3,4,5].every((v) => sorted.includes(v)) || [3,4,5,6].every((v) => sorted.includes(v));
  const isLargeStraight = JSON.stringify([...new Set(sorted)]) === JSON.stringify([1,2,3,4,5]) || JSON.stringify([...new Set(sorted)]) === JSON.stringify([2,3,4,5,6]);
  if (isLargeStraight) combos.push({ name: "Large Straight", points: 40 });
  if (isSmallStraight && !isLargeStraight) combos.push({ name: "Small Straight", points: 30 });
  combos.push({ name: "Chance", points: sum });

  return combos;
}

function DiceFace({ value, held }: { value: number; held: boolean }) {
  const dots = FACE_DOTS[value] ?? [];
  const positions: Record<number, string> = {
    1: "top-1 left-1", 2: "top-1 left-1/2 -translate-x-1/2", 3: "top-1 right-1",
    4: "top-1/2 -translate-y-1/2 left-1", 5: "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
    6: "top-1/2 -translate-y-1/2 right-1", 7: "bottom-1 left-1",
    8: "bottom-1 left-1/2 -translate-x-1/2", 9: "bottom-1 right-1",
  };
  return (
    <div className={`relative w-14 h-14 rounded-xl border-2 transition-all
      ${held ? "bg-amber-200 border-amber-500 scale-95" : "bg-white border-stone-300"}`}>
      {dots.map((pos) => (
        <div key={pos} className={`absolute w-2.5 h-2.5 rounded-full bg-stone-800 ${positions[pos]}`} />
      ))}
    </div>
  );
}

export default function Zone098SparkDiceRoll() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [dice, setDice] = useState<number[]>(Array(NUM_DICE).fill(1));
  const [held, setHeld] = useState<boolean[]>(Array(NUM_DICE).fill(false));
  const [rollsLeft, setRollsLeft] = useState(MAX_ROLLS);
  const [round, setRound] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [combos, setCombos] = useState<{ name: string; points: number }[]>([]);
  const [rolling, setRolling] = useState(false);
  const [startTime] = useState(Date.now());
  const [interactions, setInteractions] = useState(0);

  const startGame = useCallback(() => {
    setDice(rollDice(NUM_DICE));
    setHeld(Array(NUM_DICE).fill(false));
    setRollsLeft(MAX_ROLLS - 1);
    setRound(1);
    setTotalScore(0);
    setRoundScore(0);
    setCombos([]);
    setInteractions(0);
    setPhase("playing");
    mascot.speak("Roll the dice! Hold keepers, re-roll others!", "happy");
  }, [mascot]);

  const roll = useCallback(() => {
    if (rollsLeft <= 0 || rolling) return;
    hapticSelection();
    setInteractions((n) => n + 1);
    setRolling(true);
    setTimeout(() => {
      setDice((prev) => prev.map((d, i) => held[i] ? d : Math.ceil(Math.random() * 6)));
      setDice((prev) => {
        const newDice = prev.map((d, i) => held[i] ? d : Math.ceil(Math.random() * 6));
        setCombos(scoreCombos(newDice));
        return newDice;
      });
      setRollsLeft((n) => n - 1);
      setRolling(false);
    }, 600);
  }, [held, rollsLeft, rolling]);

  const toggleHold = useCallback((i: number) => {
    if (rollsLeft === MAX_ROLLS || rollsLeft === 0) return;
    hapticSelection();
    setHeld((prev) => prev.map((h, idx) => idx === i ? !h : h));
  }, [rollsLeft]);

  const scoreCombo = useCallback((pts: number, name: string) => {
    hapticSuccess();
    setTotalScore((s) => s + pts);
    setRoundScore(pts);
    mascot.speak(`${name} — ${pts} points!`, pts >= 25 ? "celebrate" : "happy");

    const nextRound = round + 1;
    if (nextRound > ROUNDS) {
      setTimeout(() => {
        setPhase("complete");
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-098",
          score: totalScore + pts,
          maxScore: ROUNDS * 50,
          elapsedMs: Date.now() - startTime,
          interactions,
          difficulty: "easy",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
        mascot.speak(`Final score: ${totalScore + pts}! Great dice game!`, "celebrate");
      }, 600);
    } else {
      setRound(nextRound);
      setDice(rollDice(NUM_DICE));
      setHeld(Array(NUM_DICE).fill(false));
      setRollsLeft(MAX_ROLLS);
      setCombos([]);
      setRoundScore(0);
    }
  }, [interactions, mascot, round, startTime, totalScore]);

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="spark" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Spark Dice Roll</h2>
          <p className="text-xs text-stone-500">Roll, hold, score combos!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-4xl">🎲</p>
            <h3 className="text-lg font-black text-stone-800">Yahtzee-Style!</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Each round: roll up to 3 times. Tap dice to hold them. Then pick your best combo to score! 6 rounds total.
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Roll the Dice!</PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "complete") && (
          <motion.div key="game" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3">
            {/* HUD */}
            <div className="flex gap-4">
              <div className="rounded-xl bg-amber-500 px-3 py-1.5 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Score</p>
                <p className="text-lg font-black">{totalScore}</p>
              </div>
              <div className="rounded-xl bg-stone-600 px-3 py-1.5 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Round</p>
                <p className="text-lg font-black">{Math.min(round, ROUNDS)}/{ROUNDS}</p>
              </div>
              <div className={`rounded-xl px-3 py-1.5 text-center text-white ${rollsLeft === 0 ? "bg-red-500" : "bg-sky-500"}`}>
                <p className="text-[10px] font-bold uppercase">Rolls left</p>
                <p className="text-lg font-black">{rollsLeft}</p>
              </div>
            </div>

            {/* Dice */}
            <div className="flex gap-2">
              {dice.map((d, i) => (
                <motion.div key={i} animate={rolling && !held[i] ? { rotate: [0, 180, 360] } : {}} transition={{ duration: 0.5 }}
                  onClick={() => toggleHold(i)} className="cursor-pointer">
                  <DiceFace value={d} held={held[i]} />
                  {held[i] && <p className="text-center text-[10px] font-bold text-amber-600 mt-0.5">HELD</p>}
                </motion.div>
              ))}
            </div>

            {phase === "playing" && (
              <PhysicalButton onClick={roll} variant="primary" disabled={rollsLeft === 0 || rolling} className="w-36">
                {rolling ? "Rolling…" : `Roll (${rollsLeft} left)`}
              </PhysicalButton>
            )}

            {/* Combos */}
            {combos.length > 0 && phase === "playing" && (
              <div className="w-full max-w-xs rounded-xl border border-stone-200 bg-white p-3 space-y-1.5">
                <p className="text-xs font-black text-stone-500 uppercase">Pick a combo to score:</p>
                {combos.map((c) => (
                  <button key={c.name} onClick={() => scoreCombo(c.points, c.name)}
                    className="w-full flex justify-between items-center rounded-lg bg-stone-50 hover:bg-amber-50 px-3 py-2 text-sm transition-colors">
                    <span className="font-bold text-stone-800">{c.name}</span>
                    <span className="font-black text-amber-600">{c.points} pts</span>
                  </button>
                ))}
              </div>
            )}

            {phase === "complete" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                <p className="text-2xl">🎲</p>
                <p className="font-black text-stone-800">Game Complete!</p>
                <p className="text-xl font-black text-amber-600">{totalScore} pts</p>
                <PhysicalButton onClick={startGame} variant="primary">
                  <RotateCcw className="mr-1.5 inline h-4 w-4" /> Play Again
                </PhysicalButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
