const testimonials = [
  {
    text: "My stay at Attesi Mexico was absolutely wonderful! The staff were incredibly friendly and attentive, making sure all my needs were met. The location was perfect, allowing easy access to local attractions. I highly recommend this place to anyone looking for a relaxing getaway.",
    author: "John Doe",
    location: "New York, USA",
  },
  {
    text: "I had an amazing experience at Attesi Mexico. The rooms were spacious and beautifully decorated. I particularly enjoyed the delicious breakfast every morning. The beach was just a short walk away, which made my stay even more enjoyable. I can't wait to return!",
    author: "Jane Smith",
    location: "London, UK",
  },
  {
    text: "Attesi Mexico exceeded my expectations! The hospitality was top-notch, and the amenities were fantastic. I loved the pool area and the vibrant atmosphere. It was the perfect place to unwind after a day of exploring. Highly recommended!",
    author: "Carlos Martinez",
    location: "Madrid, Spain",
  },
  {
    text: "Staying at Attesi was a truly transformative experience. The natural springs, the organic food, and the warm community made it feel like home. I left feeling renewed and deeply grateful. A must-visit for anyone seeking meaningful rest.",
    author: "Emily Chen",
    location: "Toronto, Canada",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials__header" data-animate="">
          <div>
            <h2 className="testimonials__title">Customer Reviews</h2>
            <p className="testimonials__subtitle">See what our guests are saying about Attesi Mexico</p>
          </div>
          <a href="#" className="btn-primary">View All Reviews</a>
        </div>
        <div className="testimonials__track-wrapper">
          <div className="testimonials__track">
            {testimonials.map((t) => (
              <article className="testimonial-card" data-animate="" key={t.author}>
                <div className="testimonial-card__brand">
                  <img src="/assets/logo-icon-only.png" alt="Attesi" width="40" height="40" />
                  <span>ATTESI</span>
                </div>
                <div className="testimonial-card__stars">{"★★★★★"}</div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <strong>{t.author}</strong>
                  <span>{t.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="testimonials__dots">
          <span className="testimonials__dot testimonials__dot--active"></span>
          <span className="testimonials__dot"></span>
        </div>
      </div>
    </section>
  );
}
