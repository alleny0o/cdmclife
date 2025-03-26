import { defineField, defineType } from "sanity";

export const homeHeroType = defineType({
  name: "homeHero",
  title: "Home - Hero",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "opacity",
      title: "Background Opacity",
      type: "number",
      description: "Set the opacity of the background image (0 to 100). Leave blank for default which is 60.",
      validation: (Rule) => Rule.min(0).max(100).error("Opacity must be between 0 and 100."),
    }),
    defineField({
      name: "verse",
      title: "Verse",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "reference",
          title: "Reference",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
});
