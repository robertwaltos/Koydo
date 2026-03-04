"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CompanionAvatarSVG from "@/components/experience/CompanionAvatarSVG";
import {
  COMPANIONS,
  type CompanionGender,
} from "@/lib/greeter/companion-config";

const SESSION_KEY = "koydo.landing.companion";

/**
 * LandingCompanion
 *
 * Randomly picks a companion (Aria or Kai) and displays their HeyGen photo
 * with a welcome greeting on the landing page hero section.
 * Stores the pick in sessionStorage so it persists across page loads
 * and can be carried over to post-signup companion assignment.
 */
export default function LandingCompanion() {
  const [gender, setGender] = useState<CompanionGender | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check for existing pick in sessionStorage
    const stored = sessionStorage.getItem(SESSION_KEY) as CompanionGender | null;
    if (stored === "female" || stored === "male") {
      setGender(stored);
    } else {
      const pick: CompanionGender = Math.random() < 0.5 ? "female" : "male";
      sessionStorage.setItem(SESSION_KEY, pick);
      setGender(pick);
    }
  }, []);

  if (!gender) return null;

  const companion = COMPANIONS[gender];
  const greeting = "Hi! I'm here to help you learn anything, at any age!";

  const handleClick = () => {
    router.push("/auth/sign-up");
  };

  const handlePlayGreeting = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setHasInteracted(true);
    const audio = new Audio(`/audio/greetings/${gender}-landing-0.mp3`);
    audioRef.current = audio;
    audio.play().catch(() => {
      // Audio not available — silent fail
      audioRef.current = null;
    });
    audio.onended = () => { audioRef.current = null; };
  };

  return (
    <div className="flex flex-col items-center gap-4 lg:items-start">
      {/* Avatar with border glow */}
      <button
        onClick={handlePlayGreeting}
        className="group relative"
        aria-label={`Hear ${companion.name} say hello`}
        title={`Hear ${companion.name} say hello`}
      >
        <div
          className="absolute -inset-1.5 rounded-full opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-70"
          style={{
            background: `radial-gradient(circle, ${companion.colorScheme.primary}60 0%, transparent 70%)`,
          }}
        />
        <CompanionAvatarSVG
          gender={gender}
          size={120}
          previewImageUrl={companion.previewImageUrl}
          className="relative"
        />
        {/* Play indicator overlay */}
        {!hasInteracted && (
          <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-500 shadow-lg">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden>
              <path d="M1 1.5v11l10-5.5L1 1.5z" fill="white" />
            </svg>
          </div>
        )}
      </button>

      {/* Greeting bubble */}
      <div
        className="cursor-pointer rounded-2xl border px-5 py-3.5 shadow-md transition-all duration-200 hover:shadow-lg"
        style={{
          borderColor: `${companion.colorScheme.primary}30`,
          background: "rgba(255,255,255,0.92)",
        }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter") handleClick(); }}
        aria-label="Sign up to start learning"
      >
        <p className="text-sm font-bold text-zinc-800">
          Hi! I&apos;m {companion.name}!
        </p>
        <p className="mt-1 max-w-[22ch] text-xs leading-relaxed text-zinc-500">
          {greeting}
        </p>
        <p
          className="mt-2 text-xs font-semibold"
          style={{ color: companion.colorScheme.primary }}
        >
          Tap to get started →
        </p>
      </div>
    </div>
  );
}
