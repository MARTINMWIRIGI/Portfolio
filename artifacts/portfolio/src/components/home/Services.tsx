import { motion } from "framer-motion";
import { Monitor, Code, Search, Smartphone, ShoppingCart, Globe, Briefcase, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { icon: Monitor, title: "Custom Website Design", description: "Bespoke designs tailored to your brand identity." },
  { icon: Code, title: "WordPress Development", description: "Robust and scalable WordPress solutions." },
  { icon: Search, title: "SEO Optimization", description: "Rank higher and drive organic traffic." },
  { icon: Smartphone, title: "Responsive Web Design", description: "Flawless experiences across all devices." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", description: "Online stores that convert visitors to buyers." },
  { icon: Globe, title: "NGO & Nonprofit Websites", description: "Platforms that communicate impact and attract donors." },
  { icon: Briefcase, title: "Corporate Branding Sites", description: "Professional presence for modern enterprises." },
  { icon: Wrench, title: "Website Maintenance", description: "Ongoing support to keep your site secure and updated." }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Services Offered</h2>
          <p className="text-muted-foreground text-lg">Comprehensive digital solutions to elevate your business online.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}