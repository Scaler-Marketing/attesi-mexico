import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "jki68fc0",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const lodgings = [
  {
    title: "Glamping",
    slug: "glamping",
    tagline: "12 tents · Queen & Twin options",
    cardDescription:
      "Nestled in nature and designed for comfort, our glamping tents offer a cozy retreat with soft carpets, warm bedding, and an unforgettable sleeping experience.",
    description: [
      {
        _type: "block",
        _key: "glamping-desc-1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "glamping-span-1",
            text: "Nestled in nature and designed for comfort, the glamping tents at Attesi offer a cozy retreat with soft carpets, warm bedding, and an unforgettable sleeping experience that blends tranquility, style, and the beauty of the outdoors.",
          },
        ],
      },
    ],
    guestCapacity: 24,
    totalUnits: 12,
    bedTypes: [
      { _key: "bt-1", label: "1 Queen Bed", count: 6 },
      { _key: "bt-2", label: "2 Twin Beds", count: 6 },
    ],
    amenities: [
      "Private bathroom and shower connected to each tent",
      "Comfortable futon couch (converts to bed)",
      "Lamp",
      "Heater",
      "Extra blankets",
      "Night stands",
      "Shoe rack",
      "Outdoor folding chair",
      "Onsite laundry service",
      "Daily cleaning service",
      "Shared glamping kitchen available",
    ],
    order: 1,
  },
  {
    title: "Villas Norte",
    slug: "villas-norte",
    tagline: "Private villas · Coming soon",
    cardDescription:
      "Spacious private villas set among the northern gardens of Attesi, offering a serene retreat with premium amenities and breathtaking views.",
    description: [
      {
        _type: "block",
        _key: "norte-desc-1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "norte-span-1",
            text: "Spacious private villas set among the northern gardens of Attesi, offering a serene retreat with premium amenities and breathtaking views of the surrounding landscape. Content coming soon.",
          },
        ],
      },
    ],
    guestCapacity: 4,
    totalUnits: null,
    bedTypes: [],
    amenities: [
      "Private entrance",
      "En-suite bathroom",
      "Air conditioning",
      "Daily housekeeping",
    ],
    order: 2,
  },
  {
    title: "Villas Paz",
    slug: "villas-paz",
    tagline: "Peaceful villas · Coming soon",
    cardDescription:
      "Tranquil private villas designed for deep rest and renewal, surrounded by the peaceful gardens and natural beauty of Attesi.",
    description: [
      {
        _type: "block",
        _key: "paz-desc-1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "paz-span-1",
            text: "Tranquil private villas designed for deep rest and renewal, surrounded by the peaceful gardens and natural beauty of Attesi. Content coming soon.",
          },
        ],
      },
    ],
    guestCapacity: 4,
    totalUnits: null,
    bedTypes: [],
    amenities: [
      "Private entrance",
      "En-suite bathroom",
      "Air conditioning",
      "Daily housekeeping",
    ],
    order: 3,
  },
];

async function seedLodging() {
  console.log("Seeding lodging...");

  // Delete existing lodging documents to avoid duplicates
  const existing = await client.fetch(`*[_type == "lodging"]._id`);
  if (existing.length > 0) {
    for (const id of existing) {
      await client.delete(id);
    }
    console.log(`Deleted ${existing.length} existing lodging documents`);
  }

  for (const l of lodgings) {
    await client.create({
      _type: "lodging",
      title: l.title,
      slug: { _type: "slug", current: l.slug },
      tagline: l.tagline,
      cardDescription: l.cardDescription,
      description: l.description,
      guestCapacity: l.guestCapacity,
      totalUnits: l.totalUnits,
      bedTypes: l.bedTypes,
      amenities: l.amenities,
      order: l.order,
    });
    console.log(`✓ Created lodging: ${l.title}`);
  }

  console.log("\nDone! All lodging documents seeded.");
}

seedLodging().catch(console.error);
