// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// export default defineConfig({
//   site: 'https://nevrosyne5ch.netlify.app', // ← remplace par ton URL
//   integrations: [sitemap()],
//   vite: {
//     plugins: [tailwindcss()]
//   }
// });

export default defineConfig({
  site: 'https://nevrosyne-web.github.io/nevrosyne-site/',
  base: '/nevrosyne-site/',
});