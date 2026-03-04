"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, Shield, Zap, RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const CW = 500;
const CH = 500;
const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "playing" | "eliminated" | "victory";
type Vec2 = { x: number; y: number };
type Enemy = Vec2 & { hp: number; speed: number; shootCooldown: number };
type Bullet = Vec2 & { dx: number; dy: number; isPlayer: boolean };
type LootDrop = Vec2 & { kind: "heal" | "shield" | "ammo"; taken: boolean };

export default function Zone103StormRoyaleArena() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [hp, setHp] = useState(100);
  const [shieldHp, setShieldHp] = useState(0);
  const [kills, setKills] = useState(0);
  const [alive, setAlive] = useState(20);
  const [stormRadius, setStormRadius] = useState(250);

  const playerRef = useRef<Vec2>({ x: CW / 2, y: CH / 2 });
  const velRef = useRef<Vec2>({ x: 0, y: 0 });
  const keysRef = useRef(new Set<string>());
  const mouseRef = useRef<Vec2>({ x: CW / 2, y: 0 });
  const enemiesRef = useRef<Enemy[]>([]);
  const bulletsRef = useRef<Bullet[]>([]);
  const lootRef = useRef<LootDrop[]>([]);
  const stormRef = useRef(250);
  const stormCenter = useRef<Vec2>({ x: CW / 2, y: CH / 2 });
  const hpRef = useRef(100);
  const shieldRef = useRef(0);
  const killsRef = useRef(0);
  const aliveRef = useRef(20);
  const phaseRef = useRef<Phase>("ready");
  const animRef = useRef(0);
  const shootCoolRef = useRef(0);
  const frameRef = useRef(0);

  const startGame = useCallback(() => {
    playerRef.current = { x: 50 + Math.random() * 400, y: 50 + Math.random() * 400 };
    velRef.current = { x: 0, y: 0 };
    hpRef.current = 100;
    shieldRef.current = 0;
    killsRef.current = 0;
    aliveRef.current = 20;
    stormRef.current = 250;
    stormCenter.current = { x: CW / 2, y: CH / 2 };
    setHp(100);
    setShieldHp(0);
    setKills(0);
    setAlive(20);
    setStormRadius(250);

    // Spawn enemies
    enemiesRef.current = Array.from({ length: 19 }, () => ({
      x: 30 + Math.random() * (CW - 60),
      y: 30 + Math.random() * (CH - 60),
      hp: 60 + Math.random() * 40,
      speed: 0.8 + Math.random() * 0.6,
      shootCooldown: 60 + Math.floor(Math.random() * 60),
    }));

    // Spawn loot
    const kinds: LootDrop["kind"][] = ["heal", "shield", "ammo"];
    lootRef.current = Array.from({ length: 15 }, () => ({
      x: 30 + Math.random() * (CW - 60),
      y: 30 + Math.random() * (CH - 60),
      kind: kinds[Math.floor(Math.random() * kinds.length)]!,
      taken: false,
    }));

    bulletsRef.current = [];
    shootCoolRef.current = 0;
    frameRef.current = 0;
    phaseRef.current = "playing";
    setPhase("playing");
    mascot.setMood("happy");
  }, [mascot]);

  // Input
  useEffect(() => {
    const kd = (e: KeyboardEvent) => keysRef.current.add(e.key.toLowerCase());
    const ku = (e: KeyboardEvent) => keysRef.current.delete(e.key.toLowerCase());
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);
    return () => {
      window.removeEventListener("keydown", kd);
      window.removeEventListener("keyup", ku);
    };
  }, []);

  // Mouse tracking for aiming
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onClick = () => {
      if (phaseRef.current !== "playing" || shootCoolRef.current > 0) return;
      const p = playerRef.current;
      const m = mouseRef.current;
      const dx = m.x - p.x;
      const dy = m.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 0) {
        bulletsRef.current.push({
          x: p.x, y: p.y,
          dx: (dx / dist) * 6,
          dy: (dy / dist) * 6,
          isPlayer: true,
        });
        shootCoolRef.current = 12;
        hapticSelection();
      }
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("click", onClick);
    return () => {
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const loop = () => {
      animRef.current = requestAnimationFrame(loop);
      if (phaseRef.current !== "playing") return;
      frameRef.current++;

      const keys = keysRef.current;
      const speed = 2.5;
      velRef.current = { x: 0, y: 0 };
      if (keys.has("w") || keys.has("arrowup")) velRef.current.y = -speed;
      if (keys.has("s") || keys.has("arrowdown")) velRef.current.y = speed;
      if (keys.has("a") || keys.has("arrowleft")) velRef.current.x = -speed;
      if (keys.has("d") || keys.has("arrowright")) velRef.current.x = speed;

      playerRef.current.x = Math.max(8, Math.min(CW - 8, playerRef.current.x + velRef.current.x));
      playerRef.current.y = Math.max(8, Math.min(CH - 8, playerRef.current.y + velRef.current.y));

      // Storm shrinks
      if (frameRef.current % 90 === 0 && stormRef.current > 40) {
        stormRef.current -= 3;
        setStormRadius(stormRef.current);
      }

      // Storm damage
      const sc = stormCenter.current;
      const pDistToCenter = Math.sqrt(
        (playerRef.current.x - sc.x) ** 2 +
        (playerRef.current.y - sc.y) ** 2
      );
      if (pDistToCenter > stormRef.current) {
        if (shieldRef.current > 0) {
          shieldRef.current -= 0.3;
        } else {
          hpRef.current -= 0.3;
        }
        setHp(Math.round(hpRef.current));
        setShieldHp(Math.round(shieldRef.current));
      }

      if (shootCoolRef.current > 0) shootCoolRef.current--;

      // Loot pickup
      for (const loot of lootRef.current) {
        if (loot.taken) continue;
        const dx = playerRef.current.x - loot.x;
        const dy = playerRef.current.y - loot.y;
        if (Math.sqrt(dx * dx + dy * dy) < 16) {
          loot.taken = true;
          if (loot.kind === "heal") { hpRef.current = Math.min(100, hpRef.current + 25); setHp(Math.round(hpRef.current)); }
          if (loot.kind === "shield") { shieldRef.current = Math.min(100, shieldRef.current + 25); setShieldHp(Math.round(shieldRef.current)); }
          hapticSuccess();
        }
      }

      // Update bullets
      bulletsRef.current = bulletsRef.current.filter((b) => {
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < 0 || b.x > CW || b.y < 0 || b.y > CH) return false;

        if (b.isPlayer) {
          for (let i = enemiesRef.current.length - 1; i >= 0; i--) {
            const e = enemiesRef.current[i]!;
            if (Math.sqrt((b.x - e.x) ** 2 + (b.y - e.y) ** 2) < 12) {
              e.hp -= 30;
              if (e.hp <= 0) {
                enemiesRef.current.splice(i, 1);
                killsRef.current++;
                aliveRef.current--;
                setKills(killsRef.current);
                setAlive(aliveRef.current);
                hapticSuccess();
              }
              return false;
            }
          }
        } else {
          if (Math.sqrt((b.x - playerRef.current.x) ** 2 + (b.y - playerRef.current.y) ** 2) < 10) {
            if (shieldRef.current > 0) {
              shieldRef.current = Math.max(0, shieldRef.current - 15);
            } else {
              hpRef.current -= 15;
            }
            setHp(Math.round(hpRef.current));
            setShieldHp(Math.round(shieldRef.current));
            hapticError();
            return false;
          }
        }
        return true;
      });

      // Enemy AI
      for (const e of enemiesRef.current) {
        // Move toward storm center
        const toCenter = { x: sc.x - e.x, y: sc.y - e.y };
        const d = Math.sqrt(toCenter.x ** 2 + toCenter.y ** 2);
        if (d > stormRef.current * 0.6) {
          e.x += (toCenter.x / d) * e.speed;
          e.y += (toCenter.y / d) * e.speed;
        } else {
          // Wander
          e.x += (Math.random() - 0.5) * 2;
          e.y += (Math.random() - 0.5) * 2;
        }
        e.x = Math.max(5, Math.min(CW - 5, e.x));
        e.y = Math.max(5, Math.min(CH - 5, e.y));

        // Shoot at player
        e.shootCooldown--;
        if (e.shootCooldown <= 0) {
          e.shootCooldown = 80 + Math.floor(Math.random() * 40);
          const dx = playerRef.current.x - e.x;
          const dy = playerRef.current.y - e.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180 && dist > 0) {
            bulletsRef.current.push({
              x: e.x, y: e.y,
              dx: (dx / dist) * 4,
              dy: (dy / dist) * 4,
              isPlayer: false,
            });
          }
        }

        // Storm damage to enemies
        const eDist = Math.sqrt((e.x - sc.x) ** 2 + (e.y - sc.y) ** 2);
        if (eDist > stormRef.current) e.hp -= 0.5;
        if (e.hp <= 0) {
          aliveRef.current--;
          setAlive(aliveRef.current);
        }
      }
      enemiesRef.current = enemiesRef.current.filter((e) => e.hp > 0);

      // Win/lose checks
      if (hpRef.current <= 0) {
        phaseRef.current = "eliminated";
        setPhase("eliminated");
        hapticError();
        mascot.setMood("sad");
        return;
      }
      if (enemiesRef.current.length === 0) {
        phaseRef.current = "victory";
        setPhase("victory");
        mascot.setMood("cheering");
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-103",
          difficulty: "medium",
          score: killsRef.current * 100,
          maxScore: 1900,
          interactions: 1,
          elapsedMs: frameRef.current * 16,
          source: "component",
          occurredAt: new Date().toISOString(),
        });
        return;
      }

      // ─── Draw ─────────────────────────────────────────────────────
      ctx.fillStyle = "#1a2e1a";
      ctx.fillRect(0, 0, CW, CH);

      // Grid terrain
      for (let gx = 0; gx < CW; gx += 40) {
        for (let gy = 0; gy < CH; gy += 40) {
          ctx.fillStyle = (gx + gy) % 80 === 0 ? "#1e3a1e" : "#1a2e1a";
          ctx.fillRect(gx, gy, 40, 40);
        }
      }

      // Storm circle
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, CW, CH);
      ctx.arc(sc.x, sc.y, stormRef.current, 0, Math.PI * 2, true);
      ctx.fillStyle = "rgba(147, 51, 234, 0.4)";
      ctx.fill();
      ctx.restore();

      ctx.strokeStyle = "#c084fc";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(sc.x, sc.y, stormRef.current, 0, Math.PI * 2);
      ctx.stroke();

      // Loot
      for (const loot of lootRef.current) {
        if (loot.taken) continue;
        ctx.fillStyle = loot.kind === "heal" ? "#22c55e" : loot.kind === "shield" ? "#3b82f6" : "#eab308";
        ctx.fillRect(loot.x - 5, loot.y - 5, 10, 10);
      }

      // Enemies
      for (const e of enemiesRef.current) {
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(e.x, e.y, 8, 0, Math.PI * 2);
        ctx.fill();
        // HP bar
        ctx.fillStyle = "#22c55e";
        ctx.fillRect(e.x - 8, e.y - 14, (16 * e.hp) / 100, 3);
      }

      // Bullets
      for (const b of bulletsRef.current) {
        ctx.fillStyle = b.isPlayer ? "#facc15" : "#f87171";
        ctx.beginPath();
        ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Player
      const p = playerRef.current;
      ctx.fillStyle = "#3b82f6";
      ctx.shadowColor = "#3b82f6";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Aim line
      const m = mouseRef.current;
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(m.x, m.y);
      ctx.stroke();
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase, mascot]);

  const resetGame = () => {
    phaseRef.current = "ready";
    setPhase("ready");
    mascot.setMood("idle");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 p-4">
      <MascotFriend id="pixel" mood={phase === "victory" ? "cheering" : phase === "eliminated" ? "sad" : "idle"} />

      <motion.h1
        className="mb-3 text-3xl font-black tracking-tight text-purple-400 drop-shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Storm Royale Arena
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Drop in, loot up, and be the last one standing. WASD to move, click to shoot. Storm closes in!
            </p>
            <PhysicalButton onClick={startGame}>
              <Crosshair className="mr-2 h-5 w-5" />
              Drop In
            </PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "eliminated" || phase === "victory") && (
          <motion.div key="game" className="flex flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-4 rounded-xl bg-black/50 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
              <span className="text-red-400">❤️ {hp}</span>
              <span className="text-blue-400">🛡️ {shieldHp}</span>
              <span className="text-yellow-400">💀 {kills}</span>
              <span className="text-purple-400">👥 {alive} alive</span>
              <span className="text-violet-400">🌀 Storm: {stormRadius}px</span>
            </div>

            <canvas ref={canvasRef} width={CW} height={CH} className="cursor-crosshair rounded-xl border-2 border-purple-500/30 shadow-2xl" />

            {phase === "eliminated" && (
              <motion.div className="rounded-xl bg-red-900/80 p-6 text-center backdrop-blur-sm" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                <p className="text-4xl">💀</p>
                <h2 className="mt-2 text-2xl font-black text-red-300">Eliminated!</h2>
                <p className="text-white/70">Kills: {kills} | Placement: #{alive}</p>
                <PhysicalButton onClick={startGame}><RotateCcw className="mr-1 h-4 w-4" /> Drop Again</PhysicalButton>
              </motion.div>
            )}

            {phase === "victory" && (
              <motion.div className="rounded-xl bg-amber-900/80 p-6 text-center backdrop-blur-sm" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                <p className="text-4xl">👑</p>
                <h2 className="mt-2 text-2xl font-black text-amber-300">Victory Royale!</h2>
                <p className="text-white/70">{kills} Eliminations</p>
                <PhysicalButton onClick={resetGame}><RotateCcw className="mr-1 h-4 w-4" /> Play Again</PhysicalButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
