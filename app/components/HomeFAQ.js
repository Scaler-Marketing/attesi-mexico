"use client";
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What is included in a stay at Attesi Lodge?",
    answer:
      "Your stay includes cozy glamping accommodations, access to wellness activities, and opportunities to connect with nature through guided experiences. Additional services like meals and specialized activities can be booked separately.",
  },
  {
    question: "Is Attesi Lodge family-friendly?",
    answer:
      "Yes, we welcome families! Our retreat offers activities suitable for all ages, including nature walks, farm-to-table dining, and wellness programs designed to foster connection and relaxation.",
  },
  {
    question: "What makes Attesi Lodge sustainable?",
    answer:
      "We prioritize eco-friendly practices, including sourcing local ingredients, minimizing waste, and using renewable energy. Our commitment to sustainability extends to supporting the surrounding community and preserving the natural environment.",
  },
];

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div className={`exp-detail-faq${open ? " exp-detail-faq--open" : ""}`}>
      <button
        className="exp-detail-faq__question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        type="button"
      >
        <div className="exp-detail-faq__question-left">
          <span className="exp-detail-faq__eyebrow">General FAQ</span>
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
          transition: "max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p className="exp-detail-faq__answer">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function HomeFAQ() {
  return (
    <section className="home-faq section">
      <div className="container-medium">
        <p className="section-tag">FAQs</p>
        <h2 className="exp-detail-faqs__heading">Frequently Asked Questions</h2>
        <p className="exp-detail-faqs__sub">
          Everything you need to know before your stay at Attesi Lodge.
        </p>
        <div className="exp-detail-faqs__list">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
