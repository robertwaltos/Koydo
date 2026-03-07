"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * Koydo Lo-Fi (Study Beats) — High Fidelity Edition
 * 
 * Built strictly following the "Zen Productivity Minimalist" Persona.
 * Includes: Karaoke Mode, CC BY/CC0 Track Integration, Sharing Drawer.
 */
export default function LofiPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isKaraokeOpen, setKaraokeOpen] = useState(false);
  const [isShareOpen, setShareOpen] = useState(false);
  const [volume, setVolume] = useState(50);
  const [activeCategory, setActiveCategory] = useState("Nature Lo-Fi");
  const [tracks, setTracks] = useState<any[]>([]);
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/microapps/lofi/tracks?category=${activeCategory}`);
        const data = await res.json();
        setTracks(data);
        if (data.length > 0 && !currentTrack) {
          setCurrentTrack(data[0]);
        }
      } catch (err) {
        console.error("Failed to fetch lofi tracks:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTracks();
  }, [activeCategory]);

  const categories = [
    { name: "Nature Lo-Fi", desc: "CC0 field recordings" },
    { name: "Jazzy Lo-Fi", desc: "CC BY Urban Beats" },
    { name: "Cinematic Study", desc: "Scott Buckley Orchestral" },
    { name: "Deep Focus", desc: "Solfeggio 528Hz" },
    { name: "Flamenco Lo-Fi", desc: "Spanish Guitar Focus" }
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-[#fcfcfc] text-zinc-900 selection:bg-zinc-200 overflow-hidden">
      
      {/* ── Immersive Background (Video/Vibe) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.04] grayscale pointer-events-none">
         <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1516280440614-37939bbdd4f1?q=80&w=2070')] bg-cover bg-center" />
      </div>

      {/* ── Navigation ── */}
      <header className="relative z-10 flex h-24 shrink-0 items-center justify-between px-12 border-b border-zinc-100/50 backdrop-blur-sm bg-white/30">
        <div className="text-sm font-bold tracking-tight uppercase">Koydo Lo-Fi</div>
        
        <div className="hidden lg:flex gap-12">
          {categories.map(cat => (
            <button 
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === cat.name ? "text-zinc-900" : "text-zinc-300 hover:text-zinc-500"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <button onClick={() => setShareOpen(true)} className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Share</button>
          <Link href="/dashboard" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors duration-500">EXIT</Link>
        </div>
      </header>

      {/* ── Main Content Area ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center -mt-12 px-6">
        
        <AnimatePresence mode="wait">
          {!isKaraokeOpen ? (
            <motion.div 
              key="player"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-4">{activeCategory}</p>
              <h1 className="text-5xl font-light tracking-tighter text-zinc-900 mb-2">{currentTrack.title}</h1>
              <p className="text-sm text-zinc-400 font-serif italic mb-12">{currentTrack.artist}</p>

              {/* Play Control */}
              <div className="flex flex-col items-center gap-12">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="group relative h-40 w-40 rounded-full border border-zinc-200 bg-white flex items-center justify-center transition-all duration-700 hover:border-zinc-400 hover:scale-105 active:scale-95 shadow-sm"
                >
                  {isPlaying ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-zinc-900"><rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/></svg>
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="ml-1 text-zinc-900"><path d="M5 3L19 12L5 21V3Z" fill="currentColor"/></svg>
                  )}
                  {isPlaying && (
                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 rounded-full border border-zinc-900/10" />
                  )}
                </button>

                <button 
                  onClick={() => setKaraokeOpen(true)}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 hover:text-zinc-900 transition-all border border-zinc-100 rounded-full px-6 py-2"
                >
                  Enter Karaoke Mode
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="karaoke"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-3xl text-center"
            >
              <div className="space-y-12">
                {currentTrack.lyrics.map((line, i) => (
                  <p key={i} className={`text-3xl font-light tracking-tight transition-all duration-1000 ${i === 0 ? "text-zinc-900 scale-110" : "text-zinc-200"}`}>
                    {line}
                  </p>
                ))}
              </div>
              <button 
                onClick={() => setKaraokeOpen(false)}
                className="mt-20 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 hover:text-zinc-900 transition-all"
              >
                Return to Player
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* ── Volume & Metadata Footer ── */}
      <footer className="relative z-10 shrink-0 p-12 flex items-center justify-between border-t border-zinc-50 bg-[#fcfcfc]/80 backdrop-blur-md">
        <div className="flex gap-12 items-center">
          <div className="flex items-center gap-4 w-32">
            <span className="text-[10px] text-zinc-300 font-bold uppercase">Vol</span>
            <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(parseInt(e.target.value))} className="w-full appearance-none bg-zinc-100 h-[1.5px] rounded-full accent-zinc-900 cursor-pointer" />
          </div>
          <div className="h-4 w-px bg-zinc-100" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">{currentTrack.license}</span>
        </div>
        
        <div className="text-right">
          <p className="text-[10px] font-medium tracking-[0.2em] text-zinc-300 uppercase">
            Streaming Status <span className="text-zinc-900 ml-2">LOSSLESS HI-RES</span>
          </p>
        </div>
      </footer>

      {/* ── Share Drawer ── */}
      <AnimatePresence>
        {isShareOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-80 bg-white border-l border-zinc-100 shadow-2xl z-50 p-12"
          >
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900">Share</h3>
              <button onClick={() => setShareOpen(false)} className="text-zinc-300 hover:text-zinc-900 transition-colors">✕</button>
            </div>
            <div className="space-y-8">
              {['Instagram Story', 'Twitter / X', 'Spotify Sync', 'Direct Link'].map(opt => (
                <button key={opt} className="block w-full text-left text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 hover:translate-x-2 transition-all">
                  {opt}
                </button>
              ))}
            </div>
            <div className="absolute bottom-12 left-12 right-12">
               <p className="text-[10px] leading-relaxed text-zinc-300 italic">
                 "Music is the wine that fills the cup of silence." — Robert Fripp
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
