export default {
  name: "lodgingListingPage",
  title: "Lodging Listing Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Where You'll Stay",
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      initialValue: "Lodging at Attesi",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      initialValue: "Rest deeply in spaces designed to connect you with nature, community, and yourself.",
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
      return { title: "Lodging Listing Page" };
    },
  },
};
