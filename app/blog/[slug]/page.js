import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import ClientAnimations from "@/app/components/ClientAnimations";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostBySlugQuery, blogPostSlugsQuery, relatedBlogPostsQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../blog.css";

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

// ── Portable Text components ──────────────────────────────────────────────────
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imgUrl = urlFor(value).width(1200).fit("max").url();
      return (
        <figure className="blog-post__figure">
          <img src={imgUrl} alt={value.alt || ""} loading="lazy" />
          {value.caption && <figcaption className="blog-post__caption">{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 className="blog-post__h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-post__h3">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="blog-post__blockquote">{children}</blockquote>,
    normal: ({ children }) => <p className="blog-post__p">{children}</p>,
  },
  marks: {
    link: ({ value, children }) => {
      const target = value?.blank ? "_blank" : "_self";
      const rel = value?.blank ? "noopener noreferrer" : undefined;
      return (
        <a href={value?.href} target={target} rel={rel} className="blog-post__link">
          {children}
        </a>
      );
    },
  },
};

export async function generateStaticParams() {
  const { data: slugs } = await sanityFetch({ query: blogPostSlugsQuery }).catch(() => ({ data: [] }));
  return (slugs || []).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { data: post } = await sanityFetch({
    query: blogPostBySlugQuery,
    params: { slug: params.slug },
  }).catch(() => ({ data: null }));

  if (!post) return { title: "Post Not Found — Attesi Mexico" };

  const ogImg = post.openGraphImage?.asset
    ? urlFor(post.openGraphImage).width(1200).height(630).fit("crop").url()
    : post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).fit("crop").url()
    : null;

  return {
    title: post.seoTitle || `${post.title} — Attesi Mexico`,
    description: post.seoDescription || post.excerpt,
    openGraph: ogImg ? { images: [{ url: ogImg }] } : undefined,
  };
}

export default async function BlogPostPage({ params }) {
  const [{ data: post }, { data: siteSettings }] = await Promise.all([
    sanityFetch({ query: blogPostBySlugQuery, params: { slug: params.slug } }).catch(() => ({ data: null })),
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
  ]);

  if (!post) notFound();

  // Fetch related posts
  const { data: related } = await sanityFetch({
    query: relatedBlogPostsQuery,
    params: { slug: params.slug, category: post.category || "" },
  }).catch(() => ({ data: [] }));

  const coverUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1800).height(900).fit("crop").url()
    : null;

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="blog-post-hero">
        {coverUrl && (
          <>
            <div className="blog-post-hero__bg">
              <img src={coverUrl} alt={post.coverImage?.alt || post.title} />
            </div>
            <div className="blog-post-hero__overlay" />
          </>
        )}
        <div className={`blog-post-hero__content container${!coverUrl ? " blog-post-hero__content--no-image" : ""}`}>
          {post.category && (
            <span className="blog-post-hero__category">{CATEGORY_LABELS[post.category] || post.category}</span>
          )}
          <h1 className="blog-post-hero__title">{post.title}</h1>
          <div className="blog-post-hero__meta">
            {post.author && (
              <span className="blog-post-hero__author">
                By {post.author}{post.authorRole ? `, ${post.authorRole}` : ""}
              </span>
            )}
            {post.publishedAt && (
              <span className="blog-post-hero__date">{formatDate(post.publishedAt)}</span>
            )}
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <article className="blog-post section">
        <div className="container blog-post__inner">
          <div className="blog-post__body">
            {post.excerpt && <p className="blog-post__lead">{post.excerpt}</p>}
            {post.body && <PortableText value={post.body} components={ptComponents} />}
          </div>

          {/* ── Sidebar ── */}
          <aside className="blog-post__sidebar">
            <div className="blog-post__sidebar-card">
              <span className="blog-post__sidebar-label">About Attesi</span>
              <p className="blog-post__sidebar-text">
                Attesi is a kosher retreat and agro-residential community nestled in the mountains of Villa de Allende, Mexico — 90 minutes from Mexico City.
              </p>
              <Link href="/about" className="btn-secondary btn--sm">Learn More</Link>
            </div>
            <div className="blog-post__sidebar-card">
              <span className="blog-post__sidebar-label">Plan Your Stay</span>
              <p className="blog-post__sidebar-text">
                Ready to experience Attesi for yourself? Explore our lodging options and experiences.
              </p>
              <Link href="/lodging" className="btn-primary btn--sm">View Lodging</Link>
            </div>
          </aside>
        </div>
      </article>

      {/* ── RELATED POSTS ── */}
      {related && related.length > 0 && (
        <section className="blog-related section">
          <div className="container">
            <span className="section-tag">More to Read</span>
            <h2 className="blog-related__heading">Related Articles</h2>
            <div className="blog-grid blog-grid--3">
              {related.map((rPost) => {
                const rImgUrl = rPost.coverImage?.asset
                  ? urlFor(rPost.coverImage).width(800).height(500).fit("crop").url()
                  : null;
                return (
                  <article key={rPost._id} className="blog-card">
                    <Link href={`/blog/${rPost.slug}`} className="blog-card__image-wrap">
                      {rImgUrl ? (
                        <img src={rImgUrl} alt={rPost.coverImage?.alt || rPost.title} loading="lazy" />
                      ) : (
                        <div className="blog-card__placeholder" />
                      )}
                      {rPost.category && (
                        <span className="blog-card__category">{CATEGORY_LABELS[rPost.category] || rPost.category}</span>
                      )}
                    </Link>
                    <div className="blog-card__body">
                      <p className="blog-card__date">{formatDate(rPost.publishedAt)}</p>
                      <h3 className="blog-card__title">
                        <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                      </h3>
                      {rPost.excerpt && <p className="blog-card__excerpt">{rPost.excerpt}</p>}
                      <Link href={`/blog/${rPost.slug}`} className="blog-card__read-more">
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

      {/* ── Back to Blog ── */}
      <div className="blog-back container">
        <Link href="/blog" className="blog-back__link">← Back to Journal</Link>
      </div>

      <CTA settings={siteSettings} />
      <Footer />
      <ClientAnimations />
    </>
  );
}
