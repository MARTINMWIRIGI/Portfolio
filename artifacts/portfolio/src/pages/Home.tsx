import { Helmet } from "react-helmet-async";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Imperial Enterprise | Digital Agency Kenya</title>
        <meta name="description" content="Nairobi-based digital agency building high-performing websites for African businesses, NGOs, hotels, and organizations. View our portfolio." />
      </Helmet>
      <main>
        <Hero />
        <Ticker />
        <Services />
        <FeaturedProjects />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}