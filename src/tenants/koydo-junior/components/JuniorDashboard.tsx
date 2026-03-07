"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

import JuniorButton from "./JuniorButton";
import ModuleCard from "./ModuleCard";
import ParentGateOverlay from "./ParentGateOverlay";

export type JuniorWorld = {
  id: string;
  title: string;
  imageSrc: string;
  progress: number;
  badge?: string;
};

type JuniorDashboardProps = {
  worlds?: JuniorWorld[];
  completedLessons?: number;
  starsEarned?: number;
  streakDays?: number;
};

const DEFAULT_WORLDS: JuniorWorld[] = [
  {
    id: "color-cove",
    title: "Color Cove",
    imageSrc: "/assets/modules/dalle3-00715e20.png",
    progress: 3,
    badge: "Popular",
  },
  {
    id: "math-meadow",
    title: "Math Meadow",
    imageSrc: "/assets/modules/dalle3-07350b3f.png",
    progress: 1,
    badge: "New",
  },
  {
    id: "story-spark",
    title: "Story Spark",
    imageSrc: "/assets/modules/dalle3-107a49c7.png",
    progress: 4,
  },
  {
    id: "science-splash",
    title: "Science Splash",
    imageSrc: "/assets/modules/dalle3-1ce6817f.png",
    progress: 2,
  },
];

const CONFETTI_COLORS = ["#ff5fa2", "#ffd24a", "#4cc9ff", "#4ee3b2", "#b28dff"];

