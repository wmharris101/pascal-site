import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'podcastEpisode',
  title: 'Podcast Episode',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'episodeNumber', title: 'Episode number', type: 'number' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'audioEmbedUrl',
      title: 'Embed URL',
      type: 'url',
      description: 'Paste the embeddable player URL from Spotify/Apple/etc (Share → Embed).',
    }),
    defineField({ name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime', validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'episodeNumber', media: 'coverImage' },
  },
});
