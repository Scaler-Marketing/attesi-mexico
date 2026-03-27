import "../lodging.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ClientAnimations from "../components/ClientAnimations";
import Link from "next/link";
import { sanityFetch } from "../../sanity/lib/live";
import { lodgingsQuery } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/image";

export const metadata = {
  title: "Lodging — Attesi Mexico",
  description:
    "Discover your perfect stay at Attesi — from glamping tents nestled in nature to private villas designed for deep rest and renewal.",
  openGraph: {
    title: "Lodging — Attesi Mexico",
    description:
      "Discover your perfect stay at Attesi — from glamping tents nestled in nature to private villas designed for deep rest and renewal.",
    images: [{ url: "/assets/og-lodging.jpg", width: 1200, height: 630 }],
  },
};

export default async function LodgingPage() {
  let lodgings = [];
  try {
    const { data } = await sanityFetch({ query: lodgingsQuery });
    lodgings = data || [];
  } catch (e) {
    // Sanity unavailable — empty state shown below
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="lodging-hero">
          <div className="lodging-hero__bg" />
          <div className="lodging-hero__overlay" />
          <div className="container lodging-hero__content">
            <span className="section-tag">Where You&rsquo;ll Stay</span>
            <h1 className="lodging-hero__title">Lodging at Attesi</h1>
            <p className="lodging-hero__subtitle">
              Rest deeply in spaces designed to connect you with nature, community, and yourself. From glamping tents under the stars to private villas surrounded by gardens, every accommodation at Attesi is an experience in itself.
            </p>
          </div>
        </section>

        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="lodging-intro section">
          <div className="container lodging-intro__inner">
            <div className="lodging-intro__text">
              <h2>A Place to Truly Rest</h2>
              <p>
                At Attesi, lodging is not just a place to sleep — it is an integral part of the retreat experience. Each accommodation option has been thoughtfully designed to offer comfort, privacy, and a deep sense of belonging to the land around you.
              </p>
            </div>
          </div>
        </section>

        {/* ── Lodging Cards Grid ────────────────────────────────────────── */}
        <section className="lodging-grid-section section">
          <div className="container">
            {lodgings.length === 0 ? (
              <p className="lodging-empty">Lodging options coming soon. Check back shortly.</p>
            ) : (
              <div className="lodging-cards">
                {lodgings.map((lodge) => {
                  const imgUrl = lodge.cardImage
                    ? urlFor(lodge.cardImage).width(900).height(620).fit("crop").url()
                    : null;

                  return (
                    <article key={lodge._id} className="lodging-card">
                      <div className="lodging-card__image">
                        {imgUrl ? (
                          <img src={imgUrl} alt={lodge.title} loading="lazy" />
                        ) : (
                          <div className="lodging-card__placeholder">
                            <span>{lodge.title.charAt(0)}</span>
                          </div>
                        )}
                        {lodge.totalUnits && (
                          <span className="lodging-card__badge">
                            {lodge.totalUnits} {lodge.totalUnits === 1 ? "Unit" : "Units"}
                          </span>
                        )}
                      </div>
                      <div className="lodging-card__body">
                        <h3 className="lodging-card__title">{lodge.title}</h3>
                        {lodge.tagline && (
                          <p className="lodging-card__tagline">{lodge.tagline}</p>
                        )}
                        {lodge.cardDescription && (
                          <p className="lodging-card__desc">{lodge.cardDescription}</p>
                        )}
                        {/* Quick stats row */}
                        {(lodge.guestCapacity || (lodge.bedTypes && lodge.bedTypes.length > 0)) && (
                          <div className="lodging-card__stats">
                            {lodge.guestCapacity && (
                              <span className="lodging-card__stat">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.75"/>
                                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                                </svg>
                                Sleeps {lodge.guestCapacity}
                              </span>
                            )}
                            {lodge.bedTypes && lodge.bedTypes.length > 0 && (
                              <span className="lodging-card__stat">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                  <path d="M2 4v16M2 8h20v12H2M2 12h20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                {lodge.bedTypes.map((b) => b.label).join(" · ")}
                              </span>
                            )}
                          </div>
                        )}
                        <Link href={`/lodging/${lodge.slug}`} className="btn-primary btn--sm">
                          View Details
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
