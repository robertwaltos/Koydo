"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JUICY_SPRINGS, JUICY_VARIANTS } from "@/lib/experience/interaction-primitives";
import SoftButton from "./ui/soft-button";

type AgeGroup = "early" | "middle" | "teen";

function getAgeGroup(age: number): AgeGroup {
  if (age <= 5) return "early";
  if (age <= 11) return "middle";
  return "teen";
}

const AGE_THEMES: Record<
  AgeGroup,
  {
    font: string;
    colors: { bg: string; accent: string; text: string };
    radius: string;
    label: string;
    content: string;
    badge?: string;
  }
> = {
  early: {
    font: "font-[family-name:var(--font-display-round)]",
    colors: {
      bg: "bg-gradient-to-br from-emerald-100 to-yellow-100",
      accent: "bg-yellow-400",
      text: "text-emerald-900",
    },
    radius: "rounded-3xl",
    label: "Ages 3\u20135",
    content: "Tap, explore, and discover with colorful adventures!",
    badge: "ABC",
  },
  middle: {
    font: "font-[family-name:var(--font-body-sans)]",
    colors: {
      bg: "bg-gradient-to-br from-sky-100 to-rose-100",
      accent: "bg-sky-500",
      text: "text-sky-900",
    },
    radius: "rounded-2xl",
    label: "Ages 6\u201311",
    content: "Complete quests, earn badges, and master new subjects!",
    badge: "QUEST",
  },
  teen: {
    font: "font-[family-name:var(--font-display-sans)]",
    colors: {
      bg: "bg-gradient-to-br from-slate-900 to-indigo-950",
      accent: "bg-purple-500",
      text: "text-white",
    },
    radius: "rounded-2xl",
    label: "Ages 12\u201318",
    content: "Deep-dive modules with AI-powered adaptive learning paths.",
  },
};

const TRUST_BADGES = [
  "COPPA Compliant",
  "No Ads Ever",
  "Educator Reviewed",
  "100% Free",
];

export default function LandingHeroGemini() {
  const [age, setAge] = useState(8);
  const group = getAgeGroup(age);
  const theme = AGE_THEMES[group];

  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden">
      {/* Glass background layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-white/40 to-purple-50/80 backdrop-blur-sm dark:from-slate-900 dark:via-slate-900/80 dark:to-indigo-950/60" />

      <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:gap-16 lg:py-0">
        {/* Left — Copy + Controls (55%) */}
        <motion.div
          className="flex flex-1 flex-col justify-center lg:max-w-[55%]"
          variants={JUICY_VARIANTS.reveal}
          initial="initial"
          animate="animate"
        >
          {/* Eyebrow */}
          <span className="mb-4 inline-block w-fit rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
            Adaptive Learning for Every Age
          </span>

          <h1 className="font-[family-name:var(--font-display-sans)] text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Education That Grows{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              With Your Child
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-lg text-slate-600 dark:text-slate-300">
            One platform. 800+ modules. AI-powered. Personalized for ages 3 to
            adult.
          </p>

          {/* Age Slider */}
          <div className="mt-8 max-w-md">
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="age-slider"
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Preview for age {age}
              </label>
              <span className="rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                {theme.label}
              </span>
            </div>
            <input
              id="age-slider"
              type="range"
              min={3}
              max={18}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-indigo-200 accent-indigo-600 dark:bg-indigo-800"
            />
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>3</span>
              <span>18</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <SoftButton variant="accent" size="hero">
              Start Learning Free
            </SoftButton>
            <SoftButton variant="ghost" size="hero" className="border-slate-300 dark:border-slate-600">
              Watch Demo
            </SoftButton>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — Live Adaptive Preview (45%) */}
        <div className="flex flex-1 items-center justify-center lg:max-w-[45%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={group}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
              transition={JUICY_SPRINGS.gentle}
              className={`${theme.colors.bg} ${theme.radius} ${theme.font} ${theme.colors.text} relative w-full max-w-sm overflow-hidden p-8 shadow-2xl`}
            >
              {/* Age badge */}
              <div
                className={`${theme.colors.accent} mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold text-white`}
              >
                {theme.label}
              </div>

              {/* Mock content */}
              <h3 className="text-xl font-bold">{
                group === "early"
                  ? "Let\u2019s Explore Colors!"
                  : group === "middle"
                    ? "Quest: Fraction Master"
                    : "AP Physics: Wave Mechanics"
              }</h3>
              <p className="mt-2 text-sm opacity-80">{theme.content}</p>

              {/* Visual elements by age */}
              <div className="mt-6 flex gap-2">
                {group === "early" && (
                  <>
                    <div className="h-10 w-10 rounded-2xl bg-red-400" />
                    <div className="h-10 w-10 rounded-2xl bg-blue-400" />
                    <div className="h-10 w-10 rounded-2xl bg-green-400" />
                    <div className="h-10 w-10 rounded-2xl bg-yellow-400" />
                  </>
                )}
                {group === "middle" && (
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500 text-lg font-bold text-white">
                      XP
                    </div>
                    <div>
                      <div className="h-2 w-32 rounded-full bg-sky-200">
                        <div className="h-2 w-20 rounded-full bg-sky-500" />
                      </div>
                      <p className="mt-1 text-xs font-semibold">Level 4 &mdash; 62%</p>
                    </div>
                  </div>
                )}
                {group === "teen" && (
                  <div className="grid w-full grid-cols-2 gap-2">
                    <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                      <p className="text-xs opacity-60">Streak</p>
                      <p className="text-lg font-bold">12 days</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                      <p className="text-xs opacity-60">Modules</p>
                      <p className="text-lg font-bold">24/30</p>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA button adapted by age */}
              <motion.button
                className={`${theme.colors.accent} mt-6 w-full py-3 font-bold text-white ${
                  group === "early" ? "rounded-2xl text-lg" : "rounded-xl text-sm"
                }`}
                whileTap={{ scale: 0.95 }}
                transition={JUICY_SPRINGS.bouncy}
              >
                {group === "early"
                  ? "Let\u2019s Go!"
                  : group === "middle"
                    ? "Start Quest"
                    : "Continue Learning"}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
