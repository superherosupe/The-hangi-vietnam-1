// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// CHUA CO ten mien chinh thuc - dang dung GitHub Pages tam tai
// https://superherosupe.github.io/The-hangi-vietnam-1/
// Khi mua ten mien rieng: doi `site` thanh ten mien va XOA dong `base`.
export default defineConfig({
  site: 'https://superherosupe.github.io',
  base: '/The-hangi-vietnam-1',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
