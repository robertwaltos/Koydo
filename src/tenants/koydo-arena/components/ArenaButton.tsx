"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

type ArenaTone = "primary" | "neon" | "hot" | "electric" | "outline";

type ArenaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: ArenaTone;
  size?: "sm" | "md" | "lg";
};

const toneStyles: Record<ArenaTone, string> = {
  primary:
    "bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40",
  neon:
    "bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] text-[#0f0f23] font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40",
  hot:
    "bg-gradient-to-r from-[#ec4899] to-[#f43f5e] text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40",
  electric:
    "bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40",
  outline:
    "border-2 border-[#7c3aed] text-[#a78bfa] hover:bg-[#7c3aed]/10",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const ArenaButton = forwardRef<HTMLButtonElement, ArenaButtonProps>(
  ({ tone = "primary", size = "md", className = "", children, ...rest }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={[
          "inline-flex items-center justify-center gap-2 rounded-2xl font-bold uppercase tracking-wider transition-all duration-200",
          toneStyles[tone],
          sizeStyles[size],
          className,
        ].join(" ")}
        {...(rest as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  },
);

ArenaButton.displayName = "ArenaButton";
export default ArenaButton;
