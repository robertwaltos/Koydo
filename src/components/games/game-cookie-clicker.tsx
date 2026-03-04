"use client";

import { useEffect, useMemo, useReducer, useCallback } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Cookie } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticSelection,
  hapticSuccess,
  hapticCelebration,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── constants ─── */
interface Upgrade {
  name: string;
  baseCost: number;
  perSec: number;
  icon: string;
}

const UPGRADES: Upgrade[] = [
  { name: "Auto Clicker", baseCost: 15, perSec: 0.1, icon: "👆" },
  { name: "Grandma", baseCost: 100, perSec: 1, icon: "👵" },
  { name: "Farm", baseCost: 500, perSec: 5, icon: "🌾" },
  { name: "Factory", baseCost: 3000, perSec: 20, icon: "🏭" },
  { name: "Lab", baseCost: 10000, perSec: 100, icon: "🔬" },
];

const GOAL = 50000;

type Phase = "ready" | "playing" | "won";

interface State {
  phase: Phase;
  sessionId: string;
  cookies: number;
  totalCookies: number;
  owned: number[]; // count per upgrade
  startTime: number;
  interactions: number;
  clicks: number;
}

const init = (): State => ({
  phase: "ready", sessionId: createLegacySessionId(), cookies: 0, totalCookies: 0,
  owned: UPGRADES.map(() => 0), startTime: 0, interactions: 0, clicks: 0,
});

function upgradeCost(base: number, count: number): number {
  return Math.floor(base * Math.pow(1.15, count));
}

function cps(owned: number[]): number {
  return owned.reduce((sum, count, i) => sum + count * UPGRADES[i]!.perSec, 0);
}

type Action =
  | { type: "START" }
  | { type: "CLICK" }
  | { type: "BUY"; idx: number }
  | { type: "TICK" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), startTime: Date.now() };
    case "CLICK": {
      if (s.phase !== "playing") return s;
      const c = s.cookies + 1;
      const t = s.totalCookies + 1;
      return { ...s, cookies: c, totalCookies: t, interactions: s.interactions + 1, clicks: s.clicks + 1, phase: t >= GOAL ? "won" : "playing" };
    }
    case "BUY": {
      if (s.phase !== "playing") return s;
      const cost = upgradeCost(UPGRADES[a.idx]!.baseCost, s.owned[a.idx]!);
      if (s.cookies < cost) return s;
      const owned = [...s.owned];
      owned[a.idx] = owned[a.idx]! + 1;
      return { ...s, cookies: s.cookies - cost, owned, interactions: s.interactions + 1 };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      const earned = cps(s.owned) / 10; // tick every 100ms
      if (earned === 0) return s;
      const c = s.cookies + earned;
      const t = s.totalCookies + earned;
      return { ...s, cookies: c, totalCookies: t, phase: t >= GOAL ? "won" : "playing" };
    }
    default:
      return s;
  }
}

function formatNum(n: number): string {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return Math.floor(n).toString();
}

export default function GameCookieClicker({ width = 400, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const perSec = cps(s.owned);

  const stars = useMemo(() => {
    if (s.phase !== "won") return 0;
    const elapsed = (Date.now() - s.startTime) / 1000;
    if (elapsed < 120) return 3;
    if (elapsed < 300) return 2;
    return 1;
  }, [s.phase, s.startTime]);

  /* auto-production tick */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const id = setInterval(() => dispatch({ type: "TICK" }), 100);
    return () => clearInterval(id);
  }, [s.phase]);

  useEffect(() => {
    if (s.phase !== "won") return;
    setMood("cheering");
    hapticCelebration();
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-cookie-clicker", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.clicks, maxScore: GOAL,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [s.phase]);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="spark" mood={s.phase === "won" ? "happy" : "idle"} size="sm" />
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">🍪 {formatNum(s.cookies)}</div>
          <div className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-bold text-slate-700">{perSec.toFixed(1)}/s</div>
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <p className="text-5xl">🍪</p>
          <p className="text-3xl font-bold text-slate-800">Cookie Clicker</p>
          <p className="text-sm text-slate-600">Bake {formatNum(GOAL)} cookies to win!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Baking</PhysicalButton>
        </div>
      )}

      {s.phase === "playing" && (
        <>
          {/* progress bar */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-amber-400 transition-all" style={{ width: `${Math.min(100, (s.totalCookies / GOAL) * 100)}%` }} />
          </div>
          <p className="text-xs text-slate-500">{formatNum(s.totalCookies)} / {formatNum(GOAL)}</p>

          {/* big cookie button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => { dispatch({ type: "CLICK" }); hapticSelection(); }}
            className="text-7xl select-none active:brightness-110 transition-transform"
          >
            🍪
          </motion.button>

          {/* upgrades */}
          <div className="flex w-full flex-col gap-1 px-2">
            {UPGRADES.map((up, i) => {
              const cost = upgradeCost(up.baseCost, s.owned[i]!);
              const canBuy = s.cookies >= cost;
              return (
                <button
                  key={i}
                  disabled={!canBuy}
                  onClick={() => { dispatch({ type: "BUY", idx: i }); hapticSuccess(); }}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm font-semibold transition
                    ${canBuy ? "border-amber-300 bg-amber-50 text-slate-800 hover:bg-amber-100" : "border-slate-200 bg-slate-50 text-slate-400"}`}
                >
                  <span>{up.icon} {up.name} (x{s.owned[i]})</span>
                  <span>🍪 {formatNum(cost)}</span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {s.phase === "won" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2 py-4">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">🍪 {formatNum(GOAL)} Baked!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Bake Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
