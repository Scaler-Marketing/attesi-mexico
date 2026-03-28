import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import ClientAnimations from "@/app/components/ClientAnimations";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import "../philosophy.css";

export const metadata = {
  title: "Our Philosophy — Attesi Mexico",
  description:
    "At Attesi, wellness is a holistic approach — body, mind, and spirit — rooted in nature, slow food, active spirituality, and conscious living.",
};

const PILLARS = [
  {
    icon: "🌿",
    label: "Nature",
    text:
      "We believe in the healing power of the natural world — forest bathing, open skies, and the grounding presence of soil beneath your feet.",
  },
  {
    icon: "🍽️",
    label: "Slow Food",
    text:
      "Healthy, homemade, organic, and natural. We choose slow food over fast food — meals grown with care and shared with intention.",
  },
  {
    icon: "💧",
    label: "Living Water",
    text:
      "Drinking water from fresh natural springs is one of the simplest and most profound ways to reconnect with the land.",
  },
  {
    icon: "🧘",
    label: "Active Spirituality",
    text:
      "Spirituality is not passive. It is lived through practice, presence, and participation — in prayer, in community, and in daily life.",
  },
  {
    icon: "🤝",
    label: "Community",
    text:
      "Cultivating deep relationships with others is essential to wellbeing. At Attesi, community is not a backdrop — it is the foundation.",
  },
  {
    icon: "🌱",
    label: "Conscious Consumption",
    text:
      "We live sustainably and consume thoughtfully — honoring the resources of the earth and the effort behind every product and meal.",
  },
  {
    icon: "🧠",
    label: "Personal Growth",
    text:
      "Human potential is limitless. We believe in emotional intelligence, continuous learning, and the courage to grow.",
  },
  {
    icon: "☀️",
    label: "Each Day",
    text:
      "Taking full advantage of each day — breathing deeply, moving your body, being present — is itself a form of wellness.",
  },
];

const APPROACH_ITEMS = [
  {
    heading: "Body",
    body:
      "Movement, nourishment, rest, and physical connection to the land. The body is the vessel through which we experience everything.",
  },
  {
    heading: "Mind",
    body:
      "Clarity, learning, emotional intelligence, and the space to reflect. A healthy mind is cultivated through stillness and engagement alike.",
  },
  {
    heading: "Spirit",
    body:
      "Jewish tradition, Shabbat, and the rhythms of the natural world provide a sense of grounding and purpose that anchors everything else.",
  },
];

export default async function PhilosophyPage() {
  const { data: siteSettings } = await sanityFetch({ query: SITE_SETTINGS_QUERY });

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="phil-hero">
        <div className="phil-hero__bg" />
        <div className="phil-hero__overlay" />
        <div className="phil-hero__content container">
          <span className="phil-hero__eyebrow">Our Approach</span>
          <h1 className="phil-hero__title">Philosophy & Wellness</h1>
          <p className="phil-hero__subtitle">
            A holistic approach to living — body, mind, and spirit in harmony with the natural world.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="phil-intro section">
        <div className="container phil-intro__inner">
          <div className="phil-intro__copy">
            <h2 className="phil-intro__heading">Walking the Talk</h2>
            <p>
              At Attesi, wellness is not a program or a product. It is a way of life — a holistic
              approach that attends to the whole person: body, mind, and spirit.
            </p>
            <p>
              We believe in nature, breathing, slow food, healthy and homemade meals, organic
              living, active spirituality, and the irreplaceable value of cultivating deep
              relationships with others. We believe in taking full advantage of each day, in
              drinking water from fresh springs, in the medicine of forests, and in living
              sustainably.
            </p>
            <p>
              This is what we mean when we say wellness at Attesi is kosher magic — a fusion of
              Jewish values, permaculture principles, and a profound respect for the earth.
            </p>
          </div>
          <aside className="phil-intro__pull">
            <blockquote className="phil-intro__quote">
              &ldquo;Wellness is about a holistic approach — body, mind, and spirit — and
              walking the talk about a way of life.&rdquo;
            </blockquote>
          </aside>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="phil-approach section phil-approach--dark">
        <div className="container">
          <span className="phil-eyebrow">The Three Dimensions</span>
          <h2 className="phil-approach__heading">Body, Mind & Spirit</h2>
          <div className="phil-approach__grid">
            {APPROACH_ITEMS.map((item) => (
              <div key={item.heading} className="phil-approach__card">
                <h3 className="phil-approach__card-heading">{item.heading}</h3>
                <p className="phil-approach__card-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS GRID ── */}
      <section className="phil-pillars section">
        <div className="container">
          <span className="phil-eyebrow">What We Believe In</span>
          <h2 className="phil-pillars__heading">The Principles We Live By</h2>
          <div className="phil-pillars__grid">
            {PILLARS.map((p) => (
              <div key={p.label} className="phil-pillar-card">
                <span className="phil-pillar-card__icon" aria-hidden="true">{p.icon}</span>
                <h3 className="phil-pillar-card__label">{p.label}</h3>
                <p className="phil-pillar-card__text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING STATEMENT ── */}
      <section className="phil-closing section phil-closing--cream">
        <div className="container phil-closing__inner">
          <h2 className="phil-closing__heading">Attesi Lodge</h2>
          <p className="phil-closing__subheading">
            Where wellness and sustainability mean kosher magic.
          </p>
          <p className="phil-closing__body">
            Nestled in the highlands of the State of Mexico, surrounded by mountains, gardens,
            and open skies, Attesi is a place where every element of daily life is an invitation
            to live more fully — more consciously, more connected, and more alive.
          </p>
          <a href="/contact" className="btn-primary">Plan Your Visit</a>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA settings={siteSettings} />
      <Footer />
      <ClientAnimations />
    </>
  );
}
