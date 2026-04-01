export default {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    // ── Hero ────────────────────────────────────────────────────────
    {
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Contact Us",
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      initialValue: "Let's Plan Your Retreat Together",
    },
    {
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      initialValue:
        "Tell us about your group and we will craft a personalized experience at Attesi.",
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
    // ── Form Section ────────────────────────────────────────────────
    {
      name: "formHeading",
      title: "Form Heading",
      type: "string",
      initialValue: "Send Us a Message",
    },
    {
      name: "formSubheading",
      title: "Form Subheading",
      type: "string",
      initialValue:
        "Fill out the form below and our team will get back to you within 24 hours.",
    },
    // ── Map Section ─────────────────────────────────────────────────
    {
      name: "mapEyebrow",
      title: "Map Eyebrow",
      type: "string",
      initialValue: "Find Us",
    },
    {
      name: "mapHeading",
      title: "Map Heading",
      type: "string",
      initialValue: "Located in the Highlands of the State of Mexico",
    },
    {
      name: "mapAddress",
      title: "Address",
      type: "text",
      rows: 3,
      initialValue: "Manzana 004, 51009\nBarrio de San Miguel\nState of Mexico, Mexico",
    },
    {
      name: "mapDirectionsUrl",
      title: "Google Maps Directions URL",
      type: "url",
      initialValue:
        "https://maps.google.com/?q=Manzana+004+51009+Barrio+de+San+Miguel+State+of+Mexico",
    },
    {
      name: "mapEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
      description: "The full iframe src URL from Google Maps embed.",
      initialValue:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0!2d-99.6!3d19.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzAwLjAiTiA5OcKwMzYnMDAuMCJX!5e0!3m2!1sen!2smx!4v1234567890",
    },
  ],
  preview: {
    prepare() {
      return { title: "Contact Page" };
    },
  },
};
