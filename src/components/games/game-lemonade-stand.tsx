"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DollarSign, Trophy, CloudSun, Cloud, CloudRain, Sun } from "lucide-react";
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
type Phase = "ready" | "morning" | "result" | "complete";
type Weather = "sunny" | "cloudy" | "rainy" | "hot";

const WEATHER_ICONS: Record<Weather, React.ReactNode> = {
  sunny: <Sun className="h-6 w-6 text-yellow-400" />,
  cloudy: <CloudSun className="h-6 w-6 text-slate-400" />,
  rainy: <CloudRain className="h-6 w-6 text-blue-400" />,
  hot: <Sun className="h-6 w-6 text-orange-500" />,
};

const WEATHER_DEMAND_MULT: Record<Weather, number> = {
  hot: 1.5,
  sunny: 1.2,
  cloudy: 0.8,
  rainy: 0.4,
};

const TOTAL_DAYS = 7;
const LEMON_COST = 0.50;
const SUGAR_COST = 0.25;
const CUP_COST = 0.10;

function randomWeather(): Weather {
  const weathers: Weather[] = ["sunny", "cloudy", "rainy", "hot"];
  return weathers[Math.floor(Math.random() * weathers.length)]!;
}

function calcDemand(weather: Weather, price: number): number {
  const baseDemand = 30;
  const priceFactor = Math.max(0, 1 - (price - 1.0) * 0.5);
  const demand = Math.floor(baseDemand * WEATHER_DEMAND_MULT[weather]! * priceFactor);
  return Math.max(0, demand + Math.floor(Math.random() * 6) - 3);
}

/* ─── state ─── */
type DayResult = {
  day: number;
  weather: Weather;
  cupsSold: number;
  revenue: number;
  costs: number;
  profit: number;
};

type State = {
  phase: Phase;
  day: number;
  weather: Weather;
  cash: number;
  lemons: number;
  sugar: number;
  cups: number;
  price: number;
  results: DayResult[];
  startTime: number;
  interactions: number;
};

type Action =
  | { type: "START" }
  | { type: "BUY"; item: "lemons" | "sugar" | "cups"; qty: number }
  | { type: "SET_PRICE"; price: number }
  | { type: "SELL" }
  | { type: "NEXT_DAY" };

function initState(): State {
  return {
    phase: "ready",
    day: 1,
    weather: randomWeather(),
    cash: 20,
    lemons: 0,
    sugar: 0,
    cups: 0,
    price: 1.00,
    results: [],
    startTime: 0,
    interactions: 0,
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return {
        ...initState(),
        phase: "morning",
        startTime: Date.now(),
        weather: randomWeather(),
      };
    case "BUY": {
      if (state.phase !== "morning") return state;
      const costs: Record<string, number> = { lemons: LEMON_COST, sugar: SUGAR_COST, cups: CUP_COST };
      const cost = costs[action.item]! * action.qty;
      if (cost > state.cash) return state;
      return {
        ...state,
        cash: Math.round((state.cash - cost) * 100) / 100,
        [action.item]: state[action.item] + action.qty,
        interactions: state.interactions + 1,
      };
    }
    case "SET_PRICE":
      return { ...state, price: Math.round(action.price * 100) / 100, interactions: state.interactions + 1 };
    case "SELL": {
      if (state.phase !== "morning") return state;
      const demand = calcDemand(state.weather, state.price);
      const maxCups = Math.min(state.lemons, state.sugar, state.cups);
      const cupsSold = Math.min(demand, maxCups);
      const revenue = Math.round(cupsSold * state.price * 100) / 100;
      const supplyCost = cupsSold * (LEMON_COST + SUGAR_COST + CUP_COST);
      const profit = Math.round((revenue - supplyCost) * 100) / 100;
      const result: DayResult = {
        day: state.day,
        weather: state.weather,
        cupsSold,
        revenue,
        costs: Math.round(supplyCost * 100) / 100,
        profit,
      };
      return {
        ...state,
        phase: "result",
        cash: Math.round((state.cash + revenue) * 100) / 100,
        lemons: state.lemons - cupsSold,
        sugar: state.sugar - cupsSold,
        cups: state.cups - cupsSold,
        results: [...state.results, result],
      };
    }
    case "NEXT_DAY": {
      if (state.day >= TOTAL_DAYS) return { ...state, phase: "complete" };
      return {
        ...state,
        phase: "morning",
        day: state.day + 1,
        weather: randomWeather(),
      };
    }
    default:
      return state;
  }
}

