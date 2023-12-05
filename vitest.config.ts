/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: "./setup.ts",
    globals: true,
    reporters: "verbose",
    coverage: {
      include: [
        "app/**/*",
        "constants/**/*",
        "data/**/*",
        "features/**/*",
        "ui/**/*",
      ],
      reporter: ["text", "json", "html", "clover"],
      all: true,
    },
  },
});
