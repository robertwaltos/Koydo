"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type CodeTone = "primary" | "success" | "danger" | "accent" | "outline";

type CodeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: CodeTone;
  size?: "sm" | "md" | "lg";
};

const toneStyles: Record<CodeTone, string> = {
  primary: "bg-[#238636] text-white hover:bg-[#2ea043]",
  success: "bg-[#3fb950] text-[#0d1117] font-bold hover:bg-[#56d364]",
  danger: "bg-[#f85149] text-white hover:bg-[#da3633]",
  accent: "bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79c0ff]",
  outline:
    "border border-[#30363d] text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#8b949e]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const CodeButton = forwardRef<HTMLButtonElement, CodeButtonProps>(
  ({ tone = "primary", size = "md", className = "", children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={[
          "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-150",
          toneStyles[tone],
          sizeStyles[size],
          className,
        ].join(" ")}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

CodeButton.displayName = "CodeButton";
export default CodeButton;
