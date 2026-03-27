import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas/index.js";

// ─── Desk Structure ───────────────────────────────────────────────────────────
const deskStructure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(() => "⚙️")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("Hero Slides")
        .icon(() => "🖼️")
        .child(
          S.documentTypeList("heroSlide").title("Hero Slides")
        ),
      S.listItem()
        .title("Experiences")
        .icon(() => "🌿")
        .child(
          S.documentTypeList("experience").title("Experiences")
        ),
      S.listItem()
        .title("Stats")
        .icon(() => "📊")
        .child(
          S.documentTypeList("stat").title("Stats")
        ),
      S.listItem()
        .title("Testimonials")
        .icon(() => "💬")
        .child(
          S.documentTypeList("testimonial").title("Testimonials")
        ),
      S.divider(),
      S.listItem()
        .title("Lodging")
        .icon(() => "🏡")
        .child(
          S.documentTypeList("lodging").title("Lodging")
        ),
      S.listItem()
        .title("Facilities")
        .icon(() => "🏊")
        .child(
          S.documentTypeList("facility").title("Facilities")
        ),
      S.divider(),
      S.listItem()
        .title("Find Your Way Cards")
        .icon(() => "🗺️")
        .child(
          S.documentTypeList("findYourWayCard").title("Find Your Way Cards")
        ),
      S.listItem()
        .title("Why Choose Items")
        .icon(() => "✨")
        .child(
          S.documentTypeList("whyChooseItem").title("Why Choose Items")
        ),
      S.divider(),
      S.listItem()
        .title("Team Members")
        .icon(() => "👥")
        .child(
          S.documentTypeList("teamMember").title("Team Members")
        ),
    ]);

// ─── Config ───────────────────────────────────────────────────────────────────
export default defineConfig({
  name: "attesi-mexico",
  title: "Attesi Mexico",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jki68fc0",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({ structure: deskStructure }),
    // visionTool intentionally removed — not needed for content editors
  ],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
});
