"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, ShieldAlert, ShieldPlus } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "encore" | "drop";

type Note = {
  id: number;
  lane: number;
  y: number;
  speed: number;
};

const LANE_COUNT = 4;
const START_HEARTS = 6;
const MAX_FOCUS = 5;
const SONG_TICKS = 620;
const HIT_LOW = 76;
const HIT_HIGH = 92;
const KEY_LABELS = ["A", "S", "D", "F"];

function laneColor(lane: number) {
  if (lane === 0) return "border-fuchsia-300/70 bg-fuchsia-300/25";
  if (lane === 1) return "border-rose-300/70 bg-rose-300/25";
  if (lane === 2) return "border-violet-300/70 bg-violet-300/25";
  return "border-pink-300/70 bg-pink-300/25";
}

export default function Zone119LunaPrismOverdrive() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [notes, setNotes] = useState<Note[]>([]);
  const [ticks, setTicks] = useState(0);
  const [hearts, setHearts] = useState(START_HEARTS);
  const [focus, setFocus] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [resolution, setResolution] = useState<Resolution>("drop");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const noteIdRef = useRef(0);

  const notesRef = useRef<Note[]>([]);
  const heartsRef = useRef(hearts);
  const focusRef = useRef(focus);
  const scoreRef = useRef(score);
  const comboRef = useRef(combo);
  const bestComboRef = useRef(bestCombo);
  const ticksRef = useRef(ticks);

  useEffect(() => {
    notesRef.current = notes;
    heartsRef.current = hearts;
    focusRef.current = focus;
    scoreRef.current = score;
    comboRef.current = combo;
    bestComboRef.current = bestCombo;
    ticksRef.current = ticks;
  }, [bestCombo, combo, focus, hearts, notes, score, ticks]);

  const tier = 1 + Math.floor(ticks / 90);
  const progress = useMemo(() => Math.min(100, Math.round((ticks / SONG_TICKS) * 100)), [ticks]);

  const finalize = useCallback(
    (nextResolution: Resolution, finalScore: number) => {
      setResolution(nextResolution);
      setPhase("complete");
      setMood(nextResolution === "encore" ? "cheering" : "sad");
      setMessage(
        nextResolution === "encore"
          ? "Luna: prism voyage reached encore finale."
          : "Luna: prism voyage dropped out of tempo.",
      );
      if (completionSentRef.current) return;
      completionSentRef.current = true;
      emitLegacyGameComplete({
        sessionId: sessionIdRef.current,
        gameId: "zone-119",
        difficulty: "medium",
        elapsedMs: Math.max(0, Date.now() - startedAt),
        interactions: Math.max(1, interactions),
        score: finalScore,
        maxScore: SONG_TICKS * 3,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    },
    [interactions, setMessage, setMood, startedAt],
  );

  const applyMiss = useCallback(
    (message: string, penalty: number) => {
      const currentScore = scoreRef.current;
      const currentFocus = focusRef.current;
      const currentHearts = heartsRef.current;
      const nextScore = Math.max(0, currentScore - penalty);
      scoreRef.current = nextScore;
      setScore(nextScore);
      setCombo(0);

      if (currentFocus > 0) {
        const nextFocus = currentFocus - 1;
        focusRef.current = nextFocus;
        setFocus(nextFocus);
        setMood("thinking");
        setMessage(`${message} Focus absorbed the miss.`);
        void hapticSelection();
        return;
      }

      const nextHearts = currentHearts - 1;
      heartsRef.current = nextHearts;
      setHearts(nextHearts);
      setMood("sad");
      setMessage(`${message} Heart lost.`);
      void hapticError();

      if (nextHearts <= 0) {
        finalize("drop", nextScore);
      }
    },
    [finalize, setMessage, setMood],
  );

  const hitLane = useCallback(
    (lane: number) => {
      if (phase !== "playing") return;
      setInteractions((value) => value + 1);

      const existing = [...notesRef.current];
      let targetIndex = -1;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (let index = 0; index < existing.length; index += 1) {
        const note = existing[index];
        if (!note || note.lane !== lane) continue;
        if (note.y < HIT_LOW || note.y > HIT_HIGH) continue;
        const distance = Math.abs(note.y - ((HIT_LOW + HIT_HIGH) / 2));
        if (distance < bestDistance) {
          bestDistance = distance;
          targetIndex = index;
        }
      }

      if (targetIndex === -1) {
        applyMiss("No beat in hit zone.", 5);
        return;
      }

      const note = existing[targetIndex];
      const remaining = existing.filter((_, index) => index !== targetIndex);
      notesRef.current = remaining;
      setNotes(remaining);

      const nextCombo = comboRef.current + 1;
      const nextBestCombo = Math.max(bestComboRef.current, nextCombo);
      const precisionBonus = note ? Math.max(0, 8 - Math.abs(note.y - 86)) : 0;
      const nextScore = scoreRef.current + 10 + Math.min(12, nextCombo * 2) + precisionBonus;

      comboRef.current = nextCombo;
      bestComboRef.current = nextBestCombo;
      scoreRef.current = nextScore;

      setCombo(nextCombo);
      setBestCombo(nextBestCombo);
      setScore(nextScore);

      if (nextCombo > 0 && nextCombo % 5 === 0) {
        const focusBoost = Math.min(MAX_FOCUS, focusRef.current + 1);
        focusRef.current = focusBoost;
        setFocus(focusBoost);
        setMessage("Cadence streak. +1 focus.");
      } else {
        setMessage("Beat locked.");
      }

      setMood("happy");
      void hapticSuccess();
    },
    [applyMiss, phase, setMessage, setMood],
  );

  const restoreHeart = useCallback(() => {
    if (phase !== "playing" || focusRef.current <= 0 || heartsRef.current >= START_HEARTS) return;
    const nextFocus = focusRef.current - 1;
    const nextHearts = heartsRef.current + 1;
    focusRef.current = nextFocus;
    heartsRef.current = nextHearts;
    setFocus(nextFocus);
    setHearts(nextHearts);
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Breath reset restored one heart.");
    void hapticSelection();
  }, [phase, setMessage, setMood]);

  const start = useCallback(() => {
    noteIdRef.current = 0;
    notesRef.current = [];
    heartsRef.current = START_HEARTS;
    focusRef.current = 1;
    scoreRef.current = 0;
    comboRef.current = 0;
    bestComboRef.current = 0;
    ticksRef.current = 0;

    setPhase("playing");
    setNotes([]);
    setTicks(0);
    setHearts(START_HEARTS);
    setFocus(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setResolution("drop");
    setInteractions(0);

    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Luna: keep prism in the hit band until finale.");
    void hapticSelection();
  }, [setMessage, setMood]);

  useEffect(() => {
    if (phase !== "playing") return;
    const interval = window.setInterval(() => {
      const currentTick = ticksRef.current + 1;
      ticksRef.current = currentTick;
      const currentTier = 1 + Math.floor(currentTick / 90);
      const spawnChance = Math.min(0.82, 0.28 + currentTier * 0.05);
      const moved = notesRef.current
        .map((note) => ({ ...note, y: note.y + note.speed + currentTier * 0.22 }))
        .filter((note) => note.y <= 104);

      const missedCount = notesRef.current.length - moved.length;
      if (missedCount > 0) {
        for (let index = 0; index < missedCount; index += 1) {
          applyMiss("Missed beat.", 6);
          if (heartsRef.current <= 0) break;
        }
      }

      if (heartsRef.current <= 0 || phase !== "playing") return;

      if (Math.random() < spawnChance) {
        noteIdRef.current += 1;
        moved.push({
          id: noteIdRef.current,
          lane: Math.floor(Math.random() * LANE_COUNT),
          y: -8,
          speed: 1.9 + Math.random() * 1.6,
        });
      }

      notesRef.current = moved;
      setNotes(moved);
      setTicks(currentTick);

      if (currentTick >= SONG_TICKS) {
        finalize("encore", scoreRef.current);
      }
    }, 90);

    return () => window.clearInterval(interval);
  }, [applyMiss, finalize, phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "1" || key === "a") {
        event.preventDefault();
        hitLane(0);
      } else if (key === "2" || key === "s") {
        event.preventDefault();
        hitLane(1);
      } else if (key === "3" || key === "d") {
        event.preventDefault();
        hitLane(2);
      } else if (key === "4" || key === "f") {
        event.preventDefault();
        hitLane(3);
      } else if (key === "r") {
        event.preventDefault();
        restoreHeart();
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hitLane, phase, restoreHeart]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(232,121,249,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(192,132,252,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">Zone 119</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Prism Overdrive</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-fuchsia-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Hearts {hearts}/{START_HEARTS}</span>
            <span>Focus {focus}/{MAX_FOCUS}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-fuchsia-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="luna" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-fuchsia-100">Hit incoming notes in the prism band and hold streak through the full voyage set.</p>
                <PhysicalButton onClick={start} className="h-12 bg-fuchsia-400 px-8 text-sm font-black text-slate-950">
                  Start Prism Overdrive
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section key="playing" initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-fuchsia-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Tick {ticks}/{SONG_TICKS}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier}
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-4">
                {Array.from({ length: LANE_COUNT }, (_, lane) => (
                  <div key={`lane-${lane}`} className="relative h-72 overflow-hidden rounded-2xl border border-fuchsia-100/25 bg-black/30">
                    <p className="absolute left-1/2 top-2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.16em] text-fuchsia-200">
                      Lane {lane + 1}
                    </p>
                    {notes.filter((entry) => entry.lane === lane).map((entry) => (
                      <div
                        key={entry.id}
                        className={`absolute left-1/2 z-10 h-6 w-6 -translate-x-1/2 rounded-full border ${laneColor(lane)}`}
                        style={{ top: `${entry.y}%` }}
                      />
                    ))}
                    <div className="absolute bottom-[10%] left-2 right-2 h-2 rounded-full border border-fuchsia-200/60 bg-fuchsia-200/30" />
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-5">
                {[0, 1, 2, 3].map((lane) => (
                  <PhysicalButton key={`hit-${lane}`} onClick={() => hitLane(lane)} className="h-10 bg-fuchsia-300 text-xs font-black text-slate-950">
                    Hit {lane + 1} ({KEY_LABELS[lane]})
                  </PhysicalButton>
                ))}
                <PhysicalButton onClick={restoreHeart} disabled={focus <= 0 || hearts >= START_HEARTS} className="h-10 bg-fuchsia-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Breath Reset
                  </span>
                </PhysicalButton>
              </div>

              <div className="mt-3 flex justify-end">
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-fuchsia-300 px-4 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="luna" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Prism Overdrive Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-fuchsia-400 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    Resume
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={start} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">Restart</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="luna" mood={resolution === "encore" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "encore" ? "Prism Encore" : "Prism Drop"}
              </h3>
              <p className="mt-2 text-sm text-fuchsia-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={start} className="h-11 bg-fuchsia-400 px-7 text-sm font-black text-slate-950">
                  Replay Prism Overdrive
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
