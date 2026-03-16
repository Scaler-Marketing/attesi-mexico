const slides = [
  { src: "/assets/hero-slide-1.avif", alt: "Attesi Mexico landscape", eager: true },
  { src: "/assets/hero-slide-2.avif", alt: "Attesi Mexico retreat", eager: true },
  { src: "/assets/hero-slide-3.avif", alt: "Attesi Mexico nature", eager: true },
  { src: "/assets/hero-slide-4.avif", alt: "Attesi Mexico property", eager: false },
  { src: "/assets/hero-slide-5.avif", alt: "Attesi Mexico grounds", eager: false },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="swiper hero-swiper">
        <div className="swiper-wrapper">
          {slides.map((slide, i) => (
            <div className="swiper-slide" key={i}>
              <div className="hero__bg">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading={slide.eager ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__overlay"></div>

      <div className="swiper-pagination hero-pagination"></div>

      <div className="hero__content">
        <h1 className="hero__title">
          Connect to the Earth<br />Return to your Soul
        </h1>
        <p className="hero__subtitle">
          A retreat space rooted in nature, reflection, and meaningful growth.
        </p>
        <div className="hero__buttons">
          <a href="#" className="btn-primary">Check Availability</a>
          <a href="#contact" className="btn-alternate">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
