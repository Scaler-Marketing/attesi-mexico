import "../facilities.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ClientAnimations from "../components/ClientAnimations";
import PageHero from "../components/PageHero";
import PageIntro from "../components/PageIntro";
import Link from "next/link";
import { sanityFetch } from "../../sanity/lib/live";
import { facilitiesQuery, siteSettingsQuery, facilitiesListingPageQuery } from "../../sanity/lib/queries";
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
  let siteSettings = null;
  let page = null;
  try {
    const [{ data: facData }, { data: settings }, { data: pageData }] = await Promise.all([
      sanityFetch({ query: facilitiesQuery }),
      sanityFetch({ query: siteSettingsQuery }),
      sanityFetch({ query: facilitiesListingPageQuery }),
    ]);
    facilities = facData || [];
    siteSettings = settings;
    page = pageData;
  } catch (e) {
    // Sanity unavailable — empty state shown below
  }
  const heroBg = page?.heroImage?.asset
    ? `url('${urlFor(page.heroImage).width(1800).quality(85).url()}')`
    : "url('/assets/hero-slide-2.avif')";
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <PageHero
        eyebrow={page?.heroEyebrow || "The Spaces of Attesi"}
        title={page?.heroHeading || "Places Built for Presence"}
        subtitle={page?.heroSubheading || "Every space at Attesi is designed with intention — to nourish, restore, and connect you to the land and community around you."}
        bgImage={heroBg}
        heroImagePosition={page?.heroImagePosition}
        bgPos="center 40%"
      />

      <main>
        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <PageIntro
          eyebrow="The Spaces"
          heading="More Than Amenities"
          body="At Attesi, the facilities are not separate from the experience — they are the experience. From the restaurant that serves vegetables grown steps away, to the natural spring that flows year-round, each space reflects the values of intentional living, community, and deep connection to the land."
        />

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

        <CTA settings={siteSettings} />
      </main>
      <Footer />
      <ClientAnimations />
    </>
  );
}
