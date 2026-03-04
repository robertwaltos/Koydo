"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloudRain, PauseCircle, PlayCircle, Thermometer, Wind } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "forecast-secured" | "storm-failure";

type ClimateVector = {
  temp: number;
  humidity: number;
  wind: number;
};

type CommandOption = {
  label: string;
  delta: ClimateVector;
  note: string;
};

type WeatherRound = {
  id: string;
  summary: string;
  target: ClimateVector;
  front: ClimateVector;
  options: [CommandOption, CommandOption, CommandOption, CommandOption];
};

const ROUND_COUNT = 14;
const START_STABILITY = 4;
const START_CLIMATE: ClimateVector = { temp: 50, humidity: 50, wind: 50 };

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

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function buildRound(roundIndex: number): WeatherRound {
  const tier = 1 + Math.floor(roundIndex / 4);
  const rand = seeded(`zone-054:${roundIndex + 1}`);
  const target: ClimateVector = {
    temp: 34 + Math.floor(rand() * 34),
    humidity: 28 + Math.floor(rand() * 44),
    wind: 24 + Math.floor(rand() * 46),
  };
  const front: ClimateVector = {
    temp: -8 + Math.floor(rand() * 17),
    humidity: -10 + Math.floor(rand() * 21),
    wind: -9 + Math.floor(rand() * 19),
  };
  const boost = Math.min(4, tier + 1);
  return {
    id: `z054-r${roundIndex + 1}`,
    summary: `Weather front ${roundIndex + 1}: align climate profile to regional target.`,
    target,
    front,
    options: [
      {
        label: "Solar Mirror Array",
        delta: { temp: 5 + boost, humidity: -3, wind: 2 + Math.floor(boost / 2) },
        note: "Raises heat and accelerates wind lanes.",
      },
      {
        label: "Marine Mist Curtain",
        delta: { temp: -4, humidity: 6 + boost, wind: -2 },
        note: "Cools and humidifies the corridor.",
      },
      {
        label: "Jetstream Dampers",
        delta: { temp: -1, humidity: -2, wind: -(5 + boost) },
        note: "Suppresses wind velocity spikes.",
      },
      {
        label: "Pressure Vent Pulse",
        delta: { temp: 3, humidity: -(4 + Math.floor(boost / 2)), wind: 4 + boost },
        note: "Aggressive pressure release maneuver.",
      },
    ],
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

function errorSum(a: ClimateVector, b: ClimateVector) {
  return Math.abs(a.temp - b.temp) + Math.abs(a.humidity - b.humidity) + Math.abs(a.wind - b.wind);
}

export default function Zone054TerraWeatherCommand() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [climate, setClimate] = useState<ClimateVector>(START_CLIMATE);
  const [stability, setStability] = useState(START_STABILITY);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("storm-failure");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 4);
  const tolerance = Math.max(3, 8 - tier);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "forecast-secured" ? "cheering" : "sad");
    setMessage(
      nextResolution === "forecast-secured"
        ? "Terra: Weather command secured. Regional systems are stable."
        : "Terra: Storm command failed. Retry with tighter climate vector control.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-054",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 24,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setClimate(START_CLIMATE);
    setStability(START_STABILITY);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("storm-failure");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Terra: Combine weather commands to match each target climate vector.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const option = round.options[optionIndex];
    if (!option) return;

    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const nextClimate: ClimateVector = {
      temp: clamp(climate.temp + round.front.temp + option.delta.temp, 0, 100),
      humidity: clamp(climate.humidity + round.front.humidity + option.delta.humidity, 0, 100),
      wind: clamp(climate.wind + round.front.wind + option.delta.wind, 0, 100),
    };

    const tempError = Math.abs(nextClimate.temp - round.target.temp);
    const humidityError = Math.abs(nextClimate.humidity - round.target.humidity);
    const windError = Math.abs(nextClimate.wind - round.target.wind);
    const aligned = tempError <= tolerance && humidityError <= tolerance && windError <= tolerance;
    const severeDrift = nextClimate.temp <= 8 || nextClimate.temp >= 92 || nextClimate.wind <= 8 || nextClimate.wind >= 92;

    const nextStability = aligned ? stability : Math.max(0, stability - (severeDrift ? 2 : 1));
    const nextCombo = aligned ? combo + 1 : 0;
    const nextScore = aligned
      ? score + 12 + Math.min(6, nextCombo)
      : Math.max(0, score - (severeDrift ? 7 : 4) - Math.floor(errorSum(nextClimate, round.target) / 18));

    setClimate(nextClimate);
    setStability(nextStability);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setMood(aligned ? "happy" : "sad");
    setMessage(
      aligned
        ? "Forecast aligned to target corridor."
        : `Drift detected T${tempError}/H${humidityError}/W${windError}.`,
    );
    if (aligned) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextStability <= 0) {
        finalize("storm-failure", nextScore);
        return;
      }
      if (finalRound) {
        finalize("forecast-secured", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedIndex(null);
    }, 560);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        choose(Number(event.key) - 1);
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-emerald-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(16,185,129,0.24),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(34,197,94,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Zone 054</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Weather Command</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-emerald-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Stability {stability}/{START_STABILITY}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-emerald-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-emerald-200/25 bg-black/35 p-6 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="terra" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-emerald-100">
                  Execute weather commands to match target climate vectors across 14 escalating storm fronts.
                </p>
                <ul className="space-y-1 text-xs text-emerald-100">
                  <li>Win condition: complete all fronts with stability above zero.</li>
                  <li>Fail condition: stability collapse from repeated vector drift.</li>
                  <li>Controls: click command cards or keys 1-4.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-emerald-400 px-8 text-sm font-black text-slate-950">
                  Start Weather Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section
              key={round.id}
              initial={{ opacity: 0.2, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-emerald-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <CloudRain className="h-3.5 w-3.5" />
                  Front {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <Wind className="h-3.5 w-3.5" />
                  Tier {tier} | tolerance ±{tolerance}
                </span>
              </div>

              <p className="text-sm text-emerald-100">{round.summary}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Temperature</p>
                  <p className="mt-1 text-xl font-black text-white">{climate.temp}</p>
                  <p className="text-[11px] text-emerald-100">Target {round.target.temp} | Front {round.front.temp >= 0 ? "+" : ""}{round.front.temp}</p>
                </div>
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Humidity</p>
                  <p className="mt-1 text-xl font-black text-white">{climate.humidity}</p>
                  <p className="text-[11px] text-emerald-100">Target {round.target.humidity} | Front {round.front.humidity >= 0 ? "+" : ""}{round.front.humidity}</p>
                </div>
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Wind</p>
                  <p className="mt-1 text-xl font-black text-white">{climate.wind}</p>
                  <p className="text-[11px] text-emerald-100">Target {round.target.wind} | Front {round.front.wind >= 0 ? "+" : ""}{round.front.wind}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {round.options.map((option, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-emerald-300/80 bg-emerald-400/20"
                    : "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20";
                  return (
                    <button
                      key={`${round.id}-${option.label}`}
                      type="button"
                      disabled={selectedIndex !== null}
                      onClick={() => choose(optionIndex)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">
                        <span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>
                        {option.label}
                      </p>
                      <p className="mt-1 text-xs text-emerald-100">{option.note}</p>
                      <p className="mt-2 text-[11px] font-bold text-emerald-200">
                        T {option.delta.temp >= 0 ? "+" : ""}{option.delta.temp} | H {option.delta.humidity >= 0 ? "+" : ""}{option.delta.humidity} | W {option.delta.wind >= 0 ? "+" : ""}{option.delta.wind}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-xs text-emerald-200">
                  <Thermometer className="h-3.5 w-3.5" />
                  Multi-axis control: temperature, humidity, and wind must align together.
                </p>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-emerald-300 px-4 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section
              key="paused"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-emerald-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="terra" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Forecast Paused</h3>
              <p className="mt-2 text-sm text-emerald-100">Resume this front or restart the weather command run.</p>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-emerald-400 px-6 text-sm font-black text-slate-950">
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
            <motion.section
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-emerald-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="terra" mood={resolution === "forecast-secured" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "forecast-secured" ? "Forecast Secured" : "Storm Failure"}
              </h3>
              <p className="mt-2 text-sm text-emerald-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-emerald-400 px-7 text-sm font-black text-slate-950">
                  Replay Weather Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
