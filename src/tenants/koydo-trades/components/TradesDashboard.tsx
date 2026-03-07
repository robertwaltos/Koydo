"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TradesButton from "./TradesButton";

type TradeTrack = {
  id: string;
  title: string;
  icon: string;
  color: string;
  moduleCount: number;
  progress: number;
  certReady?: boolean;
};

type TradesDashboardProps = {
  tracks?: TradeTrack[];
  completedLessons?: number;
  certsPassed?: number;
  streakDays?: number;
  hoursLogged?: number;
};

const DEFAULT_TRACKS: TradeTrack[] = [
  { id: "electrical", title: "Electrical", icon: "zap", color: "#f1c40f", moduleCount: 36, progress: 18, certReady: true },
  { id: "plumbing", title: "Plumbing", icon: "droplet", color: "#3498db", moduleCount: 36, progress: 6 },
  { id: "hvac", title: "HVAC", icon: "wind", color: "#00cec9", moduleCount: 36, progress: 0 },
  { id: "civil", title: "Civil Engineering", icon: "building", color: "#636e72", moduleCount: 36, progress: 12 },
  { id: "farming", title: "Agriculture", icon: "sprout", color: "#27ae60", moduleCount: 36, progress: 4 },
  { id: "cdl", title: "CDL License", icon: "truck", color: "#e74c3c", moduleCount: 36, progress: 0 },
];

const TRADE_ICONS: Record<string, JSX.Element> = {
  zap: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  droplet: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  wind: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  ),
  building: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" />
      <line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" />
      <line x1="9" y1="14" x2="9" y2="14.01" /><line x1="15" y1="14" x2="15" y2="14.01" />
      <path d="M9 18h6" />
    </svg>
  ),
  sprout: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10" /><path d="M12 20v-8" /><path d="M12 12c-3 0-5-2-5-5 2 0 4 1 5 3 1-2 3-3 5-3 0 3-2 5-5 5z" />
    </svg>
  ),
  truck: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
};

function ProgressBar({ progress, total, color }: { progress: number; total: number; color: string }) {
  const pct = total > 0 ? Math.min((progress / total) * 100, 100) : 0;
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

export default function TradesDashboard({
  tracks,
  completedLessons = 0,
  certsPassed = 0,
  streakDays = 1,
  hoursLogged = 0,
}: TradesDashboardProps) {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const trackList = tracks && tracks.length > 0 ? tracks : DEFAULT_TRACKS;

  return (
    <div className="relative min-h-screen bg-[#fdf6ee] dark:bg-[#1a1a2e]">
      {/* Diagonal stripe accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-2 w-full"
        style={{ background: "repeating-linear-gradient(90deg, #e67e22 0, #e67e22 20px, #f1c40f 20px, #f1c40f 40px)" }}
      />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 pb-20 pt-8 sm:px-8">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e67e22] text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#e67e22]">Koydo Trades</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold text-[#2c3e50] dark:text-[#e8e8e8] sm:text-4xl">
              Master Your Trade
            </h1>
            <p className="mt-2 max-w-lg text-sm text-[#636e72] dark:text-[#a0a0a0]">
              Hands-on lessons, code references, and certification prep for skilled professionals.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <TradesButton tone="steel" size="sm">NEC/UPC Codes</TradesButton>
            <TradesButton tone="primary" size="sm">Practice Test</TradesButton>
          </div>
        </header>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Lessons Done", value: completedLessons.toString(), icon: "book" },
            { label: "Certs Passed", value: certsPassed.toString(), icon: "award" },
            { label: "Hours Logged", value: hoursLogged.toString(), icon: "clock" },
            { label: "Streak", value: `${streakDays}d`, icon: "flame" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#e8d5b7]/60 bg-white/80 p-4 shadow-sm dark:border-[#2a3f5f] dark:bg-[#16213e]/80"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#636e72] dark:text-[#a0a0a0]">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-[#2c3e50] dark:text-[#e8e8e8]">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Trade tracks */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-[#2c3e50] dark:text-[#e8e8e8]">Trade Tracks</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trackList.map((track) => (
              <motion.button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={[
                  "flex flex-col gap-3 rounded-xl border bg-white/80 p-5 text-left shadow-sm backdrop-blur transition-all",
                  "dark:bg-[#16213e]/80",
                  selectedTrack === track.id
                    ? "border-[#e67e22] ring-2 ring-[#e67e22]/20"
                    : "border-[#e8d5b7]/60 hover:border-[#e67e22]/40 dark:border-[#2a3f5f]",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${track.color}18`, color: track.color }}
                    >
                      {TRADE_ICONS[track.icon] ?? TRADE_ICONS.zap}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#2c3e50] dark:text-[#e8e8e8]">{track.title}</h3>
                      <p className="text-xs text-[#636e72] dark:text-[#a0a0a0]">
                        {track.progress}/{track.moduleCount} lessons
                      </p>
                    </div>
                  </div>
                  {track.certReady ? (
                    <span className="rounded-md bg-[#27ae60]/10 px-2 py-0.5 text-xs font-bold text-[#27ae60]">
                      Cert Ready
                    </span>
                  ) : null}
                </div>
                <ProgressBar progress={track.progress} total={track.moduleCount} color={track.color} />
              </motion.button>
            ))}
          </div>
        </section>

        {/* Safety tip banner */}
        <section className="rounded-xl border border-[#f1c40f]/40 bg-[#f1c40f]/10 p-5 dark:border-[#f1c40f]/20 dark:bg-[#f1c40f]/5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f1c40f] text-[#2c3e50]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#2c3e50] dark:text-[#e8e8e8]">Safety First</h3>
              <p className="mt-1 text-xs text-[#636e72] dark:text-[#a0a0a0]">
                Always follow OSHA guidelines, local codes, and manufacturer specifications when applying what you learn.
                This app supplements professional training — it does not replace licensed supervision.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
