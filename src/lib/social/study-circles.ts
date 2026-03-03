/**
 * Study Circle management utilities.
 */

import type { SupabaseClient } from "@supabase/supabase-js";
import { generateInviteCode } from "./leaderboard";

export interface StudyCircle {
  id: string;
  name: string;
  description: string;
  ownerUserId: string;
  subject: string | null;
  maxMembers: number;
  isPublic: boolean;
  inviteCode: string | null;
  status: "active" | "archived";
  memberCount: number;
  createdAt: string;
}

export interface CircleMember {
  userId: string;
  role: "owner" | "moderator" | "member";
  joinedAt: string;
}

export interface CreateCircleInput {
  name: string;
  description?: string;
  subject?: string;
  maxMembers?: number;
  isPublic?: boolean;
}

/**
 * Create a study circle and add owner as first member.
 */
export async function createStudyCircle(
  supabase: SupabaseClient,
  userId: string,
  input: CreateCircleInput,
): Promise<{ circle: StudyCircle | null; error: string | null }> {
  // Check user's circle limit (max 5 owned)
  const { count } = await supabase
    .from("study_circles")
    .select("id", { count: "exact", head: true })
    .eq("owner_user_id", userId)
    .eq("status", "active");

  if ((count ?? 0) >= 5) {
    return { circle: null, error: "Maximum 5 active study circles per user." };
  }

  const inviteCode = generateInviteCode();

  const { data: circle, error } = await supabase
    .from("study_circles")
    .insert({
      name: input.name.trim(),
      description: (input.description ?? "").trim(),
      owner_user_id: userId,
      subject: input.subject?.trim() || null,
      max_members: Math.min(input.maxMembers ?? 8, 20),
      is_public: input.isPublic ?? false,
      invite_code: inviteCode,
    })
    .select()
    .single();

  if (error) {
    return { circle: null, error: error.message };
  }

  // Add owner as first member
  await supabase.from("study_circle_members").insert({
    circle_id: circle.id,
    user_id: userId,
    role: "owner",
  });

  return {
    circle: mapCircleRow(circle, 1),
    error: null,
  };
}

/**
 * Join a circle by invite code.
 */
export async function joinCircleByCode(
  supabase: SupabaseClient,
  userId: string,
  code: string,
): Promise<{ circleId: string | null; error: string | null }> {
  const { data: circle } = await supabase
    .from("study_circles")
    .select("id, max_members, status")
    .eq("invite_code", code.toUpperCase().trim())
    .eq("status", "active")
    .single();

  if (!circle) {
    return { circleId: null, error: "Invalid or expired invite code." };
  }

  // Check capacity
  const { count } = await supabase
    .from("study_circle_members")
    .select("id", { count: "exact", head: true })
    .eq("circle_id", circle.id);

  if ((count ?? 0) >= circle.max_members) {
    return { circleId: null, error: "This study circle is full." };
  }

  // Check if already a member
  const { data: existing } = await supabase
    .from("study_circle_members")
    .select("id")
    .eq("circle_id", circle.id)
    .eq("user_id", userId)
    .single();

  if (existing) {
    return { circleId: circle.id, error: null }; // already in
  }

  const { error } = await supabase.from("study_circle_members").insert({
    circle_id: circle.id,
    user_id: userId,
    role: "member",
  });

  if (error) {
    return { circleId: null, error: error.message };
  }

  return { circleId: circle.id, error: null };
}

/**
 * List circles the user belongs to.
 */
export async function getUserCircles(
  supabase: SupabaseClient,
  userId: string,
): Promise<StudyCircle[]> {
  const { data: memberships } = await supabase
    .from("study_circle_members")
    .select("circle_id")
    .eq("user_id", userId);

  if (!memberships || memberships.length === 0) return [];

  const circleIds = memberships.map((m: { circle_id: string }) => m.circle_id);

  const { data: circles } = await supabase
    .from("study_circles")
    .select("*")
    .in("id", circleIds)
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (!circles) return [];

  // Get member counts
  const result: StudyCircle[] = [];
  for (const c of circles) {
    const { count } = await supabase
      .from("study_circle_members")
      .select("id", { count: "exact", head: true })
      .eq("circle_id", c.id);
    result.push(mapCircleRow(c, count ?? 0));
  }

  return result;
}

/**
 * Get circle members.
 */
export async function getCircleMembers(
  supabase: SupabaseClient,
  circleId: string,
): Promise<CircleMember[]> {
  const { data } = await supabase
    .from("study_circle_members")
    .select("user_id, role, joined_at")
    .eq("circle_id", circleId)
    .order("joined_at", { ascending: true });

  if (!data) return [];

  return data.map((row: { user_id: string; role: string; joined_at: string }) => ({
    userId: row.user_id,
    role: row.role as CircleMember["role"],
    joinedAt: row.joined_at,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapCircleRow(row: any, memberCount: number): StudyCircle {
  return {
    id: row.id,
    name: row.name,
    description: row.description ?? "",
    ownerUserId: row.owner_user_id,
    subject: row.subject,
    maxMembers: row.max_members,
    isPublic: row.is_public,
    inviteCode: row.invite_code,
    status: row.status,
    memberCount,
    createdAt: row.created_at,
  };
}
