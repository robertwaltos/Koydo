"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music, Trophy, Volume2 } from "lucide-react";
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

/* ─── note data ─── */
type Note = {
  name: string;
  solfege: string;
  frequency: number;
  staffPosition: number; // 0 = middle C line, positive = up
  ledgerLines: number;
  accidental?: "sharp" | "flat";
};

const TREBLE_NOTES: Note[] = [
  { name: "C4", solfege: "Do", frequency: 261.63, staffPosition: 0, ledgerLines: 1 },
  { name: "D4", solfege: "Re", frequency: 293.66, staffPosition: 1, ledgerLines: 0 },
  { name: "E4", solfege: "Mi", frequency: 329.63, staffPosition: 2, ledgerLines: 0 },
  { name: "F4", solfege: "Fa", frequency: 349.23, staffPosition: 3, ledgerLines: 0 },
  { name: "G4", solfege: "Sol", frequency: 392.00, staffPosition: 4, ledgerLines: 0 },
  { name: "A4", solfege: "La", frequency: 440.00, staffPosition: 5, ledgerLines: 0 },
  { name: "B4", solfege: "Si", frequency: 493.88, staffPosition: 6, ledgerLines: 0 },
  { name: "C5", solfege: "Do", frequency: 523.25, staffPosition: 7, ledgerLines: 0 },
  { name: "D5", solfege: "Re", frequency: 587.33, staffPosition: 8, ledgerLines: 0 },
  { name: "E5", solfege: "Mi", frequency: 659.25, staffPosition: 9, ledgerLines: 0 },
  { name: "F5", solfege: "Fa", frequency: 698.46, staffPosition: 10, ledgerLines: 0 },
  { name: "G5", solfege: "Sol", frequency: 783.99, staffPosition: 11, ledgerLines: 1 },
];

const ROUNDS = 12;
const TIME_PER_NOTE_MS = 6000;

/* ─── audio ─── */
let audioCtx: AudioContext | null = null;

function playNote(freq: number, duration = 0.6) {
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // audio may not be available
  }
}

/* ─── state ─── */
type Phase = "ready" | "playing" | "complete";

type State = {
  phase: Phase;
  round: number;
  score: number;
  streak: number;
  bestStreak: number;
  correct: number;
  currentNote: Note | null;
  options: Note[];
  timeLeft: number;
  answered: string | null;
  showFeedback: boolean;
};

