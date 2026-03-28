import { urlFor } from "../../sanity/lib/image";
const FALLBACK_SLIDES = [
  { src: "/assets/hero-slide-1.avif", alt: "Attesi Mexico landscape", eager: true },
  { src: "/assets/hero-slide-2.avif", alt: "Attesi Mexico retreat", eager: false },
  { src: "/assets/hero-slide-3.avif", alt: "Attesi Mexico nature", eager: false },
  { src: "/assets/hero-slide-4.avif", alt: "Attesi Mexico property", eager: false },
  { src: "/assets/hero-slide-5.avif", alt: "Attesi Mexico grounds", eager: false },
];
export default function Hero({ slides = [], settings = null }) {
  const sanitySlides = slides
    .filter((slide) => slide.image && slide.image.asset)
    .map((slide, i) => ({
      src: urlFor(slide.image).width(1800).url(),
      alt: slide.altText || slide.title || "Attesi Mexico",
      eager: i === 0,
    }));
  const resolvedSlides = sanitySlides.length > 0 ? sanitySlides : FALLBACK_SLIDES;
  const heading = settings?.heroHeading || null;
  const subheading = settings?.heroSubheading || "A retreat space rooted in nature, reflection, and meaningful growth.";
  const primaryLabel = settings?.heroButtonPrimaryLabel || "Check Availability";
  const primaryUrl = settings?.heroButtonPrimaryUrl || "#contact";
  return (
    <section className="hero" id="hero">
      <div className="swiper hero-swiper">
        <div className="swiper-wrapper">
          {resolvedSlides.map((slide, i) => (
            <div className="swiper-slide" key={i}>
              <div className="hero__bg">
                <img src={slide.src} alt={slide.alt} loading={slide.eager ? "eager" : "lazy"} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__overlay"></div>
      <div className="swiper-pagination hero-pagination"></div>
      <div className="hero__content">
        <h1 className="hero__title">
          {heading ? heading : (<>Connect to the Earth<br />Return to your Soul</>)}
        </h1>
        <p className="hero__subtitle">{subheading}</p>
        <div className="hero__buttons">
          <a href={primaryUrl} className="btn-primary">{primaryLabel}</a>
          <a href="#contact" className="btn-alternate">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
