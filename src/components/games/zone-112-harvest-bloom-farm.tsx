"use client";

import { useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, Sun, RotateCcw, Store } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();
const GRID = 6;

type Phase = "ready" | "farming" | "shop" | "complete";
type Season = "spring" | "summer" | "fall" | "winter";
type CropType = "turnip" | "melon" | "pumpkin" | "snowdrop" | null;
type TileState = "empty" | "tilled" | "planted" | "watered" | "grown";

interface Tile {
  state: TileState;
  crop: CropType;
  growDays: number;
  daysNeeded: number;
}

interface Crop {
  name: string; icon: string; season: Season; growTime: number;
  seedCost: number; sellPrice: number;
}

const CROPS: Record<string, Crop> = {
  turnip: { name: "Turnip", icon: "🥬", season: "spring", growTime: 3, seedCost: 10, sellPrice: 30 },
  melon: { name: "Melon", icon: "🍈", season: "summer", growTime: 4, seedCost: 20, sellPrice: 60 },
  pumpkin: { name: "Pumpkin", icon: "🎃", season: "fall", growTime: 5, seedCost: 30, sellPrice: 100 },
  snowdrop: { name: "Snowdrop", icon: "❄️", season: "winter", growTime: 6, seedCost: 40, sellPrice: 150 },
};

const SEASON_ORDER: Season[] = ["spring", "summer", "fall", "winter"];
const SEASON_INFO: Record<Season, { icon: string; bg: string }> = {
  spring: { icon: "🌸", bg: "from-green-200 to-green-400" },
  summer: { icon: "☀️", bg: "from-yellow-200 to-orange-300" },
  fall: { icon: "🍂", bg: "from-orange-300 to-amber-500" },
  winter: { icon: "❄️", bg: "from-blue-100 to-blue-300" },
};

function initGrid(): Tile[][] {
  return Array.from({ length: GRID }, () =>
    Array.from({ length: GRID }, () => ({
      state: "empty" as TileState,
      crop: null,
      growDays: 0,
      daysNeeded: 0,
    }))
  );
}

