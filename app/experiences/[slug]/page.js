import "../../experiences/experiences-detail.css";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ClientAnimations from "../../components/ClientAnimations";
import FaqAccordion from "../../components/FaqAccordion";
import { sanityFetch } from "../../../sanity/lib/live";
import { client } from "../../../sanity/lib/client";
import {
  experienceBySlugQuery,
  experienceSlugsQuery,
  siteSettingsQuery,
} from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

/* ─── Static params for ISR ──────────────────────────────────────────────── */
export async function generateStaticParams() {
  try {
    const { data: slugs } = await sanityFetch({ query: experienceSlugsQuery });
    return (slugs || []).map((s) => ({ slug: s.slug }));
  } catch {
    // Return known slugs as fallback so pages still build
    return [
      "migrating-monarchs",
      "temazcal-ceremony",
      "guided-mountain-hikes",
      "farm-to-table",
      "natural-spring-cold-plunge",
      "apiary",
      "farm-tour",
      "bonfire",
      "yoga-and-meditation",
      "breathwork",
    ].map((slug) => ({ slug }));
  }
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const exp = await fetchExperience(slug);
  if (!exp) return { title: "Experience — Attesi Mexico" };
  return {
    title: exp.seoTitle || `${exp.title} — Attesi Mexico`,
    description:
      exp.seoDescription ||
      exp.cardDescription ||
      `Discover the ${exp.title} experience at Attesi Mexico.`,
  };
}

