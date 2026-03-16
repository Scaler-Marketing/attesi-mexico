const cards = [
  {
    image: "https://attesi.mx/wp-content/uploads/2022/11/cards-home-servides-1-2.jpg",
    alt: "Glamping lodge at sunset",
    title: "Nature Lodge Stay",
    text: "Immerse yourself in the beauty of our eco-conscious lodging surrounded by the mountains.",
  },
  {
    image: "https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-2.jpg",
    alt: "Mountain vista from Attesi",
    title: "Guided Mountain Hikes",
    text: "Explore the highlands with expert guides through trails winding through forests and valleys.",
  },
  {
    image: "https://attesi.mx/wp-content/uploads/2022/11/cards-home-servides-2-2.jpg",
    alt: "Farm to table dining",
    title: "Farm to Table",
    text: "Savor locally-sourced meals prepared with ingredients from our own gardens and regional farms.",
  },
  {
    image: "https://attesi.mx/wp-content/uploads/2022/11/slider-day-visit-3.jpg",
    alt: "Day visit at Attesi",
    title: "Day Visit",
    text: "Enjoy a full day of wellness, farm tours, and natural springs without an overnight stay.",
  },
  {
    image: "https://attesi.mx/wp-content/uploads/2022/09/Eventos-a-tu-medida-scaled.jpg",
    alt: "Custom events at Attesi",
    title: "Custom Events",
    text: "Host bespoke gatherings, retreats, and celebrations in a natural setting designed for connection.",
  },
];

export default function Experiences() {
  return (
    <section className="experiences section" id="experiences">
      <div className="container">
        <div className="experiences__header" data-animate="">
          <div className="experiences__header-left">
            <h2 className="experiences__title">Our Experiences</h2>
            <p className="experiences__subtitle">
              With over a decade of connection to the land, we have crafted experiences that honor nature, community, and personal growth.
            </p>
          </div>
          <div className="experiences__arrows">
            <button className="carousel-arrow carousel-arrow--prev" aria-label="Previous slide">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="carousel-arrow carousel-arrow--next" aria-label="Next slide">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="experiences__track-wrapper">
          <div className="experiences__track">
            {cards.map((card) => (
              <article className="exp-card" data-animate="" key={card.title}>
                <div className="exp-card__image">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="exp-card__body">
                  <h3 className="exp-card__title">{card.title}</h3>
                  <p className="exp-card__text">{card.text}</p>
                  <a href="#" className="btn-primary btn--sm">View Experience</a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experiences__progress">
          <div className="experiences__progress-bar"></div>
        </div>
      </div>
    </section>
  );
}
