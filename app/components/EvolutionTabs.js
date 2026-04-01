import { urlFor } from "@/sanity/lib/image";

/* Fallback images — replace with real Attesi photos once uploaded in Sanity */
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=900&q=80",
];

const DEFAULT_STEPS = [
  {
    num: "01",
    label: "The Beginning",
    text: "Two friends purchase land outside Mexico City with a simple goal: to explore permaculture and reconnect with the land.",
  },
  {
    num: "02",
    label: "The Process",
    text: "What began as a hands-on learning experience working with soil and nature slowly deepened into a way of living.",
  },
  {
    num: "03",
    label: "The Growth",
    text: "The project expanded beyond the land itself, attracting people, families, and shared intention.",
  },
  {
    num: "04",
    label: "Today",
    text: "Attesi is now a community of over twenty families, a retreat space, and a gathering place — including Attesi Kitchen and the Attesi Market Café — still rooted in its founding values.",
  },
];

export default function EvolutionTabs({ steps }) {
  const items = (steps && steps.length > 0 ? steps : DEFAULT_STEPS);

  return (
    <section
      className="evo-tabs section about-timeline--alt"
      data-evo-tabs=""
    >
      <div className="container evo-tabs__inner">
        {/* ── LEFT: tab list with single continuous track ── */}
        <div className="evo-tabs__list">
          <h2 className="evo-tabs__heading">The Evolution of Attesi</h2>

          {/* Single continuous track — one bar, one traveling fill */}
          <div className="evo-tabs__track-wrap">
            <div className="evo-tabs__track">
              <div className="evo-tabs__track-fill" data-evo-fill=""></div>
            </div>

            <div className="evo-tabs__items">
              {items.map((step, i) => (
                <button
                  key={i}
                  className={`evo-tabs__item${i === 0 ? " is-active" : ""}`}
                  data-evo-index={i}
                  type="button"
                  aria-selected={i === 0 ? "true" : "false"}
                >
                  <span className="evo-tabs__num">{step.num}</span>
                  <span className="evo-tabs__label">{step.label}</span>
                  <p className="evo-tabs__text">{step.text}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: image panel ── */}
        <div className="evo-tabs__images">
          {items.map((step, i) => {
            const src = step.image?.asset
              ? urlFor(step.image).width(900).quality(85).url()
              : FALLBACK_IMAGES[i] || FALLBACK_IMAGES[0];
            return (
              <div
                key={i}
                className={`evo-tabs__img-wrap${i === 0 ? " is-active" : ""}`}
                data-evo-img={i}
              >
                <img
                  src={src}
                  alt={step.label}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
