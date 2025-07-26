import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import techBg from "@/assets/tech-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${techBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 min-h-screen pt-20 lg:pt-0">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-float order-1 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
              <img
                src={profilePhoto}
                alt="Chandan R - AI & Data Science Engineer"
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary shadow-glow relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in order-2 lg:order-2 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CHANDAN RAMESH
              </span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-accent mb-6 lg:mb-8 font-medium">
              Gen AI Engineer
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-accent/80 mb-8 lg:mb-10 font-medium italic leading-relaxed">
              Tuning AI to think in Indic tongues.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                View My Work
                <ArrowDown className="ml-2 animate-bounce" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links - Enhanced with Professional Hover Effects */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
              {[
                { href: "https://linkedin.com/in/chandan-r-7a8bb8237", icon: Linkedin, label: "LinkedIn", color: "hover:bg-[#0077B5]" },
                { href: "https://github.com/chandan1708/chandan1708.github.io", icon: Github, label: "GitHub", color: "hover:bg-[#333]" },
                { href: "https://medium.com/@chandan17.ramesh", label: "Medium", color: "hover:bg-[#00ab6c]" },
                { href: "https://medial.app/user/chandan-ramesh-1d3eecebcf8a5", label: "Medial", color: "hover:bg-primary" },
                { href: "mailto:chandan17.ramesh@gmail.com", icon: Mail, label: "Email", color: "hover:bg-accent" }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`group relative p-3 bg-background/20 backdrop-blur-sm border border-border/30 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-elegant`}
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                  title={social.label}
                >
                  {social.icon ? (
                    <social.icon className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                  ) : social.label === "Medium" ? (
                    <svg className="w-5 h-5 text-foreground group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-foreground group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  )}
                  
                  {/* Elegant tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                    <div className="bg-background/90 backdrop-blur-sm border border-border/30 rounded-lg px-2 py-1">
                      <span className="text-xs font-medium text-foreground">{social.label}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;