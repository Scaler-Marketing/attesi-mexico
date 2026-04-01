export default {
  name: "retreatsPage",
  title: "Retreats Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    // ── Hero ────────────────────────────────────────────────────────
    {
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Retreats",
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      initialValue: "Transformative Retreats in the Heart of Mexico",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      initialValue:
        "Curated experiences for groups, organizations, and individuals seeking meaningful growth.",
    },
    {
      name: "heroImage",
      title: "Hero Image",
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
    // ── Intro Section ───────────────────────────────────────────────
    {
      name: "introEyebrow",
      title: "Intro Eyebrow",
      type: "string",
      initialValue: "What We Offer",
    },
    {
      name: "introHeading",
      title: "Intro Heading",
      type: "string",
      initialValue: "Every retreat is designed with intention.",
    },
    {
      name: "introBody",
      title: "Intro Body",
      type: "text",
      rows: 4,
      initialValue:
        "Whether you are planning a corporate off-site, a wellness weekend, or a spiritual gathering, Attesi provides the space, the support, and the environment for genuine transformation.",
    },
    // ── Retreat Types ───────────────────────────────────────────────
    {
      name: "typesHeading",
      title: "Retreat Types Heading",
      type: "string",
      initialValue: "Retreat Formats",
    },
    {
      name: "retreatTypes",
      title: "Retreat Types",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
          preview: {
            select: { title: "title", media: "image" },
          },
        },
      ],
    },
    // ── Itinerary Section ───────────────────────────────────────────
    {
      name: "itineraryEyebrow",
      title: "Itinerary Eyebrow",
      type: "string",
      initialValue: "Sample Itinerary",
    },
    {
      name: "itineraryHeading",
      title: "Itinerary Heading",
      type: "string",
      initialValue: "A Weekend at Attesi",
    },
    {
      name: "itinerarySubheading",
      title: "Itinerary Subheading",
      type: "string",
      initialValue:
        "A sample of what a transformative weekend retreat looks like at Attesi.",
    },
    {
      name: "itineraryDays",
      title: "Itinerary Days",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Day Label", type: "string" },
            { name: "title", title: "Day Title", type: "string" },
            {
              name: "activities",
              title: "Activities",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          preview: {
            select: { title: "day", subtitle: "title" },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: "Retreats Page" };
    },
  },
};
