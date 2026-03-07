"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Truck Highway — CDL-themed endless driving game
 *
 * A top-down highway driving game where you control a semi-truck,
 * avoid traffic, collect cargo pickups, and answer CDL trivia
 * questions at checkpoints. Educational + fun.
 *
 * Controls: Arrow keys or WASD, touch swipe on mobile
 */

type GameState = "menu" | "playing" | "checkpoint" | "gameover";

type Vehicle = {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  color: string;
  lane: number;
};

type Pickup = {
  x: number;
  y: number;
  type: "cargo" | "fuel" | "wrench";
  collected: boolean;
};

type TriviaQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

const TRIVIA: TriviaQuestion[] = [
  { question: "Min tread depth for steer tires?", options: ["2/32\"", "4/32\"", "6/32\"", "8/32\""], correctIndex: 1 },
  { question: "CDL BAC limit?", options: ["0.02%", "0.04%", "0.08%", "0.10%"], correctIndex: 1 },
  { question: "Governor cut-out pressure?", options: ["100 psi", "110 psi", "125 psi", "150 psi"], correctIndex: 2 },
  { question: "Max drive time after 10hr off?", options: ["8 hrs", "10 hrs", "11 hrs", "14 hrs"], correctIndex: 2 },
  { question: "Min age for interstate CDL?", options: ["18", "19", "21", "25"], correctIndex: 2 },
  { question: "Following distance per 10ft?", options: ["0.5 sec", "1 sec", "1.5 sec", "2 sec"], correctIndex: 1 },
  { question: "Low air warning activates at?", options: ["40 psi", "50 psi", "60 psi", "80 psi"], correctIndex: 2 },
  { question: "Parking brake knob color?", options: ["Red", "Yellow", "Blue", "Green"], correctIndex: 1 },
  { question: "Supply line glad hand color?", options: ["Blue", "Red", "Green", "Yellow"], correctIndex: 1 },
  { question: "Reflective triangles at?", options: ["10, 50, 100 ft", "10, 100, 200 ft", "25, 100, 300 ft", "50, 150, 300 ft"], correctIndex: 1 },
  { question: "Cargo check: first 50mi, then?", options: ["100 mi / 2 hr", "150 mi / 3 hr", "200 mi / 4 hr", "250 mi / 5 hr"], correctIndex: 1 },
  { question: "Speed reduction in heavy rain?", options: ["1/4", "1/3", "1/2", "2/3"], correctIndex: 1 },
];

const LANE_COUNT = 4;
const LANE_WIDTH = 64;
const ROAD_LEFT_MARGIN = 40;

function laneCenter(lane: number): number {
  return ROAD_LEFT_MARGIN + lane * LANE_WIDTH + LANE_WIDTH / 2;
}

type Props = {
  width?: number;
  height?: number;
  onScore?: (score: number) => void;
  onExit?: () => void;
};

