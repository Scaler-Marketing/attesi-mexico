import { urlFor } from "@/sanity/lib/image";

const FALLBACK = {
  ctaHeading: "Let Us Take Care of Your Retreat Needs. Get a Free Quote Today.",
  ctaSubheading:
    "Interested in learning how Attesi can assist you with your retreat, event, or wellness experience?",
  ctaButtonLabel: "Check Availability",
  ctaButtonUrl: "/contact",
  ctaSecondButtonLabel: "Contact Us",
  ctaSecondButtonUrl: "/contact",
  ctaImage: null,
};

export default function CTA({ settings }) {
  const s = settings || {};
  const heading = s.ctaHeading || FALLBACK.ctaHeading;
  const subheading = s.ctaSubheading || FALLBACK.ctaSubheading;
  const btn1Label = s.ctaButtonLabel || FALLBACK.ctaButtonLabel;
  const btn1Url = s.ctaButtonUrl || FALLBACK.ctaButtonUrl;
  const btn2Label = s.ctaSecondButtonLabel || FALLBACK.ctaSecondButtonLabel;
  const btn2Url = s.ctaSecondButtonUrl || FALLBACK.ctaSecondButtonUrl;

  // Background image: prefer Sanity upload, fall back to static asset
  const bgSrc =
    s.ctaImage?.asset
      ? urlFor(s.ctaImage).width(1800).quality(85).url()
      : "https://attesi.mx/wp-content/uploads/2022/12/galeria-home-planea-1-1.jpg";

  return (
    <section className="cta section" id="contact">
      <div className="cta__bg">
        <img src={bgSrc} alt={heading} loading="lazy" />
      </div>
      <div className="cta__overlay"></div>
      <div className="container cta__inner">
        <div className="cta__content" data-animate="">
          <h2 className="cta__title">{heading}</h2>
          <p className="cta__subtitle">{subheading}</p>
          <div className="cta__buttons">
            <a href={btn1Url} className="btn-primary">{btn1Label}</a>
            <a href={btn2Url} className="btn-alternate">{btn2Label}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
