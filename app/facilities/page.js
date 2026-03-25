import "../facilities.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ClientAnimations from "../components/ClientAnimations";

export const metadata = {
  title: "Facilities — Attesi Mexico",
  description:
    "Explore the spaces that make up Attesi Mexico — from the Midrash gathering hall and Sabata retreat center to the farm, natural spring mikvah, and open-air gardens.",
};

/* ─── Hardcoded facilities data ──────────────────────────────────────────── */
const FACILITIES = [
  {
    slug: "midrash",
    title: "Midrash",
    category: "Gathering & Study",
    description:
      "A dedicated space for learning, reflection, and gathering. The Midrash is the intellectual and spiritual heart of Attesi — where ideas are shared, Torah is studied, and community comes together.",
    image: "https://attesi.mx/wp-content/uploads/2022/12/galeria-home-planea-1-1.jpg",
  },
  {
    slug: "sabata",
    title: "Sabata",
    category: "Retreat & Ceremony",
    description:
      "An intimate space designed for retreat, ceremony, and deep practice. The Sabata hosts temazcal ceremonies, breathwork sessions, and small-group workshops in a setting that honors intention and presence.",
    image: "https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-2.jpg",
  },
  {
    slug: "cafe",
    title: "Attesi Market Café",
    category: "Food & Community",
    description:
      "A warm gathering place for coffee, fresh food, and conversation. The Attesi Market Café serves seasonal, locally-sourced fare in a relaxed setting that brings community together around the table.",
    image: "https://attesi.mx/wp-content/uploads/2022/11/cards-home-servides-2-2.jpg",
  },
  {
    slug: "central-garden",
    title: "Central Garden",
    category: "Nature & Landscape",
    description:
      "The living center of Attesi. The Central Garden is a carefully tended space of seasonal plants, fruit trees, and herbs — a place to walk, breathe, and reconnect with the rhythms of the land.",
    image: "https://attesi.mx/wp-content/uploads/2022/11/cards-home-servides-1-2.jpg",
  },
  {
    slug: "outdoor-spaces",
    title: "Outdoor Spaces",
    category: "Nature & Landscape",
    description:
      "From open meadows to shaded seating areas, the outdoor spaces at Attesi are designed for gathering, reflection, and simply being in nature. Surrounded by mountains and open sky.",
    image: "https://attesi.mx/wp-content/uploads/2022/09/Eventos-a-tu-medida-scaled.jpg",
  },
  {
    slug: "retreat-center",
    title: "Retreat Center",
    category: "Retreat & Wellness",
    description:
      "A fully equipped retreat facility that welcomes groups from around the world. The Retreat Center offers accommodation, workshop spaces, and all the infrastructure needed for transformative group experiences.",
    image: "https://attesi.mx/wp-content/uploads/2022/11/slider-day-visit-3.jpg",
  },
  {
    slug: "farm",
    title: "The Farm",
    category: "Food & Farm",
    description:
      "A working regenerative farm producing seasonal vegetables, herbs, and fruit. The farm is the foundation of Attesi's commitment to sustainable living — and the source of much of the food served on site.",
    image: "https://attesi.mx/wp-content/uploads/2022/11/cards-home-servides-1-2.jpg",
  },
  {
    slug: "huertos",
    title: "Huertos",
    category: "Food & Farm",
    description:
      "Raised garden beds and growing plots tended by community members and guests. The Huertos are a hands-on space for learning about cultivation, soil health, and the joy of growing your own food.",
    image: "https://attesi.mx/wp-content/uploads/2022/11/cards-home-servides-2-2.jpg",
  },
  {
    slug: "natural-spring-mikvah",
    title: "Natural Spring Mikvah",
    category: "Wellness & Ritual",
    description:
      "Fed by a natural spring of exceptional purity, the Mikvah at Attesi is a place of ritual immersion, cold plunge, and spiritual renewal. A rare and sacred facility set within the natural landscape.",
    image: "https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-2.jpg",
  },
];

export default async function FacilitiesPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="fac-hero">
        <div className="fac-hero__bg" />
        <div className="fac-hero__overlay" />
        <div className="fac-hero__content container">
          <span className="fac-hero__eyebrow">The Spaces</span>
          <h1 className="fac-hero__title">Our Facilities</h1>
          <p className="fac-hero__subtitle">
            Every space at Attesi has been designed with intention — to support
            community, nourish the body, and create the conditions for
            meaningful experience.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="fac-intro section">
        <div className="container fac-intro__inner">
          <p className="fac-intro__lead">
            From the Midrash gathering hall to the natural spring mikvah, from
            the working farm to the retreat center — each facility at Attesi
            plays a role in the life of the community and the experience of
            our guests.
          </p>
        </div>
      </section>

      {/* ── FACILITIES GRID ── */}
      <section className="fac-grid section">
        <div className="container">
          <div className="fac-cards">
            {FACILITIES.map((fac) => (
              <article key={fac.slug} className="exp-card">
                <div className="exp-card__image">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    loading="lazy"
                  />
                </div>
                <div className="exp-card__body">
                  <span className="fac-card__eyebrow">{fac.category}</span>
                  <h2 className="exp-card__title">{fac.title}</h2>
                  <p className="exp-card__text">{fac.description}</p>
                </div>
              </article>
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
