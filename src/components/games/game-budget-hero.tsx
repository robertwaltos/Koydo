"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Wallet, Trophy, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
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

/* ─── scenario data ─── */
type Expense = { name: string; emoji: string; amount: number; category: string; essential: boolean };
type Scenario = {
  id: string;
  title: string;
  monthlyIncome: number;
  savingsGoal: number;
  expenses: Expense[];
  tip: string;
};

const SCENARIOS: Scenario[] = [
  {
    id: "student-life",
    title: "College Student Budget",
    monthlyIncome: 1200,
    savingsGoal: 200,
    expenses: [
      { name: "Rent", emoji: "🏠", amount: 500, category: "Housing", essential: true },
      { name: "Groceries", emoji: "🛒", amount: 200, category: "Food", essential: true },
      { name: "Phone Plan", emoji: "📱", amount: 45, category: "Utilities", essential: true },
      { name: "Streaming Services", emoji: "📺", amount: 30, category: "Entertainment", essential: false },
      { name: "Coffee Shops", emoji: "☕", amount: 80, category: "Food", essential: false },
      { name: "Gym Membership", emoji: "💪", amount: 25, category: "Health", essential: false },
      { name: "Textbooks", emoji: "📚", amount: 50, category: "Education", essential: true },
      { name: "Night Out", emoji: "🎉", amount: 100, category: "Entertainment", essential: false },
      { name: "Bus Pass", emoji: "🚌", amount: 60, category: "Transport", essential: true },
      { name: "Clothing", emoji: "👕", amount: 75, category: "Shopping", essential: false },
    ],
    tip: "Essentials first, then allocate remaining to wants and savings!",
  },
  {
    id: "first-job",
    title: "First Job Budget",
    monthlyIncome: 2800,
    savingsGoal: 500,
    expenses: [
      { name: "Rent", emoji: "🏠", amount: 900, category: "Housing", essential: true },
      { name: "Groceries", emoji: "🛒", amount: 300, category: "Food", essential: true },
      { name: "Car Payment", emoji: "🚗", amount: 350, category: "Transport", essential: true },
      { name: "Insurance", emoji: "🛡️", amount: 150, category: "Insurance", essential: true },
      { name: "Utilities", emoji: "💡", amount: 120, category: "Utilities", essential: true },
      { name: "Dining Out", emoji: "🍔", amount: 200, category: "Food", essential: false },
      { name: "Fitness Class", emoji: "🧘", amount: 60, category: "Health", essential: false },
      { name: "Gaming", emoji: "🎮", amount: 50, category: "Entertainment", essential: false },
      { name: "Subscriptions", emoji: "📱", amount: 45, category: "Entertainment", essential: false },
      { name: "Emergency Fund", emoji: "🆘", amount: 200, category: "Savings", essential: true },
    ],
    tip: "Pay yourself first — put savings aside before discretionary spending!",
  },
  {
    id: "family-budget",
    title: "Family Budget",
    monthlyIncome: 5000,
    savingsGoal: 800,
    expenses: [
      { name: "Mortgage", emoji: "🏡", amount: 1500, category: "Housing", essential: true },
      { name: "Groceries", emoji: "🛒", amount: 600, category: "Food", essential: true },
      { name: "Childcare", emoji: "👶", amount: 800, category: "Family", essential: true },
      { name: "Utilities", emoji: "💡", amount: 200, category: "Utilities", essential: true },
      { name: "Car & Gas", emoji: "⛽", amount: 400, category: "Transport", essential: true },
      { name: "Insurance", emoji: "🛡️", amount: 300, category: "Insurance", essential: true },
      { name: "Family Outing", emoji: "🎢", amount: 150, category: "Entertainment", essential: false },
      { name: "Kids Activities", emoji: "⚽", amount: 100, category: "Family", essential: false },
      { name: "Dining Out", emoji: "🍕", amount: 120, category: "Food", essential: false },
      { name: "Home Repairs", emoji: "🔧", amount: 100, category: "Housing", essential: false },
      { name: "College Fund", emoji: "🎓", amount: 200, category: "Savings", essential: true },
    ],
    tip: "With a family, unexpected costs pop up — always keep a buffer!",
  },
  {
    id: "freelancer",
    title: "Freelancer Budget",
    monthlyIncome: 3500,
    savingsGoal: 600,
    expenses: [
      { name: "Rent", emoji: "🏠", amount: 1000, category: "Housing", essential: true },
      { name: "Health Insurance", emoji: "🏥", amount: 400, category: "Insurance", essential: true },
      { name: "Groceries", emoji: "🛒", amount: 250, category: "Food", essential: true },
      { name: "Software Subs", emoji: "💻", amount: 80, category: "Work", essential: true },
      { name: "Coworking Space", emoji: "🏢", amount: 150, category: "Work", essential: false },
      { name: "Tax Reserve (30%)", emoji: "📋", amount: 350, category: "Taxes", essential: true },
      { name: "Marketing", emoji: "📢", amount: 100, category: "Work", essential: false },
      { name: "Dining Out", emoji: "🍱", amount: 150, category: "Food", essential: false },
      { name: "Travel", emoji: "✈️", amount: 200, category: "Entertainment", essential: false },
      { name: "Learning", emoji: "📖", amount: 50, category: "Education", essential: false },
    ],
    tip: "Freelancers must save for taxes and build a 3-month runway!",
  },
];

