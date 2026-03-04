"use client";

import { useState, useCallback, useEffect, useRef } from "react";
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

const EMOJIS = ["🔬","🧬","⚛️","🌍","🚀","💡","🧪","🔭"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface Card {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

function makeCards(): Card[] {
  return shuffle([...EMOJIS, ...EMOJIS]).map((emoji, i) => ({ id: i, emoji, flipped: false, matched: false }));
}

export default function Zone092PixelCardMatch() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [locked, setLocked] = useState(false);
  const [pairs, setPairs] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [startTime] = useState(Date.now());
  const lockRef = useRef(false);

  const startGame = useCallback(() => {
    setCards(makeCards());
    setSelected([]);
    setPairs(0);
    setAttempts(0);
    setLocked(false);
    lockRef.current = false;
    setPhase("playing");
    mascot.speak("Find all 8 matching pairs! Tap two cards to flip!", "happy");
  }, [mascot]);

  const flipCard = useCallback((id: number) => {
    if (phase !== "playing" || lockRef.current) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.flipped || card.matched) return;
    hapticSelection();

    const newSelected = [...selected, id];
    setCards((prev) => prev.map((c) => c.id === id ? { ...c, flipped: true } : c));
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setAttempts((n) => n + 1);
      lockRef.current = true;
      const [a, b] = newSelected.map((sid) => cards.find((c) => c.id === sid)!);
      const isMatch = a.emoji === b.emoji;

      setTimeout(() => {
        if (isMatch) {
          hapticSuccess();
          setPairs((n) => {
            const next = n + 1;
            if (next === EMOJIS.length) {
              setPhase("complete");
              const score = Math.max(200 - attempts * 5, 50);
              emitLegacyGameComplete({
                sessionId: SESSION_ID,
                gameId: "zone-092",
                score,
                maxScore: 200,
                elapsedMs: Date.now() - startTime,
                interactions: attempts + 1,
                difficulty: "easy",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
              mascot.speak("All pairs found! Excellent memory!", "celebrate");
            } else if (next % 3 === 0) {
              mascot.speak("Great match!", "happy");
            }
            return next;
          });
          setCards((prev) => prev.map((c) =>
            newSelected.includes(c.id) ? { ...c, matched: true } : c
          ));
        } else {
          hapticError();
          setCards((prev) => prev.map((c) =>
            newSelected.includes(c.id) ? { ...c, flipped: false } : c
          ));
        }
        setSelected([]);
        lockRef.current = false;
        setLocked(false);
      }, 900);
      setLocked(true);
    }
  }, [attempts, cards, mascot, phase, selected, startTime]);

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="pixel" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Pixel Card Match</h2>
          <p className="text-xs text-stone-500">Find all 8 matching pairs!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-4xl">🃏</p>
            <h3 className="text-lg font-black text-stone-800">Memory Card Match</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Tap two cards to flip them. Find matching science emoji pairs! Fewer attempts = higher score.
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Start Game!</PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "complete") && (
          <motion.div key="board" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3">
            {/* Stats */}
            <div className="flex gap-4">
              <div className="rounded-xl bg-sky-500 px-3 py-1.5 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Pairs</p>
                <p className="text-lg font-black">{pairs}/{EMOJIS.length}</p>
              </div>
              <div className="rounded-xl bg-stone-600 px-3 py-1.5 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Attempts</p>
                <p className="text-lg font-black">{attempts}</p>
              </div>
            </div>

            {/* Card Grid 4×4 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 72px)", gap: 8 }}>
              {cards.map((card) => (
                <div key={card.id} className="w-18 h-18 cursor-pointer" style={{ width: 72, height: 72 }}
                     onClick={() => flipCard(card.id)}>
                  <motion.div
                    className="w-full h-full relative"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateY: card.flipped || card.matched ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Back */}
                    <div className="absolute inset-0 rounded-xl bg-sky-600 flex items-center justify-center text-white font-black text-xl"
                         style={{ backfaceVisibility: "hidden" }}>?</div>
                    {/* Front */}
                    <div className={`absolute inset-0 rounded-xl flex items-center justify-center text-3xl
                         ${card.matched ? "bg-green-200" : "bg-white"} shadow border border-stone-200`}
                         style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                      {card.emoji}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {phase === "complete" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                <p className="text-2xl">🎉</p>
                <p className="font-black text-stone-800">All pairs matched!</p>
                <p className="text-stone-600 text-sm">{attempts} attempts · Score: {Math.max(200 - attempts * 5, 50)}</p>
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
