"use client";

import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChefHat, Trophy } from "lucide-react";
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

/* ─── types ─── */
type Phase = "ready" | "cooking" | "result" | "complete";

type StepType = "measure" | "count" | "mix" | "temperature";

type RecipeStep = {
  instruction: string;
  type: StepType;
  targetValue: number;
  unit: string;
  fractionLabel?: string; // e.g., "1/2", "3/4"
  min?: number;
  max?: number;
  tolerance: number; // how close the answer must be (0-1 scale for measure, exact for count/temp)
};

type Recipe = {
  name: string;
  emoji: string;
  steps: RecipeStep[];
  perfectResult: string;
  okResult: string;
  failResult: string;
};

/* ─── recipe data ─── */
const RECIPES: Recipe[] = [
  {
    name: "Chocolate Cookies",
    emoji: "🍪",
    steps: [
      { instruction: "Measure flour", type: "measure", targetValue: 0.5, unit: "cup", fractionLabel: "1/2", tolerance: 0.08 },
      { instruction: "Add sugar", type: "measure", targetValue: 0.75, unit: "cup", fractionLabel: "3/4", tolerance: 0.08 },
      { instruction: "Crack eggs", type: "count", targetValue: 2, unit: "eggs", tolerance: 0 },
      { instruction: "Mix the batter", type: "mix", targetValue: 3, unit: "seconds", tolerance: 0.5 },
      { instruction: "Set oven temperature", type: "temperature", targetValue: 350, unit: "°F", min: 200, max: 500, tolerance: 20 },
    ],
    perfectResult: "Golden crispy cookies!",
    okResult: "A bit lumpy but tasty!",
    failResult: "Cookie soup... oops!",
  },
  {
    name: "Fluffy Pancakes",
    emoji: "🥞",
    steps: [
      { instruction: "Measure milk", type: "measure", targetValue: 0.33, unit: "cup", fractionLabel: "1/3", tolerance: 0.08 },
      { instruction: "Add flour", type: "measure", targetValue: 0.5, unit: "cup", fractionLabel: "1/2", tolerance: 0.08 },
      { instruction: "Crack eggs", type: "count", targetValue: 1, unit: "egg", tolerance: 0 },
      { instruction: "Whisk batter", type: "mix", targetValue: 3, unit: "seconds", tolerance: 0.5 },
      { instruction: "Set griddle temperature", type: "temperature", targetValue: 375, unit: "°F", min: 200, max: 500, tolerance: 25 },
    ],
    perfectResult: "Perfectly fluffy stacks!",
    okResult: "A little flat but yummy!",
    failResult: "Pancake frisbees!",
  },
  {
    name: "Pizza Dough",
    emoji: "🍕",
    steps: [
      { instruction: "Measure flour", type: "measure", targetValue: 0.75, unit: "cup", fractionLabel: "3/4", tolerance: 0.08 },
      { instruction: "Add warm water", type: "measure", targetValue: 0.5, unit: "cup", fractionLabel: "1/2", tolerance: 0.08 },
      { instruction: "Add yeast packets", type: "count", targetValue: 1, unit: "packet", tolerance: 0 },
      { instruction: "Knead the dough", type: "mix", targetValue: 5, unit: "seconds", tolerance: 1 },
      { instruction: "Set oven temperature", type: "temperature", targetValue: 425, unit: "°F", min: 200, max: 500, tolerance: 25 },
    ],
    perfectResult: "Perfect stretchy dough!",
    okResult: "A bit sticky but workable!",
    failResult: "Rock-hard dough brick!",
  },
  {
    name: "Berry Smoothie",
    emoji: "🥤",
    steps: [
      { instruction: "Add yogurt", type: "measure", targetValue: 0.5, unit: "cup", fractionLabel: "1/2", tolerance: 0.08 },
      { instruction: "Add strawberries", type: "count", targetValue: 5, unit: "berries", tolerance: 0 },
      { instruction: "Add honey", type: "measure", targetValue: 0.25, unit: "cup", fractionLabel: "1/4", tolerance: 0.06 },
      { instruction: "Blend it smooth", type: "mix", targetValue: 4, unit: "seconds", tolerance: 1 },
      { instruction: "Set freezer temp (for frozen version)", type: "temperature", targetValue: 32, unit: "°F", min: 0, max: 100, tolerance: 10 },
    ],
    perfectResult: "Smooth and creamy!",
    okResult: "A bit chunky but refreshing!",
    failResult: "Berry soup!",
  },
];

