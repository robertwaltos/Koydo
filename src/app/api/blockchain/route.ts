import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createHash, randomUUID } from "crypto";

/**
 * Blockchain-verified credentials — scaffolding for on-chain certificate verification.
 * Currently generates deterministic hashes that can later be anchored to a blockchain.
 * When blockchain integration is active, these hashes will be written to an L2 or
 * a dedicated credential chain (e.g., Polygon, Ethereum L2, or custom).
 */

function generateCredentialHash(userId: string, certificateId: string, issuedAt: string): string {
  const payload = `${userId}:${certificateId}:${issuedAt}:koydo-v1`;
  return createHash("sha256").update(payload).digest("hex");
}

/** GET /api/blockchain — get blockchain-verified credentials for current user */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: creds } = await supabase
    .from("blockchain_credentials")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(50);

  return NextResponse.json({ credentials: creds ?? [] });
}

/** POST /api/blockchain — mint a blockchain credential from an existing certificate */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { certificateId } = await req.json();
  if (!certificateId) return NextResponse.json({ error: "certificateId required" }, { status: 400 });

  // Verify the certificate exists and belongs to the user
  const { data: cert } = await supabase
    .from("user_certificates")
    .select("*")
    .eq("id", certificateId)
    .eq("user_id", user.id)
    .single();

  if (!cert) return NextResponse.json({ error: "Certificate not found" }, { status: 404 });

  // Check if already minted
  const { data: existing } = await supabase
    .from("blockchain_credentials")
    .select("id")
    .eq("certificate_id", certificateId)
    .single();

  if (existing) return NextResponse.json({ error: "Already minted" }, { status: 409 });

  const credentialHash = generateCredentialHash(user.id, certificateId, cert.issued_at ?? new Date().toISOString());
  const tokenId = randomUUID();

  const { data: blockchainCred, error } = await supabase.from("blockchain_credentials").insert({
    user_id: user.id,
    certificate_id: certificateId,
    credential_hash: credentialHash,
    token_id: tokenId,
    chain: "pending", // Will be updated when blockchain integration goes live
    status: "minted",
    metadata: {
      title: cert.title,
      type: cert.certificate_type,
      issuedAt: cert.issued_at,
      score: cert.score,
    },
  }).select().single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ credential: blockchainCred });
}

/** Verification endpoint — anyone can verify a credential hash */
export async function PUT(req: NextRequest) {
  const { hash } = await req.json();
  if (!hash) return NextResponse.json({ error: "hash required" }, { status: 400 });

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("blockchain_credentials")
    .select("credential_hash, token_id, chain, status, metadata, created_at")
    .eq("credential_hash", hash)
    .single();

  if (!data) return NextResponse.json({ verified: false, message: "Credential not found" });

  return NextResponse.json({
    verified: true,
    credential: {
      hash: data.credential_hash,
      tokenId: data.token_id,
      chain: data.chain,
      status: data.status,
      metadata: data.metadata,
      mintedAt: data.created_at,
    },
  });
}
