import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas/index.js";

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

export default defineConfig({
  name: "attesi-mexico",
  title: "Attesi Mexico",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jki68fc0",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
});
