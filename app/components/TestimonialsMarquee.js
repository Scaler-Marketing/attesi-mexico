const FALLBACK_TESTIMONIALS = [
  { text: "Attesi was unlike anything I've experienced. The land, the people, the food — it all felt deeply intentional. I left feeling restored in ways I didn't expect.", author: "Sarah M.", location: "New York, USA" },
  { text: "From the moment we arrived, we felt held by something larger than ourselves. The Shabbat experience alone was worth the journey.", author: "Daniel K.", location: "Toronto, Canada" },
  { text: "I came for a retreat and left with a community. Attesi has a rare gift — it connects you to the earth and to each other at the same time.", author: "Rachel L.", location: "Los Angeles, USA" },
  { text: "The silence here is unlike anything I've found anywhere else. I arrived exhausted and left with a clarity I hadn't felt in years. Attesi is the real thing.", author: "Marcus T.", location: "Chicago, USA" },
  { text: "Every detail — the food, the ceremonies, the land — felt curated with so much care. We came as strangers and left as family. We're already planning our return.", author: "Leila R.", location: "Mexico City, Mexico" },
  { text: "I've been on many retreats but nothing has touched me the way Attesi did. The combination of nature, community, and intentional living is something truly special.", author: "James W.", location: "London, UK" },
];

function MarqueeRow({ items, reverse = false }) {
  // Duplicate items to create seamless loop
  const doubled = [...items, ...items];
  return (
    <div className={"t-marquee__row" + (reverse ? " t-marquee__row--reverse" : "")}>
      <div className="t-marquee__track">
        {doubled.map((t, i) => (
          <article className="t-marquee__card" key={i} aria-hidden={i >= items.length ? "true" : undefined}>
            <div className="t-marquee__stars">★★★★★</div>
            <p className="t-marquee__quote">&ldquo;{t.text}&rdquo;</p>
            <footer className="t-marquee__author">
              <strong>{t.author}</strong>
              <span>{t.location}</span>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsMarquee({ testimonials = [], settings = null }) {
  const heading = settings?.testimonialsHeading || "What Our Guests Say";
  const subheading = settings?.testimonialsSubheading || "Hear from those who have experienced the land, the community, and the spirit of Attesi.";
  const items = testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;

  // Split into two rows
  const row1 = items.slice(0, Math.ceil(items.length / 2));
  const row2 = items.slice(Math.ceil(items.length / 2));

  return (
    <section className="t-marquee section" id="testimonials-marquee">
      <div className="container">
        <div className="t-marquee__header">
          <p className="section-tag">Option B — Marquee</p>
          <h2 className="t-marquee__title">{heading}</h2>
          <p className="t-marquee__subtitle">{subheading}</p>
        </div>
      </div>

      {/* Full-width marquee rows (overflow outside container intentionally) */}
      <div className="t-marquee__stage">
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>
    </section>
  );
}
