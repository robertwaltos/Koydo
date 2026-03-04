"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

// ─── Constants ────────────────────────────────────────────────────────────────
const COLORS = [
  { id: 0, label: "Red",    bg: "bg-red-500",    lit: "bg-red-300",    border: "border-red-700",    sound: 261.63 }, // C4
  { id: 1, label: "Blue",   bg: "bg-blue-500",   lit: "bg-blue-300",   border: "border-blue-700",   sound: 329.63 }, // E4
  { id: 2, label: "Green",  bg: "bg-green-500",  lit: "bg-green-300",  border: "border-green-700",  sound: 392.00 }, // G4
  { id: 3, label: "Yellow", bg: "bg-yellow-400", lit: "bg-yellow-200", border: "border-yellow-600", sound: 523.25 }, // C5
];
const MAX_ROUNDS = 10;
const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "showing" | "input" | "complete";

// ─── Audio helper ─────────────────────────────────────────────────────────────
let audioCtx: AudioContext | null = null;
function playTone(freq: number, duration = 0.15) {
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // ignore audio errors
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone083LunaSequenceFlash() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [litId, setLitId] = useState<number | null>(null);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());
  const [interactions, setInteractions] = useState(0);
  const phaseRef = useRef<Phase>("ready");

  useEffect(() => { phaseRef.current = phase; }, [phase]);

  const showSequence = useCallback(async (seq: number[]) => {
    setPhase("showing");
    phaseRef.current = "showing";
    await new Promise((r) => setTimeout(r, 500));
    for (const colorId of seq) {
      if (phaseRef.current === "complete") return;
      setLitId(colorId);
      playTone(COLORS[colorId].sound);
      await new Promise((r) => setTimeout(r, 600));
      setLitId(null);
      await new Promise((r) => setTimeout(r, 200));
    }
    setPhase("input");
    phaseRef.current = "input";
    setPlayerIndex(0);
  }, []);

  const startGame = useCallback(() => {
    const first = Math.floor(Math.random() * 4);
    const seq = [first];
    setSequence(seq);
    setRound(1);
    setScore(0);
    setPlayerIndex(0);
    setLitId(null);
    showSequence(seq);
    mascot.speak("Watch the flashing sequence, then repeat it!", "happy");
  }, [mascot, showSequence]);

  const handlePress = useCallback((colorId: number) => {
    if (phase !== "input") return;
    setInteractions((n) => n + 1);
    setLitId(colorId);
    playTone(COLORS[colorId].sound);
    setTimeout(() => setLitId(null), 200);

    const expected = sequence[playerIndex];
    if (colorId !== expected) {
      hapticError();
      setPhase("complete");
      phaseRef.current = "complete";
      emitLegacyGameComplete({
        sessionId: SESSION_ID,
        gameId: "zone-083",
        score,
        maxScore: MAX_ROUNDS * 20,
        elapsedMs: Date.now() - startTime,
        interactions: interactions + 1,
        difficulty: "medium",
      });
      mascot.speak(`Oops! You reached round ${round}. Great memory workout!`, "encourage");
      return;
    }

    hapticSelection();
    const nextIndex = playerIndex + 1;

    if (nextIndex === sequence.length) {
      // Completed this round
      const newScore = score + round * 10;
      setScore(newScore);
      hapticSuccess();

      if (round >= MAX_ROUNDS) {
        setPhase("complete");
        phaseRef.current = "complete";
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-083",
          score: newScore,
          maxScore: MAX_ROUNDS * 20,
          elapsedMs: Date.now() - startTime,
          interactions: interactions + 1,
          difficulty: "medium",
        });
        mascot.speak("Perfect memory! All 10 rounds complete!", "celebrate");
        return;
      }

      const nextSeq = [...sequence, Math.floor(Math.random() * 4)];
      setSequence(nextSeq);
      setRound((r) => r + 1);
      setTimeout(() => showSequence(nextSeq), 600);
    } else {
      setPlayerIndex(nextIndex);
    }
  }, [interactions, mascot, phase, playerIndex, round, score, sequence, showSequence, startTime]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, number> = { "1": 0, "2": 1, "3": 2, "4": 3, "q": 0, "w": 1, "e": 2, "r": 3 };
      const id = map[e.key.toLowerCase()];
      if (id !== undefined) handlePress(id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handlePress]);

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="luna" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Luna Sequence Flash</h2>
          <p className="text-xs text-stone-500">Remember and repeat the color sequence!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">🌈</p>
            <h3 className="text-lg font-black text-stone-800">Sequence Flash</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Watch which colors flash in order. Then tap them in the same order. Each round adds one more step — can you reach Round 10?
            </p>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Flashing!
            </PhysicalButton>
          </motion.div>
        )}

        {(phase === "showing" || phase === "input") && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4">
            {/* HUD */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-stone-400">Round</p>
                <p className="text-xl font-black text-stone-800">{round}/{MAX_ROUNDS}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-stone-400">Score</p>
                <p className="text-xl font-black text-stone-800">{score}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-stone-400">Status</p>
                <p className="text-xs font-bold text-stone-600">{phase === "showing" ? "Watch..." : `Step ${playerIndex + 1}/${sequence.length}`}</p>
              </div>
            </div>

            {/* Color buttons in 2x2 grid */}
            <div className="grid grid-cols-2 gap-4">
              {COLORS.map((color) => (
                <motion.button
                  key={color.id}
                  onClick={() => handlePress(color.id)}
                  disabled={phase === "showing"}
                  animate={{ scale: litId === color.id ? 1.08 : 1 }}
                  className={`w-32 h-32 rounded-2xl border-4 font-black text-white text-lg shadow-lg transition-colors
                    ${litId === color.id ? color.lit : color.bg}
                    ${color.border}
                    ${phase === "showing" ? "cursor-default" : "active:scale-95 hover:brightness-110"}`}
                >
                  {color.label}
                </motion.button>
              ))}
            </div>
            <p className="text-xs text-stone-400">Keyboard: 1 2 3 4</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">{round >= MAX_ROUNDS ? "🏆" : "🧠"}</p>
            <h3 className="text-lg font-black text-stone-800">{round >= MAX_ROUNDS ? "Perfect!" : `Round ${round} reached`}</h3>
            <p className="text-3xl font-black text-violet-600">{score} pts</p>
            <PhysicalButton onClick={startGame} variant="primary">
              <RotateCcw className="mr-1.5 inline h-4 w-4" /> Try Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
