export default {
  name: "experience",
  title: "Experience",
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
      description: "URL path: /experiences/[slug]",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short one-liner shown on the card (e.g. 'Seasonal · Nov–Feb')",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Nature & Wildlife", value: "nature" },
          { title: "Wellness & Healing", value: "wellness" },
          { title: "Adventure", value: "adventure" },
          { title: "Food & Farm", value: "food" },
          { title: "Community & Culture", value: "community" },
        ],
      },
    },

    // ── Card (used on homepage + /experiences listing) ────────────────────────
    {
      name: "cardImage",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
      description: "Image shown on the homepage carousel and /experiences grid cards",
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
      description: "Full-bleed hero image for the detail page (can be same as card image)",
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
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet-point highlights shown as a feature list",
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
      description: "Additional photos shown in the gallery section on the detail page",
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
      description: "Overrides the page <title> tag. Defaults to experience title if blank.",
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
      description: "Controls the order on the /experiences landing page",
    },
  ],
  preview: {
    select: { title: "title", media: "cardImage", subtitle: "tagline" },
  },
};
