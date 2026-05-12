export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1628] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Imperial Enterprise" className="h-8 object-contain" />
              <span className="font-bold text-xl tracking-tight">Imperial Enterprise</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-xs text-sm">
              Nairobi's trusted web design agency. We build high-performing digital solutions across East Africa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('projects')} className="text-white/60 hover:text-white transition-colors text-sm font-medium">Projects</button></li>
              <li><button onClick={() => scrollTo('services')} className="text-white/60 hover:text-white transition-colors text-sm font-medium">Services</button></li>
              <li><button onClick={() => scrollTo('testimonials')} className="text-white/60 hover:text-white transition-colors text-sm font-medium">Testimonials</button></li>
              <li><button onClick={() => scrollTo('contact')} className="text-white/60 hover:text-white transition-colors text-sm font-medium">Contact</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/60 text-sm font-medium">
              <li><a href="tel:+254703823398" className="hover:text-white transition-colors">+254 703 823 398</a></li>
              <li><a href="mailto:info@imperialenterprise.co.ke" className="hover:text-white transition-colors">info@imperialenterprise.co.ke</a></li>
              <li><a href="https://imperialenterprise.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">imperialenterprise.co.ke</a></li>
              <li className="pt-2">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2025 Imperial Enterprise. All rights reserved.
          </p>
          <a href="https://imperialenterprise.co.ke" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-xs font-medium">
            imperialenterprise.co.ke
          </a>
        </div>
      </div>
    </footer>
  );
}