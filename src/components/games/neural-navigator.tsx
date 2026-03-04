"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMascot } from "@/components/experience/MascotHost";
import { JUICY_VARIANTS } from "@/lib/experience/interaction-primitives";
import PhysicalButton from "@/components/experience/PhysicalButton";
import JuicyStreak from "@/components/experience/JuicyStreak";
import JuicyConfetti from "@/components/experience/JuicyConfetti";
import { hapticSuccess, hapticError, hapticCelebration } from "@/lib/platform/haptics";
import { Brain, Zap } from "lucide-react";
import {
    createLegacySessionId,
    emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* --- Types --- */
type Node = {
    id: number;
    x: number;
    y: number;
    active: boolean;
};

const getTimestampMs = () => new Date().getTime();

const getElapsedMs = (startedAtMs: number) => Math.max(0, getTimestampMs() - startedAtMs);

const getRandomUnit = () => {
    if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
        const values = new Uint32Array(1);
        crypto.getRandomValues(values);
        return values[0] / 0x100000000;
    }
    return Math.random();
};

const getRandomInt = (max: number) => {
    if (max <= 0) {
        return 0;
    }
    return Math.floor(getRandomUnit() * max);
};

const createNodes = (level: number) => {
    const newNodes: Node[] = [];
    const nodeCount = 5 + Math.floor(level / 2);
    for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
            id: i,
            x: 10 + getRandomUnit() * 80,
            y: 10 + getRandomUnit() * 80,
            active: false
        });
    }
    return newNodes;
};

