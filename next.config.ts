import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Supabase API + realtime
      "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.stripe.com",
      // Next.js HMR in dev
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://*.supabase.co https://*.supabase.in https://storage.googleapis.com",
      "font-src 'self'",
      "frame-src https://js.stripe.com https://hooks.stripe.com",
      "worker-src 'self' blob:",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  turbopack: {
    // Force Turbopack to resolve modules from the app directory even when
    // dev is launched from the parent repo root.
    root: projectRoot,
    resolveAlias: {
      tailwindcss: path.join(projectRoot, "node_modules", "tailwindcss"),
    },
  },

  // Strip console.log in production; keep console.error/warn for diagnostics
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },

  // Reduce client-side JS by tree-shaking these large packages at build time
  experimental: {
    optimizePackageImports: [
      "@supabase/supabase-js",
      "@supabase/ssr",
      "date-fns",
    ],
  },

  images: {
    // Allow Supabase Storage CDN images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "*.supabase.in",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    // Serve modern formats automatically
    formats: ["image/avif", "image/webp"],
    // Cache resized images for 7 days
    minimumCacheTTL: 604800,
  },

  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Serve Apple/Android well-known verification files with correct Content-Type
        source: "/.well-known/(.*)",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      // Ensure Next.js serves the extensionless AASA file correctly
      {
        source: "/.well-known/apple-app-site-association",
        destination: "/.well-known/apple-app-site-association",
      },
    ];
  },
};

export default nextConfig;
