"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type SatTone = "primary" | "score" | "correct" | "wrong" | "outline";

type SatButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: SatTone;
  size?: "sm" | "md" | "lg";
};

const toneStyles: Record<SatTone, string> = {
  primary:
    "bg-[#1d4ed8] text-white hover:bg-[#1e3a8a] active:bg-[#1e3a8a]",
  score:
    "bg-gradient-to-r from-[#7c3aed] to-[#1d4ed8] text-white shadow-md",
  correct:
    "bg-[#059669] text-white hover:bg-[#047857]",
  wrong:
    "bg-[#dc2626] text-white hover:bg-[#b91c1c]",
  outline:
    "border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#1d4ed8]/5 dark:border-[#3b82f6] dark:text-[#3b82f6]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const SatButton = forwardRef<HTMLButtonElement, SatButtonProps>(
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

SatButton.displayName = "SatButton";
export default SatButton;
