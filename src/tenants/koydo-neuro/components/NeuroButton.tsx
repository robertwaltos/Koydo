"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type NeuroTone = "primary" | "synapse" | "focus" | "memory" | "outline";

type NeuroButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: NeuroTone;
  size?: "sm" | "md" | "lg";
};

const toneStyles: Record<NeuroTone, string> = {
  primary: "bg-[#0891b2] text-white hover:bg-[#0e7490]",
  synapse: "bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white shadow-md",
  focus: "bg-[#10b981] text-white hover:bg-[#059669]",
  memory: "bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-bold",
  outline:
    "border-2 border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2]/5 dark:border-[#22d3ee] dark:text-[#22d3ee]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const NeuroButton = forwardRef<HTMLButtonElement, NeuroButtonProps>(
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

NeuroButton.displayName = "NeuroButton";
export default NeuroButton;
