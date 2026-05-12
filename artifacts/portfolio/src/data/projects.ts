export interface Project {
  slug: string;
  url: string;
  industry: string;
  category: string;
  name: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  tech: string[];
  image: string;
}

export const projects: Project[] = [
  {
    slug: "mavada-technologies",
    url: "https://mavadatechnologies.co.ke",
    industry: "Corporate / Technology",
    category: "Corporate",
    name: "Mavada Technologies",
    description: "A sleek corporate website for a technology solutions company, showcasing services, team, and innovation.",
    challenge: "Mavada needed a professional digital presence to attract enterprise clients in the competitive tech space.",
    solution: "Built a full-featured corporate website with modern design, services pages, team profiles, and contact system.",
    features: ["Responsive multi-page design", "Service showcase pages", "Team profiles section", "Contact & inquiry forms", "SEO optimization", "Fast loading performance"],
    results: ["Professional brand presence established", "Increased organic traffic by 40%", "Client inquiry rate improved significantly"],
    tech: ["WordPress", "Elementor", "SEO", "Custom CSS"],
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fmavadatechnologies.co.ke?w=1280&h=800"
  },
  {
    slug: "resource-kenya",
    url: "https://resourcekenya.com",
    industry: "Consulting / Management",
    category: "Consulting",
    name: "Resource Management International Africa",
    description: "A sophisticated multi-page consultancy website projecting authority and attracting major corporate contracts.",
    challenge: "RMIA needed to project credibility and institutional authority to attract major corporate and NGO consulting contracts.",
    solution: "Delivered a sophisticated multi-page consultancy website with service architecture, team bios, and inquiry forms.",
    features: ["Multi-page service structure", "Executive team profiles", "Publications & resources", "Client inquiry forms", "Case study showcase", "SEO optimization"],
    results: ["Positioned as top-tier consultancy", "Increased proposal inquiries", "Improved institutional brand trust"],
    tech: ["WordPress", "Elementor", "SEO", "Custom CSS", "Contact Forms"],
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fresourcekenya.com?w=1280&h=800"
  },
  {
    slug: "redwood-bliss",
    url: "https://redwoodbliss.com",
    industry: "Hospitality / Lifestyle",
    category: "Hospitality",
    name: "Redwood Bliss Spa & Luxury Hotel",
    description: "An elegant luxury hotel and spa website combining cinematic visuals with seamless booking experiences.",
    challenge: "Redwood Bliss needed a sophisticated online presence matching their premium international brand positioning.",
    solution: "Created a visually rich lifestyle website with stunning storytelling, brand identity reinforcement, and international appeal.",
    features: ["Visual storytelling design", "Brand identity showcase", "International-facing content", "Premium service display", "Contact & inquiry section", "SEO optimization"],
    results: ["Premium brand positioning achieved", "International audience reached", "Visual identity strengthened online"],
    tech: ["WordPress", "Elementor", "Custom CSS", "SEO", "Brand Design"],
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fredwoodbliss.com?w=1280&h=800"
  },
  {
    slug: "soul-internet",
    url: "https://soul-internet.com",
    industry: "ISP / Technology",
    category: "ISP/Tech",
    name: "Soul Internet",
    description: "A dynamic ISP website showcasing packages, coverage areas, and streamlined customer onboarding.",
    challenge: "Soul Internet needed a website that clearly communicated packages and made it easy for customers to sign up.",
    solution: "Designed a comprehensive ISP website with package comparison tables, coverage maps, and customer onboarding flow.",
    features: ["Package pricing tables", "Coverage area information", "Customer sign-up flow", "Support portal", "Mobile-first design", "Local SEO"],
    results: ["Online signups increased", "Better customer self-service", "Reduced support call volume"],
    tech: ["WordPress", "Elementor", "WooCommerce", "SEO"],
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fsoul-internet.com?w=1280&h=800"
  },
  {
    slug: "peprotech-learning",
    url: "https://peprotechlearning.co.ke",
    industry: "Training / Education",
    category: "Education",
    name: "Peprotech Learning",
    description: "An e-learning platform website presenting professional courses and simplifying enrollment across East Africa.",
    challenge: "Peprotech needed a platform that presented their courses professionally and made enrollment simple for students.",
    solution: "Built an education-focused website with course listings, enrollment forms, trainer profiles, and learning paths.",
    features: ["Course catalog & listings", "Student enrollment system", "Trainer profiles", "Certificate program showcase", "Blog & resources", "Education SEO"],
    results: ["Student enrollment doubled", "Better course visibility online", "Improved trust through professional design"],
    tech: ["WordPress", "Elementor", "SEO", "Learning Management"],
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fpeprotechlearning.co.ke?w=1280&h=800"
  },
  {
    slug: "chichi-exim",
    url: "https://chichiexim.com",
    industry: "Engineering / Trade",
    category: "Trade",
    name: "CHICHI EXIM Engineering",
    description: "A professional engineering and trade export website connecting African products with global buyers.",
    challenge: "CHICHI EXIM needed to reach international buyers and establish credibility as a reliable African exporter.",
    solution: "Developed a trade-focused website with product catalog, export capabilities, and international contact options.",
    features: ["Product catalog & categories", "Export capabilities section", "International contact forms", "Trade compliance information", "Company credibility page", "Export SEO"],
    results: ["Reached international buyers", "Professional credibility established", "New trade inquiries from abroad"],
    tech: ["WordPress", "Elementor", "SEO", "WooCommerce", "Custom CSS"],
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fchichiexim.com?w=1280&h=800"
  },
  {
    slug: "anthony-gatune-foundation",
    url: "https://anthonygatunefoundation.org",
    industry: "NGO / Foundation",
    category: "NGO",
    name: "Anthony Gatune Foundation",
    description: "A mission-driven NGO website helping the foundation attract donors, volunteers, and tell its impact story.",
    challenge: "The foundation needed a website communicating their impact clearly and making it easy for supporters to get involved.",
    solution: "Built a compelling NGO website with impact statistics, program descriptions, donation pathways, and story-first narrative.",
    features: ["Impact statistics display", "Program & initiative pages", "Donation call-to-action", "Volunteer sign-up forms", "Photo gallery", "NGO SEO"],
    results: ["Increased online donations", "More volunteer registrations", "Better storytelling for grant applications"],
    tech: ["WordPress", "Elementor", "SEO", "Donation Integration"],
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fanthonygatunefoundation.org?w=1280&h=800"
  },
  {
    slug: "imperial-royal-mabati",
    url: "https://imperialroyalmabati.co.ke",
    industry: "Manufacturing / Construction",
    category: "Corporate",
    name: "Imperial Royal Mabati",
    description: "A bold corporate website for a roofing materials manufacturer, showcasing products and driving trade inquiries.",
    challenge: "Imperial Royal Mabati needed a strong online presence to compete for construction and roofing contracts across Kenya.",
    solution: "Built a product-forward corporate site with a complete product catalog, specifications, and dealer inquiry system.",
    features: ["Product catalog with specs", "Dealer inquiry forms", "Product comparison tables", "Distribution network info", "Gallery of installations", "Construction SEO"],
    results: ["Increased dealer inquiries", "Better product visibility", "Expanded distribution reach"],
    tech: ["WordPress", "Elementor", "SEO", "Custom CSS", "WooCommerce"],
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fimperialroyalmabati.co.ke?w=1280&h=800"
  },
  {
    slug: "juba-raha-paradise-hotel",
    url: "https://jrparadisehotel.com",
    industry: "Hospitality",
    category: "Hospitality",
    name: "Juba Raha Paradise Hotel",
    description: "A luxury hotel website designed to showcase rooms, amenities, and drive direct bookings for a premium property.",
    challenge: "Juba Raha Paradise Hotel needed a stunning website that would convert visitors into direct bookings.",
    solution: "Created an elegant hospitality website with room galleries, amenity showcases, and direct booking CTAs.",
    features: ["Luxury room gallery", "Amenities showcase", "Direct booking CTA", "Restaurant & facilities", "Location & contact info", "Mobile-optimized"],
    results: ["Direct bookings increased", "Reduced OTA reliance", "Stronger brand presence online"],
    tech: ["WordPress", "Elementor", "Custom CSS", "SEO", "Booking Integration"],
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fjrparadisehotel.com?w=1280&h=800"
  }
];

export const categories = ["All", "Corporate", "Consulting", "Hospitality", "Education", "NGO", "Trade", "ISP/Tech"];