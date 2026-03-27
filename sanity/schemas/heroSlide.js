export default {
  name: "heroSlide",
  title: "Hero Slides",
  type: "document",
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  fields: [
    {
      name: "title",
      title: "Slide Label (internal)",
      type: "string",
      description: "Internal label to identify this slide in the Studio list.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/*",
      },
      description: "Drag and drop or click to upload. Recommended: 1800×1200px or wider.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "altText",
      title: "Alt Text",
      type: "string",
      description: "Describe the image for screen readers and SEO.",
    },
    {
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first. Use whole numbers (1, 2, 3…).",
      initialValue: 10,
      validation: (Rule) => Rule.required().integer().positive(),
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Uncheck to hide this slide without deleting it.",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      sortOrder: "sortOrder",
      media: "image",
      isActive: "isActive",
    },
    prepare({ title, sortOrder, media, isActive }) {
      return {
        title: `${sortOrder != null ? `#${sortOrder} — ` : ""}${title || "Untitled Slide"}`,
        subtitle: isActive === false ? "⏸ Hidden" : "✓ Active",
        media,
      };
    },
  },
};
