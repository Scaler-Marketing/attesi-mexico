import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import ClientAnimations from "@/app/components/ClientAnimations";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostsQuery, siteSettingsQuery } from "@/sanity/lib/queries";
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
  const [{ data: posts }, { data: siteSettings }] = await Promise.all([
    sanityFetch({ query: blogPostsQuery }).catch(() => ({ data: [] })),
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
  ]);

  const allPosts = posts || [];
  const featured = allPosts.filter((p) => p.featured);
  const rest = allPosts.filter((p) => !p.featured);

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="blog-hero__bg" />
        <div className="blog-hero__overlay" />
        <div className="blog-hero__content container">
          <span className="blog-hero__eyebrow">From the Land</span>
          <h1 className="blog-hero__title">The Attesi Journal</h1>
          <p className="blog-hero__subtitle">
            Stories, insights, and wisdom from our community in the mountains of Mexico.
          </p>
        </div>
      </section>

      {/* ── FEATURED POSTS ── */}
      {featured.length > 0 && (
        <section className="blog-featured section">
          <div className="container">
            <span className="section-tag">Featured</span>
            <div className={`blog-featured__grid blog-featured__grid--${Math.min(featured.length, 3)}`}>
              {featured.slice(0, 3).map((post, i) => {
                const imgUrl = post.coverImage?.asset
                  ? urlFor(post.coverImage).width(i === 0 ? 1200 : 800).height(i === 0 ? 700 : 500).fit("crop").url()
                  : null;
                return (
                  <article key={post._id} className={`blog-card blog-card--featured${i === 0 ? " blog-card--hero" : ""}`}>
                    <Link href={`/blog/${post.slug}`} className="blog-card__image-wrap">
                      {imgUrl ? (
                        <img src={imgUrl} alt={post.coverImage?.alt || post.title} loading={i === 0 ? "eager" : "lazy"} />
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
          </div>
        </section>
      )}

      {/* ── ALL POSTS GRID ── */}
      <section className="blog-grid-section section">
        <div className="container">
          {featured.length > 0 && <span className="section-tag">All Posts</span>}
          {allPosts.length === 0 ? (
            <p className="blog-empty">No posts yet — check back soon.</p>
          ) : (
            <div className="blog-grid">
              {(featured.length > 0 ? rest : allPosts).map((post) => {
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