type Action =
  | { type: "START" }
  | { type: "SET_ROUND"; note: Note; options: Note[] }
  | { type: "ANSWER"; name: string }
  | { type: "TICK"; delta: number }
  | { type: "TIME_UP" }
  | { type: "NEXT"; note: Note; options: Note[] }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, streak: 0, bestStreak: 0, correct: 0, answered: null, showFeedback: false };
    case "SET_ROUND":
      return { ...s, currentNote: a.note, options: a.options, timeLeft: TIME_PER_NOTE_MS, answered: null, showFeedback: false };
    case "ANSWER": {
      const isCorrect = a.name === s.currentNote?.name;
      const timeBonus = Math.floor(s.timeLeft * 0.01);
      const streakBonus = isCorrect ? s.streak * 20 : 0;
      const newStreak = isCorrect ? s.streak + 1 : 0;
      return {
        ...s, answered: a.name, showFeedback: true,
        score: s.score + (isCorrect ? 100 + timeBonus + streakBonus : 0),
        streak: newStreak, bestStreak: Math.max(s.bestStreak, newStreak),
        correct: s.correct + (isCorrect ? 1 : 0),
      };
    }
    case "TICK":
      return { ...s, timeLeft: Math.max(0, s.timeLeft - a.delta) };
    case "TIME_UP":
      return { ...s, answered: "__timeout__", showFeedback: true, streak: 0 };
    case "NEXT":
      return { ...s, round: s.round + 1, currentNote: a.note, options: a.options, timeLeft: TIME_PER_NOTE_MS, answered: null, showFeedback: false };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = {
  phase: "ready", round: 0, score: 0, streak: 0, bestStreak: 0,
  correct: 0, currentNote: null, options: [], timeLeft: TIME_PER_NOTE_MS,
  answered: null, showFeedback: false,
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRound(): { note: Note; options: Note[] } {
  const note = TREBLE_NOTES[Math.floor(Math.random() * TREBLE_NOTES.length)];
  const others = shuffle(TREBLE_NOTES.filter((n) => n.name !== note.name)).slice(0, 3);
  return { note, options: shuffle([note, ...others]) };
}

/* ─── staff renderer ─── */
function StaffNote({ note }: { note: Note }) {
  const staffY = (pos: number) => 90 - pos * 7;
  const cy = staffY(note.staffPosition);

  return (
    <svg viewBox="0 0 120 120" className="w-full h-full max-h-40">
      {/* staff lines (5 lines for treble clef — positions 2,4,6,8,10 from C4=0) */}
      {[2, 4, 6, 8, 10].map((pos) => (
        <line key={pos} x1="10" y1={staffY(pos)} x2="110" y2={staffY(pos)} stroke="rgba(148,163,184,0.4)" strokeWidth="0.7" />
      ))}

      {/* treble clef symbol */}
      <text x="14" y={staffY(4) + 14} fontSize="28" fill="rgba(148,163,184,0.5)" fontFamily="serif">𝄞</text>

      {/* ledger lines for middle C (pos=0) */}
      {note.staffPosition <= 0 && (
        <line x1="55" y1={staffY(0)} x2="85" y2={staffY(0)} stroke="rgba(148,163,184,0.4)" strokeWidth="0.7" />
      )}
      {/* ledger lines above staff */}
      {note.staffPosition >= 11 && (
        <line x1="55" y1={staffY(12)} x2="85" y2={staffY(12)} stroke="rgba(148,163,184,0.4)" strokeWidth="0.7" />
      )}

      {/* note head */}
      <motion.ellipse
        cx="70"
        cy={cy}
        rx="6"
        ry="4.5"
        fill="#f59e0b"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 12 }}
        transform={`rotate(-15 70 ${cy})`}
      />

      {/* stem */}
      {note.staffPosition < 7 ? (
        <line x1="76" y1={cy} x2="76" y2={cy - 28} stroke="#f59e0b" strokeWidth="1.5" />
      ) : (
        <line x1="64" y1={cy} x2="64" y2={cy + 28} stroke="#f59e0b" strokeWidth="1.5" />
      )}
    </svg>
  );
}

