"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type FinanceTone = "primary" | "bull" | "bear" | "gold" | "outline";

type FinanceButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: FinanceTone;
  size?: "sm" | "md" | "lg";
};

const toneStyles: Record<FinanceTone, string> = {
  primary: "bg-[#065f46] text-white hover:bg-[#064e3b]",
  bull: "bg-[#22c55e] text-white hover:bg-[#16a34a]",
  bear: "bg-[#ef4444] text-white hover:bg-[#dc2626]",
  gold: "bg-gradient-to-r from-[#eab308] to-[#f59e0b] text-[#1c1917] font-bold",
  outline: "border-2 border-[#065f46] text-[#065f46] hover:bg-[#065f46]/5 dark:border-[#059669] dark:text-[#059669]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const FinanceButton = forwardRef<HTMLButtonElement, FinanceButtonProps>(
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

FinanceButton.displayName = "FinanceButton";
export default FinanceButton;
