import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// These come from environment variables (see .env.example).
// Until they're set, `sanity` is null and every fetch function below
// automatically falls back to the mock content in `mockData.ts` —
// so the site always renders, even before Sanity is wired up.
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-01-01';

export const isSanityConnected = Boolean(projectId);

export const sanity: SanityClient | null = isSanityConnected
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // fast, cached reads — fine for marketing content
    })
  : null;

const builder = isSanityConnected ? imageUrlBuilder(sanity as SanityClient) : null;

/** Build an image URL from a Sanity image reference. */
export function urlFor(source: any) {
  if (!builder) return '';
  return builder.image(source);
}

/**
 * Run a GROQ query against Sanity, or return a fallback value if
 * Sanity isn't connected yet (no PUBLIC_SANITY_PROJECT_ID set).
 */
export async function sanityFetch<T>(query: string, params: Record<string, any> = {}, fallback: T): Promise<T> {
  if (!sanity) return fallback;
  try {
    return await sanity.fetch<T>(query, params);
  } catch (err) {
    console.error('Sanity fetch failed, using fallback content:', err);
    return fallback;
  }
}
