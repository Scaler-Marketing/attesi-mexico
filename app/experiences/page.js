import "./experiences.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ClientAnimations from "../components/ClientAnimations";
import { client } from "../../sanity/lib/client";
import { experiencesQuery } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/image";

export const metadata = {
  title: "Experiences — Attesi Mexico",
  description:
    "Discover the full range of immersive experiences at Attesi Mexico — from monarch butterfly migrations and temazcal ceremonies to guided mountain hikes, farm-to-table dining, and more.",
};

/* ─── Hardcoded fallback data ─────────────────────────────────────────────────
   Used when Sanity returns no results. Content sourced from ClickUp task
   868h69n3y and subtasks. Replace via Sanity Studio once images are uploaded.
   ─────────────────────────────────────────────────────────────────────────── */
const FALLBACK_EXPERIENCES = [
  {
    _id: "1",
    title: "Migrating Monarchs",
    slug: "migrating-monarchs",
    tagline: "Seasonal · Nov – Feb",
    category: "nature",
    cardDescription:
      "Witness one of nature's most remarkable phenomena as thousands of monarch butterflies gather in their winter sanctuary — a once-in-a-lifetime encounter with the rhythms of the natural world.",
    cardImageUrl: null,
  },
  {
    _id: "2",
    title: "Temazcal Ceremony",
    slug: "temazcal-ceremony",
    tagline: "Wellness · Year-round",
    category: "wellness",
    cardDescription:
      "An ancient ritual of heat, steam, and guided intention. Volcanic stones, aromatic herbs, and elemental space create a powerful environment for release, healing, and inner renewal.",
    cardImageUrl: null,
  },
  {
    _id: "3",
    title: "Guided Mountain Hikes",
    slug: "guided-mountain-hikes",
    tagline: "Adventure · Year-round",
    category: "adventure",
    cardDescription:
      "Led by knowledgeable guides through peaceful forest trails and scenic outlooks, opening up to spectacular panoramic views of the surrounding mountain ranges.",
    cardImageUrl: null,
  },
  {
    _id: "4",
    title: "Farm to Table",
    slug: "farm-to-table",
    tagline: "Food & Farm · Year-round",
    category: "food",
    cardDescription:
      "Pick fresh vegetables straight from our garden and bring them into the kitchen to create a delicious, nourishing meal. Connection to food, nature, and community all in one.",
    cardImageUrl: null,
  },
  {
    _id: "5",
    title: "Natural Spring Cold Plunge",
    slug: "natural-spring-cold-plunge",
    tagline: "Wellness · Year-round",
    category: "wellness",
    cardDescription:
      "Immerse yourself in the pure, cold waters of our natural spring. A grounding, invigorating practice that awakens the body and sharpens the mind.",
    cardImageUrl: null,
  },
  {
    _id: "6",
    title: "Apiary",
    slug: "apiary",
    tagline: "Nature & Farm · Year-round",
    category: "nature",
    cardDescription:
      "Step into the world of our rescued bee colonies. Learn about sustainable beekeeping, the role of pollinators in our ecosystem, and the art of honey production.",
    cardImageUrl: null,
  },
  {
    _id: "7",
    title: "Farm Tour",
    slug: "farm-tour",
    tagline: "Food & Farm · Year-round",
    category: "food",
    cardDescription:
      "Walk the land with our farm stewards. Discover how we grow, what we cultivate, and the regenerative practices that keep our soil alive and thriving.",
    cardImageUrl: null,
  },
  {
    _id: "8",
    title: "Bonfire",
    slug: "bonfire",
    tagline: "Community · Year-round",
    category: "community",
    cardDescription:
      "As the sun sets and the mountains grow quiet, the bonfire becomes a natural gathering place — for stories, music, reflection, and the simple warmth of being together.",
    cardImageUrl: null,
  },
  {
    _id: "9",
    title: "Yoga and Meditation",
    slug: "yoga-and-meditation",
    tagline: "Wellness · Year-round",
    category: "wellness",
    cardDescription:
      "Begin your morning in stillness or close your day with a guided practice. Our yoga and meditation sessions are designed to ground, restore, and reconnect.",
    cardImageUrl: null,
  },
  {
    _id: "10",
    title: "Breathwork",
    slug: "breathwork",
    tagline: "Wellness · Year-round",
    category: "wellness",
    cardDescription:
      "Guided breathwork sessions that help release tension, expand awareness, and access deeper states of clarity and presence.",
    cardImageUrl: null,
  },
];

const CATEGORY_LABELS = {
  nature: "Nature & Wildlife",
  wellness: "Wellness & Healing",
  adventure: "Adventure",
  food: "Food & Farm",
  community: "Community & Culture",
};

export default async function ExperiencesPage() {
  let sanityExperiences = [];
  try {
    sanityExperiences = await client.fetch(experiencesQuery);
  } catch (e) {
    // Silently fall back to hardcoded data
  }

  const experiences =
    sanityExperiences && sanityExperiences.length > 0
      ? sanityExperiences.map((exp) => ({
          ...exp,
          cardImageUrl: exp.cardImage
            ? urlFor(exp.cardImage).width(800).height(600).fit("crop").url()
            : null,
        }))
      : FALLBACK_EXPERIENCES;

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="exp-hero">
        <div className="exp-hero__bg" />
        <div className="exp-hero__overlay" />
        <div className="exp-hero__content container">
          <span className="exp-hero__eyebrow">What Awaits You</span>
          <h1 className="exp-hero__title">Immersive Experiences</h1>
          <p className="exp-hero__subtitle">
            From ancient ceremonies to mountain hikes, farm-to-table meals to
            monarch migrations — every experience at Attesi is a deeper encounter
            with the land, the community, and yourself.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="exp-intro section">
        <div className="container exp-intro__inner">
          <p className="exp-intro__lead">
            Attesi is not just a place to stay — it is a place to experience.
            Each offering is designed to slow you down, open you up, and connect
            you to something real.
          </p>
          <p className="exp-intro__sub">
            Whether you are here for a weekend retreat or an extended stay, our
            experiences are available to weave into your time with us.
          </p>
        </div>
      </section>

      {/* ── EXPERIENCES GRID ── */}
      <section className="exp-grid section">
        <div className="container">
          <div className="exp-cards">
            {experiences.map((exp) => (
              <a
                key={exp._id}
                href={`/experiences/${exp.slug}`}
                className="exp-card"
              >
                <div className="exp-card__img-wrap">
                  {exp.cardImageUrl ? (
                    <img
                      src={exp.cardImageUrl}
                      alt={exp.title}
                      className="exp-card__img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="exp-card__img-placeholder">
                      <span className="exp-card__img-initial">
                        {exp.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  {exp.category && (
                    <span className="exp-card__category">
                      {CATEGORY_LABELS[exp.category] || exp.category}
                    </span>
                  )}
                </div>
                <div className="exp-card__body">
                  {exp.tagline && (
                    <span className="exp-card__tagline">{exp.tagline}</span>
                  )}
                  <h2 className="exp-card__title">{exp.title}</h2>
                  {exp.cardDescription && (
                    <p className="exp-card__desc">{exp.cardDescription}</p>
                  )}
                  <span className="exp-card__cta">
                    Learn More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA />

      <Footer />
      <ClientAnimations />
    </>
  );
}