/* ─── Hardcoded fallback content per slug ────────────────────────────────── */
const FALLBACK_CONTENT = {
  "migrating-monarchs": {
    title: "Migrating Monarchs",
    tagline: "Seasonal · Nov – Feb",
    category: "nature",
    cardDescription:
      "Witness one of nature's most remarkable phenomena as thousands of monarch butterflies gather in their winter sanctuary.",
    about: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "The Migrating Monarch experience at Attesi offers a rare opportunity to witness one of nature's most remarkable phenomena. Each year, from late November through February, monarch butterflies complete their epic journey from Canada and the northern United States to the forests of central Mexico, gathering by the thousands in their winter sanctuary.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "During this seasonal experience, guests can observe vast clusters of monarchs resting among the trees, filling the air with movement and color as they conserve energy before the next phase of their migration. Seeing so many monarchs together in one place is both humbling and unforgettable — a once-in-a-lifetime encounter with the rhythms, resilience, and beauty of the natural world.",
          },
        ],
      },
    ],
    highlights: [
      "Seasonal experience: November through February",
      "Guided by knowledgeable naturalists",
      "Witness thousands of monarchs in their winter sanctuary",
      "Photography opportunities in natural forest setting",
    ],
    faqs: [
      {
        question: "When is the best time to see the monarchs?",
        answer:
          "The monarchs are present from late November through February. Peak viewing is typically in December and January when the colonies are at their largest.",
      },
      {
        question: "How long does the experience take?",
        answer:
          "The guided monarch experience typically lasts 2–3 hours, including travel to the sanctuary and time to observe and photograph the butterflies.",
      },
      {
        question: "Is this experience suitable for children?",
        answer:
          "Yes, the monarch experience is suitable for all ages. Children are often especially captivated by the sight of so many butterflies in one place.",
      },
    ],
  },
  "temazcal-ceremony": {
    title: "Temazcal Ceremony",
    tagline: "Wellness · Year-round",
    category: "wellness",
    cardDescription:
      "An ancient ritual of heat, steam, and guided intention — a powerful environment for release, healing, and inner renewal.",
    about: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "The Temazcal experience centers around the careful heating of volcanic stones, which are placed at the heart of the lodge. As the ceremony unfolds, a warm, brewed mixture of herbs is gently poured over the heated rocks, creating waves of steam and rising heat that fill the space. This process is repeated in stages, building intensity slowly and intentionally.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "The combination of heat, steam, and aromatic herbs encourages deep breathing, physical release, and mental clarity. The experience promotes relaxation, grounding, and reflection, helping participants let go of tension and reconnect with themselves. Within the enclosed, elemental space, the Temazcal becomes a powerful environment for renewal, presence, and inner awareness.",
          },
        ],
      },
    ],
    highlights: [
      "Ancient Mesoamerican healing ritual",
      "Volcanic stones and aromatic herbal steam",
      "Guided by experienced ceremony leaders",
      "Promotes deep relaxation and inner clarity",
      "Available year-round",
    ],
    faqs: [
      {
        question: "What should I wear to a Temazcal?",
        answer:
          "Light, comfortable clothing that you don't mind getting wet. A swimsuit or shorts and a tank top are ideal. We provide towels.",
      },
      {
        question: "How long does the ceremony last?",
        answer:
          "A typical Temazcal ceremony lasts 1.5 to 2 hours, conducted in four rounds of increasing heat and intention.",
      },
      {
        question: "Are there any health restrictions?",
        answer:
          "The Temazcal involves significant heat. We recommend consulting your doctor if you have heart conditions, high blood pressure, or are pregnant. Please inform your guide of any health concerns beforehand.",
      },
    ],
  },
  "guided-mountain-hikes": {
    title: "Guided Mountain Hikes",
    tagline: "Adventure · Year-round",
    category: "adventure",
    cardDescription:
      "Led by knowledgeable guides through peaceful forest trails and scenic outlooks, opening up to spectacular panoramic views of the surrounding mountain ranges.",
    about: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Experience the mountains up close with our guided mountain hikes at Attesi. Led by knowledgeable and experienced guides, each hike takes you through peaceful forest trails and scenic outlooks, opening up to some of the most spectacular views of the surrounding mountain ranges.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Along the way, you'll have time to pause, take in the landscape, and truly connect with nature. From quiet moments among the trees to expansive panoramic vistas, these hikes offer an unforgettable way to explore the beauty and majesty that surrounds Attesi.",
          },
        ],
      },
    ],
    highlights: [
      "Expert local guides who know the terrain",
      "Panoramic views of the surrounding mountain ranges",
      "Peaceful forest trails through diverse ecosystems",
      "Suitable for various fitness levels",
      "Available year-round",
    ],
    faqs: [
      {
        question: "What fitness level is required?",
        answer:
          "We offer hikes for various fitness levels, from gentle walks to more challenging ascents. Let us know your preference and we'll match you with the right route.",
      },
      {
        question: "What should I bring?",
        answer:
          "Comfortable hiking shoes, water, sunscreen, and a light jacket for higher elevations. We recommend bringing a camera — the views are worth capturing.",
      },
      {
        question: "How long are the hikes?",
        answer:
          "Hikes range from 2 to 5 hours depending on the route and group preference. We can customize the duration to fit your schedule.",
      },
    ],
  },
  "farm-to-table": {
    title: "Farm to Table",
    tagline: "Food & Farm · Year-round",
    category: "food",
    cardDescription:
      "Pick fresh vegetables straight from our garden and bring them into the kitchen to create a delicious, nourishing meal. Connection to food, nature, and community all in one.",
    about: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Experience true farm-to-table at Attesi. Pick fresh vegetables straight from our garden and bring them into the kitchen to create a delicious, nourishing meal. It's connection to food, nature, and community all in one.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Our farm produces a wide variety of seasonal vegetables, herbs, and fruits — all grown using regenerative practices that prioritize soil health and biodiversity. The farm-to-table experience is both educational and deeply satisfying, connecting you to the full cycle of food from seed to plate.",
          },
        ],
      },
    ],
    highlights: [
      "Harvest fresh produce directly from our regenerative farm",
      "Guided cooking experience with our kitchen team",
      "Learn about seasonal, sustainable growing practices",
      "Share a meal with fellow guests and community",
      "Available year-round",
    ],
    faqs: [
      {
        question: "Do I need cooking experience?",
        answer:
          "Not at all. The farm-to-table experience is designed for everyone, from beginners to experienced cooks. Our team guides you through every step.",
      },
      {
        question: "What kind of dishes do we make?",
        answer:
          "Dishes vary by season and what's growing in the garden. Expect fresh salads, roasted vegetables, soups, and other simple, nourishing preparations that let the ingredients shine.",
      },
      {
        question: "How many people participate at once?",
        answer:
          "The experience works best in small groups of 4–12 people, allowing for a personal, hands-on experience in the kitchen.",
      },
    ],
  },
  "natural-spring-cold-plunge": {
    title: "Natural Spring Cold Plunge",
    tagline: "Wellness · Year-round",
    category: "wellness",
    cardDescription:
      "Immerse yourself in the pure, cold waters of our natural spring. A grounding, invigorating practice that awakens the body and sharpens the mind.",
    about: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Attesi is home to a natural spring that feeds a cold plunge pool of exceptional purity. The practice of cold immersion has been used for centuries to invigorate the body, sharpen the mind, and cultivate resilience.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Surrounded by nature and guided by our wellness team, the cold plunge experience is both challenging and deeply rewarding. Many guests find it to be one of the most memorable moments of their stay — a moment of pure aliveness in the heart of the land.",
          },
        ],
      },
    ],
    highlights: [
      "Pure natural spring water",
      "Guided breathwork to prepare for the plunge",
      "Known to reduce inflammation and boost circulation",
      "Pairs beautifully with the Temazcal ceremony",
      "Available year-round",
    ],
    faqs: [
      {
        question: "How cold is the water?",
        answer:
          "The natural spring water is typically between 12–16°C (54–61°F), depending on the season. Our guides will help you prepare with breathwork before entering.",
      },
      {
        question: "Is it safe for everyone?",
        answer:
          "Cold plunging is generally safe for healthy adults. We recommend consulting your doctor if you have cardiovascular conditions. Our guides are trained in cold water safety.",
      },
      {
        question: "How long do I stay in?",
        answer:
          "We typically guide guests through 2–3 minute immersions with breathing support. You are always in control of your own experience.",
      },
    ],
  },
  apiary: {
    title: "Apiary",
    tagline: "Nature & Farm · Year-round",
    category: "nature",
    cardDescription:
      "Step into the world of our rescued bee colonies. Learn about sustainable beekeeping, the role of pollinators in our ecosystem, and the art of honey production.",
    about: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Attesi has rescued millions of bees and established a thriving apiary that plays a vital role in the health of our land. Our beekeeping practices are rooted in respect for the natural behavior of bees, prioritizing their wellbeing alongside the production of exceptional honey.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "The apiary experience offers guests a rare, up-close encounter with these remarkable creatures. Led by our beekeepers, you'll learn about the complex social structure of a hive, the critical role of pollinators in our ecosystem, and the careful art of sustainable honey harvesting.",
          },
        ],
      },
    ],
    highlights: [
      "Millions of bees rescued and rehomed at Attesi",
      "Guided by experienced, passionate beekeepers",
      "Learn about hive structure and bee behavior",
      "Understand the role of pollinators in regenerative farming",
      "Taste fresh, raw honey from our hives",
    ],
    faqs: [
      {
        question: "Is it safe? Will I get stung?",
        answer:
          "We provide full protective gear for all participants. Our experienced beekeepers work calmly and carefully to minimize any disturbance to the hives. Stings are rare but possible — please inform us of any bee allergies beforehand.",
      },
      {
        question: "Do I need any prior experience with bees?",
        answer:
          "None at all. The apiary experience is designed for curious beginners. Our guides explain everything as you go.",
      },
      {
        question: "Can children participate?",
        answer:
          "Yes, with full protective gear and parental supervision. We recommend this experience for children aged 8 and above.",
      },
    ],
  },
  "farm-tour": {
    title: "Farm Tour",
    tagline: "Food & Farm · Year-round",
    category: "food",
    cardDescription:
      "Walk the land with our farm stewards. Discover how we grow, what we cultivate, and the regenerative practices that keep our soil alive and thriving.",
    about: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "The Attesi farm is a living demonstration of regenerative agriculture in practice. Our farm tour takes you through the gardens, orchards, and growing areas that produce the food we eat and share with our community.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Led by our farm stewards, you'll learn about the principles of permaculture, closed-loop composting systems, water management, and how we work with the natural rhythms of the land rather than against them. It's an eye-opening look at what sustainable food production can look like.",
          },
        ],
      },
    ],
    highlights: [
      "Guided by our experienced farm stewards",
      "Learn about permaculture and regenerative practices",
      "See our composting and water recycling systems",
      "Explore seasonal gardens, orchards, and growing areas",
      "Available year-round",
    ],
    faqs: [
      {
        question: "How long is the farm tour?",
        answer:
          "The standard farm tour lasts approximately 1.5 hours. We can extend or customize it for groups with a deeper interest in farming practices.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Absolutely. Children love seeing where food comes from. The farm tour is a wonderful educational experience for families.",
      },
      {
        question: "Can I combine the farm tour with the farm-to-table experience?",
        answer:
          "Yes — and we highly recommend it. Starting with the farm tour and then cooking with what you've seen growing is a deeply satisfying combination.",
      },
    ],
  },
  bonfire: {
    title: "Bonfire",
    tagline: "Community · Year-round",
    category: "community",
    cardDescription:
      "As the sun sets and the mountains grow quiet, the bonfire becomes a natural gathering place — for stories, music, reflection, and the simple warmth of being together.",
    about: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "As the sun sets and the mountains grow quiet, the bonfire at Attesi becomes a natural gathering place for both retreat guests and community members. Set beneath open skies and surrounded by nature, the fire invites people to slow down, share stories, sing, reflect, or simply sit together in the warmth of the moment.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Bonfires are often a meaningful part of the retreat experience, offering space for conversation, connection, and integration after a day of workshops, nature walks, or ceremonies. The fire creates an atmosphere that is both grounding and uplifting, where community naturally forms and moments feel unhurried.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Whether it's a quiet evening of reflection or a lively night of music and shared stories, the bonfire at Attesi embodies the spirit of gathering, warmth, and connection that lies at the heart of life here.",
          },
        ],
      },
    ],
    highlights: [
      "Open to all guests and community members",
      "Set beneath open skies with mountain views",
      "Space for music, stories, and quiet reflection",
      "Often paired with retreat integration evenings",
      "Available year-round",
    ],
    faqs: [
      {
        question: "Is the bonfire a scheduled event?",
        answer:
          "Bonfires are a regular part of life at Attesi, especially during retreats and on clear evenings. Ask our team about the schedule during your stay.",
      },
      {
        question: "Can I bring my own music or instruments?",
        answer:
          "Absolutely. Guitars, drums, and voices are always welcome around the fire. The bonfire is a space for authentic expression and community.",
      },
      {
        question: "What should I bring?",
        answer:
          "Just yourself. We provide seating, blankets, and warmth. A light jacket is recommended for cooler evenings.",
      },
    ],
  },
  "yoga-and-meditation": {
    title: "Yoga and Meditation",
    tagline: "Wellness · Year-round",
    category: "wellness",
    cardDescription:
      "Begin your morning in stillness or close your day with a guided practice. Our yoga and meditation sessions are designed to ground, restore, and reconnect.",
    about: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "At Attesi, yoga and meditation are not just activities — they are part of the rhythm of daily life. Our sessions are offered in open-air spaces surrounded by the natural beauty of the land, creating an environment that supports deep practice and genuine presence.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Led by experienced teachers, our classes range from gentle restorative yoga to more dynamic practices, as well as guided meditation sessions focused on breath, awareness, and stillness. Whether you are a seasoned practitioner or a complete beginner, there is a practice here for you.",
          },
        ],
      },
    ],
    highlights: [
      "Experienced, certified yoga and meditation teachers",
      "Open-air sessions in natural surroundings",
      "Suitable for all levels, from beginners to advanced",
      "Morning and evening sessions available",
      "Also offered to local community members",
    ],
    faqs: [
      {
        question: "Do I need to bring my own mat?",
        answer:
          "We provide mats, blocks, and props for all participants. You are welcome to bring your own if you prefer.",
      },
      {
        question: "What styles of yoga are offered?",
        answer:
          "We offer a variety of styles including Hatha, Vinyasa, Yin, and restorative yoga, as well as guided meditation and pranayama (breathwork). The schedule varies by retreat and season.",
      },
      {
        question: "Are sessions private or group?",
        answer:
          "We offer both group sessions as part of the retreat schedule and private one-on-one sessions by arrangement. Contact us to book a private session.",
      },
    ],
  },
  breathwork: {
    title: "Breathwork",
    tagline: "Wellness · Year-round",
    category: "wellness",
    cardDescription:
      "Guided breathwork sessions that help release tension, expand awareness, and access deeper states of clarity and presence.",
    about: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Breathwork is one of the most powerful and accessible tools for transformation. At Attesi, our guided breathwork sessions draw on a range of techniques — from gentle pranayama to more activating circular breathing practices — to help participants release stored tension, expand their capacity for presence, and access deeper states of awareness.",
          },
        ],
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Held in a safe, supportive container, each session is guided by experienced facilitators who work with the group's energy and intention. Many participants describe breathwork as one of the most profound experiences of their retreat — a direct encounter with the power of the breath to heal, open, and transform.",
          },
        ],
      },
    ],
    highlights: [
      "Guided by experienced breathwork facilitators",
      "Multiple techniques from gentle to activating",
      "Supports emotional release and mental clarity",
      "Held in a safe, supported group container",
      "Available year-round",
    ],
    faqs: [
      {
        question: "What can I expect to feel during a session?",
        answer:
          "Experiences vary widely. Some people feel deep relaxation, others experience emotional release, tingling sensations, or vivid imagery. All experiences are valid and supported by your guide.",
      },
      {
        question: "Is breathwork safe for everyone?",
        answer:
          "Breathwork is generally safe for healthy adults. We recommend caution for those with epilepsy, cardiovascular conditions, severe anxiety disorders, or during pregnancy. Please inform your facilitator of any health concerns.",
      },
      {
        question: "How long does a session last?",
        answer:
          "Sessions typically last 60–90 minutes, including an opening, the breathwork practice itself, and time for integration and sharing.",
      },
    ],
  },
};

