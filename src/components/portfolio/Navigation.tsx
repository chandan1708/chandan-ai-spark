import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      setIsInHero(currentScrollY < heroHeight * 0.8); // Hide photo when 80% through hero
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Awards', id: 'awards' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Animated Profile Photo with Tagline */}
          <div className={`transition-all duration-700 ease-out transform ${
            isInHero 
              ? 'opacity-0 scale-0 translate-x-[-120px] translate-y-6 rotate-12' 
              : 'opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0'
          }`}>
            <button
              onClick={() => scrollToSection('hero')}
              className="group relative overflow-hidden flex items-center gap-2 p-1 pr-3 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/15 hover:to-accent/15 transition-all duration-500 hover:scale-105 hover:shadow-lg border border-primary/10 hover:border-primary/30 backdrop-blur-sm"
            >
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-7 h-7 rounded-full object-cover border border-primary/30 group-hover:border-primary transition-all duration-500 group-hover:scale-110"
                />
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border border-accent/20 animate-pulse"></div>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              </div>
              
              {/* Tagline */}
              <div className={`transition-all duration-700 delay-100 ${
                isInHero ? 'opacity-0 translate-x-[-30px] scale-90' : 'opacity-100 translate-x-0 scale-100'
              }`}>
                <span className="text-[11px] font-medium text-muted-foreground group-hover:text-primary transition-all duration-300 leading-tight whitespace-nowrap">
                  Tuning AI to think indic tongues
                </span>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-full"></div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors relative group overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-2 relative group overflow-hidden"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500"></span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;