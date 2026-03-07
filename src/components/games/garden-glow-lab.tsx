"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Droplets, SunMedium, Sparkles } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import JuicyStreak from "@/components/experience/JuicyStreak";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticCelebration, hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import { createLegacySessionId, emitLegacyGameComplete } from "@/lib/games/legacy-runtime-events";

type ResourceKey = "sun" | "water" | "soil";

type GardenCard = {
  id: string;
  label: string;
  icon: ResourceKey;
  values: Record<ResourceKey, number>;
};

type GardenRound = {
  id: string;
  plant: string;
  emoji: string;
  target: Record<ResourceKey, number>;
  cards: GardenCard[];
};

type Phase = "ready" | "playing" | "feedback" | "complete";

const TOTAL_ROUNDS = 8;

const CARD_POOL: GardenCard[] = [
  { id: "sunbeam-sheet", label: "Sun Sheet", icon: "sun", values: { sun: 2, water: 0, soil: 0 } },
  { id: "mist-can", label: "Mist Can", icon: "water", values: { sun: 0, water: 2, soil: 0 } },
  { id: "mulch-mix", label: "Mulch Mix", icon: "soil", values: { sun: 0, water: 0, soil: 2 } },
  { id: "warm-rain", label: "Warm Rain", icon: "water", values: { sun: 1, water: 1, soil: 0 } },
  { id: "sun-soil", label: "Sun Soil", icon: "soil", values: { sun: 1, water: 0, soil: 1 } },
  { id: "dew-dust", label: "Dew Dust", icon: "water", values: { sun: 0, water: 1, soil: 1 } },
  { id: "glow-bloom", label: "Glow Bloom", icon: "sun", values: { sun: 1, water: 1, soil: 1 } },
];

const ROUNDS: GardenRound[] = [
  {
    id: "sprout-fern",
    plant: "Sprout Fern",
    emoji: "🌿",
    target: { sun: 2, water: 1, soil: 1 },
    cards: [CARD_POOL[0], CARD_POOL[5], CARD_POOL[2], CARD_POOL[6], CARD_POOL[1]],
  },
  {
    id: "moon-mint",
    plant: "Moon Mint",
    emoji: "🌱",
    target: { sun: 1, water: 2, soil: 1 },
    cards: [CARD_POOL[1], CARD_POOL[4], CARD_POOL[3], CARD_POOL[0], CARD_POOL[2]],
  },
  {
    id: "cinder-rose",
    plant: "Cinder Rose",
    emoji: "🌹",
    target: { sun: 3, water: 1, soil: 1 },
    cards: [CARD_POOL[6], CARD_POOL[0], CARD_POOL[4], CARD_POOL[1], CARD_POOL[5]],
  },
  {
    id: "brook-lily",
    plant: "Brook Lily",
    emoji: "🪷",
    target: { sun: 1, water: 3, soil: 1 },
    cards: [CARD_POOL[3], CARD_POOL[1], CARD_POOL[5], CARD_POOL[0], CARD_POOL[2]],
  },
  {
    id: "hollow-oak",
    plant: "Hollow Oak",
    emoji: "🌳",
    target: { sun: 1, water: 1, soil: 3 },
    cards: [CARD_POOL[2], CARD_POOL[4], CARD_POOL[5], CARD_POOL[0], CARD_POOL[1]],
  },
  {
    id: "firefly-vine",
    plant: "Firefly Vine",
    emoji: "✨",
    target: { sun: 2, water: 2, soil: 2 },
    cards: [CARD_POOL[6], CARD_POOL[6], CARD_POOL[3], CARD_POOL[4], CARD_POOL[5]],
  },
  {
    id: "sunset-pea",
    plant: "Sunset Pea",
    emoji: "🫛",
    target: { sun: 2, water: 2, soil: 1 },
    cards: [CARD_POOL[3], CARD_POOL[6], CARD_POOL[0], CARD_POOL[5], CARD_POOL[2]],
  },
  {
    id: "cloud-berry",
    plant: "Cloud Berry",
    emoji: "🫐",
    target: { sun: 1, water: 2, soil: 2 },
    cards: [CARD_POOL[5], CARD_POOL[6], CARD_POOL[1], CARD_POOL[4], CARD_POOL[0]],
  },
];

function resourceIcon(type: ResourceKey) {
  if (type === "sun") return SunMedium;
  if (type === "water") return Droplets;
  return Leaf;
}

function addResources(
  left: Record<ResourceKey, number>,
  right: Record<ResourceKey, number>,
): Record<ResourceKey, number> {
  return {
    sun: left.sun + right.sun,
    water: left.water + right.water,
    soil: left.soil + right.soil,
  };
}

