"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme/provider";
import type { AgeGroupTheme } from "@/lib/theme/provider";

interface AdaptiveBackgroundProps {
  ageGroup?: AgeGroupTheme;
  className?: string;
}

export default function AdaptiveBackground({ ageGroup: propAgeGroup, className = "" }: AdaptiveBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const themeCtx = useTheme();
  const ageGroup = propAgeGroup || themeCtx.ageGroup || "standard";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={`fixed inset-0 bg-white ${className}`} />;

  // Define the dynamic physics and colors for each developmental stage
  const themes = {
    "tiny-explorer": { // Ages 1-5: Bouncy, soft, pastel
      bg: "bg-[#fff9f0]",
      orbs: [
        { color: "bg-[#A7F3D0]", size: "w-[40vw] h-[40vw]", blur: "blur-3xl", x: ["-10%", "20%", "-10%"], y: ["0%", "20%", "0%"], duration: 12 },
        { color: "bg-[#FDE047]", size: "w-[50vw] h-[50vw]", blur: "blur-[100px]", x: ["80%", "50%", "80%"], y: ["-20%", "10%", "-20%"], duration: 15 },
        { color: "bg-[#FFB6B6]", size: "w-[30vw] h-[30vw]", blur: "blur-3xl", x: ["30%", "60%", "30%"], y: ["60%", "30%", "60%"], duration: 10 },
      ]
    },
    "young-adventurer": { // Ages 6-11: Vibrant, energetic
      bg: "bg-[#F0FDF4]",
      orbs: [
        { color: "bg-[#3B82F6]", size: "w-[45vw] h-[45vw]", blur: "blur-[120px]", x: ["-20%", "30%", "-20%"], y: ["-10%", "30%", "-10%"], duration: 10 },
        { color: "bg-[#10B981]", size: "w-[55vw] h-[55vw]", blur: "blur-[140px]", x: ["70%", "40%", "70%"], y: ["50%", "10%", "50%"], duration: 14 },
        { color: "bg-[#FB7185]", size: "w-[35vw] h-[35vw]", blur: "blur-[90px]", x: ["20%", "70%", "20%"], y: ["80%", "40%", "80%"], duration: 12 },
      ]
    },
    "teen-mode": { // Ages 12-17: Dark mode, cyber/neon, sleek
      bg: "bg-[#0B0F19]",
      orbs: [
        { color: "bg-[#A855F7]", size: "w-[50vw] h-[50vw]", blur: "blur-[150px]", x: ["0%", "40%", "0%"], y: ["-20%", "20%", "-20%"], duration: 18 },
        { color: "bg-[#06B6D4]", size: "w-[60vw] h-[60vw]", blur: "blur-[180px]", x: ["80%", "40%", "80%"], y: ["60%", "20%", "60%"], duration: 22 },
        { color: "bg-[#4F46E5]", size: "w-[40vw] h-[40vw]", blur: "blur-[120px]", x: ["-10%", "20%", "-10%"], y: ["70%", "30%", "70%"], duration: 15 },
      ]
    },
    "adult-pro": { // 18+ / Parent: Stripe-clean, ultra-subtle, airy
      bg: "bg-[#FAFAFA]",
      orbs: [
        { color: "bg-[#635BFF]", size: "w-[60vw] h-[60vw]", blur: "blur-[160px]", x: ["-10%", "10%", "-10%"], y: ["-10%", "5%", "-10%"], duration: 25 },
        { color: "bg-[#80E9FF]", size: "w-[70vw] h-[70vw]", blur: "blur-[200px]", x: ["70%", "50%", "70%"], y: ["60%", "40%", "60%"], duration: 30 },
        { color: "bg-[#E2E8F0]", size: "w-[50vw] h-[50vw]", blur: "blur-[100px]", x: ["20%", "40%", "20%"], y: ["20%", "10%", "20%"], duration: 20 },
      ]
    },
    "standard": {
      bg: "bg-[#FAFAFA]",
      orbs: [
        { color: "bg-[#34D399]", size: "w-[50vw] h-[50vw]", blur: "blur-[120px]", x: ["0%", "20%", "0%"], y: ["0%", "10%", "0%"], duration: 20 },
        { color: "bg-[#60A5FA]", size: "w-[60vw] h-[60vw]", blur: "blur-[150px]", x: ["60%", "40%", "60%"], y: ["40%", "20%", "40%"], duration: 25 },
      ]
    }
  };

  const currentTheme = themes[ageGroup] || themes["standard"];

  return (
    <div className={`fixed inset-0 z-[-1] overflow-hidden transition-colors duration-1000 ${currentTheme.bg} ${className}`}>
      {/* Dynamic Animated Orbs */}
      {currentTheme.orbs.map((orb, i) => (
        <motion.div
          key={`${ageGroup}-orb-${i}`}
          className={`absolute rounded-full opacity-40 mix-blend-multiply dark:mix-blend-screen ${orb.color} ${orb.size} ${orb.blur}`}
          animate={{
            x: orb.x,
            y: orb.y,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Heavy glassmorphism noise overlay to give it texture and premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />
    </div>
  );
}
