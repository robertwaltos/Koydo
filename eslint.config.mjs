import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Elevate key jsx-a11y rules from warn → error (plugin already
    // registered by eslint-config-next; we only override severity).
    rules: {
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/label-has-associated-control": "error",
    },
  },
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
