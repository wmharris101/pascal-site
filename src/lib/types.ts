export interface SocialLink {
  platform: string;
  url: string;
}

export interface Person {
  _id: string;
  name: string;
  slug: string;
  role?: string;
  bio?: any; // Portable Text
  headshots?: any[];
  socialLinks?: SocialLink[];
  isTeamMember?: boolean;
  isAuthor?: boolean;
  order?: number;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  excerpt: string;
  body?: any; // Portable Text
  coverImage?: any;
  keyTakeaways?: string[];
  author?: { name: string; slug: string; role?: string; headshots?: any[] };
  publishedAt: string;
}

export interface PodcastShow {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  coverArt?: any;
}

export interface PodcastEpisode {
  _id: string;
  title: string;
  slug: string;
  description: string;
  episodeNumber?: number;
  audioEmbedUrl?: string;
  coverImage?: any;
  publishedAt: string;
  show?: { title: string; slug: string };
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  client?: string;
  clientLogo?: any;
  featuredPhoto?: any;
  chartImage?: any;
  summary?: string;
  body?: any; // Portable Text
  publishedAt: string;
}

export interface PressItem {
  _id: string;
  title: string;
  publication?: string;
  publisherLogo?: any;
  externalUrl: string;
  publishedAt?: string;
}
