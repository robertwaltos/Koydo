"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { GameDifficulty, GameResult } from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticCelebration, hapticError, hapticSuccess } from "@/lib/platform/haptics";

type PlantPreference = {
  id: string;
  name: string;
  emoji: string;
  likesSun: boolean;
  likesWater: boolean;
  line: string;
};

type Bed = {
  id: string;
  label: string;
  emoji: string;
  sun: boolean;
  water: boolean;
};

type RoundSet = {
  title: string;
  accent: string;
  plants: PlantPreference[];
};

const ROUNDS_PER_GAME = 6;

const GARDEN_BEDS: Bed[] = [
  { id: "sun-wet", label: "Sunny + Splashy", emoji: "🌤️💧", sun: true, water: true },
  { id: "sun-dry", label: "Sunny + Dry", emoji: "☀️🪨", sun: true, water: false },
  { id: "shade-wet", label: "Shady + Splashy", emoji: "🌥️💧", sun: false, water: true },
  { id: "shade-dry", label: "Shady + Dry", emoji: "🌙🪵", sun: false, water: false },
];

const ROUND_LIBRARY: RoundSet[] = [
  {
    title: "Morning Sprout Garden",
    accent: "from-emerald-200 via-lime-100 to-sky-100",
    plants: [
      { id: "lotus", name: "Lotus", emoji: "🪷", likesSun: true, likesWater: true, line: "Loves bright puddles." },
      { id: "cactus", name: "Cactus", emoji: "🌵", likesSun: true, likesWater: false, line: "Likes warm, dry stones." },
      { id: "fern", name: "Fern", emoji: "🌿", likesSun: false, likesWater: true, line: "Prefers cool, wet shade." },
      { id: "mushroom", name: "Mushroom", emoji: "🍄", likesSun: false, likesWater: false, line: "Likes a calm, dry nook." },
    ],
  },
  {
    title: "Rainbow Patch",
    accent: "from-cyan-100 via-teal-100 to-emerald-100",
    plants: [
      { id: "watermelon", name: "Watermelon", emoji: "🍉", likesSun: true, likesWater: true, line: "Needs sun and juicy sips." },
      { id: "sunflower", name: "Sunflower", emoji: "🌻", likesSun: true, likesWater: false, line: "Faces the sun in dry soil." },
      { id: "moss", name: "Moss", emoji: "🍃", likesSun: false, likesWater: true, line: "Thrives in drippy shade." },
      { id: "acorn", name: "Acorn", emoji: "🌰", likesSun: false, likesWater: false, line: "Waits in a quiet, dry corner." },
    ],
  },
  {
    title: "Butterfly Yard",
    accent: "from-rose-100 via-amber-50 to-lime-100",
    plants: [
      { id: "strawberry", name: "Strawberry", emoji: "🍓", likesSun: true, likesWater: true, line: "Sweet berries love warm rain." },
      { id: "rosemary", name: "Rosemary", emoji: "🌱", likesSun: true, likesWater: false, line: "A sunny herb for dry beds." },
      { id: "violet", name: "Violet", emoji: "💜", likesSun: false, likesWater: true, line: "Small blooms like cool mist." },
      { id: "owl-mushroom", name: "Moon Cap", emoji: "🦉", likesSun: false, likesWater: false, line: "A sleepy cap for dry shade." },
    ],
  },
  {
    title: "Pondside Picnic",
    accent: "from-sky-100 via-cyan-100 to-blue-50",
    plants: [
      { id: "lily", name: "Lily", emoji: "🌸", likesSun: true, likesWater: true, line: "Likes sunlight on the pond." },
      { id: "corn", name: "Corn", emoji: "🌽", likesSun: true, likesWater: false, line: "Tall stalks like bright, dry rows." },
      { id: "snail-fern", name: "Snail Fern", emoji: "🐌", likesSun: false, likesWater: true, line: "Curls up where drops stay cool." },
      { id: "pinecone", name: "Pinecone", emoji: "🌲", likesSun: false, likesWater: false, line: "Rests best under a dry branch." },
    ],
  },
  {
    title: "Cozy Treehouse Beds",
    accent: "from-amber-100 via-orange-50 to-yellow-100",
    plants: [
      { id: "pumpkin", name: "Pumpkin", emoji: "🎃", likesSun: true, likesWater: true, line: "Big vines need sun and sips." },
      { id: "pepper", name: "Pepper", emoji: "🫑", likesSun: true, likesWater: false, line: "Likes warm beams and dry dirt." },
      { id: "mint", name: "Mint", emoji: "🍀", likesSun: false, likesWater: true, line: "Cool leaves love drippy shade." },
      { id: "truffle", name: "Truffle", emoji: "🤎", likesSun: false, likesWater: false, line: "Grows tucked in a dry hideaway." },
    ],
  },
  {
    title: "Moonbeam Meadow",
    accent: "from-indigo-100 via-violet-100 to-fuchsia-50",
    plants: [
      { id: "starfruit", name: "Starfruit", emoji: "⭐", likesSun: true, likesWater: true, line: "Glows best with sun and rain." },
      { id: "lavender", name: "Lavender", emoji: "🪻", likesSun: true, likesWater: false, line: "Soft purple likes warm dry spots." },
      { id: "sea-grass", name: "Sea Grass", emoji: "🌊", likesSun: false, likesWater: true, line: "Sways in shady water." },
      { id: "chestnut", name: "Chestnut", emoji: "🌰", likesSun: false, likesWater: false, line: "Waits in a dry shade nest." },
    ],
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

export type GardenPatchPlannerProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function GardenPatchPlanner({ difficulty, onComplete }: GardenPatchPlannerProps) {
  const rounds = useMemo(() => shuffleArray(ROUND_LIBRARY).slice(0, ROUNDS_PER_GAME), []);
  const [phase, setPhase] = useState<"ready" | "playing" | "feedback" | "complete">("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(null);
  const [plants, setPlants] = useState<PlantPreference[]>([]);
  const [placements, setPlacements] = useState<Record<string, string | null>>({});
  const [feedback, setFeedback] = useState<Record<string, boolean> | null>(null);
  const [startTime, setStartTime] = useState(0);

  const currentRound = rounds[roundIndex] ?? null;
  const maxScore = ROUNDS_PER_GAME * GARDEN_BEDS.length;

  const setupRound = useCallback((index: number) => {
    const round = rounds[index];
    if (!round) {
      setPhase("complete");
      return;
    }
    setPlants(shuffleArray(round.plants));
    setPlacements(Object.fromEntries(GARDEN_BEDS.map((bed) => [bed.id, null])));
    setFeedback(null);
    setSelectedPlantId(null);
    setPhase("playing");
  }, [rounds]);

  useEffect(() => {
    if (phase === "complete") {
      const stars = calculateStars(score, maxScore);
      if (stars === 3) void hapticCelebration();
      onComplete({
        gameType: "garden-patch-planner",
        score,
        maxScore,
        stars,
        timeMs: Date.now() - startTime,
        difficulty,
      });
    }
  }, [difficulty, maxScore, onComplete, phase, score, startTime]);

  useEffect(() => {
    const allFilled = phase === "playing" && GARDEN_BEDS.every((bed) => placements[bed.id]);
    if (!allFilled || !currentRound) return;

    const nextFeedback = Object.fromEntries(
      GARDEN_BEDS.map((bed) => {
        const plant = currentRound.plants.find((entry) => entry.id === placements[bed.id]);
        const correct = Boolean(plant && plant.likesSun === bed.sun && plant.likesWater === bed.water);
        return [bed.id, correct];
      }),
    ) as Record<string, boolean>;

    const roundPoints = Object.values(nextFeedback).filter(Boolean).length;
    let advanceTimer = 0;

    const feedbackTimer = window.setTimeout(() => {
      setFeedback(nextFeedback);
      setScore((value) => value + roundPoints);
      setPhase("feedback");

      if (roundPoints === GARDEN_BEDS.length) void hapticSuccess();
      else void hapticError();

      advanceTimer = window.setTimeout(() => {
        const nextRoundIndex = roundIndex + 1;
        if (nextRoundIndex >= ROUNDS_PER_GAME) {
          setPhase("complete");
        } else {
          setRoundIndex(nextRoundIndex);
          setupRound(nextRoundIndex);
        }
      }, 1700);
    }, 0);

    return () => {
      window.clearTimeout(feedbackTimer);
      window.clearTimeout(advanceTimer);
    };
  }, [currentRound, phase, placements, roundIndex, setupRound]);

  const placedPlantIds = useMemo(
    () => new Set(Object.values(placements).filter((value): value is string => Boolean(value))),
    [placements],
  );

  const handlePlantTap = useCallback((plantId: string) => {
    if (phase !== "playing") return;
    setSelectedPlantId((value) => (value === plantId ? null : plantId));
  }, [phase]);

  const handleBedTap = useCallback((bedId: string) => {
    if (phase !== "playing") return;
    setPlacements((current) => {
      const next = { ...current };
      if (selectedPlantId) {
        const previousBedId = Object.keys(next).find((key) => next[key] === selectedPlantId);
        if (previousBedId) next[previousBedId] = null;
        next[bedId] = selectedPlantId;
      } else if (next[bedId]) {
        next[bedId] = null;
      }
      return next;
    });
    if (selectedPlantId) setSelectedPlantId(null);
  }, [phase, selectedPlantId]);

  if (phase === "ready") {
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-[2rem] bg-gradient-to-br from-emerald-100 via-lime-50 to-sky-100 p-8 text-center shadow-sm">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
          <span>🌱</span>
          Garden Patch Planner
        </div>
        <div className="space-y-3">
          <h2 className="text-4xl font-black tracking-tight text-stone-900">Match each plant to the right little garden bed.</h2>
          <p className="mx-auto max-w-xl text-base leading-7 text-stone-600">
            Watch the sun and water clues, then tuck each plant into the bed where it will feel happiest.
          </p>
        </div>
        <div className="grid gap-3 text-left text-sm text-stone-700 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/75 p-4 shadow-sm">☀️ + 💧 means bright and splashy.</div>
          <div className="rounded-2xl bg-white/75 p-4 shadow-sm">🌥️ + 🪵 means shady and dry.</div>
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
          Start Planting
        </button>
      </div>
    );
  }

  if (phase === "complete") {
    const stars = calculateStars(score, maxScore);
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center gap-5 rounded-[2rem] bg-gradient-to-br from-amber-50 via-lime-50 to-emerald-100 p-8 text-center shadow-sm">
        <div className="text-5xl">{stars === 3 ? "🌟🌟🌟" : stars === 2 ? "⭐️⭐️" : stars === 1 ? "⭐️" : "🌱"}</div>
        <h2 className="text-3xl font-black text-stone-900">Your garden is glowing.</h2>
        <p className="text-lg text-stone-700">
          You matched <span className="font-black text-emerald-700">{score}</span> of <span className="font-black">{maxScore}</span> plant clues.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex min-h-[560px] flex-col gap-5 rounded-[2rem] bg-gradient-to-br p-6 shadow-sm ${currentRound?.accent ?? "from-emerald-100 to-sky-100"}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Round {roundIndex + 1} of {ROUNDS_PER_GAME}</p>
          <h3 className="text-2xl font-black text-stone-900">{currentRound?.title}</h3>
        </div>
        <div className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
          Correct beds: {score}/{maxScore}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[1.75rem] bg-white/78 p-5 shadow-sm backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Garden Map</p>
              <h4 className="text-xl font-black text-stone-900">Tap a plant, then tap a bed.</h4>
            </div>
            {selectedPlantId ? (
              <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Plant selected</div>
            ) : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {GARDEN_BEDS.map((bed) => {
              const placedPlant = currentRound?.plants.find((plant) => plant.id === placements[bed.id]) ?? null;
              const status = feedback?.[bed.id];
              return (
                <button
                  key={bed.id}
                  type="button"
                  onClick={() => handleBedTap(bed.id)}
                  className={[
                    "min-h-[172px] rounded-[1.5rem] border-2 p-4 text-left transition-all",
                    status === true
                      ? "border-emerald-400 bg-emerald-50"
                      : status === false
                        ? "border-rose-300 bg-rose-50"
                        : "border-white/80 bg-white/70 hover:border-emerald-300 hover:bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-stone-600">
                    <span>{bed.label}</span>
                    <span>{bed.emoji}</span>
                  </div>
                  <div className="mt-5 flex min-h-[84px] items-center justify-center rounded-[1.25rem] border border-dashed border-stone-200 bg-stone-50/70">
                    {placedPlant ? (
                      <div className="text-center">
                        <div className="text-4xl">{placedPlant.emoji}</div>
                        <div className="mt-2 text-sm font-bold text-stone-800">{placedPlant.name}</div>
                      </div>
                    ) : (
                      <div className="text-center text-sm text-stone-400">Drop a plant here</div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-stone-950/90 p-5 text-white shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/80">Plant Basket</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {plants.map((plant) => {
              const isPlaced = placedPlantIds.has(plant.id);
              const isSelected = selectedPlantId === plant.id;
              return (
                <button
                  key={plant.id}
                  type="button"
                  onClick={() => handlePlantTap(plant.id)}
                  disabled={isPlaced || phase !== "playing"}
                  className={[
                    "rounded-[1.5rem] border p-4 text-left transition-all",
                    isPlaced
                      ? "border-white/10 bg-white/10 opacity-45"
                      : isSelected
                        ? "border-emerald-300 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(110,231,183,0.15)]"
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-3xl">{plant.emoji}</div>
                      <div className="mt-2 text-base font-black">{plant.name}</div>
                    </div>
                    <div className="rounded-full bg-white/10 px-2 py-1 text-[11px] font-semibold text-white/70">
                      {plant.likesSun ? "☀️" : "🌥️"} {plant.likesWater ? "💧" : "🪵"}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/74">{plant.line}</p>
                </button>
              );
            })}
          </div>

          {phase === "feedback" ? (
            <div className="mt-4 rounded-[1.4rem] bg-white/10 p-4 text-sm leading-6 text-white/80">
              {Object.values(feedback ?? {}).every(Boolean)
                ? "Every plant found the perfect little home."
                : "A few plants need a different bed. Watch the sun and water clues on the next patch."}
            </div>
          ) : (
            <div className="mt-4 rounded-[1.4rem] bg-white/10 p-4 text-sm leading-6 text-white/80">
              Tip: sunny plants love bright beds, and splashy plants need water drops.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
