"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Koydo Lo-Fi (Study Beats)
 * 
 * Built strictly following the "Zen Productivity Minimalist" Persona.
 * Features brutalist minimalism, monochromatic palette, and zero distraction.
 */
export default function LofiPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  return (
    <div className="relative flex min-h-screen flex-col bg-[#fcfcfc] text-zinc-900 selection:bg-zinc-200">
      
      {/* ── Immersive Video/GIF Placeholder ── */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.03] grayscale pointer-events-none">
         {/* In production, this would be a slow-pan cinematic video of a study room or nature */}
         <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070')] bg-cover bg-center" />
      </div>

      {/* ── Navigation ── */}
      <header className="relative z-10 flex h-24 shrink-0 items-center justify-between px-12">
        <div className="text-sm font-bold tracking-tight uppercase">Koydo Lo-Fi</div>
        <Link href="/dashboard" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors duration-500">
          EXIT
        </Link>
      </header>

      {/* ── Player Section ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center -mt-12">
        
        {/* Track Info */}
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-4">Now Playing</p>
          <h1 className="text-4xl font-light tracking-tight text-zinc-900">Midnight Library</h1>
          <p className="text-sm text-zinc-400 mt-2 font-serif italic">Koydo Originals Vol. 4</p>
        </div>

        {/* Play Control */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="group relative h-32 w-32 rounded-full border border-zinc-200 bg-white flex items-center justify-center transition-all duration-700 hover:border-zinc-400 hover:scale-105 active:scale-95 shadow-sm"
        >
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-zinc-900"><rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1 text-zinc-900"><path d="M5 3L19 12L5 21V3Z" fill="currentColor"/></svg>
          )}
          
          {/* Animated Pulse when playing */}
          {isPlaying && (
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-zinc-900/10"
            />
          )}
        </button>

        {/* Volume Slider */}
        <div className="mt-20 flex flex-col items-center gap-4 w-48">
          <div className="flex w-full justify-between text-[10px] text-zinc-300 font-bold uppercase tracking-widest">
            <span>Vol</span>
            <span>{volume}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="w-full appearance-none bg-zinc-100 h-[1.5px] rounded-full accent-zinc-900 cursor-pointer"
          />
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 shrink-0 p-12 flex items-center justify-between border-t border-zinc-50">
        <div className="flex gap-8">
          {["Rain", "Waves", "White Noise"].map(sound => (
            <button key={sound} className="text-[10px] uppercase tracking-widest text-zinc-300 hover:text-zinc-900 transition-colors font-bold">
              {sound}
            </button>
          ))}
        </div>
        
        <div className="text-right">
          <p className="text-[10px] font-medium tracking-[0.2em] text-zinc-300">
            SYNCED TO <span className="text-zinc-900">STUDY SESSIONS</span>
          </p>
        </div>
      </footer>

    </div>
  );
}
