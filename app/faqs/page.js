import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import ClientAnimations from "@/app/components/ClientAnimations";
import FaqsClient from "./FaqsClient";
import { sanityFetch } from "@/sanity/lib/live";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import "../faqs.css";

export const metadata = {
  title: "FAQs — Attesi Mexico",
  description:
    "Answers to your most common questions about staying at Attesi — lodging, experiences, facilities, and general information about the retreat.",
};

export default async function FaqsPage() {
  const { data: siteSettings } = await sanityFetch({ query: siteSettingsQuery });

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="faqs-hero">
        <div className="faqs-hero__bg" />
        <div className="faqs-hero__overlay" />
        <div className="faqs-hero__content container">
          <span className="faqs-hero__eyebrow">Help & Information</span>
          <h1 className="faqs-hero__title">Frequently Asked Questions</h1>
          <p className="faqs-hero__subtitle">
            Everything you need to know before your visit to Attesi.
          </p>
        </div>
      </section>

      {/* ── TABBED FAQ ── */}
      <FaqsClient />

      {/* ── CTA ── */}
      <CTA settings={siteSettings} />
      <Footer />
      <ClientAnimations />
    </>
  );
}
