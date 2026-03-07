"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type MathTone = "primary" | "correct" | "wrong" | "hint" | "outline";

type MathButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: MathTone;
  size?: "sm" | "md" | "lg";
};

const toneStyles: Record<MathTone, string> = {
  primary: "bg-[#6c5ce7] text-white hover:bg-[#5b4cdb]",
  correct: "bg-[#10b981] text-white hover:bg-[#059669]",
  wrong: "bg-[#ef4444] text-white hover:bg-[#dc2626]",
  hint: "bg-gradient-to-r from-[#fdcb6e] to-[#f59e0b] text-[#1e1b4b] font-bold",
  outline:
    "border-2 border-[#6c5ce7] text-[#6c5ce7] hover:bg-[#6c5ce7]/5 dark:border-[#a29bfe] dark:text-[#a29bfe]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const MathButton = forwardRef<HTMLButtonElement, MathButtonProps>(
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

MathButton.displayName = "MathButton";
export default MathButton;
