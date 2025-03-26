import { defineType, defineField } from "sanity";
import { apiVersion } from "../env";

export const ourTeamType = defineType({
  name: "ourTeam",
  title: "About - Our Team",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug / HREF",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
        isUnique: (slug, context) => {
          const {document, getClient} = context
          const client = getClient({apiVersion: apiVersion })
          const id = (document?._id ?? "").replace(/^drafts\./, '')
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug,
          }
          const query = `!defined(*[_type == "ourTeam" && !(_id in [$draft, $published]) && slug.current == $slug][0]._id)`
          return client.fetch(query, params)
        }
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
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
