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
import Footer from "./components/Footer";
import ClientAnimations from "./components/ClientAnimations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <FindYourWay />
      <Experiences />
      <Stats />
      <About />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Footer />
      <ClientAnimations />
    </>
  );
}
