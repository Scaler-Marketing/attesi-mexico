export default {
  name: "teamPage",
  title: "Team Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "The People Behind Attesi",
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      initialValue: "Meet Our Team",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      initialValue:
        "Passionate guides, stewards of the land, and dedicated hosts — each one committed to creating meaningful experiences rooted in nature and community.",
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
      return { title: "Team Page" };
    },
  },
};
