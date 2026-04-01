export default {
  name: "philosophyPage",
  title: "Philosophy Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Our Philosophy",
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      initialValue: "Living in Harmony with the Land.",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      initialValue: "The values and principles that guide every decision at Attesi.",
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
      return { title: "Philosophy Page" };
    },
  },
};
