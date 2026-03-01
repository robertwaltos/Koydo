export function isMissingOrganizationTableError(error: unknown) {
  if (!error || typeof error !== "object") return false;

  const code = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const message = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  const lowered = message.toLowerCase();

  if (code === "42P01" || code === "PGRST205") return true;

  return (
    lowered.includes("organizations") ||
    lowered.includes("organization_memberships") ||
    lowered.includes("organization_license_purchases") ||
    lowered.includes("organization_provisioning_tokens") ||
    lowered.includes("organization_learners") ||
    lowered.includes("organization_audit_events") ||
    lowered.includes("gifted_memberships") ||
    lowered.includes("organization_invites") ||
    lowered.includes("organization_roster_entries") ||
    lowered.includes("organization_report_exports") ||
    lowered.includes("organization_report_jobs")
  );
}
