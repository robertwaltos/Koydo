import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "**/.next/**",
    "out/**",
    "**/out/**",
    "build/**",
    "**/build/**",
    "android/**",
    "ios/**",
    "scripts/**",
    "storybook-static/**",
    "**/storybook-static/**",
    "next-env.d.ts",
    // Generated artifacts and external workspaces.
    "e2e/report/**",
    "playwright-report/**",
    "External_AI_Agents/**",
    "data/**",
    "eduforge-web/**",
    ".claude/**",
    "**/.claude/**",
    "tmp/**",
    "**/tmp/**",
  ]),
]);

export default eslintConfig;
