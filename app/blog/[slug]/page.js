import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import ClientAnimations from "@/app/components/ClientAnimations";
import { sanityFetch } from "@/sanity/lib/live";
import {
  blogPostBySlugQuery,
  blogPostSlugsQuery,
  blogPostsForNavQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import BlogTOC from "./BlogTOC";
import "../../blog.css";

export const CATEGORY_LABELS = {
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
          {value.caption && (
            <figcaption className="blog-post__caption">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 className="blog-post__h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-post__h3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="blog-post__blockquote">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="blog-post__p">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="blog-post__list blog-post__list--bullet">{children}</ul>,
    number: ({ children }) => <ol className="blog-post__list blog-post__list--number">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="blog-post__list-item">{children}</li>,
    number: ({ children }) => <li className="blog-post__list-item">{children}</li>,
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
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};

// ── Extract H2 headings from PortableText body for TOC ───────────────────────
function extractHeadings(blocks) {
  if (!blocks || !Array.isArray(blocks)) return [];
  return blocks
    .filter((b) => b._type === "block" && b.style === "h2")
    .map((b) => ({
      id: b.children
        ?.map((c) => c.text || "")
        .join("")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
      text: b.children?.map((c) => c.text || "").join("") || "",
    }))
    .filter((h) => h.text);
}

// ── Portable Text with anchor IDs on H2s ─────────────────────────────────────
function makePtComponentsWithAnchors() {
  return {
    ...ptComponents,
    block: {
      ...ptComponents.block,
      h2: ({ children, value }) => {
        const text = value?.children?.map((c) => c.text || "").join("") || "";
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        return (
          <h2 id={id} className="blog-post__h2">
            {children}
          </h2>
        );
      },
    },
  };
}

export async function generateStaticParams() {
  const { data: slugs } = await sanityFetch({ query: blogPostSlugsQuery }).catch(() => ({
    data: [],
  }));
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
  const [{ data: post }, { data: siteSettings }, { data: allPostsNav }] = await Promise.all([
    sanityFetch({ query: blogPostBySlugQuery, params: { slug: params.slug } }).catch(() => ({
      data: null,
    })),
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
    sanityFetch({ query: blogPostsForNavQuery }).catch(() => ({ data: [] })),
  ]);

  if (!post) notFound();

  const coverUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1800).height(900).fit("crop").url()
    : null;

  // Prev / Next navigation (looping)
  const navPosts = allPostsNav || [];
  const currentIdx = navPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = navPosts.length > 1
    ? navPosts[currentIdx < navPosts.length - 1 ? currentIdx + 1 : 0]
    : null;
  const nextPost = navPosts.length > 1
    ? navPosts[currentIdx > 0 ? currentIdx - 1 : navPosts.length - 1]
    : null;

  // Determine body source: prefer bodyTop/bodyBottom, fall back to legacy body
  const bodyTop = post.bodyTop?.length ? post.bodyTop : post.body || [];
  const bodyBottom = post.bodyBottom || [];
  const hasFaqs = post.faqs && post.faqs.length > 0;

  // Build TOC from all body headings + FAQ anchor
  const topHeadings = extractHeadings(bodyTop);
  const bottomHeadings = extractHeadings(bodyBottom);
  const faqTocEntry = hasFaqs ? [{ id: "frequently-asked-questions", text: "Frequently Asked Questions" }] : [];
  const tocHeadings = [...topHeadings, ...faqTocEntry, ...bottomHeadings];
  const ptWithAnchors = makePtComponentsWithAnchors();

  // JSON-LD BlogPosting schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author || "Attesi Mexico",
    },
    image: coverUrl || undefined,
    url: `https://attesi-mexico.vercel.app/blog/${post.slug}`,
  };

  // FAQ JSON-LD
  const faqJsonLd = hasFaqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Navbar />
      {/* ── POST HEADER ── */}
      <div className="blog-post-header">
        <div className="container">
          {/* Category badge + Title */}
          {post.category && (
            <span className="blog-post-header__badge">
              {CATEGORY_LABELS[post.category] || post.category}
            </span>
          )}
          <h1 className="blog-post-header__title">{post.title}</h1>

          {/* Meta bar */}
          <div className="blog-meta-bar">
            {post.author && (
              <div className="blog-meta-bar__item">
                <span className="blog-meta-bar__label">Written By</span>
                <span className="blog-meta-bar__value">{post.author}</span>
              </div>
            )}
            {post.publishedAt && (
              <div className="blog-meta-bar__item">
                <span className="blog-meta-bar__label">Published On</span>
                <span className="blog-meta-bar__value">{formatDate(post.publishedAt)}</span>
              </div>
            )}
            {post.category && (
              <div className="blog-meta-bar__item">
                <span className="blog-meta-bar__label">Category</span>
                <span className="blog-meta-bar__value blog-meta-bar__value--accent">
                  {CATEGORY_LABELS[post.category] || post.category}
                </span>
              </div>
            )}
            {post.readTimeMinutes && (
              <div className="blog-meta-bar__item">
                <span className="blog-meta-bar__label">Read Time</span>
                <span className="blog-meta-bar__value">{post.readTimeMinutes} min read</span>
              </div>
            )}
            {/* Share buttons */}
            <div className="blog-meta-bar__item blog-meta-bar__share">
              <span className="blog-meta-bar__label">Share</span>
              <div className="blog-meta-bar__share-btns">
                <a
                  href={`https://twitter.com/intent/tweet?url=https://attesi-mexico.vercel.app/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-share-btn"
                  aria-label="Share on X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://attesi-mexico.vercel.app/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-share-btn"
                  aria-label="Share on Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://attesi-mexico.vercel.app/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-share-btn"
                  aria-label="Share on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <BlogPostClient slug={post.slug} title={post.title} />
              </div>
            </div>
          </div>
          {/* Cover image inside header */}
          {coverUrl && (
            <div className="blog-post-cover">
              <img src={coverUrl} alt={post.coverImage?.alt || post.title} />
            </div>
          )}
        </div>
      </div>
      {/* ── BODY + SIDEBAR ── */}
      <article className="blog-post section">
        <div className="container blog-post__layout">
          {/* ── Main Content ── */}
          <div className="blog-post__main">
            {/* Breadcrumbs */}
            <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/" className="blog-breadcrumbs__link">Home</Link>
              <span className="blog-breadcrumbs__sep" aria-hidden="true">/</span>
              <Link href="/blog" className="blog-breadcrumbs__link">Journal</Link>
              <span className="blog-breadcrumbs__sep" aria-hidden="true">/</span>
              <span className="blog-breadcrumbs__current" aria-current="page">{post.title}</span>
            </nav>
            {post.excerpt && <p className="blog-post__lead">{post.excerpt}</p>}

            {bodyTop.length > 0 && (
              <PortableText value={bodyTop} components={ptWithAnchors} />
            )}

            {/* ── FAQ Accordion ── */}
            {hasFaqs && (
              <div id="frequently-asked-questions" className="blog-faq">
                <h2 className="blog-faq__heading">Frequently Asked Questions</h2>
                <div className="blog-faq__list">
                  {post.faqs.map((faq, i) => (
                    <BlogFaqItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            )}

            {bodyBottom.length > 0 && (
              <PortableText value={bodyBottom} components={ptWithAnchors} />
            )}

            {/* ── Inline CTA Banner ── */}
            <div className="blog-inline-cta">
              <div className="blog-inline-cta__content">
                <h3 className="blog-inline-cta__heading">Ready to Experience Attesi?</h3>
                <p className="blog-inline-cta__text">
                  Discover kosher retreats, wellness experiences, and agro-residential living in the mountains of Villa de Allende, Mexico.
                </p>
              </div>
              <a href="#contact" className="btn-primary blog-inline-cta__btn">Contact Us</a>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="blog-post__sidebar">
            {/* Table of Contents */}
            {tocHeadings.length > 0 && (
              <BlogTOC headings={tocHeadings} />
            )}

            {/* Plan Your Stay card */}
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

      {/* ── PREV / NEXT NAVIGATION ── */}
      {(prevPost || nextPost) && (
        <div className="blog-post-nav section--sm">
          <div className="container blog-post-nav__inner">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="blog-post-nav__item blog-post-nav__item--prev">
                <span className="blog-post-nav__label">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Previous Post
                </span>
                <span className="blog-post-nav__title">{prevPost.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="blog-post-nav__item blog-post-nav__item--next">
                <span className="blog-post-nav__label">
                  Next Post
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="blog-post-nav__title">{nextPost.title}</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}

      <CTA settings={siteSettings} />
      <Footer />
      <ClientAnimations />
    </>
  );
}

// ── Server-side FAQ item (accordion handled client-side via BlogPostClient) ───
function BlogFaqItem({ question, answer }) {
  return (
    <details className="blog-faq__item">
      <summary className="blog-faq__question">
        {question}
        <span className="blog-faq__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <div className="blog-faq__answer">
        <p>{answer}</p>
      </div>
    </details>
  );
}
