"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type MusicTone = "primary" | "rhythm" | "melody" | "harmony" | "outline";

type MusicButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: MusicTone;
  size?: "sm" | "md" | "lg";
};

const toneStyles: Record<MusicTone, string> = {
  primary: "bg-[#7c3aed] text-white hover:bg-[#6d28d9]",
  rhythm: "bg-gradient-to-r from-[#ef4444] to-[#ec4899] text-white shadow-md",
  melody: "bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white shadow-md",
  harmony: "bg-gradient-to-r from-[#10b981] to-[#14b8a6] text-white shadow-md",
  outline:
    "border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed]/5 dark:border-[#a78bfa] dark:text-[#a78bfa]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const MusicButton = forwardRef<HTMLButtonElement, MusicButtonProps>(
  ({ tone = "primary", size = "md", className = "", children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={[
          "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-150",
          toneStyles[tone],
          sizeStyles[size],
          className,
        ].join(" ")}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

MusicButton.displayName = "MusicButton";
export default MusicButton;
