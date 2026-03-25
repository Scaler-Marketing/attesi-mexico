import { client } from "../sanity/lib/client";
import {
  heroSlidesQuery,
  experiencesQuery,
  statsQuery,
  testimonialsQuery,
  siteSettingsQuery,
} from "../sanity/lib/queries";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import FindYourWay from "./components/FindYourWay";
import Experiences from "./components/Experiences";
import Stats from "./components/Stats";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import HomeFAQ from "./components/HomeFAQ";
import Footer from "./components/Footer";
import ClientAnimations from "./components/ClientAnimations";

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function Home() {
  // Fetch all content in parallel — falls back gracefully if Sanity has no data yet
  const [heroSlides, experiences, stats, testimonials, siteSettings] =
    await Promise.all([
      client.fetch(heroSlidesQuery).catch(() => []),
      client.fetch(experiencesQuery).catch(() => []),
      client.fetch(statsQuery).catch(() => []),
      client.fetch(testimonialsQuery).catch(() => []),
      client.fetch(siteSettingsQuery).catch(() => null),
    ]);

  return (
    <>
      <Navbar />
      <Hero slides={heroSlides} settings={siteSettings} />
      <Intro settings={siteSettings} />
      <FindYourWay />
      <Experiences cards={experiences} />
      <Stats stats={stats} />
      <About settings={siteSettings} />
      <WhyChoose />
      <Testimonials testimonials={testimonials} />
      <CTA settings={siteSettings} />
      <HomeFAQ />
      <Footer />
      <ClientAnimations />
    </>
  );
}
