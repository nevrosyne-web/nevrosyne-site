// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nevrosyne.fr/',
  base: '/',
  integrations: [
    // les pages en noindex (cf. Seo.astro) ne doivent pas figurer dans le sitemap
    sitemap({ filter: (page) => !page.includes("/contact-success/") }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});