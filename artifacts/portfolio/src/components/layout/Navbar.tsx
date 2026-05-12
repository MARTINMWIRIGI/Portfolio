import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <img src="/logo.png" alt="Imperial Enterprise" className="h-8 md:h-10 w-auto" />
          <span className="font-bold text-lg hidden sm:block">Imperial Enterprise</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("hero")} className="text-sm font-medium hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollToSection("projects")} className="text-sm font-medium hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">Contact</button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="https://wa.me/254700000000?text=Hi%20Imperial%20Enterprise%2C%20I%27d%20like%20a%20free%20quote" target="_blank" rel="noopener noreferrer">
              Get a Free Quote
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <button onClick={() => scrollToSection("hero")} className="text-xl font-medium">Home</button>
          <button onClick={() => scrollToSection("services")} className="text-xl font-medium">Services</button>
          <button onClick={() => scrollToSection("projects")} className="text-xl font-medium">Projects</button>
          <button onClick={() => scrollToSection("testimonials")} className="text-xl font-medium">About</button>
          <button onClick={() => scrollToSection("contact")} className="text-xl font-medium">Contact</button>
          <Button asChild size="lg" className="mt-4">
            <a href="https://wa.me/254700000000?text=Hi%20Imperial%20Enterprise%2C%20I%27d%20like%20a%20free%20quote" target="_blank" rel="noopener noreferrer">
              Get a Free Quote
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}