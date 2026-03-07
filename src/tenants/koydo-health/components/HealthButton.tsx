"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type HealthTone = "primary" | "heart" | "calm" | "nutrition" | "outline";

type HealthButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: HealthTone;
  size?: "sm" | "md" | "lg";
};

const toneStyles: Record<HealthTone, string> = {
  primary: "bg-[#059669] text-white hover:bg-[#047857]",
  heart: "bg-gradient-to-r from-[#ef4444] to-[#f97316] text-white shadow-md",
  calm: "bg-gradient-to-r from-[#6366f1] to-[#0891b2] text-white shadow-md",
  nutrition: "bg-[#22c55e] text-white hover:bg-[#16a34a]",
  outline:
    "border-2 border-[#059669] text-[#059669] hover:bg-[#059669]/5 dark:border-[#34d399] dark:text-[#34d399]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const HealthButton = forwardRef<HTMLButtonElement, HealthButtonProps>(
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

HealthButton.displayName = "HealthButton";
export default HealthButton;
