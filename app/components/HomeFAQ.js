"use client";
import { useState, useRef, useEffect } from "react";

const FALLBACK_FAQS = [
  { _key: "f1", question: "What is included in a stay at Attesi Lodge?", answer: "Your stay includes cozy glamping accommodations, access to wellness activities, and opportunities to connect with nature through guided experiences. Additional services like meals and specialized activities can be booked separately." },
  { _key: "f2", question: "Is Attesi Lodge family-friendly?", answer: "Yes, we welcome families! Our retreat offers activities suitable for all ages, including nature walks, farm-to-table dining, and wellness programs designed to foster connection and relaxation." },
  { _key: "f3", question: "What makes Attesi Lodge sustainable?", answer: "We prioritize eco-friendly practices, including sourcing local ingredients, minimizing waste, and using renewable energy. Our commitment to sustainability extends to supporting the surrounding community and preserving the natural environment." },
];

/* ─── Single accordion item — receives open state from parent ──────── */
function FaqItem({ faq, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`exp-detail-faq${isOpen ? " exp-detail-faq--open" : ""}`}>
      <button
        className="exp-detail-faq__question"
        onClick={onToggle}
        aria-expanded={isOpen}
        type="button"
      >
        <div className="exp-detail-faq__question-left">
          <span className="exp-detail-faq__question-text">{faq.question}</span>
        </div>
        <span className="exp-detail-faq__icon" aria-hidden="true">
          <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 5l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        className="exp-detail-faq__body"
        ref={bodyRef}
        style={{
          maxHeight: `${height}px`,
          overflow: "hidden",
          transition: "max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p className="exp-detail-faq__answer">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function HomeFAQ({ settings = null }) {
  const eyebrow    = settings?.faqEyebrow    || "FAQs";
  const heading    = settings?.faqHeading    || "Frequently Asked Questions";
  const subheading = settings?.faqSubheading || "Everything you need to know before your stay at Attesi Lodge.";
  const faqs       = settings?.faqs?.length > 0 ? settings.faqs : FALLBACK_FAQS;

  /* Lift open state here so toggling one item closes another in the SAME
     render cycle — close and open transitions run in parallel, no bounce. */
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="home-faq section" id="faq">
      <div className="container-medium">
        <span className="section-tag">{eyebrow}</span>
        <h2 className="exp-detail-faqs__heading">{heading}</h2>
        <p className="exp-detail-faqs__sub">{subheading}</p>
        <div className="exp-detail-faqs__list">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq._key || i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
