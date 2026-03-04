"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareWarning, PauseCircle, PlayCircle, Radar, ShieldAlert } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "verified" | "overrun";
type Response = "verify" | "challenge" | "ignore";

type SignalRound = {
  id: string;
  signal: string;
  context: string;
  ideal: Response;
  pressure: number;
};

const ROUND_COUNT = 16;
const START_TRUST = 70;
const START_THREAT = 18;
const START_CREDIBILITY = 4;
const START_TIMER_MS = 210_000;

const ROUNDS: SignalRound[] = [
  { id: "z057-r1", signal: "Power status posted without source link.", context: "Ops board update.", ideal: "verify", pressure: 7 },
  { id: "z057-r2", signal: "Claim says coolant failed but sensor trend is stable.", context: "Chat escalation.", ideal: "challenge", pressure: 8 },
  { id: "z057-r3", signal: "Message repeats weather rumor with no timestamps.", context: "Public feed relay.", ideal: "ignore", pressure: 6 },
  { id: "z057-r4", signal: "Maintenance note includes asset ID and logs.", context: "Internal channel.", ideal: "verify", pressure: 8 },
  { id: "z057-r5", signal: "Anonymous post blames random team without data.", context: "Social mirror stream.", ideal: "challenge", pressure: 9 },
  { id: "z057-r6", signal: "Chain letter warns of outage unless forwarded.", context: "Community inbox.", ideal: "ignore", pressure: 7 },
  { id: "z057-r7", signal: "Alert includes checksum mismatch evidence.", context: "Forensics gateway.", ideal: "verify", pressure: 9 },
  { id: "z057-r8", signal: "Narrative says all backups are fake.", context: "Hostile influence node.", ideal: "challenge", pressure: 10 },
  { id: "z057-r9", signal: "Meme claims routers fail when moon is full.", context: "Noise burst cluster.", ideal: "ignore", pressure: 8 },
  { id: "z057-r10", signal: "Patch request references signed release hash.", context: "Deployment queue.", ideal: "verify", pressure: 10 },
  { id: "z057-r11", signal: "Speaker cherry-picks one chart to claim total failure.", context: "Live stream debate.", ideal: "challenge", pressure: 11 },
  { id: "z057-r12", signal: "Thread about lucky charms controlling latency.", context: "Off-topic forum.", ideal: "ignore", pressure: 8 },
  { id: "z057-r13", signal: "Incident report contains packet captures and timeline.", context: "SOC channel.", ideal: "verify", pressure: 11 },
  { id: "z057-r14", signal: "Post says metrics are fabricated but cites no dataset.", context: "Coordinated disinfo wave.", ideal: "challenge", pressure: 12 },
  { id: "z057-r15", signal: "Audio clip claims solar flare changed API keys.", context: "Viral clip flood.", ideal: "ignore", pressure: 10 },
  { id: "z057-r16", signal: "Final briefing includes signed analyst consensus.", context: "Command closeout.", ideal: "verify", pressure: 12 },
];

