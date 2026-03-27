"use client";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function LodgingGallery({ images }) {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="lodging-gallery"]', {
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "fullscreen", "download", "close"],
        },
      },
      Images: { zoom: true },
      Carousel: { infinite: true },
      animated: true,
    });

    return () => {
      Fancybox.unbind('[data-fancybox="lodging-gallery"]');
      Fancybox.close();
    };
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <section className="lodging-detail-gallery section">
      <div className="container">
        <h2 className="lodging-detail-gallery__heading">Photo Gallery</h2>
        <div className="lodging-detail-gallery__grid">
          {images.map((img, i) => (
            <a
              key={i}
              href={img.fullUrl}
              data-fancybox="lodging-gallery"
              data-caption={img.caption || ""}
              className={`lodging-detail-gallery__item${
                i === 0 ? " lodging-detail-gallery__item--featured" : ""
              }`}
              aria-label={img.alt || `Gallery image ${i + 1}`}
            >
              <img
                src={img.url}
                alt={img.alt || ""}
                className="lodging-detail-gallery__img"
                loading={i < 3 ? "eager" : "lazy"}
              />
              {img.caption && (
                <figcaption className="lodging-detail-gallery__caption">
                  {img.caption}
                </figcaption>
              )}
              <span className="lodging-detail-gallery__zoom" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
