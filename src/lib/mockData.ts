import type { Person, BlogPost, PodcastShow, PodcastEpisode, CaseStudy, PressItem } from './types';

export const mockPeople: Person[] = [
  { _id: '1', name: 'Jordan Reyes', slug: 'jordan-reyes', role: 'Partner', order: 1, isTeamMember: true, isAuthor: true },
  { _id: '2', name: 'Sam Okafor', slug: 'sam-okafor', role: 'Head of Client Strategy', order: 2, isTeamMember: true, isAuthor: false },
];

export const mockPosts: BlogPost[] = [
  {
    _id: 'p1',
    title: 'Placeholder post — replace me in Sanity',
    slug: 'placeholder-post',
    category: 'Measurement',
    excerpt: 'This is sample copy so the blog layout has something to show. Once Sanity is connected, real posts will appear here automatically.',
    keyTakeaways: ['This is a placeholder post.', 'Real posts will appear here once added in Sanity.'],
    author: { name: 'Jordan Reyes', slug: 'jordan-reyes', role: 'Partner' },
    publishedAt: new Date().toISOString(),
  },
];

export const mockShows: PodcastShow[] = [
  { _id: 's1', title: 'Show One', slug: 'show-one', description: 'Placeholder show.' },
];

export const mockEpisodes: PodcastEpisode[] = [
  {
    _id: 'e1',
    title: 'Episode 1 — placeholder',
    slug: 'episode-1',
    description: 'Sample episode description. Real episodes will pull from Sanity once it is connected.',
    episodeNumber: 1,
    publishedAt: new Date().toISOString(),
    show: { title: 'Show One', slug: 'show-one' },
  },
];

export const mockCaseStudies: CaseStudy[] = [];

export const mockPress: PressItem[] = [];
