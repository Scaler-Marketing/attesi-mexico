"use client";
import { useState } from "react";

const FALLBACK_FAQS = [
  { question: "What is included in a stay at Attesi Lodge?", answer: "Your stay includes cozy glamping accommodations, access to wellness activities, and opportunities to connect with nature through guided experiences. Additional services like meals and specialized activities can be booked separately." },
  { question: "Is Attesi Lodge family-friendly?", answer: "Yes, we welcome families! Our retreat offers activities suitable for all ages, including nature walks, farm-to-table dining, and wellness programs designed to foster connection and relaxation." },
  { question: "What makes Attesi Lodge sustainable?", answer: "We prioritize eco-friendly practices, including sourcing local ingredients, minimizing waste, and using renewable energy. Our commitment to sustainability extends to supporting the surrounding community and preserving the natural environment." },
];

export default function HomeFAQ({ settings = null }) {
  const [openIndex, setOpenIndex] = useState(null);
  const eyebrow = settings?.faqEyebrow || "FAQs";
  const heading = settings?.faqHeading || "Frequently Asked Questions";
  const subheading = settings?.faqSubheading || "Everything you need to know before your stay at Attesi Lodge.";
  const faqs = settings?.faqs?.length > 0 ? settings.faqs : FALLBACK_FAQS;

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq__header" data-animate="">
          <span className="section-tag">{eyebrow}</span>
          <h2 className="faq__heading">{heading}</h2>
          <p className="faq__subheading">{subheading}</p>
        </div>
        <div className="faq__list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq__item${openIndex === i ? " faq__item--open" : ""}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="faq__question">
                <span>{faq.question}</span>
                <svg className="faq__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {openIndex === i && (
                <div className="faq__answer"><p>{faq.answer}</p></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
