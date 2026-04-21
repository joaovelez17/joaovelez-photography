import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      location: z.string(),
      coverImage: z.string(),
      coverAlt: z.string(),
      readTime: z.string().optional(),
    }),
});

export const collections = { blog };