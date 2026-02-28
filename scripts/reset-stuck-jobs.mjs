import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  fs.readFileSync(path.resolve(".env"), "utf8")
    .split(/\r?\n/)
    .filter(l => l.includes("="))
    .map(l => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim()])
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
// Reset jobs stuck in 'running' state AND jobs that failed due to timeout
const { error: e1 } = await supabase
  .from("media_generation_jobs")
  .update({ status: "queued", error: null })
  .eq("status", "running")
  .in("asset_type", ["image", "video"]);
console.log("Reset running→queued:", e1 ?? "ok");

const { error: e2 } = await supabase
  .from("media_generation_jobs")
  .update({ status: "queued", error: null })
  .eq("status", "failed")
  .ilike("error", "%timed out%")
  .in("asset_type", ["image", "video"]);
console.log("Reset timed-out failed→queued:", e2 ?? "ok");

const { error: e3 } = await supabase
  .from("media_generation_jobs")
  .update({ status: "queued", error: null })
  .eq("status", "failed")
  .ilike("error", "%ComfyUI queue failed%")
  .in("asset_type", ["image", "video"]);
console.log("Reset queue-error failed→queued:", e3 ?? "ok");

process.exit(0);