/* ─── state ─── */
type State = {
  phase: Phase;
  recipeIndex: number;
  stepIndex: number;
  stepScores: number[]; // 0 or 1 per step
  recipeTotalScores: number[];
  startTime: number;
  interactions: number;
  // step-specific
  sliderValue: number;
  countValue: number;
  mixHeld: boolean;
  mixStart: number;
  tempValue: number;
};

type Action =
  | { type: "START" }
  | { type: "SET_SLIDER"; value: number }
  | { type: "INCREMENT_COUNT" }
  | { type: "MIX_START" }
  | { type: "MIX_END" }
  | { type: "SET_TEMP"; value: number }
  | { type: "SUBMIT_STEP" }
  | { type: "SHOW_RESULT" }
  | { type: "NEXT_RECIPE" };

function initState(): State {
  return {
    phase: "ready",
    recipeIndex: 0,
    stepIndex: 0,
    stepScores: [],
    recipeTotalScores: [],
    startTime: 0,
    interactions: 0,
    sliderValue: 0,
    countValue: 0,
    mixHeld: false,
    mixStart: 0,
    tempValue: 300,
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return {
        ...initState(),
        phase: "cooking",
        startTime: Date.now(),
      };
    case "SET_SLIDER":
      return { ...state, sliderValue: action.value };
    case "INCREMENT_COUNT":
      return { ...state, countValue: state.countValue + 1, interactions: state.interactions + 1 };
    case "MIX_START":
      return { ...state, mixHeld: true, mixStart: Date.now() };
    case "MIX_END":
      return { ...state, mixHeld: false };
    case "SET_TEMP":
      return { ...state, tempValue: action.value };
    case "SUBMIT_STEP": {
      const recipe = RECIPES[state.recipeIndex]!;
      const step = recipe.steps[state.stepIndex]!;
      let correct = false;

      switch (step.type) {
        case "measure":
          correct = Math.abs(state.sliderValue - step.targetValue) <= step.tolerance;
          break;
        case "count":
          correct = state.countValue === step.targetValue;
          break;
        case "mix": {
          const holdTime = state.mixHeld ? 0 : (Date.now() - state.mixStart) / 1000;
          // mix timing is checked from the time between MIX_START and SUBMIT_STEP
          const elapsed = state.mixStart > 0 ? (Date.now() - state.mixStart) / 1000 : 0;
          correct = Math.abs(elapsed - step.targetValue) <= step.tolerance;
          break;
        }
        case "temperature":
          correct = Math.abs(state.tempValue - step.targetValue) <= step.tolerance;
          break;
      }

      const newScores = [...state.stepScores, correct ? 1 : 0];
      const nextStep = state.stepIndex + 1;
      const isLastStep = nextStep >= recipe.steps.length;

      if (isLastStep) {
        const recipeScore = newScores.reduce((a, b) => a + b, 0);
        return {
          ...state,
          stepScores: newScores,
          recipeTotalScores: [...state.recipeTotalScores, recipeScore],
          phase: "result",
          interactions: state.interactions + 1,
          sliderValue: 0,
          countValue: 0,
          mixStart: 0,
          tempValue: 300,
        };
      }

      return {
        ...state,
        stepIndex: nextStep,
        stepScores: newScores,
        interactions: state.interactions + 1,
        sliderValue: 0,
        countValue: 0,
        mixStart: 0,
        tempValue: 300,
      };
    }
    case "NEXT_RECIPE": {
      const next = state.recipeIndex + 1;
      if (next >= RECIPES.length) return { ...state, phase: "complete" };
      return {
        ...state,
        phase: "cooking",
        recipeIndex: next,
        stepIndex: 0,
        stepScores: [],
        sliderValue: 0,
        countValue: 0,
        mixStart: 0,
        tempValue: 300,
      };
    }
    default:
      return state;
  }
}

