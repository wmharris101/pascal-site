import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Role / title', type: 'string', description: 'e.g. "Partner", "Creative Director" — shown on the Team page.' }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich-text bio. Used on the Team page and on blog posts for authors.',
    }),
    defineField({
      name: 'headshots',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (r) => r.max(2),
      description: 'Up to two photos.',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: { list: ['LinkedIn', 'X / Twitter', 'Instagram', 'Website', 'Other'] },
            }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'isTeamMember',
      title: 'Show on Team page',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isAuthor',
      title: 'Available as a blog author',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({ name: 'order', title: 'Display order (Team page)', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'headshots.0' },
  },
});
