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

function getCardsPerPage() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export default function Testimonials({ testimonials = [], settings = null }) {
  const heading = settings?.testimonialsHeading || "What Our Guests Say";
  const subheading = settings?.testimonialsSubheading || "Hear from those who have experienced the land, the community, and the spirit of Attesi.";
  const items = testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;

  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const totalPages = Math.ceil(items.length / cardsPerPage);

  // Update cardsPerPage on resize
  useEffect(() => {
    function update() {
      setCardsPerPage(getCardsPerPage());
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Scroll to a specific page index
  const scrollToPage = useCallback((pageIdx) => {
    const track = trackRef.current;
    if (!track) return;
    const clampedIdx = Math.max(0, Math.min(pageIdx, totalPages - 1));
    // Find the first card of this page
    const cardIndex = clampedIdx * cardsPerPage;
    const card = track.children[cardIndex];
    if (!card) return;
    const trackLeft = track.getBoundingClientRect().left;
    const cardLeft = card.getBoundingClientRect().left;
    track.scrollBy({ left: cardLeft - trackLeft, behavior: "smooth" });
    setActiveIdx(clampedIdx);
  }, [cardsPerPage, totalPages]);

  // Sync active dot on scroll using IntersectionObserver per card
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most-visible card
        let best = null;
        let bestRatio = -1;
        entries.forEach((entry) => {
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            best = entry.target;
          }
        });
        if (best) {
          const cardIdx = cards.indexOf(best);
          if (cardIdx >= 0) {
            setActiveIdx(Math.floor(cardIdx / cardsPerPage));
          }
        }
      },
      {
        root: track,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [cardsPerPage, items.length]);

  function handlePrev() {
    setActiveIdx((prev) => {
      const next = prev > 0 ? prev - 1 : totalPages - 1;
      scrollToPage(next);
      return next;
    });
  }

  function handleNext() {
    setActiveIdx((prev) => {
      const next = prev < totalPages - 1 ? prev + 1 : 0;
      scrollToPage(next);
      return next;
    });
  }

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