/* ─── step UI components ─── */
function MeasureStep({ step, value, onChange }: { step: RecipeStep; value: number; onChange: (v: number) => void }) {
  return (
    <div className="w-full space-y-2">
      <p className="text-center text-sm text-emerald-200">Slide to <strong>{step.fractionLabel}</strong> {step.unit}</p>
      <div className="relative">
        <input
          type="range" min={0} max={1} step={0.01} value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full accent-emerald-400"
        />
        <div className="flex justify-between text-xs text-slate-400">
          <span>0</span>
          <span>1/4</span>
          <span>1/2</span>
          <span>3/4</span>
          <span>1</span>
        </div>
      </div>
      <p className="text-center text-lg font-bold text-white">{value.toFixed(2)} {step.unit}</p>
    </div>
  );
}

function CountStep({ step, count, onTap }: { step: RecipeStep; count: number; onTap: () => void }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm text-emerald-200">
        Tap to add {step.targetValue} {step.unit}
      </p>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onTap}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600/50 text-3xl shadow-lg"
      >
        👆
      </motion.button>
      <p className="text-lg font-bold text-white">{count} {step.unit}</p>
    </div>
  );
}

function MixStep({ held, onDown, onUp }: { held: boolean; onDown: () => void; onUp: () => void }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm text-emerald-200">Hold the button to mix!</p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        className={`flex h-20 w-20 items-center justify-center rounded-full text-3xl shadow-lg transition-colors
          ${held ? "bg-emerald-500/80 ring-4 ring-emerald-300" : "bg-emerald-600/50"}`}
      >
        {held ? "🌀" : "🥄"}
      </motion.button>
      <p className="text-sm text-white">{held ? "Mixing..." : "Press & hold"}</p>
    </div>
  );
}

function TempStep({ step, value, onChange }: { step: RecipeStep; value: number; onChange: (v: number) => void }) {
  return (
    <div className="w-full space-y-2">
      <p className="text-center text-sm text-emerald-200">Set to {step.targetValue}{step.unit}</p>
      <input
        type="range" min={step.min ?? 0} max={step.max ?? 500} step={5} value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full accent-orange-400"
      />
      <p className="text-center text-2xl font-bold text-white">{value}{step.unit}</p>
    </div>
  );
}

/* ─── component ─── */
export default function GameTinyChef() {
  const { setMessage, setMood } = useMascot();
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const recipe = RECIPES[state.recipeIndex]!;
  const step = recipe.steps[state.stepIndex];
  const totalPossible = RECIPES.reduce((s, r) => s + r.steps.length, 0);
  const totalCorrect = state.recipeTotalScores.reduce((a, b) => a + b, 0) + state.stepScores.reduce((a, b) => a + b, 0);
  const elapsedMs = state.phase === "complete" ? Date.now() - state.startTime : 0;
  const score = Math.round((totalCorrect / totalPossible) * 1000);
  const MAX_SCORE = 1000;
  const stars = score >= 800 ? 3 : score >= 500 ? 2 : score >= 200 ? 1 : 0;

  // result quality
  const recipeScore = state.stepScores.reduce((a, b) => a + b, 0);
  const recipeTotal = recipe.steps.length;
  const quality = recipeScore >= recipeTotal * 0.8 ? "perfect" : recipeScore >= recipeTotal * 0.4 ? "ok" : "fail";

  useEffect(() => {
    if (state.phase === "result") {
      if (quality === "perfect") { setMood("cheering"); void hapticSuccess(); }
      else if (quality === "ok") { setMood("happy"); }
      else { setMood("sad"); void hapticError(); }
      setMessage(quality === "perfect" ? recipe.perfectResult : quality === "ok" ? recipe.okResult : recipe.failResult);
    }
  }, [state.phase, quality, recipe, setMood, setMessage]);

  useEffect(() => {
    if (state.phase !== "complete") return;
    setMood("cheering");
    setMessage("All recipes done! Master chef!");
    void hapticCelebration();
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "tiny-chef",
      difficulty: "medium",
      elapsedMs,
      interactions: state.interactions,
      score,
      maxScore: MAX_SCORE,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, elapsedMs, state.interactions, score, setMessage, setMood]);

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    setMood("happy");
    setMessage("Follow the recipe steps carefully!");
    dispatch({ type: "START" });
  }, [setMood, setMessage]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-emerald-300/25 bg-gradient-to-br from-emerald-950/90 via-slate-900/95 to-green-950/90 shadow-2xl backdrop-blur-xl">
      <AnimatePresence mode="wait">
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="terra" mood="thinking" size="lg" />
            <h3 className="text-2xl font-black text-white">Tiny Chef</h3>
            <p className="text-emerald-200/80">Follow recipes: measure fractions, count ingredients, and cook!</p>
            <PhysicalButton onClick={startGame} variant="primary" className="px-10 py-4">
              Start Cooking 👨‍🍳
            </PhysicalButton>
          </motion.section>
        )}

        {state.phase === "cooking" && step && (
          <motion.section key={`cook-${state.recipeIndex}-${state.stepIndex}`}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center gap-4 px-5 py-6">
            <div className="flex w-full items-center justify-between">
              <span className="text-sm font-bold text-emerald-200">
                {recipe.emoji} {recipe.name}
              </span>
              <span className="text-sm text-emerald-300/70">
                Step {state.stepIndex + 1}/{recipe.steps.length}
              </span>
            </div>

            <div className="w-full rounded-2xl bg-slate-800/60 p-5">
              <h4 className="mb-4 text-center text-lg font-bold text-white">{step.instruction}</h4>

              {step.type === "measure" && (
                <MeasureStep step={step} value={state.sliderValue}
                  onChange={(v) => dispatch({ type: "SET_SLIDER", value: v })} />
              )}

              {step.type === "count" && (
                <CountStep step={step} count={state.countValue}
                  onTap={() => { dispatch({ type: "INCREMENT_COUNT" }); void hapticSelection(); }} />
              )}

              {step.type === "mix" && (
                <MixStep held={state.mixHeld}
                  onDown={() => dispatch({ type: "MIX_START" })}
                  onUp={() => dispatch({ type: "MIX_END" })} />
              )}

              {step.type === "temperature" && (
                <TempStep step={step} value={state.tempValue}
                  onChange={(v) => dispatch({ type: "SET_TEMP", value: v })} />
              )}
            </div>

            <PhysicalButton onClick={() => dispatch({ type: "SUBMIT_STEP" })} variant="success" className="w-full py-3">
              {state.stepIndex >= recipe.steps.length - 1 ? "Finish Recipe!" : "Next Step →"}
            </PhysicalButton>

            {/* progress dots */}
            <div className="flex gap-1.5">
              {recipe.steps.map((_, i) => (
                <div key={i} className={`h-2 w-2 rounded-full ${
                  i < state.stepIndex
                    ? state.stepScores[i] ? "bg-emerald-400" : "bg-red-400"
                    : i === state.stepIndex
                    ? "bg-white"
                    : "bg-slate-600"
                }`} />
              ))}
            </div>
          </motion.section>
        )}

        {state.phase === "result" && (
          <motion.section key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-5 px-6 py-8 text-center">
            <span className="text-6xl">{recipe.emoji}</span>
            <h3 className="text-xl font-bold text-white">
              {quality === "perfect" ? recipe.perfectResult : quality === "ok" ? recipe.okResult : recipe.failResult}
            </h3>
            <p className="text-emerald-200/80">
              {recipeScore}/{recipeTotal} steps correct
            </p>
            <MascotFriend id="terra" mood={quality === "fail" ? "sad" : "cheering"} size="md" />
            <PhysicalButton onClick={() => dispatch({ type: "NEXT_RECIPE" })} variant="primary" className="px-8 py-3">
              {state.recipeIndex >= RECIPES.length - 1 ? "See Final Score" : "Next Recipe →"}
            </PhysicalButton>
          </motion.section>
        )}

        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="terra" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Chef Complete!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}>
                  ⭐
                </motion.span>
              ))}
            </div>
            <p className="text-emerald-200/80">Score: {score}/{MAX_SCORE}</p>
            <PhysicalButton onClick={startGame} variant="primary">Cook Again 👨‍🍳</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
