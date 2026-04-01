"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

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

export default function BlogClient({ posts }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date-newest");
  const [sortOpen, setSortOpen] = useState(false);

  const SORT_OPTIONS = [
    { value: "date-newest", label: "Date (Newest)" },
    { value: "date-oldest", label: "Date (Oldest)" },
    { value: "name-az", label: "Name (A to Z)" },
    { value: "name-za", label: "Name (Z to A)" },
  ];

  const filtered = useMemo(() => {
    let result = [...posts];

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.excerpt?.toLowerCase().includes(q) ||
          (CATEGORY_LABELS[p.category] || p.category || "").toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case "date-newest":
        result.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        break;
      case "date-oldest":
        result.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
        break;
      case "name-az":
        result.sort((a, b) => a.title?.localeCompare(b.title));
        break;
      case "name-za":
        result.sort((a, b) => b.title?.localeCompare(a.title));
        break;
    }

    return result;
  }, [posts, search, sortBy]);

  function reset() {
    setSearch("");
    setSortBy("date-newest");
    setSortOpen(false);
  }

  const currentSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label || "Sort By";

  return (
    <section className="blog-grid-section section" style={{ paddingTop: 0 }}>
      <div className="container">

        {/* ── Search + Sort bar ── */}
        <div className="blog-controls">
          <div className="blog-controls__search">
            <svg className="blog-controls__search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.75" />
              <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              className="blog-controls__input"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search blog posts"
            />
          </div>

          <div className="blog-controls__sort">
            <button
              className="blog-controls__sort-btn"
              onClick={() => setSortOpen((o) => !o)}
              aria-expanded={sortOpen}
              aria-haspopup="listbox"
              type="button"
            >
              <span>{currentSortLabel}</span>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={sortOpen ? "rotated" : ""}>
                <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {sortOpen && (
              <ul className="blog-controls__sort-menu" role="listbox">
                {SORT_OPTIONS.map((opt) => (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={sortBy === opt.value}
                    className={sortBy === opt.value ? "is-active" : ""}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            className="blog-controls__reset"
            onClick={reset}
            type="button"
            aria-label="Reset filters"
            title="Reset"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10a6 6 0 1 1 1.5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <path d="M4 14v-4h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* ── Results count ── */}
        <p className="blog-results-count">
          Showing <strong>{filtered.length}</strong> result{filtered.length !== 1 ? "s" : ""} of <strong>{posts.length}</strong> article{posts.length !== 1 ? "s" : ""}
        </p>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <p className="blog-empty">No articles match your search.</p>
        ) : (
          <div className="blog-grid">
            {filtered.map((post) => (
              <article key={post._id} className="exp-card blog-card-global">
                <Link href={`/blog/${post.slug}`} className="exp-card__img-wrap blog-card__img-link">
                  {post.coverImageUrl ? (
                    <img src={post.coverImageUrl} alt={post.coverImageAlt || post.title} loading="lazy" />
                  ) : (
                    <div className="exp-card__placeholder">
                      <span className="exp-card__img-initial">{post.title?.charAt(0)}</span>
                    </div>
                  )}
                  {post.category && (
                    <span className="exp-card__badge">
                      {CATEGORY_LABELS[post.category] || post.category}
                    </span>
                  )}
                </Link>
                <div className="exp-card__body">
                  <p className="blog-card__date">{formatDate(post.publishedAt)}</p>
                  <h2 className="exp-card__title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  {post.excerpt && (
                    <p className="exp-card__desc">{post.excerpt}</p>
                  )}
                  <Link href={`/blog/${post.slug}`} className="blog-card__read-more">
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
