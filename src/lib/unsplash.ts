// Photos Unsplash servies par leur CDN (licence Unsplash, crédit affiché).
export const img = (id: string, w: number, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70&w=${w}${h ? `&h=${h}` : ''}`;

export const srcset = (id: string, widths: number[], ratio?: number) =>
  widths.map((w) => `${img(id, w, ratio ? Math.round(w / ratio) : undefined)} ${w}w`).join(', ');

const utm = 'utm_source=lumispira&utm_medium=referral';
export const creditLinks = (handle: string) => ({
  author: `https://unsplash.com/@${handle}?${utm}`,
  unsplash: `https://unsplash.com/?${utm}`,
});
