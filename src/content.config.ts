import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().max(170),
    category: z.enum(['sante', 'beaute-naturelle', 'fait-maison', 'developpement-personnel', 'bons-plans']),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.enum(['tiphaine']).default('tiphaine'),
    reviewer: z.object({ name: z.string(), title: z.string() }).optional(),
    // Indice de preuve sur l'affirmation principale de l'article
    evidence: z
      .object({
        claim: z.string(),
        level: z.number().int().min(1).max(5),
      })
      .optional(),
    verdict: z.string(),
    keyPoints: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url().optional() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    affiliate: z.boolean().default(false),
    healthWarning: z.boolean().default(false),
    readingTime: z.number().optional(),
    recipe: z
      .object({
        kind: z.enum(['food', 'diy']).default('food'),
        prepTime: z.string(),
        cookTime: z.string(),
        yield: z.string(),
        ingredients: z.array(z.string()),
        steps: z.array(z.string()),
      })
      .optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
