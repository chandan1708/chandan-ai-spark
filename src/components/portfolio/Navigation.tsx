import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
          {/* Interactive Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group relative overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            <div className="flex items-center gap-3">
              {/* Animated Logo Icon */}
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center relative overflow-hidden">
                  {/* Brain/AI Icon */}
                  <svg 
                    className="w-5 h-5 text-white transition-transform group-hover:scale-110" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.1.4 2.1 1 2.8L7 12l1.5 2.8c-.6.7-1 1.7-1 2.8 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-1.1-.4-2.1-1-2.8L17 12l-1.5-2.8c.6-.7 1-1.7 1-2.8C16.5 4 14.5 2 12 2zm0 2c1.4 0 2.5 1.1 2.5 2.5S13.4 9 12 9s-2.5-1.1-2.5-2.5S10.6 4 12 4zm-3 8c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5S9 12.8 9 12zm6 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5S15 12.8 15 12zm-3 8c-1.4 0-2.5-1.1-2.5-2.5S10.6 15 12 15s2.5 1.1 2.5 2.5S13.4 20 12 20z"/>
                  </svg>
                  {/* Rotating ring */}
                  <div className="absolute inset-0 border-2 border-white/30 rounded-lg animate-pulse"></div>
                </div>
                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500"></div>
              </div>
              
              {/* Text */}
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold bg-gradient-primary bg-clip-text text-transparent leading-none">
                  CR
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors leading-none">
                  AI Engineer
                </span>
              </div>
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </button>

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