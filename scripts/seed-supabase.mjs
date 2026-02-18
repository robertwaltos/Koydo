import { createClient } from "@supabase/supabase-js";

const {
  NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_SEED_USER_EMAIL,
  SUPABASE_SEED_USER_PASSWORD,
} = process.env;

if (!NEXT_PUBLIC_SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const seedEmail = SUPABASE_SEED_USER_EMAIL || "student.seed@example.com";
const seedPassword = SUPABASE_SEED_USER_PASSWORD || "ChangeMe123!";

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function ensureSeedUser() {
  const existingUsers = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
  const existing = existingUsers.data?.users?.find((user) => user.email === seedEmail);
  if (existing) {
    return existing.id;
  }

  const created = await supabase.auth.admin.createUser({
    email: seedEmail,
    password: seedPassword,
    email_confirm: true,
  });

  if (created.error || !created.data.user) {
    throw new Error(created.error?.message || "Failed to create seed user");
  }

  return created.data.user.id;
}

async function seed() {
  const userId = await ensureSeedUser();
  const monthKey = new Date().toISOString().slice(0, 7);

  const profileResult = await supabase.from("user_profiles").upsert(
    {
      user_id: userId,
      display_name: "Seed Student",
      parental_consent_required: false,
      parental_consent_status: "not_required",
    },
    { onConflict: "user_id" },
  );

  if (profileResult.error) {
    throw new Error(`Failed to seed user_profiles: ${profileResult.error.message}`);
  }

  const tokenResult = await supabase.from("user_tokens").upsert(
    {
      user_id: userId,
      month_key: monthKey,
      input_tokens: 120000,
      output_tokens: 60000,
      spent_usd: 0.054,
    },
    { onConflict: "user_id,month_key" },
  );

  if (tokenResult.error) {
    throw new Error(`Failed to seed user_tokens: ${tokenResult.error.message}`);
  }

  const dsarResult = await supabase.from("dsar_requests").insert({
    user_id: userId,
    request_type: "access",
    status: "pending",
    details: { source: "seed-script", note: "Sample DSAR request for dashboard development" },
  });

  if (dsarResult.error && !dsarResult.error.message.toLowerCase().includes("duplicate")) {
    throw new Error(`Failed to seed dsar_requests: ${dsarResult.error.message}`);
  }

  console.log("Supabase seed completed.");
  console.log(`User email: ${seedEmail}`);
  console.log(`User id: ${userId}`);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