export default function Zone112HarvestBloomFarm() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [grid, setGrid] = useState<Tile[][]>(initGrid());
  const [gold, setGold] = useState(100);
  const [day, setDay] = useState(1);
  const [season, setSeason] = useState<Season>("spring");
  const [year, setYear] = useState(1);
  const [energy, setEnergy] = useState(10);
  const [maxEnergy] = useState(10);
  const [tool, setTool] = useState<"hoe" | "water" | "seed" | "harvest">("hoe");
  const [selectedCrop, setSelectedCrop] = useState<CropType>("turnip");
  const [log, setLog] = useState<string[]>([]);
  const [harvestCount, setHarvestCount] = useState(0);

  const addLog = useCallback((msg: string) => setLog((p) => [...p.slice(-4), msg]), []);

  const startGame = useCallback(() => {
    setGrid(initGrid());
    setGold(100);
    setDay(1);
    setSeason("spring");
    setYear(1);
    setEnergy(10);
    setTool("hoe");
    setSelectedCrop("turnip");
    setHarvestCount(0);
    setLog(["🌅 Welcome to your new farm!"]);
    setPhase("farming");
    mascot.setMood("happy");
  }, [mascot]);

  const useTile = useCallback((r: number, c: number) => {
    if (energy <= 0) { addLog("😴 No energy left! Sleep to next day."); hapticError(); return; }
    setGrid((prev) => {
      const g = prev.map((row) => row.map((t) => ({ ...t })));
      const tile = g[r]![c]!;

      if (tool === "hoe" && tile.state === "empty") {
        tile.state = "tilled";
        addLog("🪓 Tilled the soil.");
        hapticSelection();
      } else if (tool === "seed" && tile.state === "tilled" && selectedCrop) {
        const crop = CROPS[selectedCrop]!;
        if (gold < crop.seedCost) { addLog(`💰 Not enough gold for ${crop.name} seeds!`); hapticError(); return prev; }
        if (crop.season !== season) { addLog(`❌ ${crop.name} can't grow in ${season}!`); hapticError(); return prev; }
        tile.state = "planted";
        tile.crop = selectedCrop;
        tile.growDays = 0;
        tile.daysNeeded = crop.growTime;
        setGold((g) => g - crop.seedCost);
        addLog(`🌱 Planted ${crop.icon} ${crop.name} seeds.`);
        hapticSelection();
      } else if (tool === "water" && (tile.state === "planted" || tile.state === "watered")) {
        tile.state = "watered";
        addLog("💧 Watered the crop.");
        hapticSelection();
      } else if (tool === "harvest" && tile.state === "grown") {
        const crop = CROPS[tile.crop!]!;
        setGold((g) => g + crop.sellPrice);
        setHarvestCount((h) => h + 1);
        addLog(`🎉 Harvested ${crop.icon} ${crop.name}! +${crop.sellPrice}g`);
        hapticSuccess();
        tile.state = "empty";
        tile.crop = null;
        tile.growDays = 0;
        tile.daysNeeded = 0;
      } else {
        return prev;
      }

      setEnergy((e) => e - 1);
      return g;
    });
  }, [tool, selectedCrop, gold, season, energy, addLog]);

  const sleep = useCallback(() => {
    setDay((d) => {
      const newDay = d + 1;
      if (newDay > 7) {
        // Season change
        const sIdx = SEASON_ORDER.indexOf(season);
        const nextSeason = SEASON_ORDER[(sIdx + 1) % 4]!;
        setSeason(nextSeason);
        if (nextSeason === "spring") setYear((y) => y + 1);
        addLog(`${SEASON_INFO[nextSeason]!.icon} ${nextSeason.charAt(0).toUpperCase() + nextSeason.slice(1)} has arrived!`);
        return 1;
      }
      return newDay;
    });
    setEnergy(maxEnergy);

    // Grow crops
    setGrid((prev) => {
      const g = prev.map((row) => row.map((t) => ({ ...t })));
      for (const row of g) {
        for (const tile of row) {
          if (tile.state === "watered" && tile.crop) {
            tile.growDays++;
            if (tile.growDays >= tile.daysNeeded) {
              tile.state = "grown";
            } else {
              tile.state = "planted"; // needs water again
            }
          }
        }
      }
      return g;
    });
    addLog("💤 Slept through the night. New day!");
  }, [season, maxEnergy, addLog]);

  // Win condition: 500g or 10 harvests
  useEffect(() => {
    if (phase !== "farming") return;
    if (gold >= 500 || harvestCount >= 10) {
      setPhase("complete");
      mascot.setMood("cheering");
      emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-112",
          difficulty: "medium",
        score: gold + harvestCount * 20,
        maxScore: 700,
        interactions: 1,
        elapsedMs: day * 1000,
          source: "component",
          occurredAt: new Date().toISOString(),
      });
    }
  }, [gold, harvestCount, phase, day, mascot]);

  const tileIcon = (tile: Tile) => {
    if (tile.state === "empty") return "🟫";
    if (tile.state === "tilled") return "⬛";
    if (tile.state === "planted") return "🌱";
    if (tile.state === "watered") return "💧";
    if (tile.state === "grown") return CROPS[tile.crop!]?.icon ?? "✨";
    return "🟫";
  };

  const seasonInfo = SEASON_INFO[season]!;
  const seasonCrop = Object.entries(CROPS).find(([, c]) => c.season === season);

  return (
    <div className={`relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b ${seasonInfo.bg} p-4`}>
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-green-900 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Sprout className="mr-2 inline h-8 w-8" /> Harvest Bloom Farm
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-green-900/70">
              Till, plant, water, harvest. Each season has its own crop. Reach 500g or 10 harvests to win. Manage energy wisely — sleep to start a new day!
            </p>
            <PhysicalButton onClick={startGame}><Sprout className="mr-2 h-5 w-5" /> Start Farming</PhysicalButton>
          </motion.div>
        )}

        {phase === "farming" && (
          <motion.div key="farming" className="flex w-full max-w-md flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Status bar */}
            <div className="flex w-full flex-wrap items-center justify-between rounded-xl bg-white/40 px-4 py-2 text-sm font-bold text-green-900">
              <span>{seasonInfo.icon} {season} Y{year} D{day}/7</span>
              <span>💰 {gold}g</span>
              <span>⚡ {energy}/{maxEnergy}</span>
              <span>🌾 {harvestCount}</span>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-1">
              {(["hoe", "water", "seed", "harvest"] as const).map((t) => (
                <button key={t} onClick={() => { setTool(t); hapticSelection(); }}
                  className={`rounded-lg px-3 py-1 text-xs font-bold transition ${tool === t ? "bg-green-700 text-white" : "bg-white/50 text-green-900 hover:bg-white/70"}`}>
                  {t === "hoe" ? "🪓 Hoe" : t === "water" ? "💧 Water" : t === "seed" ? "🌱 Plant" : "🎉 Harvest"}
                </button>
              ))}
            </div>

            {/* Crop selector for seed tool */}
            {tool === "seed" && (
              <div className="flex gap-1">
                {Object.entries(CROPS).filter(([, c]) => c.season === season).map(([key, cropInfo]) => (
                  <button key={key} onClick={() => setSelectedCrop(key as CropType)}
                    className={`rounded-lg px-2 py-1 text-xs ${selectedCrop === key ? "bg-amber-500 text-white" : "bg-white/40"}`}>
                    {cropInfo.icon} {cropInfo.name} ({cropInfo.seedCost}g)
                  </button>
                ))}
                {Object.entries(CROPS).filter(([, c]) => c.season === season).length === 0 && (
                  <span className="text-xs text-green-900/50">No crops this season!</span>
                )}
              </div>
            )}

            {/* Farm grid */}
            <div className="grid gap-1 rounded-xl bg-green-800/20 p-2" style={{ gridTemplateColumns: `repeat(${GRID}, 1fr)` }}>
              {grid.map((row, r) =>
                row.map((tile, c) => (
                  <motion.button key={`${r}-${c}`} onClick={() => useTile(r, c)}
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-900/20 text-xl hover:bg-green-900/40 transition"
                    whileTap={{ scale: 0.9 }}>
                    {tileIcon(tile)}
                  </motion.button>
                ))
              )}
            </div>

            <div className="flex gap-2">
              <PhysicalButton onClick={sleep} variant="secondary"><Sun className="mr-1 h-4 w-4" /> Sleep</PhysicalButton>
            </div>

            {/* Log */}
            <div className="h-16 w-full overflow-y-auto rounded-lg bg-black/20 p-2 text-xs text-green-900/70">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-white/60 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">🌾</p>
              <h2 className="mt-3 text-2xl font-black text-green-800">Farm Flourishing!</h2>
              <p className="mt-2 text-green-900/60">Gold: {gold} | Harvests: {harvestCount} | Year {year}</p>
              <p className="text-lg font-bold text-green-700">Score: {gold + harvestCount * 20}</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> New Farm
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
