export default {
  name: "facilitiesListingPage",
  title: "Facilities Listing Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Facilities",
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      initialValue: "Spaces Designed for Deep Rest",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      initialValue: "From farm-to-table dining to natural spring immersion — every space at Attesi is an experience in itself.",
    },
    {
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    prepare() {
      return { title: "Facilities Listing Page" };
    },
  },
};