const RESPONSES: Array<{ id: Response; label: string; description: string }> = [
  { id: "verify", label: "Verify", description: "Cross-check with trusted evidence sources." },
  { id: "challenge", label: "Challenge", description: "Actively rebut unsupported or misleading claims." },
  { id: "ignore", label: "Ignore", description: "Do not amplify irrelevant or obvious noise." },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function prettyMs(ms: number) {
  const safe = Math.max(0, ms);
  const minutes = Math.floor(safe / 60_000);
  const seconds = Math.floor((safe % 60_000) / 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function Zone057EchoSignalCrossfire() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [trust, setTrust] = useState(START_TRUST);
  const [threat, setThreat] = useState(START_THREAT);
  const [credibility, setCredibility] = useState(START_CREDIBILITY);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selected, setSelected] = useState<Response | null>(null);
  const [remainingMs, setRemainingMs] = useState(START_TIMER_MS);
  const [resolution, setResolution] = useState<Resolution>("overrun");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 5);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "verified" ? "cheering" : "sad");
    setMessage(
      nextResolution === "verified"
        ? "Echo: Signal network secured. Truth channel held."
        : "Echo: Crossfire overrun. Rebuild trust discipline and response timing.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-057",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 22,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setTrust(START_TRUST);
    setThreat(START_THREAT);
    setCredibility(START_CREDIBILITY);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelected(null);
    setRemainingMs(START_TIMER_MS);
    setResolution("overrun");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Echo: choose the right response for each incoming signal.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (response: Response) => {
    if (phase !== "playing" || !round || selected !== null) return;
    setSelected(response);
    setInteractions((value) => value + 1);

    const correct = response === round.ideal;
    const pressure = round.pressure + tier;
    const nextThreat = clamp(
      threat + (correct ? -Math.max(4, Math.floor(pressure / 2)) : Math.max(6, pressure)),
      0,
      100,
    );
    const nextTrust = clamp(
      trust + (correct ? Math.max(5, Math.floor(pressure / 2)) : -Math.max(6, Math.floor(pressure / 2) + 2)),
      0,
      100,
    );
    const nextCredibility = clamp(
      credibility + (correct ? 0 : -1),
      0,
      START_CREDIBILITY,
    );
    const nextCombo = correct ? combo + 1 : 0;
    const nextScore = correct
      ? score + 10 + Math.min(6, nextCombo)
      : Math.max(0, score - (tier >= 3 ? 7 : 5));
    const nextRemaining = clamp(
      remainingMs + (correct ? 1100 : -(1600 + tier * 450)),
      0,
      10 * 60 * 1000,
    );

    setThreat(nextThreat);
    setTrust(nextTrust);
    setCredibility(nextCredibility);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setRemainingMs(nextRemaining);
    setMood(correct ? "happy" : "sad");
    setMessage(correct ? "Signal handled correctly." : `Wrong response. Ideal move was ${round.ideal}.`);
    if (correct) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextThreat >= 100 || nextTrust <= 0 || nextCredibility <= 0 || nextRemaining <= 0) {
        finalize("overrun", nextScore);
        return;
      }
      if (finalRound) {
        finalize("verified", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelected(null);
    }, 560);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const timer = window.setInterval(() => {
      setRemainingMs((value) => Math.max(0, value - 250));
    }, 250);
    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    if (remainingMs > 0) return;
    const timeout = window.setTimeout(() => {
      finalize("overrun", score);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [phase, remainingMs, score]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") {
        event.preventDefault();
        choose("verify");
      } else if (event.key === "2") {
        event.preventDefault();
        choose("challenge");
      } else if (event.key === "3") {
        event.preventDefault();
        choose("ignore");
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-violet-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(139,92,246,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(217,70,239,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-200">Zone 057</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Signal Crossfire</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-violet-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>{prettyMs(remainingMs)}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-violet-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-violet-200/25 bg-black/35 p-6 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="echo" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-violet-100">
                  Process 16 incoming signals under time pressure. Use the right response to protect trust and suppress threat.
                </p>
                <ul className="space-y-1 text-xs text-violet-100">
                  <li>Win condition: complete all rounds before threat or timer collapse.</li>
                  <li>Fail condition: threat 100, trust 0, credibility 0, or timer expires.</li>
                  <li>Controls: keys 1/2/3 or tap response cards.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-violet-400 px-8 text-sm font-black text-slate-950">
                  Start Signal Run
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
              className="rounded-3xl border border-violet-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-violet-100/25 bg-violet-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-violet-200">Trust</p>
                  <p className="mt-1 text-xl font-black text-white">{trust}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-emerald-300" style={{ width: `${trust}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-violet-100/25 bg-violet-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-violet-200">Threat</p>
                  <p className="mt-1 text-xl font-black text-white">{threat}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-rose-300" style={{ width: `${threat}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-violet-100/25 bg-violet-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-violet-200">Credibility</p>
                  <p className="mt-1 text-xl font-black text-white">{credibility}/{START_CREDIBILITY}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-sky-300" style={{ width: `${(credibility / START_CREDIBILITY) * 100}%` }} />
                  </div>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-violet-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/35 px-3 py-1">
                  <Radar className="h-3.5 w-3.5" />
                  Signal {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | pressure {round.pressure}
                </span>
              </div>

              <p className="text-xs text-violet-200">{round.context}</p>
              <h3 className="mt-1 text-xl font-black text-white">{round.signal}</h3>

              <div className="mt-5 grid gap-3">
                {RESPONSES.map((entry, index) => {
                  const isSelected = selected === entry.id;
                  const stateClass = isSelected
                    ? "border-violet-300/80 bg-violet-400/20"
                    : "border-violet-100/25 bg-violet-100/10 hover:bg-violet-100/20";
                  return (
                    <button
                      key={entry.id}
                      type="button"
                      disabled={selected !== null}
                      onClick={() => choose(entry.id)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">
                        <span className="mr-2 text-xs opacity-80">[{index + 1}]</span>
                        {entry.label}
                      </p>
                      <p className="mt-1 text-xs text-violet-100">{entry.description}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-xs text-violet-200">
                  <MessageSquareWarning className="h-3.5 w-3.5" />
                  Correct response chain preserves trust and time.
                </p>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-violet-300 px-4 text-xs font-black text-slate-950">
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
              className="rounded-3xl border border-violet-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="echo" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Signal Run Paused</h3>
              <p className="mt-2 text-sm text-violet-100">Resume this wave or restart crossfire analysis.</p>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-violet-400 px-6 text-sm font-black text-slate-950">
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
              className="rounded-3xl border border-violet-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="echo" mood={resolution === "verified" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "verified" ? "Signal Grid Verified" : "Signal Grid Overrun"}
              </h3>
              <p className="mt-2 text-sm text-violet-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-violet-400 px-7 text-sm font-black text-slate-950">
                  Replay Crossfire
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
