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
    excerpt: 'In a world that constantly demands more speed, finding a place to pause becomes essential. Discover how the rhythms of nature at Attesi encourage a return to slow, intentional living.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'At Attesi, the day doesn\'t begin with an alarm clock, but with the subtle shift of light over the mountains and the sounds of the forest waking up. This is the essence of slow living—a conscious choice to align our internal rhythms with the natural world around us.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Reconnecting with Time' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'When you arrive in Villa de Allende, the frantic pace of city life begins to melt away. Slow living isn\'t about doing nothing; it\'s about doing things with full attention. Whether it\'s savoring a cup of coffee made from locally sourced beans, taking a mindful walk through the permaculture gardens, or simply watching the fog roll over the valley, every moment becomes an opportunity for presence.' }]
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [{ _type: 'span', text: '"Nature does not hurry, yet everything is accomplished." — Lao Tzu' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'We invite our guests to leave their watches behind and let the sun dictate the flow of the day. This simple shift in perspective can have profound effects on our nervous system, reducing stress and opening up space for genuine relaxation and creativity.' }]
      }
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
    excerpt: 'How we blend the strict traditions of Kashrut with the vibrant, fresh ingredients of the Mexican highlands to create an unforgettable dining experience.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Maintaining a fully Kosher kitchen in the middle of the Mexican mountains presents unique challenges, but also incredible opportunities for culinary innovation. At Attesi, we believe that Kosher food should be a celebration of the land\'s bounty.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Farm to Table, Strictly Kosher' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Our approach to dining starts in our own permaculture gardens. We harvest fresh herbs, vegetables, and fruits daily. By combining these hyper-local ingredients with traditional Kosher practices, our chefs create meals that are both spiritually uplifting and deeply nourishing for the body.' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'From slow-cooked Shabbat stews that fill the dining hall with comforting aromas to fresh, vibrant salads that showcase the best of Mexican produce, every meal is crafted with intention. We work closely with local farmers to ensure our supply chain meets the highest standards of both Kashrut and sustainability.' }]
      }
    ],
    featured: false
  },
  {
    _type: 'blogPost',
    title: 'The Healing Power of the Temazcal',
    slug: { _type: 'slug', current: 'healing-power-of-temazcal' },
    publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    category: 'wellness',
    author: 'Attesi Wellness Team',
    excerpt: 'Explore the ancient Mesoamerican tradition of the Temazcal sweat lodge and how this purifying ceremony integrates into the wellness journey at Attesi.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The Temazcal is more than just a sweat lodge; it is a profound ceremony of purification and rebirth. Rooted deeply in ancient Mesoamerican traditions, this experience offers a unique way to cleanse the physical body and clear the mind.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'What to Expect' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Inside the dome-shaped structure, heated volcanic rocks are placed in the center. As water infused with medicinal herbs is poured over the stones, thick, fragrant steam fills the space. The darkness and the heat create an environment that encourages deep introspection and release.' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'At Attesi, we honor this tradition while ensuring it complements our holistic wellness philosophy. Guests emerge from the Temazcal feeling lighter, more grounded, and deeply connected to the earth.' }]
      }
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
    excerpt: 'Learn about the principles of permaculture that guide the development of the Attesi community and how we are restoring the land.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'When Attesi was first conceived, the land was calling out for restoration. We chose permaculture not just as an agricultural method, but as a design philosophy for our entire community.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Observing and Interacting' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The first principle of permaculture is observation. Before building or planting, we spent time understanding the flow of water, the patterns of the wind, and the existing ecosystems. This allowed us to design our facilities and gardens in a way that harmonizes with the environment.' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Today, our water catchment systems, composting practices, and diverse planting strategies are turning once-depleted soil into a thriving, self-sustaining ecosystem. It is a living example of how human habitation can actually heal the earth.' }]
      }
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
    excerpt: 'Every year, millions of Monarch butterflies make their incredible journey to the forests near Attesi. Here is everything you need to know about witnessing this natural wonder.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'One of the most magical experiences available to guests at Attesi is the proximity to the Monarch Butterfly Biosphere Reserve. Each winter, the oyamel fir forests are transformed into a sea of orange and black as millions of butterflies arrive from Canada and the US.' }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'When to Visit' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The best time to witness the migration is between late November and early March. During these months, the butterflies cluster together on the branches to stay warm. On sunny days, they take flight, creating a breathtaking spectacle that looks like a living, breathing stained glass window.' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'We organize guided excursions to the sanctuaries, ensuring that our visits are respectful of the delicate habitat while providing our guests with an unforgettable encounter with one of nature\'s greatest phenomena.' }]
      }
    ],
    featured: true
  }
];

async function seed() {
  console.log('Starting to seed blog posts...');
  for (const post of posts) {
    try {
      const result = await client.create(post);
      console.log(`Created post: ${post.title} (${result._id})`);
    } catch (err) {
      console.error(`Failed to create post ${post.title}:`, err.message);
    }
  }
  console.log('Seeding complete!');
}

seed();
