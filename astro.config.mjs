import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/thejasondev-portfolio/" : "/",
  integrations: [tailwind()],
});
