"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Apple, Trophy, Flame, Droplets, TrendingUp } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticError,
  hapticSelection,
  hapticSuccess,
  hapticCelebration,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── food data ─── */
type Food = {
  name: string;
  emoji: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  category: "protein" | "grain" | "veggie" | "fruit" | "dairy" | "treat";
};

const FOODS: Food[] = [
  // Proteins
  { name: "Grilled Chicken", emoji: "🍗", calories: 165, protein: 31, carbs: 0, fat: 4, fiber: 0, category: "protein" },
  { name: "Salmon Fillet", emoji: "🐟", calories: 208, protein: 20, carbs: 0, fat: 13, fiber: 0, category: "protein" },
  { name: "Black Beans", emoji: "🫘", calories: 132, protein: 9, carbs: 24, fat: 1, fiber: 8, category: "protein" },
  { name: "Eggs (2)", emoji: "🥚", calories: 156, protein: 12, carbs: 1, fat: 11, fiber: 0, category: "protein" },
  { name: "Tofu", emoji: "🧊", calories: 76, protein: 8, carbs: 2, fat: 5, fiber: 0, category: "protein" },
  // Grains
  { name: "Brown Rice", emoji: "🍚", calories: 216, protein: 5, carbs: 45, fat: 2, fiber: 4, category: "grain" },
  { name: "Whole Wheat Bread", emoji: "🍞", calories: 138, protein: 5, carbs: 24, fat: 2, fiber: 3, category: "grain" },
  { name: "Oatmeal", emoji: "🥣", calories: 158, protein: 6, carbs: 27, fat: 3, fiber: 4, category: "grain" },
  { name: "Pasta", emoji: "🍝", calories: 220, protein: 8, carbs: 43, fat: 1, fiber: 3, category: "grain" },
  // Veggies
  { name: "Broccoli", emoji: "🥦", calories: 55, protein: 4, carbs: 11, fat: 1, fiber: 5, category: "veggie" },
  { name: "Spinach Salad", emoji: "🥗", calories: 23, protein: 3, carbs: 4, fat: 0, fiber: 2, category: "veggie" },
  { name: "Sweet Potato", emoji: "🍠", calories: 103, protein: 2, carbs: 24, fat: 0, fiber: 4, category: "veggie" },
  { name: "Carrots", emoji: "🥕", calories: 52, protein: 1, carbs: 12, fat: 0, fiber: 4, category: "veggie" },
  // Fruits
  { name: "Banana", emoji: "🍌", calories: 105, protein: 1, carbs: 27, fat: 0, fiber: 3, category: "fruit" },
  { name: "Apple", emoji: "🍎", calories: 95, protein: 0, carbs: 25, fat: 0, fiber: 4, category: "fruit" },
  { name: "Berries Mix", emoji: "🫐", calories: 84, protein: 1, carbs: 21, fat: 1, fiber: 4, category: "fruit" },
  // Dairy
  { name: "Greek Yogurt", emoji: "🥛", calories: 100, protein: 17, carbs: 6, fat: 1, fiber: 0, category: "dairy" },
  { name: "Cheese Slice", emoji: "🧀", calories: 113, protein: 7, carbs: 0, fat: 9, fiber: 0, category: "dairy" },
  // Treats
  { name: "Chocolate Bar", emoji: "🍫", calories: 235, protein: 3, carbs: 26, fat: 13, fiber: 2, category: "treat" },
  { name: "Potato Chips", emoji: "🍟", calories: 274, protein: 3, carbs: 25, fat: 18, fiber: 2, category: "treat" },
  { name: "Soda", emoji: "🥤", calories: 140, protein: 0, carbs: 39, fat: 0, fiber: 0, category: "treat" },
  { name: "Ice Cream", emoji: "🍦", calories: 207, protein: 4, carbs: 24, fat: 11, fiber: 0, category: "treat" },
];

type MealGoal = {
  name: string;
  emoji: string;
  calorieRange: [number, number];
  proteinMin: number;
  fiberMin: number;
  maxTreats: number;
  description: string;
};

const MEAL_GOALS: MealGoal[] = [
  { name: "Balanced Lunch", emoji: "🍽️", calorieRange: [400, 700], proteinMin: 15, fiberMin: 5, maxTreats: 0, description: "Balanced meal with protein and fiber" },
  { name: "Pre-Workout Fuel", emoji: "💪", calorieRange: [300, 500], proteinMin: 20, fiberMin: 3, maxTreats: 0, description: "High protein, moderate carbs" },
  { name: "Light Dinner", emoji: "🌙", calorieRange: [300, 550], proteinMin: 15, fiberMin: 6, maxTreats: 0, description: "Light and nutritious" },
  { name: "Recovery Meal", emoji: "🏃", calorieRange: [500, 800], proteinMin: 25, fiberMin: 4, maxTreats: 1, description: "Fuel up after exercise" },
  { name: "Kid's Plate", emoji: "🧒", calorieRange: [300, 500], proteinMin: 10, fiberMin: 3, maxTreats: 1, description: "Balanced meal for kids" },
];

