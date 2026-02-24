import fs from "node:fs";
import { createClient } from "@supabase/supabase-js";

function parseArgs(argv) {
  const args = {
    severity: "warning",
    category: "",
    message: "",
    metadataJson: "",
    metadataFile: "",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--severity") {
      args.severity = String(argv[index + 1] ?? "").trim().toLowerCase();
      index += 1;
      continue;
    }
    if (token === "--category") {
      args.category = String(argv[index + 1] ?? "").trim();
      index += 1;
      continue;
    }
    if (token === "--message") {
      args.message = String(argv[index + 1] ?? "").trim();
      index += 1;
      continue;
    }
    if (token === "--metadata-json") {
      args.metadataJson = String(argv[index + 1] ?? "").trim();
      index += 1;
      continue;
    }
    if (token === "--metadata-file") {
      args.metadataFile = String(argv[index + 1] ?? "").trim();
      index += 1;
      continue;
    }
  }

  return args;
}

function parseMetadata({ metadataJson, metadataFile }) {
  if (metadataFile) {
    if (!fs.existsSync(metadataFile)) {
      throw new Error(`Metadata file not found: ${metadataFile}`);
    }
    const raw = fs.readFileSync(metadataFile, "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Metadata file must contain a JSON object.");
    }
    return parsed;
  }

  if (metadataJson) {
    const parsed = JSON.parse(metadataJson);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Metadata JSON must be an object.");
    }
    return parsed;
  }

  return {};
}

function parseRecipients(value) {
  if (!value) return [];
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }
  if (!args.category) {
    throw new Error("Missing required --category.");
  }
  if (!args.message) {
    throw new Error("Missing required --message.");
  }
  if (!["info", "warning", "critical"].includes(args.severity)) {
    throw new Error("Invalid --severity. Allowed: info, warning, critical.");
  }

  const metadata = parseMetadata(args);
  const recipients = parseRecipients(process.env.ADMIN_ALERT_EMAILS ?? "");

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const alertInsert = await supabase
    .from("admin_alerts")
    .insert({
      severity: args.severity,
      category: args.category,
      message: args.message,
      metadata,
    })
    .select("id")
    .single();

  if (alertInsert.error || !alertInsert.data?.id) {
    throw new Error(alertInsert.error?.message ?? "Failed to insert admin alert.");
  }

  if (recipients.length > 0) {
    const queueRows = recipients.map((recipient) => ({
      alert_id: alertInsert.data.id,
      channel: "email",
      recipient,
      status: "queued",
    }));

    const queueInsert = await supabase.from("admin_alert_notifications").insert(queueRows);
    if (queueInsert.error) {
      throw new Error(`Failed to queue alert notifications: ${queueInsert.error.message}`);
    }
  }

  console.log(
    JSON.stringify(
      {
        success: true,
        alertId: alertInsert.data.id,
        category: args.category,
        severity: args.severity,
        recipientsQueued: recipients.length,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
