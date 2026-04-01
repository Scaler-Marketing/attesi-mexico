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

/**
 * CTA banner component.
 *
 * @param {object} settings  - Global siteSettings from Sanity (used as base values)
 * @param {object} variant   - Optional overrides for individual fields, e.g.:
 *   {
 *     heading:      "Meet the People Behind Attesi",
 *     subtext:      "Attesi is brought to life by...",
 *     btn1Label:    "Meet Our Team",
 *     btn1Url:      "/team",
 *     btn2Label:    null,   // pass null to hide the second button
 *   }
 *
 * Any field not provided in variant falls back to settings → FALLBACK.
 */
export default function CTA({ settings, variant }) {
  const s = settings || {};
  const v = variant || {};

  const heading   = v.heading   ?? s.ctaHeading          ?? FALLBACK.ctaHeading;
  const subheading = v.subtext  ?? s.ctaSubheading        ?? FALLBACK.ctaSubheading;
  const btn1Label = v.btn1Label ?? s.ctaButtonLabel       ?? FALLBACK.ctaButtonLabel;
  const btn1Url   = v.btn1Url   ?? s.ctaButtonUrl         ?? FALLBACK.ctaButtonUrl;
  // btn2 is hidden when variant explicitly passes null
  const showBtn2  = !("btn2Label" in v) || v.btn2Label !== null;
  const btn2Label = v.btn2Label ?? s.ctaSecondButtonLabel ?? FALLBACK.ctaSecondButtonLabel;
  const btn2Url   = v.btn2Url   ?? s.ctaSecondButtonUrl   ?? FALLBACK.ctaSecondButtonUrl;

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
            {showBtn2 && (
              <a href={btn2Url} className="btn-alternate">{btn2Label}</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
