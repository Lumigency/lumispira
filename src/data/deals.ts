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
  guide?: string;
};

export const DEAL_CATEGORIES = {
  complements: 'Compléments alimentaires',
  cosmetiques: 'Cosmétiques bio et naturels',
  'yoga-sport': 'Yoga, sport et bien-être maison',
  'livres-box': 'Livres, formations et box',
} as const;

export const DEALS: Deal[] = [];
