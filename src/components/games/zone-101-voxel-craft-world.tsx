"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Pickaxe, Trees, Mountain, Droplets, RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

// ─── Constants ────────────────────────────────────────────────────────────────
const GRID_W = 16;
const GRID_H = 12;
const LAYER_COUNT = 3;
const SESSION_ID = createLegacySessionId();

type BlockType = "air" | "dirt" | "stone" | "wood" | "leaf" | "water" | "sand" | "ore";
type Tool = "place" | "mine";
type Phase = "ready" | "playing" | "complete";

const BLOCK_PALETTE: { type: BlockType; icon: string; color: string }[] = [
  { type: "dirt", icon: "🟫", color: "bg-amber-700" },
  { type: "stone", icon: "⬜", color: "bg-stone-400" },
  { type: "wood", icon: "🪵", color: "bg-amber-900" },
  { type: "leaf", icon: "🍃", color: "bg-emerald-500" },
  { type: "water", icon: "💧", color: "bg-blue-400" },
  { type: "sand", icon: "🏖️", color: "bg-yellow-300" },
  { type: "ore", icon: "💎", color: "bg-cyan-500" },
];

const BLOCK_COLORS: Record<BlockType, string> = {
  air: "bg-sky-100",
  dirt: "bg-amber-700",
  stone: "bg-stone-400",
  wood: "bg-amber-900",
  leaf: "bg-emerald-500",
  water: "bg-blue-400",
  sand: "bg-yellow-300",
  ore: "bg-cyan-500",
};

const BLOCK_BORDERS: Record<BlockType, string> = {
  air: "border-sky-200",
  dirt: "border-amber-800",
  stone: "border-stone-500",
  wood: "border-amber-950",
  leaf: "border-emerald-600",
  water: "border-blue-500",
  sand: "border-yellow-400",
  ore: "border-cyan-600",
};

type WorldGrid = BlockType[][][]; // [layer][y][x]

