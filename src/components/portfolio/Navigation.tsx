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
          <div className={`transition-all duration-1000 ease-out transform ${
            isInHero 
              ? 'opacity-0 scale-0 translate-x-[-150px] translate-y-8 rotate-45 blur-sm' 
              : 'opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0 blur-0'
          }`}>
            <button
              onClick={() => scrollToSection('hero')}
              className="group relative overflow-hidden flex items-center gap-4 p-3 pr-5 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/25 hover:to-accent/25 transition-all duration-700 hover:scale-110 hover:shadow-glow border border-primary/20 hover:border-primary/60 backdrop-blur-lg shadow-xl"
            >
              {/* Rotating ring effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-gradient-primary opacity-30 animate-spin"></div>
              
              <div className="relative group-hover:animate-pulse">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-12 h-12 rounded-2xl object-cover border-2 border-primary/50 group-hover:border-accent transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 shadow-lg"
                />
                {/* Multiple animated rings */}
                <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-2xl border border-primary/40 animate-pulse delay-300"></div>
                
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-accent rounded-full opacity-70 animate-bounce delay-100"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-primary rounded-full opacity-60 animate-bounce delay-300"></div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-30 transition-all duration-700 blur-sm"></div>
              </div>
              
              {/* Enhanced Tagline */}
              <div className={`transition-all duration-1000 delay-200 ${
                isInHero ? 'opacity-0 translate-x-[-40px] scale-75 rotate-6' : 'opacity-100 translate-x-0 scale-100 rotate-0'
              }`}>
                <span className="text-sm font-bold text-foreground group-hover:text-transparent transition-all duration-500 leading-tight whitespace-nowrap bg-gradient-to-r from-primary via-accent to-primary bg-clip-text group-hover:bg-size-200 group-hover:animate-shimmer">
                  Tuning AI to think indic tongues
                </span>
              </div>
              
              {/* Enhanced hover effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-accent/8 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>
              
              {/* Advanced shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-3xl"></div>
              
              {/* Pulsing border */}
              <div className="absolute inset-0 rounded-3xl border border-accent/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
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