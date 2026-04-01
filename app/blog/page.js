import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import ClientAnimations from "@/app/components/ClientAnimations";
import PageHero from "@/app/components/PageHero";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostsQuery, siteSettingsQuery, blogListingPageQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import "../blog.css";

export const metadata = {
  title: "Blog — Attesi Mexico",
  description:
    "Insights on wellness, kosher living, nature, sustainability, and intentional retreat from the Attesi community in Villa de Allende, Mexico.",
};

const CATEGORY_LABELS = {
  wellness: "Wellness",
  nature: "Nature & Wildlife",
  dining: "Kosher & Dining",
  "jewish-life": "Jewish Life",
  sustainability: "Sustainability",
  travel: "Travel Tips",
  community: "Community",
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const [{ data: posts }, { data: siteSettings }, { data: page }] = await Promise.all([
    sanityFetch({ query: blogPostsQuery }).catch(() => ({ data: [] })),
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
    sanityFetch({ query: blogListingPageQuery }).catch(() => ({ data: null })),
  ]);

  const allPosts = posts || [];
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

      {/* ── ALL POSTS GRID ── */}
      <section className="blog-grid-section section">
        <div className="container">
          {allPosts.length === 0 ? (
            <p className="blog-empty">No posts yet — check back soon.</p>
          ) : (
            <div className="blog-grid">
              {allPosts.map((post) => {
                const imgUrl = post.coverImage?.asset
                  ? urlFor(post.coverImage).width(800).height(500).fit("crop").url()
                  : null;
                return (
                  <article key={post._id} className="blog-card">
                    <Link href={`/blog/${post.slug}`} className="blog-card__image-wrap">
                      {imgUrl ? (
                        <img src={imgUrl} alt={post.coverImage?.alt || post.title} loading="lazy" />
                      ) : (
                        <div className="blog-card__placeholder" />
                      )}
                      {post.category && (
                        <span className="blog-card__category">{CATEGORY_LABELS[post.category] || post.category}</span>
                      )}
                    </Link>
                    <div className="blog-card__body">
                      <p className="blog-card__date">{formatDate(post.publishedAt)}</p>
                      <h2 className="blog-card__title">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      {post.excerpt && <p className="blog-card__excerpt">{post.excerpt}</p>}
                      <Link href={`/blog/${post.slug}`} className="blog-card__read-more">
                        Read Article →
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
      <Footer />
      <ClientAnimations />
    </>
  );
}
