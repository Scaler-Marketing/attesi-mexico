import "../contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientAnimations from "../components/ClientAnimations";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import { sanityFetch } from "../../sanity/lib/live";
import { contactPageQuery } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/image";
import InstagramFeed from "../components/InstagramFeed";

export const metadata = {
  title: "Contact — Attesi Mexico",
  description:
    "Get in touch with the Attesi team to plan your retreat, ask about our facilities, or learn more about what we offer.",
};

export default async function ContactPage() {
  const { data: page } = await sanityFetch({ query: contactPageQuery }).catch(
    () => ({ data: null })
  );

  const mapAddress = page?.mapAddress || "Manzana 004, 51009\nBarrio de San Miguel\nState of Mexico, Mexico";
  const mapDirectionsUrl =
    page?.mapDirectionsUrl ||
    "https://maps.google.com/?q=Manzana+004+51009+Barrio+de+San+Miguel+State+of+Mexico";
  const mapEmbedUrl =
    page?.mapEmbedUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0!2d-99.6!3d19.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzAwLjAiTiA5OcKwMzYnMDAuMCJX!5e0!3m2!1sen!2smx!4v1234567890";

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <PageHero
          eyebrow={page?.heroEyebrow || "Contact Us"}
          title={page?.heroHeading || "Let\u2019s Plan Your Retreat Together"}
          subtitle={page?.heroSubheading || "Tell us about your group and we will craft a personalized experience at Attesi."}
          bgImage={
            page?.heroImage?.asset
              ? urlFor(page.heroImage).width(1800).url()
              : "https://attesi.mx/wp-content/uploads/2024/04/home-slider-attesi-2.jpg"
          }
          bgPos="center 40%"
        />

        {/* ── Main Contact Section ───────────────────────────────────────── */}
        <section className="contact-main section">
          <div className="container contact-main__inner">
            {/* Info Column */}
            <aside className="contact-info">
              <div>
                <span className="section-tag">Contact Information</span>
                <h2 className="contact-info__heading">
                  Let&apos;s Plan Your Experience
                </h2>
                <p className="contact-info__intro">
                  Our team is here to help you design the perfect retreat, event, or stay at Attesi.
                  Reach out through any of the channels below.
                </p>
              </div>

              <div className="contact-info__items">
                {/* Email */}
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" />
                    </svg>
                  </div>
                  <div className="contact-info__item-body">
                    <span className="contact-info__item-label">Email</span>
                    <p className="contact-info__item-value">
                      <a href="mailto:lodge@attesi.mx">lodge@attesi.mx</a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-info__item-body">
                    <span className="contact-info__item-label">Phone / WhatsApp</span>
                    <p className="contact-info__item-value">
                      <a href="tel:+522072225187">+52 2072 225 187 47</a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-info__item-body">
                    <span className="contact-info__item-label">Location</span>
                    <address className="contact-info__item-value">
                      {mapAddress.split("\n").map((line, i) => (
                        <span key={i}>{line}{i < mapAddress.split("\n").length - 1 && <br />}</span>
                      ))}
                    </address>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="contact-info__item-label" style={{ marginBottom: "0.75rem" }}>
                  Follow Us
                </p>
                <div className="contact-info__social">
                  <a href="#" aria-label="Instagram" className="contact-info__social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Facebook" className="contact-info__social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="WhatsApp" className="contact-info__social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </aside>

            {/* Form Column — client component for interactivity */}
            <div className="contact-form-wrap">
              <ContactForm
                heading={page?.formHeading}
                subheading={page?.formSubheading}
              />
            </div>
          </div>
        </section>

        {/* ── Map Section ───────────────────────────────────────────────── */}
        <section className="contact-map section">
          <div className="container contact-map__inner">
            <div className="contact-map__copy">
              <span className="contact-map__eyebrow">
                {page?.mapEyebrow || "Find Us"}
              </span>
              <h2 className="contact-map__heading">
                {page?.mapHeading || "Located in the Highlands of the State of Mexico"}
              </h2>
              <address className="contact-map__address">
                {mapAddress.split("\n").map((line, i) => (
                  <span key={i}>{line}{i < mapAddress.split("\n").length - 1 && <br />}</span>
                ))}
              </address>
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map__directions"
              >
                Get Directions
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="contact-map__embed">
              <iframe
                src={mapEmbedUrl}
                title="Attesi Mexico location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* ── Instagram Feed ────────────────────────────────────────────── */}
        <InstagramFeed />
      </main>
      <Footer />
      <ClientAnimations />
    </>
  );
}
