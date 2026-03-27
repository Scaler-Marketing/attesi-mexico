import { sanityFetch } from "../sanity/lib/live";
import {
  heroSlidesQuery,
  experiencesQuery,
  testimonialsQuery,
  siteSettingsQuery,
  homePageQuery,
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
  // Fetch all content in parallel — sanityFetch handles Draft Mode + stega automatically
  const [
    { data: heroSlides },
    { data: experiences },
    { data: testimonials },
    { data: siteSettings },
    { data: homePage },
  ] = await Promise.all([
    sanityFetch({ query: heroSlidesQuery }).catch(() => ({ data: [] })),
    sanityFetch({ query: experiencesQuery }).catch(() => ({ data: [] })),
    sanityFetch({ query: testimonialsQuery }).catch(() => ({ data: [] })),
    sanityFetch({ query: siteSettingsQuery }).catch(() => ({ data: null })),
    sanityFetch({ query: homePageQuery }).catch(() => ({ data: null })),
  ]);

  return (
    <>
      <Navbar />
      <Hero slides={heroSlides} settings={siteSettings} />
      <Intro page={homePage} />
      <FindYourWay />
      <Experiences cards={experiences} />
      <Testimonials testimonials={testimonials} />
      <HomeFAQ page={homePage} />
      <CTA settings={siteSettings} />
      <Footer />
      <ClientAnimations />
    </>
  );
}
