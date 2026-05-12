import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import NotFound from "./not-found";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col w-full bg-background">
      <Helmet>
        <title>{project.name} Case Study | Imperial Enterprise</title>
        <meta name="description" content={`Case study for ${project.name}: ${project.description}`} />
      </Helmet>

      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6 -ml-4 hover:bg-transparent hover:text-primary">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
              </Link>
            </Button>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary">{project.industry}</Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-foreground">{project.name}</h1>
              </div>
              <Button asChild size="lg" className="shrink-0">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-border bg-card mb-16 aspect-video max-h-[70vh] w-full shadow-2xl">
            <img 
              src={project.image} 
              alt={`${project.name} full screenshot`}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">The Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Key Features Implemented</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-6 md:p-8 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground">Results Achieved</h3>
                <ul className="space-y-4">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0"></div>
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-6 md:p-8 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="secondary" className="bg-background text-foreground">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}