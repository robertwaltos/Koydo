import { NextResponse } from "next/server";
import {
  getLanguagePricingSnapshot,
  getLanguagePricingSpecSnapshot,
  getLanguageRuntimeConfig,
} from "@/lib/language-learning";

export async function GET() {
  const runtimeConfig = await getLanguageRuntimeConfig();
  return NextResponse.json({
    route: "/api/language/pricing",
    pricing: getLanguagePricingSnapshot(),
    spec: getLanguagePricingSpecSnapshot(),
    runtimeConfig,
  });
}
