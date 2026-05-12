import { motion } from "framer-motion";
import { Link } from "wouter";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export function CaseStudyHighlight() {
  const highlight = projects.find(p => p.slug === "resource-kenya");

  if (!highlight) return null;

  return (
    <section className="py-24 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
              Featured Case Study
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">{highlight.name}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {highlight.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                <p className="text-muted-foreground">{highlight.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">The Solution</h4>
                <p className="text-muted-foreground">{highlight.solution}</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">Results</h4>
              <ul className="space-y-2">
                {highlight.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild size="lg" className="font-medium">
              <Link href={`/projects/${highlight.slug}`}>
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted aspect-[4/3] lg:aspect-[3/4]">
              <img 
                src={highlight.image} 
                alt={`${highlight.name} showcase`}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}