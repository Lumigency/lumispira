// ─────────────────────────────────────────────────────────────
// Tout le branding vit ici. Changer de nom = modifier ce fichier.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Lumispira',
  url: 'https://lumispira.vercel.app',
  // Refonte en cours : false = site caché de Google. Passer à true le jour du lancement.
  indexable: false,
  locale: 'fr_FR',
  lang: 'fr',
  tagline: 'Le bien-être, passé au tamis.',
  description:
    "Santé naturelle, acné, beauté, recettes et remèdes de grand-mère, développement personnel : ce que dit la science, ce que dit la tradition, et notre verdict.",
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
    soft: 'var(--herb-soft)',
    title: 'Santé naturelle : compléments et plantes passés au crible',
    description:
      "Magnésium, ashwagandha, sommeil, digestion : les compléments et remèdes naturels analysés avec les études, les agences sanitaires et un verdict honnête.",
  },
  'peau-acne': {
    slug: 'peau-acne',
    name: 'Peau & acné',
    short: 'Peau & acné',
    color: 'var(--rose)',
    soft: 'var(--rose-soft)',
    title: 'Acné et problèmes de peau : ce qui marche vraiment',
    description:
      "Acné, boutons, rougeurs, eczéma : causes, idées reçues, routines et traitements, avec ce que disent les études et les dermatologues.",
  },
  'beaute-naturelle': {
    slug: 'beaute-naturelle',
    name: 'Beauté naturelle',
    short: 'Beauté',
    color: 'var(--clay)',
    soft: 'var(--apricot-soft)',
    title: 'Beauté naturelle : ingrédients et cosmétiques maison',
    description:
      "Huiles végétales, soins bio, cosmétiques maison : ce que les ingrédients naturels font vraiment pour la peau et les cheveux, et des recettes DIY sûres.",
  },
  'recettes-grand-mere': {
    slug: 'recettes-grand-mere',
    name: 'Recettes & remèdes de grand-mère',
    short: 'Grand-mère',
    color: 'var(--oat)',
    soft: 'var(--oat-soft)',
    title: 'Recettes simples et remèdes de grand-mère passés au tamis',
    description:
      "Recettes simples et d'antan, miel contre la toux, tisanes : les recettes et remèdes de grand-mère, ce qui marche, ce qui ne marche pas, et les précautions.",
  },
  'developpement-personnel': {
    slug: 'developpement-personnel',
    name: 'Développement personnel',
    short: 'Dev perso',
    color: 'var(--lilac-deep)',
    soft: 'var(--lilac-soft)',
    title: 'Développement personnel : habitudes et méthodes prouvées',
    description:
      "Habitudes, motivation, stress, routines : le développement personnel sans gourou, avec ce que la psychologie a vraiment démontré.",
  },
  'bons-plans': {
    slug: 'bons-plans',
    name: 'Bons plans & comparatifs',
    short: 'Bons plans',
    color: 'var(--plum)',
    soft: 'var(--pollen)',
    title: 'Bons plans bien-être et comparatifs indépendants',
    description:
      "Compléments, soins visage et corps, bien-être, livres : nos guides d’achat indépendants et les bons plans du moment, choisis avec une méthode publique.",
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
