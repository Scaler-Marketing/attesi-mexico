export default {
  name: "facility",
  title: "Facility",
  type: "document",
  fields: [
    // ── Identity ──────────────────────────────────────────────────────────────
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "URL path: /facilities/[slug]",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Dining", value: "dining" },
          { title: "Wellness", value: "wellness" },
          { title: "Nature & Gardens", value: "nature" },
          { title: "Accommodation", value: "accommodation" },
          { title: "Community Spaces", value: "community" },
          { title: "Farm & Agriculture", value: "farm" },
        ],
      },
    },
    // ── Card (used on /facilities listing) ───────────────────────────────────
    {
      name: "cardImage",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
      description: "Image shown on the /facilities grid cards",
    },
    {
      name: "cardDescription",
      title: "Card Description",
      type: "text",
      rows: 3,
      description: "Short description shown on the card (1–2 sentences)",
    },
    // ── Detail Page ───────────────────────────────────────────────────────────
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      description: "Full-bleed hero image for the detail page",
    },
    {
      name: "about",
      title: "About (Rich Text)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
      description: "Main body copy for the detail page",
    },
    {
      name: "highlights",
      title: "Highlights / Features",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet-point feature list shown in the sidebar",
    },
    {
      name: "gallery",
      title: "Photo Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt Text", type: "string" },
            { name: "caption", title: "Caption", type: "string" },
          ],
        },
      ],
      description: "Additional photos shown in the gallery section",
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
              validation: (Rule) => Rule.required(),
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: { select: { title: "question" } },
        },
      ],
    },
    // ── Meta ──────────────────────────────────────────────────────────────────
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
      description: "Controls the order on the /facilities landing page",
    },
  ],
  preview: {
    select: { title: "title", media: "cardImage", subtitle: "category" },
  },
};
