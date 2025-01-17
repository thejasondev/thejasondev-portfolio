import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://thejasondev.github.io',
  base: '/thejasondev-portfolio',
  build: {
    assets: '_astro'
  },
  integrations: [tailwind()],
});
