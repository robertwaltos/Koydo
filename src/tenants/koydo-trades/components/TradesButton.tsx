"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

export type TradesButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "primary" | "steel" | "safety" | "bolt" | "outline";
  size?: "lg" | "md" | "sm";
};

const TONE_STYLES: Record<NonNullable<TradesButtonProps["tone"]>, string> = {
  primary: "bg-gradient-to-r from-[#e67e22] to-[#d35400] text-white",
  steel: "bg-gradient-to-r from-[#2c3e50] to-[#34495e] text-white",
  safety: "bg-[#f1c40f] text-[#2c3e50] font-bold",
  bolt: "bg-gradient-to-r from-[#27ae60] to-[#2ecc71] text-white",
  outline: "bg-transparent border-2 border-[#e67e22] text-[#d35400]",
};

const SIZE_STYLES: Record<NonNullable<TradesButtonProps["size"]>, string> = {
  lg: "px-7 py-4 text-base",
  md: "px-5 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
};

export default function TradesButton({
  tone = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}: TradesButtonProps) {
  const { type, ...rest } = props;

  return (
    <motion.button
      type={type ?? "button"}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      disabled={disabled}
      className={[
        "relative inline-flex items-center justify-center gap-2 rounded-[10px]",
        "font-bold tracking-tight uppercase",
        "shadow-md hover:shadow-lg",
        "transition-shadow duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e67e22] focus-visible:ring-offset-2",
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
