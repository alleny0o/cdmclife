import { defineType, defineField } from "sanity";

export const announcementsType = defineType({
  name: "announcements",
  title: "Announcements - Weekly Announcements",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "weekStart",
      title: "Week Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "weekEnd",
      title: "Week End Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "events",
      title: "Events",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Event Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "date",
              title: "Event Date",
              type: "date",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "startTime",
              title: "Start Time",
              type: "string",
              description: "Specify the event start time (e.g., 10:00 AM).",
            }),
            defineField({
              name: "endTime",
              title: "End Time",
              type: "string",
              description: "Specify the event end time (e.g., 12:00 PM).",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              description: "Provide details about the event.",
            }),
          ],
        },
      ],
    }),
  ],
});
