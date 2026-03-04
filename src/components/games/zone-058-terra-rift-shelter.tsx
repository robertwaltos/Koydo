"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mountain, PauseCircle, PlayCircle, ShieldAlert, Users } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "secured" | "breached";

type ShelterOption = {
  label: string;
  safetyDelta: number;
  capacityDelta: number;
  pressureDelta: number;
  note: string;
};

type ShelterRound = {
  id: string;
  event: string;
  surge: number;
  options: [ShelterOption, ShelterOption, ShelterOption, ShelterOption];
};

const ROUND_COUNT = 15;
const START_SAFETY = 68;
const START_CAPACITY = 62;
const START_PRESSURE = 24;
const START_INTEGRITY = 4;

const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));

const ROUNDS: ShelterRound[] = [
  {
    id: "z058-r1",
    event: "Minor fissure opens below north shelter approach road.",
    surge: 8,
    options: [
      { label: "Deploy steel trusses", safetyDelta: 7, capacityDelta: -4, pressureDelta: -6, note: "Fast structural reinforcement." },
      { label: "Open detour lanes", safetyDelta: 3, capacityDelta: 5, pressureDelta: -2, note: "Maintains throughput." },
      { label: "Stockpile supplies only", safetyDelta: -2, capacityDelta: 7, pressureDelta: 4, note: "Capacity gain, risk rises." },
      { label: "Delay action", safetyDelta: -5, capacityDelta: 1, pressureDelta: 7, note: "Rift growth likely." },
    ],
  },
  {
    id: "z058-r2",
    event: "Aftershock wave destabilizes two evacuation bridges.",
    surge: 10,
    options: [
      { label: "Bridge lockdown + anchor drones", safetyDelta: 8, capacityDelta: -5, pressureDelta: -7, note: "Containment-first response." },
      { label: "Phased crossing schedule", safetyDelta: 4, capacityDelta: 3, pressureDelta: -3, note: "Balanced traffic control." },
      { label: "Push full crossing", safetyDelta: -4, capacityDelta: 8, pressureDelta: 6, note: "High throughput gamble." },
      { label: "Close all crossings", safetyDelta: 2, capacityDelta: -8, pressureDelta: 5, note: "Safety up, severe bottleneck." },
    ],
  },
  {
    id: "z058-r3",
    event: "Dust cloud reduces sensor visibility near intake towers.",
    surge: 9,
    options: [
      { label: "Activate lidar net", safetyDelta: 6, capacityDelta: -3, pressureDelta: -6, note: "Restores detection reliability." },
      { label: "Manual spotter teams", safetyDelta: 3, capacityDelta: -1, pressureDelta: -3, note: "Moderate response." },
      { label: "Skip scans to move faster", safetyDelta: -5, capacityDelta: 6, pressureDelta: 5, note: "Unsafe acceleration." },
      { label: "Suspend tower operation", safetyDelta: 1, capacityDelta: -7, pressureDelta: 4, note: "Protective but constraining." },
    ],
  },
  {
    id: "z058-r4",
    event: "Water line fracture threatens lower shelter coolant.",
    surge: 10,
    options: [
      { label: "Seal fracture with polymer mesh", safetyDelta: 7, capacityDelta: -4, pressureDelta: -7, note: "Reliable fix." },
      { label: "Reroute coolant channels", safetyDelta: 4, capacityDelta: -1, pressureDelta: -3, note: "Partial stabilization." },
      { label: "Increase draw from reserve tanks", safetyDelta: -2, capacityDelta: 5, pressureDelta: 4, note: "Short-term patch." },
      { label: "Ignore until next cycle", safetyDelta: -6, capacityDelta: 1, pressureDelta: 8, note: "Escalation risk." },
    ],
  },
  {
    id: "z058-r5",
    event: "Population surge arrives from eastern district.",
    surge: 11,
    options: [
      { label: "Open modular shelter pods", safetyDelta: 5, capacityDelta: 7, pressureDelta: -4, note: "Expands managed intake." },
      { label: "Stagger intake windows", safetyDelta: 3, capacityDelta: 4, pressureDelta: -2, note: "Moderate balancing." },
      { label: "Route overflow through unstable corridor", safetyDelta: -5, capacityDelta: 8, pressureDelta: 6, note: "Unsafe expansion." },
      { label: "Halt intake", safetyDelta: 2, capacityDelta: -9, pressureDelta: 7, note: "Pressure spikes externally." },
    ],
  },
  {
    id: "z058-r6",
    event: "Thermal vents spike beneath shelter foundation.",
    surge: 11,
    options: [
      { label: "Deploy vent dampers", safetyDelta: 8, capacityDelta: -4, pressureDelta: -8, note: "Best stabilization." },
      { label: "Rotate occupancy floors", safetyDelta: 3, capacityDelta: -2, pressureDelta: -3, note: "Reduces immediate exposure." },
      { label: "Run full power cooling", safetyDelta: -2, capacityDelta: 5, pressureDelta: 4, note: "Capacity preserved, heat stress remains." },
      { label: "Wait for vent cycle drop", safetyDelta: -6, capacityDelta: 1, pressureDelta: 8, note: "High hazard delay." },
    ],
  },
  {
    id: "z058-r7",
    event: "Comms lag causes delayed shelter routing updates.",
    surge: 9,
    options: [
      { label: "Patch relay mesh", safetyDelta: 6, capacityDelta: -2, pressureDelta: -6, note: "Restores coordination." },
      { label: "Switch to local dispatch", safetyDelta: 3, capacityDelta: 1, pressureDelta: -3, note: "Limited improvement." },
      { label: "Centralize all traffic anyway", safetyDelta: -4, capacityDelta: 5, pressureDelta: 5, note: "Overloads control path." },
      { label: "Pause routing updates", safetyDelta: -6, capacityDelta: -2, pressureDelta: 7, note: "Severe confusion risk." },
    ],
  },
  {
    id: "z058-r8",
    event: "Landslide blocks one of three emergency exits.",
    surge: 10,
    options: [
      { label: "Excavate with auto-dozers", safetyDelta: 7, capacityDelta: -3, pressureDelta: -6, note: "Clears path quickly." },
      { label: "Re-route to west ramp", safetyDelta: 3, capacityDelta: 2, pressureDelta: -2, note: "Operational compromise." },
      { label: "Force traffic through blocked route", safetyDelta: -5, capacityDelta: 6, pressureDelta: 6, note: "Unsafe congestion." },
      { label: "Shut exits and wait", safetyDelta: 1, capacityDelta: -8, pressureDelta: 8, note: "Critical queue build-up." },
    ],
  },
  {
    id: "z058-r9",
    event: "Food convoy delayed by debris field.",
    surge: 10,
    options: [
      { label: "Deploy drone resupply", safetyDelta: 5, capacityDelta: 6, pressureDelta: -4, note: "Stabilizes morale and intake." },
      { label: "Ration supplies short-term", safetyDelta: 3, capacityDelta: 2, pressureDelta: -2, note: "Buys limited time." },
      { label: "Ignore logistics gap", safetyDelta: -5, capacityDelta: -3, pressureDelta: 6, note: "System strain rises." },
      { label: "Evacuate without supplies", safetyDelta: -2, capacityDelta: 4, pressureDelta: 5, note: "Capacity gain, safety loss." },
    ],
  },
  {
    id: "z058-r10",
    event: "Rift tremor fractures shelter perimeter wall.",
    surge: 12,
    options: [
      { label: "Seal breach with adaptive foam", safetyDelta: 8, capacityDelta: -4, pressureDelta: -8, note: "Strong containment." },
      { label: "Layer temporary barriers", safetyDelta: 4, capacityDelta: -2, pressureDelta: -4, note: "Moderate fix." },
      { label: "Shift residents deeper only", safetyDelta: -2, capacityDelta: -3, pressureDelta: 4, note: "Pressure moves inward." },
      { label: "Do nothing until inspection", safetyDelta: -7, capacityDelta: 1, pressureDelta: 9, note: "Breach expansion likely." },
    ],
  },
  {
    id: "z058-r11",
    event: "Medical triage queue exceeds planned throughput.",
    surge: 11,
    options: [
      { label: "Open mobile med bays", safetyDelta: 6, capacityDelta: 7, pressureDelta: -5, note: "Raises resilience." },
      { label: "Prioritize critical path only", safetyDelta: 4, capacityDelta: 3, pressureDelta: -2, note: "Tactical triage." },
      { label: "Defer non-critical care indefinitely", safetyDelta: -4, capacityDelta: 4, pressureDelta: 5, note: "Delayed complications." },
      { label: "Freeze intake", safetyDelta: 2, capacityDelta: -8, pressureDelta: 7, note: "Queue pressure grows." },
    ],
  },
  {
    id: "z058-r12",
    event: "Heavy rain saturates slope above shelter roof.",
    surge: 12,
    options: [
      { label: "Install runoff channels", safetyDelta: 7, capacityDelta: -3, pressureDelta: -7, note: "Prevents roof load build." },
      { label: "Cycle roof pumps", safetyDelta: 4, capacityDelta: -1, pressureDelta: -3, note: "Partial mitigation." },
      { label: "Keep all pumps idle", safetyDelta: -6, capacityDelta: 2, pressureDelta: 7, note: "Flooding risk." },
      { label: "Evacuate roof floors only", safetyDelta: 1, capacityDelta: -5, pressureDelta: 4, note: "Capacity hit." },
    ],
  },
  {
    id: "z058-r13",
    event: "Seismic pulse knocks out two backup generators.",
    surge: 13,
    options: [
      { label: "Hot-swap power modules", safetyDelta: 7, capacityDelta: -4, pressureDelta: -8, note: "Rapid restoration." },
      { label: "Selective power rationing", safetyDelta: 4, capacityDelta: -2, pressureDelta: -3, note: "Controlled operation." },
      { label: "Run overloaded single generator", safetyDelta: -5, capacityDelta: 5, pressureDelta: 6, note: "Failure risk spikes." },
      { label: "Wait for external grid", safetyDelta: -7, capacityDelta: 1, pressureDelta: 9, note: "Too slow under surge." },
    ],
  },
  {
    id: "z058-r14",
    event: "Surface route map corrupted during evacuation wave.",
    surge: 12,
    options: [
      { label: "Restore map from signed backup", safetyDelta: 6, capacityDelta: 4, pressureDelta: -6, note: "Navigation confidence returns." },
      { label: "Manual checkpoint routing", safetyDelta: 3, capacityDelta: 2, pressureDelta: -2, note: "Slower but workable." },
      { label: "Broadcast unverified route data", safetyDelta: -5, capacityDelta: 5, pressureDelta: 6, note: "Misdirection risk." },
      { label: "Pause outbound movement", safetyDelta: 1, capacityDelta: -7, pressureDelta: 7, note: "Bottlenecks intensify." },
    ],
  },
  {
    id: "z058-r15",
    event: "Final mega-tremor hits all shelter sectors.",
    surge: 15,
    options: [
      { label: "Full containment protocol", safetyDelta: 9, capacityDelta: -5, pressureDelta: -10, note: "Best survival profile." },
      { label: "Sector stagger protocol", safetyDelta: 5, capacityDelta: 1, pressureDelta: -6, note: "Balanced final response." },
      { label: "Maximum throughput gamble", safetyDelta: -6, capacityDelta: 8, pressureDelta: 8, note: "High-risk final push." },
      { label: "Delay command until aftershock", safetyDelta: -9, capacityDelta: 1, pressureDelta: 12, note: "Likely breach." },
    ],
  },
];

