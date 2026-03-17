// Fallback stats using existing WordPress images
const FALLBACK_STATS = [
  {
    image: "https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-1.jpg",
    alt: "Attesi grounds",
    count: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    image: "https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-4.jpg",
    alt: "Mountain view",
    count: 7,
    suffix: "k+",
    label: "Guests Welcomed",
  },
  {
    image: "https://attesi.mx/wp-content/uploads/2022/12/home-slider-gallery-1.jpg",
    alt: "Events",
    count: 46,
    suffix: "",
    label: "Team Members",
  },
  {
    image: "https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-6.jpg",
    alt: "Gallery",
    count: 9,
    suffix: "",
    label: "Unique Experiences",
  },
];

export default function Stats({ stats = [] }) {
  // When Sanity stats exist, use them; otherwise fall back to hardcoded data
  const resolvedStats =
    stats.length > 0
      ? stats.map((stat, i) => ({
          image: FALLBACK_STATS[i % FALLBACK_STATS.length]?.image || "",
          alt: stat.label,
          count: stat.value,
          suffix: stat.suffix || "",
          label: stat.label,
        }))
      : FALLBACK_STATS;

  return (
    <section className="stats section" id="stats">
      <div className="container">
        <div className="stats__header" data-animate="">
          <h2 className="stats__title">Our Proven Track Record</h2>
          <p className="stats__subtitle">
            Decades of experience, thousands of meaningful moments, and a dedicated team at your service.
          </p>
          <div className="stats__buttons">
            <a href="#" className="btn-primary">Check Availability</a>
            <a href="#" className="btn-secondary">Our Experiences</a>
          </div>
        </div>
        <div className="stats__grid">
                  {resolvedStats.map((stat) => (
            <div className="stat-card" data-animate="" key={stat.label}>
              <img src={stat.image} alt={stat.alt} loading="lazy" />
              <div className="stat-card__content">
                <span className="stat-card__number" data-count={stat.count}>0</span>
                {stat.suffix && <span className="stat-card__plus">{stat.suffix}</span>}
                <span className="stat-card__label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
