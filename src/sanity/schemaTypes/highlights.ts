import { defineField, defineType } from "sanity";

export const highlightsType = defineType({
  name: "highlights",
  title: "Home - Highlights",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "HREF",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .integer() // Ensures the number is an integer (no decimals)
          .min(1) // Ensures it's at least 1 (no negative or zero values)
          .error("Order must be a positive whole number."),
    }),
  ],
});
