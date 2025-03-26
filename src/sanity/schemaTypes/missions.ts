import { defineField, defineType } from "sanity";

export const missionsType = defineType({
    name: "missions",
    title: "Missions - Past Missions",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "year",
            title: "Year",
            type: "number",
            validation: (Rule) =>
              Rule.required()
                .integer() // Ensures the number is an integer (no decimals)
                .min(1) // Ensures it's at least 1 (no negative or zero values)
                .error("Year must be a positive whole number."),
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
})