/* ─── Fetch helper ───────────────────────────────────────────────────────── */
async function fetchExperience(slug) {
  try {
    const { data: exp } = await sanityFetch({ query: experienceBySlugQuery, params: { slug } });
    if (exp) return exp;
  } catch {
    // fall through to hardcoded
  }
  const fallback = FALLBACK_CONTENT[slug];
  if (!fallback) return null;
  return { ...fallback, slug };
}

/* ─── PortableText components ────────────────────────────────────────────── */
const ptComponents = {
  block: {
    normal: ({ children }) => (
      <p className="exp-detail__body-para">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="exp-detail__body-h2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="exp-detail__body-h3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="exp-detail__body-quote">{children}</blockquote>
    ),
  },
};

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default async function ExperienceDetailPage({ params }) {
  const { slug } = await params;
  const [exp, { data: siteSettings }] = await Promise.all([
    fetchExperience(slug),
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
  ]);
  if (!exp) notFound();

  const heroImageUrl = exp.heroImage
    ? urlFor(exp.heroImage).width(1600).height(900).fit("crop").url()
    : exp.cardImage
    ? urlFor(exp.cardImage).width(1600).height(900).fit("crop").url()
    : null;

  const galleryImages = (exp.gallery || []).map((img) => ({
    url: urlFor(img).width(900).height(600).fit("crop").url(),
    alt: img.alt || exp.title,
    caption: img.caption || null,
  }));

  const CATEGORY_LABELS = {
    nature: "Nature & Wildlife",
    wellness: "Wellness & Healing",
    adventure: "Adventure",
    food: "Food & Farm",
    community: "Community & Culture",
  };

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="exp-detail-hero">
        {heroImageUrl ? (
          <div
            className="exp-detail-hero__bg"
            style={{ backgroundImage: `url(${heroImageUrl})` }}
          />
        ) : (
          <div className="exp-detail-hero__bg exp-detail-hero__bg--placeholder" />
        )}
        <div className="exp-detail-hero__overlay" />
        <div className="exp-detail-hero__content container">
          <div className="exp-detail-hero__meta">
            <a href="/experiences" className="exp-detail-hero__back">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Experiences
            </a>
            {exp.category && (
              <span className="exp-detail-hero__category">
                {CATEGORY_LABELS[exp.category] || exp.category}
              </span>
            )}
          </div>
          <h1 className="exp-detail-hero__title">{exp.title}</h1>
          {exp.tagline && (
            <p className="exp-detail-hero__tagline">{exp.tagline}</p>
          )}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="exp-detail-about section">
        <div className="container exp-detail-about__inner">
          {/* Main copy */}
          <div className="exp-detail-about__copy">
            {exp.cardDescription && !exp.about && (
              <p className="exp-detail__body-para">{exp.cardDescription}</p>
            )}
            {exp.about && (
              <PortableText value={exp.about} components={ptComponents} />
            )}
          </div>

          {/* Highlights sidebar */}
          {exp.highlights && exp.highlights.length > 0 && (
            <aside className="exp-detail-about__highlights">
              <h3 className="exp-detail-about__highlights-title">
                What to Expect
              </h3>
              <ul className="exp-detail-about__highlights-list">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="exp-detail-about__highlight-item">
                    <CheckCircle size={20} weight="regular" className="exp-detail-about__highlight-icon" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>

      {/* ── GALLERY ── */}
      {galleryImages.length > 0 && (
        <section className="exp-detail-gallery section">
          <div className="container">
            <div className="exp-detail-gallery__grid">
              {galleryImages.map((img, i) => (
                <figure key={i} className="exp-detail-gallery__item">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="exp-detail-gallery__img"
                    loading="lazy"
                  />
                  {img.caption && (
                    <figcaption className="exp-detail-gallery__caption">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {exp.faqs && exp.faqs.length > 0 && (
        <section className="exp-detail-faqs section exp-detail-faqs--alt">
          <div className="container-medium exp-detail-faqs__inner">
            <h2 className="exp-detail-faqs__heading">Frequently Asked Questions</h2>
            <p className="exp-detail-faqs__sub">Everything you need to know before your experience.</p>
            <FaqAccordion faqs={exp.faqs} title={exp.title} />
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CTA settings={siteSettings} />

      <Footer />
      <ClientAnimations />
    </>
  );
}
