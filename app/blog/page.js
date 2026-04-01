import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import ClientAnimations from "@/app/components/ClientAnimations";
import PageHero from "@/app/components/PageHero";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostsQuery, siteSettingsQuery, blogListingPageQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import BlogClient from "./BlogClient";
import "../blog.css";

export const metadata = {
  title: "Blog — Attesi Mexico",
  description:
    "Insights on wellness, kosher living, nature, sustainability, and intentional retreat from the Attesi community in Villa de Allende, Mexico.",
};

export default async function BlogPage() {
  const [{ data: posts }, { data: siteSettings }, { data: page }] = await Promise.all([
    sanityFetch({ query: blogPostsQuery }).catch(() => ({ data: [] })),
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
    sanityFetch({ query: blogListingPageQuery }).catch(() => ({ data: null })),
  ]);

  const allPosts = (posts || []).map((post) => ({
    ...post,
    coverImageUrl: post.coverImage?.asset
      ? urlFor(post.coverImage).width(900).height(600).fit("crop").url()
      : null,
    coverImageAlt: post.coverImage?.alt || post.title,
  }));

  const heroBg = page?.heroImage?.asset
    ? `url('${urlFor(page.heroImage).width(1800).quality(85).url()}')`
    : "url('https://attesi.mx/wp-content/uploads/2022/12/galeria-home-planea-1-1.jpg')";

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <PageHero
        eyebrow={page?.heroEyebrow || "From the Land"}
        title={page?.heroHeading || "The Attesi Journal"}
        subtitle={page?.heroSubheading || "Stories, insights, and wisdom from our community in the mountains of Mexico."}
        bgImage={heroBg}
        heroImagePosition={page?.heroImagePosition}
        bgPos="center 40%"
      />

      {/* ── BLOG GRID (client — search + sort) ── */}
      <BlogClient posts={allPosts} />

      <CTA settings={siteSettings} />
      <Footer />
      <ClientAnimations />
    </>
  );
}
