"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProgressChip from "@/app/components/ui/progress-chip";
import { useAdmin } from "../admin-context";

/**
 * AdminOverviewPage (Refactored Console)
 * 
 * The central command hub. When first opened, it shows global metrics.
 * The middle screen dynamically changes based on menu selections.
 */
export default function AdminOverviewPage() {
  const { activeView } = useAdmin();

  // Mocked Metrics for the Initial View
  const globalMetrics = [
    { title: "Total Users", value: "1.2M", change: "+12%", status: "success" },
    { title: "Global MRR", value: "$250k", change: "+5%", status: "success" },
    { title: "Avg. Session", value: "42m", change: "-2%", status: "warning" },
    { title: "Active Quests", value: "84k", change: "+18%", status: "info" },
  ];

  return (
    <div className="p-6 md:p-12 max-w-[1600px] mx-auto animate-in fade-in duration-700">
      
      {/* ── Dynamic Header ── */}
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-[#1a1f36]">
            {activeView}
          </h1>
          <p className="mt-2 text-sm font-medium text-[#697386] opacity-60">
            Real-time operational intelligence for the Koydo Ecosystem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ProgressChip label="System" value="99.9%" tone="success" />
          <ProgressChip label="API Latency" value="42ms" tone="info" />
        </div>
      </div>

      {/* ── Main Content Switcher ── */}
      <div className="grid gap-8">
        
        {activeView === "Platform Overview" && (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {globalMetrics.map((m) => (
              <div key={m.title} className="group rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.02)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/60">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">{m.title}</p>
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-black tracking-tighter text-zinc-900">{m.value}</span>
                  <span className={`text-xs font-bold ${m.status === 'success' ? 'text-emerald-500' : 'text-amber-500'}`}>
                    {m.change}
                  </span>
                </div>
              </div>
            ))}
          </section>
        )}

        {activeView === "Focus Session Metrics" && (
          <section className="grid gap-6 lg:grid-cols-3">
            <MetricCard title="Total Focus Time" value="1.2M mins" sub="Across all users" />
            <MetricCard title="Avg. Concentration" value="24.2m" sub="Per session" />
            <MetricCard title="Crystals Minted" value="12.4M" sub="Claimable in MMO" />
          </section>
        )}

        {activeView === "Translation Usage" && (
          <section className="grid gap-6 lg:grid-cols-3">
            <MetricCard title="Total Queries" value="842k" sub="Technical terms" />
            <MetricCard title="Offline Packs" value="12k" sub="Active downloads" />
            <MetricCard title="Top Locale" value="ES" sub="Spanish (Latin America)" />
          </section>
        )}

        {activeView === "Trivia Engagement" && (
          <section className="grid gap-6 lg:grid-cols-3">
            <MetricCard title="Total Swipes" value="2.1M" sub="High retention" />
            <MetricCard title="Revive Rate" value="42%" sub="Ad video completion" />
            <MetricCard title="Correct %" value="68%" sub="Pedagogical accuracy" />
          </section>
        )}

        {activeView === "Classical Audience" && (
          <section className="grid gap-6 lg:grid-cols-3">
            <MetricCard title="Avg. Listen Time" value="54m" sub="Deep engagement" />
            <MetricCard title="Top Era" value="Romantic" sub="Chopin dominates" />
            <MetricCard title="HQ Streams" value="84k" sub="Hi-Res FLAC usage" />
          </section>
        )}

        {/* Fallback for other views */}
        {activeView !== "Platform Overview" && !["Focus Session Metrics", "Translation Usage", "Trivia Engagement"].includes(activeView) && (
          <section className="rounded-[3rem] border-2 border-dashed border-zinc-200 p-24 flex flex-col items-center justify-center text-center">
             <div className="h-20 w-20 rounded-full bg-zinc-100 flex items-center justify-center text-3xl mb-6">📊</div>
             <h2 className="text-xl font-bold text-zinc-400">{activeView} Analytics</h2>
             <p className="text-sm text-zinc-400 mt-2 max-w-xs mx-auto">Real-time data streaming for this microapp is currently being initialized.</p>
          </section>
        )}

      </div>
...
function MetricCard({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.02)] backdrop-blur-xl">
      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">{title}</p>
      <span className="text-4xl font-black tracking-tighter text-zinc-900">{value}</span>
      <p className="text-xs text-zinc-500 mt-2">{sub}</p>
    </div>
  );
}

      {/* ── Quick Action Overlay (Bottom) ── */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
         <ActionCard title="Media Pipeline" desc="Monitor Imagen 4 Ultra queues" icon="🎬" />
         <ActionCard title="Curriculum Audit" desc="Review Gemini smoothed content" icon="🛡️" />
         <ActionCard title="MMO Bridge" desc="Subscription Auth status" icon="⚔️" />
      </div>

    </div>
  );
}

function ActionCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
      <div className="h-12 w-12 rounded-xl bg-zinc-50 flex items-center justify-center text-2xl">{icon}</div>
      <div>
        <h3 className="text-sm font-bold text-zinc-900">{title}</h3>
        <p className="text-xs text-zinc-500">{desc}</p>
      </div>
    </div>
  );
}
