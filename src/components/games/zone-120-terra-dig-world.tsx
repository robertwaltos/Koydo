"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pickaxe, RotateCcw, Swords, Heart, Shield } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();
const W = 480, H = 400;
const TILE = 16;
const COLS = Math.floor(W / TILE);
const ROWS = Math.floor(H / TILE);

type Phase = "ready" | "playing" | "complete";

// Tile types: 0=air, 1=dirt, 2=stone, 3=copper, 4=iron, 5=gold, 6=diamond, 7=grass, 8=wood
const TILE_COLORS: Record<number, string> = {
  0: "transparent", 1: "#8B4513", 2: "#808080", 3: "#CD7F32",
  4: "#A9A9A9", 5: "#FFD700", 6: "#00CED1", 7: "#228B22", 8: "#654321",
};

const ORE_NAMES: Record<number, string> = {
  1: "Dirt", 2: "Stone", 3: "Copper", 4: "Iron", 5: "Gold", 6: "Diamond", 7: "Grass", 8: "Wood",
};

interface Enemy {
  x: number; y: number; vx: number; hp: number; maxHp: number;
  atk: number; icon: string; name: string;
}

export default function Zone120TerraDigWorld() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [hp, setHp] = useState(100);
  const [score, setScore] = useState(0);
  const [depth, setDepth] = useState(0);
  const [inventory, setInventory] = useState<Record<string, number>>({});
  const [tool, setTool] = useState<"pick" | "sword" | "place">("pick");
  const [bossDefeated, setBossDefeated] = useState(false);

  const gameRef = useRef<{
    tiles: number[][];
    px: number; py: number; pvx: number; pvy: number; grounded: boolean; facing: number;
    camY: number; // camera offset
    enemies: Enemy[];
    particles: { x: number; y: number; vx: number; vy: number; life: number; color: string }[];
    keys: Set<string>;
    running: boolean;
    mineTimer: number;
    iFrames: number;
    placeBlock: number; // which block to place 1-8
  }>({
    tiles: [],
    px: COLS * TILE / 2, py: 0, pvx: 0, pvy: 0, grounded: false, facing: 1,
    camY: 0,
    enemies: [],
    particles: [],
    keys: new Set(),
    running: false,
    mineTimer: 0,
    iFrames: 0,
    placeBlock: 1,
  });

  const generateWorld = useCallback(() => {
    const tiles: number[][] = [];
    const totalRows = ROWS * 4; // 4 screens deep
    for (let y = 0; y < totalRows; y++) {
      const row: number[] = [];
      for (let x = 0; x < COLS; x++) {
        if (y < 3) { row.push(0); } // sky
        else if (y === 3) { row.push(7); } // grass
        else if (y < 10) { row.push(Math.random() < 0.05 ? 3 : 1); } // dirt with copper
        else if (y < 25) { row.push(Math.random() < 0.08 ? (Math.random() < 0.4 ? 4 : 3) : 2); } // stone with ores
        else if (y < 50) { row.push(Math.random() < 0.1 ? (Math.random() < 0.3 ? 5 : 4) : 2); } // deep stone
        else { row.push(Math.random() < 0.06 ? 6 : (Math.random() < 0.08 ? 5 : 2)); } // deepest
        // Caves
        if (y > 6 && Math.random() < 0.15) row[x] = 0;
      }
      tiles.push(row);
    }
    // Starting platform clear
    for (let x = COLS / 2 - 2; x < COLS / 2 + 2; x++) {
      for (let y = 0; y < 3; y++) {
        if (tiles[y]) tiles[y]![x] = 0;
      }
    }
    return tiles;
  }, []);

  const spawnEnemies = useCallback((tiles: number[][]) => {
    const enemies: Enemy[] = [];
    // Spawn enemies in cave pockets
    for (let y = 8; y < tiles.length; y += 6) {
      for (let x = 2; x < COLS - 2; x += 8) {
        if (tiles[y]?.[x] === 0 && Math.random() < 0.3) {
          const deep = y > 30;
          enemies.push({
            x: x * TILE + TILE / 2, y: y * TILE,
            vx: (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random()),
            hp: deep ? 40 : 20, maxHp: deep ? 40 : 20,
            atk: deep ? 12 : 6,
            icon: deep ? "👹" : "🧟",
            name: deep ? "Demon" : "Zombie",
          });
        }
      }
    }
    // Boss at bottom
    enemies.push({
      x: (COLS / 2) * TILE, y: (tiles.length - 5) * TILE,
      vx: 1, hp: 200, maxHp: 200, atk: 25,
      icon: "🐉", name: "Eye of Cthulhu",
    });
    return enemies;
  }, []);

  const startGame = useCallback(() => {
    setPhase("playing");
    setHp(100); setScore(0); setDepth(0);
    setInventory({}); setTool("pick"); setBossDefeated(false);
    const g = gameRef.current;
    g.tiles = generateWorld();
    g.enemies = spawnEnemies(g.tiles);
    g.px = (COLS / 2) * TILE; g.py = 2 * TILE;
    g.pvx = 0; g.pvy = 0; g.camY = 0;
    g.iFrames = 0; g.mineTimer = 0; g.facing = 1;
    g.particles = [];
    g.running = true;
    mascot.setMood("happy");
  }, [mascot, generateWorld, spawnEnemies]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const g = gameRef.current;
      if (e.type === "keydown") g.keys.add(e.key.toLowerCase());
      else g.keys.delete(e.key.toLowerCase());
    };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("keyup", handleKey);
    return () => { window.removeEventListener("keydown", handleKey); window.removeEventListener("keyup", handleKey); };
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const g = gameRef.current;
    let animId: number;

    const loop = () => {
      if (!g.running) return;

      // Movement
      if (g.keys.has("a") || g.keys.has("arrowleft")) { g.pvx = -2.5; g.facing = -1; }
      else if (g.keys.has("d") || g.keys.has("arrowright")) { g.pvx = 2.5; g.facing = 1; }
      else { g.pvx *= 0.7; }

      if ((g.keys.has("w") || g.keys.has("arrowup") || g.keys.has(" ")) && g.grounded) {
        g.pvy = -6; g.grounded = false;
      }

      // Mining (hold down/S while next to block)
      if (g.keys.has("s") || g.keys.has("arrowdown") || g.keys.has("j")) {
        g.mineTimer++;
        if (g.mineTimer > 10) {
          g.mineTimer = 0;
          // Mine block in facing direction or below
          let mx = Math.floor(g.px / TILE) + g.facing;
          let my = Math.floor((g.py + 8) / TILE);
          if (g.keys.has("s") || g.keys.has("arrowdown")) {
            mx = Math.floor(g.px / TILE);
            my = Math.floor((g.py + 8) / TILE) + 1;
          }
          if (mx >= 0 && mx < COLS && my >= 0 && my < g.tiles.length) {
            const tile = g.tiles[my]![mx]!;
            if (tile !== 0) {
              const name = ORE_NAMES[tile] ?? "Block";
              setInventory((inv) => ({ ...inv, [name]: (inv[name] ?? 0) + 1 }));
              setScore((s) => s + (tile >= 5 ? 10 : tile >= 3 ? 5 : 1));
              g.tiles[my]![mx] = 0;
              g.particles.push(...Array.from({ length: 4 }, () => ({
                x: mx * TILE + 8, y: my * TILE + 8,
                vx: (Math.random() - 0.5) * 3, vy: -Math.random() * 2,
                life: 15, color: TILE_COLORS[tile] ?? "#fff",
              })));
              hapticSelection();
            }
          }
        }
      } else {
        g.mineTimer = 0;
      }

      // Place blocks
      if ((g.keys.has("k") || g.keys.has("e")) && tool === "place") {
        const px = Math.floor(g.px / TILE) + g.facing;
        const py = Math.floor((g.py) / TILE);
        if (px >= 0 && px < COLS && py >= 0 && py < g.tiles.length && g.tiles[py]![px] === 0) {
          const name = ORE_NAMES[g.placeBlock] ?? "Dirt";
          const inv = inventory[name] ?? 0;
          if (inv > 0) {
            g.tiles[py]![px] = g.placeBlock;
            setInventory((i) => ({ ...i, [name]: (i[name] ?? 0) - 1 }));
          }
        }
      }

      // Gravity & collision
      g.pvy += 0.35;
      g.px += g.pvx; g.py += g.pvy;
      g.grounded = false;

      // Tile collision
      const checkTile = (tx: number, ty: number) => {
        if (tx < 0 || tx >= COLS || ty < 0 || ty >= g.tiles.length) return true;
        return (g.tiles[ty]?.[tx] ?? 0) !== 0;
      };

      // Floor
      const footTX = Math.floor(g.px / TILE);
      const footTY = Math.floor((g.py + 10) / TILE);
      if (checkTile(footTX, footTY) && g.pvy >= 0) {
        g.py = (footTY) * TILE - 10;
        g.pvy = 0;
        g.grounded = true;
      }
      // Ceiling
      const headTY = Math.floor((g.py - 10) / TILE);
      if (checkTile(footTX, headTY) && g.pvy < 0) {
        g.pvy = 0;
      }
      // Walls
      const sideTX = Math.floor((g.px + g.facing * 8) / TILE);
      const sideTY = Math.floor((g.py) / TILE);
      if (checkTile(sideTX, sideTY)) {
        g.px -= g.pvx;
        g.pvx = 0;
      }

      g.px = Math.max(8, Math.min(COLS * TILE - 8, g.px));
      setDepth(Math.max(0, Math.floor(g.py / TILE) - 3));

      // Camera
      const targetCam = g.py - H / 2;
      g.camY += (targetCam - g.camY) * 0.1;
      g.camY = Math.max(0, Math.min(g.tiles.length * TILE - H, g.camY));

      // iFrames
      if (g.iFrames > 0) g.iFrames--;

      // Enemies
      for (let i = g.enemies.length - 1; i >= 0; i--) {
        const e = g.enemies[i]!;
        // Only process if on screen
        if (Math.abs(e.y - g.py) > H) continue;

        e.x += e.vx;
        const eTX = Math.floor(e.x / TILE);
        const eTY = Math.floor((e.y + 8) / TILE);
        // Simple gravity/collision for enemies
        if (eTY < g.tiles.length && !checkTile(eTX, eTY + 1)) {
          e.y += 2;
        }
        if (eTX <= 0 || eTX >= COLS - 1 || checkTile(eTX + (e.vx > 0 ? 1 : -1), eTY)) {
          e.vx *= -1;
        }

        // Attack check (player sword)
        if ((g.keys.has("j") || g.keys.has("z")) && tool === "sword") {
          const atkX = g.px + g.facing * 20;
          const dx = e.x - atkX, dy = e.y - g.py;
          if (dx * dx + dy * dy < 900) {
            const dmg = 10 + Math.floor(score / 100);
            e.hp -= dmg;
            g.particles.push(...Array.from({ length: 5 }, () => ({
              x: e.x, y: e.y, vx: (Math.random() - 0.5) * 4, vy: -Math.random() * 3,
              life: 15, color: "#ff4444",
            })));
            if (e.hp <= 0) {
              g.enemies.splice(i, 1);
              setScore((s) => s + (e.name === "Eye of Cthulhu" ? 200 : 20));
              if (e.name === "Eye of Cthulhu") {
                setBossDefeated(true);
                g.running = false;
                setPhase("complete");
                mascot.setMood("cheering");
                const finalScore = Math.min(500, score + 200);
                emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-120",
          difficulty: "medium", score: finalScore, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
              }
              hapticSuccess();
              continue;
            }
          }
        }

        // Enemy damages player
        if (g.iFrames <= 0) {
          const dx = e.x - g.px, dy = e.y - g.py;
          if (dx * dx + dy * dy < 500) {
            setHp((h) => {
              const nh = h - e.atk;
              if (nh <= 0) {
                g.running = false;
                setPhase("complete");
                mascot.setMood("thinking");
                emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-120",
          difficulty: "medium", score, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
                return 0;
              }
              return nh;
            });
            g.iFrames = 30;
            hapticError();
          }
        }
      }

      // Particles
      g.particles = g.particles.filter((p) => { p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life--; return p.life > 0; });

      // === DRAW ===
      // Sky gradient
      const skyGrad = ctx.createLinearGradient(0, -g.camY, 0, 80 - g.camY);
      skyGrad.addColorStop(0, "#87CEEB");
      skyGrad.addColorStop(1, "#4169E1");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, W, H);

      // Underground bg
      ctx.fillStyle = "#1a0e00";
      ctx.fillRect(0, Math.max(0, 3 * TILE - g.camY), W, H);

      ctx.save();
      ctx.translate(0, -g.camY);

      // Tiles
      const startRow = Math.max(0, Math.floor(g.camY / TILE));
      const endRow = Math.min(g.tiles.length, startRow + Math.ceil(H / TILE) + 2);
      for (let y = startRow; y < endRow; y++) {
        for (let x = 0; x < COLS; x++) {
          const tile = g.tiles[y]?.[x] ?? 0;
          if (tile === 0) continue;
          ctx.fillStyle = TILE_COLORS[tile] ?? "#888";
          ctx.fillRect(x * TILE, y * TILE, TILE, TILE);
          // Border
          ctx.strokeStyle = "rgba(0,0,0,0.2)";
          ctx.lineWidth = 0.5;
          ctx.strokeRect(x * TILE, y * TILE, TILE, TILE);
        }
      }

      // Player
      const blink = g.iFrames > 0 && Math.floor(g.iFrames / 3) % 2;
      if (!blink) {
        ctx.fillStyle = "#4488ff";
        ctx.fillRect(g.px - 6, g.py - 12, 12, 20);
        // Head
        ctx.fillStyle = "#ffcc88";
        ctx.fillRect(g.px - 4, g.py - 16, 8, 8);
        // Eyes
        ctx.fillStyle = "#000";
        ctx.fillRect(g.px + g.facing * 1.5, g.py - 14, 2, 2);
        // Tool
        if (tool === "pick") {
          ctx.fillStyle = "#888";
          ctx.fillRect(g.px + g.facing * 8, g.py - 8, 4, 10);
        } else if (tool === "sword") {
          ctx.fillStyle = "#aaa";
          ctx.fillRect(g.px + g.facing * 8, g.py - 14, 3, 16);
        }
      }

      // Enemies
      ctx.font = "16px sans-serif";
      ctx.textAlign = "center";
      for (const e of g.enemies) {
        if (Math.abs(e.y - g.py) > H) continue;
        ctx.fillText(e.icon, e.x, e.y);
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(e.x - 10, e.y - 18, 20, 3);
        ctx.fillStyle = "#00ff00";
        ctx.fillRect(e.x - 10, e.y - 18, 20 * (e.hp / e.maxHp), 3);
      }

      // Particles
      for (const p of g.particles) {
        ctx.globalAlpha = p.life / 15;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
      }
      ctx.globalAlpha = 1;

      ctx.restore();

      // HUD
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.fillRect(0, 0, W, 22);
      ctx.font = "11px monospace";
      ctx.textAlign = "left";
      ctx.fillStyle = "#ff4444";
      ctx.fillText(`❤️ ${hp}`, 5, 16);
      ctx.fillStyle = "#ffaa00";
      ctx.fillText(`Score: ${score}`, 70, 16);
      ctx.fillStyle = "#88aaff";
      ctx.fillText(`Depth: ${depth}m`, 170, 16);
      ctx.fillStyle = "#fff";
      ctx.textAlign = "right";
      ctx.fillText(tool === "pick" ? "⛏️ Pick" : tool === "sword" ? "🗡️ Sword" : "🧱 Place", W - 5, 16);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [phase, hp, score, depth, tool, inventory, mascot]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-900 via-amber-950 to-slate-950 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-amber-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Pickaxe className="mr-2 inline h-8 w-8" /> Terra Dig World
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              2D dig-build-fight sandbox. Mine blocks, find ores, fight monsters, defeat the boss at the bottom. AD move, W jump, S/J mine, switch tools below.
            </p>
            <PhysicalButton onClick={startGame}><Pickaxe className="mr-2 h-5 w-5" /> Dig In!</PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" className="flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <canvas ref={canvasRef} width={W} height={H} className="rounded-xl border border-amber-900/50" />
            <div className="flex gap-2">
              <button onClick={() => setTool("pick")} className={`rounded px-3 py-1 text-sm ${tool === "pick" ? "bg-amber-700 text-white" : "bg-white/10 text-white/50"}`}>
                ⛏️ Pick
              </button>
              <button onClick={() => setTool("sword")} className={`rounded px-3 py-1 text-sm ${tool === "sword" ? "bg-red-700 text-white" : "bg-white/10 text-white/50"}`}>
                🗡️ Sword
              </button>
              <button onClick={() => setTool("place")} className={`rounded px-3 py-1 text-sm ${tool === "place" ? "bg-green-700 text-white" : "bg-white/10 text-white/50"}`}>
                🧱 Place
              </button>
            </div>
            <div className="flex flex-wrap gap-1 text-[10px] text-white/40">
              {Object.entries(inventory).filter(([, v]) => v > 0).map(([k, v]) => (
                <span key={k} className="rounded bg-black/20 px-1.5 py-0.5">{k}: {v}</span>
              ))}
            </div>
            <p className="text-xs text-white/30">AD move • W jump • S/↓/J mine • K/E place • Switch tools above</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{bossDefeated ? "🏆" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-amber-400">
                {bossDefeated ? "Eye of Cthulhu Defeated!" : "Claimed by the Depths"}
              </h2>
              <p className="mt-2 text-white/60">Depth: {depth}m | Score: {score}</p>
              <p className="text-sm text-white/40">
                Blocks mined: {Object.values(inventory).reduce((a, b) => a + b, 0)}
              </p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> New World
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
