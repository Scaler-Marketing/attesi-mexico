"use client";
import { useState } from "react";

export default function ContactForm({ heading, subheading }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — replace with real endpoint when ready
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            color: "var(--brand-dark)",
            marginBottom: "0.75rem",
          }}
        >
          Message Received
        </h3>
        <p style={{ color: "var(--brand-earth)", lineHeight: "1.7" }}>
          Thank you for reaching out. A member of our team will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <>
      <h2 className="contact-form__heading">
        {heading || "Send Us a Message"}
      </h2>
      <p className="contact-form__sub">
        {subheading ||
          "Tell us about your group, dates, and what you are looking for. We will get back to you within 24 hours."}
      </p>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="contact-form__input"
              placeholder="Sarah"
              required
            />
          </div>
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="lastName">
              Last Name <span>*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="contact-form__input"
              placeholder="Cohen"
              required
            />
          </div>
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="email">
            Email Address <span>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="contact-form__input"
            placeholder="sarah@example.com"
            required
          />
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="contact-form__input"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="interest">
            I am interested in
          </label>
          <select id="interest" name="interest" className="contact-form__select">
            <option value="">Select an option…</option>
            <option value="retreat">Planning a Retreat</option>
            <option value="accommodation">Accommodation Inquiry</option>
            <option value="experience">Booking an Experience</option>
            <option value="other">General Inquiry</option>
          </select>
        </div>

        <div className="contact-form__row">
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="guests">
              Number of Guests
            </label>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              className="contact-form__input"
              placeholder="e.g. 12"
            />
          </div>
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="dates">
              Preferred Dates
            </label>
            <input
              id="dates"
              name="dates"
              type="text"
              className="contact-form__input"
              placeholder="e.g. June 2026"
            />
          </div>
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="message">
            Message <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="contact-form__textarea"
            placeholder="Tell us a little about your group and what you are hoping to experience at Attesi…"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className="contact-form__submit"
          disabled={loading}
        >
          {loading ? "Sending…" : "Send Message"}
        </button>
        <p className="contact-form__note">
          We typically respond within 24 hours. Your information is kept private and never shared.
        </p>
      </form>
    </>
  );
}
