import { defineField, defineType } from "sanity"

export default defineType({
  name: "Blog",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of the post",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description of the post",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Cover image of the post",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Description of the post",
      type: "slug",
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }),
  ],
})
