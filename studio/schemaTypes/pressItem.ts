import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pressItem',
  title: 'Press Item',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Headline', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'publication', title: 'Publication name', type: 'string', description: 'e.g. "TechCrunch" — used for alt text and search.' }),
    defineField({ name: 'publisherLogo', title: 'Publisher logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'externalUrl', title: 'Link to article', type: 'url', validation: (r) => r.required() }),
    defineField({ name: 'publishedAt', title: 'Published date', type: 'date' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'publication', media: 'publisherLogo' },
  },
});
