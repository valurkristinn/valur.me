// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true, 
    defaultStrategy: "viewport", 
  },

  adapter: cloudflare()
});