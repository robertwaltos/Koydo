"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CdlButton from "./CdlButton";

// ── Types ─────────────────────────────────────────────────────────────────────

type CdlClass = "A" | "B" | "C";

type EndorsementId = "H" | "N" | "P" | "S" | "T" | "X";

type Endorsement = {
  id: EndorsementId;
  name: string;
  description: string;
  questions: number;
  passingScore: number;
  progress: number; // 0-100
  icon: string;
};

type StudySection = {
  id: string;
  title: string;
  chapters: number;
  completedChapters: number;
  color: string;
};

type CdlDashboardProps = {
  selectedClass?: CdlClass;
  endorsements?: Endorsement[];
  studySections?: StudySection[];
  practiceTestsCompleted?: number;
  bestScore?: number;
  streakDays?: number;
  studyHours?: number;
};

// ── Default Data ──────────────────────────────────────────────────────────────

const CDL_CLASSES: { id: CdlClass; label: string; vehicles: string }[] = [
  { id: "A", label: "Class A", vehicles: "Tractor-trailers, truck & trailer combos, tankers, livestock carriers, flatbeds" },
  { id: "B", label: "Class B", vehicles: "Straight trucks, large buses, dump trucks, box trucks (26,001+ lbs)" },
  { id: "C", label: "Class C", vehicles: "Small HAZMAT vehicles, passenger vans (16+ pax), small tank vehicles" },
];

const DEFAULT_ENDORSEMENTS: Endorsement[] = [
  { id: "H", name: "Hazmat", description: "Hazardous materials transport", questions: 30, passingScore: 80, progress: 0, icon: "hazmat" },
  { id: "N", name: "Tanker", description: "Liquid bulk tanker vehicles", questions: 20, passingScore: 80, progress: 0, icon: "tanker" },
  { id: "P", name: "Passenger", description: "Buses and passenger vehicles", questions: 20, passingScore: 80, progress: 0, icon: "passenger" },
  { id: "S", name: "School Bus", description: "School bus operations", questions: 20, passingScore: 80, progress: 0, icon: "school" },
  { id: "T", name: "Doubles/Triples", description: "Double and triple trailer combos", questions: 20, passingScore: 80, progress: 0, icon: "doubles" },
  { id: "X", name: "Tanker + Hazmat", description: "Combined N + H endorsement", questions: 50, passingScore: 80, progress: 0, icon: "combo" },
];

const DEFAULT_STUDY_SECTIONS: StudySection[] = [
  { id: "general", title: "General Knowledge", chapters: 14, completedChapters: 0, color: "#1e3a5f" },
  { id: "air-brakes", title: "Air Brakes", chapters: 8, completedChapters: 0, color: "#4299e1" },
  { id: "combination", title: "Combination Vehicles", chapters: 6, completedChapters: 0, color: "#38a169" },
  { id: "pre-trip", title: "Pre-Trip Inspection", chapters: 10, completedChapters: 0, color: "#ecc94b" },
  { id: "driving", title: "Driving Safely", chapters: 12, completedChapters: 0, color: "#e53e3e" },
  { id: "cargo", title: "Transporting Cargo", chapters: 6, completedChapters: 0, color: "#805ad5" },
  { id: "signs", title: "Road Signs & Signals", chapters: 8, completedChapters: 0, color: "#dd6b20" },
  { id: "state", title: "State-Specific Rules", chapters: 4, completedChapters: 0, color: "#4a5568" },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

const ENDORSEMENT_ICONS: Record<string, JSX.Element> = {
  hazmat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  tanker: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="10" ry="6" /><line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  ),
  passenger: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  school: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="6" width="22" height="12" rx="2" /><circle cx="6" cy="20" r="2" /><circle cx="18" cy="20" r="2" />
      <line x1="5" y1="10" x2="5" y2="14" /><line x1="9" y1="10" x2="9" y2="14" />
      <line x1="13" y1="10" x2="13" y2="14" /><line x1="17" y1="10" x2="17" y2="14" />
    </svg>
  ),
  doubles: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="8" width="8" height="8" rx="1" /><rect x="11" y="8" width="8" height="8" rx="1" />
      <line x1="9" y1="12" x2="11" y2="12" /><circle cx="5" cy="18" r="2" /><circle cx="15" cy="18" r="2" />
    </svg>
  ),
  combo: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <ellipse cx="12" cy="15" rx="4" ry="2" />
    </svg>
  ),
};

// ── Components ────────────────────────────────────────────────────────────────

function ProgressBar({ value, max = 100, color }: { value: number; max?: number; color: string }) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
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