export default function NeuralNavigator() {
    const { setMood, setMessage } = useMascot();
    const [nodes, setNodes] = useState<Node[]>(() => createNodes(1));
    const [sequence, setSequence] = useState<number[]>([]);
    const [userSequence, setUserSequence] = useState<number[]>([]);
    const [gameState, setGameState] = useState<"idle" | "showing" | "playing" | "success" | "fail">("idle");
    const [level, setLevel] = useState(1);
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

    const generateNodes = useCallback(() => {
        setNodes(createNodes(level));
    }, [level]);

    // Initial message from Terra
    useEffect(() => {
        setMessage("Welcome to the Neural Lab! Let's map some synapses. 🧠");
        setMood("happy");
        resetRunTracking();
    }, [resetRunTracking, setMessage, setMood]);

    const startRound = () => {
        if (completionEmittedRef.current || runStartedAtRef.current <= 0) {
            resetRunTracking();
        }
        const newSequence: number[] = [];
        const length = 3 + Math.floor(level / 3);
        const nodeCount = nodes.length;

        for (let i = 0; i < length; i++) {
            newSequence.push(getRandomInt(nodeCount));
        }

        setSequence(newSequence);
        setUserSequence([]);
        setGameState("showing");
        playSequence(newSequence);
    };

    const playSequence = async (seq: number[]) => {
        setMessage("Watch closely... 👁️");
        setMood("thinking");

        for (let i = 0; i < seq.length; i++) {
            const nodeId = seq[i];
            setNodes(prev => prev.map(n => n.id === nodeId ? { ...n, active: true } : n));
            await new Promise(r => setTimeout(r, 600));
            setNodes(prev => prev.map(n => n.id === nodeId ? { ...n, active: false } : n));
            await new Promise(r => setTimeout(r, 200));
        }

        setGameState("playing");
        setMessage("Your turn! Re-map the path. ⚡");
    };

    const handleNodeClick = (nodeId: number) => {
        if (gameState !== "playing") return;
        interactionCountRef.current += 1;

        const expectedId = sequence[userSequence.length];

        if (nodeId === expectedId) {
            void hapticSuccess();
            const newUserSeq = [...userSequence, nodeId];
            setUserSequence(newUserSeq);

            if (newUserSeq.length === sequence.length) {
                handleSuccess();
            }
        } else {
            handleFail();
        }
    };

    const handleSuccess = () => {
        const nextStreak = streak + 1;
        const nextLevel = level + 1;
        setGameState("success");
        setStreak(nextStreak);
        setLevel(nextLevel);
        setMood("happy");
        setMessage("Perfect connection! The brain is firing! 🔥");
        void hapticCelebration();

        if (nextStreak >= 3 && nextStreak % 3 === 0 && !completionEmittedRef.current) {
            completionEmittedRef.current = true;
            emitLegacyGameComplete({
                sessionId: sessionIdRef.current,
                gameId: "neural",
                elapsedMs: getElapsedMs(runStartedAtRef.current),
                interactions: Math.max(1, interactionCountRef.current),
                score: nextLevel * 120 + nextStreak * 40,
                maxScore: 1500,
                source: "component",
                occurredAt: new Date().toISOString(),
            });
        }

        setTimeout(() => {
            setGameState("idle");
            generateNodes();
        }, 2000);
    };

    const handleFail = () => {
        setGameState("fail");
        setStreak(0);
        setMood("sad");
        setMessage("Synapse broken... Let's try that again. 🧬");
        void hapticError();

        setTimeout(() => {
            setGameState("idle");
            setUserSequence([]);
        }, 2000);
    };

    return (
        <div className="relative min-h-[600px] w-full flex flex-col items-center justify-center p-8 bg-slate-900 overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
            {/* Background Bio-Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
            </div>

            <JuicyConfetti active={gameState === "success"} durationMs={1500} />

            {/* Header Stats */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
                <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Neural Complexity</span>
                    <span className="text-3xl font-black italic text-white leading-none">Level {level}</span>
                </div>
                <JuicyStreak count={streak} />
            </div>

            {/* The Brain Map Area */}
            <div className="relative w-full h-[400px] mt-12 bg-black/40 rounded-[2.5rem] border border-white/5 backdrop-blur-sm overflow-hidden">
                <AnimatePresence>
                    {nodes.map((node) => (
                        <motion.button
                            key={node.id}
                            style={{ left: `${node.x}%`, top: `${node.y}%` }}
                            variants={JUICY_VARIANTS.pressable}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => handleNodeClick(node.id)}
                            className="absolute -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${node.active || (gameState === "playing" && userSequence.includes(node.id))
                                    ? "bg-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.8)] scale-110"
                                    : "bg-white/10 hover:bg-white/20 border border-white/10"
                                }`}>
                                <Zap className={`w-5 h-5 ${node.active ? "text-white" : "text-emerald-500/50"}`} />

                                {/* Pulse Effect */}
                                {node.active && (
                                    <motion.div
                                        initial={{ scale: 1, opacity: 1 }}
                                        animate={{ scale: 2, opacity: 0 }}
                                        className="absolute inset-0 rounded-full bg-emerald-400"
                                    />
                                )}
                            </div>
                        </motion.button>
                    ))}
                </AnimatePresence>

                {/* Connection lines (Simulated simplified) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    {/* In a real production app, we'd draw lines between nodes here */}
                </svg>
            </div>

            {/* Game Controls */}
            <div className="mt-8 z-10">
                <AnimatePresence mode="wait">
                    {gameState === "idle" && (
                        <motion.div
                            key="start-btn"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <PhysicalButton
                                onClick={startRound}
                                className="bg-emerald-600 px-12 h-16 rounded-2xl text-xl"
                            >
                                FIRE NEURONS ⚡
                            </PhysicalButton>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Terra's Hint Tooltip */}
            <div className="absolute bottom-8 left-8 flex items-center gap-4 bg-emerald-950/50 border border-emerald-500/20 px-6 py-3 rounded-2xl backdrop-blur-md">
                <Brain className="text-emerald-400 w-5 h-5" />
                <span className="text-xs font-bold text-emerald-200">Terra is observing your synaptic patterns.</span>
            </div>
        </div>
    );
}
