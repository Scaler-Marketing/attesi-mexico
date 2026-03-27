export default {
  name: "lodging",
  title: "Lodging",
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
      description: "URL path: /lodging/[slug]",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short one-liner shown on the listing card (e.g. '12 tents · Queen & Twin options')",
    },

    // ── Card (used on /lodging listing page) ─────────────────────────────────
    {
      name: "cardImage",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
      description: "Image shown on the /lodging grid cards",
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
      name: "description",
      title: "Description (Rich Text)",
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

    // ── Quick Stats ───────────────────────────────────────────────────────────
    {
      name: "guestCapacity",
      title: "Guest Capacity",
      type: "number",
      description: "Total number of guests this accommodation sleeps",
    },
    {
      name: "totalUnits",
      title: "Total Units",
      type: "number",
      description: "Total number of units available (e.g. 12 tents)",
    },

    // ── Bed Types ─────────────────────────────────────────────────────────────
    {
      name: "bedTypes",
      title: "Bed Types",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              description: "e.g. '1 Queen Bed' or '2 Twin Beds'",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "count",
              title: "Number of Units",
              type: "number",
              description: "How many units have this bed configuration",
            },
          ],
          preview: {
            select: { title: "label", subtitle: "count" },
            prepare({ title, subtitle }) {
              return { title, subtitle: subtitle ? `${subtitle} units` : "" };
            },
          },
        },
      ],
      description: "Bed configurations available (e.g. Queen x6, Twin x6)",
    },

    // ── Amenities ─────────────────────────────────────────────────────────────
    {
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
      description: "List of amenities included with this accommodation",
    },

    // ── Gallery ───────────────────────────────────────────────────────────────
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
      description: "Photos shown in the gallery grid on the detail page",
    },

    // ── FAQs ──────────────────────────────────────────────────────────────────
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

    // ── SEO / Meta ────────────────────────────────────────────────────────────
    {
      name: "seoTitle",
      title: "SEO Title (Meta Title)",
      type: "string",
      description: "Overrides the page <title> tag. Defaults to accommodation title if blank.",
    },
    {
      name: "seoDescription",
      title: "SEO Description (Meta Description)",
      type: "text",
      rows: 2,
      description: "Used for the meta description tag and social sharing previews.",
    },
    {
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "image",
      options: { hotspot: true },
      description: "Image used when this page is shared on social media (1200×630px recommended)",
    },

    // ── Ordering ──────────────────────────────────────────────────────────────
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
      description: "Controls the order on the /lodging landing page",
    },
  ],
  preview: {
    select: { title: "title", media: "cardImage", subtitle: "tagline" },
  },
};
