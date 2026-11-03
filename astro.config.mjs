import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site.ts';
import fs from 'node:fs';
import path from 'node:path';

// Date de dernière modification de chaque article (updated, sinon date) pour le sitemap
const ARTICLES_DIR = './src/content/articles';
const lastmod = {};
for (const file of fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'))) {
  const src = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
  const cat = src.match(/^category:\s*(\S+)/m)?.[1];
  const date = src.match(/^updated:\s*(\S+)/m)?.[1] ?? src.match(/^date:\s*(\S+)/m)?.[1];
  if (cat && date) lastmod[`/${cat}/${file.replace(/\.md$/, '')}/`] = new Date(date).toISOString();
}

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => !['/404', '/mentions-legales/', '/confidentialite/'].some((p) => page.includes(p)),
      changefreq: 'weekly',
      serialize(item) {
        const p = new URL(item.url).pathname;
        if (lastmod[p]) item.lastmod = lastmod[p];
        return item;
      },
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR' } },
    }),
  ],
});
