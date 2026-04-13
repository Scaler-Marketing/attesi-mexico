"use client";
import { useState, useEffect, useRef } from "react";

export default function BlogTOC({ headings }) {
  const [activeId, setActiveId] = useState(headings[0]?.id || "");
  const observerRef = useRef(null);

  useEffect(() => {
    if (!headings.length) return;

    const ids = headings.map((h) => h.id);

    // Disconnect any previous observer
    if (observerRef.current) observerRef.current.disconnect();

    const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) * 16 || 80;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        } else {
          // If nothing visible, find the last heading that scrolled past
          const scrollY = window.scrollY + navHeight + 40;
          let last = ids[0];
          for (const id of ids) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
              last = id;
            }
          }
          setActiveId(last);
        }
      },
      {
        rootMargin: `-${navHeight + 20}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    // Observe all heading elements
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="blog-toc">
      <h2 className="blog-toc__heading">Table of Contents</h2>
      <nav aria-label="Table of contents">
        <ul className="blog-toc__list">
          {headings.map((h) => (
            <li
              key={h.id}
              className={"blog-toc__item" + (h.id === activeId ? " blog-toc__item--active" : "")}
            >
              <a
                href={"#" + h.id}
                className={"blog-toc__link" + (h.id === activeId ? " blog-toc__link--active" : "")}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(h.id);
                  if (el) {
                    const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) * 16 || 80;
                    const top = el.getBoundingClientRect().top + window.scrollY - navH - 24;
                    window.scrollTo({ top, behavior: "smooth" });
                    setActiveId(h.id);
                  }
                }}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
