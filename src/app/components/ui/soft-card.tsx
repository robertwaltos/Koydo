"use client";

import type { HTMLAttributes, ReactNode } from "react";

type SoftCardProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "article" | "section" | "aside" | "header" | "li";
  interactive?: boolean;
  glass?: boolean;
  organicCorners?: boolean;
  /** Glassmorphism bento-grid cell with rounded-[var(--radius-bento-lg)] */
  bento?: boolean;
  /** Clean Stripe-style white card — thin 1px border, no shadow, flat bg */
  stripeRow?: boolean;
  children?: ReactNode;
};

function joinClasses(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export default function SoftCard({
  as = "div",
  interactive = false,
  glass = false,
  organicCorners = false,
  bento = false,
  stripeRow = false,
  className,
  style,
  children,
  ...rest
}: SoftCardProps) {
  const Tag = as;

  return (
    <Tag
      className={joinClasses(
        "ui-soft-card",
        interactive && "ui-soft-card--interactive",
        glass && "ui-soft-card--glass",
        bento && "ui-bento-card",
        stripeRow &&
          "rounded-xl border border-zinc-200/80 bg-white shadow-none",
        className,
      )}
      style={{
        ...(organicCorners ? { borderRadius: "var(--radius-organic)" } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
