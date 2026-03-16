export default function CTA() {
  return (
    <section className="cta section" id="contact">
      <div className="cta__bg">
        <img src="https://attesi.mx/wp-content/uploads/2022/12/galeria-home-planea-1-1.jpg" alt="Planning your visit" loading="lazy" />
      </div>
      <div className="cta__overlay"></div>
      <div className="container cta__inner">
        <div className="cta__content" data-animate="">
          <h2 className="cta__title">Let Us Take Care of Your Retreat Needs. Get a Free Quote Today.</h2>
          <p className="cta__subtitle">Interested in learning how Attesi can assist you with your retreat, event, or wellness experience?</p>
          <div className="cta__buttons">
            <a href="#" className="btn-primary">Check Availability</a>
            <a href="#" className="btn-alternate">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
