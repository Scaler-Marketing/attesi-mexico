import { urlFor } from "../../sanity/lib/image";
const FALLBACK_CARDS = [
  { image: "https://attesi.mx/wp-content/uploads/2022/11/cards-home-servides-1-2.jpg", alt: "Monarch butterflies at Attesi", title: "Migrating Monarchs", text: "Witness thousands of monarch butterflies in their winter sanctuary — a once-in-a-lifetime encounter with nature.", ctaLabel: "Learn More", ctaUrl: "/experiences/migrating-monarchs" },
  { image: "https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-2.jpg", alt: "Temazcal ceremony at Attesi", title: "Temazcal Ceremony", text: "An ancient ritual of heat, steam, and guided intention — a powerful space for release and inner renewal.", ctaLabel: "Learn More", ctaUrl: "/experiences/temazcal-ceremony" },
  { image: "https://attesi.mx/wp-content/uploads/2022/11/cards-home-servides-2-2.jpg", alt: "Farm to table dining at Attesi", title: "Farm to Table", text: "Pick fresh vegetables from our garden and cook a nourishing meal — connection to food, nature, and community.", ctaLabel: "Learn More", ctaUrl: "/experiences/farm-to-table" },
  { image: "https://attesi.mx/wp-content/uploads/2022/11/slider-day-visit-3.jpg", alt: "Guided mountain hike at Attesi", title: "Guided Mountain Hikes", text: "Explore the highlands with expert guides through forest trails opening to spectacular panoramic views.", ctaLabel: "Learn More", ctaUrl: "/experiences/guided-mountain-hikes" },
  { image: "https://attesi.mx/wp-content/uploads/2022/09/Eventos-a-tu-medida-scaled.jpg", alt: "Yoga and meditation at Attesi", title: "Yoga and Meditation", text: "Begin your morning in stillness or close your day with a guided practice — grounding, restoring, reconnecting.", ctaLabel: "Learn More", ctaUrl: "/experiences/yoga-and-meditation" },
];
export default function Experiences({ cards = [], settings = null }) {
  const heading = settings?.experiencesHeading || "Our Experiences";
  const subheading = settings?.experiencesSubheading || "With over a decade of connection to the land, we have crafted experiences that honor nature, community, and personal growth.";
  const resolvedCards = cards.length > 0
    ? cards.map((card) => ({
        image: card.cardImage ? urlFor(card.cardImage).width(800).url() : card.image ? urlFor(card.image).width(800).url() : null,
        alt: card.title || "Attesi Experience",
        title: card.title,
        text: card.cardDescription || card.description || "",
        ctaLabel: "Learn More",
        ctaUrl: card.slug ? `/experiences/${card.slug}` : card.ctaUrl || "/experiences",
      }))
    : FALLBACK_CARDS;
  return (
    <section className="experiences section" id="experiences">
      <div className="container">
        <div className="experiences__header" data-animate="">
          <div className="experiences__header-left">
            <h2 className="experiences__title">{heading}</h2>
            <p className="experiences__subtitle">{subheading}</p>
          </div>
          <div className="experiences__arrows">
            <button className="carousel-arrow carousel-arrow--prev" aria-label="Previous slide">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="carousel-arrow carousel-arrow--next" aria-label="Next slide">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
        <div className="experiences__track-wrapper">
          <div className="experiences__track">
            {resolvedCards.map((card) => (
              <article className="exp-card" data-animate="" key={card.title}>
                <div className="exp-card__image"><img src={card.image} alt={card.alt} loading="lazy" /></div>
                <div className="exp-card__body">
                  <h3 className="exp-card__title">{card.title}</h3>
                  <p className="exp-card__text">{card.text}</p>
                  <a href={card.ctaUrl} className="btn-primary btn--sm">{card.ctaLabel}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experiences__progress">
          <div className="experiences__progress-track"><div className="experiences__progress-bar"></div></div>
        </div>
      </div>
    </section>
  );
}
