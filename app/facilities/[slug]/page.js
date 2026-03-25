import "../../experiences/experiences-detail.css";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ClientAnimations from "../../components/ClientAnimations";
import FaqAccordion from "../../components/FaqAccordion";
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
      "sabata",
      "cafe",
      "central-garden",
      "outdoor-spaces",
      "retreat-center",
      "farm",
      "huertos",
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
    normal: ({ children }) => (
      <p className="exp-detail__body-para">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="exp-detail__body-h2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="exp-detail__body-h3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="exp-detail__body-quote">{children}</blockquote>
    ),
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

  const galleryImages = (fac.gallery || []).map((img) => ({
    url: urlFor(img).width(900).height(600).fit("crop").url(),
    alt: img.alt || fac.title,
    caption: img.caption || null,
  }));

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
                <p className="exp-detail__body-para">{fac.cardDescription}</p>
              ) : null}
            </div>

            {fac.highlights && fac.highlights.length > 0 && (
              <aside className="exp-detail-about__highlights">
                <h3 className="exp-detail-about__highlights-title">Highlights</h3>
                <ul className="exp-detail-about__highlights-list">
                  {fac.highlights.map((h, i) => (
                    <li key={i} className="exp-detail-about__highlight-item">
                      <span className="exp-detail-about__highlight-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────────────────────────── */}
        {galleryImages.length > 0 && (
          <section className="exp-detail-gallery section">
            <div className="container">
              <div className="exp-detail-gallery__grid">
                {galleryImages.map((img, i) => (
                  <figure key={i} className="exp-detail-gallery__item">
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="exp-detail-gallery__img"
                      loading="lazy"
                    />
                    {img.caption && (
                      <figcaption className="exp-detail-gallery__caption">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FAQs ──────────────────────────────────────────────────────── */}
        {fac.faqs && fac.faqs.length > 0 && (
          <section className="exp-detail-faqs section exp-detail-faqs--alt">
            <div className="container-medium exp-detail-faqs__inner">
              <h2 className="exp-detail-faqs__heading">Frequently Asked Questions</h2>
              <p className="exp-detail-faqs__sub">Everything you need to know about {fac.title}.</p>
              <FaqAccordion faqs={fac.faqs} title={fac.title} />
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
