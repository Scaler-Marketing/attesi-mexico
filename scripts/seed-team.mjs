import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "jki68fc0",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const teamMembers = [
  {
    name: "David Nathan",
    slug: "david-nathan",
    role: "Guided Mountain Hiker",
    bio: "David Nathan is an experienced guided mountain hiker with a deep passion for the outdoors and a love of adventure. He thrives on being in nature and enjoys sharing that connection with others through meaningful, memorable hiking experiences.\n\nWith a calm, confident presence on the trail, David takes every opportunity to be outdoors and believes the best moments come from exploring nature with intention and curiosity.",
    order: 1,
  },
  {
    name: "Hela Zadaka",
    slug: "hela-zadaka",
    role: "Team Member",
    bio: "",
    order: 2,
  },
  {
    name: "Mike Abadi",
    slug: "mike-abadi",
    role: "Guided Mountain Hiker",
    bio: "Mike Abadi is a guided mountain hiker with a deep love for the outdoors and a natural curiosity that drives everything he does. He enjoys running, exploring new terrain, and spending as much time as possible immersed in nature.\n\nWhether on the trail or in motion, Mike is energized by discovery and brings a thoughtful, adventurous spirit to every outdoor experience.",
    order: 3,
  },
  {
    name: "Moy Schwartzman",
    slug: "moy-schwartzman",
    role: "Co-Founder",
    bio: "Moy Schwartzman is a co-founder of Attesi Lodge with a deep love for planting with intention and working closely with the land. He can often be found in the gardens at Attesi, exploring new and thoughtful ways to farm while nurturing a strong connection to nature.\n\nPassionate about permaculture, Moy enjoys sharing his knowledge with those around him, especially the kids, inspiring curiosity, care for the earth, and a hands-on appreciation for how food and ecosystems grow together.",
    order: 4,
  },
  {
    name: "Gabriel Mondlak",
    slug: "gabriel-mondlak",
    role: "Co-Founder",
    bio: "Gabriel Mondlak is a co-founder of Attesi with a deep interest in permaculture and a lifelong curiosity about nature and the outdoors. He enjoys learning from the land and exploring sustainable ways of living in closer connection with nature.\n\nGabriel loves sharing his knowledge with those around him and is equally passionate about learning and teaching Torah ideas and concepts whenever the opportunity arises, creating meaningful connections between nature, wisdom, and community.",
    order: 5,
  },
  {
    name: "Michelle Abadi",
    slug: "michelle-abadi",
    role: "Marketing Professional",
    bio: "Michelle Abadi is originally from Costa Rica and brings a rich personal and professional background to the Attesi community. A baalat teshuva, she has experience in kiruv and a strong career foundation in communication and marketing.\n\nWorking in marketing and balancing life as a mother of three, Michelle is driven by connection, purpose, and meaningful storytelling. She brings warmth, insight, and intentionality to everything she does, helping build bridges between people, values, and community.",
    order: 6,
  },
  {
    name: "Marion Arouesty",
    slug: "marion-arouesty",
    role: "Communications Professional",
    bio: "Marion Arouesty is a communications professional with a background that also includes studies in gastronomy. She has a deep love for food and a natural curiosity about how culture, creativity, and storytelling come together around the table.\n\nPassionate about animals and conscious living, Marion brings warmth, care, and thoughtful communication to everything she does, always guided by her appreciation for both people and the natural world.",
    order: 7,
  },
  {
    name: "Marcos Penhos",
    slug: "marcos-penhos",
    role: "Certified Breathwork Facilitator",
    bio: "Marcos Penhos is dedicated to personal growth and the ongoing pursuit of truth. He is a certified Breathwork facilitator through Breathouse and brings together a wide range of tools to support well-being and self-development.\n\nThrough the power of breath, Marcos guides others toward greater balance, awareness, and connection, helping them cultivate a healthier and more intentional way of living.",
    order: 8,
  },
];

async function seedTeam() {
  console.log("Seeding team members...");

  for (const member of teamMembers) {
    // Check if already exists
    const existing = await client.fetch(
      `*[_type == "teamMember" && slug.current == $slug][0]._id`,
      { slug: member.slug }
    );

    const doc = {
      _type: "teamMember",
      name: member.name,
      slug: { _type: "slug", current: member.slug },
      role: member.role,
      bio: member.bio,
      order: member.order,
    };

    if (existing) {
      await client.patch(existing).set(doc).commit();
      console.log(`✓ Updated: ${member.name}`);
    } else {
      await client.create(doc);
      console.log(`✓ Created: ${member.name}`);
    }
  }

  console.log("\nDone! All team members seeded.");
}

seedTeam().catch(console.error);
