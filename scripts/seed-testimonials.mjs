import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "jki68fc0",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const testimonials = [
  {
    text: "Attesi was unlike anything I've experienced. The land, the people, the food — it all felt deeply intentional. I left feeling restored in ways I didn't expect.",
    author: "Sarah M.",
    location: "New York, USA",
    order: 1,
  },
  {
    text: "From the moment we arrived, we felt held by something larger than ourselves. The Shabbat experience alone was worth the journey.",
    author: "Daniel K.",
    location: "Toronto, Canada",
    order: 2,
  },
  {
    text: "I came for a retreat and left with a community. Attesi has a rare gift — it connects you to the earth and to each other at the same time.",
    author: "Rachel L.",
    location: "Los Angeles, USA",
    order: 3,
  },
  {
    text: "The silence here is unlike anything I've found anywhere else. I arrived exhausted and left with a clarity I hadn't felt in years. Attesi is the real thing.",
    author: "Marcus T.",
    location: "Chicago, USA",
    order: 4,
  },
  {
    text: "Every detail — the food, the ceremonies, the land — felt curated with so much care. We came as strangers and left as family. We're already planning our return.",
    author: "Leila R.",
    location: "Mexico City, Mexico",
    order: 5,
  },
  {
    text: "I've been on many retreats but nothing has touched me the way Attesi did. The combination of nature, community, and intentional living is something truly special.",
    author: "James W.",
    location: "London, UK",
    order: 6,
  },
];

async function seedTestimonials() {
  console.log("Seeding testimonials...");

  // Delete existing testimonials first to avoid duplicates
  const existing = await client.fetch(`*[_type == "testimonial"]._id`);
  if (existing.length > 0) {
    for (const id of existing) {
      await client.delete(id);
    }
    console.log(`Deleted ${existing.length} existing testimonials`);
  }

  for (const t of testimonials) {
    await client.create({
      _type: "testimonial",
      text: t.text,
      author: t.author,
      location: t.location,
      order: t.order,
    });
    console.log(`✓ Created testimonial by ${t.author}`);
  }

  console.log("\nDone! All testimonials seeded.");
}

seedTestimonials().catch(console.error);
