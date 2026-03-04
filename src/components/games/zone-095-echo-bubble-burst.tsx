"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();
const W = 360;
const H = 500;
const COLS = 9;
const BSIZE = 36;
const COLORS = ["#ef4444","#3b82f6","#22c55e","#f59e0b","#a855f7"];
const ROWS_INIT = 6;
type Phase = "ready" | "playing" | "complete";

function randColor() { return COLORS[Math.floor(Math.random() * COLORS.length)]; }

interface Bubble { r: number; c: number; color: string; }
interface Ball { x: number; y: number; vx: number; vy: number; color: string; active: boolean; }

interface State {
  grid: (string | null)[][];
  ball: Ball;
  nextColor: string;
  score: number;
  startTime: number;
  canShoot: boolean;
  aimAngle: number;
}

function makeGrid(): (string | null)[][] {
  return Array.from({ length: ROWS_INIT }, () =>
    Array.from({ length: COLS }, () => (Math.random() < 0.8 ? randColor() : null))
  );
}

function bubblePos(r: number, c: number, offset: boolean) {
  const x = (offset ? BSIZE / 2 : 0) + c * BSIZE + BSIZE / 2;
  const y = r * BSIZE + BSIZE / 2 + 40;
  return { x, y };
}

function gridNeighbors(r: number, c: number, rowCount: number, even: boolean): [number, number][] {
  const n: [number, number][] = [[r-1,c],[r+1,c],[r,c-1],[r,c+1]];
  if (even) { n.push([r-1,c+1],[r+1,c+1]); } else { n.push([r-1,c-1],[r+1,c-1]); }
  return n.filter(([nr, nc]) => nr >= 0 && nr < rowCount && nc >= 0 && nc < COLS);
}

