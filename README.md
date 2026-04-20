# LÜMISPIRA — Site Web

Magazine bien-être & sagesse ancestrale pour les âmes sensibles.

## Structure du projet

```
lumispira/
├── index.html                          ← Page d'accueil
├── assets/
│   ├── css/global.css                  ← Styles partagés (nav, footer, composants)
│   └── js/global.js                    ← JavaScript partagé (menu, animations, filtres)
├── protocoles/index.html               ← /protocoles/
├── recettes/index.html                 ← /recettes/
├── cuisine-sacree/index.html           ← /cuisine-sacree/
├── eveil/index.html                    ← /eveil/
├── coups-de-coeur/index.html           ← /coups-de-coeur/
├── guides/index.html                   ← /guides/ (téléchargements PDF)
└── articles/
    ├── rituel-matinal-aligne/          ← /articles/rituel-matinal-aligne/
    ├── elixir-ortie-grand-mere/        ← /articles/elixir-ortie-grand-mere/
    └── equilibrer-7-chakras/           ← /articles/equilibrer-7-chakras/
```

## Déploiement sur GitHub Pages

1. Crée un repo GitHub (ex: `lumispira-site`)
2. Upload tous les fichiers (drag & drop ou git push)
3. Va dans **Settings > Pages**
4. Source : **Deploy from a branch** → `main` → `/ (root)`
5. Ton site sera disponible sur `https://ton-username.github.io/lumispira-site/`

## Ajouter un nouvel article

1. Crée un dossier dans `articles/` (ex: `articles/nouveau-rituel/`)
2. Copie un article existant comme `articles/rituel-matinal-aligne/index.html`
3. Adapte le contenu : titre, meta, hero_bg, corps de l'article
4. Ajoute une card vers cet article dans la page catégorie correspondante

## Ajouter une image réelle

Remplace les fonds CSS par de vraies images :
```css
.article-thumb { background-image: url('../../assets/images/mon-image.jpg'); background-size: cover; }
```

## Couleurs de la charte

| Variable | Valeur | Usage |
|---|---|---|
| `--cream` | `#FAF7F2` | Fond principal |
| `--terracotta` | `#B86A4B` | CTA, accents |
| `--deep-brown` | `#2E231A` | Texte, footer |
| `--sage` | `#9FAF97` | Accents verts |
| `--gold` | `#C9A96E` | Accents dorés |

---
© 2025 LÜMISPIRA · Lumière · Équilibre · Guérison
