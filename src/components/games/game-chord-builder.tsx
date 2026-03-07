"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Trophy, Piano } from "lucide-react";
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

/* ─── music theory data ─── */
const ALL_NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"] as const;
type NoteName = typeof ALL_NOTES[number];

// Frequencies for octave 4
const FREQ: Record<string, number> = {
  C: 261.63, "C#": 277.18, D: 293.66, "D#": 311.13, E: 329.63, F: 349.23,
  "F#": 369.99, G: 392.00, "G#": 415.30, A: 440.00, "A#": 466.16, B: 493.88,
};

type ChordType = {
  name: string;
  symbol: string;
  intervals: number[]; // semitones from root
  description: string;
};

const CHORD_TYPES: ChordType[] = [
  { name: "Major", symbol: "", intervals: [0, 4, 7], description: "Bright and happy" },
  { name: "Minor", symbol: "m", intervals: [0, 3, 7], description: "Sad and introspective" },
  { name: "Diminished", symbol: "dim", intervals: [0, 3, 6], description: "Tense and unstable" },
  { name: "Augmented", symbol: "aug", intervals: [0, 4, 8], description: "Mysterious and dreamlike" },
  { name: "Sus2", symbol: "sus2", intervals: [0, 2, 7], description: "Open and airy" },
  { name: "Sus4", symbol: "sus4", intervals: [0, 5, 7], description: "Suspended, wanting to resolve" },
  { name: "Major 7th", symbol: "maj7", intervals: [0, 4, 7, 11], description: "Jazzy and smooth" },
  { name: "Minor 7th", symbol: "m7", intervals: [0, 3, 7, 10], description: "Mellow and bluesy" },
];

const ROOTS: NoteName[] = ["C", "D", "E", "F", "G", "A"];
const ROUNDS = 8;

type ChordChallenge = {
  root: NoteName;
  chordType: ChordType;
  correctNotes: NoteName[];
};

function buildChallenge(): ChordChallenge {
  const root = ROOTS[Math.floor(Math.random() * ROOTS.length)];
  const chordType = CHORD_TYPES[Math.floor(Math.random() * CHORD_TYPES.length)];
  const rootIdx = ALL_NOTES.indexOf(root);
  const correctNotes = chordType.intervals.map(
    (interval) => ALL_NOTES[(rootIdx + interval) % 12]
  );
  return { root, chordType, correctNotes };
}

/* ─── audio ─── */
let audioCtx: AudioContext | null = null;

function playChord(notes: NoteName[], duration = 0.8) {
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    notes.forEach((note, i) => {
      const osc = audioCtx!.createOscillator();
      const gain = audioCtx!.createGain();
      osc.type = "triangle";
      const freq = FREQ[note] || 440;
      osc.frequency.setValueAtTime(freq, audioCtx!.currentTime);
      gain.gain.setValueAtTime(0.15, audioCtx!.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx!.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx!.destination);
      osc.start(audioCtx!.currentTime + i * 0.05);
      osc.stop(audioCtx!.currentTime + duration);
    });
  } catch {
    // audio may not be available
  }
}

function playSingleNote(note: NoteName) {
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(FREQ[note] || 440, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  } catch {
    // audio may not be available
  }
}

/* ─── state ─── */
type Phase = "ready" | "playing" | "feedback" | "complete";

type State = {
  phase: Phase;
  round: number;
  score: number;
  correct: number;
  challenge: ChordChallenge | null;
  selected: Set<NoteName>;
  checked: boolean;
};

type Action =
  | { type: "START"; challenge: ChordChallenge }
  | { type: "TOGGLE"; note: NoteName }
  | { type: "CHECK" }
  | { type: "SCORE"; points: number; isCorrect: boolean }
  | { type: "NEXT"; challenge: ChordChallenge }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, correct: 0, challenge: a.challenge, selected: new Set(), checked: false };
    case "TOGGLE": {
      const next = new Set(s.selected);
      if (next.has(a.note)) next.delete(a.note); else next.add(a.note);
      return { ...s, selected: next };
    }
    case "CHECK":
      return { ...s, phase: "feedback", checked: true };
    case "SCORE":
      return { ...s, score: s.score + a.points, correct: s.correct + (a.isCorrect ? 1 : 0) };
    case "NEXT":
      return { ...s, phase: "playing", round: s.round + 1, challenge: a.challenge, selected: new Set(), checked: false };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = { phase: "ready", round: 0, score: 0, correct: 0, challenge: null, selected: new Set<NoteName>(), checked: false };

