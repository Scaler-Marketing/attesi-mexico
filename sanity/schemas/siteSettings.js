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
    // ── Global CTA Section ───────────────────────────────────────────
    {
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
      description: "Main headline on the full-width CTA banner.",
    },
    {
      name: "ctaSubheading",
      title: "CTA Subheading",
      type: "string",
      description: "Supporting text below the heading.",
    },
    {
      name: "ctaButtonLabel",
      title: "Primary Button Label",
      type: "string",
      description: "e.g. \"Check Availability\"",
    },
    {
      name: "ctaButtonUrl",
      title: "Primary Button URL",
      type: "string",
      description: "Link for the primary CTA button (e.g. /contact or https://...).",
    },
    {
      name: "ctaSecondButtonLabel",
      title: "Secondary Button Label",
      type: "string",
      description: "e.g. \"Contact Us\"",
    },
    {
      name: "ctaSecondButtonUrl",
      title: "Secondary Button URL",
      type: "string",
      description: "Link for the secondary CTA button.",
    },
    {
      name: "ctaImage",
      title: "CTA Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Full-bleed background image for the CTA banner. Recommended: 1800×900px or wider.",
    },
  ],
  preview: {
    select: { title: "siteTitle" },
    prepare({ title }) {
      return { title: title || "Site Settings" };
    },
  },
};
