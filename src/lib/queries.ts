export const PEOPLE_QUERY = /* groq */ `
  *[_type == "person" && isTeamMember == true] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    role,
    bio,
    headshots,
    socialLinks,
    order
  }
`;

export const POSTS_QUERY = /* groq */ `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    coverImage,
    body,
    "author": author->{ name, "slug": slug.current, role },
    publishedAt
  }
`;

export const POST_BY_SLUG_QUERY = /* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    body,
    coverImage,
    keyTakeaways,
    "author": author->{ name, "slug": slug.current, role, headshots },
    publishedAt
  }
`;

export const SHOWS_QUERY = /* groq */ `
  *[_type == "podcastShow"] {
    _id,
    title,
    "slug": slug.current,
    description,
    coverArt
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
    publishedAt,
    "show": show->{ title, "slug": slug.current }
  }
`;

export const EPISODES_BY_SHOW_QUERY = /* groq */ `
  *[_type == "podcastEpisode" && show->slug.current == $showSlug] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    episodeNumber,
    audioEmbedUrl,
    coverImage,
    publishedAt,
    "show": show->{ title, "slug": slug.current }
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
    publishedAt,
    "show": show->{ title, "slug": slug.current }
  }
`;

export const CASE_STUDIES_QUERY = /* groq */ `
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    client,
    clientLogo,
    featuredPhoto,
    summary,
    publishedAt
  }
`;

export const CASE_STUDY_BY_SLUG_QUERY = /* groq */ `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    client,
    clientLogo,
    featuredPhoto,
    chartImage,
    summary,
    body,
    publishedAt
  }
`;

export const PRESS_QUERY = /* groq */ `
  *[_type == "pressItem"] | order(publishedAt desc) {
    _id,
    title,
    publication,
    publisherLogo,
    externalUrl,
    publishedAt
  }
`;
