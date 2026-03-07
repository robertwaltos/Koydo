"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

export type CdlButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "primary" | "go" | "caution" | "stop" | "outline";
  size?: "lg" | "md" | "sm";
};

const TONE_STYLES: Record<NonNullable<CdlButtonProps["tone"]>, string> = {
  primary: "bg-gradient-to-r from-[#1e3a5f] to-[#2c5282] text-white",
  go: "bg-gradient-to-r from-[#38a169] to-[#48bb78] text-white",
  caution: "bg-[#ecc94b] text-[#1a202c] font-bold",
  stop: "bg-gradient-to-r from-[#e53e3e] to-[#c53030] text-white",
  outline: "bg-transparent border-2 border-[#1e3a5f] text-[#1e3a5f] dark:border-[#63b3ed] dark:text-[#63b3ed]",
};

const SIZE_STYLES: Record<NonNullable<CdlButtonProps["size"]>, string> = {
  lg: "px-7 py-4 text-base",
  md: "px-5 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
};

export default function CdlButton({
  tone = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}: CdlButtonProps) {
  const { type, ...rest } = props;

  return (
    <motion.button
      type={type ?? "button"}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      disabled={disabled}
      className={[
        "relative inline-flex items-center justify-center gap-2 rounded-xl",
        "font-bold tracking-tight",
        "shadow-md hover:shadow-lg",
        "transition-shadow duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2",
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
