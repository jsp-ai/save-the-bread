import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  fields: [
    {
      name: "siteName",
      type: "text",
      defaultValue: "Save The Bread",
    },
    {
      name: "siteDescription",
      type: "textarea",
      defaultValue:
        "The Gen Z guide to making, saving, and growing money. Real stories. Real numbers. No cap.",
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
          ],
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
    {
      name: "newsletterCTA",
      type: "group",
      fields: [
        {
          name: "headline",
          type: "text",
          defaultValue: "Get smarter with your money. Weekly.",
        },
        {
          name: "description",
          type: "textarea",
          defaultValue:
            "Real stories, real numbers, and tools that actually help. No spam, no fluff.",
        },
      ],
    },
    {
      name: "featuredContent",
      type: "group",
      fields: [
        {
          name: "featuredArticles",
          type: "relationship",
          relationTo: "articles",
          hasMany: true,
          maxRows: 3,
        },
        {
          name: "featuredProfiles",
          type: "relationship",
          relationTo: "profiles",
          hasMany: true,
          maxRows: 3,
        },
      ],
    },
  ],
};
