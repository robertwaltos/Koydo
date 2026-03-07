"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Trophy, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
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

/* ─── stock data ─── */
type Stock = { symbol: string; name: string; sector: string; emoji: string; volatility: number; basePrice: number };

const STOCKS: Stock[] = [
  { symbol: "TECH", name: "TechNova Inc.", sector: "Technology", emoji: "💻", volatility: 0.08, basePrice: 150 },
  { symbol: "GRNE", name: "GreenLeaf Energy", sector: "Energy", emoji: "🌱", volatility: 0.06, basePrice: 45 },
  { symbol: "FOOD", name: "FarmFresh Co.", sector: "Consumer", emoji: "🍎", volatility: 0.03, basePrice: 80 },
  { symbol: "HLTH", name: "MediCare Plus", sector: "Healthcare", emoji: "🏥", volatility: 0.05, basePrice: 120 },
  { symbol: "GAME", name: "PlayWorld Studios", sector: "Entertainment", emoji: "🎮", volatility: 0.10, basePrice: 60 },
  { symbol: "BANK", name: "SafeVault Bank", sector: "Finance", emoji: "🏦", volatility: 0.04, basePrice: 95 },
];

type NewsEvent = { headline: string; affectedSector: string; impact: number }; // impact: -1 to +1

const NEWS_EVENTS: NewsEvent[] = [
  { headline: "AI breakthrough boosts tech stocks", affectedSector: "Technology", impact: 0.15 },
  { headline: "New regulations hit tech companies", affectedSector: "Technology", impact: -0.12 },
  { headline: "Solar energy costs drop 30%", affectedSector: "Energy", impact: 0.20 },
  { headline: "Oil prices surge globally", affectedSector: "Energy", impact: -0.10 },
  { headline: "Record harvest boosts food sector", affectedSector: "Consumer", impact: 0.08 },
  { headline: "Supply chain disruption hits retailers", affectedSector: "Consumer", impact: -0.07 },
  { headline: "New vaccine approved by FDA", affectedSector: "Healthcare", impact: 0.18 },
  { headline: "Drug trial fails, shares drop", affectedSector: "Healthcare", impact: -0.15 },
  { headline: "Blockbuster game launch breaks records", affectedSector: "Entertainment", impact: 0.25 },
  { headline: "Gaming company faces lawsuit", affectedSector: "Entertainment", impact: -0.18 },
  { headline: "Central bank cuts interest rates", affectedSector: "Finance", impact: 0.10 },
  { headline: "Banking scandal rocks industry", affectedSector: "Finance", impact: -0.14 },
  { headline: "Global economy shows strong growth", affectedSector: "all", impact: 0.05 },
  { headline: "Recession fears grip markets", affectedSector: "all", impact: -0.06 },
];

const STARTING_CASH = 10000;
const TOTAL_ROUNDS = 8;

/* ─── state ─── */
type Phase = "ready" | "playing" | "news" | "complete";

type Holding = { symbol: string; shares: number; buyPrice: number };

type State = {
  phase: Phase;
  round: number;
  cash: number;
  holdings: Holding[];
  prices: Record<string, number>;
  priceHistory: Record<string, number[]>;
  currentNews: NewsEvent | null;
  totalValue: number;
};

type Action =
  | { type: "START" }
  | { type: "BUY"; symbol: string; shares: number }
  | { type: "SELL"; symbol: string; shares: number }
  | { type: "SHOW_NEWS"; news: NewsEvent }
  | { type: "APPLY_NEWS"; newPrices: Record<string, number> }
  | { type: "NEXT_ROUND" }
  | { type: "FINISH" };

