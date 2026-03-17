export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "image",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "ctaLabel",
      title: "Button Label",
      type: "string",
      initialValue: "View Experience",
    },
    {
      name: "ctaUrl",
      title: "Button URL",
      type: "url",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
};
