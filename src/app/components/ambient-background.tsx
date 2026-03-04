"use client";

/**
 * AmbientBackground — Renders a fixed full-viewport gradient behind all content.
 *
 * Selects an age-appropriate gradient based on the active learner's profile
 * (age_years or grade_level) and rotates daily with a per-user seed so each
 * learner sees a consistent but gently changing backdrop.
 *
 * For unauthenticated visitors or profiles without age data the default is
 * a middle-school palette (ages 11-13) that feels universally pleasant.
 *
 * The gradients themselves are near-white (light) or near-dark (dark) — subtle
 * enough not to distract but enough to eliminate the "plain white" feel.
 */

import { useEffect, useMemo, useState } from "react";
import { useActiveProfile } from "@/lib/profiles/active-profile-context";
import {
  type AgeBand,
  ageToBand,
  getBackground,
  gradeToAge,
  hashString,
} from "@/lib/theme/backgrounds";

const nowMs = () => Date.now();

export default function AmbientBackground() {
  const { profile } = useActiveProfile();
  const [isDark, setIsDark] = useState(false);

  // Track resolved light/dark via the data-theme attribute ThemeProvider sets.
  useEffect(() => {
    const el = document.documentElement;
    const sync = () => setIsDark(el.dataset.theme === "dark");
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const background = useMemo(() => {
    // Determine age — prefer explicit age_years, fall back to grade_level.
    const age =
      profile?.age_years ??
      gradeToAge(profile?.grade_level) ??
      10; // default: universally pleasant

    const band: AgeBand = ageToBand(age);

    // Daily rotation + per-user offset for variety
    const dayOfYear = Math.floor(nowMs() / 86_400_000);
    const userSeed = profile?.id ? hashString(profile.id) : 0;

    return getBackground(band, dayOfYear + userSeed, isDark);
  }, [profile, isDark]);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none transition-[background] duration-1000 ease-out"
      style={{ background }}
      aria-hidden="true"
    />
  );
}
