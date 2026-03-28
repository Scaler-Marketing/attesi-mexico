"use client";
import { useState } from "react";

const FALLBACK_FAQS = [
  { _key: "f1", question: "What is included in a stay at Attesi Lodge?", answer: "Your stay includes cozy glamping accommodations, access to wellness activities, and opportunities to connect with nature through guided experiences. Additional services like meals and specialized activities can be booked separately." },
  { _key: "f2", question: "Is Attesi Lodge family-friendly?", answer: "Yes, we welcome families! Our retreat offers activities suitable for all ages, including nature walks, farm-to-table dining, and wellness programs designed to foster connection and relaxation." },
  { _key: "f3", question: "What makes Attesi Lodge sustainable?", answer: "We prioritize eco-friendly practices, including sourcing local ingredients, minimizing waste, and using renewable energy. Our commitment to sustainability extends to supporting the surrounding community and preserving the natural environment." },
];

export default function HomeFAQ({ settings = null }) {
  const [openIndex, setOpenIndex] = useState(null);

  const eyebrow = settings?.faqEyebrow || "FAQs";
  const heading = settings?.faqHeading || "Frequently Asked Questions";
  const subheading = settings?.faqSubheading || "Everything you need to know before your stay at Attesi Lodge.";
  const faqs = settings?.faqs?.length > 0 ? settings.faqs : FALLBACK_FAQS;

  return (
    <section className="home-faq section" id="faq">
      <div className="container">
        <span className="section-tag">{eyebrow}</span>
        <h2 className="exp-detail-faqs__heading">{heading}</h2>
        <p className="exp-detail-faqs__sub">{subheading}</p>
        <div className="exp-detail-faqs__list">
          {faqs.map((faq, i) => (
            <div
              key={faq._key || i}
              className={`exp-detail-faq${openIndex === i ? " exp-detail-faq--open" : ""}`}
            >
              <button
                className="exp-detail-faq__question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <div className="exp-detail-faq__question-left">
                  <span className="exp-detail-faq__question-text">{faq.question}</span>
                </div>
                <span className="exp-detail-faq__icon">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <p className="exp-detail-faq__answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
