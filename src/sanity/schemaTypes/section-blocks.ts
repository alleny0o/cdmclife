import { defineField, defineType } from "sanity";

// ─── Highlights Block ─────────────────────────────────────────────────────────

export const highlightsBlockType = defineType({
  name: "highlightsBlock",
  title: "Highlights Section",
  type: "object",
  fields: [
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title",       title: "Title",       type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "description", title: "Description", type: "text",   validation: (Rule) => Rule.required() }),
            defineField({ name: "image",       title: "Image",       type: "image",  options: { hotspot: true }, validation: (Rule) => Rule.required() }),
            defineField({ name: "href",        title: "Link URL",    type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "tags",        title: "Tags",        type: "array",  of: [{ type: "string" }] }),
          ],
          preview: {
            select: { title: "title" },
            prepare: ({ title }) => ({ title }),
          },
        },
      ],
    }),
  ],
  preview: { select: {}, prepare: () => ({ title: "Highlights Section" }) },
});

// ─── Sermons Block ────────────────────────────────────────────────────────────

export const sermonsBlockType = defineType({
  name: "sermonsBlock",
  title: "Sermons Section",
  type: "object",
  fields: [
    defineField({
      name: "sermons",
      title: "Sermons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title",    title: "Title",        type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "pastor",   title: "Pastor",       type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "link",     title: "YouTube Link", type: "url",    validation: (Rule) => Rule.required() }),
            defineField({ name: "duration", title: "Duration",     type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "date",     title: "Date",         type: "date",   validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: "title", subtitle: "pastor" },
            prepare: ({ title, subtitle }) => ({ title, subtitle }),
          },
        },
      ],
    }),
  ],
  preview: { select: {}, prepare: () => ({ title: "Sermons Section" }) },
});

// ─── Gallery Block ────────────────────────────────────────────────────────────

export const galleryBlockType = defineType({
  name: "galleryBlock",
  title: "Gallery Section",
  type: "object",
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { media: "image" },
            prepare: ({ media }) => ({ title: "Image", media }),
          },
        },
      ],
    }),
  ],
  preview: { select: {}, prepare: () => ({ title: "Gallery Section" }) },
});

// ─── Our Team Block ───────────────────────────────────────────────────────────

export const ourTeamBlockType = defineType({
  name: "ourTeamBlock",
  title: "Our Team Section",
  type: "object",
  fields: [
    defineField({
      name: "members",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name",        title: "Name",        type: "string",      validation: (Rule) => Rule.required() }),
            defineField({ name: "slug",        title: "Slug",        type: "slug",        options: { source: "name" }, validation: (Rule) => Rule.required() }),
            defineField({ name: "role",        title: "Role",        type: "string",      validation: (Rule) => Rule.required() }),
            defineField({ name: "image",       title: "Image",       type: "image",       options: { hotspot: true }, validation: (Rule) => Rule.required() }),
            defineField({ name: "description", title: "Description", type: "array",       of: [{ type: "block" }], validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: "name", subtitle: "role" },
            prepare: ({ title, subtitle }) => ({ title, subtitle }),
          },
        },
      ],
    }),
  ],
  preview: { select: {}, prepare: () => ({ title: "Our Team Section" }) },
});

// ─── Missions Block ───────────────────────────────────────────────────────────

export const missionsBlockType = defineType({
  name: "missionsBlock",
  title: "Missions Section",
  type: "object",
  fields: [
    defineField({
      name: "missions",
      title: "Past Missions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title",       title: "Title",       type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "year",        title: "Year",        type: "number", validation: (Rule) => Rule.required().positive().integer() }),
            defineField({ name: "description", title: "Description", type: "text",   validation: (Rule) => Rule.required() }),
            defineField({ name: "image",       title: "Image",       type: "image",  options: { hotspot: true }, validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: "title", subtitle: "year" },
            prepare: ({ title, subtitle }) => ({ title, subtitle: String(subtitle) }),
          },
        },
      ],
    }),
  ],
  preview: { select: {}, prepare: () => ({ title: "Missions Section" }) },
});

// ─── Announcements Block ──────────────────────────────────────────────────────

export const announcementsBlockType = defineType({
  name: "announcementsBlock",
  title: "Announcements Section",
  type: "object",
  fields: [
    defineField({ name: "weekStart", title: "Week Start", type: "date", validation: (Rule) => Rule.required() }),
    defineField({ name: "weekEnd",   title: "Week End",   type: "date", validation: (Rule) => Rule.required() }),
    defineField({
      name: "events",
      title: "Events",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title",       title: "Title",       type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "date",        title: "Date",        type: "date" }),
            defineField({ name: "startTime",   title: "Start Time",  type: "string" }),
            defineField({ name: "endTime",     title: "End Time",    type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
          preview: {
            select: { title: "title", subtitle: "date" },
            prepare: ({ title, subtitle }) => ({ title, subtitle }),
          },
        },
      ],
    }),
  ],
  preview: { select: {}, prepare: () => ({ title: "Announcements Section" }) },
});

// ─── Contact Form Block ───────────────────────────────────────────────────────

export const contactFormBlockType = defineType({
  name: "contactFormBlock",
  title: "Contact Form Section",
  type: "object",
  fields: [
    defineField({ name: "note", title: "Note", type: "string", readOnly: true, initialValue: "Renders the contact form. No additional configuration needed." }),
  ],
  preview: { select: {}, prepare: () => ({ title: "Contact Form Section" }) },
});

// ─── Hero Block ───────────────────────────────────────────────────────────────

export const heroBlockType = defineType({
  name: "heroBlock",
  title: "Hero Section",
  type: "object",
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
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "opacity",
      title: "Background Opacity (0–100)",
      type: "number",
      description: "Leave blank for default (60).",
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: "verse",
      title: "Verse",
      type: "object",
      fields: [
        defineField({ name: "text",      title: "Text",      type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "reference", title: "Reference", type: "string", validation: (Rule) => Rule.required() }),
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: "Hero", subtitle: title }),
  },
});

// ─── Tabs Block ───────────────────────────────────────────────────────────────

export const tabsBlockType = defineType({
  name: "tabsBlock",
  title: "Tabs Section",
  type: "object",
  fields: [
    defineField({
      name: "tabs",
      title: "Tabs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Tab Title", type: "string", validation: (Rule) => Rule.required() }),
            defineField({
              name: "body",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "image",
              title: "Image (optional)",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({ name: "imageCaption", title: "Image Caption", type: "string" }),
          ],
          preview: {
            select: { title: "title" },
            prepare: ({ title }) => ({ title }),
          },
        },
      ],
    }),
  ],
  preview: {
    select: {},
    prepare: () => ({ title: "Tabs Section" }),
  },
});

// ─── Worship Info Block ───────────────────────────────────────────────────────

export const worshipInfoBlockType = defineType({
  name: "worshipInfoBlock",
  title: "Worship Info Section",
  type: "object",
  fields: [
    defineField({
      name: "services",
      title: "Worship Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name",        title: "Service Name", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "time",        title: "Time",         type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "description", title: "Description",  type: "text" }),
          ],
          preview: {
            select: { title: "name", subtitle: "time" },
            prepare: ({ title, subtitle }) => ({ title, subtitle }),
          },
        },
      ],
    }),
    defineField({
      name: "jointService",
      title: "Joint Worship Service",
      type: "object",
      fields: [
        defineField({ name: "time",        title: "Time",        type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
    defineField({
      name: "image",
      title: "Worship Image (optional)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {},
    prepare: () => ({ title: "Worship Info Section" }),
  },
});
