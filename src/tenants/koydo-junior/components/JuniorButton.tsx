"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

export type JuniorButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "primary" | "sky" | "sun" | "mint" | "lavender";
  size?: "lg" | "md";
};

const TONE_STYLES: Record<NonNullable<JuniorButtonProps["tone"]>, string> = {
  primary: "bg-gradient-to-b from-[#ff7ab6] to-[#ff4f9a] text-white",
  sky: "bg-gradient-to-b from-[#6ed5ff] to-[#34b9ff] text-white",
  sun: "bg-gradient-to-b from-[#ffe067] to-[#ffc933] text-[#4a3717]",
  mint: "bg-gradient-to-b from-[#6af1c6] to-[#34d9a3] text-[#0f3b30]",
  lavender: "bg-gradient-to-b from-[#c9a7ff] to-[#a377ff] text-white",
};

const SIZE_STYLES: Record<NonNullable<JuniorButtonProps["size"]>, string> = {
  lg: "px-8 py-5 text-lg",
  md: "px-6 py-4 text-base",
};

export default function JuniorButton({
  tone = "primary",
  size = "lg",
  className = "",
  children,
  disabled,
  ...props
}: JuniorButtonProps) {
  const { type, ...rest } = props;

  return (
    <motion.button
      type={type ?? "button"}
      whileTap={{ scaleX: 0.98, scaleY: 0.94, y: 2 }}
      transition={{ type: "spring", stiffness: 480, damping: 18 }}
      disabled={disabled}
      className={[
        "relative inline-flex min-h-[64px] min-w-[64px] items-center justify-center gap-2 rounded-[24px]",
        "font-[family-name:var(--font-display-round)] font-extrabold tracking-wide",
        "shadow-[0_10px_0_rgba(36,49,79,0.18),0_18px_30px_rgba(36,49,79,0.22)]",
        "transition-[transform,box-shadow,filter] duration-150",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        "disabled:cursor-not-allowed disabled:opacity-60",
        SIZE_STYLES[size],
        TONE_STYLES[tone],
        className,
      ].join(" ")}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-1 rounded-[20px] bg-white/25 blur-[1px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[24px] ring-2 ring-white/35"
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
