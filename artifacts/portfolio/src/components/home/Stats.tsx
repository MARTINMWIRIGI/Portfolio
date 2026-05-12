import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Stats() {
  const trustItems = [
    "Websites built on proven WordPress & modern frameworks",
    "SEO-first approach that gets clients found on Google",
    "Every project backed by personal support and care",
    "Working with clients from Kenya, South Sudan, and beyond"
  ];

  return (
    <section className="py-24 bg-[#0B1628] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <span className="text-blue-400 font-semibold text-sm tracking-wide mb-3 block">— Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Delivering Results for East African Businesses</h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We don't just build websites; we build digital assets that drive growth. Our track record speaks for itself.
            </p>
            
            <ul className="space-y-4 mb-10">
              {trustItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 mt-1 shrink-0" size={20} />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-colors">
                Start Your Project
              </a>
              <a href="https://imperialenterprise.co.ke" target="_blank" rel="noopener noreferrer" className="border-2 border-white/20 text-white hover:bg-white hover:text-[#0B1628] font-semibold px-8 py-4 rounded-full transition-colors">
                imperialenterprise.co.ke
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "7", label: "Industries Served" },
                { num: "100%", label: "Client Satisfaction" },
                { num: "5+", label: "Years of Excellence" },
                { num: "East Africa", label: "Region Served" }
              ].map((stat, i) => (
                <div key={i} className="bg-[#162033] rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                  <span className="text-5xl font-extrabold text-blue-500 mb-2">{stat.num}</span>
                  <span className="text-white/60 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}