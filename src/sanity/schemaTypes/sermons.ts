import { defineField, defineType } from "sanity";

export const sermonsType = defineType({
  name: "sermons",
  title: "Sermons",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pastor",
      title: "Pastor",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
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
