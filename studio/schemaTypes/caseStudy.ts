import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({
      name: 'client',
      title: 'Client name',
      type: 'string',
      description: 'Plain text for now — this becomes a reference once a Client document type exists.',
    }),
    defineField({ name: 'clientLogo', title: 'Client logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'featuredPhoto', title: 'Featured photo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'chartImage',
      title: 'Chart',
      type: 'image',
      description: 'Upload a chart image (export from Sheets/Excel/Figma/etc). A live, data-driven chart is possible later but adds real build complexity — this keeps publishing fast for now.',
    }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', description: 'Short blurb shown on the case studies listing page.' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime', validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'featuredPhoto' },
  },
});
