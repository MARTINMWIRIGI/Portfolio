import { motion } from "framer-motion";
import { Globe, Code2, Search, ShoppingCart, Smartphone, Megaphone, Settings, PenTool } from "lucide-react";

export default function Services() {
  const services = [
    { icon: PenTool, title: "Custom Website Design", description: "Stunning, brand-aligned websites that make an instant impression." },
    { icon: Code2, title: "WordPress Development", description: "Powerful WordPress builds that are fast, secure, and easy to manage." },
    { icon: Search, title: "SEO Optimization", description: "Rank higher on Google and drive organic traffic that converts." },
    { icon: ShoppingCart, title: "E-Commerce Solutions", description: "WooCommerce stores that look great and sell even better." },
    { icon: Smartphone, title: "Responsive Web Design", description: "Sites that look perfect on every screen — desktop, tablet, and mobile." },
    { icon: Globe, title: "NGO & Nonprofit Websites", description: "Mission-driven platforms that tell your story and attract donors." },
    { icon: Megaphone, title: "Corporate Branding Sites", description: "Authority-building corporate websites that win enterprise clients." },
    { icon: Settings, title: "Website Maintenance", description: "Ongoing support, updates, and monitoring to keep your site healthy." }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">— What We Do</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1628]">Services We Provide</h2>
          </div>
          <a href="#contact" className="inline-flex border-2 border-slate-200 text-slate-700 hover:border-[#0B1628] hover:text-[#0B1628] font-semibold px-6 py-3 rounded-full transition-colors shrink-0">
            View All Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0B1628] mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-6 flex-grow">{service.description}</p>
                <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center gap-1 text-sm">
                  Learn more &rarr;
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}