import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://agusdanisetiawan15.github.io",
  base: "/afdal-florist-website",
  integrations: [tailwind(), sitemap()],
});
