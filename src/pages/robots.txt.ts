import type { APIRoute } from 'astro';
import { SITE_URL, BASE_PATH } from '../data/site';

// Sinh dong tu SITE_URL/BASE_PATH - tranh lech voi sitemap that khi doi ten mien
export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}${BASE_PATH}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
