"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAdmin } from "./admin-context";

/**
 * AdminBridgeSidebar
 *
 * A specialized right-side panel visible on ultra-wide screens.
 * Acts as the centralized "Financial Center & Ecosystem Bridge" to monitor
 * microapps, casual games, and the emerging MMO infrastructure.
 */
export default function AdminBridgeSidebar() {
  const { setActiveView } = useAdmin();

  return (
    <div className="flex h-full flex-col p-6 overflow-y-auto ui-glass-sidebar">
      <div className="mb-6 border-b border-border/10 pb-4">
        <button 
          onClick={() => setActiveView("Platform Overview")}
          className="text-left hover:opacity-80 transition-opacity"
        >
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            Koydo Ecosystem
          </h2>
          <p className="text-[12px] text-foreground/50 leading-tight mt-1">
            Financial Center & Bridge
          </p>
        </button>
      </div>

      <div className="space-y-8">
        {/* Microapps Section */}
        <section>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground/50 mb-3">
            Microapps & Brands
          </h3>
          <div className="space-y-2">
            <BridgeCard
              title="Koydo Junior"
              status="Live"
              revenue="$12.4k MRR"
              icon="🧸"
              onClick={() => setActiveView("Koydo Junior Analytics")}
            />
            <BridgeCard
              title="Koydo SAT Prep"
              status="Live"
              revenue="$34.1k MRR"
              icon="🎓"
              onClick={() => setActiveView("SAT Prep Performance")}
            />
            <BridgeCard
              title="Koydo Focus (Timer)"
              status="In Dev"
              revenue="-"
              icon="⏱"
              onClick={() => setActiveView("Focus Session Metrics")}
            />
            <BridgeCard
              title="Koydo Wallet"
              status="Scaffold"
              revenue="-"
              icon="💳"
              onClick={() => setActiveView("Wallet Activity")}
            />
            <BridgeCard
              title="Koydo Translator"
              status="Scaffold"
              revenue="Offline Pack"
              icon="🌐"
              onClick={() => setActiveView("Translation Usage")}
            />
            <BridgeCard
              title="Koydo Lo-Fi"
              status="Scaffold"
              revenue="Brand Halo"
              icon="🎧"
              onClick={() => setActiveView("Lo-Fi Stream Data")}
            />
            <BridgeCard
              title="Koydo Classical"
              status="Scaffold"
              revenue="Musopen CC0"
              icon="🎻"
              onClick={() => setActiveView("Classical Audience")}
            />
            <BridgeCard
              title="Glass Calculator"
              status="Scaffold"
              revenue="Freemium"
              icon="🧮"
              onClick={() => setActiveView("Calculator Interactions")}
            />
          </div>
        </section>

        {/* Gaming & MMO Section */}
        <section>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground/50 mb-3">
            Gaming & MMO
          </h3>
          <div className="space-y-2">
            <BridgeCard
              title="Synthesis Sphere"
              status="Active"
              metrics="14k DAU"
              icon="🪐"
              onClick={() => setActiveView("Synthesis Sphere Live")}
            />
            <BridgeCard
              title="Koydo Trivia Swipe"
              status="Scaffold"
              metrics="Ad-Monetized"
              icon="🃏"
              onClick={() => setActiveView("Trivia Engagement")}
            />
            <BridgeCard
              title="Logical Link"
              status="Active"
              metrics="22k DAU"
              icon="🧩"
              onClick={() => setActiveView("Logical Link Stats")}
            />
            <BridgeCard
              title="MMO Core Engine"
              status="Architecture"
              metrics="Q3 2026"
              icon="⚔️"
              onClick={() => setActiveView("MMO Infrastructure")}
            />
            <BridgeCard
              title="Word Forge"
              status="Planned"
              metrics="Ad-Monetized"
              icon="📝"
              onClick={() => setActiveView("Word Forge Roadmap")}
            />
          </div>
        </section>

        {/* Financial Rollup */}
        <section className="rounded-xl bg-accent/5 p-4 border border-accent/10">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground/60 mb-3">
            Global Rollup
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-xs text-foreground/60">Total MRR</span>
              <span className="text-sm font-semibold text-foreground">$250,000</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xs text-foreground/60">Blended ARPU</span>
              <span className="text-sm font-semibold text-foreground">$20.80</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xs text-foreground/60">Infra Spend</span>
              <span className="text-sm font-semibold text-rose-500">$1,432</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function BridgeCard({
  title,
  status,
  revenue,
  metrics,
  icon,
  onClick,
}: {
  title: string;
  status: string;
  revenue?: string;
  metrics?: string;
  icon: string;
  onClick?: () => void;
}) {
  return (
    <div 
      onClick={onClick}
      className="group flex items-center gap-3 rounded-lg border border-border/10 bg-surface/40 p-3 transition-colors hover:bg-surface/80 hover:border-border/30 cursor-pointer"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white shadow-sm text-lg">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-foreground">
          {title}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider ${
              status === "Live" || status === "Active"
                ? "text-emerald-500"
                : "text-amber-500"
            }`}
          >
            {status}
          </span>
          {(revenue || metrics) && (
            <>
              <span className="text-[10px] text-foreground/30">•</span>
              <span className="text-[10px] text-foreground/50">
                {revenue || metrics}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
