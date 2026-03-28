const FALLBACK_TESTIMONIALS = [
  { text: "Attesi was unlike anything I've experienced. The land, the people, the food — it all felt deeply intentional. I left feeling restored in ways I didn't expect.", author: "Sarah M.", location: "New York, USA" },
  { text: "From the moment we arrived, we felt held by something larger than ourselves. The Shabbat experience alone was worth the journey.", author: "Daniel K.", location: "Toronto, Canada" },
  { text: "I came for a retreat and left with a community. Attesi has a rare gift — it connects you to the earth and to each other at the same time.", author: "Rachel L.", location: "Los Angeles, USA" },
  { text: "The silence here is unlike anything I've found anywhere else. I arrived exhausted and left with a clarity I hadn't felt in years. Attesi is the real thing.", author: "Marcus T.", location: "Chicago, USA" },
  { text: "Every detail — the food, the ceremonies, the land — felt curated with so much care. We came as strangers and left as family. We're already planning our return.", author: "Leila R.", location: "Mexico City, Mexico" },
  { text: "I've been on many retreats but nothing has touched me the way Attesi did. The combination of nature, community, and intentional living is something truly special.", author: "James W.", location: "London, UK" },
];
export default function Testimonials({ testimonials = [], settings = null }) {
  const heading = settings?.testimonialsHeading || "What Our Guests Say";
  const subheading = settings?.testimonialsSubheading || "Hear from those who have experienced the land, the community, and the spirit of Attesi.";
  const resolvedTestimonials = testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials__header" data-animate="">
          <div>
            <h2 className="testimonials__title">{heading}</h2>
            <p className="testimonials__subtitle">{subheading}</p>
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
