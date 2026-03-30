import { urlFor } from "../../sanity/lib/image";

// Local fallback images keyed by Sanity document _id
const FALLBACK_IMAGES = {
  "findYourWayCard-stay":     { src: "/assets/find-way-stay.webp",     alt: "Glamping tent at Attesi Lodge" },
  "findYourWayCard-wellness": { src: "/assets/find-way-wellness.webp", alt: "Wellness dining at Attesi" },
  "findYourWayCard-impact":   { src: "/assets/find-way-impact.webp",   alt: "Child exploring nature in Attesi programs" },
};

// Full fallback used when no Sanity documents exist at all
const FALLBACK_CARDS = [
  { _id: "findYourWayCard-stay",     title: "Stay",     description: "Relax, unwind, and connect at Attesi where cozy glamping tents and breathtaking surroundings create an unforgettable stay.",    ctaLabel: "View Lodging",       ctaUrl: "/lodging" },
  { _id: "findYourWayCard-wellness", title: "Wellness", description: "Life at Attesi is centered on embracing health, focusing on what makes us feel whole and nourished, both physically and spiritually.", ctaLabel: "View Philosophy",    ctaUrl: "/retreats" },
  { _id: "findYourWayCard-impact",   title: "Impact",   description: "At Attesi, we focus on sustainable practices, giving back to the Earth and supporting our communities.",                             ctaLabel: "View Global Impact", ctaUrl: "/global-impact" },
];

export default function FindYourWay({ settings = null, cards = [] }) {
  const heading = settings?.findYourWayHeading || "Find Your Way In";
  const subheading = settings?.findYourWaySubheading || "We've built Attesi around our values, and we invite you to share them with us.";
  const resolvedCards = cards.length > 0 ? cards : FALLBACK_CARDS;

  return (
    <section className="find-way section" id="find-way">
      <div className="container">
        <div className="find-way__header" data-animate="">
          <h2 className="find-way__title">{heading}</h2>
          <p className="find-way__subtitle">{subheading}</p>
        </div>
        <div className="find-way__grid">
          {resolvedCards.map((card) => {
            const fallback = FALLBACK_IMAGES[card._id];
            const imgSrc = card.image?.asset
              ? urlFor(card.image).width(800).height(600).fit("crop").url()
              : fallback?.src || null;
            const imgAlt = card.image?.asset
              ? (card.image.alt || card.title)
              : fallback?.alt || card.title;
            return (
              <article className="value-card" data-animate="" key={card._id || card.title}>
                {imgSrc && (
                  <div className="value-card__image">
                    <img src={imgSrc} alt={imgAlt} loading="lazy" />
                  </div>
                )}
                <div className="value-card__body">
                  <h3 className="value-card__title">{card.title}</h3>
                  <p className="value-card__text">{card.description}</p>
                  {card.ctaLabel && (
                    <a href={card.ctaUrl || "#"} className="btn-primary btn--sm">{card.ctaLabel}</a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
