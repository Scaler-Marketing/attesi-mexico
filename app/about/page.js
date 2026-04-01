import "../about.css";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ClientAnimations from "../components/ClientAnimations";
import { sanityFetch } from "../../sanity/lib/live";
import { siteSettingsQuery, aboutPageQuery } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/image";

export const metadata = {
  title: "About Attesi — Our Story, Values & Community",
  description:
    "Attesi began as a simple vision: two friends, a piece of land, and a commitment to permaculture. Today it is a thriving community of families, a retreat space, and a gathering place rooted in nature, Jewish life, and intentional living.",
};

/* ─── Timeline data from ClickUp task 868guwchq ──────────────────────────── */
const TIMELINE = [
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

const VALUES = [
  {
    title: "Connection to the Land",
    text: "Guided by permaculture principles, the land is cultivated with intention — allowing gardens, fruit trees, and herbs to thrive while nourishing the soil that supports them.",
  },
  {
    title: "Jewish Life & Tradition",
    text: "Shabbat and holidays are celebrated together. The rhythms of Jewish tradition bring grounding and purpose, creating a unique environment where tradition and nature meet.",
  },
  {
    title: "Community & Intentional Living",
    text: "Attesi is home to a community of families who share a commitment to living intentionally, caring for the land, and building something meaningful together.",
  },
  {
    title: "Retreat & Renewal",
    text: "Surrounded by mountains, gardens, and open skies, guests are invited to slow down, breathe deeply, and reconnect — with nature, with community, and with themselves.",
  },
];

export default async function AboutPage() {
  const [{ data: siteSettings }, { data: page }] = await Promise.all([
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
    sanityFetch({ query: aboutPageQuery }).catch(() => ({ data: null })),
  ]);
  const heroBg = page?.heroImage?.asset
    ? `url('${urlFor(page.heroImage).width(1800).quality(85).url()}')`
    : "url('https://attesi.mx/wp-content/uploads/2022/12/galeria-home-planea-1-1.jpg')";
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <PageHero
        eyebrow={page?.heroEyebrow || "Our Story"}
        title={page?.heroHeading || "About Attesi"}
        subtitle={page?.heroSubheading || "A place where land, community, and spirit grow together."}
        bgImage={heroBg}
        bgPos="center 40%"
      />

      {/* ── ORIGIN STORY ── */}
      <section className="about-origin section">
        <div className="container about-origin__inner">
          <div className="about-origin__copy">
            <h2 className="about-origin__heading">How It All Began</h2>
            <p>
              Attesi began with a simple idea shared between two close friends:
              to purchase a piece of land outside of Mexico City and experiment
              with permaculture. What started as a project of learning how to
              work with the soil quickly became something much deeper. As they
              planted, cultivated, and spent time listening to the rhythms of
              the land, a vision slowly began to unfold.
            </p>
            <p>
              Through this process, Attesi grew into more than just a farm or a
              garden. It became a place where people could reconnect with
              nature, with community, and with themselves. What began as a small
              experiment has since developed into a vibrant and growing community
              of families who share a commitment to living intentionally and
              caring for the land.
            </p>
            <p>
              Today, Attesi is home to a community of over twenty families, a
              retreat space that welcomes guests from around the world, and
              gathering places such as the kosher restaurant, Attesi Kitchen,
              and the Attesi Market Café. While the community continues to grow,
              the core values remain the same as when it all began.
            </p>
            <p>
              While Attesi has grown in many ways over the years, the intention
              remains the same as it was on the very first day: to cultivate a
              place where land, community, and spirit can grow together.
            </p>
          </div>
          <aside className="about-origin__pull">
            <blockquote className="about-origin__quote">
              "To cultivate a place where land, community, and spirit can grow
              together."
            </blockquote>
          </aside>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="about-timeline section about-timeline--alt">
        <div className="container">
          <h2 className="about-timeline__heading">The Evolution of Attesi</h2>
          <div className="about-timeline__track">
            {TIMELINE.map((step) => (
              <div key={step.num} className="about-timeline__step">
                <span className="about-timeline__num">{step.num}</span>
                <h3 className="about-timeline__label">{step.label}</h3>
                <p className="about-timeline__text">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="about-timeline__closing">
            Still rooted in sustainability, intentional living, Jewish life, and
            a deep connection to the land.
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-values section">
        <div className="container">
          <h2 className="about-values__heading">What We Stand For</h2>
          <div className="about-values__grid">
            {VALUES.map((v) => (
              <div key={v.title} className="about-values__card">
                <h3 className="about-values__card-title">{v.title}</h3>
                <p className="about-values__card-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM LINK (CTA variant) ── */}
      <CTA
        settings={siteSettings}
        variant={{
          heading:   "Meet the People Behind Attesi",
          subtext:   "Attesi is brought to life by a dedicated team of guides, hosts, farmers, and community stewards — each one passionate about the land and the people who come to experience it.",
          btn1Label: "Meet Our Team",
          btn1Url:   "/team",
          btn2Label: null,
        }}
      />

      <Footer />
      <ClientAnimations />
    </>
  );
}
