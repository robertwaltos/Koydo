"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type LinguaTone = "primary" | "speak" | "listen" | "streak" | "outline";

type LanguageButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: LinguaTone;
  size?: "sm" | "md" | "lg";
};

const toneStyles: Record<LinguaTone, string> = {
  primary: "bg-[#2563eb] text-white hover:bg-[#1d4ed8]",
  speak: "bg-gradient-to-r from-[#ec4899] to-[#f43f5e] text-white shadow-md",
  listen: "bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] text-white shadow-md",
  streak: "bg-gradient-to-r from-[#f59e0b] to-[#ef4444] text-white font-bold",
  outline:
    "border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/5 dark:border-[#60a5fa] dark:text-[#60a5fa]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const LanguageButton = forwardRef<HTMLButtonElement, LanguageButtonProps>(
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

LanguageButton.displayName = "LanguageButton";
export default LanguageButton;
