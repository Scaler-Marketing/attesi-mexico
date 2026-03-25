"use client";
import { useState, useRef, useEffect } from "react";

/* ─── Single accordion item ─────────────────────────────────────── */
function FaqItem({ faq, index, title }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      className={`exp-detail-faq${open ? " exp-detail-faq--open" : ""}`}
      key={index}
    >
      <button
        className="exp-detail-faq__question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
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
          transition: "max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p className="exp-detail-faq__answer">{faq.answer}</p>
      </div>
    </div>
  );
}

/* ─── Accordion list ─────────────────────────────────────────────── */
export default function FaqAccordion({ faqs, title = "Frequently Asked Questions" }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <div className="exp-detail-faqs__list">
      {faqs.map((faq, i) => (
        <FaqItem key={i} faq={faq} index={i} title={title} />
      ))}
    </div>
  );
}
