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
        <link rel="canonical" href="https://imperialenterprise.co.ke/" />
        <meta property="og:title" content="Web Design & SEO Agency in Kenya | Imperial Enterprise Nairobi" />
        <meta property="og:description" content="Kenya's leading web design & SEO agency. We build high-performing WordPress websites for businesses, NGOs, hotels & corporates across East Africa." />
        <meta property="og:url" content="https://imperialenterprise.co.ke/" />
        <meta property="og:image" content="https://imperialenterprise.co.ke/favicon.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Design & SEO Agency in Kenya | Imperial Enterprise" />
        <meta name="twitter:description" content="Kenya's leading web design & SEO agency. High-performing websites for businesses across East Africa." />
        <meta name="twitter:image" content="https://imperialenterprise.co.ke/favicon.png" />
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
