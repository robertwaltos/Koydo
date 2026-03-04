"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, PauseCircle, PlayCircle, ShieldAlert } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "balanced" | "collapse";

type TriageOption = {
  label: string;
  ecoDelta: number;
  reserveDelta: number;
  threatDelta: number;
  note: string;
};

type TriageRound = {
  id: string;
  incident: string;
  incomingThreat: number;
  options: [TriageOption, TriageOption, TriageOption, TriageOption];
};

const ROUND_COUNT = 16;
const START_ECO = 72;
const START_RESERVE = 68;
const START_THREAT = 18;
const START_STABILITY = 4;

const ROUNDS: TriageRound[] = [
  {
    id: "z049-r1",
    incident: "Mangrove edge is flooding after midnight surge.",
    incomingThreat: 10,
    options: [
      { label: "Deploy root anchors", ecoDelta: 7, reserveDelta: -7, threatDelta: -8, note: "Fast shoreline lock." },
      { label: "Throttle flood gates", ecoDelta: 3, reserveDelta: -3, threatDelta: -4, note: "Moderate control." },
      { label: "Divert reserves inland", ecoDelta: -2, reserveDelta: 7, threatDelta: 3, note: "Protect supply cache." },
      { label: "Wait for tide shift", ecoDelta: -6, reserveDelta: 1, threatDelta: 8, note: "Risky delay." },
    ],
  },
  {
    id: "z049-r2",
    incident: "Pollution plume detected above coral sector B.",
    incomingThreat: 11,
    options: [
      { label: "Send bio-filter swarm", ecoDelta: 8, reserveDelta: -6, threatDelta: -9, note: "High cleanup efficiency." },
      { label: "Seal sector borders", ecoDelta: 2, reserveDelta: -2, threatDelta: -5, note: "Containment first." },
      { label: "Boost turbine output", ecoDelta: -4, reserveDelta: 8, threatDelta: 6, note: "Power gain, ecological risk." },
      { label: "Monitor only", ecoDelta: -5, reserveDelta: 2, threatDelta: 7, note: "No direct intervention." },
    ],
  },
  {
    id: "z049-r3",
    incident: "Thermal spike is stressing seed vault coolant lines.",
    incomingThreat: 9,
    options: [
      { label: "Reroute chillant pumps", ecoDelta: 6, reserveDelta: -5, threatDelta: -7, note: "Stabilizes vault quickly." },
      { label: "Cycle standby fans", ecoDelta: 2, reserveDelta: -2, threatDelta: -4, note: "Lower cost control." },
      { label: "Draw from battery banks", ecoDelta: -1, reserveDelta: 6, threatDelta: 2, note: "Reserve-positive short-term." },
      { label: "Suspend vault intake", ecoDelta: -5, reserveDelta: 3, threatDelta: 6, note: "Protect power, harms biology." },
    ],
  },
  {
    id: "z049-r4",
    incident: "Wildfire ash is drifting toward canopy farms.",
    incomingThreat: 12,
    options: [
      { label: "Activate mist domes", ecoDelta: 8, reserveDelta: -8, threatDelta: -9, note: "Strong ecological shield." },
      { label: "Open vent corridors", ecoDelta: 3, reserveDelta: -3, threatDelta: -5, note: "Medium mitigation." },
      { label: "Divert drones to depot", ecoDelta: -3, reserveDelta: 7, threatDelta: 4, note: "Save fuel, lose canopy cover." },
      { label: "Delay until sunrise", ecoDelta: -7, reserveDelta: 1, threatDelta: 8, note: "High spread risk." },
    ],
  },
  {
    id: "z049-r5",
    incident: "Ground sensors report unstable methane pockets.",
    incomingThreat: 10,
    options: [
      { label: "Vent methane shafts", ecoDelta: 5, reserveDelta: -5, threatDelta: -8, note: "Reduces explosion chance." },
      { label: "Seal low-risk nodes", ecoDelta: 2, reserveDelta: -2, threatDelta: -4, note: "Conservative patch." },
      { label: "Harvest methane charge", ecoDelta: -4, reserveDelta: 8, threatDelta: 7, note: "Resource gain, high hazard." },
      { label: "Ignore anomaly", ecoDelta: -6, reserveDelta: 2, threatDelta: 9, note: "No active response." },
    ],
  },
  {
    id: "z049-r6",
    incident: "Invasive algae bloom is choking intake pipes.",
    incomingThreat: 11,
    options: [
      { label: "Release grazing pods", ecoDelta: 7, reserveDelta: -6, threatDelta: -8, note: "Biological counter." },
      { label: "Pulse intake grates", ecoDelta: 3, reserveDelta: -3, threatDelta: -5, note: "Mechanical cleanup." },
      { label: "Switch to reserve wells", ecoDelta: -2, reserveDelta: 7, threatDelta: 3, note: "Avoids bloom short-term." },
      { label: "Run full intake anyway", ecoDelta: -5, reserveDelta: 3, threatDelta: 8, note: "Throughput over safety." },
    ],
  },
  {
    id: "z049-r7",
    incident: "Wind shear is damaging solar canopy hinges.",
    incomingThreat: 12,
    options: [
      { label: "Deploy brace drones", ecoDelta: 6, reserveDelta: -6, threatDelta: -8, note: "Immediate structural defense." },
      { label: "Reduce panel angle", ecoDelta: 2, reserveDelta: -2, threatDelta: -4, note: "Small risk reduction." },
      { label: "Store generated power", ecoDelta: -3, reserveDelta: 8, threatDelta: 4, note: "Reserve gain, risk persists." },
      { label: "Keep full exposure", ecoDelta: -6, reserveDelta: 3, threatDelta: 9, note: "Output prioritized." },
    ],
  },
  {
    id: "z049-r8",
    incident: "River purification node has a membrane tear.",
    incomingThreat: 10,
    options: [
      { label: "Install emergency membrane", ecoDelta: 7, reserveDelta: -6, threatDelta: -8, note: "Stops contamination." },
      { label: "Throttle river inflow", ecoDelta: 3, reserveDelta: -2, threatDelta: -5, note: "Lower pressure fix." },
      { label: "Bypass to storage", ecoDelta: -2, reserveDelta: 7, threatDelta: 3, note: "Saves throughput." },
      { label: "Delay repair cycle", ecoDelta: -6, reserveDelta: 2, threatDelta: 8, note: "Risk grows quickly." },
    ],
  },
  {
    id: "z049-r9",
    incident: "Microplastics spike observed in wetland channels.",
    incomingThreat: 13,
    options: [
      { label: "Run micro-sieve sweep", ecoDelta: 8, reserveDelta: -7, threatDelta: -9, note: "Deep scrub operation." },
      { label: "Limit channel output", ecoDelta: 3, reserveDelta: -3, threatDelta: -5, note: "Partial containment." },
      { label: "Shift cargo priorities", ecoDelta: -3, reserveDelta: 7, threatDelta: 5, note: "Economy-first call." },
      { label: "Postpone response", ecoDelta: -7, reserveDelta: 2, threatDelta: 10, note: "Severe ecological drift." },
    ],
  },
  {
    id: "z049-r10",
    incident: "Subsurface quake jitters habitat support pillars.",
    incomingThreat: 12,
    options: [
      { label: "Inject support foam", ecoDelta: 6, reserveDelta: -7, threatDelta: -8, note: "Stabilizes foundation." },
      { label: "Redistribute mass load", ecoDelta: 2, reserveDelta: -3, threatDelta: -5, note: "Balanced structural move." },
      { label: "Harvest emergency ore", ecoDelta: -4, reserveDelta: 8, threatDelta: 5, note: "Reserve-first decision." },
      { label: "Continue normal ops", ecoDelta: -7, reserveDelta: 2, threatDelta: 9, note: "Unsafe under tremor." },
    ],
  },
  {
    id: "z049-r11",
    incident: "Night predators are breaching pollinator corridors.",
    incomingThreat: 11,
    options: [
      { label: "Deploy sonic barriers", ecoDelta: 7, reserveDelta: -6, threatDelta: -8, note: "Protects pollination path." },
      { label: "Close corridor gates", ecoDelta: 3, reserveDelta: -2, threatDelta: -5, note: "Moderate protection." },
      { label: "Shift guards to depot", ecoDelta: -3, reserveDelta: 7, threatDelta: 4, note: "Reserve preservation." },
      { label: "Observe predator pattern", ecoDelta: -6, reserveDelta: 2, threatDelta: 8, note: "High exposure window." },
    ],
  },
  {
    id: "z049-r12",
    incident: "Acid rain front is moving toward seed nurseries.",
    incomingThreat: 14,
    options: [
      { label: "Raise polymer canopy", ecoDelta: 8, reserveDelta: -8, threatDelta: -10, note: "Heavy-duty defense." },
      { label: "Apply neutralizer mist", ecoDelta: 4, reserveDelta: -4, threatDelta: -6, note: "Mid-tier protection." },
      { label: "Store water reserves", ecoDelta: -3, reserveDelta: 8, threatDelta: 5, note: "Resource-first tradeoff." },
      { label: "Delay countermeasures", ecoDelta: -8, reserveDelta: 2, threatDelta: 11, note: "Critical ecological risk." },
    ],
  },
  {
    id: "z049-r13",
    incident: "Cooling canal pumps are oscillating above limit.",
    incomingThreat: 13,
    options: [
      { label: "Replace impeller arrays", ecoDelta: 7, reserveDelta: -7, threatDelta: -9, note: "Stabilizes flow." },
      { label: "Reduce pump duty cycle", ecoDelta: 3, reserveDelta: -3, threatDelta: -5, note: "Safer but slower." },
      { label: "Push emergency throughput", ecoDelta: -4, reserveDelta: 8, threatDelta: 6, note: "Reserve-heavy gamble." },
      { label: "Hold current output", ecoDelta: -7, reserveDelta: 2, threatDelta: 9, note: "Failure risk rises." },
    ],
  },
  {
    id: "z049-r14",
    incident: "Drone hive latency causes delayed hazard response.",
    incomingThreat: 12,
    options: [
      { label: "Patch control mesh", ecoDelta: 6, reserveDelta: -6, threatDelta: -8, note: "Restores reaction speed." },
      { label: "Run manual watchdog", ecoDelta: 3, reserveDelta: -3, threatDelta: -5, note: "Human-in-loop fallback." },
      { label: "Conserve compute power", ecoDelta: -3, reserveDelta: 7, threatDelta: 4, note: "Keeps reserves high." },
      { label: "Ignore latency spikes", ecoDelta: -6, reserveDelta: 2, threatDelta: 9, note: "Compounding risk." },
    ],
  },
  {
    id: "z049-r15",
    incident: "Nutrient chain imbalance is reducing crop yield.",
    incomingThreat: 13,
    options: [
      { label: "Re-seed with adaptive mix", ecoDelta: 8, reserveDelta: -7, threatDelta: -9, note: "Best long-term stability." },
      { label: "Deploy targeted nutrients", ecoDelta: 4, reserveDelta: -4, threatDelta: -6, note: "Moderate correction." },
      { label: "Prioritize export quota", ecoDelta: -4, reserveDelta: 8, threatDelta: 5, note: "Reserves now, instability later." },
      { label: "Skip cultivation cycle", ecoDelta: -8, reserveDelta: 2, threatDelta: 10, note: "Severe ecological setback." },
    ],
  },
  {
    id: "z049-r16",
    incident: "Final storm cell approaching habitat core.",
    incomingThreat: 15,
    options: [
      { label: "Trigger full shield lattice", ecoDelta: 9, reserveDelta: -9, threatDelta: -11, note: "Maximum protection." },
      { label: "Segment core sectors", ecoDelta: 5, reserveDelta: -5, threatDelta: -7, note: "Controlled containment." },
      { label: "Preserve fuel reserves", ecoDelta: -4, reserveDelta: 9, threatDelta: 6, note: "High risk reserve save." },
      { label: "Ride out storm", ecoDelta: -9, reserveDelta: 2, threatDelta: 12, note: "Near-certain collapse." },
    ],
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function Zone049TerraHabitatTriage() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [ecoHealth, setEcoHealth] = useState(START_ECO);
  const [reserves, setReserves] = useState(START_RESERVE);
  const [threat, setThreat] = useState(START_THREAT);
  const [stability, setStability] = useState(START_STABILITY);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("collapse");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 4);
  const threatCap = Math.max(34, 62 - tier * 6);
  const ecoFloor = 26 + tier * 2;
  const reserveFloor = 24 + tier * 2;

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "balanced" ? "cheering" : "sad");
    setMessage(
      nextResolution === "balanced"
        ? "Terra: Habitat stabilized. You balanced ecology, reserves, and risk."
        : "Terra: Habitat collapse chain triggered. Re-run triage with tighter calls.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-049",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 14,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setEcoHealth(START_ECO);
    setReserves(START_RESERVE);
    setThreat(START_THREAT);
    setStability(START_STABILITY);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("collapse");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Terra: Keep threat contained while ecology and reserves stay above safety floors.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const option = round.options[optionIndex];
    if (!option) return;

    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const pressurePenalty = Math.max(1, Math.floor((round.incomingThreat + tier * 3) / 8));
    const nextThreat = clamp(threat + round.incomingThreat + option.threatDelta, 0, 100);
    const nextEco = clamp(ecoHealth + option.ecoDelta - Math.floor(nextThreat / 28), 0, 100);
    const nextReserve = clamp(reserves + option.reserveDelta - pressurePenalty, 0, 100);

    const success =
      nextThreat <= threatCap &&
      nextEco >= ecoFloor &&
      nextReserve >= reserveFloor;
    const severe = nextThreat >= 92 || nextEco <= 8 || nextReserve <= 8;
    const stabilityPenalty = success ? 0 : severe ? 2 : 1;
    const nextStability = Math.max(0, stability - stabilityPenalty);
    const nextCombo = success ? combo + 1 : 0;
    const nextScore = success
      ? score + 10 + Math.min(6, nextCombo) + Math.max(0, Math.round((70 - nextThreat) / 12))
      : Math.max(0, score - (severe ? 5 : 3));

    setThreat(nextThreat);
    setEcoHealth(nextEco);
    setReserves(nextReserve);
    setStability(nextStability);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setMood(success ? "happy" : "sad");
    setMessage(
      success
        ? `${option.label} worked. Habitat stayed inside safe limits.`
        : `${option.label} drifted outside safe range. ${option.note}`,
    );
    if (success) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextStability <= 0 || nextThreat >= 100 || nextEco <= 0 || nextReserve <= 0) {
        finalize("collapse", nextScore);
        return;
      }
      if (finalRound) {
        finalize("balanced", nextScore);
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(52,211,153,0.24),transparent_44%),radial-gradient(circle_at_84%_78%,rgba(16,185,129,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Zone 049</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Habitat Triage</h2>
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
                  Run 16 habitat incidents. Choose actions that keep threat low while ecology and reserves remain stable.
                </p>
                <ul className="space-y-1 text-xs text-emerald-100">
                  <li>Win condition: finish all incidents with stability above zero.</li>
                  <li>Fail condition: stability collapse, threat overflow, or depleted ecology/reserves.</li>
                  <li>Controls: click options or keys 1-4.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-emerald-400 px-8 text-sm font-black text-slate-950">
                  Start Triage Run
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
                  <Leaf className="h-3.5 w-3.5" />
                  Incident {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Threat cap {threatCap}
                </span>
              </div>

              <h3 className="text-lg font-black text-white">{round.incident}</h3>
              <p className="mt-1 text-xs text-emerald-100">
                Incoming threat pulse: +{round.incomingThreat}. Keep eco &ge; {ecoFloor}, reserves &ge; {reserveFloor}.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Ecology</p>
                  <p className="mt-1 text-xl font-black text-white">{ecoHealth}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-emerald-300" style={{ width: `${ecoHealth}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Reserves</p>
                  <p className="mt-1 text-xl font-black text-white">{reserves}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-cyan-300" style={{ width: `${reserves}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Threat</p>
                  <p className="mt-1 text-xl font-black text-white">{threat}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-rose-300" style={{ width: `${threat}%` }} />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {round.options.map((option, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-emerald-300/70 bg-emerald-400/20"
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
                        Eco {option.ecoDelta >= 0 ? "+" : ""}{option.ecoDelta} | Reserve {option.reserveDelta >= 0 ? "+" : ""}{option.reserveDelta} | Threat {option.threatDelta >= 0 ? "+" : ""}{option.threatDelta}
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
              <h3 className="mt-3 text-2xl font-black text-white">Triage Paused</h3>
              <p className="mt-2 text-sm text-emerald-100">Resume this incident or restart from round one.</p>
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
                <MascotFriend id="terra" mood={resolution === "balanced" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "balanced" ? "Habitat Stabilized" : "Habitat Collapsed"}
              </h3>
              <p className="mt-2 text-sm text-emerald-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <p className="mt-2 text-xs text-emerald-200">
                Final ecology {ecoHealth}, reserves {reserves}, threat {threat}.
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-emerald-400 px-7 text-sm font-black text-slate-950">
                  Replay Triage
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
