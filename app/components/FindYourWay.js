const cards = [
  { image: "/assets/find-way-stay.webp", alt: "Glamping tent among lavender at Attesi", title: "Stay", text: "Relax, unwind, and connect at Attesi where cozy glamping tents and breathtaking surroundings create an unforgettable stay.", cta: "View Lodging" },
  { image: "/assets/find-way-wellness.webp", alt: "Farm to table dining at Sabata restaurant", title: "Wellness", text: "Life at Attesi is centered on embracing health, focusing on what makes us feel whole and nourished, both physically and spiritually.", cta: "View Philosophy" },
  { image: "/assets/find-way-impact.webp", alt: "Child exploring nature in Attesi programs", title: "Impact", text: "At Attesi, we focus on sustainable practices, giving back to the Earth and supporting our communities.", cta: "View Global Impact" },
];
export default function FindYourWay({ settings = null }) {
  const heading = settings?.findYourWayHeading || "Find Your Way In";
  const subheading = settings?.findYourWaySubheading || "We've built Attesi around our values, and we invite you to share them with us.";
  return (
    <section className="find-way section" id="find-way">
      <div className="container">
        <div className="find-way__header" data-animate="">
          <h2 className="find-way__title">{heading}</h2>
          <p className="find-way__subtitle">{subheading}</p>
        </div>
        <div className="find-way__grid">
          {cards.map((card) => (
            <article className="value-card" data-animate="" key={card.title}>
              <div className="value-card__image"><img src={card.image} alt={card.alt} loading="lazy" /></div>
              <div className="value-card__body">
                <h3 className="value-card__title">{card.title}</h3>
                <p className="value-card__text">{card.text}</p>
                <a href="#" className="btn-primary btn--sm">{card.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
