"use client";

import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function SignOutButton() {
  const router = useRouter();

  const onSignOut = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/auth/sign-in");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={onSignOut}
      className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-3 py-2 text-sm hover:bg-surface"
    >
      Sign Out
    </button>
  );
}
