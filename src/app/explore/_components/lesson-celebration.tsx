"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SpeakButton from "./speak-button";
import { usePreReaderMode } from "./pre-reader-mode";

type LessonCelebrationProps = {
  lessonTitle: string;
  quizScore?: number;
  quizTotal?: number;
  glowColor: string;
  gradient: string;
  badge: string;
  /** Link back to the topic world */
  worldHref: string;
  /** Link to the next lesson in the module, if any */
  nextLessonHref?: string;
};

function getStars(score: number, total: number): number {
  if (total === 0) return 3;
  const pct = (score / total) * 100;
  if (pct >= 90) return 3;
  if (pct >= 70) return 2;
  if (pct >= 45) return 1;
  return 0;
}

type Tier = { label: string; color: string; bgColor: string; emoji: string };

function getTier(stars: number): Tier {
  if (stars >= 3) return { label: "Amazing work! You're a star!", color: "#ca8a04", bgColor: "#fefce8", emoji: "🏆" };
  if (stars >= 2) return { label: "Great job! Keep going!", color: "#2563eb", bgColor: "#eff6ff", emoji: "🥈" };
  if (stars >= 1) return { label: "Good start! Try again to earn more stars!", color: "#c2410c", bgColor: "#fff7ed", emoji: "🥉" };
  return { label: "Nice try! Practice makes perfect!", color: "#6b21a8", bgColor: "#faf5ff", emoji: "💪" };
}

/* SVG Star component — consistent rendering across platforms */
function Star({ filled, size = 48, delay = 0 }: { filled: boolean; size?: number; delay?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={filled ? "explore-star-glow" : ""}
      style={{ animationDelay: `${delay}ms` }}
      aria-hidden="true"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
        fill={filled ? "#facc15" : "none"}
        stroke={filled ? "#eab308" : "#d4d4d8"}
        strokeWidth={filled ? 1 : 1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Confetti particle data — generated once */
const CONFETTI_COLORS = ["#facc15", "#22c55e", "#3b82f6", "#f472b6", "#a855f7", "#f97316", "#06b6d4"];

function generateConfetti(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    fallDuration: `${2 + Math.random() * 2}s`,
    fallDelay: `${Math.random() * 1.2}s`,
    size: 6 + Math.random() * 8,
    rotation: Math.random() * 360,
  }));
}

export default function LessonCelebration({
  lessonTitle,
  quizScore,
  quizTotal,
  glowColor,
  gradient,
  badge,
  worldHref,
  nextLessonHref,
}: LessonCelebrationProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const hasQuiz = typeof quizScore === "number" && typeof quizTotal === "number";
  const stars = hasQuiz ? getStars(quizScore, quizTotal) : 3;
  const tier = getTier(stars);

  // Generate confetti particles once
  const confettiPieces = useMemo(() => generateConfetti(40), []);
  const [showConfetti, setShowConfetti] = useState(true);

  // Auto-dismiss confetti after animation
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Confetti burst */}
      {showConfetti ? (
        <div className="explore-confetti-burst" aria-hidden="true">
          {confettiPieces.map((p) => (
            <span
              key={p.id}
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                borderRadius: p.size > 10 ? "50%" : "2px",
                transform: `rotate(${p.rotation}deg)`,
                ["--fall-duration" as string]: p.fallDuration,
                ["--fall-delay" as string]: p.fallDelay,
              }}
            />
          ))}
        </div>
      ) : null}

      <div
        className="explore-scene-enter flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 py-12"
        style={{ background: gradient }}
      >
        {/* Stars — SVG for consistency */}
        <div className="flex items-center gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="explore-card-pop"
              style={{ animationDelay: `${300 + i * 200}ms` }}
            >
              <Star filled={i < stars} size={56} delay={i * 200} />
            </div>
          ))}
        </div>

        {/* Tier badge */}
        <div
          className="explore-card-pop rounded-2xl border-2 px-5 py-2"
          style={{
            animationDelay: "800ms",
            borderColor: tier.color,
            backgroundColor: tier.bgColor,
          }}
        >
          <span className="text-sm font-extrabold" style={{ color: tier.color }}>
            {isPreReaderMode ? tier.emoji : `${tier.emoji} ${stars === 3 ? "Gold" : stars === 2 ? "Silver" : stars === 1 ? "Bronze" : "Keep Trying"}`}
          </span>
        </div>

        {/* Badge + title */}
        <span className="explore-float text-6xl" aria-hidden="true">
          {badge}
        </span>

        <h2 className="text-center text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          {isPreReaderMode ? "🎉" : tier.label}
        </h2>

        <p
          className={`text-center text-base text-zinc-700 ${isPreReaderMode ? "sr-only" : ""}`}
        >
          You completed <strong>{lessonTitle}</strong>
        </p>

        {/* Quiz score — elevated card */}
        {hasQuiz ? (
          <div
            className="explore-card-elevated explore-card-pop rounded-2xl border-2 bg-white/80 px-8 py-5 text-center backdrop-blur-sm"
            style={{ borderColor: glowColor, animationDelay: "600ms" }}
          >
            <p className={`text-sm font-semibold text-zinc-600 ${isPreReaderMode ? "sr-only" : ""}`}>
              Quiz Score
            </p>
            <p className="mt-1 text-4xl font-extrabold" style={{ color: glowColor }}>
              {quizScore}/{quizTotal}
            </p>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${quizTotal > 0 ? (quizScore / quizTotal) * 100 : 0}%`,
                  backgroundColor: glowColor,
                }}
              />
            </div>
          </div>
        ) : null}

        <SpeakButton
          text={`${tier.label} You completed ${lessonTitle}.`}
          label={isPreReaderMode ? "🔊" : "Hear It"}
        />

        {/* Navigation — clear visual hierarchy */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={worldHref}
            className="ui-focus-ring inline-flex min-h-14 items-center rounded-full border-2 px-6 py-3 text-base font-bold transition-all duration-200 hover:bg-white/80 active:scale-95"
            style={{ borderColor: glowColor, color: glowColor }}
          >
            {isPreReaderMode ? (
              <>
                <span aria-hidden="true">🌍</span>
                <span className="sr-only">Back to world</span>
              </>
            ) : (
              "Back to World"
            )}
          </Link>
          {nextLessonHref ? (
            <Link
              href={nextLessonHref}
              className="ui-focus-ring inline-flex min-h-14 items-center rounded-full px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95"
              style={{ backgroundColor: glowColor }}
            >
              {isPreReaderMode ? (
                <>
                  <span aria-hidden="true">➡️</span>
                  <span className="sr-only">Next adventure</span>
                </>
              ) : (
                "Next Adventure"
              )}
            </Link>
          ) : (
            <Link
              href="/explore"
              className="ui-focus-ring inline-flex min-h-14 items-center rounded-full px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95"
              style={{ backgroundColor: glowColor }}
            >
              {isPreReaderMode ? (
                <>
                  <span aria-hidden="true">🌍</span>
                  <span className="sr-only">Explore more worlds</span>
                </>
              ) : (
                "Explore More Worlds"
              )}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
