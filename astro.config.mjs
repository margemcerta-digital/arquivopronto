import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://arquivopronto.pages.dev",
  integrations: [sitemap()],
});
