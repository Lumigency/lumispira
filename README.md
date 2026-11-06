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
| Ajouter un bon plan | `src/data/deals.ts` : marque, offre, pourquoi, lien, date de fin ; en option `discount` (badge), `code` (bouton copier), `featured` (à la une). Une offre expirée disparaît seule |
| Ajouter un article | un fichier `.md` dans `src/content/articles/` |
| Changer les couleurs ou la typo | `src/styles/global.css` (variables en haut) |

## Ajouter un article

Copie un article existant dans `src/content/articles/`. Le nom du fichier devient l'URL :
`mon-sujet.md` → `/<categorie>/mon-sujet/`.

Champs principaux du haut de fichier :

- `title`, `seoTitle` (≤ 60 caractères), `description` (≤ 160 caractères)
- `category` : `sante`, `peau-acne`, `beaute-naturelle`, `recettes-grand-mere`, `maison-naturelle`, `developpement-personnel`, `bons-plans`
- `topics` : les sujets de la rubrique traités (mêmes libellés que dans `src/data/categories.ts`) ; ils rendent le filtre cliquable
- `evidence` : l'affirmation testée et son indice de 1 (Non démontré) à 5 (Prouvé)
- `verdict` et `keyPoints` : le résumé affiché en haut
- `author` : `tiphaine`, `marie` ou `redaction` (signature collective, pour les guides et sélections). L'équipe se gère dans `src/config/site.ts` (AUTHORS)
- `reviewer` : la clé d'un relecteur santé déclaré dans `REVIEWERS` (`src/config/site.ts`), par exemple `dieteticienne`
- `sources`, `faq` (génère les données structurées FAQ)
- `affiliate: true` si l'article contient des liens affiliés (affiche l'encadré)
- `healthWarning: true` pour l'encadré santé
- `personalNote` : encadré « On a testé » (expérience vécue). Un texte, signé par l'auteur de l'article, ou `{ by: marie, text: "..." }` pour le signer par quelqu'un d'autre ; facultatif
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

## Photos dans le texte d'un article

Chaque article contient au moins deux photos Unsplash (licence gratuite uniquement, jamais Unsplash+), en plus de la couverture.
On les écrit directement dans le Markdown :

```md
![Texte alternatif en français](https://images.unsplash.com/photo-ID "Nom du photographe|handle")
```

Un troisième champ facultatif ajoute une légende : `"Nom|handle|Ma légende"`.
Le site transforme automatiquement l'image en photo responsive avec le crédit (`src/lib/rehype-unsplash.mjs`).

## Ingrédients illustrés

Toute recette ou formule (`recipe:`) affiche en tête d'article un bandeau « Ce qu'il te faut » dessiné à la main.
Les ingrédients sont reconnus par mot-clé dans `src/components/Ingredients.astro` : pour un nouvel ingrédient, ajoute une ligne dans `ICONS` et son dessin SVG.

## Ton éditorial

- **Vouvoiement** partout (articles, rubriques, formulaires).
- Ton **bienveillant, grande sœur**, avec une **pointe d'humour** ; jamais moralisateur, jamais culpabilisant.
- Chaque article se termine par **« Le mot de Tiph »** : champ `tiphNote` dans le front-matter, 2 à 3 phrases dans la voix de Tiphaine (conseil, regard personnel, un peu d'humour). L'encadré « On a testé » (`personalNote`) reste réservé aux vrais tests.
