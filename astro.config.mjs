// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: true, // Automatically applies to standard links
    defaultStrategy: "hover", // Uses the human gap between hovering and clicking
  },
});