function isExactMatch(
  left: Record<ResourceKey, number>,
  right: Record<ResourceKey, number>,
) {
  return left.sun === right.sun && left.water === right.water && left.soil === right.soil;
}

export default function GardenGlowLab() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; total: Record<ResourceKey, number> } | null>(null);
  const sessionIdRef = useRef(createLegacySessionId());
  const startedAtRef = useRef(0);
  const interactionCountRef = useRef(0);

  const round = ROUNDS[roundIndex] ?? ROUNDS[0];

  const selectedCards = useMemo(
    () => round.cards.filter((card) => selectedIds.includes(card.id)),
    [round.cards, selectedIds],
  );

  const selectedTotal = useMemo(() => {
    return selectedCards.reduce<Record<ResourceKey, number>>(
      (acc, card) => addResources(acc, card.values),
      { sun: 0, water: 0, soil: 0 },
    );
  }, [selectedCards]);

  const startGame = useCallback(() => {
    setPhase("playing");
    setRoundIndex(0);
    setSelectedIds([]);
    setScore(0);
    setStreak(0);
    setFeedback(null);
    sessionIdRef.current = createLegacySessionId();
    startedAtRef.current = Date.now();
    interactionCountRef.current = 0;
    setMood("happy");
    setMessage("Pick two care cards to help each plant glow.");
    void hapticSelection();
  }, [setMessage, setMood]);

  const advanceRound = useCallback((wasCorrect: boolean) => {
    const isLast = roundIndex >= TOTAL_ROUNDS - 1;
    if (isLast) {
      setPhase("complete");
      setMood(wasCorrect ? "cheering" : "happy");
      setMessage(wasCorrect ? "The garden is glowing beautifully." : "The garden still learned from your care choices.");
      emitLegacyGameComplete({
        sessionId: sessionIdRef.current,
        gameId: "garden-glow-lab",
        elapsedMs: Math.max(0, Date.now() - startedAtRef.current),
        interactions: Math.max(1, interactionCountRef.current),
        score: wasCorrect ? score + 14 : score,
        maxScore: TOTAL_ROUNDS * 14,
        difficulty: "easy",
        source: "component",
        occurredAt: new Date().toISOString(),
      });
      return;
    }

    setRoundIndex((value) => value + 1);
    setSelectedIds([]);
    setFeedback(null);
    setPhase("playing");
  }, [roundIndex, score, setMessage, setMood]);

  const evaluateSelection = useCallback((nextIds: string[]) => {
    const chosen = round.cards.filter((card) => nextIds.includes(card.id));
    const total = chosen.reduce<Record<ResourceKey, number>>(
      (acc, card) => addResources(acc, card.values),
      { sun: 0, water: 0, soil: 0 },
    );
    const correct = isExactMatch(total, round.target);
    setFeedback({ correct, total });
    setPhase("feedback");
    setScore((value) => value + (correct ? 14 : 0));
    setStreak((value) => (correct ? value + 1 : 0));
    setMood(correct ? "happy" : "thinking");
    setMessage(correct ? `${round.plant} is glowing!` : `${round.plant} needs a different care blend.`);
    if (correct) {
      if (streak + 1 >= 3) {
        void hapticCelebration();
      } else {
        void hapticSuccess();
      }
    } else {
      void hapticError();
    }
    window.setTimeout(() => advanceRound(correct), 1100);
  }, [advanceRound, round, setMessage, setMood, streak]);

  const toggleCard = useCallback((cardId: string) => {
    if (phase !== "playing") return;
    interactionCountRef.current += 1;
    void hapticSelection();

    let nextIds: string[];
    if (selectedIds.includes(cardId)) {
      nextIds = selectedIds.filter((id) => id !== cardId);
    } else if (selectedIds.length < 2) {
      nextIds = [...selectedIds, cardId];
    } else {
      nextIds = [selectedIds[1] ?? selectedIds[0], cardId].filter(Boolean) as string[];
    }

    setSelectedIds(nextIds);
    if (nextIds.length === 2) {
      evaluateSelection(nextIds);
    }
  }, [evaluateSelection, phase, selectedIds]);

  const statItems: Array<{ key: ResourceKey; label: string }> = [
    { key: "sun", label: "Sun" },
    { key: "water", label: "Water" },
    { key: "soil", label: "Soil" },
  ];

  return (
    <div className="relative overflow-hidden rounded-[2.6rem] border border-emerald-200/60 bg-[linear-gradient(180deg,#f3fbf4_0%,#e8f7f1_48%,#edf8ff_100%)] p-6 text-stone-900 shadow-[0_24px_80px_rgba(60,120,90,0.12)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.22),transparent_40%)]" />
      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-emerald-600">Cozy Science Garden</p>
            <h2 className="text-3xl font-black tracking-tight text-stone-900">Garden Glow Lab</h2>
          </div>
          <JuicyStreak count={streak} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="rounded-[2rem] border border-white/70 bg-white/80 p-8 text-center shadow-lg backdrop-blur"
            >
              <div className="mx-auto flex w-fit items-center gap-4 rounded-full bg-emerald-100 px-5 py-3 text-emerald-700">
                <Sparkles className="h-6 w-6" />
                <span className="text-sm font-black uppercase tracking-[0.2em]">Match each plant recipe with two care cards</span>
              </div>
              <div className="mt-6 flex justify-center">
                <MascotFriend id="terra" mood="happy" size="lg" />
              </div>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-600">
                Every plant asks for a calm blend of sunlight, water, and soil. Pick two care cards that add up exactly to the recipe and help the garden glow.
              </p>
              <div className="mt-8">
                <PhysicalButton onClick={startGame} className="h-12 bg-emerald-500 px-8 text-sm font-black text-white">
                  Start Growing
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" || phase === "feedback" ? (
            <motion.section
              key={round.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-500">Round {roundIndex + 1}/{TOTAL_ROUNDS}</p>
                    <h3 className="mt-2 text-3xl font-black text-stone-900">{round.plant}</h3>
                  </div>
                  <div className="text-6xl leading-none">{round.emoji}</div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {statItems.map(({ key, label }) => {
                    const Icon = resourceIcon(key);
                    return (
                      <div key={key} className="rounded-2xl bg-emerald-50 px-4 py-3">
                        <div className="flex items-center gap-2 text-emerald-700">
                          <Icon className="h-4 w-4" />
                          <span className="text-xs font-black uppercase tracking-[0.18em]">{label}</span>
                        </div>
                        <p className="mt-2 text-3xl font-black text-stone-900">{round.target[key]}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-gradient-to-br from-emerald-100 to-sky-100 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-stone-500">Selected blend</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {statItems.map(({ key, label }) => {
                      const Icon = resourceIcon(key);
                      const value = feedback?.total[key] ?? selectedTotal[key];
                      return (
                        <div key={key} className="rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                          <div className="flex items-center gap-2 text-stone-500">
                            <Icon className="h-4 w-4" />
                            <span className="text-xs font-black uppercase tracking-[0.18em]">{label}</span>
                          </div>
                          <p className="mt-2 text-2xl font-black text-stone-900">{value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur">
                <div className="grid gap-3">
                  {round.cards.map((card) => {
                    const selected = selectedIds.includes(card.id);
                    const Icon = resourceIcon(card.icon);
                    return (
                      <button
                        key={card.id}
                        type="button"
                        disabled={phase !== "playing"}
                        onClick={() => toggleCard(card.id)}
                        className={`rounded-[1.5rem] border px-4 py-4 text-left transition ${selected ? "border-emerald-400 bg-emerald-50 shadow-md" : "border-stone-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/60"}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-black text-stone-900">{card.label}</p>
                              <p className="text-xs text-stone-500">Choose up to two cards</p>
                            </div>
                          </div>
                          <div className="grid min-w-[120px] grid-cols-3 gap-2 text-center text-xs font-black text-stone-500">
                            <span>S {card.values.sun}</span>
                            <span>W {card.values.water}</span>
                            <span>So {card.values.soil}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {feedback ? (
                  <div className={`mt-5 rounded-[1.5rem] px-4 py-4 text-sm font-bold ${feedback.correct ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                    {feedback.correct ? "Perfect blend. The plant sparkles." : "Close, but the plant needed a different two-card recipe."}
                  </div>
                ) : (
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                    Select two cards to submit this round.
                  </p>
                )}
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section
              key="complete"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] border border-white/70 bg-white/85 p-8 text-center shadow-lg backdrop-blur"
            >
              <div className="flex justify-center">
                <MascotFriend id="terra" mood={score >= 70 ? "cheering" : "happy"} size="lg" />
              </div>
              <h3 className="mt-4 text-3xl font-black text-stone-900">Garden Day Complete</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                You helped {score / 14} plants glow by matching their care recipes with calm, balanced choices.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="rounded-2xl bg-emerald-50 px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">Score</p>
                  <p className="mt-1 text-3xl font-black text-stone-900">{score}</p>
                </div>
                <div className="rounded-2xl bg-sky-50 px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-600">Best streak</p>
                  <p className="mt-1 text-3xl font-black text-stone-900">{streak}</p>
                </div>
              </div>
              <div className="mt-8">
                <PhysicalButton onClick={startGame} className="h-12 bg-emerald-500 px-8 text-sm font-black text-white">
                  Grow Again
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
