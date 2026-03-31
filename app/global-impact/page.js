import "../global-impact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ClientAnimations from "../components/ClientAnimations";
import PageHero from "../components/PageHero";
import { sanityFetch } from "../../sanity/lib/live";
import { globalImpactPageQuery, siteSettingsQuery } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/image";

export const metadata = {
  title: "Global Impact — Attesi Mexico",
  description:
    "Attesi Mexico is built on a deep commitment to sustainability, community, and care for the earth. Discover how we give back to the land and the people around us.",
};

const FALLBACK_PRACTICE_CARDS = [
  {
    icon: "🌱",
    title: "Regenerative Agriculture",
    body: "Permaculture-guided cultivation that restores soil health and supports thriving ecosystems over time.",
  },
  {
    icon: "♻️",
    title: "Closed-Loop Systems",
    body: "Composting, water recycling, and waste reduction practices that ensure nothing is wasted and everything has a role.",
  },
  {
    icon: "💧",
    title: "Water Stewardship",
    body: "We built a water system that now serves hundreds of local families who previously had no access to clean water.",
  },
  {
    icon: "🌳",
    title: "Reforestation",
    body: "Hundreds of thousands of trees planted. Millions of bees rescued. Active restoration of the local ecosystem.",
  },
  {
    icon: "🤝",
    title: "Community Empowerment",
    body: "Career growth, education, and enrichment for local communities — sourcing locally and investing in the people around us.",
  },
  {
    icon: "📚",
    title: "Education & Skills",
    body: "English, sustainability, yoga, cattle management, and peaceful conflict resolution classes offered to the local community.",
  },
];

const FALLBACK_STATS = [
  { value: "100s", label: "of thousands of trees planted" },
  { value: "Millions", label: "of bees rescued" },
  { value: "100s", label: "of families now have clean water" },
  { value: "10+", label: "years of land stewardship" },
];

export default async function GlobalImpactPage() {
  const [{ data: page }, { data: siteSettings }] = await Promise.all([
    sanityFetch({ query: globalImpactPageQuery }).catch(() => ({ data: null })),
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
  ]);

  const practiceCards =
    page?.practiceCards?.length > 0 ? page.practiceCards : FALLBACK_PRACTICE_CARDS;
  const impactStats =
    page?.impactStats?.length > 0 ? page.impactStats : FALLBACK_STATS;
  const heroBg = page?.heroImage?.asset
    ? `url('${urlFor(page.heroImage).width(1800).quality(85).url()}')`
    : "url('/assets/global-impact-hero.png')";

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <PageHero
        eyebrow={page?.heroEyebrow || "Our Commitment"}
        title={page?.heroHeading || "Rooted in the Land. Committed to the Future."}
        subtitle={page?.heroSubheading || "A regenerative approach to living, growing, and giving back to the earth."}
        bgImage={heroBg}
        bgPos="center 40%"
      />

      {/* ── INTRO ── */}
      <section className="gi-intro section">
        <div className="container gi-intro__inner">
          <div className="gi-intro__text-col">
            <p className="gi-intro__lead">
              {page?.philosophyBody ||
                "Attesi is built on a deep commitment to sustainability, community, and care for the earth. Every decision — from how we grow to how we live — is guided by a belief that we are not separate from nature, but part of it."}
            </p>
          </div>
          <div className="gi-intro__poem-col">
            <blockquote className="gi-intro__poem">
              <p>Nestled in rural meadows,</p>
              <p>Surrounded by blue hills and orange trees,</p>
              <p>Hidden springs and birds that sing.</p>
              <br />
              <p>Open skies and deep nights,</p>
              <p>Where breath is refreshed</p>
              <p>And the spirit comes alive.</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="gi-philosophy section gi-philosophy--alt">
        <div className="container gi-philosophy__inner gi-philosophy__inner--split">
          <div className="gi-philosophy__content">
            <span className="gi-section-eyebrow">
              {page?.philosophyEyebrow || "Philosophy & Approach"}
            </span>
            <h2 className="gi-section-title">
              {page?.philosophyHeading || "We do not just occupy the land. We steward it."}
            </h2>
            <p className="gi-section-body">
              Guided by permaculture principles, every garden, tree, and plant is cultivated with
              intention. The goal is not just to grow, but to regenerate. To restore balance. To
              support a thriving ecosystem that can sustain itself over time.
            </p>
            <p className="gi-section-body gi-section-body--emphasis">
              This is not about maintenance.<br />
              It is about participation in a living system.
            </p>
          </div>
          {/* Image column — only renders if a philosophyImage is set in Sanity */}
          {page?.philosophyImage?.asset && (
            <div className="gi-philosophy__image-col">
              <img
                src={urlFor(page.philosophyImage).width(900).height(1000).fit("crop").url()}
                alt=""
                aria-hidden="true"
                className="gi-philosophy__image"
              />
            </div>
          )}
        </div>
      </section>

      {/* ── PRACTICES ── */}
      <section className="gi-practices section">
        <div className="container">
          <span className="gi-section-eyebrow">
            {page?.practicesEyebrow || "Our Practices"}
          </span>
          <h2 className="gi-section-title">
            {page?.practicesHeading || "Closed-loop systems that honor natural cycles."}
          </h2>
          <p className="gi-section-body gi-section-body--wide">
            {page?.practicesBody ||
              "From composting systems that return nutrients back to the soil, to mindful land stewardship, every element is designed to give back more than it takes."}
          </p>
          <div className="gi-practices__cards">
            {practiceCards.map((card) => (
              <div key={card.title} className="gi-practice-card">
                <span className="gi-practice-card__icon">{card.icon}</span>
                <h3 className="gi-practice-card__title">{card.title}</h3>
                <p className="gi-practice-card__body">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="gi-practices__tagline">
            {page?.practicesTagline ? (
              page.practicesTagline
            ) : (
              <>Nothing is wasted.<br />Everything has a role.</>
            )}
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="gi-stats section gi-stats--dark">
        <div className="container gi-stats__grid">
          {impactStats.map((stat) => (
            <div key={stat.label} className="gi-stat">
              <span className="gi-stat__value">{stat.value}</span>
              <span className="gi-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="gi-vision section">
        <div className="container gi-vision__inner">
          <span className="gi-section-eyebrow">
            {page?.visionEyebrow || "Our Vision"}
          </span>
          <h2 className="gi-vision__title">
            {page?.visionHeading ||
              "A model where sustainability is not a feature — it is a foundation."}
          </h2>
          <div className="gi-vision__body">
            <p>
              Through this way of living, Attesi aims to inspire a deeper connection to the land.
              A model where responsibility becomes instinct. Where living in harmony with nature
              feels natural again.
            </p>
            <p>
              We bring meaningful work to local communities, empower people with career growth,
              and teach sustainable technology, cattle management, and peaceful conflict resolution.
              We help fix and develop local infrastructure — because the land and its people are
              inseparable.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA settings={siteSettings} />

      <Footer />
      <ClientAnimations />
    </>
  );
}
