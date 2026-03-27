const FALLBACK = {
  eyebrow: "Welcome to Attesi",
  heading:
    "Set within a kosher, nature-based environment, Attesi Lodge supports spiritual return and inner alignment.",
  body: "Sustainability, learning, and community create the foundation for lasting growth and health.",
  buttonLabel: "Learn More",
  buttonUrl: "/about",
};

export default function Intro({ page }) {
  const eyebrow = page?.introEyebrow || FALLBACK.eyebrow;
  const heading = page?.introHeading || FALLBACK.heading;
  const body = page?.introBody || FALLBACK.body;
  const buttonLabel = page?.introButtonLabel || FALLBACK.buttonLabel;
  const buttonUrl = page?.introButtonUrl || FALLBACK.buttonUrl;

  return (
    <section className="intro section" id="intro">
      <div className="container">
        <div className="intro__content" data-animate="">
          <span className="section-tag">{eyebrow}</span>
          <h2 className="intro__heading" id="introHeading">
            {heading}
          </h2>
          <p className="intro__text">{body}</p>
          <a href={buttonUrl} className="btn-primary">{buttonLabel}</a>
        </div>
      </div>
    </section>
  );
}
