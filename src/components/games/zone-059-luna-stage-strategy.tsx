"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, PauseCircle, PlayCircle, Sparkles, Star } from "lucide-react";
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

type StageOption = {
  label: string;
  harmonyDelta: number;
  crowdDelta: number;
  staminaDelta: number;
  note: string;
};

type StageRound = {
  id: string;
  cue: string;
  energyDemand: number;
  options: [StageOption, StageOption, StageOption, StageOption];
};

const ROUND_COUNT = 14;
const START_HARMONY = 64;
const START_CROWD = 58;
const START_STAMINA = 70;
const START_HEARTS = 4;

const ROUNDS: StageRound[] = [
  {
    id: "z059-r1",
    cue: "Opening spotlight sweep enters a narrow timing window.",
    energyDemand: 8,
    options: [
      { label: "Precision Arpeggio", harmonyDelta: 8, crowdDelta: 6, staminaDelta: -7, note: "High-quality opener." },
      { label: "Steady Groove", harmonyDelta: 4, crowdDelta: 4, staminaDelta: -4, note: "Balanced performance." },
      { label: "Crowd Chant", harmonyDelta: -2, crowdDelta: 8, staminaDelta: -5, note: "Hype over precision." },
      { label: "Silent Reset", harmonyDelta: -6, crowdDelta: -4, staminaDelta: 6, note: "Conserve energy, lose momentum." },
    ],
  },
  {
    id: "z059-r2",
    cue: "Drumline requests tempo shift before chorus.",
    energyDemand: 9,
    options: [
      { label: "Tempo Lock", harmonyDelta: 7, crowdDelta: 5, staminaDelta: -6, note: "Clean transition." },
      { label: "Pulse Bridge", harmonyDelta: 4, crowdDelta: 4, staminaDelta: -4, note: "Safe transition." },
      { label: "Bass Drop Rush", harmonyDelta: -3, crowdDelta: 9, staminaDelta: -7, note: "Risky excitement spike." },
      { label: "Instrument Solo Delay", harmonyDelta: -5, crowdDelta: -2, staminaDelta: 5, note: "Breaks sequence flow." },
    ],
  },
  {
    id: "z059-r3",
    cue: "Crowd section on east wing loses sync.",
    energyDemand: 8,
    options: [
      { label: "Call-and-Response", harmonyDelta: 6, crowdDelta: 7, staminaDelta: -6, note: "Recovers timing and engagement." },
      { label: "Metronome Overlay", harmonyDelta: 5, crowdDelta: 3, staminaDelta: -4, note: "Technical correction." },
      { label: "Freestyle Spike", harmonyDelta: -3, crowdDelta: 8, staminaDelta: -8, note: "Crowd up, harmony down." },
      { label: "Pause Segment", harmonyDelta: -5, crowdDelta: -3, staminaDelta: 6, note: "Energy reset with audience drop." },
    ],
  },
  {
    id: "z059-r4",
    cue: "Laser wall transition requires synchronized move set.",
    energyDemand: 10,
    options: [
      { label: "Mirrored Step Chain", harmonyDelta: 8, crowdDelta: 6, staminaDelta: -7, note: "Strong visual + rhythm alignment." },
      { label: "Simple Slide Loop", harmonyDelta: 4, crowdDelta: 4, staminaDelta: -4, note: "Reliable but mild." },
      { label: "Aerial Burst", harmonyDelta: -2, crowdDelta: 10, staminaDelta: -10, note: "Huge hype, high fatigue." },
      { label: "Delay Transition", harmonyDelta: -6, crowdDelta: -4, staminaDelta: 5, note: "Breaks stage momentum." },
    ],
  },
  {
    id: "z059-r5",
    cue: "Choir overlay drifts sharp against lead synth.",
    energyDemand: 9,
    options: [
      { label: "Tonal Re-anchor", harmonyDelta: 9, crowdDelta: 4, staminaDelta: -6, note: "Best pitch correction." },
      { label: "Blend Layer", harmonyDelta: 5, crowdDelta: 4, staminaDelta: -4, note: "Moderate correction." },
      { label: "Volume Blast", harmonyDelta: -4, crowdDelta: 7, staminaDelta: -7, note: "Masks problem briefly." },
      { label: "Mute Choir", harmonyDelta: -5, crowdDelta: -3, staminaDelta: 4, note: "Removes richness." },
    ],
  },
  {
    id: "z059-r6",
    cue: "Mid-show energy dip across front audience.",
    energyDemand: 10,
    options: [
      { label: "Interactive Bridge", harmonyDelta: 6, crowdDelta: 8, staminaDelta: -7, note: "Boosts crowd and keeps flow." },
      { label: "Percussion Loop", harmonyDelta: 4, crowdDelta: 5, staminaDelta: -5, note: "Stable fallback." },
      { label: "Pyro Burst", harmonyDelta: -2, crowdDelta: 9, staminaDelta: -9, note: "Short-term spectacle." },
      { label: "Soft Interlude", harmonyDelta: -4, crowdDelta: -3, staminaDelta: 6, note: "Recover stamina slowly." },
    ],
  },
  {
    id: "z059-r7",
    cue: "Backing track latency spikes on wireless channel.",
    energyDemand: 10,
    options: [
      { label: "Hardline Sync Swap", harmonyDelta: 8, crowdDelta: 5, staminaDelta: -6, note: "Technical fix under pressure." },
      { label: "Manual Cue Count", harmonyDelta: 5, crowdDelta: 3, staminaDelta: -4, note: "Moderate rescue." },
      { label: "Ignore Latency", harmonyDelta: -7, crowdDelta: 4, staminaDelta: -5, note: "Compounding drift." },
      { label: "Cut Layer Stack", harmonyDelta: -3, crowdDelta: -2, staminaDelta: 5, note: "Simplifies but loses impact." },
    ],
  },
  {
    id: "z059-r8",
    cue: "Finale rehearsed move collides with fresh crowd request.",
    energyDemand: 11,
    options: [
      { label: "Adaptive Remix", harmonyDelta: 7, crowdDelta: 8, staminaDelta: -8, note: "Best compromise path." },
      { label: "Scripted Finale", harmonyDelta: 6, crowdDelta: 3, staminaDelta: -5, note: "Safe scripted close." },
      { label: "All-in Crowd Pivot", harmonyDelta: -3, crowdDelta: 10, staminaDelta: -9, note: "Huge crowd spike, fragile harmony." },
      { label: "Abort Request", harmonyDelta: -5, crowdDelta: -4, staminaDelta: 4, note: "Audience frustration risk." },
    ],
  },
  {
    id: "z059-r9",
    cue: "Stage lights overheat and reduce visibility.",
    energyDemand: 10,
    options: [
      { label: "Cool-light choreography", harmonyDelta: 7, crowdDelta: 5, staminaDelta: -6, note: "Maintains rhythm under low light." },
      { label: "Acoustic fallback", harmonyDelta: 5, crowdDelta: 4, staminaDelta: -4, note: "Controlled pivot." },
      { label: "Blind power dance", harmonyDelta: -4, crowdDelta: 8, staminaDelta: -9, note: "Spectacle with risk." },
      { label: "Stop movement", harmonyDelta: -6, crowdDelta: -4, staminaDelta: 5, note: "Stalls energy." },
    ],
  },
  {
    id: "z059-r10",
    cue: "Band requests unexpected key modulation.",
    energyDemand: 11,
    options: [
      { label: "Guided modulation", harmonyDelta: 8, crowdDelta: 6, staminaDelta: -7, note: "Complex but rewarding." },
      { label: "Partial key blend", harmonyDelta: 5, crowdDelta: 4, staminaDelta: -5, note: "Conservative transition." },
      { label: "Force original key", harmonyDelta: -6, crowdDelta: 3, staminaDelta: -5, note: "Conflict with band." },
      { label: "Drop vocal layer", harmonyDelta: -4, crowdDelta: -3, staminaDelta: 4, note: "Reduces show impact." },
    ],
  },
  {
    id: "z059-r11",
    cue: "Rival stage nearby is pulling audience attention.",
    energyDemand: 12,
    options: [
      { label: "Signature sequence", harmonyDelta: 7, crowdDelta: 9, staminaDelta: -8, note: "Reclaims focus." },
      { label: "Steady confidence set", harmonyDelta: 5, crowdDelta: 5, staminaDelta: -5, note: "Stable retention." },
      { label: "Volume war", harmonyDelta: -5, crowdDelta: 7, staminaDelta: -9, note: "High fatigue and tonal drift." },
      { label: "Wait out competition", harmonyDelta: -4, crowdDelta: -5, staminaDelta: 5, note: "Audience leakage." },
    ],
  },
  {
    id: "z059-r12",
    cue: "Percussion line drops one beat per bar.",
    energyDemand: 11,
    options: [
      { label: "Beat recapture cue", harmonyDelta: 8, crowdDelta: 5, staminaDelta: -6, note: "Restores rhythmic lock." },
      { label: "Simple clap guide", harmonyDelta: 5, crowdDelta: 4, staminaDelta: -4, note: "Moderate recovery." },
      { label: "Ignore drift", harmonyDelta: -7, crowdDelta: 3, staminaDelta: -4, note: "Compounds mismatch." },
      { label: "Strip percussion", harmonyDelta: -4, crowdDelta: -2, staminaDelta: 4, note: "Safer but flat." },
    ],
  },
  {
    id: "z059-r13",
    cue: "Final chorus requires full ensemble precision.",
    energyDemand: 12,
    options: [
      { label: "Full precision lock", harmonyDelta: 9, crowdDelta: 6, staminaDelta: -8, note: "High-skill close." },
      { label: "Controlled finale", harmonyDelta: 6, crowdDelta: 5, staminaDelta: -6, note: "Reliable finish." },
      { label: "Hype-only finale", harmonyDelta: -4, crowdDelta: 9, staminaDelta: -9, note: "Volatile ending." },
      { label: "Conserve for encore", harmonyDelta: -5, crowdDelta: -3, staminaDelta: 6, note: "Energy saved, show impact drops." },
    ],
  },
  {
    id: "z059-r14",
    cue: "Encore decision: last move determines audience verdict.",
    energyDemand: 13,
    options: [
      { label: "Grand ensemble encore", harmonyDelta: 10, crowdDelta: 9, staminaDelta: -9, note: "All-in finale." },
      { label: "Polished short encore", harmonyDelta: 7, crowdDelta: 6, staminaDelta: -6, note: "Balanced final beat." },
      { label: "Improvised gamble", harmonyDelta: -5, crowdDelta: 8, staminaDelta: -8, note: "Unstable but flashy." },
      { label: "Skip encore", harmonyDelta: -7, crowdDelta: -8, staminaDelta: 8, note: "Audience disappointment." },
    ],
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function Zone059LunaStageStrategy() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [harmony, setHarmony] = useState(START_HARMONY);
  const [crowd, setCrowd] = useState(START_CROWD);
  const [stamina, setStamina] = useState(START_STAMINA);
  const [hearts, setHearts] = useState(START_HEARTS);
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
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 5);
  const quality = clamp(Math.round(harmony * 0.55 + crowd * 0.45 - (100 - stamina) * 0.15), 0, 100);
  const qualityFloor = 34 + tier * 3;

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "encore" ? "cheering" : "sad");
    setMessage(
      nextResolution === "encore"
        ? "Luna: Encore secured. Stage strategy stayed sharp."
        : "Luna: Show faded out. Rebalance crowd energy and harmony.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-059",
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
    setHarmony(START_HARMONY);
    setCrowd(START_CROWD);
    setStamina(START_STAMINA);
    setHearts(START_HEARTS);
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
    setMessage("Luna: choose stage moves that sustain harmony, crowd energy, and stamina.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const option = round.options[optionIndex];
    if (!option) return;

    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const fatigueTax = Math.max(1, Math.floor(round.energyDemand / 5));
    const nextStamina = clamp(stamina + option.staminaDelta - fatigueTax, 0, 100);
    const nextHarmony = clamp(harmony + option.harmonyDelta - Math.max(0, Math.floor((100 - nextStamina) / 25)), 0, 100);
    const nextCrowd = clamp(crowd + option.crowdDelta - Math.max(0, Math.floor((100 - nextHarmony) / 30)), 0, 100);
    const nextQuality = clamp(Math.round(nextHarmony * 0.55 + nextCrowd * 0.45 - (100 - nextStamina) * 0.15), 0, 100);

    const aligned = nextQuality >= qualityFloor;
    const severe = nextQuality <= 16 || nextStamina <= 10;
    const nextHearts = aligned ? hearts : Math.max(0, hearts - (severe ? 2 : 1));
    const nextCombo = aligned ? combo + 1 : 0;
    const nextScore = aligned
      ? score + 12 + Math.min(6, nextCombo)
      : Math.max(0, score - (severe ? 8 : 5));

    setHarmony(nextHarmony);
    setCrowd(nextCrowd);
    setStamina(nextStamina);
    setHearts(nextHearts);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setMood(aligned ? "happy" : "sad");
    setMessage(aligned ? "Stage move landed." : option.note);
    if (aligned) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextHearts <= 0) {
        finalize("fadeout", nextScore);
        return;
      }
      if (finalRound) {
        finalize("encore", nextScore);
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
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(217,70,239,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(236,72,153,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">Zone 059</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Stage Strategy</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-fuchsia-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Hearts {hearts}/{START_HEARTS}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-fuchsia-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-fuchsia-200/25 bg-black/35 p-6 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="luna" mood="happy" size="lg" />
                <p className="max-w-2xl text-sm text-fuchsia-100">
                  Conduct 14 stage cues and balance harmony, crowd response, and stamina to secure the encore.
                </p>
                <ul className="space-y-1 text-xs text-fuchsia-100">
                  <li>Win condition: complete all cues before hearts hit zero.</li>
                  <li>Fail condition: repeated low-quality rounds deplete hearts.</li>
                  <li>Controls: click options or keys 1-4.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-fuchsia-400 px-8 text-sm font-black text-slate-950">
                  Start Stage Run
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
              className="rounded-3xl border border-fuchsia-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-fuchsia-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Music2 className="h-3.5 w-3.5" />
                  Cue {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Star className="h-3.5 w-3.5" />
                  Tier {tier} | Demand {round.energyDemand}
                </span>
              </div>

              <h3 className="text-lg font-black text-white">{round.cue}</h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-fuchsia-100/25 bg-fuchsia-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-fuchsia-200">Harmony</p>
                  <p className="mt-1 text-xl font-black text-white">{harmony}</p>
                </div>
                <div className="rounded-2xl border border-fuchsia-100/25 bg-fuchsia-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-fuchsia-200">Crowd</p>
                  <p className="mt-1 text-xl font-black text-white">{crowd}</p>
                </div>
                <div className="rounded-2xl border border-fuchsia-100/25 bg-fuchsia-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-fuchsia-200">Stamina</p>
                  <p className="mt-1 text-xl font-black text-white">{stamina}</p>
                </div>
              </div>

              <p className="mt-3 inline-flex items-center gap-2 text-xs text-fuchsia-200">
                <Sparkles className="h-3.5 w-3.5" />
                Show quality {quality}. Keep above {qualityFloor}.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {round.options.map((option, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-fuchsia-300/80 bg-fuchsia-400/20"
                    : "border-fuchsia-100/25 bg-fuchsia-100/10 hover:bg-fuchsia-100/20";
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
                      <p className="mt-1 text-xs text-fuchsia-100">{option.note}</p>
                      <p className="mt-2 text-[11px] font-bold text-fuchsia-200">
                        Harmony {option.harmonyDelta >= 0 ? "+" : ""}{option.harmonyDelta} | Crowd {option.crowdDelta >= 0 ? "+" : ""}{option.crowdDelta} | Stamina {option.staminaDelta >= 0 ? "+" : ""}{option.staminaDelta}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex justify-end">
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
            <motion.section
              key="paused"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="luna" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Stage Run Paused</h3>
              <p className="mt-2 text-sm text-fuchsia-100">Resume cue planning or restart from opening cue.</p>
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
            <motion.section
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="luna" mood={resolution === "encore" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "encore" ? "Encore Secured" : "Show Fadeout"}
              </h3>
              <p className="mt-2 text-sm text-fuchsia-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-fuchsia-400 px-7 text-sm font-black text-slate-950">
                  Replay Stage Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
