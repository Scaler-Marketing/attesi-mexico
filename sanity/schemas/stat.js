export default {
  name: "stat",
  title: "Stat",
  type: "document",
  fields: [
    {
      name: "value",
      title: "Number Value",
      type: "number",
      description: "The numeric value to count up to (e.g. 1200)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "suffix",
      title: "Suffix",
      type: "string",
      description: 'Optional suffix after the number (e.g. "+", "k", "%")',
    },
    {
      name: "label",
      title: "Label",
      type: "string",
      description: 'Descriptive label below the number (e.g. "Happy Guests")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    },
  ],
  preview: {
    select: { title: "label", subtitle: "value" },
  },
};
