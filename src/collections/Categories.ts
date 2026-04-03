import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
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
      type: "textarea",
    },
    {
      name: "color",
      type: "select",
      options: [
        { label: "Purple", value: "purple" },
        { label: "Pink", value: "pink" },
        { label: "Cyan", value: "cyan" },
        { label: "Gold", value: "gold" },
        { label: "Green", value: "green" },
      ],
      defaultValue: "purple",
    },
  ],
};
