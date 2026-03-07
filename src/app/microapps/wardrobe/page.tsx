"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * Koydo Smart Wardrobe (AR-Ready Glassmorphic UI)
 * 
 * Built strictly following the "Aura" Glassmorphic Persona.
 * Features ultra-realistic frosted surfaces, dynamic light bleeds,
 * and high-contrast data visualization.
 */
export default function SmartWardrobePage() {
  const [selectedCategory, setSelectedCategory] = useState("Outerwear");
  const [viewMode, setMode] = useState<"Inventory" | "AR Preview">("Inventory");
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/api/microapps/wardrobe");
        if (res.ok) {
          const data = await res.json();
          setItems(data.length > 0 ? data : [
            { id: 1, name: "Neural-Mesh Blazer", category: "Outerwear", state: "Clean", color_hint: "bg-zinc-100", price: "$420" },
            { id: 2, name: "Liquid-Silk Shirt", category: "Tops", state: "In Laundry", color_hint: "bg-blue-100", price: "$180" },
            { id: 3, name: "Gravity-Denim", category: "Bottoms", state: "Worn 2x", color_hint: "bg-indigo-900", price: "$250" },
            { id: 4, name: "Aero-Sole Runners", category: "Footwear", state: "New", color_hint: "bg-orange-500", price: "$310" },
          ]);
        }
      } catch (err) {
        console.error("Failed to fetch wardrobe items:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  const categories = ["Outerwear", "Tops", "Bottoms", "Footwear", "Accessories"];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white/20 overflow-hidden">
      
      {/* ── Immersive Atmospheric Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-[5%] left-[10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[100px]" />
        {/* Subtle grid pattern for AR aesthetic */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* ── Navigation ── */}
      <header className="relative z-20 flex h-24 items-center justify-between px-12 backdrop-blur-sm bg-black/10 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="h-3 w-3 bg-white rotate-45" />
          <span className="text-xs font-black tracking-[0.4em] uppercase opacity-80">Smart Wardrobe</span>
        </div>
        
        <div className="flex gap-1 p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl">
          {["Inventory", "AR Preview"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m as any)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                viewMode === m ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <Link href="/dashboard" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"><path d="M12 4L4 12M4 4L12 12" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </Link>
      </header>

      {/* ── Main Dashboard ── */}
      <main className="relative z-10 grid grid-cols-12 gap-8 p-12 max-w-[1800px] mx-auto h-[calc(100vh-96px)]">
        
        {/* Left: Category Selector (Vertical) */}
        <aside className="col-span-2 flex flex-col justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`group flex items-center gap-4 text-left transition-all ${
                selectedCategory === cat ? "opacity-100 scale-110" : "opacity-30 hover:opacity-60"
              }`}
            >
              <div className={`h-px w-8 transition-all ${selectedCategory === cat ? "bg-white w-12" : "bg-white/50"}`} />
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">{cat}</span>
            </button>
          ))}
        </aside>

        {/* Center: Interactive 3D/Grid View */}
        <div className="col-span-7 relative">
          <AnimatePresence mode="wait">
            {viewMode === "Inventory" ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-2 gap-6 h-full items-center"
              >
                {items.filter(i => i.category === selectedCategory || selectedCategory === "Outerwear").map((item) => (
                  <WardrobeCard key={item.id} item={item} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="ar"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="h-full w-full rounded-[3rem] border border-white/20 bg-white/5 backdrop-blur-3xl relative overflow-hidden flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6 animate-pulse">📷</div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Camera Access Required</p>
                  <h2 className="text-2xl font-light tracking-tight text-white">Initialize Virtual Try-On</h2>
                  <button className="mt-8 px-8 py-4 bg-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                    Activate Engine
                  </button>
                </div>
                {/* HUD Elements */}
                <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="h-16 w-16 border-t-2 border-l-2 border-white/20" />
                    <div className="h-16 w-16 border-t-2 border-r-2 border-white/20" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="h-16 w-16 border-b-2 border-l-2 border-white/20" />
                    <div className="h-16 w-16 border-b-2 border-r-2 border-white/20" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Data & Stats */}
        <aside className="col-span-3 flex flex-col justify-center gap-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-6">Wardrobe Rollup</h3>
            <div className="space-y-6">
              <StatRow label="Total Assets" value="142" />
              <StatRow label="Active Usage" value="18%" />
              <StatRow label="Valuation" value="$12,400" />
              <StatRow label="Eco Score" value="A+" tone="text-emerald-400" />
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-indigo-600/10 backdrop-blur-2xl p-8 flex flex-col justify-center text-center">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-2">Style Suggestion</span>
             <p className="text-sm font-medium leading-relaxed text-zinc-300">
               "Pair the Neural-Mesh Blazer with Gravity-Denim for today's forecast (68°F / 20°C)."
             </p>
          </div>
        </aside>
      </main>

      {/* ── Background Hook ── */}
      <footer className="absolute bottom-8 right-12 z-20">
        <p className="text-[10px] font-medium tracking-[0.2em] text-white/20">
          POWERED BY <span className="text-white/50">KOYDO VISION</span>
        </p>
      </footer>
    </div>
  );
}

function WardrobeCard({ item }: { item: any }) {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="group aspect-[4/5] rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 flex flex-col justify-between cursor-pointer transition-colors hover:bg-white/10"
    >
      <div className="flex justify-between items-start">
        <div className={`h-12 w-12 rounded-2xl ${item.color} opacity-80 blur-sm group-hover:blur-md transition-all`} />
        <span className="text-[10px] font-mono text-white/30 uppercase">{item.price}</span>
      </div>
      
      <div>
        <h3 className="text-xl font-light tracking-tight text-white mb-2">{item.name}</h3>
        <div className="flex items-center gap-2">
          <div className={`h-1.5 w-1.5 rounded-full ${item.state === 'In Laundry' ? 'bg-rose-500' : 'bg-emerald-500'}`} />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.state}</span>
        </div>
      </div>
    </motion.div>
  );
}

function StatRow({ label, value, tone = "text-white" }: { label: string; value: string; tone?: string }) {
  return (
    <div className="flex justify-between items-end border-b border-white/5 pb-2">
      <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{label}</span>
      <span className={`text-lg font-mono font-bold tracking-tighter ${tone}`}>{value}</span>
    </div>
  );
}
