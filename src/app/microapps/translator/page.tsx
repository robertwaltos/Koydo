"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * Koydo Translator (Offline-First Technical Dictionary)
 * 
 * Built strictly following the "Aura" Glassmorphic Utility Specialist Persona.
 * Features deep depth, frosted glass, and vibrant background bleed.
 */
export default function TranslatorPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isOfflineReady, setIsOfflineReady] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 2) {
        try {
          const res = await fetch(`/api/microapps/translator/terms?query=${query}`);
          const data = await res.json();
          setResults(data);
        } catch (err) {
          console.error("Search error:", err);
        }
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const startDownload = () => {
    setIsDownloading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        setDownloadProgress(100);
        setIsDownloading(false);
        setIsOfflineReady(true);
        clearInterval(interval);
      } else {
        setDownloadProgress(progress);
      }
    }, 400);
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "de", name: "German", flag: "🇩🇪" },
    { code: "ar", name: "Arabic", flag: "🇸🇦" },
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "zh", name: "Chinese", flag: "🇨🇳" },
    { code: "ja", name: "Japanese", flag: "🇯🇵" },
    { code: "vi", name: "Vietnamese", flag: "🇻🇳" },
  ];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black selection:bg-indigo-500/30">
      {/* ── Immersive Background ── */}
      <div className="absolute inset-0 z-0 bg-black">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-500/30 to-blue-500/10 blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[25%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-pink-500/5 blur-[120px]" 
        />
      </div>

      {/* ── Header ── */}
      <header className="absolute top-0 z-20 flex w-full items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Koydo Translator</span>
        </div>
        <Link 
          href="/dashboard"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-widest text-white/50 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
        >
          DASHBOARD
        </Link>
      </header>

      {/* ── Main Glass Interface ── */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[640px] px-6"
      >
        <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-1 shadow-[0_32px_64px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
          <div className="rounded-[2.4rem] bg-black/20 p-8">
            
            {/* Language Switcher */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <LangBadge lang={languages.find(l => l.code === sourceLang)!} onClick={() => {}} isActive />
              <div className="h-px flex-1 bg-white/10" />
              <button className="h-8 w-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 6L8 2.5M8 2.5L11.5 6M8 2.5V13.5M11.5 10L8 13.5M8 13.5L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="h-px flex-1 bg-white/10" />
              <LangBadge lang={languages.find(l => l.code === targetLang)!} onClick={() => {}} isActive />
            </div>

            {/* Translation Area */}
            <div className="space-y-6">
              <div className="relative">
                <textarea 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter text or a technical term..."
                  className="w-full min-h-[140px] bg-transparent text-2xl font-light text-white placeholder:text-white/20 focus:outline-none resize-none"
                />
              </div>
              
              <div className="h-px w-full bg-white/10" />
              
              <div className="min-h-[140px]">
                <AnimatePresence>
                  {results.length > 0 ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      {results.map((res, i) => (
                        <div key={i} className="group">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">{res.category}</span>
                            <span className="text-[10px] font-mono text-white/20">MATCH FOUND</span>
                          </div>
                          <p className="text-xl font-light text-white leading-snug">{res.definition}</p>
                        </div>
                      ))}
                    </motion.div>
                  ) : query.length > 2 ? (
                    <p className="text-xl font-light text-white/40 italic">Searching knowledgebase...</p>
                  ) : (
                    <p className="text-xl font-light text-white/20">Waiting for technical term input...</p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Offline Sync Controls */}
            <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full ${isOfflineReady ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" : "bg-white/20"}`} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {isOfflineReady ? "Offline Pack Ready" : "Sync needed for offline use"}
                </span>
              </div>
              
              {isDownloading ? (
                <div className="w-40 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${downloadProgress}%` }}
                    className="h-full bg-indigo-500" 
                  />
                </div>
              ) : (
                <button 
                  onClick={startDownload}
                  className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  {isOfflineReady ? "Update Pack" : "Download Pack (14MB)"}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Footer / Ecosystem Link ── */}
      <footer className="absolute bottom-8 z-20">
        <p className="text-[10px] font-medium tracking-[0.2em] text-white/30">
          POWERED BY THE <span className="text-white/60">KOYDO TRANSLATION ENGINE</span>
        </p>
      </footer>
    </div>
  );
}

function LangBadge({ lang, onClick, isActive }: { lang: any; onClick: () => void; isActive?: boolean }) {
  return (
    <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
      <span className="text-sm leading-none">{lang.flag}</span>
      <span className="text-xs font-semibold text-white tracking-wide">{lang.name}</span>
    </button>
  );
}
