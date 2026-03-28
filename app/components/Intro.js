export default function Intro({ settings }) {
  const eyebrow = settings?.introEyebrow || "Welcome to Attesi";
  const heading = settings?.introHeading || "Set within a kosher, nature-based environment, Attesi Lodge supports spiritual return and inner alignment.";
  const body = settings?.introBody || "Sustainability, learning, and community create the foundation for lasting growth and health.";
  const buttonLabel = settings?.introButtonLabel || "Learn More";
  const buttonUrl = settings?.introButtonUrl || "/about";
  return (
    <section className="intro section" id="intro">
      <div className="container">
        <div className="intro__content" data-animate="">
          <span className="section-tag">{eyebrow}</span>
          <h2 className="intro__heading" id="introHeading">{heading}</h2>
          <p className="intro__text">{body}</p>
          <a href={buttonUrl} className="btn-primary">{buttonLabel}</a>
        </div>
      </div>
    </section>
  );
}
