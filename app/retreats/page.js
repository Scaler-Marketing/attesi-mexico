import "../retreats.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ClientAnimations from "../components/ClientAnimations";

export const metadata = {
  title: "Retreats — Attesi Mexico",
  description:
    "Attesi offers a holistic retreat experience rooted in nature, wellness, and community. From private group retreats to curated wellness programs, discover how to bring your group to Attesi.",
};

/* ─── Retreat types ──────────────────────────────────────────────────────── */
const RETREAT_TYPES = [
  {
    title: "Wellness Retreats",
    icon: "✦",
    category: "Wellness & Healing",
    description:
      "Immersive programs combining yoga, meditation, breathwork, temazcal ceremony, cold plunge, and farm-to-table nourishment. Designed to restore the body, quiet the mind, and reconnect with what matters.",
    image: "https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-2.jpg",
  },
  {
    title: "Corporate Retreats",
    icon: "◈",
    category: "Team & Leadership",
    description:
      "Step away from the office and into nature. Our corporate retreat programs create the conditions for deeper connection, creative thinking, and team alignment — far from the noise of everyday work.",
    image: "https://attesi.mx/wp-content/uploads/2022/09/Eventos-a-tu-medida-scaled.jpg",
  },
  {
    title: "Family & Community Retreats",
    icon: "◉",
    category: "Family & Community",
    description:
      "Attesi was built around family and community. Our family retreat programs offer a shared experience of nature, learning, and celebration that brings people closer together.",
    image: "https://attesi.mx/wp-content/uploads/2022/11/slider-day-visit-3.jpg",
  },
  {
    title: "Jewish Life Retreats",
    icon: "✡",
    category: "Jewish Life",
    description:
      "Shabbat, holidays, and meaningful Jewish experiences in a natural setting. Attesi's Jewish retreat programs weave together tradition, community, and the beauty of the land.",
    image: "https://attesi.mx/wp-content/uploads/2022/12/galeria-home-planea-1-1.jpg",
  },
  {
    title: "Custom Programs",
    icon: "◇",
    category: "Bespoke",
    description:
      "Have a specific vision? We work with retreat leaders, facilitators, and organizations to design fully bespoke programs that align with your goals, group size, and timeline.",
    image: "https://attesi.mx/wp-content/uploads/2022/11/cards-home-servides-1-2.jpg",
  },
];

/* ─── What's included ────────────────────────────────────────────────────── */
const INCLUDED = [
  "Accommodation in our retreat facilities",
  "Farm-to-table meals prepared with ingredients from our gardens",
  "Access to all Attesi spaces — farm, gardens, natural spring, and outdoor areas",
  "A curated selection of experiences (temazcal, yoga, hikes, apiary, and more)",
  "Dedicated retreat coordination and on-site support",
  "Shabbat and holiday programming (for Jewish life retreats)",
];

/* ─── Wellness philosophy from ClickUp task 868h69dx2 ────────────────────── */
const WELLNESS_PILLARS = [
  { label: "Body", text: "Nourishing food, movement, cold water, and rest." },
  { label: "Mind", text: "Stillness, reflection, and space to think clearly." },
  { label: "Spirit", text: "Connection to tradition, community, and the land." },
  { label: "Nature", text: "Forest bathing, fresh spring water, open skies." },
];

export default async function RetreatsPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="ret-hero">
        <div className="ret-hero__bg" />
        <div className="ret-hero__overlay" />
        <div className="ret-hero__content container">
          <span className="ret-hero__eyebrow">Bring Your Group</span>
          <h1 className="ret-hero__title">Retreats at Attesi</h1>
          <p className="ret-hero__subtitle">
            A place to step away from the noise, reconnect with what matters,
            and return home transformed.
          </p>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="ret-philosophy section">
        <div className="container ret-philosophy__inner">
          <div className="ret-philosophy__copy">
            <h2 className="ret-philosophy__heading">A Holistic Approach to Retreat</h2>
            <p>
              At Attesi, wellness is not a program — it is a way of life. Our
              approach is rooted in the belief that true wellbeing comes from
              attending to the whole person: body, mind, spirit, and our
              relationship with the natural world.
            </p>
            <p>
              We believe in slow food over fast food, in breathing fresh air and
              drinking from natural springs, in the medicine of forests and the
              grounding power of soil. We believe in conscious consumption,
              personal growth, and the irreplaceable value of cultivating deep
              relationships with others.
            </p>
            <p>
              A retreat at Attesi is an invitation to live this way — even for
              just a few days. To take full advantage of each day, to move your
              body, to be still, to eat well, to connect, and to return home
              with something you did not have before.
            </p>
          </div>
          <div className="ret-philosophy__pillars">
            {WELLNESS_PILLARS.map((p) => (
              <div key={p.label} className="ret-pillar">
                <span className="ret-pillar__label">{p.label}</span>
                <p className="ret-pillar__text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RETREAT TYPES ── */}
      <section className="ret-types section ret-types--alt">
        <div className="container">
          <h2 className="ret-types__heading">Retreat Programs</h2>
          <p className="ret-types__sub">
            We host a range of retreat formats, from intimate personal programs
            to large group experiences. All are shaped by the same commitment
            to depth, care, and connection.
          </p>
          <div className="ret-types__grid">
            {RETREAT_TYPES.map((type) => (
              <article key={type.title} className="exp-card">
                <div className="exp-card__image">
                  <img
                    src={type.image}
                    alt={type.title}
                    loading="lazy"
                  />
                </div>
                <div className="exp-card__body">
                  <span className="fac-card__eyebrow">{type.category}</span>
                  <h3 className="exp-card__title">{type.title}</h3>
                  <p className="exp-card__text">{type.description}</p>
                  <a href="/contact" className="btn-primary btn--sm">
                    Enquire
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="ret-included section">
        <div className="container ret-included__inner">
          <div className="ret-included__copy">
            <h2 className="ret-included__heading">What's Included</h2>
            <p className="ret-included__sub">
              Every retreat at Attesi is fully supported. We take care of the
              details so your group can focus on what matters.
            </p>
            <ul className="ret-included__list">
              {INCLUDED.map((item, i) => (
                <li key={i} className="ret-included__item">
                  <span className="ret-included__dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="ret-included__image">
            <img
              src="https://attesi.mx/wp-content/uploads/2022/11/cards-home-servides-1-2.jpg"
              alt="Retreat at Attesi"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="ret-quote section ret-quote--alt">
        <div className="container ret-quote__inner">
          <blockquote className="ret-quote__text">
            "Surrounded by mountains, gardens, and open skies, guests are
            invited to slow down, breathe deeply, and reconnect."
          </blockquote>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA />

      <Footer />
      <ClientAnimations />
    </>
  );
}
