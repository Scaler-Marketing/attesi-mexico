export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton — only one document of this type should exist
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    // Hero section
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
    },
    // Intro section
    {
      name: "introHeading",
      title: "Intro Heading",
      type: "string",
    },
    {
      name: "introBody",
      title: "Intro Body Text",
      type: "text",
      rows: 4,
    },
    // About section
    {
      name: "aboutHeading",
      title: "About Heading",
      type: "string",
    },
    {
      name: "aboutBody",
      title: "About Body Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: { hotspot: true },
    },
    // CTA section
    {
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
    },
    {
      name: "ctaSubheading",
      title: "CTA Subheading",
      type: "string",
    },
    {
      name: "ctaButtonLabel",
      title: "CTA Button Label",
      type: "string",
    },
    {
      name: "ctaButtonUrl",
      title: "CTA Button URL",
      type: "url",
    },
  ],
  preview: {
    select: { title: "siteTitle" },
    prepare({ title }) {
      return { title: title || "Site Settings" };
    },
  },
};
