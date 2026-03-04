"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, RotateCcw, MapPin } from "lucide-react";
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

type Phase = "ready" | "drop" | "playing" | "complete";
type LootType = "med" | "armor" | "ammo" | "scope";

interface AIPlayer {
  x: number; y: number; hp: number; armor: number;
  speed: number; alive: boolean; aggro: boolean;
  weapon: number; shootCd: number;
}

interface Loot {
  x: number; y: number; type: LootType; icon: string; amount: number;
}

export default function Zone111DropZoneSurvivor() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [hp, setHp] = useState(100);
  const [armor, setArmor] = useState(0);
  const [kills, setKills] = useState(0);
  const [alive, setAlive] = useState(30);
  const [ammo, setAmmo] = useState(30);
  const [circleR, setCircleR] = useState(240);

  const playerRef = useRef({ x: CW / 2, y: CH / 2 });
  const keysRef = useRef(new Set<string>());
  const aisRef = useRef<AIPlayer[]>([]);
  const lootsRef = useRef<Loot[]>([]);
  const bulletsRef = useRef<{ x: number; y: number; dx: number; dy: number; friendly: boolean }[]>([]);
  const circleRef = useRef({ x: CW / 2, y: CH / 2, r: 240 });
  const animRef = useRef(0);
  const phaseRef = useRef<Phase>("ready");
  const frameRef = useRef(0);
  const hpRef = useRef(100);
  const armorRef = useRef(0);
  const ammoRef = useRef(30);
  const killsRef = useRef(0);
  const aliveRef = useRef(30);

  const LOOT_TEMPLATES: { type: LootType; icon: string; amount: number }[] = [
    { type: "med", icon: "💊", amount: 25 },
    { type: "armor", icon: "🦺", amount: 30 },
    { type: "ammo", icon: "📦", amount: 15 },
    { type: "scope", icon: "🔭", amount: 0 },
  ];

  const startGame = useCallback(() => {
    playerRef.current = { x: 80 + Math.random() * (CW - 160), y: 80 + Math.random() * (CH - 160) };
    frameRef.current = 0;
    hpRef.current = 100;
    armorRef.current = 0;
    ammoRef.current = 30;
    killsRef.current = 0;
    aliveRef.current = 30;
    circleRef.current = { x: CW / 2, y: CH / 2, r: 240 };
    setHp(100); setArmor(0); setAmmo(30); setKills(0); setAlive(30); setCircleR(240);

    // Spawn AI
    aisRef.current = Array.from({ length: 29 }, () => ({
      x: 30 + Math.random() * (CW - 60),
      y: 30 + Math.random() * (CH - 60),
      hp: 80 + Math.floor(Math.random() * 40),
      armor: Math.random() > 0.6 ? 30 : 0,
      speed: 0.8 + Math.random() * 0.6,
      alive: true,
      aggro: false,
      weapon: 8 + Math.floor(Math.random() * 8),
      shootCd: 60 + Math.floor(Math.random() * 60),
    }));

    // Spawn loot
    lootsRef.current = Array.from({ length: 20 }, () => {
      const tmpl = LOOT_TEMPLATES[Math.floor(Math.random() * LOOT_TEMPLATES.length)]!;
      return { x: 30 + Math.random() * (CW - 60), y: 30 + Math.random() * (CH - 60), ...tmpl };
    });

    bulletsRef.current = [];
    phaseRef.current = "playing";
    setPhase("playing");
    mascot.setMood("happy");
  }, [mascot]);

  useEffect(() => {
    const kd = (e: KeyboardEvent) => keysRef.current.add(e.key.toLowerCase());
    const ku = (e: KeyboardEvent) => keysRef.current.delete(e.key.toLowerCase());
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);
    return () => { window.removeEventListener("keydown", kd); window.removeEventListener("keyup", ku); };
  }, []);

  // Click to shoot
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onClick = (e: MouseEvent) => {
      if (phaseRef.current !== "playing" || ammoRef.current <= 0) return;
      const r = canvas.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;
      const p = playerRef.current;
      const dx = mx - p.x;
      const dy = my - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1) return;
      bulletsRef.current.push({ x: p.x, y: p.y, dx: (dx / dist) * 7, dy: (dy / dist) * 7, friendly: true });
      ammoRef.current--;
      setAmmo(ammoRef.current);
      hapticSelection();
    };
    canvas.addEventListener("click", onClick);
    return () => canvas.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const endGame = (won: boolean) => {
      phaseRef.current = "complete";
      setPhase("complete");
      mascot.setMood(won ? "cheering" : "thinking");
      emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-111",
          difficulty: "medium",
        score: killsRef.current * 20 + (won ? 200 : 0),
        maxScore: 500,
        interactions: 1,
        elapsedMs: frameRef.current * 16,
          source: "component",
          occurredAt: new Date().toISOString(),
      });
    };

    const loop = () => {
      animRef.current = requestAnimationFrame(loop);
      if (phaseRef.current !== "playing") return;
      frameRef.current++;

      const p = playerRef.current;
      const keys = keysRef.current;
      const spd = 2.5;
      if (keys.has("w") || keys.has("arrowup")) p.y = Math.max(8, p.y - spd);
      if (keys.has("s") || keys.has("arrowdown")) p.y = Math.min(CH - 8, p.y + spd);
      if (keys.has("a") || keys.has("arrowleft")) p.x = Math.max(8, p.x - spd);
      if (keys.has("d") || keys.has("arrowright")) p.x = Math.min(CW - 8, p.x + spd);

      // Shrink circle
      if (frameRef.current % 180 === 0) {
        circleRef.current.r = Math.max(40, circleRef.current.r - 8);
        setCircleR(circleRef.current.r);
      }

      // Zone damage
      const pdx = p.x - circleRef.current.x;
      const pdy = p.y - circleRef.current.y;
      if (Math.sqrt(pdx * pdx + pdy * pdy) > circleRef.current.r) {
        if (frameRef.current % 30 === 0) {
          hpRef.current -= 5;
          setHp(hpRef.current);
          if (hpRef.current <= 0) { endGame(false); return; }
        }
      }

      // Loot pickup
      lootsRef.current = lootsRef.current.filter((l) => {
        if (Math.abs(l.x - p.x) < 15 && Math.abs(l.y - p.y) < 15) {
          if (l.type === "med") { hpRef.current = Math.min(100, hpRef.current + l.amount); setHp(hpRef.current); }
          if (l.type === "armor") { armorRef.current = Math.min(100, armorRef.current + l.amount); setArmor(armorRef.current); }
          if (l.type === "ammo") { ammoRef.current += l.amount; setAmmo(ammoRef.current); }
          return false;
        }
        return true;
      });

      // Move bullets
      bulletsRef.current = bulletsRef.current.filter((b) => {
        b.x += b.dx; b.y += b.dy;
        return b.x >= 0 && b.x <= CW && b.y >= 0 && b.y <= CH;
      });

      // AI behavior
      for (const ai of aisRef.current) {
        if (!ai.alive) continue;

        // Zone damage to AI
        const ax = ai.x - circleRef.current.x;
        const ay = ai.y - circleRef.current.y;
        if (Math.sqrt(ax * ax + ay * ay) > circleRef.current.r) {
          ai.x += (circleRef.current.x - ai.x) * 0.02;
          ai.y += (circleRef.current.y - ai.y) * 0.02;
        }

        // Random movement
        ai.x += (Math.random() - 0.5) * ai.speed * 2;
        ai.y += (Math.random() - 0.5) * ai.speed * 2;
        ai.x = Math.max(5, Math.min(CW - 5, ai.x));
        ai.y = Math.max(5, Math.min(CH - 5, ai.y));

        // AI shooting at player or each other
        ai.shootCd--;
        if (ai.shootCd <= 0) {
          const dist = Math.sqrt((p.x - ai.x) ** 2 + (p.y - ai.y) ** 2);
          if (dist < 150) {
            const dx = p.x - ai.x;
            const dy = p.y - ai.y;
            bulletsRef.current.push({ x: ai.x, y: ai.y, dx: (dx / dist) * 4, dy: (dy / dist) * 4, friendly: false });
          }
          ai.shootCd = 80 + Math.floor(Math.random() * 80);
        }

        // AI vs AI combat
        for (const other of aisRef.current) {
          if (other === ai || !other.alive) continue;
          const d = Math.sqrt((ai.x - other.x) ** 2 + (ai.y - other.y) ** 2);
          if (d < 30 && Math.random() < 0.02) {
            other.hp -= ai.weapon;
            if (other.hp <= 0) {
              other.alive = false;
              aliveRef.current--;
              setAlive(aliveRef.current);
            }
          }
        }
      }

      // Bullet collisions
      for (let i = bulletsRef.current.length - 1; i >= 0; i--) {
        const b = bulletsRef.current[i]!;
        if (b.friendly) {
          for (const ai of aisRef.current) {
            if (!ai.alive) continue;
            if (Math.abs(b.x - ai.x) < 10 && Math.abs(b.y - ai.y) < 10) {
              const dmg = 15 + Math.floor(Math.random() * 10);
              if (ai.armor > 0) { ai.armor = Math.max(0, ai.armor - dmg); } else { ai.hp -= dmg; }
              bulletsRef.current.splice(i, 1);
              if (ai.hp <= 0) {
                ai.alive = false;
                killsRef.current++;
                aliveRef.current--;
                setKills(killsRef.current);
                setAlive(aliveRef.current);
                hapticSuccess();
              }
              break;
            }
          }
        } else {
          if (Math.abs(b.x - p.x) < 8 && Math.abs(b.y - p.y) < 8) {
            const dmg = 8 + Math.floor(Math.random() * 6);
            if (armorRef.current > 0) { armorRef.current = Math.max(0, armorRef.current - dmg); setArmor(armorRef.current); }
            else { hpRef.current -= dmg; setHp(hpRef.current); }
            bulletsRef.current.splice(i, 1);
            if (hpRef.current <= 0) { endGame(false); return; }
          }
        }
      }

      // Win check
      if (aliveRef.current <= 1 && hpRef.current > 0) { endGame(true); return; }

      // ─── Draw ──────────────────────────────────
      // Ground
      ctx.fillStyle = "#2d4a1e";
      ctx.fillRect(0, 0, CW, CH);

      // Terrain patches
      ctx.fillStyle = "#3a5e27";
      for (let i = 0; i < 15; i++) {
        ctx.fillRect((i * 73) % CW, (i * 47) % CH, 30 + (i % 3) * 15, 20 + (i % 2) * 10);
      }

      // Buildings
      ctx.fillStyle = "#555";
      ctx.fillRect(80, 80, 50, 40);
      ctx.fillRect(300, 100, 60, 50);
      ctx.fillRect(150, 300, 45, 45);
      ctx.fillRect(380, 350, 55, 35);

      // Circle
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, CW, CH);
      ctx.arc(circleRef.current.x, circleRef.current.y, circleRef.current.r, 0, Math.PI * 2, true);
      ctx.fillStyle = "rgba(70,130,255,0.25)";
      ctx.fill();
      ctx.restore();

      ctx.strokeStyle = "rgba(70,130,255,0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(circleRef.current.x, circleRef.current.y, circleRef.current.r, 0, Math.PI * 2);
      ctx.stroke();

      // Loot
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      for (const l of lootsRef.current) ctx.fillText(l.icon, l.x, l.y);

      // AI
      for (const ai of aisRef.current) {
        if (!ai.alive) continue;
        ctx.fillStyle = "#ff4444";
        ctx.beginPath();
        ctx.arc(ai.x, ai.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Player
      ctx.fillStyle = "#44ff44";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#88ff88";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Bullets
      for (const b of bulletsRef.current) {
        ctx.fillStyle = b.friendly ? "#ffff44" : "#ff6644";
        ctx.beginPath();
        ctx.arc(b.x, b.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // HUD
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.fillRect(0, 0, CW, 20);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "left";
      ctx.fillText(`❤️${hpRef.current} 🦺${armorRef.current} 📦${ammoRef.current} | 🎯${killsRef.current} kills | 👥${aliveRef.current} alive`, 6, 14);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase, mascot]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-800 via-emerald-950 to-slate-900 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-yellow-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Drop Zone Survivor
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              30-player battle royale. WASD to move, click to shoot. Shrinking blue zone. Loot meds, armor, and ammo. Last one standing wins!
            </p>
            <PhysicalButton onClick={startGame}><MapPin className="mr-2 h-5 w-5" /> Drop In</PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" className="flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-4 rounded-xl bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <span className="text-red-400">❤️ {hp}</span>
              <span className="text-blue-400">🦺 {armor}</span>
              <span className="text-yellow-400">📦 {ammo}</span>
              <span className="text-green-400">🎯 {kills}</span>
              <span>👥 {alive}</span>
            </div>
            <canvas ref={canvasRef} width={CW} height={CH} className="cursor-crosshair rounded-xl border-2 border-emerald-800/40 shadow-2xl" />
            <p className="text-xs text-white/40">WASD move • Click shoot</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{hp > 0 ? "🏆" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-yellow-400">
                {hp > 0 ? "WINNER WINNER!" : "Better Luck Next Time"}
              </h2>
              <p className="mt-2 text-white/60">Kills: {kills} | Placement: #{alive}</p>
              <p className="text-lg font-bold text-yellow-300">Score: {kills * 20 + (hp > 0 ? 200 : 0)}</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> Drop Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
