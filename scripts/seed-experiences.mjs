/**
 * Seed script — creates all 10 experience documents in Sanity
 * Run: node scripts/seed-experiences.mjs
 */

const PROJECT_ID = "jki68fc0";
const DATASET = "production";
const TOKEN = process.env.SANITY_TOKEN;

const experiences = [
  {
    _id: "experience-migrating-monarchs",
    _type: "experience",
    title: "Migrating Monarchs",
    slug: { _type: "slug", current: "migrating-monarchs" },
    tagline: "Seasonal · Nov – Feb",
    category: "nature",
    cardDescription:
      "Witness one of nature's most remarkable phenomena as thousands of monarch butterflies gather in their winter sanctuary at Attesi.",
    about: [
      {
        _type: "block", _key: "mm1", style: "normal",
        children: [{ _type: "span", _key: "s1", text: "Each year from late November through February, monarch butterflies complete their epic journey from Canada and the northern United States to the forests of central Mexico. At Attesi, you are positioned within this living migration corridor — thousands of butterflies gather in the surrounding oyamel fir trees, turning branches into shimmering curtains of orange and black." }],
        markDefs: [],
      },
      {
        _type: "block", _key: "mm2", style: "normal",
        children: [{ _type: "span", _key: "s2", text: "Our guided morning walks take you into the heart of the sanctuary at the optimal time of day, when the butterflies warm in the sun and take flight in great drifting clouds. Your guide will share the science, the folklore, and the conservation story behind one of nature's most extraordinary journeys." }],
        markDefs: [],
      },
    ],
    highlights: [
      "Guided morning walk into the butterfly sanctuary",
      "Best viewed November through February",
      "Expert naturalist guide included",
      "Small groups of 8 or fewer",
      "Photography tips provided",
    ],
    faqs: [
      { _key: "faq1", question: "When is the best time to see the monarchs?", answer: "Peak season is mid-November through late January. The butterflies are most active on warm, sunny mornings between 10am and 1pm." },
      { _key: "faq2", question: "How long is the guided walk?", answer: "Approximately 2–3 hours including the walk to the sanctuary and time to observe." },
      { _key: "faq3", question: "Is this experience available year-round?", answer: "No — this experience is only available from November through February when the monarchs are present." },
    ],
    seoTitle: "Migrating Monarchs Experience — Attesi Mexico",
    seoDescription: "Witness thousands of monarch butterflies in their winter sanctuary at Attesi Mexico. Guided morning walks available November through February.",
    order: 1,
  },
  {
    _id: "experience-temazcal-ceremony",
    _type: "experience",
    title: "Temazcal Ceremony",
    slug: { _type: "slug", current: "temazcal-ceremony" },
    tagline: "Ancient · Healing · Fire",
    category: "wellness",
    cardDescription:
      "Enter the ancient stone sweat lodge for a deeply restorative ceremony led by a traditional healer. Cleanse body, mind, and spirit.",
    about: [
      {
        _type: "block", _key: "tc1", style: "normal",
        children: [{ _type: "span", _key: "s1", text: "The temazcal is a pre-Hispanic sweat lodge ceremony that has been practiced in Mesoamerica for thousands of years. At Attesi, our temazcal is built from volcanic stone and led by a traditional healer — a temazcalero — who guides participants through a ceremony of purification, prayer, and renewal." }],
        markDefs: [],
      },
      {
        _type: "block", _key: "tc2", style: "normal",
        children: [{ _type: "span", _key: "s2", text: "Volcanic stones are heated in a sacred fire and placed inside the dome-shaped lodge. Medicinal herbs, copal incense, and healing songs fill the space as the ceremony moves through four rounds, each representing a direction and element. The experience concludes with a cold plunge and grounding tea." }],
        markDefs: [],
      },
    ],
    highlights: [
      "Led by a traditional temazcalero",
      "Volcanic stone lodge on the property",
      "Medicinal herbs and copal incense",
      "Four ceremonial rounds",
      "Cold plunge and herbal tea included",
      "Maximum 12 participants",
    ],
    faqs: [
      { _key: "faq1", question: "What should I wear?", answer: "Light, comfortable clothing you don't mind getting wet — a swimsuit or shorts and a light top work well. We provide towels." },
      { _key: "faq2", question: "Is it safe for everyone?", answer: "The temazcal is not recommended for pregnant women, people with heart conditions, or those with severe claustrophobia. Please consult us in advance if you have health concerns." },
      { _key: "faq3", question: "How long does the ceremony last?", answer: "Approximately 2 hours including preparation and the closing grounding ritual." },
    ],
    seoTitle: "Temazcal Ceremony — Attesi Mexico",
    seoDescription: "Experience an authentic pre-Hispanic temazcal sweat lodge ceremony at Attesi Mexico, led by a traditional healer.",
    order: 2,
  },
  {
    _id: "experience-guided-mountain-hikes",
    _type: "experience",
    title: "Guided Mountain Hikes",
    slug: { _type: "slug", current: "guided-mountain-hikes" },
    tagline: "Trail · Forest · Summit",
    category: "adventure",
    cardDescription:
      "Explore the trails and peaks surrounding Attesi with an expert local guide. Routes for all fitness levels through cloud forest and open ridge.",
    about: [
      {
        _type: "block", _key: "gmh1", style: "normal",
        children: [{ _type: "span", _key: "s1", text: "The mountains surrounding Attesi are laced with trails that wind through cloud forest, open meadow, and dramatic ridgelines with views stretching across the valley. Our local guides know every path, every viewpoint, and every story embedded in the landscape." }],
        markDefs: [],
      },
      {
        _type: "block", _key: "gmh2", style: "normal",
        children: [{ _type: "span", _key: "s2", text: "We offer routes for all fitness levels — from gentle morning walks through the forest to full-day summit hikes. All hikes depart from the property and can be customized based on your group's pace and interests. Flora, fauna, and local history are woven into every step." }],
        markDefs: [],
      },
    ],
    highlights: [
      "Expert local guide on every hike",
      "Routes for all fitness levels",
      "Cloud forest, meadow, and ridge trails",
      "Panoramic valley views",
      "Packed lunch available on full-day routes",
      "Departs directly from the property",
    ],
    faqs: [
      { _key: "faq1", question: "What fitness level is required?", answer: "We have routes for everyone — gentle 1-hour walks to 6-hour summit hikes. Let us know your group's fitness level when booking." },
      { _key: "faq2", question: "What should I bring?", answer: "Sturdy walking shoes or hiking boots, layers (mountain weather changes quickly), sunscreen, and a water bottle. We provide trail snacks." },
      { _key: "faq3", question: "Can children participate?", answer: "Yes — we have family-friendly routes suitable for children aged 6 and up." },
    ],
    seoTitle: "Guided Mountain Hikes — Attesi Mexico",
    seoDescription: "Explore the cloud forests and mountain trails surrounding Attesi Mexico with an expert local guide. Routes for all fitness levels.",
    order: 3,
  },
  {
    _id: "experience-farm-to-table",
    _type: "experience",
    title: "Farm to Table",
    slug: { _type: "slug", current: "farm-to-table" },
    tagline: "Harvest · Cook · Feast",
    category: "food",
    cardDescription:
      "Join our chefs in the garden, harvest what is in season, and cook a meal together using traditional Mexican techniques and fire.",
    about: [
      {
        _type: "block", _key: "ftt1", style: "normal",
        children: [{ _type: "span", _key: "s1", text: "At Attesi, the kitchen and the land are inseparable. Our farm-to-table experience begins in the garden, where you harvest the ingredients for your meal alongside our chef. You will learn which plants are in season, how they are grown without chemicals, and the culinary traditions that have shaped this region for centuries." }],
        markDefs: [],
      },
      {
        _type: "block", _key: "ftt2", style: "normal",
        children: [{ _type: "span", _key: "s2", text: "Back in the kitchen, the cooking begins — tortillas pressed by hand, salsas ground on the metate, and mole simmered low and slow. The meal ends at a long table with the people who made it. Wine, mezcal, and conversation flow freely." }],
        markDefs: [],
      },
    ],
    highlights: [
      "Garden harvest with the chef",
      "Hands-on cooking with traditional techniques",
      "Tortilla pressing and salsa making",
      "Seated meal with wine or mezcal",
      "Recipes to take home",
      "Available for groups of 4–16",
    ],
    faqs: [
      { _key: "faq1", question: "Do I need cooking experience?", answer: "None at all — this is designed to be fun and approachable for everyone, from beginners to experienced home cooks." },
      { _key: "faq2", question: "Can dietary restrictions be accommodated?", answer: "Yes — please let us know in advance and we will tailor the menu accordingly. We can accommodate vegetarian, vegan, and gluten-free diets." },
      { _key: "faq3", question: "How long does the experience last?", answer: "Approximately 3–4 hours from garden to table." },
    ],
    seoTitle: "Farm to Table Experience — Attesi Mexico",
    seoDescription: "Harvest, cook, and feast at Attesi Mexico. A hands-on farm-to-table cooking experience using traditional Mexican techniques.",
    order: 4,
  },
  {
    _id: "experience-natural-spring-cold-plunge",
    _type: "experience",
    title: "Natural Spring Cold Plunge",
    slug: { _type: "slug", current: "natural-spring-cold-plunge" },
    tagline: "Wild · Invigorating · Restorative",
    category: "wellness",
    cardDescription:
      "Immerse yourself in a natural spring-fed cold plunge pool on the property. Paired with breathwork for a full nervous system reset.",
    about: [
      {
        _type: "block", _key: "nscp1", style: "normal",
        children: [{ _type: "span", _key: "s1", text: "Fed by a natural spring that flows year-round from the mountain above, the cold plunge at Attesi is one of the most invigorating experiences on the property. The water sits at a consistent 14–16°C (57–61°F) — cold enough to activate the body's full stress-response and recovery cascade." }],
        markDefs: [],
      },
      {
        _type: "block", _key: "nscp2", style: "normal",
        children: [{ _type: "span", _key: "s2", text: "We pair the cold plunge with a guided breathwork session to help you enter and exit the water with intention. The combination of controlled breathing and cold immersion produces a powerful reset of the nervous system — guests consistently report improved sleep, reduced anxiety, and a profound sense of calm in the hours that follow." }],
        markDefs: [],
      },
    ],
    highlights: [
      "Natural spring-fed pool at 14–16°C",
      "Guided breathwork session included",
      "Available daily, morning sessions recommended",
      "Towels and robes provided",
      "Can be combined with temazcal for contrast therapy",
    ],
    faqs: [
      { _key: "faq1", question: "Is it safe for beginners?", answer: "Yes — our guide will walk you through breathwork preparation and a gradual entry protocol. We never push anyone beyond their comfort level." },
      { _key: "faq2", question: "How long do I stay in the water?", answer: "Typically 2–3 minutes per immersion, repeated 2–3 times. Your guide will coach you through the timing." },
      { _key: "faq3", question: "Can I combine this with the temazcal?", answer: "Absolutely — contrast therapy (heat and cold alternating) is one of the most powerful recovery protocols available. We offer a combined temazcal + cold plunge session." },
    ],
    seoTitle: "Natural Spring Cold Plunge — Attesi Mexico",
    seoDescription: "Immerse in a natural spring cold plunge at Attesi Mexico, paired with guided breathwork for a full nervous system reset.",
    order: 5,
  },
  {
    _id: "experience-apiary",
    _type: "experience",
    title: "Apiary",
    slug: { _type: "slug", current: "apiary" },
    tagline: "Bees · Honey · Land",
    category: "nature",
    cardDescription:
      "Visit the on-property apiary with our beekeeper, learn about native Mexican bee species, and taste honey harvested from the hives.",
    about: [
      {
        _type: "block", _key: "ap1", style: "normal",
        children: [{ _type: "span", _key: "s1", text: "Attesi maintains a working apiary that is home to both European honeybees and the native stingless Melipona bee — a species sacred to the Maya and prized for its medicinal honey. Our beekeeper leads intimate tours of the hives, explaining the ecology of the colony, the role of bees in the surrounding landscape, and the traditional uses of Melipona honey in Mexican healing practices." }],
        markDefs: [],
      },
      {
        _type: "block", _key: "ap2", style: "normal",
        children: [{ _type: "span", _key: "s2", text: "The tour concludes with a honey tasting — comparing the floral, complex notes of our estate honey with the tart, medicinal character of Melipona. Guests are welcome to purchase honey to take home." }],
        markDefs: [],
      },
    ],
    highlights: [
      "Tour led by our resident beekeeper",
      "European and native Melipona bees",
      "Protective gear provided",
      "Honey tasting included",
      "Honey available for purchase",
      "Suitable for all ages",
    ],
    faqs: [
      { _key: "faq1", question: "Is it safe if I am allergic to bees?", answer: "We do not recommend this experience for guests with severe bee sting allergies (anaphylaxis). Please inform us in advance." },
      { _key: "faq2", question: "Will I get stung?", answer: "Full protective suits are provided for anyone who wants them. Stings are rare but possible — our beekeeper works calmly and gently with the hives." },
      { _key: "faq3", question: "How long is the tour?", answer: "Approximately 1–1.5 hours including the honey tasting." },
    ],
    seoTitle: "Apiary Experience — Attesi Mexico",
    seoDescription: "Visit the Attesi Mexico apiary, meet native Melipona bees, and taste estate honey with our resident beekeeper.",
    order: 6,
  },
  {
    _id: "experience-farm-tour",
    _type: "experience",
    title: "Farm Tour",
    slug: { _type: "slug", current: "farm-tour" },
    tagline: "Roots · Soil · Story",
    category: "food",
    cardDescription:
      "Walk the working farm with one of our farmers. Learn how we grow food regeneratively, meet the animals, and understand the land that feeds the kitchen.",
    about: [
      {
        _type: "block", _key: "ft1", style: "normal",
        children: [{ _type: "span", _key: "s1", text: "The farm at Attesi is not decoration — it is the engine of the property. Our regenerative growing practices mean no synthetic inputs, closed nutrient loops, and a landscape that is actively improving year over year. The farm tour takes you behind the scenes: into the composting system, through the vegetable beds, past the fruit orchards, and into the animal areas." }],
        markDefs: [],
      },
      {
        _type: "block", _key: "ft2", style: "normal",
        children: [{ _type: "span", _key: "s2", text: "Your farmer guide will explain the principles of regenerative agriculture, the specific crops grown for the kitchen, and the seasonal rhythms that shape what ends up on your plate. This is a grounding, educational experience that connects the food you eat to the soil it came from." }],
        markDefs: [],
      },
    ],
    highlights: [
      "Guided by one of our working farmers",
      "Regenerative agriculture practices explained",
      "Vegetable gardens, orchards, and animals",
      "Composting and soil health demonstration",
      "Connects directly to the farm-to-table experience",
      "Suitable for all ages",
    ],
    faqs: [
      { _key: "faq1", question: "How long is the tour?", answer: "Approximately 1 hour at a relaxed walking pace." },
      { _key: "faq2", question: "Can children participate?", answer: "Yes — children love meeting the animals and getting their hands in the soil. It is one of our most family-friendly experiences." },
      { _key: "faq3", question: "Is this experience available every day?", answer: "Yes, farm tours run daily in the morning. We recommend combining it with the farm-to-table cooking experience." },
    ],
    seoTitle: "Farm Tour — Attesi Mexico",
    seoDescription: "Walk the regenerative farm at Attesi Mexico with one of our farmers and discover how the land feeds the kitchen.",
    order: 7,
  },
  {
    _id: "experience-bonfire",
    _type: "experience",
    title: "Bonfire",
    slug: { _type: "slug", current: "bonfire" },
    tagline: "Fire · Stars · Story",
    category: "community",
    cardDescription:
      "Gather around the fire as the sun goes down. Stories, music, mezcal, and the kind of conversation that only happens under a dark sky.",
    about: [
      {
        _type: "block", _key: "bf1", style: "normal",
        children: [{ _type: "span", _key: "s1", text: "There is something irreplaceable about gathering around a fire. At Attesi, the evening bonfire is a ritual — a moment for guests to slow down, look up at the stars, and connect with the people around them. The fire is lit at dusk in the central outdoor gathering space, and the night unfolds naturally from there." }],
        markDefs: [],
      },
      {
        _type: "block", _key: "bf2", style: "normal",
        children: [{ _type: "span", _key: "s2", text: "Mezcal and seasonal drinks are available. On select evenings, local musicians join the fire. On others, it is simply the crackling wood, the stars, and good conversation. No agenda, no schedule — just the oldest form of human gathering." }],
        markDefs: [],
      },
    ],
    highlights: [
      "Nightly at dusk in the outdoor gathering space",
      "Mezcal and seasonal drinks available",
      "Live music on select evenings",
      "Open to all guests",
      "Dark sky stargazing",
    ],
    faqs: [
      { _key: "faq1", question: "Is the bonfire every night?", answer: "Yes — weather permitting, we light the fire every evening at dusk." },
      { _key: "faq2", question: "Do I need to book in advance?", answer: "No reservation needed — the bonfire is open to all guests staying at Attesi." },
      { _key: "faq3", question: "Is food served at the bonfire?", answer: "Light snacks are available. For a full meal, we recommend dining at Sabata Restaurant before joining the fire." },
    ],
    seoTitle: "Evening Bonfire — Attesi Mexico",
    seoDescription: "Gather around the nightly bonfire at Attesi Mexico for mezcal, music, stargazing, and real conversation.",
    order: 8,
  },
  {
    _id: "experience-yoga-and-meditation",
    _type: "experience",
    title: "Yoga and Meditation",
    slug: { _type: "slug", current: "yoga-and-meditation" },
    tagline: "Morning · Movement · Stillness",
    category: "wellness",
    cardDescription:
      "Start your morning with guided yoga and meditation in the open-air pavilion, overlooking the mountains and gardens.",
    about: [
      {
        _type: "block", _key: "ym1", style: "normal",
        children: [{ _type: "span", _key: "s1", text: "The open-air yoga pavilion at Attesi sits at the edge of the property, framed by mountain views and the sounds of the surrounding forest. Morning sessions begin at sunrise and are led by our resident teacher, who draws on Hatha, Vinyasa, and Yin traditions depending on the day and the group." }],
        markDefs: [],
      },
      {
        _type: "block", _key: "ym2", style: "normal",
        children: [{ _type: "span", _key: "s2", text: "Each session closes with a 20-minute guided meditation — silence, breath, and the mountain air. Mats, props, and tea are provided. Private sessions and custom retreat programming are available for groups." }],
        markDefs: [],
      },
    ],
    highlights: [
      "Daily sunrise sessions in the open-air pavilion",
      "Hatha, Vinyasa, and Yin styles",
      "20-minute guided meditation included",
      "All levels welcome",
      "Mats and props provided",
      "Private sessions available",
    ],
    faqs: [
      { _key: "faq1", question: "Do I need yoga experience?", answer: "No — our teacher adapts every class to the group. Complete beginners are always welcome." },
      { _key: "faq2", question: "What time do sessions start?", answer: "Morning sessions begin at sunrise (approximately 6:30–7:00am depending on the season). Evening Yin sessions are available on request." },
      { _key: "faq3", question: "Can I book a private session?", answer: "Yes — private and semi-private sessions are available for individuals, couples, and groups. Please inquire when booking your stay." },
    ],
    seoTitle: "Yoga and Meditation — Attesi Mexico",
    seoDescription: "Morning yoga and guided meditation in the open-air mountain pavilion at Attesi Mexico. All levels welcome.",
    order: 9,
  },
  {
    _id: "experience-breathwork",
    _type: "experience",
    title: "Breathwork",
    slug: { _type: "slug", current: "breathwork" },
    tagline: "Breath · Release · Clarity",
    category: "wellness",
    cardDescription:
      "A guided breathwork session using conscious connected breathing to release tension, access deeper states, and reset the nervous system.",
    about: [
      {
        _type: "block", _key: "bw1", style: "normal",
        children: [{ _type: "span", _key: "s1", text: "Breathwork at Attesi is facilitated by a trained practitioner using conscious connected breathing — a technique that uses the breath as a direct tool to shift the state of the nervous system. Sessions can produce profound relaxation, emotional release, heightened clarity, and in some cases, non-ordinary states of consciousness." }],
        markDefs: [],
      },
      {
        _type: "block", _key: "bw2", style: "normal",
        children: [{ _type: "span", _key: "s2", text: "Sessions are held in a comfortable, supported setting with music, blankets, and eye masks provided. The facilitator guides participants through the breathing pattern and offers grounding support throughout. Integration time and tea are included after the session. This is one of the most transformative experiences we offer." }],
        markDefs: [],
      },
    ],
    highlights: [
      "Facilitated by a trained breathwork practitioner",
      "Conscious connected breathing technique",
      "Music, blankets, and eye masks provided",
      "Integration time and tea included",
      "Individual and group sessions available",
      "Can be combined with cold plunge",
    ],
    faqs: [
      { _key: "faq1", question: "Is breathwork safe?", answer: "For most healthy adults, yes. It is not recommended for those with epilepsy, cardiovascular conditions, severe anxiety disorders, or during pregnancy. Please consult us in advance." },
      { _key: "faq2", question: "What should I expect to feel?", answer: "Experiences vary widely — tingling, warmth, emotional release, deep relaxation, and sometimes vivid imagery are all common. Your facilitator will prepare you fully beforehand." },
      { _key: "faq3", question: "How long is a session?", answer: "Approximately 90 minutes including preparation, the breathing journey (45–60 min), and integration." },
    ],
    seoTitle: "Breathwork Sessions — Attesi Mexico",
    seoDescription: "Guided breathwork sessions at Attesi Mexico using conscious connected breathing for deep relaxation and nervous system reset.",
    order: 10,
  },
];

async function seed() {
  const mutations = experiences.map((doc) => ({
    createOrReplace: doc,
  }));

  const url = `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${DATASET}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("❌ Seed failed:", JSON.stringify(data, null, 2));
    process.exit(1);
  }

  const results = data.results || [];
  const created = results.filter((r) => r.operation === "create").length;
  const replaced = results.filter((r) => r.operation === "update").length;

  console.log(`✅ Seeded ${experiences.length} experiences:`);
  console.log(`   ${created} created, ${replaced} updated`);
  experiences.forEach((e) => console.log(`   • ${e.title}`));
}

seed().catch((err) => {
  console.error("❌ Unexpected error:", err);
  process.exit(1);
});
