/**
 * DB job count audit — uses count(head:true) so no 1000-row cap
 */
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");
const env = {};
for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
  const t = line.trim();
  if (!t || t.startsWith("#")) continue;
  const i = t.indexOf("=");
  if (i > 0) {
    let val = t.slice(i + 1).trim();
    if (val.length >= 2 && ((val[0] === '"' && val[val.length-1] === '"') || (val[0] === "'" && val[val.length-1] === "'"))) {
      val = val.slice(1, -1);
    }
    env[t.slice(0, i).trim()] = val;
  }
}
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });

async function cnt(extra) {
  let q = supabase.from("media_generation_jobs").select("*", { count: "exact", head: true });
  if (extra) q = extra(q);
  const { count: c, error } = await q;
  if (error) { console.error("count error:", JSON.stringify(error)); return 0; }
  return c;
}

const total = await cnt();
console.log("=== MEDIA JOB AUDIT (count queries — no row cap) ===");
console.log("TOTAL JOBS IN DB:", total);
console.log("");

const types = ["image", "video", "animation"];
const statuses = ["queued", "running", "completed", "failed"];
let grand = 0;
for (const type of types) {
  let sub = 0;
  for (const status of statuses) {
    const c = await cnt(q => q.eq("asset_type", type).eq("status", status));
    if (c > 0) { console.log(`  ${type}:${status}: ${c}`); sub += c; grand += c; }
  }
  if (sub > 0) console.log(`  -- ${type} subtotal: ${sub}`);
}
console.log("");
console.log("CROSS-CHECK GRAND TOTAL:", grand);

const today = new Date().toISOString().slice(0, 10);
const todayStr = `${today}T00:00:00Z`;
const todayNew = await cnt(q => q.gte("created_at", todayStr));
console.log(`Jobs created today (${today}): ${todayNew}`);

const regenCount = await cnt(q => q.not("metadata->>old_output_url", "is", null));
console.log("Jobs with old_output_url (regen): " + regenCount);

console.log("\n=== DONE ===");
