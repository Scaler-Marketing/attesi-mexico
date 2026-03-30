"use client";

/**
 * PageHero — shared full-bleed photo hero for all listing/static pages.
 *
 * Props:
 *   eyebrow   {string}  – small uppercase label above the title
 *   title     {string}  – main h1 text
 *   subtitle  {string}  – italic lead paragraph below the title
 *   bgImage   {string}  – CSS background-image value, e.g. "url('/img/hero.jpg')"
 *   bgPos     {string}  – CSS background-position, default "center 40%"
 *   centered  {boolean} – center-align content (used only for Team page)
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  bgPos = "center 40%",
  centered = false,
}) {
  return (
    <section className={`page-hero${centered ? " page-hero--centered" : ""}`}>
      <div
        className="page-hero__bg"
        style={bgImage ? { backgroundImage: bgImage, backgroundPosition: bgPos } : undefined}
      />
      <div className="page-hero__overlay" />
      <div className="page-hero__content container">
        {eyebrow && <span className="page-hero__eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