function generateTerrain(): WorldGrid {
  const world: WorldGrid = Array.from({ length: LAYER_COUNT }, () =>
    Array.from({ length: GRID_H }, () =>
      Array.from({ length: GRID_W }, () => "air" as BlockType)
    )
  );

  // Layer 0: bedrock & ground
  for (let y = 0; y < GRID_H; y++) {
    for (let x = 0; x < GRID_W; x++) {
      if (y >= GRID_H - 3) {
        world[0]![y]![x] = "stone";
      } else if (y >= GRID_H - 5) {
        world[0]![y]![x] = "dirt";
      }
      // Random ore in stone
      if (y >= GRID_H - 3 && Math.random() < 0.1) {
        world[0]![y]![x] = "ore";
      }
    }
  }

  // Trees
  const treePositions = [3, 7, 12];
  for (const tx of treePositions) {
    const groundY = GRID_H - 6;
    for (let ty = groundY; ty > groundY - 3; ty--) {
      if (ty >= 0) world[1]![ty]![tx] = "wood";
    }
    const leafY = groundY - 3;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 2; dx++) {
        const lx = tx + dx;
        const ly = leafY + dy;
        if (lx >= 0 && lx < GRID_W && ly >= 0 && ly < GRID_H) {
          world[1]![ly]![lx] = "leaf";
        }
      }
    }
  }

  // Water pool
  for (let x = 9; x < 12; x++) {
    world[0]![GRID_H - 4]![x] = "water";
    world[0]![GRID_H - 5]![x] = "water";
  }

  // Sand near water
  for (let x = 8; x < 13; x++) {
    if (world[0]![GRID_H - 5]![x] === "dirt") {
      world[0]![GRID_H - 5]![x] = "sand";
    }
    if (world[0]![GRID_H - 6]![x] === "air") {
      world[0]![GRID_H - 6]![x] = "sand";
    }
  }

  return world;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone101VoxelCraftWorld() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [world, setWorld] = useState<WorldGrid>(generateTerrain);
  const [activeLayer, setActiveLayer] = useState(1);
  const [selectedBlock, setSelectedBlock] = useState<BlockType>("dirt");
  const [tool, setTool] = useState<Tool>("place");
  const [blocksPlaced, setBlocksPlaced] = useState(0);
  const [blocksMined, setBlocksMined] = useState(0);
  const [inventory, setInventory] = useState<Record<BlockType, number>>({
    air: 0, dirt: 50, stone: 30, wood: 20, leaf: 15, water: 10, sand: 10, ore: 5,
  });
  const [dayNight, setDayNight] = useState<"day" | "night">("day");
  const [timeOfDay, setTimeOfDay] = useState(0);

  // Day/night cycle
  useEffect(() => {
    if (phase !== "playing") return;
    const timer = setInterval(() => {
      setTimeOfDay((prev) => {
        const next = (prev + 1) % 120;
        if (next === 60) setDayNight("night");
        if (next === 0) setDayNight("day");
        return next;
      });
    }, 500);
    return () => clearInterval(timer);
  }, [phase]);

  const handleCellClick = useCallback(
    (x: number, y: number) => {
      if (phase !== "playing") return;
      const currentBlock = world[activeLayer]![y]![x]!;

      if (tool === "mine" && currentBlock !== "air") {
        hapticSuccess();
        setWorld((prev) => {
          const next = prev.map((layer) => layer.map((row) => [...row]));
          next[activeLayer]![y]![x] = "air";
          return next;
        });
        setInventory((prev) => ({
          ...prev,
          [currentBlock]: (prev[currentBlock] ?? 0) + 1,
        }));
        setBlocksMined((prev) => prev + 1);
      } else if (tool === "place" && currentBlock === "air" && (inventory[selectedBlock] ?? 0) > 0) {
        hapticSelection();
        setWorld((prev) => {
          const next = prev.map((layer) => layer.map((row) => [...row]));
          next[activeLayer]![y]![x] = selectedBlock;
          return next;
        });
        setInventory((prev) => ({
          ...prev,
          [selectedBlock]: (prev[selectedBlock] ?? 0) - 1,
        }));
        setBlocksPlaced((prev) => prev + 1);
      } else {
        hapticError();
      }

      // Achievements
      if (blocksPlaced + blocksMined >= 99) {
        setPhase("complete");
        mascot.setMood("cheering");
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-101",
          difficulty: "medium",
          score: blocksPlaced + blocksMined,
          maxScore: 100,
          interactions: 1,
          elapsedMs: timeOfDay * 500,
          source: "component",
          occurredAt: new Date().toISOString(),
        });
      }
    },
    [phase, world, activeLayer, tool, selectedBlock, inventory, blocksPlaced, blocksMined, mascot, timeOfDay]
  );

  const startGame = () => {
    setPhase("playing");
    mascot.setMood("happy");
  };

  const resetGame = () => {
    setWorld(generateTerrain());
    setActiveLayer(1);
    setSelectedBlock("dirt");
    setTool("place");
    setBlocksPlaced(0);
    setBlocksMined(0);
    setInventory({ air: 0, dirt: 50, stone: 30, wood: 20, leaf: 15, water: 10, sand: 10, ore: 5 });
    setDayNight("day");
    setTimeOfDay(0);
    setPhase("ready");
    mascot.setMood("idle");
  };

  const skyGradient = dayNight === "day"
    ? "from-sky-300 via-blue-200 to-blue-100"
    : "from-indigo-900 via-purple-900 to-slate-900";

  return (
    <div className={`relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b ${skyGradient} p-4 transition-colors duration-2000`}>
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1
        className="mb-2 text-3xl font-black tracking-tight text-white drop-shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Voxel Craft World
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div
            key="ready"
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="max-w-md text-center text-lg text-white/80">
              Build your own world block by block. Mine resources, place structures, and explore an isometric voxel landscape.
            </p>
            <PhysicalButton onClick={startGame}>
              <Box className="mr-2 h-5 w-5" />
              Enter World
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div
            key="playing"
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* HUD */}
            <div className="flex items-center gap-4 rounded-xl bg-black/30 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <span>⛏️ Mined: {blocksMined}</span>
              <span>🧱 Placed: {blocksPlaced}</span>
              <span>🌍 Layer: {activeLayer + 1}/{LAYER_COUNT}</span>
              <span>{dayNight === "day" ? "☀️ Day" : "🌙 Night"}</span>
            </div>

            {/* Tool & block selector */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => { setTool("place"); hapticSelection(); }}
                className={`rounded-lg px-3 py-1.5 text-sm font-bold transition ${
                  tool === "place" ? "bg-emerald-500 text-white" : "bg-white/20 text-white/70"
                }`}
              >
                🧱 Place
              </button>
              <button
                onClick={() => { setTool("mine"); hapticSelection(); }}
                className={`rounded-lg px-3 py-1.5 text-sm font-bold transition ${
                  tool === "mine" ? "bg-orange-500 text-white" : "bg-white/20 text-white/70"
                }`}
              >
                ⛏️ Mine
              </button>
              <div className="mx-2 h-6 w-px bg-white/30" />
              {BLOCK_PALETTE.map((b) => (
                <button
                  key={b.type}
                  onClick={() => { setSelectedBlock(b.type); hapticSelection(); }}
                  className={`flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold transition ${
                    selectedBlock === b.type
                      ? "ring-2 ring-white bg-white/30 text-white"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  {b.icon} {inventory[b.type] ?? 0}
                </button>
              ))}
            </div>

            {/* Layer selector */}
            <div className="flex gap-1">
              {Array.from({ length: LAYER_COUNT }, (_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveLayer(i); hapticSelection(); }}
                  className={`rounded px-3 py-1 text-xs font-bold transition ${
                    activeLayer === i
                      ? "bg-white text-stone-800"
                      : "bg-white/20 text-white/60"
                  }`}
                >
                  L{i + 1}
                </button>
              ))}
            </div>

            {/* World grid */}
            <div
              className="grid gap-0.5 rounded-xl border-2 border-white/20 bg-black/20 p-1 backdrop-blur-sm"
              style={{
                gridTemplateColumns: `repeat(${GRID_W}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: GRID_H }, (_, y) =>
                Array.from({ length: GRID_W }, (_, x) => {
                  // Composite: show topmost non-air block
                  let displayBlock: BlockType = "air";
                  let displayLayer = -1;
                  for (let l = LAYER_COUNT - 1; l >= 0; l--) {
                    if (world[l]![y]![x] !== "air") {
                      displayBlock = world[l]![y]![x]!;
                      displayLayer = l;
                      break;
                    }
                  }
                  const isActiveLayerBlock = displayLayer === activeLayer;
                  const activeBlock = world[activeLayer]![y]![x]!;

                  return (
                    <button
                      key={`${x}-${y}`}
                      onClick={() => handleCellClick(x, y)}
                      className={`h-6 w-6 rounded-sm border transition-all duration-100 hover:brightness-125 sm:h-7 sm:w-7 ${
                        BLOCK_COLORS[displayBlock]
                      } ${BLOCK_BORDERS[displayBlock]} ${
                        isActiveLayerBlock ? "opacity-100" : "opacity-60"
                      } ${
                        tool === "mine" && activeBlock !== "air"
                          ? "cursor-crosshair hover:ring-1 hover:ring-red-400"
                          : "cursor-pointer"
                      }`}
                      title={`(${x},${y}) L${displayLayer + 1}: ${displayBlock}`}
                    />
                  );
                })
              )}
            </div>

            <PhysicalButton onClick={resetGame}>
              <RotateCcw className="mr-1 h-4 w-4" />
              Reset World
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div
            key="complete"
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="rounded-2xl bg-black/40 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">🏗️</p>
              <h2 className="mt-3 text-2xl font-black text-white">World Builder!</h2>
              <p className="mt-2 text-white/70">
                You placed {blocksPlaced} blocks and mined {blocksMined} resources.
              </p>
              <p className="mt-1 text-lg font-bold text-emerald-400">
                Total Actions: {blocksPlaced + blocksMined}
              </p>
            </div>
            <PhysicalButton onClick={resetGame}>
              <RotateCcw className="mr-2 h-5 w-5" />
              New World
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
