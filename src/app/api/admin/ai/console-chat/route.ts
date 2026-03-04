import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { runSystemHealthChecks } from "@/lib/admin/system-health";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const MAX_HISTORY = 12;
const MAX_LIMIT = 100;
const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const TABLE_ALLOWLIST = [
  "admin_action_logs",
  "admin_alerts",
  "admin_approvals",
  "admin_report_exports",
  "admin_report_jobs",
  "app_settings",
  "billing_events",
  "billing_price_overrides",
  "dsar_requests",
  "language_usage_events",
  "learning_events",
  "organization_audit_events",
  "organization_invites",
  "organization_licenses",
  "organization_learners",
  "organizations",
  "report_queue_alerts",
  "revenuecat_webhook_events",
  "stripe_webhook_events",
  "support_tickets",
  "testing_attempts",
  "testing_class_assignments",
  "testing_class_memberships",
  "testing_classes",
  "testing_exam_attempt_answers",
  "testing_exam_attempts",
  "testing_exam_question_bank",
  "testing_exam_tracks",
  "testing_exams",
  "user_profiles",
] as const;
const TABLE_DENYLIST = [
  "users",
  "secrets",
  "api_keys",
  "service_tokens",
  "vault_secrets",
] as const;
const TABLE_DENYLIST_PREFIXES = [
  "pg_",
  "auth.",
  "storage.",
] as const;

const historyMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});

const requestSchema = z.object({
  message: z.string().min(3).max(2000),
  history: z.array(historyMessageSchema).max(MAX_HISTORY).optional(),
});

const queryFilterSchema = z.object({
  column: z.string().min(1).max(64),
  operator: z.enum(["eq", "neq", "gt", "gte", "lt", "lte", "ilike", "is", "in"]),
  value: z.union([z.string(), z.number(), z.boolean(), z.array(z.union([z.string(), z.number()]))]),
});

const queryTableArgsSchema = z.object({
  table: z.string().min(1).max(64),
  columns: z.string().max(400).optional(),
  filters: z.array(queryFilterSchema).max(12).optional(),
  limit: z.number().int().min(1).max(MAX_LIMIT).optional(),
  orderBy: z.string().max(64).optional(),
  ascending: z.boolean().optional(),
});

type ChatCompletionMessage = {
  role: "system" | "user" | "assistant" | "tool";
  content: string | null;
  tool_call_id?: string;
  tool_calls?: Array<{
    id: string;
    type: "function";
    function: { name: string; arguments: string };
  }>;
};

type ConsoleToolResult = Record<string, unknown>;

function isIdentifier(value: string) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(value);
}

function parseColumns(columns?: string) {
  if (!columns || columns.trim().length === 0) {
    return "*";
  }
  const raw = columns.split(",").map((part) => part.trim()).filter(Boolean);
  if (raw.length === 0) {
    return "*";
  }
  for (const column of raw) {
    if (column !== "*" && !isIdentifier(column)) {
      throw new Error(`Invalid column "${column}". Use comma-separated identifiers only.`);
    }
  }
  return raw.join(",");
}

function sanitizeTableName(table: string) {
  if (!isIdentifier(table)) {
    throw new Error("Invalid table name.");
  }
  return table;
}

function isTableAllowed(table: string) {
  const normalized = table.toLowerCase();
  const denyByName = TABLE_DENYLIST.some((entry) => entry === normalized);
  const denyByPrefix = TABLE_DENYLIST_PREFIXES.some((prefix) => normalized.startsWith(prefix));
  if (denyByName || denyByPrefix) {
    return false;
  }

  return TABLE_ALLOWLIST.some((entry) => entry.toLowerCase() === normalized);
}

async function getConsoleSnapshot(admin: ReturnType<typeof createSupabaseAdminClient>) {
  const [systemHealth, ticketsResult, alertsResult] = await Promise.all([
    runSystemHealthChecks(admin),
    admin
      .from("support_tickets")
      .select("id, subject, status, priority, created_at")
      .order("created_at", { ascending: false })
      .limit(10),
    admin
      .from("admin_alerts")
      .select("id, severity, category, message, acknowledged, created_at")
      .order("created_at", { ascending: false })
      .limit(20),
  ]);

  return {
    generatedAt: new Date().toISOString(),
    systemHealth,
    supportTickets: {
      count: ticketsResult.data?.length ?? 0,
      recent: ticketsResult.data ?? [],
      error: ticketsResult.error?.message ?? null,
    },
    adminAlerts: {
      count: alertsResult.data?.length ?? 0,
      unacknowledged: (alertsResult.data ?? []).filter((alert) => !alert.acknowledged).length,
      recent: alertsResult.data ?? [],
      error: alertsResult.error?.message ?? null,
    },
  };
}

