"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { GameDifficulty, GameResult } from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticCelebration, hapticError, hapticSuccess } from "@/lib/platform/haptics";

type ForecastItem = {
  id: string;
  label: string;
  emoji: string;
  reason: string;
};

type ForecastRound = {
  id: string;
  title: string;
  sky: string;
  accent: string;
  friend: { name: string; emoji: string };
  temperature: string;
  weather: string;
  moment: string;
  items: ForecastItem[];
  correct: string[];
};

const ROUNDS_PER_GAME = 6;

const ROUND_LIBRARY: ForecastRound[] = [
  {
    id: "rainy-park",
    title: "Rainy Park Pack",
    sky: "🌧️",
    accent: "from-sky-100 via-cyan-50 to-blue-100",
    friend: { name: "Mika", emoji: "🐼" },
    temperature: "Cool",
    weather: "Rainy",
    moment: "Park walk",
    items: [
      { id: "boots", label: "Rain Boots", emoji: "🥾", reason: "Keeps puddles out." },
      { id: "umbrella", label: "Umbrella", emoji: "☂️", reason: "Blocks the rain." },
      { id: "jacket", label: "Light Jacket", emoji: "🧥", reason: "Helps on cool days." },
      { id: "sunglasses", label: "Sunglasses", emoji: "🕶️", reason: "Not needed in cloudy rain." },
      { id: "swim-fins", label: "Swim Fins", emoji: "🩴", reason: "Funny, but not for the park." },
      { id: "snow-gloves", label: "Snow Gloves", emoji: "🧤", reason: "Too heavy for this drizzle." },
    ],
    correct: ["boots", "umbrella", "jacket"],
  },
  {
    id: "sunny-play",
    title: "Sunny Playground Pack",
    sky: "☀️",
    accent: "from-amber-100 via-yellow-50 to-orange-100",
    friend: { name: "Nia", emoji: "🐰" },
    temperature: "Warm",
    weather: "Sunny",
    moment: "Playground time",
    items: [
      { id: "hat", label: "Sun Hat", emoji: "👒", reason: "Gives shade for the face." },
      { id: "water", label: "Water Bottle", emoji: "💧", reason: "Helps on a warm day." },
      { id: "sunnies", label: "Bright Shades", emoji: "🕶️", reason: "Great for shiny sun." },
      { id: "umbrella", label: "Umbrella", emoji: "☂️", reason: "No rain cloud here." },
      { id: "boots", label: "Rain Boots", emoji: "🥾", reason: "Too stompy for dry slides." },
      { id: "scarf", label: "Scarf", emoji: "🧣", reason: "Too cozy for a warm day." },
    ],
    correct: ["hat", "water", "sunnies"],
  },
  {
    id: "windy-kites",
    title: "Windy Kite Pack",
    sky: "💨",
    accent: "from-cyan-100 via-sky-50 to-indigo-100",
    friend: { name: "Ollie", emoji: "🦊" },
    temperature: "Cool",
    weather: "Windy",
    moment: "Hilltop kite time",
    items: [
      { id: "hoodie", label: "Cozy Hoodie", emoji: "🧥", reason: "Great when wind feels cool." },
      { id: "clip", label: "Hat Clip", emoji: "🪢", reason: "Keeps things from flying away." },
      { id: "water", label: "Water Bottle", emoji: "💧", reason: "Good for outdoor play." },
      { id: "flippers", label: "Flippers", emoji: "🩴", reason: "Not for a windy hill." },
      { id: "snow-boots", label: "Snow Boots", emoji: "👢", reason: "Too big for this weather." },
      { id: "sun-blanket", label: "Beach Blanket", emoji: "🏖️", reason: "Not the right tool today." },
    ],
    correct: ["hoodie", "clip", "water"],
  },
  {
    id: "snowy-bus",
    title: "Snowy Bus Stop Pack",
    sky: "❄️",
    accent: "from-slate-100 via-blue-50 to-cyan-100",
    friend: { name: "Pip", emoji: "🐧" },
    temperature: "Cold",
    weather: "Snowy",
    moment: "Bus stop wait",
    items: [
      { id: "coat", label: "Warm Coat", emoji: "🧥", reason: "Big warmth for cold air." },
      { id: "mittens", label: "Mittens", emoji: "🧤", reason: "Keeps fingers cozy." },
      { id: "boots", label: "Snow Boots", emoji: "👢", reason: "Good for snowy steps." },
      { id: "sunglasses", label: "Sunglasses", emoji: "🕶️", reason: "Not the first thing to grab." },
      { id: "watermelon", label: "Watermelon Fan", emoji: "🍉", reason: "Too silly for snow." },
      { id: "sunhat", label: "Sun Hat", emoji: "👒", reason: "Too breezy and cold today." },
    ],
    correct: ["coat", "mittens", "boots"],
  },
  {
    id: "drizzly-school",
    title: "Drizzly School Pack",
    sky: "🌦️",
    accent: "from-emerald-100 via-teal-50 to-sky-100",
    friend: { name: "Lulu", emoji: "🐨" },
    temperature: "Mild",
    weather: "Drizzly",
    moment: "School morning",
    items: [
      { id: "jacket", label: "Rain Jacket", emoji: "🧥", reason: "Good for little drizzle drops." },
      { id: "umbrella", label: "Mini Umbrella", emoji: "☂️", reason: "Helpful on the walk in." },
      { id: "folder", label: "Folder Sleeve", emoji: "📁", reason: "Keeps papers dry." },
      { id: "sandals", label: "Pool Sandals", emoji: "🩴", reason: "Better for splash day, not school." },
      { id: "kite", label: "Kite Reel", emoji: "🪁", reason: "Not needed for class." },
      { id: "snowcap", label: "Snow Cap", emoji: "🎿", reason: "Too warm for mild drizzle." },
    ],
    correct: ["jacket", "umbrella", "folder"],
  },
  {
    id: "hot-garden",
    title: "Hot Garden Helper Pack",
    sky: "🌞",
    accent: "from-rose-100 via-orange-50 to-yellow-100",
    friend: { name: "Tao", emoji: "🐯" },
    temperature: "Hot",
    weather: "Sunny",
    moment: "Garden helper time",
    items: [
      { id: "water", label: "Water Bottle", emoji: "💧", reason: "Best friend on a hot day." },
      { id: "sunhat", label: "Wide Sun Hat", emoji: "👒", reason: "Shades the face." },
      { id: "towel", label: "Wipe Towel", emoji: "🧺", reason: "Nice for hot garden work." },
      { id: "boots", label: "Rain Boots", emoji: "🥾", reason: "Too heavy for the hot sun." },
      { id: "mittens", label: "Mittens", emoji: "🧤", reason: "Too warm for today." },
      { id: "umbrella", label: "Storm Umbrella", emoji: "☂️", reason: "No storm cloud today." },
    ],
    correct: ["water", "sunhat", "towel"],
  },
];

