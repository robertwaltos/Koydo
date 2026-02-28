import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SupportClient from "./support-client";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export const dynamic = "force-dynamic";

export default async function SupportPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/sign-in");
  }

  const { data: tickets } = await supabase
    .from("support_tickets")
    .select("id, subject, status, priority, created_at, updated_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" organicCorners className="bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Support Center</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Report issues, track support status, and receive resolution updates.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <ProgressChip label="Open tickets" value={tickets?.length ?? 0} tone="warning" />
        </div>
      </SoftCard>
      
      <SoftCard className="p-5 space-y-2">
        <h2 className="text-lg font-semibold">Contact &amp; FAQ / Contacto y Preguntas Frecuentes</h2>
        <p className="text-sm text-zinc-700">
          <strong>Email:</strong> support@koydo.app <br />
          <strong>Bug Reporting:</strong> Use the form below to report any technical issues. <br />
          <strong>FAQ:</strong> Subscriptions can be managed directly via your App Store / Google Play account settings.
          <br /><br />
          <em>
          <strong>Correo electrónico:</strong> support@koydo.app <br />
          <strong>Reporte de errores:</strong> Use el formulario a continuación para reportar cualquier problema técnico. <br />
          <strong>Preguntas Frecuentes:</strong> Las suscripciones se pueden administrar directamente a través de la configuración de su cuenta de App Store o Google Play.
          </em>
        </p>
      </SoftCard>

      <SupportClient initialTickets={tickets ?? []} />
    </main>
  );
}