export default function GameTruckHighway({ width = 360, height = 640, onScore, onExit }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>("menu");
  const [score, setScore] = useState(0);
  const [distance, setDistance] = useState(0);
  const [lives, setLives] = useState(3);
  const [triviaQ, setTriviaQ] = useState<TriviaQuestion | null>(null);
  const [triviaResult, setTriviaResult] = useState<string | null>(null);
  const gameRef = useRef({
    player: { x: 0, y: 0, width: 36, height: 60, lane: 1 },
    vehicles: [] as Vehicle[],
    pickups: [] as Pickup[],
    roadOffset: 0,
    speed: 3,
    frame: 0,
    keys: new Set<string>(),
    nextCheckpoint: 500,
    touchStartX: 0,
    touchStartY: 0,
    lives: 3,
    score: 0,
    distance: 0,
    invincibleUntil: 0,
  });

  const startGame = useCallback(() => {
    const g = gameRef.current;
    g.player.lane = 1;
    g.player.x = laneCenter(1) - g.player.width / 2;
    g.player.y = height - 100;
    g.vehicles = [];
    g.pickups = [];
    g.roadOffset = 0;
    g.speed = 3;
    g.frame = 0;
    g.nextCheckpoint = 500;
    g.lives = 3;
    g.score = 0;
    g.distance = 0;
    g.invincibleUntil = 0;
    setScore(0);
    setDistance(0);
    setLives(3);
    setGameState("playing");
  }, [height]);

  // Game loop
  useEffect(() => {
    if (gameState !== "playing") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const g = gameRef.current;

    const ROAD_RIGHT = ROAD_LEFT_MARGIN + LANE_COUNT * LANE_WIDTH;
    const vehicleColors = ["#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#8b5cf6", "#ec4899"];

    function spawnVehicle() {
      const lane = Math.floor(Math.random() * LANE_COUNT);
      const color = vehicleColors[Math.floor(Math.random() * vehicleColors.length)];
      const vSpeed = 1 + Math.random() * 2;
      g.vehicles.push({
        x: laneCenter(lane) - 16,
        y: -80,
        width: 32,
        height: 52,
        speed: vSpeed,
        color,
        lane,
      });
    }

    function spawnPickup() {
      const lane = Math.floor(Math.random() * LANE_COUNT);
      const types: Pickup["type"][] = ["cargo", "fuel", "wrench"];
      g.pickups.push({
        x: laneCenter(lane) - 10,
        y: -30,
        type: types[Math.floor(Math.random() * types.length)],
        collected: false,
      });
    }

    function drawRoad() {
      // Grass
      ctx!.fillStyle = "#22c55e";
      ctx!.fillRect(0, 0, ROAD_LEFT_MARGIN, height);
      ctx!.fillRect(ROAD_RIGHT, 0, width - ROAD_RIGHT, height);

      // Road
      ctx!.fillStyle = "#374151";
      ctx!.fillRect(ROAD_LEFT_MARGIN, 0, LANE_COUNT * LANE_WIDTH, height);

      // Lane markings
      ctx!.strokeStyle = "#fbbf24";
      ctx!.lineWidth = 2;
      ctx!.setLineDash([20, 20]);
      for (let i = 1; i < LANE_COUNT; i++) {
        const x = ROAD_LEFT_MARGIN + i * LANE_WIDTH;
        ctx!.beginPath();
        for (let y = (g.roadOffset % 40) - 40; y < height; y += 40) {
          ctx!.moveTo(x, y);
          ctx!.lineTo(x, y + 20);
        }
        ctx!.stroke();
      }
      ctx!.setLineDash([]);

      // Road edges
      ctx!.strokeStyle = "#ffffff";
      ctx!.lineWidth = 3;
      ctx!.beginPath();
      ctx!.moveTo(ROAD_LEFT_MARGIN, 0);
      ctx!.lineTo(ROAD_LEFT_MARGIN, height);
      ctx!.moveTo(ROAD_RIGHT, 0);
      ctx!.lineTo(ROAD_RIGHT, height);
      ctx!.stroke();
    }

    function drawTruck(x: number, y: number, w: number, h: number, invincible: boolean) {
      // Trailer
      ctx!.fillStyle = invincible ? "rgba(30,58,95,0.5)" : "#1e3a5f";
      ctx!.fillRect(x + 2, y, w - 4, h * 0.65);
      // Cab
      ctx!.fillStyle = invincible ? "rgba(59,130,246,0.5)" : "#3b82f6";
      ctx!.fillRect(x + 4, y + h * 0.65, w - 8, h * 0.35);
      // Wheels
      ctx!.fillStyle = "#1f2937";
      ctx!.fillRect(x - 2, y + 4, 6, 10);
      ctx!.fillRect(x + w - 4, y + 4, 6, 10);
      ctx!.fillRect(x - 2, y + h * 0.65 + 4, 6, 10);
      ctx!.fillRect(x + w - 4, y + h * 0.65 + 4, 6, 10);
      // Windshield
      ctx!.fillStyle = "#93c5fd";
      ctx!.fillRect(x + 8, y + h * 0.67, w - 16, 8);
    }

    function drawVehicle(v: Vehicle) {
      ctx!.fillStyle = v.color;
      const r = 6;
      ctx!.beginPath();
      ctx!.moveTo(v.x + r, v.y);
      ctx!.lineTo(v.x + v.width - r, v.y);
      ctx!.quadraticCurveTo(v.x + v.width, v.y, v.x + v.width, v.y + r);
      ctx!.lineTo(v.x + v.width, v.y + v.height - r);
      ctx!.quadraticCurveTo(v.x + v.width, v.y + v.height, v.x + v.width - r, v.y + v.height);
      ctx!.lineTo(v.x + r, v.y + v.height);
      ctx!.quadraticCurveTo(v.x, v.y + v.height, v.x, v.y + v.height - r);
      ctx!.lineTo(v.x, v.y + r);
      ctx!.quadraticCurveTo(v.x, v.y, v.x + r, v.y);
      ctx!.fill();
      // Windshield
      ctx!.fillStyle = "#bfdbfe";
      ctx!.fillRect(v.x + 5, v.y + v.height - 14, v.width - 10, 8);
    }

    function drawPickup(p: Pickup) {
      if (p.collected) return;
      ctx!.beginPath();
      ctx!.arc(p.x + 10, p.y + 10, 10, 0, Math.PI * 2);
      ctx!.fillStyle =
        p.type === "cargo" ? "#f59e0b" : p.type === "fuel" ? "#22c55e" : "#3b82f6";
      ctx!.fill();
      ctx!.fillStyle = "#fff";
      ctx!.font = "bold 12px monospace";
      ctx!.textAlign = "center";
      const icon = p.type === "cargo" ? "$" : p.type === "fuel" ? "F" : "W";
      ctx!.fillText(icon, p.x + 10, p.y + 15);
    }

    function drawHUD() {
      // Semi-transparent top bar
      ctx!.fillStyle = "rgba(15,15,35,0.85)";
      ctx!.fillRect(0, 0, width, 44);
      ctx!.fillStyle = "#f1f5f9";
      ctx!.font = "bold 13px 'Space Grotesk', monospace";
      ctx!.textAlign = "left";
      ctx!.fillText(`Score: ${g.score}`, 10, 28);
      ctx!.textAlign = "center";
      ctx!.fillText(`${Math.floor(g.distance)}mi`, width / 2, 28);
      ctx!.textAlign = "right";
      // Lives as hearts
      for (let i = 0; i < g.lives; i++) {
        ctx!.fillStyle = "#ef4444";
        ctx!.fillText("\u2764", width - 12 - i * 20, 28);
      }
    }

    function checkCollision(a: { x: number; y: number; width: number; height: number }, b: { x: number; y: number; width: number; height: number }) {
      return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
    }

    function tick() {
      g.frame++;
      g.roadOffset += g.speed;
      g.distance += g.speed * 0.01;

      // Player movement
      const targetLane = g.player.lane;
      const targetX = laneCenter(targetLane) - g.player.width / 2;
      g.player.x += (targetX - g.player.x) * 0.2;

      if (g.keys.has("ArrowLeft") || g.keys.has("a")) {
        if (g.player.lane > 0) g.player.lane--;
        g.keys.delete("ArrowLeft");
        g.keys.delete("a");
      }
      if (g.keys.has("ArrowRight") || g.keys.has("d")) {
        if (g.player.lane < LANE_COUNT - 1) g.player.lane++;
        g.keys.delete("ArrowRight");
        g.keys.delete("d");
      }

      // Spawn traffic
      if (g.frame % Math.max(20, 60 - Math.floor(g.distance / 50)) === 0) {
        spawnVehicle();
      }
      // Spawn pickups
      if (g.frame % 120 === 0) {
        spawnPickup();
      }

      // Move vehicles
      for (const v of g.vehicles) {
        v.y += g.speed + v.speed;
      }
      g.vehicles = g.vehicles.filter((v) => v.y < height + 100);

      // Move pickups
      for (const p of g.pickups) {
        p.y += g.speed;
      }
      g.pickups = g.pickups.filter((p) => p.y < height + 50 && !p.collected);

      // Collision with traffic
      const isInvincible = g.frame < g.invincibleUntil;
      const playerBox = { x: g.player.x, y: g.player.y, width: g.player.width, height: g.player.height };
      if (!isInvincible) {
        for (const v of g.vehicles) {
          if (checkCollision(playerBox, v)) {
            g.lives--;
            setLives(g.lives);
            g.invincibleUntil = g.frame + 90; // 1.5 seconds invincibility
            if (g.lives <= 0) {
              setGameState("gameover");
              setScore(g.score);
              setDistance(g.distance);
              onScore?.(g.score);
              return;
            }
            break;
          }
        }
      }

      // Pickup collection
      for (const p of g.pickups) {
        if (!p.collected && checkCollision(playerBox, { x: p.x, y: p.y, width: 20, height: 20 })) {
          p.collected = true;
          if (p.type === "cargo") g.score += 50;
          else if (p.type === "fuel") g.score += 25;
          else g.score += 30;
          setScore(g.score);
        }
      }

      // Speed increase over time
      g.speed = 3 + Math.floor(g.distance / 100) * 0.5;

      // Checkpoint (trivia)
      if (g.distance >= g.nextCheckpoint) {
        g.nextCheckpoint += 500;
        const q = TRIVIA[Math.floor(Math.random() * TRIVIA.length)];
        setTriviaQ(q);
        setTriviaResult(null);
        setGameState("checkpoint");
        setScore(g.score);
        setDistance(g.distance);
        return;
      }

      // Draw
      ctx!.clearRect(0, 0, width, height);
      drawRoad();
      for (const v of g.vehicles) drawVehicle(v);
      for (const p of g.pickups) drawPickup(p);
      drawTruck(g.player.x, g.player.y, g.player.width, g.player.height, isInvincible);
      drawHUD();

      setScore(g.score);
      setDistance(g.distance);

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [gameState, width, height, onScore]);

  // Key handlers
  useEffect(() => {
    const g = gameRef.current;
    const onDown = (e: KeyboardEvent) => {
      g.keys.add(e.key);
      if (e.key === "Escape" && gameState === "playing") {
        setGameState("menu");
      }
    };
    const onUp = (e: KeyboardEvent) => g.keys.delete(e.key);
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [gameState]);

  // Touch handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const g = gameRef.current;

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      g.touchStartX = touch.clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const dx = touch.clientX - g.touchStartX;
      if (Math.abs(dx) > 30) {
        if (dx < 0 && g.player.lane > 0) g.player.lane--;
        if (dx > 0 && g.player.lane < LANE_COUNT - 1) g.player.lane++;
      }
    };

    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const handleTriviaAnswer = (index: number) => {
    if (!triviaQ) return;
    const correct = index === triviaQ.correctIndex;
    if (correct) {
      gameRef.current.score += 100;
      setTriviaResult("Correct! +100 points");
    } else {
      setTriviaResult(`Wrong! Answer: ${triviaQ.options[triviaQ.correctIndex]}`);
    }
    setTimeout(() => {
      setTriviaQ(null);
      setTriviaResult(null);
      setGameState("playing");
    }, 1500);
  };

  return (
    <div className="relative flex flex-col items-center" style={{ width, height: height + 10 }}>
      <canvas ref={canvasRef} width={width} height={height} className="rounded-xl border-2 border-[#334155]" />

      {/* Menu overlay */}
      {gameState === "menu" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-[#0f0f23]/95">
          <h2 className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-3xl font-extrabold text-transparent">
            Truck Highway
          </h2>
          <p className="mt-2 text-sm text-[#94a3b8]">Dodge traffic. Collect cargo. Answer CDL trivia.</p>
          <div className="mt-4 flex flex-col gap-2 text-xs text-[#64748b]">
            <span>Arrow keys / WASD / Swipe to change lanes</span>
            <span>Collect $ cargo, F fuel, W wrench for points</span>
            <span>CDL trivia at every checkpoint!</span>
          </div>
          <button
            type="button"
            onClick={startGame}
            className="mt-6 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#1e3a5f] px-8 py-3 font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40"
          >
            Start Driving
          </button>
          {onExit && (
            <button type="button" onClick={onExit} className="mt-3 text-sm text-[#64748b] hover:text-white">
              Back
            </button>
          )}
        </div>
      )}

      {/* Checkpoint / Trivia overlay */}
      {gameState === "checkpoint" && triviaQ && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-[#0f0f23]/95 p-6">
          <span className="mb-2 rounded bg-[#f59e0b]/20 px-3 py-1 text-xs font-bold text-[#f59e0b]">
            CDL CHECKPOINT
          </span>
          <h3 className="mb-4 text-center text-lg font-bold text-white">{triviaQ.question}</h3>
          {triviaResult ? (
            <p
              className={`text-center text-sm font-bold ${
                triviaResult.startsWith("Correct") ? "text-[#22c55e]" : "text-[#ef4444]"
              }`}
            >
              {triviaResult}
            </p>
          ) : (
            <div className="flex flex-col gap-2 w-full max-w-[280px]">
              {triviaQ.options.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleTriviaAnswer(i)}
                  className="rounded-xl border border-[#334155] bg-[#1a1a3e] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-[#7c3aed] hover:bg-[#252550]"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Game Over overlay */}
      {gameState === "gameover" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-[#0f0f23]/95">
          <h2 className="text-2xl font-extrabold text-[#ef4444]">Game Over</h2>
          <div className="mt-4 flex gap-6 text-center">
            <div>
              <p className="text-2xl font-extrabold text-[#f59e0b]">{score}</p>
              <p className="text-xs text-[#94a3b8]">Score</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#06b6d4]">{Math.floor(distance)}mi</p>
              <p className="text-xs text-[#94a3b8]">Distance</p>
            </div>
          </div>
          <button
            type="button"
            onClick={startGame}
            className="mt-6 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#1e3a5f] px-8 py-3 font-bold text-white shadow-lg"
          >
            Try Again
          </button>
          {onExit && (
            <button type="button" onClick={onExit} className="mt-3 text-sm text-[#64748b] hover:text-white">
              Exit
            </button>
          )}
        </div>
      )}
    </div>
  );
}
