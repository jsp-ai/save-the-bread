import type { CollectionConfig } from "payload";

export const Profiles: CollectionConfig = {
  slug: "profiles",
  admin: {
    useAsTitle: "personName",
    defaultColumns: ["personName", "personTitle", "platform", "_status"],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "personName",
      type: "text",
      required: true,
      label: "Name",
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
      name: "personTitle",
      type: "text",
      required: true,
      label: "Title / Tagline",
      admin: {
        description: 'e.g., "Side Hustle Queen" or "22-year-old Twitch Streamer"',
      },
    },
    {
      name: "personAge",
      type: "number",
      label: "Age",
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "personPhoto",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Photo",
    },
    {
      name: "platform",
      type: "select",
      options: [
        { label: "YouTube", value: "youtube" },
        { label: "Twitch", value: "twitch" },
        { label: "TikTok", value: "tiktok" },
        { label: "Instagram", value: "instagram" },
        { label: "Etsy / E-commerce", value: "ecommerce" },
        { label: "Freelancing", value: "freelancing" },
        { label: "Local Business", value: "local-business" },
        { label: "Tech / SaaS", value: "tech" },
        { label: "Investing", value: "investing" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "incomeRange",
      type: "select",
      options: [
        { label: "$1-2K/mo", value: "1-2k" },
        { label: "$2-5K/mo", value: "2-5k" },
        { label: "$5-10K/mo", value: "5-10k" },
        { label: "$10-25K/mo", value: "10-25k" },
        { label: "$25K+/mo", value: "25k-plus" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "incomeType",
      type: "select",
      options: [
        { label: "Side Hustle", value: "side-hustle" },
        { label: "Full-Time", value: "full-time" },
        { label: "Multiple Streams", value: "multiple-streams" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "incomeBreakdown",
      type: "array",
      label: "Income Breakdown",
      fields: [
        {
          name: "source",
          type: "text",
          required: true,
        },
        {
          name: "amount",
          type: "number",
          required: true,
        },
        {
          name: "isPassive",
          type: "checkbox",
          defaultValue: false,
        },
      ],
    },
    {
      name: "story",
      type: "richText",
      label: "Their Story",
    },
    {
      name: "keyTakeaways",
      type: "array",
      label: "Key Takeaways",
      maxRows: 5,
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "timeline",
      type: "text",
      admin: {
        description: 'e.g., "Started Jan 2024, hit $5K/mo by Aug 2024"',
      },
    },
    {
      name: "videoEmbed",
      type: "text",
      label: "Video Embed URL",
    },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          options: [
            { label: "Twitter/X", value: "twitter" },
            { label: "Instagram", value: "instagram" },
            { label: "TikTok", value: "tiktok" },
            { label: "YouTube", value: "youtube" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "Website", value: "website" },
          ],
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
    },
    {
      name: "relatedArticles",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
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
