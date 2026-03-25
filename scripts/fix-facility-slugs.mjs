/**
 * Fix facility slugs to match navbar/footer links
 * Usage: SANITY_API_TOKEN=<editor_token> node scripts/fix-facility-slugs.mjs
 */
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jki68fc0",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Map: old slug → new slug
const slugFixes = [
  { oldSlug: "sabata-restaurant", newSlug: "sabata", newTitle: "Sabata" },
  { oldSlug: "market-cafe",       newSlug: "cafe",   newTitle: "Cafe" },
  { oldSlug: "arbol-juegos-sala", newSlug: "central-garden", newTitle: "Central Garden" },
  { oldSlug: "glamping-retreat-center", newSlug: "retreat-center", newTitle: "Retreat Center" },
  { oldSlug: "the-farm",          newSlug: "farm",   newTitle: "Farm" },
  { oldSlug: "huertos-garden",    newSlug: "huertos", newTitle: "Huertos" },
];

async function fixSlugs() {
  console.log("Fixing 6 facility slugs...\n");
  for (const fix of slugFixes) {
    const id = await client.fetch(
      `*[_type == "facility" && slug.current == $slug][0]._id`,
      { slug: fix.oldSlug }
    );
    if (!id) {
      console.log(`  ✗  Not found: ${fix.oldSlug} — skipping`);
      continue;
    }
    await client.patch(id).set({
      slug: { _type: "slug", current: fix.newSlug },
    }).commit();
    console.log(`  ✓  ${fix.oldSlug}  →  ${fix.newSlug}`);
  }
  console.log("\n✅ Slug fixes complete.");
}

fixSlugs().catch((err) => {
  console.error("Fix failed:", err.message);
  process.exit(1);
});
