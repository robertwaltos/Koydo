export const ORGANIZATION_ROLES = [
  "owner",
  "admin",
  "teacher",
  "it_manager",
  "viewer",
] as const;

export type OrganizationRole = (typeof ORGANIZATION_ROLES)[number];

export function hasOrganizationRole(
  role: string | null | undefined,
  allowedRoles: readonly OrganizationRole[],
) {
  if (!role) return false;
  return allowedRoles.includes(role as OrganizationRole);
}

export function slugifyOrganizationName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50);
}

