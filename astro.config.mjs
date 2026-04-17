import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://afdal-florist-website.pages.dev",
  integrations: [tailwind(), sitemap()],
});