export default function Zone095EchoBubbleBurst() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const stateRef = useRef<State | null>(null);
  const phaseRef = useRef<Phase>("ready");
  const [phase, setPhase] = useState<Phase>("ready");
  const [displayScore, setDisplayScore] = useState(0);
  const mouseXRef = useRef(W / 2);

  const endGame = useCallback((won: boolean, score: number) => {
    cancelAnimationFrame(rafRef.current);
    phaseRef.current = "complete";
    setPhase("complete");
    setDisplayScore(score);
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-095",
      score,
      maxScore: 500,
      elapsedMs: Date.now() - (stateRef.current?.startTime ?? Date.now()),
      interactions: score / 10,
      difficulty: "medium",
    });
    if (won) { hapticSuccess(); mascot.speak("Board cleared! Bubble master!", "celebrate"); }
    else { hapticError(); mascot.speak("Bubbles reached the bottom! Try again!", "encourage"); }
  }, [mascot]);

  const popGroup = useCallback((grid: (string | null)[][], r: number, c: number, color: string): number => {
    const visited = new Set<string>();
    const queue: [number, number][] = [[r, c]];
    const group: [number, number][] = [];
    while (queue.length) {
      const [cr, cc] = queue.shift()!;
      const key = `${cr}-${cc}`;
      if (visited.has(key)) continue;
      if (cr < 0 || cr >= grid.length || cc < 0 || cc >= COLS) continue;
      if (grid[cr][cc] !== color) continue;
      visited.add(key);
      group.push([cr, cc]);
      const even = cr % 2 === 0;
      for (const [nr, nc] of gridNeighbors(cr, cc, grid.length, even)) queue.push([nr, nc]);
    }
    if (group.length >= 3) { group.forEach(([gr, gc]) => { grid[gr][gc] = null; }); return group.length * 10; }
    return 0;
  }, []);

  const shootBall = useCallback(() => {
    const s = stateRef.current;
    if (!s || !s.canShoot || phaseRef.current !== "playing") return;
    const angle = s.aimAngle;
    const speed = 10;
    s.ball = { x: W / 2, y: H - 60, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, color: s.nextColor, active: true };
    s.nextColor = randColor();
    s.canShoot = false;
    hapticSelection();
  }, []);

  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const s = stateRef.current;
    if (!ctx || !s) return;

    // Update aim angle
    const dx = mouseXRef.current - W / 2;
    const dy = -(H - 60 - 80);
    s.aimAngle = Math.atan2(dy, dx);
    const clamp = Math.PI / 6;
    if (s.aimAngle > -clamp) s.aimAngle = -clamp;
    if (s.aimAngle < -(Math.PI - clamp)) s.aimAngle = -(Math.PI - clamp);

    // Move ball
    if (s.ball.active) {
      s.ball.x += s.ball.vx;
      s.ball.y += s.ball.vy;
      if (s.ball.x < BSIZE / 2) { s.ball.x = BSIZE / 2; s.ball.vx *= -1; }
      if (s.ball.x > W - BSIZE / 2) { s.ball.x = W - BSIZE / 2; s.ball.vx *= -1; }

      // Check collision with grid
      let hit = false;
      outer: for (let r = 0; r < s.grid.length; r++) {
        const even = r % 2 === 0;
        for (let c = 0; c < COLS; c++) {
          if (!s.grid[r][c]) continue;
          const pos = bubblePos(r, c, even);
          const dist = Math.hypot(s.ball.x - pos.x, s.ball.y - pos.y);
          if (dist < BSIZE - 4) {
            // Place ball in nearest empty adjacent slot
            const nearby: [number,number][] = gridNeighbors(r, c, s.grid.length + 2, even);
            let best: [number,number] | null = null, bestD = Infinity;
            for (const [nr, nc] of nearby) {
              if (nr < 0 || nc < 0 || nc >= COLS) continue;
              if (nr >= s.grid.length) { while (s.grid.length <= nr) s.grid.push(Array(COLS).fill(null)); }
              if (!s.grid[nr][nc]) {
                const npos = bubblePos(nr, nc, nr % 2 === 0);
                const d = Math.hypot(s.ball.x - npos.x, s.ball.y - npos.y);
                if (d < bestD) { bestD = d; best = [nr, nc]; }
              }
            }
            if (best) {
              const [br, bc] = best;
              s.grid[br][bc] = s.ball.color;
              const pts = popGroup(s.grid, br, bc, s.ball.color);
              s.score += pts;
              if (pts > 0) { setDisplayScore(s.score); if (pts >= 30) mascot.speak("Burst! Amazing!", "happy"); }
            }
            s.ball.active = false;
            s.canShoot = true;
            hit = true;
            // Check win
            if (s.grid.every((row) => row.every((c) => !c))) { endGame(true, s.score); return; }
            // Check lose — a row exceeded bottom area
            const lastRowIdx = s.grid.length - 1;
            const lastRowPos = bubblePos(lastRowIdx, 0, lastRowIdx % 2 === 0);
            if (lastRowPos.y > H - 100) {
              endGame(false, s.score); return;
            }
            break outer;
          }
        }
      }
      if (!hit && s.ball.y < 40) {
        // Hit top
        const c = Math.round((s.ball.x - BSIZE / 2) / BSIZE);
        const bc = Math.max(0, Math.min(COLS - 1, c));
        if (!s.grid[0][bc]) { s.grid[0][bc] = s.ball.color; s.score += popGroup(s.grid, 0, bc, s.ball.color); }
        s.ball.active = false;
        s.canShoot = true;
      }
    }

    // Draw
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, W, H);

    // Draw grid
    for (let r = 0; r < s.grid.length; r++) {
      const even = r % 2 === 0;
      for (let c = 0; c < COLS; c++) {
        const color = s.grid[r][c];
        if (!color) continue;
        const pos = bubblePos(r, c, even);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, BSIZE / 2 - 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.3)";
        ctx.beginPath();
        ctx.arc(pos.x - 4, pos.y - 4, BSIZE / 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Aim line
    if (s.canShoot) {
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.setLineDash([6, 6]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(W / 2, H - 60);
      ctx.lineTo(W / 2 + Math.cos(s.aimAngle) * 120, H - 60 + Math.sin(s.aimAngle) * 120);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Ball in flight
    if (s.ball.active) {
      ctx.fillStyle = s.ball.color;
      ctx.beginPath();
      ctx.arc(s.ball.x, s.ball.y, BSIZE / 2 - 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Cannon base
    ctx.fillStyle = "#475569";
    ctx.beginPath();
    ctx.arc(W / 2, H - 60, 22, 0, Math.PI * 2);
    ctx.fill();
    if (s.canShoot) {
      ctx.fillStyle = s.nextColor;
      ctx.beginPath();
      ctx.arc(W / 2, H - 60, 14, 0, Math.PI * 2);
      ctx.fill();
    }
    // Cannon barrel
    ctx.save();
    ctx.translate(W / 2, H - 60);
    ctx.rotate(s.aimAngle);
    ctx.fillStyle = "#94a3b8";
    ctx.fillRect(0, -6, 32, 12);
    ctx.restore();

    // Score
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.font = "bold 16px monospace";
    ctx.textAlign = "right";
    ctx.fillText(`Score: ${s.score}`, W - 8, 28);

    rafRef.current = requestAnimationFrame(loop);
  }, [endGame, mascot, popGroup]);

  const startGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    stateRef.current = {
      grid: makeGrid(),
      ball: { x: W / 2, y: H - 60, vx: 0, vy: 0, color: randColor(), active: false },
      nextColor: randColor(),
      score: 0,
      startTime: Date.now(),
      canShoot: true,
      aimAngle: -Math.PI / 2,
    };
    phaseRef.current = "playing";
    setPhase("playing");
    setDisplayScore(0);
    mascot.speak("Click/tap to aim and shoot! Match 3+ bubbles!", "happy");
    rafRef.current = requestAnimationFrame(loop);
  }, [loop, mascot]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onMove = (e: MouseEvent) => { mouseXRef.current = e.offsetX; };
    const onTouch = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseXRef.current = e.touches[0].clientX - rect.left;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("touchmove", onTouch, { passive: true });
    canvas.addEventListener("click", shootBall);
    canvas.addEventListener("touchend", shootBall);
    return () => {
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("touchmove", onTouch);
      canvas.removeEventListener("click", shootBall);
      canvas.removeEventListener("touchend", shootBall);
      cancelAnimationFrame(rafRef.current);
    };
  }, [shootBall]);

  return (
    <div className="flex flex-col items-center gap-3 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="echo" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Echo Bubble Burst</h2>
          <p className="text-xs text-stone-500">Aim, shoot, match 3+!</p>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden border-2 border-sky-700 shadow-md cursor-crosshair">
        <canvas ref={canvasRef} width={W} height={H} className="block" />
        <AnimatePresence>
          {phase === "ready" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 gap-4">
              <p className="text-5xl">🫧</p>
              <p className="text-white font-black text-xl">Bubble Burst!</p>
              <p className="text-white/70 text-sm text-center px-6">Move mouse/finger to aim, click/tap to shoot. Match 3+ same-color bubbles to pop them!</p>
              <PhysicalButton onClick={startGame} variant="primary">Start Shooting!</PhysicalButton>
            </motion.div>
          )}
          {phase === "complete" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 gap-4">
              <p className="text-5xl">{displayScore >= 100 ? "🏆" : "💥"}</p>
              <p className="text-white font-black text-xl">Game Over!</p>
              <p className="text-white text-lg">{displayScore} pts</p>
              <PhysicalButton onClick={startGame} variant="primary">
                <RotateCcw className="mr-1.5 inline h-4 w-4" /> Play Again
              </PhysicalButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