async function queryTable(
  adminUserId: string,
  admin: ReturnType<typeof createSupabaseAdminClient>,
  rawArgs: unknown,
): Promise<ConsoleToolResult> {
  const parsed = queryTableArgsSchema.safeParse(rawArgs);
  if (!parsed.success) {
    return {
      ok: false,
      error: "Invalid query_table args.",
      details: parsed.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    };
  }

  const args = parsed.data;
  try {
    const table = sanitizeTableName(args.table);
    if (!isTableAllowed(table)) {
      await logAdminAction({
        adminUserId,
        actionType: "admin_console_ai_query_table_blocked",
        metadata: {
          table,
          reason: "table_not_allowed",
        },
      });
      return {
        ok: false,
        error: `Table "${table}" is blocked by console AI table governance.`,
        allowedTables: TABLE_ALLOWLIST,
      };
    }
    const columns = parseColumns(args.columns);
    const limit = Math.min(MAX_LIMIT, args.limit ?? 25);
    const ascending = args.ascending ?? false;

    let query = admin.from(table).select(columns).limit(limit);

    for (const filter of args.filters ?? []) {
      if (!isIdentifier(filter.column)) {
        throw new Error(`Invalid filter column "${filter.column}".`);
      }
      switch (filter.operator) {
        case "eq":
          query = query.eq(filter.column, filter.value);
          break;
        case "neq":
          query = query.neq(filter.column, filter.value);
          break;
        case "gt":
          query = query.gt(filter.column, filter.value);
          break;
        case "gte":
          query = query.gte(filter.column, filter.value);
          break;
        case "lt":
          query = query.lt(filter.column, filter.value);
          break;
        case "lte":
          query = query.lte(filter.column, filter.value);
          break;
        case "ilike":
          query = query.ilike(filter.column, String(filter.value));
          break;
        case "is":
          query = query.is(filter.column, filter.value as null | boolean);
          break;
        case "in":
          if (!Array.isArray(filter.value)) {
            throw new Error("Operator 'in' requires an array value.");
          }
          query = query.in(filter.column, filter.value);
          break;
      }
    }

    if (args.orderBy) {
      if (!isIdentifier(args.orderBy)) {
        throw new Error(`Invalid orderBy column "${args.orderBy}".`);
      }
      query = query.order(args.orderBy, { ascending });
    }

    const { data, error } = await query;
    if (error) {
      await logAdminAction({
        adminUserId,
        actionType: "admin_console_ai_query_table",
        metadata: {
          table,
          ok: false,
          error: error.message,
          limit,
          columns,
          filterCount: args.filters?.length ?? 0,
          orderBy: args.orderBy ?? null,
          ascending,
        },
      });
      return {
        ok: false,
        error: error.message,
      };
    }

    const rowCount = Array.isArray(data) ? data.length : 0;
    await logAdminAction({
      adminUserId,
      actionType: "admin_console_ai_query_table",
      metadata: {
        table,
        ok: true,
        rowCount,
        limit,
        columns,
        filterCount: args.filters?.length ?? 0,
        orderBy: args.orderBy ?? null,
        ascending,
      },
    });

    return {
      ok: true,
      table,
      rowCount,
      rows: Array.isArray(data) ? data : [],
    };
  } catch (error) {
    await logAdminAction({
      adminUserId,
      actionType: "admin_console_ai_query_table",
      metadata: {
        ok: false,
        error: error instanceof Error ? error.message : "Failed to execute query_table.",
      },
    });
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Failed to execute query_table.",
    };
  }
}

