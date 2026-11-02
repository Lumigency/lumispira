// ─────────────────────────────────────────────────────────────
// Tout le branding vit ici. Changer de nom = modifier ce fichier.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Lumispira',
  url: 'https://lumispira.com',
  locale: 'fr_FR',
  lang: 'fr',
  tagline: 'Le bien-être, passé au tamis.',
  description:
    "Santé naturelle, beauté, fait maison, développement personnel : ce que dit la science, ce que dit la tradition, et notre verdict. Sources à l'appui.",
  instagram: 'https://www.instagram.com/lumispira/',
  email: 'bonjour@lumispira.com',
  publisher: 'Lumispira',
};

export const AUTHORS = {
  tiphaine: {
    slug: 'tiphaine',
    name: 'Tiphaine',
    role: 'Fondatrice et rédactrice en chef',
    bio: "Entrepreneuse depuis toujours, Tiphaine a passé des années dans les coulisses des marques de cosmétiques et de compléments alimentaires. Elle sait comment on vend un produit — et c'est exactement pour ça qu'elle a créé Lumispira : pour séparer ce qui marche de ce qui se vend bien.",
  },
} as const;

export type AuthorKey = keyof typeof AUTHORS;

export const CATEGORIES = {
  sante: {
    slug: 'sante',
    name: 'Santé & corps',
    short: 'Santé',
    color: 'var(--herb)',
    title: 'Santé naturelle : compléments et plantes passés au crible',
    description:
      "Magnésium, ashwagandha, sommeil, digestion : on analyse les compléments et remèdes naturels avec les études, les avis des agences sanitaires et un verdict honnête.",
  },
  'beaute-naturelle': {
    slug: 'beaute-naturelle',
    name: 'Beauté naturelle',
    short: 'Beauté',
    color: 'var(--clay)',
    title: 'Beauté naturelle : les ingrédients au banc d’essai',
    description:
      "Huile de ricin, rétinol végétal, soins bio : ce que les ingrédients naturels font vraiment pour la peau et les cheveux, sans promesse marketing.",
  },
  'fait-maison': {
    slug: 'fait-maison',
    name: 'Recettes & fait maison',
    short: 'Fait maison',
    color: 'var(--pollen-deep)',
    title: 'Recettes maison : cuisine saine et cosmétiques DIY',
    description:
      "Recettes de cuisine saine et cosmétiques maison testés : des formules simples, sûres et expliquées, avec les erreurs à éviter.",
  },
  'developpement-personnel': {
    slug: 'developpement-personnel',
    name: 'Développement personnel',
    short: 'Dev perso',
    color: 'var(--lilac-deep)',
    title: 'Développement personnel : habitudes et méthodes prouvées',
    description:
      "Habitudes, motivation, stress, routines : le développement personnel sans gourou, avec ce que la psychologie a vraiment démontré.",
  },
  'bons-plans': {
    slug: 'bons-plans',
    name: 'Bons plans & comparatifs',
    short: 'Bons plans',
    color: 'var(--ink)',
    title: 'Bons plans bien-être et comparatifs indépendants',
    description:
      "Compléments, cosmétiques bio, matériel de yoga, livres et box : nos guides d’achat indépendants et les bons plans du moment, sélectionnés avec une méthode publique.",
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
export const CATEGORY_KEYS = Object.keys(CATEGORIES) as CategoryKey[];

// L'indice de preuve : la signature éditoriale du média.
export const EVIDENCE = {
  5: { label: 'Prouvé', text: 'Méta-analyses ou consensus des autorités de santé.' },
  4: { label: 'Solide', text: 'Plusieurs essais cliniques de bonne qualité, résultats concordants.' },
  3: { label: 'Prometteur', text: 'Quelques essais humains encourageants, mais petits ou peu nombreux.' },
  2: { label: 'Fragile', text: 'Études sur l’animal, in vitro, ou essais humains de faible qualité.' },
  1: { label: 'Non démontré', text: 'Aucune étude sérieuse, ou des études qui ne montrent rien.' },
} as const;

export type EvidenceLevel = keyof typeof EVIDENCE;
