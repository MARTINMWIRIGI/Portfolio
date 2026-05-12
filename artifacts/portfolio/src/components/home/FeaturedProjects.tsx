import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/data/projects";
import { Link } from "wouter";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-12 text-center">
          <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">— Our Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1628] mb-8">Featured Projects</h2>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === category 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-white text-[#0B1628] font-bold px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Visit Live Site &rarr;
                    </a>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1628] mb-2">{project.name}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <Link href={`/projects/${project.slug}`} className="flex-1 text-center border-2 border-slate-200 text-slate-700 hover:border-[#0B1628] hover:text-[#0B1628] font-semibold py-2.5 rounded-xl transition-colors text-sm">
                      View Case Study
                    </Link>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-blue-600 text-white hover:bg-blue-700 font-semibold py-2.5 rounded-xl transition-colors text-sm">
                      Visit Site
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}