import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import NotFound from "./not-found";

const BASE = "https://portfolio.imperialenterprise.co.ke";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const pageTitle = `${project.name} | Web Design Case Study Kenya — Imperial Enterprise`;
  const pageDesc = `See how Imperial Enterprise built the ${project.name} website. ${project.description} ${project.industry} web design in Kenya.`;
  const pageUrl = `${BASE}/projects/${project.slug}`;

  return (
    <div className="min-h-screen flex flex-col w-full bg-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content={`${project.name.toLowerCase()}, ${project.industry.toLowerCase()}, web design kenya, ${project.tech.join(', ').toLowerCase()}, imperial enterprise`} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={project.image} />
        <meta property="og:image:alt" content={`${project.name} website screenshot`} />
        <meta property="og:site_name" content="Imperial Enterprise" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={project.image} />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": project.name,
          "description": project.description,
          "url": project.url,
          "image": project.image,
          "creator": {
            "@type": "Organization",
            "name": "Imperial Enterprise",
            "url": BASE
          },
          "keywords": project.tech.join(", "),
          "genre": project.industry
        })}</script>
      </Helmet>

      {/* Fixed Back Button */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <Link href="/" className="pointer-events-auto inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-[#0B1628] font-bold px-4 py-2 rounded-full shadow-sm transition-all hover:shadow-md text-sm">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12 pt-8">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {project.industry}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#0B1628] leading-tight mb-6">{project.name}</h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 mb-16 aspect-[16/10] shadow-lg">
            <img
              src={project.image}
              alt={`${project.name} website screenshot — built by Imperial Enterprise Kenya`}
              width={1280}
              height={800}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section aria-labelledby="challenge-heading">
                <h2 id="challenge-heading" className="text-2xl font-bold text-[#0B1628] mb-4">The Challenge</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </section>

              <section aria-labelledby="solution-heading">
                <h2 id="solution-heading" className="text-2xl font-bold text-[#0B1628] mb-4">The Solution</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </section>

              <section aria-labelledby="features-heading">
                <h2 id="features-heading" className="text-2xl font-bold text-[#0B1628] mb-6">Key Features Implemented</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <CheckCircle className="text-blue-600 shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-[#0B1628] mb-6">Results Achieved</h3>
                <ul className="space-y-4">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" aria-hidden="true"></div>
                      <span className="text-slate-600 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-[#0B1628] mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 font-medium text-sm rounded-lg shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`visit-site-${project.slug}`}
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors"
              >
                Visit Live Site <ExternalLink size={18} />
              </a>

              <div className="bg-[#0B1628] p-6 rounded-2xl text-center">
                <p className="text-white/80 text-sm mb-3">Need a website like this?</p>
                <a
                  href="https://wa.me/254703823398?text=Hi%20Imperial%20Enterprise%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20a%20website%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="whatsapp-cta-case-study"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  WhatsApp Us for a Quote
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
