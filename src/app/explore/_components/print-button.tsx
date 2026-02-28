"use client";

type PrintButtonProps = {
  label?: string;
  className?: string;
  onPrint?: () => void;
};

export default function PrintButton({
  label = "Print",
  className,
  onPrint,
}: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        onPrint?.();
        if (typeof window !== "undefined") window.print();
      }}
      className={
        className ??
        "ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-100"
      }
    >
      {label}
    </button>
  );
}
