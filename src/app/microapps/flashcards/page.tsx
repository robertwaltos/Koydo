"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * Koydo Flashcards AI
 * 
 * Built strictly following the "Premium FinTech Architect" Persona.
 * Features hyper-minimalism, high data density, and instantaneous interactions.
 * Dark Mode by default, accented with strategic neon colors.
 */
export default function FlashcardsDashboard() {
  const [activeTab, setActiveTab] = useState("Decks");
  const [generateTopic, setGenerateTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDeck, setGeneratedDeck] = useState<any>(null);

  const [recentDecks, setRecentDecks] = useState([
    { id: "sat-math", title: "SAT Advanced Algebra", cards: 45, mastery: 82, lastStudied: "2h ago", color: "bg-emerald-500" },
    { id: "ap-bio", title: "AP Biology: Cellular Respiration", cards: 32, mastery: 45, lastStudied: "5h ago", color: "bg-amber-500" },
    { id: "spanish-vocab", title: "Spanish 301: Business", cards: 120, mastery: 94, lastStudied: "1d ago", color: "bg-indigo-500" },
    { id: "hvac-code", title: "HVAC Section 608 (EPA)", cards: 60, mastery: 12, lastStudied: "3d ago", color: "bg-rose-500" },
  ]);

  const handleGenerate = async () => {
    if (!generateTopic.trim() || isGenerating) return;

    setIsGenerating(true);
    setGeneratedDeck(null);

    try {
      const res = await fetch("/api/microapps/flashcards/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: generateTopic }),
      });

      if (!res.ok) throw new Error("Failed to generate");

      const data = await res.json();
      setGeneratedDeck(data);

      // Add the new deck to the top of the list
      setRecentDecks(prev => [
        {
          id: data.deckTitle.toLowerCase().replace(/\s+/g, '-'),
          title: data.deckTitle,
          cards: data.cards.length,
          mastery: 0,
          lastStudied: "Just now",
          color: "bg-fuchsia-500"
        },
        ...prev
      ]);
      setGenerateTopic("");
    } catch (err) {
      console.error(err);
      alert("Failed to generate deck. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-indigo-500/30">
      {/* ── Top Bar (Minimalist) ── */}
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-white/10 bg-[#0a0a0a]/80 px-6 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[10px] font-bold text-black">
            KF
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">Flashcards AI</span>
          <span className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
            PRO
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2.5V9.5M2.5 6H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Generate Deck
          </button>
          <div className="h-7 w-7 rounded-full bg-zinc-800 border border-white/10" />
        </div>
      </header>

      {/* ── Main Layout (Grid) ── */}
      <div className="mx-auto max-w-7xl px-6 py-8 md:grid md:grid-cols-12 md:gap-8">

        {/* Left Sidebar Navigation */}
        <aside className="hidden md:col-span-3 md:block">
          <nav className="space-y-1">
            {["Decks", "AI Generator", "Analytics", "Settings"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === item 
                    ? "bg-white/10 text-white" 
                    : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="mt-8 rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">
              Weekly Goal
            </h3>
            <div className="flex items-end justify-between mb-2">
              <span className="font-mono text-2xl text-white leading-none">840</span>
              <span className="text-xs text-zinc-500 mb-0.5">/ 1000 cards</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
              <div className="h-full bg-emerald-500 w-[84%]" />
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="md:col-span-9">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Your Decks</h1>
              <p className="text-sm text-zinc-500 mt-1">{recentDecks.length} active decks · 4 due for review</p>
            </div>
            <div className="flex items-center gap-2 border border-white/10 rounded-lg p-1 bg-black/50">
              <button className="px-3 py-1 rounded bg-white/10 text-xs text-white font-medium">Recent</button>
              <button className="px-3 py-1 rounded text-xs text-zinc-500 font-medium hover:text-white transition-colors">Mastery</button>
            </div>
          </div>

          {/* Data-Dense Deck Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <AnimatePresence>
              {recentDecks.map((deck, idx) => (
                <motion.div
                  key={deck.id}
                  initial={idx === 0 ? { opacity: 0, y: -20 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/microapps/flashcards/${deck.id}`}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[0.5px] border-zinc-800 bg-[#111] p-5 hover:border-zinc-600 transition-colors h-full"
                  >
                    {/* Subtle Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`h-2 w-2 rounded-full ${deck.color} shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
                        <span className="font-mono text-[10px] text-zinc-500">{deck.lastStudied}</span>
                      </div>
                      <h3 className="text-base font-semibold text-zinc-100 line-clamp-1 mb-1">
                        {deck.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                        <span>{deck.cards} cards</span>
                        <span>•</span>
                        <span className={deck.mastery < 50 ? "text-rose-400" : deck.mastery > 80 ? "text-emerald-400" : "text-amber-400"}>
                          {deck.mastery}% mastery
                        </span>
                      </div>
                    </div>

                    {/* Progress Visualizer */}
                    <div className="relative z-10 mt-6 grid grid-cols-5 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full ${i < Math.floor(deck.mastery / 20) ? deck.color : "bg-zinc-800"}`}
                        />
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* AI Generator CTA */}
          <section className="mt-8 rounded-xl border border-dashed border-indigo-500/30 bg-indigo-500/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Need a new deck?</h2>
              <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                Paste a link, upload a PDF, or just type a subject. The AI Refinery will generate a cinematic, 20-card deck in under 10 seconds.
              </p>
            </div>
            <div className="w-full md:w-auto relative flex items-center">
              <input
                type="text"
                value={generateTopic}
                onChange={(e) => setGenerateTopic(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                placeholder="e.g., 'Causes of WW1'"
                disabled={isGenerating}
                className="w-full md:w-[300px] rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
              />
              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !generateTopic.trim()}
                className="absolute right-2 rounded bg-white text-black px-3 py-1.5 text-xs font-bold hover:bg-zinc-200 disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-3 w-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Generating
                  </>
                ) : (
                  "Generate"
                )}
              </button>
            </div>
          </section>

          {/* Generated Deck Preview (Optional/Debug) */}
          {generatedDeck && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
            >
              <h3 className="text-sm font-semibold text-emerald-400 mb-2">Success! Generated "{generatedDeck.deckTitle}"</h3>
              <p className="text-xs text-zinc-400">Added to your decks above. It contains {generatedDeck.cards?.length} highly targeted cards.</p>
            </motion.div>
          )}

        </main>
      </div>
    </div>
  );
}