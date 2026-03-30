import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import ClientAnimations from "@/app/components/ClientAnimations";
import PageHero from "@/app/components/PageHero";
import { sanityFetch } from "@/sanity/lib/live";
import { siteSettingsQuery, historyPageQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import "../history.css";

export const metadata = {
  title: "Our History — Attesi Mexico",
  description:
    "From a simple idea shared between two friends to a thriving community rooted in permaculture and Jewish life — discover the story of how Attesi came to be.",
};

const TIMELINE = [
  {
    num: "01",
    label: "The Beginning",
    text: "Two friends purchase land outside Mexico City with a simple goal: to explore permaculture and reconnect with the land.",
    year: "The Idea",
  },
  {
    num: "02",
    label: "The Process",
    text: "What began as a hands-on learning experience working with soil and nature slowly deepened into a way of living. The land began to teach its own lessons.",
    year: "The Work",
  },
  {
    num: "03",
    label: "The Growth",
    text: "The project expanded beyond the land itself, attracting people, families, and shared intention. A community began to take root.",
    year: "The Community",
  },
  {
    num: "04",
    label: "Today",
    text: "Attesi is now a community of over twenty families, a retreat space, and a place to gather — including a kosher restaurant and café. It continues to grow without losing its foundation.",
    year: "The Present",
  },
];

const MILESTONES = [
  {
    title: "Permaculture Roots",
    body:
      "The land was cultivated using permaculture principles from the very beginning — a commitment to working with nature rather than against it.",
  },
  {
    title: "Community Formation",
    body:
      "Families began to join, drawn by the shared vision of intentional living, sustainable agriculture, and a meaningful relationship with the earth.",
  },
  {
    title: "Jewish Life Woven In",
    body:
      "Shabbat and holidays became a natural part of the rhythm of Attesi. Jewish tradition and connection to the land found a home here together.",
  },
  {
    title: "Attesi Kitchen & Café",
    body:
      "The kosher restaurant and Attesi Market Café opened as gathering places for the community and guests — expressions of the farm-to-table philosophy.",
  },
  {
    title: "Retreat & Hospitality",
    body:
      "Attesi opened its doors to guests from around the world, offering a retreat space where visitors can experience a different pace of life.",
  },
  {
    title: "Growing Forward",
    body:
      "Today, Attesi continues to evolve — welcoming new families, deepening its practices, and sharing its vision with all who come.",
  },
];

export default async function HistoryPage() {
  const [{ data: siteSettings }, { data: page }] = await Promise.all([
    sanityFetch({ query: siteSettingsQuery }),
    sanityFetch({ query: historyPageQuery }).catch(() => ({ data: null })),
  ]);
  const heroBg = page?.heroImage?.asset
    ? `url('${urlFor(page.heroImage).width(1800).quality(85).url()}')`
    : "url('https://attesi.mx/wp-content/uploads/2022/12/home-slider-attesi-2.jpg')";
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <PageHero
        eyebrow={page?.heroEyebrow || "Our Story"}
        title={page?.heroHeading || "The History of Attesi"}
        subtitle={page?.heroSubheading || "From a simple idea to a living community rooted in land, tradition, and intention."}
        bgImage={heroBg}
        bgPos="center 40%"
      />

      {/* ── INTRO ── */}
      <section className="hist-intro section">
        <div className="container hist-intro__inner">
          <div className="hist-intro__copy">
            <h2 className="hist-intro__heading">How It All Began</h2>
            <p>
              Attesi began as a simple vision shared by two close friends who purchased land
              outside of Mexico City to experiment with permaculture and a deeper connection to
              the land. What started as a small project of learning how to work with the soil
              slowly evolved into something much greater.
            </p>
            <p>
              As they planted, cultivated, and spent time listening to the rhythms of the land,
              a vision slowly began to unfold. Through this process, Attesi grew into more than
              just a farm or a garden. It became a place where people could reconnect with
              nature, with community, and with themselves.
            </p>
            <p>
              Today, Attesi has grown into a community of families, a retreat space, and a
              gathering place that includes a kosher restaurant and café, while remaining rooted
              in its original values of sustainability, intentional living, Jewish life, and a
              meaningful relationship with the land.
            </p>
          </div>
          <aside className="hist-intro__pull">
            <blockquote className="hist-intro__quote">
              &ldquo;What started as a project of learning how to work with the soil quickly
              became something much deeper.&rdquo;
            </blockquote>
          </aside>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="hist-timeline section hist-timeline--dark">
        <div className="container">
          <span className="hist-eyebrow">The Evolution of Attesi</span>
          <h2 className="hist-timeline__heading">Four Chapters of Growth</h2>
          <div className="hist-timeline__track">
            {TIMELINE.map((step) => (
              <div key={step.num} className="hist-timeline__step">
                <div className="hist-timeline__step-header">
                  <span className="hist-timeline__num">{step.num}</span>
                  <span className="hist-timeline__year">{step.year}</span>
                </div>
                <h3 className="hist-timeline__label">{step.label}</h3>
                <p className="hist-timeline__text">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="hist-timeline__closing">
            Still rooted in sustainability, intentional living, Jewish life, and a deep
            connection to the land.
          </p>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="hist-milestones section">
        <div className="container">
          <span className="hist-eyebrow">Key Moments</span>
          <h2 className="hist-milestones__heading">Milestones Along the Way</h2>
          <div className="hist-milestones__grid">
            {MILESTONES.map((m, i) => (
              <div key={m.title} className="hist-milestone-card">
                <span className="hist-milestone-card__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="hist-milestone-card__title">{m.title}</h3>
                <p className="hist-milestone-card__body">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="hist-quote section hist-quote--forest">
        <div className="container hist-quote__inner">
          <blockquote className="hist-quote__text">
            &ldquo;While Attesi has grown in many ways over the years, the intention remains
            the same as it was on the very first day: to cultivate a place where land,
            community, and spirit can grow together.&rdquo;
          </blockquote>
          <p className="hist-quote__attribution">— The Founders of Attesi</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA settings={siteSettings} />
      <Footer />
      <ClientAnimations />
    </>
  );
}
