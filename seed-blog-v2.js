const { createClient } = require('@sanity/client');
const client = createClient({
  projectId: 'jki68fc0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk5PJj8hO7qNaLRUc5d9UBWNAWYefVNvQ0B1c537itYqjAr1jJutzyu1sSn7zfzWL8s3TYeHVtQgZvHI8JBE0wFDqdFsPErLLWAEFEx3h5JlnT4jr8w13k5gV5E0mAEAdT4vjwa8sEmGn0aPmTpq6RtO9hAJOOvV6WaOcepE2V8iiexH3G6H'
});

const posts = [
  {
    _type: 'blogPost',
    title: 'The Art of Slow Living in the Mountains of Mexico',
    slug: { _type: 'slug', current: 'art-of-slow-living-mountains-mexico' },
    publishedAt: new Date().toISOString(),
    category: 'wellness',
    author: 'Attesi Community',
    readTimeMinutes: 6,
    excerpt: 'In a world that constantly demands more speed, finding a place to pause becomes essential. Discover how the rhythms of nature at Attesi encourage a return to slow, intentional living.',
    bodyTop: [
      { _type: 'block', style: 'normal', _key: 'sl1', children: [{ _type: 'span', _key: 'ss1', text: "At Attesi, the day doesn't begin with an alarm clock, but with the subtle shift of light over the mountains and the sounds of the forest waking up. This is the essence of slow living — a conscious choice to align our internal rhythms with the natural world around us." }] },
      { _type: 'block', style: 'h2', _key: 'sl2', children: [{ _type: 'span', _key: 'ss2', text: 'Reconnecting with Time' }] },
      { _type: 'block', style: 'normal', _key: 'sl3', children: [{ _type: 'span', _key: 'ss3', text: "When you arrive in Villa de Allende, the frantic pace of city life begins to melt away. Slow living isn't about doing nothing; it's about doing things with full attention. Whether it's savoring a cup of coffee made from locally sourced beans, taking a mindful walk through the permaculture gardens, or simply watching the fog roll over the valley, every moment becomes an opportunity for presence." }] },
      { _type: 'block', style: 'blockquote', _key: 'sl4', children: [{ _type: 'span', _key: 'ss4', text: '"Nature does not hurry, yet everything is accomplished." — Lao Tzu' }] },
      { _type: 'block', style: 'h2', _key: 'sl5', children: [{ _type: 'span', _key: 'ss5', text: 'The Daily Rhythm at Attesi' }] },
      { _type: 'block', style: 'normal', _key: 'sl6', children: [{ _type: 'span', _key: 'ss6', text: "We invite our guests to leave their watches behind and let the sun dictate the flow of the day. Morning yoga by the lake, communal Shabbat meals, afternoon hikes through the cloud forest — each activity is designed to deepen your connection to yourself and the land." }] },
      { _type: 'block', style: 'h2', _key: 'sl7', children: [{ _type: 'span', _key: 'ss7', text: 'Wellness Through Presence' }] },
      { _type: 'block', style: 'normal', _key: 'sl8', children: [{ _type: 'span', _key: 'ss8', text: "Research consistently shows that spending time in nature reduces cortisol levels and improves mental clarity. At Attesi, we've designed every aspect of the retreat to amplify this effect — from the layout of the cabins to the menu of wellness experiences available." }] }
    ],
    faqs: [
      { _key: 'fsl1', question: 'What does a typical day at Attesi look like?', answer: 'Days at Attesi are intentionally unstructured. Guests are invited to join morning yoga, explore the permaculture gardens, take guided hikes, or simply rest. Communal meals anchor the day, but the pace is entirely your own.' },
      { _key: 'fsl2', question: 'Is Attesi suitable for families with children?', answer: 'Absolutely. The natural setting and slow pace are ideal for families. Children thrive in the open spaces, gardens, and gentle activities. We recommend contacting us to discuss age-appropriate programming.' },
      { _key: 'fsl3', question: 'How far is Attesi from Mexico City?', answer: 'Attesi is approximately 90 minutes from Mexico City by car, making it an ideal weekend or week-long escape from urban life.' }
    ],
    bodyBottom: [
      { _type: 'block', style: 'h2', _key: 'sl9', children: [{ _type: 'span', _key: 'ss9', text: 'Plan Your Slow Living Retreat' }] },
      { _type: 'block', style: 'normal', _key: 'sl10', children: [{ _type: 'span', _key: 'ss10', text: "Whether you're seeking a weekend of rest or a longer immersive stay, Attesi offers a range of lodging and experience packages tailored to your needs. Reach out to our team to begin planning your journey into intentional living." }] }
    ],
    featured: true
  },
  {
    _type: 'blogPost',
    title: 'Kosher Dining in the Wild: A Culinary Journey',
    slug: { _type: 'slug', current: 'kosher-dining-in-the-wild' },
    publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    category: 'dining',
    author: 'Attesi Kitchen',
    readTimeMinutes: 5,
    excerpt: 'How we blend the strict traditions of Kashrut with the vibrant, fresh ingredients of the Mexican highlands to create an unforgettable dining experience.',
    bodyTop: [
      { _type: 'block', style: 'normal', _key: 'di1', children: [{ _type: 'span', _key: 'ds1', text: "Maintaining a fully Kosher kitchen in the middle of the Mexican mountains presents unique challenges, but also incredible opportunities for culinary innovation. At Attesi, we believe that Kosher food should be a celebration of the land's bounty." }] },
      { _type: 'block', style: 'h2', _key: 'di2', children: [{ _type: 'span', _key: 'ds2', text: 'Farm to Table, Strictly Kosher' }] },
      { _type: 'block', style: 'normal', _key: 'di3', children: [{ _type: 'span', _key: 'ds3', text: "Our approach to dining starts in our own permaculture gardens. We harvest fresh herbs, vegetables, and fruits daily. By combining these hyper-local ingredients with traditional Kosher practices, our chefs create meals that are both spiritually uplifting and deeply nourishing for the body." }] },
      { _type: 'block', style: 'h2', _key: 'di4', children: [{ _type: 'span', _key: 'ds4', text: 'Shabbat at the Table' }] },
      { _type: 'block', style: 'normal', _key: 'di5', children: [{ _type: 'span', _key: 'ds5', text: "From slow-cooked Shabbat stews that fill the dining hall with comforting aromas to fresh, vibrant salads that showcase the best of Mexican produce, every meal is crafted with intention. We work closely with local farmers to ensure our supply chain meets the highest standards of both Kashrut and sustainability." }] },
      { _type: 'block', style: 'h2', _key: 'di6', children: [{ _type: 'span', _key: 'ds6', text: 'Our Certification' }] },
      { _type: 'block', style: 'normal', _key: 'di7', children: [{ _type: 'span', _key: 'ds7', text: "All food prepared at Attesi is certified Kosher under strict rabbinical supervision. Guests can dine with complete confidence that every ingredient, preparation method, and serving vessel meets the highest standards of Kashrut observance." }] }
    ],
    faqs: [
      { _key: 'fdi1', question: 'Is all food at Attesi Kosher?', answer: 'Yes. Every meal prepared and served at Attesi is certified Kosher under rabbinical supervision. We maintain fully separate meat and dairy kitchens and use only certified Kosher ingredients.' },
      { _key: 'fdi2', question: 'Can you accommodate dietary restrictions beyond Kosher?', answer: 'Absolutely. Our kitchen team is experienced in accommodating allergies, vegan and vegetarian diets, and other dietary needs. Please inform us in advance so we can prepare accordingly.' },
      { _key: 'fdi3', question: 'Are Shabbat meals included in the stay?', answer: 'Yes. Friday night Shabbat dinner and Saturday lunch are communal meals included for all guests. They are among the most beloved experiences at Attesi.' }
    ],
    bodyBottom: [
      { _type: 'block', style: 'normal', _key: 'di8', children: [{ _type: 'span', _key: 'ds8', text: "Food at Attesi is more than sustenance — it is a central part of the communal experience. We invite you to come hungry, curious, and open to the flavors of Mexico reimagined through the lens of Kosher tradition." }] }
    ],
    featured: false
  },
  {
    _type: 'blogPost',
    title: 'The Temazcal: Ancient Ceremony, Modern Healing',
    slug: { _type: 'slug', current: 'temazcal-ancient-ceremony-modern-healing' },
    publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    category: 'wellness',
    author: 'Attesi Wellness Team',
    readTimeMinutes: 7,
    excerpt: 'Step inside the Temazcal — an ancient Mesoamerican sweat lodge ceremony — and discover how this powerful ritual can cleanse body, mind, and spirit.',
    bodyTop: [
      { _type: 'block', style: 'normal', _key: 'te1', children: [{ _type: 'span', _key: 'ts1', text: "The Temazcal is more than just a sweat lodge; it is a profound ceremony of purification and rebirth. Rooted deeply in ancient Mesoamerican traditions, this experience offers a unique way to cleanse the physical body and clear the mind." }] },
      { _type: 'block', style: 'h2', _key: 'te2', children: [{ _type: 'span', _key: 'ts2', text: 'What to Expect' }] },
      { _type: 'block', style: 'normal', _key: 'te3', children: [{ _type: 'span', _key: 'ts3', text: "Inside the dome-shaped structure, heated volcanic rocks are placed in the center. As water infused with medicinal herbs is poured over the stones, thick, fragrant steam fills the space. The darkness and the heat create an environment that encourages deep introspection and release." }] },
      { _type: 'block', style: 'h2', _key: 'te4', children: [{ _type: 'span', _key: 'ts4', text: 'The Ceremony at Attesi' }] },
      { _type: 'block', style: 'normal', _key: 'te5', children: [{ _type: 'span', _key: 'ts5', text: "At Attesi, we honor this tradition while ensuring it complements our holistic wellness philosophy. Our ceremonies are led by experienced guides who hold the space with care and intention. Guests emerge from the Temazcal feeling lighter, more grounded, and deeply connected to the earth." }] },
      { _type: 'block', style: 'h2', _key: 'te6', children: [{ _type: 'span', _key: 'ts6', text: 'Physical and Spiritual Benefits' }] },
      { _type: 'block', style: 'normal', _key: 'te7', children: [{ _type: 'span', _key: 'ts7', text: "The intense heat promotes deep sweating, which helps eliminate toxins and improve circulation. Many participants report profound emotional releases, vivid dreams, and a lasting sense of calm and clarity in the days following the ceremony." }] }
    ],
    faqs: [
      { _key: 'fte1', question: 'Is the Temazcal safe for everyone?', answer: 'The Temazcal is generally safe for healthy adults. However, it is not recommended for pregnant women, people with heart conditions, or those with certain medical conditions. Please consult with our wellness team before booking.' },
      { _key: 'fte2', question: 'How long does a Temazcal ceremony last?', answer: 'A full ceremony typically lasts between 90 minutes and 2 hours, including preparation and integration time afterward.' },
      { _key: 'fte3', question: 'What should I bring to the Temazcal?', answer: 'We recommend wearing a light bathing suit or shorts. We provide towels, water, and any ceremonial materials needed. Avoid eating a heavy meal for at least 2 hours beforehand.' }
    ],
    bodyBottom: [
      { _type: 'block', style: 'normal', _key: 'te8', children: [{ _type: 'span', _key: 'ts8', text: "The Temazcal is available as an add-on experience for all guests. We recommend booking in advance as spaces are limited to ensure an intimate, meaningful ceremony for each group." }] }
    ],
    featured: false
  },
  {
    _type: 'blogPost',
    title: 'Permaculture: Working with Nature, Not Against It',
    slug: { _type: 'slug', current: 'permaculture-working-with-nature' },
    publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    category: 'sustainability',
    author: 'Attesi Founders',
    readTimeMinutes: 8,
    excerpt: 'Learn about the principles of permaculture that guide the development of the Attesi community and how we are restoring the land.',
    bodyTop: [
      { _type: 'block', style: 'normal', _key: 'pe1', children: [{ _type: 'span', _key: 'ps1', text: "When Attesi was first conceived, the land was calling out for restoration. We chose permaculture not just as an agricultural method, but as a design philosophy for our entire community." }] },
      { _type: 'block', style: 'h2', _key: 'pe2', children: [{ _type: 'span', _key: 'ps2', text: 'Observing and Interacting' }] },
      { _type: 'block', style: 'normal', _key: 'pe3', children: [{ _type: 'span', _key: 'ps3', text: "The first principle of permaculture is observation. Before building or planting, we spent time understanding the flow of water, the patterns of the wind, and the existing ecosystems. This allowed us to design our facilities and gardens in a way that harmonizes with the environment." }] },
      { _type: 'block', style: 'h2', _key: 'pe4', children: [{ _type: 'span', _key: 'ps4', text: 'Healing the Land' }] },
      { _type: 'block', style: 'normal', _key: 'pe5', children: [{ _type: 'span', _key: 'ps5', text: "Today, our water catchment systems, composting practices, and diverse planting strategies are turning once-depleted soil into a thriving, self-sustaining ecosystem. It is a living example of how human habitation can actually heal the earth." }] },
      { _type: 'block', style: 'h2', _key: 'pe6', children: [{ _type: 'span', _key: 'ps6', text: 'Sustainable Building' }] },
      { _type: 'block', style: 'normal', _key: 'pe7', children: [{ _type: 'span', _key: 'ps7', text: "Our cabins and communal structures are built using natural and reclaimed materials wherever possible. Adobe walls provide natural insulation, reducing energy needs. Rainwater collection systems supply our gardens, and solar panels power our facilities." }] }
    ],
    faqs: [
      { _key: 'fpe1', question: 'Can guests participate in the permaculture gardens?', answer: "Yes! We offer guided garden tours and hands-on workshops where guests can learn about composting, companion planting, and water harvesting. It's one of our most popular activities." },
      { _key: 'fpe2', question: 'How does Attesi manage waste?', answer: 'We operate a comprehensive composting program, minimize single-use plastics, and work with local recycling partners. Our goal is to send zero waste to landfill by 2026.' }
    ],
    bodyBottom: [
      { _type: 'block', style: 'normal', _key: 'pe8', children: [{ _type: 'span', _key: 'ps8', text: "Permaculture at Attesi is an ongoing journey. We continue to learn, adapt, and improve with each season. We invite guests to be part of this living experiment in sustainable community building." }] }
    ],
    featured: false
  },
  {
    _type: 'blogPost',
    title: 'A Guide to the Monarch Butterfly Migration',
    slug: { _type: 'slug', current: 'guide-to-monarch-butterfly-migration' },
    publishedAt: new Date(Date.now() - 86400000 * 15).toISOString(),
    category: 'nature',
    author: 'Attesi Guides',
    readTimeMinutes: 6,
    excerpt: 'Every year, millions of Monarch butterflies make their incredible journey to the forests near Attesi. Here is everything you need to know about witnessing this natural wonder.',
    bodyTop: [
      { _type: 'block', style: 'normal', _key: 'mo1', children: [{ _type: 'span', _key: 'ms1', text: "One of the most magical experiences available to guests at Attesi is the proximity to the Monarch Butterfly Biosphere Reserve. Each winter, the oyamel fir forests are transformed into a sea of orange and black as millions of butterflies arrive from Canada and the US." }] },
      { _type: 'block', style: 'h2', _key: 'mo2', children: [{ _type: 'span', _key: 'ms2', text: 'When to Visit' }] },
      { _type: 'block', style: 'normal', _key: 'mo3', children: [{ _type: 'span', _key: 'ms3', text: "The best time to witness the migration is between late November and early March. During these months, the butterflies cluster together on the branches to stay warm. On sunny days, they take flight, creating a breathtaking spectacle that looks like a living, breathing stained glass window." }] },
      { _type: 'block', style: 'h2', _key: 'mo4', children: [{ _type: 'span', _key: 'ms4', text: 'Our Guided Excursions' }] },
      { _type: 'block', style: 'normal', _key: 'mo5', children: [{ _type: 'span', _key: 'ms5', text: "We organize guided excursions to the sanctuaries, ensuring that our visits are respectful of the delicate habitat while providing our guests with an unforgettable encounter with one of nature's greatest phenomena. Our guides are trained naturalists who can share the science and wonder of this extraordinary migration." }] },
      { _type: 'block', style: 'h2', _key: 'mo6', children: [{ _type: 'span', _key: 'ms6', text: 'Conservation and Respect' }] },
      { _type: 'block', style: 'normal', _key: 'mo7', children: [{ _type: 'span', _key: 'ms7', text: "The Monarch butterfly is a threatened species. At Attesi, we are committed to conservation practices that protect their habitat. A portion of every excursion fee goes directly to local conservation organizations working to preserve the oyamel forests." }] }
    ],
    faqs: [
      { _key: 'fmo1', question: 'How far is the Monarch Butterfly Reserve from Attesi?', answer: 'The Monarch Butterfly Biosphere Reserve is approximately 45 minutes from Attesi by car. We organize group excursions with transportation included.' },
      { _key: 'fmo2', question: 'What should I wear for the excursion?', answer: 'Comfortable walking shoes are essential as the path to the butterfly colonies involves a moderate hike. Layers are recommended as temperatures in the forest can vary significantly.' },
      { _key: 'fmo3', question: 'Can I visit the reserve independently?', answer: 'Yes, the reserve is open to the public. However, we strongly recommend joining our guided excursion to get the most out of the experience and to ensure your visit is conducted in an environmentally responsible way.' }
    ],
    bodyBottom: [
      { _type: 'block', style: 'normal', _key: 'mo8', children: [{ _type: 'span', _key: 'ms8', text: "Witnessing the Monarch migration is a humbling reminder of the extraordinary resilience of nature. It is one of the experiences that makes Attesi truly unique — a place where ancient traditions and natural wonders converge." }] }
    ],
    featured: true
  }
];

async function seed() {
  console.log('Starting to seed/update blog posts...');
  for (const post of posts) {
    try {
      const existing = await client.fetch(
        `*[_type == "blogPost" && slug.current == $slug][0]._id`,
        { slug: post.slug.current }
      );
      if (existing) {
        const result = await client.patch(existing).set(post).commit();
        console.log(`Updated post: ${post.title} (${result._id})`);
      } else {
        const result = await client.create(post);
        console.log(`Created post: ${post.title} (${result._id})`);
      }
    } catch (err) {
      console.error(`Failed to process post "${post.title}":`, err.message);
    }
  }
  console.log('Seeding complete!');
}

seed();
