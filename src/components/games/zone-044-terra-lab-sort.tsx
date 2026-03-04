"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Beaker, Leaf, ShieldCheck, TriangleAlert } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "complete";
type Resolution = "secured" | "contaminated";

type Specimen = {
  id: string;
  name: string;
  origin: "bio" | "geo";
  toxicity: "safe" | "hazard";
  hint: string;
};

const TOTAL_SPECIMENS = 12;
const STARTING_HEALTH = 4;

const SPECIMEN_POOL: Specimen[] = [
  { id: "sp-1", name: "Fern Spore Cluster", origin: "bio", toxicity: "safe", hint: "Plant micro-particles from greenhouse vent." },
  { id: "sp-2", name: "Cobalt Dust Vein", origin: "geo", toxicity: "hazard", hint: "Metallic mineral fragment with heat signature." },
  { id: "sp-3", name: "Mangrove Root Gel", origin: "bio", toxicity: "safe", hint: "Organic gel from coastal root systems." },
  { id: "sp-4", name: "Sulfur Crystal Thread", origin: "geo", toxicity: "hazard", hint: "Volatile crystal strands, reactive to moisture." },
  { id: "sp-5", name: "Pollen Matrix", origin: "bio", toxicity: "safe", hint: "Airborne bloom sample from meadow dome." },
  { id: "sp-6", name: "Basalt Vapor Residue", origin: "geo", toxicity: "hazard", hint: "Thermal rock vapor from vent chamber." },
  { id: "sp-7", name: "Mycelium Fiber", origin: "bio", toxicity: "safe", hint: "Fungal network filament with stable profile." },
  { id: "sp-8", name: "Mercury Shale Flake", origin: "geo", toxicity: "hazard", hint: "Mineral flake with contamination index warning." },
  { id: "sp-9", name: "Lotus Biofoam", origin: "bio", toxicity: "safe", hint: "Aquatic botanical foam with neutral reading." },
  { id: "sp-10", name: "Arsenic Ore Mist", origin: "geo", toxicity: "hazard", hint: "Ore-derived aerosol flagged by detector." },
  { id: "sp-11", name: "Willow Bark Enzyme", origin: "bio", toxicity: "safe", hint: "Medicinal tree enzyme with low-risk markers." },
  { id: "sp-12", name: "Volcanic Ash Resin", origin: "geo", toxicity: "hazard", hint: "Ash-bound resin requiring sealed containment." },
];

function specimenForRound(roundIndex: number): Specimen {
  return SPECIMEN_POOL[roundIndex % SPECIMEN_POOL.length]!;
}

function destinationFor(specimen: Specimen): "greenhouse" | "containment" {
  return specimen.toxicity === "safe" && specimen.origin === "bio"
    ? "greenhouse"
    : "containment";
}

