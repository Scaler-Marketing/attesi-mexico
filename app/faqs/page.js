import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import ClientAnimations from "@/app/components/ClientAnimations";
import FaqsClient from "./FaqsClient";
import PageHero from "@/app/components/PageHero";
import { sanityFetch } from "@/sanity/lib/live";
import { siteSettingsQuery, faqsPageQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import "../faqs.css";

export const metadata = {
  title: "FAQs — Attesi Mexico",
  description:
    "Answers to your most common questions about staying at Attesi — lodging, experiences, facilities, and general information about the retreat.",
};

export default async function FaqsPage() {
  const [{ data: siteSettings }, { data: page }] = await Promise.all([
    sanityFetch({ query: siteSettingsQuery }),
    sanityFetch({ query: faqsPageQuery }).catch(() => ({ data: null })),
  ]);
  const heroBg = page?.heroImage?.asset
    ? `url('${urlFor(page.heroImage).width(1800).quality(85).url()}')`
    : "url('https://attesi.mx/wp-content/uploads/2022/12/galeria-home-planea-1-1.jpg')";

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <PageHero
        eyebrow={page?.heroEyebrow || "Help & Information"}
        title={page?.heroHeading || "Frequently Asked Questions"}
        subtitle={page?.heroSubheading || "Everything you need to know before your visit to Attesi."}
        bgImage={heroBg}
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
