import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/thejasondev-portfolio" : "/",
  integrations: [tailwind()],
});
