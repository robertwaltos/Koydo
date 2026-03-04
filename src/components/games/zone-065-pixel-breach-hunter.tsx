"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, Radar, ShieldAlert, Target } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "contained" | "breached";
type BreachKind = "hostile" | "decoy";

type Breach = {
  id: number;
  lane: number;
  y: number;
  kind: BreachKind;
};

const LANE_COUNT = 3;
const START_LIVES = 4;
const TARGET_PROGRESS = 1400;
const TICK_MS = 120;

function breachGlyph(kind: BreachKind) {
  return kind === "hostile" ? "H" : "D";
}

function breachClass(kind: BreachKind) {
  return kind === "hostile"
    ? "border-rose-300/80 bg-rose-400/25 text-rose-100"
    : "border-amber-300/80 bg-amber-400/25 text-amber-100";
}

export default function Zone065PixelBreachHunter() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [lives, setLives] = useState(START_LIVES);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [progress, setProgress] = useState(0);
  const [breaches, setBreaches] = useState<Breach[]>([]);
  const [resolution, setResolution] = useState<Resolution>("breached");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const breachIdRef = useRef(0);
  const livesRef = useRef(lives);
  const scoreRef = useRef(score);
  const comboRef = useRef(combo);
  const bestComboRef = useRef(bestCombo);
  const progressRef = useRef(progress);
  const breachesRef = useRef(breaches);

  useEffect(() => {
    livesRef.current = lives;
    scoreRef.current = score;
    comboRef.current = combo;
    bestComboRef.current = bestCombo;
    progressRef.current = progress;
    breachesRef.current = breaches;
  }, [lives, score, combo, bestCombo, progress, breaches]);

  const progressPct = useMemo(() => Math.min(100, Math.round((progress / TARGET_PROGRESS) * 100)), [progress]);
  const tier = useMemo(() => 1 + Math.floor(progress / 260), [progress]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "contained" ? "cheering" : "sad");
    setMessage(
      nextResolution === "contained"
        ? "Pixel: all breach waves contained."
        : "Pixel: breach slipped through defenses.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-065",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TARGET_PROGRESS * 2,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setLives(START_LIVES);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setProgress(0);
    setBreaches([]);
    setResolution("breached");
    setInteractions(0);
    breachIdRef.current = 0;
    livesRef.current = START_LIVES;
    scoreRef.current = 0;
    comboRef.current = 0;
    bestComboRef.current = 0;
    progressRef.current = 0;
    breachesRef.current = [];
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Pixel: intercept hostiles on the correct lane; avoid decoys.");
    void hapticSelection();
  };

  const restart = () => start();

  const intercept = (lane: number) => {
    if (phase !== "playing") return;
    const current = [...breachesRef.current];
    const hitTop = 82;
    const hitBottom = 100;

    let targetIndex = -1;
    for (let index = 0; index < current.length; index += 1) {
      const breach = current[index];
      if (!breach || breach.lane !== lane) continue;
      if (breach.y >= hitTop && breach.y <= hitBottom) {
        targetIndex = index;
        break;
      }
    }

    let nextLives = livesRef.current;
    let nextScore = scoreRef.current;
    let nextCombo = comboRef.current;
    let nextBestCombo = bestComboRef.current;
    let nextBreaches = current;

    if (targetIndex === -1) {
      nextCombo = 0;
      nextScore = Math.max(0, nextScore - 2);
      setMood("thinking");
      setMessage("No lock in lane window.");
      void hapticError();
    } else {
      const breach = current[targetIndex];
      nextBreaches = current.filter((_, idx) => idx !== targetIndex);
      if (breach?.kind === "hostile") {
        nextCombo += 1;
        nextBestCombo = Math.max(nextBestCombo, nextCombo);
        nextScore += 10 + Math.min(6, nextCombo);
        setMood("happy");
        setMessage("Hostile contained.");
        void hapticSuccess();
      } else {
        nextLives -= 1;
        nextCombo = 0;
        nextScore = Math.max(0, nextScore - 7);
        setMood("sad");
        setMessage("Decoy strike. Integrity hit.");
        void hapticError();
      }
    }

    livesRef.current = nextLives;
    scoreRef.current = nextScore;
    comboRef.current = nextCombo;
    bestComboRef.current = nextBestCombo;
    breachesRef.current = nextBreaches;

    setLives(nextLives);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);
    setBreaches(nextBreaches);
    setInteractions((value) => value + 1);

    if (nextLives <= 0) {
      finalize("breached", nextScore);
    }
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const loop = window.setInterval(() => {
      const currentLives = livesRef.current;
      const currentScore = scoreRef.current;
      const currentCombo = comboRef.current;
      const currentBest = bestComboRef.current;
      const currentProgress = progressRef.current;
      const currentBreaches = breachesRef.current;

      const currentTier = 1 + Math.floor(currentProgress / 260);
      const speed = 3.2 + currentTier * 0.75;
      const spawnChance = Math.min(0.6, 0.2 + currentTier * 0.05);
      const hostileChance = Math.max(0.62, 0.84 - currentTier * 0.03);

      let nextLives = currentLives;
      let nextScore = currentScore;
      let nextCombo = currentCombo;
      const nextBest = currentBest;
      const nextProgress = Math.min(TARGET_PROGRESS, currentProgress + 1 + currentTier * 0.33);

      let shifted = currentBreaches.map((breach) => ({ ...breach, y: breach.y + speed }));
      const kept: Breach[] = [];
      for (const breach of shifted) {
        if (breach.y > 104) {
          if (breach.kind === "hostile") {
            nextLives -= 1;
            nextCombo = 0;
            nextScore = Math.max(0, nextScore - 5);
          }
          continue;
        }
        kept.push(breach);
      }
      shifted = kept;

      if (Math.random() < spawnChance) {
        const lane = Math.floor(Math.random() * LANE_COUNT);
        const kind: BreachKind = Math.random() < hostileChance ? "hostile" : "decoy";
        breachIdRef.current += 1;
        shifted.push({ id: breachIdRef.current, lane, y: -10, kind });
      }

      livesRef.current = nextLives;
      scoreRef.current = nextScore;
      comboRef.current = nextCombo;
      bestComboRef.current = nextBest;
      progressRef.current = nextProgress;
      breachesRef.current = shifted;

      setLives(nextLives);
      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBest);
      setProgress(nextProgress);
      setBreaches(shifted);

      if (nextLives <= 0) {
        finalize("breached", nextScore);
        return;
      }
      if (nextProgress >= TARGET_PROGRESS) {
        finalize("contained", nextScore);
      }
    }, TICK_MS);
    return () => window.clearInterval(loop);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1" || event.key.toLowerCase() === "a") {
        event.preventDefault();
        intercept(0);
      } else if (event.key === "2" || event.key.toLowerCase() === "s") {
        event.preventDefault();
        intercept(1);
      } else if (event.key === "3" || event.key.toLowerCase() === "d") {
        event.preventDefault();
        intercept(2);
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, intercept]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-sky-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(14,165,233,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-200">Zone 065</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pixel Breach Hunter</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-sky-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Lives {lives}/{START_LIVES}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-sky-300" animate={{ width: `${progressPct}%` }} transition={{ duration: 0.15 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-sky-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-sky-100">Contain continuous breach waves across 3 lanes and survive to full route completion.</p>
                <PhysicalButton onClick={start} className="h-12 bg-sky-400 px-8 text-sm font-black text-slate-950">
                  Start Breach Hunt
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section key="playing" initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-sky-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-sky-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <Radar className="h-3.5 w-3.5" />
                  Tier {tier}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Progress {Math.floor(progress)}/{TARGET_PROGRESS}
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                {Array.from({ length: LANE_COUNT }, (_, lane) => (
                  <div key={`lane-${lane}`} className="relative h-72 overflow-hidden rounded-2xl border border-sky-100/25 bg-black/30">
                    <p className="absolute left-1/2 top-2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.16em] text-sky-200">Lane {lane + 1}</p>
                    {breaches.filter((entry) => entry.lane === lane).map((entry) => (
                      <div key={entry.id} className={`absolute left-1/2 z-10 h-8 w-8 -translate-x-1/2 rounded-full border text-center text-xs font-black leading-8 ${breachClass(entry.kind)}`} style={{ top: `${entry.y}%` }}>
                        {breachGlyph(entry.kind)}
                      </div>
                    ))}
                    <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 0.55, repeat: Infinity }} className="absolute bottom-3 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-sky-300/80 bg-sky-400/30 text-base font-black">
                      {lane + 1}
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {[0, 1, 2].map((lane) => (
                  <PhysicalButton key={`lane-btn-${lane}`} onClick={() => intercept(lane)} className="h-10 bg-sky-300 text-xs font-black text-slate-950">
                    <span className="inline-flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      Lane {lane + 1}
                    </span>
                  </PhysicalButton>
                ))}
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-sky-300 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Breach Hunt Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-sky-400 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    Resume
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">
                  Restart
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood={resolution === "contained" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "contained" ? "Breach Waves Contained" : "Breach Network Failed"}
              </h3>
              <p className="mt-2 text-sm text-sky-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-sky-400 px-7 text-sm font-black text-slate-950">
                  Replay Breach Hunt
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
