import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full h-screen overflow-hidden bg-[#0B1628] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full flex items-center justify-center"
      >
        <img
          src="/hero-banner.png"
          alt="Kenya's Leading Web Design & SEO Agency — Imperial Enterprise Nairobi"
          className="w-full h-full object-contain block"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
    </section>
  );
}
