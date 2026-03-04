"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GameDifficulty } from "@/lib/games/types";
import type { RegisteredGame } from "@/lib/games/catalog";
import { calculateStars } from "@/lib/games/scoring";
import { hapticCelebration, hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import PhysicalButton from "@/components/experience/PhysicalButton";

type ArcadeOutcome = {
  score: number;
  maxScore: number;
  stars: 0 | 1 | 2 | 3;
  timeMs: number;
  maxCombo: number;
  levelReached: number;
  shieldUses: number;
};

type PrecisionRound = {
  mechanic: "precision-choice";
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
};

type SequenceRound = {
  mechanic: "sequence-recall";
  id: string;
  prompt: string;
  sequence: string[];
  tokens: string[];
};

type SortRound = {
  mechanic: "lane-sort";
  id: string;
  prompt: string;
  item: string;
  leftLabel: string;
  rightLabel: string;
  correctLane: "left" | "right";
};

type ArcadeRound = PrecisionRound | SequenceRound | SortRound;

type Props = {
  game: RegisteredGame;
  difficulty: GameDifficulty;
  renderPreset?: "standard" | "cinematic-rtx";
  onComplete: (outcome: ArcadeOutcome) => void;
};

type CompletionSummary = {
  score: number;
  maxScore: number;
  stars: 0 | 1 | 2 | 3;
  attempts: number;
  livesLeft: number;
};

const DIFFICULTY_WAVE_ROUNDS: Record<GameDifficulty, number> = {
  easy: 8,
  medium: 10,
  hard: 12,
};

const DIFFICULTY_ROUNDS_PER_LEVEL: Record<GameDifficulty, number> = {
  easy: 3,
  medium: 4,
  hard: 5,
};

const STARTING_LIVES: Record<GameDifficulty, number> = {
  easy: 4,
  medium: 3,
  hard: 3,
};

function nowMs() {
  return Date.now();
}

function seeded(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return () => {
    hash = (hash * 1664525 + 1013904223) | 0;
    return ((hash >>> 0) % 10_000) / 10_000;
  };
}

function buildPrecisionRound(rand: () => number, id: string): PrecisionRound {
  const verbs = ["Calibrate", "Stabilize", "Route", "Align", "Decode", "Sync", "Track", "Protect"];
  const nouns = ["energy lane", "signal pattern", "mission beacon", "orbit path", "safety grid", "control node"];
  const mods = ["safely", "quickly", "accurately", "without overload"];
  const verb = verbs[Math.floor(rand() * verbs.length)]!;
  const noun = nouns[Math.floor(rand() * nouns.length)]!;
  const mod = mods[Math.floor(rand() * mods.length)]!;
  const answerIndex = Math.floor(rand() * 4);
  const answer = `${verb} ${noun} ${mod}`;
  const options = [
    `${verb} random values only`,
    `Ignore ${noun} warnings`,
    "Skip all safety checks",
  ];
  options.splice(answerIndex, 0, answer);
  return {
    mechanic: "precision-choice",
    id,
    prompt: "Choose the best tactical move.",
    options,
    answerIndex,
  };
}

function buildSequenceRound(
  rand: () => number,
  id: string,
  difficulty: GameDifficulty,
  roundNumber: number,
): SequenceRound {
  const tokens = ["▲", "●", "■", "◆", "✦", "⬢", "⬣", "✳"];
  const baseLength = difficulty === "easy" ? 4 : difficulty === "medium" ? 5 : 6;
  const complexityBoost = Math.min(2, Math.floor(roundNumber / 14));
  const length = Math.min(8, baseLength + complexityBoost);
  const sequence = Array.from({ length }, () => tokens[Math.floor(rand() * tokens.length)]!);
  return {
    mechanic: "sequence-recall",
    id,
    prompt: "Memorize and replay the sequence.",
    sequence,
    tokens,
  };
}

function buildSortRound(rand: () => number, id: string): SortRound {
  const safeItems = ["Shield Node", "Safe Pulse", "Guardian Beacon", "Protected Channel", "Harmony Core"];
  const riskyItems = ["Overload Spark", "Hot Core", "Hazard Signal", "Volatile Flux", "Turbulence Coil"];
  const correctLane = rand() > 0.5 ? "left" : "right";
  const item =
    correctLane === "left"
      ? safeItems[Math.floor(rand() * safeItems.length)]!
      : riskyItems[Math.floor(rand() * riskyItems.length)]!;
  return {
    mechanic: "lane-sort",
    id,
    prompt: "Sort the incoming item into the correct lane.",
    item,
    leftLabel: "SAFE",
    rightLabel: "RISK",
    correctLane,
  };
}

function buildRound(game: RegisteredGame, difficulty: GameDifficulty, roundNumber: number): ArcadeRound {
  const id = `${game.id}-r-${roundNumber + 1}`;
  const rand = seeded(`${game.id}:${difficulty}:${roundNumber}`);
  if (game.mechanic === "sequence-recall") return buildSequenceRound(rand, id, difficulty, roundNumber);
  if (game.mechanic === "lane-sort") return buildSortRound(rand, id);
  return buildPrecisionRound(rand, id);
}

function buildRoundsBatch(
  game: RegisteredGame,
  difficulty: GameDifficulty,
  startRound: number,
  count: number,
): ArcadeRound[] {
  return Array.from({ length: count }, (_, offset) => buildRound(game, difficulty, startRound + offset));
}

export default function ImmersiveArcadeTemplate({
  game,
  difficulty,
  renderPreset = "standard",
  onComplete,
}: Props) {
  const waveRounds = DIFFICULTY_WAVE_ROUNDS[difficulty];
  const roundsPerLevel = DIFFICULTY_ROUNDS_PER_LEVEL[difficulty];
  const startingLives = STARTING_LIVES[difficulty];

  const [rounds, setRounds] = useState<ArcadeRound[]>(() => buildRoundsBatch(game, difficulty, 0, waveRounds));
  const particleSeed = useMemo(() => seeded(`particles:${game.id}:${difficulty}`), [game.id, difficulty]);
  const particleCount = renderPreset === "cinematic-rtx" ? 44 : 22;
  const backdropVideoOpacity = renderPreset === "cinematic-rtx" ? "opacity-35" : "opacity-20";
  const activeVideoOpacity = renderPreset === "cinematic-rtx" ? "opacity-20" : "opacity-10";
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, index) => ({
        id: `${game.id}-p-${index + 1}`,
        size: 3 + Math.floor(particleSeed() * 6),
        left: Math.floor(particleSeed() * 100),
        delay: Number((particleSeed() * 4).toFixed(2)),
        duration: Number(((renderPreset === "cinematic-rtx" ? 6 : 8) + particleSeed() * 8).toFixed(2)),
        opacity: Number((0.15 + particleSeed() * 0.5).toFixed(2)),
      })),
    [game.id, particleCount, particleSeed, renderPreset],
  );

  const [phase, setPhase] = useState<"ready" | "playing" | "complete">("ready");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [lives, setLives] = useState(startingLives);
  const [startedAt, setStartedAt] = useState<number>(() => nowMs());
  const [feedback, setFeedback] = useState<"correct" | "wrong" | "shield" | null>(null);
  const [showSequence, setShowSequence] = useState(false);
  const [sequenceInput, setSequenceInput] = useState<string[]>([]);
  const [comboStreak, setComboStreak] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [shields, setShields] = useState(1);
  const [shieldUses, setShieldUses] = useState(0);
  const [level, setLevel] = useState(1);
  const [levelUpFlash, setLevelUpFlash] = useState(false);
  const [completionSummary, setCompletionSummary] = useState<CompletionSummary | null>(null);
  const sequenceHideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const levelFlashTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = rounds[index] ?? null;
  const maxPossibleScore = Math.max(3, attempts * 3);
  const waveProgress = ((index % waveRounds) + 1) / waveRounds;

  const startSequencePrompt = (round: ArcadeRound | null) => {
    if (sequenceHideTimeoutRef.current) clearTimeout(sequenceHideTimeoutRef.current);
    if (!round || round.mechanic !== "sequence-recall") {
      setShowSequence(false);
      return;
    }
    setShowSequence(true);
    setSequenceInput([]);
    sequenceHideTimeoutRef.current = setTimeout(() => setShowSequence(false), 1800);
  };

  useEffect(
    () => () => {
      if (sequenceHideTimeoutRef.current) clearTimeout(sequenceHideTimeoutRef.current);
      if (levelFlashTimeoutRef.current) clearTimeout(levelFlashTimeoutRef.current);
    },
    [],
  );

  const completeGame = (nextScore: number, nextAttempts: number, finalLevel: number, finalLives: number) => {
    const maxScore = Math.max(3, nextAttempts * 3);
    const stars = calculateStars(nextScore, maxScore);
    if (stars === 3) void hapticCelebration();

    setCompletionSummary({
      score: nextScore,
      maxScore,
      stars,
      attempts: nextAttempts,
      livesLeft: finalLives,
    });
    setPhase("complete");

    onComplete({
      score: nextScore,
      maxScore,
      stars,
      timeMs: nowMs() - startedAt,
      maxCombo,
      levelReached: finalLevel,
      shieldUses,
    });
  };

  const advanceRound = (resultKind: "correct" | "wrong" | "shield", earnedPoints: number, lifePenalty = 0) => {
    const nextScore = resultKind === "correct" ? score + earnedPoints : score;
    if (resultKind === "correct") setScore(nextScore);

    const nextAttempts = attempts + 1;
    const nextLives = Math.max(0, lives - lifePenalty);
    setAttempts(nextAttempts);
    if (lifePenalty > 0) setLives(nextLives);

    if (nextLives <= 0) {
      completeGame(nextScore, nextAttempts, level, nextLives);
      return;
    }

    const next = index + 1;

    setTimeout(() => {
      let nextRounds = rounds;
      if (next >= nextRounds.length) {
        const extension = buildRoundsBatch(game, difficulty, nextRounds.length, waveRounds);
        nextRounds = [...nextRounds, ...extension];
        setRounds(nextRounds);
      }

      const previousLevel = Math.floor(index / roundsPerLevel) + 1;
      const nextLevel = Math.floor(next / roundsPerLevel) + 1;
      if (nextLevel > previousLevel) {
        setLevel(nextLevel);
        setLevelUpFlash(true);
        if (levelFlashTimeoutRef.current) clearTimeout(levelFlashTimeoutRef.current);
        levelFlashTimeoutRef.current = setTimeout(() => setLevelUpFlash(false), 900);
      }

      setIndex(next);
      setFeedback(null);
      setSequenceInput([]);
      startSequencePrompt(nextRounds[next] ?? null);
    }, 420);
  };

  const markResult = (isCorrect: boolean) => {
    if (isCorrect) {
      const nextCombo = comboStreak + 1;
      const nextMultiplier = Math.min(3, 1 + Math.floor(nextCombo / 3));
      const earnedPoints = nextMultiplier;
      setComboStreak(nextCombo);
      setMaxCombo((prev) => (nextCombo > prev ? nextCombo : prev));
      setMultiplier(nextMultiplier);
      if (nextCombo > 0 && nextCombo % 5 === 0) {
        setShields((prev) => Math.min(3, prev + 1));
      }
      setFeedback("correct");
      void hapticSuccess();
      advanceRound("correct", earnedPoints);
      return;
    }

    if (shields > 0) {
      setShields((prev) => Math.max(0, prev - 1));
      setShieldUses((prev) => prev + 1);
      setComboStreak((prev) => Math.max(0, prev - 1));
      setMultiplier((prev) => Math.max(1, prev - 1));
      setFeedback("shield");
      advanceRound("shield", 0);
      return;
    }

    setComboStreak(0);
    setMultiplier(1);
    setFeedback("wrong");
    void hapticError();
    advanceRound("wrong", 0, 1);
  };

  const startGame = () => {
    void hapticSelection();
    const initialRounds = buildRoundsBatch(game, difficulty, 0, waveRounds);
    setRounds(initialRounds);
    setScore(0);
    setAttempts(0);
    setLives(startingLives);
    setIndex(0);
    setFeedback(null);
    setSequenceInput([]);
    setComboStreak(0);
    setMaxCombo(0);
    setMultiplier(1);
    setShields(1);
    setShieldUses(0);
    setLevel(1);
    setLevelUpFlash(false);
    setStartedAt(nowMs());
    setCompletionSummary(null);
    setPhase("playing");
    startSequencePrompt(initialRounds[0] ?? null);
  };

  const endRun = () => {
    if (phase !== "playing") return;
    completeGame(score, Math.max(1, attempts), level, lives);
  };

  const shareMission = async () => {
    const text = `I scored ${score}/${maxPossibleScore} in ${game.title} with combo x${maxCombo}.`;
    const shareUrl = `${window.location.origin}/games/${game.id}?difficulty=${difficulty}`;
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title: `${game.title} Challenge`, text, url: shareUrl });
        return;
      } catch {
        // user canceled or share failed
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(`${text} ${shareUrl}`);
    }
  };

  const handlePrecisionChoice = (choiceIndex: number) => {
    if (!current || current.mechanic !== "precision-choice" || phase !== "playing") return;
    markResult(choiceIndex === current.answerIndex);
  };

  const handleSequenceToken = (token: string) => {
    if (!current || current.mechanic !== "sequence-recall" || phase !== "playing" || showSequence) return;
    const expected = current.sequence[sequenceInput.length];
    const nextInput = [...sequenceInput, token];
    setSequenceInput(nextInput);
    if (token !== expected) {
      markResult(false);
      return;
    }
    if (nextInput.length >= current.sequence.length) {
      markResult(true);
    }
  };

  const handleSortLane = (lane: "left" | "right") => {
    if (!current || current.mechanic !== "lane-sort" || phase !== "playing") return;
    markResult(lane === current.correctLane);
  };

  if (phase === "ready") {
    return (
      <div className="relative min-h-[600px] overflow-hidden rounded-[2.5rem] border border-white/20">
        <Image src={game.backdropImage} alt="" fill className="object-cover" />
        {game.backdropVideo ? (
          <video className={`absolute inset-0 h-full w-full object-cover ${backdropVideoOpacity}`} autoPlay muted loop playsInline>
            <source src={game.backdropVideo} type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute rounded-full bg-white"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.left}%`,
                bottom: "-12%",
                opacity: particle.opacity,
              }}
              animate={{ y: ["0%", "-120%"], x: [0, 10, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: particle.duration,
                ease: "linear",
                delay: particle.delay,
              }}
            />
          ))}
        </div>
        <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-55`} />
        <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center gap-6 p-8 text-white">
          <p className="text-8xl drop-shadow-lg">{game.icon}</p>
          <h2 className="text-center text-5xl font-black italic tracking-tight">{game.title}</h2>
          <p className="max-w-2xl text-center text-sm">
            Endless mission mode with auto-scaling levels. Difficulty:
            <span className="ml-1 font-bold uppercase">{difficulty}</span>.
          </p>
          <PhysicalButton onClick={startGame} className="h-14 bg-white px-10 text-base font-black text-zinc-900">
            Launch Mission
          </PhysicalButton>
        </div>
      </div>
    );
  }

  if (phase === "complete") {
    const summary = completionSummary ?? {
      score,
      maxScore: maxPossibleScore,
      stars: calculateStars(score, maxPossibleScore),
      attempts,
      livesLeft: lives,
    };

    return (
      <div className="relative min-h-[600px] overflow-hidden rounded-[2.5rem] border border-white/20">
        <Image src={game.backdropImage} alt="" fill className="object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-70`} />
        <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center gap-4 text-white">
          <p className="text-6xl">{game.icon}</p>
          <h3 className="text-4xl font-black italic">Run Complete</h3>
          <p className="text-sm font-semibold">
            Score {summary.score}/{summary.maxScore} | Attempts {summary.attempts} | Max Combo x{maxCombo}
          </p>
          <p className="text-xs uppercase tracking-wider opacity-95">Level {level} | Lives Left {summary.livesLeft}</p>
          <div className="text-4xl">{summary.stars >= 3 ? "⭐⭐⭐" : summary.stars === 2 ? "⭐⭐" : summary.stars === 1 ? "⭐" : "🌱"}</div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            <PhysicalButton onClick={startGame} className="h-12 bg-white px-6 text-sm font-black text-zinc-900">
              Play Again
            </PhysicalButton>
            <PhysicalButton onClick={() => void shareMission()} className="h-12 bg-zinc-900/70 px-6 text-sm font-black text-white">
              Share Challenge
            </PhysicalButton>
          </div>
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="relative min-h-[400px] rounded-[2rem] border border-white/20 bg-black/20 p-8 text-white">
        Loading mission...
      </div>
    );
  }

  return (
    <div className="relative min-h-[600px] overflow-hidden rounded-[2.5rem] border border-white/20">
      <Image src={game.backdropImage} alt="" fill className="object-cover" />
      {game.backdropVideo ? (
        <video className={`absolute inset-0 h-full w-full object-cover ${activeVideoOpacity}`} autoPlay muted loop playsInline>
          <source src={game.backdropVideo} type="video/mp4" />
        </video>
      ) : null}
      <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-70`} />
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={`${particle.id}-play`}
            className="absolute rounded-full bg-white"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              bottom: "-12%",
              opacity: particle.opacity * 0.85,
            }}
            animate={{ y: ["0%", "-115%"], x: [0, 8, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: Math.max(6, particle.duration - 1),
              ease: "linear",
              delay: particle.delay * 0.7,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 p-6 text-white">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span>Run Step {attempts + 1}</span>
          <span>Stage {level}</span>
          <span>Combo x{Math.max(1, multiplier)}</span>
          <span>Shields {shields}</span>
          <span>Lives {lives}</span>
          <span>Score {score}</span>
        </div>
        <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-white/30">
          <motion.div className="h-full bg-white" animate={{ width: `${Math.min(100, waveProgress * 100)}%` }} />
        </div>
        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/85">Infinite Level Loop Active</p>

        {levelUpFlash ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-3 rounded-2xl border border-amber-200 bg-amber-300/20 px-4 py-2 text-center text-sm font-black uppercase tracking-wider text-amber-100"
          >
            Stage Up Unlocked
          </motion.div>
        ) : null}

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="rounded-3xl border border-white/30 bg-black/25 p-6 backdrop-blur-sm"
          >
            <p className="text-sm font-semibold">{current.prompt}</p>

            {current.mechanic === "precision-choice" ? (
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {current.options.map((option, choiceIndex) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handlePrecisionChoice(choiceIndex)}
                    className={[
                      "rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors",
                      feedback === "correct" && choiceIndex === current.answerIndex
                        ? "border-emerald-300 bg-emerald-500/30"
                        : feedback === "shield" && choiceIndex === current.answerIndex
                          ? "border-sky-300 bg-sky-500/30"
                          : "border-white/30 bg-white/15 hover:bg-white/25",
                    ].join(" ")}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : null}

            {current.mechanic === "sequence-recall" ? (
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-white/30 bg-white/10 p-3">
                  {showSequence ? current.sequence.join("  ") : "Repeat the sequence from memory"}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {current.tokens.map((token) => (
                    <button
                      key={token}
                      type="button"
                      onClick={() => handleSequenceToken(token)}
                      disabled={showSequence}
                      className="rounded-2xl border border-white/30 bg-white/15 py-3 text-xl font-black hover:bg-white/25 disabled:opacity-50"
                    >
                      {token}
                    </button>
                  ))}
                </div>
                <p className="text-xs opacity-90">Input: {sequenceInput.join(" ") || "..."}</p>
              </div>
            ) : null}

            {current.mechanic === "lane-sort" ? (
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-white/30 bg-white/10 p-4 text-center text-lg font-black">
                  {current.item}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleSortLane("left")}
                    className="rounded-2xl border border-white/30 bg-emerald-500/25 px-4 py-3 text-sm font-bold hover:bg-emerald-500/35"
                  >
                    {current.leftLabel}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSortLane("right")}
                    className="rounded-2xl border border-white/30 bg-rose-500/25 px-4 py-3 text-sm font-bold hover:bg-rose-500/35"
                  >
                    {current.rightLabel}
                  </button>
                </div>
              </div>
            ) : null}

            {feedback === "shield" ? (
              <p className="mt-4 rounded-xl border border-sky-200/50 bg-sky-500/20 px-3 py-2 text-xs font-bold uppercase tracking-wider text-sky-100">
                Shield absorbed a miss
              </p>
            ) : null}
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 flex justify-end">
          <PhysicalButton onClick={endRun} className="h-10 bg-white px-5 text-xs font-black text-zinc-900">
            Bank Score
          </PhysicalButton>
        </div>
      </div>
    </div>
  );
}