function ConfettiBurst({ active }: { active: boolean }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => {
        const size = 8 + (index % 6);
        const left = (index * 19 + 7) % 100;
        const delay = ((index % 7) * 0.08).toFixed(2);
        const duration = (2.1 + (index % 5) * 0.22).toFixed(2);
        return {
          id: `confetti-${index}`,
          size,
          left,
          delay,
          duration,
          color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
        };
      }),
    [],
  );

  if (!active) return null;

  return (
    <div className="explore-confetti-burst koydo-confetti" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            "--fall-delay": `${piece.delay}s`,
            "--fall-duration": `${piece.duration}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

function StarBurst({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center koydo-gamification"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.4, rotate: -10 }}
            animate={{ scale: [0.4, 1.1, 1], rotate: [0, 10, 0] }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-40 w-40"
          >
            {Array.from({ length: 7 }).map((_, index) => (
              <motion.div
                key={`star-${index}`}
                className="absolute"
                style={{
                  top: `${10 + (index % 3) * 20}%`,
                  left: `${8 + (index * 12) % 70}%`,
                }}
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#ffd24a"
                    d="M12 3.5l2.65 5.38 5.94.86-4.3 4.19 1.02 5.92L12 16.9l-5.31 2.95 1.02-5.92-4.3-4.19 5.94-.86L12 3.5z"
                  />
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function MascotCompanion({
  excited,
  onClick,
  showBubble,
}: {
  excited: boolean;
  onClick: () => void;
  showBubble: boolean;
}) {
  return (
    <div className="koydo-gamification fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBubble ? (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            className="rounded-2xl bg-white/90 px-4 py-2 text-sm font-bold text-[#24314f] shadow-lg"
          >
            High five! Keep going!
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={onClick}
        animate={excited ? { scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] } : { scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-24 w-24 rounded-full bg-gradient-to-br from-[#7fe3ff] via-[#ffd3f2] to-[#ffe26f] shadow-[0_16px_28px_rgba(36,49,79,0.2)]"
        aria-label="Companion mascot"
      >
        <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-[#24314f]" />
        <div className="absolute right-6 top-8 h-3 w-3 rounded-full bg-[#24314f]" />
        <div className="absolute left-1/2 top-12 h-3 w-6 -translate-x-1/2 rounded-b-full border-b-4 border-[#24314f]" />
        <div className="absolute -top-3 left-1/2 h-6 w-10 -translate-x-1/2 rounded-full bg-white/80" />
      </motion.button>
    </div>
  );
}

export default function JuniorDashboard({
  worlds,
  completedLessons = 0,
  starsEarned = 0,
  streakDays = 1,
}: JuniorDashboardProps) {
  const router = useRouter();
  const [celebrate, setCelebrate] = useState(false);
  const [mascotExcited, setMascotExcited] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  const worldCards = worlds && worlds.length > 0 ? worlds : DEFAULT_WORLDS;

  const triggerCelebration = () => {
    setCelebrate(true);
    setMascotExcited(true);
    setShowBubble(true);
    window.setTimeout(() => setCelebrate(false), 2600);
    window.setTimeout(() => setMascotExcited(false), 1200);
    window.setTimeout(() => setShowBubble(false), 1600);
  };

  const handleParentExit = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/auth/sign-in");
    router.refresh();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff9f4] font-[family-name:var(--font-display-round)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255, 207, 231, 0.9), transparent 45%), radial-gradient(circle at 80% 15%, rgba(203, 242, 255, 0.9), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255, 236, 200, 0.9), transparent 50%)",
        }}
      />

      <ConfettiBurst active={celebrate} />
      <StarBurst active={celebrate} />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 pb-24 pt-6 sm:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff5fa2]">Koydo Junior</p>
            <h1 className="mt-2 text-3xl font-extrabold text-[#24314f] sm:text-4xl">
              Welcome back, Explorer!
            </h1>
            <p className="mt-2 max-w-xl text-base font-semibold text-[#3b4763]">
              Pick a world, win stars, and level up with safe, playful learning.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <JuniorButton tone="sun" onClick={triggerCelebration}>
              I finished a task
            </JuniorButton>
            <ParentGateOverlay onSuccess={handleParentExit} actionText="sign out">
              <JuniorButton tone="sky">Parent Exit</JuniorButton>
            </ParentGateOverlay>
          </div>
        </header>

        <section className="rounded-[32px] border-2 border-white/80 bg-white/70 p-6 shadow-[0_20px_40px_rgba(36,49,79,0.15)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-[#24314f]">Today&apos;s Mission</h2>
              <p className="mt-2 text-sm font-semibold text-[#3b4763]">
                Complete one activity to earn a star burst and unlock your treasure chest.
              </p>
            </div>
            <JuniorButton tone="mint">Start Mission</JuniorButton>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-extrabold text-[#24314f]">World Carousel</h3>
            <p className="text-sm font-semibold text-[#3b4763]">Swipe to explore</p>
          </div>
          <div
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
            role="region"
            aria-label="World carousel"
          >
            {worldCards.map((world) => (
              <div key={world.id} className="snap-start">
                <ModuleCard
                  title={world.title}
                  imageSrc={world.imageSrc}
                  progress={world.progress}
                  badge={world.badge}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[28px] border-2 border-white/80 bg-[#ffeef7] p-5 shadow-[0_14px_28px_rgba(36,49,79,0.12)]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff5fa2]">Stars</p>
            <p className="mt-2 text-3xl font-extrabold text-[#24314f]">{starsEarned}</p>
            <p className="mt-2 text-sm font-semibold text-[#3b4763]">Earn more stars for surprise rewards.</p>
          </div>
          <div className="rounded-[28px] border-2 border-white/80 bg-[#e8f9ff] p-5 shadow-[0_14px_28px_rgba(36,49,79,0.12)]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4cc9ff]">Streak</p>
            <p className="mt-2 text-3xl font-extrabold text-[#24314f]">{streakDays} Days</p>
            <p className="mt-2 text-sm font-semibold text-[#3b4763]">Keep the streak glowing.</p>
          </div>
          <div className="rounded-[28px] border-2 border-white/80 bg-[#fff3dc] p-5 shadow-[0_14px_28px_rgba(36,49,79,0.12)]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff9b54]">Lessons</p>
            <p className="mt-2 text-3xl font-extrabold text-[#24314f]">{completedLessons}</p>
            <p className="mt-2 text-sm font-semibold text-[#3b4763]">Completed and ready for the next challenge.</p>
          </div>
        </section>
      </main>

      <MascotCompanion
        excited={mascotExcited}
        onClick={() => {
          setMascotExcited(true);
          setShowBubble(true);
          window.setTimeout(() => setMascotExcited(false), 800);
          window.setTimeout(() => setShowBubble(false), 1400);
        }}
        showBubble={showBubble}
      />
    </div>
  );
}