function initPrices(): Record<string, number> {
  const p: Record<string, number> = {};
  STOCKS.forEach((s) => { p[s.symbol] = s.basePrice + Math.round((Math.random() - 0.5) * 10); });
  return p;
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const prices = initPrices();
      const hist: Record<string, number[]> = {};
      Object.entries(prices).forEach(([k, v]) => { hist[k] = [v]; });
      return { ...s, phase: "playing", round: 1, cash: STARTING_CASH, holdings: [], prices, priceHistory: hist, currentNews: null, totalValue: STARTING_CASH };
    }
    case "BUY": {
      const price = s.prices[a.symbol];
      const cost = price * a.shares;
      if (cost > s.cash) return s;
      const existing = s.holdings.find((h) => h.symbol === a.symbol);
      let holdings: Holding[];
      if (existing) {
        const avgPrice = (existing.buyPrice * existing.shares + cost) / (existing.shares + a.shares);
        holdings = s.holdings.map((h) =>
          h.symbol === a.symbol ? { ...h, shares: h.shares + a.shares, buyPrice: avgPrice } : h
        );
      } else {
        holdings = [...s.holdings, { symbol: a.symbol, shares: a.shares, buyPrice: price }];
      }
      return { ...s, cash: s.cash - cost, holdings };
    }
    case "SELL": {
      const price = s.prices[a.symbol];
      const holding = s.holdings.find((h) => h.symbol === a.symbol);
      if (!holding || holding.shares < a.shares) return s;
      const revenue = price * a.shares;
      const newShares = holding.shares - a.shares;
      const holdings = newShares > 0
        ? s.holdings.map((h) => h.symbol === a.symbol ? { ...h, shares: newShares } : h)
        : s.holdings.filter((h) => h.symbol !== a.symbol);
      return { ...s, cash: s.cash + revenue, holdings };
    }
    case "SHOW_NEWS":
      return { ...s, phase: "news", currentNews: a.news };
    case "APPLY_NEWS": {
      const hist = { ...s.priceHistory };
      Object.entries(a.newPrices).forEach(([k, v]) => { hist[k] = [...(hist[k] || []), v]; });
      const holdingValue = s.holdings.reduce((sum, h) => sum + (a.newPrices[h.symbol] || 0) * h.shares, 0);
      return { ...s, prices: a.newPrices, priceHistory: hist, totalValue: s.cash + holdingValue, phase: "playing" };
    }
    case "NEXT_ROUND":
      return { ...s, round: s.round + 1 };
    case "FINISH": {
      const holdingValue = s.holdings.reduce((sum, h) => sum + (s.prices[h.symbol] || 0) * h.shares, 0);
      return { ...s, phase: "complete", totalValue: s.cash + holdingValue };
    }
    default:
      return s;
  }
}

