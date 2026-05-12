import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { projects } from "@/data/projects";

export default function Hero() {
  const previewProjects = projects.slice(0, 6);
  
  return (
    <section className="min-h-[100dvh] bg-white flex items-center pt-12 pb-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            Kenya's Digital Growth Partner
          </span>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0B1628] leading-tight mb-6">
            We Build Websites That<br />
            <span className="text-blue-600">Grow African Businesses</span>
          </h1>
          <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
            Imperial Enterprise is Nairobi's trusted web design agency. From corporate platforms to NGO websites, hospitality portals to ISP systems — we deliver high-performing digital solutions across East Africa.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" data-testid="cta-view-work"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors">
              View Our Work <ArrowRight size={18} />
            </a>
            <a href="https://wa.me/254703823398?text=Hi%20Imperial%20Enterprise%2C%20I%27d%20like%20a%20free%20quote"
              target="_blank" rel="noopener noreferrer" data-testid="cta-whatsapp"
              className="inline-flex items-center gap-2 border-2 border-[#0B1628] text-[#0B1628] hover:bg-[#0B1628] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {[["9+", "Projects Delivered"], ["7", "Industries Served"], ["100%", "Client Satisfaction"]].map(([num, label]) => (
              <div key={label} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-5 py-2">
                <span className="font-bold text-blue-600 text-sm">{num}</span>
                <span className="text-slate-600 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Right - Project Mosaic */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="bg-[#0B1628] rounded-3xl p-5 shadow-2xl">
            {/* Browser bar */}
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400"/><div className="w-3 h-3 rounded-full bg-yellow-400"/><div className="w-3 h-3 rounded-full bg-green-400"/></div>
              <div className="flex-1 bg-white/10 rounded-lg px-3 py-1 flex items-center gap-2">
                <img src="/logo.png" alt="Imperial Enterprise" className="h-4 object-contain" />
                <span className="text-white/50 text-xs">imperialenterprise.co.ke</span>
              </div>
            </div>
            {/* 3x2 grid of screenshots */}
            <div className="grid grid-cols-3 gap-2">
              {previewProjects.map((p) => (
                <a key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="block rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 group relative">
                  <img src={p.image} alt={p.name} loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300 rounded-xl" />
                </a>
              ))}
            </div>
            <p className="text-white/40 text-xs text-center mt-4">9 live client websites across East Africa</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}