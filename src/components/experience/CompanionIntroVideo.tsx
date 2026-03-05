"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CompanionGender } from "@/lib/greeter/companion-config";
import { COMPANIONS } from "@/lib/greeter/companion-config";

interface Props {
  gender: CompanionGender;
  videoUrl: string;
  onClose: () => void;
}

export default function CompanionIntroVideo({ gender, videoUrl, onClose }: Props) {
  const companion = COMPANIONS[gender];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const colorScheme = companion.colorScheme;

  // Auto-play muted on mount
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().then(() => setPlaying(true)).catch(() => { /* autoplay blocked */ });
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="intro-video"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.92 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        className="relative flex flex-col items-center justify-end"
        role="dialog"
        aria-label={`${companion.name}'s introduction video`}
      >
        {/* Actions Row Floating Above */}
        <div className="absolute top-0 right-0 z-10 flex gap-2 p-2">
          <button
            onClick={toggleMute}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white shadow-sm hover:bg-white/40 transition-colors"
            aria-label={muted ? "Unmute video" : "Mute video"}
            title={muted ? "Unmute" : "Mute"}
          >
            {muted ? <MuteIcon /> : <UnmuteIcon />}
          </button>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white shadow-sm hover:bg-white/40 transition-colors"
            aria-label="Close intro video"
          >
            <XIcon />
          </button>
        </div>

        {/* Video — Borderless and transparent-feeling */}
        <div className="relative w-[280px] sm:w-[320px] overflow-hidden rounded-b-none" style={{ aspectRatio: "9/16" }}>
          <video
            ref={videoRef}
            src={videoUrl}
            className="h-full w-full object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            playsInline
            muted={muted}
            onEnded={() => setEnded(true)}
            onPlay={() => setPlaying(true)}
          />
          
          {/* Replay overlay when ended */}
          {ended && (
            <button
              onClick={() => {
                const v = videoRef.current;
                if (!v) return;
                v.currentTime = 0;
                v.play();
                setEnded(false);
              }}
              className="absolute inset-0 flex items-center justify-center bg-black/40 text-white backdrop-blur-sm"
              aria-label="Replay intro"
            >
              <ReplayIcon />
            </button>
          )}
          {/* Autoplay hint if not yet playing */}
          {!playing && (
            <button
              onClick={() => {
                videoRef.current?.play().then(() => setPlaying(true)).catch(() => {});
              }}
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              aria-label="Play intro video"
            >
              <PlayIcon color={gender === "female" ? "#a78bfa" : "#22d3ee"} />
            </button>
          )}
        </div>

        {/* Floating Bubble CTA */}
        <div className={`relative -mt-12 z-10 w-full max-w-[260px] rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-xl bg-white/80 ${colorScheme.border}`}>
           <p className="text-sm font-bold text-zinc-800 leading-snug text-center mb-3">
            {gender === "female"
              ? "Hi! I'll be with you every step of your journey! 💜"
              : "Ready to explore and learn together? Let's go! 🚀"}
          </p>
          <button
            onClick={onClose}
            className={`w-full rounded-full px-4 py-2.5 text-sm font-black text-white shadow-md transition-transform hover:scale-105 active:scale-95 ${
              gender === "female" ? "bg-violet-500 hover:bg-violet-600" : "bg-cyan-500 hover:bg-cyan-600"
            }`}
          >
            Let&apos;s Start →
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2 4.5h2l3-2.5v7.5L4 7H2a.5.5 0 01-.5-.5v-2A.5.5 0 012 4.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8 4.5l3 3m0-3l-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2 4.5h2l3-2.5v7.5L4 7H2a.5.5 0 01-.5-.5v-2A.5.5 0 012 4.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M9 3.5a3.5 3.5 0 010 5M7.5 4.5a2 2 0 010 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="white" fillOpacity="0.8" stroke={color} strokeWidth="2" />
      <path d="M20 16l14 8-14 8V16z" fill={color} />
    </svg>
  );
}

function ReplayIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="18" fill="white" fillOpacity="0.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 20a7 7 0 107-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 10l-3 3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


