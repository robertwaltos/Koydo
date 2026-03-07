"use client";

import type { ButtonHTMLAttributes } from "react";

export type UniversityButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "primary" | "secondary" | "ghost" | "success" | "warning";
  size?: "sm" | "md" | "lg";
};

const TONE_STYLES: Record<NonNullable<UniversityButtonProps["tone"]>, string> = {
  primary:
    "border border-[#1d3557] bg-[#1d3557] text-[#f8fafc] hover:bg-[#274c77] focus-visible:ring-[#93b4d7]/45",
  secondary:
    "border border-[#9fb1c9] bg-[#e8eef7] text-[#10233b] hover:bg-[#dce7f5] focus-visible:ring-[#9fb1c9]/45",
  ghost:
    "border border-[#cdd7e5] bg-transparent text-[#1f2937] hover:bg-[#f1f5f9] focus-visible:ring-[#9fb1c9]/45",
  success:
    "border border-[#2f6f56] bg-[#2f6f56] text-[#f8fafc] hover:bg-[#285f4a] focus-visible:ring-[#7eb59e]/45",
  warning:
    "border border-[#a67c52] bg-[#a67c52] text-[#fffaf4] hover:bg-[#946b45] focus-visible:ring-[#d8bb8f]/45",
};

const SIZE_STYLES: Record<NonNullable<UniversityButtonProps["size"]>, string> = {
  sm: "h-8 rounded-[8px] px-3 text-[12px]",
  md: "h-9 rounded-[10px] px-4 text-[13px]",
  lg: "h-10 rounded-[10px] px-5 text-[14px]",
};

export default function UniversityButton({
  tone = "primary",
  size = "md",
  className = "",
  children,
  type,
  disabled,
  ...props
}: UniversityButtonProps) {
  return (
    <button
      type={type ?? "button"}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center gap-2 whitespace-nowrap",
        "font-[family-name:var(--font-display-sans)] font-semibold tracking-[0.01em]",
        "shadow-[0_1px_2px_rgba(2,6,23,0.08)]",
        "transition-[background-color,color,border-color,box-shadow] duration-150 ease-out",
        "focus-visible:outline-none focus-visible:ring-4",
        "disabled:cursor-not-allowed disabled:opacity-55",
        SIZE_STYLES[size],
        TONE_STYLES[tone],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
