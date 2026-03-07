"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

/**
 * Koydo Certify — Professional Trade Licensing
 * 
 * Built strictly following the "Zen Productivity Minimalist" Persona.
 * Features Bone White textures, Antique Gold accents, and high-end typography.
 */
export default function CertifyDashboard() {
  const [tracks, setTracks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch("/api/microapps/certify/tracks");
        const data = await res.json();
        setTracks(data);
      } catch (err) {
        console.error("Failed to fetch certify tracks:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTracks();
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-black selection:text-white overflow-hidden">
      {/* ── Top Navigation (Zen Minimalist) ── */}
      <header className="flex h-20 items-center justify-between px-8 md:px-16 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="h-4 w-4 bg-black rounded-sm" />
          <span className="text-sm font-bold tracking-tight uppercase">Koydo Certify</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/dashboard" className="text-xs font-medium text-zinc-500 hover:text-black transition-colors">
            Main Platform
          </Link>
          <div className="h-8 w-8 rounded-full bg-zinc-200 border border-zinc-300" />
        </nav>
      </header>

      {/* ── Hero Section ── */}
      <section className="px-8 md:px-16 py-20 max-w-5xl mx-auto h-[40vh] flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6 leading-tight">
          Pass your exam. <br />
          <span className="text-zinc-400">Advance your career.</span>
        </h1>
        <p className="text-lg text-zinc-600 max-w-xl mb-12 leading-relaxed">
          Zero fluff. Just the exact technical knowledge, code compliance, and simulated testing you need to walk into your licensing exam with absolute confidence.
        </p>
      </section>

      {/* ── Certification Tracks ── */}
      <section className="px-8 md:px-16 py-12 max-w-7xl mx-auto h-[60vh] overflow-y-auto pb-32">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
            Available Tracks
          </h2>
        </div>
        
        {isLoading ? (
          <div className="py-24 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-300 animate-pulse">Syncing catalog data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div 
                key={track.id} 
                className="group p-8 bg-white border border-zinc-200 rounded-2xl hover:border-black hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-zinc-100 bg-zinc-50 text-zinc-500">
                    {track.category}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3 group-hover:underline decoration-2 underline-offset-4 line-clamp-2">
                    {track.title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                  <span className="text-xs font-medium text-zinc-400">{track.status}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-zinc-400 group-hover:text-black transition-colors transform group-hover:translate-x-1 duration-200">
                    <path d="M3.33334 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Footer ── */}
      <footer className="fixed bottom-0 left-0 w-full py-8 px-8 md:px-16 border-t border-zinc-200/60 bg-white/80 backdrop-blur-md flex items-center justify-between text-xs font-medium text-zinc-400 z-10">
        <p>© 2026 Koydo Education</p>
        <p>Pro Certification Tier</p>
      </footer>
    </main>
  );
}
