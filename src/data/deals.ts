// ─────────────────────────────────────────────────────────────
// BONS PLANS — ajoutez vos offres ici. Une offre expirée disparaît
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
  category: 'complements' | 'visage' | 'corps' | 'bien-etre' | 'inspirations';
  expires: string;
  discount?: string;
  code?: string;
  featured?: boolean;
  guide?: string;
};

export const DEAL_CATEGORIES = {
  complements: { label: 'Compléments alimentaires', short: 'Compléments', illus: 'sante', tint: 'var(--herb-soft)', blurb: 'Les bonnes formes, les bons dosages, au bon prix.' },
  visage: { label: 'Visage & peau', short: 'Visage & peau', illus: 'peau-acne', tint: 'var(--rose-soft)', blurb: 'Soins visage, routines peau et anti-imperfections qui tiennent leurs promesses.' },
  corps: { label: 'Soin du corps', short: 'Soin du corps', illus: 'corps', tint: 'var(--apricot-soft)', blurb: 'Hydratants, huiles, déodorants, gommages : des formules courtes et honnêtes.' },
  'bien-etre': { label: 'Produits bien-être', short: 'Bien-être', illus: 'yoga', tint: 'var(--lilac-soft)', blurb: 'Yoga, sommeil, maison, box : du matériel et des objets qui durent.' },
  inspirations: { label: 'Inspirations : livres & podcasts', short: 'Livres & podcasts', illus: 'inspirations', tint: 'var(--oat-soft)', blurb: 'Les lectures, livres audio et podcasts qui font vraiment avancer.' },
} as const;

export const DEALS: Deal[] = [];
