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
          <div className={`transition-all duration-700 ease-in-out transform ${
            isInHero 
              ? 'opacity-0 scale-0 translate-x-[-100px] translate-y-4' 
              : 'opacity-100 scale-100 translate-x-0 translate-y-0'
          }`}>
            <button
              onClick={() => scrollToSection('hero')}
              className="group relative overflow-hidden flex items-center gap-3 px-3 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-500 hover:scale-105 hover:shadow-glow border border-primary/20 hover:border-primary/40"
            >
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Chandan R"
                  className="w-8 h-8 rounded-full object-cover border-2 border-primary/50 group-hover:border-primary transition-all duration-300"
                />
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse"></div>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              {/* Tagline */}
              <div className={`flex flex-col transition-all duration-500 ${
                isInHero ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'
              }`}>
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-none">
                  Chandan R
                </span>
                <span className="text-[10px] text-muted-foreground group-hover:text-accent transition-colors leading-none">
                  Tuning AI to think indic tongues
                </span>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
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