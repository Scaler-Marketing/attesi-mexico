export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    // ── Intro Section ───────────────────────────────────────────────
    {
      name: "introEyebrow",
      title: "Intro Eyebrow",
      type: "string",
      description: 'Small label above the heading. e.g. "Welcome to Attesi"',
      initialValue: "Welcome to Attesi",
    },
    {
      name: "introHeading",
      title: "Intro Heading",
      type: "string",
      description: "Main heading for the intro section.",
      initialValue:
        "Set within a kosher, nature-based environment, Attesi Lodge supports spiritual return and inner alignment.",
    },
    {
      name: "introBody",
      title: "Intro Body Text",
      type: "text",
      rows: 3,
      initialValue:
        "Sustainability, learning, and community create the foundation for lasting growth and health.",
    },
    {
      name: "introButtonLabel",
      title: "Intro Button Label",
      type: "string",
      initialValue: "Learn More",
    },
    {
      name: "introButtonUrl",
      title: "Intro Button URL",
      type: "string",
      initialValue: "/about",
    },
    // ── FAQ Section ─────────────────────────────────────────────────
    {
      name: "faqEyebrow",
      title: "FAQ Eyebrow",
      type: "string",
      initialValue: "FAQs",
    },
    {
      name: "faqHeading",
      title: "FAQ Heading",
      type: "string",
      initialValue: "Frequently Asked Questions",
    },
    {
      name: "faqSubheading",
      title: "FAQ Subheading",
      type: "string",
      initialValue: "Everything you need to know before your stay at Attesi Lodge.",
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 3,
            },
          ],
          preview: {
            select: { title: "question" },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
};
