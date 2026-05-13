import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full"
      >
        <img
          src="/hero-banner.png"
          alt="Kenya's Leading Web Design & SEO Agency — Imperial Enterprise Nairobi"
          className="w-full h-full object-cover object-center block"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
    </section>
  );
}
