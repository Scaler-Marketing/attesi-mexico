import { defineConfig, createTheme } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas/index.js";

// ─── Custom Attesi Studio Theme ───────────────────────────────────────────────
const attesiTheme = createTheme({
  "--black": "#0d0d0d",
  "--white": "#ffffff",
  "--gray-base": "130",

  // Brand accent — warm brown
  "--card-focus-ring-color": "#9b6a3c",

  // Background tones
  "--card-bg-color": "#111111",
  "--card-bg2-color": "#1a1a1a",
  "--card-border-color": "#2a2a2a",
  "--card-muted-fg-color": "#888888",
  "--card-fg-color": "#e8e0d5",

  // Input fields
  "--input-bg-color": "#1e1e1e",
  "--input-border-color": "#333333",
  "--input-fg-color": "#e8e0d5",
  "--input-placeholder-color": "#666666",

  // Sidebar / navbar
  "--navbar-bg-color": "#0d0d0d",
  "--navbar-fg-color": "#e8e0d5",

  // Buttons
  "--default-button-color": "#9b6a3c",
  "--primary-button-color": "#9b6a3c",
  "--primary-button-fg-color": "#ffffff",
});

// ─── Desk Structure ───────────────────────────────────────────────────────────
const deskStructure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      S.listItem().title("Hero Slides").child(
        S.documentTypeList("heroSlide").title("Hero Slides")
      ),
      S.listItem().title("Experiences").child(
        S.documentTypeList("experience").title("Experiences")
      ),
      S.listItem().title("Stats").child(
        S.documentTypeList("stat").title("Stats")
      ),
      S.listItem().title("Testimonials").child(
        S.documentTypeList("testimonial").title("Testimonials")
      ),
      S.divider(),
      S.listItem().title("Lodging").child(
        S.documentTypeList("lodging").title("Lodging")
      ),
      S.listItem().title("Facilities").child(
        S.documentTypeList("facility").title("Facilities")
      ),
      S.divider(),
      S.listItem().title("Find Your Way Cards").child(
        S.documentTypeList("findYourWayCard").title("Find Your Way Cards")
      ),
      S.listItem().title("Why Choose Items").child(
        S.documentTypeList("whyChooseItem").title("Why Choose Items")
      ),
      S.divider(),
      S.listItem().title("Team Members").child(
        S.documentTypeList("teamMember").title("Team Members")
      ),
    ]);

// ─── Config ───────────────────────────────────────────────────────────────────
export default defineConfig({
  name: "attesi-mexico",
  title: "Attesi Mexico",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jki68fc0",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  theme: attesiTheme,
  plugins: [
    structureTool({ structure: deskStructure }),
    // visionTool intentionally removed — not needed for content editors
  ],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
});
