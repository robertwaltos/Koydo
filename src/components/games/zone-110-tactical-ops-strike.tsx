"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, RotateCcw, Target } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const CW = 500;
const CH = 400;
const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "playing" | "complete";
type EnemyT = { x: number; y: number; hp: number; dir: number; speed: number; shooting: boolean; shootTimer: number };
type Bullet = { x: number; y: number; dx: number; dy: number; friendly: boolean };

export default function Zone110TacticalOpsStrike() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [kills, setKills] = useState(0);
  const [hp, setHp] = useState(100);
  const [wave, setWave] = useState(1);
  const [ammo, setAmmo] = useState(30);
  const [reloading, setReloading] = useState(false);

  const playerRef = useRef({ x: CW / 2, y: CH - 40 });
  const keysRef = useRef(new Set<string>());
  const bulletsRef = useRef<Bullet[]>([]);
  const enemiesRef = useRef<EnemyT[]>([]);
  const animRef = useRef(0);
  const phaseRef = useRef<Phase>("ready");
  const killsRef = useRef(0);
  const hpRef = useRef(100);
  const waveRef = useRef(1);
  const ammoRef = useRef(30);
  const reloadRef = useRef(false);
  const shootCooldownRef = useRef(0);
  const waveKillsRef = useRef(0);

  const spawnWave = useCallback((w: number) => {
    const count = 3 + w * 2;
    enemiesRef.current = Array.from({ length: count }, () => ({
      x: 30 + Math.random() * (CW - 60),
      y: 20 + Math.random() * (CH * 0.4),
      hp: 1 + Math.floor(w / 2),
      dir: Math.random() > 0.5 ? 1 : -1,
      speed: 0.5 + w * 0.15 + Math.random() * 0.5,
      shooting: false,
      shootTimer: 60 + Math.floor(Math.random() * 120),
    }));
    waveKillsRef.current = 0;
  }, []);

  const startGame = useCallback(() => {
    playerRef.current = { x: CW / 2, y: CH - 40 };
    bulletsRef.current = [];
    killsRef.current = 0;
    hpRef.current = 100;
    waveRef.current = 1;
    ammoRef.current = 30;
    reloadRef.current = false;
    shootCooldownRef.current = 0;
    setKills(0);
    setHp(100);
    setWave(1);
    setAmmo(30);
    setReloading(false);
    spawnWave(1);
    phaseRef.current = "playing";
    setPhase("playing");
    mascot.setMood("happy");
  }, [mascot, spawnWave]);

  // Input
  useEffect(() => {
    const kd = (e: KeyboardEvent) => {
      keysRef.current.add(e.key.toLowerCase());
      if (e.key.toLowerCase() === "r" && !reloadRef.current) {
        reloadRef.current = true;
        setReloading(true);
        setTimeout(() => {
          ammoRef.current = 30;
          reloadRef.current = false;
          setAmmo(30);
          setReloading(false);
        }, 1500);
      }
    };
    const ku = (e: KeyboardEvent) => keysRef.current.delete(e.key.toLowerCase());
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);
    return () => { window.removeEventListener("keydown", kd); window.removeEventListener("keyup", ku); };
  }, []);

  // Shoot on click
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onClick = (e: MouseEvent) => {
      if (phaseRef.current !== "playing" || reloadRef.current) return;
      if (ammoRef.current <= 0) { hapticError(); return; }
      const r = canvas.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;
      const p = playerRef.current;
      const dx = mx - p.x;
      const dy = my - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1) return;
      bulletsRef.current.push({
        x: p.x, y: p.y,
        dx: (dx / dist) * 6,
        dy: (dy / dist) * 6,
        friendly: true,
      });
      ammoRef.current--;
      setAmmo(ammoRef.current);
      hapticSelection();
    };
    canvas.addEventListener("click", onClick);
    return () => canvas.removeEventListener("click", onClick);
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

      const keys = keysRef.current;
      const p = playerRef.current;
      const spd = 3;
      if (keys.has("a") || keys.has("arrowleft")) p.x = Math.max(12, p.x - spd);
      if (keys.has("d") || keys.has("arrowright")) p.x = Math.min(CW - 12, p.x + spd);
      if (keys.has("w") || keys.has("arrowup")) p.y = Math.max(CH * 0.5, p.y - spd);
      if (keys.has("s") || keys.has("arrowdown")) p.y = Math.min(CH - 12, p.y + spd);

      if (shootCooldownRef.current > 0) shootCooldownRef.current--;

      // Move bullets
      bulletsRef.current = bulletsRef.current.filter((b) => {
        b.x += b.dx;
        b.y += b.dy;
        return b.x >= 0 && b.x <= CW && b.y >= 0 && b.y <= CH;
      });

      // Enemy AI
      for (const e of enemiesRef.current) {
        if (e.hp <= 0) continue;
        e.x += e.dir * e.speed;
        if (e.x <= 15 || e.x >= CW - 15) e.dir *= -1;

        e.shootTimer--;
        if (e.shootTimer <= 0) {
          const dx = p.x - e.x;
          const dy = p.y - e.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0) {
            bulletsRef.current.push({
              x: e.x, y: e.y,
              dx: (dx / dist) * 3,
              dy: (dy / dist) * 3,
              friendly: false,
            });
          }
          e.shootTimer = 80 + Math.floor(Math.random() * 60);
        }
      }

      // Collision: friendly bullets → enemies
      for (let i = bulletsRef.current.length - 1; i >= 0; i--) {
        const b = bulletsRef.current[i]!;
        if (!b.friendly) continue;
        for (const e of enemiesRef.current) {
          if (e.hp <= 0) continue;
          if (Math.abs(b.x - e.x) < 12 && Math.abs(b.y - e.y) < 12) {
            e.hp--;
            bulletsRef.current.splice(i, 1);
            if (e.hp <= 0) {
              killsRef.current++;
              waveKillsRef.current++;
              setKills(killsRef.current);
            }
            break;
          }
        }
      }

      // Collision: enemy bullets → player
      for (let i = bulletsRef.current.length - 1; i >= 0; i--) {
        const b = bulletsRef.current[i]!;
        if (b.friendly) continue;
        if (Math.abs(b.x - p.x) < 10 && Math.abs(b.y - p.y) < 10) {
          hpRef.current -= 10;
          setHp(hpRef.current);
          bulletsRef.current.splice(i, 1);
          if (hpRef.current <= 0) {
            phaseRef.current = "complete";
            setPhase("complete");
            mascot.setMood("thinking");
            emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-110",
          difficulty: "medium",
              score: killsRef.current * 10 + (waveRef.current - 1) * 50,
              maxScore: 500,
              interactions: 1,
              elapsedMs: 0,
          source: "component",
          occurredAt: new Date().toISOString(),
            });
            return;
          }
        }
      }

      // Wave progression
      if (enemiesRef.current.every((e) => e.hp <= 0)) {
        waveRef.current++;
        setWave(waveRef.current);
        if (waveRef.current > 5) {
          phaseRef.current = "complete";
          setPhase("complete");
          mascot.setMood("cheering");
          emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-110",
          difficulty: "medium",
            score: killsRef.current * 10 + 5 * 50,
            maxScore: 500,
            interactions: 1,
            elapsedMs: 0,
          source: "component",
          occurredAt: new Date().toISOString(),
          });
          return;
        }
        spawnWave(waveRef.current);
      }

      // ─── Draw ──────────────────────────────────
      // Background
      ctx.fillStyle = "#1a1a2e";
      ctx.fillRect(0, 0, CW, CH);

      // Grid lines for tactical feel
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      for (let x = 0; x < CW; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, CH); ctx.stroke(); }
      for (let y = 0; y < CH; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CW, y); ctx.stroke(); }

      // Cover walls
      ctx.fillStyle = "#333";
      ctx.fillRect(60, 120, 80, 12);
      ctx.fillRect(200, 180, 100, 12);
      ctx.fillRect(370, 100, 70, 12);
      ctx.fillRect(100, 260, 90, 12);
      ctx.fillRect(320, 240, 80, 12);

      // Enemies
      for (const e of enemiesRef.current) {
        if (e.hp <= 0) {
          ctx.fillStyle = "rgba(255,0,0,0.2)";
          ctx.fillText("✕", e.x - 4, e.y + 4);
          continue;
        }
        ctx.fillStyle = "#ff4444";
        ctx.beginPath();
        ctx.arc(e.x, e.y, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.font = "8px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("▼", e.x, e.y - 10);
      }

      // Player
      ctx.fillStyle = "#44ff44";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#aaffaa";
      ctx.font = "8px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("▲", p.x, p.y - 10);

      // Bullets
      for (const b of bulletsRef.current) {
        ctx.fillStyle = b.friendly ? "#ffff44" : "#ff6644";
        ctx.beginPath();
        ctx.arc(b.x, b.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Crosshair overlay at top
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, CW, 20);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "left";
      ctx.fillText(`WAVE ${waveRef.current}/5  KILLS ${killsRef.current}  HP ${hpRef.current}  AMMO ${ammoRef.current}${reloadRef.current ? " RELOADING..." : ""}`, 8, 14);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase, mascot, spawnWave]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-slate-900 to-black p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-green-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Crosshair className="mr-2 inline h-7 w-7" /> Tactical Ops Strike
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Top-down tactical shooter. Survive 5 waves. WASD to move, click to shoot, R to reload. Enemies shoot back!
            </p>
            <PhysicalButton onClick={startGame}><Target className="mr-2 h-5 w-5" /> Deploy</PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" className="flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <span>Wave {wave}/5</span>
              <span className="text-red-400">HP {hp}</span>
              <span className="text-yellow-400">Ammo {ammo}</span>
              <span className="text-green-400">Kills {kills}</span>
              {reloading && <span className="animate-pulse text-orange-400">RELOADING...</span>}
            </div>
            <canvas ref={canvasRef} width={CW} height={CH} className="cursor-crosshair rounded-xl border-2 border-green-900/40 shadow-2xl" />
            <p className="text-xs text-white/40">WASD move • Click shoot • R reload</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{hp > 0 ? "🎖️" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-green-400">
                {hp > 0 ? "Mission Complete" : "KIA"}
              </h2>
              <p className="mt-2 text-white/60">Kills: {kills} | Waves: {wave - (hp > 0 ? 0 : 1)}/5</p>
              <p className="text-lg font-bold text-green-300">Score: {kills * 10 + (wave - 1) * 50}</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> Redeploy
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
