export interface Employee {
  _id: string;
  name: string;
  slug: string;
  role: string;
  bio?: string;
  photo?: any;
  order?: number;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  body?: any; // Portable Text
  coverImage?: any;
  author?: string;
  publishedAt: string;
}

export interface PodcastEpisode {
  _id: string;
  title: string;
  slug: string;
  description: string;
  episodeNumber?: number;
  audioEmbedUrl?: string; // e.g. Spotify/Apple embed link
  coverImage?: any;
  publishedAt: string;
}
