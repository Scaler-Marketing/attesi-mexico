/**
 * Seed script: Hero Slides
 * Creates 5 hero slide documents in Sanity with sortOrder 1–5.
 * Images must be uploaded manually via Sanity Studio (drag & drop).
 * Run: SANITY_API_TOKEN=xxx node scripts/seed-hero-slides.mjs
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "jki68fc0",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const slides = [
  {
    _type: "heroSlide",
    title: "Hero Slide 1 — Landscape",
    altText: "Attesi Mexico highland landscape",
    sortOrder: 1,
    isActive: true,
  },
  {
    _type: "heroSlide",
    title: "Hero Slide 2 — Retreat",
    altText: "Attesi Mexico retreat space",
    sortOrder: 2,
    isActive: true,
  },
  {
    _type: "heroSlide",
    title: "Hero Slide 3 — Nature",
    altText: "Attesi Mexico nature and gardens",
    sortOrder: 3,
    isActive: true,
  },
  {
    _type: "heroSlide",
    title: "Hero Slide 4 — Property",
    altText: "Attesi Mexico property overview",
    sortOrder: 4,
    isActive: true,
  },
  {
    _type: "heroSlide",
    title: "Hero Slide 5 — Grounds",
    altText: "Attesi Mexico grounds at sunset",
    sortOrder: 5,
    isActive: true,
  },
];

async function seed() {
  console.log("Seeding hero slide documents (no images — upload via Studio)…");

  // Delete existing hero slides first
  const existing = await client.fetch(`*[_type == "heroSlide"]._id`);
  if (existing.length > 0) {
    console.log(`Deleting ${existing.length} existing hero slide(s)…`);
    for (const id of existing) {
      await client.delete(id);
    }
  }

  for (const slide of slides) {
    const doc = await client.create(slide);
    console.log(`  ✓ Created: ${slide.title} (${doc._id})`);
  }

  console.log("\nDone! Open Sanity Studio → Hero Slides to upload images.");
  console.log("Studio URL: https://jki68fc0.sanity.studio/structure/heroSlide");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