const ROUNDS = 3;

/* ─── state ─── */
type Phase = "ready" | "playing" | "review" | "complete";

type State = {
  phase: Phase;
  round: number;
  score: number;
  scenario: Scenario | null;
  selected: Set<number>;
  reviewed: boolean;
};

type Action =
  | { type: "START"; scenario: Scenario }
  | { type: "TOGGLE"; index: number }
  | { type: "REVIEW" }
  | { type: "SCORE"; points: number }
  | { type: "NEXT"; scenario: Scenario }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, scenario: a.scenario, selected: new Set(), reviewed: false };
    case "TOGGLE": {
      const next = new Set(s.selected);
      if (next.has(a.index)) next.delete(a.index); else next.add(a.index);
      return { ...s, selected: next };
    }
    case "REVIEW":
      return { ...s, phase: "review", reviewed: true };
    case "SCORE":
      return { ...s, score: s.score + a.points };
    case "NEXT":
      return { ...s, phase: "playing", round: s.round + 1, scenario: a.scenario, selected: new Set(), reviewed: false };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = { phase: "ready", round: 0, score: 0, scenario: null, selected: new Set<number>(), reviewed: false };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── component ─── */
export default function GameBudgetHero() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const scenarioOrder = useRef<Scenario[]>([]);

  const { phase, round, score, scenario, selected, reviewed } = state;

  const totalSpending = useMemo(() => {
    if (!scenario) return 0;
    return [...selected].reduce((sum, i) => sum + scenario.expenses[i].amount, 0);
  }, [scenario, selected]);

  const remaining = scenario ? scenario.monthlyIncome - totalSpending : 0;
  const meetsSavings = remaining >= (scenario?.savingsGoal ?? 0);
  const overBudget = remaining < 0;

  const stars = useMemo(() => {
    if (score >= 800) return 3;
    if (score >= 500) return 2;
    if (score >= 200) return 1;
    return 0;
  }, [score]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    scenarioOrder.current = shuffle(SCENARIOS).slice(0, ROUNDS);
    dispatch({ type: "START", scenario: scenarioOrder.current[0] });
    mascot.say("Build a smart budget! Choose wisely! 💰", "excited");
  }, [mascot]);

  const handleToggle = useCallback((index: number) => {
    hapticSelection();
    dispatch({ type: "TOGGLE", index });
  }, []);

  const handleSubmit = useCallback(() => {
    if (!scenario) return;
    dispatch({ type: "REVIEW" });

    // Score calculation
    let points = 0;
    const essentialsMissed = scenario.expenses.filter((e, i) => e.essential && !selected.has(i));
    const essentialsIncluded = scenario.expenses.filter((e, i) => e.essential && selected.has(i));

    // Points for including essentials
    points += essentialsIncluded.length * 30;

    // Penalty for missing essentials
    points -= essentialsMissed.length * 40;

    // Bonus for meeting savings goal
    if (meetsSavings) points += 100;

    // Penalty for going over budget
    if (overBudget) points -= 100;

    // Bonus for being under budget with savings met
    if (meetsSavings && remaining > scenario.savingsGoal) points += 50;

    points = Math.max(0, points);
    dispatch({ type: "SCORE", points });

    if (meetsSavings && essentialsMissed.length === 0) {
      hapticCelebration();
      mascot.say("Perfect budget! All essentials covered with savings! 🌟", "cheering");
    } else if (overBudget) {
      hapticError();
      mascot.say("Over budget! Cut some non-essentials.", "thinking");
    } else if (essentialsMissed.length > 0) {
      hapticError();
      mascot.say(`Don't forget: ${essentialsMissed[0].name} is essential!`, "thinking");
    } else {
      hapticSuccess();
      mascot.say("Good budget, but try to save more!", "encouraging");
    }
  }, [scenario, selected, meetsSavings, overBudget, remaining, mascot]);

  const handleNext = useCallback(() => {
    if (round >= ROUNDS) {
      emitLegacyGameComplete(sessionId.current, score, stars);
      dispatch({ type: "FINISH" });
    } else {
      dispatch({ type: "NEXT", scenario: scenarioOrder.current[round] });
    }
  }, [round, score, stars]);

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-emerald-400" />
          <span className="text-sm font-bold text-white">Budget Hero</span>
        </div>
        {(phase === "playing" || phase === "review") && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Scenario {round}/{ROUNDS}</span>
            <span className="text-amber-400 font-bold">{score} pts</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Budget Hero</h2>
            <p className="text-stone-400 max-w-xs">
              Make smart spending decisions! Cover essentials, hit your savings goal, and stay under budget.
            </p>
            <div className="flex gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1"><PiggyBank className="h-3 w-3" /> {SCENARIOS.length} scenarios</span>
              <span>{ROUNDS} rounds</span>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">Start Budgeting 💰</PhysicalButton>
          </motion.section>
        )}

        {(phase === "playing" || phase === "review") && scenario && (
          <motion.section key={`scenario-${scenario.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col gap-3 px-4 py-4 w-full overflow-y-auto">
            {/* scenario header */}
            <div className="text-center">
              <h3 className="text-sm font-bold text-white">{scenario.title}</h3>
              <div className="flex justify-center gap-4 mt-1 text-xs">
                <span className="text-emerald-400">Income: ${scenario.monthlyIncome}/mo</span>
                <span className="text-amber-400">Save: ${scenario.savingsGoal}</span>
              </div>
            </div>

            {/* budget meter */}
            <div className="w-full px-2">
              <div className="flex justify-between text-[10px] text-stone-500 mb-1">
                <span>Spending: ${totalSpending}</span>
                <span className={remaining >= 0 ? "text-emerald-400" : "text-red-400"}>
                  Remaining: ${remaining}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${overBudget ? "bg-red-500" : meetsSavings ? "bg-emerald-500" : "bg-amber-500"}`}
                  animate={{ width: `${Math.min(100, (totalSpending / scenario.monthlyIncome) * 100)}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="relative w-full h-1 mt-0.5">
                <div
                  className="absolute w-0.5 h-3 bg-amber-400 -top-1"
                  style={{ left: `${((scenario.monthlyIncome - scenario.savingsGoal) / scenario.monthlyIncome) * 100}%` }}
                />
              </div>
            </div>

            {/* expense cards */}
            <div className="space-y-1.5 max-h-64 overflow-y-auto">
              {scenario.expenses.map((exp, i) => {
                const isSelected = selected.has(i);
                const missedEssential = reviewed && exp.essential && !isSelected;

                let cardBg = isSelected ? "bg-stone-700/80 ring-1 ring-emerald-400/30" : "bg-stone-800/60 ring-1 ring-white/5";
                if (reviewed && missedEssential) cardBg = "bg-red-600/15 ring-1 ring-red-400/40";
                else if (reviewed && isSelected && exp.essential) cardBg = "bg-emerald-600/15 ring-1 ring-emerald-400/30";

                return (
                  <motion.button
                    key={exp.name}
                    onClick={() => !reviewed && handleToggle(i)}
                    disabled={reviewed}
                    whileTap={!reviewed ? { scale: 0.98 } : undefined}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all ${cardBg}`}
                  >
                    <span className="text-xl">{exp.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-white truncate">{exp.name}</span>
                        {exp.essential && <span className="text-[9px] px-1 rounded bg-amber-500/20 text-amber-300">Essential</span>}
                      </div>
                      <span className="text-[10px] text-stone-500">{exp.category}</span>
                    </div>
                    <span className={`text-sm font-bold ${isSelected ? "text-emerald-300" : "text-stone-400"}`}>${exp.amount}</span>
                    {isSelected && !reviewed && <span className="text-xs">✓</span>}
                    {reviewed && missedEssential && <span className="text-xs text-red-400">⚠️</span>}
                  </motion.button>
                );
              })}
            </div>

            {/* tip */}
            {reviewed && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-xs text-amber-400/60 text-center italic px-4">
                💡 {scenario.tip}
              </motion.p>
            )}

            {/* action */}
            <div className="flex justify-center py-2">
              {!reviewed ? (
                <PhysicalButton onClick={handleSubmit} variant="primary">
                  Submit Budget ✓
                </PhysicalButton>
              ) : (
                <PhysicalButton onClick={handleNext} variant="primary">
                  {round >= ROUNDS ? "See Results" : "Next Scenario →"}
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
            <h3 className="text-2xl font-black text-white">Budget Master!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  initial={{ scale: 0 }} animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}>⭐</motion.span>
              ))}
            </div>
            <p className="text-white font-bold">{score} points</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 💰</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
