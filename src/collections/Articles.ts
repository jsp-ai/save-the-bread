import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "contentType", "_status", "publishedAt"],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "contentType",
      type: "select",
      required: true,
      options: [
        { label: "Money Moves", value: "money-moves" },
        { label: "Side Hustle Lab", value: "side-hustle-lab" },
        { label: "Toolkit Review", value: "toolkit" },
        { label: "Opinion", value: "opinion" },
        { label: "News", value: "news" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "difficultyLevel",
      type: "select",
      options: [
        { label: "Beginner", value: "beginner" },
        { label: "Intermediate", value: "intermediate" },
        { label: "Advanced", value: "advanced" },
      ],
      defaultValue: "beginner",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "excerpt",
      type: "textarea",
      maxLength: 280,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "readingTime",
      type: "number",
      admin: {
        position: "sidebar",
        readOnly: true,
        description: "Estimated reading time in minutes",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "callToAction",
      type: "group",
      fields: [
        {
          name: "type",
          type: "select",
          options: [
            { label: "Newsletter", value: "newsletter" },
            { label: "Tool", value: "tool" },
            { label: "External Link", value: "link" },
          ],
        },
        {
          name: "text",
          type: "text",
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
    {
      name: "relatedArticles",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
    },
    // SEO fields
    {
      name: "seoTitle",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "seoDescription",
      type: "textarea",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
