/**
 * Seed dedicated App Store / Google Play review demo accounts.
 *
 * These accounts are permanent and must remain active as long as the app
 * is listed on either store.  Apple and Google can re-review at any time.
 *
 * Usage:
 *   node scripts/seed-review-accounts.mjs
 *
 * Requires:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */

import { createClient } from "@supabase/supabase-js";

const {
  NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
} = process.env;

if (!NEXT_PUBLIC_SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// ── Demo accounts ────────────────────────────────────────────────
const REVIEW_ACCOUNTS = [
  {
    email: "apple-review@koydo.app",
    password: "KoydoReview!2026",
    displayName: "Apple Reviewer",
    notes: "Apple App Store review account — do not delete",
  },
  {
    email: "google-review@koydo.app",
    password: "KoydoReview!2026",
    displayName: "Google Reviewer",
    notes: "Google Play review account — do not delete",
  },
];

async function ensureUser(email, password) {
  const { data } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
  const existing = data?.users?.find((u) => u.email === email);
  if (existing) return existing.id;

  const { data: created, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error || !created.user) throw new Error(error?.message ?? "Failed to create user");
  return created.user.id;
}

async function seedProfile(userId, displayName, notes) {
  const { error } = await supabase.from("user_profiles").upsert(
    {
      user_id: userId,
      display_name: displayName,
      parental_consent_required: false,
      parental_consent_status: "not_required",
      is_admin: false,
      is_owner: false,
    },
    { onConflict: "user_id" },
  );
  if (error) throw new Error(`Profile seed failed for ${displayName}: ${error.message}`);

  // Create a student profile so the reviewer can access learning features
  // student_profiles allows multiple rows per account (family model), so check first
  const { data: existingSp } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("account_id", userId)
    .limit(1)
    .maybeSingle();

  if (!existingSp) {
    const { error: spError } = await supabase.from("student_profiles").insert({
      account_id: userId,
      display_name: displayName,
      age_years: 21,
    });
    // student_profiles table may not exist yet — non-fatal
    if (spError && !spError.message.includes("does not exist")) {
      console.warn(`  student_profiles warning: ${spError.message}`);
    }
  }

  console.log(`  ✓ ${displayName} — ${notes}`);
}

async function main() {
  console.log("Seeding App Review demo accounts...\n");

  for (const acct of REVIEW_ACCOUNTS) {
    const userId = await ensureUser(acct.email, acct.password);
    await seedProfile(userId, acct.displayName, acct.notes);
  }

  console.log("\nDone. These accounts must remain active permanently.");
  console.log("Credentials → docs/compliance/APP-REVIEW-CREDENTIALS.md");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
