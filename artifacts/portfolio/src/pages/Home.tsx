import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CaseStudyHighlight } from "@/components/home/CaseStudyHighlight";
import { TechStack } from "@/components/home/TechStack";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Helmet>
        <title>Imperial Enterprise | Digital Agency Kenya</title>
        <meta name="description" content="Nairobi-based digital agency building high-performing websites for African businesses, NGOs, hotels, and organizations." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <FeaturedProjects />
        <CaseStudyHighlight />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}