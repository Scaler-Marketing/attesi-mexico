import "../../lodging.css";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ClientAnimations from "../../components/ClientAnimations";
import FaqAccordion from "../../components/FaqAccordion";
import LodgingGallery from "../../components/LodgingGallery";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import {
  lodgingBySlugQuery,
  lodgingSlugsQuery,
} from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

/* ─── Static params for ISR ──────────────────────────────────────────────── */
export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(lodgingSlugsQuery);
    return (slugs || []).map((s) => ({ slug: s.slug }));
  } catch {
    return ["glamping", "villas-norte", "villas-paz"].map((slug) => ({ slug }));
  }
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lodge = await client
    .fetch(lodgingBySlugQuery, { slug })
    .catch(() => null);
  if (!lodge) return { title: "Lodging — Attesi Mexico" };

  const ogImage = lodge.openGraphImage
    ? urlFor(lodge.openGraphImage).width(1200).height(630).fit("crop").url()
    : lodge.heroImage
    ? urlFor(lodge.heroImage).width(1200).height(630).fit("crop").url()
    : null;

  return {
    title: lodge.seoTitle || `${lodge.title} — Attesi Mexico`,
    description:
      lodge.seoDescription ||
      lodge.cardDescription ||
      `Stay in ${lodge.title} at Attesi Mexico.`,
    openGraph: {
      title: lodge.seoTitle || `${lodge.title} — Attesi Mexico`,
      description:
        lodge.seoDescription ||
        lodge.cardDescription ||
        `Stay in ${lodge.title} at Attesi Mexico.`,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
  };
}

/* ─── Portable Text components ───────────────────────────────────────────── */
const ptComponents = {
  block: {
    normal: ({ children }) => (
      <p className="lodging-detail__body-para">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="lodging-detail__body-h2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="lodging-detail__body-h3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="lodging-detail__body-quote">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default async function LodgingDetailPage({ params }) {
  const { slug } = await params;

  let lodge = null;
  try {
    lodge = await client.fetch(lodgingBySlugQuery, { slug });
  } catch (e) {
    // Sanity unavailable
  }

  if (!lodge) notFound();

  const heroUrl = lodge.heroImage
    ? urlFor(lodge.heroImage).width(1600).height(900).fit("crop").url()
    : lodge.cardImage
    ? urlFor(lodge.cardImage).width(1600).height(900).fit("crop").url()
    : null;

  const galleryImages = (lodge.gallery || []).map((img) => ({
    url: urlFor(img).width(900).height(640).fit("crop").url(),
    fullUrl: urlFor(img).width(2400).url(),
    alt: img.alt || lodge.title,
    caption: img.caption || null,
  }));

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="lodging-detail-hero">
          <div
            className={`lodging-detail-hero__bg${
              heroUrl ? "" : " lodging-detail-hero__bg--placeholder"
            }`}
          >
            {heroUrl && (
              <img src={heroUrl} alt={lodge.title} loading="eager" />
            )}
          </div>
          <div className="lodging-detail-hero__overlay" />
          <div className="lodging-detail-hero__content container">
            <Link href="/lodging" className="lodging-detail-hero__back">
              ← All Lodging
            </Link>
            <h1 className="lodging-detail-hero__title">{lodge.title}</h1>
            {lodge.tagline && (
              <p className="lodging-detail-hero__tagline">{lodge.tagline}</p>
            )}
            {/* Quick stats bar */}
            {(lodge.guestCapacity ||
              lodge.totalUnits ||
              (lodge.bedTypes && lodge.bedTypes.length > 0)) && (
              <div className="lodging-detail-hero__stats">
                {lodge.guestCapacity && (
                  <span className="lodging-detail-hero__stat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.75"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                    </svg>
                    Sleeps {lodge.guestCapacity}
                  </span>
                )}
                {lodge.bedTypes &&
                  lodge.bedTypes.map((bt, i) => (
                    <span key={i} className="lodging-detail-hero__stat">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M2 4v16M2 8h20v12H2M2 12h20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {bt.count ? `${bt.label} ×${bt.count}` : bt.label}
                    </span>
                  ))}
                {lodge.totalUnits && (
                  <span className="lodging-detail-hero__stat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75"/>
                      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                    </svg>
                    {lodge.totalUnits} Units
                  </span>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ── Description + Amenities ───────────────────────────────────── */}
        <section className="lodging-detail-body section">
          <div className="container lodging-detail-body__inner">
            {/* Left: description */}
            <div className="lodging-detail-body__text">
              {lodge.description && lodge.description.length > 0 ? (
                <PortableText value={lodge.description} components={ptComponents} />
              ) : lodge.cardDescription ? (
                <p className="lodging-detail__body-para">{lodge.cardDescription}</p>
              ) : null}

              {/* Bed types breakdown */}
              {lodge.bedTypes && lodge.bedTypes.length > 0 && (
                <div className="lodging-detail-beds">
                  <h3 className="lodging-detail-beds__title">Where You&rsquo;ll Sleep</h3>
                  <div className="lodging-detail-beds__grid">
                    {lodge.bedTypes.map((bt, i) => (
                      <div key={i} className="lodging-detail-beds__item">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M2 4v16M2 8h20v12H2M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                          <strong>{bt.label}</strong>
                          {bt.count && (
                            <span>{bt.count} {bt.count === 1 ? "unit" : "units"}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: amenities sidebar */}
            {lodge.amenities && lodge.amenities.length > 0 && (
              <aside className="lodging-detail-amenities">
                <h3 className="lodging-detail-amenities__title">Amenities</h3>
                <ul className="lodging-detail-amenities__list">
                  {lodge.amenities.map((item, i) => (
                    <li key={i} className="lodging-detail-amenities__item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="#contact-form" className="btn-primary lodging-detail-amenities__cta">
                  Inquire About {lodge.title}
                </Link>
              </aside>
            )}
          </div>
        </section>

        {/* ── Photo Gallery (Fancybox v6 lightbox) ──────────────────── */}
        <LodgingGallery images={galleryImages} />

        {/* ── FAQs ──────────────────────────────────────────────────────── */}
        {lodge.faqs && lodge.faqs.length > 0 && (
          <section className="lodging-detail-faqs section lodging-detail-faqs--alt">
            <div className="container-medium lodging-detail-faqs__inner">
              <h2 className="lodging-detail-faqs__heading">Frequently Asked Questions</h2>
              <p className="lodging-detail-faqs__sub">
                Everything you need to know about {lodge.title}.
              </p>
              <FaqAccordion faqs={lodge.faqs} title={lodge.title} />
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
