"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

export type StemButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "primary" | "cyan" | "electric" | "code" | "outline";
  size?: "lg" | "md" | "sm";
};

const TONE_STYLES: Record<NonNullable<StemButtonProps["tone"]>, string> = {
  primary: "bg-gradient-to-r from-[#00b894] to-[#00cec9] text-white",
  cyan: "bg-gradient-to-r from-[#00cec9] to-[#0984e3] text-white",
  electric: "bg-gradient-to-r from-[#0984e3] to-[#6c5ce7] text-white",
  code: "bg-[#112240] text-[#64ffda] font-mono border border-[#64ffda]/30",
  outline: "bg-transparent border-2 border-[#00b894] text-[#00b894]",
};

const SIZE_STYLES: Record<NonNullable<StemButtonProps["size"]>, string> = {
  lg: "px-7 py-4 text-base",
  md: "px-5 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
};

export default function StemButton({
  tone = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}: StemButtonProps) {
  const { type, ...rest } = props;

  return (
    <motion.button
      type={type ?? "button"}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      disabled={disabled}
      className={[
        "relative inline-flex items-center justify-center gap-2 rounded-xl",
        "font-semibold tracking-tight",
        "shadow-md hover:shadow-lg",
        "transition-shadow duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b894] focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        SIZE_STYLES[size],
        TONE_STYLES[tone],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
