const FALLBACK_TESTIMONIALS = [
  { text: "Attesi was unlike anything I've experienced. The land, the people, the food — it all felt deeply intentional. I left feeling restored in ways I didn't expect.", author: "Sarah M.", location: "New York, USA" },
  { text: "From the moment we arrived, we felt held by something larger than ourselves. The Shabbat experience alone was worth the journey.", author: "Daniel K.", location: "Toronto, Canada" },
  { text: "I came for a retreat and left with a community. Attesi has a rare gift — it connects you to the earth and to each other at the same time.", author: "Rachel L.", location: "Los Angeles, USA" },
  { text: "The silence here is unlike anything I've found anywhere else. I arrived exhausted and left with a clarity I hadn't felt in years. Attesi is the real thing.", author: "Marcus T.", location: "Chicago, USA" },
  { text: "Every detail — the food, the ceremonies, the land — felt curated with so much care. We came as strangers and left as family. We're already planning our return.", author: "Leila R.", location: "Mexico City, Mexico" },
  { text: "I've been on many retreats but nothing has touched me the way Attesi did. The combination of nature, community, and intentional living is something truly special.", author: "James W.", location: "London, UK" },
];

export default function TestimonialsGrid({ testimonials = [], settings = null }) {
  const heading = settings?.testimonialsHeading || "What Our Guests Say";
  const subheading = settings?.testimonialsSubheading || "Hear from those who have experienced the land, the community, and the spirit of Attesi.";
  const items = testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;

  return (
    <section className="t-grid section" id="testimonials-grid">
      <div className="container">
        {/* Section header */}
        <div className="t-grid__header">
          <p className="section-tag">Option A — Grid</p>
          <h2 className="t-grid__title">{heading}</h2>
          <p className="t-grid__subtitle">{subheading}</p>
        </div>

        {/* 3-col grid */}
        <div className="t-grid__cards">
          {items.map((t, i) => (
            <article className="t-grid__card" key={t.author || i}>
              <div className="t-grid__stars">★★★★★</div>
              <p className="t-grid__quote">{t.text}</p>
              <footer className="t-grid__author">
                <strong>{t.author}</strong>
                <span>{t.location}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
