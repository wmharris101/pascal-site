import type { Employee, BlogPost, PodcastEpisode } from './types';

export const mockEmployees: Employee[] = [
  { _id: '1', name: 'Jordan Reyes', slug: 'jordan-reyes', role: 'Founder & Creative Director', bio: 'Leads strategy and creative direction for every engagement.', order: 1 },
  { _id: '2', name: 'Sam Okafor', slug: 'sam-okafor', role: 'Head of Client Strategy', bio: 'Keeps every project tied back to measurable outcomes.', order: 2 },
  { _id: '3', name: 'Priya Nair', slug: 'priya-nair', role: 'Lead Designer', bio: 'Designs brand systems and digital experiences.', order: 3 },
];

export const mockPosts: BlogPost[] = [
  {
    _id: 'p1',
    title: 'Placeholder post — replace me in Sanity',
    slug: 'placeholder-post',
    excerpt: 'This is sample copy so the blog layout has something to show. Once Sanity is connected, real posts will appear here automatically.',
    author: 'Jordan Reyes',
    publishedAt: new Date().toISOString(),
  },
];

export const mockEpisodes: PodcastEpisode[] = [
  {
    _id: 'e1',
    title: 'Episode 1 — placeholder',
    slug: 'episode-1',
    description: 'Sample episode description. Real episodes will pull from Sanity once it is connected.',
    episodeNumber: 1,
    publishedAt: new Date().toISOString(),
  },
];
