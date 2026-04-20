/**
 * PageHero — shared full-bleed photo hero for all listing/static pages.
 *
 * Server component — must NOT be "use client" so that Sanity stega source maps
 * are preserved and the Presentation Tool can draw click-to-edit overlays.
 *
 * Props:
 *   eyebrow           {string}  – small uppercase label above the title
 *   title             {string}  – main h1 text
 *   subtitle          {string}  – italic lead paragraph below the title
 *   bgImage           {string}  – CSS background-image value, e.g. "url('/img/hero.jpg')"
 *   bgPos             {string}  – CSS background-position override (legacy), default "center"
 *   heroImagePosition {string}  – Sanity field: "top" | "center" | "bottom"
 *   centered          {boolean} – center-align content (used for Team page)
 */

const POSITION_MAP = {
  top:    "center 25%",
  center: "center center",
  bottom: "center 75%",
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  bgPos,
  heroImagePosition,
  centered = false,
}) {
  // heroImagePosition (from Sanity) takes priority; fall back to bgPos prop; then default to center
  const resolvedPos = POSITION_MAP[heroImagePosition] || bgPos || "center center";

  return (
    <section className={`page-hero${centered ? " page-hero--centered" : ""}`}>
      <div
        className="page-hero__bg"
        style={bgImage ? { backgroundImage: bgImage, backgroundPosition: resolvedPos } : undefined}
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
