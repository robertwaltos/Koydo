"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * Koydo Classical — Classical Romance UI/UX
 * 
 * Built strictly following the "Seraphina" Persona.
 * Features Bone White textures, Antique Gold accents, and high-end typography.
 */
export default function ClassicalMusicPage() {
  const [activeCategory, setActiveCategory] = useState("The Romantic Era");
  const [tracks, setTracks] = useState<any[]>([]);
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/microapps/classical/tracks?era=${activeCategory}`);
        const data = await res.json();
        setTracks(data);
      } catch (err) {
        console.error("Failed to fetch classical tracks:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTracks();
  }, [activeCategory]);

  const categories = [
    "The Romantic Era",
    "Midnight Nocturnes",
    "Grand Orchestral",
    "Baroque Masterpieces",
    "Opera & Aria"
  ];

  return (
    <div className="min-h-screen bg-[#F9F6EE] text-[#1A1A1A] font-serif selection:bg-[#D4AF37]/30 overflow-hidden">
      
      {/* ── Elegant Navigation ── */}
      <header className="flex h-28 items-center justify-between px-12 border-b border-[#D4AF37]/20 shadow-sm relative z-10 bg-[#F9F6EE]/80 backdrop-blur-md">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-1">Established 2026</span>
          <h1 className="text-3xl font-light tracking-tighter italic">Koydo Classical</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/60">
          <button className="hover:text-[#D4AF37] transition-colors">The Gallery</button>
          <button className="hover:text-[#D4AF37] transition-colors">Composers</button>
          <button className="hover:text-[#D4AF37] transition-colors">Concert Hall</button>
          <Link href="/dashboard" className="h-10 w-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37]/5 transition-colors">
            ✕
          </Link>
        </nav>
      </header>

      {/* ── Main Content ── */}
      <main className="max-w-[1400px] mx-auto grid grid-cols-12 gap-16 p-16 h-[calc(100vh-112px)] overflow-y-auto">
        
        {/* Left: Category Curation */}
        <aside className="col-span-3">
          <div className="sticky top-0 space-y-12">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-8">Curated Collections</h3>
              <div className="space-y-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left transition-all duration-700 ${
                      activeCategory === cat 
                        ? "text-xl italic translate-x-4 text-[#1A1A1A]" 
                        : "text-base text-[#1A1A1A]/40 hover:text-[#1A1A1A]/60"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 border border-[#D4AF37]/20 rounded-sm bg-white/50 backdrop-blur-sm shadow-inner">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block mb-4">Master's Insight</span>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/70 italic">
                "Music is the moonlight in the gloomy night of life." — Jean Paul
              </p>
            </div>
          </div>
        </aside>

        {/* Right: The Track List (Private Gallery Style) */}
        <section className="col-span-9">
          <div className="mb-12 flex items-end justify-between border-b border-[#1A1A1A]/5 pb-8">
            <div>
              <h2 className="text-5xl font-light tracking-tight italic mb-2">{activeCategory}</h2>
              <p className="text-[#1A1A1A]/50">High-fidelity recordings from the Musopen Public Domain Collection.</p>
            </div>
            <button className="px-8 py-3 bg-[#1A1A1A] text-[#F9F6EE] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#D4AF37] transition-all">
              Stream All
            </button>
          </div>

          <div className="grid gap-12">
            {isLoading ? (
              <div className="py-24 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] animate-pulse">Entering the Gallery...</p>
              </div>
            ) : (
              <AnimatePresence mode="popLayout">
                {tracks.map((track) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    key={track.id}
                    className="group flex items-center justify-between cursor-pointer"
                    onClick={() => setCurrentTrack(track)}
                  >
                    <div className="flex items-center gap-8">
                      <div className="h-20 w-20 bg-white border border-[#D4AF37]/10 flex items-center justify-center text-3xl shadow-sm transition-transform group-hover:scale-105 duration-500">
                        {track.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-light tracking-tight group-hover:italic transition-all duration-500">{track.title}</h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mt-1">{track.composer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-12">
                      <span className="font-mono text-xs text-[#1A1A1A]/30">{track.duration}</span>
                      <button className="h-12 w-12 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3L13 8L5 13V3Z" fill="currentColor"/></svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </section>
      </main>

      {/* ── Minimalist Player / Karaoke Bar ── */}
      <AnimatePresence>
        {currentTrack && (
          <motion.footer 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full h-24 bg-white border-t border-[#D4AF37]/30 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-50 px-12 flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm font-bold italic">{currentTrack.title}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">{currentTrack.composer}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 flex-1 max-w-xl px-12">
               {/* Minimalist Karaoke Lyrics */}
               <div className="text-sm font-medium tracking-wide text-[#1A1A1A]/40 overflow-hidden h-6 text-center">
                  <motion.p
                    animate={{ y: [0, -24, -48] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    Piano solo gently begins... <br />
                    The melody flows like a stream... <br />
                    Strings enter with a soft swell...
                  </motion.p>
               </div>
               <div className="w-full h-0.5 bg-[#1A1A1A]/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#D4AF37] w-[35%]" />
               </div>
            </div>

            <div className="flex items-center gap-8">
              <button className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 hover:text-[#1A1A1A]">Share Gallery</button>
              <button className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 hover:text-[#1A1A1A]">Streaming HQ</button>
              <button onClick={() => setCurrentTrack(null)} className="h-8 w-8 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-colors">✕</button>
            </div>
          </motion.footer>
        )}
      </AnimatePresence>

      {/* ── Background Hook ── */}
      <div className="fixed bottom-12 right-12 pointer-events-none opacity-[0.02] text-[12rem] font-black italic select-none">
        ROMANCE
      </div>
    </div>
  );
}
