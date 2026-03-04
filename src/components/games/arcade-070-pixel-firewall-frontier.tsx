"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, ShieldCheck, ShieldX } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "secured" | "breached";
type Decision = "allow" | "quarantine";
type Protocol = "http" | "dns" | "ftp" | "ssh" | "ws";

type PacketRound = {
  id: string;
  ruleText: string;
  packet: {
    protocol: Protocol;
    encrypted: boolean;
    trust: number;
    region: "local" | "external";
  };
  correctDecision: Decision;
  hint: string;
};

const ROUND_COUNT = 18;
const START_INTEGRITY = 4;
const MAX_SCANS = 3;

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

function roundWindowMs(roundIndex: number) {
  const tier = 1 + Math.floor(roundIndex / 5);
  return Math.max(2100, 5600 - (tier - 1) * 780);
}

function buildRound(roundIndex: number): PacketRound {
  const random = seeded(`arcade-070:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 5);
  const protocols: Protocol[] = ["http", "dns", "ftp", "ssh", "ws"];
  const protocol = protocols[Math.floor(random() * protocols.length)] ?? "http";
  const encrypted = random() > 0.46;
  const trust = 22 + Math.floor(random() * 72);
  const region = random() > 0.53 ? "external" : "local";
  const threshold = 44 + tier * 4;

  const ruleIndex = Math.floor(random() * 3);
  let ruleText = "";
  let correctDecision: Decision = "quarantine";
  let hint = "";

  if (ruleIndex === 0) {
    ruleText = `Allow only encrypted packets with trust >= ${threshold}.`;
    correctDecision = encrypted && trust >= threshold ? "allow" : "quarantine";
    hint = "Encryption and trust must both pass threshold.";
  } else if (ruleIndex === 1) {
    ruleText = `Allow DNS/SSH packets when trust >= ${threshold - 6}; quarantine all FTP.`;
    correctDecision =
      protocol === "ftp"
        ? "quarantine"
        : (protocol === "dns" || protocol === "ssh") && trust >= threshold - 6
          ? "allow"
          : "quarantine";
    hint = "Protocol gate first, then trust threshold.";
  } else {
    ruleText = `Allow local traffic with trust >= ${threshold - 4}; quarantine low-trust external packets.`;
    correctDecision =
      region === "local" && trust >= threshold - 4
        ? "allow"
        : region === "external" && trust < threshold + 4
          ? "quarantine"
          : encrypted && trust >= threshold + 6
            ? "allow"
            : "quarantine";
    hint = "Region policy can be overridden by very strong encrypted trust.";
  }

  return {
    id: `a070-r${roundIndex + 1}`,
    ruleText,
    packet: {
      protocol,
      encrypted,
      trust,
      region,
    },
    correctDecision,
    hint,
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Arcade070PixelFirewallFrontier() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [integrity, setIntegrity] = useState(START_INTEGRITY);
  const [scans, setScans] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);
  const [hint, setHint] = useState("");
  const [timeLeftMs, setTimeLeftMs] = useState(roundWindowMs(0));
  const [outcome, setOutcome] = useState<Outcome>("breached");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const settlingRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const tier = 1 + Math.floor(roundIndex / 5);
  const progress = useMemo(
    () => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)),
    [roundIndex],
  );

  const finalize = (nextOutcome: Outcome, finalScore: number, finalInteractions: number) => {
    setOutcome(nextOutcome);
    setPhase("complete");
    setMood(nextOutcome === "secured" ? "cheering" : "sad");
    setMessage(
      nextOutcome === "secured"
        ? "Pixel: frontier firewall held all attack waves."
        : "Pixel: firewall breached. Re-run packet discipline.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-070",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, finalInteractions),
      score: finalScore,
      maxScore: ROUND_COUNT * 24,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setIntegrity(START_INTEGRITY);
    setScans(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedDecision(null);
    setHint("");
    setTimeLeftMs(roundWindowMs(0));
    setOutcome("breached");
    setInteractions(0);
    completionSentRef.current = false;
    settlingRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    setStartedAt(Date.now());
    setMood("happy");
    setMessage("Pixel: apply the active firewall rule to every packet.");
    void hapticSelection();
  };

  const restart = () => start();

  const triggerScan = () => {
    if (phase !== "playing" || scans <= 0 || !round || settlingRef.current) return;
    setScans((value) => value - 1);
    setInteractions((value) => value + 1);
    setScore((value) => Math.max(0, value - 2));
    setHint(round.hint);
    setMood("thinking");
    setMessage("Pixel: deep scan revealed policy hint.");
    void hapticSelection();
  };

  const resolveDecision = (decision: Decision, timedOut = false) => {
    if (phase !== "playing" || !round || settlingRef.current) return;
    settlingRef.current = true;
    setSelectedDecision(decision);
    setInteractions((value) => value + 1);
    const nextInteractions = interactions + 1;

    const correct = !timedOut && decision === round.correctDecision;
    let nextIntegrity = integrity;
    let nextScans = scans;
    let nextScore = score;
    const nextCombo = correct ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    const finalRound = roundIndex >= ROUND_COUNT - 1;

    if (correct) {
      nextScore += 11 + Math.min(12, nextCombo * 2) + tier;
      if (nextCombo > 0 && nextCombo % 6 === 0) {
        nextScans = Math.min(MAX_SCANS, nextScans + 1);
        setMessage("Packet streak bonus: +1 scan.");
      } else {
        setMessage("Policy applied correctly.");
      }
      setMood("happy");
      void hapticSuccess();
    } else {
      nextIntegrity = Math.max(0, nextIntegrity - 1);
      nextScore = Math.max(0, nextScore - (timedOut ? 9 : 7));
      setMessage(
        timedOut
          ? "Timeout. Packet bypassed policy gate."
          : `Incorrect action. Packet should be ${round.correctDecision}.`,
      );
      setMood("sad");
      void hapticError();
    }

    setIntegrity(nextIntegrity);
    setScans(nextScans);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);

    window.setTimeout(() => {
      if (nextIntegrity <= 0) {
        settlingRef.current = false;
        finalize("breached", nextScore, nextInteractions);
        return;
      }
      if (finalRound) {
        const finalScore = nextScore + nextIntegrity * 7 + nextBestCombo;
        setScore(finalScore);
        settlingRef.current = false;
        finalize("secured", finalScore, nextInteractions);
        return;
      }
      const nextRound = roundIndex + 1;
      setRoundIndex(nextRound);
      setSelectedDecision(null);
      setHint("");
      setTimeLeftMs(roundWindowMs(nextRound));
      settlingRef.current = false;
    }, 520);
  };

  useEffect(() => {
    if (phase !== "playing" || selectedDecision !== null || settlingRef.current) return;
    const timer = window.setInterval(() => {
      setTimeLeftMs((value) => Math.max(0, value - 100));
    }, 100);
    return () => window.clearInterval(timer);
  }, [phase, roundIndex, selectedDecision]);

  useEffect(() => {
    if (phase !== "playing" || selectedDecision !== null || timeLeftMs > 0 || settlingRef.current) return;
    const timeout = window.setTimeout(() => resolveDecision("quarantine", true), 0);
    return () => window.clearTimeout(timeout);
  }, [phase, selectedDecision, timeLeftMs, resolveDecision]);

  useEffect(() => {
    if (phase !== "playing" && phase !== "paused") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const lower = event.key.toLowerCase();
      if (lower === "a") {
        event.preventDefault();
        resolveDecision("allow");
        return;
      }
      if (lower === "q") {
        event.preventDefault();
        resolveDecision("quarantine");
        return;
      }
      if (lower === "s") {
        event.preventDefault();
        triggerScan();
        return;
      }
      if (lower === "p") {
        event.preventDefault();
        setPhase((value) => (value === "playing" ? "paused" : "playing"));
        return;
      }
      if (lower === "r") {
        event.preventDefault();
        restart();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, resolveDecision, restart, triggerScan]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-cyan-200/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.24),transparent_44%),radial-gradient(circle_at_84%_84%,rgba(6,182,212,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-100">Arcade 070</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pixel Firewall Frontier</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-cyan-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Integrity {integrity}</span>
            <span>Scans {scans}</span>
          </div>
        </div>

        <div className="mb-3 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-cyan-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>
        <div className="mb-4 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-sky-300" animate={{ width: `${timeLeftMs / roundWindowMs(roundIndex) * 100}%` }} transition={{ duration: 0.1 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-cyan-200/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-cyan-100">Classify each packet by rule: `A` allow, `Q` quarantine, `S` scan hint.</p>
                <PhysicalButton onClick={start} className="h-12 bg-cyan-300 px-8 text-sm font-black text-slate-950">Start Frontier</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-cyan-200/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-cyan-100">
                <span>Round {roundIndex + 1}/{ROUND_COUNT} | Tier {tier}</span>
                <span>{Math.max(0, timeLeftMs / 1000).toFixed(1)}s</span>
              </div>
              <div className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 p-3">
                <p className="text-[10px] uppercase tracking-[0.14em] text-cyan-200">Active Rule</p>
                <p className="text-sm text-white">{round.ruleText}</p>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-cyan-200">Protocol</p>
                  <p className="text-lg font-black text-white">{round.packet.protocol.toUpperCase()}</p>
                </div>
                <div className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-cyan-200">Trust</p>
                  <p className="text-lg font-black text-white">{round.packet.trust}</p>
                </div>
                <div className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-cyan-200">Encryption</p>
                  <p className="text-lg font-black text-white">{round.packet.encrypted ? "On" : "Off"}</p>
                </div>
                <div className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-cyan-200">Region</p>
                  <p className="text-lg font-black text-white">{round.packet.region}</p>
                </div>
              </div>
              {hint ? <p className="mt-2 text-xs text-cyan-200">{hint}</p> : null}

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  disabled={selectedDecision !== null}
                  onClick={() => resolveDecision("allow")}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    selectedDecision === "allow"
                      ? "border-emerald-300/80 bg-emerald-400/20"
                      : "border-cyan-100/25 bg-cyan-100/10 hover:bg-cyan-100/20"
                  }`}
                >
                  <p className="inline-flex items-center gap-2 text-sm font-black text-white"><ShieldCheck className="h-4 w-4" />Allow [A]</p>
                </button>
                <button
                  type="button"
                  disabled={selectedDecision !== null}
                  onClick={() => resolveDecision("quarantine")}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    selectedDecision === "quarantine"
                      ? "border-rose-300/80 bg-rose-400/20"
                      : "border-cyan-100/25 bg-cyan-100/10 hover:bg-cyan-100/20"
                  }`}
                >
                  <p className="inline-flex items-center gap-2 text-sm font-black text-white"><ShieldX className="h-4 w-4" />Quarantine [Q]</p>
                </button>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={triggerScan} disabled={scans <= 0} className="h-10 bg-cyan-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  Scan Hint [S]
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-zinc-800 text-xs font-black text-white">
                  <span className="inline-flex items-center gap-1"><PauseCircle className="h-4 w-4" />Pause [P]</span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-cyan-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="pixel" mood="thinking" size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">Frontier Paused</h3>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-cyan-300 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" />Resume</span>
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">Restart [R]</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-cyan-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="pixel" mood={outcome === "secured" ? "cheering" : "sad"} size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">{outcome === "secured" ? "Firewall Secured" : "Firewall Breached"}</h3>
              <p className="mt-2 text-sm text-cyan-100">Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}</p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-cyan-300 px-7 text-sm font-black text-slate-950">Run Again</PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
