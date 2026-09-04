import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'podcastShow',
  title: 'Podcast Show',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Show name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'coverArt', title: 'Cover art', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'hosts',
      title: 'Hosts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
  ],
  preview: {
    select: { title: 'title', media: 'coverArt' },
  },
});
