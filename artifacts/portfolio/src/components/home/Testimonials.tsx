import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    company: "Resource Kenya (RMIA)",
    quote: "Imperial Enterprise delivered a highly professional corporate website that perfectly captures our institutional authority. The new inquiry forms have streamlined our consultancy proposals significantly.",
    author: "Director of Operations"
  },
  {
    company: "JR Paradise Hotel",
    quote: "Our new website is visually stunning. It showcases our resort beautifully and has led to a direct increase in bookings, reducing our reliance on third-party platforms.",
    author: "General Manager"
  },
  {
    company: "Anthony Gatune Foundation",
    quote: "The platform they built helped us communicate our mission clearly. We've seen a noticeable uptick in online donations and volunteer registrations since launch.",
    author: "Program Coordinator"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Client Success Stories</h2>
          <p className="text-muted-foreground text-lg">Hear from the businesses and organizations we've helped grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background border-border relative overflow-hidden">
                <div className="absolute top-4 right-4 text-muted opacity-20">
                  <Quote size={60} />
                </div>
                <CardContent className="p-8 flex flex-col h-full justify-between relative z-10">
                  <p className="text-foreground text-lg italic mb-8">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-foreground">{t.author}</p>
                    <p className="text-sm text-primary">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}