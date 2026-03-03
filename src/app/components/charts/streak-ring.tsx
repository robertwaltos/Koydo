"use client";

import { motion } from "framer-motion";

type StreakRingProps = {
  current: number;
  target: number;
  label?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
};

export default function StreakRing({
  current,
  target,
  label = "Day Streak",
  size = 120,
  strokeWidth = 10,
  color = "#635bff",
}: StreakRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(current / Math.max(target, 1), 1);
  const strokeDash = circumference * progress;
  const center = size / 2;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Background ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#e3e8ee"
            strokeWidth={strokeWidth}
          />
          {/* Animated progress ring */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - strokeDash }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[22px] font-bold text-[#1a1f36]">{current}</span>
          <span className="text-[10px] text-[#697386]">days</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[12px] font-semibold text-[#1a1f36]">{label}</p>
        <p className="text-[10px] text-[#697386]">Goal: {target} days</p>
      </div>
    </div>
  );
}