const ROUNDS = 4;
const MAX_ITEMS = 5;

/* ─── state ─── */
type Phase = "ready" | "playing" | "review" | "complete";

type State = {
  phase: Phase;
  round: number;
  score: number;
  goal: MealGoal | null;
  availableFoods: Food[];
  plate: number[];
  reviewed: boolean;
};

type Action =
  | { type: "START"; goal: MealGoal; foods: Food[] }
  | { type: "ADD"; index: number }
  | { type: "REMOVE"; plateIndex: number }
  | { type: "REVIEW" }
  | { type: "SCORE"; points: number }
  | { type: "NEXT"; goal: MealGoal; foods: Food[] }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, goal: a.goal, availableFoods: a.foods, plate: [], reviewed: false };
    case "ADD":
      if (s.plate.length >= MAX_ITEMS) return s;
      return { ...s, plate: [...s.plate, a.index] };
    case "REMOVE":
      return { ...s, plate: s.plate.filter((_, i) => i !== a.plateIndex) };
    case "REVIEW":
      return { ...s, phase: "review", reviewed: true };
    case "SCORE":
      return { ...s, score: s.score + a.points };
    case "NEXT":
      return { ...s, phase: "playing", round: s.round + 1, goal: a.goal, availableFoods: a.foods, plate: [], reviewed: false };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = { phase: "ready", round: 0, score: 0, goal: null, availableFoods: [], plate: [], reviewed: false };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── component ─── */
