import { SITE } from '../config/site';

// Généré selon SITE.indexable : bloque les robots pendant la refonte.
export function GET() {
  const body = SITE.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
