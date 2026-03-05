import type { ReactNode } from "react";
import AdaptiveBackground from "@/app/components/ui/adaptive-background";

export const dynamic = "force-dynamic";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4">
      {/* We use 'standard' as the base theme for auth until the user's age is known */}
      <AdaptiveBackground ageGroup="standard" />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_16px_48px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}