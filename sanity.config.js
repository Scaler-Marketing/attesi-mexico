"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "attesi-mexico",
  title: "Attesi Mexico",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jki68fc0",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    structureTool({
      structure: (S) =>
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
            S.documentTypeListItem("heroSlide").title("Hero Slides"),
            S.documentTypeListItem("experience").title("Experiences"),
            S.documentTypeListItem("stat").title("Stats"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("findYourWayCard").title("Find Your Way Cards"),
            S.documentTypeListItem("whyChooseItem").title("Why Choose Items"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
