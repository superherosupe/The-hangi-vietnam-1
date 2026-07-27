// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL, BASE_PATH } from './src/data/site.ts';

// Ten mien rieng: thehangivietnam.xyz (public/CNAME). SITE_URL/BASE_PATH la nguon duy
// nhat, moi noi khac - Base.astro, robots.txt, sitemap - deu doc lai tu src/data/site.ts.
// Con cho user vao GitHub Settings > Pages > Custom domain + tro DNS. Xem DEPLOY.md.
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/cong-nghe': `${BASE_PATH}/hoat-chat`,
    '/en/cong-nghe': `${BASE_PATH}/en/hoat-chat`,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
