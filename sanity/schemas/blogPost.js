// ─── Blog Post Schema ─────────────────────────────────────────────────────────
export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    // ── Core ──────────────────────────────────────────────────────────────────
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
      description: "The post headline (max 100 characters)",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: "URL-friendly identifier — auto-generated from title",
    },
    {
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      description: "Date the post was (or will be) published",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Wellness", value: "wellness" },
          { title: "Nature & Wildlife", value: "nature" },
          { title: "Kosher & Dining", value: "dining" },
          { title: "Jewish Life", value: "jewish-life" },
          { title: "Sustainability", value: "sustainability" },
          { title: "Travel Tips", value: "travel" },
          { title: "Community", value: "community" },
        ],
        layout: "dropdown",
      },
      description: "Primary category for filtering and display",
    },
    // ── Hero ──────────────────────────────────────────────────────────────────
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Alt Text", type: "string" },
        { name: "caption", title: "Caption", type: "string" },
      ],
      description: "Hero image shown on the post page and blog card (16:9 recommended)",
    },
    // ── Excerpt ───────────────────────────────────────────────────────────────
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
      description: "Short summary shown on blog listing cards (max 200 characters)",
    },
    // ── Body ──────────────────────────────────────────────────────────────────
    {
      name: "body",
      title: "Body Content",
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
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt Text", type: "string" },
            { name: "caption", title: "Caption", type: "string" },
          ],
        },
      ],
      description: "Full post body — supports headings, paragraphs, quotes, and inline images",
    },
    // ── Author ────────────────────────────────────────────────────────────────
    {
      name: "author",
      title: "Author",
      type: "string",
      description: "Author name displayed on the post",
    },
    {
      name: "authorRole",
      title: "Author Role / Title",
      type: "string",
      description: "e.g. 'The Attesi Team' or 'Wellness Director'",
    },
    // ── SEO ───────────────────────────────────────────────────────────────────
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Overrides the page <title> tag. Defaults to post title if blank.",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      description: "Meta description for search engines and social sharing.",
    },
    {
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "image",
      options: { hotspot: true },
      description: "Image used when shared on social media (1200×630px recommended). Defaults to cover image.",
    },
    // ── Ordering ──────────────────────────────────────────────────────────────
    {
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
      description: "Featured posts appear prominently at the top of the blog listing",
    },
  ],
  orderings: [
    {
      title: "Published Date (Newest First)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "publishedAt",
    },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "No date",
      };
    },
  },
};
