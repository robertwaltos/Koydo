import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SupportClient from "./support-client";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import PageHeader from "@/app/components/page-header";
import { loadSupportRuntimeConfig } from "@/lib/support/config";

export const dynamic = "force-dynamic";

export default async function SupportPage() {
  const supabase = await createSupabaseServerClient();
  const supportConfig = await loadSupportRuntimeConfig();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const tickets = user
    ? (
        await supabase
          .from("support_tickets")
          .select("id, subject, status, priority, ticket_type, parent_confirmation_status, ai_response_text, first_response_due_at, created_at, updated_at")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
      ).data ?? []
    : [];

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <PageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Support" },
        ]}
        title="Support Center"
        description="Report issues, track support status, and receive resolution updates."
      />

      <SoftCard as="header" organicCorners className="bg-[var(--gradient-hero)] p-6">
        <h2 className="text-lg font-semibold tracking-tight">Ticket Overview</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <ProgressChip label="Open tickets" value={tickets.length} tone="warning" />
          {!user ? (
            <Link
              href="/auth/sign-in?next=%2Fsupport"
              className="ui-soft-button ui-focus-ring inline-flex min-h-11 items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
            >
              Sign in to manage tickets
            </Link>
          ) : null}
        </div>
      </SoftCard>
      
      <SoftCard className="p-4">
        <Link
          href="/support/faq"
          className="ui-focus-ring flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300"
        >
          <span aria-hidden="true" className="text-xl">❓</span>
          <span>Help Center &amp; FAQ — Find answers to common questions</span>
        </Link>
      </SoftCard>

      <SoftCard className="p-5 space-y-2">
        <h2 className="text-lg font-semibold">Contact &amp; FAQ / Contacto y Preguntas Frecuentes</h2>
        <p className="text-sm text-foreground">
          <strong>Email:</strong> {supportConfig.supportEmail} <br />
          <strong>Emergency call:</strong> {supportConfig.emergencyPhone} <br />
          <strong>Bug Reporting:</strong> Use the form below to report any technical issues. <br />
          <strong>FAQ:</strong> Subscriptions can be managed directly via your App Store / Google Play account settings.
          <br />
          <strong>Response policy:</strong> Koydo support currently operates on a best-effort basis and does not
          offer strict 24/7 SLA guarantees.
          <br /><br />
          <em>
          <strong>Correo electrónico:</strong> {supportConfig.supportEmail} <br />
          <strong>Llamada de emergencia:</strong> {supportConfig.emergencyPhone} <br />
          <strong>Reporte de errores:</strong> Use el formulario a continuación para reportar cualquier problema técnico. <br />
          <strong>Preguntas Frecuentes:</strong> Las suscripciones se pueden administrar directamente a través de la configuración de su cuenta de App Store o Google Play.
          <br />
          <strong>Política de respuesta:</strong> El soporte de Koydo opera actualmente bajo mejor esfuerzo y no
          ofrece garantías estrictas de SLA 24/7.
          </em>
        </p>
      </SoftCard>

      {user ? (
        <SupportClient initialTickets={tickets} />
      ) : (
        <SoftCard className="space-y-3 p-5">
          <h2 className="text-lg font-semibold">Need help right now?</h2>
          <p className="text-sm text-foreground">
            You can still reach us at {supportConfig.supportEmail} or call {supportConfig.emergencyPhone}. Sign in when ready to create and track
            support tickets directly in your account.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/auth/sign-in?next=%2Fsupport"
              className="ui-soft-button ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground"
            >
              Sign in
            </Link>
            <a
              href={`mailto:${supportConfig.supportEmail}`}
              className="ui-soft-button ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground"
            >
              Email support
            </a>
          </div>
        </SoftCard>
      )}
    </main>
  );
}
