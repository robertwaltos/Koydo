"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

export type ModuleCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  imageSrc: string;
  progress: number;
  total?: number;
  badge?: string;
};

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={filled ? "text-yellow-400" : "text-white/50"}
    >
      <path
        fill="currentColor"
        d="M12 3.5l2.65 5.38 5.94.86-4.3 4.19 1.02 5.92L12 16.9l-5.31 2.95 1.02-5.92-4.3-4.19 5.94-.86L12 3.5z"
      />
    </svg>
  );
}

export default function ModuleCard({
  title,
  imageSrc,
  progress,
  total = 5,
  badge,
  className,
  ...props
}: ModuleCardProps) {
  const safeProgress = Math.max(0, Math.min(progress, total));
  const stars = Array.from({ length: total }, (_, index) => index < safeProgress);

  return (
    <motion.button
      type="button"
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={[
        "group relative flex min-h-[280px] w-[260px] flex-col overflow-hidden rounded-[28px]",
        "border-2 border-white/70 bg-white/70 shadow-[0_16px_32px_rgba(36,49,79,0.18)]",
        "backdrop-blur-md",
        className ?? "",
      ].join(" ")}
      aria-label={`${title} module, ${safeProgress} of ${total} stars`}
      {...props}
    >
      <div className="relative h-[185px] w-full">
        <Image
          src={imageSrc}
          alt={`${title} module illustration`}
          fill
          sizes="(max-width: 768px) 70vw, 260px"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        {badge ? (
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#24314f]">
            {badge}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 px-4 pb-4 pt-3 text-left">
        <h3 className="text-lg font-extrabold text-[#24314f]">{title}</h3>
        <div className="flex items-center gap-1">
          <span className="sr-only">Progress</span>
          {stars.map((filled, index) => (
            <StarIcon key={`${title}-star-${index}`} filled={filled} />
          ))}
          <span className="ml-2 text-sm font-bold text-[#24314f]">
            {safeProgress}/{total}
          </span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-2 ring-white/60" />
    </motion.button>
  );
}
