export const EMPLOYEES_QUERY = /* groq */ `
  *[_type == "employee"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    role,
    bio,
    photo,
    order
  }
`;

export const POSTS_QUERY = /* groq */ `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    "author": author->name,
    publishedAt
  }
`;

export const POST_BY_SLUG_QUERY = /* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    coverImage,
    "author": author->name,
    publishedAt
  }
`;

export const EPISODES_QUERY = /* groq */ `
  *[_type == "podcastEpisode"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    episodeNumber,
    audioEmbedUrl,
    coverImage,
    publishedAt
  }
`;

export const EPISODE_BY_SLUG_QUERY = /* groq */ `
  *[_type == "podcastEpisode" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    episodeNumber,
    audioEmbedUrl,
    coverImage,
    publishedAt
  }
`;
