import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      company: "Resource Management International Africa",
      quote: "Imperial Enterprise transformed our online presence completely. Our website now attracts the corporate clients we were missing. Professional, fast, and truly understood our brand.",
      author: "David M."
    },
    {
      company: "Juba Raha Paradise Hotel",
      quote: "Our hotel website went from embarrassing to stunning. Guests compliment us on it regularly and our direct bookings have increased significantly.",
      author: "Manager"
    },
    {
      company: "Anthony Gatune Foundation",
      quote: "Working with Imperial Enterprise was seamless. They built our NGO website on time, on budget, and it has genuinely helped us connect with more donors and volunteers.",
      author: "Anthony G."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">— Client Feedback</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1628]">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-6 text-[#F59E0B]">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 text-lg mb-8 italic">"{t.quote}"</p>
              <div>
                <p className="font-bold text-[#0B1628]">{t.author}</p>
                <p className="text-sm text-slate-500 font-medium">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}