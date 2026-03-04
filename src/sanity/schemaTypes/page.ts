import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isHomePage",
      title: "Is Homepage",
      type: "boolean",
      description: "Only one page should have this enabled.",
      initialValue: false,
    }),
    defineField({
      name: "transparentHeader",
      title: "Transparent Header",
      type: "boolean",
      description: "Header overlays the page (for full-bleed hero sections).",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle",       title: "Meta Title",       type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3 }),
        defineField({ name: "ogImage",         title: "OG Image",         type: "image" }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        { type: "heroBlock" },
        { type: "highlightsBlock" },
        { type: "sermonsBlock" },
        { type: "galleryBlock" },
        { type: "ourTeamBlock" },
        { type: "missionsBlock" },
        { type: "announcementsBlock" },
        { type: "tabsBlock" },
        { type: "worshipInfoBlock" },
        { type: "contactFormBlock" },
      ],
      options: { sortable: true },
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare: ({ title, slug }) => ({ title, subtitle: `/${slug}` }),
  },
});
