import { motion } from "framer-motion";
import { SiWordpress, SiElementor, SiReact, SiNextdotjs, SiTailwindcss, SiWoocommerce } from "react-icons/si";

const techStack = [
  { name: "WordPress", icon: SiWordpress, color: "#21759b" },
  { name: "Elementor", icon: SiElementor, color: "#92003B" },
  { name: "WooCommerce", icon: SiWoocommerce, color: "#96588a" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

export function TechStack() {
  return (
    <section className="py-20 bg-background overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-10">
          Powered by Industry-Leading Technology
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <tech.icon className="h-10 w-10 md:h-12 md:w-12 text-foreground" style={{ color: "currentColor" }} />
              <span className="text-xs font-medium text-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}