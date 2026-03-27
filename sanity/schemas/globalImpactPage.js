export default {
  name: "globalImpactPage",
  title: "Global Impact Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    // ── Hero ────────────────────────────────────────────────────────
    {
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Global Impact",
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      initialValue: "Rooted in the Land. Committed to the Future.",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      initialValue:
        "Attesi is more than a retreat. It is a living commitment to regenerative land stewardship, community empowerment, and ecological responsibility.",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    // ── Philosophy Section ──────────────────────────────────────────
    {
      name: "philosophyEyebrow",
      title: "Philosophy Eyebrow",
      type: "string",
      initialValue: "Our Philosophy",
    },
    {
      name: "philosophyHeading",
      title: "Philosophy Heading",
      type: "string",
      initialValue: "We do not just occupy the land. We steward it.",
    },
    {
      name: "philosophyBody",
      title: "Philosophy Body",
      type: "array",
      of: [{ type: "block" }],
    },
    // ── Practices Section ───────────────────────────────────────────
    {
      name: "practicesEyebrow",
      title: "Practices Eyebrow",
      type: "string",
      initialValue: "Our Practices",
    },
    {
      name: "practicesHeading",
      title: "Practices Heading",
      type: "string",
      initialValue: "Closed-loop systems that honor natural cycles.",
    },
    {
      name: "practicesBody",
      title: "Practices Body",
      type: "text",
      rows: 3,
      initialValue:
        "From composting systems that return nutrients back to the soil, to mindful land stewardship, every element is designed to give back more than it takes.",
    },
    {
      name: "practiceCards",
      title: "Practice Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon (emoji)", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text", rows: 3 },
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    },
    {
      name: "practicesTagline",
      title: "Practices Tagline",
      type: "string",
      initialValue: "Nothing is wasted. Everything has a role.",
    },
    // ── Impact Stats ────────────────────────────────────────────────
    {
      name: "impactStats",
      title: "Impact Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    },
    // ── Vision Section ──────────────────────────────────────────────
    {
      name: "visionEyebrow",
      title: "Vision Eyebrow",
      type: "string",
      initialValue: "Our Vision",
    },
    {
      name: "visionHeading",
      title: "Vision Heading",
      type: "string",
      initialValue:
        "A model where sustainability is not a feature — it is a foundation.",
    },
    {
      name: "visionBody",
      title: "Vision Body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    prepare() {
      return { title: "Global Impact Page" };
    },
  },
};
