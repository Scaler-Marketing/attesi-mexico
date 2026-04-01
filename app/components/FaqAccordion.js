"use client";
import { useState, useRef, useEffect } from "react";

/* ─── Single accordion item — open state controlled by parent ──────── */
function FaqItem({ faq, title, isOpen, onToggle }) {
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
          <span className="exp-detail-faq__eyebrow">{title}</span>
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

/* ─── Accordion list — single open item, close+open in same render ─── */
export default function FaqAccordion({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  function handleToggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div className="exp-detail-faqs__list">
      {faqs.map((faq, i) => (
        <FaqItem
          key={i}
          faq={faq}
          title={title}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}
