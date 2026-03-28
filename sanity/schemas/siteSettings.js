export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["update", "publish"],
  groups: [
    { name: "hero", title: "Hero" },
    { name: "intro", title: "Intro" },
    { name: "experiences", title: "Experiences Section" },
    { name: "findYourWay", title: "Find Your Way In" },
    { name: "testimonials", title: "Testimonials Section" },
    { name: "faq", title: "FAQ Section" },
    { name: "cta", title: "Global CTA" },
    { name: "general", title: "General" },
  ],
  fields: [
    // ── General ──────────────────────────────────────────────────────
    { name: "siteTitle", title: "Site Title", type: "string", group: "general" },
    { name: "tagline", title: "Tagline", type: "string", group: "general" },

    // ── Hero ─────────────────────────────────────────────────────────
    {
      name: "heroHeading", title: "Hero Heading", type: "string", group: "hero",
      initialValue: "Connect to the Earth\nReturn to your Soul",
    },
    {
      name: "heroSubheading", title: "Hero Subheading", type: "string", group: "hero",
      initialValue: "A retreat space rooted in nature, reflection, and meaningful growth.",
    },
    {
      name: "heroButtonPrimaryLabel", title: "Hero Primary Button Label", type: "string",
      group: "hero", initialValue: "Check Availability",
    },
    {
      name: "heroButtonPrimaryUrl", title: "Hero Primary Button URL", type: "string",
      group: "hero", initialValue: "#contact",
    },

    // ── Intro ────────────────────────────────────────────────────────
    {
      name: "introEyebrow", title: "Intro Eyebrow", type: "string", group: "intro",
      initialValue: "Welcome to Attesi",
    },
    {
      name: "introHeading", title: "Intro Heading", type: "string", group: "intro",
      initialValue: "Set within a kosher, nature-based environment, Attesi Lodge supports spiritual return and inner alignment.",
    },
    {
      name: "introBody", title: "Intro Body Text", type: "text", rows: 3, group: "intro",
      initialValue: "Sustainability, learning, and community create the foundation for lasting growth and health.",
    },
    {
      name: "introButtonLabel", title: "Intro Button Label", type: "string",
      group: "intro", initialValue: "Learn More",
    },
    {
      name: "introButtonUrl", title: "Intro Button URL", type: "string",
      group: "intro", initialValue: "/about",
    },

    // ── Experiences Section ──────────────────────────────────────────
    {
      name: "experiencesHeading", title: "Experiences Section Heading", type: "string",
      group: "experiences", initialValue: "Our Experiences",
    },
    {
      name: "experiencesSubheading", title: "Experiences Section Subheading", type: "string",
      group: "experiences",
      initialValue: "With over a decade of connection to the land, we have crafted experiences that honor nature, community, and personal growth.",
    },

    // ── Find Your Way In ─────────────────────────────────────────────
    {
      name: "findYourWayHeading", title: "Find Your Way In Heading", type: "string",
      group: "findYourWay", initialValue: "Find Your Way In",
    },
    {
      name: "findYourWaySubheading", title: "Find Your Way In Subheading", type: "string",
      group: "findYourWay",
      initialValue: "We've built Attesi around our values, and we invite you to share them with us.",
    },

    // ── Testimonials Section ─────────────────────────────────────────
    {
      name: "testimonialsHeading", title: "Testimonials Section Heading", type: "string",
      group: "testimonials", initialValue: "What Our Guests Say",
    },
    {
      name: "testimonialsSubheading", title: "Testimonials Section Subheading", type: "string",
      group: "testimonials",
      initialValue: "Hear from those who have experienced the land, the community, and the spirit of Attesi.",
    },

    // ── FAQ Section ──────────────────────────────────────────────────
    {
      name: "faqEyebrow", title: "FAQ Eyebrow", type: "string",
      group: "faq", initialValue: "FAQs",
    },
    {
      name: "faqHeading", title: "FAQ Heading", type: "string",
      group: "faq", initialValue: "Frequently Asked Questions",
    },
    {
      name: "faqSubheading", title: "FAQ Subheading", type: "string",
      group: "faq", initialValue: "Everything you need to know before your stay at Attesi Lodge.",
    },
    {
      name: "faqs", title: "FAQs", type: "array", group: "faq",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text", rows: 3 },
          ],
          preview: { select: { title: "question" } },
        },
      ],
      initialValue: [
        {
          question: "What is included in a stay at Attesi Lodge?",
          answer: "Your stay includes cozy glamping accommodations, access to wellness activities, and opportunities to connect with nature through guided experiences. Additional services like meals and specialized activities can be booked separately.",
        },
        {
          question: "Is Attesi Lodge family-friendly?",
          answer: "Yes, we welcome families! Our retreat offers activities suitable for all ages, including nature walks, farm-to-table dining, and wellness programs designed to foster connection and relaxation.",
        },
        {
          question: "What makes Attesi Lodge sustainable?",
          answer: "We prioritize eco-friendly practices, including sourcing local ingredients, minimizing waste, and using renewable energy. Our commitment to sustainability extends to supporting the surrounding community and preserving the natural environment.",
        },
      ],
    },

    // ── Global CTA Section ───────────────────────────────────────────
    {
      name: "ctaHeading", title: "CTA Heading", type: "string",
      description: "Main headline on the full-width CTA banner.", group: "cta",
    },
    {
      name: "ctaSubheading", title: "CTA Subheading", type: "string",
      description: "Supporting text below the heading.", group: "cta",
    },
    {
      name: "ctaButtonLabel", title: "Primary Button Label", type: "string",
      description: 'e.g. "Check Availability"', group: "cta",
    },
    {
      name: "ctaButtonUrl", title: "Primary Button URL", type: "string",
      description: "Link for the primary CTA button.", group: "cta",
    },
    {
      name: "ctaSecondButtonLabel", title: "Secondary Button Label", type: "string",
      description: 'e.g. "Contact Us"', group: "cta",
    },
    {
      name: "ctaSecondButtonUrl", title: "Secondary Button URL", type: "string",
      description: "Link for the secondary CTA button.", group: "cta",
    },
    {
      name: "ctaImage", title: "CTA Background Image", type: "image",
      options: { hotspot: true }, group: "cta",
      description: "Full-bleed background image for the CTA banner. Recommended: 1800×900px or wider.",
    },

    // ── Legacy (hidden, kept for backwards compat) ───────────────────
    { name: "aboutHeading", title: "About Heading", type: "string", group: "general", hidden: true },
    { name: "aboutBody", title: "About Body", type: "array", of: [{ type: "block" }], group: "general", hidden: true },
    { name: "aboutImage", title: "About Image", type: "image", options: { hotspot: true }, group: "general", hidden: true },
  ],
  preview: {
    select: { title: "siteTitle" },
    prepare({ title }) {
      return { title: title || "Site Settings" };
    },
  },
};
