export interface StudentProfile {
  id: string;
  display_name: string;
  grade_level: string | null;
  avatar_url?: string;
  ai_skill_level_map?: Record<string, unknown> | null;
  account_id?: string;
  age_years?: number | null;
  initial_assessment_status?: string;
  initial_assessment_data?: unknown;
  created_at?: string;
  updated_at?: string;
  path_allowlist?: string[] | null;
  featured_module_ids?: string[] | null;
  module_assignment_mode?: "guided" | "random";
}
