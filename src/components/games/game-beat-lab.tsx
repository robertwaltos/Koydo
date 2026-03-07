"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Drum, Trophy, Play } from "lucide-react";
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

/* ─── beat types ─── */
type BeatCell = 0 | 1; // 0 = rest, 1 = hit
type Track = { name: string; emoji: string; color: string; freq: number; type: OscillatorType };

const TRACKS: Track[] = [
  { name: "Kick", emoji: "🥁", color: "bg-red-500", freq: 80, type: "sine" },
  { name: "Snare", emoji: "🪘", color: "bg-amber-500", freq: 200, type: "triangle" },
  { name: "Hi-Hat", emoji: "🔔", color: "bg-cyan-500", freq: 800, type: "square" },
];

const BEATS = 8; // 8-beat patterns

type Pattern = {
  name: string;
  difficulty: number;
  grid: BeatCell[][]; // [track][beat]
};

const PATTERNS: Pattern[] = [
  {
    name: "Basic Rock",
    difficulty: 1,
    grid: [
      [1, 0, 0, 0, 1, 0, 0, 0], // kick
      [0, 0, 1, 0, 0, 0, 1, 0], // snare
      [1, 1, 1, 1, 1, 1, 1, 1], // hi-hat
    ],
  },
  {
    name: "Disco Beat",
    difficulty: 1,
    grid: [
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
  {
    name: "Hip Hop",
    difficulty: 2,
    grid: [
      [1, 0, 0, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 0],
    ],
  },
  {
    name: "Reggae Skank",
    difficulty: 2,
    grid: [
      [0, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1],
    ],
  },
  {
    name: "Funk Groove",
    difficulty: 3,
    grid: [
      [1, 0, 0, 1, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 1, 0],
    ],
  },
  {
    name: "Bossa Nova",
    difficulty: 3,
    grid: [
      [1, 0, 0, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
    ],
  },
  {
    name: "Breakbeat",
    difficulty: 4,
    grid: [
      [1, 0, 1, 0, 0, 1, 0, 1],
      [0, 1, 0, 0, 1, 0, 1, 0],
      [1, 1, 1, 0, 1, 1, 0, 1],
    ],
  },
  {
    name: "Samba",
    difficulty: 4,
    grid: [
      [1, 0, 0, 1, 1, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 1, 0, 1, 1, 0],
    ],
  },
];

const ROUNDS = 6;
const BPM = 120;
const BEAT_MS = (60 / BPM) * 1000 / 2; // eighth notes

/* ─── audio ─── */
let audioCtx: AudioContext | null = null;

function playHit(track: Track) {
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = track.type;
    osc.frequency.setValueAtTime(track.freq, audioCtx.currentTime);
    if (track.freq < 150) {
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.1);
    }
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch {
    // audio may not be available
  }
}

/* ─── state ─── */
type Phase = "ready" | "listening" | "building" | "feedback" | "complete";

type State = {
  phase: Phase;
  round: number;
  score: number;
  pattern: Pattern | null;
  playerGrid: BeatCell[][];
  playbackBeat: number;
  correctCells: number;
  totalCells: number;
};

type Action =
  | { type: "START"; pattern: Pattern }
  | { type: "LISTEN" }
  | { type: "BUILD" }
  | { type: "TOGGLE"; track: number; beat: number }
  | { type: "PLAYBACK_BEAT"; beat: number }
  | { type: "CHECK" }
  | { type: "SCORE"; points: number; cells: number; total: number }
  | { type: "NEXT"; pattern: Pattern }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "listening", round: 1, score: 0, pattern: a.pattern, playerGrid: emptyGrid(), playbackBeat: -1, correctCells: 0, totalCells: 0 };
    case "LISTEN":
      return { ...s, phase: "listening", playbackBeat: -1 };
    case "BUILD":
      return { ...s, phase: "building", playbackBeat: -1 };
    case "TOGGLE": {
      const grid = s.playerGrid.map((row) => [...row]);
      grid[a.track][a.beat] = grid[a.track][a.beat] ? 0 : 1;
      return { ...s, playerGrid: grid };
    }
    case "PLAYBACK_BEAT":
      return { ...s, playbackBeat: a.beat };
    case "CHECK":
      return { ...s, phase: "feedback" };
    case "SCORE":
      return { ...s, score: s.score + a.points, correctCells: s.correctCells + a.cells, totalCells: s.totalCells + a.total };
    case "NEXT":
      return { ...s, phase: "listening", round: s.round + 1, pattern: a.pattern, playerGrid: emptyGrid(), playbackBeat: -1 };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

function emptyGrid(): BeatCell[][] {
  return TRACKS.map(() => new Array(BEATS).fill(0) as BeatCell[]);
}

const INIT: State = {
  phase: "ready", round: 0, score: 0, pattern: null,
  playerGrid: emptyGrid(), playbackBeat: -1, correctCells: 0, totalCells: 0,
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── component ─── */
export default function GameBeatLab() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const patternOrder = useRef<Pattern[]>([]);
  const playbackRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { phase, round, score, pattern, playerGrid, playbackBeat, correctCells, totalCells } = state;

  const stars = useMemo(() => {
    const pct = correctCells / Math.max(totalCells, 1);
    if (pct >= 0.9) return 3;
    if (pct >= 0.7) return 2;
    if (pct >= 0.4) return 1;
    return 0;
  }, [correctCells, totalCells]);

  /* ── playback ── */
  const playPattern = useCallback((grid: BeatCell[][]) => {
    if (playbackRef.current) clearInterval(playbackRef.current);
    let beat = 0;
    dispatch({ type: "PLAYBACK_BEAT", beat: -1 });
    playbackRef.current = setInterval(() => {
      if (beat >= BEATS) {
        if (playbackRef.current) clearInterval(playbackRef.current);
        dispatch({ type: "PLAYBACK_BEAT", beat: -1 });
        return;
      }
      dispatch({ type: "PLAYBACK_BEAT", beat });
      TRACKS.forEach((track, t) => {
        if (grid[t][beat]) playHit(track);
      });
      beat++;
    }, BEAT_MS);
  }, []);

  useEffect(() => {
    return () => { if (playbackRef.current) clearInterval(playbackRef.current); };
  }, []);

  /* ── auto transition from listening to building ── */
  useEffect(() => {
    if (phase === "listening" && pattern) {
      const timeout = setTimeout(() => {
        playPattern(pattern.grid);
        const buildTimeout = setTimeout(() => {
          dispatch({ type: "BUILD" });
        }, BEATS * BEAT_MS + 500);
        return () => clearTimeout(buildTimeout);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [phase, pattern, round, playPattern]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    patternOrder.current = shuffle(PATTERNS).slice(0, ROUNDS);
    dispatch({ type: "START", pattern: patternOrder.current[0] });
    mascot.say("Listen to the beat, then recreate it! 🥁", "excited");
  }, [mascot]);

  const handleToggle = useCallback((track: number, beat: number) => {
    if (phase !== "building") return;
    hapticSelection();
    playHit(TRACKS[track]);
    dispatch({ type: "TOGGLE", track, beat });
  }, [phase]);

  const handleCheck = useCallback(() => {
    if (!pattern) return;
    dispatch({ type: "CHECK" });

    let matched = 0;
    let total = 0;
    pattern.grid.forEach((row, t) => {
      row.forEach((cell, b) => {
        total++;
        if (playerGrid[t][b] === cell) matched++;
      });
    });

    const pct = matched / total;
    const points = Math.round(pct * 300);
    dispatch({ type: "SCORE", points, cells: matched, total });

    if (pct >= 0.9) {
      hapticCelebration();
      mascot.say("Nailed the rhythm! 🎶", "cheering");
    } else if (pct >= 0.6) {
      hapticSuccess();
      mascot.say("Close! Nice groove!", "encouraging");
    } else {
      hapticError();
      mascot.say("Keep practicing that beat!", "thinking");
    }

    // play comparison
    playPattern(pattern.grid);

    setTimeout(() => {
      if (round >= ROUNDS) {
        emitLegacyGameComplete({
          sessionId: sessionId.current,
          gameId: "beat-lab",
          elapsedMs: 0,
          interactions: score + points,
          score: score + points,
          source: "component",
          occurredAt: new Date().toISOString()
        });
        dispatch({ type: "FINISH" });
      } else {
        dispatch({ type: "NEXT", pattern: patternOrder.current[round] });
      }
    }, BEATS * BEAT_MS + 1500);
  }, [pattern, playerGrid, round, score, stars, mascot, playPattern]);

  const handleReplay = useCallback(() => {
    if (pattern) playPattern(pattern.grid);
  }, [pattern, playPattern]);

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Drum className="h-5 w-5 text-orange-400" />
          <span className="text-sm font-bold text-white">Beat Lab</span>
        </div>
        {phase !== "ready" && phase !== "complete" && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Beat {round}/{ROUNDS}</span>
            <span className="text-amber-400 font-bold">{score}</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Beat Lab</h2>
            <p className="text-stone-400 max-w-xs">
              Listen to rhythm patterns and recreate them on the drum grid. From rock to samba!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Start Beats 🥁</PhysicalButton>
          </motion.section>
        )}

        {phase === "listening" && pattern && (
          <motion.section key="listen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 0.5 }}>
              <span className="text-6xl">🎧</span>
            </motion.div>
            <h3 className="text-xl font-bold text-white">Listen: {pattern.name}</h3>
            <p className="text-xs text-stone-500">Memorize the rhythm pattern...</p>
            {/* beat indicators */}
            <div className="flex gap-1.5">
              {Array.from({ length: BEATS }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-4 h-4 rounded-full ${playbackBeat === i ? "bg-amber-400" : "bg-stone-700"}`}
                  animate={playbackBeat === i ? { scale: [1, 1.3, 1] } : {}}
                />
              ))}
            </div>
          </motion.section>
        )}

        {(phase === "building" || phase === "feedback") && pattern && (
          <motion.section key="build" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center gap-4 px-4 py-5 w-full">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white">{pattern.name}</h3>
              {phase === "building" && (
                <button onClick={handleReplay} className="text-xs text-stone-500 hover:text-amber-400">
                  <Play className="h-3 w-3 inline" /> Replay
                </button>
              )}
            </div>

            {/* drum grid */}
            <div className="w-full max-w-sm space-y-1.5">
              {TRACKS.map((track, t) => (
                <div key={track.name} className="flex items-center gap-2">
                  <span className="text-lg w-8 text-center">{track.emoji}</span>
                  <div className="flex-1 flex gap-1">
                    {Array.from({ length: BEATS }).map((_, b) => {
                      const isActive = phase === "feedback" ? pattern.grid[t][b] : playerGrid[t][b];
                      const isPlayerHit = playerGrid[t][b];
                      const isPatternHit = pattern.grid[t][b];
                      const isCorrect = phase === "feedback" && isPlayerHit === isPatternHit;
                      const isWrong = phase === "feedback" && isPlayerHit !== isPatternHit;
                      const isPlayback = playbackBeat === b;

                      let cellBg = "bg-stone-800/60 ring-1 ring-white/5";
                      if (phase === "feedback") {
                        if (isCorrect && isPatternHit) cellBg = `${track.color}/60 ring-2 ring-emerald-400/50`;
                        else if (isWrong && isPatternHit) cellBg = `${track.color}/30 ring-2 ring-red-400/50`;
                        else if (isWrong && isPlayerHit) cellBg = "bg-red-600/20 ring-1 ring-red-400/30";
                        else cellBg = "bg-stone-800/40";
                      } else if (isActive) {
                        cellBg = `${track.color}/50 ring-1 ring-white/20`;
                      }

                      return (
                        <motion.button
                          key={b}
                          onClick={() => handleToggle(t, b)}
                          disabled={phase !== "building"}
                          animate={isPlayback && isActive ? { scale: [1, 1.2, 1] } : {}}
                          className={`flex-1 aspect-square rounded-lg transition-all min-w-[32px] min-h-[32px] ${cellBg} ${
                            isPlayback ? "brightness-150" : ""
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {phase === "building" && (
              <PhysicalButton onClick={handleCheck} variant="primary">
                Submit Beat ✓
              </PhysicalButton>
            )}
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Lab Complete!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  initial={{ scale: 0 }} animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}>⭐</motion.span>
              ))}
            </div>
            <p className="text-white font-bold">{score} points</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 🥁</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
