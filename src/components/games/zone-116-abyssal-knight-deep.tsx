"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, Swords, Heart, RotateCcw, MapPin, Shield } from "lucide-react";
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

type Phase = "ready" | "playing" | "map" | "complete";

interface Area {
  name: string; icon: string; color: string;
  enemies: { name: string; icon: string; hp: number; atk: number; speed: number }[];
  boss: { name: string; icon: string; hp: number; atk: number; pattern: string } | null;
  platformColor: string;
}

const AREAS: Area[] = [
  {
    name: "Forgotten Crossroads", icon: "🕸️", color: "#2a4a6b",
    enemies: [
      { name: "Crawlid", icon: "🪲", hp: 8, atk: 4, speed: 0.8 },
      { name: "Vengefly", icon: "🦟", hp: 6, atk: 5, speed: 1.5 },
    ],
    boss: { name: "False Knight", icon: "🛡️", hp: 80, atk: 10, pattern: "slam" },
    platformColor: "#4a6b8a",
  },
  {
    name: "Greenpath", icon: "🌿", color: "#1a4a2a",
    enemies: [
      { name: "Moss Knight", icon: "🌱", hp: 15, atk: 7, speed: 1.0 },
      { name: "Squit", icon: "🦗", hp: 5, atk: 4, speed: 2.0 },
    ],
    boss: { name: "Hornet", icon: "🕷️", hp: 100, atk: 12, pattern: "dash" },
    platformColor: "#3a7a5a",
  },
  {
    name: "City of Tears", icon: "🏙️", color: "#2a3a5b",
    enemies: [
      { name: "Husk Guard", icon: "💂", hp: 20, atk: 9, speed: 0.7 },
      { name: "Soul Twister", icon: "🌀", hp: 12, atk: 11, speed: 1.2 },
    ],
    boss: { name: "Soul Master", icon: "🔮", hp: 120, atk: 14, pattern: "teleport" },
    platformColor: "#5a6a8a",
  },
  {
    name: "Deepnest", icon: "🕳️", color: "#1a1a2a",
    enemies: [
      { name: "Deepling", icon: "🕷️", hp: 18, atk: 10, speed: 1.3 },
      { name: "Nosk Spider", icon: "🦂", hp: 25, atk: 12, speed: 0.9 },
    ],
    boss: { name: "Nosk", icon: "👁️", hp: 140, atk: 16, pattern: "mimic" },
    platformColor: "#3a3a4a",
  },
  {
    name: "The Abyss", icon: "⬛", color: "#0a0a1a",
    enemies: [
      { name: "Shade", icon: "👤", hp: 30, atk: 14, speed: 1.5 },
    ],
    boss: { name: "Hollow Knight", icon: "🗡️", hp: 200, atk: 20, pattern: "void" },
    platformColor: "#2a2a3a",
  },
];

