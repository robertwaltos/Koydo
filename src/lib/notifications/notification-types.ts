export type NotificationType =
  | 'lesson_reminder'
  | 'streak_at_risk'
  | 'new_content'
  | 'parent_report';

export const NOTIFICATION_CHANNELS = {
  LEARNING_REMINDERS: 'learning_reminders',
  ACHIEVEMENTS: 'achievements',
};