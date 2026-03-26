// Fallback testimonials — used only when Sanity returns no data
const FALLBACK_TESTIMONIALS = [
  {
    text: "Attesi was unlike anything I\u2019ve experienced. The land, the people, the food \u2014 it all felt deeply intentional. I left feeling restored in ways I didn\u2019t expect.",
    author: "Sarah M.",
    location: "New York, USA",
  },
  {
    text: "From the moment we arrived, we felt held by something larger than ourselves. The Shabbat experience alone was worth the journey.",
    author: "Daniel K.",
    location: "Toronto, Canada",
  },
  {
    text: "I came for a retreat and left with a community. Attesi has a rare gift \u2014 it connects you to the earth and to each other at the same time.",
    author: "Rachel L.",
    location: "Los Angeles, USA",
  },
];

export default function Testimonials({ testimonials = [] }) {
  const resolvedTestimonials =
    testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials__header" data-animate="">
          <div>
            <h2 className="testimonials__title">What Our Guests Say</h2>
            <p className="testimonials__subtitle">
              Hear from those who have experienced the land, the community, and the spirit of Attesi.
            </p>
          </div>
        </div>
        <div className="testimonials__track-wrapper">
          <div className="testimonials__track">
            {resolvedTestimonials.map((t, i) => (
              <article className="testimonial-card" data-animate="" key={t.author || i}>
                <div className="testimonial-card__brand">
                  <img src="/assets/logo-icon-only.png" alt="Attesi" width="40" height="40" />
                  <span>ATTESI</span>
                </div>
                <div className="testimonial-card__stars">{"★★★★★"}</div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <strong>{t.author}</strong>
                  <span>{t.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="testimonials__dots">
          <span className="testimonials__dot testimonials__dot--active"></span>
          <span className="testimonials__dot"></span>
        </div>
      </div>
    </section>
  );
}
