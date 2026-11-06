import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  // Articles du dépôt + articles publiés dans Sanity (copiés dans _sanity/ au moment du build)
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/articles',
    generateId: ({ entry }) => entry.split('/').pop()!.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().max(170),
    category: z.enum(['sante', 'peau-acne', 'beaute-naturelle', 'recettes-grand-mere', 'maison-naturelle', 'developpement-personnel', 'bons-plans']),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.enum(['tiphaine', 'marie', 'redaction']).default('tiphaine'),
    // Relecteur santé : une clé de REVIEWERS (src/config/site.ts) ou { name, title }
    reviewer: z.union([z.string(), z.object({ name: z.string(), title: z.string() })]).optional(),
    // Indice de preuve sur l'affirmation principale de l'article
    evidence: z
      .object({
        claim: z.string(),
        level: z.number().int().min(1).max(5),
      })
      .optional(),
    verdict: z.string(),
    keyPoints: z.array(z.string()).default([]),
    // Sujets de la rubrique (doivent correspondre aux libellés de src/data/categories.ts)
    topics: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url().optional() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    affiliate: z.boolean().default(false),
    healthWarning: z.boolean().default(false),
    readingTime: z.number().optional(),
    recipe: z
      .object({
        kind: z.enum(['food', 'diy']).default('food'),
        recipeCategory: z.string().optional(),
        recipeCuisine: z.string().default('Française'),
        keywords: z.string().optional(),
        prepTime: z.string(),
        cookTime: z.string(),
        yield: z.string(),
        ingredients: z.array(z.string()),
        steps: z.array(z.string()),
      })
      .optional(),
    featured: z.boolean().default(false),
    // Encadré « On a testé » : un texte (signé par l'auteur de l'article) ou { by, text }
    // « Le mot de Tiph » : signature de fin d'article, dans la voix de Tiphaine
    tiphNote: z.string().optional(),
    personalNote: z.union([z.string(), z.object({ by: z.enum(['tiphaine', 'marie', 'redaction']), text: z.string() })]).optional(),
    // Photo Unsplash : id = la partie après « photo- » dans l'URL images.unsplash.com
    cover: z
      .object({ id: z.string(), alt: z.string(), credit: z.string(), handle: z.string() })
      .optional(),
  }),
});

export const collections = { articles };
