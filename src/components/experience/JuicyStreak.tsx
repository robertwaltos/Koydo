"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";

interface JuicyStreakProps {
    count: number;
    className?: string;
}

/**
 * JuicyStreak: A dynamic streak counter that ignites as the count increases.
 * Includes "Juicy" physics-based feedback and celebratory particles.
 */
export default function JuicyStreak({ count, className = "" }: JuicyStreakProps) {
    if (count <= 0) return null;

    const getIntensity = () => {
        if (count < 3) return "text-orange-400";
        if (count < 7) return "text-orange-500 shadow-orange-500/50";
        return "text-red-500 shadow-red-500/50";
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -20 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                    y: [0, -10, 0]
                }}
                transition={{ duration: 0.5 }}
                exit={{ scale: 0, opacity: 0 }}
                className={`flex items-center gap-2 rounded-full border-2 bg-white px-4 py-2 shadow-lg dark:bg-stone-900 ${getIntensity()} ${className}`}
                style={{
                    borderColor: "currentColor",
                    boxShadow: count >= 5 ? "0 0 20px rgba(255, 69, 0, 0.2)" : "none"
                }}
            >
                <div className="relative">
                    <Flame className={`h-6 w-6 ${count >= 5 ? "animate-pulse" : ""}`} fill="currentColor" />

                    {count >= 3 && (
                        <motion.div
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0, 0.5]
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute inset-0 bg-orange-400 blur-lg rounded-full"
                        />
                    )}
                </div>

                <div className="flex flex-col leading-none">
                    <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Streak</span>
                    <motion.span
                        key={count}
                        initial={{ scale: 1.5, filter: "blur(4px)" }}
                        animate={{ scale: 1, filter: "blur(0px)" }}
                        className="text-2xl font-black italic"
                    >
                        {count}
                    </motion.span>
                </div>

                {/* Celebration Particles */}
                <motion.div
                    key={`particles-${count}`}
                    className="absolute inset-0 overflow-visible pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 0, y: 0, scale: 1 }}
                                animate={{
                                    x: (i - 2.5) * 20,
                                    y: -40 - ((i * 13 + count * 7) % 40),
                                    scale: 0,
                                    rotate: (i * 77 + count * 23) % 360
                                }}
                                className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-orange-400"
                            />
                        ))}
                    </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
