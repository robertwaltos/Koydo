"use client";

import Link from "next/link";
import { type ReactNode } from "react";

interface SubjectCubeProps {
  icon: ReactNode;
  label: string;
  href: string;
  glowColor: string;       // e.g. "59, 130, 246" (RGB values for dynamic glow)
  accentClass: string;      // Tailwind text color class for the icon
}

/**
 * A single glass-morphism cube card matching the cosmic design language.
 * Features:
 *  - Translucent glassmorphism background
 *  - Colored glow halo that intensifies on hover
 *  - 3D tilt micro-interaction on hover
 *  - Floating animation
 */
function SubjectCube({ icon, label, href, glowColor, accentClass }: SubjectCubeProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
    >
      {/* Outer glow halo */}
      <div
        className="absolute -inset-3 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ backgroundColor: `rgba(${glowColor}, 0.35)` }}
        aria-hidden="true"
      />

      {/* Glass cube */}
      <div
        className="glass-cube relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/[0.12] transition-all duration-500 group-hover:border-white/25 group-hover:scale-105 sm:h-24 sm:w-24 md:h-28 md:w-28"
        style={{
          background: `linear-gradient(135deg, rgba(${glowColor}, 0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(${glowColor}, 0.06) 100%)`,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: `0 0 20px 2px rgba(${glowColor}, 0.12), inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
      >
        {/* Inner highlight edge */}
        <div
          className="absolute inset-0 rounded-2xl opacity-30"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />

        {/* Sparkle dot */}
        <div
          className="absolute right-2 top-2 h-1 w-1 rounded-full bg-white/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* Icon */}
        <span className={`relative z-10 text-4xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110 sm:text-5xl ${accentClass}`}>
          {icon}
        </span>
      </div>

      {/* Label */}
      <span className="text-xs font-semibold tracking-wide text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-sm">
        {label}
      </span>
    </Link>
  );
}

/* ── Subject showcase data ── */
const subjects = [
  {
    icon: "🧭",
    label: "Explore",
    href: "/explore",
    glowColor: "56, 189, 248",    // cyan
    accentClass: "text-cyan-400",
  },
  {
    icon: "📖",
    label: "Reading",
    href: "/modules?subject=Reading",
    glowColor: "251, 146, 60",    // orange
    accentClass: "text-orange-400",
  },
  {
    icon: "⚛️",
    label: "Science",
    href: "/modules?subject=Science",
    glowColor: "52, 211, 153",    // emerald
    accentClass: "text-emerald-400",
  },
  {
    icon: "⏳",
    label: "History",
    href: "/modules?subject=History",
    glowColor: "192, 132, 252",   // purple
    accentClass: "text-purple-400",
  },
  {
    icon: "🔢",
    label: "Math",
    href: "/modules?subject=Mathematics",
    glowColor: "250, 204, 21",    // yellow
    accentClass: "text-yellow-400",
  },
  {
    icon: "💻",
    label: "Coding",
    href: "/modules?subject=Computer Science",
    glowColor: "99, 102, 241",    // indigo
    accentClass: "text-indigo-400",
  },
  {
    icon: "🏗️",
    label: "Engineering",
    href: "/modules?subject=Engineering",
    glowColor: "239, 68, 68",     // red
    accentClass: "text-red-400",
  },
  {
    icon: "💼",
    label: "Business",
    href: "/modules?subject=Business",
    glowColor: "20, 184, 166",    // teal
    accentClass: "text-teal-400",
  },
] as const;

/**
 * Interactive subject showcase — grid of glowing glass-morphism cubes.
 * Replaces the static icons-subjects.jpg image with a dynamic, hoverable display.
 */
export default function SubjectShowcase() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8 lg:grid-cols-8">
      {subjects.map((s) => (
        <SubjectCube key={s.label} {...s} />
      ))}
    </div>
  );
}
