import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
            We Build <span className="text-primary">High-Performing</span> Websites for African Businesses & Organizations
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Imperial Enterprise — Your digital growth partner. From corporate sites to NGO platforms, we deliver results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" onClick={scrollToProjects} className="w-full sm:w-auto font-medium h-12 px-8">
              View Our Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto font-medium h-12 px-8 border-border hover:bg-card">
              <a href="https://wa.me/254700000000?text=Hi%20Imperial%20Enterprise%2C%20I%27d%20like%20a%20free%20quote" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" /> Get a Free Quote
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-5xl border-y border-border py-8 bg-background/50 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-foreground">8+</span>
            <span className="text-sm text-muted-foreground mt-1 font-medium">Projects Delivered</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-foreground">5+</span>
            <span className="text-sm text-muted-foreground mt-1 font-medium">Industries Served</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-foreground">100%</span>
            <span className="text-sm text-muted-foreground mt-1 font-medium">Client Satisfaction</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-foreground">Kenya</span>
            <span className="text-sm text-muted-foreground mt-1 font-medium">& Beyond</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}