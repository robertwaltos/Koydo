"use client";

import { useCallback, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, AlertTriangle, RotateCcw, Eye, HelpCircle } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "tasks" | "report" | "vote" | "result" | "complete";

interface Crewmate {
  name: string; color: string; alive: boolean; isImpostor: boolean;
  suspicion: number; room: string;
}

interface Task {
  name: string; room: string; icon: string; done: boolean;
}

const ROOMS = ["Cafeteria", "Medbay", "Electrical", "Navigation", "Reactor", "O2", "Shields", "Admin", "Engine"];
const COLORS = ["#ff4444", "#4488ff", "#44cc44", "#ffaa00", "#ff44ff", "#44ffff", "#ff8844", "#aaaaff", "#88ff88"];
const NAMES = ["Red", "Blue", "Green", "Yellow", "Pink", "Cyan", "Orange", "Lilac", "Lime"];

export default function Zone117ImpostorStation() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [crew, setCrew] = useState<Crewmate[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [playerRoom, setPlayerRoom] = useState("Cafeteria");
  const [round, setRound] = useState(1);
  const [log, setLog] = useState<string[]>([]);
  const [voteTarget, setVoteTarget] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [bodyFound, setBodyFound] = useState<string | null>(null);
  const [killedThisRound, setKilledThisRound] = useState(false);

  const addLog = useCallback((msg: string) => setLog((p) => [...p.slice(-10), msg]), []);

  const startGame = useCallback(() => {
    const impostorIdx = Math.floor(Math.random() * 8) + 1; // never player (idx 0)
    const crewmates: Crewmate[] = NAMES.map((name, i) => ({
      name, color: COLORS[i]!, alive: true,
      isImpostor: i === impostorIdx,
      suspicion: 0, room: ROOMS[Math.floor(Math.random() * ROOMS.length)]!,
    }));
    crewmates[0]!.room = "Cafeteria";

    const taskList: Task[] = [];
    const usedRooms = new Set<string>();
    while (taskList.length < 6) {
      const room = ROOMS[Math.floor(Math.random() * ROOMS.length)]!;
      if (!usedRooms.has(room)) {
        usedRooms.add(room);
        const tNames = ["Wires", "Swipe Card", "Download Data", "Fix Reactor", "Clear Asteroids", "Empty Trash", "Calibrate", "Prime Shields"];
        taskList.push({ name: tNames[taskList.length]!, room, icon: "🔧", done: false });
      }
    }

    setCrew(crewmates);
    setTasks(taskList);
    setPlayerRoom("Cafeteria");
    setRound(1);
    setScore(0);
    setKilledThisRound(false);
    setBodyFound(null);
    setLog(["🚀 Emergency meeting in Cafeteria. 1 impostor among us. Complete tasks or vote them out!"]);
    setPhase("tasks");
    mascot.setMood("thinking");
  }, [mascot]);

  const moveToRoom = useCallback((room: string) => {
    setPlayerRoom(room);
    hapticSelection();

    // Check for body
    const dead = crew.find((c) => !c.alive && c.room === room && c.name !== "Red");
    if (dead) {
      setBodyFound(dead.name);
      addLog(`💀 You found ${dead.name}'s body in ${room}!`);
      setPhase("report");
      hapticError();
      return;
    }

    addLog(`🚶 Moved to ${room}`);
  }, [crew, addLog]);

  const doTask = useCallback((idx: number) => {
    const task = tasks[idx];
    if (!task || task.done || task.room !== playerRoom) return;
    setTasks((t) => t.map((tk, i) => i === idx ? { ...tk, done: true } : tk));
    setScore((s) => s + 30);
    addLog(`✅ Completed: ${task.name} in ${task.room}`);
    hapticSuccess();

    // Check win
    const remaining = tasks.filter((t, i) => i !== idx && !t.done).length;
    if (remaining === 0) {
      setPhase("complete");
      mascot.setMood("cheering");
      emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-117",
          difficulty: "medium", score: score + 30 + 100, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
      addLog("🎉 All tasks complete! Crew wins!");
      return;
    }
  }, [tasks, playerRoom, score, addLog, mascot]);

  const endTaskPhase = useCallback(() => {
    // Impostor AI: kill someone
    const impostor = crew.find((c) => c.isImpostor && c.alive);
    if (impostor && !killedThisRound) {
      const sameRoom = crew.filter((c) => c.alive && !c.isImpostor && c.room === impostor.room && c.name !== "Red");
      if (sameRoom.length > 0) {
        const victim = sameRoom[Math.floor(Math.random() * sameRoom.length)]!;
        setCrew((c) => c.map((cr) => cr.name === victim.name ? { ...cr, alive: false } : cr));
        setKilledThisRound(true);
        addLog(`☠️ Someone was killed... (you'll find them if you enter ${victim.room})`);
      }
    }

    // Move NPCs around
    setCrew((c) => c.map((cr) => {
      if (cr.name === "Red" || !cr.alive) return cr;
      return { ...cr, room: ROOMS[Math.floor(Math.random() * ROOMS.length)]! };
    }));

    // Auto-report if a death happened
    const aliveCrew = crew.filter((c) => c.alive && c.name !== "Red" && !c.isImpostor);
    if (aliveCrew.length <= 1) {
      // Impostor wins
      setPhase("complete");
      mascot.setMood("thinking");
      emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-117",
          difficulty: "medium", score, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
      addLog("💀 The impostor eliminated the crew!");
      return;
    }

    setRound((r) => r + 1);
    setKilledThisRound(false);
    // Emergency meeting every 3 rounds
    if (round % 3 === 0) {
      addLog("🔔 Emergency meeting called!");
      setPhase("vote");
    }
  }, [crew, round, killedThisRound, score, addLog, mascot]);

  const reportBody = useCallback(() => {
    setBodyFound(null);
    setPhase("vote");
    addLog("🔔 Body reported! Emergency meeting!");
  }, [addLog]);

  const castVote = useCallback((targetName: string | null) => {
    const aliveCrew = crew.filter((c) => c.alive);
    // AI votes
    const votes: Record<string, number> = {};
    for (const c of aliveCrew) {
      if (c.name === "Red") continue;
      let target: string;
      if (c.isImpostor) {
        // Impostor deflects — vote randomly
        const others = aliveCrew.filter((a) => a.name !== c.name && !a.isImpostor);
        target = others[Math.floor(Math.random() * others.length)]?.name ?? "skip";
      } else {
        // Crew votes based on suspicion or random
        const sus = aliveCrew.filter((a) => a.name !== c.name).sort((a, b) => b.suspicion - a.suspicion);
        target = sus[0]?.name ?? "skip";
      }
      votes[target] = (votes[target] ?? 0) + 1;
    }
    // Player vote
    if (targetName) votes[targetName] = (votes[targetName] ?? 0) + 1;

    // Tally
    let maxVotes = 0;
    let ejected: string | null = null;
    for (const [name, count] of Object.entries(votes)) {
      if (count > maxVotes) { maxVotes = count; ejected = name; }
    }

    if (ejected && maxVotes > Math.floor(aliveCrew.length / 2)) {
      const ejectedCrew = crew.find((c) => c.name === ejected);
      setCrew((c) => c.map((cr) => cr.name === ejected ? { ...cr, alive: false } : cr));
      if (ejectedCrew?.isImpostor) {
        addLog(`🎯 ${ejected} was ejected. They WERE the impostor!`);
        setScore((s) => s + 200);
        setPhase("complete");
        mascot.setMood("cheering");
        const finalScore = Math.min(500, score + 200);
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-117",
          difficulty: "medium", score: finalScore, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
        return;
      } else {
        addLog(`❌ ${ejected} was ejected. They were NOT the impostor...`);
        // Increase suspicion of impostor slightly
        setCrew((c) => c.map((cr) => cr.isImpostor ? { ...cr, suspicion: cr.suspicion + 2 } : cr));
      }
    } else {
      addLog("⏭️ No one was ejected. (Tie or no majority)");
    }

    setPhase("tasks");
    setVoteTarget(null);
  }, [crew, score, addLog, mascot]);

  const tasksDone = tasks.filter((t) => t.done).length;
  const aliveCrew = crew.filter((c) => c.alive);
  const crewInRoom = crew.filter((c) => c.alive && c.room === playerRoom && c.name !== "Red");

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-gray-950 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-red-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Users className="mr-2 inline h-8 w-8" /> Impostor Station
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Social deduction game. Complete 6 tasks while the impostor kills crewmates. Find and vote out the impostor before it&apos;s too late.
            </p>
            <PhysicalButton onClick={startGame}><Users className="mr-2 h-5 w-5" /> Start Game</PhysicalButton>
          </motion.div>
        )}

        {phase === "tasks" && (
          <motion.div key="tasks" className="flex w-full max-w-lg flex-col gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Status */}
            <div className="flex items-center justify-between text-xs text-white/60 bg-black/30 rounded-xl px-3 py-2">
              <span>📍 {playerRoom}</span>
              <span>👥 {aliveCrew.length} alive</span>
              <span>📋 Tasks: {tasksDone}/{tasks.length}</span>
              <span>Round {round}</span>
            </div>

            {/* Task progress bar */}
            <div className="h-2 w-full overflow-hidden rounded bg-black/40">
              <div className="h-full bg-green-500 transition-all" style={{ width: `${(tasksDone / tasks.length) * 100}%` }} />
            </div>

            {/* Crew in room */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full px-2 py-1 text-xs font-bold text-white" style={{ backgroundColor: COLORS[0] }}>You (Red)</span>
              {crewInRoom.map((c) => (
                <span key={c.name} className="rounded-full px-2 py-1 text-xs" style={{ backgroundColor: c.color, color: "#fff" }}>
                  {c.name}
                </span>
              ))}
              {crewInRoom.length === 0 && <span className="text-xs text-white/30">Room is empty</span>}
            </div>

            {/* Tasks available */}
            {tasks.filter((t) => t.room === playerRoom && !t.done).length > 0 && (
              <div className="flex flex-col gap-1">
                {tasks.map((t, i) => t.room === playerRoom && !t.done && (
                  <PhysicalButton key={i} onClick={() => doTask(i)} variant="success">
                    🔧 {t.name}
                  </PhysicalButton>
                ))}
              </div>
            )}

            {/* Room navigation */}
            <div className="grid grid-cols-3 gap-1">
              {ROOMS.filter((r) => r !== playerRoom).map((room) => (
                <button key={room} onClick={() => moveToRoom(room)}
                  className="rounded-lg bg-white/5 px-2 py-1.5 text-xs text-white/60 hover:bg-white/10 transition">
                  {room}
                </button>
              ))}
            </div>

            <PhysicalButton onClick={endTaskPhase} variant="danger">
              <AlertTriangle className="mr-1 h-4 w-4" /> End Round
            </PhysicalButton>

            <div className="h-16 overflow-y-auto rounded-lg bg-black/30 p-2 text-xs text-white/50">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "report" && (
          <motion.div key="report" className="flex flex-col items-center gap-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="rounded-2xl bg-red-950/60 p-6 text-center">
              <p className="text-5xl">💀</p>
              <h2 className="mt-2 text-xl font-bold text-red-400">Body Found!</h2>
              <p className="text-white/70">{bodyFound} was eliminated in {playerRoom}</p>
            </div>
            <PhysicalButton onClick={reportBody} variant="danger">🔔 Report Body</PhysicalButton>
          </motion.div>
        )}

        {phase === "vote" && (
          <motion.div key="vote" className="flex w-full max-w-md flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold text-yellow-400">🗳️ Who is the Impostor?</h2>
            <div className="flex flex-col gap-2 w-full">
              {aliveCrew.filter((c) => c.name !== "Red").map((c) => (
                <PhysicalButton key={c.name} onClick={() => castVote(c.name)} variant="secondary">
                  <span className="inline-block w-4 h-4 rounded-full mr-2" style={{ backgroundColor: c.color }} />
                  Vote {c.name}
                </PhysicalButton>
              ))}
              <PhysicalButton onClick={() => castVote(null)} variant="primary">
                ⏭️ Skip Vote
              </PhysicalButton>
            </div>
            <div className="h-16 overflow-y-auto rounded-lg bg-black/30 p-2 text-xs text-white/50 w-full">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{score >= 200 ? "🎉" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-red-400">
                {score >= 200 ? "Crew Wins!" : "Impostor Wins"}
              </h2>
              <p className="mt-2 text-white/60">Tasks: {tasksDone}/{tasks.length} | Score: {score}</p>
              <p className="text-white/40 text-sm">Rounds survived: {round}</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> Play Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
