import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SettingsClient from "./settings-client";
import SoftCard from "@/app/components/ui/soft-card";

export const dynamic = "force-dynamic";

export default async function AccountSettingsPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/sign-in");
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" organicCorners className="bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Account Settings</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Manage account safety, support, and deletion controls.
        </p>
      </SoftCard>

      <SettingsClient />
    </main>
  );
}
