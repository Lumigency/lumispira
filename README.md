# Lumispira — le bien-être, passé au tamis

Média indépendant : santé naturelle, beauté, fait maison, développement personnel, bons plans.
Site statique Astro, déployé sur Vercel.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Où modifier quoi

| Je veux… | Fichier |
|---|---|
| Changer le nom, l'URL, l'e-mail, l'Instagram | `src/config/site.ts` |
| Modifier les textes d'une page catégorie | `src/data/categories.ts` |
| Ajouter un bon plan | `src/data/deals.ts` (une offre expirée disparaît seule) |
| Ajouter un article | un fichier `.md` dans `src/content/articles/` |
| Changer les couleurs ou la typo | `src/styles/global.css` (variables en haut) |

## Ajouter un article

Copie un article existant dans `src/content/articles/`. Le nom du fichier devient l'URL :
`mon-sujet.md` → `/<categorie>/mon-sujet/`.

Champs principaux du haut de fichier :

- `title`, `seoTitle` (≤ 60 caractères), `description` (≤ 160 caractères)
- `category` : `sante`, `beaute-naturelle`, `fait-maison`, `developpement-personnel`, `bons-plans`
- `evidence` : l'affirmation testée et son indice de 1 (Non démontré) à 5 (Prouvé)
- `verdict` et `keyPoints` : le résumé affiché en haut
- `reviewer` : `{ name, title }` du professionnel de santé relecteur, quand il y en a un
- `sources`, `faq` (génère les données structurées FAQ)
- `affiliate: true` si l'article contient des liens affiliés (affiche l'encadré)
- `healthWarning: true` pour l'encadré santé
- `recipe` (avec `kind: food` pour une recette de cuisine → données structurées Recipe)

Les liens affiliés dans les articles doivent porter `rel="sponsored nofollow"`.

## SEO technique inclus

Sitemap automatique, RSS, robots.txt, balises canonical et Open Graph, données structurées
(Organization, WebSite, Article / MedicalWebPage, BreadcrumbList, FAQPage, Recipe, ProfilePage),
redirections 301 des anciennes URL (`vercel.json`).

## À compléter avant la mise en ligne

- `src/pages/mentions-legales.astro` : éditeur, SIREN, directrice de publication
- `src/pages/confidentialite.astro` : à faire valider
- `src/components/Newsletter.astro` : brancher le formulaire Brevo
- Relecteur santé : ajouter `reviewer` aux articles santé
- **Lancement** : dans `src/config/site.ts`, mettre l'URL définitive et passer `indexable` à `true`
