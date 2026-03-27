import "../facilities.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ClientAnimations from "../components/ClientAnimations";
import Link from "next/link";
import { sanityFetch } from "../../sanity/lib/live";
import { facilitiesQuery } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/image";

export const metadata = {
  title: "Facilities — Attesi Mexico",
  description:
    "Explore the spaces that make Attesi a place apart — from farm-to-table dining and natural spring immersion to glamping retreats and working gardens.",
};

const CATEGORY_LABELS = {
  dining: "Dining",
  wellness: "Wellness",
  nature: "Nature & Gardens",
  accommodation: "Accommodation",
  community: "Community",
  farm: "Farm & Agriculture",
};

export default async function FacilitiesPage() {
  let facilities = [];
  try {
    const { data } = await sanityFetch({ query: facilitiesQuery });
    facilities = data || [];
  } catch (e) {
    // Sanity unavailable — empty state shown below
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="fac-hero">
          <div className="fac-hero__bg" />
          <div className="fac-hero__overlay" />
          <div className="container fac-hero__content">
            <span className="section-tag">The Spaces of Attesi</span>
            <h1 className="fac-hero__title">Places Built for Presence</h1>
            <p className="fac-hero__subtitle">
              Every space at Attesi is designed with intention — to nourish, restore, and connect you to the land and community around you.
            </p>
          </div>
        </section>

        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="fac-intro section">
          <div className="container fac-intro__inner">
            <div className="fac-intro__text">
              <h2>More Than Amenities</h2>
              <p>
                At Attesi, the facilities are not separate from the experience — they are the experience. From the restaurant that serves vegetables grown steps away, to the natural spring that flows year-round, each space reflects the values of intentional living, community, and deep connection to the land.
              </p>
            </div>
          </div>
        </section>

        {/* ── Facilities Grid ───────────────────────────────────────────── */}
        <section className="fac-grid-section section">
          <div className="container">
            {facilities.length === 0 ? (
              <p className="fac-empty">Facilities coming soon. Check back shortly.</p>
            ) : (
              <div className="exp-cards">
                {facilities.map((fac) => {
                  const imgUrl = fac.cardImage
                    ? urlFor(fac.cardImage).width(800).height(560).fit("crop").url()
                    : null;
                  const categoryLabel = CATEGORY_LABELS[fac.category] || fac.category || "";

                  return (
                    <article key={fac._id} className="exp-card">
                      <div className="exp-card__image">
                        {imgUrl ? (
                          <img src={imgUrl} alt={fac.title} loading="lazy" />
                        ) : (
                          <div className="exp-card__placeholder">
                            <span>{fac.title.charAt(0)}</span>
                          </div>
                        )}
                        {categoryLabel && (
                          <span className="exp-card__badge">{categoryLabel}</span>
                        )}
                      </div>
                      <div className="exp-card__body">
                        <h3 className="exp-card__title">{fac.title}</h3>
                        {fac.cardDescription && (
                          <p className="exp-card__desc">{fac.cardDescription}</p>
                        )}
                        <Link
                          href={`/facilities/${fac.slug}`}
                          className="btn-primary btn--sm"
                        >
                          Explore
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <ClientAnimations />
    </>
  );
}
