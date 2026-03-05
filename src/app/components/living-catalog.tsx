"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { JUICY_SPRINGS, JUICY_VARIANTS } from "@/lib/experience/interaction-primitives";

type EnergyLevel = "morning" | "afternoon" | "evening";

function getEnergyLevel(): EnergyLevel {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  return "evening";
}

const ENERGY_CONFIG: Record<
  EnergyLevel,
  { label: string; badge: string; gradient: string; glow: string }
> = {
  morning: {
    label: "Morning Energy",
    badge: "bg-amber-100 text-amber-700",
    gradient: "from-amber-50 via-orange-50 to-rose-50",
    glow: "shadow-amber-200/50",
  },
  afternoon: {
    label: "Focus Mode",
    badge: "bg-sky-100 text-sky-700",
    gradient: "from-sky-50 via-indigo-50 to-slate-50",
    glow: "shadow-sky-200/50",
  },
  evening: {
    label: "Wind Down",
    badge: "bg-indigo-100 text-indigo-700",
    gradient: "from-indigo-950/10 via-purple-950/10 to-slate-950/10",
    glow: "shadow-indigo-300/30",
  },
};

interface ModuleCard {
  id: number;
  subject: string;
  title: string;
  time: string;
  difficulty: number; // 1-5
  color: string;
}

const SAMPLE_MODULES: ModuleCard[] = [
  { id: 1, subject: "Mathematics", title: "Fraction Adventures", time: "15 min", difficulty: 2, color: "from-blue-500 to-indigo-500" },
  { id: 2, subject: "Science", title: "Solar System Explorer", time: "20 min", difficulty: 3, color: "from-purple-500 to-pink-500" },
  { id: 3, subject: "Reading", title: "Story Time: The Fox", time: "10 min", difficulty: 1, color: "from-emerald-500 to-teal-500" },
  { id: 4, subject: "History", title: "Ancient Egypt Decoded", time: "25 min", difficulty: 4, color: "from-amber-500 to-orange-500" },
  { id: 5, subject: "Art", title: "Color Theory Basics", time: "12 min", difficulty: 2, color: "from-rose-500 to-red-500" },
  { id: 6, subject: "Music", title: "Rhythm & Beats Lab", time: "18 min", difficulty: 3, color: "from-cyan-500 to-blue-500" },
];

export default function LivingCatalog() {
  const energy = useMemo(getEnergyLevel, []);
  const config = ENERGY_CONFIG[energy];

  return (
    <section className={`relative overflow-hidden bg-gradient-to-r ${config.gradient} py-16`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-8 flex items-center gap-3"
          variants={JUICY_VARIANTS.reveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-display-sans)] text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            For You
          </h2>
          <span
            className={`${config.badge} rounded-full px-3 py-1 text-xs font-bold`}
          >
            {config.label}
          </span>
        </motion.div>

        {/* Carousel — native scroll + snap for reliable mobile touch */}
        <div
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 scrollbar-none"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
        >
          {SAMPLE_MODULES.map((mod, i) => (
            <motion.div
              key={mod.id}
              className={`flex min-w-[260px] max-w-[280px] shrink-0 snap-center flex-col rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/5 ${config.glow}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ...JUICY_SPRINGS.bouncy,
                delay: i * 0.08,
              }}
              whileHover={{ y: -4, transition: JUICY_SPRINGS.gentle }}
            >
              {/* Color accent bar */}
              <div
                className={`mb-4 h-2 w-12 rounded-full bg-gradient-to-r ${mod.color}`}
              />

              {/* Subject tag */}
              <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {mod.subject}
              </span>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-800 dark:text-white">
                {mod.title}
              </h3>

              {/* Meta row */}
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-xs text-slate-500">{mod.time}</span>
                {/* Difficulty dots */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, d) => (
                    <div
                      key={d}
                      className={`h-1.5 w-1.5 rounded-full ${
                        d < mod.difficulty
                          ? `bg-gradient-to-r ${mod.color}`
                          : "bg-slate-200 dark:bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