export default function Zone044TerraLabSort() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [health, setHealth] = useState(STARTING_HEALTH);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [selectedLane, setSelectedLane] = useState<"greenhouse" | "containment" | null>(null);
  const [resolution, setResolution] = useState<Resolution>("contaminated");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const specimen = useMemo(() => specimenForRound(roundIndex), [roundIndex]);
  const requiredLane = destinationFor(specimen);
  const progress = Math.min(100, Math.round((roundIndex / TOTAL_SPECIMENS) * 100));

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "secured" ? "cheering" : "sad");
    setMessage(
      nextResolution === "secured"
        ? "Terra: Excellent triage discipline. Lab ecosystem remains stable."
        : "Terra: Contamination spread. Re-run sort protocol with tighter lane decisions.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-044",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TOTAL_SPECIMENS * 12,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setHealth(STARTING_HEALTH);
    setScore(0);
    setCombo(0);
    setSelectedLane(null);
    setResolution("contaminated");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Terra: Route each specimen to the correct lane before contamination escalates.");
    void hapticSelection();
  };

  const chooseLane = (lane: "greenhouse" | "containment") => {
    if (phase !== "playing" || selectedLane) return;
    setSelectedLane(lane);
    setInteractions((value) => value + 1);
    const correct = lane === requiredLane;
    const nextHealth = correct ? health : health - 1;
    const nextCombo = correct ? combo + 1 : 0;
    const nextScore = correct ? score + 9 + Math.min(5, nextCombo) : Math.max(0, score - 2);

    setHealth(nextHealth);
    setCombo(nextCombo);
    setScore(nextScore);
    setMood(correct ? "happy" : "sad");
    setMessage(
      correct
        ? `Correct lane. ${specimen.name} secured.`
        : `Wrong lane. ${specimen.name} triggered containment alert.`,
    );
    if (correct) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= TOTAL_SPECIMENS - 1;
      if (nextHealth <= 0) {
        finalize("contaminated", nextScore);
        return;
      }
      if (finalRound) {
        finalize("secured", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedLane(null);
    }, 580);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-emerald-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(74,222,128,0.24),transparent_45%),radial-gradient(circle_at_84%_80%,rgba(16,185,129,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Zone 044</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Lab Sort</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-emerald-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Health {health}/{STARTING_HEALTH}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-emerald-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.25 }} />
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
                  Sort live specimens safely between greenhouse and containment lanes. Misroutes reduce lab health.
                </p>
                <ul className="space-y-1 text-xs text-emerald-100">
                  <li>Win condition: classify all 12 specimens before health reaches zero.</li>
                  <li>Fail condition: health depleted by contamination alerts.</li>
                  <li>Scoring: correct lane decisions + combo bonus.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-emerald-400 px-8 text-sm font-black text-slate-950">
                  Start Lab Protocol
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section
              key={`round-${specimen.id}`}
              initial={{ opacity: 0.2, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-emerald-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <Beaker className="h-3.5 w-3.5" />
                  Specimen {roundIndex + 1}/{TOTAL_SPECIMENS}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <Leaf className="h-3.5 w-3.5" />
                  Origin: {specimen.origin.toUpperCase()}
                </span>
              </div>

              <h3 className="text-xl font-black text-white">{specimen.name}</h3>
              <p className="mt-2 text-sm text-emerald-100">{specimen.hint}</p>
              <p className="mt-1 text-xs text-emerald-200">Toxicity profile: {specimen.toxicity.toUpperCase()}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  disabled={selectedLane !== null}
                  onClick={() => chooseLane("greenhouse")}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                    selectedLane === "greenhouse"
                      ? requiredLane === "greenhouse"
                        ? "border-emerald-300/70 bg-emerald-400/20"
                        : "border-rose-300/70 bg-rose-400/20"
                      : "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20"
                  }`}
                >
                  Greenhouse Lane (Bio Safe)
                </button>
                <button
                  type="button"
                  disabled={selectedLane !== null}
                  onClick={() => chooseLane("containment")}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                    selectedLane === "containment"
                      ? requiredLane === "containment"
                        ? "border-emerald-300/70 bg-emerald-400/20"
                        : "border-rose-300/70 bg-rose-400/20"
                      : "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20"
                  }`}
                >
                  Containment Lane (Geo / Hazard)
                </button>
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
                {resolution === "secured" ? "Lab Secured" : "Lab Contaminated"}
              </h3>
              <p className="mt-2 text-sm text-emerald-100">
                Score {score} | Health {health}/{STARTING_HEALTH} | Interactions {Math.max(1, interactions)}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-emerald-200">
                {resolution === "secured" ? (
                  <>
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Classification discipline protected the ecosystem.
                  </>
                ) : (
                  <>
                    <TriangleAlert className="h-3.5 w-3.5" />
                    Containment failures triggered biosecurity shutdown.
                  </>
                )}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={start} className="h-11 bg-emerald-400 px-7 text-sm font-black text-slate-950">
                  Replay Protocol
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

