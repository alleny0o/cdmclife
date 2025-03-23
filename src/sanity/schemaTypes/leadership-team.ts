import { defineType, defineField } from "sanity";

export const ourTeamType = defineType({
  name: "ourTeam",
  title: "Our Team",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "team",
      title: "Team Members",
      type: "array",
      of: [
        {
          title: "Team Member",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
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
              name: "socialMedia",
              title: "Social Media",
              type: "object",
              fields: [
                defineField({ name: "facebook", title: "Facebook", type: "url" }),
                defineField({ name: "instagram", title: "Instagram", type: "url" }),
                defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
                defineField({ name: "twitter", title: "Twitter", type: "url" }),
              ],
            }),
            defineField({
              name: "bio",
              title: "Bio",
              type: "object",
              fields: [
                defineField({
                  name: "slug",
                  title: "Slug",
                  type: "slug",
                  options: { source: "name", maxLength: 96 },
                  validation: (Rule) => Rule.required()
                }),

                defineField({
                  name: "description",
                  title: "Description",
                  type: "array",
                  of: [{ type: "block" }],
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).error("At least one team member is required."),
    }),
  ],
});