/* ─── component ─── */
export default function GameNoteHunter() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastTickRef = useRef(Date.now());

  const { phase, round, score, streak, correct, currentNote, options, timeLeft, answered, showFeedback } = state;

  const stars = useMemo(() => {
    const pct = correct / ROUNDS;
    if (pct >= 0.9) return 3;
    if (pct >= 0.7) return 2;
    if (pct >= 0.4) return 1;
    return 0;
  }, [correct]);

  /* timer */
  useEffect(() => {
    if (phase !== "playing" || showFeedback) return;
    lastTickRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const now = Date.now();
      dispatch({ type: "TICK", delta: now - lastTickRef.current });
      lastTickRef.current = now;
    }, 50);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, showFeedback, round]);

  useEffect(() => {
    if (phase === "playing" && timeLeft <= 0 && !showFeedback) {
      hapticError();
      mascot.say("Time's up!", "thinking");
      dispatch({ type: "TIME_UP" });
    }
  }, [phase, timeLeft, showFeedback, mascot]);

  /* advance */
  useEffect(() => {
    if (!showFeedback) return;
    const timeout = setTimeout(() => {
      if (round >= ROUNDS) {
        hapticCelebration();
        emitLegacyGameComplete(sessionId.current, score, stars);
        dispatch({ type: "FINISH" });
      } else {
        const { note, options } = pickRound();
        playNote(note.frequency);
        dispatch({ type: "NEXT", note, options });
      }
    }, 1200);
    return () => clearTimeout(timeout);
  }, [showFeedback, round, score, stars]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    dispatch({ type: "START" });
    const { note, options } = pickRound();
    playNote(note.frequency);
    dispatch({ type: "SET_ROUND", note, options });
    mascot.say("Name the note on the staff! 🎵", "excited");
  }, [mascot]);

  const handleAnswer = useCallback((name: string) => {
    if (answered) return;
    const isCorrect = name === currentNote?.name;
    if (isCorrect) {
      hapticSuccess();
      playNote(currentNote!.frequency, 0.3);
      mascot.say(streak >= 2 ? `${streak + 1}× streak! 🎶` : "Correct! 🎵", "cheering");
    } else {
      hapticError();
      mascot.say(`That's ${currentNote?.name}!`, "thinking");
    }
    dispatch({ type: "ANSWER", name });
  }, [answered, currentNote, streak, mascot]);

  const handleReplay = useCallback(() => {
    if (currentNote) playNote(currentNote.frequency);
    hapticSelection();
  }, [currentNote]);

  const timerPct = timeLeft / TIME_PER_NOTE_MS;

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Music className="h-5 w-5 text-amber-400" />
          <span className="text-sm font-bold text-white">Note Hunter</span>
        </div>
        {phase === "playing" && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>{round}/{ROUNDS}</span>
            <span className="text-amber-400 font-bold">{score}</span>
            {streak >= 2 && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-orange-400 font-black">{streak}× 🔥</motion.span>}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Note Hunter</h2>
            <p className="text-stone-400 max-w-xs">Identify notes on the musical staff. Listen to hear each note!</p>
            <PhysicalButton onClick={startGame} variant="primary">Start Hunting 🎵</PhysicalButton>
          </motion.section>
        )}

        {phase === "playing" && currentNote && (
          <motion.section key={`note-${round}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
            className="flex flex-1 flex-col items-center gap-4 px-6 py-5 w-full">
            {/* timer */}
            <div className="w-full h-1.5 rounded-full bg-stone-800 overflow-hidden">
              <motion.div className={`h-full rounded-full ${timerPct > 0.5 ? "bg-emerald-500" : timerPct > 0.25 ? "bg-amber-500" : "bg-red-500"}`}
                animate={{ width: `${timerPct * 100}%` }} transition={{ duration: 0.05, ease: "linear" }} />
            </div>

            {/* staff display */}
            <div className="w-full max-w-xs bg-stone-800/40 rounded-xl ring-1 ring-white/5 p-2">
              <StaffNote note={currentNote} />
            </div>

            {/* replay button */}
            <button onClick={handleReplay} className="flex items-center gap-1 text-xs text-stone-500 hover:text-amber-400 transition-colors">
              <Volume2 className="h-3 w-3" /> Hear note
            </button>

            {/* options */}
            <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
              {options.map((opt) => {
                const isCorrect = opt.name === currentNote.name;
                const isChosen = answered === opt.name;
                const timedOut = answered === "__timeout__";
                let style = "bg-stone-800/80 ring-1 ring-white/5 text-white hover:bg-stone-700/80";
                if (showFeedback && isCorrect) style = "bg-emerald-600/30 ring-2 ring-emerald-400 text-emerald-200";
                else if (showFeedback && isChosen) style = "bg-red-600/30 ring-2 ring-red-400 text-red-200";
                else if (showFeedback && timedOut && isCorrect) style = "bg-amber-600/20 ring-2 ring-amber-400 text-amber-200";
                else if (showFeedback) style = "bg-stone-800/40 text-stone-500";

                return (
                  <motion.button key={opt.name} onClick={() => handleAnswer(opt.name)} disabled={!!answered}
                    whileTap={!answered ? { scale: 0.95 } : undefined}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all min-h-[48px] ${style}`}>
                    <span className="text-lg font-black">{opt.name.replace(/\d/, "")}</span>
                    <span className="text-xs opacity-60 ml-1">{opt.solfege}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Hunt Complete!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  initial={{ scale: 0 }} animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}>⭐</motion.span>
              ))}
            </div>
            <p className="text-white font-bold">{score} points</p>
            <p className="text-stone-400 text-sm">{correct}/{ROUNDS} correct &bull; Best streak: {state.bestStreak}</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 🎵</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