const INIT: State = {
  phase: "ready", round: 0, cash: STARTING_CASH, holdings: [],
  prices: {}, priceHistory: {}, currentNews: null, totalValue: STARTING_CASH,
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── component ─── */
export default function GameStockSprint() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const newsQueue = useRef<NewsEvent[]>([]);

  const { phase, round, cash, holdings, prices, totalValue, currentNews } = state;

  const profit = totalValue - STARTING_CASH;
  const profitPct = (profit / STARTING_CASH) * 100;

  const stars = useMemo(() => {
    if (profitPct >= 20) return 3;
    if (profitPct >= 10) return 2;
    if (profitPct >= 0) return 1;
    return 0;
  }, [profitPct]);

  const score = useMemo(() => Math.max(0, Math.round(totalValue)), [totalValue]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    newsQueue.current = shuffle(NEWS_EVENTS);
    dispatch({ type: "START" });
    mascot.say("You have $10,000 — grow your portfolio! 📈", "excited");
  }, [mascot]);

  const handleBuy = useCallback((symbol: string) => {
    const price = prices[symbol];
    const maxShares = Math.floor(cash / price);
    if (maxShares <= 0) return;
    const shares = Math.min(maxShares, 10);
    hapticSelection();
    dispatch({ type: "BUY", symbol, shares });
    mascot.say(`Bought ${shares} ${symbol}!`, "cheering");
  }, [prices, cash, mascot]);

  const handleSell = useCallback((symbol: string) => {
    const holding = holdings.find((h) => h.symbol === symbol);
    if (!holding || holding.shares <= 0) return;
    hapticSelection();
    const profit = (prices[symbol] - holding.buyPrice) * holding.shares;
    dispatch({ type: "SELL", symbol, shares: holding.shares });
    if (profit > 0) mascot.say(`Profit: +$${profit.toFixed(0)}! 💰`, "cheering");
    else mascot.say(`Loss: $${profit.toFixed(0)}`, "thinking");
  }, [holdings, prices, mascot]);

  const handleEndTurn = useCallback(() => {
    if (round >= TOTAL_ROUNDS) {
      hapticCelebration();
      emitLegacyGameComplete(sessionId.current, score, stars);
      dispatch({ type: "FINISH" });
      return;
    }

    // Show news event
    const news = newsQueue.current[round % newsQueue.current.length];
    dispatch({ type: "SHOW_NEWS", news });
    hapticSelection();

    // Apply news to prices after delay
    setTimeout(() => {
      const newPrices = { ...prices };
      STOCKS.forEach((stock) => {
        const affected = news.affectedSector === "all" || news.affectedSector === stock.sector;
        const newsImpact = affected ? news.impact : (Math.random() - 0.5) * 0.02;
        const randomWalk = (Math.random() - 0.5) * stock.volatility;
        const change = 1 + newsImpact + randomWalk;
        newPrices[stock.symbol] = Math.max(1, Math.round(prices[stock.symbol] * change * 100) / 100);
      });
      dispatch({ type: "APPLY_NEWS", newPrices });
      dispatch({ type: "NEXT_ROUND" });
    }, 2000);
  }, [round, prices, score, stars]);

  const holdingValue = holdings.reduce((sum, h) => sum + (prices[h.symbol] || 0) * h.shares, 0);

  return (
    <div className="relative flex min-h-[560px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-400" />
          <span className="text-sm font-bold text-white">Stock Sprint</span>
        </div>
        {phase === "playing" && (
          <div className="flex items-center gap-3 text-xs">
            <span className="text-stone-400">Turn {round}/{TOTAL_ROUNDS}</span>
            <span className="text-emerald-400 font-bold">${cash.toFixed(0)}</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Stock Sprint</h2>
            <p className="text-stone-400 max-w-xs">
              Start with $10,000. Buy and sell stocks across {TOTAL_ROUNDS} turns. News events move the market!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Start Trading 📈</PhysicalButton>
          </motion.section>
        )}

        {phase === "news" && currentNews && (
          <motion.section key="news" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="text-5xl"
            >
              📰
            </motion.div>
            <h3 className="text-lg font-bold text-white">Breaking News!</h3>
            <p className="text-stone-300 max-w-xs font-medium">{currentNews.headline}</p>
            <div className="flex items-center gap-2 text-xs">
              {currentNews.impact > 0
                ? <TrendingUp className="h-4 w-4 text-emerald-400" />
                : <TrendingDown className="h-4 w-4 text-red-400" />
              }
              <span className={currentNews.impact > 0 ? "text-emerald-400" : "text-red-400"}>
                {currentNews.affectedSector} sector {currentNews.impact > 0 ? "surges" : "drops"}
              </span>
            </div>
          </motion.section>
        )}

        {phase === "playing" && (
          <motion.section key="trade" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col gap-3 px-4 py-4 w-full overflow-y-auto">
            {/* portfolio summary */}
            <div className="flex justify-between items-center px-2 py-2 rounded-xl bg-stone-800/50 ring-1 ring-white/5">
              <div className="text-xs">
                <p className="text-stone-500">Portfolio</p>
                <p className="text-white font-bold">${(cash + holdingValue).toFixed(0)}</p>
              </div>
              <div className={`text-xs text-right ${profit >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                <p>{profit >= 0 ? "+" : ""}${profit.toFixed(0)}</p>
                <p>{profitPct >= 0 ? "+" : ""}{profitPct.toFixed(1)}%</p>
              </div>
            </div>

            {/* stock list */}
            <div className="space-y-1.5">
              {STOCKS.map((stock) => {
                const price = prices[stock.symbol] || stock.basePrice;
                const holding = holdings.find((h) => h.symbol === stock.symbol);
                const shares = holding?.shares || 0;
                const pnl = holding ? (price - holding.buyPrice) * shares : 0;
                const prevPrice = (state.priceHistory[stock.symbol] || []).slice(-2)[0] || price;
                const change = ((price - prevPrice) / prevPrice) * 100;

                return (
                  <div key={stock.symbol}
                    className="flex items-center gap-2 rounded-xl bg-stone-800/60 ring-1 ring-white/5 px-3 py-2.5">
                    <span className="text-xl">{stock.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black text-white">{stock.symbol}</span>
                        <span className="text-[10px] text-stone-500 truncate">{stock.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="text-white font-bold">${price.toFixed(0)}</span>
                        <span className={change >= 0 ? "text-emerald-400" : "text-red-400"}>
                          {change >= 0 ? "+" : ""}{change.toFixed(1)}%
                        </span>
                        {shares > 0 && (
                          <span className={`${pnl >= 0 ? "text-emerald-300" : "text-red-300"}`}>
                            {shares}sh ({pnl >= 0 ? "+" : ""}${pnl.toFixed(0)})
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => handleBuy(stock.symbol)}
                        className="px-2 py-1 rounded-lg bg-emerald-600/20 text-emerald-300 text-[10px] font-bold hover:bg-emerald-600/40 min-w-[36px]">
                        Buy
                      </button>
                      {shares > 0 && (
                        <button onClick={() => handleSell(stock.symbol)}
                          className="px-2 py-1 rounded-lg bg-red-600/20 text-red-300 text-[10px] font-bold hover:bg-red-600/40 min-w-[36px]">
                          Sell
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <PhysicalButton onClick={handleEndTurn} variant="primary">
              {round >= TOTAL_ROUNDS ? "Cash Out" : "End Turn →"}
            </PhysicalButton>
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Sprint Over!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  initial={{ scale: 0 }} animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}>⭐</motion.span>
              ))}
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-white font-bold">Final: ${totalValue.toFixed(0)}</p>
              <p className={`${profit >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                {profit >= 0 ? "Profit" : "Loss"}: ${Math.abs(profit).toFixed(0)} ({profitPct >= 0 ? "+" : ""}{profitPct.toFixed(1)}%)
              </p>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 📈</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
