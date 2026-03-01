import type { ReactNode } from "react";

type ProgressChipTone = "neutral" | "info" | "success" | "warning";

type ProgressChipProps = {
  label: string;
  value: ReactNode;
  tone?: ProgressChipTone;
  className?: string;
};

function joinClasses(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

const toneClass: Record<ProgressChipTone, string> = {
  neutral: "border-border bg-surface-muted text-zinc-700 dark:text-foreground/85",
  info: "border-sky-200 bg-sky-50 text-sky-800",
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
};

export default function ProgressChip({
  label,
  value,
  tone = "neutral",
  className,
}: ProgressChipProps) {
  return (
    <div
      className={joinClasses(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        toneClass[tone],
        className,
      )}
    >
      <span className="uppercase tracking-wide">{label}</span>
      <span>{value}</span>
    </div>
  );
}

