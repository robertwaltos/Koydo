"use client";

import { useAuthGuard } from "@/lib/auth/use-auth-guard";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  useAuthGuard();
  return <>{children}</>;
}
