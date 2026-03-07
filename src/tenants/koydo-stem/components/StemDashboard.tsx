"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StemButton from "./StemButton";

type StemTrack = {
  id: string;
  title: string;
  icon: string;
  color: string;
  moduleCount: number;
  progress: number;
};

type StemDashboardProps = {
  tracks?: StemTrack[];
  completedLessons?: number;
  projectsBuilt?: number;
  streakDays?: number;
  xp?: number;
};

const DEFAULT_TRACKS: StemTrack[] = [
  { id: "coding", title: "Coding", icon: "terminal", color: "#00b894", moduleCount: 36, progress: 12 },
  { id: "data-science", title: "Data Science", icon: "chart", color: "#0984e3", moduleCount: 36, progress: 4 },
  { id: "ai-ml", title: "AI & Machine Learning", icon: "brain", color: "#6c5ce7", moduleCount: 36, progress: 0 },
  { id: "cybersecurity", title: "Cybersecurity", icon: "shield", color: "#e17055", moduleCount: 36, progress: 8 },
  { id: "cloud", title: "Cloud Computing", icon: "cloud", color: "#00cec9", moduleCount: 36, progress: 2 },
  { id: "robotics", title: "CPU/GPU Design", icon: "cpu", color: "#fdcb6e", moduleCount: 36, progress: 0 },
];

const TRACK_ICONS: Record<string, JSX.Element> = {
  terminal: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  chart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  brain: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <line x1="9" y1="22" x2="15" y2="22" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  cloud: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  cpu: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
};

function ProgressRing({ progress, total, color, size = 56 }: { progress: number; total: number; color: string; size?: number }) {
  const pct = total > 0 ? Math.min(progress / total, 1) : 0;
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct);

  return (
    <svg width={size} height={size} className="shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth="4" className="text-black/5 dark:text-white/10" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth="4" strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        initial={{ strokeDashoffset: circ }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <text x="50%" y="50%" textAnchor="middle" dy="0.35em" className="fill-current text-xs font-bold">
        {Math.round(pct * 100)}%
      </text>
    </svg>
  );
}

export default function StemDashboard({
  tracks,
  completedLessons = 0,
  projectsBuilt = 0,
  streakDays = 1,
  xp = 0,
}: StemDashboardProps) {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const trackList = tracks && tracks.length > 0 ? tracks : DEFAULT_TRACKS;

  return (
    <div className="relative min-h-screen bg-[#f0fdf9] dark:bg-[#0a1628]">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,184,148,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,148,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 pb-20 pt-6 sm:px-8">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00b894] text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#00b894]">STEM Lab</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold text-[#1e272e] dark:text-[#ccd6f6] sm:text-4xl">
              Build. Code. Explore.
            </h1>
            <p className="mt-2 max-w-lg text-sm text-[#636e72] dark:text-[#8892b0]">
              Master coding, data science, AI, cybersecurity, and more with project-based learning.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <StemButton tone="code" size="sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5" /></svg>
              Terminal
            </StemButton>
            <StemButton tone="primary" size="sm">My Projects</StemButton>
          </div>
        </header>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "XP Earned", value: xp.toLocaleString(), color: "#00b894" },
            { label: "Lessons", value: completedLessons.toString(), color: "#0984e3" },
            { label: "Projects", value: projectsBuilt.toString(), color: "#6c5ce7" },
            { label: "Streak", value: `${streakDays}d`, color: "#fdcb6e" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#b2dfdb]/50 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-[#233554] dark:bg-[#112240]/80"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#636e72] dark:text-[#8892b0]">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Track grid */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-[#1e272e] dark:text-[#ccd6f6]">Learning Tracks</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trackList.map((track) => (
              <motion.button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={[
                  "flex items-center gap-4 rounded-2xl border bg-white/80 p-5 text-left shadow-sm backdrop-blur transition-all",
                  "dark:bg-[#112240]/80",
                  selectedTrack === track.id
                    ? "border-[#00b894] ring-2 ring-[#00b894]/20 dark:border-[#64ffda]"
                    : "border-[#b2dfdb]/50 hover:border-[#00b894]/40 dark:border-[#233554]",
                ].join(" ")}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${track.color}15`, color: track.color }}
                >
                  {TRACK_ICONS[track.icon] ?? TRACK_ICONS.terminal}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-[#1e272e] dark:text-[#ccd6f6]">{track.title}</h3>
                  <p className="mt-0.5 text-xs text-[#636e72] dark:text-[#8892b0]">
                    {track.progress}/{track.moduleCount} lessons
                  </p>
                </div>
                <ProgressRing progress={track.progress} total={track.moduleCount} color={track.color} />
              </motion.button>
            ))}
          </div>
        </section>

        {/* Quick actions */}
        <section className="rounded-2xl border border-[#b2dfdb]/50 bg-gradient-to-r from-[#00b894]/5 via-[#0984e3]/5 to-[#6c5ce7]/5 p-6 dark:border-[#233554] dark:from-[#00b894]/10 dark:via-[#0984e3]/10 dark:to-[#6c5ce7]/10">
          <h2 className="mb-3 text-lg font-bold text-[#1e272e] dark:text-[#ccd6f6]">Continue Learning</h2>
          <p className="mb-4 text-sm text-[#636e72] dark:text-[#8892b0]">
            Pick up where you left off or start a new project.
          </p>
          <div className="flex flex-wrap gap-3">
            <StemButton tone="primary">Resume Last Lesson</StemButton>
            <StemButton tone="cyan">Start a Project</StemButton>
            <StemButton tone="outline">Browse All Tracks</StemButton>
          </div>
        </section>
      </main>
    </div>
  );
}
