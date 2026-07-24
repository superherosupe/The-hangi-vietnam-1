// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// CHUA CO ten mien chinh thuc - dang dung GitHub Pages tam.
// Khi mua ten mien: doi `site` va xoa `base` neu deploy len ten mien rieng.
export default defineConfig({
  site: 'https://thehangi-vietnam.github.io',
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
