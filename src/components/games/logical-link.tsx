"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMascot } from "@/components/experience/MascotHost";
import { JUICY_VARIANTS, JUICY_SPRINGS } from "@/lib/experience/interaction-primitives";
import PhysicalButton from "@/components/experience/PhysicalButton";
import JuicyStreak from "@/components/experience/JuicyStreak";
import { hapticSuccess, hapticSelection, hapticCelebration } from "@/lib/platform/haptics";
import { Cpu, Terminal, Square, Circle, Triangle, type LucideIcon } from "lucide-react";
import {
    createLegacySessionId,
    emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* --- Logical Link Content --- */
type Gate = {
    id: number;
    type: "AND" | "OR" | "NOT" | "XOR" | "NAND";
    color: string;
    icon: LucideIcon;
};

const GATE_TYPES: Omit<Gate, "id">[] = [
    { type: "AND", color: "bg-cyan-500", icon: Square },
    { type: "OR", color: "bg-magenta-500", icon: Circle },
    { type: "XOR", color: "bg-amber-400", icon: Triangle },
    { type: "NOT", color: "bg-rose-500", icon: Cpu },
    { type: "NAND", color: "bg-emerald-500", icon: Terminal },
];

const getTimestampMs = () => new Date().getTime();

const getElapsedMs = (startedAtMs: number) => Math.max(0, getTimestampMs() - startedAtMs);

const createGrid = (): Gate[][] => {
    const newGrid: Gate[][] = [];
    for (let rowIndex = 0; rowIndex < 6; rowIndex += 1) {
        newGrid[rowIndex] = [];
        for (let columnIndex = 0; columnIndex < 6; columnIndex += 1) {
            newGrid[rowIndex][columnIndex] = {
                id: Math.random(),
                ...GATE_TYPES[Math.floor(Math.random() * GATE_TYPES.length)],
            };
        }
    }
    return newGrid;
};

export default function LogicalLink() {
    const { setMood, setMessage } = useMascot();
    const [grid, setGrid] = useState<Gate[][]>(() => createGrid());
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const sessionIdRef = useRef<string>(createLegacySessionId());
    const runStartedAtRef = useRef<number>(0);
    const interactionCountRef = useRef<number>(0);
    const completionEmittedRef = useRef<boolean>(false);

    const resetRunTracking = useCallback(() => {
        sessionIdRef.current = createLegacySessionId();
        runStartedAtRef.current = getTimestampMs();
        interactionCountRef.current = 0;
        completionEmittedRef.current = false;
    }, []);

    useEffect(() => {
        setMessage("Welcome to Logical Link. Match synchronous gates to stabilize the digital core! 🤖🔌");
        setMood("happy");
        resetRunTracking();
    }, [resetRunTracking, setMessage, setMood]);

    const handleTileClick = (r: number, c: number) => {
        interactionCountRef.current += 1;
        void hapticSelection();
        const type = grid[r][c].type;

        // Find connected neighbors of same type
        const connected: { r: number, c: number }[] = [];
        const queue = [{ r, c }];
        const visited = new Set<string>();
        visited.add(`${r},${c}`);

        while (queue.length > 0) {
            const current = queue.shift()!;
            connected.push(current);

            const neighbors = [
                { r: current.r - 1, c: current.c },
                { r: current.r + 1, c: current.c },
                { r: current.r, c: current.c - 1 },
                { r: current.r, c: current.c + 1 },
            ];

            for (const n of neighbors) {
                if (n.r >= 0 && n.r < 6 && n.c >= 0 && n.c < 6 && !visited.has(`${n.r},${n.c}`) && grid[n.r][n.c].type === type) {
                    visited.add(`${n.r},${n.c}`);
                    queue.push(n);
                }
            }
        }

        if (connected.length >= 3) {
            // Match found!
            const nextScore = score + connected.length * 10;
            const nextStreak = streak + 1;
            void hapticSuccess();
            setScore(nextScore);
            setStreak(nextStreak);

            setGrid(prev => {
                const newGrid = prev.map(row => [...row]);
                connected.forEach(p => {
                    newGrid[p.r][p.c] = {
                        id: Math.random(),
                        ...GATE_TYPES[Math.floor(Math.random() * GATE_TYPES.length)]
                    };
                });
                return newGrid;
            });

            if (nextStreak >= 4 && nextStreak % 4 === 0 && !completionEmittedRef.current) {
                completionEmittedRef.current = true;
                emitLegacyGameComplete({
                    sessionId: sessionIdRef.current,
                    gameId: "logic",
                    elapsedMs: getElapsedMs(runStartedAtRef.current),
                    interactions: Math.max(1, interactionCountRef.current),
                    score: nextScore,
                    maxScore: 3600,
                    source: "component",
                    occurredAt: new Date().toISOString(),
                });
                resetRunTracking();
            }

            if (connected.length >= 5) {
                void hapticCelebration();
                setMood("happy");
                setMessage(`Circuit overflow! You matched ${connected.length} gates! ⚡✨`);
            }
        }
    };

    return (
        <div className="relative min-h-[700px] w-full flex flex-col items-center justify-center p-8 bg-black overflow-hidden rounded-[3rem] border-4 border-slate-900 shadow-2xl">
            {/* 4K Background */}
            <div className="absolute inset-0 opacity-40">
                <img
                    src="/cyber_logic_matching_bg_1772427624067.png"
                    alt="Cyber Logic"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Header */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
                <div className="flex flex-col">
                    <span className="text-xs font-black uppercase text-magenta-400 tracking-[0.4em]">Subsystem Linked</span>
                    <h2 className="text-5xl font-black italic text-white leading-none tracking-tighter">LOGICAL LINK</h2>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <JuicyStreak count={streak} />
                    <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-2xl backdrop-blur-xl">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Data Packets</span>
                        <span className="text-2xl font-black text-white">{score}</span>
                    </div>
                </div>
            </div>

            {/* The Logical Grid */}
            <div className="relative z-10 grid grid-cols-6 gap-2 p-2 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-3xl shadow-[0_0_100px_rgba(255,0,255,0.1)]">
                {grid.map((row, r) => row.map((gate, c) => (
                    <motion.div
                        key={gate.id}
                        layout
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                        whileTap={{ scale: 0.9 }}
                        transition={JUICY_SPRINGS.bouncy}
                        className={`w-14 h-14 rounded-xl ${gate.color} flex items-center justify-center cursor-pointer shadow-lg border border-white/20`}
                        onClick={() => handleTileClick(r, c)}
                    >
                        <gate.icon className="text-white w-6 h-6" />
                    </motion.div>
                )))}
            </div>

            {/* Instruction Footer */}
            <div className="mt-12 flex gap-8 z-10">
                <div className="flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-2 rounded-2xl backdrop-blur-md">
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Goal</span>
                    <span className="text-[10px] font-black text-white uppercase italic">Connect 3+ Matching Gates</span>
                </div>
            </div>

            {/* Pixel's Analytical HUD */}
            <div className="absolute bottom-10 left-10 opacity-30 flex items-center gap-4">
                <div className="flex flex-col gap-1">
                    {[1, 2, 3].map(i => (
                        <motion.div
                            key={i}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="h-[1px] w-12 bg-magenta-500"
                        />
                    ))}
                </div>
                <span className="text-[8px] font-black text-magenta-500 uppercase tracking-widest">Pixel Digital Core: Synchronized</span>
            </div>
        </div>
    );
}
