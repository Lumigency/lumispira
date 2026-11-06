// Récupère les articles PUBLIÉS dans Sanity et les écrit en Markdown avant le build Astro.
// Les brouillons ne sont jamais publics : seul ce que Tiph publie dans le Studio arrive sur le site.
// Si Sanity est injoignable, le build continue avec les articles du dépôt.
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const PROJECT = 'w2n6bpsf';
const DATASET = 'production';
const OUT = './src/content/articles/_sanity';
const REPO = './src/content/articles';

const query = `*[_type == "article" && defined(slug.current)]{
  title, seoTitle, description, category, author, date, updated, cover, body, tiphNote, personalNote,
  topics, verdict, keyPoints, evidence, sources, faq, healthWarning, affiliate, recipe, featured,
  "slug": slug.current
}`;

// ── Portable Text -> Markdown ──────────────────────────────
const esc = (t) => t.replace(/([*_\[\]])/g, '\\$1');
function spans(block) {
  const defs = Object.fromEntries((block.markDefs || []).map((d) => [d._key, d]));
  return (block.children || []).map((c) => {
    let t = esc(c.text || '');
    if (!t.trim()) return t;
    const marks = c.marks || [];
    if (marks.includes('em')) t = `*${t}*`;
    if (marks.includes('strong')) t = `**${t}**`;
    for (const m of marks) if (defs[m]?._type === 'link' && defs[m].href) t = `[${t}](${defs[m].href})`;
    return t;
  }).join('');
}
const photo = (p) => p?.unsplashId
  ? `![${(p.alt || '').replace(/[\[\]]/g, '')}](https://images.unsplash.com/photo-${p.unsplashId} "${[p.credit || 'Unsplash', p.handle || '', p.legende || ''].join('|').replace(/\|+$/, '').replace(/"/g, '“')}")`
  : '';
const table = (t) => {
  const rows = (t.lignes || []).map((l) => (l.cellules || []).map((c) => String(c).replace(/\|/g, '\\|')));
  if (!rows.length) return '';
  const n = Math.max(...rows.map((r) => r.length));
  const line = (r) => `| ${Array.from({ length: n }, (_, i) => r[i] ?? '').join(' | ')} |`;
  return [line(rows[0]), `|${' --- |'.repeat(n)}`, ...rows.slice(1).map(line)].join('\n');
};
function toMarkdown(body = []) {
  const out = [];
  let counter = 0;
  body.forEach((b, i) => {
    if (b._type === 'photoUnsplash') return out.push(photo(b), '');
    if (b._type === 'tableau') return out.push(table(b), '');
    if (b._type !== 'block') return;
    const text = spans(b);
    if (b.listItem) {
      counter = body[i - 1]?.listItem === b.listItem ? counter + 1 : 1;
      out.push(`${'  '.repeat((b.level || 1) - 1)}${b.listItem === 'number' ? `${counter}.` : '-'} ${text}`);
      if (!body[i + 1]?.listItem) out.push('');
      return;
    }
    const prefix = { h2: '## ', h3: '### ', blockquote: '> ' }[b.style] || '';
    out.push(prefix + text, '');
  });
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

// ── Front-matter au format du site ─────────────────────────
const clean = (o) => JSON.parse(JSON.stringify(o, (k, v) => (v === null || v === '' || (Array.isArray(v) && !v.length) ? undefined : v)));
function frontMatter(a) {
  const strip = (arr) => (arr || []).map(({ _key, _type, ...rest }) => rest);
  return clean({
    title: a.title, seoTitle: a.seoTitle, description: a.description, category: a.category,
    date: a.date, updated: a.updated, author: a.author || 'redaction',
    evidence: a.evidence?.claim && a.evidence?.level ? { claim: a.evidence.claim, level: a.evidence.level } : undefined,
    topics: a.topics, tiphNote: a.tiphNote, personalNote: a.personalNote,
    cover: a.cover?.unsplashId ? { id: a.cover.unsplashId, alt: a.cover.alt, credit: a.cover.credit, handle: a.cover.handle } : undefined,
    verdict: a.verdict, keyPoints: a.keyPoints,
    sources: strip(a.sources), faq: strip(a.faq),
    healthWarning: a.healthWarning || undefined, affiliate: a.affiliate || undefined, featured: a.featured || undefined,
    recipe: a.recipe?.ingredients?.length ? (({ _type, ...r }) => r)(a.recipe) : undefined,
  });
}

try {
  const url = `https://${PROJECT}.apicdn.sanity.io/v2025-02-19/data/query/${DATASET}?perspective=published&query=${encodeURIComponent(query)}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const { result = [] } = await res.json();
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  for (const a of result) {
    const file = `${a.slug}.md`;
    // Un article publié dans Sanity remplace la version du dépôt qui porte la même adresse
    if (fs.existsSync(path.join(REPO, file))) fs.rmSync(path.join(REPO, file));
    fs.writeFileSync(path.join(OUT, file), `---\n${yaml.dump(frontMatter(a), { lineWidth: -1 })}---\n\n${toMarkdown(a.body)}`);
  }
  console.log(`[sanity] ${result.length} article(s) publié(s) récupéré(s).`);
} catch (e) {
  console.warn(`[sanity] Sanity injoignable (${e.message}) : build avec les articles du dépôt uniquement.`);
}
