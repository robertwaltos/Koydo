import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const deviceCodeSchema = z
  .string()
  .trim()
  .toUpperCase()
  .regex(/^[A-Z2-9]{4}-[A-Z2-9]{4}$/, "Invalid device code.");

export const deviceLoginPollSchema = z.object({
  requestId: z.string().uuid("Invalid device request."),
  deviceCode: deviceCodeSchema,
});

export async function requireMatchingDeviceLoginRequest(input: {
  requestId: string;
  deviceCode: string;
}) {
  const admin = createSupabaseAdminClient();

  const result = await admin
    .from("device_login_requests")
    .select("id, status, expires_at, device_info")
    .eq("id", input.requestId)
    .eq("device_code", input.deviceCode)
    .maybeSingle();

  return result;
}