/* ─── piano key component ─── */
function isBlackKey(note: NoteName): boolean {
  return note.includes("#");
}

/* ─── component ─── */
export default function GameChordBuilder() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();

  const { phase, round, score, correct, challenge, selected, checked } = state;

  const stars = useMemo(() => {
    const pct = correct / ROUNDS;
    if (pct >= 0.85) return 3;
    if (pct >= 0.6) return 2;
    if (pct >= 0.3) return 1;
    return 0;
  }, [correct]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    const ch = buildChallenge();
    dispatch({ type: "START", challenge: ch });
    mascot.say(`Build a ${ch.root}${ch.chordType.symbol} chord! 🎹`, "excited");
  }, [mascot]);

  const handleToggle = useCallback((note: NoteName) => {
    if (checked) return;
    hapticSelection();
    playSingleNote(note);
    dispatch({ type: "TOGGLE", note });
  }, [checked]);

  const handleCheck = useCallback(() => {
    if (!challenge) return;
    dispatch({ type: "CHECK" });

    const correctSet = new Set(challenge.correctNotes);
    const isExact = selected.size === correctSet.size && [...selected].every((n) => correctSet.has(n));
    const partialCorrect = [...selected].filter((n) => correctSet.has(n)).length;
    const points = isExact ? 250 : partialCorrect * 50;

    dispatch({ type: "SCORE", points, isCorrect: isExact });

    if (isExact) {
      hapticCelebration();
      playChord(challenge.correctNotes);
      mascot.say(`Perfect ${challenge.chordType.name} chord! 🎶`, "cheering");
    } else if (partialCorrect > 0) {
      hapticSuccess();
      mascot.say(`${partialCorrect}/${challenge.correctNotes.length} notes right!`, "encouraging");
    } else {
      hapticError();
      mascot.say("Listen to the correct chord!", "thinking");
      playChord(challenge.correctNotes);
    }

    setTimeout(() => {
      if (round >= ROUNDS) {
        emitLegacyGameComplete(sessionId.current, score + points, stars);
        dispatch({ type: "FINISH" });
      } else {
        const ch = buildChallenge();
        dispatch({ type: "NEXT", challenge: ch });
        mascot.say(`Build ${ch.root}${ch.chordType.symbol}!`, "excited");
      }
    }, 2200);
  }, [challenge, selected, round, score, stars, mascot]);

  const handlePlayTarget = useCallback(() => {
    if (challenge) playChord(challenge.correctNotes);
    hapticSelection();
  }, [challenge]);

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Music2 className="h-5 w-5 text-violet-400" />
          <span className="text-sm font-bold text-white">Chord Builder</span>
        </div>
        {(phase === "playing" || phase === "feedback") && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>{round}/{ROUNDS}</span>
            <span className="text-amber-400 font-bold">{score}</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Chord Builder</h2>
            <p className="text-stone-400 max-w-xs">
              Build chords by selecting the right notes on the piano. Learn major, minor, diminished, and more!
            </p>
            <div className="flex gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1"><Piano className="h-3 w-3" /> {CHORD_TYPES.length} chord types</span>
              <span>{ROUNDS} challenges</span>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">Start Building 🎹</PhysicalButton>
          </motion.section>
        )}

        {(phase === "playing" || phase === "feedback") && challenge && (
          <motion.section key={`chord-${round}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center gap-4 px-4 py-5 w-full">
            {/* chord request */}
            <div className="text-center">
              <h3 className="text-2xl font-black text-white">{challenge.root}{challenge.chordType.symbol}</h3>
              <p className="text-xs text-stone-500">{challenge.chordType.name} — {challenge.chordType.description}</p>
              <p className="text-[10px] text-stone-600 mt-1">Select {challenge.correctNotes.length} notes</p>
            </div>

            {/* listen button */}
            <button onClick={handlePlayTarget}
              className="text-xs text-stone-500 hover:text-amber-400 transition-colors flex items-center gap-1">
              🔊 Hear target chord
            </button>

            {/* piano keyboard */}
            <div className="relative w-full max-w-sm h-36 mx-auto">
              {/* white keys */}
              <div className="flex h-full gap-0.5">
                {ALL_NOTES.filter((n) => !isBlackKey(n)).map((note) => {
                  const isSelected = selected.has(note);
                  const isCorrectNote = checked && challenge.correctNotes.includes(note);
                  const isWrong = checked && isSelected && !challenge.correctNotes.includes(note);

                  let bg = "bg-stone-100 hover:bg-stone-200";
                  if (isCorrectNote && isSelected) bg = "bg-emerald-300";
                  else if (isCorrectNote && checked) bg = "bg-emerald-200/60";
                  else if (isWrong) bg = "bg-red-300";
                  else if (isSelected) bg = "bg-amber-200";

                  return (
                    <motion.button
                      key={note}
                      onClick={() => handleToggle(note)}
                      disabled={checked}
                      whileTap={!checked ? { scale: 0.97 } : undefined}
                      className={`flex-1 rounded-b-lg ${bg} flex flex-col items-center justify-end pb-2 transition-colors shadow-sm ring-1 ring-stone-300/50 min-w-[36px]`}
                    >
                      <span className={`text-xs font-bold ${isSelected ? "text-stone-900" : "text-stone-500"}`}>{note}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* black keys */}
              <div className="absolute top-0 left-0 w-full h-[60%] flex pointer-events-none">
                {ALL_NOTES.filter((n) => !isBlackKey(n)).map((note, i, whites) => {
                  const sharpNote = `${note}#` as NoteName;
                  if (!ALL_NOTES.includes(sharpNote)) return <div key={note} className="flex-1" />;

                  const isSelected = selected.has(sharpNote);
                  const isCorrectNote = checked && challenge.correctNotes.includes(sharpNote);
                  const isWrong = checked && isSelected && !challenge.correctNotes.includes(sharpNote);

                  let bg = "bg-stone-800 hover:bg-stone-700";
                  if (isCorrectNote && isSelected) bg = "bg-emerald-600";
                  else if (isCorrectNote && checked) bg = "bg-emerald-600/60";
                  else if (isWrong) bg = "bg-red-600";
                  else if (isSelected) bg = "bg-amber-500";

                  return (
                    <div key={note} className="flex-1 flex justify-end">
                      <motion.button
                        onClick={() => handleToggle(sharpNote)}
                        disabled={checked}
                        whileTap={!checked ? { scale: 0.95 } : undefined}
                        className={`pointer-events-auto w-[65%] h-full rounded-b-md ${bg} shadow-lg z-10 transition-colors flex items-end justify-center pb-1`}
                      >
                        <span className="text-[9px] font-bold text-white/70">{sharpNote}</span>
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* selected notes display */}
            <div className="flex gap-1.5 min-h-[28px]">
              {[...selected].map((note) => (
                <motion.span key={note} initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold">
                  {note}
                </motion.span>
              ))}
            </div>

            {/* check button */}
            {!checked && (
              <PhysicalButton onClick={handleCheck} variant="primary" disabled={selected.size === 0}>
                Check Chord ✓
              </PhysicalButton>
            )}

            {checked && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-center text-xs text-stone-400">
                <p>Correct notes: {challenge.correctNotes.join(" — ")}</p>
              </motion.div>
            )}
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Chords Mastered!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  initial={{ scale: 0 }} animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}>⭐</motion.span>
              ))}
            </div>
            <p className="text-white font-bold">{score} points</p>
            <p className="text-stone-400 text-sm">{correct}/{ROUNDS} perfect chords</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 🎹</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
