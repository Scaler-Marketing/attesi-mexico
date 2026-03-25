import "../../experiences/experiences-detail.css";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ClientAnimations from "../../components/ClientAnimations";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import {
  facilityBySlugQuery,
  facilitySlugsQuery,
} from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

/* ─── Static params for ISR ──────────────────────────────────────────────── */
export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(facilitySlugsQuery);
    return (slugs || []).map((s) => ({ slug: s.slug }));
  } catch {
    return [
      "midrash",
      "sabata-restaurant",
      "market-cafe",
      "arbol-juegos-sala",
      "outdoor-spaces",
      "glamping-retreat-center",
      "the-farm",
      "huertos-garden",
      "natural-spring-mikvah",
    ].map((slug) => ({ slug }));
  }
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const fac = await client
    .fetch(facilityBySlugQuery, { slug })
    .catch(() => null);
  if (!fac) return { title: "Facility — Attesi Mexico" };
  return {
    title: fac.seoTitle || `${fac.title} — Attesi Mexico`,
    description:
      fac.seoDescription ||
      fac.cardDescription ||
      `Explore ${fac.title} at Attesi Mexico.`,
  };
}

/* ─── Category labels ────────────────────────────────────────────────────── */
const CATEGORY_LABELS = {
  dining: "Dining",
  wellness: "Wellness",
  nature: "Nature & Gardens",
  accommodation: "Accommodation",
  community: "Community",
  farm: "Farm & Agriculture",
};

/* ─── Portable Text components ───────────────────────────────────────────── */
const ptComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default async function FacilityDetailPage({ params }) {
  const { slug } = await params;

  let fac = null;
  try {
    fac = await client.fetch(facilityBySlugQuery, { slug });
  } catch (e) {
    // Sanity unavailable
  }

  if (!fac) notFound();

  const heroUrl = fac.heroImage
    ? urlFor(fac.heroImage).width(1600).height(900).fit("crop").url()
    : fac.cardImage
    ? urlFor(fac.cardImage).width(1600).height(900).fit("crop").url()
    : null;

  const categoryLabel = CATEGORY_LABELS[fac.category] || fac.category || "";

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="exp-detail-hero">
          <div
            className={`exp-detail-hero__bg${heroUrl ? "" : " exp-detail-hero__bg--placeholder"}`}
          >
            {heroUrl && <img src={heroUrl} alt={fac.title} loading="eager" />}
          </div>
          <div className="exp-detail-hero__overlay" />
          <div className="exp-detail-hero__content container">
            <div className="exp-detail-hero__meta">
              <Link href="/facilities" className="exp-detail-hero__back">
                ← All Facilities
              </Link>
              {categoryLabel && (
                <span className="exp-detail-hero__category">{categoryLabel}</span>
              )}
            </div>
            <h1 className="exp-detail-hero__title">{fac.title}</h1>
            {fac.cardDescription && (
              <p className="exp-detail-hero__tagline">{fac.cardDescription}</p>
            )}
          </div>
        </section>

        {/* ── About + Highlights ────────────────────────────────────────── */}
        <section className="exp-detail-about section">
          <div className="container exp-detail-about__inner">
            <div className="exp-detail-about__body">
              {fac.about && fac.about.length > 0 ? (
                <PortableText value={fac.about} components={ptComponents} />
              ) : fac.cardDescription ? (
                <p>{fac.cardDescription}</p>
              ) : null}
            </div>

            {fac.highlights && fac.highlights.length > 0 && (
              <aside className="exp-detail-about__sidebar">
                <div className="exp-detail-sidebar-card">
                  <h3>Highlights</h3>
                  <ul className="exp-detail-highlights">
                    {fac.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────────────────────────── */}
        {fac.gallery && fac.gallery.length > 0 && (
          <section className="exp-detail-gallery section">
            <div className="container">
              <h2 className="exp-detail-gallery__heading">Gallery</h2>
              <div className="exp-detail-gallery__grid">
                {fac.gallery.map((img, i) => {
                  const gUrl = urlFor(img).width(900).height(600).fit("crop").url();
                  return (
                    <figure key={i} className="exp-detail-gallery__item">
                      <img src={gUrl} alt={img.alt || fac.title} loading="lazy" />
                      {img.caption && <figcaption>{img.caption}</figcaption>}
                    </figure>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── FAQs ──────────────────────────────────────────────────────── */}
        {fac.faqs && fac.faqs.length > 0 && (
          <section className="exp-detail-faqs--alt section">
            <div className="container exp-detail-faqs__inner">
              <div className="exp-detail-faqs__header">
                <h2>Frequently Asked Questions</h2>
              </div>
              <div className="exp-detail-faqs__list">
                {fac.faqs.map((faq, i) => (
                  <div key={i} className="faq-card">
                    <div className="faq-card__question-row">
                      <div className="faq-card__left">
                        <span className="faq-card__eyebrow">Everything you need to know</span>
                        <p className="faq-card__question">{faq.question}</p>
                      </div>
                      <button
                        className="faq-card__toggle"
                        aria-expanded="false"
                        aria-label="Toggle answer"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>
                    <div className="faq-card__answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTA />
      </main>
      <Footer />
      <ClientAnimations />
    </>
  );
}