/* ─── component ─── */
export default function GameLemonadeStand() {
  const { setMessage, setMood } = useMascot();
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const totalProfit = state.results.reduce((sum, r) => sum + r.profit, 0);
  const elapsedMs = state.phase === "complete" ? Date.now() - state.startTime : 0;
  const score = Math.max(0, Math.round(totalProfit * 10));
  const MAX_SCORE = 500;
  const stars = score >= 350 ? 3 : score >= 200 ? 2 : score >= 80 ? 1 : 0;
  const latestResult = state.results[state.results.length - 1];

  useEffect(() => {
    if (state.phase !== "complete") return;
    setMood(totalProfit > 0 ? "cheering" : "sad");
    setMessage(totalProfit > 0 ? `$${totalProfit.toFixed(2)} profit! Business genius!` : "Tough week! Try a new strategy!");
    if (totalProfit > 0) void hapticCelebration();
    else void hapticError();
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "lemonade-stand",
      difficulty: "medium",
      elapsedMs,
      interactions: state.interactions,
      score,
      maxScore: MAX_SCORE,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, totalProfit, elapsedMs, state.interactions, score, setMessage, setMood]);

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    setMood("happy");
    setMessage("Buy supplies, set prices, and sell lemonade!");
    dispatch({ type: "START" });
  }, [setMood, setMessage]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-yellow-300/25 bg-gradient-to-br from-yellow-950/90 via-slate-900/95 to-amber-950/90 shadow-2xl backdrop-blur-xl">
      <AnimatePresence mode="wait">
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="thinking" size="lg" />
            <h3 className="text-2xl font-black text-white">Lemonade Stand</h3>
            <p className="text-yellow-200/80">Run a lemonade business for 7 days! Buy supplies, set prices, and maximize profit!</p>
            <PhysicalButton onClick={startGame} variant="primary" className="px-10 py-4">
              Open Shop 🍋
            </PhysicalButton>
          </motion.section>
        )}

        {state.phase === "morning" && (
          <motion.section key="morning" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 px-5 py-5">
            <div className="flex w-full items-center justify-between">
              <span className="text-sm font-bold text-yellow-200">Day {state.day}/{TOTAL_DAYS}</span>
              <span className="text-sm font-bold text-green-400">${state.cash.toFixed(2)}</span>
            </div>

            {/* weather */}
            <div className="flex items-center gap-2 rounded-xl bg-slate-800/60 px-4 py-2">
              {WEATHER_ICONS[state.weather]}
              <span className="text-sm font-medium capitalize text-white">{state.weather}</span>
            </div>

            {/* inventory */}
            <div className="grid w-full grid-cols-3 gap-2 text-center text-xs text-slate-300">
              <div className="rounded-xl bg-slate-800/50 p-2">
                🍋 Lemons: {state.lemons}
              </div>
              <div className="rounded-xl bg-slate-800/50 p-2">
                🧂 Sugar: {state.sugar}
              </div>
              <div className="rounded-xl bg-slate-800/50 p-2">
                🥤 Cups: {state.cups}
              </div>
            </div>

            {/* buy buttons */}
            <div className="grid w-full grid-cols-3 gap-2">
              {(["lemons", "sugar", "cups"] as const).map((item) => {
                const cost = item === "lemons" ? LEMON_COST : item === "sugar" ? SUGAR_COST : CUP_COST;
                const label = item === "lemons" ? "🍋" : item === "sugar" ? "🧂" : "🥤";
                return (
                  <button key={item}
                    onClick={() => { dispatch({ type: "BUY", item, qty: 5 }); void hapticSelection(); }}
                    disabled={state.cash < cost * 5}
                    className="rounded-xl bg-emerald-600/40 px-2 py-2 text-xs font-medium text-white transition-all hover:bg-emerald-500/50 disabled:opacity-40">
                    Buy 5 {label}
                    <br />${(cost * 5).toFixed(2)}
                  </button>
                );
              })}
            </div>

            {/* price slider */}
            <div className="w-full">
              <p className="mb-1 text-sm font-semibold text-yellow-200">Price per cup: ${state.price.toFixed(2)}</p>
              <input
                type="range" min={0.5} max={3.0} step={0.25} value={state.price}
                onChange={(e) => dispatch({ type: "SET_PRICE", price: parseFloat(e.target.value) })}
                className="w-full accent-yellow-400"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>$0.50</span><span>$3.00</span>
              </div>
            </div>

            <PhysicalButton onClick={() => { dispatch({ type: "SELL" }); }} variant="success" className="mt-1 w-full py-3">
              <DollarSign className="mr-1 h-5 w-5" /> Open for Business!
            </PhysicalButton>
          </motion.section>
        )}

        {state.phase === "result" && latestResult && (
          <motion.section key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 px-5 py-6">
            <h3 className="text-lg font-bold text-white">Day {latestResult.day} Results</h3>
            <div className="flex items-center gap-2">
              {WEATHER_ICONS[latestResult.weather]}
              <span className="text-sm capitalize text-slate-300">{latestResult.weather}</span>
            </div>

            <div className="w-full space-y-2 rounded-2xl bg-slate-800/60 p-4 text-sm text-slate-200">
              <div className="flex justify-between"><span>Cups sold:</span><span className="font-bold">{latestResult.cupsSold}</span></div>
              <div className="flex justify-between"><span>Revenue:</span><span className="font-bold text-green-400">${latestResult.revenue.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Supply costs:</span><span className="font-bold text-red-400">-${latestResult.costs.toFixed(2)}</span></div>
              <hr className="border-slate-700" />
              <div className="flex justify-between text-base">
                <span>Day Profit:</span>
                <span className={`font-black ${latestResult.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {latestResult.profit >= 0 ? "+" : ""}${latestResult.profit.toFixed(2)}
                </span>
              </div>
            </div>

            <p className="text-sm text-yellow-200/80">Total cash: ${state.cash.toFixed(2)}</p>

            <PhysicalButton onClick={() => dispatch({ type: "NEXT_DAY" })} variant="primary" className="w-full py-3">
              {state.day >= TOTAL_DAYS ? "See Final Results" : `Day ${state.day + 1} →`}
            </PhysicalButton>
          </motion.section>
        )}

        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood={totalProfit > 0 ? "cheering" : "sad"} size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Week Complete!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}>
                  ⭐
                </motion.span>
              ))}
            </div>
            <p className="text-lg font-bold text-yellow-200">
              Total Profit: <span className={totalProfit >= 0 ? "text-green-400" : "text-red-400"}>
                ${totalProfit.toFixed(2)}
              </span>
            </p>
            <p className="text-sm text-slate-300">Final cash: ${state.cash.toFixed(2)}</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 🍋</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