async function callOpenAi(messages: ChatCompletionMessage[]) {
  const apiKey = serverEnv.OPENAI_MEDIA_API_KEY ?? serverEnv.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OpenAI key is not configured.");
  }

  const response = await fetch(OPENAI_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: serverEnv.OPENAI_FOLLOWUP_MODEL,
      temperature: 0.2,
      max_tokens: 900,
      messages,
      tools: [
        {
          type: "function",
          function: {
            name: "get_console_snapshot",
            description:
              "Get current admin operations snapshot: system health, recent support tickets, and admin alerts.",
            parameters: {
              type: "object",
              additionalProperties: false,
              properties: {},
            },
          },
        },
        {
          type: "function",
          function: {
            name: "query_table",
            description:
              "Read rows from a Supabase table (read-only). Use for concrete data-backed answers.",
            parameters: {
              type: "object",
              additionalProperties: false,
              properties: {
                table: { type: "string" },
                columns: { type: "string" },
                filters: {
                  type: "array",
                  items: {
                    type: "object",
                    additionalProperties: false,
                    properties: {
                      column: { type: "string" },
                      operator: {
                        type: "string",
                        enum: ["eq", "neq", "gt", "gte", "lt", "lte", "ilike", "is", "in"],
                      },
                      value: {
                        oneOf: [
                          { type: "string" },
                          { type: "number" },
                          { type: "boolean" },
                          {
                            type: "array",
                            items: { oneOf: [{ type: "string" }, { type: "number" }] },
                          },
                        ],
                      },
                    },
                    required: ["column", "operator", "value"],
                  },
                },
                limit: { type: "number" },
                orderBy: { type: "string" },
                ascending: { type: "boolean" },
              },
              required: ["table"],
            },
          },
        },
      ],
      tool_choice: "auto",
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errorMessage =
      payload?.error?.message ??
      payload?.message ??
      `OpenAI request failed with status ${response.status}.`;
    throw new Error(errorMessage);
  }

  const message = payload?.choices?.[0]?.message as ChatCompletionMessage | undefined;
  if (!message) {
    throw new Error("OpenAI response did not include a message.");
  }

  return message;
}

export async function POST(request: Request) {
  try {
    const rateLimit = await enforceIpRateLimit(request, "api:admin:ai:console-chat", {
      max: 20,
      windowMs: 60_000,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests." },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

    const auth = await requireAdminForApi();
    if (!auth.isAuthorized) {
      return auth.response;
    }

    const parsed = requestSchema.safeParse(await request.json().catch(() => ({})));
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body.", details: parsed.error.issues },
        { status: 400 },
      );
    }

    const admin = createSupabaseAdminClient();
    const history = parsed.data.history ?? [];
    const messages: ChatCompletionMessage[] = [
      {
        role: "system",
        content: [
          "You are the Koydo Backend Console AI assistant for administrators.",
          "You have tool access to current console health and read-only table queries.",
          "Always prefer tool-backed answers over guesses when questions request live values.",
          "Never claim write actions were performed. You are read-only.",
          "If data is unavailable, explain exactly what failed and what table/query was attempted.",
          "Keep answers concise, with bullets and explicit evidence.",
        ].join(" "),
      },
      ...history.map((entry) => ({ role: entry.role, content: entry.content })),
      { role: "user", content: parsed.data.message },
    ];

    let assistantMessage = await callOpenAi(messages);
    let toolCallPasses = 0;

    while (assistantMessage.tool_calls && assistantMessage.tool_calls.length > 0 && toolCallPasses < 4) {
      messages.push({
        role: "assistant",
        content: assistantMessage.content ?? null,
        tool_calls: assistantMessage.tool_calls,
      });

      for (const toolCall of assistantMessage.tool_calls) {
        let toolResult: ConsoleToolResult;
        try {
          const args = JSON.parse(toolCall.function.arguments || "{}");
          if (toolCall.function.name === "get_console_snapshot") {
            toolResult = await getConsoleSnapshot(admin);
          } else if (toolCall.function.name === "query_table") {
            toolResult = await queryTable(auth.userId, admin, args);
          } else {
            toolResult = { ok: false, error: `Unknown tool: ${toolCall.function.name}` };
          }
        } catch (error) {
          toolResult = {
            ok: false,
            error: error instanceof Error ? error.message : "Tool execution failed.",
          };
        }

        messages.push({
          role: "tool",
          tool_call_id: toolCall.id,
          content: JSON.stringify(toolResult),
        });
      }

      toolCallPasses += 1;
      assistantMessage = await callOpenAi(messages);
    }

    return NextResponse.json({
      answer: assistantMessage.content ?? "No response generated.",
      model: serverEnv.OPENAI_FOLLOWUP_MODEL,
    });
  } catch (error) {
    console.error("Admin console AI chat error:", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error." },
      { status: 500 },
    );
  }
}
