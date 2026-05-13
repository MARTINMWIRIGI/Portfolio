export default function Footer() {
  return (
    <footer className="bg-[#0B1628] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div className="max-w-sm">
            <p className="text-white/60 text-sm leading-relaxed">
              Nairobi's trusted web design &amp; SEO agency — building high-performing digital solutions for businesses across East Africa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3 text-white/80 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-1.5 text-white/60 text-sm font-medium">
              <li><a href="tel:+254703823398" className="hover:text-white transition-colors">+254 703 823 398</a></li>
              <li><a href="mailto:info@portfolio.imperialenterprise.co.ke" className="hover:text-white transition-colors">info@portfolio.imperialenterprise.co.ke</a></li>
              <li><a href="https://portfolio.imperialenterprise.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">portfolio.imperialenterprise.co.ke</a></li>
              <li className="pt-1">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <p className="text-white/30 text-xs text-center">
            © 2025 Imperial Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
