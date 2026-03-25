/**
 * Seed script: populates all 9 Attesi facilities into Sanity
 * Usage: SANITY_API_TOKEN=<editor_token> node scripts/seed-facilities.mjs
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jki68fc0",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const facilities = [
  {
    _type: "facility",
    title: "Midrash",
    slug: { _type: "slug", current: "midrash" },
    category: "community",
    cardDescription:
      "A dedicated space for learning, reflection, and gathering — where study and community come together at the heart of Attesi.",
    highlights: [
      "Dedicated study and learning space",
      "Available for group gatherings and lectures",
      "Quiet environment for personal reflection",
      "Central to the Attesi community experience",
    ],
    faqs: [
      {
        _key: "faq-midrash-1",
        question: "What is the Midrash used for?",
        answer:
          "The Midrash is a dedicated space for Torah study, learning sessions, group discussions, and quiet personal reflection. It is open to all guests and retreat participants.",
      },
      {
        _key: "faq-midrash-2",
        question: "Is the Midrash available for private groups?",
        answer:
          "Yes. The Midrash can be reserved for private learning sessions, lectures, or group gatherings. Please speak with the Attesi team to arrange access.",
      },
    ],
    order: 1,
  },
  {
    _type: "facility",
    title: "Sabata Restaurant",
    slug: { _type: "slug", current: "sabata-restaurant" },
    category: "dining",
    cardDescription:
      "Farm-to-table kosher cuisine in a warm, inviting setting. Many of our vegetables are harvested directly from Attesi's own gardens.",
    highlights: [
      "Dairy CY kosher certified",
      "Vegetables harvested from Attesi's own gardens",
      "Fresh, seasonal menu",
      "Warm community dining atmosphere",
      "Thoughtfully prepared with nutrition in mind",
    ],
    faqs: [
      {
        _key: "faq-sabata-1",
        question: "Is Sabata Restaurant kosher?",
        answer:
          "Yes. Sabata is Dairy CY and operates under strict kosher supervision. Every dish is prepared with attention to quality, nutrition, and kosher integrity.",
      },
      {
        _key: "faq-sabata-2",
        question: "Are the vegetables grown on-site?",
        answer:
          "Many of the vegetables served at Sabata are harvested directly from Attesi's own gardens, bringing freshness and seasonality directly into the kitchen.",
      },
      {
        _key: "faq-sabata-3",
        question: "Can guests dine at Sabata without staying at Attesi?",
        answer:
          "Yes. Sabata welcomes both guests staying at Attesi and visitors coming specifically for a meal. We recommend contacting us in advance to confirm availability.",
      },
    ],
    order: 2,
  },
  {
    _type: "facility",
    title: "Market Café",
    slug: { _type: "slug", current: "market-cafe" },
    category: "dining",
    cardDescription:
      "A relaxed gathering place for coffee, smoothies, breakfast bowls, and wholesome snacks — all certified kosher and thoughtfully curated.",
    highlights: [
      "Cholov Yisrael kosher dairy",
      "Freshly brewed hot coffee",
      "Healthy breakfast bowls and smoothies",
      "Gluten-free options available",
      "Low-sugar, fresh ingredients",
      "House-made cookies and cakes",
      "Beautiful views and relaxed atmosphere",
    ],
    faqs: [
      {
        _key: "faq-cafe-1",
        question: "What hours is the Market Café open?",
        answer:
          "The café is open from morning through the afternoon. Hours may vary depending on the season and retreat schedule. Check with the Attesi team for current hours.",
      },
      {
        _key: "faq-cafe-2",
        question: "Is the café kosher?",
        answer:
          "Yes. Everything at the Market Café is Cholov Yisrael kosher dairy, prepared with thoughtful attention to quality, health, and detail.",
      },
      {
        _key: "faq-cafe-3",
        question: "Are there healthy options available?",
        answer:
          "Absolutely. The menu focuses on fresh fruits, low-sugar ingredients, and many gluten-free options so you can enjoy what you eat without feeling heavy or guilty.",
      },
    ],
    order: 3,
  },
  {
    _type: "facility",
    title: "Arbol Juegos Sala",
    slug: { _type: "slug", current: "arbol-juegos-sala" },
    category: "community",
    cardDescription:
      "A vibrant community games and activity room — a playful space where guests of all ages can gather, connect, and unwind.",
    highlights: [
      "Games and activities for all ages",
      "Community gathering space",
      "Indoor relaxation area",
      "Ideal for families and group retreats",
    ],
    faqs: [
      {
        _key: "faq-arbol-1",
        question: "What activities are available in the Arbol Juegos Sala?",
        answer:
          "The space features a variety of games and activities suitable for guests of all ages. It is designed as a relaxed, playful environment for community connection.",
      },
      {
        _key: "faq-arbol-2",
        question: "Is this space available for private events?",
        answer:
          "Yes. The Arbol Juegos Sala can be arranged for private group activities or events. Please contact the Attesi team to discuss your needs.",
      },
    ],
    order: 4,
  },
  {
    _type: "facility",
    title: "Outdoor Spaces",
    slug: { _type: "slug", current: "outdoor-spaces" },
    category: "nature",
    cardDescription:
      "Open-air gathering areas, garden pergolas, and natural landscapes — designed for connection, contemplation, and time spent in nature.",
    highlights: [
      "Central garden pergola",
      "Yoga and meditation gathering areas",
      "Garden paths through fruit trees and flowers",
      "Outdoor picnic areas",
      "Mountain and valley views",
      "Spaces for sunrise and sunset gatherings",
    ],
    faqs: [
      {
        _key: "faq-outdoor-1",
        question: "What outdoor spaces are available at Attesi?",
        answer:
          "Attesi features a central garden pergola, yoga and meditation areas, garden paths through fruit trees and flowers, outdoor picnic tables, and open spaces with mountain views.",
      },
      {
        _key: "faq-outdoor-2",
        question: "Can outdoor spaces be reserved for events?",
        answer:
          "Yes. Many of our outdoor spaces can be arranged for private gatherings, ceremonies, or group activities. Contact the Attesi team to discuss your requirements.",
      },
    ],
    order: 5,
  },
  {
    _type: "facility",
    title: "Glamping Retreat Center",
    slug: { _type: "slug", current: "glamping-retreat-center" },
    category: "accommodation",
    cardDescription:
      "12 private glamping tents nestled within the Attesi gardens — each with a private bathroom, comfortable beds, and a connection to the natural rhythm of the land.",
    highlights: [
      "12 glamping tents (6 queen + 6 twin configurations)",
      "Each tent sleeps 2–3 guests",
      "Private attached bathroom with shower",
      "Handmade soaps crafted at Attesi",
      "Shared glamping kitchen with stovetop and utensils",
      "Outdoor picnic tables",
      "Heater for cooler nights",
      "Surrounded by gardens and mountain views",
    ],
    faqs: [
      {
        _key: "faq-glamping-1",
        question: "How many glamping tents are available?",
        answer:
          "There are 12 glamping tents in total — 6 with one queen bed plus a sofa bed, and 6 with two twin beds plus a sofa bed. Each tent comfortably accommodates 2–3 guests.",
      },
      {
        _key: "faq-glamping-2",
        question: "Do the tents have private bathrooms?",
        answer:
          "Yes. Each glamping tent includes a private attached bathroom with a shower, sink, and handmade soaps crafted at Attesi.",
      },
      {
        _key: "faq-glamping-3",
        question: "Is there a kitchen available for guests?",
        answer:
          "Guests have access to a shared glamping kitchen nearby, equipped with a stovetop, sink, pots and pans, dishes, and utensils. Outdoor picnic tables provide a beautiful place to prepare meals.",
      },
      {
        _key: "faq-glamping-4",
        question: "What is the glamping area like at night?",
        answer:
          "The glamping area is quiet and immersed in nature. From your tent you can hear birds, see the stars, and experience a slower, more connected rhythm of living.",
      },
    ],
    order: 6,
  },
  {
    _type: "facility",
    title: "The Farm",
    slug: { _type: "slug", current: "the-farm" },
    category: "farm",
    cardDescription:
      "Home to sheep, goats, donkeys, horses, and cows — the farm is a living expression of Attesi's connection to the land and permaculture values.",
    highlights: [
      "Sheep, goats, donkeys, horses, and cows",
      "Horseback riding available",
      "Feed and interact with the animals",
      "Learn about permaculture and farm ecology",
      "Hands-on farm life experiences",
      "Part of Attesi's closed-loop ecosystem",
    ],
    faqs: [
      {
        _key: "faq-farm-1",
        question: "What animals live on the Attesi farm?",
        answer:
          "The farm is home to sheep, goats, donkeys, horses, cows, and many other animals. Each plays an important role in Attesi's permaculture foundation.",
      },
      {
        _key: "faq-farm-2",
        question: "Can guests interact with the animals?",
        answer:
          "Yes. Guests are welcome to feed and pet the animals, walk alongside them through the land, and experience horseback riding. It is a hands-on, grounding experience.",
      },
      {
        _key: "faq-farm-3",
        question: "Is horseback riding available for all ages?",
        answer:
          "Horseback riding is available for most guests. Please speak with the Attesi team about age and weight guidelines and to arrange your session.",
      },
    ],
    order: 7,
  },
  {
    _type: "facility",
    title: "Huertos Garden",
    slug: { _type: "slug", current: "huertos-garden" },
    category: "nature",
    cardDescription:
      "Attesi's working gardens — where permaculture principles come to life through seasonal planting, harvesting, and a deep connection to the soil.",
    highlights: [
      "Working permaculture gardens",
      "Seasonal fruit and vegetable cultivation",
      "Supplies fresh produce to Sabata Restaurant",
      "Educational garden tours available",
      "Composting and closed-loop systems",
      "Medicinal and aromatic herb sections",
    ],
    faqs: [
      {
        _key: "faq-huertos-1",
        question: "Can guests visit the gardens?",
        answer:
          "Yes. The Huertos gardens are open to guests and are a central part of the Attesi experience. Guided garden tours are available to learn about permaculture practices.",
      },
      {
        _key: "faq-huertos-2",
        question: "Do the gardens supply the restaurant?",
        answer:
          "Yes. Many of the vegetables and herbs grown in the Huertos are harvested and used directly in Sabata Restaurant and the Market Café, connecting the land to the table.",
      },
      {
        _key: "faq-huertos-3",
        question: "Are there opportunities to participate in gardening?",
        answer:
          "Absolutely. Guests can participate in planting, harvesting, and learning about the garden as part of Attesi's educational and community programs.",
      },
    ],
    order: 8,
  },
  {
    _type: "facility",
    title: "Natural Spring Mikvah",
    slug: { _type: "slug", current: "natural-spring-mikvah" },
    category: "wellness",
    cardDescription:
      "A natural spring-fed immersion space nestled within the Attesi landscape — used for breathwork, meditation, cold plunge, and ritual renewal.",
    highlights: [
      "Natural spring-fed water source",
      "Cold plunge and immersion experience",
      "Ideal after Temazcal ceremony",
      "Supports breathwork and meditation",
      "Surrounded by trees and natural landscape",
      "Available year-round",
    ],
    faqs: [
      {
        _key: "faq-mikvah-1",
        question: "What is the Natural Spring Mikvah?",
        answer:
          "It is a natural spring-fed immersion space nestled within the Attesi landscape. The spring water flows directly from a natural source, creating a refreshing and grounding experience throughout the year.",
      },
      {
        _key: "faq-mikvah-2",
        question: "How is it used during a retreat?",
        answer:
          "Many guests use the space for breathwork, meditation, and moments of reflection. It is especially powerful after a Temazcal ceremony, when the body transitions from heat to the revitalizing coolness of the spring.",
      },
      {
        _key: "faq-mikvah-3",
        question: "Is the water cold year-round?",
        answer:
          "Yes. The spring water is naturally cold throughout the year, providing a consistent and invigorating immersion experience regardless of the season.",
      },
    ],
    order: 9,
  },
];

async function seed() {
  console.log(`Seeding ${facilities.length} facilities into Sanity...`);

  for (const facility of facilities) {
    // Check if document already exists
    const existing = await client.fetch(
      `*[_type == "facility" && slug.current == $slug][0]._id`,
      { slug: facility.slug.current }
    );

    if (existing) {
      console.log(`  ⟳  Updating: ${facility.title}`);
      await client.patch(existing).set(facility).commit();
    } else {
      console.log(`  ✚  Creating: ${facility.title}`);
      await client.create(facility);
    }
  }

  console.log("\n✅ Seed complete. All 9 facilities are in Sanity.");
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
