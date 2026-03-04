"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
type Resolution = "encore" | "fadeout";

type MixCard = {
  label: string;
  adjust: [number, number, number];
};

type SetRound = {
  id: string;
  prompt: string;
  target: [number, number, number];
  drift: [number, number, number];
  options: [MixCard, MixCard, MixCard, MixCard];
};

const ROUND_COUNT = 15;
const START_TRUST = 4;
const MAX_SPOTLIGHT = 3;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function seeded(seed: string) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) | 0;
  }
  return () => {
    hash = (hash * 1664525 + 1013904223) | 0;
    return ((hash >>> 0) % 10_000) / 10_000;
  };
}

function buildRound(roundIndex: number): SetRound {
  const rand = seeded(`zone-149:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 5);
  const target: [number, number, number] = [
    42 + Math.floor(rand() * 20) + tier,
    44 + Math.floor(rand() * 18) + Math.floor(tier / 2),
    40 + Math.floor(rand() * 22) + Math.floor(tier / 2),
  ];
  const driftScale = 5 + tier * 2;
  const drift: [number, number, number] = [
    Math.floor(rand() * (driftScale * 2 + 1)) - driftScale,
    Math.floor(rand() * (driftScale * 2 + 1)) - driftScale,
    Math.floor(rand() * (driftScale * 2 + 1)) - driftScale,
  ];
  const power = 4 + tier;
  const base: MixCard[] = [
    { label: "Bassline drive", adjust: [power + 2, -(power - 2), power - 3] },
    { label: "Harmony bloom", adjust: [-(power - 2), power + 2, power - 2] },
    { label: "Neon bridge", adjust: [power - 3, power - 3, power + 2] },
    { label: "Reset break", adjust: [1, 1, 1] },
  ];
  const rotateBy = (roundIndex + Math.floor(rand() * 4)) % 4;
  const rotated = base.slice(rotateBy).concat(base.slice(0, rotateBy));
  const prompts = [
    "Crowd pulse is drifting off your core tempo.",
    "Bridge segment needs cleaner harmonic focus.",
    "Stage energy surged faster than forecast.",
    "Chorus handoff came in with unstable sync.",
    "Skyline lights demand tighter rhythm-harmony lock.",
  ];

  return {
    id: `z149-r${roundIndex + 1}`,
    prompt: `Set ${roundIndex + 1}: ${prompts[Math.floor(rand() * prompts.length)] ?? prompts[0]}`,
    target,
    drift,
    options: [rotated[0]!, rotated[1]!, rotated[2]!, rotated[3]!],
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone149LunaSkylineSet() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [rhythm, setRhythm] = useState(52);
  const [harmony, setHarmony] = useState(50);
  const [energy, setEnergy] = useState(54);
  const [trust, setTrust] = useState(START_TRUST);
  const [spotlight, setSpotlight] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("fadeout");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const tier = 1 + Math.floor(roundIndex / 5);
  const tolerance = Math.max(8, 15 - tier * 2);
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "encore" ? "cheering" : "sad");
    setMessage(
      nextResolution === "encore"
        ? "Luna: skyline set hit full encore."
        : "Luna: set faded out before final drop.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-149",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 26,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setRhythm(52);
    setHarmony(50);
    setEnergy(54);
    setTrust(START_TRUST);
    setSpotlight(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("fadeout");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Luna: keep rhythm, harmony, and energy locked to the stage targets.");
    void hapticSelection();
  };

  const restart = () => start();

  const spotlightReset = () => {
    if (phase !== "playing" || spotlight <= 0 || trust >= START_TRUST) return;
    setSpotlight((value) => value - 1);
    setTrust((value) => Math.min(START_TRUST, value + 1));
    setRhythm((value) => clamp(value + Math.round((52 - value) * 0.3), 0, 100));
    setHarmony((value) => clamp(value + Math.round((52 - value) * 0.3), 0, 100));
    setEnergy((value) => clamp(value + Math.round((52 - value) * 0.3), 0, 100));
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Spotlight reset recovered crowd trust.");
    void hapticSelection();
  };

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const mix = round.options[optionIndex];
    if (!mix) return;
    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const nextRhythm = clamp(rhythm + round.drift[0] + mix.adjust[0], 0, 100);
    const nextHarmony = clamp(harmony + round.drift[1] + mix.adjust[1], 0, 100);
    const nextEnergy = clamp(energy + round.drift[2] + mix.adjust[2], 0, 100);

    const errors = [
      Math.abs(nextRhythm - round.target[0]),
      Math.abs(nextHarmony - round.target[1]),
      Math.abs(nextEnergy - round.target[2]),
    ];
    const success = errors.every((error) => error <= tolerance);
    const perfect = errors.every((error) => error <= Math.max(4, Math.floor(tolerance / 2)));
    const severe = errors.some((error) => error >= tolerance + 9);
    const atFinalRound = roundIndex >= ROUND_COUNT - 1;

    let nextTrust = trust;
    let nextSpotlight = spotlight;
    const nextCombo = success ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    let nextScore = score;

    if (success) {
      nextScore += 12 + Math.min(9, nextCombo);
      if (perfect) {
        nextSpotlight = Math.min(MAX_SPOTLIGHT, nextSpotlight + 1);
        setMessage("Perfect drop. +1 spotlight.");
      } else {
        setMessage("Crowd lock maintained.");
      }
      setMood("happy");
      void hapticSuccess();
    } else if (nextSpotlight > 0) {
      nextSpotlight -= 1;
      nextScore = Math.max(0, nextScore - (severe ? 6 : 4));
      setMood("thinking");
      setMessage("Spotlight absorbed the rough transition.");
      void hapticSelection();
    } else {
      nextTrust = Math.max(0, nextTrust - 1);
      nextScore = Math.max(0, nextScore - (severe ? 10 : 7));
      setMood("sad");
      setMessage("Set drifted. Crowd trust dropped.");
      void hapticError();
    }

    setRhythm(nextRhythm);
    setHarmony(nextHarmony);
    setEnergy(nextEnergy);
    setTrust(nextTrust);
    setSpotlight(nextSpotlight);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);
    setScore(nextScore);

    window.setTimeout(() => {
      if (nextTrust <= 0) {
        finalize("fadeout", nextScore);
        return;
      }
      if (atFinalRound) {
        finalize("encore", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedIndex(null);
    }, 540);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        choose(Number(event.key) - 1);
      } else if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        spotlightReset();
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose, spotlightReset]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(244,114,182,0.26),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(168,85,247,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">Zone 149</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Skyline Set</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-fuchsia-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Trust {trust}/{START_TRUST}</span>
            <span>Spotlight {spotlight}/{MAX_SPOTLIGHT}</span>
          </div>
        </div>
        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-fuchsia-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-fuchsia-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="luna" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-fuchsia-100">Build a full 15-set skyline performance without crowd trust collapse.</p>
                <PhysicalButton onClick={start} className="h-12 bg-fuchsia-400 px-8 text-sm font-black text-slate-950">
                  Start Set
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-fuchsia-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Set {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Tol ±{tolerance}
                </span>
              </div>
              <p className="text-sm text-fuchsia-100">{round.prompt}</p>
              <div className="mt-3 grid gap-2 text-xs text-fuchsia-100 sm:grid-cols-3">
                <p className="rounded-xl border border-fuchsia-100/25 bg-fuchsia-100/10 px-3 py-2">
                  Rhythm {rhythm} | Target {round.target[0]} | Drift {round.drift[0] >= 0 ? "+" : ""}{round.drift[0]}
                </p>
                <p className="rounded-xl border border-fuchsia-100/25 bg-fuchsia-100/10 px-3 py-2">
                  Harmony {harmony} | Target {round.target[1]} | Drift {round.drift[1] >= 0 ? "+" : ""}{round.drift[1]}
                </p>
                <p className="rounded-xl border border-fuchsia-100/25 bg-fuchsia-100/10 px-3 py-2">
                  Energy {energy} | Target {round.target[2]} | Drift {round.drift[2] >= 0 ? "+" : ""}{round.drift[2]}
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {round.options.map((mix, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-fuchsia-300/80 bg-fuchsia-400/20"
                    : "border-fuchsia-100/25 bg-fuchsia-100/10 hover:bg-fuchsia-100/20";
                  return (
                    <button
                      key={`${round.id}-${mix.label}-${optionIndex}`}
                      type="button"
                      disabled={selectedIndex !== null}
                      onClick={() => choose(optionIndex)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">
                        <span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>
                        {mix.label}
                      </p>
                      <p className="mt-1 text-xs text-fuchsia-100">
                        R {mix.adjust[0] >= 0 ? "+" : ""}{mix.adjust[0]} | H {mix.adjust[1] >= 0 ? "+" : ""}{mix.adjust[1]} | E {mix.adjust[2] >= 0 ? "+" : ""}{mix.adjust[2]}
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <PhysicalButton
                  onClick={spotlightReset}
                  disabled={spotlight <= 0 || trust >= START_TRUST}
                  className="h-10 bg-fuchsia-300 text-xs font-black text-slate-950 disabled:opacity-40"
                >
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Spotlight Reset
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-fuchsia-300 text-xs font-black text-slate-950">
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
              <h3 className="mt-3 text-2xl font-black text-white">Set Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-fuchsia-400 px-6 text-sm font-black text-slate-950">
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
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="luna" mood={resolution === "encore" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "encore" ? "Skyline Encore" : "Set Fadeout"}
              </h3>
              <p className="mt-2 text-sm text-fuchsia-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-fuchsia-400 px-7 text-sm font-black text-slate-950">
                  Replay Set
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