export default function GameNutritionLab() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const goalOrder = useRef<MealGoal[]>([]);

  const { phase, round, score, goal, availableFoods, plate, reviewed } = state;

  const plateNutrition = useMemo(() => {
    const totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, treats: 0 };
    plate.forEach((idx) => {
      const f = availableFoods[idx];
      if (!f) return;
      totals.calories += f.calories;
      totals.protein += f.protein;
      totals.carbs += f.carbs;
      totals.fat += f.fat;
      totals.fiber += f.fiber;
      if (f.category === "treat") totals.treats++;
    });
    return totals;
  }, [plate, availableFoods]);

  const stars = useMemo(() => {
    if (score >= 900) return 3;
    if (score >= 600) return 2;
    if (score >= 300) return 1;
    return 0;
  }, [score]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    goalOrder.current = shuffle(MEAL_GOALS).slice(0, ROUNDS);
    const foods = shuffle(FOODS).slice(0, 10);
    dispatch({ type: "START", goal: goalOrder.current[0], foods });
    mascot.say("Build the perfect meal! 🥗", "excited");
  }, [mascot]);

  const handleSubmit = useCallback(() => {
    if (!goal) return;
    dispatch({ type: "REVIEW" });

    let points = 0;
    const { calories, protein, fiber, treats } = plateNutrition;

    const calOk = calories >= goal.calorieRange[0] && calories <= goal.calorieRange[1];
    const protOk = protein >= goal.proteinMin;
    const fibOk = fiber >= goal.fiberMin;
    const treatOk = treats <= goal.maxTreats;

    if (calOk) points += 80;
    if (protOk) points += 60;
    if (fibOk) points += 40;
    if (treatOk) points += 30;
    if (calOk && protOk && fibOk && treatOk) points += 100; // perfect bonus

    dispatch({ type: "SCORE", points });

    if (calOk && protOk && fibOk && treatOk) {
      hapticCelebration();
      mascot.say("Perfect nutrition! 🌟", "cheering");
    } else if (points >= 100) {
      hapticSuccess();
      mascot.say("Good plate! Room for improvement.", "encouraging");
    } else {
      hapticError();
      mascot.say("Check the nutrition targets!", "thinking");
    }
  }, [goal, plateNutrition, mascot]);

  const handleNext = useCallback(() => {
    if (round >= ROUNDS) {
      emitLegacyGameComplete(sessionId.current, score, stars);
      dispatch({ type: "FINISH" });
    } else {
      const foods = shuffle(FOODS).slice(0, 10);
      dispatch({ type: "NEXT", goal: goalOrder.current[round], foods });
    }
  }, [round, score, stars]);

  return (
    <div className="relative flex min-h-[560px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Apple className="h-5 w-5 text-green-400" />
          <span className="text-sm font-bold text-white">Nutrition Lab</span>
        </div>
        {(phase === "playing" || phase === "review") && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Meal {round}/{ROUNDS}</span>
            <span className="text-amber-400 font-bold">{score}</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Nutrition Lab</h2>
            <p className="text-stone-400 max-w-xs">Build balanced meals by choosing the right foods to hit nutrition targets!</p>
            <PhysicalButton onClick={startGame} variant="primary">Start Cooking 🥗</PhysicalButton>
          </motion.section>
        )}

        {(phase === "playing" || phase === "review") && goal && (
          <motion.section key={`meal-${round}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col gap-3 px-4 py-4 w-full overflow-y-auto">
            {/* goal */}
            <div className="text-center">
              <h3 className="text-sm font-bold text-white">{goal.emoji} {goal.name}</h3>
              <p className="text-[10px] text-stone-500">{goal.description}</p>
            </div>

            {/* nutrition meters */}
            <div className="grid grid-cols-2 gap-2 px-1">
              {[
                { label: "Calories", value: plateNutrition.calories, target: `${goal.calorieRange[0]}-${goal.calorieRange[1]}`, ok: plateNutrition.calories >= goal.calorieRange[0] && plateNutrition.calories <= goal.calorieRange[1], icon: Flame, color: "amber" },
                { label: "Protein", value: `${plateNutrition.protein}g`, target: `${goal.proteinMin}g+`, ok: plateNutrition.protein >= goal.proteinMin, icon: TrendingUp, color: "red" },
                { label: "Fiber", value: `${plateNutrition.fiber}g`, target: `${goal.fiberMin}g+`, ok: plateNutrition.fiber >= goal.fiberMin, icon: Droplets, color: "green" },
                { label: "Treats", value: plateNutrition.treats, target: `≤${goal.maxTreats}`, ok: plateNutrition.treats <= goal.maxTreats, icon: Apple, color: "purple" },
              ].map(({ label, value, target, ok }) => (
                <div key={label} className={`rounded-lg px-2 py-1.5 text-center ${reviewed ? (ok ? "bg-emerald-600/15 ring-1 ring-emerald-400/30" : "bg-red-600/15 ring-1 ring-red-400/30") : "bg-stone-800/50 ring-1 ring-white/5"}`}>
                  <p className="text-[9px] text-stone-500">{label}</p>
                  <p className="text-xs font-bold text-white">{value}</p>
                  <p className="text-[9px] text-stone-600">Target: {target}</p>
                </div>
              ))}
            </div>

            {/* plate */}
            <div className="px-2">
              <p className="text-[10px] text-stone-500 mb-1">Your Plate ({plate.length}/{MAX_ITEMS}):</p>
              <div className="flex flex-wrap gap-1 min-h-[36px]">
                {plate.map((idx, pi) => (
                  <motion.button
                    key={`${pi}-${idx}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => !reviewed && dispatch({ type: "REMOVE", plateIndex: pi })}
                    className="flex items-center gap-1 px-2 py-1 rounded-lg bg-stone-700/80 ring-1 ring-white/10 text-xs text-white hover:bg-red-600/20"
                  >
                    <span>{availableFoods[idx]?.emoji}</span>
                    <span className="text-[10px]">{availableFoods[idx]?.name}</span>
                  </motion.button>
                ))}
                {plate.length === 0 && <span className="text-[10px] text-stone-600 italic">Tap foods below to add</span>}
              </div>
            </div>

            {/* food selection */}
            {!reviewed && (
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {availableFoods.map((food, i) => (
                  <motion.button
                    key={food.name}
                    onClick={() => { hapticSelection(); dispatch({ type: "ADD", index: i }); }}
                    disabled={plate.length >= MAX_ITEMS}
                    whileTap={{ scale: 0.97 }}
                    className="flex w-full items-center gap-2 rounded-lg bg-stone-800/60 ring-1 ring-white/5 px-3 py-2 text-left hover:bg-stone-700/60"
                  >
                    <span className="text-lg">{food.emoji}</span>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-white">{food.name}</span>
                      <div className="flex gap-2 text-[9px] text-stone-500">
                        <span>{food.calories} cal</span>
                        <span>{food.protein}g pro</span>
                        <span>{food.fiber}g fib</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}

            <div className="flex justify-center py-1">
              {!reviewed ? (
                <PhysicalButton onClick={handleSubmit} variant="primary" disabled={plate.length === 0}>
                  Submit Meal ✓
                </PhysicalButton>
              ) : (
                <PhysicalButton onClick={handleNext} variant="primary">
                  {round >= ROUNDS ? "See Results" : "Next Meal →"}
                </PhysicalButton>
              )}
            </div>
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Lab Complete!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  initial={{ scale: 0 }} animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}>⭐</motion.span>
              ))}
            </div>
            <p className="text-white font-bold">{score} points</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 🥗</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
