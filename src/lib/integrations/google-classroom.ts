import {
  getGoogleClassroomAuthRuntimeConfig,
  getGoogleClassroomServiceAccountAccessToken,
  isGoogleClassroomRuntimeConfigured,
} from "@/lib/integrations/google-classroom-auth";

export type GoogleClassroomCreateCourseWorkInput = {
  courseId: string;
  title: string;
  description?: string | null;
  topicId?: string | null;
  maxPoints: number;
  dueAtIso?: string | null;
};

export type GoogleClassroomCreateCourseWorkResult = {
  courseWorkId: string;
  alternateLink: string | null;
  responseStatus: number;
  state: string | null;
};

function toDueDatePayload(dueAtIso: string | null | undefined) {
  if (!dueAtIso) return {};
  const dueAt = new Date(dueAtIso);
  if (!Number.isFinite(dueAt.getTime())) return {};
  return {
    dueDate: {
      year: dueAt.getUTCFullYear(),
      month: dueAt.getUTCMonth() + 1,
      day: dueAt.getUTCDate(),
    },
    dueTime: {
      hours: dueAt.getUTCHours(),
      minutes: dueAt.getUTCMinutes(),
      seconds: dueAt.getUTCSeconds(),
      nanos: 0,
    },
  };
}

export async function isGoogleClassroomSyncConfigured() {
  return isGoogleClassroomRuntimeConfigured();
}

export async function createGoogleClassroomCourseWork(
  input: GoogleClassroomCreateCourseWorkInput,
): Promise<GoogleClassroomCreateCourseWorkResult> {
  const runtimeConfig = await getGoogleClassroomAuthRuntimeConfig();
  const tokenResult = await getGoogleClassroomServiceAccountAccessToken({ runtimeConfig });
  if (!tokenResult.ok) {
    throw new Error("Google Classroom sync is not configured.");
  }

  const accessToken = tokenResult.accessToken;
  const apiBaseUrl = tokenResult.credentials.apiBaseUrl;

  const courseId = encodeURIComponent(input.courseId.trim());
  const createUrl = `${apiBaseUrl}/courses/${courseId}/courseWork`;

  const payload: Record<string, unknown> = {
    title: input.title.trim(),
    description: input.description?.trim() || undefined,
    workType: "ASSIGNMENT",
    state: "PUBLISHED",
    maxPoints: Math.max(1, Math.min(200, Number(input.maxPoints) || 1)),
    ...toDueDatePayload(input.dueAtIso ?? null),
  };

  if (input.topicId?.trim()) {
    payload.topicId = input.topicId.trim();
  }

  const createResponse = await fetch(createUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = (await createResponse.json().catch(() => null)) as
    | { id?: string; alternateLink?: string; state?: string; error?: { message?: string } }
    | null;

  if (!createResponse.ok || !body?.id) {
    const reason = body?.error?.message ?? "coursework_create_failed";
    throw new Error(`Google Classroom coursework create failed (${createResponse.status}): ${reason}`);
  }

  return {
    courseWorkId: body.id,
    alternateLink: body.alternateLink ?? null,
    responseStatus: createResponse.status,
    state: body.state ?? null,
  };
}
