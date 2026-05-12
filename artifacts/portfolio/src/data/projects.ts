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
    url: "https://mavadatechnologies.com",
    industry: "Corporate / Technology",
    category: "Corporate",
    name: "Mavada Technologies",
    description: "A sleek corporate website for a technology solutions company, featuring their services, team, and innovation story.",
    challenge: "Mavada needed a professional digital presence to showcase their technology services and attract enterprise clients.",
    solution: "Built a full-featured corporate website with modern design, services pages, team profiles, and an integrated contact system.",
    features: ["Responsive multi-page design", "Service showcase pages", "Team profiles section", "Contact & inquiry forms", "SEO optimization", "Fast loading performance"],
    results: ["Professional brand presence established", "Increased organic traffic by 40%", "Client inquiry rate improved significantly"],
    tech: ["WordPress", "Elementor", "SEO", "Custom CSS"],
    image: "/projects/mavada-technologies.png"
  },
  {
    slug: "soul-internet",
    url: "https://soulinternet.co.ke",
    industry: "ISP / Technology",
    category: "ISP/Tech",
    name: "Soul Internet",
    description: "A dynamic ISP provider website for a Kenyan internet service company, showcasing packages, coverage maps, and customer portal access.",
    challenge: "Soul Internet needed a website that clearly communicated their coverage areas, packages, and made it easy for customers to sign up.",
    solution: "Designed and developed a comprehensive ISP website with package comparison tables, coverage maps, and a customer onboarding flow.",
    features: ["Package pricing tables", "Coverage area information", "Customer sign-up flow", "Support & contact portal", "Mobile-first responsive design", "SEO for local ISP keywords"],
    results: ["Online signups increased", "Better customer self-service", "Reduced support call volume"],
    tech: ["WordPress", "Elementor", "WooCommerce", "SEO"],
    image: "/projects/soul-internet.png"
  },
  {
    slug: "peprotech-learning",
    url: "https://peprotechlearning.com",
    industry: "Training / Education",
    category: "Education",
    name: "Peprotech Learning",
    description: "An e-learning and training platform website for a tech education company offering professional courses.",
    challenge: "Peprotech needed a platform that presented their courses professionally and made enrollment simple for students across East Africa.",
    solution: "Built an education-focused website with course listings, enrollment forms, trainer profiles, and a clear learning path structure.",
    features: ["Course catalog & listings", "Student enrollment system", "Trainer/instructor profiles", "Certificate program showcase", "Blog & resources section", "SEO for education keywords"],
    results: ["Student enrollment doubled", "Better course visibility online", "Improved trust through professional presentation"],
    tech: ["WordPress", "Elementor", "SEO", "Learning Management"],
    image: "/projects/peprotech-learning.png"
  },
  {
    slug: "resource-kenya",
    url: "https://resourcekenya.com",
    industry: "Consulting / Management",
    category: "Consulting",
    name: "Resource Kenya (RMIA)",
    description: "A professional corporate website for Resource Kenya (RMIA), a management and institutional advancement consultancy.",
    challenge: "RMIA needed to project credibility and institutional authority to attract major corporate and NGO consulting contracts.",
    solution: "Delivered a sophisticated multi-page consultancy website with strong service architecture, team bios, case listings, and inquiry forms.",
    features: ["Multi-page service structure", "Executive team profiles", "Publications & resources section", "Client inquiry & proposal forms", "Case study showcase", "SEO optimization for consulting keywords"],
    results: ["Positioned as top-tier consultancy", "Increased proposal inquiries", "Improved institutional brand trust"],
    tech: ["WordPress", "Elementor", "SEO", "Custom CSS", "Contact Forms"],
    image: "/projects/resource-kenya.png"
  },
  {
    slug: "jr-paradise-hotel",
    url: "https://jrparadisehotel.com",
    industry: "Hospitality",
    category: "Hospitality",
    name: "JR Paradise Hotel",
    description: "A luxury hotel website for JR Paradise Hotel, designed to drive bookings and showcase the hotel's rooms, amenities, and location.",
    challenge: "JR Paradise Hotel needed a visually stunning website that would turn website visitors into direct bookings without relying solely on OTA platforms.",
    solution: "Created an elegant hospitality website with room galleries, amenity showcases, direct booking CTA, and a warm visual identity.",
    features: ["Luxury room gallery", "Amenities showcase", "Direct booking call-to-action", "Restaurant & facilities pages", "Location & contact info", "Mobile-optimized for travelers"],
    results: ["Direct bookings increased", "Reduced reliance on booking platforms", "Stronger brand presence online"],
    tech: ["WordPress", "Elementor", "Custom CSS", "SEO", "Booking Integration"],
    image: "/projects/jr-paradise-hotel.png"
  },
  {
    slug: "anthony-gatune-foundation",
    url: "https://anthonygfoundation.org",
    industry: "NGO / Foundation",
    category: "NGO",
    name: "Anthony Gatune Foundation",
    description: "A mission-driven website for the Anthony Gatune Foundation, helping the organization tell its story and attract donors and volunteers.",
    challenge: "The foundation needed a website that communicated their impact clearly and made it easy for supporters to donate and get involved.",
    solution: "Built a compelling NGO website with impact statistics, program descriptions, donation pathways, and a story-first narrative approach.",
    features: ["Impact statistics display", "Program & initiative pages", "Donation call-to-action", "Volunteer sign-up forms", "Photo gallery of activities", "SEO for NGO discovery"],
    results: ["Increased online donations", "More volunteer registrations", "Better storytelling for grant applications"],
    tech: ["WordPress", "Elementor", "SEO", "Donation Integration"],
    image: "/projects/anthony-gatune-foundation.png"
  },
  {
    slug: "chichi-exim",
    url: "https://chichiexim.com",
    industry: "Trade / Export",
    category: "Trade",
    name: "Chichi Exim",
    description: "A professional trade and export company website for Chichi Exim, showcasing their product catalog and trade capabilities.",
    challenge: "Chichi Exim needed to reach international buyers and establish credibility as a reliable African exporter.",
    solution: "Developed a trade-focused website with product catalog, export capabilities, compliance information, and international contact options.",
    features: ["Product catalog & categories", "Export capabilities section", "International contact forms", "Trade compliance information", "Company credibility page", "SEO for export keywords"],
    results: ["Reached international buyers", "Professional credibility established", "New trade inquiries from outside Kenya"],
    tech: ["WordPress", "Elementor", "SEO", "WooCommerce", "Custom CSS"],
    image: "/projects/chichi-exim.png"
  },
  {
    slug: "redwood-bliss",
    url: "https://redwoodbliss.com",
    industry: "International / Lifestyle",
    category: "Lifestyle",
    name: "Redwood Bliss",
    description: "An elegant lifestyle and international brand website for Redwood Bliss, combining luxury aesthetics with global reach.",
    challenge: "Redwood Bliss needed a sophisticated online presence that matched their premium international brand positioning.",
    solution: "Created a visually rich lifestyle website with stunning visual storytelling, brand identity reinforcement, and international appeal.",
    features: ["Visual storytelling design", "Brand identity showcase", "International-facing content", "Premium product/service display", "Contact & inquiry section", "SEO for lifestyle keywords"],
    results: ["Premium brand positioning achieved", "International audience reached", "Visual identity strengthened online"],
    tech: ["WordPress", "Elementor", "Custom CSS", "SEO", "Brand Design"],
    image: "/projects/redwood-bliss.png"
  }
];