export default function Zone058TerraRiftShelter() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [safety, setSafety] = useState(START_SAFETY);
  const [capacity, setCapacity] = useState(START_CAPACITY);
  const [pressure, setPressure] = useState(START_PRESSURE);
  const [integrity, setIntegrity] = useState(START_INTEGRITY);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("breached");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 5);
  const safetyFloor = 24 + tier * 2;
  const capacityFloor = 20 + tier * 2;
  const pressureCap = 58 - tier * 4;

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "secured" ? "cheering" : "sad");
    setMessage(
      nextResolution === "secured"
        ? "Terra: Rift shelters held. Civilians are safe."
        : "Terra: Shelter perimeter breached. Re-run triage with tighter control.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-058",
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
    setSafety(START_SAFETY);
    setCapacity(START_CAPACITY);
    setPressure(START_PRESSURE);
    setIntegrity(START_INTEGRITY);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("breached");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Terra: keep shelter safety/capacity healthy while pressure stays contained.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const option = round.options[optionIndex];
    if (!option) return;

    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const nextPressure = clamp(pressure + round.surge + option.pressureDelta, 0, 100);
    const pressureTax = Math.max(0, Math.floor(nextPressure / 26));
    const nextSafety = clamp(safety + option.safetyDelta - pressureTax, 0, 100);
    const nextCapacity = clamp(capacity + option.capacityDelta - Math.max(1, Math.floor(round.surge / 5)), 0, 100);

    const aligned =
      nextSafety >= safetyFloor &&
      nextCapacity >= capacityFloor &&
      nextPressure <= pressureCap;
    const severe =
      nextPressure >= 92 || nextSafety <= 8 || nextCapacity <= 8;

    const nextIntegrity = aligned ? integrity : Math.max(0, integrity - (severe ? 2 : 1));
    const nextCombo = aligned ? combo + 1 : 0;
    const nextScore = aligned
      ? score + 11 + Math.min(6, nextCombo)
      : Math.max(0, score - (severe ? 8 : 5));

    setSafety(nextSafety);
    setCapacity(nextCapacity);
    setPressure(nextPressure);
    setIntegrity(nextIntegrity);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setMood(aligned ? "happy" : "sad");
    setMessage(aligned ? "Shelter network stabilized this round." : option.note);
    if (aligned) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextIntegrity <= 0) {
        finalize("breached", nextScore);
        return;
      }
      if (finalRound) {
        finalize("secured", nextScore);
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(16,185,129,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(20,184,166,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Zone 058</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Rift Shelter</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-emerald-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Integrity {integrity}/{START_INTEGRITY}</span>
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
                  Command 15 emergency shelter events. Protect safety and capacity while keeping rift pressure below breach limits.
                </p>
                <ul className="space-y-1 text-xs text-emerald-100">
                  <li>Win condition: finish all events with integrity above zero.</li>
                  <li>Fail condition: severe instability drains integrity to zero.</li>
                  <li>Controls: click options or keys 1-4.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-emerald-400 px-8 text-sm font-black text-slate-950">
                  Start Shelter Run
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
                  <Mountain className="h-3.5 w-3.5" />
                  Event {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Surge +{round.surge}
                </span>
              </div>

              <h3 className="text-lg font-black text-white">{round.event}</h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Safety</p>
                  <p className="mt-1 text-xl font-black text-white">{safety}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-emerald-300" style={{ width: `${safety}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Capacity</p>
                  <p className="mt-1 text-xl font-black text-white">{capacity}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-sky-300" style={{ width: `${capacity}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Pressure</p>
                  <p className="mt-1 text-xl font-black text-white">{pressure}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-rose-300" style={{ width: `${pressure}%` }} />
                  </div>
                </div>
              </div>

              <p className="mt-3 inline-flex items-center gap-2 text-xs text-emerald-200">
                <Users className="h-3.5 w-3.5" />
                Keep safety ≥ {safetyFloor}, capacity ≥ {capacityFloor}, pressure ≤ {pressureCap}.
              </p>

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
                        Safety {option.safetyDelta >= 0 ? "+" : ""}{option.safetyDelta} | Capacity {option.capacityDelta >= 0 ? "+" : ""}{option.capacityDelta} | Pressure {option.pressureDelta >= 0 ? "+" : ""}{option.pressureDelta}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex justify-end">
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
              <h3 className="mt-3 text-2xl font-black text-white">Shelter Run Paused</h3>
              <p className="mt-2 text-sm text-emerald-100">Resume response or restart from event one.</p>
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
                <MascotFriend id="terra" mood={resolution === "secured" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "secured" ? "Shelter Network Secured" : "Shelter Network Breached"}
              </h3>
              <p className="mt-2 text-sm text-emerald-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-emerald-400 px-7 text-sm font-black text-slate-950">
                  Replay Shelter Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
