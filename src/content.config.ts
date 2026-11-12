import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse } from 'yaml';

/**
 * YAML list loader that remembers each entry's position in the file as `order`,
 * so pages can list entries in the order they're written.
 */
const yamlList = (path: string) =>
  file(path, {
    parser: (text) =>
      (parse(text) as Record<string, unknown>[]).map((entry, i) => ({ ...entry, order: i })),
  });
const order = z.number().default(0);

const link = z.object({ label: z.string(), url: z.string().url() });

/** Publications: src/data/publications.yaml (newest first; order in the file is preserved). */
const publications = defineCollection({
  loader: yamlList('src/data/publications.yaml'),
  schema: z.object({
    order,
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    status: z.enum(['published', 'in press', 'preprint']).default('published'),
    /** e.g. "co-first author", "6 co-first authors" */
    note: z.string().optional(),
    firstAuthor: z.boolean().default(false),
    selected: z.boolean().default(false),
    links: z.array(link).default([]),
  }),
});

const talks = defineCollection({
  loader: yamlList('src/data/talks.yaml'),
  schema: z.object({
    order,
    kind: z.enum(['Talk', 'Flash talk', 'Poster']),
    event: z.string(),
    year: z.string(),
    detail: z.string().optional(),
  }),
});

const simpleList = z.object({
  order,
  title: z.string(),
  year: z.string().optional(),
  detail: z.string().optional(),
});

const awards = defineCollection({ loader: yamlList('src/data/awards.yaml'), schema: simpleList });
const service = defineCollection({ loader: yamlList('src/data/service.yaml'), schema: simpleList });

const positions = defineCollection({
  loader: yamlList('src/data/positions.yaml'),
  schema: z.object({
    order,
    section: z.enum(['education', 'research', 'teaching', 'industry']),
    title: z.string(),
    org: z.string(),
    location: z.string().optional(),
    dates: z.string(),
    bullets: z.array(z.string()).default([]),
  }),
});

/** Research projects: one Markdown file each in src/content/research/. */
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      order: z.number(),
      era: z.enum(['phd', 'undergrad']),
      status: z.string().optional(),
      logo: image().optional(),
      logoAlt: z.string().optional(),
      figure: image().optional(),
      figureAlt: z.string().optional(),
      figureCaption: z.string().optional(),
      cardImage: image().optional(),
      cardImageAlt: z.string().optional(),
      links: z.array(link).default([]),
    }),
});

/** Earlier (undergrad / side) projects: src/content/archive/. */
const archive = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/archive' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.string(),
      order: z.number(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    }),
});

export const collections = { publications, talks, awards, service, positions, research, archive };
