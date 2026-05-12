import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Imperial Enterprise Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl">Imperial Enterprise</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Your digital growth partner. We build high-performing websites for African businesses, NGOs, and organizations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Nairobi, Kenya</li>
              <li><a href="mailto:info@imperialenterprise.co.ke" className="hover:text-primary transition-colors">info@imperialenterprise.co.ke</a></li>
              <li><a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+254 700 000 000</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Imperial Enterprise. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}