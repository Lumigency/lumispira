// ─────────────────────────────────────────────────────────────
// BONS PLANS — ajoute tes offres ici. Une offre expirée disparaît
// automatiquement de la page (champ `expires`).
//
// Exemple :
// {
//   brand: 'Nom de la marque',
//   title: 'Magnésium bisglycinate, cure 2 mois',
//   offer: '-20 % avec le code LUMI20',
//   why: 'Forme bien tolérée, dosage clair, pas d’additifs inutiles.',
//   url: 'https://lien-affilie...',
//   category: 'complements',
//   expires: '2026-12-31',
//   discount: '-20 %',          // facultatif : gros badge sur la carte
//   code: 'LUMI20',             // facultatif : bouton « copier le code »
//   featured: true,             // facultatif : l'offre « à la une » en haut de page
//   guide: '/sante/magnesium-quelle-forme-choisir/', // facultatif
// },
// ─────────────────────────────────────────────────────────────

export type Deal = {
  brand: string;
  title: string;
  offer: string;
  why: string;
  url: string;
  category: 'complements' | 'cosmetiques' | 'yoga-sport' | 'livres-box';
  expires: string;
  discount?: string;
  code?: string;
  featured?: boolean;
  guide?: string;
};

export const DEAL_CATEGORIES = {
  complements: { label: 'Compléments alimentaires', short: 'Compléments', illus: 'sante', tint: 'var(--herb-soft)', blurb: 'Les bonnes formes, les bons dosages, au bon prix.' },
  cosmetiques: { label: 'Cosmétiques bio et naturels', short: 'Cosmétiques', illus: 'beaute-naturelle', tint: 'var(--apricot-soft)', blurb: 'Des formules courtes et honnêtes, sans marketing.' },
  'yoga-sport': { label: 'Yoga, sport et bien-être maison', short: 'Yoga & maison', illus: 'yoga', tint: 'var(--lilac-soft)', blurb: 'Tapis, accessoires, sommeil : du matériel qui dure.' },
  'livres-box': { label: 'Livres, formations et box', short: 'Livres & box', illus: 'livres', tint: 'var(--rose-soft)', blurb: 'Les lectures et box qui valent leur prix.' },
} as const;

export const DEALS: Deal[] = [];
