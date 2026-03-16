export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid" data-animate="">
          <div className="about__text">
            <span className="section-tag">About Attesi</span>
            <h2 className="about__heading">Serving Guests Seeking Nature &amp; Spiritual Growth</h2>
            <p className="about__body">
              Attesi Lodge is nestled in the highlands of the State of Mexico, surrounded by forests, natural springs, and organic gardens. Our dedicated team lives and works within the community we serve.
            </p>
            <p className="about__body">
              We take pride in offering transformative experiences rooted in sustainability, health, and spiritual connection. We operate year-round to ensure every guest finds peace and renewal.
            </p>
            <div className="about__buttons">
              <a href="#" className="btn-primary">Check Availability</a>
              <a href="#contact" className="btn-secondary">Contact Us</a>
            </div>
          </div>
          <div className="about__images">
            <div className="about__img about__img--main">
              <img src="https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-2.jpg" alt="Attesi Lodge at twilight" loading="lazy" />
            </div>
            <div className="about__img about__img--secondary">
              <img src="https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-4.jpg" alt="Mountain landscape near Attesi" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
