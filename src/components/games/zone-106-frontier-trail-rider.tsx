"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Sun, TreePine, RotateCcw } from "lucide-react";
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

type Phase = "ready" | "riding" | "camp" | "hunt" | "complete";
type Weather = "clear" | "rain" | "fog" | "sunset";
type Animal = { x: number; y: number; kind: string; icon: string; speed: number; value: number; alive: boolean };

const ANIMAL_KINDS = [
  { kind: "deer", icon: "🦌", speed: 1.2, value: 30 },
  { kind: "rabbit", icon: "🐇", speed: 2, value: 15 },
  { kind: "eagle", icon: "🦅", speed: 2.5, value: 40 },
  { kind: "bison", icon: "🦬", speed: 0.6, value: 60 },
  { kind: "wolf", icon: "🐺", speed: 1.8, value: 25 },
];

export default function Zone106FrontierTrailRider() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [weather, setWeather] = useState<Weather>("clear");
  const [honor, setHonor] = useState(50);
  const [money, setMoney] = useState(0);
  const [supplies, setSupplies] = useState(100);
  const [distance, setDistance] = useState(0);
  const [journal, setJournal] = useState<string[]>([]);

  const playerRef = useRef({ x: 50, y: CH / 2 });
  const keysRef = useRef(new Set<string>());
  const scrollRef = useRef(0);
  const animalsRef = useRef<Animal[]>([]);
  const phaseRef = useRef<Phase>("ready");
  const animRef = useRef(0);
  const frameRef = useRef(0);
  const suppliesRef = useRef(100);
  const moneyRef = useRef(0);
  const distRef = useRef(0);

  const addJournal = useCallback((msg: string) => {
    setJournal((prev) => [...prev.slice(-4), msg]);
  }, []);

  const spawnAnimals = useCallback(() => {
    animalsRef.current = Array.from({ length: 8 }, () => {
      const tmpl = ANIMAL_KINDS[Math.floor(Math.random() * ANIMAL_KINDS.length)]!;
      return {
        x: 200 + Math.random() * 800,
        y: 60 + Math.random() * (CH - 120),
        ...tmpl,
        alive: true,
      };
    });
  }, []);

  const startGame = useCallback(() => {
    playerRef.current = { x: 50, y: CH / 2 };
    scrollRef.current = 0;
    frameRef.current = 0;
    suppliesRef.current = 100;
    moneyRef.current = 0;
    distRef.current = 0;
    setSupplies(100);
    setMoney(0);
    setDistance(0);
    setHonor(50);
    setWeather("clear");
    setJournal(["🌅 Set out on the frontier trail..."]);
    spawnAnimals();
    phaseRef.current = "riding";
    setPhase("riding");
    mascot.setMood("happy");
  }, [mascot, spawnAnimals]);

  useEffect(() => {
    const kd = (e: KeyboardEvent) => keysRef.current.add(e.key.toLowerCase());
    const ku = (e: KeyboardEvent) => keysRef.current.delete(e.key.toLowerCase());
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);
    return () => { window.removeEventListener("keydown", kd); window.removeEventListener("keyup", ku); };
  }, []);

  // Click to shoot during hunt
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onClick = (e: MouseEvent) => {
      if (phaseRef.current !== "riding") return;
      const r = canvas.getBoundingClientRect();
      const cx = e.clientX - r.left + scrollRef.current;
      const cy = e.clientY - r.top;
      for (const animal of animalsRef.current) {
        if (!animal.alive) continue;
        const dx = cx - animal.x;
        const dy = cy - animal.y;
        if (Math.sqrt(dx * dx + dy * dy) < 25) {
          animal.alive = false;
          moneyRef.current += animal.value;
          setMoney(moneyRef.current);
          hapticSuccess();
          break;
        }
      }
    };
    canvas.addEventListener("click", onClick);
    return () => canvas.removeEventListener("click", onClick);
  }, []);

  // Weather changes
  useEffect(() => {
    if (phase !== "riding") return;
    const timer = setInterval(() => {
      const weathers: Weather[] = ["clear", "rain", "fog", "sunset"];
      setWeather(weathers[Math.floor(Math.random() * weathers.length)]!);
    }, 8000);
    return () => clearInterval(timer);
  }, [phase]);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const loop = () => {
      animRef.current = requestAnimationFrame(loop);
      if (phaseRef.current !== "riding") return;
      frameRef.current++;

      const keys = keysRef.current;
      const speed = 2;
      if (keys.has("w") || keys.has("arrowup")) playerRef.current.y = Math.max(30, playerRef.current.y - speed);
      if (keys.has("s") || keys.has("arrowdown")) playerRef.current.y = Math.min(CH - 30, playerRef.current.y + speed);

      // Auto-scroll
      scrollRef.current += 1.5;
      distRef.current += 0.05;
      if (frameRef.current % 30 === 0) {
        setDistance(Math.round(distRef.current));
      }

      // Supplies drain
      if (frameRef.current % 120 === 0) {
        suppliesRef.current -= 1;
        setSupplies(suppliesRef.current);
        if (suppliesRef.current <= 0) {
          phaseRef.current = "complete";
          setPhase("complete");
          mascot.setMood("cheering");
          emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-106",
          difficulty: "medium",
            score: moneyRef.current + Math.round(distRef.current) * 10,
            maxScore: 2000,
            interactions: 1,
            elapsedMs: frameRef.current * 16,
          source: "component",
          occurredAt: new Date().toISOString(),
          });
          return;
        }
      }

      // Respawn animals
      if (animalsRef.current.filter((a) => a.alive).length < 3) {
        const tmpl = ANIMAL_KINDS[Math.floor(Math.random() * ANIMAL_KINDS.length)]!;
        animalsRef.current.push({
          x: scrollRef.current + CW + 100 + Math.random() * 200,
          y: 60 + Math.random() * (CH - 120),
          ...tmpl,
          alive: true,
        });
      }

      // Move animals
      for (const a of animalsRef.current) {
        if (!a.alive) continue;
        a.x += (Math.random() - 0.4) * a.speed;
        a.y += (Math.random() - 0.5) * a.speed;
        a.y = Math.max(30, Math.min(CH - 30, a.y));
      }

      // ─── Draw ─────────────────────────────────────────────────────
      // Sky
      const skyColors: Record<Weather, string> = {
        clear: "#87CEEB",
        rain: "#4a5568",
        fog: "#9ca3af",
        sunset: "#f97316",
      };
      ctx.fillStyle = skyColors[weather] ?? "#87CEEB";
      ctx.fillRect(0, 0, CW, CH * 0.4);

      // Ground
      ctx.fillStyle = "#8B7355";
      ctx.fillRect(0, CH * 0.4, CW, CH * 0.6);

      // Trail
      ctx.fillStyle = "#6B5B3E";
      ctx.fillRect(0, CH * 0.45, CW, 30);

      // Mountains (parallax)
      ctx.fillStyle = "#5c6370";
      for (let i = 0; i < 8; i++) {
        const mx = ((i * 120 - scrollRef.current * 0.2) % (CW + 200)) - 100;
        ctx.beginPath();
        ctx.moveTo(mx, CH * 0.4);
        ctx.lineTo(mx + 60, CH * 0.15);
        ctx.lineTo(mx + 120, CH * 0.4);
        ctx.fill();
      }

      // Trees (parallax)
      ctx.fillStyle = "#2d5016";
      for (let i = 0; i < 12; i++) {
        const tx = ((i * 80 - scrollRef.current * 0.5) % (CW + 160)) - 80;
        const ty = CH * 0.38;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx + 15, ty - 40);
        ctx.lineTo(tx + 30, ty);
        ctx.fill();
      }

      // Cacti
      ctx.fillStyle = "#4a7c32";
      for (let i = 0; i < 6; i++) {
        const cx = ((i * 140 - scrollRef.current * 0.7) % (CW + 200)) - 60;
        ctx.fillRect(cx, CH * 0.55, 6, 25);
        ctx.fillRect(cx - 8, CH * 0.58, 8, 5);
        ctx.fillRect(cx + 6, CH * 0.56, 8, 5);
      }

      // Weather effects
      if (weather === "rain") {
        ctx.strokeStyle = "rgba(150,200,255,0.4)";
        ctx.lineWidth = 1;
        for (let i = 0; i < 40; i++) {
          const rx = Math.random() * CW;
          const ry = Math.random() * CH;
          ctx.beginPath();
          ctx.moveTo(rx, ry);
          ctx.lineTo(rx - 2, ry + 8);
          ctx.stroke();
        }
      }
      if (weather === "fog") {
        ctx.fillStyle = "rgba(200,200,200,0.3)";
        ctx.fillRect(0, 0, CW, CH);
      }

      // Animals
      ctx.font = "20px sans-serif";
      ctx.textAlign = "center";
      for (const a of animalsRef.current) {
        if (!a.alive) continue;
        const sx = a.x - scrollRef.current;
        if (sx < -30 || sx > CW + 30) continue;
        ctx.fillText(a.icon, sx, a.y);
      }

      // Player (horse rider)
      const px = playerRef.current.x;
      const py = playerRef.current.y;
      ctx.font = "24px sans-serif";
      ctx.fillText("🐎", px, py);

      // HUD overlay
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, CW, 22);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`🏕️ ${Math.round(distRef.current)}mi  💰$${moneyRef.current}  🎒${suppliesRef.current}%`, 8, 15);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase, weather]);

  const resetGame = () => {
    phaseRef.current = "ready";
    setPhase("ready");
    mascot.setMood("idle");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-amber-800 via-orange-900 to-stone-900 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-amber-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Frontier Trail Rider
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Ride the frontier, hunt wild game, and survive the trail. W/S to steer, click to hunt. Weather changes dynamically.
            </p>
            <PhysicalButton onClick={startGame}>
              <Compass className="mr-2 h-5 w-5" />
              Hit the Trail
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "riding" && (
          <motion.div key="riding" className="flex flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-4 rounded-xl bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <span>🏕️ {distance}mi</span>
              <span className="text-amber-400">💰 ${money}</span>
              <span className="text-green-400">🎒 {supplies}%</span>
              <span>{weather === "clear" ? "☀️" : weather === "rain" ? "🌧️" : weather === "fog" ? "🌫️" : "🌅"} {weather}</span>
            </div>
            <canvas ref={canvasRef} width={CW} height={CH} className="cursor-crosshair rounded-xl border-2 border-amber-700/40 shadow-2xl" />
            <p className="text-xs text-white/40">W/S to steer • Click to hunt</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">🤠</p>
              <h2 className="mt-3 text-2xl font-black text-amber-400">Trail Complete</h2>
              <p className="mt-2 text-white/60">Distance: {distance}mi | Earnings: ${money}</p>
              <p className="text-lg font-bold text-amber-300">Score: {money + distance * 10}</p>
            </div>
            <PhysicalButton onClick={resetGame}><RotateCcw className="mr-1 h-4 w-4" /> Ride Again</PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
