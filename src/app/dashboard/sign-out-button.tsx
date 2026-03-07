"use client";

import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import ParentGate from "@/app/components/parent-gate";

export default function SignOutButton() {
  const router = useRouter();

  const onSignOut = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/auth/sign-in");
    router.refresh();
  };

  return (
    <ParentGate onSuccess={onSignOut} actionText="sign out">
      <button
        type="button"
        className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-3 py-2 text-sm hover:bg-surface w-full"
      >
        Sign Out
      </button>
    </ParentGate>
  );
}
