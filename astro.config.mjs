import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://thejasondev.github.io',
  base: '/thejasondev-portfolio',
  outDir: './dist',
  build: {
    assets: 'assets'
  },
  integrations: [tailwind()],
  vite: {
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false
    }
  }
});
