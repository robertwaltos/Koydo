"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme/provider";

export default function DashboardAgeShellBanner() {
  const { ageGroup } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (ageGroup === "tiny-explorer" || ageGroup === "young-adventurer") {
    // ── THE PLAYROOM / GROWING GARDEN ──
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-8 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-sky-100 to-emerald-100 p-8 sm:p-12 shadow-[0_16px_40px_rgba(52,211,153,0.15)] border-4 border-white"
      >
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full blur-2xl opacity-60 animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-emerald-300 rounded-full blur-3xl opacity-40" />

        <div className="relative z-10 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center justify-center p-4 bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-sm border border-white">
            <span className="text-6xl drop-shadow-md">🌱</span>
          </div>
          
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-emerald-900 tracking-tight font-fredoka">
              Your garden is growing!
            </h1>
            <p className="mt-3 text-lg font-bold text-emerald-700 font-nunito">
              You&apos;ve learned so much. Ready to water the plants?
            </p>
          </div>

          <Link 
            href="/explore?stage=pre-k" 
            className="mt-4 group relative inline-flex items-center justify-center px-10 py-5 font-fredoka text-2xl font-black text-white bg-emerald-500 rounded-[3rem] overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_8px_0_#047857] hover:shadow-[0_6px_0_#047857] hover:translate-y-1 active:shadow-none active:translate-y-2"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-3">
              Play Next 🌟
            </span>
          </Link>
        </div>
      </motion.div>
    );
  }

  if (ageGroup === "teen-mode") {
    // ── THE FOCUS ZONE / BENTO BOX ──
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* Main greeting bento */}
        <div className="md:col-span-2 relative overflow-hidden rounded-[2rem] bg-zinc-950 p-8 border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]" />
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-2">Deep Focus</p>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
                Welcome back. <br/><span className="text-zinc-400">Let&apos;s get into flow.</span>
              </h1>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link 
                href="/explore?stage=high-school" 
                className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-md border border-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Resume Module →
              </Link>
            </div>
          </div>
        </div>

        {/* Streak/Stats bento */}
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 p-8 border border-white/5 shadow-[0_16px_48px_rgba(0,0,0,0.4)] flex flex-col justify-center items-center text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-inner">
              <span className="text-3xl">🔥</span>
            </div>
            <p className="text-4xl font-black text-white tabular-nums tracking-tighter">12 Day</p>
            <p className="text-sm font-semibold text-zinc-400 mt-1 uppercase tracking-widest">Streak</p>
          </div>
        </div>
      </motion.div>
    );
  }

  // ── ADULT PRO / STANDARD ──
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 backdrop-blur-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-5">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 text-2xl shadow-inner">
          💼
        </span>
        <div>
          <p className="text-2xl font-bold tracking-tight text-zinc-900 font-inter">
            Welcome back to Koydo.
          </p>
          <p className="text-sm text-zinc-500 font-inter mt-1">Your personalized learning plan is ready.</p>
        </div>
      </div>
      <Link 
        href="/explore" 
        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-transparent bg-[#635BFF] px-6 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#524BDB] hover:shadow-md"
      >
        Continue learning →
      </Link>
    </div>
  );
}


