export default {
  name: "historyPage",
  title: "History Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Our History",
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      initialValue: "Rooted in Time. Growing Forward.",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      initialValue: "From a simple idea between two friends to a thriving community — the story of Attesi.",
    },
    {
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "heroImagePosition",
      title: "Hero Image Position",
      type: "string",
      description: "Vertical position of the hero background image.",
      initialValue: "center",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" },
        ],
        layout: "radio",
      },
    },
  ],
  preview: {
    prepare() {
      return { title: "History Page" };
    },
  },
};
