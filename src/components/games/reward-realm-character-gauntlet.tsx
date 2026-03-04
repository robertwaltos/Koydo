"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, Sparkles, TimerReset, Zap } from "lucide-react";
import MascotFriend, { type FriendId } from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "victory" | "failure";
type ResolveReason = "choice" | "timeout";
type FeedbackKind = "correct" | "wrong" | "timeout";

type RewardRealmTheme = {
  aura: string;
  panelBorder: string;
  panelBackground: string;
  chip: string;
  progressBar: string;
  optionIdle: string;
  optionActive: string;
  primaryButton: string;
  secondaryButton: string;
  textSoft: string;
};

type RoundOption = {
  id: string;
  label: string;
  microHint: string;
  isCorrect: boolean;
  isTrap: boolean;
};

type RoundModel = {
  id: string;
  prompt: string;
  learningSprinkle: string;
  options: RoundOption[];
  tier: number;
  requiredHits: number;
};

type RoundMode = "single" | "double";

export type RewardRealmCharacterGauntletConfig = {
  gameId: string;
  shortLabel: string;
  title: string;
  mascot: FriendId;
  startMessage: string;
  winMessage: string;
  failMessage: string;
  objectiveNouns: string[];
  promptLeads: string[];
  correctActions: string[];
  decoyActions: string[];
  learningSprinkles: string[];
  theme: RewardRealmTheme;
  baseRoundMs: number;
  minRoundMs: number;
  roundDecayMs: number;
  roundMode?: RoundMode;
  allowTrapDecoys?: boolean;
  targetBestCombo?: number;
};

type RewardRealmCharacterGauntletProps = {
  config: RewardRealmCharacterGauntletConfig;
};

const ROUND_COUNT = 24;
const TIER_SPAN = 6;
const START_LIVES = 4;
const MAX_LIVES = 5;
const START_BOOSTS = 2;
const MAX_BOOSTS = 3;
const SETTLE_MS = 520;

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

function pick<T>(items: T[], random: () => number) {
  const index = Math.floor(random() * items.length);
  return items[index] ?? items[0];
}

function getTier(roundIndex: number) {
  return 1 + Math.floor(roundIndex / TIER_SPAN);
}

function getRoundDuration(config: RewardRealmCharacterGauntletConfig, roundIndex: number) {
  const tier = getTier(roundIndex);
  return Math.max(config.minRoundMs, config.baseRoundMs - (tier - 1) * config.roundDecayMs);
}

function pickSlots(count: number, random: () => number) {
  const pool = [0, 1, 2, 3];
  const picked: number[] = [];
  while (picked.length < count && pool.length > 0) {
    const index = Math.floor(random() * pool.length);
    const [slot] = pool.splice(index, 1);
    if (typeof slot === "number") {
      picked.push(slot);
    }
  }
  return picked;
}

function buildRound(config: RewardRealmCharacterGauntletConfig, roundIndex: number): RoundModel {
  const random = seeded(`${config.gameId}:${roundIndex + 1}`);
  const tier = getTier(roundIndex);
  const requiredHits = config.roundMode === "double" ? 2 : 1;
  const correctIndices = new Set(pickSlots(requiredHits, random));
  const decoySlots = [0, 1, 2, 3].filter((slot) => !correctIndices.has(slot));
  const trapSlot =
    config.allowTrapDecoys && decoySlots.length > 0
      ? decoySlots[Math.floor(random() * decoySlots.length)]
      : null;
  const objective = pick(config.objectiveNouns, random);
  const promptLead = pick(config.promptLeads, random);
  const learningSprinkle = pick(config.learningSprinkles, random);

  const options: RoundOption[] = [0, 1, 2, 3].map((slot) => {
    const isCorrect = correctIndices.has(slot);
    const isTrap = trapSlot === slot;
    const verb = isCorrect
      ? pick(config.correctActions, random)
      : pick(config.decoyActions, random);
    return {
      id: `${config.gameId}-r${roundIndex + 1}-o${slot + 1}`,
      label: `${verb} ${objective}`,
      microHint: isCorrect
        ? "Matches coach cue"
        : isTrap
          ? "Critical decoy"
          : "Decoy signal",
      isCorrect,
      isTrap,
    };
  });

  return {
    id: `${config.gameId}-round-${roundIndex + 1}`,
    prompt: `${promptLead} ${objective}.`,
    learningSprinkle,
    options,
    tier,
    requiredHits,
  };
}

