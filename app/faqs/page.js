import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import ClientAnimations from "@/app/components/ClientAnimations";
import FaqsClient from "./FaqsClient";
import PageHero from "@/app/components/PageHero";
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
      <PageHero
        eyebrow="Help & Information"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your visit to Attesi."
        bgImage="url('https://attesi.mx/wp-content/uploads/2022/12/galeria-home-planea-1-1.jpg')"
        bgPos="center 40%"
      />

      {/* ── TABBED FAQ ── */}
      <FaqsClient />

      {/* ── CTA ── */}
      <CTA settings={siteSettings} />
      <Footer />
      <ClientAnimations />
    </>
  );
}
