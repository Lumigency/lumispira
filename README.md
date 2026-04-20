# LÜMISPIRA — Site éditorial statique (architecture scalable)

Magazine bien-être & sagesse ancestrale pour les âmes sensibles.

## Structure du projet

```text
lumispira/
├── index.html
├── assets/
│   ├── css/
│   │   └── global.css              # Design system et styles partagés
│   └── js/
│       ├── content.js              # Contenu global (nav, footer, CTA, lead magnet)
│       ├── components.js           # Composants réutilisables (header/footer/shell)
│       └── global.js               # Interactions globales (menu, anims, filtres)
├── content/
│   └── site.json                   # Source de vérité éditoriale (future CMS)
├── protocoles/index.html
├── recettes/index.html
├── cuisine-sacree/index.html
├── eveil/index.html
├── coups-de-coeur/index.html
├── guides/index.html
└── articles/
    ├── rituel-matinal-aligne/index.html
    ├── equilibrer-7-chakras/index.html
    └── elixir-ortie-grand-mere/index.html
```

## Principes de la refonte

- **UI inchangée** : aucune refonte visuelle, styles conservés.
- **Composants réutilisables** : navigation, lead magnet et footer injectés depuis `components.js`.
- **Contenu séparé de la présentation** : les données globales vivent dans `content.js` (+ miroir JSON dans `content/site.json`).
- **URLs préservées** : aucune route éditoriale modifiée.
- **Prêt CMS** : la structure `content/` permet un futur mapping vers collections (Astro Content Collections, Sanity, Contentful, etc.).

## Déploiement GitHub Pages

1. Push le repo sur GitHub.
2. Ouvrir **Settings → Pages**.
3. Sélectionner **Deploy from a branch** → `main` → `/ (root)`.

## Ajouter une nouvelle catégorie

1. Créer la page `/<slug>/index.html` en copiant une page catégorie existante.
2. Ajouter l’entrée de navigation dans `assets/js/content.js`.
3. Mettre à jour `content/site.json` avec la même entrée.

## Ajouter un nouvel article

1. Créer `articles/<slug>/index.html` à partir d’un article existant.
2. Lier l’article dans la page catégorie souhaitée.
3. (Optionnel) Synchroniser les métadonnées dans `content/` pour préparer la migration CMS.

---
© 2025 LÜMISPIRA · Lumière · Équilibre · Guérison
