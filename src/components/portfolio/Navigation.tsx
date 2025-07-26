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
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Animated Profile Photo with Tagline */}
          <div className={`transition-all duration-1000 ease-out transform ${
            isInHero 
              ? 'opacity-0 scale-0 translate-x-[-150px] translate-y-8 rotate-180' 
              : 'opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0'
          }`}>
            <button
              onClick={() => scrollToSection('hero')}
              className="group relative overflow-hidden flex items-center gap-5 p-4 pr-8 rounded-3xl bg-gradient-to-r from-primary/15 to-accent/15 hover:from-primary/30 hover:to-accent/30 transition-all duration-1000 hover:scale-115 hover:shadow-glow border-2 border-primary/25 hover:border-primary/60 backdrop-blur-xl shadow-elegant"
            >
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-16 h-16 rounded-2xl object-cover border-3 border-primary/60 group-hover:border-accent transition-all duration-1000 group-hover:scale-125 shadow-xl group-hover:shadow-glow group-hover:rotate-6"
                />
                {/* Multiple animated rings */}
                <div className="absolute inset-0 rounded-2xl border-3 border-accent/40 animate-pulse"></div>
                <div className="absolute inset-[-4px] rounded-2xl border-2 border-primary/20 animate-ping"></div>
                {/* Enhanced hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
                {/* Corner accent */}
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-accent to-primary rounded-full opacity-80 animate-ping group-hover:animate-pulse"></div>
              </div>
              
              {/* Enhanced tagline */}
              <div className={`transition-all duration-1000 delay-200 ${
                isInHero ? 'opacity-0 translate-x-[-50px] scale-75 rotate-12' : 'opacity-100 translate-x-0 scale-100 rotate-0'
              }`}>
                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-all duration-700 leading-tight whitespace-nowrap bg-gradient-to-r from-primary via-accent to-primary bg-clip-text group-hover:text-transparent animate-fade-in">
                  Tuning AI to think indic tongues
                </span>
              </div>
              
              {/* Enhanced hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl"></div>
              
              {/* Enhanced shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1200 ease-out rounded-3xl"></div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-2 left-4 w-1 h-1 bg-accent rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-3 right-6 w-1 h-1 bg-primary rounded-full animate-bounce delay-300"></div>
              </div>
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