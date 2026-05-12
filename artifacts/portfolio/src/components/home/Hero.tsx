import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Hero() {
  return (
    <section className="bg-white pt-12 pb-0 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-8">
            <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Kenya's Digital Growth Partner
            </span>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0B1628] leading-tight">
              We Build Websites That<br />
              <span className="text-blue-600">Grow African Businesses</span>
            </h1>
          </div>

          <div className="bg-[#0B1628] rounded-3xl p-5 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
                <img src="/logo.png" alt="Imperial Enterprise logo" className="h-4 object-contain" />
                <span className="text-white/50 text-xs">imperialenterprise.co.ke — Our Work</span>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
              {projects.map((p, i) => (
                <motion.a
                  key={p.slug}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`hero-project-${p.slug}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="block rounded-xl overflow-hidden aspect-[16/10] bg-slate-800 group relative"
                >
                  <img
                    src={p.image}
                    alt={`${p.name} website screenshot`}
                    loading={i < 3 ? "eager" : "lazy"}
                    width={640}
                    height={400}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0B1628]/0 group-hover:bg-[#0B1628]/50 transition-all duration-300 rounded-xl flex items-end p-3">
                    <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 px-3 py-1 rounded-full">
                      {p.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <p className="text-white/30 text-xs text-center mt-4">
              9 live client websites — click any to visit
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
