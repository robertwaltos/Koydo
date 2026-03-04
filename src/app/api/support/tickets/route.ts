import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { loadSupportRuntimeConfig } from "@/lib/support/config";
import { isPremiumSubscriptionActive } from "@/lib/billing/premium-access";

const createTicketSchema = z.object({
  subject: z.string().min(3).max(120),
  description: z.string().min(5).max(4000).optional(),
  priority: z.enum(["low", "normal", "high"]).default("normal"),
});

type TicketType = "general" | "technical" | "billing" | "account_change" | "safety" | "content";

function classifyTicketType(subject: string, description?: string | null): TicketType {
  const normalized = `${subject} ${description ?? ""}`.toLowerCase();
  if (/password|email change|change email|account lock|account access|parent account|profile change|delete account|security/i.test(normalized)) {
    return "account_change";
  }
  if (/charge|refund|billing|invoice|payment|subscription/i.test(normalized)) {
    return "billing";
  }
  if (/abuse|harass|threat|unsafe|harm|violence/i.test(normalized)) {
    return "safety";
  }
  if (/content|lesson|module|answer key|curriculum/i.test(normalized)) {
    return "content";
  }
  if (/bug|error|crash|cannot load|not working|technical/i.test(normalized)) {
    return "technical";
  }
  return "general";
}

function buildScopedAutoResponse({
  ticketType,
  userId,
}: {
  ticketType: TicketType;
  userId: string;
}) {
  const accountScopeClause = `For security, any automated action is restricted to account ${userId}.`;
  switch (ticketType) {
    case "account_change":
      return {
        text:
          "We received an account-change request. To protect parent accounts, a verification challenge is required before any sensitive change is applied. "
          + accountScopeClause,
        model: "koydo_support_rules_v1",
      };
    case "billing":
      return {
        text:
          "We received your billing request and queued it for billing reconciliation checks. "
          + accountScopeClause,
        model: "koydo_support_rules_v1",
      };
    case "technical":
      return {
        text:
          "We received your technical report and created a diagnostics trace for review. "
          + accountScopeClause,
        model: "koydo_support_rules_v1",
      };
    case "safety":
      return {
        text:
          "We received your safety report and escalated it for priority moderation review. "
          + accountScopeClause,
        model: "koydo_support_rules_v1",
      };
    case "content":
      return {
        text:
          "We received your content report and queued it for policy evaluation and correction workflow. "
          + accountScopeClause,
        model: "koydo_support_rules_v1",
      };
    default:
      return {
        text:
          "We received your support request. An automated triage summary was generated and the ticket is now in queue. "
          + accountScopeClause,
        model: "koydo_support_rules_v1",
      };
  }
}

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("support_tickets")
    .select("id, subject, status, priority, ticket_type, parent_confirmation_status, ai_response_text, first_response_due_at, created_at, updated_at, resolved_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load support tickets.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load support tickets." }, { status: 500 });
  }

  return NextResponse.json({ tickets: data });
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:support:tickets:post", {
    max: 12,
    windowMs: 60 * 60 * 1_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many support ticket requests. Please retry later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = createTicketSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload", details: payload.error.flatten() }, { status: 400 });
  }

  const ticketType = classifyTicketType(payload.data.subject, payload.data.description ?? null);
  const [profileResult, subscriptionResult, supportConfig] = await Promise.all([
    supabase
      .from("user_profiles")
      .select("is_parent")
      .eq("user_id", user.id)
      .maybeSingle<{ is_parent: boolean }>(),
    supabase
      .from("subscriptions")
      .select("status, current_period_end")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle<{ status: string | null; current_period_end: string | null }>(),
    loadSupportRuntimeConfig(),
  ]);
  const hasPaidParentPortalSla = Boolean(
    profileResult.data?.is_parent
      && isPremiumSubscriptionActive(subscriptionResult.data),
  );
  const firstResponseDueAt = hasPaidParentPortalSla
    ? new Date(Date.now() + supportConfig.parentPortalPaidSlaHours * 60 * 60 * 1000).toISOString()
    : null;
  const parentConfirmationRequired = ticketType === "account_change";
  const autoResponse = buildScopedAutoResponse({
    ticketType,
    userId: user.id,
  });

  const { data, error } = await supabase
    .from("support_tickets")
    .insert({
      user_id: user.id,
      subject: payload.data.subject,
      description: payload.data.description ?? null,
      priority: payload.data.priority,
      ticket_type: ticketType,
      parent_confirmation_required: parentConfirmationRequired,
      parent_confirmation_status: parentConfirmationRequired ? "pending" : "not_required",
      ai_response_status: "generated",
      ai_response_text: autoResponse.text,
      ai_response_generated_at: new Date().toISOString(),
      auto_response_model: autoResponse.model,
      account_scope_user_id: user.id,
      first_response_due_at: firstResponseDueAt,
    })
    .select("id, subject, status, priority, ticket_type, parent_confirmation_status, created_at")
    .single();

  if (error) {
    console.error("Failed to create support ticket.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to create support ticket." }, { status: 500 });
  }

  if (payload.data.priority === "high" || ticketType === "account_change" || ticketType === "safety" || ticketType === "content") {
    const admin = createSupabaseAdminClient();
    await admin.from("admin_alerts").insert({
      severity: ticketType === "safety" ? "critical" : "warning",
      category: "support_ticket_priority",
      message: `Support ticket ${data.id} requires review (${ticketType}).`,
      metadata: {
        ticketId: data.id,
        userId: user.id,
        priority: payload.data.priority,
        ticketType,
      },
    });

    if (ticketType === "safety" || ticketType === "content") {
      await admin.from("content_moderation_jobs").insert({
        created_by: user.id,
        source_type: "support_ticket",
        source_ref: data.id,
        account_scope_user_id: user.id,
        content_text: `${payload.data.subject}\n\n${payload.data.description ?? ""}`.slice(0, 12000),
        requested_action: ticketType === "safety" ? "remove" : "review",
        status: "queued",
      });
    }
  }

  return NextResponse.json({ success: true, ticket: data });
}