function buildRounds(config: RewardRealmCharacterGauntletConfig) {
  return Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(config, index));
}

function combineClasses(...values: Array<string | null | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

export default function RewardRealmCharacterGauntlet({ config }: RewardRealmCharacterGauntletProps) {
  const { setMessage, setMood } = useMascot();
  const rounds = useMemo(() => buildRounds(config), [config]);

  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [lives, setLives] = useState(START_LIVES);
  const [boosts, setBoosts] = useState(START_BOOSTS);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isSettling, setIsSettling] = useState(false);
  const [timeLeftMs, setTimeLeftMs] = useState(getRoundDuration(config, 0));
  const [outcome, setOutcome] = useState<Outcome>("failure");
  const [feedback, setFeedback] = useState<{ kind: FeedbackKind; text: string } | null>(null);
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);

  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const settlingRef = useRef(false);

  const round = rounds[roundIndex] ?? null;
  const progress = useMemo(
    () => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)),
    [roundIndex],
  );

  const mascotMood = useMemo(() => {
    if (phase === "complete") {
      return outcome === "victory" ? "cheering" : "sad";
    }
    if (phase === "paused") return "thinking";
    if (phase === "playing") {
      if (combo >= 4) return "cheering";
      if (feedback?.kind === "wrong" || feedback?.kind === "timeout") return "sad";
      return "happy";
    }
    return "thinking";
  }, [combo, feedback?.kind, outcome, phase]);

  const finalizeRun = (nextOutcome: Outcome, finalScore: number, finalInteractions: number) => {
    setOutcome(nextOutcome);
    setPhase("complete");
    const won = nextOutcome === "victory";
    setMood(won ? "cheering" : "sad");
    setMessage(won ? config.winMessage : config.failMessage);

    if (completionSentRef.current) return;
    completionSentRef.current = true;

    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: config.gameId,
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, finalInteractions),
      score: finalScore,
      maxScore: ROUND_COUNT * 30,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const resolveRound = (optionIndex: number | null, reason: ResolveReason) => {
    if (phase !== "playing" || !round || settlingRef.current || isSettling) return;

    const option = optionIndex === null ? null : round.options[optionIndex] ?? null;
    const isCorrect = Boolean(option?.isCorrect);
    const isTrap = Boolean(option?.isTrap);
    const alreadySelected = optionIndex !== null && selectedOptions.includes(optionIndex);
    if (alreadySelected) return;

    const nextSelectedOptions =
      isCorrect && optionIndex !== null
        ? [...selectedOptions, optionIndex]
        : selectedOptions;
    const roundCleared = reason !== "timeout" && isCorrect && nextSelectedOptions.length >= round.requiredHits;
    const nextInteractions = interactions + 1;
    setInteractions(nextInteractions);

    if (isCorrect && !roundCleared && reason !== "timeout") {
      setSelectedOptions(nextSelectedOptions);
      setScore((value) => value + 4 + round.tier);
      setFeedback({
        kind: "correct",
        text: `Signal locked (${nextSelectedOptions.length}/${round.requiredHits}). Find the final match.`,
      });
      setMood("happy");
      setMessage(`${config.shortLabel}: partial lock confirmed. Keep tracking the true cue.`);
      void hapticSuccess();
      return;
    }

    settlingRef.current = true;
    setIsSettling(true);
    setSelectedOptions(nextSelectedOptions);

    let nextLives = lives;
    let nextBoosts = boosts;
    let nextScore = score;
    let nextCombo = combo;
    let nextBestCombo = bestCombo;

    if (roundCleared) {
      const tempoBonus = Math.floor(timeLeftMs / 250);
      nextCombo += 1;
      nextScore += 14 + round.tier * 2 + Math.min(14, nextCombo * 2) + tempoBonus;
      if (round.requiredHits > 1) {
        nextScore += 6 + round.tier;
      }
      nextBestCombo = Math.max(bestCombo, nextCombo);
      if (nextCombo > 0 && nextCombo % 5 === 0) {
        nextBoosts = Math.min(MAX_BOOSTS, nextBoosts + 1);
      }
      setFeedback({
        kind: "correct",
        text: round.requiredHits > 1 ? "Dual lock secured. Momentum gained." : "Perfect read. Momentum gained.",
      });
      setMood("happy");
      setMessage(`${config.shortLabel}: cue matched. Keep the combo alive.`);
      void hapticSuccess();
    } else {
      const lifeLoss = isTrap ? 2 : 1;
      nextLives = Math.max(0, nextLives - lifeLoss);
      nextCombo = 0;
      if (isTrap) {
        nextBoosts = Math.max(0, nextBoosts - 1);
      }
      nextScore = Math.max(
        0,
        nextScore - (reason === "timeout" ? 7 + round.tier : 5 + round.tier + (isTrap ? 3 : 0)),
      );
      setFeedback({
        kind: reason === "timeout" ? "timeout" : "wrong",
        text:
          reason === "timeout"
            ? "Window missed. Drift escalated."
            : isTrap
              ? "Critical decoy triggered. Systems destabilized."
              : "Decoy selected. Recover quickly.",
      });
      setMood("sad");
      setMessage(
        reason === "timeout"
          ? `${config.shortLabel}: timer lapsed. Reset and strike decisively.`
          : isTrap
            ? `${config.shortLabel}: trap triggered. Recover control before the next wave.`
            : `${config.shortLabel}: that was a decoy. Re-center on the objective.`,
      );
      void hapticError();
    }

    setLives(nextLives);
    setBoosts(nextBoosts);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);

    window.setTimeout(() => {
      if (nextLives <= 0) {
        setIsSettling(false);
        settlingRef.current = false;
        finalizeRun("failure", nextScore, nextInteractions);
        return;
      }

      if (roundIndex >= ROUND_COUNT - 1) {
        const victoryScore = nextScore + nextLives * 4 + nextBoosts * 3;
        const comboRequirement = config.targetBestCombo ?? 0;
        const canWin = nextBestCombo >= comboRequirement;
        const finalScore = canWin ? victoryScore : Math.max(0, victoryScore - 18);
        setScore(finalScore);
        setIsSettling(false);
        settlingRef.current = false;
        finalizeRun(canWin ? "victory" : "failure", finalScore, nextInteractions);
        return;
      }

      const nextRoundIndex = roundIndex + 1;
      setRoundIndex(nextRoundIndex);
      setSelectedOptions([]);
      setFeedback(null);
      setTimeLeftMs(getRoundDuration(config, nextRoundIndex));
      setIsSettling(false);
      settlingRef.current = false;
    }, SETTLE_MS);
  };

  const startRun = () => {
    setPhase("playing");
    setRoundIndex(0);
    setLives(START_LIVES);
    setBoosts(START_BOOSTS);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedOptions([]);
    setIsSettling(false);
    setTimeLeftMs(getRoundDuration(config, 0));
    setOutcome("failure");
    setFeedback(null);
    setInteractions(0);
    setStartedAt(Date.now());
    settlingRef.current = false;
    completionSentRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    setMood("happy");
    setMessage(config.startMessage);
    void hapticSelection();
  };

  const activateBoost = () => {
    if (phase !== "playing" || boosts <= 0 || settlingRef.current || isSettling) return;

    const nextBoosts = boosts - 1;
    const roundCap = getRoundDuration(config, roundIndex);
    const extendedWindow = Math.min(roundCap, timeLeftMs + 1200);
    const nextLives = Math.min(MAX_LIVES, lives + 1);

    setBoosts(nextBoosts);
    setLives(nextLives);
    setTimeLeftMs(extendedWindow);
    setScore((value) => value + (lives >= MAX_LIVES ? 8 : 4));
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage(`${config.shortLabel}: support charge deployed.`);
    void hapticSelection();
  };

  useEffect(() => {
    if (phase !== "playing" || isSettling || settlingRef.current) return;
    const timer = window.setInterval(() => {
      setTimeLeftMs((value) => Math.max(0, value - 100));
    }, 100);
    return () => window.clearInterval(timer);
  }, [isSettling, phase, roundIndex]);

  useEffect(() => {
    if (phase !== "playing" || isSettling) return;
    if (timeLeftMs > 0) return;
    const timeout = window.setTimeout(() => {
      resolveRound(null, "timeout");
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [isSettling, phase, resolveRound, timeLeftMs]);

  useEffect(() => {
    if (phase !== "playing" && phase !== "paused") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        resolveRound(Number(event.key) - 1, "choice");
        return;
      }
      const lower = event.key.toLowerCase();
      if (lower === "b") {
        event.preventDefault();
        activateBoost();
        return;
      }
      if (lower === "p") {
        event.preventDefault();
        setPhase((value) => (value === "playing" ? "paused" : "playing"));
        return;
      }
      if (lower === "r") {
        event.preventDefault();
        startRun();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activateBoost, phase, resolveRound, startRun]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950 text-white">
      <div className={combineClasses("absolute inset-0", config.theme.aura)} />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className={combineClasses("text-xs font-black uppercase tracking-[0.22em]", config.theme.textSoft)}>
              {config.shortLabel}
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white">{config.title}</h2>
          </div>
          <div className={combineClasses("flex flex-wrap items-center gap-3 text-xs font-bold", config.theme.textSoft)}>
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Lives {lives}/{MAX_LIVES}</span>
            <span>Boosts {boosts}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div
            className={combineClasses("h-full", config.theme.progressBar)}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={combineClasses(
                "rounded-3xl border p-6 text-center",
                config.theme.panelBorder,
                config.theme.panelBackground,
              )}
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id={config.mascot} mood="thinking" size="lg" />
                <p className={combineClasses("max-w-2xl text-sm", config.theme.textSoft)}>
                  Complete 24 rounds with adaptive pressure, keep your streak alive, and avoid decoys.
                  {config.roundMode === "double" ? " Dual-lock rounds require two correct cues each." : ""}
                  {config.targetBestCombo ? ` Clear with a best combo of at least ${config.targetBestCombo}.` : ""}
                </p>
                <PhysicalButton
                  onClick={startRun}
                  className={combineClasses("h-12 px-8 text-sm font-black", config.theme.primaryButton)}
                >
                  Start Run
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
              className={combineClasses(
                "rounded-3xl border p-6",
                config.theme.panelBorder,
                config.theme.panelBackground,
              )}
            >
              <div className={combineClasses("mb-4 flex flex-wrap items-center justify-between gap-2 text-xs", config.theme.textSoft)}>
                <span className={combineClasses("inline-flex items-center gap-2 rounded-full border px-3 py-1", config.theme.chip)}>
                  <Gauge className="h-3.5 w-3.5" />
                  Round {roundIndex + 1}/{ROUND_COUNT} | Tier {round.tier} | Locks {selectedOptions.length}/{round.requiredHits}
                </span>
                <span className={combineClasses("inline-flex items-center gap-2 rounded-full border px-3 py-1", config.theme.chip)}>
                  <TimerReset className="h-3.5 w-3.5" />
                  {Math.max(0, (timeLeftMs / 1000)).toFixed(1)}s
                </span>
              </div>

              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <p className={combineClasses("text-sm", config.theme.textSoft)}>{round.prompt}</p>
                  <p className={combineClasses("mt-2 text-xs", config.theme.textSoft)}>
                    Learning sprinkle: {round.learningSprinkle}
                  </p>
                </div>
                <div className="shrink-0">
                  <MascotFriend id={config.mascot} mood={mascotMood} size="md" />
                </div>
              </div>

              {feedback ? (
                <div
                  className={combineClasses(
                    "mb-4 rounded-xl border px-3 py-2 text-xs font-bold",
                    config.theme.panelBorder,
                    config.theme.textSoft,
                  )}
                >
                  <span className="inline-flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    {feedback.text}
                  </span>
                </div>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-2">
                {round.options.map((option, index) => {
                  const selected = selectedOptions.includes(index);
                  const optionClass = selected
                    ? config.theme.optionActive
                    : config.theme.optionIdle;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      disabled={isSettling || selected}
                      onClick={() => resolveRound(index, "choice")}
                      className={combineClasses(
                        "rounded-2xl border px-4 py-3 text-left transition",
                        optionClass,
                        option.isTrap && !selected ? "shadow-[0_0_0_1px_rgba(244,63,94,0.16)_inset]" : "",
                      )}
                    >
                      <p className="text-sm font-black text-white">[{index + 1}] {option.label}</p>
                      <p className={combineClasses("mt-1 text-[11px] font-semibold", config.theme.textSoft)}>
                        {option.microHint}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <PhysicalButton
                  onClick={activateBoost}
                  disabled={boosts <= 0 || isSettling}
                  className={combineClasses("h-10 text-xs font-black disabled:opacity-40", config.theme.primaryButton)}
                >
                  <span className="inline-flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    Boost (+time / +life) [B]
                  </span>
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => setPhase("paused")}
                  disabled={isSettling}
                  className={combineClasses("h-10 text-xs font-black", config.theme.secondaryButton)}
                >
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause [P]
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
              className={combineClasses(
                "rounded-3xl border p-6 text-center",
                config.theme.panelBorder,
                config.theme.panelBackground,
              )}
            >
              <div className="flex justify-center">
                <MascotFriend id={config.mascot} mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Run Paused</h3>
              <p className={combineClasses("mt-2 text-sm", config.theme.textSoft)}>
                Resume when you are ready. Hotkeys: 1-4 choose, B boost, P pause/resume, R restart.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <PhysicalButton
                  onClick={() => setPhase("playing")}
                  className={combineClasses("h-11 px-6 text-sm font-black", config.theme.primaryButton)}
                >
                  <span className="inline-flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    Resume
                  </span>
                </PhysicalButton>
                <PhysicalButton
                  onClick={startRun}
                  className={combineClasses("h-11 px-6 text-sm font-black", config.theme.secondaryButton)}
                >
                  Restart [R]
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={combineClasses(
                "rounded-3xl border p-6 text-center",
                config.theme.panelBorder,
                config.theme.panelBackground,
              )}
            >
              <div className="flex justify-center">
                <MascotFriend id={config.mascot} mood={outcome === "victory" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {outcome === "victory" ? "Mission Cleared" : "Mission Failed"}
              </h3>
              <p className={combineClasses("mt-2 text-sm", config.theme.textSoft)}>
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              {config.targetBestCombo ? (
                <p className={combineClasses("mt-1 text-xs", config.theme.textSoft)}>
                  Combo target: {bestCombo}/{config.targetBestCombo}
                </p>
              ) : null}
              <div className="mt-5">
                <PhysicalButton
                  onClick={startRun}
                  className={combineClasses("h-11 px-7 text-sm font-black", config.theme.primaryButton)}
                >
                  Play Again
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
