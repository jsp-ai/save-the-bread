import type { CollectionConfig } from "payload";

export const ResourceLists: CollectionConfig = {
  slug: "resource-lists",
  admin: {
    useAsTitle: "title",
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
      name: "description",
      type: "richText",
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Apps", value: "apps" },
        { label: "Courses", value: "courses" },
        { label: "Books", value: "books" },
        { label: "Bank Accounts", value: "accounts" },
        { label: "Services", value: "services" },
        { label: "Tools", value: "tools" },
      ],
    },
    {
      name: "resources",
      type: "array",
      label: "Resources",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "pricing",
          type: "text",
          admin: {
            description: 'e.g., "Free", "$5/mo", "Free tier available"',
          },
        },
        {
          name: "bestFor",
          type: "text",
          admin: {
            description: 'e.g., "Best for absolute beginners"',
          },
        },
        {
          name: "pros",
          type: "array",
          fields: [{ name: "text", type: "text" }],
        },
        {
          name: "cons",
          type: "array",
          fields: [{ name: "text", type: "text" }],
        },
      ],
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
    },
    {
      name: "lastUpdated",
      type: "date",
      admin: {
        position: "sidebar",
        description: "When this list was last reviewed for accuracy",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    // SEO
    {
      name: "seoTitle",
      type: "text",
      admin: { position: "sidebar" },
    },
    {
      name: "seoDescription",
      type: "textarea",
      admin: { position: "sidebar" },
    },
  ],
};