export default function Zone116AbyssalKnightDeep() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [areaIdx, setAreaIdx] = useState(0);
  const [hp, setHp] = useState(5); // masks
  const [maxHp, setMaxHp] = useState(5);
  const [soul, setSoul] = useState(0); // 0-100, used for healing
  const [geo, setGeo] = useState(0);
  const [kills, setKills] = useState(0);
  const [bossHp, setBossHp] = useState(0);
  const [bossMaxHp, setBossMaxHp] = useState(0);
  const [inBoss, setInBoss] = useState(false);
  const [score, setScore] = useState(0);
  const [abilities, setAbilities] = useState<string[]>([]);
  const gameRef = useRef<{
    px: number; py: number; vx: number; vy: number; grounded: boolean;
    facing: number; attacking: boolean; attackTimer: number; iFrames: number;
    enemies: { x: number; y: number; hp: number; maxHp: number; atk: number; speed: number; icon: string; dir: number }[];
    boss: { x: number; y: number; hp: number; maxHp: number; atk: number; dir: number; phase: number; timer: number } | null;
    platforms: { x: number; y: number; w: number; h: number }[];
    particles: { x: number; y: number; vx: number; vy: number; life: number; color: string }[];
    keys: Set<string>;
    running: boolean;
  }>({
    px: 60, py: H - 60, vx: 0, vy: 0, grounded: false,
    facing: 1, attacking: false, attackTimer: 0, iFrames: 0,
    enemies: [], boss: null,
    platforms: [],
    particles: [],
    keys: new Set(),
    running: false,
  });

  const spawnArea = useCallback((idx: number, isBoss: boolean) => {
    const g = gameRef.current;
    const area = AREAS[idx]!;
    g.platforms = [
      { x: 0, y: H - 20, w: W, h: 20 }, // ground
      { x: 80, y: H - 80, w: 100, h: 10 },
      { x: 250, y: H - 120, w: 120, h: 10 },
      { x: 50, y: H - 160, w: 90, h: 10 },
      { x: 320, y: H - 60, w: 80, h: 10 },
      { x: 180, y: H - 200, w: 100, h: 10 },
    ];
    g.px = 60; g.py = H - 60; g.vx = 0; g.vy = 0;
    g.particles = [];

    if (isBoss && area.boss) {
      g.enemies = [];
      g.boss = { x: W - 80, y: H - 70, hp: area.boss.hp, maxHp: area.boss.hp, atk: area.boss.atk, dir: -1, phase: 0, timer: 0 };
      setBossHp(area.boss.hp);
      setBossMaxHp(area.boss.hp);
      setInBoss(true);
    } else {
      g.boss = null;
      setInBoss(false);
      g.enemies = [];
      for (let i = 0; i < 4 + idx; i++) {
        const tmpl = area.enemies[Math.floor(Math.random() * area.enemies.length)]!;
        g.enemies.push({
          x: 100 + Math.random() * (W - 200), y: H - 50,
          hp: tmpl.hp, maxHp: tmpl.hp, atk: tmpl.atk, speed: tmpl.speed,
          icon: tmpl.icon, dir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    }
  }, []);

  const startGame = useCallback(() => {
    setPhase("playing");
    setHp(5); setMaxHp(5); setSoul(0); setGeo(0); setKills(0); setScore(0);
    setAreaIdx(0); setAbilities([]);
    const g = gameRef.current;
    g.iFrames = 0; g.attackTimer = 0; g.attacking = false;
    spawnArea(0, false);
    g.running = true;
    mascot.setMood("happy");
  }, [mascot, spawnArea]);

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
      const area = AREAS[areaIdx]!;

      // Input
      if (g.keys.has("a") || g.keys.has("arrowleft")) { g.vx = -3; g.facing = -1; }
      else if (g.keys.has("d") || g.keys.has("arrowright")) { g.vx = 3; g.facing = 1; }
      else { g.vx *= 0.7; }
      if ((g.keys.has("w") || g.keys.has("arrowup") || g.keys.has(" ")) && g.grounded) {
        g.vy = -8; g.grounded = false;
      }
      if (g.keys.has("j") || g.keys.has("z")) {
        if (g.attackTimer <= 0) { g.attacking = true; g.attackTimer = 15; hapticSelection(); }
      }
      if ((g.keys.has("k") || g.keys.has("x")) && soul >= 33) {
        setSoul((s) => s - 33);
        setHp((h) => Math.min(maxHp, h + 1));
        g.particles.push(...Array.from({ length: 8 }, () => ({
          x: g.px, y: g.py, vx: (Math.random() - 0.5) * 3, vy: -Math.random() * 3,
          life: 20, color: "#88ffff",
        })));
      }

      // Physics
      g.vy += 0.4; // gravity
      g.px += g.vx; g.py += g.vy;
      g.grounded = false;
      for (const p of g.platforms) {
        if (g.px > p.x && g.px < p.x + p.w && g.py >= p.y - 15 && g.py <= p.y + 5 && g.vy >= 0) {
          g.py = p.y - 15; g.vy = 0; g.grounded = true;
        }
      }
      g.px = Math.max(10, Math.min(W - 10, g.px));
      if (g.py > H) { g.py = H - 60; g.px = 60; }

      // Attack hitbox
      if (g.attackTimer > 0) g.attackTimer--;
      const atkX = g.px + g.facing * 25;
      const atkY = g.py;
      const atkR = 25;

      // iFrames
      if (g.iFrames > 0) g.iFrames--;

      // Enemy AI + combat
      for (let i = g.enemies.length - 1; i >= 0; i--) {
        const e = g.enemies[i]!;
        // Move
        if (Math.abs(e.x - g.px) < 200) {
          e.dir = e.x < g.px ? 1 : -1;
        }
        e.x += e.speed * e.dir;
        if (e.x < 10 || e.x > W - 10) e.dir *= -1;

        // Attack check
        if (g.attacking && g.attackTimer > 10) {
          const dx = e.x - atkX, dy = e.y - atkY;
          if (dx * dx + dy * dy < atkR * atkR) {
            e.hp -= 3 + Math.floor(abilities.length * 0.5);
            setSoul((s) => Math.min(100, s + 8));
            g.particles.push(...Array.from({ length: 4 }, () => ({
              x: e.x, y: e.y, vx: (Math.random() - 0.5) * 4, vy: -Math.random() * 3,
              life: 15, color: "#ffffff",
            })));
            if (e.hp <= 0) {
              g.enemies.splice(i, 1);
              setKills((k) => k + 1);
              setGeo((g2) => g2 + 5);
              setScore((s) => s + 15);
              hapticSuccess();
            }
          }
        }

        // Damage player
        if (g.iFrames <= 0) {
          const dx = e.x - g.px, dy = e.y - g.py;
          if (dx * dx + dy * dy < 400) {
            setHp((h) => {
              const nh = h - 1;
              if (nh <= 0) {
                g.running = false;
                setPhase("complete");
                mascot.setMood("thinking");
                emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-116",
          difficulty: "medium", score, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
              }
              return Math.max(0, nh);
            });
            g.iFrames = 40;
            hapticError();
          }
        }
      }

      // Boss AI
      if (g.boss && g.boss.hp > 0) {
        const b = g.boss;
        b.timer++;
        b.dir = b.x < g.px ? 1 : -1;
        // Movement pattern
        if (b.timer % 60 < 30) {
          b.x += 2 * b.dir;
        } else if (b.timer % 120 < 60) {
          b.x += 4 * b.dir;
        }
        b.x = Math.max(30, Math.min(W - 30, b.x));

        // Attack check (player attacking boss)
        if (g.attacking && g.attackTimer > 10) {
          const dx = b.x - atkX, dy = b.y - atkY;
          if (dx * dx + dy * dy < 900) {
            const dmg = 3 + Math.floor(abilities.length * 0.5);
            b.hp -= dmg;
            setSoul((s) => Math.min(100, s + 5));
            setBossHp(b.hp);
            g.particles.push(...Array.from({ length: 6 }, () => ({
              x: b.x, y: b.y, vx: (Math.random() - 0.5) * 5, vy: -Math.random() * 4,
              life: 20, color: "#ffaa00",
            })));
            if (b.hp <= 0) {
              setScore((s) => s + 80);
              setGeo((ge) => ge + 50);
              hapticSuccess();
              // Next area
              if (areaIdx + 1 >= AREAS.length) {
                g.running = false;
                setPhase("complete");
                const finalScore = Math.min(500, score + 80);
                mascot.setMood("cheering");
                emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-116",
          difficulty: "medium", score: finalScore, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
              } else {
                const reward = ["Dash Slash", "Mantis Claw", "Crystal Dash", "Shade Soul", "Abyss Shriek"][areaIdx];
                if (reward) setAbilities((a) => [...a, reward]);
                setAreaIdx(areaIdx + 1);
                setInBoss(false);
                spawnArea(areaIdx + 1, false);
              }
            }
          }
        }

        // Boss damages player
        if (g.iFrames <= 0) {
          const dx = b.x - g.px, dy = b.y - g.py;
          if (dx * dx + dy * dy < 600) {
            setHp((h) => {
              const nh = h - 2;
              if (nh <= 0) {
                g.running = false;
                setPhase("complete");
                mascot.setMood("thinking");
                emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-116",
          difficulty: "medium", score, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
              }
              return Math.max(0, nh);
            });
            g.iFrames = 50;
            hapticError();
          }
        }
      }

      // Check if all enemies cleared -> boss or next
      if (!inBoss && g.enemies.length === 0 && !g.boss) {
        spawnArea(areaIdx, true);
      }

      // Particles
      g.particles = g.particles.filter((p) => { p.x += p.vx; p.y += p.vy; p.vy += 0.1; p.life--; return p.life > 0; });

      // Draw
      ctx.fillStyle = area.color;
      ctx.fillRect(0, 0, W, H);

      // Platforms
      ctx.fillStyle = area.platformColor;
      for (const p of g.platforms) ctx.fillRect(p.x, p.y, p.w, p.h);

      // Particles
      for (const p of g.particles) {
        ctx.globalAlpha = p.life / 20;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
      }
      ctx.globalAlpha = 1;

      // Player
      const blink = g.iFrames > 0 && Math.floor(g.iFrames / 4) % 2;
      if (!blink) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(g.px, g.py - 5, 10, 0, Math.PI * 2);
        ctx.fill();
        // Horns
        ctx.beginPath();
        ctx.moveTo(g.px - 6, g.py - 14);
        ctx.lineTo(g.px - 3, g.py - 22);
        ctx.lineTo(g.px, g.py - 14);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(g.px + 6, g.py - 14);
        ctx.lineTo(g.px + 3, g.py - 22);
        ctx.lineTo(g.px, g.py - 14);
        ctx.fill();
        // Eyes
        ctx.fillStyle = "#000000";
        ctx.fillRect(g.px - 5, g.py - 8, 3, 4);
        ctx.fillRect(g.px + 2, g.py - 8, 3, 4);
      }

      // Attack slash
      if (g.attackTimer > 10) {
        ctx.strokeStyle = "#88ccff";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(atkX, atkY, atkR, -0.5, 0.5);
        ctx.stroke();
      }

      // Enemies
      ctx.font = "20px sans-serif";
      ctx.textAlign = "center";
      for (const e of g.enemies) {
        ctx.fillText(e.icon, e.x, e.y);
        // HP bar
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(e.x - 12, e.y - 25, 24, 3);
        ctx.fillStyle = "#00ff00";
        ctx.fillRect(e.x - 12, e.y - 25, 24 * (e.hp / e.maxHp), 3);
      }

      // Boss
      if (g.boss && g.boss.hp > 0) {
        ctx.font = "32px sans-serif";
        ctx.fillText(area.boss!.icon, g.boss.x, g.boss.y);
      }

      // HUD
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, W, 28);
      ctx.font = "12px monospace";
      ctx.textAlign = "left";
      ctx.fillStyle = "#ffffff";
      const masks = "🤍".repeat(hp) + "🖤".repeat(maxHp - hp);
      ctx.fillText(masks, 5, 18);
      ctx.fillStyle = "#88ccff";
      ctx.fillText(`Soul: ${soul}`, 140, 18);
      ctx.fillStyle = "#ffcc00";
      ctx.fillText(`Geo: ${geo}`, 220, 18);
      ctx.fillStyle = "#aaaaaa";
      ctx.textAlign = "right";
      ctx.fillText(area.name, W - 5, 18);

      // Boss HP bar
      if (g.boss && g.boss.hp > 0) {
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(W / 2 - 100, H - 15, 200, 10);
        ctx.fillStyle = "#ff6600";
        ctx.fillRect(W / 2 - 100, H - 15, 200 * (g.boss.hp / g.boss.maxHp), 10);
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.font = "9px monospace";
        ctx.fillText(area.boss!.name, W / 2, H - 7);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(animId); };
  }, [phase, areaIdx, hp, maxHp, soul, inBoss, abilities, score, spawnArea, mascot]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-950 via-slate-950 to-black p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-cyan-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Bug className="mr-2 inline h-8 w-8" /> Abyssal Knight Deep
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Metroidvania action platformer. Explore 5 underground realms, fight bugs, defeat bosses, and collect abilities. WASD/Arrows to move, J/Z attack, K/X to heal (costs 33 soul).
            </p>
            <PhysicalButton onClick={startGame}><Swords className="mr-2 h-5 w-5" /> Descend into the Abyss</PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" className="flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <canvas ref={canvasRef} width={W} height={H} className="rounded-xl border border-cyan-900/50" />
            {abilities.length > 0 && (
              <div className="flex gap-2 text-xs text-cyan-400/70">
                {abilities.map((a, i) => <span key={i} className="rounded bg-cyan-900/30 px-2 py-0.5">{a}</span>)}
              </div>
            )}
            <p className="text-xs text-white/30">WASD move • J attack • K heal</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{hp > 0 ? "🦋" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-cyan-400">
                {hp > 0 ? "The Hollow Knight Falls" : "Shade Left Behind"}
              </h2>
              <p className="mt-2 text-white/60">Areas cleared: {areaIdx + (hp > 0 ? 1 : 0)}/{AREAS.length}</p>
              <p className="text-white/60">Kills: {kills} | Geo: {geo} | Score: {score}</p>
              {abilities.length > 0 && <p className="mt-1 text-sm text-cyan-400/50">Abilities: {abilities.join(", ")}</p>}
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> Retry
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
