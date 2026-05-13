import { Helmet } from "react-helmet-async";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Stats from "@/components/home/Stats";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Web Design &amp; SEO Agency in Kenya | Imperial Enterprise Nairobi</title>
        <meta name="description" content="Imperial Enterprise is Kenya's leading web design & SEO agency in Nairobi. We build high-performing WordPress websites for businesses, NGOs, hotels & corporates across East Africa. Get a free quote." />
        <meta name="keywords" content="web design kenya, web design nairobi, seo agency kenya, wordpress development nairobi, website design kenya, digital agency nairobi, corporate website kenya, ngo website kenya, hotel website design kenya, affordable web design kenya, professional website nairobi" />
      </Helmet>
      <main>
        <Hero />
        <Ticker />
        <FeaturedProjects />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
