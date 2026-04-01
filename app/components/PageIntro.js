/**
 * PageIntro — reusable centered intro section
 * Matches the homepage Intro layout: eyebrow · heading · body · optional CTA button
 *
 * Props:
 *   eyebrow     {string}  — small orange label above heading (optional)
 *   heading     {string}  — large bold heading
 *   body        {string}  — paragraph text below heading
 *   body2       {string}  — optional second paragraph
 *   buttonLabel {string}  — CTA button text (omit to hide button)
 *   buttonUrl   {string}  — CTA button href
 */
export default function PageIntro({
  eyebrow,
  heading,
  body,
  body2,
  buttonLabel,
  buttonUrl,
}) {
  return (
    <section className="page-intro section">
      <div className="container">
        <div className="page-intro__content">
          {eyebrow && <span className="section-tag">{eyebrow}</span>}
          {heading && <h2 className="page-intro__heading">{heading}</h2>}
          {body && <p className="page-intro__body">{body}</p>}
          {body2 && <p className="page-intro__body page-intro__body--sub">{body2}</p>}
          {buttonLabel && buttonUrl && (
            <a href={buttonUrl} className="btn-primary">{buttonLabel}</a>
          )}
        </div>
      </div>
    </section>
  );
}
