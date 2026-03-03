"use client";

import { useState } from "react";
import type { CompanionGender } from "@/lib/greeter/companion-config";
import Image from "next/image";

interface CompanionAvatarSVGProps {
  gender: CompanionGender;
  size?: number;
  pulse?: boolean;
  className?: string;
  /**
   * When provided, renders a real photo <img> instead of the SVG cartoon.
   * Falls back to SVG on load error.
   */
  previewImageUrl?: string;
}

export default function CompanionAvatarSVG({
  gender,
  size = 48,
  pulse = false,
  className = "",
  previewImageUrl,
}: CompanionAvatarSVGProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = previewImageUrl && !imgFailed;

  const pulseClass = pulse ? "animate-pulse" : "";
  const borderColor = gender === "female" ? "#7c3aed" : "#0891b2";
  const bgColor = gender === "female" ? "#ede9fe" : "#cffafe";

  if (showImg) {
    return (
      <Image
        src={previewImageUrl}
        alt={gender === "female" ? "Aria" : "Kai"}
        width={size}
        height={size}
        unoptimized
        className={`rounded-full object-cover ${pulseClass} ${className}`}
        style={{
          width: size,
          height: size,
          border: `2px solid ${borderColor}`,
        }}
        onError={() => setImgFailed(true)}
        draggable={false}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={`select-none ${pulseClass} ${className}`}
      style={{ flexShrink: 0 }}
    >
      {/* Background circle */}
      <circle cx="24" cy="24" r="24" fill={bgColor} />

      {gender === "female" ? (
        /* Aria — warm violet cartoon */
        <>
          {/* Hair */}
          <ellipse cx="24" cy="16" rx="11" ry="9" fill="#4c1d95" />
          <ellipse cx="24" cy="23" rx="10" ry="5" fill="#4c1d95" opacity="0.6" />
          {/* Face */}
          <circle cx="24" cy="21" r="9" fill="#fde68a" />
          {/* Eyes */}
          <circle cx="21" cy="20" r="1.5" fill="#1f2937" />
          <circle cx="27" cy="20" r="1.5" fill="#1f2937" />
          <circle cx="21.5" cy="19.5" r="0.5" fill="white" />
          <circle cx="27.5" cy="19.5" r="0.5" fill="white" />
          {/* Smile */}
          <path d="M21 23.5 Q24 26 27 23.5" stroke="#1f2937" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Blush */}
          <circle cx="19.5" cy="22.5" r="2" fill="#f9a8d4" opacity="0.5" />
          <circle cx="28.5" cy="22.5" r="2" fill="#f9a8d4" opacity="0.5" />
          {/* Body */}
          <path d="M14 38 Q14 30 24 30 Q34 30 34 38" fill="#7c3aed" />
          {/* Border ring */}
          <circle cx="24" cy="24" r="23" stroke="#7c3aed" strokeWidth="2" fill="none" />
        </>
      ) : (
        /* Kai — cool cyan cartoon */
        <>
          {/* Hair */}
          <ellipse cx="24" cy="15" rx="10" ry="8" fill="#1e3a5f" />
          {/* Face */}
          <circle cx="24" cy="21" r="9" fill="#fde68a" />
          {/* Eyes */}
          <circle cx="21" cy="20" r="1.5" fill="#1f2937" />
          <circle cx="27" cy="20" r="1.5" fill="#1f2937" />
          <circle cx="21.5" cy="19.5" r="0.5" fill="white" />
          <circle cx="27.5" cy="19.5" r="0.5" fill="white" />
          {/* Smile — wider / more energetic */}
          <path d="M20.5 23 Q24 26.5 27.5 23" stroke="#1f2937" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Body */}
          <path d="M14 38 Q14 30 24 30 Q34 30 34 38" fill="#0891b2" />
          {/* Border ring */}
          <circle cx="24" cy="24" r="23" stroke="#0891b2" strokeWidth="2" fill="none" />
        </>
      )}
    </svg>
  );
}
