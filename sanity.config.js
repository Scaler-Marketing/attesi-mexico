import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "./sanity/schemas/index.js";
import { resolve } from "./sanity/presentation/resolve.js";

// ─── Desk Structure ───────────────────────────────────────────────────────────
const deskStructure = (S) =>
  S.list()
    .title("Content")
    .items([
      // ── Pages ──────────────────────────────────────────────────────
      S.listItem()
        .title("Home Page")
        .icon(() => "🏠")
        .id("homePage")
        .child(
          S.document()
            .schemaType("homePage")
            .documentId("homePage")
        ),
      S.listItem()
        .title("About Page")
        .icon(() => "📖")
        .id("aboutPage")
        .child(
          S.document()
            .schemaType("aboutPage")
            .documentId("aboutPage")
        ),
      S.listItem()
        .title("History Page")
        .icon(() => "🕰️")
        .id("historyPage")
        .child(
          S.document()
            .schemaType("historyPage")
            .documentId("historyPage")
        ),
      S.listItem()
        .title("Philosophy Page")
        .icon(() => "🌿")
        .id("philosophyPage")
        .child(
          S.document()
            .schemaType("philosophyPage")
            .documentId("philosophyPage")
        ),
      S.listItem()
        .title("Global Impact Page")
        .icon(() => "🌍")
        .id("globalImpactPage")
        .child(
          S.document()
            .schemaType("globalImpactPage")
            .documentId("globalImpactPage")
        ),
      S.listItem()
        .title("Lodging Listing Page")
        .icon(() => "🏡")
        .id("lodgingListingPage")
        .child(
          S.document()
            .schemaType("lodgingListingPage")
            .documentId("lodgingListingPage")
        ),
      S.listItem()
        .title("Experiences Listing Page")
        .icon(() => "🧭")
        .id("experiencesListingPage")
        .child(
          S.document()
            .schemaType("experiencesListingPage")
            .documentId("experiencesListingPage")
        ),
      S.listItem()
        .title("Facilities Listing Page")
        .icon(() => "🏊")
        .id("facilitiesListingPage")
        .child(
          S.document()
            .schemaType("facilitiesListingPage")
            .documentId("facilitiesListingPage")
        ),
      S.listItem()
        .title("Blog Listing Page")
        .icon(() => "✍️")
        .id("blogListingPage")
        .child(
          S.document()
            .schemaType("blogListingPage")
            .documentId("blogListingPage")
        ),
      S.listItem()
        .title("FAQs Page")
        .icon(() => "❓")
        .id("faqsPage")
        .child(
          S.document()
            .schemaType("faqsPage")
            .documentId("faqsPage")
        ),
      S.listItem()
        .title("Team Page")
        .icon(() => "👥")
        .id("teamPage")
        .child(
          S.document()
            .schemaType("teamPage")
            .documentId("teamPage")
        ),
      S.listItem()
        .title("Retreats Page")
        .icon(() => "🧘")
        .id("retreatsPage")
        .child(
          S.document()
            .schemaType("retreatsPage")
            .documentId("retreatsPage")
        ),
      S.listItem()
        .title("Contact Page")
        .icon(() => "✉️")
        .id("contactPage")
        .child(
          S.document()
            .schemaType("contactPage")
            .documentId("contactPage")
        ),
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
      // ── Homepage Sections ───────────────────────────────────────────
      S.listItem()
        .title("Hero Slides")
        .icon(() => "🖼️")
        .child(
          S.documentTypeList("heroSlide").title("Hero Slides")
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
      S.listItem()
        .title("Find Your Way Cards")
        .icon(() => "🗺️")
        .child(
          S.documentTypeList("findYourWayCard").title("Find Your Way Cards")
        ),
      S.divider(),
      S.listItem()
        .title("Lodging")
        .icon(() => "🏡")
        .child(
          S.documentTypeList("lodging").title("Lodging")
        ),
      S.listItem()
        .title("Experiences")
        .icon(() => "🌿")
        .child(
          S.documentTypeList("experience").title("Experiences")
        ),
      S.listItem()
        .title("Facilities")
        .icon(() => "🏊")
        .child(
          S.documentTypeList("facility").title("Facilities")
        ),
      S.listItem()
        .title("Team Members")
        .icon(() => "👥")
        .child(
          S.documentTypeList("teamMember").title("Team Members")
        ),
      S.divider(),
      // ── Blog ────────────────────────────────────────────────────────
      S.listItem()
        .title("Blog Posts")
        .icon(() => "✍️")
        .child(
          S.documentTypeList("blogPost").title("Blog Posts")
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
    presentationTool({
      resolve,
      previewUrl: {
        // The live site URL — used in production. When the Studio is embedded
        // in the same Next.js app at /studio, origin is implicit and can be omitted.
        // We keep it explicit so the Presentation Tool works from the deployed Studio.
        origin: process.env.NEXT_PUBLIC_SITE_URL || "https://attesi-mexico.vercel.app",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
});
