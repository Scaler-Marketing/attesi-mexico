"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const FALLBACK_TESTIMONIALS = [
  { text: "Attesi was unlike anything I've experienced. The land, the people, the food — it all felt deeply intentional. I left feeling restored in ways I didn't expect.", author: "Sarah M.", location: "New York, USA" },
  { text: "From the moment we arrived, we felt held by something larger than ourselves. The Shabbat experience alone was worth the journey.", author: "Daniel K.", location: "Toronto, Canada" },
  { text: "I came for a retreat and left with a community. Attesi has a rare gift — it connects you to the earth and to each other at the same time.", author: "Rachel L.", location: "Los Angeles, USA" },
  { text: "The silence here is unlike anything I've found anywhere else. I arrived exhausted and left with a clarity I hadn't felt in years. Attesi is the real thing.", author: "Marcus T.", location: "Chicago, USA" },
  { text: "Every detail — the food, the ceremonies, the land — felt curated with so much care. We came as strangers and left as family. We're already planning our return.", author: "Leila R.", location: "Mexico City, Mexico" },
  { text: "I've been on many retreats but nothing has touched me the way Attesi did. The combination of nature, community, and intentional living is something truly special.", author: "James W.", location: "London, UK" },
];

export default function Testimonials({ testimonials = [], settings = null }) {
  const heading = settings?.testimonialsHeading || "What Our Guests Say";
  const subheading = settings?.testimonialsSubheading || "Hear from those who have experienced the land, the community, and the spirit of Attesi.";
  const items = testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;

  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const totalPages = Math.ceil(items.length / cardsPerPage);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 768) setCardsPerPage(1);
      else if (w < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollToPage = useCallback((pageIdx) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0];
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 24;
    const scrollX = pageIdx * cardsPerPage * (cardWidth + gap);
    track.scrollTo({ left: scrollX, behavior: "smooth" });
    setActiveIdx(pageIdx);
  }, [cardsPerPage]);

  function handlePrev() {
    scrollToPage(activeIdx > 0 ? activeIdx - 1 : totalPages - 1);
  }

  function handleNext() {
    scrollToPage(activeIdx < totalPages - 1 ? activeIdx + 1 : 0);
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function onScroll() {
      const card = track.children[0];
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = 24;
      const pageWidth = cardsPerPage * (cardWidth + gap);
      if (pageWidth === 0) return;
      const page = Math.round(track.scrollLeft / pageWidth);
      setActiveIdx(Math.min(page, totalPages - 1));
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [cardsPerPage, totalPages]);

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials__header" data-animate="">
          <div>
            <h2 className="testimonials__title">{heading}</h2>
            <p className="testimonials__subtitle">{subheading}</p>
          </div>
          <div className="testimonials__arrows">
            <button
              className="testimonials__arrow"
              onClick={handlePrev}
              aria-label="Previous reviews"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="testimonials__arrow"
              onClick={handleNext}
              aria-label="Next reviews"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="testimonials__track-wrapper">
          <div className="testimonials__track" ref={trackRef}>
            {items.map((t, i) => (
              <article className="testimonial-card" data-animate="" key={t.author || i}>
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
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={"testimonials__dot" + (i === activeIdx ? " testimonials__dot--active" : "")}
              onClick={() => scrollToPage(i)}
              aria-label={"Go to page " + (i + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
