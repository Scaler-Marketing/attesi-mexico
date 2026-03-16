const cards = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" stroke="#b5743a" strokeWidth="2" />
        <path d="M24 14v10l6 6" stroke="#b5743a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Experienced Local Experts",
    text: "With over 15 years in wellness and nature retreats, we're the most experienced team in the region, offering deeply personalized stays.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" stroke="#b5743a" strokeWidth="2" />
        <path d="M16 24l6 6 10-12" stroke="#b5743a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Focused on Guest Satisfaction",
    text: "As a community-centered lodge, we prioritize your well-being above all else. Every detail is designed to make you feel at home.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" stroke="#b5743a" strokeWidth="2" />
        <path d="M18 30c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#b5743a" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="20" r="4" stroke="#b5743a" strokeWidth="2" />
      </svg>
    ),
    title: "Committed to Sustainability",
    text: "Trust Attesi to protect the environment while providing transformative experiences. We use organic, locally sourced practices in everything we do.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose section" id="why-choose">
      <div className="why-choose__bg">
        <img src="https://attesi.mx/wp-content/uploads/2022/12/home-slider-gallery-1.jpg" alt="Attesi background" loading="lazy" />
      </div>
      <div className="why-choose__overlay"></div>
      <div className="container why-choose__inner">
        <div className="why-choose__header" data-animate="">
          <div>
            <h2 className="why-choose__title">Why Choose Attesi</h2>
            <p className="why-choose__subtitle">Trusted experiences built on nature, quality, and heartfelt care.</p>
          </div>
          <a href="#" className="btn-secondary btn--light">Learn More</a>
        </div>
        <div className="why-choose__grid">
          {cards.map((card) => (
            <article className="why-card" data-animate="" key={card.title}>
              <div className="why-card__icon">{card.icon}</div>
              <h3 className="why-card__title">{card.title}</h3>
              <p className="why-card__text">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
