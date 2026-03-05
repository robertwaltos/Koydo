"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AdaptiveBackground from "./adaptive-background";
import VoicePicker from "@/app/explore/_components/voice-picker";
import type { AgeGroupTheme } from "@/lib/theme/provider";

interface LandingHeroInteractiveProps {
  strings: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    body: string;
    cta: string;
  };
}

const AGE_SLIDER_STAGES = [
  { id: "tiny-explorer", label: "Ages 1-5", icon: "🧸" },
  { id: "young-adventurer", label: "Ages 6-11", icon: "🗺️" },
  { id: "teen-mode", label: "Ages 12-17", icon: "💻" },
  { id: "adult-pro", label: "Educators & Parents", icon: "📊" },
] as const;

export default function LandingHeroInteractive({ strings }: LandingHeroInteractiveProps) {
  const [activeTheme, setActiveTheme] = useState<AgeGroupTheme>("tiny-explorer");

  const getThemeStyles = (theme: AgeGroupTheme) => {
    switch (theme) {
      case "tiny-explorer":
        return {
          h1: "font-fredoka text-6xl md:text-7xl font-bold tracking-wide text-zinc-900",
          sub: "font-nunito text-lg md:text-xl text-zinc-700",
          button: "bg-emerald-400 hover:bg-emerald-300 text-zinc-900 rounded-[40px] shadow-[0_12px_32px_rgba(52,211,153,0.6)] hover:shadow-[0_16px_40px_rgba(52,211,153,0.8)] px-10 py-5 font-fredoka text-2xl border-b-4 border-emerald-500 active:border-b-0 active:translate-y-1",
          card: "bg-white/40 border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)]",
        };
      case "young-adventurer":
        return {
          h1: "font-nunito text-6xl md:text-7xl font-black tracking-tight text-zinc-900",
          sub: "font-inter text-lg md:text-xl text-zinc-700",
          button: "bg-blue-500 hover:bg-blue-400 text-white rounded-[24px] shadow-[0_12px_32px_rgba(59,130,246,0.6)] hover:shadow-[0_16px_40px_rgba(59,130,246,0.8)] px-9 py-4 font-nunito text-xl uppercase tracking-wider font-bold transition-all hover:-translate-y-1",
          card: "bg-white/50 border-white/50 shadow-[0_8px_32px_rgba(59,130,246,0.1)]",
        };
      case "teen-mode":
        return {
          h1: "font-inter text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-lg",
          sub: "font-inter text-lg md:text-xl text-zinc-300",
          button: "bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl shadow-[0_8px_32px_rgba(168,85,247,0.4)] hover:shadow-[0_16px_48px_rgba(6,182,212,0.6)] px-8 py-3.5 font-inter text-lg font-bold transition-all hover:scale-105",
          card: "bg-black/40 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
        };
      case "adult-pro":
      default:
        return {
          h1: "font-inter text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900",
          sub: "font-inter text-base md:text-lg text-zinc-600",
          button: "bg-[#635BFF] hover:bg-[#524BDB] text-white rounded-md shadow-sm border border-transparent px-6 py-3 font-inter text-sm font-medium transition-all hover:shadow-[0_4px_12px_rgba(99,91,255,0.3)]",
          card: "bg-white/80 border-zinc-200/50 shadow-sm",
        };
    }
  };

  const currentStyles = getThemeStyles(activeTheme);

  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden flex flex-col justify-center">
      {/* The Dynamic AI Background Engine */}
      <AdaptiveBackground ageGroup={activeTheme} />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Adaptive Text */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTheme}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-[580px]"
              >
                <p className={`text-[11px] font-extrabold uppercase tracking-[0.26em] ${activeTheme === 'teen-mode' ? 'text-cyan-400' : 'text-emerald-700'} mb-4`}>
                  {strings.eyebrow}
                </p>
                <h1 className={currentStyles.h1}>
                  {strings.titlePrefix} <span className={activeTheme === 'teen-mode' ? 'text-purple-400' : 'text-emerald-500'}>{strings.titleHighlight}</span>
                </h1>
                <p className={`mt-6 max-w-[48ch] leading-relaxed ${currentStyles.sub}`}>
                  {strings.body}
                </p>
                
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/explore" className={currentStyles.button}>
                    {strings.cta}
                  </Link>
                  <VoicePicker />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Age Slider & Morphing App Mockup */}
          <div className="flex flex-col items-center lg:items-end justify-center">
            
            {/* The Morphing Mockup Window */}
            <motion.div 
              layout
              className={`relative w-full max-w-md aspect-[4/3] rounded-[2rem] border backdrop-blur-2xl p-6 flex flex-col justify-between overflow-hidden transition-colors duration-700 ${currentStyles.card}`}
            >
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${activeTheme === 'teen-mode' ? 'bg-white/10' : 'bg-white/50'} shadow-inner`}>
                  {AGE_SLIDER_STAGES.find(s => s.id === activeTheme)?.icon}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${activeTheme === 'teen-mode' ? 'bg-purple-500/20 text-purple-300' : 'bg-emerald-500/10 text-emerald-700'}`}>
                  {AGE_SLIDER_STAGES.find(s => s.id === activeTheme)?.label}
                </div>
              </div>

              <div className="space-y-3">
                <div className={`h-4 w-3/4 rounded-full ${activeTheme === 'teen-mode' ? 'bg-white/10' : 'bg-black/10'}`} />
                <div className={`h-4 w-1/2 rounded-full ${activeTheme === 'teen-mode' ? 'bg-white/10' : 'bg-black/10'}`} />
                <div className="pt-4">
                   <div className={`h-16 w-full rounded-2xl ${activeTheme === 'teen-mode' ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20' : 'bg-gradient-to-r from-emerald-400/20 to-teal-400/20'}`} />
                </div>
              </div>
            </motion.div>

            {/* The Age Slider UI */}
            <div className="mt-12 w-full max-w-md bg-white/40 backdrop-blur-xl border border-white/50 p-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex justify-between relative">
               {/* Animated active pill background */}
               <motion.div 
                  className="absolute inset-y-2 rounded-full bg-white shadow-md z-0"
                  layoutId="activeThemePill"
                  initial={false}
                  animate={{
                     width: `${100 / AGE_SLIDER_STAGES.length}%`,
                     x: `${AGE_SLIDER_STAGES.findIndex(s => s.id === activeTheme) * 100}%`
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
               />
               
               {AGE_SLIDER_STAGES.map((stage) => (
                  <button
                    key={stage.id}
                    onClick={() => setActiveTheme(stage.id as AgeGroupTheme)}
                    className={`relative z-10 flex-1 py-3 text-xs sm:text-sm font-bold transition-colors ${activeTheme === stage.id ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
                  >
                    <span className="hidden sm:inline">{stage.label}</span>
                    <span className="sm:hidden">{stage.icon}</span>
                  </button>
               ))}
            </div>

            <p className={`mt-4 text-xs font-semibold uppercase tracking-widest ${activeTheme === 'teen-mode' ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Drag or tap to shift the timeline
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

