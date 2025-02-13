// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://fzkit.github.io/docs/",
  base: "/docs/",
  integrations: [
    starlight({
      title: "FZKit | Docs",
      social: {
        github: "https://github.com/FZKit/docs",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Contributing", slug: "guides/contributing" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
