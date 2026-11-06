// Transforme les photos Unsplash écrites en Markdown en figures responsives créditées.
// Syntaxe dans un article :
//   ![Texte alternatif](https://images.unsplash.com/photo-ID "Nom du photographe|handle")
// Une légende facultative peut suivre le handle : "Nom|handle|Légende"
const utm = 'utm_source=lumispira&utm_medium=referral';
const url = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70&w=${w}&h=${Math.round(w * 2 / 3)}`;

const text = (value) => ({ type: 'text', value });
const el = (tagName, properties, children = []) => ({ type: 'element', tagName, properties, children });

export default function rehypeUnsplash() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        const kids = (child.children || []).filter((c) => !(c.type === 'text' && !c.value.trim()));
        const img = kids.length === 1 && kids[0].tagName === 'img' ? kids[0] : null;
        const src = img?.properties?.src || '';
        const m = child.tagName === 'p' && src.match(/images\.unsplash\.com\/photo-([\w-]+)/);
        if (!m) { walk(child); return child; }
        const id = m[1];
        const [name = 'Unsplash', handle = '', caption = ''] = String(img.properties.title || '').split('|');
        const author = handle ? `https://unsplash.com/@${handle}?${utm}` : `https://unsplash.com/?${utm}`;
        const figcaption = el('figcaption', {}, [
          ...(caption ? [el('span', { className: ['figure-caption'] }, [text(caption + ' ')])] : []),
          text('Photo : '),
          el('a', { href: author, rel: ['noopener'] }, [text(name)]),
          text(' sur '),
          el('a', { href: `https://unsplash.com/?${utm}`, rel: ['noopener'] }, [text('Unsplash')]),
        ]);
        return el('figure', { className: ['article-photo'] }, [
          el('img', {
            src: url(id, 960),
            srcSet: [640, 960, 1280].map((w) => `${url(id, w)} ${w}w`).join(', '),
            sizes: '(max-width: 760px) 100vw, 720px',
            width: 960, height: 640,
            alt: img.properties.alt || '',
            loading: 'lazy', decoding: 'async',
          }),
          figcaption,
        ]);
      });
    };
    walk(tree);
  };
}
