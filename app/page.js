import { sanityFetch } from "../sanity/lib/live";
import {
  heroSlidesQuery,
  experiencesQuery,
  testimonialsQuery,
  siteSettingsQuery,
  findYourWayQuery,
} from "../sanity/lib/queries";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import FindYourWay from "./components/FindYourWay";
import Experiences from "./components/Experiences";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import HomeFAQ from "./components/HomeFAQ";
import Footer from "./components/Footer";
import ClientAnimations from "./components/ClientAnimations";

export default async function Home() {
  // All homepage content — including section headings — lives in siteSettings
  const [
    { data: heroSlides },
    { data: experiences },
    { data: testimonials },
    { data: siteSettings },
    { data: findYourWayCards },
  ] = await Promise.all([
    sanityFetch({ query: heroSlidesQuery }).catch(() => ({ data: [] })),
    sanityFetch({ query: experiencesQuery }).catch(() => ({ data: [] })),
    sanityFetch({ query: testimonialsQuery }).catch(() => ({ data: [] })),
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
    sanityFetch({ query: findYourWayQuery }).catch(() => ({ data: [] })),
  ]);

  return (
    <>
      <Navbar />
      <Hero slides={heroSlides} settings={siteSettings} />
      <Intro settings={siteSettings} />
      <FindYourWay settings={siteSettings} cards={findYourWayCards} />
      <Experiences cards={experiences} settings={siteSettings} />
      <Testimonials testimonials={testimonials} settings={siteSettings} />
      <HomeFAQ settings={siteSettings} />
      <CTA settings={siteSettings} />
      <Footer />
      <ClientAnimations />
    </>
  );
}
