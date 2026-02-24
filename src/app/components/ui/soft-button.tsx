"use client";

import type { ButtonHTMLAttributes } from "react";

type SoftButtonVariant = "accent" | "neutral" | "ghost";

type SoftButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: SoftButtonVariant;
};

function joinClasses(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

const baseClass =
  "ui-soft-button ui-focus-ring inline-flex min-h-11 items-center justify-center gap-2 border px-4 py-2 text-sm font-semibold";

const variantClass: Record<SoftButtonVariant, string> = {
  accent:
    "border-transparent bg-accent text-white shadow-sm hover:opacity-95 disabled:opacity-60",
  neutral:
    "border-border bg-surface-muted text-foreground hover:bg-surface",
  ghost:
    "border-transparent bg-transparent text-foreground hover:bg-surface-muted",
};

export default function SoftButton({
  variant = "neutral",
  type = "button",
  className,
  children,
  ...rest
}: SoftButtonProps) {
  return (
    <button
      type={type}
      className={joinClasses(baseClass, variantClass[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

