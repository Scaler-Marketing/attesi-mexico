/**
 * Migration: Clean up heroSlide documents
 * - Removes orphaned old fields: `order`, `subtitle`
 * - Discards the stale draft of Slide 1 (drafts.y7DhkbRfBSv5xa7ZPaBp9r)
 * Run: SANITY_API_TOKEN=xxx node scripts/migrate-hero-slides.mjs
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "jki68fc0",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function migrate() {
  // 1. Delete the stale draft (it has old `order` field set)
  const staleId = "drafts.y7DhkbRfBSv5xa7ZPaBp9r";
  try {
    await client.delete(staleId);
    console.log(`✓ Deleted stale draft: ${staleId}`);
  } catch (e) {
    console.log(`  (draft already gone or not found: ${e.message})`);
  }

  // 2. Fetch all published heroSlide docs
  const docs = await client.fetch(`*[_type == "heroSlide" && !(_id in path("drafts.**"))]{_id, order, subtitle}`);
  console.log(`Found ${docs.length} published heroSlide docs to clean up…`);

  for (const doc of docs) {
    const patches = [];
    if (doc.order !== undefined && doc.order !== null) {
      patches.push({ unset: ["order"] });
    }
    if (doc.subtitle !== undefined && doc.subtitle !== null) {
      patches.push({ unset: ["subtitle"] });
    }
    if (patches.length > 0) {
      let patch = client.patch(doc._id);
      for (const p of patches) {
        if (p.unset) patch = patch.unset(p.unset);
      }
      await patch.commit();
      console.log(`  ✓ Cleaned ${doc._id} — removed: ${patches.map(p => p.unset?.join(", ")).join(", ")}`);
    } else {
      console.log(`  ✓ ${doc._id} — already clean`);
    }
  }

  console.log("\nMigration complete.");
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
