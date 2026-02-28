import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/explore", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/modules", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/exam-prep", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/science-lab", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/support", priority: 0.4, changeFrequency: "monthly" as const },
    { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/legal/refunds", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
