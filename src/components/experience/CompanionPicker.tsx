"use client";

import { AnimatePresence, motion } from "framer-motion";
import CompanionAvatarSVG from "@/components/experience/CompanionAvatarSVG";
import { COMPANIONS, type CompanionGender } from "@/lib/greeter/companion-config";
import { useCompanionPreferences } from "@/lib/greeter/companion-preferences";

interface CompanionPickerProps {
  onSelect: (gender: CompanionGender) => void;
}

export default function CompanionPicker({ onSelect }: CompanionPickerProps) {
  const { avatarStyle } = useCompanionPreferences();

  return (
    <AnimatePresence>
      <motion.div
        key="companion-picker-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        aria-modal
        role="dialog"
        aria-label="Choose your learning companion"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="w-full max-w-sm rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl"
        >
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-black text-zinc-900">Meet your guide! 🌟</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Pick a learning companion — they&apos;ll be with you every step of the way.
            </p>
          </div>

          {/* Side-by-side comparison header */}
          <div className="mb-5 flex justify-around">
            {(["female", "male"] as CompanionGender[]).map((gender) => {
              const companion = COMPANIONS[gender];
              return (
                <div key={gender} className="flex flex-col items-center gap-1.5">
                  <CompanionAvatarSVG
                    gender={gender}
                    size={52}
                    previewImageUrl={companion.previewImageUrl}
                    avatarStyle={avatarStyle}
                  />
                  <span className={`text-xs font-bold ${gender === "female" ? "text-violet-700" : "text-cyan-700"}`}>
                    {companion.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Choice cards */}
          <div className="flex flex-col gap-3">
            {(["female", "male"] as CompanionGender[]).map((gender) => {
              const companion = COMPANIONS[gender];
              const isViolet = gender === "female";
              return (
                <button
                  key={gender}
                  onClick={() => onSelect(gender)}
                  className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 ${
                    isViolet
                      ? "border-violet-200 bg-violet-50 hover:border-violet-400 focus-visible:ring-violet-400"
                      : "border-cyan-200 bg-cyan-50 hover:border-cyan-400 focus-visible:ring-cyan-400"
                  }`}
                  aria-label={`Choose ${companion.name}`}
                >
                  <CompanionAvatarSVG
                    gender={gender}
                    size={44}
                    previewImageUrl={companion.previewImageUrl}
                    avatarStyle={avatarStyle}
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-black ${isViolet ? "text-violet-800" : "text-cyan-800"}`}>
                      {companion.name}
                    </p>
                    <p className={`text-xs mt-0.5 ${isViolet ? "text-violet-600" : "text-cyan-600"}`}>
                      {companion.tagline}
                    </p>
                  </div>
                  <span className={`text-lg ${isViolet ? "text-violet-400" : "text-cyan-400"}`}>→</span>
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-center text-xs text-zinc-400">
            You can change your companion anytime in settings.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