function ClassSelector({
  selected,
  onSelect,
}: {
  selected: CdlClass;
  onSelect: (c: CdlClass) => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {CDL_CLASSES.map((cls) => (
        <motion.button
          key={cls.id}
          type="button"
          onClick={() => onSelect(cls.id)}
          whileTap={{ scale: 0.97 }}
          className={[
            "flex-1 rounded-xl border p-4 text-left transition-all",
            selected === cls.id
              ? "border-[#1e3a5f] bg-[#1e3a5f] text-white shadow-lg dark:border-[#63b3ed] dark:bg-[#1a2738]"
              : "border-[#e2e8f0] bg-white hover:border-[#1e3a5f]/30 dark:border-[#2d3f55] dark:bg-[#1a2738]/50",
          ].join(" ")}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">{cls.label}</span>
            {selected === cls.id ? (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            ) : null}
          </div>
          <p className={[
            "mt-1 text-xs",
            selected === cls.id ? "text-white/80" : "text-[#4a5568] dark:text-[#a0aec0]",
          ].join(" ")}>
            {cls.vehicles}
          </p>
        </motion.button>
      ))}
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────

export default function CdlDashboard({
  selectedClass: initialClass = "A",
  endorsements,
  studySections,
  practiceTestsCompleted = 0,
  bestScore = 0,
  streakDays = 0,
  studyHours = 0,
}: CdlDashboardProps) {
  const [cdlClass, setCdlClass] = useState<CdlClass>(initialClass);
  const [activeTab, setActiveTab] = useState<"study" | "endorsements" | "practice">("study");
  const endorsementList = endorsements ?? DEFAULT_ENDORSEMENTS;
  const sectionList = studySections ?? DEFAULT_STUDY_SECTIONS;

  return (
    <div className="relative min-h-screen bg-[#f7fafc] dark:bg-[#0f1923]">
      {/* Top accent bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-1.5 w-full"
        style={{ background: "linear-gradient(90deg, #1e3a5f 0%, #4299e1 50%, #38a169 100%)" }}
      />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 pb-20 pt-8 sm:px-8">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e3a5f] text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="1" y="3" width="15" height="13" rx="1" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#1e3a5f] dark:text-[#63b3ed]">
                CDL Prep
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-bold text-[#1a202c] dark:text-[#e2e8f0] sm:text-4xl">
              CDL License Study
            </h1>
            <p className="mt-2 max-w-lg text-sm text-[#4a5568] dark:text-[#a0aec0]">
              Master the CDL knowledge test with state-aligned study guides, practice tests, and endorsement prep.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <CdlButton tone="outline" size="sm">Study Guide</CdlButton>
            <CdlButton tone="primary" size="sm">Take Practice Test</CdlButton>
          </div>
        </header>

        {/* CDL Class Selector */}
        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#4a5568] dark:text-[#a0aec0]">
            Select Your CDL Class
          </h2>
          <ClassSelector selected={cdlClass} onSelect={setCdlClass} />
        </section>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Practice Tests", value: practiceTestsCompleted.toString(), color: "#1e3a5f" },
            { label: "Best Score", value: bestScore > 0 ? `${bestScore}%` : "--", color: bestScore >= 80 ? "#38a169" : "#e53e3e" },
            { label: "Study Hours", value: studyHours.toString(), color: "#4299e1" },
            { label: "Streak", value: `${streakDays}d`, color: "#ecc94b" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm dark:border-[#2d3f55] dark:bg-[#1a2738]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4a5568] dark:text-[#a0aec0]">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tab navigation */}
        <div className="flex gap-1 rounded-xl bg-[#edf2f7] p-1 dark:bg-[#1a2738]">
          {(["study", "endorsements", "practice"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={[
                "flex-1 rounded-lg px-4 py-2.5 text-sm font-bold capitalize transition-all",
                activeTab === tab
                  ? "bg-white text-[#1a202c] shadow-sm dark:bg-[#243447] dark:text-[#e2e8f0]"
                  : "text-[#4a5568] hover:text-[#1a202c] dark:text-[#a0aec0] dark:hover:text-[#e2e8f0]",
              ].join(" ")}
            >
              {tab === "practice" ? "Practice Tests" : tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === "study" ? (
            <motion.section
              key="study"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {sectionList.map((section) => (
                <motion.button
                  key={section.id}
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex flex-col gap-3 rounded-xl border border-[#e2e8f0] bg-white p-5 text-left shadow-sm transition-all hover:border-[#1e3a5f]/30 dark:border-[#2d3f55] dark:bg-[#1a2738]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: section.color }}
                      />
                      <h3 className="text-sm font-bold text-[#1a202c] dark:text-[#e2e8f0]">{section.title}</h3>
                    </div>
                    <span className="text-xs font-semibold text-[#4a5568] dark:text-[#a0aec0]">
                      {section.completedChapters}/{section.chapters}
                    </span>
                  </div>
                  <ProgressBar
                    value={section.completedChapters}
                    max={section.chapters}
                    color={section.color}
                  />
                </motion.button>
              ))}
            </motion.section>
          ) : activeTab === "endorsements" ? (
            <motion.section
              key="endorsements"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {endorsementList.map((end) => (
                <motion.button
                  key={end.id}
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col gap-3 rounded-xl border border-[#e2e8f0] bg-white p-5 text-left shadow-sm transition-all hover:shadow-md dark:border-[#2d3f55] dark:bg-[#1a2738]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1e3a5f]/10 text-[#1e3a5f] dark:bg-[#63b3ed]/10 dark:text-[#63b3ed]">
                      {ENDORSEMENT_ICONS[end.icon] ?? ENDORSEMENT_ICONS.hazmat}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-[#1e3a5f] px-1.5 py-0.5 text-xs font-bold text-white">{end.id}</span>
                        <h3 className="text-sm font-bold text-[#1a202c] dark:text-[#e2e8f0]">{end.name}</h3>
                      </div>
                      <p className="mt-0.5 text-xs text-[#4a5568] dark:text-[#a0aec0]">{end.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#4a5568] dark:text-[#a0aec0]">
                    <span>{end.questions} questions</span>
                    <span>Pass: {end.passingScore}%</span>
                  </div>
                  <ProgressBar value={end.progress} color="#1e3a5f" />
                </motion.button>
              ))}
            </motion.section>
          ) : (
            <motion.section
              key="practice"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex flex-col gap-4"
            >
              {/* Practice test cards */}
              {[
                { title: "General Knowledge", questions: 50, time: "60 min", passing: "80%", color: "#1e3a5f" },
                { title: "Air Brakes", questions: 25, time: "30 min", passing: "80%", color: "#4299e1" },
                { title: "Combination Vehicles", questions: 20, time: "25 min", passing: "80%", color: "#38a169" },
                { title: "Full CDL Class A Exam", questions: 95, time: "120 min", passing: "80%", color: "#e53e3e" },
              ].map((test) => (
                <div
                  key={test.title}
                  className="flex flex-col gap-3 rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-[#2d3f55] dark:bg-[#1a2738]"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-12 w-1.5 rounded-full"
                      style={{ backgroundColor: test.color }}
                    />
                    <div>
                      <h3 className="text-sm font-bold text-[#1a202c] dark:text-[#e2e8f0]">{test.title}</h3>
                      <p className="mt-0.5 text-xs text-[#4a5568] dark:text-[#a0aec0]">
                        {test.questions} questions &middot; {test.time} &middot; Passing: {test.passing}
                      </p>
                    </div>
                  </div>
                  <CdlButton tone="primary" size="sm">Start Test</CdlButton>
                </div>
              ))}

              {/* Timed test simulation info */}
              <div className="rounded-xl border border-[#4299e1]/20 bg-[#4299e1]/5 p-5 dark:border-[#63b3ed]/20 dark:bg-[#63b3ed]/5">
                <h3 className="text-sm font-bold text-[#1e3a5f] dark:text-[#63b3ed]">Realistic Test Simulation</h3>
                <p className="mt-2 text-xs text-[#4a5568] dark:text-[#a0aec0]">
                  Our practice tests mirror the real CDL exam format used at your state DMV.
                  Questions are randomly drawn from a pool based on the FMCSA CDL manual.
                  Timed mode, instant scoring, and detailed explanations for every answer.
                </p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Federal/state notice */}
        <section className="rounded-xl border border-[#e2e8f0] bg-[#edf2f7] p-5 dark:border-[#2d3f55] dark:bg-[#1a2738]">
          <h3 className="text-sm font-bold text-[#1a202c] dark:text-[#e2e8f0]">About CDL Testing</h3>
          <p className="mt-2 text-xs leading-relaxed text-[#4a5568] dark:text-[#a0aec0]">
            CDL knowledge tests follow federal FMCSA standards. The core content (General Knowledge,
            Air Brakes, Combination Vehicles) is the same nationwide. Some states add a small number of
            state-specific questions about local regulations, fines, and reporting procedures. The passing
            score is 80% in all states. Class A requires General Knowledge + Combination Vehicles + Air Brakes.
            Endorsements (Hazmat, Tanker, Passenger, School Bus, Doubles/Triples) are separate tests.
            HAZMAT endorsement requires TSA background check. Minimum age: 18 for intrastate, 21 for interstate.
          </p>
        </section>
      </main>
    </div>
  );
}