function shuffleArray<T>(items: readonly T[]): T[] {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex]!, next[index]!];
  }
  return next;
}

export type CloudCrewForecastProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function CloudCrewForecast({ difficulty, onComplete }: CloudCrewForecastProps) {
  const rounds = useMemo(
    () => shuffleArray(ROUND_LIBRARY).slice(0, ROUNDS_PER_GAME).map((round) => ({ ...round, items: shuffleArray(round.items) })),
    [],
  );
  const [phase, setPhase] = useState<"ready" | "playing" | "feedback" | "complete">("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [feedbackIds, setFeedbackIds] = useState<string[] | null>(null);
  const [startTime, setStartTime] = useState(0);

  const currentRound = rounds[roundIndex] ?? null;
  const maxScore = ROUNDS_PER_GAME * 3;

  const setupRound = useCallback((index: number) => {
    if (!rounds[index]) {
      setPhase("complete");
      return;
    }
    setSelectedIds([]);
    setFeedbackIds(null);
    setPhase("playing");
  }, [rounds]);

  useEffect(() => {
    if (phase === "complete") {
      const stars = calculateStars(score, maxScore);
      if (stars === 3) void hapticCelebration();
      onComplete({
        gameType: "cloud-crew-forecast",
        score,
        maxScore,
        stars,
        timeMs: Date.now() - startTime,
        difficulty,
      });
    }
  }, [difficulty, maxScore, onComplete, phase, score, startTime]);

  const handleToggleItem = useCallback((itemId: string) => {
    if (phase !== "playing") return;
    setSelectedIds((current) => {
      if (current.includes(itemId)) {
        return current.filter((id) => id !== itemId);
      }
      if (current.length >= 3) return current;
      return [...current, itemId];
    });
  }, [phase]);

  const handleCheck = useCallback(() => {
    if (!currentRound || selectedIds.length !== 3 || phase !== "playing") return;
    const correctCount = selectedIds.filter((id) => currentRound.correct.includes(id)).length;
    setFeedbackIds(currentRound.correct);
    setScore((value) => value + correctCount);
    setPhase("feedback");
    if (correctCount === 3) void hapticSuccess();
    else void hapticError();
  }, [currentRound, phase, selectedIds]);

  useEffect(() => {
    if (phase !== "feedback") return;
    const timer = window.setTimeout(() => {
      const nextRoundIndex = roundIndex + 1;
      if (nextRoundIndex >= ROUNDS_PER_GAME) {
        setPhase("complete");
      } else {
        setRoundIndex(nextRoundIndex);
        setupRound(nextRoundIndex);
      }
    }, 1850);

    return () => window.clearTimeout(timer);
  }, [phase, roundIndex, setupRound]);

  if (phase === "ready") {
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-[2rem] bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 p-8 text-center shadow-sm">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
          <span>☁️</span>
          Cloud Crew Forecast
        </div>
        <div className="space-y-3">
          <h2 className="text-4xl font-black tracking-tight text-stone-900">Pack the perfect weather bag for each forecast.</h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-stone-600">
            Read the sky card, then choose the three items that help your friend most.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStartTime(Date.now());
            setRoundIndex(0);
            setupRound(0);
          }}
          className="rounded-2xl bg-stone-900 px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Start Packing
        </button>
      </div>
    );
  }

  if (phase === "complete") {
    const stars = calculateStars(score, maxScore);
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center gap-5 rounded-[2rem] bg-gradient-to-br from-amber-50 via-cyan-50 to-sky-100 p-8 text-center shadow-sm">
        <div className="text-5xl">{stars === 3 ? "🌟🌟🌟" : stars === 2 ? "⭐️⭐️" : stars === 1 ? "⭐️" : "☁️"}</div>
        <h2 className="text-3xl font-black text-stone-900">Your weather crew is ready for anything.</h2>
        <p className="text-lg text-stone-700">
          You packed <span className="font-black text-sky-700">{score}</span> of <span className="font-black">{maxScore}</span> perfect forecast items.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex min-h-[560px] flex-col gap-5 rounded-[2rem] bg-gradient-to-br p-6 shadow-sm ${currentRound?.accent ?? "from-sky-100 to-blue-100"}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Round {roundIndex + 1} of {ROUNDS_PER_GAME}</p>
          <h3 className="text-2xl font-black text-stone-900">{currentRound?.title}</h3>
        </div>
        <div className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
          Packed right: {score}/{maxScore}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[1.75rem] bg-stone-950/92 p-5 text-white shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200/80">Forecast Card</p>
          <div className="mt-4 rounded-[1.6rem] bg-white/10 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl">{currentRound?.friend.emoji}</div>
                <div className="mt-2 text-xl font-black">{currentRound?.friend.name}</div>
              </div>
              <div className="text-5xl">{currentRound?.sky}</div>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/80">
              <div className="rounded-2xl bg-white/10 px-4 py-3">Temperature: <span className="font-bold text-white">{currentRound?.temperature}</span></div>
              <div className="rounded-2xl bg-white/10 px-4 py-3">Weather: <span className="font-bold text-white">{currentRound?.weather}</span></div>
              <div className="rounded-2xl bg-white/10 px-4 py-3">Moment: <span className="font-bold text-white">{currentRound?.moment}</span></div>
            </div>
          </div>
          <div className="mt-4 rounded-[1.4rem] bg-white/10 p-4 text-sm leading-6 text-white/80">
            Choose exactly three things to tuck into the bag.
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-white/80 p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Pack List</p>
              <h4 className="mt-1 text-xl font-black text-stone-900">Bag choices</h4>
            </div>
            <div className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
              {selectedIds.length}/3 chosen
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {currentRound?.items.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              const isCorrect = feedbackIds?.includes(item.id) ?? false;
              const showWrong = phase === "feedback" && isSelected && !isCorrect;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleToggleItem(item.id)}
                  disabled={phase !== "playing"}
                  className={[
                    "rounded-[1.5rem] border p-4 text-left transition-all",
                    phase === "feedback" && isCorrect
                      ? "border-emerald-400 bg-emerald-50"
                      : showWrong
                        ? "border-rose-300 bg-rose-50"
                        : isSelected
                          ? "border-sky-400 bg-sky-50 shadow-[0_0_0_3px_rgba(125,211,252,0.18)]"
                          : "border-white/70 bg-white hover:border-sky-300 hover:bg-sky-50/50",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-3xl">{item.emoji}</div>
                      <div className="mt-2 text-base font-black text-stone-900">{item.label}</div>
                    </div>
                    {isSelected ? <div className="rounded-full bg-sky-100 px-2 py-1 text-[11px] font-bold text-sky-700">In bag</div> : null}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.reason}</p>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleCheck}
            disabled={selectedIds.length !== 3 || phase !== "playing"}
            className="mt-5 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45"
          >
            Pack The Bag
          </button>
        </section>
      </div>
    </div>
  );
}
