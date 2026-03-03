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
    "out/**",
    "build/**",
    "**/build/**",
    "android/**",
    "ios/**",
    "scripts/**",
    "storybook-static/**",
    "next-env.d.ts",
    "External_AI_Agents/**",
    ".claude/**",
  ]),
  {
    files: ["src/components/games/**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "prefer-const": "off",
      "react-hooks/immutability": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
