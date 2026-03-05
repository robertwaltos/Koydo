"use client";

import type { ButtonHTMLAttributes } from "react";

type SoftButtonVariant = "accent" | "neutral" | "ghost";
/** hero — 56 px pill, bold CTA; stripe — 36 px compact, rounded-lg */
type SoftButtonSize = "default" | "hero" | "stripe";

type SoftButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: SoftButtonVariant;
  size?: SoftButtonSize;
};

function joinClasses(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

const baseClass =
  "ui-soft-button ui-focus-ring inline-flex items-center justify-center gap-2 border font-semibold transition-all duration-200";

const variantClass: Record<SoftButtonVariant, string> = {
  accent:
    "border-transparent bg-accent text-white shadow-sm hover:opacity-95 disabled:opacity-60",
  neutral:
    "border-border bg-surface-muted text-foreground hover:bg-surface",
  ghost:
    "border-transparent bg-transparent text-foreground hover:bg-surface-muted",
};

const sizeClass: Record<SoftButtonSize, string> = {
  default: "min-h-11 rounded-xl px-4 py-2 text-sm",
  /** Big pill CTA — matches landing hero button style */
  hero: "min-h-14 rounded-full px-8 py-3.5 text-base font-bold shadow-lg active:scale-[0.97]",
  /** Compact Stripe-style inline action */
  stripe: "min-h-9 rounded-lg px-3.5 py-1.5 text-xs font-medium",
};

export default function SoftButton({
  variant = "neutral",
  size = "default",
  type = "button",
  className,
  children,
  ...rest
}: SoftButtonProps) {
  return (
    <button
      type={type}
      className={joinClasses(
        baseClass,
        variantClass[variant],
        sizeClass[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

