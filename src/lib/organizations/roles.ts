export const ORGANIZATION_ROLES = [
  "owner",
  "admin",
  "teacher",
  "it_manager",
  "viewer",
] as const;

export type OrganizationRole = (typeof ORGANIZATION_ROLES)[number];

export const INVITABLE_ORGANIZATION_ROLES = [
  "admin",
  "teacher",
  "it_manager",
  "viewer",
] as const;

export type InvitableOrganizationRole = (typeof INVITABLE_ORGANIZATION_ROLES)[number];

const ORGANIZATION_ROLE_RANK: Record<OrganizationRole, number> = {
  viewer: 10,
  teacher: 20,
  it_manager: 30,
  admin: 40,
  owner: 50,
};

export function hasOrganizationRole(
  role: string | null | undefined,
  allowedRoles: readonly OrganizationRole[],
) {
  if (!role) return false;
  return allowedRoles.includes(role as OrganizationRole);
}

export function coerceOrganizationRole(role: string | null | undefined): OrganizationRole | null {
  if (!role) return null;
  return ORGANIZATION_ROLES.includes(role as OrganizationRole)
    ? (role as OrganizationRole)
    : null;
}

export function getHigherOrganizationRole(
  left: OrganizationRole,
  right: OrganizationRole,
): OrganizationRole {
  return ORGANIZATION_ROLE_RANK[left] >= ORGANIZATION_ROLE_RANK[right] ? left : right;
}

export function slugifyOrganizationName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50);
}
