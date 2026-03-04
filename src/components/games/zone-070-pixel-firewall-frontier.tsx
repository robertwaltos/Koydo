"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, Radar, ShieldAlert, ShieldPlus, Target } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "secured" | "breach";
type PacketKind = "hostile" | "boost";

type Packet = {
  id: number;
  lane: number;
  y: number;
  kind: PacketKind;
  speed: number;
};

const LANE_COUNT = 4;
const START_INTEGRITY = 4;
const TARGET_DISTANCE = 1600;
const TICK_MS = 110;
const MAX_SHIELD = 4;

function packetGlyph(kind: PacketKind) {
  return kind === "hostile" ? "X" : "+";
}

function packetClass(kind: PacketKind) {
  return kind === "hostile"
    ? "border-rose-300/80 bg-rose-400/25 text-rose-100"
    : "border-emerald-300/80 bg-emerald-400/25 text-emerald-100";
}

export default function Zone070PixelFirewallFrontier() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [integrity, setIntegrity] = useState(START_INTEGRITY);
  const [shield, setShield] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [distance, setDistance] = useState(0);
  const [packets, setPackets] = useState<Packet[]>([]);
  const [resolution, setResolution] = useState<Resolution>("breach");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const packetIdRef = useRef(0);
  const integrityRef = useRef(integrity);
  const shieldRef = useRef(shield);
  const scoreRef = useRef(score);
  const comboRef = useRef(combo);
  const bestComboRef = useRef(bestCombo);
  const distanceRef = useRef(distance);
  const packetsRef = useRef(packets);

  useEffect(() => {
    integrityRef.current = integrity;
    shieldRef.current = shield;
    scoreRef.current = score;
    comboRef.current = combo;
    bestComboRef.current = bestCombo;
    distanceRef.current = distance;
    packetsRef.current = packets;
  }, [integrity, shield, score, combo, bestCombo, distance, packets]);

  const distancePct = useMemo(() => Math.min(100, Math.round((distance / TARGET_DISTANCE) * 100)), [distance]);
  const tier = useMemo(() => 1 + Math.floor(distance / 280), [distance]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "secured" ? "cheering" : "sad");
    setMessage(
      nextResolution === "secured"
        ? "Pixel: frontier firewall secured."
        : "Pixel: hostile packet breach detected.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-070",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TARGET_DISTANCE * 2,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setIntegrity(START_INTEGRITY);
    setShield(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setDistance(0);
    setPackets([]);
    setResolution("breach");
    setInteractions(0);
    packetIdRef.current = 0;
    integrityRef.current = START_INTEGRITY;
    shieldRef.current = 1;
    scoreRef.current = 0;
    comboRef.current = 0;
    bestComboRef.current = 0;
    distanceRef.current = 0;
    packetsRef.current = [];
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Pixel: intercept hostiles, harvest boost packets, hold the frontier.");
    void hapticSelection();
  };

  const restart = () => start();

  const fortify = () => {
    if (phase !== "playing" || shield <= 0 || integrity >= START_INTEGRITY) return;
    const nextShield = shield - 1;
    const nextIntegrity = Math.min(START_INTEGRITY, integrity + 1);
    setShield(nextShield);
    setIntegrity(nextIntegrity);
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Shield charge converted into integrity.");
    void hapticSelection();
  };

  const intercept = (lane: number) => {
    if (phase !== "playing") return;
    const current = [...packetsRef.current];
    const hitTop = 80;
    const hitBottom = 102;

    let targetIndex = -1;
    for (let index = 0; index < current.length; index += 1) {
      const packet = current[index];
      if (!packet || packet.lane !== lane) continue;
      if (packet.y >= hitTop && packet.y <= hitBottom) {
        targetIndex = index;
        break;
      }
    }

    const nextIntegrity = integrityRef.current;
    let nextShield = shieldRef.current;
    let nextScore = scoreRef.current;
    let nextCombo = comboRef.current;
    let nextBestCombo = bestComboRef.current;
    let nextPackets = current;

    if (targetIndex === -1) {
      nextCombo = 0;
      nextScore = Math.max(0, nextScore - 2);
      setMood("thinking");
      setMessage("No lock in that lane.");
      void hapticError();
    } else {
      const packet = current[targetIndex];
      nextPackets = current.filter((_, idx) => idx !== targetIndex);
      if (packet?.kind === "hostile") {
        nextCombo += 1;
        nextBestCombo = Math.max(nextBestCombo, nextCombo);
        nextScore += 11 + Math.min(8, nextCombo);
        if (nextCombo > 0 && nextCombo % 5 === 0) {
          nextShield = Math.min(MAX_SHIELD, nextShield + 1);
          setMessage("Combo milestone: +1 shield charge.");
        } else {
          setMessage("Hostile packet neutralized.");
        }
        setMood("happy");
        void hapticSuccess();
      } else {
        nextShield = Math.min(MAX_SHIELD, nextShield + 1);
        nextScore += 4;
        setMessage("Boost packet captured. Shield increased.");
        setMood("happy");
        void hapticSelection();
      }
    }

    integrityRef.current = nextIntegrity;
    shieldRef.current = nextShield;
    scoreRef.current = nextScore;
    comboRef.current = nextCombo;
    bestComboRef.current = nextBestCombo;
    packetsRef.current = nextPackets;

    setIntegrity(nextIntegrity);
    setShield(nextShield);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);
    setPackets(nextPackets);
    setInteractions((value) => value + 1);

    if (nextIntegrity <= 0) {
      finalize("breach", nextScore);
    }
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const loop = window.setInterval(() => {
      const currentIntegrity = integrityRef.current;
      const currentShield = shieldRef.current;
      const currentScore = scoreRef.current;
      const currentCombo = comboRef.current;
      const currentBest = bestComboRef.current;
      const currentDistance = distanceRef.current;
      const currentPackets = packetsRef.current;

      const currentTier = 1 + Math.floor(currentDistance / 280);
      const speed = 3 + currentTier * 0.7;
      const spawnChance = Math.min(0.7, 0.24 + currentTier * 0.05);
      const hostileChance = Math.max(0.55, 0.78 - currentTier * 0.03);

      let nextIntegrity = currentIntegrity;
      let nextShield = currentShield;
      let nextScore = currentScore;
      let nextCombo = currentCombo;
      const nextBest = currentBest;
      const nextDistance = Math.min(TARGET_DISTANCE, currentDistance + 1 + currentTier * 0.4);

      let shifted = currentPackets.map((packet) => ({
        ...packet,
        y: packet.y + packet.speed + currentTier * 0.35,
      }));

      const kept: Packet[] = [];
      let breachNotice = false;
      for (const packet of shifted) {
        if (packet.y > 104) {
          if (packet.kind === "hostile") {
            if (nextShield > 0) {
              nextShield -= 1;
              nextScore = Math.max(0, nextScore - 1);
            } else {
              nextIntegrity -= 1;
              nextCombo = 0;
              nextScore = Math.max(0, nextScore - 6);
              breachNotice = true;
            }
          }
          continue;
        }
        kept.push(packet);
      }
      shifted = kept;

      if (Math.random() < spawnChance) {
        const lane = Math.floor(Math.random() * LANE_COUNT);
        const kind: PacketKind = Math.random() < hostileChance ? "hostile" : "boost";
        packetIdRef.current += 1;
        shifted.push({
          id: packetIdRef.current,
          lane,
          y: -12,
          kind,
          speed: speed + Math.random() * 1.4,
        });
      }

      integrityRef.current = nextIntegrity;
      shieldRef.current = nextShield;
      scoreRef.current = nextScore;
      comboRef.current = nextCombo;
      bestComboRef.current = nextBest;
      distanceRef.current = nextDistance;
      packetsRef.current = shifted;

      setIntegrity(nextIntegrity);
      setShield(nextShield);
      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBest);
      setDistance(nextDistance);
      setPackets(shifted);

      if (breachNotice) {
        setMood("sad");
        setMessage("Hostile slipped through. Integrity hit.");
      }

      if (nextIntegrity <= 0) {
        finalize("breach", nextScore);
        return;
      }
      if (nextDistance >= TARGET_DISTANCE) {
        finalize("secured", nextScore);
      }
    }, TICK_MS);
    return () => window.clearInterval(loop);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "1" || key === "a") {
        event.preventDefault();
        intercept(0);
      } else if (key === "2" || key === "s") {
        event.preventDefault();
        intercept(1);
      } else if (key === "3" || key === "d") {
        event.preventDefault();
        intercept(2);
      } else if (key === "4" || key === "f") {
        event.preventDefault();
        intercept(3);
      } else if (key === "r") {
        event.preventDefault();
        fortify();
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, intercept, fortify]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-sky-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(14,165,233,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-200">Zone 070</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pixel Firewall Frontier</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-sky-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Integrity {integrity}/{START_INTEGRITY}</span>
            <span>Shield {shield}/{MAX_SHIELD}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-sky-300" animate={{ width: `${distancePct}%` }} transition={{ duration: 0.15 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-sky-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-sky-100">Survive hostile packet waves across 4 lanes and secure the frontier route.</p>
                <PhysicalButton onClick={start} className="h-12 bg-sky-400 px-8 text-sm font-black text-slate-950">
                  Start Frontier Run
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
                  Distance {Math.floor(distance)}/{TARGET_DISTANCE}
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-4">
                {Array.from({ length: LANE_COUNT }, (_, lane) => (
                  <div key={`lane-${lane}`} className="relative h-72 overflow-hidden rounded-2xl border border-sky-100/25 bg-black/30">
                    <p className="absolute left-1/2 top-2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.16em] text-sky-200">Lane {lane + 1}</p>
                    {packets.filter((entry) => entry.lane === lane).map((entry) => (
                      <div
                        key={entry.id}
                        className={`absolute left-1/2 z-10 h-8 w-8 -translate-x-1/2 rounded-full border text-center text-xs font-black leading-8 ${packetClass(entry.kind)}`}
                        style={{ top: `${entry.y}%` }}
                      >
                        {packetGlyph(entry.kind)}
                      </div>
                    ))}
                    <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 0.55, repeat: Infinity }} className="absolute bottom-3 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-sky-300/80 bg-sky-400/30 text-base font-black">
                      {lane + 1}
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-5">
                {[0, 1, 2, 3].map((lane) => (
                  <PhysicalButton key={`lane-btn-${lane}`} onClick={() => intercept(lane)} className="h-10 bg-sky-300 text-xs font-black text-slate-950">
                    <span className="inline-flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      Lane {lane + 1}
                    </span>
                  </PhysicalButton>
                ))}
                <PhysicalButton onClick={fortify} disabled={shield <= 0 || integrity >= START_INTEGRITY} className="h-10 bg-sky-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Fortify
                  </span>
                </PhysicalButton>
              </div>
              <div className="mt-3 flex justify-end">
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-sky-300 px-4 text-xs font-black text-slate-950">
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
              <h3 className="mt-3 text-2xl font-black text-white">Frontier Paused</h3>
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
                <MascotFriend id="pixel" mood={resolution === "secured" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "secured" ? "Firewall Frontier Secured" : "Firewall Breach"}
              </h3>
              <p className="mt-2 text-sm text-sky-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-sky-400 px-7 text-sm font-black text-slate-950">
                  Replay Frontier
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
