import { defineField, defineType } from 'sanity';

const CATEGORIES = ['Measurement', 'Creative', 'Acquisition', 'Retention', 'Operations'];

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: CATEGORIES },
      description: 'Powers the filter pills and badge on the Journal listing page.',
    }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', description: 'Short summary shown on listing pages and as the subhead on the post itself.' }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe what\'s actually in the image (not the post title) — this is what screen readers announce and what Google Images indexes on.',
        }),
      ],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'person' }],
      options: { filter: 'isAuthor == true' },
    }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime', validation: (r) => r.required() }),
    defineField({
      name: 'keyTakeaways',
      title: 'Key takeaways (optional)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional bullet points shown in a "The short version" callout at the top of the post. Leave empty to skip it.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block', styles: [{ title: 'Normal', value: 'normal' }, { title: 'H2', value: 'h2' }, { title: 'Quote', value: 'blockquote' }] },
        {
          type: 'image',
          fields: [
            defineField({ name: 'alt', title: 'Alt text', type: 'string', description: 'Describe what\'s in this specific image.' }),
          ],
        },
      ],
      description: 'Use "H2" style for section headings — they automatically build the table of contents on the post page.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
});
