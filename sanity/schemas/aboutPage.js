export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Our Story",
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      initialValue: "About Attesi",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      initialValue: "A place where land, community, and spirit grow together.",
    },
    {
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "timeline",
      title: "Evolution Timeline",
      type: "array",
      description:
        "4 steps for the 'Evolution of Attesi' auto-tab section. Each step has a heading, body text, and an image shown on the right side.",
      of: [
        {
          type: "object",
          name: "timelineStep",
          title: "Timeline Step",
          fields: [
            {
              name: "num",
              title: "Step Number",
              type: "string",
              description: "e.g. 01, 02, 03, 04",
            },
            {
              name: "label",
              title: "Heading",
              type: "string",
            },
            {
              name: "text",
              title: "Body Text",
              type: "text",
              rows: 3,
            },
            {
              name: "image",
              title: "Tab Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
          preview: {
            select: { title: "label", subtitle: "num" },
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    },
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
};
