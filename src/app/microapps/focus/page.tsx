"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Koydo Focus (Pomodoro Timer)
 * 
 * Built strictly following the "Zen Productivity Minimalist" Persona.
 * Features brutalist minimalism, monochromatic palettes with one accent,
 * and silent/invisible interactions.
 */
export default function FocusDashboard() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"focus" | "break">("focus");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      
      // ── Record the completed session ───────────────────────────────────────
      const duration = mode === "focus" ? 25 : 5;
      fetch("/api/microapps/focus/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, duration }),
      }).catch(err => console.error("Failed to sync session:", err));

      // Trigger a soft vibe/sound here if desired
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, mode]);

  const toggleTimer = () => setIsRunning(!isRunning);
  
  const switchMode = (newMode: "focus" | "break") => {
    setMode(newMode);
    setIsRunning(false);
    setTimeLeft(newMode === "focus" ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-zinc-900 font-sans selection:bg-zinc-200 flex flex-col">
      {/* ── Top Navigation ── */}
      <header className="flex h-24 shrink-0 items-center justify-between px-12">
        <div className="flex items-center gap-6">
          <div className="text-sm font-semibold tracking-tight">Koydo Focus</div>
        </div>
        <nav className="flex items-center gap-8">
          <Link href="/dashboard" className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors duration-500">
            Exit
          </Link>
        </nav>
      </header>

      {/* ── Main Timer Area ── */}
      <section className="flex-1 flex flex-col items-center justify-center -mt-12">
        
        {/* Mode Selector */}
        <div className="flex items-center gap-8 mb-16">
          <button 
            onClick={() => switchMode("focus")}
            className={`text-sm tracking-widest uppercase transition-all duration-500 ${mode === "focus" ? "text-zinc-900 font-bold" : "text-zinc-400 hover:text-zinc-600"}`}
          >
            Focus
          </button>
          <button 
            onClick={() => switchMode("break")}
            className={`text-sm tracking-widest uppercase transition-all duration-500 ${mode === "break" ? "text-orange-600 font-bold" : "text-zinc-400 hover:text-zinc-600"}`}
          >
            Break
          </button>
        </div>

        {/* Timer Display */}
        <div className="relative mb-20 cursor-pointer" onClick={toggleTimer}>
          <motion.h1 
            key={timeLeft}
            initial={{ opacity: 0.8, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-[12rem] font-light tracking-tighter leading-none tabular-nums ${mode === "break" ? "text-orange-600" : "text-zinc-900"}`}
          >
            {formatTime(timeLeft)}
          </motion.h1>
          
          {/* Subtle pause indicator */}
          {!isRunning && (
            <div className="absolute inset-x-0 -bottom-8 flex justify-center">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-300 font-medium">Click to start</span>
            </div>
          )}
        </div>

      </section>

      {/* ── Bottom Section (Habits/Stats) ── */}
      <footer className="shrink-0 p-12 border-t border-zinc-100 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Today's Progress</p>
          <div className="flex items-center gap-6">
            <div>
              <span className="text-2xl font-medium">3</span>
              <span className="text-sm text-zinc-500 ml-2">Sessions</span>
            </div>
            <div className="h-6 w-px bg-zinc-200" />
            <div>
              <span className="text-2xl font-medium">75</span>
              <span className="text-sm text-zinc-500 ml-2">Minutes</span>
            </div>
          </div>
        </div>
        
        {/* MMO Hook */}
        <div className="text-right">
          <p className="text-xs text-zinc-500 mb-1">Session complete rewards synced to</p>
          <p className="text-sm font-medium">Koydo Profile</p>
        </div>
      </footer>
    </main>
  );
}
