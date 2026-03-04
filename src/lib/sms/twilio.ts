import { serverEnv } from "@/lib/config/env";

export type SmsDeliveryResult = {
  delivered: boolean;
  mode: "sms" | "simulation" | "provider-error";
  reason: string | null;
};

type SendSmsInput = {
  to: string;
  body: string;
};

function normalizePhone(phone: string) {
  return phone.trim();
}

export async function sendSmsViaTwilio({ to, body }: SendSmsInput): Promise<SmsDeliveryResult> {
  const accountSid = serverEnv.TWILIO_ACCOUNT_SID?.trim();
  const authToken = serverEnv.TWILIO_AUTH_TOKEN?.trim();
  const fromNumber = serverEnv.TWILIO_FROM_NUMBER?.trim();

  if (!accountSid || !authToken || !fromNumber) {
    return {
      delivered: false,
      mode: "simulation",
      reason: "Twilio credentials are not fully configured.",
    };
  }

  const endpoint = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
  const payload = new URLSearchParams();
  payload.set("To", normalizePhone(to));
  payload.set("From", fromNumber);
  payload.set("Body", body);

  const auth = Buffer.from(`${accountSid}:${authToken}`).toString("base64");
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return {
      delivered: false,
      mode: "provider-error",
      reason: `Twilio API error (${response.status}): ${errorText}`,
    };
  }

  return {
    delivered: true,
    mode: "sms",
    reason: null,
  };
}
