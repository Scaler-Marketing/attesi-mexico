"use client";

/**
 * InstagramFeed
 * Reusable Elfsight Instagram feed section.
 * Drop anywhere on the site — heading, subtext, and background are customisable via props.
 *
 * Props:
 *   eyebrow   {string}  — small all-caps label above heading (default: "Follow Along")
 *   heading   {string}  — section heading (default: "Follow Us on Instagram")
 *   subtext   {string}  — body copy below heading
 *   bg        {string}  — CSS background value (default: "#ECD7C1")
 */
export default function InstagramFeed({
  eyebrow = "Follow Along",
  heading = "Follow Us on Instagram",
  subtext = "Step inside Attesi through the lens — land, light, and the moments that make this place unlike anywhere else.",
  bg = "#ECD7C1",
}) {
  return (
    <section className="instagram-feed section" style={{ background: bg }}>
      {/* Scoped style — only targets Elfsight post items inside this component */}
      <style>{`
        .instagram-feed .eapps-instagram-feed-posts-item {
          border-radius: 1rem;
        }
      `}</style>

      <div className="container">
        <div className="instagram-feed__header">
          <span className="section-tag">{eyebrow}</span>
          <h2 className="instagram-feed__heading">{heading}</h2>
          {subtext && <p className="instagram-feed__subtext">{subtext}</p>}
        </div>

        <div className="instagram-feed__embed">
          <script src="https://elfsightcdn.com/platform.js" async />
          <div
            className="elfsight-app-2cf3358a-c5c5-451b-8923-e0fe13d891c8"
            data-elfsight-app-lazy="true"
          />
        </div>
      </div>
    </section>
  );
}
