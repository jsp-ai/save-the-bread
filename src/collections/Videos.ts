import type { CollectionConfig } from "payload";

export const Videos: CollectionConfig = {
  slug: "videos",
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
      name: "platform",
      type: "select",
      required: true,
      options: [
        { label: "YouTube", value: "youtube" },
        { label: "TikTok", value: "tiktok" },
        { label: "Instagram", value: "instagram" },
        { label: "Twitter/X", value: "twitter" },
      ],
    },
    {
      name: "embedUrl",
      type: "text",
      required: true,
      label: "Embed URL",
    },
    {
      name: "thumbnailOverride",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "duration",
      type: "number",
      admin: {
        description: "Duration in seconds",
      },
    },
    {
      name: "contextBody",
      type: "richText",
      label: "Context / Description",
    },
    {
      name: "creator",
      type: "relationship",
      relationTo: "profiles",
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
      name: "publishedAt",
      type: "date",
      admin: { position: "sidebar" },
    },
  ],
};
