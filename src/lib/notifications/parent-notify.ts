import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type NotificationType =
  | "achievement"
  | "milestone"
  | "safety_alert"
  | "weekly_digest"
  | "daily_summary"
  | "device_linked"
  | "streak_milestone"
  | "session_complete"
  | "assessment_ready"
  | "low_activity"
  | "new_content";

type CreateNotificationOptions = {
  userId: string;
  type: NotificationType;
  title: string;
  body?: string;
  childProfileId?: string;
  metadata?: Record<string, unknown>;
};

/**
 * Create a parent notification (in-app).
 * Respects notification preferences — will skip delivery if the parent
 * has disabled the relevant notification type.
 */
export async function createParentNotification(
  options: CreateNotificationOptions,
): Promise<{ success: boolean; notificationId?: string }> {
  const admin = createSupabaseAdminClient();

  // Check preferences (if table exists)
  const { data: prefs } = await admin
    .from("parent_notification_preferences")
    .select("*")
    .eq("user_id", options.userId)
    .maybeSingle();

  if (prefs) {
    const typePrefsMap: Record<string, boolean | undefined> = {
      achievement: prefs.notify_achievements,
      milestone: prefs.notify_milestones,
      streak_milestone: prefs.notify_milestones,
      safety_alert: prefs.notify_safety_alerts,
      session_complete: prefs.notify_session_complete,
      weekly_digest: prefs.weekly_digest,
      daily_summary: prefs.daily_summary,
    };

    if (typePrefsMap[options.type] === false) {
      return { success: true }; // Silently skip — preference off
    }
  }

  const { data, error } = await admin
    .from("parent_notifications")
    .insert({
      user_id: options.userId,
      type: options.type,
      title: options.title,
      body: options.body ?? null,
      child_profile_id: options.childProfileId ?? null,
      metadata: options.metadata ?? {},
    })
    .select("id")
    .single();

  if (error) {
    console.error("Failed to create parent notification:", error);
    return { success: false };
  }

  return { success: true, notificationId: data.id };
}

/**
 * Create a batch of notifications for the same parent (e.g. daily digest).
 */
export async function createParentNotificationBatch(
  notifications: CreateNotificationOptions[],
): Promise<number> {
  let created = 0;
  for (const n of notifications) {
    const result = await createParentNotification(n);
    if (result.success && result.notificationId) created++;
  }
  return created;
}
