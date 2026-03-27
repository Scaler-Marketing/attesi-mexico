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
        .title("Global Impact Page")
        .icon(() => "🌍")
        .id("globalImpactPage")
        .child(
          S.document()
            .schemaType("globalImpactPage")
            .documentId("globalImpactPage")
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
