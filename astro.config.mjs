// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nevrosyne-web.github.io/nevrosyne-site/',
  base: '/nevrosyne-site/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwind()],
  },
});